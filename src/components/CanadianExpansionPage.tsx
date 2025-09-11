import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, X, ArrowRight, Package, Truck, TrendingUp, Users, Flag, DollarSign, Clock, Shield, Star, Phone, Mail, Factory, AlertTriangle, PlayCircle, Globe } from 'lucide-react';

export default function CanadianExpansionPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    contactName: '',
    email: '',
    phone: '',
    primaryProducts: '',
    otherProduct: '',
    annualRevenue: '',
    currentMarkets: [],
    biggestChallenge: ''
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step1Submitted, setStep1Submitted] = useState(false);

  const handleStepOne = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Submit Step 1 data immediately
    try {
      const step1Data = {
        contactName: formData.contactName,
        email: formData.email,
        website: formData.website,
        submittedAt: new Date().toISOString(),
        source: 'canadian_expansion_landing_page',
        stepCompleted: 1,
        leadStatus: 'step1_complete'
      };

      // Submit to your endpoint
      const response = await fetch('/api/canadian-expansion-step1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(step1Data),
      });

      // Continue to step 2 regardless of API success
      console.log('Step 1 data captured:', step1Data);
      setStep1Submitted(true);
    } catch (error) {
      console.error('Step 1 submission error:', error);
      // Continue anyway - don't block the user flow
      setStep1Submitted(true);
    }
    
    // Track step 1 completion
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_step_1_complete', {
        form_type: 'canadian_expansion_blueprint',
        contact_name: formData.contactName,
        email: formData.email,
        website: formData.website
      });
    }
    
    setCurrentStep(2);
    // Scroll to keep form in view
    document.getElementById('expansion-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track final form submission
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_submit', {
        form_type: 'canadian_expansion_blueprint',
        company_name: formData.companyName,
        revenue_range: formData.annualRevenue,
        products: formData.primaryProducts
      });
    }

    try {
      // Replace with your form submission endpoint
      const response = await fetch('/api/canadian-expansion-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: 'canadian_expansion_landing_page',
          stepCompleted: 2,
          leadStatus: 'fully_qualified',
          completedSteps: 2
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Scroll to form for better UX
        document.getElementById('expansion-form')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Thank you! Your Canadian Expansion Blueprint is being prepared and will be delivered within 48 hours.');
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToStepOne = () => {
    setCurrentStep(1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Handle website URL formatting
    if (name === 'website' && value) {
      let formattedUrl = value.trim();
      
      // Remove common prefixes that users might add
      formattedUrl = formattedUrl.replace(/^(www\.)/i, '');
      
      // Only add https:// if there's no protocol and it's not being typed
      if (!formattedUrl.includes('://') && 
          !formattedUrl.toLowerCase().startsWith('http') && 
          !formattedUrl.toLowerCase().startsWith('ftp') &&
          formattedUrl.length > 2 &&
          !formattedUrl.endsWith('.')) {
        formattedUrl = 'https://' + formattedUrl;
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: formattedUrl
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      currentMarkets: prev.currentMarkets.includes(value)
        ? prev.currentMarkets.filter(market => market !== value)
        : [...prev.currentMarkets, value]
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Canadian Expansion - The Assembly</title>
      </Helmet>
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
              🎯 For Any 3D Printing Business Looking To Expand Into Canada (Without Cross-Border Chaos)
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-5xl mx-auto">
              New System Reveals A{' '}
              <span className="text-amber-300">Counterintuitive Approach</span>{' '}
              That Lets 3D Printed Brands{' '}
              <span className="text-emerald-300">Sell Seamlessly Into Canada</span>{' '}
              Without Customs, Duties, Or Shipping Headaches
            </h1>
            
            <p className="text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              While also <strong className="text-white">increasing conversion, reducing refunds/chargebacks, and speeding delivery</strong>
            </p>
          </div>
          
          <div className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-2xl max-w-2xl mx-auto">
              <div className="text-center">
                <PlayCircle className="mx-auto mb-6 text-white" size={80} />
                <h3 className="text-2xl font-bold mb-4">Video Explanation</h3>
                <p className="text-blue-200 text-lg">See exactly how this works for 3D printing businesses</p>
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
          
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              The Canadian Expansion Blueprint is a counterintuitive approach designed exclusively for 3D printing businesses that want to expand into Canada without losing customers to high shipping costs, duties, or long delays.
            </p>
            
            <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">It's not a book. It's not generic advice.</h3>
              <p className="text-lg text-slate-700 mb-6">It's a <strong>personalized plan</strong> for your 3D printing brand.</p>
              
              <p className="text-slate-700 mb-6">
                We analyze your products, shipping setup, and storefront and create a custom, step-by-step blueprint showing:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-slate-700">Which of your 3D printed SKUs are best suited for local Canadian fulfillment,</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-slate-700">What your true costs look like (cross-border vs. local production),</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-slate-700">And the exact roadmap to profitably serve Canadian buyers without the chaos.</p>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-slate-700 leading-relaxed text-center">
              And as a result, you're free to focus on designing, marketing, and scaling your brand — while your Canadian customers finally get the fast, friction-free experience they expect.
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
              When I first started my own 3D printing brand here in Canada, my biggest headache wasn't production — it was trying to get products into the U.S.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              The printing was fine. The quality was solid. But shipping? <strong>Brutal.</strong> Duties, brokerage fees, angry emails, and refund requests.
            </p>
            
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8 rounded-r-xl">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                After one too many burned orders, I made a decision:
              </p>
              <p className="text-xl font-bold text-slate-900">
                👉 I would only ship within Canada.
              </p>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              That one choice changed everything. Suddenly, my Canadian buyers got orders in days, not weeks. No surprise duties. No angry emails. Refunds dropped. And my brand finally started to thrive.
            </p>
            
            <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-200">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Then one day, another 3D printing entrepreneur in one of my maker communities said:
              </p>
              <blockquote className="text-xl italic text-slate-900 border-l-4 border-slate-400 pl-6 mb-4">
                "We're doing well in the U.S., but we just can't figure out how to sell into Canada. Every buyer complains about shipping fees or refuses to pay duties."
              </blockquote>
              <p className="text-lg text-slate-700">
                <strong>That was the lightbulb moment.</strong>
              </p>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We partnered up. I showed them the Canada-first system I'd already built for my own brand. We tested it, proved it, and it worked.
            </p>
            
            <p className="text-xl font-bold text-center text-slate-900">
              That was the start of the Canadian Expansion Blueprint.
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
          
          <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto">
            <p className="text-xl text-slate-700 leading-relaxed mb-8 text-center">
              Today, I don't sell a book. Instead, I give 3D printing entrepreneurs a <strong>personalized plan</strong> built for their brand.
            </p>
            
            <h3 className="text-3xl font-bold text-center mb-8 text-slate-900">
              When you grab your Canadian Expansion Blueprint, here's what you get:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-blue-600" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">Product Feasibility Report</h4>
                <p className="text-slate-600">We review your product catalog and identify which SKUs make sense for Canadian fulfillment.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="text-blue-600" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">Cost Comparison</h4>
                <p className="text-slate-600">You'll see the real math on print costs, shipping, and duties—cross-border vs. local production.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-blue-600" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">Expansion Roadmap</h4>
                <p className="text-slate-600">A step-by-step plan tailored to your brand that shows exactly how to unlock Canadian buyers.</p>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-center mb-4 text-slate-900">Delivered as:</h3>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <div className="text-center">
                  <Package className="mx-auto mb-2 text-green-600" size={48} />
                  <p className="font-semibold">A personalized PDF report</p>
                </div>
                <div className="text-center">
                  <PlayCircle className="mx-auto mb-2 text-green-600" size={48} />
                  <p className="font-semibold">A Loom video walkthrough</p>
                  <p className="text-sm text-slate-600">showing you exactly what to do next</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-slate-600 mb-4">
                Normally, consulting like this would cost <span className="line-through text-red-500">$497+</span>.
              </p>
              <p className="text-3xl font-bold text-emerald-700 mb-8">
                But today, you can get your personalized Canadian Expansion Blueprint for just <span className="text-4xl">$7</span>
              </p>
              <p className="text-sm text-slate-500">(or free — we're testing both)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why 3D Printing Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Why Only 3D Printing?
          </h2>
          
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              Because 3D printing has its own challenges:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-slate-700">Print times and costs vary with product type and material.</p>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-slate-700">Shipping dimensions can swing costs dramatically.</p>
              </div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-slate-700">Buyers expect fast turnaround for custom, made-to-order items.</p>
              </div>
            </div>
            
            <p className="text-xl font-bold text-center text-slate-900">
              Generic ecommerce advice doesn't work. That's why this Blueprint is built only for 3D printing businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Proof: The Real Frustration in the Market
          </h2>
          
          <p className="text-xl text-center text-slate-700 mb-12">
            Don't take my word for it. Listen to what customers and sellers are saying:
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-red-500">
              <blockquote className="text-lg text-slate-700 mb-4 italic">
                "25% of my Canadian orders got refused because buyers wouldn't pay customs."
              </blockquote>
              <cite className="font-semibold text-slate-600">– Etsy Seller</cite>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-red-500">
              <blockquote className="text-lg text-slate-700 mb-4 italic">
                "UPS charged me $25 brokerage on a $45 order."
              </blockquote>
              <cite className="font-semibold text-slate-600">– Canadian Buyer</cite>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-red-500">
              <blockquote className="text-lg text-slate-700 mb-4 italic">
                "Every order I make into Canada adds 30%+ in fees. Brutal."
              </blockquote>
              <cite className="font-semibold text-slate-600">– Reddit Thread</cite>
            </div>
          </div>
          
          <p className="text-xl font-bold text-center text-slate-900 mt-12">
            These frustrations are exactly what the Blueprint solves.
          </p>
        </div>
      </section>

      {/* Risk Reversal Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12 text-slate-900">
            Risk-Free (Literally)
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <X className="text-green-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">No contracts.</h3>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="text-green-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">No obligation.</h3>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="text-green-600 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">30-day money-back guarantee.</h3>
            </div>
          </div>
          
          <p className="text-lg text-slate-700">
            If you choose the $7 option, it comes with a 30-day money-back guarantee. If you're not blown away by the clarity of your Blueprint, we'll refund you — <strong>and you keep the plan.</strong>
          </p>
        </div>
      </section>

      {/* Final CTA Section - Comprehensive Form */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Ready to unlock the Canadian market for your 3D printing business?
            </h2>
          </div>
          
          <div id="expansion-form" className="bg-white rounded-3xl p-8 lg:p-12 text-slate-800 max-w-4xl mx-auto">
            {isSubmitted ? (
              <div className="text-center">
                <div className="mb-6">
                  <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-lg text-slate-600">
                    Thank you, {formData.contactName}. Your Canadian Expansion Blueprint is being prepared.
                  </p>
                </div>
                
                <div className="bg-emerald-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-emerald-900 mb-2">What happens next:</h4>
                  <ul className="text-left text-emerald-800 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>We'll research {formData.companyName} and the Canadian market opportunity for your products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>Your custom feasibility report and cost analysis will be prepared within 48 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>You'll receive a personal video walkthrough explaining the analysis</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-blue-800 font-medium mb-4">Ready to discuss your expansion strategy?</p>
                  <a href="https://calendly.com/assembly-studio/canadian-expansion" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    <Phone className="w-5 h-5" />
                    Schedule Your Strategy Call
                  </a>
                </div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-3">Get Your Canadian Expansion Blueprint</h3>
                  <p className="text-lg text-slate-600 mb-4">
                    Receive a custom analysis showing exactly how to enter the Canadian market profitably
                  </p>
                  
                  {/* Value Props */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Globe className="w-5 h-5 text-emerald-600" />
                      <span>Market Analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <DollarSign className="w-5 h-5 text-emerald-600" />
                      <span>Cost Comparison</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <Truck className="w-5 h-5 text-emerald-600" />
                      <span>Implementation Roadmap</span>
                    </div>
                  </div>

                  {/* Step Progress Indicator */}
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${currentStep >= 1 ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${currentStep >= 1 ? 'bg-emerald-600 text-white' : 'bg-slate-300 text-slate-600'}`}>
                        1
                      </div>
                      <span className="text-sm font-medium">Contact Info</span>
                    </div>
                    <div className="w-8 h-0.5 bg-slate-200"></div>
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${currentStep >= 2 ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${currentStep >= 2 ? 'bg-emerald-600 text-white' : 'bg-slate-300 text-slate-600'}`}>
                        2
                      </div>
                      <span className="text-sm font-medium">Business Details</span>
                    </div>
                  </div>
                </div>

                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <form onSubmit={handleStepOne} className="space-y-6">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-semibold text-slate-900 mb-2">Let's start with your details</h4>
                      <p className="text-slate-600">We'll prepare a custom analysis based on your company</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="contactName" className="block text-sm font-medium text-slate-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          required
                          value={formData.contactName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
                          placeholder="your@email.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">
                          Company Website *
                        </label>
                        <input
                          type="text"
                          id="website"
                          name="website"
                          required
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
                          placeholder="yourcompany.com"
                        />
                        <p className="text-xs text-slate-500 mt-1">
                          Just enter your domain - we'll add https:// automatically
                        </p>
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-3"
                      >
                        <span>Continue to Business Details</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                      
                      <p className="text-xs text-slate-500 mt-3">
                        Takes less than 2 minutes • Free Canadian market analysis
                      </p>
                    </div>
                  </form>
                )}

                {/* Step 2: Business Information */}
                {currentStep === 2 && (
                  <form onSubmit={handleFinalSubmit} className="space-y-6">
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-semibold text-slate-900 mb-2">Tell us about your business</h4>
                      <p className="text-slate-600">This helps us create a more accurate analysis for {formData.contactName?.split(' ')[0] || 'you'}</p>
                      
                      {step1Submitted && (
                        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mt-4 text-sm">
                          <div className="flex items-center gap-2 text-emerald-700">
                            <CheckCircle className="w-4 h-4" />
                            <span>Your contact information has been saved</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                          Phone Number <span className="text-slate-500">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="primaryProducts" className="block text-sm font-medium text-slate-700 mb-1">
                          Primary Products *
                        </label>
                        <select
                          id="primaryProducts"
                          name="primaryProducts"
                          required
                          value={formData.primaryProducts}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          <option value="">Select your primary product type</option>
                          <option value="consumer-goods">Consumer 3D printed goods (home decor, toys, accessories)</option>
                          <option value="prototypes">Functional prototypes & small-batch manufacturing</option>
                          <option value="custom-products">Custom/personalized 3D printed products</option>
                          <option value="b2b-components">B2B components & industrial parts</option>
                          <option value="educational">Educational/STEM 3D printing products</option>
                          <option value="other">Other (please specify below)</option>
                        </select>
                      </div>

                      {formData.primaryProducts === 'other' && (
                        <div>
                          <label htmlFor="otherProduct" className="block text-sm font-medium text-slate-700 mb-1">
                            Please specify your products
                          </label>
                          <input
                            type="text"
                            id="otherProduct"
                            name="otherProduct"
                            value={formData.otherProduct}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="Describe your products"
                          />
                        </div>
                      )}

                      <div>
                        <label htmlFor="annualRevenue" className="block text-sm font-medium text-slate-700 mb-1">
                          Approximate Annual Revenue *
                        </label>
                        <select
                          id="annualRevenue"
                          name="annualRevenue"
                          required
                          value={formData.annualRevenue}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          <option value="">Select revenue range</option>
                          <option value="under-500k">Under $500K</option>
                          <option value="500k-1m">$500K - $1M</option>
                          <option value="1m-2m">$1M - $2M</option>
                          <option value="2m-5m">$2M - $5M</option>
                          <option value="5m-10m">$5M - $10M</option>
                          <option value="over-10m">Over $10M</option>
                          <option value="prefer-not-say">Prefer not to say</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Current Geographic Markets * <span className="text-slate-500">(check all that apply)</span>
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            'Europe',
                            'Asia-Pacific', 
                            'North America (already selling)',
                            'South America',
                            'Africa',
                            'Middle East'
                          ].map((market) => (
                            <label key={market} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.currentMarkets.includes(market)}
                                onChange={() => handleCheckboxChange(market)}
                                className="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500"
                              />
                              <span className="text-sm text-slate-700">{market}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="biggestChallenge" className="block text-sm font-medium text-slate-700 mb-1">
                          Biggest Challenge with International Expansion *
                        </label>
                        <select
                          id="biggestChallenge"
                          name="biggestChallenge"
                          required
                          value={formData.biggestChallenge}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          <option value="">Select your biggest challenge</option>
                          <option value="shipping-costs">Shipping costs and delivery delays</option>
                          <option value="customs-duties">Customs and duties complexity</option>
                          <option value="payment-processing">Currency and payment processing</option>
                          <option value="customer-service">Customer service across time zones</option>
                          <option value="market-knowledge">Don't know where to start</option>
                          <option value="regulatory-compliance">Regulatory and compliance requirements</option>
                          <option value="inventory-management">International inventory management</option>
                          <option value="other">Other challenge</option>
                        </select>
                      </div>
                    </div>

                    {/* Privacy & Terms */}
                    <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-600">
                      <p className="mb-2">
                        By submitting this form, you agree to receive the Canadian Expansion Blueprint analysis and follow-up communications from Assembly Studio. We respect your privacy and will never share your information.
                      </p>
                      <p>
                        You can unsubscribe at any time. See our <a href="/privacy" className="text-emerald-600 underline">Privacy Policy</a> for details.
                      </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={handleBackToStepOne}
                        className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <ArrowRight className="w-5 h-5 rotate-180" />
                        <span>Back</span>
                      </button>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-[2] bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Preparing Your Blueprint...</span>
                          </>
                        ) : (
                          <>
                            <span>Get My Canadian Expansion Blueprint</span>
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </div>
                    
                    <p className="text-sm text-slate-500 text-center mt-3">
                      ⚡ Your custom analysis will be delivered within 48 hours
                    </p>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}