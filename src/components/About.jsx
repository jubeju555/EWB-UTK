import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { InteractiveCard, AnimatedCounter, ProgressRing } from './InteractiveComponents'

const About = () => {
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

  const cards = [
    {
      icon: "🌍",
      title: "Global Impact",
      description: "Working with communities worldwide to address critical infrastructure needs and create lasting positive change through collaborative engineering solutions."
    },
    {
      icon: "🤝",
      title: "Community Partnership",
      description: "Building meaningful relationships with local communities to understand their unique challenges and develop culturally appropriate, sustainable solutions."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Applying creative engineering-driven approaches to solve complex problems while fostering educational opportunities for UTK students."
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #e87722 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Mission</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Engineers Without Borders is a global movement of engineers, scientists, and other professionals 
            working to address the world's greatest humanitarian challenges. Our UTK chapter is building a 
            community of passionate students committed to creating sustainable impact through engineering excellence.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {cards.map((card, index) => (
            <InteractiveCard
              key={index}
              hover={true}
              glow={true}
              className="bg-white group text-center"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-6xl mb-6 group-hover:animate-bounce-subtle"
              >
                {card.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {card.description}
              </p>
            </InteractiveCard>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Make a Difference?
          </h3>
          <motion.button
            onClick={() => {
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
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved Today
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
