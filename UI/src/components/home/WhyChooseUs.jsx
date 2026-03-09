import React from "react";

const WhyChooseUs = () => {

  const points = [
    "Experienced Financial Experts",
    "Transparent Pricing",
    "Fast & Reliable Service",
    "Business Growth Consulting"
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">

      {/* background texture */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-4 gap-10">

          {points.map((point, index) => (

            <div
              key={index}
              className="backdrop-blur-sm bg-white/40 p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <div className="flex justify-center mb-4">

                <div className="bg-blue-800 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md">
                  ✓
                </div>

              </div>

              <p className="font-semibold text-gray-800 text-lg">
                {point}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;