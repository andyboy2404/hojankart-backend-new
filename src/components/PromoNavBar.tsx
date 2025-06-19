import React, { useEffect, useState } from 'react';
import FormModal from './FormModal';
import Modal from './Modal';
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

const PromoNavBar: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [popupContent, setPopupContent] = useState<null | { title: string; description: string }>(null);
    const [modalContent, setCommonModal] = useState<null | {
        title: string;
        content: React.ReactNode;
    }>(null);
  
  
  // Lock scroll when any modal is open
  useEffect(() => {
    const shouldLock = showModal || popupContent || modalContent;
    document.body.style.overflow = shouldLock ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal, popupContent, modalContent]);

  const handleSubmitSignUp = () => {
    // Example logic for form submission
    setShowModal(false);
    setPopupContent({
      title: 'Thank you!',
      description: 'Your free meal signup has been received.',
    });
  };

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
    <>
      {/* Banner */}
      <div className="bg-yellow-400 h-10 flex items-center justify-center px-4">
        <div className="flex items-center space-x-2">
          <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center text-red-600 font-bold text-sm">
            🎁
          </div>
          <span
            onClick={() => setShowModal(true)}
            className="text-green-900 text-sm font-semibold cursor-pointer"
          >
            Get First Day Meal for Free
          </span>
          <span
          onClick={() => openCommonModal('Terms of Service')}
           className="text-neutral-700 text-[10px] self-end mt-[2px] pr-[2px] cursor-pointer relative group">
            T&amp;C
            {/* Tooltip */}
        <div className="absolute top-full right-0 mt-1 bg-black text-white text-[10px] px-2 py-1 rounded z-50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Terms and conditions apply
        </div>
          </span>
        </div>
      </div>

      {/* Main SignUp Modal */}
      {showModal && (
        <FormModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmitSignUp}
          openCommonModal={openCommonModal}
        />
      )}

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

      {/* Reusable Modal with custom content */}
      {modalContent && (
        <Modals
          title={modalContent.title}
          content={modalContent.content}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default PromoNavBar;
