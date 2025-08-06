import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, MapPin, Phone, ExternalLink, Send } from 'lucide-react';
import SplitText from '../animations/SplitText';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ewb@utk.edu",
      link: "mailto:ewb@utk.edu",
      description: "Send us a message anytime"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@ewb_utk",
      link: "https://instagram.com/ewb_utk",
      description: "Follow our journey"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "University of Tennessee Knoxville",
      link: "https://maps.google.com/?q=University+of+Tennessee+Knoxville",
      description: "Engineering Building"
    },
    {
      icon: Phone,
      title: "Meeting Info",
      value: "Tuesdays 7:00 PM",
      link: null,
      description: "Room 205, Engineering Building"
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "President",
      major: "Civil Engineering",
      year: "Senior",
      email: "president@ewb-utk.org",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Marcus Chen",
      role: "Vice President",
      major: "Environmental Engineering",
      year: "Junior",
      email: "vp@ewb-utk.org",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager",
      major: "Mechanical Engineering",
      year: "Senior",
      email: "projects@ewb-utk.org",
      image: "/api/placeholder/150/150"
    },
    {
      name: "David Kim",
      role: "Treasurer",
      major: "Industrial Engineering",
      year: "Sophomore",
      email: "treasurer@ewb-utk.org",
      image: "/api/placeholder/150/150"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SplitText
              text="Get In Touch"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              delay={40}
              duration={0.6}
              splitType="words"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Have questions about our projects? Want to get involved? 
            We'd love to hear from you and welcome new members to our community.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-utk-orange to-utk-orange-dark rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-utk-orange font-medium mb-1">{info.value}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                    {info.link && (
                      <ExternalLink className="text-gray-400 hover:text-utk-orange transition-colors" size={16} />
                    )}
                  </motion.div>
                );

                return info.link ? (
                  <a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="block hover:scale-105 transition-transform duration-300"
                  >
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>

            {/* Map or Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-white rounded-xl shadow-sm"
            >
              <h4 className="font-semibold text-gray-900 mb-4">Find Us On Campus</h4>
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-medium">Campus Map</span>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                We meet every Tuesday at 7:00 PM in Room 205 of the Engineering Building. 
                New members are always welcome!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-utk-orange focus:border-transparent transition-colors duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-utk-orange focus:border-transparent transition-colors duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-utk-orange focus:border-transparent transition-colors duration-300"
                  placeholder="john.doe@vols.utk.edu"
                />
              </div>

              <div>
                <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-2">
                  Major (if student)
                </label>
                <input
                  type="text"
                  id="major"
                  name="major"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-utk-orange focus:border-transparent transition-colors duration-300"
                  placeholder="Engineering, Business, etc."
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                  What are you interested in?
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-utk-orange focus:border-transparent transition-colors duration-300"
                >
                  <option value="">Select an option</option>
                  <option value="joining">Joining as a member</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="sponsoring">Sponsoring our projects</option>
                  <option value="partnering">Community partnership</option>
                  <option value="speaking">Guest speaking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-utk-orange focus:border-transparent transition-colors duration-300 resize-vertical"
                  placeholder="Tell us more about your interest in Engineers Without Borders..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-utk-orange to-utk-orange-dark text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="ml-2" size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Leadership Team */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated students leading our chapter and driving our mission forward.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-medium">Photo</span>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-utk-orange font-medium mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm mb-1">{member.major}</p>
                <p className="text-gray-500 text-sm mb-4">{member.year}</p>
                
                <motion.a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center text-utk-orange hover:text-utk-orange-dark transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail size={16} className="mr-2" />
                  <span className="text-sm">Contact</span>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
