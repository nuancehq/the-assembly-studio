import React, { useEffect } from 'react';

export default function QuotePage() {
  useEffect(() => {
    // Load the external script
    const script = document.createElement('script');
    script.src = 'https://seekmake.com/assets/public/iq-api-latest.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Get an Instant Quote</h1>
        <div className="bg-white rounded-lg shadow-lg">
          <section id="seekmake-quote-container">
            <iframe
              sandbox="allow-downloads allow-scripts allow-same-origin allow-forms allow-popups"
              id="seekmake-embed-iq"
              className="seekmake-embed-iq"
              src="https://seekmake.com/instant-quote/?isEmbed=true&manufacturer=67fe8d51e006a97419d9b2fc"
              style={{ width: '100%', height: '100vh', border: 0 }}
              scrolling="no"
            />
          </section>
        </div>
      </div>
    </div>
  );
}