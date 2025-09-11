import React from 'react';
import { Leaf } from 'lucide-react';

const FoodWastePoster: React.FC = () => {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full opacity-10 transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-800 rounded-full opacity-10 transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Icon and heading */}
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center mr-4">
                            <Leaf className="h-6 w-6 text-primary-800" />
                        </div>
                        <h2 className="font-heading font-bold text-2xl md:text-3xl">
                            Don't Waste Food — Make It Matter
                        </h2>
                    </div>

                    {/* Main message */}
                    <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
                        Aapka Chhoda Hua Khana –<br />
                        <span className="text-secondary-400">Kisi Aur Ka Sapna Tha.</span>
                    </h1>

                    {/* Statistics and description */}
                    <div className="space-y-6 mb-8">
                        <p className="text-lg md:text-xl leading-relaxed text-white/90">
                            Every year, India wastes <span className="font-bold text-secondary-400">78.2 million tonnes</span> of food—that's about
                            <span className="font-bold"> 214,000 tonnes per day</span>, enough to help fight hunger for
                            <span className="font-bold text-secondary-400"> 377 million people</span>.
                        </p>

                        <p className="text-lg md:text-xl leading-relaxed text-white/90">
                            At Bhojankart, we believe every bite counts. Our in-house, <span className="font-semibold">FSSAI‑certified kitchens</span>,
                            precise meal planning, and flexible rescheduling ensure minimal waste.
                        </p>
                    </div>

                    {/* Call to action */}

                    <p className="text-xl md:text-2xl font-semibold text-secondary-400 mb-4">
                        🌱 Join us in making every meal matter.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <p className="text-sm text-white/70">
                            Source: United Nations Environment Programme (UNEP) Food Waste Index Report, 2021
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodWastePoster;