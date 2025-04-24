/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted relative overflow-hidden">
      <div className="bg-grid" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="brutal-card bg-background p-8">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="mb-4 text-lg">
                I'm Arshad Zama, a passionate Full-Stack web Developer with expertise in building
                modern web applications and implementing AI solutions. I specialize in creating
                scalable, efficient, and user-friendly digital experiences.
              </p>
              <p className="mb-4 text-lg">
                With a strong foundation in both frontend and backend technologies,
                I bring ideas to life through clean code and thoughtful architecture.
                I'm particularly interested in the intersection of traditional web development
                with emerging technologies like AI and Blockchain and Decentralized networks.
              </p>
              <p className="text-lg">
                When I'm not coding, I enjoy learning new technologies, contributing to open-source projects, and sharing my knowledge through discussions and tutorials.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="brutal-card bg-background p-8 h-full">
              <h3 className="text-2xl font-bold mb-4">My Focus Areas</h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-2 flex items-center">
                  <span className="inline-block w-6 h-6 bg-primary border-2 border-black mr-3"></span>
                  Full-Stack Web Development
                </h4>
                <p>
                  Building complete web solutions from concept to deployment with modern frontend frameworks and robust backend services.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-2 flex items-center">
                  <span className="inline-block w-6 h-6 bg-secondary border-2 border-black mr-3"></span>
                  Blockchain Development
                </h4>
                <p>
                Integrating blockchain technology into applications to enable secure, transparent user interactions and automate trustless processes through decentralized systems.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-2 flex items-center">
                  <span className="inline-block w-6 h-6 bg-accent border-2 border-black mr-3"></span>
                  Distributed Systems
                </h4>
                <p>
                Designing and implementing distributed systems to ensure scalability, fault tolerance, and high availability while efficiently managing complex, large-scale workloads.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
