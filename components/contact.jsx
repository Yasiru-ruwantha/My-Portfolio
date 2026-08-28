"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Get a free access key at https://web3forms.com (just enter your email,
// no account needed) and put it in .env.local as:
//   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
// Web3Forms is designed to be called straight from the browser like this —
// the key is public-safe, submissions are rate-limited per domain.
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("not-configured");
      return;
    }

    const form = e.target;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", `Portfolio contact from ${data.get("name")}`);

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
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
        {/* honeypot — bots fill this in, real visitors never see it */}
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

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
            Something went wrong sending your message. Please try again.
          </p>
        )}
        {status === "not-configured" && (
          <p className="text-center text-sm text-red-400">
            The contact form isn&apos;t set up yet — missing a Web3Forms access key.
          </p>
        )}
      </motion.form>
    </div>
  );
};

export default Contact;
