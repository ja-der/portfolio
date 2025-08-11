"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ExperienceBlockProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  reverse?: boolean;
}

export default function ExperienceBlock({
  title,
  description,
  image,
  tech,
  reverse = false,
}: ExperienceBlockProps) {
  return (
    <section
      className={`min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-12 px-8 md:px-16 py-24 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 max-w-xl space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-300">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="text-sm md:text-base px-4 py-2 bg-green-400/10 text-green-300 rounded-full border border-green-500/20"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 max-w-xl"
      >
        <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg">
          <Image
            src={image}
            alt={title}
            width={800}
            height={500}
            className="object-cover w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}
