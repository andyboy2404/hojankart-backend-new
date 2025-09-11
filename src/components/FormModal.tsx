// components/FormModal.tsx
import React, { useState, useEffect } from 'react';


// Animated Modal component
const Modal: React.FC<{ onClose: () => void; children: React.ReactNode }> = ({ onClose, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
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


interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  openCommonModal: (type: string) => void; // Re-added this prop
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose, onSubmit, openCommonModal }) => {
  if (!isOpen) return null;

  const [age, setAge] = useState<string>('');
  const [selectedMeals, setSelectedMeals] = useState({
    lunch: false,
    dinner: false,
  });
  const [selectedDuration, setSelectedDuration] = useState<string>('');
  const [differentPlan, setDifferentPlan] = useState<string>('');
  const [selectedLunchPlan, setSelectedLunchPlan] = useState<string>('');
  const [selectedDinnerPlan, setSelectedDinnerPlan] = useState<string>('');

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dob = e.target.value;
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      setAge(calculatedAge.toString());
    } else {
      setAge('');
    }
  };
  
  const handleMealChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedMeals(prev => ({
        ...prev,
        [value.toLowerCase()]: checked,
    }));
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDuration(e.target.value);
  };

  const handleDifferentPlanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDifferentPlan(e.target.value);
  };

  const handleLunchPlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLunchPlan(e.target.value);
  };

  const handleDinnerPlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDinnerPlan(e.target.value);
  };

  const mealPlanOptions6Days = [
    "Mini Meal ₹380/-",
    "Complete Meal ₹500/-",
    "The Exotic Bhojan ₹640/- (Most Popular)",
    "The Multigrain Box ₹680/-"
  ];

  const mealPlanOptions12Days = [
    "Mini Meal ₹650/-",
    "Complete Meal ₹870/-",
    "The Exotic Bhojan ₹1,120/- (Most Popular)",
    "The Multigrain Box ₹1,180/-"
  ];
  
  const mealPlanOptions26Days = [
    "Mini Meal ₹1,230/-",
    "Complete Meal ₹1,670/-",
    "The Exotic Bhojan ₹2,110/- (Most Popular)",
    "The Multigrain Box ₹2,230/-"
  ];

  let mealPlanOptions: string[] = [];
  if (selectedDuration === '6 Days') {
    mealPlanOptions = mealPlanOptions6Days;
  } else if (selectedDuration === '12 Days') {
    mealPlanOptions = mealPlanOptions12Days;
  } else if (selectedDuration === '26 Days') {
    mealPlanOptions = mealPlanOptions26Days;
  }


  // Filter options for the second dropdown based on the first one's selection
  const dinnerPlanOptionsFiltered = mealPlanOptions.filter(option => option !== selectedLunchPlan);
  const lunchPlanOptionsFiltered = mealPlanOptions.filter(option => option !== selectedDinnerPlan);

  return (
    <Modal onClose={onClose}>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto p-8 bg-white rounded-lg font-sans">
        {/* Header Section */}
        <div className="text-center mb-6 pb-5 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-green-800">Join Bhojankart</h2>
<p className="text-sm text-gray-700">
  Sign Up Now & Get First Day Meal For Free!{" "}
  <span
    onClick={() => openCommonModal("offerTerms")}
    className="text-neutral-700 underline cursor-pointer relative group"
  >
    T&C Apply
    <span className="absolute top-full left-0 mt-1 bg-black text-white text-[10px] px-2 py-1 rounded z-50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      Terms and Conditions Apply!
    </span>
  </span>
</p>        </div>

        {/* Name Field */}
        <div className="mb-5">
          <label className="block font-semibold text-sm text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="mb-5">
          <label className="block font-semibold text-sm text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          />
        </div>

        {/* Phone Field */}
        <div className="mb-5">
          <label className="block font-semibold text-sm text-gray-700 mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        
        {/* Gender Field */}
        <div className="mb-5">
          <label className="block font-semibold text-sm text-gray-700 mb-2">
            Gender <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-x-6">
            <label className="flex items-center text-sm"><input type="radio" name="gender" value="Male" className="mr-2"/>Male</label>
            <label className="flex items-center text-sm"><input type="radio" name="gender" value="Female" className="mr-2"/>Female</label>
            <label className="flex items-center text-sm"><input type="radio" name="gender" value="Prefer Not To Say" className="mr-2"/>Prefer Not To Say</label>
          </div>
        </div>

        {/* Date of Birth Field */}
        <div className="mb-5">
           <label className="block font-semibold text-sm text-gray-700 mb-2">
            Date of Birth (Let's Celebrate your Birthday Together!) <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="dob"
            required
            onChange={handleDobChange}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          />
        </div>

        {/* Age Field */}
        <div className="mb-5">
           <label className="block font-semibold text-sm text-gray-700 mb-2">
            Your Age:
          </label>
          <input
            type="number"
            name="age"
            value={age}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md text-sm bg-gray-100"
          />
        </div>

        {/* Profession Type Field - No longer highlighted */}
        <div className="mb-5">
            <Dropdown label="Profession Type" name="profession" required options={["Student", "Working Professional", "Homemaker", "Other"]} />
        </div>

        {/* Meals Field */}
        <div className="mb-5">
          <label className="block font-semibold text-sm text-gray-700 mb-2">
            Meals <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-x-6">
            <label className="flex items-center text-sm"><input type="checkbox" name="meals" value="Lunch" className="mr-2" onChange={handleMealChange}/>Lunch</label>
            <label className="flex items-center text-sm"><input type="checkbox" name="meals" value="Dinner" className="mr-2" onChange={handleMealChange}/>Dinner</label>
          </div>
        </div>
        
        {/* Meal Duration Field */}
        {(selectedMeals.lunch || selectedMeals.dinner) && (
          <div className="mb-5">
            <label className="block font-semibold text-sm text-gray-700 mb-2">
              Choose your preferred meal duration: <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-x-6">
              <label className="flex items-center text-sm"><input type="radio" name="duration" value="6 Days" className="mr-2" onChange={handleDurationChange}/>6 Days</label>
              <label className="flex items-center text-sm"><input type="radio" name="duration" value="12 Days" className="mr-2" onChange={handleDurationChange}/>12 Days</label>
              <label className="flex items-center text-sm"><input type="radio" name="duration" value="26 Days" className="mr-2" onChange={handleDurationChange}/>26 Days</label>
            </div>
            <p className="text-xs text-gray-500 mt-1">(No Sundays)</p>
          </div>
        )}

        {/* Different Meal Plan Field */}
        {(selectedMeals.lunch && selectedMeals.dinner && selectedDuration) && (
          <div className="mb-5">
            <label className="block font-semibold text-sm text-gray-700 mb-2">
              Do you want a different meal plan for Lunch & Dinner? <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-x-6">
              <label className="flex items-center text-sm"><input type="radio" name="differentPlan" value="Yes" className="mr-2" onChange={handleDifferentPlanChange}/>Yes</label>
              <label className="flex items-center text-sm"><input type="radio" name="differentPlan" value="No" className="mr-2" onChange={handleDifferentPlanChange}/>No</label>
            </div>
          </div>
        )}

        {/* --- MEAL PLAN DROPDOWNS --- */}
        {/* Case 1: Lunch only */}
        {selectedMeals.lunch && !selectedMeals.dinner && selectedDuration && (
            <div className="mb-5">
                <Dropdown label="Choose Meal Plan for Lunch" name="lunchPlan" required options={mealPlanOptions} />
            </div>
        )}
        {/* Case 2: Dinner only */}
        {!selectedMeals.lunch && selectedMeals.dinner && selectedDuration && (
            <div className="mb-5">
                <Dropdown label="Choose Meal Plan for Dinner" name="dinnerPlan" required options={mealPlanOptions} />
            </div>
        )}
        {/* Case 3: Both selected, different plans */}
        {selectedMeals.lunch && selectedMeals.dinner && selectedDuration && differentPlan === 'Yes' && (
            <>
                <div className="mb-5">
                    <Dropdown label="Choose Meal Plan for Lunch" name="lunchPlan" required options={lunchPlanOptionsFiltered} onChange={handleLunchPlanChange} />
                </div>
                <div className="mb-5">
                    <Dropdown label="Choose Meal Plan for Dinner" name="dinnerPlan" required options={dinnerPlanOptionsFiltered} onChange={handleDinnerPlanChange} />
                </div>
            </>
        )}
        {/* Case 4: Both selected, same plan */}
        {selectedMeals.lunch && selectedMeals.dinner && selectedDuration && differentPlan === 'No' && (
            <div className="mb-5">
                <Dropdown label="Choose Meal Plan for Lunch and Dinner" name="combinedPlan" required options={mealPlanOptions} />
            </div>
        )}

        {/* --- ADDRESS FIELDS --- */}
        {/* Lunch Address Fields */}
        {selectedMeals.lunch && selectedDuration && (
          <>
            <div className="mb-5">
              <label className="block font-semibold text-sm text-gray-700 mb-2">
                Address for Lunch <span className="text-red-500">*</span>
              </label>
              <input type="text" name="lunchAddress" required className="w-full p-2 border border-gray-300 rounded-md text-sm" />
            </div>
            <div className="mb-5">
              <label className="block font-semibold text-sm text-gray-700 mb-2">
                Nearby Landmark or Building Name (for Lunch) <span className="text-red-500">*</span>
              </label>
              <input type="text" name="lunchLandmark" required className="w-full p-2 border border-gray-300 rounded-md text-sm" />
            </div>
          </>
        )}

        {/* Dinner Address Fields */}
        {selectedMeals.dinner && selectedDuration && (
          <>
            <div className="mb-5">
              <label className="block font-semibold text-sm text-gray-700 mb-2">
                Address for Dinner <span className="text-red-500">*</span>
              </label>
              <input type="text" name="dinnerAddress" required className="w-full p-2 border border-gray-300 rounded-md text-sm" />
            </div>
            <div className="mb-5">
              <label className="block font-semibold text-sm text-gray-700 mb-2">
                Nearby Landmark or Building Name (for Dinner) <span className="text-red-500">*</span>
              </label>
              <input type="text" name="dinnerLandmark" required className="w-full p-2 border border-gray-300 rounded-md text-sm" />
            </div>
          </>
        )}

        {/* --- NEW OPTIONAL FIELDS --- */}
        <div className="mb-5">
            <label className="block font-semibold text-sm text-gray-700 mb-2">
                Add extra Ghee Roti @ ₹7/- per Roti (optional, if required)
            </label>
            <input 
                type="text" 
                name="extraRoti" 
                placeholder="Eg.: 2 Ghee Rotis"
                className="w-full p-2 border border-gray-300 rounded-md text-sm" 
            />
        </div>

        <div className="mb-5">
            <label className="block font-semibold text-sm text-gray-700 mb-2">
                Additional Information! (optional)
            </label>
            <textarea 
                name="additionalInfo"
                rows={3}
                placeholder="E.g., Jain meals, no onion/garlic, high protein, diabetic-friendly, etc. or Dietary Preferences."
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
        </div>

        {/* Agreement Section */}
        <div className="mt-4 text-sm">
          <label className="flex items-center">
            <input type="checkbox" required className="mr-2" />
            I agree to the{' '}
            <span className="text-green-600 underline cursor-pointer ml-1" onClick={() => openCommonModal('Terms of Service')}>Terms of Service</span>,
            <span className="text-green-600 underline cursor-pointer ml-1" onClick={() => openCommonModal('Privacy Policy')}>Privacy Policy</span>, and
            <span className="text-green-600 underline cursor-pointer ml-1" onClick={() => openCommonModal('Refund Policy')}>Refund Policy</span>.
          </label>
        </div>

        <button
          type="submit"
              className="w-full bg-green-700 text-white font-bold py-2 px-4 mt-6 rounded hover:bg-green-800"
        >
          Submit
        </button>
        <p className="text-xs text-center text-gray-500 mt-2">
              Our team will get back to you within 24 hours with a custom plan tailored to your needs.
            </p>
      </form>
    </Modal>
  );
};

// This is the Dropdown component from your original code, used for "Profession Type"
function Dropdown({
  label,
  name,
  required = false,
  options,
  onChange,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div>
      <label className="block font-semibold text-sm text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md text-sm"
      >
        <option value="" disabled hidden>-Select-</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormModal;
