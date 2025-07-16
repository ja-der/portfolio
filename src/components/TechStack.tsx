"use client";

import { motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";

const technologies = [
  { icon: FaHtml5, color: "text-orange-500", name: "HTML5" },
  { icon: FaCss3Alt, color: "text-blue-500", name: "CSS3" },
  { icon: FaJsSquare, color: "text-yellow-400", name: "JavaScript" },
  { icon: FaReact, color: "text-cyan-400", name: "React" },
  { icon: FaNode, color: "text-green-500", name: "Node.js" },
  { icon: FaGithub, color: "text-purple-400", name: "GitHub" },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="w-full px-6 py-24 bg-gradient-to-br from-[#0d0d0d] via-purple-950/10 to-green-950/10 text-white relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_50%)]"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 relative">
          <span className="relative">
            Tech Stack
            <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-green-400 rotate-45 opacity-30"></div>
            <div className="absolute -bottom-3 right-0 w-20 h-0.5 bg-gradient-to-l from-green-400 to-transparent"></div>
          </span>
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 place-items-center">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2, y: -10 }}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-gray-900/50 transition-all duration-300 cursor-pointer"
            >
              <tech.icon
                className={`text-4xl ${tech.color} group-hover:drop-shadow-lg transition-all duration-300`}
              />
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
