import React from 'react';
import { ArrowRight, Globe, Zap, Shield, Clock, DollarSign, Users, CheckCircle, Star, Factory, Truck, Package } from 'lucide-react';

export default function BorderlessProductionPage() {
  return (
    <div className="pt-32 pb-16 bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-8 gap-3">
            <Globe className="h-6 w-6 text-primary-400" />
            <span className="text-primary-400 font-semibold tracking-wide">INTRODUCING</span>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold bg-blue-600 text-white ring-2 ring-blue-400 animate-pulse">
              BETA
            </span>
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
          
          <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The future of global manufacturing is here. Produce locally, deliver globally, 
            eliminate borders—all through one intelligent platform.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-primary-500 transform hover:scale-105 transition-all duration-300"
            >
              Join the Beta Program
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Learn More
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            🚀 Early access • Limited spots available • Exclusive beta pricing
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Beta Program Benefits */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20 mb-8">
              Beta Program Benefits
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Join the Beta?
            </h2>
            <p className="text-xl text-gray-600">
              Get exclusive early access to revolutionary cross-border manufacturing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-blue-50 p-8 rounded-2xl border border-blue-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-blue-800 group-hover:text-blue-600 transition-colors">
                Exclusive Access
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Be among the first to experience borderless manufacturing before public launch
              </p>
            </div>
            
            <div className="group bg-green-50 p-8 rounded-2xl border border-green-200 hover:shadow-xl hover:border-green-300 transition-all duration-300">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-green-800 group-hover:text-green-600 transition-colors">
                Beta Pricing
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Lock in special pricing and terms available only to beta participants
              </p>
            </div>
            
            <div className="group bg-purple-50 p-8 rounded-2xl border border-purple-200 hover:shadow-xl hover:border-purple-300 transition-all duration-300">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-purple-800 group-hover:text-purple-600 transition-colors">
                Shape the Future
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Your feedback directly influences product development and new features
              </p>
            </div>
          </div>
        </div>

        {/* How Borderless Production Works */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary-50 text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-8">
              Revolutionary Technology
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How Borderless Production Works
            </h2>
            <p className="text-xl text-gray-600">
              One platform. Global reach. Local production.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-primary-100 via-primary-600 to-primary-100 -translate-y-1/2 hidden lg:block"></div>
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
              <div className="group text-center relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="pt-16 pb-8 px-8 bg-white rounded-2xl shadow-lg border border-gray-100 group-hover:border-primary-200 group-hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-4">
                    Global Network
                  </h3>
                  <p className="text-gray-600">
                    Access certified manufacturing partners across multiple countries and regions
                  </p>
                </div>
              </div>
              
              <div className="group text-center relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Factory className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="pt-16 pb-8 px-8 bg-white rounded-2xl shadow-lg border border-gray-100 group-hover:border-primary-200 group-hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-4">
                    Smart Routing
                  </h3>
                  <p className="text-gray-600">
                    AI-powered platform automatically routes orders to optimal production locations
                  </p>
                </div>
              </div>
              
              <div className="group text-center relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="pt-16 pb-8 px-8 bg-white rounded-2xl shadow-lg border border-gray-100 group-hover:border-primary-200 group-hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-4">
                    Local Delivery
                  </h3>
                  <p className="text-gray-600">
                    Products manufactured and delivered locally, eliminating cross-border delays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for seamless global manufacturing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group flex items-start gap-6 p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Zero Customs Delays
                </h3>
                <p className="text-gray-600 mt-2">Eliminate cross-border shipping complications with local production</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-6 p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Faster Time to Market
                </h3>
                <p className="text-gray-600 mt-2">Reduce delivery times by up to 75% with local manufacturing networks</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-6 p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Lower Total Costs
                </h3>
                <p className="text-gray-600 mt-2">Eliminate duties, reduce shipping costs, and minimize inventory risk</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-6 p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  Zero Inventory Risk
                </h3>
                <p className="text-gray-600 mt-2">On-demand production means no upfront inventory investment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Beta Program Details */}
        <div className="mt-32">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-bold bg-white/20 text-white ring-2 ring-white/30 mb-6">
                🚀 BETA PROGRAM
              </div>
              <h2 className="text-3xl font-bold mb-4">What Beta Participants Get</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span>Priority access to new manufacturing locations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span>Dedicated customer success manager</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span>Beta pricing locked for 12 months</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span>Direct line to product development team</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span>Early access to new features and capabilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span>Quarterly strategy sessions with leadership</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span>Custom integration support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span>Beta community access and networking</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-32">
          <div className="relative bg-gradient-to-b from-gray-50 to-white p-12 rounded-3xl border border-gray-200 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-transparent rounded-bl-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-50 to-transparent rounded-tr-full opacity-50"></div>
            
            <div className="relative text-center">
              <div className="flex items-center justify-center mb-6 gap-2">
                <Globe className="h-6 w-6 text-primary-600" />
                <span className="text-primary-600 font-semibold tracking-wide">LIMITED BETA ACCESS</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Go Borderless?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join the manufacturing revolution. Limited spots available for our exclusive beta program.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="group inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-primary-500 transform hover:scale-105 transition-all duration-300"
                >
                  Apply for Beta Access
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/contact" 
                  className="group inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg border border-gray-200 hover:border-primary-600 hover:text-primary-600 transform hover:scale-105 transition-all duration-300"
                >
                  Schedule a Demo
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <div className="mt-6 text-sm text-gray-500">
                Questions? Email us at <a href="mailto:beta@theassemblystudio.com" className="text-primary-600 hover:text-primary-700 font-semibold">beta@theassemblystudio.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}