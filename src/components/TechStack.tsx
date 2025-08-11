"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiGoland,
  SiKubernetes,
  SiHelm,
  SiJenkins,
  SiAmazon,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiGitlab,
} from "react-icons/si";

const groupedTechnologies = [
  {
    category: "Languages",
    items: [
      { icon: FaPython, color: "text-yellow-300", name: "Python" },
      { icon: SiGoland, color: "text-cyan-400", name: "Go" },
      { icon: SiTypescript, color: "text-blue-400", name: "TypeScript" },
      { icon: FaJava, color: "text-red-500", name: "Java" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { icon: FaReact, color: "text-cyan-300", name: "React" },
      { icon: FaNodeJs, color: "text-green-500", name: "Node.js" },
      { icon: SiNextdotjs, color: "text-white", name: "Next.js" },
    ],
  },
  {
    category: "Cloud",
    items: [
      { icon: SiKubernetes, color: "text-blue-500", name: "Kubernetes" },
      { icon: FaDocker, color: "text-blue-300", name: "Docker" },
      { icon: SiHelm, color: "text-indigo-300", name: "Helm" },
      { icon: SiGitlab, color: "text-orange-500", name: "GitLab CI/CD" },
    ],
  },
  {
    category: "Other",
    items: [
      { icon: SiAmazon, color: "text-yellow-400", name: "AWS" },
      { icon: SiPostgresql, color: "text-blue-300", name: "PostgreSQL" },
      { icon: SiMongodb, color: "text-green-300", name: "MongoDB" },
      { icon: FaLinux, color: "text-gray-300", name: "Linux" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="w-full px-6 py-16 bg-gradient-to-br from-[#0d0d0d] via-purple-950/10 to-green-950/10 text-white relative "
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_50%)]"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 relative">
          <span className="relative">
            Tech Stack
            <div className="absolute -top-3 -left-3 w-6 h-6 border-2 border-green-400 rotate-45 opacity-30"></div>
            <div className="absolute -bottom-2 right-0 w-16 h-0.5 bg-gradient-to-l from-green-400 to-transparent"></div>
          </span>
        </h2>

        <div className="space-y-10 text-left">
          {groupedTechnologies.map((group, i) => (
            <div key={i}>
              <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-3 pl-1">
                {group.category}
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 ">
                {group.items.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -6 }}
                    className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-900/40 transition-all duration-200"
                  >
                    <tech.icon
                      className={`text-3xl ${tech.color} group-hover:drop-shadow-md transition-all duration-200`}
                    />
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
