import React, { useState, useEffect } from 'react';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('security');

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

    const section = document.querySelector('.features-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const features = {
    security: {
      title: 'Secure-by-Design Architecture',
      description: 'Advanced security frameworks to protect your digital infrastructure at every layer.',
      items: [
        { icon: 'fa-shield-alt', text: 'Threat Detection & Monitoring' },
        { icon: 'fa-lock', text: 'Security Architecture Design' },
        { icon: 'fa-bug', text: 'Penetration Testing' },
        { icon: 'fa-clipboard-check', text: 'Compliance Systems' },
        { icon: 'fa-cloud', text: 'Cloud Security' },
        { icon: 'fa-database', text: 'Data Protection' }
      ],
      image: '/assets/SECURITY.png'
    },
    ai: {
      title: 'AI-First Engineering',
      description: 'Enterprise AI solutions that automate decisions and power intelligent digital experiences.',
      items: [
        { icon: 'fa-robot', text: 'Custom AI Development' },
        { icon: 'fa-brain', text: 'Generative AI Integrations' },
        { icon: 'fa-chart-line', text: 'Predictive Analytics' },
        { icon: 'fa-cogs', text: 'AI Automation Systems' },
        { icon: 'fa-microphone', text: 'Voice-Controlled AI' },
        { icon: 'fa-comments', text: 'Smart Assistants' }
      ],
      image: '/assets/PERFORMANCE.png'
    },
    metaverse: {
      title: 'Metaverse & Immersive Platforms',
      description: 'Next-generation 3D digital environments for collaboration, education, and commerce.',
      items: [
        { icon: 'fa-vr-cardboard', text: 'Virtual Worlds' },
        { icon: 'fa-cubes', text: 'Digital Twins' },
        { icon: 'fa-eye', text: 'AR/VR Experiences' },
        { icon: 'fa-link', text: 'Blockchain-Enabled Platforms' },
        { icon: 'fa-building', text: 'Immersive Workspaces' },
        { icon: 'fa-gamepad', text: '3D Environments' }
      ],
      image: '/assets/ANALYTICS.png'
    },
    enterprise: {
      title: 'Enterprise Business Software',
      description: 'Integrated platforms connecting operations, finance, HR, marketing, and sales.',
      items: [
        { icon: 'fa-cogs', text: 'ERP Systems' },
        { icon: 'fa-users', text: 'HR Management' },
        { icon: 'fa-bullhorn', text: 'Marketing Automation' },
        { icon: 'fa-chart-bar', text: 'Sales Management' },
        { icon: 'fa-calculator', text: 'Accounting Software' },
        { icon: 'fa-project-diagram', text: 'Workflow Automation' }
      ],
      image: '/assets/customer-care.png'
    }
  };

  const stats = [
    { number: 'UK', label: 'Based Company', icon: 'fa-flag' },
    { number: 'AI', label: 'First Strategy', icon: 'fa-robot' },
    { number: '100%', label: 'Secure', icon: 'fa-shield-alt' },
    { number: '24/7', label: 'Global Delivery', icon: 'fa-globe' }
  ];

  return (
    <section id="features" className="features-section section-padding">
      {/* Animated Background */}
      <div className="features-bg-animation">
        <div className="feature-shape shape-1"></div>
        <div className="feature-shape shape-2"></div>
        <div className="feature-grid-pattern"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-50">
            <h6 className={`section-subtitle ${isVisible ? 'animate-fade-in' : ''}`}>
              Why Choose Us
            </h6>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
              Powerful Capabilities for Modern Business
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              Everything you need for intelligent digital transformation in one platform
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="row mb-80">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="col-6 col-md-3"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`stat-card ${isVisible ? 'animate-scale-in' : ''}`}>
                <div className="stat-icon">
                  <i className={`fa ${stat.icon}`}></i>
                </div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Tabs */}
        <div className="row">
          <div className="col-12">
            <div className={`feature-tabs ${isVisible ? 'animate-fade-in' : ''}`}>
              <div className="tab-buttons">
                {Object.keys(features).map((key) => (
                  <button
                    key={key}
                    className={`tab-button ${activeTab === key ? 'active' : ''}`}
                    onClick={() => setActiveTab(key)}
                  >
                    {features[key].title}
                  </button>
                ))}
              </div>

              <div className="tab-content">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-6">
                    <div className="feature-content">
                      <h3>{features[activeTab].title}</h3>
                      <p className="feature-description">{features[activeTab].description}</p>
                      <div className="feature-list">
                        {features[activeTab].items.map((item, index) => (
                          <div key={index} className="feature-item">
                            <div className="feature-item-icon">
                              <i className={`fa ${item.icon}`}></i>
                            </div>
                            <span>{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="feature-image">
                      <img src={features[activeTab].image} alt={features[activeTab].title} />
                      <div className="feature-image-overlay"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
