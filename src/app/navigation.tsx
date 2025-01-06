'use client'

import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [showAboutLinks, setShowAboutLinks] = useState(false)

  return (
    <nav className="flex flex-col gap-4">
      <div className="flex gap-8">
        <Link href="/">
          <h1 className="hover:italic transition-[font-style] duration-300 font-normal">
            chaoran zhou
          </h1>
        </Link>
        <Link 
          href="/works" 
          className="hover:italic transition-[font-style] duration-300"
        >
          works
        </Link>
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setShowAboutLinks(!showAboutLinks)}
            className="hover:italic transition-[font-style] duration-300 cursor-pointer"
          >
            about
          </button>
          {showAboutLinks && (
            <span className="whitespace-nowrap">
              : :<Link href="/about/bio" className="hover:italic transition-[font-style] duration-300">bio</Link>
              {" / "}
              <Link href="/about/index" className="hover:italic transition-[font-style] duration-300">index</Link>
              {" / "}
              <Link href="/about/contact" className="hover:italic transition-[font-style] duration-300">contact</Link>
            </span>
          )}
        </div>
      </div>
    </nav>
  )
}