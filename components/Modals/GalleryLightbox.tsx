'use client';

import React, { useEffect } from 'react';
import { useModal } from '@/context/ModalContext';
import { GALLERY_ITEMS } from '@/data/galleryData';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function GalleryLightbox() {
  const { activeLightboxIndex, closeLightbox, nextLightbox, prevLightbox } = useModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, nextLightbox, prevLightbox]);

  if (activeLightboxIndex === null) return null;

  const currentItem = GALLERY_ITEMS[activeLightboxIndex];
  if (!currentItem) return null;

  return (
    <div className="lightbox-modal open" role="dialog" aria-label="Image gallery viewer">
      <div className="lightbox-backdrop" onClick={closeLightbox}></div>
      <div className="lightbox-content">
        <button
          type="button"
          className="lightbox-close-btn"
          onClick={closeLightbox}
          aria-label="Close image viewer"
        >
          &times;
        </button>

        <button
          type="button"
          className="lightbox-nav-btn prev"
          onClick={prevLightbox}
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          type="button"
          className="lightbox-nav-btn next"
          onClick={nextLightbox}
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        <div className="lightbox-image-holder">
          <img src={currentItem.image} alt={currentItem.alt} className="lightbox-main-img" />
        </div>

        <div className="lightbox-caption-bar">
          <h4>{currentItem.title}</h4>
          <p>{currentItem.category}</p>
        </div>
      </div>
    </div>
  );
}
