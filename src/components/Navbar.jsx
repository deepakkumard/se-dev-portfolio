import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>AK</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className={`cursor-pointer ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                } transition-colors duration-200`}
              >
                {item}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;