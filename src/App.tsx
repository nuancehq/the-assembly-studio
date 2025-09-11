import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import BorderlessProductionPage from './components/BorderlessProductionPage';
import InternationalBrandsPage from './components/InternationalBrandsPage';
import InternationalBrandsPageV1 from './components/InternationalBrandsPageV1';
import InternationalBrandsPageV2 from './components/InternationalBrandsPageV2';
import InternationalBrandsPageV3 from './components/InternationalBrandsPageV3';
import InternationalBrandsPageV4 from './components/InternationalBrandsPageV4';
import AutomaticClientsPage from './components/AutomaticClientsPage';
import CanadianExpansionPage from './components/CanadianExpansionPage';
import EuropeanExpansionPage from './components/EuropeanExpansionPage';

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

function AppContent() {
  const location = useLocation();
  
  // AC Framework pages that should not show the main navigation
  const acFrameworkPages = [
    '/automatic-clients',
    '/canadian-expansion',
    '/european-expansion',
    '/international-brands',
    '/international-brands-v1',
    '/international-brands-v2', 
    '/international-brands-v3',
    '/international-brands-v4'
  ];
  
  const showMainNavigation = !acFrameworkPages.includes(location.pathname);
  
  return (
    <div className="min-h-screen bg-white">
      {showMainNavigation && <Navigation />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/canada" element={<CanadaPage />} />
          <Route path="/borderless-production" element={<BorderlessProductionPage />} />
          <Route path="/international-brands" element={<InternationalBrandsPage />} />
          <Route path="/international-brands-v1" element={<InternationalBrandsPageV1 />} />
          <Route path="/international-brands-v2" element={<InternationalBrandsPageV2 />} />
          <Route path="/international-brands-v3" element={<InternationalBrandsPageV3 />} />
          <Route path="/international-brands-v4" element={<InternationalBrandsPageV4 />} />
          <Route path="/automatic-clients" element={<AutomaticClientsPage />} />
          <Route path="/canadian-expansion" element={<CanadianExpansionPage />} />
          <Route path="/european-expansion" element={<EuropeanExpansionPage />} />
        </Routes>
      </main>
      {showMainNavigation && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}