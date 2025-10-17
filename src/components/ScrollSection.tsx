import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  showScrollIndicator?: boolean;
  scrollDirection?: 'down' | 'up';
  parallaxIntensity?: number;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  children, 
  className = "",
  showScrollIndicator = false,
  scrollDirection = 'down',
  parallaxIntensity = 0.5
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: false, 
    amount: 0.3,
    margin: "-100px 0px -100px 0px"
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smooth the scroll signal with a spring for buttery animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  const y = useTransform(smoothProgress, [0, 1], [100 * parallaxIntensity, -100 * parallaxIntensity]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.section
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center ${className}`}
      style={{ y }}
      style={{ willChange: 'transform' }}
    >
      <motion.div
        className="container mx-auto px-4 py-20"
        style={{ opacity, scale, willChange: 'transform, opacity' }}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-brand-cyan/60 hover:text-brand-cyan transition-colors cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {scrollDirection === 'down' ? (
              <>
                <span className="text-sm font-medium">Scroll to explore</span>
                <ArrowDown className="w-6 h-6" />
              </>
            ) : (
              <>
                <ArrowUp className="w-6 h-6" />
                <span className="text-sm font-medium">Scroll up</span>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default ScrollSection;
