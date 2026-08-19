'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Flame, Coffee, Award } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export default function CinematicVideoSection() {
  const { openReserveModal } = useModal();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error('Fullscreen request failed:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  return (
    <section className="cinematic-video-section" id="experience" aria-label="Cinematic Roastery Experience">
      {/* Ambient Bokeh & Lighting Backdrops */}
      <div className="video-ambient-glow center-glow" aria-hidden="true" />
      <div className="video-ambient-glow left-glow" aria-hidden="true" />
      <div className="video-ambient-glow right-glow" aria-hidden="true" />

      <div className="container">
        
        {/* Section Header */}
        <div className="luxury-section-head">
          <div className="head-badge-pill">
            <Sparkles size={14} />
            <span>CINEMATIC ROASTERY EXPERIENCE</span>
          </div>
          <h2 className="luxury-heading">
            The Craft Behind <span className="gold-italic">Every Golden Drop</span>
          </h2>
          <p className="luxury-subheading">
            Watch our master roasters and baristas in action—from green bean sorting to precise temperature extraction and silk-smooth pour overs.
          </p>
        </div>

        {/* Video Player Canvas Container */}
        <div className="cinematic-canvas-wrapper" ref={containerRef}>
          
          {/* Edge Feather / Theme Blending Vignette Overlay */}
          <div className="video-blend-vignette" aria-hidden="true" />
          
          {/* HTML5 Video Element */}
          <video
            ref={videoRef}
            src="/assets/videos/video.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="cinematic-main-video"
            onClick={togglePlay}
          />

          {/* Floating Live Annotations */}
          <div className="video-floating-badge badge-top-left">
            <div className="badge-pulse-dot" />
            <span>LIVE ROASTERY &bull; MIDTOWN TORONTO</span>
          </div>

          <div className="video-floating-badge badge-top-right">
            <Flame size={14} className="text-caramel" />
            <span>205°C First Crack Profile</span>
          </div>

          {/* Center Play Overlay (when paused) */}
          {!isPlaying && (
            <button 
              type="button" 
              className="center-play-overlay-btn"
              onClick={togglePlay}
              aria-label="Resume video playback"
            >
              <div className="large-play-icon-circle">
                <Play size={32} fill="#14100D" color="#14100D" style={{ marginLeft: 4 }} />
              </div>
              <span className="center-play-label">RESUME EXPERIENCE</span>
            </button>
          )}

          {/* Bottom Custom Controls Bar */}
          <div className="video-custom-controls-bar">
            
            {/* Progress Track */}
            <div className="video-progress-track">
              <div className="video-progress-fill" style={{ width: `${progress}%` }} />
            </div>

            <div className="controls-inner-row">
              <div className="controls-left-group">
                <button
                  type="button"
                  className="vid-ctrl-btn"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
                </button>

                <button
                  type="button"
                  className="vid-ctrl-btn"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                  title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  <span className="audio-status-text">{isMuted ? 'Muted' : 'Sound On'}</span>
                </button>
              </div>

              <div className="controls-center-tag">
                <Coffee size={14} />
                <span>Single-Origin Himalayan Arabica</span>
              </div>

              <div className="controls-right-group">
                <button
                  type="button"
                  className="vid-ctrl-btn"
                  onClick={toggleFullscreen}
                  aria-label="Toggle Fullscreen"
                  title="Fullscreen"
                >
                  <Maximize2 size={17} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Value Pillars Below Video */}
        <div className="video-perks-row">
          <div className="video-perk-card">
            <div className="perk-icon-circle">
              <Flame size={20} />
            </div>
            <div className="perk-text-group">
              <h4>Direct Micro-Batch Roasting</h4>
              <p>Weekly small-batch roasting ensures supreme floral fragrance and low acidity.</p>
            </div>
          </div>

          <div className="video-perk-card">
            <div className="perk-icon-circle">
              <Sparkles size={20} />
            </div>
            <div className="perk-text-group">
              <h4>93°C Extraction Temperature</h4>
              <p>Calibrated temperature profiles extract maximum caramel sweetness without bitterness.</p>
            </div>
          </div>

          <div className="video-perk-card">
            <div className="perk-icon-circle">
              <Award size={20} />
            </div>
            <div className="perk-text-group">
              <h4>Artisanal Milk Steaming</h4>
              <p>Micro-foamed local grass-fed & organic oat milk poured with bespoke latte art.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
