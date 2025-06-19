// components/BulkEnquiryPopup.tsx
import React from 'react';
import Modal from './Modal';

interface BulkEnquiryPopupProps {
  open: boolean;
  onClose: () => void;
}

const BulkEnquiryPopup: React.FC<BulkEnquiryPopupProps> = ({ open, onClose }) => {
  const [showThankYou, setShowThankYou] = React.useState(false);
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [closing, setClosing] = React.useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = true;
      await fetch('http://localhost:5000/api/bulk-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res) {
        form.reset();
        setFormSubmitted(true);
        setShowThankYou(true);
      } else {
        alert('Submission failed.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }
  };

  const handleThankYouClose = () => {
    setClosing(true);
    setTimeout(() => {
      setShowThankYou(false);
      setClosing(false);
      onClose();
      setFormSubmitted(false);
    }, 300);
  };

  return (
    <>
      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className={`bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full text-center transform transition-all duration-300 ${
              closing ? 'opacity-0 -translate-y-8' : 'opacity-100 translate-y-0'
            }`}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-gray-700 mb-6 text-base">
              Your bulk enquiry has been submitted successfully.
              <span className="block mt-2">
                Our team will get back to you within 24 hours with a custom plan tailored to your needs.
              </span>
            </p>
            <button
              className="px-6 py-2 bg-green-700 text-white font-semibold rounded-md hover:bg-green-800"
              onClick={handleThankYouClose}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {open && !formSubmitted && (
        <Modal onClose={onClose}>
          <form
            onSubmit={onSubmit}
            className="max-w-md mx-auto p-4 bg-white rounded-lg font-sans"
          >
            <h2 className="text-center mb-6 text-xl font-bold">Bulk Enquiry</h2>

            {[ 
              { label: 'Full Name / Organisation Name', name: 'orgName', type: 'text', required: true, placeholder: 'e.g., ABC Pvt. Ltd. or John Singh' },
              { label: 'Contact Person Name (if different from above)', name: 'contactPerson', type: 'text' },
              { label: 'Email Address', name: 'email', type: 'email', required: true },
              { label: 'Phone Number', name: 'phone', type: 'tel', required: true, placeholder: 'e.g. +91 9876543210' },
              { label: 'Estimated Number of Meals', name: 'meals', type: 'text', required: true, placeholder: 'e.g., 50 lunches/ 50 dinners' },
              { label: 'Preferred Start Date', name: 'startDate', type: 'date', required: true },
              { label: 'Delivery Address / Location(s)', name: 'address', type: 'text', required: true, placeholder: 'e.g., Full delivery details, including pincode and any access instructions' },
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

            <Dropdown
              label="Type of Requirement"
              name="requirementType"
              required
              options={[
                'Corporate Meals',
                'Hostel / PG Meal Supply',
                'Event Catering',
                'School/College Meals',
                'Other (Please specify)',
              ]}
            />

            <Dropdown
              label="Duration of Requirement"
              name="duration"
              required
              options={[
                'One-time event',
                'Daily (Ongoing)',
                'Weekly (Few days/week)',
                'Monthly Contract',
                'Custom (Please specify)',
              ]}
            />

            <Dropdown
              label="Preferred Meal Type"
              name="mealType"
              required
              options={['Lunch', 'Dinner', 'Both']}
            />

            <div className="mt-3">
              <label className="block font-semibold text-sm">Vegetarian Preference</label>
              <div className="mt-1 space-y-2 text-sm">
                {[
                  '100% Pure Vegetarian',
                  'Jain/Satvik Meal Required',
                  'Custom Dietary Restrictions',
                ].map((opt) => (
                  <label key={opt} className="flex items-center space-x-2">
                    <input type="radio" name="vegPref" value={opt} className="mr-2" />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <label className="block font-semibold text-sm">Additional Notes / Custom Requests (optional)</label>
              <textarea
                placeholder='e.g., Special menu preferences, frequency, packaging needs, etc.'
                name="notes"
                rows={3}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white font-bold py-2 px-4 mt-6 rounded hover:bg-green-800"
            >
              Submit Bulk Enquiry
            </button>

            <p className="text-xs text-center text-gray-500 mt-2">
              Our team will get back to you within 24 hours with a custom plan tailored to your needs.
            </p>
          </form>
        </Modal>
      )}
    </>
  );
};

export default BulkEnquiryPopup;

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
        <option value="" disabled hidden>
          Select
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}