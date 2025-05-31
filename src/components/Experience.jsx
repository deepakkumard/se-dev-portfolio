import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    period: 'March 2024 - Present',
    description: 'Leading PHP/Laravel backend development with JavaScript/React frontend implementation for enterprise web applications.'
  },
  {
    title: 'Associate Software Engineer',
    company: 'Digital Innovations Ltd.',
    period: 'October 2022 - March 2024',
    description: 'Delivered robust PHP backend functionality and integrated frontend solutions for web applications, with additional experience in Flutter mobile development.'
  },
  {
    title: 'Junior Software Engineer',
    company: 'WebTech Solutions',
    period: 'September 2021 - October 2022',
    description: 'Designed and implemented backend components for web applications, focusing on PHP framework-based development.'
  },
  {
    title: 'Intern and PHP Backend Developer',
    company: 'StartUp Technologies',
    period: 'January 2020 - September 2021',
    description: 'Designed and implemented backend systems for web applications, with focus on PHP development and eCommerce platforms.'
  }
];

const Experience = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`mb-8 p-6 rounded-lg ${
                  darkMode ? 'bg-gray-900' : 'bg-gray-50'
                } shadow-lg`}
              >
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {exp.title}
                </h3>
                <p className={`text-lg font-medium mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {exp.company}
                </p>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {exp.period}
                </p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;