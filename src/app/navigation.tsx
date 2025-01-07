'use client'

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [showAboutLinks, setShowAboutLinks] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-4">
      <div className="fixed top-5 left-20 flex gap-8">
        <Link href="/">
          <h1 className={`transition-[font-style] duration-100 font-normal ${pathname === '/' ? 'italic' : ''}`}>
            Chaoran-Zhou
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
              <Link href="/about/contact" className={`transition-[font-style] duration-100 ${pathname === '/about/contact' ? 'italic' : ''}`}>Contact</Link>
            </span>
          )}
        </div>
      </div>
    </nav>
  )
}