import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="footer-widget">
              <Link to="/">
                <img src="/assets/NaFa-Groups-Logo.png" alt="NaFa Groups" className="footer-logo" />
              </Link>
              <p>
                UK-registered IT company specialising in secure, scalable technology platforms for the global 
                financial industry. Enterprise software development, blockchain solutions, and managed services.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div className="footer-widget">
              <h4 className="widget-title">Quick Links</h4>
              <ul className="footer-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="footer-widget">
              <h4 className="widget-title">Our Services</h4>
              <ul className="footer-menu">
                <li><Link to="/services">Financial Product Development</Link></li>
                <li><Link to="/services">Enterprise Software Engineering</Link></li>
                <li><Link to="/services">CRM Solutions</Link></li>
                <li><Link to="/services">Mobile App Development</Link></li>
                <li><Link to="/services">Blockchain Technology</Link></li>
                <li><Link to="/services">Payment Gateway Integration</Link></li>
                <li><Link to="/services">IT Managed Services</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="footer-widget">
              <h4 className="widget-title">Quick Contact</h4>
              <ul className="footer-contact">
                <li>
                  <i className="fa fa-map-marker-alt"></i>
                  <div>
                    <strong>London Branch:</strong><br/>
                    Unit 7B, Cranbrook House, 61 Cranbrook Road,<br/>
                    Ilford, Essex, England, IG1 4PG
                  </div>
                </li>
                <li>
                  <i className="fa fa-map-marker-alt"></i>
                  <div>
                    <strong>Dubai Branch:</strong><br/>
                    908, 9th Floor, Fifty-One Tower, Marasi Drive,<br/>
                    Business Bay, Dubai, United Arab Emirates
                  </div>
                </li>
                <li><i className="fa fa-envelope"></i> support@nafabarter.com</li>
                <li><i className="fa fa-phone"></i> London: +44 7444 468968</li>
              </ul>
              <div className="social-links mt-20">
                <a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer-bottom">
              <p>Copyright © NaFa Groups Limited 2026 | UK Registered Company | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
