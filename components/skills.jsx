"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJava, FaJs, FaAws, FaHtml5, FaCss3, FaGitAlt, FaGithub, FaFigma, FaServer } from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiDart, SiSpringboot, SiTypescript, SiPostman, SiTailwindcss, SiMysql, SiPostgresql, SiJsonwebtokens } from "react-icons/si";

const skillCategories = [
  {
    title: "React / Next.js",
    icons: [<FaReact key="react" className="text-blue-400" />, <SiNextdotjs key="next" className="text-white" />]
  },
  {
    title: "Flutter / Dart",
    icons: [<SiFlutter key="flutter" className="text-cyan-400" />, <SiDart key="dart" className="text-blue-500" />]
  },
  {
    title: "Java / Springboot",
    icons: [<FaJava key="java" className="text-red-500" />, <SiSpringboot key="spring" className="text-green-500" />]
  },
  {
    title: "JavaScript / TypeScript",
    icons: [<FaJs key="js" className="text-yellow-400" />, <SiTypescript key="ts" className="text-blue-500" />]
  },
  {
    title: "Postman (API Testing)",
    icons: [<SiPostman key="postman" className="text-orange-500" />]
  },
  {
    title: "AWS",
    icons: [<FaAws key="aws" className="text-orange-400" />]
  },
  {
    title: "HTML5 / CSS3 / Tailwind",
    icons: [<FaHtml5 key="html" className="text-orange-500" />, <FaCss3 key="css" className="text-blue-500" />, <SiTailwindcss key="tailwind" className="text-cyan-400" />]
  },
  {
    title: "REST APIs / Serverless",
    icons: [<FaServer key="api" className="text-gray-400" />]
  },
  {
    title: "MySQL / PostgreSQL",
    icons: [<SiMysql key="mysql" className="text-blue-400" />, <SiPostgresql key="postgres" className="text-blue-300" />]
  },
  {
    title: "Git / GitHub Actions",
    icons: [<FaGitAlt key="git" className="text-orange-500" />, <FaGithub key="github" className="text-white" />]
  },
  {
    title: "JWT Authentication",
    icons: [<SiJsonwebtokens key="jwt" className="text-pink-500" />]
  },
  {
    title: "Figma",
    icons: [<FaFigma key="figma" className="text-pink-400" />]
  }
];

const Skills = () => {
  return (
    <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I know
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-5xl font-Ovo mb-12"
      >
        My skills
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {skillCategories.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center p-6 bg-navy-900 border border-navy-800 rounded-2xl shadow-lg hover:border-navy-600 transition-all gap-4 text-center"
          >
            <div className="flex gap-3 text-4xl">
              {skill.icons}
            </div>
            <p className="text-navy-100 font-medium text-sm">
              {skill.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
