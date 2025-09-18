import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="flex items-center">
              <img 
                src="/Sora Transparent Logo Remix.png" 
                alt="The Assembly Logo" 
                className="w-32 sm:w-40 h-auto object-contain"
              />
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Distributed Manufacturing for a Connected World
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="/services" className="hover:text-primary-600 font-medium">All Services</a></li>
              <li><a href="/rapid-prototyping" className="hover:text-primary-600">Rapid Prototyping</a></li>
              <li><a href="/mass-production" className="hover:text-primary-600">Scalable Production</a></li>
              <li><a href="/print-on-demand" className="hover:text-primary-600">DTC on Demand</a></li>
              <li><a href="/borderless-production-service" className="hover:text-primary-600">Borderless Production</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="/about" className="hover:text-primary-600">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary-600">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-primary-600">Privacy Policy</a></li>
              <li><a href="/terms-of-use" className="hover:text-primary-600">Terms of Use</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>hello@theassemblystudio.com</li>
              <li>Headquarters: Charlottetown, PE</li>
              <li>Network: Global</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 The Assembly. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-primary-600">Privacy Policy</a>
            <span className="text-gray-300">|</span>
            <a href="/terms-of-use" className="text-sm text-gray-400 hover:text-primary-600">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}