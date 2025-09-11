import React from 'react';
import { ArrowRight, Zap, Factory, Package, Globe } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Manufacturing Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From rapid prototyping to scalable production, we offer complete manufacturing solutions 
            that grow with your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Rapid Prototyping */}
          <a 
            href="/rapid-prototyping"
            className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Rapid Prototyping</h3>
            <p className="text-gray-600 text-sm mb-4">
              Fast, high-quality 3D printed prototypes in 24-48 hours. Perfect for testing and iteration.
            </p>
            <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
              Learn More
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Scalable Production */}
          <a 
            href="/mass-production"
            className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4 group-hover:bg-green-200 transition-colors">
              <Factory className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Scalable Production</h3>
            <p className="text-gray-600 text-sm mb-4">
              Start small and scale seamlessly from 1 to 1 million units with flexible manufacturing.
            </p>
            <div className="flex items-center text-green-600 font-semibold text-sm group-hover:gap-2 transition-all">
              Learn More
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Print on Demand */}
          <a 
            href="/print-on-demand"
            className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4 group-hover:bg-purple-200 transition-colors">
              <Package className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Print on Demand</h3>
            <p className="text-gray-600 text-sm mb-4">
              Launch products without inventory risk. We manufacture and ship as orders come in.
            </p>
            <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:gap-2 transition-all">
              Learn More
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Borderless Production */}
          <a 
            href="/borderless-production-service"
            className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4 group-hover:bg-indigo-200 transition-colors">
              <Globe className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Borderless Production</h3>
            <p className="text-gray-600 text-sm mb-4">
              Expand globally with local manufacturing. Eliminate customs delays and reduce costs.
            </p>
            <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:gap-2 transition-all">
              Learn More
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/services"
            className="group inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-primary-500 transform hover:scale-105 transition-all duration-300"
          >
            View All Services
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}