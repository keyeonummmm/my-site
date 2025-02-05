'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContactModal } from '@/app/ContactModalContext';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAboutLinks, setShowAboutLinks] = useState(false);
  const pathname = usePathname();
  const { openModal } = useContactModal();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setShowAboutLinks(false);
    }
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button 
        onClick={toggleMenu}
        className="mobile-menu-button"
        aria-label="Menu"
      >
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-menu-content">
          <Link 
            href="/" 
            className={`mobile-menu-link ${pathname === '/' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            <h1>Source</h1>
          </Link>
          <Link 
            href="/works" 
            className={`mobile-menu-link ${pathname === '/works' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Works
          </Link>
          <div className="mobile-about-section">
            <button
              type="button"
              onClick={() => setShowAboutLinks(!showAboutLinks)}
              className={`mobile-menu-link ${pathname.startsWith('/about') ? 'active' : ''}`}
            >
              About
            </button>
            {showAboutLinks && (
              <div className="mobile-dropdown-content">
                <Link 
                  href="/about/bio" 
                  className={`mobile-menu-link ${pathname === '/about/bio' ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Bio
                </Link>
                <Link 
                  href="/about/index" 
                  className={`mobile-menu-link ${pathname === '/about/index' ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Index
                </Link>
                <button
                  onClick={() => {
                    openModal();
                    setIsOpen(false);
                  }}
                  className={`mobile-menu-link ${pathname === '/about/contact' ? 'active' : ''}`}
                >
                  Contact
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
} 