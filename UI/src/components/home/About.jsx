import React from "react";

const About = () => {
  return (
    <section className="bg-white py-20 md:py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Ticks'n'Lines
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We provide professional accounting, tax consulting and
              financial advisory services that help businesses maintain
              compliance and achieve sustainable growth.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our mission is to simplify financial management while
              enabling companies to focus on innovation, efficiency,
              and long-term expansion.
            </p>

            <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>

          </div>

          {/* Right Image */}
          <div>
            <img
              src="/Consulting.png"
              alt="Business Consulting"
              className="rounded-xl shadow-lg"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;