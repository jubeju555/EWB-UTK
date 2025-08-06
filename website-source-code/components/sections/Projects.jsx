import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, ExternalLink, Clock, CheckCircle } from 'lucide-react';
import SplitText from '../animations/SplitText';
import GlitchText from '../animations/GlitchText';

const Projects = () => {
  const currentProjects = [
    {
      title: "Clean Water Initiative - Rwanda",
      location: "Kigali Province, Rwanda",
      status: "Active",
      timeline: "2024-2025",
      team: "8 students",
      description: "Designing and implementing a sustainable water purification system for a rural community of 500+ residents.",
      image: "/api/placeholder/400/250",
      tags: ["Water Systems", "Community Health", "Sustainability"],
      progress: 65
    },
    {
      title: "Solar Energy Project - Tennessee",
      location: "Appalachian Region, TN",
      status: "Planning", 
      timeline: "2025",
      team: "6 students",
      description: "Developing solar power solutions for off-grid communities in rural Tennessee.",
      image: "/api/placeholder/400/250",
      tags: ["Renewable Energy", "Rural Development", "Local Impact"],
      progress: 25
    }
  ];

  const completedProjects = [
    {
      title: "Bridge Construction - Guatemala",
      location: "San Miguel, Guatemala",
      completed: "2023",
      team: "12 students",
      description: "Built a pedestrian bridge connecting two communities, improving access to education and healthcare.",
      impact: "500+ daily users",
      image: "/api/placeholder/400/250",
      tags: ["Infrastructure", "Transportation", "Community Access"]
    },
    {
      title: "Water Well Restoration - Kenya",
      location: "Machakos County, Kenya", 
      completed: "2022",
      team: "10 students",
      description: "Restored and upgraded existing water wells with solar-powered pumping systems.",
      impact: "1,200 people served",
      image: "/api/placeholder/400/250",
      tags: ["Water Access", "Solar Technology", "Community Health"]
    },
    {
      title: "School Construction - Honduras",
      location: "La Esperanza, Honduras",
      completed: "2021",
      team: "15 students",
      description: "Designed and built a two-classroom school building with sustainable materials.",
      impact: "150 students enrolled",
      image: "/api/placeholder/400/250",
      tags: ["Education", "Sustainable Building", "Youth Development"]
    }
  ];

  const projectAreas = [
    { name: "Water & Sanitation", count: 8, color: "bg-blue-500" },
    { name: "Energy Systems", count: 5, color: "bg-yellow-500" },
    { name: "Infrastructure", count: 6, color: "bg-green-500" },
    { name: "Education", count: 4, color: "bg-purple-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  return (
    <section id="projects" className="section-padding bg-gray-50">
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
              text="Our Projects"
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
            From rural communities to urban centers, our projects span the globe, 
            creating lasting impact through sustainable engineering solutions.
          </motion.p>
        </div>

        {/* Project Areas Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Focus Areas</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {projectAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-12 h-12 ${area.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">{area.count}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{area.name}</h4>
                <p className="text-sm text-gray-600">Projects</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Projects */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <GlitchText
              enableOnHover={true}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              speed={0.8}
            >
              Current Projects
            </GlitchText>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 text-lg font-medium">Project Image</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-utk-orange transition-colors">
                    {project.title}
                  </h4>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{project.timeline}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Users size={16} className="mr-2" />
                    <span className="text-sm">{project.team}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm text-gray-600">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-utk-orange to-utk-orange-dark h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Completed Projects */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Completed Projects</h3>
            <p className="text-lg text-gray-600">Celebrating our successful implementations and lasting impact</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {completedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Project Image</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-green-500 mr-2" size={20} />
                    <span className="text-sm font-medium text-green-600">Completed {project.completed}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-utk-orange transition-colors">
                    {project.title}
                  </h4>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={14} className="mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-3 leading-relaxed">{project.description}</p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <p className="text-green-800 text-sm font-medium">Impact: {project.impact}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-utk-orange to-utk-orange-dark rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to Get Involved?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Join us in creating sustainable solutions that make a real difference in communities around the world.
            </p>
            <button className="bg-white text-utk-orange hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Learn More About Joining
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
