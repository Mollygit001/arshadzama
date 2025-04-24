/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const BlogYoutubeSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn how to structure large-scale React applications for maintainability.",
      link: "#"
    },
    {
      id: 2,
      title: "Advanced TypeScript Patterns",
      excerpt: "Discover powerful TypeScript patterns to improve your code quality.",
      link: "#"
    },
    {
      id: 3,
      title: "AI Integration in Modern Web Apps",
      excerpt: "How to effectively integrate AI capabilities into your web applications.",
      link: "#"
    }
  ];
  
  const youtubeVideos = [
    {
      id: 1,
      title: "React Performance Optimization",
      duration: "15:24",
      link: "#"
    },
    {
      id: 2,
      title: "Building a Full-Stack App with Node.js",
      duration: "23:45",
      link: "#"
    },
    {
      id: 3,
      title: "Cloud Deployment Best Practices",
      duration: "18:32",
      link: "#"
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "8px 8px 0px 0px #000000",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <section id="blog-youtube" className="py-24 bg-muted relative overflow-hidden">
      <div className="bg-grid" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">Blog & YouTube</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Blog Section */}
          <div>
            <motion.div 
              className="mb-8 flex items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="w-10 h-10 bg-accent border-4 border-black flex items-center justify-center mr-4">
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
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Blog on Hashnode</h3>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  className="brutal-card bg-background p-6"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <h4 className="text-xl font-bold mb-3">{post.title}</h4>
                  <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                  <a href={post.link} className="inline-flex items-center text-primary font-bold group">
                    Read Article
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
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <a href="#" className="brutal-btn bg-accent text-white inline-flex items-center">
                Visit My Blog
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
                  className="ml-2"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </motion.div>
          </div>
          
          {/* YouTube Section */}
          <div>
            <motion.div 
              className="mb-8 flex items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="w-10 h-10 bg-primary border-4 border-black flex items-center justify-center mr-4">
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
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">YouTube Channel</h3>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {youtubeVideos.map((video) => (
                <motion.div
                  key={video.id}
                  className="brutal-card bg-background p-6"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <div className="flex items-start">
                    <div className="w-16 h-12 bg-accent border-2 border-black flex items-center justify-center mr-4 flex-shrink-0">
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
                        className="text-white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{video.title}</h4>
                      <span className="text-muted-foreground text-sm">{video.duration}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t-2 border-dashed border-muted">
                    <a href={video.link} className="inline-flex items-center text-primary font-bold group">
                      Watch Video
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
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <a href="#" className="brutal-btn bg-primary text-black inline-flex items-center">
                Visit My Channel
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
                  className="ml-2"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogYoutubeSection;
