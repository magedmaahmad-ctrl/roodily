import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MessageSquare, Cpu, Network, Zap, Sparkles } from "lucide-react";
import { usePageTransition } from "@/hooks/usePageTransition";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import FuturisticRobot from "@/components/FuturisticRobot";
import FloatingElements from "@/components/FloatingElements";
import ScrollBackground from "@/components/ScrollBackground";
import ScrollSection from "@/components/ScrollSection";

const Home = () => {
  const { navigateWithLoading } = usePageTransition();
  const [currentSection, setCurrentSection] = useState(0);
  const [robotState, setRobotState] = useState<'idle' | 'wave' | 'message' | 'dashboard' | 'transform' | 'powerup'>('wave');

  const { scrollYProgress } = useScroll();
  
  // Track scroll progress to change robot states - faster transitions
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const sectionIndex = Math.floor(latest * 4); // 4 main sections
      setCurrentSection(sectionIndex);
      
      // Change robot state based on scroll position - optimized transitions
      if (latest < 0.2) {
        setRobotState('wave');
      } else if (latest < 0.4) {
        setRobotState('message');
      } else if (latest < 0.7) {
        setRobotState('dashboard');
      } else if (latest < 0.9) {
        setRobotState('transform');
      } else {
        setRobotState('powerup');
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const sections = [
    {
      id: 'hero',
      title: 'Empowering Businesses with AI Automation',
      subtitle: 'Smart AI receptionists and WhatsApp responders built for the future.',
      robotState: 'wave' as const,
      floatingSection: 'hero' as const,
      cta: {
        primary: { text: 'Discover Our AI', action: () => navigateWithLoading('/contact', 'Preparing Contact Form...') },
        secondary: { text: 'Watch Demo', action: () => navigateWithLoading('/demo', 'Loading Demo Environment...') }
      }
    },
    {
      id: 'automation',
      title: '24/7 AI Receptionists',
      subtitle: 'Never miss a call again. Our intelligent AI handles every interaction with human-like precision.',
      robotState: 'message' as const,
      floatingSection: 'automation' as const,
      features: [
        { icon: MessageSquare, text: 'WhatsApp AI Responders' },
        { icon: Cpu, text: 'Smart Call Routing' },
        { icon: Network, text: 'Multi-language Support' }
      ]
    },
    {
      id: 'intelligence',
      title: 'Advanced AI Intelligence',
      subtitle: 'Powered by cutting-edge machine learning to understand context and provide meaningful responses.',
      robotState: 'dashboard' as const,
      floatingSection: 'intelligence' as const,
      features: [
        { icon: Zap, text: 'Lightning Fast Response' },
        { icon: Cpu, text: 'Continuous Learning' },
        { icon: Network, text: 'Seamless Integration' }
      ]
    },
    {
      id: 'innovation',
      title: 'Automation. Intelligence. Innovation.',
      subtitle: 'Let AI handle the work for you.',
      robotState: 'transform' as const,
      floatingSection: 'innovation' as const,
      cta: {
        primary: { text: 'Get Started Today', action: () => navigateWithLoading('/contact', 'Preparing Contact Form...') }
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <ScrollBackground>
        {/* Hero Section */}
        <ScrollSection showScrollIndicator scrollDirection="down" className="pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-block">
                <motion.span 
                  className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  AI-Powered Communication
                </motion.span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Your AI Receptionist,{" "}
                <motion.span 
                  className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: '200% 100%' }}
                >
                  Always Ready
                </motion.span>{" "}
                to Help
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                RODELY automates communication with intelligent AI receptionists and WhatsApp assistants — 
                built for modern businesses in Egypt 🇪🇬 and the United States 🇺🇸
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="gradient-accent" 
                  size="lg" 
                  className="group btn-glow"
                  onClick={sections[0].cta.primary.action}
                >
                  {sections[0].cta.primary.text}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="brand-teal" 
                  size="lg" 
                  className="group"
                  onClick={sections[0].cta.secondary.action}
                >
                  <Play className="mr-2 group-hover:scale-110 transition-transform" />
                  {sections[0].cta.secondary.text}
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <motion.div 
                  className="text-center p-4 rounded-lg bg-brand-light/10 border border-brand-cyan/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-brand-cyan">24/7</div>
                  <div className="text-sm text-brand-light/80">Available</div>
                </motion.div>
                <div className="h-12 w-px bg-brand-cyan/30" />
                <motion.div 
                  className="text-center p-4 rounded-lg bg-brand-light/10 border border-brand-teal/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-brand-teal">100%</div>
                  <div className="text-sm text-brand-light/80">Automated</div>
                </motion.div>
                <div className="h-12 w-px bg-brand-cyan/30" />
                <motion.div 
                  className="text-center p-4 rounded-lg bg-brand-light/10 border border-brand-cyan/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-brand-cyan">AI</div>
                  <div className="text-sm text-brand-light/80">Powered</div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative block"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <FuturisticRobot 
                animationState={robotState}
                className="w-full max-w-sm sm:max-w-md mx-auto"
              />
              <FloatingElements section="hero" />
            </motion.div>
          </div>
        </ScrollSection>

        {/* Automation Section */}
        <ScrollSection>
          <div className="text-center space-y-12">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <h2 className="text-4xl md:text-6xl font-bold">
                24/7 AI Receptionists
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Never miss a call again. Our intelligent AI handles every interaction with human-like precision.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {sections[1].features?.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative p-8 rounded-2xl bg-card/50 border border-card-border backdrop-blur-sm hover:border-primary/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.text}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.7, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: false }}
            >
              <FuturisticRobot 
                animationState="message"
                className="w-48 h-60 sm:w-56 sm:h-70 md:w-64 md:h-80 mx-auto"
              />
              <FloatingElements section="automation" />
            </motion.div>
          </div>
        </ScrollSection>

        {/* Intelligence Section */}
        <ScrollSection>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <h2 className="text-4xl md:text-6xl font-bold">
                Advanced AI Intelligence
              </h2>
              <p className="text-xl text-muted-foreground">
                Powered by cutting-edge machine learning to understand context and provide meaningful responses.
              </p>
              
              <div className="space-y-6">
                {sections[2].features?.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/30 border border-card-border hover:border-primary/20 transition-all duration-300"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: false }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-lg font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 60, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: false }}
            >
              <FuturisticRobot 
                animationState="dashboard"
                className="w-48 h-60 sm:w-56 sm:h-70 md:w-64 md:h-80 mx-auto"
              />
              <FloatingElements section="intelligence" />
            </motion.div>
          </div>
        </ScrollSection>

        {/* Innovation Section */}
        <ScrollSection showScrollIndicator scrollDirection="up">
          <div className="text-center space-y-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              <h2 className="text-4xl md:text-6xl font-bold">
                Automation. Intelligence. Innovation.
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let AI handle the work for you.
              </p>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.6, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: false }}
            >
              <FuturisticRobot 
                animationState="powerup"
                className="w-56 h-72 sm:w-64 sm:h-80 md:w-80 md:h-96 mx-auto"
              />
              <FloatingElements section="innovation" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: false }}
            >
              <Button 
                variant="gradient-accent" 
                size="lg" 
                className="group btn-glow text-lg px-8 py-4"
                onClick={sections[3].cta.primary.action}
              >
                {sections[3].cta.primary.text}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </ScrollSection>
      </ScrollBackground>

      <Footer />
    </div>
  );
};

export default Home;