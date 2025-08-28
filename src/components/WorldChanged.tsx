import React from 'react';
import { AlertTriangle, Ship, Warehouse, Eye } from 'lucide-react';

export default function WorldChanged() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Global trade is fragile and politicized",
      description: "Supply chains break down with every crisis, leaving businesses vulnerable."
    },
    {
      icon: Ship,
      title: "Shipping is costly, unreliable, and unsustainable", 
      description: "Weeks of transit time, unpredictable delays, and massive carbon footprints."
    },
    {
      icon: Warehouse,
      title: "Warehousing eats margins and increases risk",
      description: "Inventory ties up capital and creates waste when demand shifts."
    },
    {
      icon: Eye,
      title: "Manufacturing lacks transparency—and trust",
      description: "Black box production with no visibility into quality or ethics."
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            The world changed.
            <span className="text-red-600"> Manufacturing didn't.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 group-hover:bg-red-600 transition-colors duration-300">
                <problem.icon className="h-6 w-6 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                {problem.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl font-bold text-gray-900">
            It's time for something better.
          </p>
        </div>
      </div>
    </div>
  );
}