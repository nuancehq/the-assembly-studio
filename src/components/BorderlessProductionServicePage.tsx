import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Globe, Zap, Shield, Clock, DollarSign, Users, CheckCircle, Star, Factory, Truck, Package, Target, TrendingUp, Award, MapPin, Phone, Mail } from 'lucide-react';

export default function BorderlessProductionServicePage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <Helmet>
        <title>Borderless Production - Manufacturing Solutions | The Assembly</title>
        <meta name="description" content="Expand globally with local manufacturing. The Assembly's Borderless Production connects your brand with distributed manufacturing networks worldwide." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-8 gap-3">
            <Globe className="h-6 w-6 text-primary-400" />
            <span className="text-primary-400 font-semibold tracking-wide">MANUFACTURING REIMAGINED</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Borderless
            <div className="relative mt-4">
              <span className="block text-primary-400">Production</span>
              <div className="absolute -right-12 top-0 text-primary-300">
                <Zap className="h-8 w-8 animate-bounce" />
              </div>
            </div>
          </h1>
          
          <p className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your global expansion strategy with distributed manufacturing. 
            Deliver products to international markets faster, cheaper, and with zero customs delays.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-primary-500 transform hover:scale-105 transition-all duration-300"
            >
              Start Your Expansion
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#how-it-works" 
              className="group inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Learn How It Works
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Borderless Production?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional global manufacturing creates barriers. We eliminate them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Faster Delivery</h3>
              <p className="text-gray-600 text-center">
                Manufacture locally in your target markets. Reduce shipping times from weeks to days.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Lower Costs</h3>
              <p className="text-gray-600 text-center">
                Eliminate duties, customs fees, and international shipping costs. Save 30-50% on logistics.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Risk Reduction</h3>
              <p className="text-gray-600 text-center">
                Avoid supply chain disruptions, customs delays, and currency fluctuations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Borderless Production Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple integration, powerful results. Here's how we transform your global manufacturing.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 mx-auto">
                <Target className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Identify Markets</h3>
              <p className="text-gray-600">
                We analyze your target markets and identify optimal manufacturing locations.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 mx-auto">
                <Factory className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Network Setup</h3>
              <p className="text-gray-600">
                Connect with our vetted manufacturing partners in your target regions.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 mx-auto">
                <Package className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Local Production</h3>
              <p className="text-gray-600">
                Your products are manufactured locally using our quality-controlled processes.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 mx-auto">
                <Truck className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Fast Delivery</h3>
              <p className="text-gray-600">
                Direct delivery to customers with local shipping speeds and no customs delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Markets</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with our established networks and expand to new markets as we grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900">Canada</h3>
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">LIVE</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">3D Printing & Manufacturing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">2-3 Day Delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">No Duties or Customs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">United States</h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">COMING SOON</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-500">East & West Coast hubs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-500">1-2 day delivery nationwide</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-500">Domestic manufacturing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">Europe</h3>
                <span className="bg-gray-100 text-gray-800 text-xs font-bold px-2 py-1 rounded-full">PLANNED</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-500">UK, Germany, Netherlands</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-500">Same-day to 2-day delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-500">EU compliance included</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Assembly Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why leading brands choose our borderless production platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Scalable Growth</h3>
                <p className="text-gray-600">
                  Start small and scale production as your international markets grow.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  Consistent quality across all manufacturing locations with our standardized processes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600">
                  Dedicated account management and technical support for your global operations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-600">
                  Access to manufacturing networks in key markets worldwide.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Integration</h3>
                <p className="text-gray-600">
                  Quick setup and integration with your existing e-commerce platforms.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Risk Management</h3>
                <p className="text-gray-600">
                  Reduce supply chain risks with distributed manufacturing capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Go Borderless?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join leading brands who are already expanding globally with our distributed manufacturing platform.
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
              <Phone className="h-5 w-5" />
              Schedule a Call
            </a>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-blue-100">
            <Mail className="h-4 w-4" />
            <span className="text-sm">Or email us at hello@theassembly.studio</span>
          </div>
        </div>
      </section>
    </div>
  );
}