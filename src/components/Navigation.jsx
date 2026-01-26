import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ isOpen, onClose }) => {
  const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'FEATURES', href: '/#features' },
    { name: 'BLOG', href: '/blog' },
    { name: 'SUPPORT', href: '/support' },
    { name: 'CONTACT', href: '/contact' }
  ];

  return (
    <div className={`nav-container ${isOpen ? 'active' : ''}`}>
      {/* Left Side - Image */}
      <div className="nav-left">
        <div className="nav-bg"></div>
      </div>

      {/* Right Side - Menu */}
      <div className="nav-menu">
        {/* Close Button */}
        <div className="menu-close" onClick={onClose}>
          <span></span>
        </div>

        {/* Logo */}
        <div className="nav-logo">
          <img src="/assets/NaFa-Groups-Logo.png" alt="NaFa Groups" />
        </div>

        {/* Menu Items */}
        <ul className="nav-list">
          {menuItems.map((item, index) => (
            <li key={index} className="nav-box">
              {item.href.startsWith('/#') ? (
                <a href={item.href} onClick={onClose}>
                  <span className="nav-btn" data-text={item.name}>
                    {item.name}
                  </span>
                </a>
              ) : (
                <Link to={item.href} onClick={onClose}>
                  <span className="nav-btn" data-text={item.name}>
                    {item.name}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
