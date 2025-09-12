import React from 'react';
import { ArrowRight, DollarSign, Clock, Truck, Package, Store, ShoppingBag, CheckCircle, Zap, Globe, Users, MapPin } from 'lucide-react';

export default function CanadaPage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-8 gap-2">
            <MapPin className="h-6 w-6 text-red-400" />
            <span className="text-red-400 font-semibold tracking-wide">MADE IN CANADA</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Faster. Cheaper.
            <div className="relative mt-4">
              <span className="block text-red-400">Made in Canada.</span>
              <div className="absolute -right-12 top-0 text-red-300">
                <Zap className="h-8 w-8 animate-bounce" />
              </div>
            </div>
          </h1>
          
          <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stop losing money on cross-border shipping. Manufacture your 3D printed products in Canada 
            and deliver to your customers faster than ever.
          </p>
          
          <div className="mt-12">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-red-500 transform hover:scale-105 transition-all duration-300"
            >
              👉 Get Started Today
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20 mb-8">
              The Problem
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Cross-Border Shipping Is Hurting Your Business
            </h2>
            <p className="text-xl text-gray-600">
              If you're selling 3D printed products in Canada, shipping them across the border is costing you more than you think.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-red-50 p-8 rounded-2xl border border-red-200 hover:shadow-xl hover:border-red-300 transition-all duration-300">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-red-800 group-hover:text-red-600 transition-colors">
                Expensive Costs
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                <strong>Duties and shipping fees</strong> cut into your margins, making it harder to compete on price.
              </p>
            </div>
            
            <div className="group bg-red-50 p-8 rounded-2xl border border-red-200 hover:shadow-xl hover:border-red-300 transition-all duration-300">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-red-800 group-hover:text-red-600 transition-colors">
                Customs Delays
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                <strong>Unpredictable delays</strong> frustrate your customers and hurt your reputation.
              </p>
            </div>
            
            <div className="group bg-red-50 p-8 rounded-2xl border border-red-200 hover:shadow-xl hover:border-red-300 transition-all duration-300">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-red-800 group-hover:text-red-600 transition-colors">
                Complex Logistics
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                <strong>Complicated processes</strong> drain your time and energy from growing your business.
              </p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20 mb-8">
              The Solution
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Smarter Way to Sell in Canada
            </h2>
            <p className="text-xl text-gray-600">With The Assembly, you can:</p>
          </div>
          
          <div className="space-y-6">
            <div className="group flex items-start gap-6 p-6 bg-green-50 rounded-2xl border border-green-200 hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-800 group-hover:text-green-600 transition-colors">
                  Produce in Canada
                </h3>
                <p className="text-gray-700 mt-1">No cross-border headaches, duties, or customs delays</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-6 p-6 bg-green-50 rounded-2xl border border-green-200 hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-800 group-hover:text-green-600 transition-colors">
                  Cut Costs
                </h3>
                <p className="text-gray-700 mt-1">Eliminate duties, tariffs, and expensive long-haul freight</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-6 p-6 bg-green-50 rounded-2xl border border-green-200 hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-800 group-hover:text-green-600 transition-colors">
                  Deliver Faster
                </h3>
                <p className="text-gray-700 mt-1">Happy customers, more repeat sales, better reviews</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-6 p-6 bg-green-50 rounded-2xl border border-green-200 hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-800 group-hover:text-green-600 transition-colors">
                  Scale on Demand
                </h3>
                <p className="text-gray-700 mt-1">No warehouses, no excess inventory, no upfront investment</p>
              </div>
            </div>
          </div>
        </div>

        {/* E-Commerce Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary-50 text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-8">
              Perfect Integration
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Built for E-Commerce Brands Like Yours
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're running a DTC store or selling on a marketplace, we make Canadian fulfillment simple:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-primary-50 p-8 rounded-2xl border border-primary-200 hover:shadow-xl hover:border-primary-300 transition-all duration-300">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 group-hover:scale-110 transition-transform duration-300">
                <Store className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-primary-800 group-hover:text-primary-600 transition-colors">
                Shopify
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Faster delivery for Canadian customers with seamless integration
              </p>
            </div>
            
            <div className="group bg-primary-50 p-8 rounded-2xl border border-primary-200 hover:shadow-xl hover:border-primary-300 transition-all duration-300">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 group-hover:scale-110 transition-transform duration-300">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-primary-800 group-hover:text-primary-600 transition-colors">
                Amazon
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Lower costs and smoother FBA fulfillment with local production
              </p>
            </div>
            
            <div className="group bg-primary-50 p-8 rounded-2xl border border-primary-200 hover:shadow-xl hover:border-primary-300 transition-all duration-300">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-primary-800 group-hover:text-primary-600 transition-colors">
                Etsy
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Reliable, high-quality production close to home for your handmade business
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-gray-100 text-gray-700 ring-1 ring-inset ring-gray-600/20 mb-8">
              Simple Process
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              No delays, no duties, no wasted inventory.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-100 via-primary-600 to-primary-100 -translate-y-1/2 hidden md:block"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
              <div className="group text-center relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>
                <div className="pt-16 pb-8 px-8 bg-white rounded-2xl shadow-lg border border-gray-100 group-hover:border-primary-200 group-hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-4">
                    Send Your Files
                  </h3>
                  <p className="text-gray-600">
                    Upload your 3D print files through our simple platform
                  </p>
                </div>
              </div>
              
              <div className="group text-center relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                </div>
                <div className="pt-16 pb-8 px-8 bg-white rounded-2xl shadow-lg border border-gray-100 group-hover:border-primary-200 group-hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-4">
                    We Manufacture
                  </h3>
                  <p className="text-gray-600">
                    Your products are made on demand in Canada with quality materials
                  </p>
                </div>
              </div>
              
              <div className="group text-center relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>
                <div className="pt-16 pb-8 px-8 bg-white rounded-2xl shadow-lg border border-gray-100 group-hover:border-primary-200 group-hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-4">
                    Fast Local Shipping
                  </h3>
                  <p className="text-gray-600">
                    Your customers get fast, local shipping with no customs delays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-32">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Global Businesses Choose The Assembly</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">50%</div>
                <div className="text-primary-100">Lower shipping costs</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">3x</div>
                <div className="text-primary-100">Faster delivery</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">0</div>
                <div className="text-primary-100">Customs delays</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32">
          <div className="relative bg-gradient-to-b from-gray-50 to-white p-12 rounded-3xl border border-gray-200 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-red-50 to-transparent rounded-tr-full opacity-50"></div>
            
            <div className="relative text-center">
              <div className="flex items-center justify-center mb-6 gap-2">
                <Users className="h-6 w-6 text-primary-600" />
                <span className="text-primary-600 font-semibold tracking-wide">JOIN THE REVOLUTION</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Make the Switch?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Start selling in Canada without the shipping headaches. Faster, cheaper, and more reliable—The Assembly makes it possible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="group inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-primary-500 transform hover:scale-105 transition-all duration-300"
                >
                  Let's Chat
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}