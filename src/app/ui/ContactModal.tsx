'use client'

import { useEffect, useState, FormEvent } from 'react'
import { useContactModal } from '../ContactModalContext'

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal()
  const [isClosing, setIsClosing] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false)
      setError('')
      setSuccess(false)
      setFormData({ email: '', message: '' })
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEsc)
    }
    
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(closeModal, 300)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSuccess(true)
      setTimeout(() => {
        handleClose()
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 dark:backdrop-brightness-25 backdrop-brightness-100 transition-all duration-300 ease-in-out backdrop-blur-[1.7px]"
        onClick={handleClose}
        style={{
          animation: isClosing ? 'modalOverlayOut 0.3s ease-in-out' : 'modalOverlayIn 0.3s ease-in-out'
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-8"
        style={{
          animation: isClosing ? 'modalOut 0.3s ease-in-out' : 'slideUp 0.3s ease-in-out',
          background: 'linear-gradient(145deg, var(--background), transparent)',
          boxShadow: `
            -8px -8px 20px var(--shadow-light),
            8px 8px 20px var(--shadow-dark),
            -20px -20px 60px var(--shadow-light),
            20px 20px 60px var(--shadow-dark)
          `,
          backdropFilter: 'blur(8px)',
          transform: 'translate(-50%, -50%) rotate(-1deg)',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className="p-2 bg-transparent backdrop-blur-sm"
            style={{
              boxShadow: 'inset -2px -2px 6px var(--shadow-light), inset 2px 2px 6px var(--shadow-dark)'
            }}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            disabled={isSubmitting}
            rows={4}
            className="p-2 bg-transparent backdrop-blur-sm"
            style={{
              boxShadow: 'inset -2px -2px 6px var(--shadow-light), inset 2px 2px 6px var(--shadow-dark)'
            }}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">Message sent successfully!</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="p-2 hover:bg-foreground hover:text-background transition-colors disabled:opacity-50"
            style={{
              boxShadow: '-2px -2px 6px var(--shadow-light), 2px 2px 6px var(--shadow-dark)'
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  )
} 