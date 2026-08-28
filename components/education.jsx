"use client";

import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div id="education" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Academic background
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-5xl font-Ovo mb-12"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        whileHover={{ y: -4 }}
        className="max-w-2xl mx-auto p-6 bg-navy-900 rounded-xl shadow border border-navy-800 transition-colors"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-semibold text-navy-50">
            BSc (Hons) in Information Technology
          </h3>
          <span className="text-sm text-navy-300">In progress</span>
        </div>
        <p className="text-sm text-navy-300 mt-1">
          University of Moratuwa, Sri Lanka
        </p>
      </motion.div>
    </div>
  );
};

export default Education;
