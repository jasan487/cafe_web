'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Mail, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CoffeeClubBanner() {
  const { showToast } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    showToast('☕ Welcome to the Coffee Club! Your 10% coupon has been sent.');
    setEmail('');
  };

  return (
    <section className="coffee-club-section" id="club">
      <div className="container">
        <div className="coffee-club-banner">
          {/* Subtle Botanical Leaf Overlay SVG */}
          <div className="club-botanical-bg" aria-hidden="true">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 180C70 150 90 100 180 60C140 100 110 160 40 180Z" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none"/>
              <path d="M90 130C120 120 150 90 170 60" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
              <path d="M120 105C140 95 160 75 175 55" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
            </svg>
          </div>

          <div className="club-banner-grid">
            {/* Left: 10% OFF Badge & Image */}
            <div className="club-visual-wrap">
              <div className="club-discount-seal">
                <span className="seal-percent">10%</span>
                <span className="seal-text">OFF</span>
                <span className="seal-sub">YOUR FIRST ORDER</span>
              </div>
              <img
                src="/assets/images/menu-pastries.jpg"
                alt="Fresh artisan croissant and specialty coffee"
                className="club-pastry-img"
              />
            </div>

            {/* Middle: Content */}
            <div className="club-content-wrap">
              <div className="club-tag">
                <Mail size={15} />
                <span>JOIN OUR COFFEE CLUB</span>
              </div>
              <h2 className="club-title">
                Get Exclusive Offers &amp; Coffee Tips
              </h2>
              <p className="club-desc">
                Sign up for our newsletter and enjoy special deals, new arrivals, secret recipes, and more!
              </p>
            </div>

            {/* Right: Newsletter Input Form */}
            <div className="club-form-wrap">
              {subscribed ? (
                <div className="club-success-box">
                  <CheckCircle2 size={24} style={{ color: 'var(--color-caramel)' }} />
                  <div>
                    <strong>You&apos;re in the Club!</strong>
                    <p>Check your inbox for your 10% welcome coupon.</p>
                  </div>
                </div>
              ) : (
                <form className="club-subscribe-form" onSubmit={handleSubmit}>
                  <div className="club-input-group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="club-email-input"
                      required
                    />
                    <button type="submit" className="club-subscribe-btn">
                      SUBSCRIBE
                    </button>
                  </div>
                  <span className="club-subtext">No spam, unsubscribe anytime.</span>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
