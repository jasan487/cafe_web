'use client';

import React, { createContext, useContext, useState } from 'react';
import { MenuItem, GalleryItem } from '@/types';

interface ModalContextType {
  // Customizer Modal
  activeCustomItem: MenuItem | null;
  openCustomizer: (item: MenuItem) => void;
  closeCustomizer: () => void;

  // Reservation Modal
  isReserveOpen: boolean;
  openReserveModal: () => void;
  closeReserveModal: () => void;

  // Gallery Lightbox
  activeLightboxIndex: number | null;
  openLightbox: (index: number) => void;
  closeLightbox: () => void;
  nextLightbox: () => void;
  prevLightbox: () => void;
  galleryLength: number;
  setGalleryLength: (len: number) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeCustomItem, setActiveCustomItem] = useState<MenuItem | null>(null);
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [galleryLength, setGalleryLength] = useState(0);

  const openCustomizer = (item: MenuItem) => setActiveCustomItem(item);
  const closeCustomizer = () => setActiveCustomItem(null);

  const openReserveModal = () => setIsReserveOpen(true);
  const closeReserveModal = () => setIsReserveOpen(false);

  const openLightbox = (index: number) => setActiveLightboxIndex(index);
  const closeLightbox = () => setActiveLightboxIndex(null);

  const nextLightbox = () => {
    if (activeLightboxIndex !== null && galleryLength > 0) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % galleryLength);
    }
  };

  const prevLightbox = () => {
    if (activeLightboxIndex !== null && galleryLength > 0) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + galleryLength) % galleryLength);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        activeCustomItem,
        openCustomizer,
        closeCustomizer,
        isReserveOpen,
        openReserveModal,
        closeReserveModal,
        activeLightboxIndex,
        openLightbox,
        closeLightbox,
        nextLightbox,
        prevLightbox,
        galleryLength,
        setGalleryLength
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
