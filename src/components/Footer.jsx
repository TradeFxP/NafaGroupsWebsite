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
                <img src="/assets/NaFa-Groups-Logo.png" alt="Nafa Groups Ltd" className="footer-logo" />
              </Link>
              <p>
                UK-based advanced technology company delivering AI-powered platforms, metaverse systems, 
                cybersecurity frameworks, enterprise business software, and high-performance web and mobile applications.
              </p>
              <div className="company-registration">
                <i className="fa fa-building"></i>
                <span><strong>UK Registration No:</strong> 15232487</span>
              </div>
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
                <li><Link to="/services">AI & Voice Systems</Link></li>
                <li><Link to="/services">Metaverse Platforms</Link></li>
                <li><Link to="/services">Web & Mobile Development</Link></li>
                <li><Link to="/services">Cybersecurity Solutions</Link></li>
                <li><Link to="/services">ERP Systems</Link></li>
                <li><Link to="/services">HR Management Software</Link></li>
                <li><Link to="/services">Marketing Automation</Link></li>
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
                <li><i className="fa fa-envelope"></i> support@nafagroups.com</li>
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
              <p>Copyright © Nafa Groups Ltd 2026 | UK Company Registration No: 15232487 | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
