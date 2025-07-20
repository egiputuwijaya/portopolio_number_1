import Image from "next/image";

import * as motion from "motion/react-client";

export default function ServiceSection() {
  const list = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 },
  };

  const item_right = {
    hidden: { opacity: 0, x: +30 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <section className="bg-white py-16 px-6 md:px-16" id="service">
      <motion.div
        initial={{ opacity: 0, y: 3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16"
      >
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="flex flex-col gap-6 md:gap-12 w-full md:w-1/2 bg-orange-100 p-6 md:p-10 rounded-xl"
        >
          <motion.div
            variants={item}
            className="flex items-center gap-4 bg-white px-3 py-2  md:p-4 rounded-lg shadow"
          >
            <Image src="/ui.png" alt="icon1" width={60} height={60} />
            <div className="">
              <h3 className="font-bold text-lg text-black">UI/UX</h3>
              <p className="text-gray-700 text-sm">
                I design clean adn intuitive interfaces focused on great user
                experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center gap-4 bg-white px-3 py-2  md:p-4 rounded-lg shadow"
          >
            <Image src="/web.png" alt="icon2" width={60} height={60} />
            <div className="">
              <h3 className="font-bold text-lg text-black">WEB DEVELOPER</h3>
              <p className="text-gray-700 text-sm">
                I build responsive and user-friendly websites that perform well
                across all devices.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center gap-4 bg-white px-3 py-2  md:p-4 rounded-lg shadow"
          >
            <Image src="/custom.png" alt="icon3" width={60} height={60} />
            <div className="">
              <h3 className="font-bold text-lg text-black">CUSTOM SOLUTIONS</h3>
              <p className="text-gray-700 text-sm">
                Need something unique? I provide tailored digital to match your
                business goals.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="w-full md:w-1/2"
        >
          <motion.h2
            variants={item_right}
            className="text-4xl md:text-6xl font-bold text-black"
          >
            My Awesome <span className="text-orange-500">Services</span>
          </motion.h2>
          <motion.p
            variants={item_right}
            className="text-gray-800 mt-4 text-justify leading-relaxed font-bold md:text-xl"
          >
            I offer a range of professional services including Web Depelopment,
            UI/UX, and Custom Solutionsd to bring your digital ideas to life.
          </motion.p>
          <motion.p
            variants={item_right}
            className="text-gray-800 mt-4 text-justify leading-relaxed font-bold md:text-xl"
          >
            I build responsive and high-performing websites that ensure smooth
            experiences across all devices with a strong focus on user-centered
            design, i create clean adn intuitive interfaces that ethance every
            project is unique, so i also provide tailored digital solutions taht
            fit your speciric foals helping your brand stand out in the digital
            world.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
