import React from 'react';
import { Printer, Package, Lightbulb, Truck, PenTool, ArrowRight } from 'lucide-react';

export default function WhatWeDo() {
  const features = [
    {
      icon: Printer,
      title: "High-quality prints in a range of materials",
      description: "From standard PLA to specialty resins, we've got your material needs covered."
    },
    {
      icon: Package,
      title: "Print-on-demand fulfillment",
      description: "Seamless integration with your Etsy & ecommerce platforms."
    },
    {
      icon: Lightbulb,
      title: "Prototyping + development support",
      description: "Expert guidance from concept to final product."
    },
    {
      icon: Truck,
      title: "Shipped anywhere in Canada",
      description: "No minimums required - from single pieces to small batches."
    },
    {
      icon: PenTool,
      title: "Design assistance available",
      description: "Need help with modeling? Our team is here to help."
    }
  ];

  return (
    <div className="py-32 bg-white" id="what-we-do">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary-50 text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-8">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Your Product.
            <span className="text-primary-600"> Our Layers.</span>
          </h2>
          <p className="mt-8 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            Assembly Hub is where design, craft, and digital manufacturing meet. We offer 3D printing, small-batch production, and thoughtful prototyping—on demand and on your terms.
          </p>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-2xl bg-white shadow-lg border border-gray-100 
                       hover:shadow-2xl hover:border-primary-200 transform hover:-translate-y-1 
                       transition-all duration-300 cursor-pointer"
            >
              <div className="absolute -top-6 left-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold leading-8 text-gray-900 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}