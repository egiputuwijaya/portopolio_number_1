import Image from "next/image";
import * as motion from "motion/react-client";

export default function HeroSection() {
  const list = {
    hidden: {},
    show: { staggerChildren: 0.5 },
  };

  const item = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <section className="bg-yellow-400 flex flex-col md:flex-row items-center justify-between px-10 md:px-30 py-10">
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="max-w-xl mb-10 md:mb-0"
        >
          <motion.h1
            variants={item}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-black"
          >
            Hello, I am
          </motion.h1>
          <motion.h2
            variants={item}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white mt-1"
          >
            Egi Putu Wijaya
          </motion.h2>
          <motion.p
            variants={item}
            transition={{ duration: 0.6 }}
            className="text-lg text-black mt-6 leading-relaxed"
          >
            Hi! I'm a passionate and creative individual with a love for turning
            ideas into reality. I specialize in web development, graphic design,
            UI/UX, and I enjoy crafting meaningful digital experiences that
            connect with people.
          </motion.p>
          <div className="mt-6">
            <motion.button
              initial={{ opacity: 0, y: +30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-orange-400 text-white px-6 py-3 rounded-lg shadow-md font-bold hover:bg-orange-500 transition"
            >
              HIRE ME
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: +30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="md:w-[550px] w-full"
        >
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={800}
            height={800}
            className="rounded-xl"
          />
        </motion.div>
      </section>
    </motion.div>
  );
}
