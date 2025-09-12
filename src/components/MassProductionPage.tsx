import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Factory, TrendingUp, Shield, Globe, DollarSign, Users, CheckCircle, Star, Package, Truck, BarChart, Phone, Mail, Award, Clock } from 'lucide-react';

export default function MassProductionPage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <Helmet>
        <title>Scalable Production - Flexible Manufacturing Solutions | The Assembly</title>
        <meta name="description" content="Scale your production seamlessly from 1 to 1 million units. Flexible manufacturing that grows with your business needs and market demand." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-8 gap-3">
            <Factory className="h-6 w-6 text-green-400" />
            <span className="text-green-400 font-semibold tracking-wide">SCALABLE PRODUCTION</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Scalable
            <div className="relative mt-4">
              <span className="block text-green-400">Production</span>
              <div className="absolute -right-12 top-0 text-green-300">
                <TrendingUp className="h-8 w-8 animate-bounce" />
              </div>
            </div>
            <span className="block text-3xl md:text-4xl text-gray-300 mt-4">That Grows With Your Business</span>
          </h1>
          
          <p className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Start with a single unit and scale seamlessly to millions. No tooling costs, no delays, no waiting for shipments from China. 
            Get products in days, not weeks, with instant iterations and updates.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-green-500 transform hover:scale-105 transition-all duration-300"
            >
              Start Production
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#capabilities" 
              className="group inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              View Capabilities
              <BarChart className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-green-400">$0</div>
              <div className="text-gray-300 text-sm md:text-base">Tooling Costs</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-green-400">Days</div>
              <div className="text-gray-300 text-sm md:text-base">Not Weeks</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-green-400">Local</div>
              <div className="text-gray-300 text-sm md:text-base">Production</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-green-400">Instant</div>
              <div className="text-gray-300 text-sm md:text-base">Updates</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Scalable Production?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to enterprise, our flexible approach grows with your business at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto">
                <DollarSign className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">No Tooling Costs</h3>
              <p className="text-gray-600 text-center">
                Skip expensive tooling and molds. Start production immediately without upfront investment or minimum orders.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Days Not Weeks</h3>
              <p className="text-gray-600 text-center">
                Local production means faster delivery. No waiting for overseas shipping or customs delays.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Instant Iterations</h3>
              <p className="text-gray-600 text-center">
                Make design changes on the fly. Update your products instantly without retooling or production delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section id="capabilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive manufacturing services across multiple technologies and materials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 mb-4">3D Printing</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>FDM/FFF Production</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Multiple Material Options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>High-Volume Printing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Quality Control</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Assembly</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Product Assembly</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Multi-component Products</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Quality Testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Custom Assembly Lines</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Packaging</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Custom Packaging</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Branded Packaging</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Kitting Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Direct Fulfillment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Production Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design review to delivery, we ensure every step meets your quality and timeline requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Design Review</h3>
              <p className="text-gray-600 text-sm">DFM analysis and optimization for production</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Tooling & Setup</h3>
              <p className="text-gray-600 text-sm">Create tooling and production line setup</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <Factory className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Production</h3>
              <p className="text-gray-600 text-sm">Scaled manufacturing with quality control</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quality Testing</h3>
              <p className="text-gray-600 text-sm">Comprehensive testing and inspection</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 mx-auto">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600 text-sm">Global shipping and logistics management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volume Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Production Volume Tiers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimized solutions for every production scale with transparent pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Small Batch</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">1 - 10,000</div>
              <p className="text-gray-600 mb-6">Perfect for initial market testing and limited releases</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">
                    <span className="line-through text-gray-400">2-4 weeks</span> → <span className="font-semibold text-green-600">3-5 days</span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">Flexible tooling options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">Design iteration support</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">POPULAR</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Medium Volume</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">10,000 - 100,000</div>
              <p className="text-gray-600 mb-6">Ideal for growing businesses and product launches</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">
                    <span className="line-through text-gray-400">4-6 weeks</span> → <span className="font-semibold text-green-600">1-2 weeks</span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">Optimized tooling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">Volume pricing benefits</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-4">High Volume</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">100,000+</div>
              <p className="text-gray-600 mb-6">Enterprise-scale production with maximum efficiency</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">
                    <span className="line-through text-gray-400">6-10 weeks</span> → <span className="font-semibold text-green-600">4-6 weeks</span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">Custom production lines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">Maximum cost optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Scale Your Production?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Start at any scale and grow seamlessly. Let's discuss your production goals and build a flexible solution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300"
            >
              Get Production Quote
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+1-800-ASSEMBLY" 
              className="group inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              Speak to Manufacturing Expert
            </a>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-green-100">
            <Mail className="h-4 w-4" />
            <span className="text-sm">Or email us at production@theassembly.studio</span>
          </div>
        </div>
      </section>
    </div>
  );
}