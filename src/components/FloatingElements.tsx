import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Cpu, 
  Network, 
  Zap, 
  Database,
  Globe,
  Shield,
  Sparkles,
  Hexagon
} from 'lucide-react';

interface FloatingElement {
  id: string;
  icon: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
  position: { x: number; y: number };
  delay: number;
  duration: number;
  color: 'cyan' | 'teal' | 'light';
}

interface FloatingElementsProps {
  section: 'hero' | 'automation' | 'intelligence' | 'innovation';
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ section, className = "" }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getElementsForSection = (): FloatingElement[] => {
    switch (section) {
      case 'hero':
        return [
          {
            id: 'msg-1',
            icon: <MessageSquare className="w-full h-full" />,
            size: 'md',
            position: { x: 10, y: 20 },
            delay: 0,
            duration: 4,
            color: 'cyan'
          },
          {
            id: 'cpu-1',
            icon: <Cpu className="w-full h-full" />,
            size: 'sm',
            position: { x: 85, y: 15 },
            delay: 1,
            duration: 5,
            color: 'teal'
          },
          {
            id: 'network-1',
            icon: <Network className="w-full h-full" />,
            size: 'lg',
            position: { x: 15, y: 70 },
            delay: 2,
            duration: 3,
            color: 'cyan'
          },
          {
            id: 'zap-1',
            icon: <Zap className="w-full h-full" />,
            size: 'sm',
            position: { x: 80, y: 75 },
            delay: 0.5,
            duration: 4.5,
            color: 'teal'
          }
        ];
      
      case 'automation':
        return [
          {
            id: 'db-1',
            icon: <Database className="w-full h-full" />,
            size: 'md',
            position: { x: 20, y: 25 },
            delay: 0,
            duration: 6,
            color: 'cyan'
          },
          {
            id: 'globe-1',
            icon: <Globe className="w-full h-full" />,
            size: 'lg',
            position: { x: 75, y: 20 },
            delay: 1.5,
            duration: 5,
            color: 'teal'
          },
          {
            id: 'shield-1',
            icon: <Shield className="w-full h-full" />,
            size: 'sm',
            position: { x: 12, y: 80 },
            delay: 3,
            duration: 4,
            color: 'cyan'
          },
          {
            id: 'sparkles-1',
            icon: <Sparkles className="w-full h-full" />,
            size: 'sm',
            position: { x: 88, y: 70 },
            delay: 2,
            duration: 3,
            color: 'light'
          }
        ];
      
      case 'intelligence':
        return [
          {
            id: 'cpu-2',
            icon: <Cpu className="w-full h-full" />,
            size: 'lg',
            position: { x: 25, y: 30 },
            delay: 0,
            duration: 5,
            color: 'teal'
          },
          {
            id: 'network-2',
            icon: <Network className="w-full h-full" />,
            size: 'md',
            position: { x: 70, y: 25 },
            delay: 2,
            duration: 4,
            color: 'cyan'
          },
          {
            id: 'hex-1',
            icon: <Hexagon className="w-full h-full" />,
            size: 'sm',
            position: { x: 15, y: 75 },
            delay: 1,
            duration: 6,
            color: 'teal'
          },
          {
            id: 'zap-2',
            icon: <Zap className="w-full h-full" />,
            size: 'md',
            position: { x: 85, y: 80 },
            delay: 3.5,
            duration: 3.5,
            color: 'cyan'
          }
        ];
      
      case 'innovation':
        return [
          {
            id: 'sparkles-2',
            icon: <Sparkles className="w-full h-full" />,
            size: 'lg',
            position: { x: 30, y: 20 },
            delay: 0,
            duration: 4,
            color: 'light'
          },
          {
            id: 'hex-2',
            icon: <Hexagon className="w-full h-full" />,
            size: 'md',
            position: { x: 65, y: 30 },
            delay: 1.5,
            duration: 5.5,
            color: 'cyan'
          },
          {
            id: 'cpu-3',
            icon: <Cpu className="w-full h-full" />,
            size: 'sm',
            position: { x: 20, y: 85 },
            delay: 3,
            duration: 4,
            color: 'teal'
          },
          {
            id: 'network-3',
            icon: <Network className="w-full h-full" />,
            size: 'lg',
            position: { x: 75, y: 75 },
            delay: 2.5,
            duration: 6,
            color: 'cyan'
          }
        ];
      
      default:
        return [];
    }
  };

  const elements = getElementsForSection();

  const getSizeClasses = (size: 'sm' | 'md' | 'lg') => {
    switch (size) {
      case 'sm': return 'w-8 h-8';
      case 'md': return 'w-12 h-12';
      case 'lg': return 'w-16 h-16';
      default: return 'w-12 h-12';
    }
  };

  const getColorClasses = (color: 'cyan' | 'teal' | 'light') => {
    switch (color) {
      case 'cyan': return 'text-brand-cyan';
      case 'teal': return 'text-brand-teal';
      case 'light': return 'text-brand-light';
      default: return 'text-brand-cyan';
    }
  };

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${getSizeClasses(element.size)} ${getColorClasses(element.color)} opacity-25`}
          style={{
            left: `${element.position.x}%`,
            top: `${element.position.y}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: element.duration * 0.8, // Slightly slower for better performance
            delay: element.delay * 0.7, // Slightly slower delays
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1], // Smoother easing
          }}
        >
          <div className="relative w-full h-full">
            {element.icon}
            {/* Glow effect */}
            <div className={`absolute inset-0 ${getColorClasses(element.color)} opacity-30 blur-sm`}>
              {element.icon}
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Additional floating particles - reduced on mobile for performance */}
      {[...Array(isMobile ? 6 : 12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-brand-cyan rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            opacity: [0.2, 0.9, 0.2],
            scale: [0.4, 1.5, 0.4],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3 + Math.random() * 2, // Slower particles for better performance
            delay: Math.random() * 3, // Slower delays
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1], // Smoother easing
          }}
        />
      ))}
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        {elements.slice(0, 3).map((element, index) => {
          const nextElement = elements[index + 1];
          if (!nextElement) return null;
          
          return (
            <motion.line
              key={`line-${element.id}`}
              x1={`${element.position.x}%`}
              y1={`${element.position.y}%`}
              x2={`${nextElement.position.x}%`}
              y2={`${nextElement.position.y}%`}
              stroke="hsl(var(--brand-cyan))"
              strokeWidth="1"
              opacity="0.1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: index * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default FloatingElements;
