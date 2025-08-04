import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const DecryptedText = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const getRandomChar = () => {
    if (useOriginalCharsOnly) {
      const originalChars = Array.from(new Set(text.split('')));
      return originalChars[Math.floor(Math.random() * originalChars.length)];
    }
    return characters[Math.floor(Math.random() * characters.length)];
  };

  const scrambleText = () => {
    if (animationRef.current) return;

    const iterations = Array(text.length).fill(0);
    const finalText = text;
    let completed = 0;

    const updateText = () => {
      let newText = '';
      
      for (let i = 0; i < finalText.length; i++) {
        if (finalText[i] === ' ') {
          newText += ' ';
          continue;
        }

        if (iterations[i] >= maxIterations) {
          newText += finalText[i];
        } else {
          newText += getRandomChar();
          iterations[i]++;
        }
      }

      setDisplayedText(newText);

      // Check if we should reveal characters
      if (sequential) {
        const revealIndex = revealDirection === 'start' 
          ? Math.floor((Date.now() % (speed * finalText.length)) / speed)
          : revealDirection === 'end'
          ? finalText.length - 1 - Math.floor((Date.now() % (speed * finalText.length)) / speed)
          : Math.floor(Math.random() * finalText.length);

        if (revealIndex < finalText.length && iterations[revealIndex] < maxIterations) {
          iterations[revealIndex] = maxIterations;
        }
      }

      completed = iterations.filter(iter => iter >= maxIterations).length;

      if (completed < finalText.length) {
        animationRef.current = setTimeout(updateText, speed);
      } else {
        animationRef.current = null;
        setDisplayedText(finalText);
      }
    };

    updateText();
  };

  const startAnimation = () => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }
    setDisplayedText(text.split('').map(char => char === ' ' ? ' ' : getRandomChar()).join(''));
    scrambleText();
  };

  // Handle hover animation
  useEffect(() => {
    if (animateOn === 'hover' && isHovering && !animationRef.current) {
      startAnimation();
    }
  }, [isHovering, animateOn]);

  // Handle view animation
  useEffect(() => {
    if (animateOn !== 'view' || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startAnimation();
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animateOn, hasAnimated]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  const hoverProps = animateOn === 'hover' ? {
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false),
  } : {};

  return (
    <motion.span 
      className={parentClassName} 
      ref={containerRef} 
      {...hoverProps} 
      {...props}
    >
      <span className={`${className} ${encryptedClassName}`}>
        {displayedText}
      </span>
    </motion.span>
  );
};

export default DecryptedText;
