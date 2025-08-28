import React from 'react';
import { Star } from 'lucide-react';

export default function GlobalBrands() {
  const testimonials = [
    {
      company: "TechCorp",
      type: "Global Brand",
      quote: "The Assembly transformed our prototyping process. What used to take weeks now takes days.",
      author: "Sarah Chen",
      title: "Head of Product"
    },
    {
      company: "CreativeCo",
      type: "Design Studio",
      quote: "Finally, a manufacturing partner that keeps up with our creative pace and quality standards.",
      author: "Marcus Rodriguez",
      title: "Creative Director"
    },
    {
      company: "StartupXYZ",
      type: "Independent Creator",
      quote: "From idea to market in record time. The Assembly made our impossible timeline possible.",
      author: "Emily Zhang",
      title: "Founder"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Global Brands to Independent Creators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by industry leaders and emerging innovators who demand excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-600 text-sm">{testimonial.title}</div>
                <div className="text-indigo-600 text-sm font-medium mt-1">{testimonial.company} " {testimonial.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}