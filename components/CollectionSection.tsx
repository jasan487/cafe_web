'use client';

import React from 'react';
import { useModal } from '@/context/ModalContext';
import { useCart } from '@/context/CartContext';
import { ArrowRight, Plus, Star, Sparkles } from 'lucide-react';

export default function CollectionSection() {
  const { openReserveModal } = useModal();
  const { showToast } = useCart();

  const signatureItems = [
    {
      id: 'himalayan-latte',
      title: 'Himalayan Cardamom Latte',
      desc: 'Double shot espresso infused with organic green cardamom, Himalayan honey & velvety microfoam.',
      price: '$5.50',
      rating: 5,
      badge: 'Bestseller',
      image: '/assets/images/menu-himalayan-latte.jpg',
      alt: 'Artisan Himalayan Cardamom Latte with latte art'
    },
    {
      id: 'butter-brew',
      title: 'Butter Coffee Supreme',
      desc: 'High-altitude French roast blended with grass-fed yak butter and organic MCT oil.',
      price: '$6.00',
      rating: 5,
      badge: 'Signature',
      image: '/assets/images/menu-butter-brew.jpg',
      alt: 'Rich golden Butter Brew in a ceramic cup'
    },
    {
      id: 'nitro-cold-brew',
      title: 'Slow Cold Drip Reserve',
      desc: '18-hour cold water extraction over Ethiopian Yirgacheffe beans with sweet chocolate undertones.',
      price: '$5.25',
      rating: 5,
      badge: 'Chilled Reserve',
      image: '/assets/images/menu-iced-coffee.jpg',
      alt: 'Chilled cold brew with clear ice cube'
    }
  ];

  const handleAddOrOrder = (title: string) => {
    showToast(`✨ Added "${title}" to your order selection!`);
  };

  return (
    <section className="luxury-collection-section" id="collection">
      <div className="container">
        
        {/* Section Header */}
        <div className="luxury-section-head">
          <div className="head-badge-pill">
            <Sparkles size={14} />
            <span>CURATED ROASTS</span>
          </div>
          <h2 className="luxury-heading">
            Our Signature <span className="gold-italic">Coffee Collection</span>
          </h2>
          <p className="luxury-subheading">
            Handcrafted with single-origin beans, roasted weekly in micro-batches, and poured with passion by master baristas.
          </p>
        </div>

        {/* 3 Showcase Product Cards */}
        <div className="luxury-cards-grid">
          {signatureItems.map((item) => (
            <div className="luxury-product-card" key={item.id}>
              
              {/* Product Image Wrap with Badge */}
              <div className="luxury-img-wrap">
                <img src={item.image} alt={item.alt} className="luxury-card-img" />
                <span className="luxury-badge-pill">{item.badge}</span>
                <div className="luxury-rating-badge">
                  <Star size={13} fill="#E2B075" color="#E2B075" />
                  <span>5.0</span>
                </div>
              </div>

              {/* Product Body */}
              <div className="luxury-card-body">
                <h3 className="luxury-product-title">{item.title}</h3>
                <p className="luxury-product-desc">{item.desc}</p>

                <div className="luxury-card-footer">
                  <div className="luxury-price-tag">
                    <span className="price-currency">{item.price}</span>
                  </div>

                  <div className="luxury-btn-group">
                    <button
                      type="button"
                      className="btn-select-pill"
                      onClick={() => handleAddOrOrder(item.title)}
                      aria-label={`Select ${item.title}`}
                    >
                      <Plus size={15} />
                      <span>Add to Order</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Link Banner */}
        <div className="luxury-menu-cta-banner">
          <div className="cta-banner-text">
            <h4>Discover Our Complete Tasting Menu</h4>
            <p>From Himalayan Masala Chai to French Butter Croissants & Pour Overs.</p>
          </div>
          <a href="#menu" className="btn btn-hero-order">
            <span>EXPLORE FULL MENU</span>
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
