"use client";

import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* BACKGROUND VISUAL */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[60vw] h-[60vh] bg-gradient-to-r from-purple-600/30 to-purple-800/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vh] bg-gradient-to-l from-green-600/30 to-green-800/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vh] bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-[80px]" />
      </div>

      {/* HERO CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl z-10"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-400 font-light tracking-wide"
        >
          Hi! My name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl sm:text-6xl font-black text-white leading-tight"
        >
          <span className="text-white">Jason Der</span>
          <br />
          <span className="text-green-400 text-4xl sm:text-5xl font-bold">
            Developer
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-xl text-gray-300 max-w-lg mx-auto leading-relaxed font-light"
        >
          I build stuff.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-2xl"
        >
          <motion.a
            href="https://github.com/ja-der"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-gray-400 hover:text-green-400 transition-all duration-300 p-3 rounded-full hover:bg-green-400/10"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jason-der/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-gray-400 hover:text-purple-400 transition-all duration-300 p-3 rounded-full hover:bg-purple-400/10"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:jason_der@outlook.com"
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-gray-400 hover:text-green-400 transition-all duration-300 p-3 rounded-full hover:bg-green-400/10"
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* SCROLL TRANSITION DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0d0d0d] to-transparent z-10" />
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="mt-16 text-gray-400 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-light tracking-wider">SCROLL</span>
          <span className="text-3xl">↓</span>
        </div>
      </motion.div>
    </section>
  );
}
