import React, { useState, useEffect } from 'react';

const MissionVisionSection = () => {
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

    const section = document.querySelector('.mission-vision-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mission-vision-section section-padding">
      {/* Animated Background */}
      <div className="mission-bg-animation">
        <div className="mission-particle particle-1"></div>
        <div className="mission-particle particle-2"></div>
        <div className="mission-particle particle-3"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-50">
            <h6 className={`section-subtitle ${isVisible ? 'animate-fade-in' : ''}`}>
              Our Purpose
            </h6>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
              Transforming Digital Ecosystems
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              Through intelligent software, AI innovation and secure enterprise technology
            </p>
          </div>
        </div>

        <div className="row mission-vision-cards">
          {/* Mission Card */}
          <div className="col-12 col-md-6">
            <div className={`mission-card ${isVisible ? 'animate-slide-from-left' : ''}`}>
              <div className="card-icon">
                <i className="fa fa-bullseye"></i>
              </div>
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                To empower businesses with technology that is secure, intelligent and globally scalable. 
                We enable organizations to operate faster, smarter and with complete confidence.
              </p>
              <div className="card-features">
                <div className="feature-item">
                  <i className="fa fa-check-circle"></i>
                  <span>AI-Powered Solutions</span>
                </div>
                <div className="feature-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Global Scalability</span>
                </div>
                <div className="feature-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Enterprise Security</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="col-12 col-md-6">
            <div className={`mission-card ${isVisible ? 'animate-slide-from-right' : ''}`}>
              <div className="card-icon">
                <i className="fa fa-eye"></i>
              </div>
              <h3 className="card-title">Our Vision</h3>
              <p className="card-text">
                To become a trusted global technology partner for modern enterprises. We build digital 
                infrastructure — not just software — powering the future of business.
              </p>
              <div className="card-features">
                <div className="feature-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Global Technology Partner</span>
                </div>
                <div className="feature-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Digital Infrastructure</span>
                </div>
                <div className="feature-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Future of Business</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Purpose Statement */}
        <div className="row mt-60">
          <div className="col-12">
            <div className={`purpose-statement ${isVisible ? 'animate-scale-in' : ''}`}>
              <div className="purpose-icon">
                <i className="fa fa-rocket"></i>
              </div>
              <h3>We don't just build software — we engineer intelligent digital ecosystems.</h3>
              <p>
                Transform your business through AI-powered platforms, immersive technology and secure enterprise solutions — 
                enabling organizations to operate smarter and grow faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
