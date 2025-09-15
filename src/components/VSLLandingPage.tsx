import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Calendar, CheckCircle, Clock, DollarSign, TrendingUp } from 'lucide-react';

export default function VSLLandingPage() {
  const [showCalendar, setShowCalendar] = useState(false);

  const scrollToCalendar = () => {
    setShowCalendar(true);
    setTimeout(() => {
      document.getElementById('calendar-section')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  return (
    <>
      <Helmet>
        <title>Stop Losing Canadian Sales to $100+ Shipping Fees | The Assembly</title>
        <meta name="description" content="Discover how brands increased Canadian sales by 340% with local manufacturing. Eliminate customs fees and delivery delays. Book your free strategy session." />
        <meta property="og:title" content="Stop Losing Canadian Sales to $100+ Shipping Fees" />
        <meta property="og:description" content="See how The Assembly helps brands eliminate shipping nightmares and scale in Canada" />
      </Helmet>

      <div className="min-h-screen bg-gray-900">
        {/* Hero Section with VSL */}
        <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Stop Losing Canadian Sales to
              <span className="text-red-400 block">$100+ Shipping Fees</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Watch this 8-minute video to discover how brands are increasing Canadian sales by 340% 
              with local manufacturing that eliminates customs delays and shipping nightmares.
            </p>

            {/* VSL Video Placeholder */}
            <div className="relative bg-black rounded-lg shadow-2xl mb-8 aspect-video max-w-4xl mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex items-center justify-center w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full transition-colors group">
                  <Play className="h-8 w-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              {/* Video overlay text */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-90">🔥 Case Study: How One Brand Went From Losing Money on Canadian Orders to 340% Growth</p>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-gray-400">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                <span>340% Sales Increase</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-400" />
                <span>Zero Customs Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-400" />
                <span>3-Day Delivery</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToCalendar}
              className="group bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-lg text-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300 mb-4"
            >
              <Calendar className="h-6 w-6 inline mr-3" />
              Book Your FREE Strategy Session
              <span className="block text-sm font-normal mt-1 opacity-90">
                Only 37 spots remaining for Q4
              </span>
            </button>

            <p className="text-sm text-gray-400">
              🔒 No sales pitch. Just a genuine strategy session to help you win in Canada.
            </p>
          </div>
        </section>



        {/* Calendar Section */}
        {showCalendar && (
          <section id="calendar-section" className="py-20 bg-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Reserve Your FREE Strategy Session
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Choose a time that works for you. No sales pitch, just genuine help to win in Canada.
                </p>
                
                {/* Urgency */}
                <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg mb-8">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">Only 37 spots remaining for Q4</span>
                </div>
              </div>

              {/* TidyCal Embed */}
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                <iframe
                  src="https://tidycal.com/nichelle/win-canada-with-borderless-production"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  title="Book Strategy Session"
                  className="w-full"
                ></iframe>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-400">
                  🔒 Your information is secure and will never be shared. 
                  <br />
                  This call is focused on helping you succeed, not selling you anything.
                </p>
              </div>
            </div>
          </section>
        )}

      </div>
    </>
  );
}