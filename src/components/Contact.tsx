
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import React, { useState, ReactNode } from 'react';
import { handleSignUpSubmit } from '../common/formHandlers';
 import { LegalContentMap } from './LegalContentMap';
// import ZohoFormModal from './ZohoFormJoinBhojanKartModal';
import { FaWhatsapp } from "react-icons/fa";
import FormModal from './FormModal';


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
// Modal Component
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
const Contact: React.FC = () => {
  // const [showModal, setShowModal] = useState(false);
     const [isPopupOpen, setIsPopupOpen] = useState(false);
  
const [popupContent, setPopupContent] = useState<{ title: string; description: ReactNode } | null>(null);
const [modalContent, setCommonModal] = useState<null | {
    title: string;
    content: React.ReactNode;
  }>(null);

   const [showModal, setShowModal] = useState(false);
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
    <section id="contact" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
            Connect With Us
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Have questions or feedback? We're always here to help!
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-neutral-100">
              <h3 className="font-heading font-semibold text-2xl mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">Email</p>
                    <a
                      href="mailto:support@bhojankart.in"
                      className="text-lg font-medium text-neutral-800 hover:text-primary-600 transition-colors"
                    >
                      support@bhojankart.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">Phone</p>
                    <a
                      href="tel:‪+919876543210‬"
                      className="text-lg font-medium text-neutral-800 hover:text-primary-600 transition-colors"
                    >
                      ‪+91 79999 46052‬
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">Location</p>
                    <p className="text-lg font-medium text-neutral-800">
                      Indore, Madhya Pradesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-neutral-500 mb-3">Follow Us</p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/bhojankart/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  {/* <a
                    href="#"
                    className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a> */}
                  <a
                    href="https://wa.me/917999946052?text=Hi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-green-800 text-white rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-700 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>

              <div className="relative z-10">
                <h3 className="font-heading font-semibold text-2xl mb-4">
                  Business Hours
                </h3>

                 <div className="grid grid-cols-2 gap-y-3 mb-8 text-white">
  <p>Monday – Saturday</p>
  <p className="text-right font-medium">10:00 AM – 10:00 PM</p>

  <p>Sunday</p>
  <p className="text-right font-medium">10:00 AM – 01:00 PM</p>
</div>


                <div className="border-t border-white/20 pt-6">
                  <h4 className="font-heading font-semibold text-xl mb-3">
                    Delivery Timings
                  </h4>
                  <div className="space-y-2">
                    <p>Lunch: 12:30 PM - 2:00 PM</p>
                    <p>Dinner: 07:30 PM - 9:00 PM</p>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#signup"
                    className="inline-block px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-neutral-100 transition-colors"
                    onClick={e => {
                      e.preventDefault();
    setShowModal(true); // ✅ This opens FormModal
                    }}
                  >
                    Sign Up Now!
                  </a>
                </div>
              </div>
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
export default Contact;
