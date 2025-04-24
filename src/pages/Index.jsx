import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection'; 
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import CertificationsSection from '../components/CertificationsSection';
import AchievementsSection from '../components/AchievementSection';
import BlogYoutubeSection from '../components/BlogYoutubeSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
