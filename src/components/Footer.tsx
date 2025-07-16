"use client";

import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0a0a0a] via-purple-950/20 to-green-950/20 border-t border-gray-800/50 py-16 px-6 text-center relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent"></div>
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-4 relative"
        >
          <span className="relative">
            Let's connect and build something amazing.
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-green-400 via-purple-400 to-green-400 animate-pulse"></div>
          </span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 text-3xl mb-6"
        >
          <motion.a
            href="https://github.com/ja-der"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-green-400 hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-green-400/10"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jason-der/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-purple-400 hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-purple-400/10"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:jason_der@outlook.com"
            whileHover={{ scale: 1.2, y: -5 }}
            className="text-green-400 hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-green-400/10"
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500 font-light"
        >
          © {new Date().getFullYear()} Jason Der. Crafted with passion and code.
        </motion.p>
      </div>
    </footer>
  );
}
