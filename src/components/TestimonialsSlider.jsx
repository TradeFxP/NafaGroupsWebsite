import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const TestimonialsSlider = () => {
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

    const section = document.querySelector('.testimonials-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      text: 'NaFa Groups delivered a robust trading platform that handles 50,000+ transactions per day with zero downtime. Their cloud-native architecture and compliance-first approach exceeded our expectations. True enterprise-grade quality.',
      author: 'Michael Thompson',
      position: 'CTO, Global Trading Solutions Ltd',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      rating: 5
    },
    {
      id: 2,
      text: 'The custom CRM they built for our wealth management division transformed client onboarding. KYC/AML automation, relationship tracking, and compliance reporting — all seamlessly integrated. Professional delivery from start to finish.',
      author: 'Sarah Mitchell',
      position: 'Head of Operations, Premier Investment Bank',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5
    },
    {
      id: 3,
      text: 'Outstanding work on our mobile banking app. Secure authentication, real-time transaction processing, and enterprise-level security. NaFa Groups understands financial services architecture and regulatory requirements at a deep level.',
      author: 'David Chen',
      position: 'CEO, FinTech Ventures Asia',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      rating: 5
    },
    {
      id: 4,
      text: 'Their blockchain solution for secure transaction recording gave us audit-ready trails and tamper-proof records. The smart contract workflows automated our settlement process. Innovative, reliable, and business-focused technology partner.',
      author: 'Emma Richardson',
      position: 'Director of Technology, Institutional Asset Management',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section section-padding">
      {/* Animated Background */}
      <div className="testimonials-bg-animation">
        <div className="testimonial-shape shape-1"></div>
        <div className="testimonial-shape shape-2"></div>
        <div className="quote-icon quote-1">
          <i className="fa fa-quote-left"></i>
        </div>
        <div className="quote-icon quote-2">
          <i className="fa fa-quote-right"></i>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-50">
            <h6 className={`section-subtitle ${isVisible ? 'animate-fade-in' : ''}`}>
              Client Testimonials
            </h6>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
              Trusted by Enterprise Clients
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              What industry leaders say about our financial technology solutions
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={`testimonials-wrapper ${isVisible ? 'animate-scale-in' : ''}`}>
              <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: true
                }}
                autoplay={{ 
                  delay: 5000,
                  disableOnInteraction: false
                }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                speed={1000}
                className="testimonials-slider"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="testimonial-item">
                      <div className="testimonial-card">
                        <div className="quote-mark">
                          <i className="fa fa-quote-left"></i>
                        </div>
                        
                        <div className="rating-stars">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i key={i} className="fa fa-star"></i>
                          ))}
                        </div>

                        <p className="testimonial-text">{testimonial.text}</p>
                        
                        <div className="testimonial-author">
                          <div className="author-image">
                            <img src={testimonial.image} alt={testimonial.author} />
                            <div className="author-image-border"></div>
                          </div>
                          <div className="author-info">
                            <h5>{testimonial.author}</h5>
                            <span>{testimonial.position}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
