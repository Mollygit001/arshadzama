/* eslint-disable no-unused-vars */

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-background border-t-4 border-primary py-12 relative overflow-hidden">
      <div className="bg-grid opacity-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-primary mb-2">Arshad Zama</h2>
            <p className="text-muted-foreground">Full-Stack Developer & Blockchain Enthusiast</p>
          </motion.div>

          <motion.div
            className="flex mt-6 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="https://www.linkedin.com/in/arshadzama/" className="w-10 h-10 border-2 border-black bg-background hover:bg-[#0077B5] transition-colors flex items-center justify-center mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com/mollygit001" className="w-10 h-10 border-2 border-black bg-background hover:bg-[#333333] transition-colors flex items-center justify-center mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a
              href="https://leetcode.com/u/arshadzamaX/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border-2 border-black bg-background hover:bg-[#FFA116] transition-colors flex items-center justify-center mx-2"
              aria-label="LeetCode"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                fill="none"
              >
                <path
                  fill="#FFA116"
                  d="M19.9 37.6 11 28.7c-1.6-1.6-1.6-4.3 0-5.9l8.9-8.9c.8-.8.8-2.1 0-2.9s-2.1-.8-2.9 0l-8.9 8.9c-3.2 3.2-3.2 8.4 0 11.6l8.9 8.9c.8.8 2.1.8 2.9 0 .7-.9.7-2.2 0-2.9Z"
                />
                <path
                  fill="#000"
                  d="M40.9 8.7c-.3-.3-.6-.5-1-.5H25.6c-1.1 0-2 .9-2 2s.9 2 2 2h10.8L21.8 39.9c-.6.8-.4 2 .5 2.6.3.2.6.3 1 .3.6 0 1.2-.3 1.6-.8l14.5-27.2v10.8c0 1.1.9 2 2 2s2-.9 2-2V9.7c.1-.4-.1-.7-.5-1Z"
                />
              </svg>
            </a>

            <a
              href="https://x.com/zmarshad"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border-2 border-black bg-background hover:bg-black transition-colors flex items-center justify-center mx-2"
              aria-label="Twitter / X"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M17.5 3h3.8l-8.3 9.6L22 21h-6.7l-5.3-6.3-6 6.3H.3l8.8-9.7L2 3h6.8l4.9 5.7L17.5 3Zm-1 16h1.8L7.6 5H5.6l10.9 14Z" />
              </svg>
            </a>

          </motion.div>
        </div>

        <motion.div
          className="border-t-2 border-dashed border-muted mt-8 pt-8 text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} Arshad Zama. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
