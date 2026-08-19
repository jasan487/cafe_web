'use client';

import React from 'react';
import { Mountain, Flame, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function StorySection() {
  return (
    <section className="section story-section" id="story">
      <div className="container">
        <div className="split-layout">
          {/* Story Left Image */}
          <div className="story-image-col">
            <div className="story-image-wrapper">
              <img
                src="/assets/images/story-cafe.jpg"
                alt="Interior of Himalayan Coffee House featuring fireplace and warm timbers"
                className="story-main-img"
              />

              <div className="story-experience-tag">
                <span>EST. 2024 &bull; TORONTO</span>
              </div>

              <div className="story-floating-card">
                <div className="floating-card-icon">
                  <Mountain size={20} />
                </div>
                <div className="floating-card-text">
                  <strong>High-Altitude Harvest</strong>
                  <span>2,200m single-origin mountain beans</span>
                </div>
              </div>
            </div>
          </div>

          {/* Story Right Text */}
          <div className="story-text-col">
            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              <span>OUR HERITAGE & CRAFT</span>
            </div>
            <h2 className="section-title">
              Rooted in the <span className="serif-italic">Himalayas</span>
            </h2>
            <p className="lead-text">
              Himalayan Coffee House was born from a deep reverence for high-mountain agriculture, sacred spice traditions, and the timeless warmth of tea houses.
            </p>
            <p className="body-text">
              We unite modern third-wave specialty coffee culture with centuries-old Himalayan warmth. From single-origin shade-grown beans harvested at 2,200+ meters to slow-simmered copper-kettle masala chai—every creation is handcrafted with patience and care.
            </p>

            <div className="story-features-grid">
              <div className="story-feature">
                <div className="feature-icon"><Flame size={18} /></div>
                <div>
                  <h4>Artisan Micro-Roasting</h4>
                  <p>Small weekly batches for floral clarity.</p>
                </div>
              </div>

              <div className="story-feature">
                <div className="feature-icon"><HeartHandshake size={18} /></div>
                <div>
                  <h4>Sacred Spice Recipes</h4>
                  <p>Fresh cardamom, cloves & ginger root.</p>
                </div>
              </div>
            </div>

            <div className="story-signature">
              <p className="signature-quote">
                &ldquo;A tranquil mountain sanctuary in the bustling heart of Toronto.&rdquo;
              </p>
              <span className="signature-author">— Founder & Master Roaster</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
