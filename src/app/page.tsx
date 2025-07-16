"use client";

import { motion } from "motion/react";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
} from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] text-white">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <div className="mb-4"></div>
          <p className="text-lg text-gray-400">Hi! My name is</p>
          <h1 className="text-9xl sm:text-5xl font-extrabold text-white">
            Jason
          </h1>
          <p className="mt-4 text-gray-400">
            <span className="text-green-400">Developer</span> - I build stuff.
          </p>

          {/* <div className="mt-6 flex flex-wrap justify-center gap-4 text-xl">
            <FaGithub className="hover:text-gray-400" />
            <FaHtml5 className="text-red-500 hover:text-red-400" />
            <FaCss3Alt className="text-blue-500 hover:text-blue-400" />
            <FaJsSquare className="text-yellow-400 hover:text-yellow-300" />
            <FaReact className="text-cyan-400 hover:text-cyan-300" />
            <FaNode className="text-green-500 hover:text-green-400" />
          </div> */}
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-20 text-gray-400"
        >
          <span className="text-2xl">↓</span>
        </motion.div>
      </section>
    </main>
  );
}
