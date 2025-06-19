import React, { useState, ReactNode } from 'react';

export interface ModalProps {
  title?: string;
  onClose: () => void;
  children: React.ReactNode; // ✅ This is the key fix
}

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

export default Modal;
