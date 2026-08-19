'use client';

import React from 'react';
import { ArrowRight, Sparkles, Instagram, Facebook, Twitter, Phone } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function Hero() {
  const { openReserveModal } = useModal();

  return (
    <section className="hero-section" id="hero">
      {/* Background Organic Sage Blob Shapes */}
      <div className="hero-sage-blob top-left" aria-hidden="true"></div>
      <div className="hero-sage-blob top-right" aria-hidden="true"></div>
      <div className="hero-sage-blob bottom-left" aria-hidden="true"></div>

      <div className="container">
        <div className="hero-layout-grid">
          {/* Left Column: Typography & CTAs */}
          <div className="hero-left">
            <h1 className="hero-main-title">
              Good days<br />
              start with<br />
              <span className="serif-highlight">great coffee.</span>
            </h1>

            <p className="hero-subtext">
              Handcrafted coffee made from premium beans, perfectly brewed for you.
            </p>

            <div className="hero-cta-group">
              <a href="#menu" className="btn btn-pill-forest">
                <span>EXPLORE MENU</span>
                <ArrowRight size={17} />
              </a>
              <a href="#story" className="btn btn-pill-outline">
                <span>OUR STORY</span>
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="hero-social-row">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                aria-label="Twitter"
              >
                <Twitter size={15} />
              </a>
              <a
                href="tel:+14164856464"
                className="hero-social-icon"
                aria-label="Contact via Phone"
              >
                <Phone size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual with Ceramic Green Cup & Floating Seal */}
          <div className="hero-right">
            <div className="hero-visual-composition">
              {/* Organic Sage Backdrop Disk */}
              <div className="hero-organic-disk"></div>

              {/* Coffee Cup & Beans Showcase */}
              <div className="hero-cup-wrapper">
                <img
                  src="/assets/images/menu-himalayan-latte.jpg"
                  alt="Artisanal green ceramic cup of freshly brewed latte with latte art"
                  className="hero-cup-image"
                />

                {/* Steam Rising Animation Elements */}
                <div className="steam-line steam-1"></div>
                <div className="steam-line steam-2"></div>
              </div>

              {/* Floating Badge: PREMIUM QUALITY BEANS */}
              <div className="hero-floating-seal">
                <div className="seal-beans-icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3Z" strokeDasharray="2 2" />
                    <path d="M7 12C7 8 10 6 12 6C14 6 17 8 17 12C17 16 14 18 12 18C10 18 7 16 7 12Z" fill="var(--color-caramel)" fillOpacity="0.2" />
                    <path d="M12 6C11 9 11 15 12 18" stroke="var(--color-forest)" />
                  </svg>
                </div>
                <span className="seal-text-small">PREMIUM</span>
                <span className="seal-text-bold">QUALITY</span>
                <span className="seal-text-sub">BEANS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
