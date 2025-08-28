import React from 'react';
import { Globe, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center relative z-10">
        <div className="flex items-center justify-center mb-8 gap-2">
          <Globe className="h-6 w-6 text-primary-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span className="text-primary-400 font-semibold tracking-wide">REVOLUTIONIZING GLOBAL MANUFACTURING</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-tight">
          Manufacturing,
          <div className="relative mt-4">
            <span className="block text-primary-400">Reassembled.</span>
            <div className="absolute -right-12 top-0 text-primary-300">
              <Zap className="h-8 w-8 animate-bounce" />
            </div>
          </div>
        </h1>
        
        <p className="mt-8 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
          Local, ethical, on-demand production—without the waste, delay, or risk of global supply chains.
        </p>
        
        <div className="mt-12 flex items-center justify-center gap-x-6">
          <Link 
            to="/contact" 
            className="group bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-primary-500 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Partner with The Assembly
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        <div className="relative group">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gray-800 shadow-2xl ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
              alt="Global network visualization showing connected nodes across continents"
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold">Connected Manufacturing Network</h3>
            <p className="text-gray-300 mt-2">Global reach. Local production. Zero inventory.</p>
          </div>
        </div>
      </div>
    </div>
  );
}