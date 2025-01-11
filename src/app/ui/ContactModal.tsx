'use client'

import { useEffect, useState, FormEvent, useCallback, useRef } from 'react'
import { useContactModal } from '../ContactModalContext'

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal()
  const [isClosing, setIsClosing] = useState(false)
  const [isMounting, setIsMounting] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })
  
  const animationLock = useRef(false)

  const handleClose = useCallback(() => {
    if (animationLock.current) return
    animationLock.current = true
    setIsClosing(true)
    setTimeout(() => {
      closeModal()
      animationLock.current = false
    }, 300)
  }, [closeModal])

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false)
      setError('')
      setSuccess(false)
      setFormData({ email: '', message: '' })
      animationLock.current = false
      
      setIsMounting(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsMounting(false)
        })
      })
    }
  }, [isOpen])

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

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    
    if (isOpen && !isClosing) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEsc)
      return () => {
        window.removeEventListener('keydown', handleEsc)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen, isClosing, handleClose])

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className={`absolute inset-0 transition-all duration-300 ease-in-out
          ${isClosing || isMounting ? 'opacity-0 backdrop-blur-none' : 'opacity-100 backdrop-blur-[1.7px]'}
          ${isClosing || isMounting ? 'dark:backdrop-brightness-100' : 'dark:backdrop-brightness-25'}
          ${isClosing || isMounting ? 'backdrop-brightness-100' : 'backdrop-brightness-100'}`}
        onClick={handleClose}
        aria-hidden="true"
      />
      <div 
        className={`absolute top-1/2 left-1/2 w-full max-w-md p-8
          transition-all duration-300 ease-in-out
          ${isClosing || isMounting ? 'opacity-0 translate-y-full' : 'opacity-100'}`}
        style={{
          background: 'linear-gradient(145deg, var(--background), transparent)',
          boxShadow: `
            -8px -8px 20px var(--shadow-light),
            8px 8px 20px var(--shadow-dark),
            -20px -20px 60px var(--shadow-light),
            20px 20px 60px var(--shadow-dark)
          `,
          backdropFilter: 'blur(8px)',
          transform: `translate(-50%, ${isClosing || isMounting ? '100%' : '-50%'}) rotate(-1deg)`,
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className="p-2 bg-transparent backdrop-blur-sm"
            style={{
              boxShadow: 'inset -2px -2px 6px var(--shadow-light), inset 2px 2px 6px var(--shadow-dark)'
            }}
            required
            aria-label="Email address"
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
            aria-label="Message"
          />
          {error && <p className="text-red-500 text-sm" role="alert">{error}</p>}
          {success && <p className="text-green-500 text-sm" role="alert">Message sent successfully!</p>}
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