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
      icon: 'fa-robot',
      title: 'Custom AI Development',
      description: 'Enterprise AI solutions & automation'
    },
    {
      id: 2,
      icon: 'fa-microphone',
      title: 'Generative AI & Voice',
      description: 'Smart assistants & speech technology'
    },
    {
      id: 3,
      icon: 'fa-chart-line',
      title: 'Predictive Analytics',
      description: 'AI-powered insights & forecasting'
    },
    {
      id: 4,
      icon: 'fa-vr-cardboard',
      title: 'Virtual Worlds & AR/VR',
      description: 'Immersive 3D digital environments'
    },
    {
      id: 5,
      icon: 'fa-cubes',
      title: 'Blockchain Platforms',
      description: 'Smart contracts & digital twins'
    },
    {
      id: 6,
      icon: 'fa-cloud',
      title: 'Cloud-Native Architecture',
      description: 'Scalable, resilient cloud systems'
    },
    {
      id: 7,
      icon: 'fa-shield-alt',
      title: 'Cybersecurity Frameworks',
      description: 'Threat detection & protection'
    },
    {
      id: 8,
      icon: 'fa-mobile-alt',
      title: 'Mobile & Web Apps',
      description: 'iOS, Android & SaaS platforms'
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
              Technology Stack
            </h6>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
              Unified Technology for Modern Businesses
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              AI, immersive technology, and enterprise software engineering in one stack
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
                <h3>We combine AI, immersive technology & enterprise software engineering</h3>
                <p>
                  From AI-powered platforms to metaverse systems and cybersecurity frameworks, our technology 
                  stack is designed for security, scalability, and performance. We build intelligent digital ecosystems.
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
