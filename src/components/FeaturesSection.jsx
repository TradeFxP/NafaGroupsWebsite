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
      title: 'Bank-Grade Security',
      description: 'Your financial data is protected with military-grade encryption and multi-layer security protocols.',
      items: [
        { icon: 'fa-shield-alt', text: '256-bit SSL Encryption' },
        { icon: 'fa-lock', text: 'Two-Factor Authentication' },
        { icon: 'fa-fingerprint', text: 'Biometric Login' },
        { icon: 'fa-user-shield', text: 'KYC/AML Compliance' },
        { icon: 'fa-video', text: '24/7 Security Monitoring' },
        { icon: 'fa-database', text: 'Cold Storage Backup' }
      ],
      image: '/assets/SECURITY.png'
    },
    speed: {
      title: 'Lightning Fast Performance',
      description: 'Experience instant transactions, real-time updates, and blazing-fast platform performance.',
      items: [
        { icon: 'fa-bolt', text: 'Instant Transactions' },
        { icon: 'fa-clock', text: 'Real-Time Processing' },
        { icon: 'fa-rocket', text: 'High-Speed Trading' },
        { icon: 'fa-sync-alt', text: 'Live Market Data' },
        { icon: 'fa-server', text: '99.9% Uptime' },
        { icon: 'fa-tachometer-alt', text: 'Optimized Performance' }
      ],
      image: '/assets/PERFORMANCE.png'
    },
    analytics: {
      title: 'Advanced Analytics & Insights',
      description: 'Make informed decisions with AI-powered analytics, real-time charts, and detailed reports.',
      items: [
        { icon: 'fa-chart-line', text: 'Real-Time Analytics' },
        { icon: 'fa-brain', text: 'AI Predictions' },
        { icon: 'fa-chart-pie', text: 'Portfolio Tracking' },
        { icon: 'fa-file-invoice', text: 'Detailed Reports' },
        { icon: 'fa-bell', text: 'Smart Alerts' },
        { icon: 'fa-mobile-alt', text: 'Mobile Dashboard' }
      ],
      image: '/assets/ANALYTICS.png'
    },
    support: {
      title: '24/7 Customer Support',
      description: 'Get instant help from our dedicated support team available round the clock via multiple channels.',
      items: [
        { icon: 'fa-headset', text: '24/7 Live Chat' },
        { icon: 'fa-phone-volume', text: 'Phone Support' },
        { icon: 'fa-envelope', text: 'Email Assistance' },
        { icon: 'fa-robot', text: 'AI Chatbot' },
        { icon: 'fa-book-open', text: 'Knowledge Base' },
        { icon: 'fa-video', text: 'Video Tutorials' }
      ],
      image: '/assets/customer-care.png'
    }
  };

  const stats = [
    { number: '5M+', label: 'Active Users', icon: 'fa-users' },
    { number: '₹100Cr+', label: 'Daily Transactions', icon: 'fa-exchange-alt' },
    { number: '99.9%', label: 'Uptime', icon: 'fa-server' },
    { number: '24/7', label: 'Support', icon: 'fa-headset' }
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
              Powerful Features for Modern Finance
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              Everything you need for seamless financial management in one platform
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
