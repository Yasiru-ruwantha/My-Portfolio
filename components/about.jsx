"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function About() {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-12 my-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/3"
        >
          <Image
            src="/images/profile.jpg"
            alt="about picture"
            width={800}
            height={800}
            className="w-full h-auto rounded-3xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/3 flex flex-col gap-6"
        >
          <p className="max-w-2xl font-Ovo text-navy-200">
            I&apos;m an undergraduate reading for a BSc (Hons) in Information Technology
            at the University of Moratuwa, Sri Lanka. I&apos;m building my skills across
            software development and looking for opportunities to apply what I learn to
            real projects. This site will grow as I add my coursework, projects, and
            technical skills.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
