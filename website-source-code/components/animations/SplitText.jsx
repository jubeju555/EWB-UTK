// SplitText Animation Component - React Bits Inspired
// Creates character or word-level animations that trigger on scroll
// Uses GSAP for smooth animations and ScrollTrigger for viewport detection

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin for scroll-triggered animations
gsap.registerPlugin(ScrollTrigger);

/**
 * SplitText Component - Animates text by splitting into individual characters or words
 * 
 * @param {string} text - The text content to animate
 * @param {string} className - Additional CSS classes
 * @param {number} delay - Stagger delay between each character/word (ms)
 * @param {number} duration - Animation duration for each element (seconds)
 * @param {string} ease - GSAP easing function
 * @param {string} splitType - Split by "chars" or "words"
 * @param {object} from - Initial state (opacity, y, x, scale, etc.)
 * @param {object} to - Final state (opacity, y, x, scale, etc.)
 * @param {number} threshold - Percentage of element visible before animation triggers
 * @param {string} rootMargin - ScrollTrigger root margin
 * @param {string} textAlign - Text alignment
 * @param {function} onLetterAnimationComplete - Callback when animation completes
 */
const SplitText = ({
  text,
  className = "",
  delay = 100,                    // Stagger delay in milliseconds
  duration = 0.6,                 // Animation duration per element
  ease = "power3.out",            // GSAP easing for smooth motion
  splitType = "chars",            // Split by characters or words
  from = { opacity: 0, y: 40 },   // Starting animation state
  to = { opacity: 1, y: 0 },      // Ending animation state
  threshold = 0.1,                // Trigger when 10% visible
  rootMargin = "-100px",          // Margin for trigger detection
  textAlign = "center",           // Text alignment
  onLetterAnimationComplete,      // Completion callback
}) => {
  const ref = useRef(null);                    // Reference to DOM element
  const animationCompletedRef = useRef(false); // Track animation state

  useEffect(() => {
    // Guard clauses for SSR and missing dependencies
    if (typeof window === "undefined" || !ref.current || !text) return;

    const el = ref.current;
    animationCompletedRef.current = false;

    // Clear any existing content to prevent duplicate animations
    el.innerHTML = '';

    // Split text into animatable elements based on type
    let elements = [];
    if (splitType === "chars") {
      // Split into individual characters, preserve spaces
      elements = text.split('').map((char, i) => ({
        char: char === ' ' ? '&nbsp;' : char, // Use non-breaking space for layout
        index: i
      }));
    } else if (splitType === "words") {
      // Split into words
      elements = text.split(' ').map((word, i) => ({
        char: word,
        index: i
      }));
    }

    // Create DOM elements for each character/word
    elements.forEach(({ char, index }) => {
      const span = document.createElement('span');
      span.innerHTML = char;
      span.style.display = 'inline-block';      // Required for transforms
      span.style.opacity = '0';                 // Start invisible
      span.style.transform = `translateY(${from.y || 40}px)`; // Start position
      el.appendChild(span);
    });

    const targets = el.children; // Get all created span elements

    // Create GSAP timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,                           // Element to watch
        start: `top ${(1 - threshold) * 100}%`, // When to start animation
        toggleActions: "play none none none",   // Play once on enter
        once: true,                            // Only animate once
      },
      onComplete: () => {
        // Animation completed callback
        animationCompletedRef.current = true;
        onLetterAnimationComplete?.();
      },
    });

    // Animate all elements with stagger effect
    tl.to(targets, {
      opacity: to.opacity || 1,    // Fade in
      y: to.y || 0,               // Move to final position
      duration,                   // Animation duration
      ease,                       // Easing function
      stagger: delay / 1000,      // Stagger delay between elements
    });

    // Cleanup function - important for preventing memory leaks
    return () => {
      tl.kill(); // Kill GSAP timeline
      
      // Remove ScrollTrigger instances for this element
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [text, delay, duration, ease, splitType, from, to, threshold, onLetterAnimationComplete]);

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
      style={{
        textAlign,
        wordWrap: "break-word", // Handle long text gracefully
      }}
    />
  );
};

export default SplitText;
