import React from 'react';
import SEO from '../components/SEO';
import ServicesSection from '../components/ServicesSection';

const ServicesPage = () => {
  return (
    <div className="page-wrapper">
      <SEO 
        title="Our Core Technology Services - AI, Metaverse, Web & Mobile Development | Nafa Groups Ltd"
        description="Explore our comprehensive technology services: AI & Voice Systems, Metaverse Platforms, Web & Mobile Development, Cybersecurity, ERP Systems, HR Software, Marketing Automation, Sales Management, and Accounting Software."
        keywords="AI solutions, voice AI systems, metaverse development, web development, mobile app development, cybersecurity services, ERP systems, HR software, marketing automation, sales management, accounting software"
        canonical="/services"
      />
      <ServicesSection />
    </div>
  );
};

export default ServicesPage;
