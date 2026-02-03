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
                  <h3 className="overlay-number">Nafa Groups Ltd </h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-6">
            <div className={`about-content ${isVisible ? 'animate-slide-from-right' : ''}`}>
              <h6 className="section-subtitle">About Nafa Groups Ltd</h6>
              <h2 className="section-title">Advanced AI, Software & Enterprise Technology Solutions</h2>
              <p className="about-intro">
                <strong>Nafa Groups Ltd</strong> is a UK-based advanced technology company delivering 
                AI-powered platforms, metaverse systems, cybersecurity frameworks, enterprise business 
                software, and high-performance web and mobile applications. We build secure, scalable 
                digital ecosystems that help organizations operate smarter and grow faster.
              </p>
              <p className="about-intro">
                We combine artificial intelligence, immersive technology, and enterprise software 
                engineering into one unified technology stack for modern businesses.
              </p>
              
              {isExpanded && (
                <div className="about-expanded">
                  <p>
                    Our technology supports businesses that need reliability, security and real-world 
                    digital logic — delivered with precision. We transform enterprises through intelligent 
                    software, automation and secure digital innovation.
                  </p>
                  <p>
                    From AI-powered platforms to metaverse systems, cybersecurity frameworks, and enterprise 
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
