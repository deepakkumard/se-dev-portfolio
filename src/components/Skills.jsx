import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { FaCode, FaReact, FaMobile, FaTools } from 'react-icons/fa';
import { Tilt } from 'react-tilt';

const skillCategories = [
  {
    title: 'Backend Development',
    icon: <FaCode className="text-3xl mb-4" />,
    skills: ['PHP', 'Laravel', 'CodeIgniter', 'Node.js', 'RESTful APIs', 'MySQL', 'PostgreSQL']
  },
  {
    title: 'Frontend Development',
    icon: <FaReact className="text-3xl mb-4" />,
    skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    title: 'Mobile Development',
    icon: <FaMobile className="text-3xl mb-4" />,
    skills: ['Flutter', 'Dart', 'React Native', 'Mobile UI/UX', 'App Store Deployment']
  },
  {
    title: 'DevOps & Tools',
    icon: <FaTools className="text-3xl mb-4" />,
    skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Jira', 'Postman']
  }
];

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-blue-50'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Tilt key={index} options={defaultTiltOptions}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-lg ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className={`${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} flex items-center`}
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;