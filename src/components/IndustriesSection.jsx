import React, { useState, useEffect } from 'react';

const IndustriesSection = () => {
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

    const section = document.querySelector('.industries-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      id: 1,
      icon: 'fa-heartbeat',
      title: 'Healthcare',
      description: 'Digital health platforms, patient management systems, and medical data analytics',
      color: '#ef0d33'
    },
    {
      id: 2,
      icon: 'fa-landmark',
      title: 'Government',
      description: 'Secure government portals, citizen services, and public sector digital transformation',
      color: '#c0392b'
    },
    {
      id: 3,
      icon: 'fa-truck',
      title: 'Logistics',
      description: 'Supply chain optimization, fleet management, and warehouse automation systems',
      color: '#e74c3c'
    },
    {
      id: 4,
      icon: 'fa-shopping-cart',
      title: 'Retail',
      description: 'E-commerce platforms, inventory management, and omnichannel retail solutions',
      color: '#ef0d33'
    },
    {
      id: 5,
      icon: 'fa-graduation-cap',
      title: 'Education',
      description: 'Learning management systems, virtual classrooms, and educational technology platforms',
      color: '#c0392b'
    },
    {
      id: 6,
      icon: 'fa-city',
      title: 'Smart Cities',
      description: 'IoT infrastructure, urban planning systems, and smart city management platforms',
      color: '#e74c3c'
    },
    {
      id: 7,
      icon: 'fa-rocket',
      title: 'Startups',
      description: 'Scalable technology platforms, MVPs, and rapid digital product deployment',
      color: '#ef0d33'
    },
    {
      id: 8,
      icon: 'fa-university',
      title: 'Finance',
      description: 'AI-powered platforms, secure payment systems, and enterprise banking solutions',
      color: '#c0392b'
    }
  ];

  return (
    <section className="industries-section section-padding">
      {/* Animated Background */}
      <div className="industries-bg-animation">
        <div className="industry-shape shape-1"></div>
        <div className="industry-shape shape-2"></div>
        <div className="industry-grid"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-50">
            <h6 className={`section-subtitle ${isVisible ? 'animate-fade-in' : ''}`}>
              Industry Solutions
            </h6>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
              Tailored Technology for High-Impact Sectors
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              Our solutions combine AI, security, and enterprise software to solve industry-specific challenges
            </p>
          </div>
        </div>

        <div className="row industries-grid">
          {industries.map((industry, index) => (
            <div 
              key={industry.id} 
              className="col-12 col-md-6 col-lg-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`industry-card ${isVisible ? 'animate-slide-up-industry' : ''}`}>
                <div className="industry-icon" style={{ color: industry.color }}>
                  <i className={`fa ${industry.icon}`}></i>
                </div>
                <h3 className="industry-title">{industry.title}</h3>
                <p className="industry-description">{industry.description}</p>
                <div className="industry-hover-effect" style={{ background: industry.color }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
