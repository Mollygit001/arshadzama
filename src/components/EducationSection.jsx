/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const EducationSection = () => {
    const education = [
        {
            id: 1,
            institution: "Lovely Professional University",
            degree: "Bachelor of Technology in Computer Science and Engineering",
            period: "Sep 2022 - Jul 2026",
            location: "Phagwara, Punjab",
            cgpa: "7.17",
            coursework: [
                "DBMS",
                "Operating System",
                "Computer Network",
                "Calculus",
                "Linear Algebra",
                "Probability and Statistics",
                "Theory of Computation",
                "Vacation Planning & Management"
            ]
        },
        {
            id: 2,
            institution: "Aditya Birla Public School",
            degree: "High School & Senior Secondary Education (CBSE)",
            period: "2007 - 2021",
            location: "Rehla, Jharkhand",
            cgpa: "91%",
            coursework: [
                "Physics",
                "Chemistry",
                "Mathematics",
                "Computer Science",
                "English"
            ]
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
        <section id="education" className="py-24 relative overflow-hidden">
            <div className="bg-grid" />

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="section-title">Education</h2>
                </motion.div>

                <motion.div
                    className="ml-6 md:ml-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {education.map((edu) => (
                        <motion.div
                            key={edu.id}
                            className="timeline-item"
                            variants={itemVariants}
                        >
                            <div className="timeline-bullet"></div>
                            <div className="brutal-card bg-background p-6">
                                <div className="mb-4">
                                    <span className="inline-block bg-primary text-black px-4 py-1 text-sm font-bold border-2 border-black mb-2">
                                        {edu.period}
                                    </span>
                                    <h3 className="text-2xl font-bold">{edu.degree}</h3>
                                    <h4 className="text-xl text-muted-foreground">{edu.institution} — {edu.location}</h4>
                                    <p className="text-sm text-muted-foreground mt-1">CGPA: {edu.cgpa}</p>
                                </div>

                                <p className="mb-4 font-semibold">Relevant Coursework:</p>
                                <div className="flex flex-wrap">
                                    {edu.coursework.map((course, index) => (
                                        <span key={index} className="skill-tag bg-muted text-xs">
                                            {course}
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

export default EducationSection;
