import React from 'react';
import { ArrowRight, DollarSign, Clock, Truck, Package, Store, ShoppingBag } from 'lucide-react';

export default function CanadaPage() {
  return (
    <div className="pt-32 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Faster. Cheaper.{' '}
            <span className="text-primary-600">Made in Canada.</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Stop losing money on cross-border shipping. Manufacture your 3D printed products in Canada 
            and deliver to your customers faster than ever.
          </p>
          <div className="mt-8">
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-500 transition-colors"
            >
              👉 Get Started Today
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Problem Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Cross-Border Shipping Is Hurting Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <DollarSign className="h-8 w-8 text-red-600 mb-4" />
              <p className="text-gray-700">
                <strong>Expensive duties and shipping fees</strong> cut into your margins
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <Clock className="h-8 w-8 text-red-600 mb-4" />
              <p className="text-gray-700">
                <strong>Customs delays</strong> frustrate your customers
              </p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <Truck className="h-8 w-8 text-red-600 mb-4" />
              <p className="text-gray-700">
                <strong>Complicated logistics</strong> drain your time and energy
              </p>
            </div>
          </div>
          <p className="mt-6 text-gray-600 text-center">
            If you're selling 3D printed products in Canada, shipping them across the border is costing you more than you think.
          </p>
        </div>

        {/* Solution Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            The Smarter Way to Sell in Canada
          </h2>
          <p className="text-xl text-gray-600 mb-8">With The Assembly, you can:</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <p className="text-gray-700">
                <strong>Produce in Canada</strong> — no cross-border headaches
              </p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <p className="text-gray-700">
                <strong>Cut costs</strong> — eliminate duties, tariffs, and long-haul freight
              </p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <p className="text-gray-700">
                <strong>Deliver faster</strong> — happy customers, more repeat sales
              </p>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <p className="text-gray-700">
                <strong>Scale on demand</strong> — no warehouses, no excess inventory
              </p>
            </div>
          </div>
        </div>

        {/* E-Commerce Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Built for E-Commerce Brands Like Yours
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you're running a DTC store or selling on a marketplace, we make Canadian fulfillment simple:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
              <Store className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Shopify</h3>
              <p className="text-gray-700">Faster delivery for Canadian customers</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
              <Package className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Amazon</h3>
              <p className="text-gray-700">Lower costs and smoother FBA fulfillment</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
              <ShoppingBag className="h-8 w-8 text-primary-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Etsy</h3>
              <p className="text-gray-700">Reliable, high-quality production close to home</p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How It Works
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-8 h-8 bg-primary-600 text-white rounded-full font-semibold text-sm">
                1
              </div>
              <p className="text-lg text-gray-700">Send us your 3D print files.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-8 h-8 bg-primary-600 text-white rounded-full font-semibold text-sm">
                2
              </div>
              <p className="text-lg text-gray-700">We manufacture your products on demand in Canada.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-8 h-8 bg-primary-600 text-white rounded-full font-semibold text-sm">
                3
              </div>
              <p className="text-lg text-gray-700">Your customers get fast, local shipping.</p>
            </div>
          </div>
          <p className="mt-6 text-gray-600 text-center">
            That's it—no delays, no duties, no wasted inventory.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gray-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Make the Switch?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start selling in Canada without the shipping headaches. Faster, cheaper, and more reliable—The Assembly makes it possible.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-500 transition-colors"
          >
            Let's Chat
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}