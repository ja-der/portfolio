"use client";

import { motion } from "motion/react";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] text-white">
      {/* HERO SECTION */}
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
          <div className="mb-6"></div>
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
            I build scalable, user-centric applications with a focus on
            performance and beautiful design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-2xl"
          >
            <motion.a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-green-400 transition-all duration-300 p-3 rounded-full hover:bg-green-400/10"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 p-3 rounded-full hover:bg-purple-400/10"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:youremail@example.com"
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

      {/* ABOUT SECTION */}
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
                thrives at the intersection of software engineering and DevOps.
                I love building scalable systems, intuitive UIs, and tools that
                make life simpler.
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
                With hands-on experience in startups and enterprise teams, I
                bring both speed and structure to projects. My goal is to keep
                leveling up as a builder, teammate, and problem-solver.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE SECTION */}
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
            {[
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
            ].map((exp, idx) => (
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

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="w-full px-6 py-24 bg-gradient-to-b from-[#0d0d0d] via-[#111111] to-[#0d0d0d] text-white relative"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          >
            <span className="relative inline-block">
              Featured Projects
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-purple-400"></div>
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Focus Timer Operator",
                image: "/focus-operator.png",
                description:
                  "Kubernetes Operator to manage Pomodoro sessions for deep work.",
                tech: ["Go", "Kubernetes", "CRDs"],
              },
              {
                title: "Dev Portfolio",
                image: "/portfolio-preview.png",
                description:
                  "Responsive portfolio built with Next.js, TailwindCSS, Framer Motion.",
                tech: ["Next.js", "Tailwind", "Framer Motion"],
              },
              {
                title: "Cloud Metrics Dashboard",
                image: "/cloud-dashboard.png",
                description:
                  "Real-time monitoring dashboard using React and AWS Lambda.",
                tech: ["React", "AWS", "Chart.js"],
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-[#1a1a1a] via-[#1e1e1e] to-[#1a1a1a] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-800/50 hover:border-green-500/30 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 font-light leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-800/50 text-green-300 border border-green-500/30 text-xs px-3 py-1 rounded-full font-medium hover:bg-gray-700/50 hover:border-purple-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
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
            {[
              { icon: FaHtml5, color: "text-orange-500", name: "HTML5" },
              { icon: FaCss3Alt, color: "text-blue-500", name: "CSS3" },
              {
                icon: FaJsSquare,
                color: "text-yellow-400",
                name: "JavaScript",
              },
              { icon: FaReact, color: "text-cyan-400", name: "React" },
              { icon: FaNode, color: "text-green-500", name: "Node.js" },
              { icon: FaGithub, color: "text-purple-400", name: "GitHub" },
            ].map((tech, idx) => (
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

      {/* FOOTER SECTION */}
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
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-green-400 hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-green-400/10"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-purple-400 hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-purple-400/10"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:youremail@example.com"
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
            © {new Date().getFullYear()} Jason Der. Crafted with passion and
            code.
          </motion.p>
        </div>
      </footer>
    </main>
  );
}
