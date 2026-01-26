import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
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

    const section = document.querySelector('.about-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding about-section">
      {/* Animated Background Elements */}
      <div className="about-bg-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className={`about-image-box ${isVisible ? 'animate-slide-from-left' : ''}`}>
              <div className="about-image-main">
                <img src="/assets/SECURITY.png" alt="NaFa Groups Limited UK" />
              </div>
              <div className="about-image-overlay">
                <div className="overlay-content">
                  <h3 className="overlay-number">NaFa Groups Limited UK</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-6">
            <div className={`about-content ${isVisible ? 'animate-slide-from-right' : ''}`}>
              <h6 className="section-subtitle">About NaFa Groups Limited</h6>
              <h2 className="section-title">Engineering Next-Generation Financial Technology</h2>
              <p className="about-intro">
                <strong>NaFa Groups Limited</strong> is a UK-registered IT company specialising in building 
                secure, scalable and high-performance technology platforms for the global financial industry. 
                We design, develop and maintain digital ecosystems that power financial products, payments, 
                trading platforms, enterprise operations, and customer-facing applications.
              </p>
              <p className="about-intro">
                Our technology supports businesses that need reliability, compliance, security and real-world 
                financial logic — delivered with precision. We transform financial services through intelligent 
                software, automation and secure digital innovation.
              </p>
              
              {isExpanded && (
                <div className="about-expanded">
                  <p>
                    We build enterprise-class systems using cloud-native architecture, microservices & APIs, 
                    secure authentication frameworks, blockchain platforms, and data analytics. Security and 
                    compliance are built-in at every layer.
                  </p>
                  <p>
                    From trading & brokerage systems to digital wallets, payment processing, and enterprise 
                    software — we deliver technology that is secure, intelligent and globally scalable.
                  </p>
                </div>
              )}
              
              <div className="about-buttons">
                <button 
                  onClick={() => setIsExpanded(!isExpanded)} 
                  className="btn-read-more"
                >
                  {isExpanded ? 'Read Less' : 'Read More'} 
                  <i className={`fa fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
                </button>
                <a href="#contact" className="btn-contact">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
