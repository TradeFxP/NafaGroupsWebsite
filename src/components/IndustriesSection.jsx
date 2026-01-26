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
      icon: 'fa-university',
      title: 'Banking & FinTech',
      description: 'Digital banking platforms, core banking systems, and innovative fintech solutions',
      color: '#ef0d33'
    },
    {
      id: 2,
      icon: 'fa-briefcase',
      title: 'Financial Services',
      description: 'Wealth management, insurance tech, and financial advisory platforms',
      color: '#c0392b'
    },
    {
      id: 3,
      icon: 'fa-chart-line',
      title: 'Trading & Brokerage',
      description: 'High-performance trading platforms, brokerage systems, and market data solutions',
      color: '#e74c3c'
    },
    {
      id: 4,
      icon: 'fa-chart-pie',
      title: 'Investment Management',
      description: 'Portfolio management systems, asset management platforms, and investment analytics',
      color: '#ef0d33'
    },
    {
      id: 5,
      icon: 'fa-building',
      title: 'Corporate Enterprises',
      description: 'Enterprise financial software, ERP systems, and corporate treasury solutions',
      color: '#c0392b'
    },
    {
      id: 6,
      icon: 'fa-rocket',
      title: 'Start-ups & Technology Firms',
      description: 'Scalable fintech platforms, MVPs, and rapid technology deployment',
      color: '#e74c3c'
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
              Industries We Serve
            </h6>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
              Powering the Global Financial Industry
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              Trusted by banks, trading platforms, and enterprise financial services worldwide
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
