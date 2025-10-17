import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, useMotionValue, useTransform } from 'framer-motion';
import { 
  MessageSquare, 
  Zap, 
  Cpu, 
  Network, 
  Settings,
  Sparkles,
  Activity,
  Wifi,
  Mic,
  Camera,
  Eye,
  Brain,
  CircuitBoard,
  Monitor,
  Smartphone
} from 'lucide-react';

interface FuturisticRobotProps {
  animationState: 'idle' | 'wave' | 'message' | 'dashboard' | 'transform' | 'powerup';
  className?: string;
}

const FuturisticRobot: React.FC<FuturisticRobotProps> = ({ 
  animationState, 
  className = "" 
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [isProcessing, setIsProcessing] = useState(false);

  // Optimized animation cycle for smooth continuous motion
  const animationCycle = useMotionValue(0);
  
  useEffect(() => {
    // Check if device is mobile for performance optimization
    const isMobile = window.innerWidth < 768;
    const interval = setInterval(() => {
      animationCycle.set((prev) => (prev + 1) % 100);
    }, isMobile ? 100 : 50); // Slower on mobile for better performance
    return () => clearInterval(interval);
  }, [animationCycle]);

  // Smooth continuous animations
  const breathingScale = useTransform(animationCycle, [0, 50, 100], [1, 1.01, 1]);
  const continuousRotate = useTransform(animationCycle, [0, 100], [0, 360]);
  const pulseScale = useTransform(animationCycle, [0, 50, 100], [1, 1.02, 1]);

  useEffect(() => {
    if (!isInView) return;

    const animateRobot = async () => {
      setIsProcessing(true);
      
      switch (animationState) {
        case 'wave':
          await controls.start({
            y: [0, -6, 0],
            transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] }
          });
          break;
        
        case 'message':
          await controls.start({
            scale: [1, 1.02, 1],
            y: [0, -2, 0],
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
          });
          break;
        
        case 'dashboard':
          await controls.start({
            rotateY: [0, 5, -5, 0],
            y: [0, -3, 0],
            transition: { duration: 1.5, ease: [0.4, 0, 0.2, 1] }
          });
          break;
        
        case 'transform':
          await controls.start({
            scale: [1, 1.08, 1.05],
            rotateY: [0, 180, 360],
            y: [0, -8, -4],
            transition: { duration: 2, ease: [0.4, 0, 0.2, 1] }
          });
          break;
        
        case 'powerup':
          await controls.start({
            scale: [1, 1.12, 1.08],
            y: [0, -10, -6],
            transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }
          });
          break;
        
        default:
          await controls.start({
            y: [0, -4, 0],
            transition: { duration: 2, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }
          });
      }
      
      setTimeout(() => setIsProcessing(false), 1000);
    };

    animateRobot();
  }, [animationState, isInView, controls]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Main Robot Container */}
      <motion.div
        ref={ref}
        className="relative w-36 h-44 sm:w-44 sm:h-52 md:w-52 md:h-60 mx-auto"
        animate={controls}
        style={{ 
          transformStyle: 'preserve-3d',
          scale: animationState === 'idle' ? breathingScale : 1
        }}
      >
        {/* Robot Base */}
        <motion.div
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-12 sm:w-48 sm:h-14 md:w-56 md:h-16 bg-gradient-to-r from-brand-dark via-brand-dark-light to-brand-dark rounded-2xl shadow-xl border border-brand-gray/50"
          animate={{
            boxShadow: [
              '0 0 15px hsl(var(--brand-cyan) / 0.2)',
              '0 0 25px hsl(var(--brand-cyan) / 0.4)',
              '0 0 15px hsl(var(--brand-cyan) / 0.2)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-2 bg-gradient-to-r from-brand-teal/10 to-brand-cyan/10 rounded-xl">
            <div className="absolute top-1 left-2 flex gap-1">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 bg-brand-cyan rounded-full"
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{ 
                    duration: 1, 
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            <div className="absolute bottom-1 right-2 text-xs font-bold text-brand-cyan">
              RODELY AI
            </div>
          </div>
        </motion.div>

        {/* Robot Legs */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-4">
          <motion.div 
            className="w-3 h-8 sm:w-4 sm:h-10 md:w-5 md:h-12 bg-gradient-to-b from-brand-cyan to-brand-cyan-dark rounded-full shadow-lg"
            animate={{
              y: animationState === 'wave' ? [0, -1, 0] : 0,
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="w-3 h-8 sm:w-4 sm:h-10 md:w-5 md:h-12 bg-gradient-to-b from-brand-cyan to-brand-cyan-dark rounded-full shadow-lg"
            animate={{
              y: animationState === 'wave' ? [0, 1, 0] : 0,
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
        </div>

        {/* Robot Body */}
        <motion.div 
          className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-28 sm:w-28 sm:h-32 md:w-32 md:h-36 bg-gradient-to-br from-brand-teal to-brand-teal-dark rounded-2xl shadow-xl border border-brand-teal/50"
          animate={{
            scale: animationState === 'powerup' ? pulseScale : 1,
            boxShadow: [
              '0 0 20px hsl(var(--brand-teal) / 0.3)',
              '0 0 35px hsl(var(--brand-teal) / 0.5)',
              '0 0 20px hsl(var(--brand-teal) / 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Chest Panel */}
          <motion.div 
            className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-brand-dark/30 to-brand-dark/20 rounded-xl border border-brand-cyan/50"
            animate={{
              borderColor: isProcessing ? [
                'hsl(var(--brand-cyan))', 
                'hsl(var(--brand-cyan-light))', 
                'hsl(var(--brand-cyan))'
              ] : 'hsl(var(--brand-cyan) / 0.5)',
            }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              style={{ rotate: continuousRotate }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Cpu className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-brand-cyan absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            
            {/* Status dots */}
            <div className="absolute inset-2">
              <div className="absolute top-2 left-2 w-1 h-1 bg-brand-cyan rounded-full animate-pulse" />
              <div className="absolute top-2 right-2 w-1 h-1 bg-brand-cyan rounded-full animate-pulse" />
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-brand-cyan rounded-full animate-pulse" />
              <div className="absolute bottom-2 right-2 w-1 h-1 bg-brand-cyan rounded-full animate-pulse" />
            </div>
          </motion.div>
          
          {/* Status lights */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            <motion.div 
              className="w-1.5 h-1.5 bg-green-400 rounded-full"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="w-1.5 h-1.5 bg-brand-cyan rounded-full"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.div 
              className="w-1.5 h-1.5 bg-brand-teal rounded-full"
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />
          </div>
        </motion.div>

        {/* Robot Neck */}
        <motion.div
          className="absolute top-20 sm:top-24 md:top-28 left-1/2 transform -translate-x-1/2 w-5 h-3 sm:w-6 sm:h-4 md:w-7 md:h-5 bg-gradient-to-b from-brand-cyan to-brand-cyan-dark rounded-full"
          animate={{
            scale: animationState === 'dashboard' ? pulseScale : 1,
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Robot Head */}
        <motion.div
          className="absolute top-16 sm:top-20 md:top-24 left-1/2 transform -translate-x-1/2 w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26 bg-gradient-to-br from-brand-light to-brand-light-dim rounded-2xl shadow-xl border border-brand-cyan/50"
          animate={{
            rotateY: animationState === 'dashboard' ? [0, 5, -5, 0] : 0,
            boxShadow: [
              '0 0 20px hsl(var(--brand-cyan) / 0.3)',
              '0 0 35px hsl(var(--brand-cyan) / 0.5)',
              '0 0 20px hsl(var(--brand-cyan) / 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Eyes */}
          <div className="absolute top-3 sm:top-4 md:top-5 left-1/2 transform -translate-x-1/2 flex gap-3 sm:gap-4 md:gap-5">
            <motion.div
              className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-brand-cyan to-brand-cyan-dark rounded-full shadow-lg"
              animate={{
                scale: animationState === 'message' ? [1, 1.3, 1] : 1,
                boxShadow: isProcessing ? [
                  '0 0 10px hsl(var(--brand-cyan))',
                  '0 0 20px hsl(var(--brand-cyan))',
                  '0 0 10px hsl(var(--brand-cyan))'
                ] : '0 0 8px hsl(var(--brand-cyan) / 0.4)',
              }}
              transition={{ duration: 0.6, repeat: animationState === 'message' ? Infinity : 0, ease: "easeInOut" }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-dark rounded-full" />
              <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-70" />
            </motion.div>
            
            <motion.div
              className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-brand-cyan to-brand-cyan-dark rounded-full shadow-lg"
              animate={{
                scale: animationState === 'message' ? [1, 1.3, 1] : 1,
                boxShadow: isProcessing ? [
                  '0 0 10px hsl(var(--brand-cyan))',
                  '0 0 20px hsl(var(--brand-cyan))',
                  '0 0 10px hsl(var(--brand-cyan))'
                ] : '0 0 8px hsl(var(--brand-cyan) / 0.4)',
              }}
              transition={{ duration: 0.6, repeat: animationState === 'message' ? Infinity : 0, ease: "easeInOut" }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-dark rounded-full" />
              <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-70" />
            </motion.div>
          </div>
          
          {/* Forehead */}
          <motion.div 
            className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-10 h-2.5 sm:w-12 sm:h-3 md:w-14 md:h-4 bg-gradient-to-r from-brand-dark/20 to-brand-dark/10 rounded-full border border-brand-cyan/40"
            animate={{
              borderColor: [
                'hsl(var(--brand-cyan) / 0.4)',
                'hsl(var(--brand-cyan-light) / 0.6)',
                'hsl(var(--brand-cyan) / 0.4)'
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              style={{ rotate: continuousRotate }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Brain className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-brand-cyan absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
          </motion.div>
          
          {/* Antenna */}
          <motion.div
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-brand-teal to-brand-teal-dark rounded-full"
            animate={{
              y: animationState === 'dashboard' ? [-2, 2, -2] : 0,
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-brand-cyan rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        {/* Left Arm */}
        <motion.div
          className="absolute top-18 sm:top-22 md:top-26 left-2 sm:left-3 md:left-4"
          style={{ transformOrigin: 'top center' }}
        >
          <motion.div
            className="w-4 h-8 sm:w-5 sm:h-10 md:w-6 md:h-12 bg-gradient-to-b from-brand-cyan to-brand-cyan-dark rounded-full shadow-lg"
            animate={{
              rotate: animationState === 'wave' ? [0, -40, 40, -20, 0] : 
                      animationState === 'message' ? [0, -15, 0] : 0,
            }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          />
          
          <motion.div
            className="absolute top-6 sm:top-8 md:top-10 left-1/2 transform -translate-x-1/2 w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 bg-gradient-to-b from-brand-cyan-dark to-brand-cyan rounded-full shadow-lg"
            animate={{
              rotate: animationState === 'wave' ? [0, -30, 30, -10, 0] : 
                      animationState === 'message' ? [0, -10, 0] : 0,
            }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          />
          
          <motion.div
            className="absolute top-8 sm:top-12 md:top-16 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-brand-light to-brand-light-dim rounded-full border border-brand-cyan/50 shadow-lg"
            animate={{
              scale: animationState === 'wave' ? [1, 1.1, 1] : 
                     animationState === 'message' ? [1, 1.05, 1] : 1,
              rotate: animationState === 'wave' ? [0, -10, 10, 0] : 0,
            }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              style={{ rotate: continuousRotate }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-brand-cyan absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Arm */}
        <motion.div
          className="absolute top-18 sm:top-22 md:top-26 right-2 sm:right-3 md:right-4"
          style={{ transformOrigin: 'top center' }}
        >
          <motion.div
            className="w-4 h-8 sm:w-5 sm:h-10 md:w-6 md:h-12 bg-gradient-to-b from-brand-cyan to-brand-cyan-dark rounded-full shadow-lg"
            animate={{
              rotate: animationState === 'wave' ? [0, 40, -40, 20, 0] : 
                      animationState === 'message' ? [0, 15, 0] : 0,
            }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          />
          
          <motion.div
            className="absolute top-6 sm:top-8 md:top-10 left-1/2 transform -translate-x-1/2 w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 bg-gradient-to-b from-brand-cyan-dark to-brand-cyan rounded-full shadow-lg"
            animate={{
              rotate: animationState === 'wave' ? [0, 30, -30, 10, 0] : 
                      animationState === 'message' ? [0, 10, 0] : 0,
            }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          />
          
          <motion.div
            className="absolute top-8 sm:top-12 md:top-16 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-brand-light to-brand-light-dim rounded-full border border-brand-cyan/50 shadow-lg"
            animate={{
              scale: animationState === 'wave' ? [1, 1.1, 1] : 
                     animationState === 'message' ? [1, 1.05, 1] : 1,
              rotate: animationState === 'wave' ? [0, 10, -10, 0] : 0,
            }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              style={{ rotate: continuousRotate }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
            >
              <Network className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-brand-cyan absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Animation Elements */}
        {getAnimationElements()}

        {/* Glow Effects - Optimized for performance */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            scale: animationState === 'powerup' ? [1, 1.2, 1] : 1,
            opacity: animationState === 'powerup' ? [0.3, 0.7, 0.3] : 0.1,
          }}
          transition={{ 
            duration: window.innerWidth < 768 ? 3 : 2, // Slower on mobile
            repeat: animationState === 'powerup' ? Infinity : 0, 
            ease: "easeInOut" 
          }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-brand-cyan/15 via-brand-teal/10 to-transparent rounded-full blur-xl" />
        </motion.div>
      </motion.div>
    </div>
  );

  function getAnimationElements() {
    switch (animationState) {
      case 'wave':
        return (
          <motion.div
            className="absolute -top-16 -left-16"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="w-12 h-12 bg-brand-cyan/20 rounded-xl border border-brand-cyan flex items-center justify-center"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Activity className="w-6 h-6 text-brand-cyan" />
            </motion.div>
          </motion.div>
        );

      case 'message':
        return (
          <motion.div
            className="absolute -top-20 -right-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="w-12 h-12 bg-brand-cyan/20 rounded-xl border border-brand-cyan flex items-center justify-center"
              animate={{ 
                rotateY: [0, 10, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <MessageSquare className="w-6 h-6 text-brand-cyan" />
            </motion.div>
            
            {/* Fast data streams */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-8 bg-gradient-to-b from-brand-cyan to-transparent rounded-full"
                style={{
                  left: `${15 + i * 8}px`,
                  top: '-25px'
                }}
                animate={{
                  scaleY: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        );
      
      case 'dashboard':
        return (
          <motion.div
            className="absolute -top-16 -left-20"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="w-16 h-16 bg-brand-dark/30 rounded-xl border border-brand-teal flex items-center justify-center"
              animate={{ 
                rotateY: [0, 5, -5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Monitor className="w-8 h-8 text-brand-teal" />
            </motion.div>
            
            {/* Fast floating points */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-brand-teal rounded-full"
                style={{
                  left: `${Math.random() * 60}px`,
                  top: `${Math.random() * 60}px`,
                }}
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        );
      
      case 'transform':
        return (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Fast rotating rings */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ rotate: continuousRotate }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-32 h-32 border border-brand-cyan border-dashed rounded-full opacity-50" />
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ rotate: continuousRotate }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-24 h-24 border border-brand-teal border-dashed rounded-full opacity-40" />
            </motion.div>
            
            {/* Fast particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-brand-cyan rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                }}
                animate={{
                  x: Math.cos((i * 45) * Math.PI / 180) * 50,
                  y: Math.sin((i * 45) * Math.PI / 180) * 50,
                  scale: [0, 1.2, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        );
      
      case 'powerup':
        return (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Fast energy rings */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-28 h-28 border border-brand-cyan rounded-full" />
            </motion.div>
            
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <div className="w-20 h-20 border border-brand-teal rounded-full" />
            </motion.div>
            
            {/* Fast energy particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-brand-cyan rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                }}
                animate={{
                  x: Math.cos((i * 30) * Math.PI / 180) * 70,
                  y: Math.sin((i * 30) * Math.PI / 180) * 70,
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.05,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Central core */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-cyan rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                boxShadow: [
                  '0 0 20px hsl(var(--brand-cyan))',
                  '0 0 40px hsl(var(--brand-cyan))',
                  '0 0 20px hsl(var(--brand-cyan))'
                ]
              }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        );
      
      default:
        return null;
    }
  }
};

export default FuturisticRobot;