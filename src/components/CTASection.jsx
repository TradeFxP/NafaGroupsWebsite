import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
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

    const section = document.querySelector('.cta-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section section-padding">
      {/* Animated Background */}
      <div className="cta-bg-animation">
        <div className="cta-glow glow-1"></div>
        <div className="cta-glow glow-2"></div>
        <div className="cta-particles"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`cta-content ${isVisible ? 'animate-scale-in' : ''}`}>
              <div className="cta-icon">
                <i className="fa fa-handshake"></i>
              </div>
              <h6 className="cta-subtitle">Let's Work Together</h6>
              <h2 className="cta-title">Transform Your Financial Systems</h2>
              <p className="cta-description">
                Build modern, secure and scalable technology with a trusted UK partner. 
                From trading platforms to enterprise software — we deliver financial infrastructure that works.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-cta-primary">
                  <span>Start Your Project</span>
                  <i className="fa fa-arrow-right"></i>
                </Link>
                <Link to="/services" className="btn-cta-secondary">
                  <span>Explore Services</span>
                  <i className="fa fa-external-link-alt"></i>
                </Link>
              </div>
              <div className="cta-features">
                <div className="cta-feature">
                  <i className="fa fa-check-circle"></i>
                  <span>UK Registered</span>
                </div>
                <div className="cta-feature">
                  <i className="fa fa-check-circle"></i>
                  <span>Enterprise Grade</span>
                </div>
                <div className="cta-feature">
                  <i className="fa fa-check-circle"></i>
                  <span>24/7 Support</span>
                </div>
                <div className="cta-feature">
                  <i className="fa fa-check-circle"></i>
                  <span>Security First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
