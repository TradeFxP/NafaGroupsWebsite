import React, { useState, useEffect } from 'react';

const WhyNaFaSection = () => {
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

    const section = document.querySelector('.why-nafa-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      id: 1,
      icon: 'fa-flag-checkered',
      advantage: 'UK-Based Advanced Technology Company',
      meaning: 'Trust & global delivery capability',
      color: '#ef0d33'
    },
    {
      id: 2,
      icon: 'fa-brain',
      advantage: 'AI-First Engineering Strategy',
      meaning: 'Intelligent solutions at the core',
      color: '#c0392b'
    },
    {
      id: 3,
      icon: 'fa-shield-alt',
      advantage: 'Secure-by-Design Architecture',
      meaning: 'Data protection built-in at every layer',
      color: '#e74c3c'
    },
    {
      id: 4,
      icon: 'fa-expand-arrows-alt',
      advantage: 'Enterprise-Grade Scalability',
      meaning: 'Built for growth & performance',
      color: '#ef0d33'
    },
    {
      id: 5,
      icon: 'fa-microchip',
      advantage: 'Emerging Technology Expertise',
      meaning: 'AI, Metaverse, Blockchain, IoT',
      color: '#c0392b'
    },
    {
      id: 6,
      icon: 'fa-globe',
      advantage: 'Global Delivery Capability',
      meaning: 'Worldwide support & implementation',
      color: '#e74c3c'
    }
  ];

  return (
    <section className="why-nafa-section section-padding">
      {/* Animated Background */}
      <div className="why-bg-animation">
        <div className="why-particle particle-1"></div>
        <div className="why-particle particle-2"></div>
        <div className="why-grid"></div>
      </div>

      <div className="container">
        {/* UK Registered Company Badge */}
       

        <div className="row">
          <div className="col-12 text-center mb-50">
            <h6 className={`section-subtitle ${isVisible ? 'animate-fade-in' : ''}`}>
              Why Choose Us
            </h6>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
              Why Choose Nafa Groups Ltd
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              The advantages that set us apart in enterprise technology
            </p>
          </div>
        </div>

        {/* Advantages Table */}
        <div className="row">
          <div className="col-12">
            <div className={`advantages-table ${isVisible ? 'animate-fade-in' : ''}`}>
              <div className="table-header">
                <div className="header-col">Advantage</div>
                <div className="header-col">What It Means for You</div>
              </div>
              {advantages.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`advantage-row ${isVisible ? 'animate-slide-from-left' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="advantage-col">
                    <div className="advantage-icon" style={{ color: item.color }}>
                      <i className={`fa ${item.icon}`}></i>
                    </div>
                    <span className="advantage-text">{item.advantage}</span>
                  </div>
                  <div className="meaning-col">
                    <div className="meaning-text">{item.meaning}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Statement */}
        <div className="row mt-60">
          <div className="col-12">
            <div className={`why-statement ${isVisible ? 'animate-scale-in' : ''}`}>
              <div className="statement-badge">
                <i className="fa fa-star"></i>
              </div>
              <h3>We Engineer Intelligent Digital Ecosystems</h3>
              <p>
                We don't just build software. We engineer intelligent digital ecosystems that combine 
                AI, security, and enterprise software to help organizations operate smarter and grow faster. 
                Partner with Nafa Groups Ltd to build secure, scalable, future-ready systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNaFaSection;
