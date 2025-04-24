/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
  {
    id: 1,
    title: "deReddit",
    description: "A blockchain-integrated Reddit clone with an enhanced UI and improved features.",
    longDescription: "This project combines the core functionality of Reddit with blockchain technology, enabling secure, transparent, and decentralized features. The project focuses on creating a user-friendly interface with improvements in navigation, security, and post interactions, all powered by blockchain.",
    tech: ["React", "Node.js", "Blockchain", "Solidity", "MongoDB", "AWS"],
    image: "project-placeholder-1"
  },
  {
    id: 2,
    title: "W2B PDF",
    description: "A web app that converts PDF pages into dark mode for better eye comfort.",
    longDescription: "This app allows users to upload PDF files and automatically applies a dark mode transformation, changing the background to black and the text to white. Designed for better eye comfort, it offers a seamless experience for reading long documents.",
    tech: ["React", "Node.js", "Vite", "Tailwind CSS", "PDF.js"],
    image: "project-placeholder-2"
  },
  {
    id: 3,
    title: "STL js++",
    description: "A JavaScript library implementing efficient STL-like data structures.",
    longDescription: "This library aims to provide a collection of essential data structures like priority_queue, stack, queue, and multiset in JavaScript. Each implementation is optimized for performance, and the library is thoroughly documented for ease of use.",
    tech: ["JavaScript", "Node.js", "ES6"],
    image: "project-placeholder-3"
  },
  {
    id: 4,
    title: "Client Homepage",
    description: "A modern, responsive client homepage with Neobrutalism design and animations.",
    longDescription: "This project creates a highly responsive client homepage using React, Vite, and Tailwind CSS. Featuring a neobrutalism aesthetic, it includes a header, navigation, carousel, and category cards, all enhanced with Framer Motion animations for a dynamic user experience.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "JavaScript"],
    image: "project-placeholder-4"
  },
  {
    id: 5,
    title: "DefundChain",
    description: "A decentralized crowdfunding platform with a Neobrutalism design.",
    longDescription: "DefundChain is a platform that leverages blockchain technology for decentralized crowdfunding. With a bold neobrutalism design, it allows users to fund projects in a transparent, secure, and efficient manner. The platform emphasizes user autonomy while providing a seamless experience for both project creators and backers.",
    tech: ["React", "Blockchain", "Vercel", "Neobrutalism", "Ethereum"],
    image: "project-placeholder-5"
  },
  {
    id: 6,
    title: "Spice Haven",
    description: "A dynamic e-commerce platform for spice enthusiasts.",
    longDescription: "Spice Haven is an interactive online store dedicated to offering a wide variety of spices. Built with React and styled using Tailwind CSS, the platform provides a seamless shopping experience with features like product filtering, detailed spice descriptions, and a user-friendly interface. The website is hosted on Vercel, ensuring fast and reliable access for users.",
    tech: ["React", "Tailwind CSS", "Vercel", "JavaScript"],
    image: "project-placeholder-6"
  }
];

  
  const openProject = (project) => {
    setActiveProject(project);
  };
  
  const closeProject = () => {
    setActiveProject(null);
  };
  
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
      }
    },
    hover: { 
      y: -10,
      boxShadow: "12px 12px 0px 0px #000000",
      transition: { type: "spring", stiffness: 300 }
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-muted relative overflow-hidden">
      <div className="bg-grid" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="text-xl mb-12 max-w-3xl">
            Here are some of the projects I've worked on. Each demonstrates
            different skills and technologies that I specialize in.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="brutal-card bg-background"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => openProject(project)}
            >
              <div className="h-48 bg-muted border-b-4 border-black flex items-center justify-center">
                <div className="font-display text-4xl">{project.title}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                
                <div className="flex flex-wrap mb-4">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span key={index} className="skill-tag bg-muted text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="skill-tag bg-muted text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <button 
                  className="brutal-btn !py-2 !px-4 bg-primary text-black text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    openProject(project);
                  }}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div 
              className="fixed inset-0 bg-black opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
            />
            
            <motion.div 
              className="brutal-card bg-background max-w-3xl w-full z-10 max-h-[90vh] overflow-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="h-56 bg-muted border-b-4 border-black flex items-center justify-center">
                <div className="font-display text-5xl">{activeProject.title}</div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">{activeProject.title}</h3>
                <p className="text-lg mb-6">{activeProject.longDescription}</p>
                
                <h4 className="text-xl font-bold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap mb-8">
                  {activeProject.tech.map((tech, index) => (
                    <span key={index} className="skill-tag bg-muted">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <button 
                    className="brutal-btn bg-primary text-black"
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
