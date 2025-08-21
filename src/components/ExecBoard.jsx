import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ExecBoard = () => {
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

  // Executive board members data
  const execMembers = [
    {
      name: "Sam Exum",
      title: "Chapter President",
      image: "/images/sam.jpg", // Placeholder - would be actual image
      bio: "Leading the chapter's vision and strategy for community impact.",
      email: "sexum@utk.edu",
      linkedin: "#"
    },
    {
      name: "Bryce Jardret",
      title: "Vice President",
      image: "/images/sarah.jpg",
      bio: "Supporting operations and member engagement initiatives.",
      email: "mjardret@vols.utk.edu",
      linkedin: "#"
    },
    {
      name: "Judah Benjamin",
      title: "Treasurer",
      image: "/images/treasurer.jpg",
      bio: "Managing chapter finances and grant applications.",
      email: "jbenjam7@utk.edu",
      linkedin: "#"
    },
    {
      name: "Lauren King",
      title: "International Lead",
      image: "/images/marcus.jpg",
      bio: "Coordinating international partnerships and community projects.",
      email: "ysn618@vols.utk.edu",
      linkedin: "#"
    },
    {
      name: "Justin Ray",
      title: "Project Lead",
      image: "/images/emily.jpg",
      bio: "Leading technical project development and implementation.",
      email: "jray44@vols.utk.edu",
      linkedin: "#"
    }
  ]

  
  const MemberCard = ({ member, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className="card-interactive group"
    >
      {/* Member Image */}
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <div className="w-full h-64 bg-gradient-to-br from-blue-600/20 to-orange-500/20 flex items-center justify-center">
          {/* Placeholder avatar until real photos are available */}
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center"
               style={{ background: 'linear-gradient(135deg, #0077C8 0%, #004488 100%)' }}>
            <span className="text-white text-2xl font-bold">
              {member.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex gap-2">
              <a
                href={`mailto:${member.email}`}
                className="flex-1 bg-white/20 backdrop-blur-sm text-white text-center py-2 px-3 rounded-lg text-sm hover:bg-white/30 transition-colors"
              >
                📧 Email
              </a>
              <a
                href={member.linkedin}
                className="flex-1 bg-white/20 backdrop-blur-sm text-white text-center py-2 px-3 rounded-lg text-sm hover:bg-white/30 transition-colors"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Member Info */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {member.name}
        </h3>
        <p className="text-blue-600 font-semibold mb-3">
          {member.title}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {member.bio}
        </p>
      </div>

      {/* Contact buttons (visible on larger screens) */}
      <div className="hidden md:flex mt-4 gap-2">
        <a
          href={`mailto:${member.email}`}
          className="flex-1 bg-blue-600/10 text-blue-600 text-center py-2 px-3 rounded-lg text-sm hover:bg-blue-600 hover:text-white transition-colors"
        >
          Contact
        </a>
        <a
          href={member.linkedin}
          className="flex-1 bg-orange-500/10 text-orange-500 text-center py-2 px-3 rounded-lg text-sm hover:bg-orange-500 hover:text-white transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </motion.div>
  )

  return (
    <section id="exec-board" className="pt-20 pb-16 md:pt-24 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 to-white relative overflow-hidden">
      {/* Navigation Back Button */}
      <div className="max-w-7xl mx-auto relative z-10 mb-8">
        <motion.button
          onClick={() => {
            // Clear the hash and scroll to top
            window.location.hash = '';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          whileHover={{ x: -4 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Main Page
        </motion.button>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #0077C8 2px, transparent 2px), radial-gradient(circle at 75px 75px, #ff6b35 2px, transparent 2px)`,
          backgroundSize: '100px 100px'
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
            Executive <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Board</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Meet the dedicated student leaders driving our chapter's mission to create 
            sustainable engineering solutions for communities worldwide.
          </p>
        </motion.div>

        {/* Executive Board Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {execMembers.map((member, index) => (
            <MemberCard key={index} member={member} index={index} />
          ))}
        </motion.div>

        {/* Join Leadership CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-6">
            Interested in Leadership?
          </h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            We're always looking for passionate students to take on leadership roles. 
            Leadership positions become available each semester as our chapter grows.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="mailto:ewb@utk.edu?subject=Leadership Interest"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Express Interest
            </motion.a>
            <motion.button
              onClick={() => {
                window.location.hash = '';
                setTimeout(() => {
                  const element = document.getElementById('get-involved');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Chapter Structure */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/30"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Chapter Structure & Committees
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-blue-500/5 border border-blue-500/20">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="font-semibold text-gray-900 mb-2">Project Teams</h4>
              <p className="text-sm text-gray-600">Technical project development and implementation</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
              <div className="text-3xl mb-4">💰</div>
              <h4 className="font-semibold text-gray-900 mb-2">Fundraising</h4>
              <p className="text-sm text-gray-600">Grant writing and fundraising initiatives</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-green-500/10 border border-green-500/20">
              <div className="text-3xl mb-4">📢</div>
              <h4 className="font-semibold text-gray-900 mb-2">Outreach</h4>
              <p className="text-sm text-gray-600">Community engagement and partnerships</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ExecBoard
