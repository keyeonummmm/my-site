'use client'
import { createContext, useContext, ReactNode } from 'react'

type TitleContextType = {
  title: string
  setTitle: (title: string) => void
}

const TitleContext = createContext<TitleContextType | undefined>(undefined)

export function TitleProvider({ children, value }: { children: ReactNode, value: TitleContextType }) {
  return (
    <TitleContext.Provider value={value}>
      {children}
    </TitleContext.Provider>
  )
}

export function useTitle() {
  const context = useContext(TitleContext)
  if (context === undefined) {
    throw new Error('useTitle must be used within a TitleProvider')
  }
  return context
}
