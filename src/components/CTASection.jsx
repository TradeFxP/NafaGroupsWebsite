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
                <i className="fa fa-rocket"></i>
              </div>
              <h6 className="cta-subtitle">Ready to Transform Your Business?</h6>
              <h2 className="cta-title">Partner with Nafa Groups Ltd</h2>
              <p className="cta-description">
                Build secure, scalable, future-ready systems with intelligent technology. 
                From AI-powered platforms to enterprise software — we deliver digital transformation that works.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-cta-primary">
                  <span>Contact Our Team</span>
                  <i className="fa fa-envelope"></i>
                </Link>
                <Link to="/contact" className="btn-cta-secondary">
                  <span>Schedule Consultation</span>
                  <i className="fa fa-calendar"></i>
                </Link>
              </div>
              <div className="cta-features">
                <div className="cta-feature">
                  <i className="fa fa-check-circle"></i>
                  <span>UK-Based</span>
                </div>
                <div className="cta-feature">
                  <i className="fa fa-check-circle"></i>
                  <span>AI-First</span>
                </div>
                <div className="cta-feature">
                  <i className="fa fa-check-circle"></i>
                  <span>Secure-by-Design</span>
                </div>
                <div className="cta-feature">
                  <i className="fa fa-check-circle"></i>
                  <span>Enterprise-Grade</span>
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
