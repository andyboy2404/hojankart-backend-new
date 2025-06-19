
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import React, { useState, ReactNode } from 'react';
// import axios from 'axios';
import { LegalContentMap } from './LegalContentMap';


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
  const [showModal, setShowModal] = useState(false);
const [popupContent, setPopupContent] = useState<{ title: string; description: ReactNode } | null>(null);
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
  // ✅ Must be inside the Contact component
//  const openPopup = (title: string, description: ReactNode) => {
//   setPopupContent({ title, description });
// };
  const closeModal = () => setCommonModal(null);

  const closePopup = () => {
    setPopupContent(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const fullName = formData.get("full_name") as string;
    const startDate = formData.get("start_date") as string;
    const plan = formData.get("plan") as string;
    const timing = formData.getAll("timing");  // ✅ This line fixes the issues
    const gender = formData.get("gender") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const age = formData.get("age") as string;
    const userType = formData.get("user_type") as string;
    const address = formData.get("address") as string;
    const landmark = formData.get("landmark") as string;
    const preferences = formData.get("preferences") as string;
    const referral = formData.get("referral") as string;


    // ✅ Create JSON object
    const formJson = {
      full_name: fullName,
      start_date: startDate,
      plan,
      timing,
      gender,
      email,
      phone,
      age,
      user_type: userType,
      address,
      landmark,
      preferences,
      referral,
    };


    try {
      // ✅ Log or alert the final JSON
      console.log("Form JSON:", formJson);
      alert(JSON.stringify(formJson, null, 2));

      //  alert("Form submitted! Data: " + JSON.stringify(formData1, null, 2));
      alert(JSON.stringify({ fullName, startDate, plan, timing, userType }, null, 2));

      //  const response = await axios.post("http://localhost:5000/submitForm", formJson);
      // alert(response.data.message);
    } catch (error) {
      alert("Error submitting form");
      console.error(error);
    }
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
                    href="#"
                    className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-green-800 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
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
                      setShowModal(true);
                    }}
                  >
                    Sign Up Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        {showModal && (
          <Modal onClose={() => setShowModal(false)}>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg font-sans">
              <h2 className="text-center mb-6 text-xl font-bold">Join Bhojankart</h2>

              <label className="block mt-3 font-semibold text-sm">Full Name<span className="text-red-500">*</span></label>
              <input type="text" name="name" required className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm" />

              <label className="block mt-3 font-semibold text-sm">Email Address<span className="text-red-500">*</span></label>
              <input type="email" name="email" required className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm" />

              <label className="block mt-3 font-semibold text-sm">Phone Number<span className="text-red-500">*</span></label>
              <input type="tel" name="phone" required className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm" />

              <label className="block mt-3 font-semibold text-sm">Gender</label>
              <select name="gender" className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm">
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>

              <label className="block mt-3 font-semibold text-sm">Age<span className="text-red-500">*</span></label>
              <input type="number" name="age" min="10" max="100" required className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm" />

              <label className="block mt-3 font-semibold text-sm">Preferred Plan<span className="text-red-500">*</span></label>

              <select
                name="plan"
                required
                className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm"
                onInvalid={(e) =>
                  (e.target as HTMLSelectElement).setCustomValidity('Please select a preferred plan')
                }
                onInput={(e) =>
                  (e.target as HTMLSelectElement).setCustomValidity('')
                }
              >
                <option value="" disabled selected hidden>
                  Select Plan
                </option>
                <option>Basic – ₹2,900/month</option>
                <option>Standard – ₹3,600/month</option>
                <option>Premium – ₹3,900/month</option>
              </select>


              <label className="block mt-3 font-semibold text-sm">Meal Start Date<span className="text-red-500">*</span></label>
              <input type="date" name="start_date" required className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm" />


              <label className="block mt-3 font-semibold text-sm">User Type<span className="text-red-500">*</span></label>
              <select name="user_type" required className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm" onInvalid={(e) =>
                (e.target as HTMLSelectElement).setCustomValidity('Please select a user type')
              }
                onInput={(e) =>
                  (e.target as HTMLSelectElement).setCustomValidity('')
                }>
                <option value="" disabled selected>Select user type</option>
                <option>Student</option>
                <option>Working Professional</option>
                <option>Family / Household</option>
                <option>Other</option>
              </select>

              <label className="block mt-3 font-semibold text-sm">Delivery Address <span className="text-red-500">*</span></label>
              <input type="text" name="address" required className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm" />

              <label className="block mt-3 font-semibold text-sm">Nearby Landmark (optional)</label>
              <input type="text" name="landmark" className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm" />

              <label className="block mt-3 font-semibold text-sm">Dietary Restrictions (optional)</label>
              <textarea name="preferences" rows={2} className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm" placeholder="Onion, Garlic, Mushroom, etc."></textarea>

              <label className="block mt-3 font-semibold text-sm">How did you hear about us?<span className="text-red-500">*</span></label>
              <select name="referral" required className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm" onInvalid={(e) =>
                  (e.target as HTMLSelectElement).setCustomValidity('Please let us know how you heard about us.')
                }
                  onInput={(e) =>
                    (e.target as HTMLSelectElement).setCustomValidity('')
                  } >
                <option value="" disabled selected>Select</option>

                <option>WhatsApp</option>
                <option>Instagram</option>
                <option>Google</option>
                <option>Friend</option>
                <option>Posters/Banners</option>
                <option>Other</option>
              </select>

              <label className="block mt-3 font-semibold text-sm">Special Requests / Notes (optional)</label>
              <textarea name="notes" rows={2} className="w-full p-2 mt-1 border border-gray-300 rounded-md text-sm"></textarea>

              <label className="block mt-4 text-sm">
                <input type="checkbox" required className="mr-2" onInvalid={(e) =>
                  (e.target as HTMLSelectElement).setCustomValidity('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy')
                }
                  onInput={(e) =>
                    (e.target as HTMLSelectElement).setCustomValidity('')
                  } />
I agree to the{' '}
                <button
                  type="button"
                  className="text-green-700 underline hover:text-green-900 focus:outline-none"
                  onClick={() =>
                    openCommonModal('Terms of Service')
                  }
                >
                  Terms of Service
                </button>
                ,{' '}
                <button
                  type="button"
                  className="text-green-700 underline hover:text-green-900 focus:outline-none"
                  onClick={() =>
                    openCommonModal(
                      'Privacy Policy')
                  }
                >
                  Privacy Policy
                </button>
                , and{' '}
                <button
                  type="button"
                  className="text-green-700 underline hover:text-green-900 focus:outline-none"
                  onClick={() =>
                    openCommonModal(
                      'Refund Policy')
                  }
                >
                  Refund Policy
                </button>
                .
              </label>

              <button type="submit" className="w-full bg-green-700 text-white font-bold py-2 px-4 mt-6 rounded hover:bg-green-800">
                Submit & Get Started
              </button>
            </form>
          </Modal>
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
