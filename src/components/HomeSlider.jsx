import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HomeSlider = () => {
  const slides = [
    {
      bgImage: '/assets/FINANCIAL-TECHNOLOGY.png',
      title: "ENGINEERING",
      title2: "NEXT-GENERATION",
      title3: "FINANCIAL TECHNOLOGY",
      tags: ['UK REGISTERED', 'ENTERPRISE GRADE', 'SECURE PLATFORMS'],
      slideNumber: '01'
    },
    {
      bgImage: '/assets/SCALABLE%20FINANCIAL%20INFRASTRUCTURE.png',
      title: "SCALABLE",
      title2: "FINANCIAL",
      title3: "INFRASTRUCTURE",
      tags: ['TRADING PLATFORMS', 'PAYMENT SYSTEMS', 'BLOCKCHAIN'],
      slideNumber: '02'
    },
    {
      bgImage: '/assets/customer-care.png',
      title: "TRUSTED",
      title2: "TECHNOLOGY",
      title3: "PARTNER",
      tags: ['24/7 SUPPORT', 'COMPLIANCE READY', 'GLOBAL DELIVERY'],
      slideNumber: '03'
    }
  ];

  return (
    <section id="home" className="home-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{ 
          clickable: true,
          el: '.swiper-pagination-custom',
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                   ' / ' +
                   '<span class="' + totalClass + '"></span>';
          }
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="swiper-container-home"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-item-split">
              {/* Left Side - Red Background with Text */}
              <div className="slide-left">
                <div className="slide-content-left">
                  <h1 className="hero-title">
                    <span className="title-line">{slide.title}</span>
                    <span className="title-line">{slide.title2}</span>
                    <span className="title-line">{slide.title3}</span>
                  </h1>
                  
                  <div className="slide-tags">
                    {slide.tags.map((tag, idx) => (
                      <span key={idx} className="slide-tag">{tag}</span>
                    ))}
                  </div>

                  <a href="#about" className="btn-hero">
                    READ MORE <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="slide-right" style={{ backgroundImage: `url(${slide.bgImage})` }}>
                <div className="scroll-indicator">
                  <span>SCROLL</span>
                  <i className="fa fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation - Right Side */}
        <div className="slider-navigation">
          <div className="swiper-button-prev-custom">
            <i className="fa fa-chevron-left"></i>
          </div>
          <div className="swiper-pagination-custom"></div>
          <div className="swiper-button-next-custom">
            <i className="fa fa-chevron-right"></i>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default HomeSlider;
