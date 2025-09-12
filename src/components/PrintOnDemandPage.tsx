import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Package, Zap, Truck, Globe, DollarSign, Users, CheckCircle, Star, ShoppingCart, BarChart, Repeat, Phone, Mail, Clock, TrendingUp } from 'lucide-react';

export default function PrintOnDemandPage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <Helmet>
        <title>Print on Demand - Custom Manufacturing | The Assembly</title>
        <meta name="description" content="Launch products without inventory risk. Our print-on-demand service handles manufacturing and fulfillment for your e-commerce orders." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-8 gap-3">
            <Package className="h-6 w-6 text-purple-400" />
            <span className="text-purple-400 font-semibold tracking-wide">PRINT ON DEMAND</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Sell Without
            <div className="relative mt-4">
              <span className="block text-purple-400">Inventory</span>
              <div className="absolute -right-12 top-0 text-purple-300">
                <ShoppingCart className="h-8 w-8 animate-bounce" />
              </div>
            </div>
            <span className="block text-3xl md:text-4xl text-gray-300 mt-4">Made & Shipped On-Demand</span>
          </h1>
          
          <p className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Launch your product line without upfront costs or inventory risk. We manufacture and ship directly to your customers 
            as orders come in - perfect for e-commerce and custom products.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-purple-500 transform hover:scale-105 transition-all duration-300"
            >
              Start Selling Today
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#how-it-works" 
              className="group inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              See How It Works
              <Repeat className="h-5 w-5 transform group-hover:rotate-180 transition-transform" />
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400">2-5 Days</div>
              <div className="text-gray-300">Order to Shipping</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">$0</div>
              <div className="text-gray-300">Upfront Investment</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">100+</div>
              <div className="text-gray-300">Product Categories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Print on Demand?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect for entrepreneurs, e-commerce businesses, and brands looking to test new products without risk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto">
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Zero Risk</h3>
              <p className="text-gray-600 text-center">
                No upfront inventory costs, no minimum orders. Only pay for what sells.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Fast Launch</h3>
              <p className="text-gray-600 text-center">
                Go from idea to selling in days. Perfect for testing market demand quickly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Global Reach</h3>
              <p className="text-gray-600 text-center">
                Fulfill orders worldwide through our distributed manufacturing network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Print on Demand Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple integration with your e-commerce platform. Orders automatically flow to production and fulfillment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6 mx-auto">
                <Package className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Upload Designs</h3>
              <p className="text-gray-600">
                Send us your product designs and specifications. We'll set up your catalog.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6 mx-auto">
                <ShoppingCart className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Customer Orders</h3>
              <p className="text-gray-600">
                Customers place orders through your website or marketplace listing.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6 mx-auto">
                <Zap className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. We Manufacture</h3>
              <p className="text-gray-600">
                Order automatically triggers production at our nearest facility.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6 mx-auto">
                <Truck className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Direct Shipping</h3>
              <p className="text-gray-600">
                Product ships directly to your customer with your branding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wide range of customizable products perfect for print-on-demand business models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tech Accessories</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Phone cases & covers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Laptop accessories</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Cable organizers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Custom electronics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Home & Lifestyle</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Decorative items</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Kitchen gadgets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Storage solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Planters & organizers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Fashion & Wearables</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Custom jewelry</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Watch accessories</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Eyewear accessories</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Belt buckles & clips</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Games & Toys</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Board game pieces</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Miniatures & figurines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Puzzle accessories</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Educational toys</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Business & Office</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Desk accessories</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Name plates & signs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Phone & tablet stands</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Cable management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Automotive</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Interior accessories</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Phone mounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Cup holder inserts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Custom trim pieces</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Health & Fitness</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Workout accessories</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Water bottle holders</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Pill organizers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Mobility aids</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Custom Products</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Promotional items</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Award & trophies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Personalized gifts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-purple-600" />
                  <span>Event merchandise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">E-commerce Integrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly connect with your existing store or marketplace for automated order processing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Shopify</h3>
              <p className="text-gray-600 text-sm">Direct app integration with automatic order sync</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">WooCommerce</h3>
              <p className="text-gray-600 text-sm">WordPress plugin for seamless integration</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Etsy</h3>
              <p className="text-gray-600 text-sm">Marketplace integration for handmade products</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Amazon</h3>
              <p className="text-gray-600 text-sm">FBA alternative with custom manufacturing</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Custom API</h3>
              <p className="text-gray-600 text-sm">RESTful API for custom integrations</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">More Platforms</h3>
              <p className="text-gray-600 text-sm">BigCommerce, Magento, and others</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Simple Pricing Model</h2>
          <p className="text-xl text-gray-600 mb-12">Pay only for what you sell with transparent per-unit pricing</p>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Base Cost</div>
                <div className="text-gray-900 font-semibold mb-1">+ Material + Labor</div>
                <div className="text-gray-600 text-sm">Calculated per product</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">+ $2-5</div>
                <div className="text-gray-900 font-semibold mb-1">Fulfillment Fee</div>
                <div className="text-gray-600 text-sm">Packaging & shipping prep</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">+ Shipping</div>
                <div className="text-gray-900 font-semibold mb-1">At Cost</div>
                <div className="text-gray-600 text-sm">Passed through to customer</div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-purple-50 rounded-lg">
              <p className="text-purple-800 font-medium">No setup fees, no monthly minimums, no hidden costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses are growing with our print-on-demand platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Went from prototype to $50k in sales in 6 months without any inventory investment."
              </p>
              <div className="font-bold text-gray-900">TechGadget Co.</div>
              <div className="text-gray-600 text-sm">Phone Accessories</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The quality is incredible and customers love the fast shipping. Game changer for our business."
              </p>
              <div className="font-bold text-gray-900">HomeDesign Studio</div>
              <div className="text-gray-600 text-sm">Home Decor</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Perfect for testing new product ideas. If it sells, we scale to mass production."
              </p>
              <div className="font-bold text-gray-900">Innovation Labs</div>
              <div className="text-gray-600 text-sm">Product Development</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Launch Your Product Line?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Start selling without inventory risk. Upload your designs and start taking orders today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300"
            >
              Get Started Free
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+1-800-ASSEMBLY" 
              className="group inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              Schedule Demo
            </a>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-purple-100">
            <Mail className="h-4 w-4" />
            <span className="text-sm">Or email us at pod@theassembly.studio</span>
          </div>
        </div>
      </section>
    </div>
  );
}