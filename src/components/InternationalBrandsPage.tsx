import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, AlertTriangle, Truck, Factory, Zap, DollarSign, Phone, Clock, Users, Star, ArrowRight, TrendingUp, Shield, Globe, Package, Award, Timer, Mail } from 'lucide-react';

export default function InternationalBrandsPage() {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    website: '',
    monthlyOrders: '',
    products: ''
  });

  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  });

  // Animated counter for stats
  const [statsVisible, setStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    refusalRate: 0,
    packageCost: 0,
    dutiesPercent: 0
  });

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsVisible) {
          setStatsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [statsVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        refusalRate: Math.floor(35 * progress),
        packageCost: Math.floor(112 * progress), 
        dutiesPercent: Math.floor(28.3 * progress * 10) / 10
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats({ refusalRate: 35, packageCost: 112, dutiesPercent: 28.3 });
      }
    }, stepTime);
  };

  // Countdown timer for urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submission:', formData);
    alert('Thank you! We\'ll contact you within 24 hours to set up your FREE trial.');
    setFormData({ company: '', email: '', website: '', monthlyOrders: '', products: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>International Brands - The Assembly</title>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-24 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 text-center">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                Stop Losing Canadian Sales to{' '}
                <span className="text-red-400">High Shipping Costs</span>
              </h1>
              
              <p className="text-2xl mb-12 text-slate-200 leading-relaxed max-w-4xl mx-auto">
                Turn Canada into your most profitable market with local 3D printing.
                <strong className="text-white block mt-2">No duties, no delays, no angry customers.</strong>
              </p>

              {/* Offer Box */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-400 rounded-3xl p-12 mb-12 text-center relative overflow-hidden max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold mb-4">
                  Your First 5 Orders Ship{' '}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent text-5xl font-black block">
                    100% FREE
                  </span>
                </h2>
                <p className="text-xl text-slate-200 font-medium">Test our Canadian network risk-free. Production costs only.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a 
                  href="#signup" 
                  className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-10 py-6 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 text-center flex items-center justify-center gap-3"
                >
                  Get FREE Shipping Now
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                </a>
                <a 
                  href="#how-it-works" 
                  className="group border-2 border-white/40 hover:border-white/80 hover:bg-white/15 text-white px-10 py-6 rounded-2xl font-semibold text-xl transition-all hover:scale-105 text-center backdrop-blur-sm flex items-center justify-center gap-3"
                >
                  See How It Works
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-lg">
                <div className="flex items-center gap-2">
                  <Factory size={20} />
                  <span>Canadian Manufacturing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={20} />
                  <span>3-Day Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>Zero Customs Fees</span>
                </div>
              </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            The Canadian Shipping Nightmare Is Real
          </h2>

          {/* Stats Grid */}
          <div id="stats-section" className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="text-4xl font-black text-red-500 mb-2 group-hover:animate-pulse">
                {statsVisible ? `${animatedStats.refusalRate}%` : '25-35%'}
              </div>
              <div className="text-lg text-slate-700 mb-2">
                of Canadian orders <strong>refuse to pay</strong> customs/duties
              </div>
              <div className="text-sm text-slate-500 flex items-center justify-center gap-2">
                <AlertTriangle size={14} className="text-red-400" />
                US Sellers Report
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="text-4xl font-black text-red-500 mb-2 group-hover:animate-pulse">
                ${statsVisible ? animatedStats.packageCost : '112'}
              </div>
              <div className="text-lg text-slate-700 mb-2">
                charged on a <strong>$50 package</strong> by courier
              </div>
              <div className="text-sm text-slate-500 flex items-center justify-center gap-2">
                <Package size={14} className="text-red-400" />
                Real Customer Experience
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="text-4xl font-black text-red-500 mb-2 group-hover:animate-pulse">
                {statsVisible ? `${animatedStats.dutiesPercent}%` : '28.3%'}
              </div>
              <div className="text-lg text-slate-700 mb-2">
                in duties and fees <strong>on every order</strong>
              </div>
              <div className="text-sm text-slate-500 flex items-center justify-center gap-2">
                <DollarSign size={14} className="text-red-400" />
                Canadian Border Reports
              </div>
            </div>
          </div>

          {/* Quotes Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-12 text-slate-800">
              What Sellers Are Really Saying:
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              <blockquote className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-amber-400">
                <p className="italic text-slate-700 leading-relaxed mb-4">
                  "USPS shipping to Canada costs a fortune. <strong>We stopped supporting Canada</strong> due to complaints about delays."
                </p>
                <cite className="text-sm font-semibold text-slate-600">- US eCommerce Business</cite>
              </blockquote>
              
              <blockquote className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-amber-400">
                <p className="italic text-slate-700 leading-relaxed mb-4">
                  "Whenever we ship to Canada, our customers get assessed <strong>extraordinary high import fees.</strong>"
                </p>
                <cite className="text-sm font-semibold text-slate-600">- Shopify Store Owner</cite>
              </blockquote>
              
              <blockquote className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-red-400">
                <p className="italic text-slate-700 leading-relaxed mb-4">
                  "I want to purchase something but the shipping to Canada is <strong>$100 plus over $100 duties</strong> which is insane!"
                </p>
                <cite className="text-sm font-semibold text-slate-600">- Canadian Buyer</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Here's How Assembly Fixes Everything
          </h2>

          {/* Solution Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-8 bg-slate-50 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg group hover:bg-white">
              <div className="mx-auto mb-6 p-4 bg-blue-100 rounded-full w-fit group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <Factory className="text-blue-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Local Manufacturing</h3>
              <p className="text-slate-600 leading-relaxed">
                We 3D print your designs in Canada using your exact specifications. No international shipping needed.
              </p>
            </div>
            
            <div className="text-center p-8 bg-slate-50 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg group hover:bg-white">
              <div className="mx-auto mb-6 p-4 bg-blue-100 rounded-full w-fit group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <Zap className="text-blue-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">3-Day Delivery</h3>
              <p className="text-slate-600 leading-relaxed">
                Orders ship quickly from our Canadian facility, reaching customers across the country in 3 days on average.
              </p>
            </div>
            
            <div className="text-center p-8 bg-slate-50 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg group hover:bg-white">
              <div className="mx-auto mb-6 p-4 bg-blue-100 rounded-full w-fit group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <DollarSign className="text-blue-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">No Surprise Fees</h3>
              <p className="text-slate-600 leading-relaxed">
                Manufactured domestically = zero customs, zero duties, zero brokerage fees for your customers.
              </p>
            </div>
            
            <div className="text-center p-8 bg-slate-50 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-lg group hover:bg-white">
              <div className="mx-auto mb-6 p-4 bg-blue-100 rounded-full w-fit group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <Phone className="text-blue-600 group-hover:text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Returns & Replacements</h3>
              <p className="text-slate-600 leading-relaxed">
                We handle returns and replacements directly in Canada, eliminating international return shipping hassles.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-900">Before vs. After Assembly</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="p-6 text-left font-bold">Shipping From US</th>
                    <th className="p-6 text-center font-bold">vs.</th>
                    <th className="p-6 text-left font-bold">Assembly Canada</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-6 text-red-600 font-semibold">❌ 2-4 weeks delivery</td>
                    <td className="p-6 text-center"></td>
                    <td className="p-6 text-green-600 font-semibold">✅ 3 days average delivery</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-6 text-red-600 font-semibold">❌ $25-100+ shipping costs</td>
                    <td className="p-6 text-center"></td>
                    <td className="p-6 text-green-600 font-semibold">✅ $8-15 standard shipping</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-6 text-red-600 font-semibold">❌ 25-35% order refusal rate</td>
                    <td className="p-6 text-center"></td>
                    <td className="p-6 text-green-600 font-semibold">✅ &lt;2% refusal rate</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-6 text-red-600 font-semibold">❌ Unpredictable duties/fees</td>
                    <td className="p-6 text-center"></td>
                    <td className="p-6 text-green-600 font-semibold">✅ Zero customs hassles</td>
                  </tr>
                  <tr>
                    <td className="p-6 text-red-600 font-semibold">❌ International return shipping</td>
                    <td className="p-6 text-center"></td>
                    <td className="p-6 text-green-600 font-semibold">✅ Local returns & replacements</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="signup" className="py-20 bg-gradient-to-br from-green-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-white/20 px-6 py-2 rounded-full text-sm font-bold inline-block mb-6">
                RISK-FREE TRIAL
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Your First 5 Orders Ship <span className="text-yellow-200 text-6xl font-black block">100% FREE</span>
              </h2>
              <p className="text-xl mb-8 text-green-100 leading-relaxed">
                Test our network without risking a penny on shipping. You only pay production costs. 
                We'll absorb the shipping to prove our value.
              </p>

              <div className="grid grid-cols-2 gap-4 text-lg font-semibold">
                <div className="flex items-center gap-2">✅ No setup fees</div>
                <div className="flex items-center gap-2">✅ No minimum orders</div>
                <div className="flex items-center gap-2">✅ Cancel anytime</div>
                <div className="flex items-center gap-2">✅ Full quality guarantee</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 text-slate-800">
              <h3 className="text-2xl font-bold mb-8 text-center">Claim Your FREE Shipping Trial</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="company" className="block font-semibold mb-2">Company Name*</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-semibold mb-2">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="website" className="block font-semibold mb-2">Website/Store URL*</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="monthlyOrders" className="block font-semibold mb-2">Monthly Canadian Orders</label>
                  <select
                    id="monthlyOrders"
                    name="monthlyOrders"
                    value={formData.monthlyOrders}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select range</option>
                    <option value="1-10">1-10 orders</option>
                    <option value="11-50">11-50 orders</option>
                    <option value="51-100">51-100 orders</option>
                    <option value="100+">100+ orders</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="products" className="block font-semibold mb-2">What do you 3D print?</label>
                  <textarea
                    id="products"
                    name="products"
                    value={formData.products}
                    onChange={handleChange}
                    placeholder="Miniatures, functional parts, jewelry, etc."
                    rows={3}
                    className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3 group"
                >
                  <Mail className="group-hover:animate-bounce" size={20} />
                  Get My FREE Shipping Trial
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </form>
              <p className="text-sm text-slate-600 text-center mt-4">
                No spam, no commitment. We'll contact you within 24 hours to set up your trial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Join Brands Already Winning in Canada
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current hover:animate-spin transition-all" size={20} />
                ))}
              </div>
              <blockquote className="text-lg text-slate-700 leading-relaxed mb-4 italic">
                "Assembly turned our biggest headache market into our most profitable. Canadian sales up 340% since switching."
              </blockquote>
              <cite className="font-semibold text-slate-600">- Sarah K., Miniature Gaming Company</cite>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current hover:animate-spin transition-all" size={20} />
                ))}
              </div>
              <blockquote className="text-lg text-slate-700 leading-relaxed mb-4 italic">
                "No more angry emails about shipping costs. Our Canadian customers love the fast delivery and fair pricing."
              </blockquote>
              <cite className="font-semibold text-slate-600">- Mike T., Custom Parts Manufacturer</cite>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current hover:animate-spin transition-all" size={20} />
                ))}
              </div>
              <blockquote className="text-lg text-slate-700 leading-relaxed mb-4 italic">
                "We went from avoiding Canada to it being 30% of our revenue. The quality is identical to our US production."
              </blockquote>
              <cite className="font-semibold text-slate-600">- Jessica L., Jewelry Designer</cite>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
                <Award className="text-blue-600 group-hover:animate-pulse" size={20} />
                How do you match my quality standards?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We use the same materials and print settings you specify. We provide sample prints for approval before production and maintain strict quality control processes.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
                <Package className="text-blue-600 group-hover:animate-pulse" size={20} />
                What happens after my 5 free orders?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                You pay our standard rates: production cost + reasonable shipping. No long-term contracts, cancel anytime.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
                <TrendingUp className="text-blue-600 group-hover:animate-pulse" size={20} />
                Can you handle my volume?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We scale our production capacity based on your order volume and growth projections. Let's discuss your specific needs.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
                <Timer className="text-blue-600 group-hover:animate-pulse" size={20} />
                How fast is the setup process?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Most brands are printing their first orders within 48-72 hours of signing up. We handle all the technical setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Stop Losing Canadian Sales Today</h2>
          <p className="text-xl mb-8 text-slate-200">
            Every day you wait, competitors are capturing the customers you're losing to shipping costs.
          </p>
          <a 
            href="#signup" 
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all transform hover:scale-110 hover:shadow-2xl hover:shadow-red-500/25 inline-flex items-center gap-3 group"
          >
            <Package className="group-hover:animate-bounce" size={24} />
            Claim My 5 FREE Shipments Now
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </a>
          <p className="text-yellow-300 font-semibold mt-6">
            <Clock className="inline mr-2" size={16} />
            Limited to 50 brands for Q4 2025. 37 spots remaining.
          </p>
        </div>
      </section>
    </div>
  );
}