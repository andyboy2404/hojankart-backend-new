import React, { useState } from 'react';
import { LegalContentMap } from './LegalContentMap';

const Footer: React.FC = () => {
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

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo + Description */}
          <div>
            <div className="mb-4">
              {/* <Logo color="text-white" /> */}
              <img
                src="/BhojanKart logo V 2.1.png"
                alt="Bhojankart Logo"
                className="h-10 md:h-12 w-auto"
              />
            </div>            <p className="mt-4 text-neutral-400 text-sm">
              Bhojankart delivers fresh, homemade vegetarian meals right to your doorstep in Indore,
              making everyday eating simple and nutritious.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Meal Plans', 'How It Works', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links with Modal */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Terms of Service', 'Privacy Policy', 'Refund Policy'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => openCommonModal(item)}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              © 2025 Bhojankart. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {['Terms', 'Privacy', 'Cookies'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-neutral-500 hover:text-primary-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Render */}
      {modalContent && (
        <Modal
          title={modalContent.title}
          content={modalContent.content}
          onClose={closeModal}
        />
      )}
    </footer>
  );
};

// Modal Component
const Modal: React.FC<{
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



export default Footer;
