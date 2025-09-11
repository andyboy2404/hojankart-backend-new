import React, { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
// import ZohoFormModal from './ZohoFormJoinBhojanKartModal';
import FormModal from './FormModal';
import { handleSignUpSubmit } from '../common/formHandlers';
 import { LegalContentMap } from './LegalContentMap';

 const Modals: React.FC<{
   title: string;
   content: React.ReactNode;
   onClose: () => void;
 }> = ({ title, content, onClose }) => (
   <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
     <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
 
       {/* Header */}
       <div className="px-6 py-4 border-b border-gray-200 bg-gray-100">
         <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
       </div>
 
       {/* Scrollable Content */}
       <div className="p-6 overflow-y-auto flex-1 text-neutral-700 whitespace-pre-wrap">
         {content}
       </div>
 
       {/* Footer */}
       <div className="px-6 py-4 border-t border-gray-200 bg-gray-100 text-right">
         <button
           onClick={onClose}
           className="inline-block bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
         >
           Close
         </button>
       </div>
     </div>
   </div>
 );

const Hero: React.FC = () => {
  const [modalContent, setCommonModal] = useState<null | {
      title: string;
      content: React.ReactNode;
    }>(null);
const [showModal, setShowModal] = useState(false);
const closeModal = () => setCommonModal(null);

  const openCommonModal = (key: keyof typeof LegalContentMap) => {
  const modal = LegalContentMap[key];
  if (modal) {
    setCommonModal(modal);
  }
};
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
      {/* <ZohoFormModal isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> */}
<FormModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  onSubmit={(e) =>
    handleSignUpSubmit(
      e,
      () => openCommonModal("thankYou"), // ✅ open Thank You modal
      () => setShowModal(false)          // ✅ close current form modal
    )
  }
  openCommonModal={openCommonModal}
/>
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
              onClick={(e) => {
                e.preventDefault();
                setShowModal(true);
              }}
              className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/40 font-medium rounded-full hover:bg-white/30 transition-all cursor-pointer"
            >
              Sign Up Now
            </a>
          </div>

          <div className="mt-8 text-white/80 animate-slide-up">
            <p className="text-lg md:text-xl text-white/90 font-sans hover:scale-110 transition-transform duration-500">
              📍 Now Serving: Indore | Starting at ₹44/Meal
            </p>
          </div>

          {/* Decrease font size here */}
          {/* <p className="text-sm md:text-lg text-white/90 mt-12 animate-slide-up font-sans">
            Rotating menu to avoid repetition, Enjoy different meals throughout the month
          </p> */}
        </div>
      </div>

      {/* Scroll down indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce"
        onClick={scrollToAbout}
      >
        <ChevronDown size={32} />
      </div>

      {/* Modal Render */}
      {modalContent && (
        <Modals
          title={modalContent.title}
          content={modalContent.content}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Hero;
