'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { MapPin, Clock, Phone, Mail, Calendar, Sparkles } from 'lucide-react';

export default function LocationReservation() {
  const { showToast } = useCart();
  const [formData, setFormData] = useState({
    guests: '2',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: 'Midday (11:00 AM – 2:00 PM)',
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      showToast('Please fill out all required fields.');
      return;
    }
    showToast(`🎉 Table reserved for ${formData.name} on ${formData.date} (${formData.time})!`);
    setFormData({
      guests: '2',
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      time: 'Midday (11:00 AM – 2:00 PM)',
      name: '',
      email: '',
      phone: ''
    });
  };

  return (
    <section className="section location-section" id="location">
      <div className="container">
        <div className="location-grid">
          {/* Location Info */}
          <div className="location-info-col">
            <div className="section-eyebrow">
              <span className="eyebrow-line"></span>
              <span>VISIT & CONNECT</span>
            </div>
            <h2 className="section-title">Join Us in Midtown Toronto</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 24 }}>
              Located right on Yonge Street near Eglinton. Free high-speed Wi-Fi, accessible power stations, and intimate seating by the fireplace.
            </p>

            <div className="location-details-list">
              <div className="loc-item">
                <div className="loc-icon"><MapPin size={20} /></div>
                <div className="loc-content">
                  <strong>Address</strong>
                  <p>2552 Yonge St, Toronto, ON M4P 2J2, Canada</p>
                </div>
              </div>

              <div className="loc-item">
                <div className="loc-icon"><Clock size={20} /></div>
                <div className="loc-content">
                  <strong>Hours of Hospitality</strong>
                  <div className="hours-list">
                    <span>Monday – Friday: <strong>7:00 AM – 8:00 PM</strong></span>
                    <span>Saturday – Sunday: <strong>8:00 AM – 9:00 PM</strong></span>
                  </div>
                </div>
              </div>

              <div className="loc-item">
                <div className="loc-icon"><Phone size={20} /></div>
                <div className="loc-content">
                  <strong>Phone & Inquiries</strong>
                  <p><a href="tel:+14164856464" style={{ color: 'var(--color-caramel)', fontWeight: 600 }}>+1 416-485-6464</a></p>
                </div>
              </div>
            </div>
          </div>

          {/* Table Booking Form Card */}
          <div className="location-form-card">
            <div className="badge-pill-gold">
              <Sparkles size={14} /> Instant Table Booking
            </div>
            <h3 className="form-title">Reserve Your <span className="serif-italic">Table</span></h3>
            <p className="form-subtitle">Secure seating by the hearth or a sunlit window desk.</p>

            <form className="reservation-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="resGuests">Party Size *</label>
                  <select
                    id="resGuests"
                    className="form-input"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  >
                    <option value="1">1 Person (Quiet Work/Reading)</option>
                    <option value="2">2 Persons (Cozy Booth)</option>
                    <option value="3-4">3 to 4 Persons (Table)</option>
                    <option value="5-6">5 to 6 Persons (Gathering)</option>
                    <option value="7+">7+ Group (Private Tasting)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="resDate">Date *</label>
                  <input
                    type="date"
                    id="resDate"
                    className="form-input"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="resTime">Preferred Time *</label>
                  <select
                    id="resTime"
                    className="form-input"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="Morning (8:00 AM – 11:00 AM)">Morning (8:00 AM – 11:00 AM)</option>
                    <option value="Midday (11:00 AM – 2:00 PM)">Midday (11:00 AM – 2:00 PM)</option>
                    <option value="Afternoon (2:00 PM – 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="resName">Full Name *</label>
                  <input
                    type="text"
                    id="resName"
                    className="form-input"
                    placeholder="e.g. Maya Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="resEmail">Email Address *</label>
                  <input
                    type="email"
                    id="resEmail"
                    className="form-input"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="resPhone">Phone Number *</label>
                  <input
                    type="tel"
                    id="resPhone"
                    className="form-input"
                    placeholder="(416) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-forest btn-block" style={{ marginTop: 10 }}>
                Confirm Table Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
