import React, { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { Plus, Minus } from 'lucide-react';
import Footer from './Footer';

const faqData = [
  {
    question: `What is Bhojankart?`,
    questionNode: <>What is Bhojankart?</>,
    answer: (<>Bhojankart is a vegetarian meal subscription service offering hygienic, home-style meals with the warmth of traditional Indian kitchens. Designed for students, working professionals, and families, we bring wholesome food straight from our in-house kitchens to your doorstep.</>),
  },
  {
    question: `What makes Bhojankart different from others?`,
    questionNode: <>What makes Bhojankart different from others?</>,
    answer: (<>We don't operate through partner kitchens — every meal is prepared in our own <strong>FSSAI</strong>-certified kitchens by an in-house culinary team. We focus on consistency, hygiene, and authenticity. Plus, we offer a first-day meal absolutely free, so you can try us without any hesitation.</>),
  },
  {
    question: `How is food quality ensured?`,
    questionNode: <>How is food quality ensured?</>,
    answer: (<>We operate our own kitchens, each certified by <strong>FSSAI</strong> — India's apex food safety authority. Our production team follows strict hygiene protocols and uses fresh, high-quality ingredients to deliver safe, chemical-free meals that feel like they’re straight from your home kitchen.</>),
  },
  {
    question: `How are vegetables and raw materials sourced?`,
    questionNode: <>How are vegetables and raw materials sourced?</>,
    answer: (<>At Bhojankart, we take ingredient quality very seriously. All our vegetables and raw materials are directly sourced from <strong>local farmers</strong> and handpicked by our quality team to ensure freshness. We thoroughly inspect for any signs of spoilage, decay, or staleness before ingredients enter our kitchens. This rigorous process guarantees that only the freshest and safest ingredients go into preparing your meals — delivering consistent quality and wholesome taste every single day.</>),
  },
  {
    question: `What kind of food do you serve?`,
    questionNode: <>What kind of food do you serve?</>,
    answer: (<>Our meals are <strong>pure vegetarian</strong> and include a daily-changing mix of roti, sabzi, rice, dal/curry, and occasional accompaniments.</>),
  },
  {
    question: `Are your kitchens pure veg?`,
    questionNode: <>Are your kitchens pure veg?</>,
    answer: (<>Yes. All our kitchens are 100% <strong>pure vegetarian</strong>, with no handling of non-veg ingredients at any stage of preparation.</>),
  },
  {
    question: `Do you offer Non-Veg options?`,
    questionNode: <>Do you offer Non-Veg options?</>,
    answer: (<>No. Bhojankart is exclusively a vegetarian meal service, committed to clean, plant-based home-style eating.</>),
  },
  {
    question: `Can I get a trial meal?`,
    questionNode: <>Can I get a trial meal?</>,
    answer: (<>Yes! We offer a <strong>First Day Meal Free</strong> to every new customer who subscribes to any of our plans. Try us once — no risk, no commitment.</>),
  },
  {
    question: `Can I reschedule my meals?`,
    questionNode: <>Can I reschedule my meals?</>,
    answer: (<>Absolutely! With <strong>Funlimited rescheduling</strong> across all plans, just inform us on WhatsApp or
| 📧{" "}
  <a href="mailto:support@bhojankart.in" className="text-blue-600 underline hover:text-blue-800">
    <strong>support@bhojankart.in</strong>
  </a>{" "} | <strong>24 hours in advance</strong>, and we’ll adjust your delivery as per your convenience.
</>),
  },
  {
    question: `Can I pause or skip my subscription for a few days?`,
  questionNode: <>Can I pause or skip my subscription for a few days?</>,
  answer: (
    <>
      Yes! If you're travelling or need a short break, you can{" "}
      <strong>pause your subscription with at least 24 hours' notice</strong>. The skipped days will be carried forward and{" "}
      <strong>added to the end of your subscription</strong>, so you never lose a meal. However, meals skipped{" "}
      <strong>without prior notice</strong> will not be refunded or adjusted, so don’t forget to inform us in time via WhatsApp or at{" "}
      <a
        href="mailto:support@bhojankart.in"
        className="text-blue-600 underline hover:text-blue-800"
      >
        <strong>support@bhojankart.in</strong>
      </a>
      .
    </>
  ),
  },
  {
    question: `Can I cancel my meal plan in the middle of the month?`,
    questionNode: <>Can I cancel my meal plan in the middle of the month?</>,
    answer: (<>Mid-month cancellations are not permitted once your subscription has started. Our meal planning, ingredient sourcing, and logistics are carefully aligned with confirmed meal counts to reduce food waste and ensure efficient service. However, we understand life happens — so if needed, you can always pause your subscription with prior notice, and the remaining meals will be carried forward.</>),
  },
  {
    question: `Do you offer customisation for food preferences?`,
    questionNode: <>Do you offer customisation for food preferences?</>,
    answer: (<>Yes. If there’s anything you don’t like — be it brinjal, bitter gourd, or any other item — just let us know when you subscribe. We'll ensure your meals are tailored accordingly.</>),
  },
  {
    question: `Can I request Jain or onion-garlic-free food?`,
    questionNode: <>Can I request Jain or onion-garlic-free food?</>,
    answer: (<>Yes. We have a menu plan especially designed Jain/Satvik food. But, if you still have any dietary restrictions, mention your requirement during the signup, and we’ll make sure it’s taken care of.</>),
  },
  {
    question: `What are some available add-ons?`,
    questionNode: <>What are some available add-ons?</>,
    answer: (<>You can add extra chapatis, additional portions of dal or sabzi, or even opt-in for Sunday deliveries based on your plan. Just mention your add-ons while subscribing or via <strong>WhatsApp</strong>.</>),
  },
  {
    question: `Do you deliver daily or on specific days?`,
    questionNode: <>Do you deliver daily or on specific days?</>,
    answer: (<>Standard deliveries are Monday to Saturday. Sunday meals are optional and available as an add-on.</>),
  },
  {
    question: `What’s the vision of Bhojankart?`,
    questionNode: <>What’s the vision of Bhojankart?</>,
    answer: (<>We aim to make India’s youth healthier and more mindful of what they eat. Bhojankart brings traditional, homely meals within easy reach, satisfying hunger with nutrition, nostalgia, and love.</>),
  },
  {
  question: `Why should I subscribe to a daily meal plan?`,
  questionNode: <>Why should I subscribe to a daily meal plan?</>,
  answer: (
    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong>Free Delivery</strong> at no additional cost
      </li>
      <li>
        <strong>Unlimited Rescheduling</strong> anytime with a 24-hour heads-up
      </li>
      <li>
        <strong>26 Unique Menus</strong> to avoid repetition for over a month.
      </li>
      <li>
        <strong>Personalised meals</strong> based on your dislikes
      </li>
      <li>
        <strong>Risk-free Trial</strong> with our <strong>First Day Free Meal</strong> offer
      </li>
    </ul>
  ),
},
  {
    question: `How do I subscribe?`,
    questionNode: <>How do I subscribe?</>,
    answer: (<>Just head to our website, fill in the sign-up form, choose your meal plan and start date, and our team will get in touch to finalize it. Simple, quick, and commitment-free!</>),
  },
  {
    question: `Do you offer one-time or instant orders?`,
    questionNode: <>Do you offer one-time or instant orders?</>,
    answer: (<>Yes. You can order our homestyle food instantly via Zomato or Swiggy. But for the best value, subscribe to a plan and get your <strong>first day meal free</strong>!</>),
  },
  {
    question: `How are your meals prepared?`,
    questionNode: <>How are your meals prepared?</>,
    answer: (<>All meals are cooked by our in-house chefs using fresh ingredients, under tight supervision. Our self-crafted menus ensure that you enjoy the same comfort and taste as a home-cooked meal.</>),
  },
  {
    question: `What if I don’t like my first day meal?`,
    questionNode: <>What if I don’t like my first day meal?</>,
    answer: (<>No worries! We have a No Questions Asked Refund Policy — if you don’t like your first day’s meal, just let us know and we’ll refund it immediately.</>),
  },
  {
    question: `How do I contact customer support?`,
    questionNode: <>How do I contact customer support?</>,
    answer: (<>
  📞 <strong>+91-7999946052</strong> | 💬 <strong>WhatsApp</strong> | 📧{" "}
  <a href="mailto:support@bhojankart.in" className="text-blue-600 underline hover:text-blue-800">
    <strong>support@bhojankart.in</strong>
  </a>{" "} | 🕘 <strong>9:00 AM – 10:00 PM</strong>, <strong>365 Days</strong>
</>),
  }
];

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 text-neutral-800 flex flex-col justify-between">
      {/* Header */}
      <div className="bg-[#41795E] py-20 text-center text-white">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions (FAQs)</h1>
        <input
          type="text"
          placeholder="Search for your problem here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded shadow-lg w-96 text-black"
        />
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto mt-10 px-4 md:px-20 mb-28">
        <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>

        {filteredFAQs.length === 0 ? (
          <p className="text-gray-600">No matching questions found.</p>
        ) : (
          <Accordion.Root type="single" collapsible className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-5 text-left text-lg font-semibold text-gray-800 group">
                    {faq.question}
                    <span className="ml-2">
                      <Plus className="h-5 w-5 text-gray-500 group-data-[state=open]:hidden transition duration-200" />
                      <Minus className="h-5 w-5 text-gray-500 hidden group-data-[state=open]:block transition duration-200" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-5 pt-2 text-gray-700 data-[state=open]:animate-slide-down data-[state=closed]:hidden">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQPage;
