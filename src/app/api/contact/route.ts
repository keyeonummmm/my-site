import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Simple in-memory rate limiting
const WINDOW_SIZE = 3600000 // 1 hour in milliseconds
const MAX_REQUESTS = 5 // 5 requests per hour
const ipRequests = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const requests = ipRequests.get(ip) || []
  const recentRequests = requests.filter(time => time > now - WINDOW_SIZE)
  
  ipRequests.set(ip, recentRequests)
  
  if (recentRequests.length >= MAX_REQUESTS) {
    return true
  }
  
  recentRequests.push(now)
  return false
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'anonymous'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Size limit check
    const contentLength = parseInt(request.headers.get('content-length') || '0')
    if (contentLength > 5000) {
      return NextResponse.json(
        { error: 'Request too large' },
        { status: 413 }
      )
    }

    const { email, message } = await request.json()

    // Basic validation
    if (!email || !message || 
        !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ||
        message.length > 1000) {
      return NextResponse.json(
        { error: 'Invalid input' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `From: ${email}\n\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
} 