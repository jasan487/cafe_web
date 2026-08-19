'use client';

import React, { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { useCart } from '@/context/CartContext';
import { CalendarCheck, Flame, Sun, BookOpen, Coffee, CheckCircle2 } from 'lucide-react';

export default function ReservationModal() {
  const { isReserveOpen, closeReserveModal } = useModal();
  const { showToast } = useCart();

  const [seating, setSeating] = useState('Fireside Hearth');
  const [formData, setFormData] = useState({
    guests: '2',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: 'Midday (11:00 AM – 2:00 PM)',
    name: '',
    email: '',
    phone: ''
  });

  if (!isReserveOpen) return null;

  const seatingOptions = [
    {
      id: 'Fireside Hearth',
      title: 'Fireside Hearth',
      desc: 'Plush seating by crackling hearth',
      icon: <Flame size={18} />
    },
    {
      id: 'Sunlit Window Nook',
      title: 'Window Nook',
      desc: 'Yonge St view & natural light',
      icon: <Sun size={18} />
    },
    {
      id: 'Quiet Study Corner',
      title: 'Quiet Study Corner',
      desc: 'Power outlets & peaceful focus',
      icon: <BookOpen size={18} />
    },
    {
      id: 'Barista Tasting Bar',
      title: 'Barista Tasting Bar',
      desc: 'Front row to slow-bar craft brews',
      icon: <Coffee size={18} />
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      showToast('Please fill out all contact details.');
      return;
    }
    showToast(`🎉 Reservation confirmed for ${formData.name} at ${seating} on ${formData.date}!`);
    closeReserveModal();
  };

  return (
    <div className="custom-modal open" role="dialog" aria-label="Reserve a Table">
      <div className="modal-backdrop" onClick={closeReserveModal}></div>
      <div className="modal-dialog reserve-modal-dialog">
        <button
          type="button"
          className="modal-close-btn"
          onClick={closeReserveModal}
          aria-label="Close reservation modal"
        >
          &times;
        </button>

        <div className="reserve-modal-content">
          <div className="reserve-modal-header text-center">
            <div className="badge-pill-gold">
              <CalendarCheck size={14} /> Table Booking
            </div>
            <h3 className="reserve-modal-title">
              Reserve Your <span className="serif-italic">Table</span>
            </h3>
            <p className="reserve-modal-subtitle">
              2552 Yonge St, Toronto &bull; Free High-Speed Wi-Fi & Cozy Atmosphere
            </p>
          </div>

          <form className="popup-reserve-form" onSubmit={handleSubmit}>
            {/* Seating Cards */}
            <div className="seating-cards-group">
              <label className="option-label">1. Select Your Seating Atmosphere</label>
              <div className="seating-cards-grid">
                {seatingOptions.map((opt) => (
                  <div
                    key={opt.id}
                    className={`seating-card ${seating === opt.id ? 'active' : ''}`}
                    onClick={() => setSeating(opt.id)}
                  >
                    <div className="seating-card-icon">{opt.icon}</div>
                    <div className="seating-card-info">
                      <strong>{opt.title}</strong>
                      <span>{opt.desc}</span>
                    </div>
                    <div className="seating-card-check">
                      <CheckCircle2 size={18} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="popupGuests">Party Size *</label>
                <select
                  id="popupGuests"
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
                <label htmlFor="popupDate">Date *</label>
                <input
                  type="date"
                  id="popupDate"
                  className="form-input"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="popupTime">Preferred Time *</label>
                <select
                  id="popupTime"
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
                <label htmlFor="popupName">Full Name *</label>
                <input
                  type="text"
                  id="popupName"
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
                <label htmlFor="popupEmail">Email Address *</label>
                <input
                  type="email"
                  id="popupEmail"
                  className="form-input"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="popupPhone">Phone Number *</label>
                <input
                  type="tel"
                  id="popupPhone"
                  className="form-input"
                  placeholder="(416) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-forest btn-block" style={{ marginTop: 10 }}>
              Complete Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
