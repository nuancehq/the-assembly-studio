import React from 'react';
import { Eye, Leaf, Users, Recycle } from 'lucide-react';

export default function SustainabilitySection() {
  const features = [
    {
      icon: Eye,
      title: "Transparent supply chains",
      description: "Full visibility into who makes your products, where, and how—building trust with every order."
    },
    {
      icon: Leaf,
      title: "Reduced emissions",
      description: "Local production dramatically cuts transportation emissions and packaging waste."
    },
    {
      icon: Users,
      title: "Local jobs, global impact",
      description: "Supporting skilled makers in communities worldwide while serving global markets."
    },
    {
      icon: Recycle,
      title: "Ethical, zero-waste production",
      description: "On-demand manufacturing eliminates overproduction and reduces material waste."
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-primary-900 to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Resilient. Transparent.
            <span className="text-primary-400"> Sustainable.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-primary-400/50 transition-all duration-300">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-300 group-hover:text-gray-200 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}