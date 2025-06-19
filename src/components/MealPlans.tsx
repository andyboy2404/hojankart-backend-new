// import React, { useState } from 'react';



const MealPlans: React.FC = () => {
  // const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  
const meals = [
  {
    title: "MINI MEAL",
    calories: "280 - 310 Kcal",
    image: "/mini-meal.png",
    description: "1 Vegetable, 3 Chapati",
    price: "₹75",
    plans: [
      // { label: "3 Days", originalPrice: "₹356", price: "₹356" },
      { label: "1 Week", originalPrice: "₹713", price: "₹689", discount: "5% Off" },
      { label: "2 Weeks", originalPrice: "₹1425", price: "₹1359", discount: "7% Off" },
      { label: "1 Month", originalPrice: "₹2850", price: "₹2661", discount: "10% Off" },
    ],
  },
  {
    title: "LIGHT BITE",
    calories: "430 - 460 Kcal",
    image: "/light-bite.png",
    description: "1 Vegetable, 1 Dal, 3 Chapati, 1 Salad/Soup",
    price: "₹120",
    plans: [
      // { label: "3 Days", originalPrice: "₹498", price: "₹498" },
      { label: "1 Week", originalPrice: "₹996", price: "₹958", discount: "5% Off" },
      { label: "2 Weeks", originalPrice: "₹1992", price: "₹1886", discount: "7% Off" },
      { label: "1 Month", originalPrice: "₹3984", price: "₹3682", discount: "10% Off" },
    ],
  },
  {
    title: "BIG BITE",
    calories: "520 - 560 Kcal",
    image: "/big-bite.png",
    description: "1 Vegetable, 1 Dal, 3 Chapati, 1 Rice, 1 Salad/Soup",
    price: "₹140",
    plans: [
      // { label: "3 Days", originalPrice: "₹561", price: "₹561" },
      { label: "1 Week", originalPrice: "₹1122", price: "₹1078", discount: "5% Off" },
      { label: "2 Weeks", originalPrice: "₹2244", price: "₹2121", discount: "7% Off" },
      { label: "1 Month", originalPrice: "₹4480", price: "₹4135", discount: "10% Off" },
    ],
  },
  {
    title: "JUMBO FEAST",
    calories: "650 - 690 Kcal",
    image: "/jumbo-feast.png",
    description:
      "1 Gravy Veg, 1 Dry Veg, 1 Dal, 4 Chapati, 1 Rice, 1 Salad/Soup",
    price: "₹170",
    plans: [
      // { label: "3 Days", originalPrice: "₹656", price: "₹656" },
      { label: "1 Week", originalPrice: "₹1311", price: "₹1257", discount: "5% Off" },
      { label: "2 Weeks", originalPrice: "₹2622", price: "₹2472", discount: "7% Off" },
      { label: "1 Month", originalPrice: "₹5244", price: "₹4816", discount: "10% Off" },
    ],
  },
  
];
  

  return (
 <div className="px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {meals.map((meal, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden flex flex-col group"
              >
                <div className="relative flex items-center justify-center p-4">
                  <div className="w-full h-[220px] bg-white flex items-center justify-center overflow-hidden rounded relative">
                    <img
                      src={meal.image}
                      alt={meal.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Side Ribbon */}
                    <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      {meal.calories}
                    </div>
                    {/* Center Calories on Hover */}
                    {/* <div className="absolute inset-0 flex items-center justify-center bg-green-500/60 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {meal.calories}
                    </div> */}
                  </div>
                </div>
                <div className="flex-1 p-4 flex flex-col">
                  <h3 className="text-[16px] font-bold text-[#355e3b] mb-2 hover-underline relative inline-block text-xl font-bold text-primary-600">
                    {meal.title}
                  </h3>
                  <p className="text-[14px] text-gray-700 mb-4 leading-snug">{meal.description}</p>
                  <div className="text-[16px] font-semibold mb-2 flex items-center space-x-2">
                    <span className="leading-none">
                      {meal.price}</span>
                    <span className="text-[12px] text-gray-600 leading-none">(*Delivery Charge Applicable)</span>
                  </div>
                  <div className="mt-auto space-y-2 divide-y divide-green-100">
                    {meal.plans.map((plan, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-sm pt-2"
                      >
                        <div className="flex flex-col items-start">
                          <span className="font-semibold text-green-700 text-[14px]">{plan.label}</span>
                          {plan.discount && (
                            <div className="flex items-center space-x-1 mt-1">
                              <span className="bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">★</span>
                              <span className="bg-green-100 text-green-700 text-[12px] font-semibold px-2 py-0.5 rounded">
                                {plan.discount}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col items-end">
                          {plan.originalPrice && plan.originalPrice !== plan.price && (
                            <span className="text-gray-400 text-[12px] line-through">{plan.originalPrice}</span>
                          )}
                          <span className="font-bold text-[14px] transition-transform duration-300 hover:scale-125 cursor-pointer">
                            {plan.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlans;