// utils/LegalContentMap.tsx
import React from "react";

export const LegalContentMap: Record<string, { title: string; content: React.ReactNode }> = {
  'Terms of Service': {
    title: 'Terms of Service',
    content: (
      <>
        <p><strong>Effective Date: June 8, 2025</strong></p>
        <p className="mt-4">
          Welcome to Bhojankart! By accessing or using our services, including visiting our website, subscribing to our meal plans, or receiving our meals, you agree to the following terms and conditions:
        </p>

        <p className="mt-4"><strong>1. Service Overview</strong><br />
          Bhojankart offers vegetarian meal delivery services in Indore on a monthly subscription basis, excluding Sundays. We provide two meals daily (lunch and dinner).
        </p>

        <p className="mt-4"><strong>2. Subscription & Payments</strong><br />
          Meal plans are billed in advance every month, excluding Sundays.<br />
          Payment must be made before meal deliveries commence.<br />
          Any customisation or dietary preferences should be communicated in advance, though availability may vary.
        </p>

        <p className="mt-4"><strong>3. Delivery & Timings</strong><br />
          Meals are delivered every day to your provided address at designated time slots.<br />
          Any changes in delivery address or timings should be notified at least 24 hours in advance.
        </p>

        <p className="mt-4"><strong>4. Pause or Skip Days</strong><br />
          You may pause your subscription temporarily (e.g., due to travel) with prior notice of at least 24 hours. These paused days will be carried forward to the next month.<br />
          Skipped meals without notice will not be adjusted or refunded.
        </p>

        <p className="mt-4"><strong>5. Prohibited Usage</strong><br />
          You may not:<br />
          - Resell our meals without written permission.<br />
          - Misuse the service or harass staff or delivery partners.
        </p>

        <p className="mt-4"><strong>6. Changes to Terms</strong><br />
          We may revise these terms at any time. Continued use of our services after updates implies acceptance of the new terms.
        </p>
      </>
    ),
  },

  'Privacy Policy': {
    title: 'Privacy Policy',
    content: (
      <>
        <p><strong>Effective Date: June 8, 2025</strong></p>

        <p className="mt-4">
          At Bhojankart, we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information.
        </p>

        <p className="mt-4"><strong>1. Information We Collect</strong><br />
          - Name, phone number, email address, and delivery address<br />
          - Plan preferences and dietary needs (if shared)<br />
          - Payment details (processed securely via third-party gateways)
        </p>

        <p className="mt-4"><strong>2. How We Use Your Data</strong><br />
          - To fulfill your meal subscription and deliver meals<br />
          - To communicate with you regarding updates, changes, or offers<br />
          - To improve our service based on your feedback
        </p>

        <p className="mt-4"><strong>3. Data Sharing</strong><br />
          - We do not sell, trade, or rent your personal information to others.<br />
          - We may share your data only with our delivery and logistics partners for service fulfillment.
        </p>

        <p className="mt-4"><strong>4. Data Security</strong><br />
          - Your data is securely stored and access is limited to authorized personnel only.<br />
          - We take reasonable steps to prevent data misuse or unauthorized access.
        </p>

        <p className="mt-4"><strong>5. User Rights</strong><br />
          You can:<br />
          - Request a copy of your data<br />
          - Ask us to update or delete your information<br />
          - Opt out of promotional communications
        </p>

        <p className="mt-4">
          For any privacy concerns, write to us at:{' '}
          <a
            href="mailto:support@bhojankart.in"
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            support@bhojankart.in
          </a>
        </p>
      </>
    ),
  },

  'Refund Policy': {
    title: 'Refund Policy',
    content: (
      <>
        <p><strong>Effective Date: June 8, 2025</strong></p>

        <p className="mt-4">
          At Bhojankart, we are committed to serving fresh, hygienic, and homestyle vegetarian meals with honesty and transparency. Here’s how our refund policy works:
        </p>

        <p className="mt-4"><strong>1. First-Day No Questions Asked Refund</strong><br />
          - We understand taste is personal. If you don’t like your meal on the very first day, you can claim a 100% refund — no questions asked.<br />
          - Simply inform us via call or WhatsApp before midnight of the same day. Refunds will be processed within 3–5 business days.
        </p>

        <p className="mt-4"><strong>2. Cancellation Before Subscription Start</strong><br />
          - If you cancel your subscription before your second day meal is delivered (first day meal free), you are eligible for a full refund (minus any transaction or platform processing fees, if applicable)..
        </p>

        <p className="mt-4"><strong>3. No Mid-Month Cancellation</strong><br />
          - Once your meal subscription has started, mid-month cancellations are not permitted.<br />
          - Our operations and sourcing are planned based on confirmed meal counts to ensure minimal food waste and efficient delivery.<br />
          - However, you may choose to pause your subscription (see below).
        </p>

        <p className="mt-4"><strong>4. Pause & Carry Forward Option</strong><br />
          - You can pause your subscription for reasons like travel or illness with 24 hours' prior notice.<br />
          - The number of paused days will be carried forward and extended into the next billing cycle — no loss of meals.
        </p>

        <p className="mt-4"><strong>5. Refund Request Process</strong><br />
          - To claim your refund:<br />
          - Email us at{' '}
          <a
            href="mailto:support@bhojankart.in"
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            support@bhojankart.in
          </a><br />
          - Or WhatsApp us with your registered number and delivery details.
        </p>

        <p className="mt-4"><strong>6. Refund Timeline</strong><br />
          - Approved refunds will be processed to your original payment method within 3–7 business days, depending on your bank or payment gateway.
        </p>
      </>
    ),
  },
'thankYou': {
  title: 'Thank You',
  content: (
    <>
      <p><strong>🎉 Thank you for joining Bhojankart!</strong></p>

      <p className="mt-4">
        Your submission has been received successfully. Our team will get in touch with you shortly via the contact details you provided.
      </p>

      <p className="mt-4">
        We’re excited to serve you healthy, homestyle vegetarian meals that suit your lifestyle.
      </p>

      <p className="mt-4">
        If you have any immediate questions or need support, feel free to contact us on WhatsApp or email at{' '}
        <a
          href="mailto:support@bhojankart.in"
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          support@bhojankart.in
        </a>.
      </p>

      <p className="mt-4">
        Welcome to the Bhojankart family! 🍽️
      </p>
    </>
  ),
},
'offerTerms': {
  title: '🎁 Offer Terms & Conditions:',
  content: (
    <>
      <p>
        <strong>To avail the First Day Meal Free offer:</strong>
      </p>

      <ul className="list-disc pl-5 space-y-1 mt-4">
        <li>This offer is valid only on the 26-day subscription Plan.</li>
        <li>The free meal will be delivered on Day 1 of your plan.</li>
        <li>Applicable for first-time subscribers only.</li>
        <li>BhojanKart reserves the right to modify or cancel the offer at any time.</li>
      </ul>

      <p className="mt-4">
        👉 Start your subscription today and experience homemade goodness from Day 1 — on us!
      </p>
    </>
  ),
},
};
