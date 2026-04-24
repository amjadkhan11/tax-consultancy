import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Calendar, Award } from 'lucide-react';
import founderImg from "../assets/founder.jpeg";
import cofounderImg from "../assets/co-fou.jpeg";
import './ExpertModal.css';

const experts = [
  {
    id: 'founder',
    name: 'Arpit Bajoria',
    role: 'Founder & Lead Consultant',
    bio: '10+ years of experience in tax consultancy, business planning, and financial advisory.',
    experience: '5+ Years',
    clients: '2000+',
    rating: 5.0,
    image: founderImg,
    email: 'arpitbajoria19@gmail.com',
    phone: '6207822029',
    services: ['Tax Planning', 'Financial Advisory', 'Business Strategy'],
  },
  {
    id: 'cofounder',
    name: 'Ankita Agarwal',
    role: 'Co-Founder & GST Expert',
    bio: 'Specializes in GST, compliance, and client handling with strong domain expertise.',
    experience: '3+ Years',
    clients: '1000+',
    rating: 4.9,
    image: cofounderImg,
    email: 'agarwal.ankita2014@gmail.com',
    phone: '9999999999',
    services: ['GST Filing', 'Compliance', 'Audit'],
  }
];

const ExpertCard = ({ expert, onBook }) => {
  return (
    <div className="expert-card">
      <div className="card-content">
        <div className="expert-img-container">
          <img src={expert.image} alt={expert.name} />
          <div className="expert-badge-icon">
            <div>
              <Award size={16} strokeWidth={2.5} />
            </div>
          </div>
        </div>

        <h3 className="expert-name">{expert.name}</h3>
        <p className="expert-role">{expert.role}</p>

        <div className="expert-rating">
          <Star size={14} fill="currentColor" color="#d97706" />
          <span>{expert.rating}</span>
          <span>({expert.clients} clients)</span>
        </div>

        <p className="expert-bio">{expert.bio}</p>

        <div className="expert-info-grid">
          <div className="info-box">
            <p className="info-box-label">Experience</p>
            <p className="info-box-value">{expert.experience}</p>
          </div>
          <div className="info-box">
            <p className="info-box-label">Specialty</p>
            <p className="info-box-value" title={expert.services[0]}>{expert.services[0]}</p>
          </div>
        </div>

        <div className="expert-actions">
          <button className="btn-book-consultation" onClick={() => onBook(expert)}>
            <Calendar size={18} />
            <span>Book Consultation</span>
          </button>

          <div className="expert-links">
            <a href={`mailto:${expert.email}`}>Email</a>
            <span className="dot">•</span>
            <a href={`tel:+91${expert.phone}`}>Call</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpertModal = ({ isOpen, onClose, onOpenForm }) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleBookClick = (expert) => {
    onClose();
    if (onOpenForm) {
      onOpenForm();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="expert-modal-overlay"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            className="expert-modal-content"
          >
            {/* Header */}
            <div className="expert-modal-header">
              <button
                onClick={onClose}
                className="expert-close-modal"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <span className="expert-tag">Our Leadership</span>
              <h2>Meet Our <span>Experts</span></h2>
              <p>Connect with industry professionals for personalized guidance on taxation, compliance, and business strategy.</p>
            </div>

            {/* Content Body - 2 Sections as requested */}
            <div className="expert-modal-body">
              {experts.map((expert) => (
                <ExpertCard key={expert.id} expert={expert} onBook={handleBookClick} />
              ))}
            </div>

            {/* Footer */}
            <div className="expert-modal-footer">
              <p>Not sure who to talk to? <button onClick={() => handleBookClick(null)}>Get a general consultation</button></p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExpertModal;