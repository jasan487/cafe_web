'use client';

import React from 'react';
import { Leaf, Award, Cpu, Coffee, ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Leaf size={24} />,
      title: 'Ethically Sourced',
      desc: 'Responsibly sourced beans you can feel good about.'
    },
    {
      icon: <Award size={24} />,
      title: 'Award Winning',
      desc: 'Recognized for our quality and taste.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Modern Equipment',
      desc: 'State-of-the-art machines for the perfect brew.'
    },
    {
      icon: <Coffee size={24} />,
      title: 'Cozy Ambience',
      desc: 'A warm and welcoming space to relax.'
    }
  ];

  return (
    <section className="why-choose-section" id="why-choose">
      <div className="container">
        <div className="why-choose-layout">
          {/* Left Column: Heading, Copy & CTA */}
          <div className="why-choose-left">
            <div className="section-eyebrow-accent">
              <span className="eyebrow-dash">—</span>
              <span>WHY CHOOSE US</span>
            </div>

            <h2 className="why-choose-heading">
              More Than<br />
              Just Coffee
            </h2>

            <p className="why-choose-subtext">
              We&apos;re passionate about bringing you the best coffee experience, every single day.
            </p>

            <a href="#story" className="btn btn-pill-forest">
              <span>LEARN MORE</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Column: 4 Organic Sage Badge Cards */}
          <div className="why-badges-grid">
            {features.map((item, idx) => (
              <div className="why-feature-card" key={idx}>
                <div className="why-sage-blob-badge">
                  {item.icon}
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
