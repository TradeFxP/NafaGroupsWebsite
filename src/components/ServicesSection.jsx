import React, { useState, useEffect } from 'react';

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

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

    const section = document.querySelector('.services-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      icon: 'fa-chart-line',
      title: 'Financial Product Development',
      description: 'Custom platforms for trading & brokerage systems, investment portfolios, digital wallets, loan management, payment processing, and settlement engines. From concept to deployment — fully secure, compliant and scalable.',
      color: '#ef0d33'
    },
    {
      id: 2,
      icon: 'fa-laptop-code',
      title: 'Enterprise Software & Platform Engineering',
      description: 'Core business applications, workflow automation, ERP-style platforms, HR & People systems, Accounts & Finance management, and business reporting dashboards. Designed for performance, reliability and accuracy.',
      color: '#c0392b'
    },
    {
      id: 3,
      icon: 'fa-users-cog',
      title: 'CRM Solutions',
      description: 'Modern CRM built for financial operations: client onboarding, KYC & AML workflows, lead & pipeline management, relationship tracking, and customer lifecycle analytics. Integrated — secure — automated.',
      color: '#e74c3c'
    },
    {
      id: 4,
      icon: 'fa-mobile-alt',
      title: 'Mobile App Development',
      description: 'High-performance mobile applications for financial platforms, trading apps, business dashboards, customer portals, and secure authentication. Built for iOS & Android with enterprise-grade security.',
      color: '#ef0d33'
    },
    {
      id: 5,
      icon: 'fa-cubes',
      title: 'Blockchain Technology Solutions',
      description: 'Blockchain-based products including secure transaction recording, digital asset management, smart contract workflows, identity verification, and audit-ready transaction history. Future-ready & enterprise-grade.',
      color: '#c0392b'
    },
    {
      id: 6,
      icon: 'fa-credit-card',
      title: 'Payment Gateway Integration',
      description: 'Multi-currency gateways, local & cross-border payments, card processing, wallet transactions, and settlement pipelines. With encryption and compliance built-in for secure financial operations.',
      color: '#e74c3c'
    },
    {
      id: 7,
      icon: 'fa-tools',
      title: 'IT Maintenance & Managed Services',
      description: '24/7 monitoring & support for your financial platforms, server management, cloud infrastructure, database administration, security patching, backup & disaster recovery. Enterprise-grade uptime, guaranteed.',
      color: '#ef0d33'
    }
  ];

  return (
    <section id="services" className="services-section section-padding">
      {/* Animated Background */}
      <div className="services-bg-animation">
        <div className="service-shape shape-1"></div>
        <div className="service-shape shape-2"></div>
        <div className="service-shape shape-3"></div>
        <div className="service-grid-pattern"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-50">
            <h6 className={`section-subtitle ${isVisible ? 'animate-fade-in' : ''}`}>
              NaFa Barter Specialized Services
            </h6>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
              Comprehensive Digital Solutions and Services<br/>
              for the Financial Industry
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              NaFa Barter Pvt Ltd has the expertise and solutions to elevate your brand in the digital realm.<br/>
              Contact us today to discuss how our services can drive your business forward.
            </p>
          </div>
        </div>
        
        <div className="row services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="col-12 col-md-6 col-lg-4"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div 
                className={`service-card ${isVisible ? 'animate-card' : ''} ${activeCard === service.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="service-card-inner">
                  <div className="service-number">0{service.id}</div>
                  
                  <div className="service-icon-wrapper">
                    <div className="service-icon" style={{ '--icon-color': service.color }}>
                      <i className={`fa ${service.icon}`}></i>
                    </div>
                    <div className="icon-bg-circle"></div>
                  </div>

                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <a href="#contact" className="service-link">
                    Learn More <i className="fa fa-arrow-right"></i>
                  </a>

                  <div className="service-glow" style={{ background: `linear-gradient(135deg, ${service.color}20, transparent)` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12 text-center mt-50">
            <p className={`services-cta ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              Experience the difference with our services. Contact us now to get started and see the results for yourself.
            </p>
            <a href="#contact" className={`btn-services-contact ${isVisible ? 'animate-bounce-in' : ''}`}>
              Contact Us Now! <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
