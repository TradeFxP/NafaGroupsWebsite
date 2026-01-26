import React from 'react';
import SEO from '../components/SEO';
import ServicesSection from '../components/ServicesSection';

const ServicesPage = () => {
  return (
    <div className="page-wrapper">
      <SEO 
        title="Fintech Services - Digital Payments, Lending, Crypto Trading"
        description="Explore our comprehensive fintech services: Secure digital payments, AI-powered smart lending, cryptocurrency trading, automated investment platform, digital banking, and 24/7 customer support."
        keywords="fintech services, digital payment solutions, smart lending services, crypto trading platform, investment advisory, digital banking services, UPI payment gateway, blockchain services, AI lending platform"
        canonical="/services"
      />
      <ServicesSection />
    </div>
  );
};

export default ServicesPage;
