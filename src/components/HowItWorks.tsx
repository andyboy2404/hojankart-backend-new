import React from 'react';
import { ListChecks, PhoneCall, Utensils } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <ListChecks className="h-10 w-10 text-primary-500" />,
      title: 'Select a Plan',
      description: 'Choose what suits you best, whether Basic, Standard or Premium.',
    },
    {
      icon: <PhoneCall className="h-10 w-10 text-primary-500" />,
      title: 'We Confirm & Start',
      description: 'A team member will contact you to finalize the schedule and preferences.',
    },
    {
      icon: <Utensils className="h-10 w-10 text-primary-500" />,
      title: 'Enjoy Daily Meals',
      description: 'Fresh, homely food delivered on time, every day.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Getting started with Bhojankart is simple and hassle-free
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Desktop view with connecting line */}
          <div className="hidden md:block relative">
            <div className="absolute top-24 left-0 right-0 h-1 bg-primary-200 z-0"></div>
            <div className="grid grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mb-6 border-4 border-primary-100">
                    {step.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile view with vertical steps */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex items-start"
              >
                <div className="mr-4">
                  <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center border-4 border-primary-100">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-12 bg-primary-200 mx-auto my-2"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;