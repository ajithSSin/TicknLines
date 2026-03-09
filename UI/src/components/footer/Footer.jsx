import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Ticksnlines</h3>

          <p className="text-blue-200 leading-relaxed">
            Professional accounting and business consulting services helping
            organizations manage finance, compliance and growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>

          <ul className="space-y-3 text-blue-200">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Service</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Address</h4>

          <p className="text-blue-200 text-sm leading-relaxed">
            Opposite CMRL <br />
            Muppathadom, Aluva <br />
            Ernakulam, Kerala <br />
            PIN: 683110
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact</h4>

          <p className="text-blue-200 text-sm mb-3">
              0484 2543885 Ext:21/23/24 <br />
              +91 9562707090/(1-4)
          </p>

          <a
            href="mailto:esipf@ticksnlines.com"
            className="block text-blue-200 hover:text-white text-sm break-words"
          >
            esipf@ticksnlines.com
          </a>

          <a
            href="mailto:salestax@ticksnlines.com"
            className="block text-blue-200 hover:text-white text-sm break-words"
          >
            salestax@ticksnlines.com
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-blue-700 mt-12 pt-6 text-center text-blue-300 text-sm">
        © 2026 Ticksnlines. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;