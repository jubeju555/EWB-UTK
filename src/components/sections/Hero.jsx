import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SplitText from '../animations/SplitText';
import RotatingText from '../animations/RotatingText';
import DecryptedText from '../animations/DecryptedText';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border-2 border-utk-orange/30 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-24 h-24 bg-ewb-blue/20 rounded-lg"
          animate={{ rotate: -360, y: [-20, 20, -20] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-16 h-16 border border-ewb-green/40"
          animate={{ rotate: 180, x: [-10, 10, -10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-custom text-center z-10 px-6">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <SplitText
            text="Engineers Without Borders"
            className="hero-text text-white font-display font-bold mb-4"
            delay={50}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 60, rotateX: -90 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
          />
        </motion.div>

        {/* University Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-utk-orange font-semibold">
            University of Tennessee Knoxville
          </h2>
        </motion.div>

        {/* Rotating Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 flex items-center justify-center flex-wrap gap-2">
            <span className="font-light">Building</span>
            <RotatingText
              texts={[
                "Sustainable Solutions",
                "Community Connections", 
                "Global Impact",
                "Engineering Excellence",
                "Social Innovation"
              ]}
              mainClassName="bg-gradient-to-r from-utk-orange to-utk-orange-light text-transparent bg-clip-text font-bold px-2"
              rotationInterval={3000}
              staggerFrom="center"
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            />
            <span className="font-light">worldwide</span>
          </div>
        </motion.div>

        {/* Tagline with Decrypt Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mb-12"
        >
          <DecryptedText
            text="Empowering communities through sustainable engineering solutions"
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
            animateOn="view"
            speed={30}
            maxIterations={8}
          />
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button className="btn-primary text-lg">
            Join Our Mission
          </button>
          <button className="btn-secondary text-lg">
            Learn More
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
