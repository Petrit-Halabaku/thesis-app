import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-md rounded-lg p-4 text-center w-full">
      <p>© 2023 Your Company. All rights reserved.</p>
      <nav>
        <a href="/terms-of-service" className="text-blue-500 hover:underline">
          Terms of Service
        </a>{" "}
        |
        <a href="/privacy-policy" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
