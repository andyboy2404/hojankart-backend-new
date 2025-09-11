import React, { useState, ReactNode } from 'react';
import { LegalContentMap } from './LegalContentMap';
import FormModal from './FormModal';
import { handleSignUpSubmit } from '../common/formHandlers';
// import ZohoFormModal from './ZohoFormJoinBhojanKartModal';


const Modal: React.FC<{ onClose: () => void; children: ReactNode }> = ({ onClose, children }) => (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 max-w-lg w-full relative overflow-y-auto max-h-[90vh]">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      {children}
    </div>
  </div>
);
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

const SignupForm: React.FC = () => {
 const [showModal, setShowModal] = useState(false);
   const [isPopupOpen, setIsPopupOpen] = useState(false);
 
const [popupContent, setPopupContent] = useState<{ title: string; description: ReactNode } | null>(null);
const [modalContent, setCommonModal] = useState<null | {
    title: string;
    content: React.ReactNode;
  }>(null);

 const openCommonModal = (key: keyof typeof LegalContentMap) => {
     const modal = LegalContentMap[key];
     if (modal) {
       setCommonModal(modal);
     }
   };
 
   const closeModal = () => setCommonModal(null);

 
  const closePopup = () => {
    setPopupContent(null);
  };

 
  return (
    <section id="signup" className="py-16 md:py-24 bg-white ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
              We'd Love to Serve You!
            </h2>
            <p className="text-lg text-neutral-600">
              Click on the below button and fill in your details to get started. Our team will get in touch to confirm your plan and delivery preferences.
            </p>
            
                <div className="mt-16 text-center">
          <a 
            className="cursor-pointer inline-block px-8 py-3 bg-green-800 text-white font-medium rounded-lg shadow-md hover:bg-primary-700 transition-colors"
          onClick={e => {
                      e.preventDefault();
                      setShowModal(true);
                    }}
          >
                    Sign Up Now!
          </a>
        </div>

            <div className="w-24 h-1 bg-primary-500 mx-auto mt-6"></div>
          </div>
          
        </div>
      </div>
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
      {/* <ZohoFormModal isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} /> */}

         {/* Common Popup Modal */}
        {popupContent && (
          <Modal onClose={closePopup}>
            <h2 className="text-xl font-bold mb-4">{popupContent.title}</h2>
        <div className="text-sm text-gray-700 leading-relaxed mb-4">{popupContent.description}</div>
            <button
              className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
              onClick={closePopup}
            >
              Close
            </button>
          </Modal>
        )}

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

export default SignupForm;