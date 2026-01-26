import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

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

    const section = document.querySelector('.contact-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus('');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      {/* Animated Background */}
      <div className="contact-bg-animation">
        <div className="contact-shape shape-1"></div>
        <div className="contact-shape shape-2"></div>
        <div className="contact-shape shape-3"></div>
        <div className="contact-grid-pattern"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-50">
            <h6 className={`section-subtitle ${isVisible ? 'animate-fade-in' : ''}`}>
              Get In Touch
            </h6>
            <h2 className={`section-title ${isVisible ? 'animate-slide-up' : ''}`}>
              We'd Love to Hear From You
            </h2>
            <p className={`section-description ${isVisible ? 'animate-fade-in-delayed' : ''}`}>
              Send us a message and our team will get back to you within 24 hours
            </p>
          </div>
        </div>

        <div className="row">
          {/* Contact Info */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className={`contact-info-wrapper ${isVisible ? 'animate-slide-from-left' : ''}`}>
              <div className="contact-info-card">
                <div className="contact-icon">
                  <i className="fa fa-map-marker-alt"></i>
                </div>
                <h4>Visit Our Office</h4>
                <p>123 Fintech Tower, MG Road<br />Bangalore, Karnataka 560001<br />India</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon">
                  <i className="fa fa-phone-alt"></i>
                </div>
                <h4>Call Us</h4>
                <p>
                  <a href="tel:+918800998899">+91 88009 98899</a><br />
                  <a href="tel:+918800554455">+91 88005 54455</a>
                </p>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon">
                  <i className="fa fa-envelope"></i>
                </div>
                <h4>Email Us</h4>
                <p>
                  <a href="mailto:info@nafabarter.com">info@nafabarter.com</a><br />
                  <a href="mailto:support@nafabarter.com">support@nafabarter.com</a>
                </p>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon">
                  <i className="fa fa-clock"></i>
                </div>
                <h4>Working Hours</h4>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-12 col-md-6 col-lg-8">
            <div className={`contact-form-wrapper ${isVisible ? 'animate-slide-from-right' : ''}`}>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <i className="fa fa-user form-icon"></i>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <i className="fa fa-envelope form-icon"></i>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <i className="fa fa-phone form-icon"></i>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject *"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <i className="fa fa-tag form-icon"></i>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        rows="6"
                        placeholder="Your Message *"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <i className="fa fa-comment form-icon"></i>
                    </div>
                  </div>
                  <div className="col-12">
                    <button 
                      type="submit" 
                      className="btn-submit"
                      disabled={formStatus === 'sending'}
                    >
                      {formStatus === 'sending' ? (
                        <>
                          <i className="fa fa-spinner fa-spin"></i> Sending...
                        </>
                      ) : formStatus === 'success' ? (
                        <>
                          <i className="fa fa-check"></i> Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message <i className="fa fa-paper-plane"></i>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {formStatus === 'success' && (
                  <div className="form-success-message">
                    <i className="fa fa-check-circle"></i>
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
