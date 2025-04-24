/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "Approximation Algorithms and Linear Programming",
      provider: "University of Colorado Boulder",
      year: 2024,
      certificateUrl: "/certificates/approximation-algorithms.pdf"
    },
    {
      id: 2,
      title: "Dynamic Programming, Greedy Algorithms",
      provider: "University of Colorado Boulder",
      year: 2024,
      certificateUrl: "/certificates/dynamic-programming.pdf"
    },
    {
      id: 3,
      title: "ChatGPT Advanced Data Analysis",
      provider: "Vanderbilt University",
      year: 2024,
      certificateUrl: "/certificates/chatgpt-advanced.pdf"
    },
    {
      id: 4,
      title: "Introduction to Web Design and Development",
      provider: "Linkedin Learning",
      year: 2023,
      certificateUrl: "/certificates/web-design.pdf"
    },
    {
      id: 5,
      title: "Investment Risk Management",
      provider: "Coursera Project Network",
      year: 2023,
      certificateUrl: "/certificates/investment-risk.pdf"
    },
    {
      id: 6,
      title: "Server side JavaScript with Node.js",
      provider: "NIIT (offered through Coursera)",
      year: 2022,
      certificateUrl: "/certificates/nodejs.pdf"
    },
    {
      id: 7,
      title: "Programming Fundamentals",
      provider: "Duke University",
      year: 2022,
      certificateUrl: "/certificates/programming-fundamentals.pdf"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    },
    hover: {
      y: -5,
      boxShadow: "8px 8px 0px 0px #000000",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <section id="certifications" className="py-24 bg-muted relative overflow-hidden">
      <div className="bg-grid" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">Certifications & Courses</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              className="brutal-card bg-background p-6 flex flex-col justify-between"
              variants={itemVariants}
              whileHover="hover"
            >
              <div>
                <span className="inline-block bg-secondary text-black px-3 py-1 text-sm font-bold border-2 border-black mb-4">
                  {cert.year}
                </span>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.provider}</p>
              </div>

              <div className="mt-4 pt-4 border-t-2 border-dashed border-muted">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    <span>Completed</span>
                  </div>
                  <div className="w-8 h-8 bg-primary border-2 border-black flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(cert)}
                className="mt-4 inline-block bg-primary text-black border-2 border-black px-4 py-2 font-semibold hover:translate-y-[-2px] hover:shadow-brutal transition-transform duration-200"
              >
                View Certificate
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-background border-4 border-black rounded-xl p-6 max-w-3xl w-full relative brutal-card"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 text-black font-bold text-xl"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-2">{selectedCert.title}</h3>
              <p className="mb-4 text-muted-foreground">{selectedCert.provider} — {selectedCert.year}</p>

              <div className="aspect-video w-full border-2 border-black brutal-card-inner">
                <iframe
                  src={selectedCert.certificateUrl}
                  title="Certificate"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;
