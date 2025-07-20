"use client";
import { useState } from "react";
import * as motion from "motion/react-client";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSumbmit = (e) => {
    e.preventDefault();
    alert("Thank tou, message sent!");
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <section className="bg-yellow-400 py-16 px-6 " id="sentmessage">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false }}
        className="max-w-xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" text-3xl md:text-6xl font-bold text-black mb-8"
        >
          Let's Work Together
        </motion.h2>

        <form onSubmit={handleSumbmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handlechange}
            required
            className="w-full px-4 py-3 rounded-md border text-gray-800 bg-white border-gray-300 focus:outline-none focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handlechange}
            required
            className="w-full px-4 py-3 rounded-md border text-gray-800 bg-white border-gray-300 focus:outline-none focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.value}
            onChange={handlechange}
            required
            rows="4"
            className="w-full px-4 py-3 rounded-md border text-gray-800 bg-white border-gray-300 focus:outline-none focus:ring-blue-500"
          ></textarea>
          <button
            type="Submit"
            className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 rounded-md transition"
          >
            Send
          </button>
        </form>
      </motion.div>
    </section>
  );
}
