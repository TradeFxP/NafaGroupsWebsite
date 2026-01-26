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
        title="NaFa Groups Limited - Enterprise Financial Technology Solutions | UK Registered IT Company"
        description="UK-registered IT company specialising in secure, scalable technology platforms for global financial industry. Enterprise software, blockchain, CRM, trading platforms, payment gateways & managed services."
        keywords="financial technology platforms, enterprise fintech software, trading platform development, blockchain solutions, payment gateway integration, CRM financial services, UK IT company, cloud-native architecture, compliance software, managed IT services"
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
