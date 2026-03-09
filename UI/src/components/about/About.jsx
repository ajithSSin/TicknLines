import React from "react";
import { FaBalanceScale, FaChartPie, FaRegClock, FaCheckCircle, FaCity, FaUsers, FaArrowRight } from "react-icons/fa";
import qualityImage from "../../assets/quality.png";

// ==============================
// 1. ADD THIS CUSTOM CSS
// Add this block to your main CSS file (index.css or App.css)
// ==============================
/* @keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-250px * 7)); } // Adjust number based on duplicated item count
}

.animate-scroll {
  animation: scroll 40s linear infinite;
}

.client-item {
  width: 250px; // Consistent width for each item
  flex-shrink: 0;
}
*/
// ==============================

const About = () => {
  const clientNames = [
    "Cochin Smart City Infrastructures Ltd",
    "Lulu Group of Companies",
    "Speedwings Aviation Academy",
    "Wetzlar Resorts & Hotels Pvt Ltd",
    "Empress Cybernetic Systems Pvt Ltd",
    "Admod Technologies",
    "Partner Industries Kerala",
  ];

  // For the infinite scroll, we need to duplicate the list
  const allClients = [...clientNames, ...clientNames];

  return (
    <div className="w-full bg-white font-sans text-gray-800">
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[400px]">
        <img
          src='/about.png'
          alt="Ticks n Lines Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
            Established <span className="text-blue-400">1997</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl leading-relaxed">
            A leading HR Consulting and Services firm in Kerala, offering expert 
            business advisory and administrative solutions for over 25 years.
          </p>
        </div>
      </div>

      {/* --- WHO WE ARE SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-800 font-bold uppercase tracking-widest text-sm mb-3">Our Identity</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Professionalism Built on <br /> Decades of Experience
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We are a premier firm offering employers a wide range of business advisory 
              and administrative services. By combining <strong>cost-effective</strong> 
              strategies with highly experienced professionals, we help enterprises 
              thrive in a complex regulatory environment.
            </p>
            <div className="flex items-center gap-6 p-6 bg-blue-50 rounded-2xl border-l-8 border-blue-800 shadow-inner">
              <FaCity className="text-blue-800 text-5xl shrink-0" />
              <p className="text-blue-900 font-medium italic">
                Our network of <strong>2 offices in Kerala</strong> enables us to meet 
                the needs of large, small, and medium enterprises across 
                every industry sector.
              </p>
            </div>
          </div>
          
          <div className="relative group">
            <img
              src={qualityImage}
              alt="Quality Standards"
              className="rounded-2xl shadow-2xl relative z-10 border-8 border-white group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-800 rounded-2xl -z-0 hidden md:block" />
          </div>
        </div>
      </div>

      {/* --- QUALITY & COMMITMENT SECTION --- */}
      <div className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Commitment to Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We strive hard to provide the best possible customer experience through 
              strict adherence to Quality Standards & Industry Practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-b-4 border-blue-800">
              <FaCheckCircle className="text-blue-800 text-3xl mb-4" />
              <h4 className="font-bold text-xl mb-3">Accurate & Timely</h4>
              <p className="text-gray-600">
                Providing financial information in a timely and accurate manner is a 
                commitment we feel cannot be compromised.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-b-4 border-blue-800">
              <FaBalanceScale className="text-blue-800 text-3xl mb-4" />
              <h4 className="font-bold text-xl mb-3">Expert Intervention</h4>
              <p className="text-gray-600">
                Our team of Accountants and Tax Consultants offer effective financial 
                interventions tailored to your industry.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-b-4 border-blue-800">
              <FaChartPie className="text-blue-800 text-3xl mb-4" />
              <h4 className="font-bold text-xl mb-3">Optimization</h4>
              <p className="text-gray-600">
                Well-trained professionals dedicated to enhancing Project Reports and 
                optimizing working capital needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- CORE EXPERTISE LIST --- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-blue-900 rounded-3xl p-10 md:p-16 text-white flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-6">Expert Solutions for Complex Issues</h3>
            <ul className="space-y-4 text-lg">
              {[
                "Complex Tax Issues Management",
                "Internal Audit Supervision",
                "Project Report Enhancement",
                "Working Capital Optimization"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-blue-100">
                  <FaCheckCircle className="text-blue-400" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 text-center md:text-left border-l border-blue-700/50 md:pl-10">
            <FaUsers className="text-blue-400 text-6xl mb-6 mx-auto md:mx-0" />
            <p className="text-xl leading-relaxed italic">
              "We have a dedicated team of well-trained accountants and professionals to help 
              clients navigate the evolving financial landscape."
            </p>
          </div>
        </div>
      </div>

      {/* --- REVISED CLIENTS SECTION (PASSIVE DISPLAY) --- */}
      <div className="bg-white py-24 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Kerala's Industry Leaders
            </h2>
            <div className="w-20 h-1.5 bg-blue-700 mx-auto rounded-full mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                We are proud to partner with over <strong>350+</strong> business and corporate 
                clients across every industry sector.
            </p>
        </div>

        {/* --- Infinite Scroll Banner --- */}
        <div className="relative w-full flex overflow-hidden group">
            <div className="flex animate-scroll group-hover:[animation-play-state:paused] gap-4 py-4">
                {allClients.map((client, index) => (
                    <div
                        key={index}
                        className="client-item bg-gray-50 p-6 rounded-lg border border-gray-100 text-center font-medium italic text-gray-700 shadow-sm whitespace-nowrap"
                    >
                        "{client}"
                    </div>
                ))}
            </div>
            {/* Soft Fades on the Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>

      {/* --- FINAL CTA SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 pb-24 text-center">
        <button className="bg-blue-800 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-blue-700 flex items-center gap-3 mx-auto transition-colors">
            Start a Partnership <FaArrowRight />
        </button>
      </div>

    </div>
  );
};

export default About;