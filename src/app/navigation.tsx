'use client'

import Link from "next/link"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useTitle } from "./TitleContext"
import { useContactModal } from './ContactModalContext'
import MobileMenu from "@/components/MobileMenu"

export default function Navigation() {
  const [showAboutLinks, setShowAboutLinks] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { title } = useTitle()
  const { openModal } = useContactModal()

  return (
    <nav>
      <div className="navbar-container">
        <MobileMenu />
        <div className="navbar-links">
          <Link href="/" className={`navbar-link ${pathname === '/' ? 'active' : ''}`}>
            <h1>Home</h1>
          </Link>
          <Link 
            href="/works" 
            className={`navbar-link ${pathname === '/works' ? 'active' : ''}`}
          >
            Works
          </Link>
          <div className="about-dropdown">
            <button
              type="button"
              onClick={() => setShowAboutLinks(!showAboutLinks)}
              className={`navbar-link ${pathname.startsWith('/about') ? 'active' : ''}`}
            >
              About
            </button>
            {showAboutLinks && (
              <div className="dropdown-content">
                <Link href="/about/bio" className={`dropdown-link ${pathname === '/about/bio' ? 'active' : ''}`}>: Bio</Link>
                {" / "}
                <Link href="/about/index" className={`dropdown-link ${pathname === '/about/index' ? 'active' : ''}`}>Index</Link>
                {" / "}
                <Link 
                  href="/about/contact" 
                  onClick={(e) => {
                    e.preventDefault()
                    openModal()
                  }} 
                  className={`dropdown-link ${pathname === '/about/contact' ? 'active' : ''}`}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>
        {title && (
          <div className="navbar-title">
            {title}
          </div>
        )}
        {pathname !== '/' && (
          <button 
            onClick={() => router.back()}
            className="navbar-return"
            aria-label="Return to previous page"
          >
            Back
          </button>
        )}
      </div>
    </nav>
  )
}