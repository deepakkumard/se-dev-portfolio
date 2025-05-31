import React, { useContext, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    }
  };

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <Toaster position="bottom-right" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} shadow-lg`}>
                <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:your.email@example.com"
                    className={`flex items-center space-x-3 ${
                      darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                    } transition-colors duration-200`}
                  >
                    <FaEnvelope className="text-xl" />
                    <span>your.email@example.com</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 ${
                      darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                    } transition-colors duration-200`}
                  >
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a
                    href="https://github.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 ${
                      darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                    } transition-colors duration-200`}
                  >
                    <FaGithub className="text-xl" />
                    <span>GitHub Profile</span>
                  </a>
                  <a
                    href="https://yourportfolio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 ${
                      darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                    } transition-colors duration-200`}
                  >
                    <FaGlobe className="text-xl" />
                    <span>Portfolio Website</span>
                  </a>
                </div>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} shadow-lg`}>
                <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Send a Message
                </h3>
                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className={`w-full p-3 rounded-lg ${
                        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                      } border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className={`w-full p-3 rounded-lg ${
                        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                      } border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      rows="4"
                      className={`w-full p-3 rounded-lg ${
                        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                      } border ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;