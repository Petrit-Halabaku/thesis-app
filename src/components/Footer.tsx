import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-md rounded-lg p-4 text-center w-full">
      <p>© 2024 Codr. All rights reserved.</p>
      <nav>
        <Link to="/terms-of-service" className="text-blue-500 hover:underline">
          Terms of Service
        </Link>{" "}
        |
        <Link to="/privacy-policy" className="text-blue-500 hover:underline">
          Privacy Policy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
