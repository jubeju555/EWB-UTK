import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  Calendar, 
  DollarSign, 
  Heart, 
  GraduationCap, 
  Wrench,
  Users,
  Globe,
  ArrowRight
} from 'lucide-react';
import SplitText from '../animations/SplitText';

const GetInvolved = () => {
  const ways = [
    {
      icon: UserPlus,
      title: "Become a Member",
      description: "Join our passionate team of engineering students committed to making a global impact.",
      benefits: ["Hands-on project experience", "Professional development", "Leadership opportunities", "Global perspective"],
      action: "Apply Now",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: DollarSign,
      title: "Sponsor Our Work",
      description: "Support our projects financially and help us bring sustainable solutions to communities in need.",
      benefits: ["Tax-deductible donations", "Project updates", "Recognition opportunities", "Corporate partnership"],
      action: "Donate Today",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Wrench,
      title: "Volunteer Your Skills",
      description: "Share your expertise with our team and help mentor the next generation of engineers.",
      benefits: ["Skill sharing", "Mentorship opportunities", "Community impact", "Professional networking"],
      action: "Get Started",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Community Partner",
      description: "Connect us with communities that could benefit from our engineering solutions.",
      benefits: ["Community connections", "Project collaboration", "Local expertise", "Cultural exchange"],
      action: "Partner With Us",
      color: "from-red-500 to-red-600"
    }
  ];

  const membershipRequirements = [
    {
      title: "Academic Standing",
      description: "Must be enrolled as a student at UTK with good academic standing",
      icon: GraduationCap
    },
    {
      title: "Commitment",
      description: "Attend weekly meetings and participate actively in project work",
      icon: Calendar
    },
    {
      title: "Passion",
      description: "Genuine interest in sustainable development and social impact",
      icon: Heart
    },
    {
      title: "Collaboration",
      description: "Ability to work effectively in diverse, multicultural teams",
      icon: Users
    }
  ];

  const events = [
    {
      title: "Info Session",
      date: "Every Tuesday",
      time: "7:00 PM",
      location: "Engineering Building Room 205",
      description: "Learn about our current projects and how to get involved"
    },
    {
      title: "Project Workshops",
      date: "Saturdays",
      time: "10:00 AM - 2:00 PM",
      location: "Maker Space",
      description: "Hands-on technical work sessions for current members"
    },
    {
      title: "Fundraising Events",
      date: "Monthly",
      time: "Various",
      location: "Campus & Community",
      description: "Help us raise funds for our international projects"
    },
    {
      title: "Guest Speakers",
      date: "Monthly",
      time: "7:00 PM",
      location: "Various Locations",
      description: "Learn from industry professionals and EWB alumni"
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

  return (
    <section id="get-involved" className="section-padding bg-white">
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
              text="Get Involved"
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
            There are many ways to join our mission of creating sustainable engineering solutions 
            for communities around the world. Find the perfect way to make your impact.
          </motion.p>
        </div>

        {/* Ways to Get Involved */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {ways.map((way, index) => {
            const IconComponent = way.icon;
            return (
              <motion.div
                key={way.title}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
                whileHover={{ y: -5 }}
              >
                <div className={`h-2 bg-gradient-to-r ${way.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${way.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{way.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{way.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {way.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-utk-orange rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${way.color} text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105`}>
                    {way.action}
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Membership Requirements */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Membership Requirements</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We welcome all UTK students who are passionate about engineering for social good. 
              Here's what we look for in our members:
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {membershipRequirements.map((requirement, index) => {
              const IconComponent = requirement.icon;
              return (
                <motion.div
                  key={requirement.title}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-utk-orange to-utk-orange-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">{requirement.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{requirement.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Events & Meetings */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Events & Meetings</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us at our regular events to learn more about our work and get involved in our community.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-utk-orange hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-semibold text-gray-900">{event.title}</h4>
                  <Calendar className="text-utk-orange" size={24} />
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <span className="font-medium mr-2">When:</span>
                    <span>{event.date} at {event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="font-medium mr-2">Where:</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-utk-orange to-utk-orange-dark rounded-2xl p-8 md:p-12 text-white">
            <Globe className="mx-auto mb-6" size={48} />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Join a community of passionate engineers working to create sustainable solutions 
              for some of the world's most pressing challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-utk-orange hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Contact Us Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-utk-orange font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolved;
