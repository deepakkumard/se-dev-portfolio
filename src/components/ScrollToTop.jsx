import React, { useState, useEffect, useContext } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-10 right-10 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 ${
            darkMode ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
          }`}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;