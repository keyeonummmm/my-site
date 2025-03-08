"use client"

import { sourceSerif } from "./ui/fonts"
import "./globals.css"
import Navigation from "./navigation"
import Theme from "./ui/theme"
import { useState } from "react"
import { TitleProvider } from "./TitleContext"
import { ContactModalProvider } from './ContactModalContext'
import ContactModal from './ui/ContactModal'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState('light')
  const [title, setTitle] = useState('')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <html lang="en" data-theme={theme}>
      <body className={`${sourceSerif.variable}`}>
        <ContactModalProvider>
          <TitleProvider value={{ title, setTitle }}>
            <div className="min-h-screen p-5 pt-5 relative">
              <Navigation />
              {children}
              <Theme theme={theme} toggleTheme={toggleTheme} />
              <ContactModal />
            </div>
          </TitleProvider>
        </ContactModalProvider>
      </body>
    </html>
  )
}
