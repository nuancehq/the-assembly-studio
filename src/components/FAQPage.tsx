import React from 'react';

export default function FAQPage() {
  const faqs = [
    {
      question: "How does The Assembly network work?",
      answer: "We certify and train local manufacturing partners worldwide to meet our quality standards. When you place an order, our platform automatically routes it to the closest certified site with the right capabilities and capacity."
    },
    {
      question: "What types of products can you manufacture?",
      answer: "Our network specializes in on-demand production across multiple categories including consumer goods, promotional items, replacement parts, and custom products. Each certified site has specific capabilities we can match to your needs."
    },
    {
      question: "What are your quality standards?",
      answer: "All Assembly sites undergo rigorous certification including quality audits, capability assessments, and ongoing monitoring. We maintain consistent standards across our global network through regular training and quality control processes."
    },
    {
      question: "How do you ensure consistent quality across different sites?",
      answer: "Our certification process includes standardized procedures, regular quality audits, continuous training programs, and real-time quality monitoring. Each site must maintain our standards to remain in the network."
    },
    {
      question: "What's the minimum order quantity?",
      answer: "There are no minimum order quantities. Our distributed model is designed for on-demand production, whether you need one piece or thousands. This eliminates inventory risk and enables true just-in-time manufacturing."
    },
    {
      question: "How long does production and delivery take?",
      answer: "Production times vary by product complexity and site capacity, typically 1-5 business days. Since products are made locally, shipping is usually same-day or next-day delivery, dramatically reducing total lead times."
    },
    {
      question: "Which regions do you serve?",
      answer: "We're building our certified network globally, starting with North America and expanding to Europe and Asia. Contact us to discuss coverage in your specific markets."
    },
    {
      question: "How do I integrate with your platform?",
      answer: "We offer API integration for seamless connection with your existing systems, whether that's an e-commerce platform, ERP system, or custom application. Our team provides full technical support during integration."
    },
    {
      question: "What are your pricing models?",
      answer: "Pricing varies by product category, complexity, and volume. We offer transparent, competitive pricing with no hidden fees. Contact us for custom quotes based on your specific requirements."
    },
    {
      question: "How do I become a certified Assembly site?",
      answer: "We're always looking for qualified manufacturing partners. The process includes capability assessment, quality certification, training, and ongoing support. Apply through our partner program to get started."
    },
    {
      question: "What support do you provide to brands?",
      answer: "We offer full support including product design consultation, material selection, quality assurance, logistics coordination, and ongoing account management. Think of us as your distributed manufacturing partner."
    },
    {
      question: "How do you handle intellectual property protection?",
      answer: "All certified sites sign comprehensive NDAs and IP protection agreements. We maintain strict confidentiality protocols and can provide additional security measures for sensitive products."
    }
  ];

  return (
    <div className="pt-32 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about distributed manufacturing with The Assembly.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <dt className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Still have questions? Feel free to{' '}
            <a href="/contact" className="text-primary-600 hover:text-primary-700 font-semibold">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}