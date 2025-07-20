import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function ContactSections() {
  const list = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-white" id="contact">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center text-black">
        Get in Touch
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 "
      >
        <div className="md:w-3/2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-gray-800 mb-6 text-2xl md:text-3xl font-bold"
          >
            Interested in working together or just want to say hi? I'm always
            open to{" "}
            <span className="text-yellow-500 font-semibold hover:text-green-500 transition">
              new ideas
            </span>
            <span className="text-blue-500 font-semibold hover:text-red-500 transition">
              {" "}
              collaborations{" "}
            </span>
            <span className="text-orange-500 font-semibold hover:text-green-500 ">
              {" "}
              freelance{" "}
            </span>
            opportunities. Let's connect and create something awesome!
          </motion.p>

          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="space-y-4 text-lg text-gray-700"
          >
            <motion.div
              variants={item}
              className="flex items-center gap-3  hover:text-blue-500 "
            >
              <MdEmail className="text-4xl" />
              <span className="">egiputuwijaya99@gmail.com</span>
            </motion.div>
            <motion.div
              variants={item}
              className="flex items-center gap-3 hover:text-blue-500"
            >
              <FaGithub className="text-4xl" />
              <span>wijaya-aa</span>
            </motion.div>
            <motion.div
              variants={item}
              className="flex items-center gap-3 hover:text-blue-500"
            >
              <FaInstagram className="text-4xl" />
              <span>egiputuwijaya</span>
            </motion.div>
            <motion.div
              variants={item}
              className="flex items-center gap-3 hover:text-blue-500"
            >
              <FaLinkedin className="text-4xl" />
              <span>egiputuwijaya</span>
            </motion.div>
          </motion.div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/hero2.png"
            alt="hero 2"
            width={500}
            height={500}
            className="w-[500px] md:w-[550px] h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}
