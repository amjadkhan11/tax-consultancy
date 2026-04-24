import React from 'react';

const Services = () => {
  const services = [
    { icon: "📄", title: "Income Tax Filing", description: "Hassle-free ITR filing for individuals, HUFs, and businesses with maximum refund guarantee." },
    { icon: "🏢", title: "GST Registration & Filing", description: "Complete GST solutions including registration, return filing, and compliance management." },
    { icon: "📊", title: "Accounting Services", description: "Manage your finances with confidence.We provide reliable and accurate accounting services to help businesses stay compliant, organized, and financially strong." },
    { icon: "🌍", title: "NRI Tax Services", description: "Navigating Indian tax regulations as a Non-Resident Indian (NRI) requires precision and expertise. We offers specialized NRI ITR filing services, ensuring complete compliance with Indian tax laws while optimizing your tax position and facilitating timely refunds." },
    { icon: "⚖️", title: "TDS Return", description: "Stay compliant and avoid penalties with accurate and timely TDS return filing.We provide end-to-end support to ensure your TDS returns are filed correctly and on time." },
    { icon: "📈", title: "Financial Advisory", description: "Make smarter financial decisions with expert guidance. We offer personalized financial advisory services to help you grow, manage, and protect your wealth effectively." }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What We Offer</span>
          <h2>Comprehensive Tax Solutions</h2>
          <p>We provide end-to-end tax consultancy services tailored to your specific needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="/" className="service-link" onClick={(e) => { e.preventDefault(); alert(`Learn more about ${service.title}`); }}>Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;