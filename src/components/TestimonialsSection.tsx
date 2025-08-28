import React from 'react';
import { Shirt, Utensils, Car, ShoppingCart } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      icon: Shirt,
      company: "Nike",
      description: "Local drops, produced per city.",
      details: "Limited edition releases manufactured locally for each market, reducing shipping costs and delivery times while creating regional exclusivity."
    },
    {
      icon: Utensils,
      company: "McDonald's",
      description: "Store-specific Happy Meal toys made on demand.",
      details: "Custom promotional items produced locally for each restaurant, eliminating waste from overproduction and enabling personalized campaigns."
    },
    {
      icon: Car,
      company: "Ford & Philips",
      description: "Aftermarket parts delivered in days.",
      details: "Replacement parts and accessories manufactured on-demand near the customer, reducing inventory costs and improving service quality."
    },
    {
      icon: ShoppingCart,
      company: "Etsy & Shopify Sellers",
      description: "Fulfillment without bottlenecks.",
      details: "Small businesses access professional manufacturing networks without minimum orders or upfront investment in equipment."
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            From Global Brands to
            <span className="text-primary-600"> Independent Creators</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-full opacity-50"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 group-hover:bg-primary-700 group-hover:scale-110 transition-all duration-300">
                    <testimonial.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {testimonial.company}
                    </h3>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-lg font-semibold text-primary-600">
                    {testimonial.description}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {testimonial.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}