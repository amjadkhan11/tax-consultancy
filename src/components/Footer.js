import React from 'react';
import logo from "../assets/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
  <img src={logo} alt="Arpit Consultancy Logo" />
  <span>Arpit Consultancy</span>
</div>
            <p>Empowering individuals and businesses with smart tax solutions since 2020.</p>
            <div className="social-links">
  <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <FaFacebookF />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noreferrer">
    <FaTwitter />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <FaInstagram />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
    <FaLinkedinIn />
  </a>
</div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>Services</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>About Us</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="/" onClick={(e) => { e.preventDefault(); alert('ITR Filing'); }}>ITR Filing</a>
            <a href="/" onClick={(e) => { e.preventDefault(); alert('GST Services'); }}>GST Services</a>
            <a href="/" onClick={(e) => { e.preventDefault(); alert('Tax Planning'); }}>Tax Planning</a>
            <a href="/" onClick={(e) => { e.preventDefault(); alert('Accounting Services'); }}>Accounting Services</a>
    <a href="/" onClick={(e) => { e.preventDefault(); alert('tds'); }}>TDS Return</a>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <p>📍 Plot 130, Sector 6, Vaishali, Ghaziabad - 201019</p>
            <p>📧 Arpitbajoria19@gmail.com</p>
            <p>📞 +91 62078 22029</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Arpit Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

