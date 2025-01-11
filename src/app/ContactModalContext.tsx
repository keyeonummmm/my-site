'use client'

import { createContext, useContext, useState, useCallback, useRef, useLayoutEffect } from 'react'

interface ContactModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined)

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const mountRef = useRef(false)
  const stateRef = useRef(false)

  // Use Layout Effect to ensure state consistency
  useLayoutEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true
      return
    }
    stateRef.current = isOpen
  }, [isOpen])

  const openModal = useCallback(() => {
    if (!stateRef.current) {
      setIsOpen(true)
      stateRef.current = true
    }
  }, [])

  const closeModal = useCallback(() => {
    if (stateRef.current) {
      setIsOpen(false)
      stateRef.current = false
    }
  }, [])

  const value = {
    isOpen,
    openModal,
    closeModal
  }

  return (
    <ContactModalContext.Provider value={value}>
      {children}
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const context = useContext(ContactModalContext)
  if (context === undefined) {
    throw new Error('useContactModal must be used within a ContactModalProvider')
  }
  return context
} 