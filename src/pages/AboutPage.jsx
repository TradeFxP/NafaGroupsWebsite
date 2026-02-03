import React from 'react';
import SEO from '../components/SEO';
import AboutSection from '../components/AboutSection';

const AboutPage = () => {
  return (
    <div className="page-wrapper">
      <SEO 
        title="About Us - Nafa Groups Ltd | UK-Based Advanced Technology Company"
        description="Nafa Groups Ltd is a UK-based advanced technology company delivering AI-powered platforms, metaverse systems, cybersecurity frameworks, and enterprise software solutions."
        keywords="about nafa groups, UK technology company, AI solutions, enterprise software, metaverse platforms, cybersecurity, digital transformation"
        canonical="/about"
      />
      <AboutSection />
    </div>
  );
};

export default AboutPage;
