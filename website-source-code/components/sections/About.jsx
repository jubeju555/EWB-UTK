import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Lightbulb, Heart, Target, Zap } from 'lucide-react';
import SplitText from '../animations/SplitText';
import CircularText from '../animations/CircularText';

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating sustainable solutions that address real-world challenges across communities worldwide."
    },
    {
      icon: Users,
      title: "Community Partnership",
      description: "Working hand-in-hand with local communities to understand their needs and co-create solutions."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Applying cutting-edge engineering principles and creative problem-solving to develop effective solutions."
    },
    {
      icon: Heart,
      title: "Social Responsibility",
      description: "Committed to ethical engineering practices that prioritize human dignity and environmental stewardship."
    },
    {
      icon: Target,
      title: "Focused Action",
      description: "Targeting critical infrastructure needs including clean water, renewable energy, and sustainable sanitation."
    },
    {
      icon: Zap,
      title: "Student Leadership",
      description: "Empowering the next generation of engineers to become leaders in sustainable development."
    }
  ];

  const stats = [
    { number: "50+", label: "Active Members", delay: 0.1 },
    { number: "12", label: "Projects Completed", delay: 0.2 },
    { number: "8", label: "Countries Impacted", delay: 0.3 },
    { number: "5000+", label: "Lives Touched", delay: 0.4 }
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

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-50">
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
              text="About Our Chapter"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              delay={30}
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
            We are a passionate group of engineering students at the University of Tennessee Knoxville, 
            dedicated to using our technical skills to address the world's most pressing challenges.
          </motion.p>
        </div>

        {/* Mission Statement with Circular Text */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Engineers Without Borders-USA partners with communities to improve their quality of life 
                through sustainable engineering projects, while creating transformative experiences and 
                responsible leaders.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our UTK chapter focuses on both international and domestic projects, ensuring that we're 
                making a meaningful impact both locally and globally. We believe that engineering is not 
                just about technical solutions, but about understanding people, culture, and sustainability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <CircularText
                  text="ENGINEERS*WITHOUT*BORDERS*UTK*"
                  className="text-utk-orange"
                  spinDuration={25}
                  onHover="speedUp"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-utk-orange to-utk-orange-dark rounded-full flex items-center justify-center">
                    <Globe className="text-white" size={32} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="glass-card p-6 hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-utk-orange to-utk-orange-dark rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">{value.title}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-utk-orange to-utk-orange-dark rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Impact</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: stat.delay }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
