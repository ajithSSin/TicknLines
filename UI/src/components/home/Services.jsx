import React from "react";

const Services = () => {

  const services = [
    {
      title: "Accounting Services",
      desc: "Complete bookkeeping and financial management solutions."
    },
    {
      title: "Tax Consultancy",
      desc: "GST filing, tax compliance and planning."
    },
    {
      title: "Business Advisory",
      desc: "Strategic consulting for startups and enterprises."
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gray-100 py-24">

      {/* background texture */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (

            <div
              key={index}
              className="backdrop-blur-sm bg-white/40 p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <h3 className="text-xl font-semibold mb-4 text-blue-900">
                {service.title}
              </h3>

              <p className="text-gray-700">
                {service.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;