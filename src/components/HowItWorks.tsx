import React from 'react';
import { Upload, Settings2, Printer, Package, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Send Your File",
      description: "Upload your 3D model or book a design consultation.",
      details: [
        "Support for STL, OBJ, and other 3D formats",
        "Instant file analysis and feedback",
        "Design consultation available"
      ]
    },
    {
      icon: Settings2,
      title: "Choose Materials & Specs",
      description: "Select from our range of high-quality materials.",
      details: [
        "Wide range of materials and colors",
        "Expert recommendations",
        "Custom finishing options"
      ]
    },
    {
      icon: Printer,
      title: "We Print",
      description: "Your object is printed with precision and care.",
      details: [
        "High-resolution printing",
        "Quality control checks",
        "Real-time progress updates"
      ]
    },
    {
      icon: Package,
      title: "We Ship",
      description: "Carefully packaged and delivered to your door.",
      details: [
        "Secure, protective packaging",
        "Canada-wide shipping",
        "Track your order"
      ]
    }
  ];

  return (
    <div className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="how-it-works">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-primary-700/[0.03] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary-50 text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-8">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            How It
            <span className="text-primary-600"> Works</span>
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
            From file upload to delivery, we've streamlined every step of the process to make custom manufacturing accessible to everyone.
          </p>
        </div>

        <div className="mt-24 relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-100 via-primary-600 to-primary-100 -translate-y-1/2 hidden lg:block" />
          
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 text-5xl font-bold text-primary-100 group-hover:text-primary-200 transition-colors duration-300">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="pt-12 text-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group-hover:border-primary-200 group-hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-semibold leading-8 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {step.description}
                  </p>
                  
                  {/* Details List */}
                  <ul className="mt-6 space-y-3 text-left">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Link to="/quote" className="group inline-flex items-center gap-2 text-lg font-semibold text-primary-600 hover:text-primary-700 transition-colors">
            <span>Start Your Project Now</span>
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}