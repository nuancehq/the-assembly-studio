import React from 'react';
import { Store, Globe, Lightbulb } from 'lucide-react';

export default function ModernCommerce() {
  const partnerTypes = [
    {
      icon: Store,
      title: "Brands & Retailers",
      description: "Eliminate inventory, improve margins, ship faster.",
      benefits: [
        "Zero inventory risk",
        "Improved profit margins",
        "Faster time to market",
        "Reduced storage costs"
      ],
      color: "blue"
    },
    {
      icon: Globe,
      title: "Marketplaces & Platforms", 
      description: "Use Assembly as a local fulfillment layer.",
      benefits: [
        "Enhanced seller services",
        "Reduced shipping times", 
        "Local production network",
        "Scalable infrastructure"
      ],
      color: "green"
    },
    {
      icon: Lightbulb,
      title: "Product Innovators",
      description: "Test, iterate, and scale without upfront risk.",
      benefits: [
        "Rapid prototyping",
        "Market validation",
        "Risk-free scaling",
        "Design iteration support"
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "bg-blue-600",
        text: "text-blue-600", 
        hover: "hover:border-blue-300"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "bg-green-600",
        text: "text-green-600",
        hover: "hover:border-green-300"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200", 
        icon: "bg-purple-600",
        text: "text-purple-600",
        hover: "hover:border-purple-300"
      }
    };
    return colors[color];
  };

  return (
    <div className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-primary-50 text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-8">
            Our Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900" id="who-its-for">
            Built for
            <span className="text-primary-600"> Modern Commerce</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {partnerTypes.map((partner, index) => {
            const colorClasses = getColorClasses(partner.color);
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl border-2 ${colorClasses.bg} ${colorClasses.border} ${colorClasses.hover} hover:shadow-xl transition-all duration-300`}
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${colorClasses.icon} group-hover:scale-110 transition-transform duration-300`}>
                  <partner.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className={`mt-6 text-xl font-bold ${colorClasses.text} group-hover:scale-105 transition-transform duration-300`}>
                  {partner.title}
                </h3>
                <p className="mt-2 text-gray-700 font-medium">
                  {partner.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {partner.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`h-2 w-2 ${colorClasses.icon} rounded-full mr-3 flex-shrink-0`}></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}