import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden flex items-center"
      style={{ backgroundImage: "url('/Consulting.png')" }}
    >

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/50 to-blue-900/40"></div>

      {/* blur textures */}
      <div className="absolute top-10 left-10 w-60 md:w-80 h-60 md:h-80 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 md:w-96 h-72 md:h-96 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">

        {/* floating glass card */}
        <div className="backdrop-blur-md bg-white/30 p-8 md:p-12 rounded-3xl shadow-2xl border border-white/30 animate-float">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
            Professional Accounting <br className="hidden md:block" />
            & Business Consulting
          </h1>

          <p className="mt-6 text-gray-200 text-base md:text-lg max-w-2xl mx-auto">
            Helping businesses simplify finance, tax compliance
            and strategic growth with expert consulting services.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

            <button className="bg-blue-700 text-white px-7 py-3 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-blue-400/40 hover:scale-105 transition">
              Get Consultation
            </button>

            <button className="bg-white/80 text-blue-900 px-7 py-3 rounded-lg hover:bg-white hover:scale-105 transition">
              Explore Services
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;