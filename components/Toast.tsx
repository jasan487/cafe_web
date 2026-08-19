'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { Coffee } from 'lucide-react';

export default function Toast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="toast-container" id="toastContainer">
      <div className="toast">
        <Coffee size={18} style={{ color: 'var(--color-caramel)' }} />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}
