import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Simplified SplitText implementation without GSAP SplitText dependency
const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);
  const animationCompletedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || !text) return;

    const el = ref.current;
    animationCompletedRef.current = false;

    // Clear any existing content
    el.innerHTML = '';

    // Create split elements based on type
    let elements = [];
    if (splitType === "chars") {
      elements = text.split('').map((char, i) => ({
        char: char === ' ' ? '&nbsp;' : char,
        index: i
      }));
    } else if (splitType === "words") {
      elements = text.split(' ').map((word, i) => ({
        char: word,
        index: i
      }));
    }

    // Create DOM elements
    elements.forEach(({ char, index }) => {
      const span = document.createElement('span');
      span.innerHTML = char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = `translateY(${from.y || 40}px)`;
      el.appendChild(span);
    });

    const targets = el.children;

    // Setup ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: `top ${(1 - threshold) * 100}%`,
        toggleActions: "play none none none",
        once: true,
      },
      onComplete: () => {
        animationCompletedRef.current = true;
        onLetterAnimationComplete?.();
      },
    });

    // Animate elements
    tl.to(targets, {
      opacity: to.opacity || 1,
      y: to.y || 0,
      duration,
      ease,
      stagger: delay / 1000,
    });

    return () => {
      tl.kill();
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
        wordWrap: "break-word",
      }}
    />
  );
};

export default SplitText;
