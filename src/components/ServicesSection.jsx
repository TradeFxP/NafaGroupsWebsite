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
      icon: 'fa-robot',
      title: 'Artificial Intelligence & Voice Systems',
      description: 'Enterprise AI solutions that automate decisions and power intelligent digital experiences. Custom AI software development, generative AI integrations, predictive analytics platforms, AI automation systems, voice-controlled AI interfaces, and smart assistants.',
      color: '#ef0d33'
    },
    {
      id: 2,
      icon: 'fa-vr-cardboard',
      title: 'Metaverse & Immersive Platforms',
      description: 'Next-generation 3D digital environments for collaboration, education, and commerce. Virtual worlds & digital twins, AR/VR experiences, blockchain-enabled platforms, and immersive enterprise workspaces.',
      color: '#c0392b'
    },
    {
      id: 3,
      icon: 'fa-laptop-code',
      title: 'Web & Mobile Application Development',
      description: 'Secure, scalable software built with modern cloud architecture. Enterprise web platforms, iOS & Android applications, SaaS systems, API ecosystem engineering, and cloud-native architecture.',
      color: '#e74c3c'
    },
    {
      id: 4,
      icon: 'fa-shield-alt',
      title: 'Cybersecurity & Digital Protection',
      description: 'Advanced security frameworks to protect digital infrastructure. Threat detection & monitoring, security architecture design, penetration testing, compliance systems, and cloud security.',
      color: '#ef0d33'
    },
    {
      id: 5,
      icon: 'fa-cogs',
      title: 'ERP Systems',
      description: 'Integrated enterprise platforms connecting operations, finance, and supply chains. Unified digital ecosystem that eliminates manual processes and improves decision-making.',
      color: '#c0392b'
    },
    {
      id: 6,
      icon: 'fa-users-cog',
      title: 'HR Management Software',
      description: 'Automated payroll, employee lifecycle management, and workforce analytics. Complete HR solutions designed for modern enterprise operations.',
      color: '#e74c3c'
    },
    {
      id: 7,
      icon: 'fa-bullhorn',
      title: 'Marketing Automation Tools',
      description: 'AI-driven campaign platforms, customer analytics, and CRM integration. Powerful marketing solutions to drive engagement and conversions.',
      color: '#ef0d33'
    },
    {
      id: 8,
      icon: 'fa-chart-line',
      title: 'Sales Management Systems',
      description: 'Lead tracking, forecasting dashboards, and revenue optimization platforms. Complete sales solutions to boost your business growth.',
      color: '#c0392b'
    },
    {
      id: 9,
      icon: 'fa-calculator',
      title: 'Accounting Software',
      description: 'Real-time reporting, billing automation, and compliance tools. Enterprise-grade accounting solutions for accurate business management.',
      color: '#e74c3c'
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
              Our Core Technology Services
            </h6>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
              Comprehensive Digital Solutions<br/>
              for Modern Businesses
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              We combine artificial intelligence, immersive technology, and enterprise software engineering<br/>
              into one unified technology stack for modern businesses.
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
              Result: A unified digital ecosystem that eliminates manual processes and improves decision-making.
            </p>
            <a href="#contact" className={`btn-services-contact ${isVisible ? 'animate-bounce-in' : ''}`}>
              Start Your Digital Transformation <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
