'use client';

import React from 'react';
import { Coffee, Flame, Heart, Sparkles, Award, Compass } from 'lucide-react';

export default function Pillars() {
  const pillars = [
    {
      number: '01',
      icon: <Coffee size={24} />,
      title: 'Single-Origin Beans',
      desc: 'Ethically harvested shade-grown Arabica from 2,200m high-altitude slopes.',
      tag: 'DIRECT TRADE'
    },
    {
      number: '02',
      icon: <Flame size={24} />,
      title: 'Artisan Micro-Roast',
      desc: 'Small weekly batches crafted to unleash floral brightness & cacao notes.',
      tag: 'BATCH #48'
    },
    {
      number: '03',
      icon: <Sparkles size={24} />,
      title: 'Mastered Extraction',
      desc: 'Slow-bar pour overs & 9-bar velvety espresso pulls with golden crema.',
      tag: '93°C PROFILE'
    },
    {
      number: '04',
      icon: <Heart size={24} />,
      title: 'Tranquil Sanctuary',
      desc: 'Cozy fireplace lounge, ambient music, and warm Himalayan hospitality.',
      tag: 'TORONTO HUB'
    }
  ];

  return (
    <section className="pillars-luxury-section" aria-label="Our Core Pillars">
      <div className="container">
        <div className="pillars-luxury-card">
          {pillars.map((pillar, idx) => (
            <div className="pillar-luxury-item" key={idx}>
              <div className="pillar-top-row">
                <span className="pillar-number">{pillar.number}</span>
                <span className="pillar-badge-tag">{pillar.tag}</span>
              </div>
              <div className="pillar-icon-wrapper">
                {pillar.icon}
              </div>
              <h3 className="pillar-luxury-title">{pillar.title}</h3>
              <p className="pillar-luxury-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
