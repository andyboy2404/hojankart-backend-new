import React from 'react';

const MealPlans: React.FC = () => {
  const meals = [
    {
      title: "MINI MEAL",
      calories: "280 - 310 Kcal",
      image: "/mini-meal.png",
      description: "(4 Roti with Ghee, 1 Seasonal Veg Dry/Gravy with Salad)",
      price: "₹75",
      plans: [
        { label: "6 Days", originalPrice: "₹400", price: "₹380", discount: "5% Off" },
        { label: "12 Days", originalPrice: "₹699", price: "₹650", discount: "7% Off" },
        { label: "26 Days", originalPrice: "₹1367", price: "₹1230", discount: "10% Off" },
      ],
    },
    {
      title: "Complete Meal",
      calories: "430 - 460 Kcal",
      image: "/light-bite.png",
      description: "(4 Roti with Ghee, 1 Seasonal Veg Dry/Gravy, 1 Dal, Rice and Salad)",
      price: "₹120",
      plans: [
        { label: "6 Days", originalPrice: "₹526", price: "₹500", discount: "5% Off" },
        { label: "12 Days", originalPrice: "₹935", price: "₹870", discount: "7% Off" },
        { label: "26 Days", originalPrice: "₹1855", price: "₹1670", discount: "10% Off" },
      ],
    },
    {
      title: "The Exotic Bhojan (Prepared with Premium Ingredients and Vegetables)",
      calories: "520 - 560 Kcal",
      image: "/big-bite.png",
      description: "(4 Roti with Ghee, 1 Exotic Seasonal Veg, 1 Exotic Dal, 1 Rice/Biryani/Pulao and Salad)",
      price: "₹140",
      isPopular: true, // Keep this true for "Most Popular" tag
      plans: [
        { label: "6 Days", originalPrice: "₹673", price: "₹640", discount: "5% Off" },
        { label: "12 Days", originalPrice: "₹1204", price: "₹1120", discount: "7% Off" },
        { label: "26 Days", originalPrice: "₹2344", price: "₹2110", discount: "10% Off" },
      ],
    },
    {
      title: "The Multigrain Box (Prepared with Premium Ingredients and Vegetables)",
      calories: "300 - 330 Kcal",
      image: "/multigrain.png",
      description: "(2 Multigrain Rotis with Ghee, 1 Gravy/Dry Veg, 1 Dal, Brown Rice and Special Salad with Curd/Buttermilk)",
      price: "₹90",
      plans: [
        { label: "6 Days", originalPrice: "₹716", price: "₹680", discount: "5% Off" },
        { label: "12 Days", originalPrice: "₹1268", price: "₹1180", discount: "7% Off" },
        { label: "26 Days", originalPrice: "₹2478", price: "₹2230", discount: "10% Off" },
      ],
    },
  ];

  return (
    <div className="px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-6">
            {meals.map((meal, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden flex flex-col group max-w-[300px] w-full"
              >
                <div className="relative flex items-center justify-center p-4">
                  <div className="w-full h-[260px] bg-white flex items-center justify-center overflow-hidden rounded relative">
                    <img
                      src={meal.image}
                      alt={meal.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Calories Tag - Left Side */}
                    <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      {meal.calories}
                    </div>

                    {/* Most Popular Tag - Right Side with Pulse Animation and Yellow Background */}
                    {meal.isPopular && (
                      <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded animate-pulse">
                        Most Popular
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex-1 p-4 flex flex-col">
                  <h3
                    className="relative inline-block text-[16px] font-bold text-[#355e3b] mb-2 group cursor-pointer"
                    onClick={() => window.location.href = "https://wa.me/917999946052?text=Hi"}
                  >
                    {meal.title}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#355e3b] transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                  <p className="text-[14px] text-gray-700 mb-4 leading-snug">
                    {meal.description}
                  </p>
                  <div className="mt-auto space-y-2 divide-y divide-green-100">
                    {meal.plans.map((plan, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-sm pt-2"
                      >
                        <div className="flex flex-col items-start">
                          <span className="font-semibold text-green-700 text-[14px]">
                            {plan.label}
                          </span>
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
                          {plan.originalPrice !== plan.price && (
                            <span className="text-gray-400 text-[12px] line-through">
                              {plan.originalPrice}
                            </span>
                          )}
                          <span className="font-bold text-[14px] transition-transform duration-300 hover:scale-125 cursor-pointer">
                            {plan.price}
                          </span>
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
      <div className="text-green-600 text-sm italic text-center mt-4">
        Note: All prices listed are for one meal per day, including taxes and delivery fees. For pricing on two meals per day, please visit the sign-up section.
      </div>
    </div>
  );
};

export default MealPlans;