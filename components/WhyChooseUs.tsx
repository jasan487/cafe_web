'use client';

import React from 'react';
import { Leaf, Award, Cpu, Flame, ArrowRight, ShieldCheck, Sparkles, Check } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Leaf size={24} />,
      title: 'Ethically Sourced',
      desc: '100% direct-trade beans harvested by generational high-altitude family farmers.'
    },
    {
      icon: <Award size={24} />,
      title: 'Award-Winning Roasts',
      desc: 'Recognized for distinctive clarity, golden crema balance, and silky body.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Precision Extraction',
      desc: 'La Marzocco espresso profiling and temperature-stable Japanese pour over gear.'
    },
    {
      icon: <Flame size={24} />,
      title: 'Cozy Hearth Ambience',
      desc: 'Fireplace lounge, acoustic playlists, and peaceful work corners in Midtown.'
    }
  ];

  return (
    <section className="luxury-why-section" id="why-choose">
      <div className="container">
        <div className="luxury-why-grid">
          
          {/* Left Column: Heading & Key Value Props */}
          <div className="luxury-why-left">
            <div className="head-badge-pill">
              <Sparkles size={14} />
              <span>THE BREWISTA STANDARD</span>
            </div>

            <h2 className="luxury-heading">
              More Than Coffee.<br />
              <span className="gold-italic">A Daily Ritual.</span>
            </h2>

            <p className="luxury-subheading" style={{ marginBottom: 28 }}>
              We believe coffee is an intimate moment of stillness in an otherwise hurried world. Every detail—from our water filtration to our organic spice blends—is calibrated for perfection.
            </p>

            <ul className="why-bullet-list">
              <li>
                <div className="bullet-icon-check"><Check size={14} /></div>
                <span>Triple-filtered mineral spring water profile for pure flavor release</span>
              </li>
              <li>
                <div className="bullet-icon-check"><Check size={14} /></div>
                <span>Certified organic oat, almond, and grass-fed local dairy</span>
              </li>
              <li>
                <div className="bullet-icon-check"><Check size={14} /></div>
                <span>Daily in-house roasted beans stamped with roast dates</span>
              </li>
            </ul>

            <div className="why-cta-row">
              <a href="#story" className="btn btn-hero-order">
                <span>OUR FULL STORY</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Luxury Feature Cards */}
          <div className="luxury-why-cards-grid">
            {features.map((item, idx) => (
              <div className="luxury-why-card" key={idx}>
                <div className="why-card-icon-glow">
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
