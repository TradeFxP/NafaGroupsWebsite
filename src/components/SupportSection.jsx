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
      question: 'How secure are digital payments on your platform?',
      answer: 'We use bank-grade 256-bit encryption, two-factor authentication, and PCI DSS compliance to ensure maximum security. All transactions are monitored 24/7 with AI-powered fraud detection systems.'
    },
    {
      id: 2,
      question: 'What is the loan approval process timeline?',
      answer: 'Our AI-powered system can approve loans instantly in most cases. Simple documentation and credit assessment happen in real-time, with funds disbursed within 10 minutes to 24 hours depending on loan type.'
    },
    {
      id: 3,
      question: 'Do you support cryptocurrency trading?',
      answer: 'Yes! We support 100+ cryptocurrencies including Bitcoin, Ethereum, and major altcoins. Our platform offers advanced charting, real-time analytics, cold storage security, and instant withdrawals.'
    },
    {
      id: 4,
      question: 'How does the investment platform work?',
      answer: 'Our AI-powered investment advisory analyzes your risk profile and goals to recommend personalized portfolios. You get access to stocks, mutual funds, ETFs, and automated rebalancing with real-time performance tracking.'
    },
    {
      id: 5,
      question: 'What are the transaction fees?',
      answer: 'We offer competitive, transparent pricing: Digital payments (0.5-1%), Lending (processing fees vary), Crypto trading (0.1-0.25%), Investment platform (0% commission on most instruments). No hidden charges!'
    },
    {
      id: 6,
      question: 'Is customer support available 24/7?',
      answer: 'Yes! Our customer support team is available 24/7 via live chat, email, and phone. We also have an AI chatbot for instant answers and a comprehensive help center with tutorials and guides.'
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
