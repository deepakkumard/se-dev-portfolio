import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Enterprise Employee Management System',
    description: 'A comprehensive system designed to streamline HR processes with user management, role-based access control, project tracking, leave management, and employee profiles.',
    technologies: ['Node.js', 'Express', 'React', 'MySQL', 'JWT', 'Socket.io'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com',
    live: 'https://demo.com'
  },
  {
    title: 'E-Commerce Platform Optimization',
    description: 'Revamped an existing OpenCart e-commerce platform to improve performance, security, and user experience.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Redis', 'JavaScript', 'RESTful APIs'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com',
    live: 'https://demo.com'
  },
  {
    title: 'Task Tracking Mobile Application',
    description: 'A mobile solution enabling employees to track tasks and mark attendance remotely.',
    technologies: ['Flutter', 'Dart', 'Laravel', 'SQLite', 'RESTful APIs'],
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com',
    live: 'https://demo.com'
  },
  {
    title: 'Real-time Chat Application',
    description: 'A modern chat application with real-time messaging, file sharing, and group chat capabilities.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'WebRTC'],
    image: 'https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com',
    live: 'https://demo.com'
  }
];

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-lg overflow-hidden shadow-lg group ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200"
                    >
                      <FaGithub className="text-xl text-gray-900" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200"
                    >
                      <FaExternalLinkAlt className="text-lg text-gray-900" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;