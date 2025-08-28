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
              <li>Distributed Manufacturing</li>
              <li>Local Production Networks</li>
              <li>On-Demand Fulfillment</li>
              <li>Supply Chain Solutions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="/about" className="hover:text-primary-600">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary-600">Contact</a></li>
              <li><a href="/faq" className="hover:text-primary-600">FAQ</a></li>
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
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400">© 2025 The Assembly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}