import React from 'react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="page-wrapper">
      <SEO 
        title="Contact Us - Get in Touch with NaFa Fintech Team"
        description="Contact NaFa Barter for fintech solutions, digital payments, lending services, crypto trading support. Reach our team via phone +91-88009-98899, email, or visit our Bangalore office."
        keywords="contact nafa barter, fintech contact, customer support contact, bangalore fintech office, digital payment support, crypto trading contact, lending inquiry, fintech consultation"
        canonical="/contact"
      />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
