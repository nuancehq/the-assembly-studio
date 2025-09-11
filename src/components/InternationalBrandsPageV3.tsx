import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, AlertTriangle, Truck, Factory, Zap, DollarSign, Phone, Clock, Users, Star, ArrowRight, TrendingUp, Shield, Globe, Package, Award, Timer, Mail } from 'lucide-react';

export default function InternationalBrandsPageV3() {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    website: '',
    monthlyOrders: '',
    products: ''
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        <title>International Brands V3 - The Assembly</title>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-24 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 text-center">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                You're Missing{' '}
                <span className="text-red-400">180%</span> More Revenue From Canadian Customers
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
        </div>
      </section>

      {/* Offer Section - Simplified for this test */}
      <section id="signup" className="py-20 bg-gradient-to-br from-green-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your First 5 Orders Ship <span className="text-yellow-200 text-6xl font-black block">100% FREE</span>
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Test our network without risking a penny on shipping. Production costs only.
          </p>
          
          <div className="bg-white rounded-3xl p-8 text-slate-800 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-8">Claim Your FREE Shipping Trial</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name*"
                required
                className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                required
                className="w-full p-4 border-2 border-slate-300 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3 group"
              >
                <Mail className="group-hover:animate-bounce" size={20} />
                Get My FREE Shipping Trial
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}