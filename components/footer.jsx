"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-[12%] py-8 border-t border-navy-800 mt-10 transition-colors">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-navy-300">
        <p className="font-Ovo">© {new Date().getFullYear()} Yasiru Premarathna. All rights reserved.</p>
        <div className="flex items-center gap-6 font-Ovo">
          <a href="#top" className="hover:text-navy-50 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-navy-50 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-navy-50 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
