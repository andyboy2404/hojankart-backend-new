import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-green-900 opacity-80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          // style={{ 
          //   backgroundImage: 'url("https://images.pexels.com/photos/6824492/pexels-photo-6824492.jpeg?auto=compress&cs=tinysrgb&w=1600")', 
          //   filter: 'brightness(100%)'
          // }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 pt-20">
       <div className="max-w-3xl mx-auto text-center">
  <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-in">
    Healthy. Homemade.<br />Hassle-free.
  </h1>

  <p className="text-lg md:text-xl text-white/90 mb-8 animate-slide-up font-sans">
    Get freshly prepared vegetarian meals delivered to your doorstep in Indore.
  </p>

  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
    <a 
      href="#meal-plans" 
      className="px-8 py-3 bg-yellow-400 text-primary-800 font-medium rounded-full shadow-lg hover:bg-secondary-400 transition-all transform hover:scale-105"
    >
      View Meal Plans
    </a>
    <a 
      href="#signup" 
      className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/40 font-medium rounded-full hover:bg-white/30 transition-all"
    >
      Sign Up Now
    </a>
  </div>

  <div className="mt-8 text-white/80 animate-slide-up">
    <p className="text-lg md:text-xl text-white/90 font-sans hover:scale-110 transition-transform duration-500">
      📍 Now Serving: Indore | Starting at ₹65/Meal
    </p>
  </div>
</div>

      </div>
      
      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce"
        onClick={scrollToAbout}
      >
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;