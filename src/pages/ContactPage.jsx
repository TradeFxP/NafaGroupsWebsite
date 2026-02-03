import React from 'react';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="page-wrapper">
      <SEO 
        title="Contact Us - Partner with Nafa Groups Ltd for Digital Transformation"
        description="Contact Nafa Groups Ltd for AI solutions, enterprise software, metaverse platforms, and cybersecurity services. Start your digital transformation today. Schedule a consultation with our team."
        keywords="contact nafa groups, technology consultation, AI solutions contact, enterprise software inquiry, digital transformation, UK technology company"
        canonical="/contact"
      />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
