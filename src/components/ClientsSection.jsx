import React, { useState, useEffect } from 'react';

const ClientsSection = () => {
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

    const section = document.querySelector('.clients-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const clients = [
    { 
      id: 1, 
      logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=100&fit=crop',
      name: 'Global Investment Bank' 
    },
    { 
      id: 2, 
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop',
      name: 'Digital Trading Platform' 
    },
    { 
      id: 3, 
      logo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=100&fit=crop',
      name: 'Enterprise FinTech Solutions' 
    },
    { 
      id: 4, 
      logo: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=200&h=100&fit=crop',
      name: 'Institutional Asset Manager' 
    },
    { 
      id: 5, 
      logo: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=200&h=100&fit=crop',
      name: 'Corporate Banking Group' 
    },
    { 
      id: 6, 
      logo: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=200&h=100&fit=crop',
      name: 'Blockchain Finance Network' 
    }
  ];

  return (
    <section className="clients-section section-padding">
      {/* Animated Background */}
      <div className="clients-bg-animation">
        <div className="client-particle particle-1"></div>
        <div className="client-particle particle-2"></div>
        <div className="client-particle particle-3"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-50">
            <h6 className={`section-subtitle ${isVisible ? 'animate-fade-in' : ''}`}>
              Trusted Partners
            </h6>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
              Powering Leading Enterprises
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              Trusted by global organizations across multiple industries worldwide
            </p>
          </div>
        </div>
        <div className="row clients-grid">
          {clients.map((client, index) => (
            <div 
              key={client.id} 
              className="col-6 col-md-4 col-lg-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`client-logo ${isVisible ? 'animate-zoom-in' : ''}`}>
                <div className="client-logo-inner">
                  <img src={client.logo} alt={client.name} />
                  <div className="client-overlay">
                    <span>{client.name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
