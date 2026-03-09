import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Close mobile menu on scroll
      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
      ${scrolled ? "bg-gray-900 shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="px-4 py-2">
          <img src="/logo.png" alt="Ticks n Lines Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 font-medium text-white">
          <li className="cursor-pointer hover:text-blue-300 transition">
            <Link to="/home">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-300 transition">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-300 transition">
            <Link to ="/service">Services</Link>
            
          </li>
          <li className="cursor-pointer hover:text-blue-300 transition">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen? <GiHamburgerMenu />:<IoClose />}
        </button>
      </div>

      {/* Mobile Menu inside navbar with slide & fade */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"} px-6 flex flex-col items-center bg-black/60 rounded-b-xl shadow-md`}
      >
        {["Home", "Services", "About", "Contact"].map((item, index) => (
          <li
            key={item}
            className={`cursor-pointer list-none w-full text-center text-white text-lg
              transform transition duration-300
              ${menuOpen ? `opacity-100 translate-y-0 delay-${index * 75}` : "opacity-0 -translate-y-2"}`}
          >
            <Link
              to={item === "Home" ? "/home" : `/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;