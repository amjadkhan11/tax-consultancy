import React, { useState, useEffect } from 'react';


import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import './App.css';
import WhatsAppButton from "./components/WhatsAppButton";
import ConsultationForm from "./components/ConsultationForm";
import ExpertModal from "./components/ExpertModal";

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isExpertOpen, setIsExpertOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navigation scrolled={scrolled} />
      <Hero onOpenForm={() => setIsFormOpen(true)} />
      <Services />
      <WhyChooseUs onOpenExpert={() => setIsExpertOpen(true)} />
      <Testimonials />
      <ContactCTA />
      <Footer />
      <WhatsAppButton />
      <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <ExpertModal isOpen={isExpertOpen} onClose={() => setIsExpertOpen(false)} onOpenForm={() => setIsFormOpen(true)} />
    </div>
  );
};

export default App;