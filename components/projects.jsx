"use client";

import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-5xl font-Ovo mb-12"
      >
        Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-xl mx-auto p-8 bg-navy-900 border border-dashed border-navy-700 rounded-2xl text-center transition-colors"
      >
        <p className="text-navy-300 font-Ovo">
          Projects coming soon.
        </p>
      </motion.div>
    </div>
  );
};

export default Projects;
