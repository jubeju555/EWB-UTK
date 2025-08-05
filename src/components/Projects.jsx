import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { InteractiveCard, GlowingBadge } from './InteractiveComponents'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const projects = [
    {
      icon: "🌎",
      title: "International Partnership",
      description: "Building relationships with underserved communities worldwide to identify critical infrastructure needs and develop sustainable engineering solutions.",
      status: "Partnership Development",
      focus: ["Water Systems", "Renewable Energy", "Sanitation Infrastructure"]
    },
    {
      icon: "🏠",
      title: "Local Community Initiative",
      description: "Collaborating with Tennessee and regional communities to address local engineering challenges while providing hands-on learning experiences.",
      status: "Community Outreach",
      focus: ["Accessibility Design", "Environmental Solutions", "Education Support"]
    },
    {
      icon: "🔬",
      title: "Research & Development",
      description: "Advancing technical capacity at UTK through research projects that support sustainable development and humanitarian engineering goals.",
      status: "Research Planning",
      focus: ["Appropriate Technology", "Sustainability Research", "Innovation Labs"]
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full translate-y-48 -translate-x-48"></div>

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Upcoming <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            As a growing chapter, we're in the exciting early stages of building partnerships 
            and developing our first impact projects. Join us in shaping the future of 
            engineering for social good at UTK.
          </p>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <InteractiveCard
              key={index}
              hover={true}
              glow={true}
              className="bg-white group relative overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <GlowingBadge variant={index === 0 ? "blue" : "orange"} pulse={index === 0}>
                  {project.status}
                </GlowingBadge>
              </div>

              <motion.div
                variants={itemVariants}
                className="text-center mb-6"
              >
                <motion.div 
                  className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {project.icon}
                </motion.div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
              </motion.div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Focus Areas:</h4>
                <div className="space-y-2">
                  {project.focus.map((area, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {area}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </InteractiveCard>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          variants={itemVariants}
          className="text-center p-8 md:p-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl border border-primary-500/20 shadow-2xl"
        >
          <h3 className="text-3xl font-heading font-bold text-white mb-6">
            Help Us Shape Our First Impact Project
          </h3>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            We're actively seeking partnerships with communities, faculty, and students 
            who share our vision of using engineering to create positive change. Your 
            involvement can help determine the direction of our inaugural projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="mailto:ewb@utk.edu?subject=Project Partnership Inquiry"
              className="btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Propose a Partnership
            </motion.a>
            <motion.button
              onClick={() => document.getElementById('get-involved').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Team
            </motion.button>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
            Our Development Timeline
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Fall 2024 - Chapter Foundation</h4>
                <p className="text-gray-700">Establishing organizational structure, recruiting founding members, and building university partnerships.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-accent-orange rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Spring 2025 - Community Engagement</h4>
                <p className="text-gray-700">Connecting with local and international communities to identify project opportunities and build sustainable partnerships.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-4 h-4 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Fall 2025 - First Project Launch</h4>
                <p className="text-gray-700">Implementing our inaugural engineering project based on community partnerships and student expertise.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
