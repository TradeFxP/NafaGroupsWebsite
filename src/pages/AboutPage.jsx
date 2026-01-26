import React from 'react';
import SEO from '../components/SEO';
import AboutSection from '../components/AboutSection';

const AboutPage = () => {
  return (
    <div className="page-wrapper">
      <SEO 
        title="About Us - Revolutionizing Financial Technology"
        description="Learn about NaFa Barter, a cutting-edge fintech platform transforming traditional banking with AI-powered digital payments, smart lending, crypto trading, and automated investment solutions."
        keywords="about nafa barter, fintech company, financial technology platform, digital banking solutions, AI fintech, blockchain technology, cryptocurrency platform, automated lending"
        canonical="/about"
      />
      <AboutSection />
    </div>
  );
};

export default AboutPage;
