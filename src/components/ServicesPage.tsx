import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, Factory, Package, Globe, Clock, DollarSign, Users, CheckCircle, Star, TrendingUp, Shield, Award, Target, Settings, BarChart } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="pb-16 bg-white">
      <Helmet>
        <title>Manufacturing Services - Complete Production Solutions | The Assembly</title>
        <meta name="description" content="Comprehensive manufacturing services from rapid prototyping to mass production. 3D printing, injection molding, and global fulfillment solutions." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-slate-700 pt-24 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-8 gap-3">
            <Settings className="h-6 w-6 text-primary-400" />
            <span className="text-primary-400 font-semibold tracking-wide">MANUFACTURING SERVICES</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Complete
            <div className="relative mt-4">
              <span className="block text-primary-400">Production</span>
              <div className="absolute -right-12 top-0 text-primary-300">
                <Factory className="h-8 w-8 animate-bounce" />
              </div>
            </div>
            <span className="block text-3xl md:text-4xl text-gray-300 mt-4">Solutions</span>
          </h1>
          
          <p className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From concept to customer delivery, we provide end-to-end manufacturing solutions. 
            Whether you need rapid prototypes, mass production, or global fulfillment - we've got you covered.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-primary-500 transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="group inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Explore Services
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary-400">24hr</div>
              <div className="text-gray-300 text-sm md:text-base">Prototyping</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary-400">10M+</div>
              <div className="text-gray-300 text-sm md:text-base">Units Produced</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary-400">50+</div>
              <div className="text-gray-300 text-sm md:text-base">Countries</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary-400">99.8%</div>
              <div className="text-gray-300 text-sm md:text-base">Quality Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Manufacturing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for every stage of your product journey, from initial concept to global distribution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Rapid Prototyping */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Rapid Prototyping</h3>
                  <p className="text-blue-600 font-semibold">24-48 Hour Turnaround</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Transform your ideas into physical prototypes with lightning-fast 3D printing services. 
                Perfect for testing, iteration, and validating your designs before mass production.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="font-bold text-blue-600">15+</div>
                  <div className="text-gray-600 text-sm">Materials</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="font-bold text-blue-600">0.1mm</div>
                  <div className="text-gray-600 text-sm">Precision</div>
                </div>
              </div>
              <a 
                href="/rapid-prototyping" 
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:gap-3"
              >
                Learn More About Prototyping
                <ArrowRight className="h-4 w-4 transition-all" />
              </a>
            </div>

            {/* Mass Production */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Factory className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Scalable Production</h3>
                  <p className="text-green-600 font-semibold">Grows With Your Business</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Start small and scale seamlessly with our flexible manufacturing network. 
                Multiple technologies that adapt to your exact needs, from single units to millions.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="font-bold text-green-600">Flexible</div>
                  <div className="text-gray-600 text-sm">Scaling</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="font-bold text-green-600">Any</div>
                  <div className="text-gray-600 text-sm">Volume</div>
                </div>
              </div>
              <a 
                href="/mass-production" 
                className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors group-hover:gap-3"
              >
                Learn More About Scalable Production
                <ArrowRight className="h-4 w-4 transition-all" />
              </a>
            </div>

            {/* Print on Demand */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Package className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Print on Demand</h3>
                  <p className="text-purple-600 font-semibold">Zero Inventory Risk</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Launch products without upfront costs or inventory risk. We manufacture and ship directly 
                to your customers as orders come in - perfect for e-commerce businesses.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="font-bold text-purple-600">2-5 Days</div>
                  <div className="text-gray-600 text-sm">Fulfillment</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="font-bold text-purple-600">100+</div>
                  <div className="text-gray-600 text-sm">Products</div>
                </div>
              </div>
              <a 
                href="/print-on-demand" 
                className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors group-hover:gap-3"
              >
                Learn More About Print on Demand
                <ArrowRight className="h-4 w-4 transition-all" />
              </a>
            </div>

            {/* Borderless Production */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                  <Globe className="h-8 w-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Borderless Production</h3>
                  <p className="text-indigo-600 font-semibold">Global Manufacturing</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Expand into international markets with local manufacturing. Eliminate customs delays, 
                reduce shipping costs, and deliver faster with our distributed production network.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-indigo-50 rounded-lg">
                  <div className="font-bold text-indigo-600">3 Days</div>
                  <div className="text-gray-600 text-sm">Delivery</div>
                </div>
                <div className="text-center p-3 bg-indigo-50 rounded-lg">
                  <div className="font-bold text-indigo-600">$0</div>
                  <div className="text-gray-600 text-sm">Customs</div>
                </div>
              </div>
              <a 
                href="/borderless-production-service" 
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group-hover:gap-3"
              >
                Learn More About Borderless Production
                <ArrowRight className="h-4 w-4 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose The Assembly</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just a manufacturer - we're your production partner from concept to customer delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Speed</h3>
              <p className="text-gray-600">From 24-hour prototypes to rapid production scaling, we deliver fast.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">Rigorous quality control processes and testing at every step.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">Manufacturing and fulfillment capabilities in key markets worldwide.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">Dedicated account management and engineering support throughout your project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to take your product from concept to market with minimal friction.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">Understand your requirements and recommend the best approach</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Prototyping</h3>
              <p className="text-gray-600 text-sm">Rapid prototypes to validate design and functionality</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">Design for manufacturing and production optimization</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Production</h3>
              <p className="text-gray-600 text-sm">Scaled manufacturing with quality control</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fulfillment</h3>
              <p className="text-gray-600 text-sm">Global shipping and customer delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Make</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real examples of products we've manufactured for our clients across different scales and applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-bold text-gray-900 mb-3">Tech Accessories</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Phone cases & stands</li>
                <li>• Cable organizers</li>
                <li>• Laptop accessories</li>
                <li>• Custom electronics housings</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="font-bold text-gray-900 mb-3">Home & Garden</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Planters & organizers</li>
                <li>• Kitchen gadgets</li>
                <li>• Storage solutions</li>
                <li>• Decorative items</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="font-bold text-gray-900 mb-3">Tools & Parts</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Replacement parts</li>
                <li>• Custom fixtures</li>
                <li>• Automotive accessories</li>
                <li>• Mechanical components</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="font-bold text-gray-900 mb-3">Custom Products</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Promotional items</li>
                <li>• Personalized gifts</li>
                <li>• Awards & trophies</li>
                <li>• Art & sculptures</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Have a unique product idea? We love challenges and custom projects.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Manufacturing?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            From your first prototype to million-unit production runs, we're here to support your journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+1-800-ASSEMBLY" 
              className="group inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <BarChart className="h-5 w-5" />
              Schedule Consultation
            </a>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-primary-100">
            <Award className="h-4 w-4" />
            <span className="text-sm">Quality-assured manufacturing • Global delivery • Satisfaction guaranteed</span>
          </div>
        </div>
      </section>
    </div>
  );
}