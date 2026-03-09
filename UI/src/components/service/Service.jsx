import React from 'react';
import { ShieldCheck, 
        Users, 
        LineChart, 
        Lock, 
        PhoneCall, 
        CheckCircle2, 
        Building2, 
        Briefcase 
    } from 'lucide-react';

const Service = () => {
  const services = [
    "ESI, PF & Labour Welfare", "GST Registration & Returns", "Internal & On-site Audits",
    "WPS & Labour Compliance", "Industrial & Legal Consultancy", "Project Reports",
    "Accounting & Book-keeping", "Income Statements (P&L)", "Balance Sheets",
    "Municipal & Corp. Licenses", "Udhyog Aadhar Registration", "PAN Card Registration"
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Eminent HR & Business Consultancy</h1>
          <p className="text-xl text-blue-100 mb-8">Serving Kerala’s leading business houses since 1997.</p>
          <button className="bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center mx-auto">
            <PhoneCall className="mr-2 w-5 h-5" /> Contact Our Experts
          </button>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-900">25+</div>
            <div className="text-slate-500 uppercase tracking-widest text-sm">Years of Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-900">350+</div>
            <div className="text-slate-500 uppercase tracking-widest text-sm">Satisfied Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-900">500+</div>
            <div className="text-slate-500 uppercase tracking-widest text-sm">Businesses Secured</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-orange-500 pl-4">Our Services</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We offer a wide spectrum of thrifty HR Administrative, Accounting, and Tax services. 
              What we list is just the tip of the iceberg of our specialized expertise.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                <Briefcase className="mr-2 w-5 h-5" /> Why Call Us?
              </h4>
              <p className="text-sm text-slate-600 italic">
                "A simple call makes our job—and yours—a breeze. Let us solve your worries while you grow your business."
              </p>
            </div>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200 border border-slate-100">
                <CheckCircle2 className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-slate-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block p-3 bg-blue-500/20 rounded-lg mb-4 text-blue-400">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Security Clamped to the Teeth</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We maintain our own business house with high-level security measures. We house the most 
              important documents of over 500 clients in built-in lockers on our premises.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ShieldCheck className="mr-3 text-orange-400 w-6 h-6" />
                <span><strong>Physical Strong Rooms:</strong> Used by 350+ clients for hard-copy safety.</span>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="mr-3 text-orange-400 w-6 h-6" />
                <span><strong>Digital Lockers:</strong> Secure storage for your primary digital data.</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Users className="mr-2 text-blue-400" /> Competent Staff
            </h3>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Our team is groomed into highly productive professionals. We provide stringent training 
              to keep them abreast of the latest taxation rules and e-filing competence.
            </p>
            <div className="flex items-center text-orange-400 font-bold">
              <LineChart className="mr-2 w-5 h-5" /> Result: Precise & Tangible Growth
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="py-12 px-6 text-center border-t border-slate-200">
        <p className="text-slate-500 mb-4 tracking-wide uppercase text-xs font-bold">Trusted by Kerala's Established Business Houses</p>
        <div className="flex justify-center space-x-8 opacity-50">
          <Building2 className="w-8 h-8" />
          <Building2 className="w-8 h-8" />
          <Building2 className="w-8 h-8" />
        </div>
        {/* <p className="mt-8 text-slate-400 text-sm">© {new Date().getFullYear()} Your Consultancy Name. All rights reserved.</p> */}
      </footer>
    </div>
  );
};

export default Service;