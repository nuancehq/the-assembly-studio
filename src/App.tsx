import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WorldChanged from './components/WorldChanged';
import MeetTheAssembly from './components/MeetTheAssembly';
import HowItWorks from './components/HowItWorks';
import ModernCommerce from './components/ModernCommerce';
import TestimonialsSection from './components/TestimonialsSection';
import SustainabilitySection from './components/SustainabilitySection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import FAQPage from './components/FAQPage';
import CanadaPage from './components/CanadaPage';

function HomePage() {
  return (
    <>
      <Hero />
      <WorldChanged />
      <MeetTheAssembly />
      <HowItWorks />
      <ModernCommerce />
      <TestimonialsSection />
      <SustainabilitySection />
      <FinalCTA />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/canada" element={<CanadaPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}