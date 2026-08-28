"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <motion.div
      id="top"
      variants={container}
      initial="hidden"
      animate="show"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      <motion.div variants={item}>
        <Image
          src="/images/profile.jpg"
          alt="profile picture"
          width={100}
          height={100}
          className="rounded-full w-32 h-32 object-cover"
        />
      </motion.div>
      <motion.h3
        variants={item}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi I&apos;m Yasiru Premarathna
      </motion.h3>
      <motion.h3
        variants={item}
        className="text-2xl sm:text-3xl lg:text-4xl font-Ovo"
      >
        BSc (Hons) Information Technology undergraduate at the University of Moratuwa.
      </motion.h3>

      <motion.p variants={item} className="max-w-2xl mx-auto font-Ovo text-navy-200">
        I&apos;m an IT undergraduate at the University of Moratuwa, Sri Lanka, building a
        foundation in software development and exploring how technology solves real problems.
      </motion.p>
      <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-blue-500 rounded-full bg-blue-500 hover:bg-blue-400
          text-white flex items-center gap-2 transition-transform hover:scale-105"
        >
          Contact me
          <Image
            src="/images/arrow-icon.png"
            alt="arrow"
            width={16}
            height={16}
            className="inline-block invert"
          />
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-navy-400 text-navy-50 flex items-center gap-2 transition-transform hover:scale-105"
        >
          My resume
          <Image
            src="/images/download-icon.png"
            alt="download"
            width={16}
            height={16}
            className="inline-block invert"
          />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
