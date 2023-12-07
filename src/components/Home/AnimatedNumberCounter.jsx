// AnimatedNumberCounter.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';

const AnimatedNumberCounter = ({ value, duration = 2000, easing = 'linear' }) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const animatedRef = useRef();

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: isVisible ? animatedValue : 0 },
    config: { duration, easing: config[easing] },
    onRest: () => {
      // Animation is complete, you can perform additional actions here if needed
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    observer.observe(animatedRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      setAnimatedValue(value);
    }
  }, [isVisible, value]);

  return <animated.span ref={animatedRef}>{number.interpolate((val) => Math.floor(val))}</animated.span>;
};

export default AnimatedNumberCounter;
