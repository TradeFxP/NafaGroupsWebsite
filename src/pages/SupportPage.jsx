import React from 'react';
import SEO from '../components/SEO';
import SupportSection from '../components/SupportSection';

const SupportPage = () => {
  return (
    <div className="page-wrapper">
      <SEO 
        title="Customer Support - 24/7 Fintech Help & FAQs"
        description="Get instant 24/7 customer support for digital payments, lending, crypto trading queries. Access our help center, live chat, FAQs, and expert assistance for all fintech services."
        keywords="fintech customer support, 24/7 help, payment support, crypto trading help, lending support, digital banking FAQs, live chat support, fintech help center, customer service"
        canonical="/support"
      />
      <SupportSection />
    </div>
  );
};

export default SupportPage;
