import React, { useState, useEffect } from 'react';

const TechnologySection = () => {
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

    const section = document.querySelector('.technology-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      id: 1,
      icon: 'fa-cloud',
      title: 'Cloud-native Architecture',
      description: 'Scalable, resilient systems built for the cloud'
    },
    {
      id: 2,
      icon: 'fa-project-diagram',
      title: 'Microservices & APIs',
      description: 'Modular, maintainable enterprise architecture'
    },
    {
      id: 3,
      icon: 'fa-shield-alt',
      title: 'Secure Authentication',
      description: 'Multi-factor auth & identity management'
    },
    {
      id: 4,
      icon: 'fa-cubes',
      title: 'Blockchain Platforms',
      description: 'Smart contracts & distributed ledger technology'
    },
    {
      id: 5,
      icon: 'fa-mobile-alt',
      title: 'Mobile Frameworks',
      description: 'Native iOS & Android financial applications'
    },
    {
      id: 6,
      icon: 'fa-chart-bar',
      title: 'Data Analytics & Reporting',
      description: 'Real-time insights & business intelligence'
    },
    {
      id: 7,
      icon: 'fa-lock',
      title: 'Encryption & Security',
      description: 'Bank-grade encryption & security controls'
    },
    {
      id: 8,
      icon: 'fa-cogs',
      title: 'DevOps & Automation',
      description: 'CI/CD pipelines & infrastructure automation'
    }
  ];

  return (
    <section className="technology-section section-padding">
      {/* Animated Background */}
      <div className="tech-bg-animation">
        <div className="tech-pattern"></div>
        <div className="tech-glow glow-1"></div>
        <div className="tech-glow glow-2"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-50">
            <h6 className={`section-subtitle ${isVisible ? 'animate-fade-in' : ''}`}>
              Technology Expertise
            </h6>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
              Enterprise-Class Systems
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              Security and compliance are built-in at every layer
            </p>
          </div>
        </div>

        <div className="row tech-grid">
          {technologies.map((tech, index) => (
            <div 
              key={tech.id} 
              className="col-12 col-sm-6 col-md-4 col-lg-3"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={`tech-card ${isVisible ? 'animate-slide-up-tech' : ''}`}>
                <div className="tech-icon-wrapper">
                  <div className="tech-icon">
                    <i className={`fa ${tech.icon}`}></i>
                  </div>
                </div>
                <h4 className="tech-title">{tech.title}</h4>
                <p className="tech-description">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Statement */}
        <div className="row mt-60">
          <div className="col-12">
            <div className={`tech-statement ${isVisible ? 'animate-fade-in' : ''}`}>
              <div className="statement-content">
                <i className="fa fa-code"></i>
                <h3>We build enterprise-class systems using cutting-edge technology</h3>
                <p>
                  From cloud-native architecture to blockchain platforms, our technology stack is designed 
                  for security, scalability, and performance. Security and compliance are built-in at every layer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
