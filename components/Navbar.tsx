'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useModal } from '@/context/ModalContext';
import { Moon, Sun, ShoppingBag, Menu, X, Globe, ChevronDown, User } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { openReserveModal } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

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
        <div className="navbar-pill-aesthetic">
          
          {/* Left Brand: Modern Minimal Coffee Bean + coffee logo */}
          <a href="#hero" className="brand-logo-aesthetic" aria-label="Coffee House Home">
            <div className="coffee-bean-icon">
              <svg viewBox="0 0 28 28" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Minimalist Split Pill Coffee Bean Shape */}
                <path
                  d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M8.5 14c2.5-4 4-5.5 5.5-5.5s3 1.5 5.5 5.5c-2.5 4-4 5.5-5.5 5.5s-3-1.5-5.5-5.5z"
                  fill="var(--color-caramel)"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M14 8.5c0 3 0 8 0 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="brand-text-minimal">coffee</span>
          </a>

          {/* Center Navigation: Clean Aesthetic Links */}
          <nav className="desktop-nav-aesthetic" aria-label="Primary Navigation">
            <ul className="nav-links-aesthetic">
              <li>
                <a
                  href="#gallery"
                  className={`nav-link-aesthetic ${activeSection === 'gallery' ? 'active' : ''}`}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  className={`nav-link-aesthetic ${activeSection === 'story' ? 'active' : ''}`}
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className={`nav-link-aesthetic ${activeSection === 'menu' ? 'active' : ''}`}
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className={`nav-link-aesthetic ${activeSection === 'location' ? 'active' : ''}`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Section: User Profile Avatar, Language, Theme & Actions */}
          <div className="nav-actions-aesthetic">
            
            {/* User Profile Capsule */}
            <div className="user-profile-badge" title="Logged in as so_arteaga">
              <img
                src="/assets/images/avatar-1.jpg"
                alt="User avatar for so_arteaga"
                className="user-profile-avatar"
              />
              <span className="user-profile-name">so_arteaga</span>
            </div>

            {/* Language Switcher Dropdown */}
            <div className="language-selector-wrapper">
              <button
                type="button"
                className="language-selector-btn"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-label="Select Language"
              >
                <span>{selectedLang}</span>
                <ChevronDown size={14} className={langDropdownOpen ? 'rotate-180' : ''} />
              </button>

              {langDropdownOpen && (
                <div className="language-dropdown-menu">
                  {['EN', 'ES', 'FR', 'HI'].map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      className={`lang-option ${selectedLang === lang ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedLang(lang);
                        setLangDropdownOpen(false);
                      }}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Order Button */}
            <button
              type="button"
              className="btn-order-compact"
              onClick={openReserveModal}
              title="Order Online / Reserve Table"
            >
              <ShoppingBag size={15} />
              <span className="order-compact-text">Order</span>
            </button>

            {/* Dark/Light Mode Switcher */}
            <button
              type="button"
              className="theme-toggle-aesthetic"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} theme`}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} theme`}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="hamburger-btn-aesthetic"
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
            <div className="brand-logo-aesthetic">
              <span className="brand-text-minimal">coffee</span>
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

          <div className="mobile-user-row">
            <img src="/assets/images/avatar-1.jpg" alt="User avatar" className="user-profile-avatar" />
            <span className="user-profile-name">so_arteaga</span>
          </div>

          <ul className="mobile-nav-links">
            <li><a href="#hero" className="mobile-nav-link" onClick={closeMobile}>Home</a></li>
            <li><a href="#gallery" className="mobile-nav-link" onClick={closeMobile}>Gallery</a></li>
            <li><a href="#story" className="mobile-nav-link" onClick={closeMobile}>About us</a></li>
            <li><a href="#menu" className="mobile-nav-link" onClick={closeMobile}>Menu</a></li>
            <li><a href="#collection" className="mobile-nav-link" onClick={closeMobile}>Specials</a></li>
            <li><a href="#location" className="mobile-nav-link" onClick={closeMobile}>Contact</a></li>
          </ul>

          <div className="mobile-drawer-footer">
            <button
              type="button"
              className="btn btn-hero-order btn-block"
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
