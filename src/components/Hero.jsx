import React, { useContext } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { FaArrowDown, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);

  const handleResumeClick = () => {
    // Replace this URL with your actual resume URL
    const resumeUrl = 'https://example.com/your-resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="home" className={`min-h-screen flex items-center ${darkMode ? 'bg-gray-900' : 'bg-blue-50'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <motion.h1 
              className={`text-4xl md:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm Ajay Kumar
            </motion.h1>
            <div className={`text-xl md:text-2xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Mobile App Developer',
                  2000,
                ]}
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <motion.p 
              className={`text-lg mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Passionate developer focused on building efficient, scalable, and user-friendly digital solutions. Dedicated to crafting clean architectures, seamless integrations, and intuitive user experiences
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex space-x-4"
            >
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <button
                onClick={handleResumeClick}
                className={`inline-flex items-center space-x-2 px-8 py-3 rounded-full border ${
                  darkMode 
                    ? 'border-gray-700 text-white hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-200'
                } transition-all duration-300 transform hover:scale-105`}
              >
                <FaFileDownload className="text-xl" />
                <span>Resume</span>
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 relative"
          >
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Developer"
              className="rounded-lg shadow-2xl w-full object-cover"
              style={{ height: '500px' }}
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-lg -z-10"></div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <FaArrowDown className={`text-2xl animate-bounce ${darkMode ? 'text-white' : 'text-gray-900'}`} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;