import React, { useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { InteractiveTabs, InteractiveCard } from './InteractiveComponents'

// Lazy load calendar for better performance
const ChapterCalendar = React.lazy(() => import('./ChapterCalendar'))

const GetInvolved = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [email, setEmail] = useState('')
  const [interests, setInterests] = useState([])

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

  const opportunities = [
    {
      icon: "👥",
      title: "Project Teams",
      description: "Join technical teams working on water systems, renewable energy, structural design, and other engineering solutions.",
      commitments: ["Weekly team meetings", "Hands-on project work", "Technical skill development"]
    },
    {
      icon: "💰",
      title: "Fundraising",
      description: "Help secure funding for projects through grant writing, events, and community partnerships.",
      commitments: ["Grant research and writing", "Fundraising events", "Sponsor relationship management"]
    },
    {
      icon: "📢",
      title: "Outreach",
      description: "Spread awareness about EWB's mission through social media, presentations, and community engagement.",
      commitments: ["Social media management", "Campus presentations", "Community events"]
    }
  ]

  const interestOptions = [
    "Water & Sanitation Projects",
    "Renewable Energy Systems",
    "Structural Engineering",
    "Environmental Solutions",
    "Community Development",
    "Fundraising & Grants",
    "Marketing & Outreach",
    "Event Planning",
    "Leadership Roles"
  ]

  const handleInterestToggle = (interest) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = 'EWB-UTK Interest Form Submission'
    const body = `
Hi EWB-UTK Team,

I'm interested in getting involved with Engineers Without Borders at UTK!

Email: ${email}
Interests: ${interests.join(', ')}

I'd love to learn more about upcoming opportunities and how I can contribute to the chapter.

Best regards,
[Your Name]
    `.trim()

    const mailtoLink = `mailto:ewb@utk.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <section id="get-involved" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <g fill="currentColor" fillOpacity="0.4">
              <circle cx="7" cy="7" r="1"/>
              <circle cx="27" cy="7" r="1"/>
              <circle cx="47" cy="7" r="1"/>
              <circle cx="7" cy="27" r="1"/>
              <circle cx="27" cy="27" r="1"/>
              <circle cx="47" cy="27" r="1"/>
              <circle cx="7" cy="47" r="1"/>
              <circle cx="27" cy="47" r="1"/>
              <circle cx="47" cy="47" r="1"/>
            </g>
          </g>
        </svg>
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
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Get <span className="gradient-text">Involved</span>
          </h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Join a community of passionate students committed to using engineering for social good. 
            Whether you're a seasoned engineer or just getting started, there's a place for you in our chapter.
          </p>
        </motion.div>

        {/* Quick Info Cards */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div variants={itemVariants} className="card-glass text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-heading font-bold text-white mb-3">Contact</h3>
            <div className="space-y-2 text-gray-200">
              <p>
                <a href="mailto:ewb@utk.edu" className="hover:text-accent-orange transition-colors">
                  ewb@utk.edu
                </a>
              </p>
              <p>
                <a 
                  href="https://instagram.com/ewb_utk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent-orange transition-colors"
                >
                  @ewb_utk
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="card-glass text-center">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-heading font-bold text-white mb-3">Meetings</h3>
            <div className="space-y-2 text-gray-200">
              <p className="font-semibold">Tuesdays, 7:00 PM</p>
              <p>Engineering Building</p>
              <p>Room 205</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="card-glass text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-heading font-bold text-white mb-3">Open to All</h3>
            <div className="space-y-2 text-gray-200">
              <p>All majors welcome</p>
              <p>Any class level</p>
              <p>No experience required</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive Opportunities Tabs */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Ways to Get Involved
          </h3>
          
          <InteractiveTabs
            tabs={[
              {
                label: "Project Teams",
                content: (
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">👥</span>
                      <h4 className="text-2xl font-heading font-bold text-gray-900">Project Teams</h4>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Join technical teams working on water systems, renewable energy, structural design, and other engineering solutions.
                    </p>
                    <ul className="space-y-2">
                      {["Weekly team meetings", "Hands-on project work", "Technical skill development"].map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              },
              {
                label: "Fundraising",
                content: (
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">💰</span>
                      <h4 className="text-2xl font-heading font-bold text-gray-900">Fundraising</h4>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Help secure funding for projects through grant writing, events, and community partnerships.
                    </p>
                    <ul className="space-y-2">
                      {["Grant research and writing", "Fundraising events", "Sponsor relationship management"].map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-accent-orange rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              },
              {
                label: "Outreach",
                content: (
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">📢</span>
                      <h4 className="text-2xl font-heading font-bold text-gray-900">Outreach</h4>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Spread awareness about EWB's mission through social media, presentations, and community engagement.
                    </p>
                    <ul className="space-y-2">
                      {["Social media management", "Campus presentations", "Community events"].map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              }
            ]}
          />
        </motion.div>

        {/* Calendar Section */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <Suspense fallback={
            <div className="animate-pulse bg-primary-600 rounded-lg p-8">
              <div className="h-64 bg-gray-300 rounded mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          }>
            <ChapterCalendar />
          </Suspense>
        </motion.div>

        {/* Interest Form */}
        <motion.div
          variants={itemVariants}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-bold text-white mb-4">
              Express Your Interest
            </h3>
            <p className="text-gray-200">
              Let us know how you'd like to get involved and we'll reach out with more information!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                placeholder="your.email@utk.edu"
                required
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-4">
                Areas of Interest (select all that apply)
              </label>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {interestOptions.map((interest, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={interests.includes(interest)}
                      onChange={() => handleInterestToggle(interest)}
                      className="w-4 h-4 text-accent-orange bg-white/10 border-white/20 rounded focus:ring-accent-orange focus:ring-2"
                    />
                    <span className="text-gray-200 group-hover:text-white transition-colors text-sm">
                      {interest}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!email}
              >
                Send Interest Form
              </motion.button>
              <p className="text-sm text-gray-300 mt-4">
                This will open your email client with a pre-filled message
              </p>
            </div>
          </form>
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-heading font-bold text-white mb-6">
            Questions? Just Ask!
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="mailto:ewb@utk.edu"
              className="btn-secondary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Email Us
            </motion.a>
            <motion.a
              href="https://instagram.com/ewb_utk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent-orange transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Follow us on Instagram →
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GetInvolved
