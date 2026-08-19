'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useModal } from '@/context/ModalContext';
import { Moon, Sun, ShoppingBag, Menu, X, CalendarCheck, Phone } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { openReserveModal } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active link detection
      const sections = ['hero', 'story', 'menu', 'collection', 'gallery', 'location'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section === 'hero' ? 'home' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`site-header-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-pill">
          {/* Brand Logo with Sprout Motif */}
          <a href="#hero" className="brand-logo" aria-label="Brewista Coffee House Home">
            <div className="logo-symbol">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="sprout-logo">
                {/* Outer delicate circle */}
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="3 3"/>
                {/* Botanical leaves / Coffee sprout */}
                <path d="M20 28V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M20 18C14 17 12 12 12 10C17 10 19 14 20 18Z" fill="var(--color-caramel)" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M20 22C26 21 28 16 28 14C23 14 21 18 20 22Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="logo-text-group">
              <span className="logo-title">Brewista</span>
              <span className="logo-sub">COFFEE HOUSE</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            <ul className="nav-links">
              <li>
                <a
                  href="#hero"
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  className={`nav-link ${activeSection === 'story' ? 'active' : ''}`}
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className={`nav-link ${activeSection === 'menu' ? 'active' : ''}`}
                >
                  MENU
                </a>
              </li>
              <li>
                <a
                  href="#collection"
                  className={`nav-link ${activeSection === 'collection' ? 'active' : ''}`}
                >
                  SPECIALS
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
                >
                  GALLERY
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className={`nav-link ${activeSection === 'location' ? 'active' : ''}`}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Nav Actions */}
          <div className="nav-actions">
            {/* Primary Order Online / Table Pill CTA */}
            <button
              type="button"
              className="btn btn-order-pill"
              onClick={openReserveModal}
            >
              <span>ORDER ONLINE</span>
              <ShoppingBag size={16} />
            </button>

            {/* Theme Toggle Button */}
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} theme`}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} theme`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="hamburger-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <div className="logo-text-group">
              <span className="logo-title">Brewista</span>
              <span className="logo-sub">COFFEE HOUSE</span>
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={closeMobile}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="mobile-nav-links">
            <li><a href="#hero" className="mobile-nav-link" onClick={closeMobile}>HOME</a></li>
            <li><a href="#story" className="mobile-nav-link" onClick={closeMobile}>ABOUT US</a></li>
            <li><a href="#menu" className="mobile-nav-link" onClick={closeMobile}>MENU</a></li>
            <li><a href="#collection" className="mobile-nav-link" onClick={closeMobile}>SPECIALS</a></li>
            <li><a href="#gallery" className="mobile-nav-link" onClick={closeMobile}>GALLERY</a></li>
            <li><a href="#club" className="mobile-nav-link" onClick={closeMobile}>COFFEE CLUB</a></li>
            <li><a href="#location" className="mobile-nav-link" onClick={closeMobile}>CONTACT</a></li>
          </ul>

          <div className="mobile-drawer-footer">
            <button
              type="button"
              className="btn btn-forest btn-block"
              onClick={() => {
                closeMobile();
                openReserveModal();
              }}
            >
              <ShoppingBag size={16} /> ORDER ONLINE / RESERVE
            </button>

            <button
              type="button"
              className="btn btn-outline-forest btn-block"
              onClick={toggleTheme}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              <span>{theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
