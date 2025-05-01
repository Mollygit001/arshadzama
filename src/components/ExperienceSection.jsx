/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 2,
      title: "SDE Intern",
      company: "Accenture",
      period: "Dec 2024 - Dec 2024",
      description: "Completed a job simulation where I supported a client with a small development team, overwhelmed by the growth of their code base. I assisted in refactoring the code to improve performance and maintainability, while also implementing new features to enhance user experience.",
      technologies: ["Java", "Springboot", "AWS",]
    },
    {
      id: 3,
      title: "Freelance Web Developer",
      company: "Self-employed",
      period: "2023 - present",
      description: "Designed and developed custom websites for small businesses and personal clients.",
      technologies: ["React","Angular", "PHP", "JavaScript", "MySQL", "mongoDB"]
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

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
            <motion.div 
              key={exp.id} 
              className="timeline-item"
              variants={itemVariants}
            >
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
                
                <div className="flex flex-wrap">
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className="skill-tag bg-muted text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
