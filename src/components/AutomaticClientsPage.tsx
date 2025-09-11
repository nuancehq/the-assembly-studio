import React, { useState } from 'react';
import { CheckCircle, X, ArrowRight, Package, Truck, TrendingUp, Users, Flag, DollarSign, Clock, Shield, Star, Phone, Mail } from 'lucide-react';

export default function AutomaticClientsPage() {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    phone: '',
    website: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Blueprint request:', formData);
    alert('Thank you! Your FREE Expansion Blueprint is on its way to your inbox.');
    setFormData({ company: '', email: '', phone: '', website: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-4">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Factory className="text-blue-600" size={32} />
            <span className="text-2xl font-bold text-slate-900">Assembly Studio</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>Order By Phone: +1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>Need Help? Email Us - </span>
              <a href="mailto:support@assemblystudio.com" className="text-blue-600 hover:text-blue-800">
                Click Here
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <ArrowRight className="text-green-400" size={24} />
                <span className="text-green-400 font-semibold">EXPAND YOUR REACH</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                👉 Expand Into Canada Without the{' '}
                <span className="text-red-400">Cross-Border Chaos</span>
              </h1>
              
              <h2 className="text-2xl mb-10 text-blue-100 leading-relaxed">
                Already selling 3D printed products internationally? Get your <strong className="text-white">Canadian Expansion Blueprint</strong> (normally $497) completely free today and discover exactly how ready your business is to sell in Canada — <strong className="text-white">without customs, duties, or delays.</strong>
              </h2>

              <div className="mb-8">
                <a 
                  href="#blueprint-form" 
                  className="group bg-green-500 hover:bg-green-600 text-white px-10 py-6 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3"
                >
                  🟢 Get My Free Expansion Blueprint
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                </a>
              </div>

              <div className="flex flex-wrap gap-8 text-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Zero Obligation</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🇨🇦 📦</div>
                  <h3 className="text-2xl font-bold mb-4">Before vs After</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-red-500/20 p-4 rounded-xl">
                    <span>Cross-border shipping</span>
                    <span className="text-red-400">2-4 weeks + fees</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="text-green-400" size={32} />
                  </div>
                  <div className="flex items-center justify-between bg-green-500/20 p-4 rounded-xl">
                    <span>Local Canadian delivery</span>
                    <span className="text-green-400">2-3 days, no fees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Pain */}
      <section className="py-20 bg-red-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Why You're Losing Canadian Customers
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-l-4 border-l-red-500">
              <X className="mx-auto mb-4 text-red-500" size={48} />
              <h3 className="text-xl font-bold mb-4 text-slate-900">High shipping costs kill sales.</h3>
              <p className="text-slate-600">$50+ shipping makes customers abandon carts before checkout.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-l-4 border-l-red-500">
              <DollarSign className="mx-auto mb-4 text-red-500" size={48} />
              <h3 className="text-xl font-bold mb-4 text-slate-900">Surprise duties = refunds & chargebacks.</h3>
              <p className="text-slate-600">25-35% of orders get refused when hit with unexpected fees.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-l-4 border-l-red-500">
              <TrendingUp className="mx-auto mb-4 text-red-500" size={48} />
              <h3 className="text-xl font-bold mb-4 text-slate-900">Ad spend wasted when Canadian buyers bounce.</h3>
              <p className="text-slate-600">Traffic converts 180% lower in Canada due to shipping fears.</p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="#blueprint-form" 
              className="text-blue-600 hover:text-blue-800 font-semibold text-lg underline decoration-2 underline-offset-4 transition-colors inline-flex items-center gap-2"
            >
              🔗 See how we fix this in the free blueprint
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: The Promise */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Here's What Selling to Canada Could Look Like
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="text-6xl mb-6">🇨🇦</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Happy Canadian Buyers</h3>
              <p className="text-slate-600 text-lg">No surprise fees at the door. Customers pay exactly what they expect at checkout.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="text-6xl mb-6">🚚</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Fast Local Delivery</h3>
              <p className="text-slate-600 text-lg">Orders produced & shipped inside Canada. 2-3 day delivery nationwide.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="text-6xl mb-6">📈</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Instant Market Expansion</h3>
              <p className="text-slate-600 text-lg">A new market of 40M people, no extra effort on your part.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Value Stack */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
What You'll Get in Your Free Expansion Blueprint
          </h2>

          <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">Product Feasibility Check</h3>
                  <p className="text-xl text-slate-600">We'll show how your best-sellers perform in Canada and identify your biggest opportunities.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <DollarSign className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">Live Cost Comparison</h3>
                  <p className="text-xl text-slate-600">Real numbers: cross-border vs. local fulfillment costs for your specific products.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Package className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">Fulfillment Simulation</h3>
                  <p className="text-xl text-slate-600">Watch how we would produce and ship one of your products from our Canadian facility.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-green-100 rounded-2xl text-center">
              <p className="text-2xl font-bold text-slate-900 mb-2">
                <span className="line-through text-slate-500">Normally $497</span> — <span className="text-green-600">yours free.</span>
              </p>
            </div>

            <div className="mt-8 text-center">
              <a 
                href="#blueprint-form" 
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-6 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 inline-flex items-center gap-3"
              >
🟢 Get My Free Expansion Blueprint
                <ArrowRight size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Authority & Proof */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            You're Not Alone — Here's What Sellers & Buyers Say
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-red-500">
              <div className="text-4xl mb-4">🗣️</div>
              <blockquote className="text-lg text-slate-700 mb-4 italic">
                "25% of my Canadian orders refused to pay customs."
              </blockquote>
              <cite className="font-semibold text-slate-600">– Etsy Seller</cite>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-red-500">
              <div className="text-4xl mb-4">🗣️</div>
              <blockquote className="text-lg text-slate-700 mb-4 italic">
                "Every order gets hit with 30%+ in fees."
              </blockquote>
              <cite className="font-semibold text-slate-600">– Reddit Customer</cite>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-red-500">
              <div className="text-4xl mb-4">🗣️</div>
              <blockquote className="text-lg text-slate-700 mb-4 italic">
                "UPS charged me $25 brokerage on a $45 item."
              </blockquote>
              <cite className="font-semibold text-slate-600">– Canadian Buyer</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Risk Reversal */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12 text-slate-900">
            Zero Risk. Zero Obligation.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Shield className="text-green-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">No credit card required.</h3>
            </div>
            <div className="flex flex-col items-center">
              <X className="text-green-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">No contracts.</h3>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="text-green-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">We only move forward if you love what you see.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprint Form Section */}
      <section id="blueprint-form" className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8">
            Ready to Unlock the Canadian Market?
          </h2>
          
          <div className="bg-white rounded-3xl p-12 text-slate-800 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Get Your Free Expansion Blueprint</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name*"
                  required
                  className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-lg"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address*"
                  required
                  className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-lg"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number*"
                  required
                  className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-lg"
                />
              </div>
              
              <div>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Website/Store URL"
                  className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-lg"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl font-bold text-xl transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3 group"
              >
🟢 Get My Free Expansion Blueprint
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </button>
            </form>
            
            <p className="text-center mt-6 text-slate-600 text-lg">
              See how we make Canadian sales seamless — without customs, duties, or delays.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}