/* eslint-disable no-unused-vars */
import React from 'react'; // Importing React library
import { motion } from 'framer-motion'; // Importing motion from framer-motion for animations

const HeroSection = () => {
  return (
    // Hero section with a minimum height of the screen, relative positioning, and hidden overflow
    <section id="hero" className="min-h-screen relative flex items-center overflow-hidden">
      <div className="bg-grid" /> {/* Background grid */}

      {/* Container for the main content, with relative positioning and z-index */}
      <div className="section-container relative z-10">
        {/* Flex container for layout, stacking elements vertically on small screens and horizontally on medium screens and up */}
        {/* It also aligns items vertically and justifies content with space between on medium screens and up */}
        {/* This structure ensures a responsive layout where text and image adapt to different screen sizes. */}

        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
          <motion.div
            className="md:w-3/5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Container for the introductory text */}
            <div className="mb-4">
              <motion.span
                className="inline-block bg-primary text-black px-4 py-2 text-lg font-bold border-4 border-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Hello, I'm
              </motion.span>
            </div>
            {/* Main heading */}
            <motion.h1
              className="mb-4 text-5xl md:text-7xl font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Arshad <span className="text-primary">Zama</span>
            </motion.h1>
            {/* Sub heading */}
            <motion.h2
              className="mb-6 text-2xl md:text-3xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Full-Stack Developer & Blockchain Enthusiast
            </motion.h2>
            {/* Paragraph describing the skills and passion */}
            <motion.p
              className="mb-8 text-lg max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Passionate about building robust applications with cutting-edge technologies.
              Specializing in full-stack web development, Blockchain, and Distributed system solutions.
            </motion.p>
            {/* Buttons for interaction */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a href="#contact" className="brutal-btn bg-primary text-black">
                Get In Touch
              </a>
              <a href="#projects" className="brutal-btn bg-background text-foreground">
                See my work
              </a>
            </motion.div>
          </motion.div>
          {/* Container for the image */}
          <motion.div
            className="md:w-2/5 mb-8 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Image container with hover animation */}
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 mx-auto border-8 border-black bg-accent shadow-brutal-xl overflow-hidden"
                whileHover={{ rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Image itself */}
                <div className="w-full h-full flex items-center justify-center bg-muted">
                  <span className="font-display text-6xl">
                    <img src="/my_ghibli_art.png" alt="Profile" className="rounded object-cover" />
                  </span>
                  {/* Picture */}
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary border-4 border-black shadow-brutal"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                whileHover={{ rotate: 10 }}
              >
                {/* Content inside the rotated square */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-mono font-bold">&lt;/&gt;</span>
                </div>
              </motion.div>
              {/* Another rotated square with text */}

              <motion.div
                className="absolute -top-6 left-6 w-24 h-24 bg-primary border-4 border-black shadow-brutal"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                whileHover={{ rotate: -10 }}
              >
                {/* Content inside the rotated square */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-mono font-bold">ETH</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div> {/* End of flex container */}

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          // Scroll down indicator
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          {/* Scroll down link */}
          <a href="#about" className="flex flex-col items-center">
            <span className="text-foreground mb-2">Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>
      </div> {/* End of section container */}
    </section>
  );
};

export default HeroSection;
