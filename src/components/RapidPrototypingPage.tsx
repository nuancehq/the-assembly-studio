import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, Clock, Target, Shield, DollarSign, Users, CheckCircle, Star, Package, Layers, Settings, Phone, Mail, Download, Play } from 'lucide-react';

export default function RapidPrototypingPage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <Helmet>
        <title>Rapid Prototyping - 3D Printing Services | The Assembly</title>
        <meta name="description" content="Fast, high-quality 3D printed prototypes. From concept to physical product in 24-48 hours. Perfect for product development and testing." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-8 gap-3">
            <Zap className="h-6 w-6 text-blue-400" />
            <span className="text-blue-400 font-semibold tracking-wide">RAPID PROTOTYPING</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            From Idea to
            <div className="relative mt-4">
              <span className="block text-blue-400">Reality</span>
              <div className="absolute -right-12 top-0 text-blue-300">
                <Play className="h-8 w-8 animate-bounce" />
              </div>
            </div>
            <span className="block text-3xl md:text-4xl text-gray-300 mt-4">In 24-48 Hours</span>
          </h1>
          
          <p className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your concepts into physical prototypes with our lightning-fast 3D printing services. 
            Perfect for product development, testing, and iteration.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-blue-500 transform hover:scale-105 transition-all duration-300"
            >
              Get Your Prototype
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#materials" 
              className="group inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              View Materials
              <Download className="h-5 w-5 transform group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400">24-48h</div>
              <div className="text-gray-300">Turnaround Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">15+</div>
              <div className="text-gray-300">Material Options</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">0.1mm</div>
              <div className="text-gray-300">Layer Resolution</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Rapid Prototyping?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Speed, quality, and precision - everything you need to accelerate your product development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Lightning Fast</h3>
              <p className="text-gray-600 text-center">
                Upload your files today, hold your prototype tomorrow. Our streamlined process eliminates delays.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Precision Quality</h3>
              <p className="text-gray-600 text-center">
                Industrial-grade 3D printers with 0.1mm layer resolution for exceptional detail and accuracy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                <Layers className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Material Variety</h3>
              <p className="text-gray-600 text-center">
                15+ material options including PLA, ABS, PETG, TPU, and engineering-grade plastics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Simple 4-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From upload to delivery, we've streamlined every step to get you prototypes faster.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 mx-auto">
                <Download className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Upload Files</h3>
              <p className="text-gray-600">
                Send us your STL, OBJ, or CAD files. We accept all major formats.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 mx-auto">
                <Settings className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. We Optimize</h3>
              <p className="text-gray-600">
                Our engineers review and optimize your files for the best print quality.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 mx-auto">
                <Package className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. We Print</h3>
              <p className="text-gray-600">
                High-resolution 3D printing with quality control at every step.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 mx-auto">
                <ArrowRight className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Fast Delivery</h3>
              <p className="text-gray-600">
                Your prototypes ship within 24-48 hours via express delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section id="materials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Materials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our extensive range of materials to match your specific prototyping needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Standard Plastics</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>PLA - Easy printing, great detail</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>ABS - Durable, heat resistant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>PETG - Chemical resistant</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Flexible Materials</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>TPU - Rubber-like flexibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>TPE - Soft touch materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Flexible PLA - Easy flex</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Engineering Grade</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>PEEK - High temperature</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Carbon Fiber - Ultra strong</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Metal-filled - Conductive</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Specialty Materials</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Transparent - Clear parts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Wood-filled - Natural look</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Glow-in-dark - Special effects</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg relative">
              <div className="absolute -top-2 -right-2">
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">COMING SOON</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Resin Printing</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Standard Resin - High detail</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Tough Resin - Impact resistant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Castable - For jewelry</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Post-Processing</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Sanding & finishing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Painting & coating</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Assembly services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a startup or Fortune 500, our rapid prototyping accelerates your development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Product Development</h3>
              <p className="text-gray-600 text-sm">Test form, fit, and function before mass production</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">User Testing</h3>
              <p className="text-gray-600 text-sm">Get physical prototypes for user feedback and iteration</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Concept Models</h3>
              <p className="text-gray-600 text-sm">Transform ideas into tangible presentations</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Functional Testing</h3>
              <p className="text-gray-600 text-sm">Test mechanical properties and assemblies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 mb-12">Simple, volume-based pricing with no hidden fees</p>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">$0.15</div>
                <div className="text-gray-900 font-semibold mb-1">Per Gram</div>
                <div className="text-gray-600 text-sm">Standard materials (PLA, ABS)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">$0.25</div>
                <div className="text-gray-900 font-semibold mb-1">Per Gram</div>
                <div className="text-gray-600 text-sm">Engineering materials</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">$0.50</div>
                <div className="text-gray-900 font-semibold mb-1">Per Gram</div>
                <div className="text-gray-600 text-sm">Resin & specialty materials</div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 font-medium">Volume discounts available for orders over 1kg</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Prototype?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Upload your files today and have physical prototypes in your hands within 48 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:902-626-5938" 
              className="group inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              Get Quote by Phone
            </a>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-blue-100">
            <Mail className="h-4 w-4" />
            <span className="text-sm">Or email us at proto@theassemblystudio.com</span>
          </div>
        </div>
      </section>
    </div>
  );
}