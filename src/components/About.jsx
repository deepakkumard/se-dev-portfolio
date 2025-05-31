import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { Parallax } from 'react-parallax';
import { FaUser, FaCode, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  const features = [
    {
      icon: <FaUser className="text-2xl" />,
      title: "Experience",
      description: "5+ years in software development"
    },
    {
      icon: <FaCode className="text-2xl" />,
      title: "Full Stack",
      description: "End-to-end application development"
    },
    {
      icon: <FaMobileAlt className="text-2xl" />,
      title: "Mobile Dev",
      description: "Cross-platform mobile solutions"
    }
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2 relative">
            <Parallax
              blur={0}
              bgImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              bgImageAlt="Working Developer"
              strength={200}
              className="rounded-lg shadow-xl overflow-hidden"
              style={{ height: '400px' }}
            />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600 rounded-lg -z-10"></div>
          </div>
          <div className="md:w-1/2">
            <motion.h2 
              className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <div className="space-y-6">
              <motion.p 
                className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Experienced Software Engineer with 5+ years of expertise in building scalable web applications 
                and RESTful APIs. Core specialization in PHP/Laravel, CodeIgniter, Node JS backend development with strong 
                JavaScript and React frontend skills.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}
                  >
                    <div className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>
                      {feature.icon}
                    </div>
                    <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;