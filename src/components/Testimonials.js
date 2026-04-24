import React from 'react';
import shikhaImg from "../assets/shikha.jpg";
import KajalImg from "../assets/Kajal.jpeg";
import amjadImg from "../assets/amjad.jpeg";
import ankitaImg from "../assets/Ankita.jpeg";
import DarshanImg from "../assets/Darshan.jpeg";
import anilImg from "../assets/anil.png";
const Testimonials = () => {

  const testimonials = [
    {
      name: "Ankita Agarwal",
      role: "Business Owner",
      text: "Arpit Consultancy helped me save over ₹5 lakhs in taxes this year. Their expertise in business tax planning is unmatched!",
      rating: 5,
      img: ankitaImg
    },
    {
      name: "Kajal Singh",
      role: "Salaried Professional",
      text: "Excellent service! My ITR was filed within 2 days and I got a refund of ₹45,000. Highly recommended.",
      rating: 5,
      img: KajalImg
    },
    {
      name: "Anil Singh Negi",
      role: "Salaried Professional",
      text: "As an NRI, I was confused about my tax obligations. Their team guided me perfectly through the entire process.",
      rating: 5,
      img:  anilImg 
    },
    {
      name: "Darshan Buriuly",
      role: "Salaried Professional",
      text: "Easy and Quick Services! My ITR was filed same day and I got a refund of ₹10,000. Highly recommended.",
      rating: 5,
      img: DarshanImg
    },
    {
      name: "Shikha Raghav",
      role: "Business Owner",
      text: "Complete financial support for my business. From handling GST to income tax and financial reports, everything is managed smoothly. Their response time and support are impressive.",
      rating: 5,
      img: shikhaImg
    },
    {
      name: "Amjad Ansari",
      role: "Capital Gain",
      text: "Excellent support for capital gains tax filing. My tax was calculated accurately, and the filing process was smooth. I truly appreciate their transparency and expertise.",
      rating: 5,
      img: amjadImg
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">Client Stories</span>
          <h2>What Our Clients Say</h2>
          <p>Join thousands of satisfied clients who trust us with their tax needs</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              
              <div className="quote-icon">"</div>

              <p className="testimonial-text">{t.text}</p>

              <div className="testimonial-author">
                <img 
                  src={t.img || shikhaImg} 
                  alt={t.name} 
                  className="testimonial-img"
                />
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>

              <div className="rating">
                {"★".repeat(t.rating)}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
