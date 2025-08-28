import React from 'react';
import { Award, Network, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const steps = [
    {
      icon: Award,
      title: "Certify",
      description: "We train and certify local makers to produce standardized product categories with precision and care.",
      details: [
        "Rigorous quality standards",
        "Continuous training programs", 
        "Regular audits and assessments"
      ]
    },
    {
      icon: Network,
      title: "Connect",
      description: "Your orders are routed automatically to the closest certified Assembly site.",
      details: [
        "Intelligent routing algorithms",
        "Real-time capacity monitoring",
        "Seamless API integration"
      ]
    },
    {
      icon: Truck,
      title: "Deliver",
      description: "Products are made and shipped locally—reducing carbon, cost, and customer wait times.",
      details: [
        "Same-day or next-day delivery",
        "Reduced shipping costs",
        "Lower environmental impact"
      ]
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary-50 text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-8">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900" id="how-it-works">
            How It
            <span className="text-primary-600"> Works</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-100 via-primary-600 to-primary-100 -translate-y-1/2 hidden lg:block"></div>
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute -top-4 left-8 text-6xl font-bold text-primary-100 group-hover:text-primary-200 transition-colors duration-300">
                  {index + 1}
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="pt-12 text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group-hover:border-primary-200 group-hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-2 text-left">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <div className="h-2 w-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/contact" 
            className="group inline-flex items-center gap-2 text-lg font-semibold text-primary-600 hover:text-primary-700 transition-colors"
          >
            <span>Learn More About Our Process</span>
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}