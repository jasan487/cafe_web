'use client';

import React, { useEffect } from 'react';
import { GALLERY_ITEMS } from '@/data/galleryData';
import { useModal } from '@/context/ModalContext';
import { Maximize2, Flame } from 'lucide-react';

export default function GallerySection() {
  const { openLightbox, setGalleryLength } = useModal();

  useEffect(() => {
    setGalleryLength(GALLERY_ITEMS.length);
  }, [setGalleryLength]);

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <div className="section-eyebrow justify-center">
            <span className="eyebrow-line"></span>
            <span>VISUAL CHRONICLES</span>
            <span className="eyebrow-line"></span>
          </div>
          <h2 className="section-title">Atmosphere & Sacred Craft</h2>
          <p className="section-subtitle">
            Immerse yourself in our tranquil mountain sanctuary—where rustic brick fireplaces meet precision artisan roasts and slow-simmered heritage chai.
          </p>
        </div>

        {/* Bento Showcase Grid */}
        <div className="bento-gallery-showcase">
          {/* Main Large Hero Card */}
          <div
            className="bento-hero-card"
            onClick={() => openLightbox(0)}
          >
            <img
              src={GALLERY_ITEMS[0].image}
              alt={GALLERY_ITEMS[0].alt}
              className="bento-card-bg"
            />
            <div className="bento-card-overlay">
              <div className="bento-top-badge">
                <Flame size={14} />
                <span>Featured Sanctuary</span>
              </div>
              <div className="bento-bottom-content">
                <span className="bento-category-tag">Café Living Room &bull; 2552 Yonge St</span>
                <h3 className="bento-hero-title">{GALLERY_ITEMS[0].title}</h3>
                <p className="bento-hero-desc">
                  Plush leather armchairs, exposed brick fireplace, and high-speed Wi-Fi designed for relaxed reading and deep conversations.
                </p>
                <div className="bento-zoom-cta">
                  <Maximize2 size={16} />
                  <span>Click to view full preview</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Companion Bento Cards */}
          <div className="bento-companion-grid">
            {GALLERY_ITEMS.slice(1, 5).map((item, idx) => (
              <div
                key={item.id}
                className="bento-companion-card"
                onClick={() => openLightbox(idx + 1)}
              >
                <img src={item.image} alt={item.alt} className="bento-card-bg" />
                <div className="bento-companion-overlay">
                  <div className="bento-icon-btn">
                    <Maximize2 size={16} />
                  </div>
                  <div className="bento-companion-caption">
                    <span className="bento-sub-pill">{item.category.toUpperCase()}</span>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6th Wide Feature Banner Card */}
        {GALLERY_ITEMS[5] && (
          <div
            className="bento-wide-banner-card"
            onClick={() => openLightbox(5)}
          >
            <img
              src={GALLERY_ITEMS[5].image}
              alt={GALLERY_ITEMS[5].alt}
              className="bento-card-bg"
            />
            <div className="bento-wide-overlay">
              <div className="bento-wide-content">
                <span className="bento-sub-pill">SLOW-BAR POUR OVER</span>
                <h3>{GALLERY_ITEMS[5].title}</h3>
                <p>93°C mountain spring temperature profile &bull; Japanese gooseneck kettle extraction</p>
              </div>
              <button type="button" className="btn btn-sm btn-glass" style={{ alignSelf: 'center' }}>
                <Maximize2 size={14} /> Full View
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
