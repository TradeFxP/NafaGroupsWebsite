import React from 'react';
import SEO from '../components/SEO';
import HomeSlider from '../components/HomeSlider';
import AboutSection from '../components/AboutSection';
import MissionVisionSection from '../components/MissionVisionSection';
import IndustriesSection from '../components/IndustriesSection';
import ServicesSection from '../components/ServicesSection';
import TechnologySection from '../components/TechnologySection';
import ApproachSection from '../components/ApproachSection';
import WhyNaFaSection from '../components/WhyNaFaSection';
import FeaturesSection from '../components/FeaturesSection';
import ClientsSection from '../components/ClientsSection';
import TestimonialsSlider from '../components/TestimonialsSlider';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Nafa Groups Ltd – Advanced AI, Software & Enterprise Technology Solutions"
        description="Nafa Groups Ltd is a UK-based advanced technology company delivering AI-powered platforms, metaverse systems, cybersecurity frameworks, enterprise business software, and high-performance web and mobile applications."
        keywords="AI software development, enterprise technology solutions, metaverse platforms, cybersecurity frameworks, web application development, mobile app development, UK technology company, artificial intelligence, voice AI systems, cloud-native architecture"
        canonical="/"
        ogType="website"
      />
      <HomeSlider />
      <AboutSection />
      <MissionVisionSection />
      <IndustriesSection />
      <ServicesSection />
      <TechnologySection />
      <ApproachSection />
      <WhyNaFaSection />
      <FeaturesSection />
      <ClientsSection />
      <TestimonialsSlider />
      <CTASection />
    </>
  );
};

export default HomePage;
