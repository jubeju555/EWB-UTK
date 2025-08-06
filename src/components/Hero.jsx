import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const scrollToAbout = () => {
    // Check if we're on the exec-board page
    if (window.location.hash === '#exec-board') {
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const scrollToGetInvolved = () => {
    // Check if we're on the exec-board page
    if (window.location.hash === '#exec-board') {
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById('get-involved');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-soft">
              <span className="w-2 h-2 bg-accent-orange rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-white">Building a Better World Through Engineering</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight">
              <span className="block text-white">Engineers</span>
              <span className="block bg-gradient-to-r from-primary-500 via-accent-orange to-accent-gold bg-clip-text text-transparent">
                Without Borders
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-neutral-300 mt-4">
                University of Tennessee
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed">
              Empowering communities worldwide through sustainable engineering solutions. 
              Join us in creating lasting impact through innovation, collaboration, and social responsibility.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8 py-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-orange">15+</div>
              <div className="text-sm text-neutral-400 uppercase tracking-wide">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-orange">3</div>
              <div className="text-sm text-neutral-400 uppercase tracking-wide">Projects Planned</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToGetInvolved}
              className="group relative inline-flex items-center px-8 py-4 bg-accent-orange hover:bg-accent-orange-light text-white font-semibold rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2">Join Our Chapter</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-orange to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </button>
            
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border-2 border-white/30 hover:border-white/50 shadow-soft hover:shadow-medium transition-all duration-300 backdrop-blur-sm"
            >
              <span className="mr-2">Learn More</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary-500/20 rounded-2xl rotate-45 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-accent-orange/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-accent-gold/20 rounded-xl rotate-12 animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  )
}

export default Hero
