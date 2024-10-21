import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        Cod<span className="text-orange-500">r</span>
      </Link>
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-orange-500">
          Home
        </Link>
        <Link to="/about" className="hover:text-orange-500">
          About
        </Link>
        <Link to="/privacy-policy" className="hover:text-orange-500">
          Privacy Policy
        </Link>
        {/* <Link to="/portfolio" className="hover:text-orange-500">
          Portfolio
        </Link>
        <Link to="/blog" className="hover:text-orange-500">
          Blog
        </Link> */}
      </nav>
      {/* <button className="bg-orange-500 text-white px-4 py-2 rounded hidden md:block">
        Contact Us
      </button> */}
      {/* <Menu className="md:hidden" /> */}
    </header>
  );
};

export default Header;
