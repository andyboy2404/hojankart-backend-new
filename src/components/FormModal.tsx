// components/FormModal.tsx
import React from 'react';
import Modal from './Modal';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  openCommonModal: (type: string) => void;
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose, onSubmit, openCommonModal }) => {
  if (!isOpen) return null;

  return (
    <Modal onClose={onClose}>
      <form onSubmit={onSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg font-sans">
        <h2 className="text-center mb-6 text-xl font-bold">Join Bhojankart</h2>

        {[
          { label: 'Full Name', type: 'text', name: 'name', required: true },
          { label: 'Email Address', type: 'email', name: 'email', required: true },
          { label: 'Phone Number', type: 'tel', name: 'phone', required: true },
          { label: 'Age', type: 'number', name: 'age', required: true, min: 10, max: 100 },
          { label: 'Meal Start Date', type: 'date', name: 'start_date', required: true },
          { label: 'Delivery Address', type: 'text', name: 'address', required: true },
          { label: 'Nearby Landmark (optional)', type: 'text', name: 'landmark' },
        ].map((field) => (
          <div key={field.name} className="mt-3">
            <label className="block font-semibold text-sm">
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              {...field}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm"
            />
          </div>
        ))}

        {/* Dropdowns */}
        <Dropdown label="Gender" name="gender" options={["Male", "Female", "Other", "Prefer not to say"]} />
        <Dropdown label="Preferred Plan" name="plan" required options={["Basic – ₹2,900/month", "Standard – ₹3,600/month", "Premium – ₹3,900/month"]} />
        <Dropdown label="User Type" name="user_type" required options={["Student", "Working Professional", "Family / Household", "Other"]} />
        <Dropdown label="How did you hear about us?" name="referral" required options={["WhatsApp", "Instagram", "Google", "Friend", "Posters/Banners", "Other"]} />

        {/* Textareas */}
        <div className="mt-3">
          <label className="block font-semibold text-sm">Dietary Restrictions (optional)</label>
          <textarea name="preferences" rows={2} className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm" />
        </div>

        <div className="mt-3">
          <label className="block font-semibold text-sm">Special Requests / Notes (optional)</label>
          <textarea name="notes" rows={2} className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm" />
        </div>

        {/* Agreement Section */}
        <div className="mt-4 text-sm">
          <label>
            <input type="checkbox" required className="mr-2" />
            I agree to the{' '}
            <span className="text-green-700 underline cursor-pointer" onClick={() => openCommonModal('Terms of Service')}>Terms of Service</span>,{' '}
            <span className="text-green-700 underline cursor-pointer" onClick={() => openCommonModal('Privacy Policy')}>Privacy Policy</span>, and{' '}
            <span className="text-green-700 underline cursor-pointer" onClick={() => openCommonModal('Refund Policy')}>Refund Policy</span>.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white font-bold py-2 px-4 mt-6 rounded hover:bg-green-800"
        >
          Submit & Get Started
        </button>
      </form>
    </Modal>
  );
};

export default FormModal;

// ⬇️ Fixed Dropdown Component
function Dropdown({
  label,
  name,
  required = false,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <div className="mt-3">
      <label className="block font-semibold text-sm">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm"
      >
        <option value="" disabled hidden>Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
