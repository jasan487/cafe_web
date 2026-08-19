'use client';

import React, { useState, useEffect } from 'react';
import { useModal } from '@/context/ModalContext';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function ItemCustomizerModal() {
  const { activeCustomItem, closeCustomizer } = useModal();
  const { addToCart } = useCart();

  const [milk, setMilk] = useState('Whole Milk');
  const [sweetness, setSweetness] = useState('Standard (100%)');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (activeCustomItem) {
      setMilk('Whole Milk');
      setSweetness('Standard (100%)');
      setQuantity(1);
    }
  }, [activeCustomItem]);

  if (!activeCustomItem) return null;

  const extra = (milk.includes('Oat') || milk.includes('Almond')) ? 0.75 : 0;
  const unitPrice = activeCustomItem.price + extra;
  const totalPrice = (unitPrice * quantity).toFixed(2);

  const milks = ['Whole Milk', 'Oat Milk (+$0.75)', 'Almond Milk (+$0.75)', 'No Milk / Black'];
  const sweets = ['Standard (100%)', 'Less Sweet (50%)', 'Unsweetened (0%)'];

  const handleAddToCart = () => {
    addToCart({
      id: activeCustomItem.id,
      title: activeCustomItem.title,
      price: unitPrice,
      quantity,
      custom: `${milk} • ${sweetness}`,
      image: activeCustomItem.image
    });
    closeCustomizer();
  };

  return (
    <div className="custom-modal open" role="dialog" aria-label="Product Customization">
      <div className="modal-backdrop" onClick={closeCustomizer}></div>
      <div className="modal-dialog">
        <button
          type="button"
          className="modal-close-btn"
          onClick={closeCustomizer}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="modal-grid">
          <div className="modal-img-col">
            <img
              src={activeCustomItem.image}
              alt={activeCustomItem.alt}
              className="modal-product-img"
            />
          </div>

          <div className="modal-info-col">
            <span className="modal-badge">{activeCustomItem.badge}</span>
            <h3 className="modal-title">{activeCustomItem.title}</h3>
            <div className="modal-price">${unitPrice.toFixed(2)}</div>
            <p className="modal-description">{activeCustomItem.description}</p>

            {/* Milk Option */}
            <div className="custom-options-group">
              <label className="option-label">Milk / Dairy Option</label>
              <div className="option-buttons">
                {milks.map((m) => (
                  <button
                    key={m}
                    type="button"
                    className={`opt-pill ${milk === m ? 'active' : ''}`}
                    onClick={() => setMilk(m)}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Sweetness Option */}
            <div className="custom-options-group">
              <label className="option-label">Sweetness Level</label>
              <div className="option-buttons">
                {sweets.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`opt-pill ${sweetness === s ? 'active' : ''}`}
                    onClick={() => setSweetness(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper */}
            <div className="custom-options-group">
              <label className="option-label">Quantity</label>
              <div className="qty-stepper">
                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="qty-num">{quantity}</span>
                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <div className="modal-footer-actions">
              <button
                type="button"
                className="btn btn-forest btn-block"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} />
                <span>Add to Bag — ${totalPrice}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
