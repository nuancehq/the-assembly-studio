import React, { useState } from 'react';
import { CheckCircle, X, ArrowRight, Package, Truck, TrendingUp, Users, Flag, DollarSign, Clock, Shield, Star, Phone, Mail, Factory, AlertTriangle, PlayCircle } from 'lucide-react';

export default function EuropeanExpansionPage() {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    phone: '',
    website: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Blueprint request:', formData);
    alert('Thank you! Your Canadian Expansion Blueprint is being prepared and will be delivered within 24 hours.');
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
      <header className="bg-white py-3">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-slate-500" />
            <span className="text-sm text-slate-600">Order By Phone +1 (555) 123-4567</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Factory className="text-slate-700" size={18} />
            <span className="text-base font-bold text-slate-900">ASSEMBLY STUDIO</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-slate-500" />
            <span className="text-sm text-slate-600">Need Help? Email Us - </span>
            <a href="mailto:support@assemblystudio.com" className="text-sm text-blue-600 hover:text-blue-800">
              Click Here
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-slate-600/20"></div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-6 py-2 rounded-full font-semibold text-sm mb-8 border border-amber-200">
              🎯 For Any 3D Printing Business in Europe Struggling To Sell Into the U.S.
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-5xl mx-auto">
              New System Reveals A{' '}
              <span className="text-amber-300">Counterintuitive Approach</span>{' '}
              That Lets You{' '}
              <span className="text-emerald-300">Reach North American Buyers</span>{' '}
              Without Tariffs, Customs, Or International Shipping
            </h1>
            
            <p className="text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              While also <strong className="text-white">cutting costs, speeding delivery, and unlocking a market of 40M+ Canadian customers</strong>
            </p>
          </div>
          
          <div className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl max-w-2xl mx-auto">
              <div className="text-center">
                <PlayCircle className="mx-auto mb-6 text-white" size={80} />
                <h3 className="text-2xl font-bold mb-4">Video Explanation</h3>
                <p className="text-blue-200 text-lg">See exactly how European brands expand into Canada</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#blueprint-offer" 
              className="group bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-600/25 inline-flex items-center justify-center gap-3"
            >
              🟢 Get My Blueprint Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </a>
            <a 
              href="#story" 
              className="group border-2 border-white/40 hover:border-white/80 hover:bg-white/15 text-white px-10 py-5 rounded-2xl font-semibold text-xl transition-all hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              See How It Works
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            What is the Canadian Expansion Blueprint?
          </h2>
          
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-slate-100">
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              The Canadian Expansion Blueprint is a counterintuitive approach designed for European 3D printing businesses who are sick of fighting tariffs, changing trade rules, and unpredictable international shipping into the U.S.
            </p>
            
            <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-100">
              <p className="text-lg text-slate-700 mb-6">
                Instead of forcing your products through customs, we give you a <strong>personalized plan</strong> to serve Canada directly — with fast, domestic fulfillment and zero international headaches.
              </p>
              
              <p className="text-slate-700 mb-6">
                Here's what you'll see inside your personalized Blueprint:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-slate-700">Which of your products make the most sense to produce locally in Canada,</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-slate-700">A real cost comparison (international shipping vs. Canadian fulfillment),</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-slate-700">And the exact roadmap to unlock the Canadian market profitably.</p>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-slate-700 leading-relaxed text-center">
              And the best part? <strong>You don't have to ship internationally at all</strong> — we produce for you inside Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            The Story
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              If you run a 3D printing business in Europe, you've seen the same headlines I have:
            </p>
            
            <div className="bg-red-50 rounded-2xl p-8 mb-8">
              <div className="space-y-4 text-lg text-slate-700">
                <p className="flex items-center gap-3">
                  <AlertTriangle className="text-red-500 flex-shrink-0" size={20} />
                  New tariffs on imports.
                </p>
                <p className="flex items-center gap-3">
                  <AlertTriangle className="text-red-500 flex-shrink-0" size={20} />
                  Constantly shifting customs rules.
                </p>
                <p className="flex items-center gap-3">
                  <AlertTriangle className="text-red-500 flex-shrink-0" size={20} />
                  Rising shipping costs, slower delivery times, more angry buyers.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              For many European brands, the dream of expanding into the U.S. is slipping away. What used to be a growth opportunity has turned into a compliance nightmare.
            </p>
            
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-8 mb-8 rounded-r-xl">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                But here's the part most people miss:
              </p>
              <p className="text-2xl font-bold text-slate-900">
                👉 Canada is wide open.
              </p>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Canada has 40M+ consumers, the same buying habits as Americans, and a huge appetite for 3D printed products. But most European sellers ignore it, assuming it's "just as hard."
            </p>
            
            <p className="text-xl font-bold text-center text-slate-900 mb-8">
              It's not.
            </p>
            
            <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-200">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Because with our Canadian Expansion Blueprint, you don't need to ship into Canada at all.
                We handle production locally, fulfillment domestically, and shipping directly to Canadian buyers.
              </p>
              
              <p className="text-lg text-slate-700 mb-4">That means:</p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                  <p className="text-slate-700">No tariffs eating your margins.</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                  <p className="text-slate-700">No international shipping delays or costs.</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                  <p className="text-slate-700">No customs drama to scare away buyers.</p>
                </div>
              </div>
            </div>
            
            <p className="text-xl font-bold text-center text-slate-900">
              Just a clean, profitable way to sell into North America.
            </p>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="blueprint-offer" className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            The Offer
          </h2>
          
          <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto border border-slate-200">
            <p className="text-xl text-slate-700 leading-relaxed mb-8 text-center">
              When you grab your Canadian Expansion Blueprint, you're not downloading a book. You're getting a <strong>personalized plan</strong>, built for your 3D printing business.
            </p>
            
            <h3 className="text-3xl font-bold text-center mb-8 text-slate-900">
              Here's what's included:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-slate-700" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">Feasibility Report</h4>
                <p className="text-slate-600">Which of your products are best suited for Canadian buyers & local production.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="text-slate-700" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">Cost Comparison</h4>
                <p className="text-slate-600">Real numbers showing cross-border costs vs. Canadian domestic fulfillment.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-slate-700" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">Expansion Roadmap</h4>
                <p className="text-slate-600">A step-by-step plan for unlocking Canada while skipping the U.S. headaches.</p>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-center mb-4 text-slate-900">Delivered as:</h3>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <div className="text-center">
                  <Package className="mx-auto mb-2 text-slate-700" size={48} />
                  <p className="font-semibold">A personalized PDF report</p>
                </div>
                <div className="text-center">
                  <PlayCircle className="mx-auto mb-2 text-slate-700" size={48} />
                  <p className="font-semibold">A Loom walkthrough video</p>
                  <p className="text-sm text-slate-600">explaining exactly how to move forward</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-slate-600 mb-4">
                Normally, this level of consulting would cost <span className="line-through text-red-500">$497+</span>.
              </p>
              <p className="text-3xl font-bold text-emerald-700 mb-8">
                But today, you can claim your personalized Canadian Expansion Blueprint for just <span className="text-4xl">$7</span>
              </p>
              <p className="text-sm text-slate-500">(or free if we're testing that offer)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why 3D Printing Section */}
      <section className="py-20 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Why Only 3D Printing?
          </h2>
          
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-slate-100">
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              Because 3D printing comes with unique challenges:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-slate-700">Production is custom, made-to-order.</p>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-slate-700">Shipping costs swing wildly with material and size.</p>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-slate-700">Buyers expect fast delivery on unique items, not excuses about customs.</p>
              </div>
            </div>
            
            <p className="text-xl font-bold text-center text-slate-900">
              That's why this system is built exclusively for 3D printing businesses — not generic ecommerce, not dropshipping.
            </p>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Proof & Authority
          </h2>
          
          <p className="text-xl text-center text-slate-700 mb-12">
            European sellers aren't alone in this struggle. Look at what's being said globally:
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-l-red-400">
              <blockquote className="text-lg text-slate-700 mb-4 italic">
                "New tariffs make it impossible to profit selling into the U.S."
              </blockquote>
              <cite className="font-semibold text-slate-600">– EU Seller Forum</cite>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-l-red-400">
              <blockquote className="text-lg text-slate-700 mb-4 italic">
                "Shipping delays kill conversion rates. Buyers won't wait weeks."
              </blockquote>
              <cite className="font-semibold text-slate-600">– Reddit Seller</cite>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-l-red-400">
              <blockquote className="text-lg text-slate-700 mb-4 italic">
                "Customs rules change so often, we never know what to expect."
              </blockquote>
              <cite className="font-semibold text-slate-600">– Ecom Community</cite>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-slate-700 mb-4">
              These aren't edge cases. They're the reality of trying to sell across borders today.
            </p>
            <p className="text-xl font-bold text-slate-900">
              The Blueprint solves this by skipping international shipping entirely.
            </p>
          </div>
        </div>
      </section>

      {/* Risk Reversal Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12 text-slate-900">
            Risk-Free
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <X className="text-slate-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">No contracts.</h3>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="text-slate-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">No obligation.</h3>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="text-emerald-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">30-day money-back guarantee.</h3>
            </div>
          </div>
          
          <p className="text-lg text-slate-700">
            And if you choose the $7 option, it comes with a 30-day money-back guarantee.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to reach North American buyers without U.S. tariffs or international shipping headaches?
          </h2>
          
          <div className="bg-white rounded-3xl p-12 text-slate-800 max-w-2xl mx-auto shadow-2xl border border-slate-200">
            <h3 className="text-2xl font-bold mb-8">Get Your Canadian Expansion Blueprint</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name*"
                required
                className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-slate-500 focus:outline-none transition-colors text-lg"
              />
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                required
                className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-slate-500 focus:outline-none transition-colors text-lg"
              />
              
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                required
                className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-slate-500 focus:outline-none transition-colors text-lg"
              />
              
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Website/Store URL"
                className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-slate-500 focus:outline-none transition-colors text-lg"
              />
              
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white p-6 rounded-xl font-bold text-xl transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-600/25 flex items-center justify-center gap-3 group"
              >
                🟢 Get My Canadian Expansion Blueprint Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
              </button>
            </form>
            
            <p className="text-center mt-6 text-slate-600 text-lg">
              Discover how to unlock Canada — a market of 40M+ consumers — with domestic fulfillment built for 3D printing businesses like yours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}