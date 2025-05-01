/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav
      className="fixed w-full py-4 px-6 z-50 bg-background border-b-4 border-primary"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          className="font-display text-2xl text-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="/fav_icon.png"
            alt="App Icon"
            className="h-[50px] w-[50px] rounded-xl border-2 border-white shadow-lg hover:shadow-2xl transition-all duration-300 bg-white p-1"
          />
        </motion.div>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="brutal-btn !py-2 !px-4 bg-primary text-black"
          >
            Menu
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="brutal-btn !py-2 !px-4 bg-background text-foreground hover:bg-accent"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#resume"
            className="brutal-btn !py-2 !px-4 bg-primary text-black"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-background border-b-4 border-black"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="px-4 py-2 flex flex-col space-y-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="brutal-btn !py-2 !px-4 bg-background text-foreground hover:bg-accent text-center"
                onClick={() => setIsMenuOpen(false)}
                variants={itemVariants}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#resume"
              className="brutal-btn !py-2 !px-4 bg-primary text-black text-center"
              onClick={() => setIsMenuOpen(false)}
              variants={itemVariants}
            >
              Resume
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
