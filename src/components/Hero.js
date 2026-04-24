import React from 'react';
import taxImage from '../assets/tax.png';
const Hero = ({ onOpenForm }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        
        {/* LEFT SIDE */}
        <div className="hero-text">
          <span className="hero-badge">Trusted Tax Experts Since 2020</span>

          <h1>Maximize Your Returns, Minimize Your Taxes</h1>

          <p>
            Professional tax consultancy services for individuals and businesses.
            We help you navigate complex tax laws with ease and confidence.
          </p>

          <div className="hero-buttons">
           <button
  className="btn-primary"
  onClick={onOpenForm}
>
  Book Free Consultation →
</button>
            <button
              className="btn-secondary"
              onClick={() => alert('Learn more clicked!')}
            >
              Learn More
            </button>
          </div>

          {/* STATS */}
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Happy Clients</span>
            </div>

            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Success Rate</span>
            </div>

            <div className="stat">
              <span className="stat-number">₹5Cr+</span>
              <span className="stat-label">Tax Saved</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (NEW DESIGN) */}
        <div className="hero-visual">
          
          {/* IMAGE */}
          <img 
  src={taxImage} 
  alt="Tax Consulting" 
  className="hero-image" 
/>
          

          {/* FLOATING CARD */}
          <div className="hero-card">
            <h4>Why Choose Us?</h4>
            <ul>
              <li>✔ Expert CA Team</li>
              <li>✔ Fast Filing Process</li>
              <li>✔ 100% Data Security</li>
              <li>✔ Affordable Pricing</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;