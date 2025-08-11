"use client";

import { motion } from "motion/react";

const projects = [
  {
    title: "Machine Learning Model",
    image: "/projects/oncovision.png",
    description:
      "Trained machine learning model to predict malignant vs benign cancer from imputted images. (91% correct prediction rate)",
    tech: ["Python", "Jupyter", "Tensorflow", "Keras", "Matprolib"],
  },
  {
    title: "Leaflet",
    image: "/projects/leaflet.png",
    description:
      "Responsive book discovery and tracking for current reads, wishlist, favourties, ranking, search, and infinite scroll recomendations as your personal virtual library",
    tech: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Axios",
    ],
  },
  {
    title: "Airbnb Inspired Rentals App",
    image: "/projects/bunkd.png",
    description: "Real-time rental books across the world anytime anywhere.",
    tech: ["Next", "Node", "Cognito", "ShadCN", "PostgreSQL", "Mapbox"],
  },
];

export default function Projects() {
  return (
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
          {projects.map((project, idx) => (
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
  );
}
