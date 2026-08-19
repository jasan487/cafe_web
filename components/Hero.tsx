'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, X, Volume2, VolumeX, ArrowRight, Instagram, Facebook, Twitter, Youtube, ChevronDown } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

interface SlideData {
  id: string;
  badgeText: string;
  titleLine1: string;
  titleLine2: string;
  subtext: string;
  image: string;
}

const slides: SlideData[] = [
  {
    id: '01',
    badgeText: 'ORIGIN & CRAFT • PURE BEANS • ROASTED DAILY •',
    titleLine1: 'Pure roast',
    titleLine2: 'is passion',
    subtext: 'Carefully curated single-origin beans roasted to perfection, releasing notes of roasted cacao and hazelnut.',
    image: '/assets/images/hero-coffee-splash.jpg'
  },
  {
    id: '02',
    badgeText: 'INSPIRATION DESIGN FOR COFFEE WEBSITE • EST. 2024 •',
    titleLine1: 'All we need',
    titleLine2: 'is coffee',
    subtext: 'We source, roast and blend our coffee with passion, we select our teas with love ...',
    image: '/assets/images/hero-coffee-splash.jpg'
  },
  {
    id: '03',
    badgeText: 'ARTISANAL BREWS • BARISTA MASTERED • SPECIALTY •',
    titleLine1: 'Crafted brew',
    titleLine2: 'for your soul',
    subtext: 'Indulge in velvety espresso shots crowned with rich golden crema and micro-foamed organic steamed milk.',
    image: '/assets/images/hero-coffee-splash.jpg'
  }
];

