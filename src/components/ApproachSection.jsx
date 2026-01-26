import React, { useState, useEffect } from 'react';

const ApproachSection = () => {
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

    const section = document.querySelector('.approach-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      id: 1,
      number: '01',
      icon: 'fa-search',
      title: 'Understand',
      description: 'The business and regulatory environment',
      detail: 'Deep dive into your requirements, compliance needs, and business objectives'
    },
    {
      id: 2,
      number: '02',
      icon: 'fa-drafting-compass',
      title: 'Design',
      description: 'Scalable and secure architecture',
      detail: 'Cloud-native, microservices-based design for performance and reliability'
    },
    {
      id: 3,
      number: '03',
      icon: 'fa-code',
      title: 'Build',
      description: 'With quality engineering practices',
      detail: 'Clean code, best practices, and enterprise-grade development standards'
    },
    {
      id: 4,
      number: '04',
      icon: 'fa-vial',
      title: 'Test',
      description: 'Performance, reliability and security',
      detail: 'Comprehensive testing including load, security, and compliance validation'
    },
    {
      id: 5,
      number: '05',
      icon: 'fa-headset',
      title: 'Support & Optimise',
      description: 'Continuously improve',
      detail: '24/7 monitoring, maintenance, and ongoing optimization for peak performance'
    }
  ];

  return (
    <section className="approach-section section-padding">
      {/* Animated Background */}
      <div className="approach-bg-animation">
        <div className="approach-line line-1"></div>
        <div className="approach-line line-2"></div>
        <div className="approach-dots"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-50">
            <h6 className={`section-subtitle ${isVisible ? 'animate-fade-in' : ''}`}>
              Our Approach
            </h6>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
              Enterprise Project Discipline
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              A structured methodology for delivering secure, scalable financial technology
            </p>
          </div>
        </div>

        <div className="row approach-timeline">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="col-12"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`approach-step ${isVisible ? 'animate-slide-from-left' : ''}`}>
                <div className="step-number">{step.number}</div>
                <div className="step-icon">
                  <i className={`fa ${step.icon}`}></i>
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <p className="step-detail">{step.detail}</p>
                </div>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            </div>
          ))}
        </div>

        {/* Approach Statement */}
        <div className="row mt-60">
          <div className="col-12">
            <div className={`approach-statement ${isVisible ? 'animate-scale-in' : ''}`}>
              <div className="statement-icon">
                <i className="fa fa-check-double"></i>
              </div>
              <h3>Quality Engineering Meets Financial Expertise</h3>
              <p>
                Our approach combines deep financial domain knowledge with world-class engineering practices. 
                From understanding regulatory requirements to delivering enterprise-grade systems, we ensure 
                your technology is built for success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
