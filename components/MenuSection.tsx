'use client';

import React, { useState } from 'react';
import { MENU_ITEMS } from '@/data/menuData';
import { MenuItem } from '@/types';
import { useModal } from '@/context/ModalContext';
import { Calendar, Info, Coffee, Flame, Sparkles, GlassWater, Croissant } from 'lucide-react';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { openReserveModal } = useModal();

  const categories = [
    { id: 'all', label: 'All Items', icon: <Coffee size={15} /> },
    { id: 'specialty', label: 'Specialty Brews', icon: <Flame size={15} /> },
    { id: 'chai', label: 'Traditional Chai', icon: <Sparkles size={15} /> },
    { id: 'iced', label: 'Iced & Cold Brew', icon: <GlassWater size={15} /> },
    { id: 'bakery', label: 'Fresh Pastries', icon: <Croissant size={15} /> }
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="section menu-section" id="menu">
      <div className="container">
        <div className="text-center">
          <div className="section-eyebrow justify-center">
            <span className="eyebrow-line"></span>
            <span>HANDCRAFTED TASTES</span>
            <span className="eyebrow-line"></span>
          </div>
          <h2 className="section-title">Our Signature Menu</h2>
          <p className="section-subtitle">
            Every roast is extracted with mathematical precision. Every tea is slow-simmered with crushed organic spices and certified local dairy.
          </p>

          {/* Category Filter Tabs */}
          <div className="menu-filter-container">
            <div className="menu-filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="menu-grid">
          {filteredItems.map((item: MenuItem) => (
            <article className="menu-card" key={item.id}>
              <div className="menu-card-image-wrap">
                <img src={item.image} alt={item.alt} className="menu-card-img" />
                <span className="menu-badge">{item.badge}</span>
              </div>

              <div className="menu-card-content">
                <div className="menu-card-header">
                  <h3 className="menu-item-title">{item.title}</h3>
                </div>

                <p className="menu-item-desc">{item.description}</p>

                <div className="menu-item-tags">
                  {item.tags.map((tag, idx) => (
                    <span className="tag-pill" key={idx}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="menu-card-actions">
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                    Served fresh for dine-in
                  </span>

                  <button
                    type="button"
                    className="btn btn-sm btn-forest"
                    onClick={openReserveModal}
                  >
                    <Calendar size={14} />
                    <span>Reserve Table</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dietary Notice */}
        <div className="menu-dietary-notice">
          <Info size={18} />
          <span>
            Plant-based oat & almond milks, decaf roasts, and gluten-conscious pastry options always available upon request.
          </span>
        </div>
      </div>
    </section>
  );
}
