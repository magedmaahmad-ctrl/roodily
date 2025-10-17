import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, MotionValue } from 'framer-motion';

interface MultiPoseRobotProps {
  className?: string;
  progress?: MotionValue<number>;
}

// A lightweight, performant multi-pose robot built from layered vector shapes.
// Poses map across scroll: wave -> scan -> type -> connect -> present.
const MultiPoseRobot: React.FC<MultiPoseRobotProps> = ({ className = '', progress }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const p = progress ?? scrollYProgress;

  // Global transforms (parallax + subtle 3D tilt)
  const tiltX = useTransform(p, [0, 1], [-6, 6]);
  const tiltY = useTransform(p, [0, 1], [6, -6]);
  const elevate = useTransform(p, [0, 1], [0, -40]);

  // Pose weights from scroll
  const waveW = useTransform(p, [0.00, 0.18, 0.22], [1, 1, 0]);
  const scanW = useTransform(p, [0.18, 0.32, 0.38], [0, 1, 0]);
  const typeW = useTransform(p, [0.35, 0.50, 0.56], [0, 1, 0]);
  const connectW = useTransform(p, [0.54, 0.74, 0.80], [0, 1, 0]);
  const presentW = useTransform(p, [0.78, 0.94, 1.00], [0, 1, 1]);

  // Eye follow (based on scroll) and glow
  const eyeX = useTransform(p, [0, 1], [-4, 4]);
  const eyeY = useTransform(p, [0, 1], [2, -2]);
  const eyeBlur = useTransform(p, [0, 1], [10, 18]);
  const eyeGlow = useMotionTemplate`0 0 ${eyeBlur}px rgba(36,194,206,0.8)`;

  // Hand/arm rotations blended by pose weights (ensure hooks at top-level)
  const leftArmRotate = useTransform([waveW, typeW, connectW, presentW] as any, ([w1, w2, w3, w4]: number[]) => (
    -20 * w1 + -10 * w2 + -30 * w3 + -5 * w4
  ));
  const leftArmRaise = useTransform([waveW, presentW] as any, ([w1, w4]: number[]) => (8 * w1 + 3 * w4));

  const rightArmRotate = useTransform([waveW, typeW, connectW, presentW] as any, ([w1, w2, w3, w4]: number[]) => (
    25 * w1 + 12 * w2 + 35 * w3 + 8 * w4
  ));
  const rightArmRaise = useTransform([scanW, presentW] as any, ([w2, w4]: number[]) => (6 * w2 + 4 * w4));

  // Holographic UI opacity by pose
  const scanUiOpacity = scanW;
  const typeUiOpacity = typeW;
  const connectUiOpacity = connectW;
  const presentUiOpacity = presentW;

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Background glass gradient with soft grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/80 via-brand-dark-light/60 to-brand-dark/80 rounded-[28px] border border-brand-cyan/20" />
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: 'linear-gradient(rgba(36,194,206,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(36,194,206,.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          borderRadius: 28
        }} />
      </div>

      {/* Robot container */}
      <motion.div
        className="relative mx-auto w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96"
        style={{ rotateX: tiltX, rotateY: tiltY, y: elevate, transformStyle: 'preserve-3d' }}
      >
        {/* Legs */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-6">
          <div className="w-4 h-12 rounded-full bg-gradient-to-b from-brand-cyan via-brand-cyan-light to-brand-cyan-dark border border-brand-cyan/30 shadow-glow" />
          <div className="w-4 h-12 rounded-full bg-gradient-to-b from-brand-cyan via-brand-cyan-light to-brand-cyan-dark border border-brand-cyan/30 shadow-glow" />
        </div>

        {/* Body */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-40 h-44 rounded-[22px] bg-gradient-to-br from-brand-teal/90 via-brand-teal-dark/80 to-brand-dark/70 border border-brand-teal/40 shadow-glow-strong">
          {/* Chest core */}
          <div className="absolute left-1/2 top-5 -translate-x-1/2 w-24 h-24 rounded-2xl border border-brand-cyan/50" style={{
            background: 'linear-gradient(135deg, rgba(11,30,39,0.8), rgba(11,30,39,0.4))',
            boxShadow: 'inset 0 0 20px rgba(36,194,206,0.25)'
          }} />
        </div>

        {/* Neck */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 w-8 h-4 rounded-full bg-gradient-to-b from-brand-cyan via-brand-cyan-light to-brand-cyan-dark border border-brand-cyan/40" />

        {/* Head */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-24 h-24 rounded-[20px] bg-gradient-to-br from-brand-light/90 via-white/80 to-brand-light-dim/90 border border-brand-cyan/50 shadow-glow-strong">
          {/* Eyes */}
          <div className="absolute left-1/2 top-6 -translate-x-1/2 flex gap-5">
            {[0,1].map((i) => (
              <motion.div key={i} className="relative w-6 h-6 rounded-full bg-gradient-to-br from-brand-cyan via-brand-cyan-light to-brand-cyan-dark border border-brand-cyan/60"
                style={{ boxShadow: eyeGlow }}
              >
                <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand-dark border border-brand-cyan/40"
                  style={{ x: eyeX, y: eyeY }}
                />
                <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/90 rounded-full" />
              </motion.div>
            ))}
          </div>
          {/* Forehead bar (scan glow) */}
          <motion.div className="absolute left-1/2 top-2 -translate-x-1/2 w-16 h-3 rounded-md"
            style={{
              background: useMotionTemplate`linear-gradient(90deg, rgba(36,194,206,${scanUiOpacity}) 0%, rgba(36,194,206,0) 100%)`
            }}
          />
        </div>

        {/* Left arm */}
        <motion.div className="absolute top-24 left-4 origin-top"
          style={{ rotate: leftArmRotate, y: leftArmRaise }}
        >
          <div className="w-5 h-14 rounded-full bg-gradient-to-b from-brand-cyan via-brand-cyan-light to-brand-cyan-dark border border-brand-cyan/40 shadow-glow" />
          <div className="mt-2 w-5 h-10 rounded-full bg-gradient-to-b from-brand-cyan-dark via-brand-cyan to-brand-cyan-light border border-brand-cyan/30 shadow-glow" />
        </motion.div>

        {/* Right arm */}
        <motion.div className="absolute top-24 right-4 origin-top"
          style={{ rotate: rightArmRotate, y: rightArmRaise }}
        >
          <div className="w-5 h-14 rounded-full bg-gradient-to-b from-brand-cyan via-brand-cyan-light to-brand-cyan-dark border border-brand-cyan/40 shadow-glow" />
          <div className="mt-2 w-5 h-10 rounded-full bg-gradient-to-b from-brand-cyan-dark via-brand-cyan to-brand-cyan-light border border-brand-cyan/30 shadow-glow" />
        </motion.div>

        {/* Pose-specific holographic UIs */}
        {/* Scan HUD */}
        <motion.div className="absolute -left-12 top-8 w-24 h-24 rounded-2xl border border-brand-cyan/40 bg-white/5 backdrop-blur-md"
          style={{ opacity: scanUiOpacity }}
        >
          <div className="absolute inset-2 border border-brand-cyan/30 rounded-xl opacity-60" />
          <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />
        </motion.div>

        {/* Typing panel */}
        <motion.div className="absolute -right-14 bottom-16 w-28 h-16 rounded-xl border border-brand-teal/40 bg-white/5 backdrop-blur-md"
          style={{ opacity: typeUiOpacity }}
        >
          <div className="absolute inset-2 grid grid-cols-5 gap-1 opacity-70">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="rounded-sm bg-brand-teal/40" />
            ))}
          </div>
        </motion.div>

        {/* Connect lines */}
        <motion.svg className="absolute inset-0" style={{ opacity: connectUiOpacity }} viewBox="0 0 100 100" preserveAspectRatio="none">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.line key={i} x1="50" y1="55" x2={20 + i * 12} y2={20 + (i % 3) * 20}
              stroke="hsl(var(--brand-cyan) / 0.5)" strokeWidth="1" strokeDasharray="3,2"
              animate={{ strokeDashoffset: [0, -6] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', delay: i * 0.1 }}
            />
          ))}
        </motion.svg>

        {/* Present badge */}
        <motion.div className="absolute left-1/2 bottom-0 -translate-x-1/2"
          style={{ opacity: presentUiOpacity }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-brand-cyan/40 bg-white/5 backdrop-blur-md shadow-glow">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span className="text-sm font-semibold tracking-wide text-brand-cyan">RODELY AI</span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MultiPoseRobot;


