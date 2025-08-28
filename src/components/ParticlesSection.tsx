import React from 'react';

export default function ParticlesSection() {
  return (
    <div className="relative bg-gray-900 py-24 overflow-hidden">
      {/* Particle dots scattered across the section */}
      <div className="absolute inset-0">
        {/* Create scattered dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-60"></div>
        <div className="absolute top-1/3 left-3/4 w-1 h-1 bg-blue-400 rounded-full opacity-80"></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-blue-600 rounded-full opacity-40"></div>
        <div className="absolute top-3/4 left-2/3 w-2 h-2 bg-blue-500 rounded-full opacity-70"></div>
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-50"></div>
        <div className="absolute top-1/6 left-5/6 w-1.5 h-1.5 bg-blue-600 rounded-full opacity-60"></div>
        <div className="absolute top-5/6 left-1/5 w-1 h-1 bg-blue-500 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-4/5 w-2 h-2 bg-blue-400 rounded-full opacity-80"></div>
        
        {/* Add more scattered particles */}
        <div className="absolute top-1/5 left-2/5 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>
        <div className="absolute top-4/5 left-3/5 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-50"></div>
        <div className="absolute top-3/5 left-1/4 w-1 h-1 bg-blue-600 rounded-full opacity-70"></div>
        <div className="absolute top-2/5 left-4/6 w-2 h-2 bg-blue-400 rounded-full opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="text-gray-400 text-sm uppercase tracking-wider">
            Advanced Manufacturing Network
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm">Manufacturing Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24hrs</div>
              <div className="text-gray-400 text-sm">Average Turnaround</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">99.8%</div>
              <div className="text-gray-400 text-sm">Quality Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">10k+</div>
              <div className="text-gray-400 text-sm">Parts Manufactured</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}