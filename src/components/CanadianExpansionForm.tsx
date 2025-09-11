import React, { useState } from 'react';
import { Factory, CheckCircle, ArrowRight, Globe, DollarSign, Truck } from 'lucide-react';

interface FormData {
  companyName: string;
  website: string;
  contactName: string;
  email: string;
  phone: string;
  primaryProducts: string;
  otherProduct: string;
  annualRevenue: string;
  currentMarkets: string[];
  biggestChallenge: string;
}

export default function CanadianExpansionForm() {
  const [formData, setFormData] = useState<FormData>({
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      currentMarkets: prev.currentMarkets.includes(value)
        ? prev.currentMarkets.filter(market => market !== value)
        : [...prev.currentMarkets, value]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission
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
          source: 'canadian_expansion_landing_page'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Redirect to thank you page or calendar booking
        setTimeout(() => {
          window.location.href = '/thank-you?blueprint=canadian-expansion';
        }, 2000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
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

        <p className="text-slate-600 text-sm">
          Redirecting you to schedule your strategy call...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Factory className="w-8 h-8 text-emerald-600" />
          <span className="text-lg font-semibold text-slate-900">Assembly Studio</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">
          Get Your Canadian Expansion Blueprint
        </h2>
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
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 pb-2 border-b border-slate-200">
            Company Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-1">
                Website URL *
              </label>
              <input
                type="url"
                id="website"
                name="website"
                required
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="https://yourcompany.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
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
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="your@email.com"
              />
            </div>
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
        </div>

        {/* Business Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900 pb-2 border-b border-slate-200">
            Business Details
          </h3>
          
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

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center gap-3"
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
          
          <p className="text-sm text-slate-500 mt-3">
            ⚡ Your custom analysis will be delivered within 48 hours
          </p>
        </div>
      </form>
    </div>
  );
}