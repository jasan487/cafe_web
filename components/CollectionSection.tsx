'use client';

import React from 'react';
import { useModal } from '@/context/ModalContext';
import { useCart } from '@/context/CartContext';
import { ArrowRight, Plus } from 'lucide-react';

export default function CollectionSection() {
  const { openReserveModal } = useModal();
  const { showToast } = useCart();

  const signatureItems = [
    {
      id: 'espresso',
      title: 'Espresso',
      desc: 'Bold and intense shot of pure delight.',
      price: '$2.50',
      image: '/assets/images/gallery-latte-art.jpg',
      alt: 'Artisan Espresso extraction'
    },
    {
      id: 'cappuccino',
      title: 'Cappuccino',
      desc: 'Smooth espresso with steamed milk foam.',
      price: '$3.50',
      image: '/assets/images/menu-cafe-latte.jpg',
      alt: 'Classic cappuccino with steamed foam'
    },
    {
      id: 'iced-latte',
      title: 'Iced Latte',
      desc: 'Chilled espresso with milk over ice.',
      price: '$3.75',
      image: '/assets/images/menu-iced-coffee.jpg',
      alt: 'Chilled iced latte over ice cubes'
    }
  ];

  const handleAddOrOrder = (title: string) => {
    showToast(`☕ Added ${title} to your order selection!`);
  };

  return (
    <section className="collection-section" id="collection">
      <div className="container">
        <div className="collection-split-card">
          {/* Left Dark Forest Container */}
          <div className="collection-left-panel">
            <div className="section-eyebrow-accent">
              <span className="eyebrow-dash">—</span>
              <span>OUR SIGNATURE</span>
            </div>

            <h2 className="collection-heading">
              Explore Our<br />
              Coffee Collection
            </h2>

            <p className="collection-subtext">
              From rich espressos to creamy lattes, find your perfect cup.
            </p>

            <a href="#menu" className="btn btn-pill-ivory">
              <span>VIEW FULL MENU</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Warm Cream Container with 3 Cards */}
          <div className="collection-right-panel">
            {/* Subtle Botanical Leaf Watermark */}
            <div className="botanical-watermark" aria-hidden="true">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18">
                <path d="M90 90 C70 50, 40 40, 10 10" />
                <path d="M50 50 C40 30, 30 25, 20 20" />
                <path d="M65 65 C55 45, 45 40, 35 35" />
                <path d="M80 80 C70 60, 60 55, 50 50" />
              </svg>
            </div>

            <div className="collection-cards-grid">
              {signatureItems.map((item) => (
                <div className="coffee-product-card" key={item.id}>
                  <div className="product-image-container">
                    <img src={item.image} alt={item.alt} className="product-img" />
                  </div>

                  <div className="product-info">
                    <h3 className="product-title">{item.title}</h3>
                    <p className="product-desc">{item.desc}</p>

                    <div className="product-bottom-row">
                      <span className="product-price">{item.price}</span>
                      <button
                        type="button"
                        className="product-add-btn"
                        onClick={() => handleAddOrOrder(item.title)}
                        aria-label={`Add ${item.title} to selection`}
                        title={`Select ${item.title}`}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
