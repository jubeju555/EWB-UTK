import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingText = ({
  texts = ["Engineering", "Innovation", "Impact"],
  className = "",
  mainClassName = "",
  splitLevelClassName = "",
  elementLevelClassName = "",
  rotationInterval = 3000,
  staggerDuration = 0.05,
  staggerFrom = "first",
  auto = true,
  loop = true,
  splitBy = "characters",
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-100%" },
  transition = { type: "spring", damping: 30, stiffness: 400 },
  onNext,
  ...rest
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const intervalRef = useRef(null);

  const splitIntoCharacters = (text) => {
    return Array.from(text);
  };

  const elements = (() => {
    const currentText = texts[currentTextIndex];
    if (splitBy === "characters") {
      const words = currentText.split(" ");
      return words.map((word, i) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== words.length - 1,
      }));
    }
    if (splitBy === "words") {
      return currentText.split(" ").map((word, i, arr) => ({
        characters: [word],
        needsSpace: i !== arr.length - 1,
      }));
    }
    return currentText.split(splitBy).map((part, i, arr) => ({
      characters: [part],
      needsSpace: i !== arr.length - 1,
    }));
  })();

  const getStaggerDelay = (index, totalChars) => {
    if (staggerFrom === "first") return index * staggerDuration;
    if (staggerFrom === "last") return (totalChars - 1 - index) * staggerDuration;
    if (staggerFrom === "center") {
      const center = Math.floor(totalChars / 2);
      return Math.abs(center - index) * staggerDuration;
    }
    return index * staggerDuration;
  };

  const next = () => {
    const nextIndex = currentTextIndex + 1;
    if (nextIndex >= texts.length) {
      if (loop) {
        setCurrentTextIndex(0);
      }
    } else {
      setCurrentTextIndex(nextIndex);
    }
    onNext?.(nextIndex < texts.length ? nextIndex : 0);
  };

  useEffect(() => {
    if (!auto) return;

    intervalRef.current = setInterval(next, rotationInterval);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [next, rotationInterval, auto]);

  return (
    <motion.span
      className={`inline-flex flex-wrap whitespace-pre-wrap relative ${mainClassName}`}
      {...rest}
      layout
      transition={transition}
    >
      <span className="sr-only">{texts[currentTextIndex]}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentTextIndex}
          className={`inline-flex flex-wrap whitespace-pre-wrap relative ${splitLevelClassName}`}
          layout
          aria-hidden="true"
        >
          {elements.map((wordObj, wordIndex, array) => {
            const previousCharsCount = array
              .slice(0, wordIndex)
              .reduce((sum, word) => sum + word.characters.length, 0);
            
            return (
              <span key={wordIndex} className={`inline-flex ${splitLevelClassName}`}>
                {wordObj.characters.map((char, charIndex) => (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    className={`inline-block ${elementLevelClassName}`}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                      ...transition,
                      delay: getStaggerDelay(
                        previousCharsCount + charIndex,
                        elements.reduce((sum, word) => sum + word.characters.length, 0)
                      ),
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordObj.needsSpace && (
                  <motion.span
                    className={`inline-block ${elementLevelClassName}`}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                      ...transition,
                      delay: getStaggerDelay(
                        previousCharsCount + wordObj.characters.length,
                        elements.reduce((sum, word) => sum + word.characters.length, 0)
                      ),
                    }}
                  >
                    &nbsp;
                  </motion.span>
                )}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};

export default RotatingText;
