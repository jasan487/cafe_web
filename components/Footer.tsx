'use client';

import React from 'react';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      {/* Scalloped Organic Wave Top Shape */}
      <div className="footer-scallop-shape" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,0 C240,60 480,20 720,50 C960,80 1200,30 1440,60 L1440,80 L0,80 Z"
            fill="var(--footer-bg)"
          />
        </svg>
      </div>

      <div className="container">
        {/* Main 4-Column Footer Grid */}
        <div className="footer-columns-grid">
          {/* Brand Bio Column */}
          <div className="footer-col brand-bio-col">
            <a href="#hero" className="footer-brand-logo" aria-label="Brewista Coffee House">
              <div className="footer-logo-symbol">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="3 3"/>
                  <path d="M20 28V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M20 18C14 17 12 12 12 10C17 10 19 14 20 18Z" fill="var(--color-caramel)" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M20 22C26 21 28 16 28 14C23 14 21 18 20 22Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="footer-logo-text">
                <span className="logo-title">Brewista</span>
                <span className="logo-sub">COFFEE HOUSE</span>
              </div>
            </a>

            <p className="footer-tagline">
              Great coffee, good vibes, and a whole lot of passion. Brewed fresh for you.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">QUICK LINKS</h4>
            <ul className="footer-nav-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#story">About Us</a></li>
              <li><a href="#menu">Our Menu</a></li>
              <li><a href="#collection">Specials</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#location">Contact</a></li>
            </ul>
          </div>

          {/* Help & Support Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">HELP &amp; SUPPORT</h4>
            <ul className="footer-nav-list">
              <li><a href="#location">FAQs</a></li>
              <li><a href="#club">Shipping &amp; Delivery</a></li>
              <li><a href="#location">Returns</a></li>
              <li><a href="#location">Privacy Policy</a></li>
              <li><a href="#location">Terms &amp; Conditions</a></li>
            </ul>
          </div>

          {/* Contact Us & Social Column */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">CONTACT US</h4>
            <div className="footer-contact-items">
              <a href="tel:+14164856464" className="contact-link">
                <Phone size={15} />
                <span>+1 (416) 485-6464</span>
              </a>
              <a href="mailto:hello@brewista.com" className="contact-link">
                <Mail size={15} />
                <span>hello@brewista.com</span>
              </a>
              <div className="contact-link address-link">
                <MapPin size={15} />
                <span>2552 Yonge St, Toronto, ON M4P 2J2</span>
              </div>
            </div>

            {/* Follow Us Social Icons */}
            <div className="footer-social-section">
              <span className="follow-label">FOLLOW US</span>
              <div className="footer-social-icons">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="Instagram">
                  <Instagram size={15} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="Facebook">
                  <Facebook size={15} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-circle-btn" aria-label="Twitter">
                  <Twitter size={15} />
                </a>
                <a href="tel:+14164856464" className="social-circle-btn" aria-label="Phone">
                  <Phone size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-center">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" opacity="0.6" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z"/>
            </svg>
            <span>&copy; {new Date().getFullYear()} Brewista Coffee House. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