export default function Hero() {
  const { openReserveModal } = useModal();
  const [activeSlide, setActiveSlide] = useState(1); // Default to slide 02 (index 1)
  const [isMotionReelOpen, setIsMotionReelOpen] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Parallax tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const current = slides[activeSlide];

  const handleScrollDown = () => {
    const nextSection = document.getElementById('story') || document.getElementById('menu');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="hero-splash-section" 
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient Lighting & Bokeh Glowing Backdrops */}
      <div className="hero-splash-glow center-glow" aria-hidden="true" />
      <div className="hero-splash-glow right-glow" aria-hidden="true" />
      <div className="hero-bokeh-particle p-1" aria-hidden="true" />
      <div className="hero-bokeh-particle p-2" aria-hidden="true" />
      <div className="hero-bokeh-particle p-3" aria-hidden="true" />
      <div className="hero-bokeh-particle p-4" aria-hidden="true" />

      {/* Subtle Aesthetic Grid & Divider Guidelines */}
      <div className="hero-aesthetic-lines" aria-hidden="true">
        <div className="hero-grid-line line-left" />
        <div className="hero-grid-line line-center" />
        <div className="hero-grid-line line-right" />
      </div>

      <div className="hero-splash-container">
        <div className="hero-splash-content-grid">
          
          {/* Left Column: Typography, Circular Badge & Slider */}
          <div className="hero-splash-left">
            
            {/* Rotating Circular Text Badge */}
            <div className="hero-circular-badge-container">
              <svg viewBox="0 0 160 160" className="hero-rotating-badge" aria-hidden="true">
                <defs>
                  <path
                    id="textCircle"
                    d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                  />
                </defs>
                <text className="rotating-badge-text">
                  <textPath href="#textCircle" startOffset="0%">
                    {current.badgeText}
                  </textPath>
                </text>
              </svg>
              {/* Central Bean Glyph */}
              <div className="badge-center-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeOpacity="0.4" strokeDasharray="2 2" />
                  <path d="M7 12c0-3.5 2-6 5-6s5 2.5 5 6-2 6-5 6-5-2.5-5-6z" fill="var(--color-caramel)" fillOpacity="0.3" />
                  <path d="M12 6c-1 3-1 9 0 12" stroke="var(--color-caramel)" />
                </svg>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="hero-splash-title">
              <span className="title-white-line">{current.titleLine1}</span>
              <span className="title-caramel-line">{current.titleLine2}</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-splash-description">
              {current.subtext}
            </p>

            {/* Slide Indicators: 01  02  03 */}
            <div className="hero-pagination-row">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`hero-page-number ${activeSlide === index ? 'active' : ''}`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${slide.id}`}
                >
                  <span className="page-number-text">{slide.id}</span>
                  {activeSlide === index && <span className="active-dot" />}
                </button>
              ))}
            </div>

            {/* Quick Action Button */}
            <div className="hero-action-pills">
              <button 
                type="button" 
                className="btn btn-hero-order"
                onClick={openReserveModal}
              >
                <span>ORDER FRESH BREW</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

          {/* Right Column: Dynamic Splash Coffee Cup Visual */}
          <div className="hero-splash-right">
            <div 
              className="hero-splash-showcase"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg) translateY(${mousePos.y * -8}px)`
              }}
            >
              {/* Radial Golden Aura Behind Cup */}
              <div className="hero-cup-aura" aria-hidden="true" />
              
              {/* Splash Image Visual */}
              <div className="hero-cup-canvas-wrapper">
                <img
                  src={current.image}
                  alt="Aesthetic white porcelain coffee cup splashing freshly brewed espresso and coffee grounds"
                  className="hero-cup-splash-img"
                />
              </div>

              {/* Floating Coffee Roast Tag */}
              <div className="hero-floating-spec-tag">
                <span className="spec-tag-accent">100% ARABICA</span>
                <span className="spec-tag-sub">Micro-Roast Batch #48</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Interactive Footer Bar */}
        <div className="hero-bottom-bar">
          
          {/* Motion Reel Button */}
          <div className="bottom-bar-left">
            <button
              type="button"
              className="motion-reel-btn"
              onClick={() => setIsMotionReelOpen(true)}
              aria-label="Play Motion Reel Video"
            >
              <span className="play-icon-circle">
                <Play size={14} fill="currentColor" />
              </span>
              <span className="motion-reel-label">Motion Reel</span>
            </button>
          </div>

          {/* Center Info / Template Tag */}
          <div className="bottom-bar-center">
            <span className="inspiration-template-text">Website Inspiration Template</span>
          </div>

          {/* Social Links Row */}
          <div className="bottom-bar-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bottom-social-link" aria-label="Facebook">
              <Facebook size={15} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bottom-social-link" aria-label="YouTube">
              <Youtube size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bottom-social-link" aria-label="Twitter">
              <Twitter size={15} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bottom-social-link" aria-label="Instagram">
              <Instagram size={15} />
            </a>
          </div>

          {/* Right: Mouse Scroll Indicator */}
          <div className="bottom-bar-right">
            <button
              type="button"
              className="mouse-scroll-indicator"
              onClick={handleScrollDown}
              aria-label="Scroll to next section"
              title="Scroll down"
            >
              <div className="mouse-shell">
                <div className="mouse-wheel" />
              </div>
            </button>
          </div>

        </div>

      </div>

      {/* Motion Reel Video Modal */}
      {isMotionReelOpen && (
        <div className="motion-reel-modal" role="dialog" aria-modal="true" aria-label="Motion Reel Video Player">
          <div className="motion-reel-backdrop" onClick={() => setIsMotionReelOpen(false)} />
          <div className="motion-reel-container">
            <div className="motion-reel-header">
              <div className="reel-title-group">
                <span className="reel-tag">BEHIND THE CRAFT</span>
                <h3 className="reel-title">Artisanal Pour & Roasting Experience</h3>
              </div>
              <div className="reel-controls-group">
                <button
                  type="button"
                  className="reel-control-btn"
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.muted = !isVideoMuted;
                      setIsVideoMuted(!isVideoMuted);
                    }
                  }}
                  aria-label={isVideoMuted ? 'Unmute' : 'Mute'}
                >
                  {isVideoMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <button
                  type="button"
                  className="reel-close-btn"
                  onClick={() => setIsMotionReelOpen(false)}
                  aria-label="Close Motion Reel"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="motion-reel-video-wrapper">
              <video
                ref={videoRef}
                src="/assets/videos/hero-video.mp4"
                autoPlay
                loop
                muted={isVideoMuted}
                playsInline
                className="motion-reel-video"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
