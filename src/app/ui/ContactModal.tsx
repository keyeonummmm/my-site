'use client'

import { useEffect, useState } from 'react'
import { useContactModal } from '../ContactModalContext'

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal()
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false)
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
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-2 bg-transparent backdrop-blur-sm"
            style={{
              boxShadow: 'inset -2px -2px 6px var(--shadow-light), inset 2px 2px 6px var(--shadow-dark)'
            }}
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="p-2 bg-transparent backdrop-blur-sm"
            style={{
              boxShadow: 'inset -2px -2px 6px var(--shadow-light), inset 2px 2px 6px var(--shadow-dark)'
            }}
          />
          <button
            type="submit"
            className="p-2 hover:bg-foreground hover:text-background transition-colors"
            style={{
              boxShadow: '-2px -2px 6px var(--shadow-light), 2px 2px 6px var(--shadow-dark)'
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
} 