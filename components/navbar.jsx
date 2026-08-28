"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { href: "#top", label: "Home" },
    { href: "#about", label: "About me" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Projects" },
    { href: "#contact", label: "Contact me" },
  ];

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${
        isScroll ? "shadow-md bg-navy-950/90 backdrop-blur-sm" : "bg-transparent"
      } fixed w-full z-50 transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 text-sm text-navy-100">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-Ovo hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-full text-navy-100 hover:bg-navy-800 transition-colors"
            >
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className="block w-5 h-0.5 bg-current" />
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`fixed top-0 right-0 bottom-0 w-64 z-50 bg-navy-900 transform transition-transform duration-300 ease-in-out md:hidden ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="py-10 px-6 flex flex-col gap-6">
              <button onClick={() => setOpen(false)} className="self-end p-2 text-navy-100">
                Close
              </button>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-Ovo text-navy-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
