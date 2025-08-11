"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-6 py-24 bg-gradient-to-b from-[#0d0d0d] via-[#111111] to-[#0d0d0d] text-white relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-green-900/5"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 relative">
          About Me
        </h2>

        <div className="items-center justify-items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <p className="text-lg text-center text-gray-300 leading-relaxed font-light">
              I’m a passionate and aspiring software engineer looking into new
              tech such as cloud and AI/ML. I enjoy problem solving, and
              collaborating to build solutions with a meaningful impact. With
              hands-on experience in enterprise and fast-paced R&D startup style
              environments, i bring both speed and an organized structure to my
              work. I pride myself in being a strong teammate, builder, and
              problem-solver. I am a strong believer of continuous learning, and
              never staying stagnant with my skill sets, there will always be
              something new to learn or an old skill to touch up on.
            </p>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <p className="text-lg text-gray-300 leading-relaxed font-light"></p>
          </motion.div> */}
        </div>
        <div className="py-10">
          <h3 className="bg-blue-900/20 border-l-4 border-gray-200 pl-4 py-2 rounded-md font-semibold text-lg">
            💡 The art challenges the technology, and the technology inspires
            the art
          </h3>
        </div>
      </motion.div>
    </section>
  );
}
