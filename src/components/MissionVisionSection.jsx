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
              Transforming Financial Services
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              Through intelligent software, automation and secure digital innovation
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
                To empower financial businesses with technology that is secure, intelligent and globally scalable. 
                We enable businesses to operate faster, smarter and with complete confidence.
              </p>
              <div className="card-features">
                <div className="feature-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Secure & Intelligent Technology</span>
                </div>
                <div className="feature-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Global Scalability</span>
                </div>
                <div className="feature-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Complete Confidence</span>
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
                To become a trusted global technology partner for the financial world. We build financial 
                infrastructure — not just software — powering the future of finance.
              </p>
              <div className="card-features">
                <div className="feature-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Global Technology Partner</span>
                </div>
                <div className="feature-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Financial Infrastructure</span>
                </div>
                <div className="feature-item">
                  <i className="fa fa-check-circle"></i>
                  <span>Future of Finance</span>
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
              <h3>We don't just build software — we build financial infrastructure.</h3>
              <p>
                Transform financial services through intelligent software, automation and secure digital innovation — 
                enabling businesses to operate faster, smarter and with complete confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
