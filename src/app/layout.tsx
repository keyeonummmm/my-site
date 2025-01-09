"use client"

import { timesNewRoman } from "./ui/fonts"
import "./globals.css"
import Navigation from "./navigation"
import Theme from "./ui/theme"
import { useState, useEffect } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <html lang="en" data-theme={theme}>
      <title>Chaoran Zhou</title>
      <body className={`${timesNewRoman.variable}`}>
        <div className="min-h-screen p-5 pt-5 relative">
          <Navigation />
          {children}
          <Theme theme={theme} toggleTheme={toggleTheme} />
        </div>
      </body>
    </html>
  )
}
