'use client';

import React from 'react';
import { REVIEWS_DATA } from '@/data/galleryData';
import { Star, CheckCircle } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="container">
        {/* Rating Summary Bar */}
        <div className="reviews-summary-card">
          <div className="summary-left">
            <div className="big-rating">4.7</div>
            <div>
              <div className="stars-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <span className="rating-sub">OUTSTANDING PATRON RATING</span>
            </div>
          </div>

          <div>
            <div className="total-reviews-count">817+ Verified Reviews</div>
            <span className="verified-label">
              <CheckCircle size={14} style={{ display: 'inline', marginRight: 4 }} />
              Google & Yelp Community Verified
            </span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="reviews-grid">
          {REVIEWS_DATA.map((rev) => (
            <article className="review-card" key={rev.id}>
              <div className="review-card-top">
                <div className="reviewer-info">
                  <img src={rev.avatar} alt={rev.name} className="reviewer-avatar" />
                  <div>
                    <h4 className="reviewer-name">{rev.name}</h4>
                    <span className="reviewer-tag">{rev.tag}</span>
                  </div>
                </div>
                <div className="review-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>

              <p className="review-text">{rev.text}</p>

              <div className="review-footer">
                <span>Visited {rev.date}</span>
                <span className="review-favorite">Favorite: {rev.favorite}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
