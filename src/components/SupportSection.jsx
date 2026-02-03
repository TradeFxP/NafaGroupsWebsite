import React, { useState, useEffect } from 'react';

const SupportSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.support-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      id: 1,
      question: 'How secure are your AI-powered platforms?',
      answer: 'We use enterprise-grade encryption, multi-factor authentication, and secure-by-design architecture. All systems are monitored 24/7 with advanced threat detection and cybersecurity frameworks.'
    },
    {
      id: 2,
      question: 'What is the project implementation timeline?',
      answer: 'Our structured methodology delivers projects efficiently. Discovery and planning takes 1-2 weeks, development follows agile sprints, with typical enterprise projects completed in 3-6 months depending on scope.'
    },
    {
      id: 3,
      question: 'Do you provide metaverse and immersive platform development?',
      answer: 'Yes! We build next-generation 3D digital environments including virtual worlds, digital twins, AR/VR experiences, blockchain-enabled platforms, and immersive enterprise workspaces.'
    },
    {
      id: 4,
      question: 'How does the AI integration process work?',
      answer: 'Our AI-first engineering strategy analyzes your business needs to recommend intelligent solutions. We integrate custom AI development, generative AI, predictive analytics, voice systems, and smart automation.'
    },
    {
      id: 5,
      question: 'What enterprise software solutions do you offer?',
      answer: 'We deliver comprehensive solutions: ERP systems, HR management software, marketing automation, sales management systems, accounting software, and custom enterprise platforms. All built for scalability.'
    },
    {
      id: 6,
      question: 'Is customer support available 24/7?',
      answer: 'Yes! Our customer support team is available 24/7 via live chat, email, and phone. We provide ongoing maintenance, security updates, and dedicated technical support for all enterprise clients.'
    }
  ];

  const supportOptions = [
    {
      icon: 'fa-comments',
      title: 'Live Chat',
      description: 'Chat with our support team instantly',
      action: 'Start Chat',
      color: '#ef0d33'
    },
    {
      icon: 'fa-envelope',
      title: 'Email Support',
      description: 'Send us your queries anytime',
      action: 'Send Email',
      color: '#c0392b'
    },
    {
      icon: 'fa-phone-alt',
      title: 'Call Us',
      description: '24/7 phone support available',
      action: 'Call Now',
      color: '#e74c3c'
    },
    {
      icon: 'fa-book',
      title: 'Help Center',
      description: 'Browse our knowledge base',
      action: 'Visit Center',
      color: '#ef0d33'
    }
  ];

  return (
    <section id="support" className="support-section section-padding">
      {/* Animated Background */}
      <div className="support-bg-animation">
        <div className="support-shape shape-1"></div>
        <div className="support-shape shape-2"></div>
        <div className="support-pattern"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-50">
            <h6 className={`section-subtitle ${isVisible ? 'animate-fade-in' : ''}`}>
              Customer Support
            </h6>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
              We're Here to Help 24/7
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              Get instant support from our dedicated team of experts
            </p>
          </div>
        </div>

        {/* Support Options */}
        <div className="row mb-80">
          {supportOptions.map((option, index) => (
            <div 
              key={index} 
              className="col-12 col-sm-6 col-lg-3"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`support-option-card ${isVisible ? 'animate-slide-up' : ''}`}>
                <div className="support-icon" style={{ '--support-color': option.color }}>
                  <i className={`fa ${option.icon}`}></i>
                </div>
                <h4>{option.title}</h4>
                <p>{option.description}</p>
                <a href="#contact" className="support-link">
                  {option.action} <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="row">
          <div className="col-12 text-center mb-40">
            <h3 className={`faq-title ${isVisible ? 'animate-slide-up' : ''}`}>
              Frequently Asked Questions
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className={`faq-accordion ${isVisible ? 'animate-fade-in' : ''}`}>
              {faqs.map((faq) => (
                <div key={faq.id} className="faq-item">
                  <div 
                    className={`faq-question ${activeAccordion === faq.id ? 'active' : ''}`}
                    onClick={() => setActiveAccordion(activeAccordion === faq.id ? null : faq.id)}
                  >
                    <h5>{faq.question}</h5>
                    <i className={`fa fa-chevron-${activeAccordion === faq.id ? 'up' : 'down'}`}></i>
                  </div>
                  <div className={`faq-answer ${activeAccordion === faq.id ? 'active' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row mt-60">
          <div className="col-12 text-center">
            <div className={`support-cta ${isVisible ? 'animate-slide-up' : ''}`}>
              <h3>Still have questions?</h3>
              <p>Our support team is ready to assist you</p>
              <a href="#contact" className="btn-support-cta">
                Contact Support <i className="fa fa-headset"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
