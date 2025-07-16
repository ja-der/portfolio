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
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full"></div>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              I'm a passionate fullstack developer and cloud enthusiast who
              thrives at the intersection of software engineering and DevOps. I
              love building scalable systems, intuitive UIs, and tools that make
              life simpler.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              With hands-on experience in startups and enterprise teams, I bring
              both speed and structure to projects. My goal is to keep leveling
              up as a builder, teammate, and problem-solver.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
