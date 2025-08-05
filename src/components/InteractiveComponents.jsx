import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const InteractiveTabs = ({ tabs, className = "" }) => {
  const [activeTab, setActiveTab] = useState(0)

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Headers */}
      <div className="flex flex-wrap gap-2 mb-6 bg-white/50 backdrop-blur-sm p-2 rounded-xl border border-white/30">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 min-w-0 px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
              activeTab === index
                ? 'bg-ewb-blue text-white shadow-lg'
                : 'text-gray-600 hover:text-ewb-blue hover:bg-white/50'
            }`}
          >
            <span className="block truncate">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/30"
          >
            {tabs[activeTab].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

const InteractiveCard = ({ 
  children, 
  hover = true, 
  glow = false, 
  className = "",
  onClick = null 
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={`
        bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl p-6 
        transition-all duration-300 hover:bg-white/90 hover:shadow-card-hover
        ${glow ? 'hover:shadow-glow-blue' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}

const FloatingActionButton = ({ 
  icon, 
  label, 
  onClick, 
  className = "",
  variant = "primary" 
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const variants = {
    primary: "bg-utk-orange hover:bg-utk-orange-dark text-white shadow-glow-orange",
    secondary: "bg-ewb-blue hover:bg-ewb-blue-dark text-white shadow-glow-blue",
    ghost: "bg-white/80 hover:bg-white text-gray-700 border border-white/30"
  }

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`
        fixed bottom-6 right-6 z-40 flex items-center gap-3 px-4 py-3 rounded-full
        font-semibold transition-all duration-300 backdrop-blur-sm
        ${variants[variant]} ${className}
      `}
    >
      <span className="text-lg">{icon}</span>
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden whitespace-nowrap text-sm"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

const AnimatedCounter = ({ value, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  React.useEffect(() => {
    if (!hasStarted) return

    const increment = value / (duration * 60) // 60fps
    const timer = setInterval(() => {
      setCount(prev => {
        const next = prev + increment
        if (next >= value) {
          clearInterval(timer)
          return value
        }
        return next
      })
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [hasStarted, value, duration])

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    onChange: (inView) => {
      if (inView && !hasStarted) {
        setHasStarted(true)
      }
    }
  })

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-ewb-blue">
      {Math.floor(count)}{suffix}
    </div>
  )
}

const GlowingBadge = ({ children, variant = "orange", pulse = false }) => {
  const variants = {
    orange: "bg-utk-orange text-white shadow-glow-orange",
    blue: "bg-ewb-blue text-white shadow-glow-blue",
    success: "bg-green-500 text-white shadow-lg"
  }

  return (
    <span className={`
      inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold
      ${variants[variant]}
      ${pulse ? 'animate-pulse-glow' : ''}
    `}>
      {children}
    </span>
  )
}

const ProgressRing = ({ progress, size = 120, strokeWidth = 8, color = "#0077C8" }) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(229, 231, 235, 0.3)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute text-lg font-bold text-gray-700">
        {Math.round(progress)}%
      </div>
    </div>
  )
}

export {
  InteractiveTabs,
  InteractiveCard,
  FloatingActionButton,
  AnimatedCounter,
  GlowingBadge,
  ProgressRing
}
