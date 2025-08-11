"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "Ericsson",
    logo: "/logos/ericsson.png",
    title: "Software Developer Intern (Platform Engineering)",
    duration: "May 2025 – Aug 2025",
    story: `During my internship, I led the design, development, and testing of a platform to automate 5G infrastructure deployments on Kubernetes. 
    I built custom Kubernetes Operators in Go using the controller-runtime framework, enabling full lifecycle management from CRD 
    installation to configuration and software rollout. I implemented GitLab CI/CD pipelines with multi-stage testing, automated Docker image builds, and 
    package distribution to ARM docker repositories, and integrated GitOps workflows with FluxCD and Helm for consistent, reproducible deployments.
    <br><br>
    Much of the work was research and development, requiring me to prototype new solutions, evaluate frameworks, and optimize for both performance and 
    maintainability. I learned how to design scalable, fault-tolerant systems, implement dynamic configuration management, and 
    build resilient automation with robust error handling and retry logic. 
    <br><br>
    This project transformed manual, error-prone deployments into a self-service platform for devops professional in the field,
    reducing provisioning time from 5 hours to 15 minutes and giving me deep, practical experience in platform engineering, Kubernetes internals, and cloud-native automation.
    `,
    tech: [
      "Go",
      "Bash",
      "Python",
      "Kubernetes",
      "Helm",
      "GitLab CI/CD",
      "Docker",
      "FluxCD",
      "XML",
      "HashiCorp Vault",
      "5G Networking",
      "Operator SDK",
      "Controller-Runtime",
    ],
  },
  {
    company: "Ericsson",
    logo: "/logos/ericsson.png",
    title: "Software Developer Intern",
    duration: "May 2025 – Aug 2025",
    story: `
    I contributed to a high-visibility demo for Mobile World Congress, where our team showcased a next generation 5G solution. 
    My focus was on the GUI dashboard, building and refining front-end components in TypeScript and implementing structure logging features for better observability, 
    packaged application components using Helm, and created Dockerfiles to containerize the dashboard for deployment. My contributions helped ensure the demo 
    ran reliably under live conditions, with the dashboard delivering clear, responsive, and intuitive visuals to the audience. 
    Working on a tight timeline for a public showcase taught me how to **balance polish with speed,** collaborate effectively across teams, 
    and package software for rapid, reproducible deployment.
    `,
    tech: [
      "TypeScript",
      "React",
      "Grafana",
      "Prometheus",
      "Kubernetes",
      "Helm",
      "Docker",
    ],
  },
  {
    company: "Statistics Canada",
    logo: "/logos/statistics_canada.jpg",
    title: "Software Developer Intern (Full-Stack Developer)",
    duration: "Jan 2025 – Apr 2025",
    story: `
    At <strong class="text-green-400">Statistics Canada</strong>, I worked on GeoSuite, a web application that lets users explore and visualize Canadian census data on an interactive map of Canada. 
    I worked extensively on front-end bug fixes and UI improvements in JavaScript, HTML, and CSS, ensuring that the map, filters, and data overlays worked consistenly.
    Additionally, I also developed and enhanced a statistical data visualization feature, with a focus on usability and UX design, allowing statisiticaly metrics(min, max, average, standard deviation) 
    to be calculated and displayed live as the user walks through all the data. This made it easier for analysts and researchers to correlate population and demographic data with location. 
    <br><br>By resolving 10+ front-end bugs, improving responsiveness, and enhancing the data insights experience, I helped deliver a faster, more intuitive tool used by thousands of users to Statistics Canda reputable census data. 

    I developed a stronger ability to build and optimize interactive web features, improved my skills in front-end debugging and cross-browser compatibility, and gained hands-on experience collaborating with stakeholders to ensure statistical features aligned with user needs.
    `,

    tech: [
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
      "Data Pieplines",
      "Git",
      "Jira",
      "Json",
    ],
  },
  {
    company: "University of Ottawa",
    logo: "/logos/uottawa.png",
    title: "IT Systems Technician",
    duration: "Sep 2023 – Dec 2024",
    story: `
      As an <strong class="text-green-400">IT Technician</strong>, I supported students and staff across the University’s main campus. While much of the work involved troubleshooting 
      hardware issues and software installations, I gradually introduced scripting — writing <strong>PowerShell</strong> and <strong>Bash</strong> scripts to automate repetitive tasks like software rollouts.
      <br/><br/>
      I also built internal guides and documentation that improved onboarding and reduced ticket response time.
    `,
    tech: ["PowerShell", "Bash", "Windows", "macOS", "VMWare", "Selenium"],
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
            My Tech Journey So Far
            <div className="absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
          </span>
        </motion.h2>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] p-8 rounded-2xl shadow-lg border border-gray-800/50 hover:border-purple-500/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={48}
                  height={48}
                  className="rounded-md bg-white p-1"
                />
                <div>
                  <h3 className="text-xl font-semibold text-green-300">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-purple-400 font-medium">
                    {exp.company} • {exp.duration}
                  </p>
                </div>
              </div>

              <div
                className="text-gray-300 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: exp.story }}
              />

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tech.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full font-medium border border-purple-400/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
