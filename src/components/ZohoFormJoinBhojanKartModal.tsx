import React from 'react';

interface ZohoFormJoinBhojanKartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ZohoFormJoinBhojanKartModal: React.FC<ZohoFormJoinBhojanKartModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-2xl relative">
        <button
          onClick={onClose}
className="absolute top-2 text-black font-bold text-lg"
  style={{ right: '0.2rem' }}        >
          ×
        </button>
        <iframe
          src="https://forms.zohopublic.in/bhojankartgm1/form/JoinBhojankart/formperma/GfyQ-IeZn4Bni3ErsTBVdonE3_ASnmQws2PYG-p6cD4"
          style={{ width: '100%', height: '600px', border: 'none' }}
          title="Bhojankart Bulk Enquiry Form"
        />
      </div>
    </div>
  );
};

export default ZohoFormJoinBhojanKartModal;
