'use client';

import React from 'react';
import { Coffee, Sprout, Heart, Smile } from 'lucide-react';

export default function Pillars() {
  const pillars = [
    {
      icon: <Coffee size={22} />,
      title: 'Quality Coffee',
      desc: 'We source the finest beans from around the world.'
    },
    {
      icon: <Sprout size={22} />,
      title: 'Expertly Brewed',
      desc: 'Perfectly brewed by our skilled baristas.'
    },
    {
      icon: <Heart size={22} />,
      title: 'Made with Love',
      desc: 'Every cup is made with passion and care.'
    },
    {
      icon: <Smile size={22} />,
      title: 'Fast & Friendly',
      desc: 'Quick service with a smile, every time.'
    }
  ];

  return (
    <section className="pillars-bar-section" aria-label="Our Core Pillars">
      <div className="container">
        <div className="pillars-floating-card">
          {pillars.map((pillar, idx) => (
            <div className="pillar-item" key={idx}>
              <div className="pillar-icon-badge">
                {pillar.icon}
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
