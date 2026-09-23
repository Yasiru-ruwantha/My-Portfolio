"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projectsData = [
  {
    title: "Universal DMS for ERP integration",
    date: "Sep 2025 – Jun 2026",
    description: "Universal Document Management System (DMS) integrated with ERP environments, bringing document management, workflows, collaboration, search, security, and ERP integration into one centralized platform.",
    image: "/images/dms.jpeg",
    features: [
      "Centralized Document Management & User Role Management",
      "Metadata-Based Organization & Advanced Search",
      "OCR-Based Document Processing & Version Control",
      "Approval Workflow Management & Tracking",
      "External Document Collaboration & Secure Sharing",
      "ERP Integration & Synchronization with Field Mapping"
    ],
    contributions: [
      "Intelligent Document Processing using Tesseract OCR & Apache PDFBox.",
      "Metadata & Advanced Search integrating titles, tags, and extracted text.",
      "Universal ERP Integration using a configurable REST-based connector.",
      "ERP Synchronization and automatic linking between documents and ERP transactions."
    ],
    techStack: "Next.js, React, TypeScript, Zustand, Tailwind CSS, shadcn/ui, Java 21, Spring Boot, PostgreSQL, Amazon S3, Tesseract.js, Apache PDFBox"
  },
  {
    title: "Todo web Application",
    date: "Mar 2026",
    description: "A full-stack task management web application that helps users organize their day, track progress, and never miss a deadline. Built with a modern Next.js frontend and a secure Spring Boot REST API.",
    image: "/images/todo.jpeg",
    features: [
      "Secure user registration & login with BCrypt",
      "Stateless JWT authentication with access + refresh token rotation",
      "Full task management: create, view, update, and delete",
      "One-click toggle between In Progress and Completed",
      "Due dates with a dedicated Today view and Reminders page"
    ],
    techStack: "Next.js 16, React 19, TypeScript, Tailwind CSS v4, Zustand, Spring Boot 3.2, Java 21, Spring Security, PostgreSQL, JWT"
  },
  {
    title: "Smart Bot Battle",
    date: "2025",
    description: "Smart Bot Battle is a robotics competition platform where a Human-controlled User Bot challenges an Autonomous self-controlled Smart Bot.",
    image: "/images/robot.jpeg",
    features: [
      "Dual robots: Autonomous + User-controlled",
      "Arena with color-coded zones for strategic gameplay",
      "Servo-driven hammer mechanism & Edge detection",
      "Real-time scoring with automatic winner detection",
      "Compact PCB design and 3D-modeled bot structures"
    ],
    techStack: "2× ESP32, 4× Ultrasonic Sensors, 4× IR Sensors, RGB Color Sensor, Servo Motors, Custom PCB, Flask"
  }
];

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col h-full bg-navy-900 border border-navy-700 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-colors"
    >
      <div className="relative w-full aspect-video bg-navy-950 shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="flex flex-col flex-grow p-6 lg:p-8">
        <h3 className="text-2xl font-bold text-navy-50 mb-2">{project.title}</h3>
        <p className="text-sm text-blue-400 mb-4">{project.date}</p>
        
        <div className="flex-grow">
          <p className={`text-navy-200 text-sm ${!isExpanded ? "line-clamp-3" : ""} mb-4`}>
            {project.description}
          </p>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mb-4 pt-2">
                  <h4 className="text-navy-50 font-semibold mb-2 text-sm">Key Features:</h4>
                  <ul className="list-disc list-inside text-navy-300 text-xs space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {project.contributions && (
                  <div className="mb-4">
                    <h4 className="text-navy-50 font-semibold mb-2 text-sm">My Contributions:</h4>
                    <ul className="list-disc list-inside text-navy-300 text-xs space-y-1">
                      {project.contributions.map((contribution, i) => (
                        <li key={i}>{contribution}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-navy-50 font-semibold mb-2 text-sm">Tech Stack:</h4>
                  <p className="text-navy-300 text-xs leading-relaxed">{project.techStack}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors self-start inline-flex items-center gap-1"
        >
          {isExpanded ? "Show less" : "Read more..."}
        </button>
      </div>
    </motion.div>
  );
};

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
