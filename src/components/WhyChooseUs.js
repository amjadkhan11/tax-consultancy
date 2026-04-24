import React from 'react';

const WhyChooseUs = ({ onOpenExpert }) => {
  const features = [
    { icon: "⭐", title: "5+ Years Experience", desc: "Decade of excellence in tax consultancy" },
    { icon: "🤝", title: "Personalized Service", desc: "Tailored solutions for unique needs" },
    { icon: "⚡", title: "Quick Turnaround", desc: "Fast and efficient service delivery" },
    { icon: "🔒", title: "100% Confidential", desc: "Your data security is our priority" }
  ];

  return (
    <section className="why-choose" id="about">
      <div className="container">
        <div className="why-content">
          <div className="why-text">
            <span className="section-tag">Why Trust Us</span>
            <h2>Your Trusted Partner in Tax Compliance</h2>
            <p>With a team of experienced chartered accountants and tax experts, we've helped thousands of clients save crores in taxes while ensuring 100% compliance.</p>
            <div className="features-grid">
              {features.map((feature, idx) => (
                <div className="feature" key={idx}>
                  <div className="feature-icon">{feature.icon}</div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-primary" onClick={onOpenExpert}>Meet Our Experts →</button>
          </div>
          <div className="why-image">
            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tax experts working" />
            <div className="exp-badge">
              <span className="exp-number">98%</span>
              <span className="exp-text">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;