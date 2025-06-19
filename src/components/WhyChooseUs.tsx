import React from 'react';
import { Clock, Heart, RotateCcw, Shield, Wheat } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'No compromise on hygiene',
      description: 'We maintain the highest standards of cleanliness in our kitchen',
    },
    {
      icon: <Wheat className="h-8 w-8 text-primary-600" />,
      title: 'Locally sourced vegetables',
      description: 'Fresh produce from local farmers for maximum nutrition',
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-600" />,
      title: 'Timely deliveries across Indore',
      description: 'Our delivery network ensures your meals arrive on schedule',
    },
    {
      icon: <RotateCcw className="h-8 w-8 text-primary-600" />,
      title: 'Rotating menu to avoid repetition',
      description: 'Enjoy different meals throughout the month',
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-600" />,
      title: 'Handcrafted by passionate cooks',
      description: 'Each meal is prepared with care and attention to detail',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
            Why Choose Bhojankart
          </h2>
          {/* <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
            Why Choose         
            <img src="/BhojanKartgreen.png" alt="Bhojankart Logo" className="h-8 md:h-[10.5rem] inline-block transition-transform duration-300 ease-in-out hover:scale-110" />
          </h2> */}
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We're committed to making your daily meals special in every way
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex space-x-4 transform transition-transform hover:translate-y-[-8px]"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center">
                  {reason.icon}
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {reason.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#signup" 
            className="inline-block px-8 py-3 bg-green-800 text-white font-medium rounded-lg shadow-md hover:bg-primary-700 transition-colors"
          >
            Experience the Difference
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;