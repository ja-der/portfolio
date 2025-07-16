"use client";

import { motion } from "motion/react";

const experiences = [
  {
    title: "Software Developer Intern - Ericsson",
    duration: "May 2025 – Aug 2025",
    description:
      "Built a Kubernetes Operator in Go and Python, deployed via Helm charts. Reduced deployment time by 70% and implemented a CI/CD pipeline with GitLab and Docker.",
  },
  {
    title: "Software Developer Intern - Statistics Canada",
    duration: "Jan 2025 – Apr 2025",
    description:
      "Implemented analytics dashboards using Python and JavaScript, optimized SQL queries, and supported AWS infrastructure with Terraform and EC2.",
  },
  {
    title: "IT Technician - University of Ottawa",
    duration: "Sep 2023 – Dec 2024",
    description:
      "Provided tech support, configured hardware/software setups, and helped streamline student services through scripting and automation.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full px-6 py-24 bg-gradient-to-br from-[#0d0d0d] via-[#0f0f0f] to-[#0d0d0d] text-white relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(120,198,121,0.1),transparent_50%)]"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-16 text-center relative"
        >
          <span className="relative">
            Professional Experience
            <div className="absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
          </span>
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-r from-[#1a1a1a] to-[#1e1e1e] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800/50 hover:border-purple-500/30 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                {exp.title}
              </h3>
              <p className="text-sm text-purple-400 mb-3 font-medium">
                {exp.duration}
              </p>
              <p className="text-gray-300 text-base leading-relaxed font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
