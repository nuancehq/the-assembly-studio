import React from 'react';
import { Zap, Shield, Leaf } from 'lucide-react';

export default function MeetTheAssembly() {
  const features = [
    {
      icon: Zap,
      title: "No warehousing",
      description: "Zero inventory risk, maximum capital efficiency"
    },
    {
      icon: Shield,
      title: "No overseas delays", 
      description: "Local production means predictable, fast delivery"
    },
    {
      icon: Leaf,
      title: "No ethical compromise",
      description: "Transparent, sustainable, community-focused manufacturing"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Meet The Assembly:
            <span className="text-primary-600"> Localized Production for a Global World</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto">
            We certify local print and fabrication hubs to manufacture the products you need—on demand, zero-inventory, and near your customer.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl bg-gradient-to-b from-primary-50 to-white border border-primary-100 hover:shadow-xl hover:border-primary-300 transition-all duration-300"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 group-hover:bg-primary-700 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">
            Just fast, resilient, just-in-time manufacturing you can trust.
          </p>
        </div>
      </div>
    </div>
  );
}