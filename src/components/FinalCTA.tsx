import React from 'react';
import { ArrowRight, Upload, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <div className="relative bg-gradient-to-b from-white to-primary-50 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-primary-700/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Ready to
            <span className="text-primary-600"> Build?</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Start your first project today—or reach out to see what's possible.<br />
            Let's make something real.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-3">
          <Link to="/quote" className="group relative flex items-center justify-center gap-x-2 rounded-xl bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-primary-500 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Upload className="h-5 w-5 relative z-10" />
            <span className="relative z-10">Upload a File</span>
          </Link>
          
          <Link to="/quote" className="group flex items-center justify-center gap-x-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-lg ring-1 ring-gray-900/10 hover:ring-primary-600/20 hover:shadow-primary-100 transition-all duration-300">
            <Calendar className="h-5 w-5 text-primary-600" />
            <span>Book a Consult</span>
          </Link>
          
          <Link to="/quote" className="group flex items-center justify-center gap-x-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-lg ring-1 ring-gray-900/10 hover:ring-primary-600/20 hover:shadow-primary-100 transition-all duration-300">
            <Phone className="h-5 w-5 text-primary-600" />
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}