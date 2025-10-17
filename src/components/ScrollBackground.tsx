import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollBackground: React.FC<ScrollBackgroundProps> = ({ children, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth the scroll signal with a spring to reduce jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  // Background color transitions
  const backgroundOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 0.1, 0.3, 0.5]);
  const backgroundScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 1.5]);
  
  // Parallax effects for different layers
  const parallaxLayer1 = useTransform(smoothProgress, [0, 1], [0, -100]);
  const parallaxLayer2 = useTransform(smoothProgress, [0, 1], [0, -50]);
  const parallaxLayer3 = useTransform(smoothProgress, [0, 1], [0, -25]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} style={{ willChange: 'transform' }}>
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-tertiary" />
      
      {/* Animated gradient layers */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: parallaxLayer1, scale: backgroundScale, willChange: 'transform, opacity' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-brand-teal/10 via-brand-cyan/5 to-brand-teal/10" />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: parallaxLayer2, scale: backgroundScale, willChange: 'transform, opacity' }}
      >
        <div className="w-full h-full bg-gradient-to-tr from-brand-cyan/10 via-brand-teal/5 to-brand-cyan/10" />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{ y: parallaxLayer3, scale: backgroundScale, willChange: 'transform, opacity' }}
      >
        <div className="w-full h-full bg-gradient-to-bl from-brand-light/5 via-brand-gray/3 to-brand-light/5" />
      </motion.div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute inset-0"
        style={{ y: parallaxLayer1, willChange: 'transform' }}
      >
        {/* Large circles */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-brand-cyan/20 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 border border-brand-teal/20 rounded-full"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Hexagons */}
        <motion.div
          className="absolute top-1/3 right-20 w-16 h-16 border border-brand-cyan/15"
          style={{
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
          }}
          animate={{
            rotate: [0, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-20 w-12 h-12 border border-brand-teal/15"
          style={{
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
          }}
          animate={{
            rotate: [360, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Grid pattern overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: parallaxLayer2, willChange: 'transform, opacity' }}
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--brand-cyan)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--brand-cyan)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </motion.div>

      {/* Dynamic glow effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: backgroundOpacity, willChange: 'opacity' }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [-50, 50, -50],
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [40, -40, 40],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ScrollBackground;
