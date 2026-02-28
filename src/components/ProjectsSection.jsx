/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Blitz-Load",
      duration: "2026",
      description:
        "A high-performance hybrid system for stress-testing web APIs.",
      longDescription:
        "Blitz-Load is a high-performance load-testing engine designed to stress-test web APIs at scale. It embeds a Python 3.14 interpreter directly inside a Rust-based concurrent runtime, combining Rust’s execution speed with Python’s flexible test logic. The system leverages async I/O and multi-threaded concurrency to simulate thousands of virtual clients while allowing dynamic, stateful test scenarios without recompiling the core engine.",
      tech: [
        "Rust",
        "Python 3.14",
        "Tokio",
        "Async I/O",
        "Concurrency",
        "HTTP",
      ],
      githubUrl: "https://github.com/arshadzamax/blitz_load",
    },
    {
      id: 2,
      title: "Affiliate++",
      duration: "Feb 2025 - Apr 2025",
      description:
        "A feature-rich affiliate link management dashboard with secure authentication and payments.",
      longDescription:
        "Affiliate++ is a full-stack MERN application that enables users to manage, add, and update affiliate links through a secure dashboard. The system implements JWT-based authentication with role-based access control (Admin/User), ensuring secure session handling. Razorpay payment integration allows users to initiate and track transactions with real-time callbacks, reducing payment failures by 20%.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Razorpay API"],
      githubUrl: "https://github.com/arshadzamax/affiliate",
    },
    {
      id: 3,
      title: "deFundChain",
      duration: "Feb 2025 - Apr 2025",
      description:
        "A decentralized crowdfunding platform with Web3 wallet integration.",
      longDescription:
        "deFundChain allows users to create and explore 100+ fundraising campaigns with smooth UX. It integrates MetaMask for secure Ethereum transactions, achieving confirmation latency under 5 seconds. Modular component reuse across 10+ views reduced frontend redundancy by 30%.",
      tech: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "React Router",
        "Web3",
        "Ethereum",
      ],
      githubUrl: "https://github.com/arshadzamax/chainFund",
      liveUrl: "https://defundchain.vercel.app",
    },
    {
      id: 4,
      title: "Spice Haven",
      duration: "Aug 2024 - Nov 2024",
      description:
        "A scalable e-commerce platform for spices and dry fruits.",
      longDescription:
        "Spice Haven features 15+ products with optimized rendering that reduced page load time by 40%. A real-time shopping cart built using React Context API reduced cart abandonment by 25% and improved user engagement by 30%.",
      tech: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "React Router",
        "Context API",
      ],
      githubUrl: "https://github.com/arshadzamax/SpiceHaven",
      liveUrl: "https://spice-haven.vercel.app/",
    },
    {
      id: 5,
      title: "W2B PDF",
      duration: "2024",
      description:
        "A web tool that converts PDFs into dark mode for improved reading comfort.",
      longDescription:
        "W2B PDF is a React-based web application that allows users to upload PDF files and automatically convert them into a dark-mode optimized view by inverting background and text colors. Built using PDF.js, the project improves readability during prolonged reading sessions and reduces eye strain, especially in low-light environments.",
      tech: ["React", "JavaScript", "PDF.js", "HTML5", "CSS3"],
      githubUrl: "https://github.com/arshadzamax/w2bpdfs",
      liveUrl: "https://w2bpdfs.vercel.app/",
    },
    
  ];

  const openProject = (project) => setActiveProject(project);
  const closeProject = () => setActiveProject(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -10,
      boxShadow: "12px 12px 0px 0px #000000",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  return (
    <section id="projects" className="py-24 bg-muted relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="text-xl mb-12 max-w-3xl">
            A selection of real-world projects demonstrating scalable frontend
            architecture, secure backend systems, and Web3 integrations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="brutal-card bg-background cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => openProject(project)}
            >
              <div className="h-44 bg-muted border-b-4 border-black flex items-center justify-center">
                <div className="font-display text-3xl text-center px-4">
                  {project.title}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">
                  {project.title}
                </h3>
                <p className="text-sm opacity-70 mb-3">
                  {project.duration}
                </p>
                <p className="mb-4">{project.description}</p>

                <div className="flex flex-wrap mb-4">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="skill-tag bg-muted text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="skill-tag bg-muted text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    className="brutal-btn !py-2 !px-4 bg-primary text-black text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProject(project);
                    }}
                  >
                    Details
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="brutal-btn !py-2 !px-4 bg-muted text-black text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="fixed inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
            />

            <motion.div
              className="brutal-card bg-background max-w-3xl w-full z-10 max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2">
                  {activeProject.title}
                </h3>
                <p className="text-sm opacity-70 mb-4">
                  {activeProject.duration}
                </p>
                <p className="text-lg mb-6">
                  {activeProject.longDescription}
                </p>

                <h4 className="text-xl font-bold mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap mb-6">
                  {activeProject.tech.map((tech, idx) => (
                    <span key={idx} className="skill-tag bg-muted">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between flex-wrap gap-3">
                  <div className="flex gap-3">
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutal-btn bg-muted text-black"
                    >
                      GitHub
                    </a>

                    {activeProject.liveUrl && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brutal-btn bg-primary text-black"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>

                  <button
                    className="brutal-btn bg-black text-white"
                    onClick={closeProject}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
