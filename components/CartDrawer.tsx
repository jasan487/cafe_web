'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, X, Trash2, ArrowRight, Clock } from 'lucide-react';

export default function CartDrawer() {
  const { cart, removeFromCart, isCartOpen, setIsCartOpen, subtotal, clearCart, showToast } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    showToast('🎉 Order placed successfully! Your pick-up will be ready in 15 mins.');
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
      <div className="cart-drawer-backdrop" onClick={() => setIsCartOpen(false)}></div>
      <div className="cart-drawer-panel">
        <div className="cart-drawer-header">
          <div className="cart-title-wrap">
            <ShoppingBag size={20} style={{ color: 'var(--color-caramel)' }} />
            <h3>Your Order Bag</h3>
          </div>
          <button
            type="button"
            className="cart-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart drawer"
          >
            &times;
          </button>
        </div>

        <div className="cart-items-container">
          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <ShoppingBag size={48} className="empty-icon" />
              <h4>Your bag is empty</h4>
              <p>Explore our artisan roasts and fresh pastries to begin your order.</p>
              <button
                type="button"
                className="btn btn-sm btn-forest"
                onClick={() => setIsCartOpen(false)}
              >
                Explore Menu
              </button>
            </div>
          ) : (
            cart.map((item, index) => (
              <div className="cart-item-row" key={index}>
                <div className="cart-item-info">
                  <strong>{item.quantity}x {item.title}</strong>
                  {item.custom && <span>{item.custom}</span>}
                </div>
                <div className="cart-item-right">
                  <span className="cart-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    type="button"
                    className="cart-item-remove"
                    onClick={() => removeFromCart(index)}
                    aria-label={`Remove ${item.title} from bag`}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-subtotal-row">
              <span>Subtotal</span>
              <span className="cart-subtotal-price">${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-pickup-note">
              <Clock size={14} /> Ready for pick-up in approx. 12-15 minutes
            </div>
            <button
              type="button"
              className="btn btn-forest btn-block"
              onClick={handleCheckout}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
