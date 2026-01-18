/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "GSSOC'25 - Campus Ambassador",
      description: "Spearheaded GSSoC promotional campaigns, driving awareness through seminars,social media outreach, and peer mentoring, leading to a 30% increase in student participation compared to the previous year."
    },
    {
      id: 2,
      title: "Contributor (Hacktoberfest) - Open Source",
      description: "Recognized as a contributor to a popular open-source frontend library."
    },
    {
      id: 3,
      title: "Google solution challenge 2025",
      description: "Participated in a global competition to develop innovative solutions using Google technologies."
    },
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="bg-grid" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">Competitions & Achievements</h2>
        </motion.div>
        
        <motion.div 
          className="brutal-card bg-background p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.ul 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {achievements.map((achievement) => (
              <motion.li 
                key={achievement.id}
                className="flex"
                variants={itemVariants}
              >
                <div className="mr-4">
                  <div className="w-8 h-8 bg-primary border-4 border-black flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                      <path d="M4 22h16"></path>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
