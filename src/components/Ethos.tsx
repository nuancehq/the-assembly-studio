import React from 'react';

export default function Ethos() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&q=80"
                alt="Collection of 3D printed objects showcasing precision and quality"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 aspect-[4/3] w-2/3 overflow-hidden rounded-2xl bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1631744591853-998c4308bbb0?auto=format&fit=crop&q=80"
                alt="Close-up of a 3D printer nozzle creating intricate details"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We Make Things Differently
            </h2>
            <div className="mt-6 text-lg leading-8 text-gray-600 space-y-6">
              <p>
                We believe in fewer, better things.<br />
                In local production instead of global overproduction.<br />
                In helping creators build what they need—without waste, inventory, or compromises.
              </p>
              <p>
                Every part we make is one-of-a-kind.<br />
                Because the people we work with are, too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}