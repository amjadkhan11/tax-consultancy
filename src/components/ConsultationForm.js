import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ConsultationForm.css';

const ConsultationForm = ({ isOpen, onClose }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 🔥 AM/PM logic
    const time = form.current.slot_time.value;
    const ampm = form.current.slot_ampm.value;

    const [hour, minute] = time.split(':');
    const formattedTime = `${hour}:${minute} ${ampm}`;

    // hidden field me value set kar do (EmailJS ke liye)
    form.current.full_time.value = formattedTime;

    const serviceID = 'service_viq4nbi';
    const templateID = 'template_kr9wlzj';
    const publicKey = 'haaTwEUdXe6rwf8f5';

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        () => {
          setIsSubmitting(false);
          alert('✅ Your consultation has been booked!');
          onClose();
        },
        (error) => {
          setIsSubmitting(false);
          console.error(error);
          alert('❌ Failed to send request');
        }
      );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <button className="close-modal" onClick={onClose}>×</button>

        <h2>Book a Free Consultation</h2>
        <p>Fill the form and we’ll contact you shortly.</p>

        <form ref={form} onSubmit={handleSubmit} className="consultation-form">

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="user_name" required placeholder="Name" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="user_phone" required placeholder="+91 XXXXX XXXXX" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="user_email" required placeholder="amjad@example.com" />
          </div>

          <div className="form-group">
            <label>Slot Date</label>
            <input type="date" name="slot_date" required />
          </div>

          {/* 🔥 TIME + AMPM */}
          <div className="form-row">
            <div className="form-group">
              <label>Slot Time</label>
              <input type="time" name="slot_time" required />
            </div>

            <div className="form-group">
              <label>AM / PM</label>
              <select name="slot_ampm" required>
                <option value="">Select</option>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          {/* hidden field for email */}
          <input type="hidden" name="full_time" />

          <div className="form-group">
            <label>Any Query</label>
            <textarea name="user_query" rows="4" placeholder="Write your query..." />
          </div>

          <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Booking...' : 'Book Slot'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;