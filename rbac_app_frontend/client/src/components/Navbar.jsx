// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHoveringSolutions, setIsHoveringSolutions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutionsMenu = [
    { title: "Smart Home", icon: "🏠", path: "/solutions/smart-home" },
    { title: "Industrial IoT", icon: "🏭", path: "/solutions/industrial" },
    { title: "Healthcare", icon: "⚕️", path: "/solutions/healthcare" },
    { title: "Smart Cities", icon: "🏙️", path: "/solutions/smart-cities" },
    { title: "Agriculture", icon: "🌱", path: "/solutions/agriculture" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-blue-900 to-indigo-900 shadow-xl py-2' 
          : 'bg-gradient-to-r from-blue-800/90 to-indigo-800/90 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-400 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                IoTiva
              </Link>
              <p className="text-xs text-blue-300 font-light">Connecting the Future</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-blue-100 hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="text-blue-100 hover:text-white transition-colors duration-300"
            >
              About Us
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setIsHoveringSolutions(true)}
              onMouseLeave={() => setIsHoveringSolutions(false)}
            >
              <button className="text-blue-100 hover:text-white transition-colors duration-300 flex items-center">
                Solutions
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isHoveringSolutions ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Solutions Dropdown */}
              {isHoveringSolutions && (
                <div className="absolute left-0 mt-2 w-64 bg-blue-800/90 backdrop-blur-lg rounded-xl shadow-2xl py-2 overflow-hidden border border-blue-600/50">
                  {solutionsMenu.map((item, index) => (
                    <Link 
                      key={index}
                      to={item.path}
                      className="flex items-center px-4 py-3 text-blue-100 hover:bg-blue-700/50 transition-colors duration-200 group"
                    >
                      <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className="font-medium group-hover:text-white">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              to="/contact" 
              className="text-blue-100 hover:text-white transition-colors duration-300"
            >
              Contact Us
            </Link>
            
            <Link 
              to="/blog" 
              className="text-blue-100 hover:text-white transition-colors duration-300"
            >
              Blog
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="px-4 py-2 rounded-lg text-blue-200 hover:text-white transition-colors duration-300"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-200 hover:text-white focus:outline-none"
            >
              <svg 
                className={`h-8 w-8 transition-transform duration-300 ${isOpen ? 'transform rotate-90' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900/95 backdrop-blur-lg border-t border-blue-700/50">
          <div className="px-4 py-6 space-y-4">
            <Link 
              to="/" 
              className="block text-blue-100 hover:text-white py-2 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="block text-blue-100 hover:text-white py-2 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            
            <div className="pt-2 pb-3">
              <button 
                className="w-full flex justify-between items-center text-blue-100 hover:text-white py-2 transition-colors duration-300"
                onClick={() => setIsHoveringSolutions(!isHoveringSolutions)}
              >
                <span>Solutions</span>
                <svg 
                  className={`h-5 w-5 transition-transform duration-200 ${isHoveringSolutions ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isHoveringSolutions && (
                <div className="mt-2 ml-4 space-y-3 border-l border-blue-600/50 pl-4">
                  {solutionsMenu.map((item, index) => (
                    <Link 
                      key={index}
                      to={item.path}
                      className="flex items-center py-2 text-blue-200 hover:text-white transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-lg mr-3">{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              to="/contact" 
              className="block text-blue-100 hover:text-white py-2 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            
            <Link 
              to="/blog" 
              className="block text-blue-100 hover:text-white py-2 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            
            <div className="pt-4 flex flex-col space-y-3">
              <Link 
                to="/login" 
                className="text-center px-4 py-2 rounded-lg border border-blue-500 text-blue-200 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="text-center bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Animated Connection Dots */}
      <div className="absolute bottom-0 left-0 w-full h-2 flex justify-center">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="w-2 h-2 bg-blue-400 rounded-full mx-1 animate-pulse"
            style={{ 
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1.5s'
            }}
          ></div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;