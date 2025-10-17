import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useVelocity, useMotionTemplate } from 'framer-motion';
import FuturisticRobot from '@/components/FuturisticRobot';

interface ScrollRobotSceneProps {
  className?: string;
}

const ScrollRobotScene: React.FC<ScrollRobotSceneProps> = ({ className = '' }) => {
  const { scrollYProgress, scrollY } = useScroll();
  const velocity = useVelocity(scrollY);

  // Parallax layers
  const bgTranslateY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const midTranslateY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const fgTranslateY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Map scroll to robot states
  const robotState = useMemo(() => ({
    get value() {
      // Lazily evaluate via current progress value using get()
      const p = (scrollYProgress as any).get?.() ?? 0;
      if (p < 0.2) return 'wave';
      if (p < 0.4) return 'message';
      if (p < 0.7) return 'dashboard';
      if (p < 0.92) return 'transform';
      return 'powerup';
    }
  }), [scrollYProgress]);

  // Particle speed and blur from scroll velocity magnitude
  const speed = useTransform(velocity, (v) => Math.min(1, Math.abs(v) / 2000));
  const particleBlur = useTransform(speed, [0, 1], [0, 6]);
  const particleOpacity = useTransform(speed, [0, 1], [0.25, 0.85]);
  const particleFilter = useMotionTemplate`blur(${particleBlur}px)`;

  // Finale overlay trigger
  const finaleOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);
  const finaleScale = useTransform(scrollYProgress, [0.95, 1], [0.95, 1]);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Background gradient parallax */}
      <motion.div 
        className="absolute inset-0 -z-20 bg-gradient-to-b from-brand-dark via-brand-dark-light to-brand-dark"
        style={{ y: bgTranslateY }}
      />

      {/* Mid-layer holographic grid */}
      <motion.div className="absolute inset-0 -z-10 opacity-20"
        style={{ y: midTranslateY }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(36,194,206,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(36,194,206,0.12) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
      </motion.div>

      {/* Foreground particles reacting to scroll speed */}
      <motion.div className="pointer-events-none absolute inset-0 -z-0"
        style={{ y: fgTranslateY }}
      >
        {[...Array(36)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-cyan shadow-glow"
            style={{
              width: 3,
              height: 3,
              left: `${(i * 277) % 100}%`,
              top: `${(i * 139) % 100}%`,
              filter: particleFilter,
              opacity: particleOpacity
            }}
            animate={{
              y: [0, -12 - (i % 5), 0],
              x: [0, ((i % 7) - 3) * 2, 0],
              scale: [1, 1.25, 1]
            }}
            transition={{ duration: 2 + (i % 5) * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.05 }}
          />
        ))}
      </motion.div>

      {/* Robot */}
      <div className="relative max-w-md mx-auto py-8">
        <FuturisticRobot animationState={robotState.value as any} className="w-full" />
      </div>

      {/* Finale: Rodely AI logo reveal and subtle wave */}
      <motion.div 
        className="pointer-events-none absolute inset-x-0 bottom-8 text-center"
        style={{ opacity: finaleOpacity, scale: finaleScale }}
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-brand-cyan/40 bg-white/5 backdrop-blur-md shadow-glow-strong">
          <div className="w-2 h-2 rounded-full bg-brand-cyan shadow-glow" />
          <span className="text-2xl font-extrabold tracking-wide text-brand-cyan drop-shadow">RODELY AI</span>
          <div className="w-2 h-2 rounded-full bg-brand-teal shadow-glow" />
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollRobotScene;


