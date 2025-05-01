import React from 'react';
import { ShoppingBag, Rocket, Palette, Wrench, CheckCircle2 } from 'lucide-react';

export default function WhoWeWorkWith() {
  const clients = [
    {
      icon: ShoppingBag,
      title: "Creators selling on Etsy or Shopify",
      description: "Scale your handmade business with reliable production.",
      benefits: ["Automated order fulfillment", "Custom packaging", "Bulk discounts"]
    },
    {
      icon: Rocket,
      title: "Entrepreneurs building products",
      description: "Bring your innovative ideas to market faster.",
      benefits: ["Rapid prototyping", "Design iteration", "Production scaling"]
    },
    {
      icon: Palette,
      title: "Designers testing prototypes",
      description: "Iterate and refine your designs with precision.",
      benefits: ["Multiple materials", "Quick turnaround", "Design feedback"]
    },
    {
      icon: Wrench,
      title: "Hobbyists with big ideas",
      description: "Turn your 3D models into reality.",
      benefits: ["Affordable pricing", "Quality prints", "Expert support"]
    }
  ];

  return (
    <div className="py-32 bg-white" id="who-we-are">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary-50 text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-8">
            Our Clients
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            For Makers, Brands,
            <span className="text-primary-600"> Builders, and Inventors</span>
          </h2>
          <p className="mt-8 text-xl leading-8 text-gray-600">
            We're your behind-the-scenes partner in bringing real things into the world—beautifully and efficiently.
          </p>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-white shadow-lg border border-gray-100
                       hover:shadow-2xl hover:border-primary-200 transform hover:-translate-y-1 
                       transition-all duration-300"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary-100 group-hover:bg-primary-600 transition-colors duration-300">
                <client.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900 group-hover:text-primary-600 transition-colors">
                {client.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {client.description}
              </p>
              <ul className="mt-6 space-y-3">
                {client.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}