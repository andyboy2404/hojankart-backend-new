import React from 'react';
import Modal from './Modal';

interface ThankYouModalProps {
  open: boolean;
  onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <Modal onClose={onClose}>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">🎉 Congratulations!</h2>
        <p className="text-gray-700">Thank you for submitting your bulk enquiry. Our team will get in touch with you shortly.</p>
        <button
          onClick={onClose}
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ThankYouModal;
