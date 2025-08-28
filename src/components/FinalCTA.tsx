import React from 'react';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';

export default function FinalCTA() {
  return (
    <div className="relative bg-gradient-to-b from-white to-primary-50 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-primary-700/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Ready to
            <span className="text-primary-600"> Reassemble Manufacturing?</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Join the revolution in distributed, sustainable, and resilient manufacturing.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          <a href="/contact" className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-primary-600 px-8 py-8 text-white shadow-lg hover:bg-primary-500 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Calendar className="h-8 w-8 relative z-10" />
            <span className="relative z-10 text-lg font-semibold">Book a Demo</span>
            <ArrowRight className="h-5 w-5 relative z-10 transform group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="/contact" className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-white px-8 py-8 text-gray-900 shadow-lg ring-1 ring-gray-900/10 hover:ring-primary-600/20 hover:shadow-primary-100 transition-all duration-300">
            <MapPin className="h-8 w-8 text-primary-600" />
            <span className="text-lg font-semibold">Become a Certified Site</span>
            <ArrowRight className="h-5 w-5 text-primary-600 transform group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="/contact" className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-gray-900 px-8 py-8 text-white shadow-lg hover:bg-gray-800 transition-all duration-300">
            <Users className="h-8 w-8 text-primary-400" />
            <span className="text-lg font-semibold">Join the Beta</span>
            <ArrowRight className="h-5 w-5 text-primary-400 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Questions? Reach out at{' '}
            <a href="mailto:hello@theassemblystudio.com" className="text-primary-600 hover:text-primary-700 font-semibold">
              hello@theassemblystudio.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}