/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 2,
      title: "Open Source Developer",
      company: "GirlScript Foundation",
      period: "July 2025 - Oct 2025",
      description:
        "Actively participated in community discussions and code reviews, collaborating with project maintainers and fellow contributors to follow the best coding practices, resulting in successful PR mergers and impactful contributions to 5+ repositories",
      technologies: ["JavaScript", "Reactjs", "CI/CD", "Git", "GitHub"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const SkeletonCard = () => (
    <div className="timeline-item" role="presentation">
      <div className="timeline-bullet"></div>
      <div className="brutal-card bg-muted p-6 animate-pulse">
        <div className="mb-4 space-y-2">
          <div className="w-32 h-5 bg-gray-400 rounded"></div>
          <div className="w-48 h-6 bg-gray-400 rounded"></div>
          <div className="w-36 h-5 bg-gray-300 rounded"></div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
        </div>
        <div className="flex flex-wrap gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-16 h-5 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="bg-grid" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <motion.div
          className="ml-6 md:ml-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp) => (
            <motion.div key={exp.id} className="timeline-item" variants={itemVariants}>
              <div className="timeline-bullet"></div>
              <div className="brutal-card bg-background p-6">
                <div className="mb-4">
                  <span className="inline-block bg-primary text-black px-4 py-1 text-sm font-bold border-2 border-black mb-2">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <h4 className="text-xl text-muted-foreground">{exp.company}</h4>
                </div>

                <p className="mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className="skill-tag bg-muted text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Add 3 Skeletons */}
          {[...Array(3)].map((_, index) => (
            <SkeletonCard key={`skeleton-${index}`} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
