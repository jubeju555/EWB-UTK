// Main App Component for EWB-UTK Website
// This is the root component that orchestrates all page sections and global functionality

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all page sections
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import GetInvolved from './components/sections/GetInvolved';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

// Loading Screen Component - Shows animated loading while app initializes
const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center"
        >
          <div className="text-center">
            {/* Spinning loader with UTK orange accent */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-gray-700 border-t-utk-orange rounded-full mx-auto mb-4"
            />
            
            {/* Loading text with staggered animations */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white text-xl font-semibold mb-2"
            >
              Engineers Without Borders
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-utk-orange"
            >
              UTK Chapter
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Scroll to Top Button - Appears after user scrolls down 300px
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    // Function to toggle button visibility based on scroll position
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-gradient-to-r from-utk-orange to-utk-orange-dark text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          {/* Up arrow icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Skip to Content Link - Accessibility feature for keyboard navigation
// Hidden by default, becomes visible when focused (Tab key)
const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="skip-to-content focus-visible"
    >
      Skip to main content
    </a>
  );
};

// Main App Component
function App() {
  // State to control loading screen visibility
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // Simulate loading time for initial animations and asset loading
    // This provides time for fonts, images, and animations to initialize
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* Loading screen overlay */}
      <LoadingScreen isLoading={isLoading} />
      
      {/* Accessibility: Skip to main content link */}
      <SkipToContent />
      
      {/* Main website content - fades in after loading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Fixed header navigation */}
        <Header />
        
        {/* Main content sections */}
        <main id="main-content">
          {/* Hero section with landing animation */}
          <section id="home">
            <Hero />
          </section>
          
          {/* About Us section */}
          <About />
          
          {/* Projects showcase */}
          <Projects />
          
          {/* Get Involved/Join Us section */}
          <GetInvolved />
          
          {/* Contact form and information */}
          <Contact />
        </main>
        
        {/* Footer with links and information */}
        <Footer />
        
        {/* Scroll to top button (appears on scroll) */}
        <ScrollToTop />
      </motion.div>
    </div>
  );
}

export default App;
