import React from 'react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/Sora Transparent Logo Remix.png" 
                alt="The Assembly Logo" 
                className="w-32 sm:w-40 md:w-48 h-auto object-contain"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              How It Works
            </button>
            <button className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Who It's For
            </button>
            <a href="/about" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              About
            </a>
            <a href="/faq" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              FAQ
            </a>
            <a href="/contact" className="btn-primary">
              Partner With Us
            </a>
          </div>
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}