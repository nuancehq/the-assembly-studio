import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Clock, DollarSign, Truck, CheckCircle, ArrowRight, Zap, Globe, Shield, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function IndustrialPrototypingLandingPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    nameTitle: '',
    email: '',
    phone: '',
    partDescription: '',
    projectStatus: '',
    cadFile: null as File | null
  });
  
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      projectStatus: e.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      cadFile: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      // Send email via EmailJS
      await emailjs.send(
        'service_849y9ai',
        'template_37u1t1c', 
        {
          from_name: formData.nameTitle,
          from_email: formData.email,
          subject: `Industrial Prototype Request - ${formData.companyName}`,
          message: `
Company: ${formData.companyName}
Name & Title: ${formData.nameTitle}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Part Description: ${formData.partDescription}
Project Status: ${formData.projectStatus}
CAD File: ${formData.cadFile ? formData.cadFile.name : 'Not provided'}

This is a free prototype request from the industrial prototyping landing page.
          `,
        },
        'QPSg0Q7xm3pXJzW_y'
      );

      // Redirect to thank you page
      window.location.href = '/thank-you.html';
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error submitting your request. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Free Industrial Prototypes - No Tooling, No Delays | The Assembly</title>
        <meta name="description" content="Get free prototypes for industrial equipment, fixtures, and custom parts. 24-48 hour turnaround, no tooling costs, no customs delays. Perfect for manufacturing engineers." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-red-500/90 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">September Only: 10 Spots Left - Free Design Prototypes</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fast + Free Prototypes.<br />
              Skip the Tooling, Skip the Wait.
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Get prototypes for fixtures, jigs, and custom parts in 24-48 hours. 
              Zero tooling costs. Zero customs delays. Free design prototype + 90% off functional prototypes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="#claim-prototype" 
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Claim Your Free Design Prototype
              </a>
              <a 
                href="#how-it-works" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                See How It Works
              </a>
            </div>
            
            <p className="text-primary-200 text-sm">
              ✓ No credit card required  ✓ Free expedited shipping  ✓ 48-hour guarantee  ✓ Only 10 spots available
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Manufacturing Engineers Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stop waiting weeks for overseas prototypes. Get industrial-grade parts faster than ever.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24-48 Hour Delivery</h3>
                <p className="text-gray-600">
                  <span className="line-through text-red-500">2-4 weeks from China</span><br />
                  <span className="font-semibold text-green-600">1-2 days locally</span>
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Zero Tooling Costs</h3>
                <p className="text-gray-600">
                  <span className="line-through text-red-500">$5k-$50k upfront</span><br />
                  <span className="font-semibold text-green-600">$0 tooling required</span>
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Customs Delays</h3>
                <p className="text-gray-600">
                  <span className="line-through text-red-500">Weeks in customs</span><br />
                  <span className="font-semibold text-green-600">Local production</span>
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Tariffs</h3>
                <p className="text-gray-600">
                  <span className="line-through text-red-500">25%+ import duties</span><br />
                  <span className="font-semibold text-green-600">Made in North America</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Perfect for Industrial Applications
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-100 rounded-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Assembly Fixtures & Jigs</h3>
                  <ul className="text-left text-gray-600 space-y-2">
                    <li>• Custom drill guides</li>
                    <li>• Assembly fixtures</li>
                    <li>• Welding jigs</li>
                    <li>• Quality control gauges</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Equipment Parts</h3>
                  <ul className="text-left text-gray-600 space-y-2">
                    <li>• Replacement components</li>
                    <li>• Prototype housings</li>
                    <li>• Custom brackets</li>
                    <li>• End effectors</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Testing & Validation</h3>
                  <ul className="text-left text-gray-600 space-y-2">
                    <li>• Proof of concept parts</li>
                    <li>• Test fixtures</li>
                    <li>• Functional prototypes</li>
                    <li>• Design validation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Your Free Prototype in 3 Steps
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Your Design</h3>
                  <p className="text-gray-600 text-lg">
                    Send us your CAD file (.STEP, .STL, or drawing). We'll review it within 2 hours and confirm it qualifies for the free prototype offer.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">We Print & Ship</h3>
                  <p className="text-gray-600 text-lg">
                    Your part goes into production immediately. We'll print it in industrial-grade material and ship within 24-48 hours via expedited shipping.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Test & Scale</h3>
                  <p className="text-gray-600 text-lg">
                    Get your free prototype, test it, and when you're ready to order more, we'll have competitive pricing ready with the same fast turnaround.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prototype Options */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Prototype Type
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Design Prototypes */}
              <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full text-xl font-bold mb-4">
                    FREE
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Design Prototypes</h3>
                  <p className="text-gray-600 mt-2">Perfect for fit, form, and visual testing</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Basic PLA material</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">24-48 hour turnaround</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Free expedited shipping</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">One per company</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 italic">
                  Great for testing dimensions, assembly fit, and design validation before investing in functional materials.
                </p>
              </div>

              {/* Functional Prototypes */}
              <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200 relative">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold transform rotate-12">
                  90% OFF
                </div>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full text-sm font-bold mb-4">
                    90% OFF
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Functional Prototypes</h3>
                  <p className="text-gray-600 mt-2">Industrial-grade materials for real testing</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">15+ materials: ABS, PETG, Nylon, ASA</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">24-48 hour turnaround</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">90% off regular pricing + free expedited shipping</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Production-ready strength</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 italic">
                  Ready for stress testing, chemical resistance, UV exposure, and high-temperature applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Examples Gallery */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What You Can Prototype
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real examples of industrial prototypes we can 3D print for your operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Drill Guides & Jigs */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="h-40 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/prototypes/drill-guide.jpg" 
                    alt="3D printed drill guide with precision holes" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Drill Guides & Jigs</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Precise hole positioning guides</li>
                  <li>• Custom drilling templates</li>
                  <li>• Assembly alignment jigs</li>
                  <li>• PCB drilling fixtures</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3 italic">
                  Used by Ford for logo placement, saves 50%+ vs machining
                </p>
              </div>

              {/* Assembly Fixtures */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="h-40 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/prototypes/assembly-fixture.jpg" 
                    alt="3D printed assembly fixture for part positioning" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Assembly Fixtures</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Part holding and positioning</li>
                  <li>• Welding alignment fixtures</li>
                  <li>• Component assembly guides</li>
                  <li>• Quality inspection holders</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3 italic">
                  Hours vs weeks, 90% lighter than aluminum
                </p>
              </div>

              {/* Gauges & Testing Tools */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="h-40 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/prototypes/gauge-tool.jpg" 
                    alt="3D printed go/no-go gauge with precision measurements" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Gauges & Testing Tools</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Go/no-go gauges</li>
                  <li>• Thread pitch gauges</li>
                  <li>• Dimensional check fixtures</li>
                  <li>• Custom measurement tools</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3 italic">
                  Perfect for quality control and inspection
                </p>
              </div>

              {/* End Effectors */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="h-40 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/prototypes/robot-gripper.jpg" 
                    alt="3D printed industrial robotic gripper with parallel jaws" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Robot End Effectors</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Custom gripper fingers</li>
                  <li>• Vacuum cup holders</li>
                  <li>• Pick & place tools</li>
                  <li>• Pneumatic actuator mounts</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3 italic">
                  Rapid iteration for automation projects
                </p>
              </div>

              {/* Safety & Access Tools */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="h-40 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/prototypes/safety-guard.jpg" 
                    alt="3D printed machine safety guard with protective housing" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Safety & Access Tools</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Machine guards & covers</li>
                  <li>• Safety interlock housings</li>
                  <li>• Access panels & doors</li>
                  <li>• Ergonomic tool handles</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3 italic">
                  Quick-release magnetic safety covers
                </p>
              </div>

              {/* Replacement Parts */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="h-40 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="/prototypes/replacement-parts.jpg" 
                    alt="3D printed mechanical parts including brackets and housings" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Replacement Parts</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Obsolete component replicas</li>
                  <li>• Custom brackets & mounts</li>
                  <li>• Housing & enclosure parts</li>
                  <li>• Improved design iterations</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3 italic">
                  No minimum orders, print exactly what you need
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                <strong>57% of manufacturers</strong> now use 3D printing for tooling and fixtures (up from 30% in 2017)
              </p>
              <div className="inline-flex items-center bg-blue-50 rounded-lg px-6 py-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-blue-800 font-medium">All examples above can be prototyped in 24-48 hours</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Speed Matters in Industrial Development
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-bold text-lg">MH</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Mike Henderson</h3>
                    <p className="text-gray-600 text-sm">Manufacturing Engineer, Industrial Systems Corp</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Time is everything in manufacturing. When we need to test a fixture design, waiting 3-4 weeks kills our project timeline. Fast prototyping lets us iterate quickly and catch problems before they become expensive mistakes."
                </p>
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-bold text-lg">SR</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Sarah Rodriguez</h3>
                    <p className="text-gray-600 text-sm">R&D Director, Advanced Automation Solutions</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "We used to order tooling for every prototype - huge upfront costs and no flexibility. 3D printing changed everything. We can test 5 different designs in the same time it used to take for one traditional prototype."
                </p>
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="claim-prototype" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Your Free Design Prototype?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Limited to 10 businesses this September. Free design prototype + 90% off functional prototypes.
            </p>
            
            <div className="bg-white rounded-lg p-8 text-gray-900 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Get Started Now</h3>
              
              {/* Status Messages */}
              {status.type && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  )}
                  <p>{status.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-left font-semibold mb-2">Company Name*</label>
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" 
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-left font-semibold mb-2">Your Name & Title*</label>
                  <input 
                    type="text" 
                    name="nameTitle"
                    value={formData.nameTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" 
                    placeholder="John Smith, Manufacturing Engineer" 
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-left font-semibold mb-2">Email*</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" 
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-left font-semibold mb-2">Phone (Optional)</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600" 
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-left font-semibold mb-2">Part Description*</label>
                  <textarea 
                    name="partDescription"
                    value={formData.partDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 h-24" 
                    placeholder="e.g., Assembly fixture for welding operation, needs to hold 50lb load"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-left font-semibold mb-2">Project Status</label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="projectStatus" 
                        value="have-cad" 
                        checked={formData.projectStatus === 'have-cad'}
                        onChange={handleRadioChange}
                        className="mr-3" 
                      />
                      <span>I have CAD files ready to upload</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="projectStatus" 
                        value="need-design" 
                        checked={formData.projectStatus === 'need-design'}
                        onChange={handleRadioChange}
                        className="mr-3" 
                      />
                      <span>I need design support or more information first</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-left font-semibold mb-2">Upload CAD File (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Truck className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-500">Drag & drop or click to upload (.STEP, .STL, .DWG)</p>
                    <input 
                      type="file" 
                      onChange={handleFileChange}
                      accept=".step,.stp,.stl,.dwg,.pdf" 
                      className="w-full mt-2 text-sm text-gray-500"
                    />
                    <p className="text-xs text-gray-400 mt-2">Skip if you selected "need design support" above</p>
                    {formData.cadFile && (
                      <p className="text-sm text-green-600 mt-2">Selected: {formData.cadFile.name}</p>
                    )}
                  </div>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Claim My Free Design Prototype
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">
                We'll review your submission within 2 hours during business days
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Questions? Talk to a Manufacturing Expert
            </h2>
            
            <a 
              href="/contact"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Our Team
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}