import * as motion from "motion/react-client";
import Image from "next/image";

export default function RecentProjects() {
  return (
    <section className="bg-white py-16 px-6 md:px-16" id="projects">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          viewport={{ once: false }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-10 text-black inline-block pb-2 border-b-4 border-blue-500"
        >
          Recent Project
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            { src: "/project1.jpeg", alt: "project 1" },
            { src: "/project2.jpeg", alt: "project 2" },
            { src: "/project3.jpeg", alt: "project 3" },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-md border border-gray-200 hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: false }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <Image
                src={project.src}
                alt={project.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
