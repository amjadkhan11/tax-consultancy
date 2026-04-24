import React from 'react';

const ContactCTA = () => {
  return (
    <section className="contact-cta" id="contact">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Simplify Your Taxes?</h2>
          <p>Get a free consultation with our tax experts. No obligation, just expert advice.</p>
          <div className="cta-buttons">
            <button className="btn-primary btn-large" onClick={() => alert('Schedule call clicked!')}>Schedule Free Call →</button>
            <button className="btn-outline-white" onClick={() => alert('Call: +91 6207822029 ')}>Call: +91 6207822029</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;