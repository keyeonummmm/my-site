'use client'

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useTitle } from "./TitleContext"
import { useContactModal } from './ContactModalContext'

export default function Navigation() {
  const [showAboutLinks, setShowAboutLinks] = useState(false)
  const pathname = usePathname()
  const { title } = useTitle()
  const { openModal } = useContactModal()

  return (
    <nav className="flex flex-col gap-4">
      <div className="fixed top-5 left-0 right-0 flex justify-between px-20 bg-inherit z-50">
        <div className="flex gap-8">
          <Link href="/">
            <h1 className={`transition-[font-style] duration-100 font-normal ${pathname === '/' ? 'italic' : ''}`}>
              Source
            </h1>
          </Link>
          <Link 
            href="/works" 
            className={`transition-[font-style] duration-100 ${pathname === '/works' ? 'italic' : ''}`}
          >
            Works
          </Link>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setShowAboutLinks(!showAboutLinks)}
              className={`transition-[font-style] duration-100 cursor-pointer ${pathname.startsWith('/about') ? 'italic' : ''}`}
            >
              About
            </button>
            {showAboutLinks && (
              <span className="whitespace-nowrap">
                : <Link href="/about/bio" className={`transition-[font-style] duration-100 ${pathname === '/about/bio' ? 'italic' : ''}`}>Bio</Link>
                {" / "}
                <Link href="/about/index" className={`transition-[font-style] duration-100 ${pathname === '/about/index' ? 'italic' : ''}`}>Index</Link>
                {" / "}
                <Link href="/about/contact" 
                  onClick={(e) => {
                    e.preventDefault()
                    openModal()
                  }} 
                  className={`transition-[font-style] duration-100 ${pathname === '/about/contact' ? 'italic' : ''}`}
                >
                  Contact
                </Link>
              </span>
            )}
          </div>
        </div>
        {title && (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            {title}
          </div>
        )}
      </div>
    </nav>
  )
}