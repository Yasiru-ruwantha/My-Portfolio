"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong sending your message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong sending your message. Please try again.");
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Get in touch
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-5xl font-Ovo mb-12"
      >
        Contact me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="p-3 border border-navy-700 rounded-lg outline-none bg-navy-900 text-navy-50 placeholder:text-navy-400 transition-colors"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your email"
          className="p-3 border border-navy-700 rounded-lg outline-none bg-navy-900 text-navy-50 placeholder:text-navy-400 transition-colors"
        />
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Your message"
          className="p-3 border border-navy-700 rounded-lg outline-none resize-none bg-navy-900 text-navy-50 placeholder:text-navy-400 transition-colors"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-10 py-3 border border-blue-500 rounded-full bg-blue-500 hover:bg-blue-400 disabled:opacity-60 disabled:cursor-not-allowed text-white w-fit mx-auto transition-transform hover:scale-105"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>

        {status === "sent" && (
          <p className="text-center text-sm text-navy-300">
            Thanks! Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-red-400">
            {errorMessage}
          </p>
        )}
      </motion.form>
    </div>
  );
};

export default Contact;
