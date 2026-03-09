import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaPhoneAlt } from "react-icons/fa"; 
// Added FaPhoneAlt
import contactBanner from "../../assets/contact.png"; 

const Contact = () => {
  return (
    <section className="bg-gray-200">

      {/* Image Section */}
      <div className="w-full">
        <img 
          src={contactBanner} 
          alt="Contact Us Banner" 
          className="w-full h-auto object-cover max-h-[400px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach out to our experts for professional accounting and financial
            consulting services.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-6">

            {/* Address Card */}
            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4 transition-transform hover:scale-[1.01]">
              <FaMapMarkerAlt className="text-blue-800 text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Ticks n Lines
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Opposite CMRL, Industrial Area <br />
                  Muppathadom, Aluva, Ernakulam <br />
                  Kerala, PIN: 683110
                </p>
              </div>
            </div>

            {/* Phone Card - NEW SECTION */}
            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4 transition-transform hover:scale-[1.01]">
              <FaPhoneAlt className="text-blue-800 text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Phone
                </h3>
                <p className="text-gray-600">0484 2543885 Ext:21/23/24</p>
                <p className="text-gray-600">+91 9562707090/(1-4)</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4 transition-transform hover:scale-[1.01]">
              <FaEnvelope className="text-blue-800 text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Email
                </h3>
                <p className="text-gray-600">esipf@ticksnlines.com</p>
                <p className="text-gray-600">salestax@ticksnlines.com</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white p-6 rounded-xl shadow-md flex gap-4 transition-transform hover:scale-[1.01]">
              <FaClock className="text-blue-800 text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Working Hours
                </h3>
                <p className="text-gray-600">8 A.M – 5 P.M (Mon - Sat)</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.123456789!2d76.312345!3d10.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA3JzI0LjQiTiA3NsKwMTgnNDQuNCJF!5e0!3m2!1sen!2sin!4v1646700000000!5m2!1sen!2sin"
                className="w-full h-64 border-0"
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-xl shadow-lg h-fit lg:sticky lg:top-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">First Name *</label>
                  <input type="text" className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-700 outline-none" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Last Name *</label>
                  <input type="text" className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-700 outline-none" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email Address *</label>
                <input type="email" className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-700 outline-none" required />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Telephone Number</label>
                <input type="tel" className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-700 outline-none" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Comments *</label>
                <textarea rows="4" className="w-full mt-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-700 outline-none" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-md">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;