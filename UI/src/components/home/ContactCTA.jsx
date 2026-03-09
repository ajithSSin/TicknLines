import React from "react";

const ContactCTA = () => {
  return (
    <section className="relative overflow-hidden bg-blue-100 py-20 text-center">

      {/* background textures */}
      <div className="absolute top-10 left-20 w-60 h-60 bg-blue-200 opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Need Expert Financial Advice?
        </h2>

        <p className="text-gray-700 mb-8 text-lg">
          Get a free consultation today and let our experts guide your business growth.
        </p>

        <button className="bg-blue-800 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition">
          Contact Us
        </button>

      </div>

    </section>
  );
};

export default ContactCTA;