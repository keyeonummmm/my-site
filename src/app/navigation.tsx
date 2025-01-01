'use client'

import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [showAboutLinks, setShowAboutLinks] = useState(false)

  return (
    <nav className="flex flex-col gap-4">
      <div className="flex gap-6">
        <Link href="/">
          <h1 className="text-gray-800 hover:text-gray-600 transition-colors font-normal">
            chaoran zhou
          </h1>
        </Link>
        <Link 
          href="/works" 
          className="text-gray-800 hover:text-gray-600 transition-colors"
        >
          works
        </Link>
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setShowAboutLinks(!showAboutLinks)}
            className="text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
          >
            about
          </button>
          {showAboutLinks && (
            <span className="animate-reveal-text">
              : <Link href="/about/bio" className="hover:text-gray-600">bio</Link>
              {" / "}
              <Link href="/about/index" className="hover:text-gray-600">index</Link>
              {" / "}
              <Link href="/about/contact" className="hover:text-gray-600">contact</Link>
            </span>
          )}
        </div>
      </div>
    </nav>
  )
}