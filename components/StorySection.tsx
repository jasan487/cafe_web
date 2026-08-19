'use client';

import React from 'react';
import { Flame, Mountain, HeartHandshake, Sparkles, Award } from 'lucide-react';

export default function StorySection() {
  return (
    <section className="luxury-story-section" id="story">
      <div className="container">
        <div className="luxury-story-grid">
          
          {/* Story Left Image Composition */}
          <div className="luxury-story-visual">
            <div className="story-img-container">
              <img
                src="/assets/images/story-cafe.jpg"
                alt="Interior of Himalayan Coffee House featuring fireplace and warm timbers"
                className="story-master-img"
              />
              
              {/* Overlay Badges */}
              <div className="story-pill-badge-top">
                <Sparkles size={14} />
                <span>EST. 2024 &bull; TORONTO</span>
              </div>

              <div className="story-floating-altitude-card">
                <div className="altitude-icon-box">
                  <Mountain size={22} />
                </div>
                <div className="altitude-text-box">
                  <strong>2,200m High-Altitude Origin</strong>
                  <span>Shade-grown organic mountain beans</span>
                </div>
              </div>
            </div>
          </div>

          {/* Story Right Text Editorial */}
          <div className="luxury-story-content">
            <div className="head-badge-pill">
              <Sparkles size={14} />
              <span>OUR HERITAGE & CRAFT</span>
            </div>

            <h2 className="luxury-heading">
              Rooted in Himalayan Soil.<br />
              <span className="gold-italic">Crafted in Toronto.</span>
            </h2>

            <p className="story-lead-p">
              Born from a deep reverence for high-mountain agriculture, sacred spice traditions, and the timeless warmth of tea houses, we unite third-wave specialty coffee with centuries-old warmth.
            </p>

            <p className="story-body-p">
              From single-origin shade-grown beans harvested at 2,200+ meters in the Himalayas to slow-simmered copper-kettle masala chai—every creation is handcrafted with patience and care in our Midtown Toronto sanctuary.
            </p>

            <div className="story-features-matrix">
              <div className="story-feat-item">
                <div className="feat-icon-glow"><Flame size={20} /></div>
                <div>
                  <h4 className="feat-title">Artisan Micro-Roasting</h4>
                  <p className="feat-desc">Small weekly batches calibrated for floral aroma and chocolate depth.</p>
                </div>
              </div>

              <div className="story-feat-item">
                <div className="feat-icon-glow"><HeartHandshake size={20} /></div>
                <div>
                  <h4 className="feat-title">Sacred Spice Heritage</h4>
                  <p className="feat-desc">Crushed green cardamom, cinnamon bark, cloves & fresh ginger.</p>
                </div>
              </div>
            </div>

            <div className="story-quote-card">
              <p className="quote-body">
                &ldquo;A tranquil mountain sanctuary in the bustling heart of Toronto—where time slows down with every sip.&rdquo;
              </p>
              <div className="quote-author-row">
                <span className="quote-author-name">— Master Roaster & Founder</span>
                <span className="quote-roast-badge">Batch Certified</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
