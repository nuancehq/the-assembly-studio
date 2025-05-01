import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layers } from 'lucide-react';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import DesignHelp from './components/DesignHelp';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import HowItWorks from './components/HowItWorks';
import Ethos from './components/Ethos';
import FinalCTA from './components/FinalCTA';
import QuotePage from './components/QuotePage';

function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Layers className="h-10 w-10 text-primary-600" />
            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              The Assembly
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#what-we-do" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              What We Do
            </a>
            <a href="/#how-it-works" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              How It Works
            </a>
            <a href="/#who-we-are" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Who We Are
            </a>
            <a href="/quote" className="btn-primary">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <DesignHelp />
      <WhoWeWorkWith />
      <HowItWorks />
      <Ethos />
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
            <Route path="/quote" element={<QuotePage />} />
          </Routes>
        </main>

        <footer className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center">
                  <Layers className="h-6 w-6 text-primary-600" />
                  <span className="ml-2 text-lg font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                    The Assembly
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  A Modern Hub for Custom, Made-to-Order Things
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>3D Printing</li>
                  <li>Design Consultation</li>
                  <li>Prototyping</li>
                  <li>Small Batch Production</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>FAQ</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>hello@assemblyhub.co</li>
                  <li>1-800-ASSEMBLY</li>
                  <li>Toronto, ON</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-400">© 2025 The Assembly. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}