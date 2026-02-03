import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = ({ onMenuToggle, isScrolled }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="logo">
            <Link to="/">
              <img src="/assets/NaFa-Groups-Logo.png" alt="Nafa Groups Ltd" />
            </Link>
          </div>
        </div>
        <div className="col-6">
          <div className="header-right">
            <div className="menu-nav">
              <a id="menu" className="menu_btn" onClick={onMenuToggle}>
                <span></span>
              </a>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
