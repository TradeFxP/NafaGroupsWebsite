import React from 'react';
import SEO from '../components/SEO';
import SupportSection from '../components/SupportSection';

const SupportPage = () => {
  return (
    <div className="page-wrapper">
      <SEO 
        title="Customer Support - 24/7 Enterprise Technology Help & FAQs"
        description="Get instant 24/7 customer support for AI solutions, enterprise software, cybersecurity queries. Access our help center, live chat, FAQs, and expert assistance for all technology services."
        keywords="technology customer support, 24/7 help, AI support, enterprise software help, cybersecurity support, technology FAQs, live chat support, tech help center, customer service"
        canonical="/support"
      />
      <SupportSection />
    </div>
  );
};

export default SupportPage;
