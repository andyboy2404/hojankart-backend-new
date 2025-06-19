import React from 'react';
import { Utensils, Clock, LeafyGreen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
              A Revolution in Everyday Eating
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-neutral-700">
            <p className="text-lg leading-relaxed mb-6">
              At Bhojankart, we believe food should nourish your body and soul, not burden your schedule. 
              We offer pure vegetarian, homestyle meals curated with love, simplicity, and nutrition in mind. 
              Whether you're a student, working professional, or homemaker, Bhojankart is here to ensure 
              you never have to compromise on wholesome eating.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 transform transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Utensils className="text-primary-600 h-6 w-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Home-Style Cooking</h3>
              <p className="text-neutral-600">
                Simple, nutritious recipes that remind you of home with every bite.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 transform transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <LeafyGreen className="text-primary-600 h-6 w-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Pure Vegetarian</h3>
              <p className="text-neutral-600">
                Fresh, locally-sourced vegetables prepared with care and expertise.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 transform transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-primary-600 h-6 w-6" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Timely Delivery</h3>
              <p className="text-neutral-600">
                Punctual service ensuring your meals arrive right when you need them.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg font-medium text-primary-600 border-2 border-primary-600 py-3 px-6 rounded-lg inline-block">
              🍛 No preservatives, no gimmicks. Just authentic meals — twice a day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;