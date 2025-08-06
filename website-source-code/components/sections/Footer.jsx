import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Instagram, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Get Involved', href: '#get-involved' },
    { name: 'Contact', href: '#contact' }
  ];

  const resources = [
    { name: 'EWB-USA National', href: 'https://www.ewb-usa.org/', external: true },
    { name: 'UTK Engineering', href: 'https://www.engr.utk.edu/', external: true },
    { name: 'Student Organizations', href: 'https://studentlife.utk.edu/', external: true },
    { name: 'Sustainability at UTK', href: 'https://sustainability.utk.edu/', external: true }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://instagram.com/ewb_utk', 
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    { 
      icon: Mail, 
      href: 'mailto:ewb@utk.edu', 
      label: 'Email',
      color: 'hover:text-blue-500'
    },
    { 
      icon: Globe, 
      href: 'https://www.ewb-usa.org/', 
      label: 'EWB National',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-utk-orange to-utk-orange-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">EWB</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Engineers Without Borders</h3>
                <p className="text-utk-orange font-medium">UTK Chapter</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Empowering communities through sustainable engineering solutions. 
              Join us in creating a more equitable and sustainable world through 
              engineering innovation and community partnership.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:bg-gray-700`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-utk-orange transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-4 text-white">Resources</h4>
            <nav className="space-y-3">
              {resources.map((resource, index) => (
                <motion.a
                  key={resource.name}
                  href={resource.href}
                  target={resource.external ? '_blank' : '_self'}
                  rel={resource.external ? 'noopener noreferrer' : ''}
                  className="flex items-center text-gray-300 hover:text-utk-orange transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span>{resource.name}</span>
                  {resource.external && (
                    <ExternalLink className="ml-1" size={14} />
                  )}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-gray-400 text-sm">
              <span>&copy; 2025 Engineers Without Borders - University of Tennessee Knoxville. All rights reserved.</span>
            </div>
            
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="mx-1"
              >
                <Heart className="text-red-500" size={16} fill="currentColor" />
              </motion.div>
              <span>by UTK students</span>
            </div>
          </div>
        </motion.div>

        {/* Meeting Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-utk-orange to-utk-orange-dark rounded-t-2xl -mb-6 p-4 text-center"
        >
          <p className="text-white font-medium">
            🏛️ Weekly Meetings: Tuesdays 7:00 PM | Engineering Building Room 205 | New Members Welcome!
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
