import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import SupportPage from './pages/SupportPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Calculate scroll percentage
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollPercentage(Math.round(scrolled));

      // Show back to top button after scrolling 500px
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Calculate circle stroke offset based on scroll percentage
  const radius = 27;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercentage / 100) * circumference;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="App">
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <Header onMenuToggle={handleMenuToggle} isScrolled={isScrolled} />
        </header>
        
        <Navigation isOpen={isNavOpen} onClose={handleNavClose} />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />

        {/* Back to Top Button with Scroll Percentage */}
        <button 
          className={`back-to-top ${showBackToTop ? 'show' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
        <span className="scroll-percentage">{scrollPercentage}%</span>
        <svg className="progress-ring" width="90" height="90">
          <defs>
            <path id="circlePath" d="M 45, 45 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none"/>
          </defs>
          <circle
            className="progress-ring-bg"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
            fill="transparent"
            r="38"
            cx="45"
            cy="45"
          />
          <circle
            className="progress-ring-circle"
            stroke="#ef0d33"
            strokeWidth="2"
            fill="transparent"
            r="38"
            cx="45"
            cy="45"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
              transition: 'stroke-dashoffset 0.3s ease'
            }}
          />
          <text>
            <textPath href="#circlePath" className="circle-text" startOffset="0%">
              NAFA BARTER • NAFA BARTER • 
            </textPath>
          </text>
        </svg>
      </button>
      </div>
    </Router>
  );
}

export default App;
