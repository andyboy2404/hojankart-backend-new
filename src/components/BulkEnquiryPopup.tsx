import React from 'react';
// Animated Modal component (copied from FormModal)
const Modal: React.FC<{ onClose: () => void; children: React.ReactNode }> = ({ onClose, children }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true); // Trigger open animation on mount
    return () => setShow(false);
  }, []);

  // Handle close with animation
  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 250); // Wait for animation before unmount
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center transition-colors duration-300 ${show ? 'bg-black bg-opacity-50' : 'bg-black bg-opacity-0'}`}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-lg shadow-xl relative max-h-[90vh] overflow-y-auto transform transition-all duration-300
          ${show ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
import axios from "axios";

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

  // Convert formData to a plain JS object
  const payload: Record<string, string> = {};
  formData.forEach((value, key) => {
    payload[key] = value.toString(); // all values treated as string
  });

  try {
    console.log("Submitting Form Data:", payload);
debugger;
    await axios.post("http://82.29.165.42:5000/bulk-enquiry", payload, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    form.reset();
    setFormSubmitted(true);
    setShowThankYou(true);
  } catch (err) {
    console.error("❌ Submission Error:", err);
    alert("Something went wrong. Please try again.");
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
        <Modal onClose={handleThankYouClose}>
          <div className="p-8 text-center">
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
        </Modal>
      )}

      {open && !formSubmitted && (
        <Modal onClose={onClose}>
          <form
            onSubmit={onSubmit}
            className="max-w-2xl mx-auto p-8 bg-white rounded-lg font-sans"
          >
            <h2 className="text-center mb-6 text-2xl font-bold text-green-800">Bulk Enquiry</h2>

            {[
              { label: 'Full Name / Organisation Name', name: 'orgName', type: 'text', required: true, placeholder: 'e.g., ABC Pvt. Ltd. or John Singh' },
              { label: 'Contact Person Name (if different from above)', name: 'contactPerson', type: 'text' },
              { label: 'Email Address', name: 'email', type: 'email', required: true },
              { label: 'Phone Number', name: 'phone', type: 'tel', required: true, placeholder: 'e.g. +91 9876543210' },
              { label: 'Estimated Number of Meals', name: 'meals', type: 'text', required: true, placeholder: 'e.g., 50 lunches/ 50 dinners' },
              { label: 'Preferred Start Date', name: 'startDate', type: 'date', required: true },
              { label: 'Delivery Address / Location(s)', name: 'address', type: 'text', required: true, placeholder: 'e.g., Full delivery details, including pincode and any access instructions' },
            ].map((field) => (
              <div key={field.name} className="mb-5">
                <label className="block font-semibold text-sm text-gray-700 mb-2">
                  {field.label}
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  {...field}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
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

            <div className="mb-5">
              <label className="block font-semibold text-sm text-gray-700 mb-2">Vegetarian Preference</label>
              <div className="mt-1 space-y-2 text-sm">
                {[
                  '100% Pure Vegetarian',
                  'Jain/Satvik Meal Required',
                  'Custom Dietary Restrictions',
                ].map((opt) => (
                  <label key={opt} className="flex items-center space-x-2">
                    <input type="radio" name="vegPref" value={opt} className="mr-2" required />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <label className="block font-semibold text-sm text-gray-700 mb-2">
                Additional Notes / Custom Requests (optional)
              </label>
              <textarea
                placeholder='e.g., Special menu preferences, frequency, packaging needs, etc.'
                name="notes"
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
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
