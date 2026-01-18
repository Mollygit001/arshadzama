/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "C++", "TypeScript", "Rust"]
    },
    {
      title: "Frontend",
      skills: ["React", "HTML5", "CSS3", "SASS", "Tailwind CSS", "Redux"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Django", "Flask", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis"]
    },
    {
      title: "Distributed Systems",
      skills: ["Microservices", "gRPC", "Redis", "Load Balancing"]

    },
    {
      title: "Blockchain",
      skills: ["Ethereum", "Solidity", "Smart Contracts", "Hardhat", "Ethers.js", "IPFS", "Polygon", "Web3.js"]
    }
    
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300 }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#FFD60A",
      transition: { type: "spring", stiffness: 500 }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="bg-grid" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="brutal-card bg-background p-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-4 pb-2 border-b-4 border-primary">{category.title}</h3>

              <motion.div
                className="flex flex-wrap"
                variants={containerVariants}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-tag"
                    variants={skillTagVariants}
                    whileHover="hover"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
