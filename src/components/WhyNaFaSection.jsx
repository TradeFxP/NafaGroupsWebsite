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
      advantage: 'UK-Registered Company',
      meaning: 'Trust & regulatory accountability',
      color: '#ef0d33'
    },
    {
      id: 2,
      icon: 'fa-graduation-cap',
      advantage: 'Financial Domain Experts',
      meaning: 'Systems designed for real-world finance',
      color: '#c0392b'
    },
    {
      id: 3,
      icon: 'fa-shield-alt',
      advantage: 'Security-First Engineering',
      meaning: 'Data protection & encryption',
      color: '#e74c3c'
    },
    {
      id: 4,
      icon: 'fa-expand-arrows-alt',
      advantage: 'Scalable Architecture',
      meaning: 'Built for growth',
      color: '#ef0d33'
    },
    {
      id: 5,
      icon: 'fa-award',
      advantage: 'Reliable Delivery',
      meaning: 'Enterprise project discipline',
      color: '#c0392b'
    },
    {
      id: 6,
      icon: 'fa-handshake',
      advantage: 'Long-Term Partnership',
      meaning: 'Support beyond launch',
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
              Why NaFa Groups Limited?
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              The advantages that set us apart in financial technology
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
              <h3>Trusted Technology Partner</h3>
              <p>
                We combine UK regulatory standards, financial domain expertise, and security-first engineering 
                to deliver technology platforms that are built to last. From initial consultation to long-term 
                support, we're your partner in financial technology success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNaFaSection;
