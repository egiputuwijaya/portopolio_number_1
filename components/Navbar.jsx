"use client";

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import * as motion from "motion/react-client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <motion.div
        initial={{ opacity: 0, y: 3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-center max-w-7xl mx-auto"
      >
        <div className="text-3xl font-bold text-black">Wijaya's</div>
        {/* hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            <CiMenuBurger size={30} />
          </button>
        </div>

        <motion className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="text-black font-medium">
            HOME
          </a>
          <a href="#about" className="text-black font-medium">
            ABOUT
          </a>
          <a href="#services" className="text-black font-medium">
            SERVICES
          </a>
          <button className="bg-orange-400 text-white px-5 py-2 rounded-lg shadow font-semibold hover:bg-orange-500 transition">
            CONTACT
          </button>
        </motion>
      </motion.div>

      {/* ketika tampilan handphone */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 3 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="md:hidden mt-4 space-y-4 space-x-4 justify-between text-center "
        >
          <a
            href="#home"
            className=" text-black font-medium hover:text-orange-500"
          >
            HOME
          </a>
          <a
            href="#about"
            className=" text-black font-medium hover:text-orange-500"
          >
            ABOUT
          </a>
          <a
            href="#services"
            className=" text-black font-medium hover:text-orange-500"
          >
            SERVICES
          </a>
          <button className="text-black font-medium hover:text-orange-500">
            CONTCACT
          </button>
        </motion.div>
      )}
    </nav>
  );
}
