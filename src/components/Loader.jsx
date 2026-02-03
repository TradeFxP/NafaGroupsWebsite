import React from 'react';

const Loader = () => {
  return (
    <div className="loading">
      <div className="loading-content">
        <img 
          className="logo-loading" 
          src="/assets/NaFa-Groups-Logo.png" 
          alt="NaFa Groups" 
        />
        <div className="loading-text">Loading...</div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
