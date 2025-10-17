import { useEffect, useState } from "react";
import { Zap, Brain, Cpu, Network } from "lucide-react";

interface LoadingScreenProps {
  onLoadComplete: () => void;
  message?: string;
}

export const LoadingScreen = ({ onLoadComplete, message = "Initializing AI Systems..." }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState<'boot' | 'processing' | 'connecting' | 'ready'>('boot');
  const [loadingMessages] = useState([
    "Initializing Neural Networks...",
    "Loading AI Core Systems...",
    "Establishing Quantum Connections...",
    "Calibrating Holographic Interface...",
    "Activating RODELY Protocol...",
    "Systems Online - Welcome! 🚀"
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setCurrentAnimation('ready');
          setTimeout(onLoadComplete, 1000);
          return 100;
        }
        return prev + 1.2;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, [onLoadComplete]);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1500);

    return () => clearInterval(messageInterval);
  }, [loadingMessages.length]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setCurrentAnimation((prev) => {
        switch (prev) {
          case 'boot': return 'processing';
          case 'processing': return 'connecting';
          case 'connecting': return 'boot';
          case 'ready': return 'ready';
          default: return 'boot';
        }
      });
    }, 2500);

    return () => clearInterval(animationInterval);
  }, []);

  // 3D rotation effect based on mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (e.clientX - centerX) / centerX;
      const deltaY = (e.clientY - centerY) / centerY;
      
      setRotationY(deltaX * 15);
      setRotationX(-deltaY * 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-brand-dark to-slate-800 perspective-1000">
      {/* Enhanced 3D animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Advanced grid pattern with 3D depth */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--brand-cyan)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--brand-cyan)) 1px, transparent 1px),
            linear-gradient(hsl(var(--brand-teal)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--brand-teal)) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
          backgroundPosition: '0 0, 0 0, 100px 100px, 100px 100px'
        }} />
        
        {/* 3D floating particles with depth */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? 'hsl(var(--brand-cyan))' : 
                         i % 3 === 1 ? 'hsl(var(--brand-teal))' : 'hsl(var(--brand-light))',
              opacity: 0.6,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `translateZ(${Math.random() * 200 - 100}px)`,
            }}
          />
        ))}
        
        {/* Enhanced gradient orbs with 3D positioning */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl animate-float-3d transform-gpu" 
             style={{ transform: 'translateZ(50px)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl animate-float-3d transform-gpu" 
             style={{ transform: 'translateZ(-30px)', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-brand-light/5 rounded-full blur-3xl animate-float-3d transform-gpu" 
             style={{ transform: 'translateZ(20px)', animationDelay: '2s' }} />
        
        {/* Holographic data streams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent animate-data-stream-3d"
              style={{
                top: `${20 + i * 10}%`,
                left: `${-10 + i * 15}%`,
                width: '30%',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s',
                transform: `rotateZ(${i * 5}deg) translateZ(${i * 10}px)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center space-y-8 relative z-10">
        {/* Professional RODELY AI Avatar */}
        <div className="relative mx-auto w-96 h-96">
          {/* Main Robot Container */}
          <div className="relative mx-auto w-64 h-64">
            {/* Professional Head - Sleek, modern design */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-slate-800 via-brand-teal to-brand-cyan rounded-2xl border border-slate-600/50 shadow-2xl">
              {/* Status Indicator */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full animate-pulse-brand shadow-lg">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
              </div>
              
              {/* Professional Eyes - LED style */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-8">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full shadow-lg animate-pulse-brand relative">
                  <div className="absolute inset-1 bg-white/20 rounded-full"></div>
                  <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full animate-pulse-brand"></div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full shadow-lg animate-pulse-brand relative" style={{ animationDelay: '0.4s' }}>
                  <div className="absolute inset-1 bg-white/20 rounded-full"></div>
                  <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full animate-pulse-brand"></div>
                </div>
              </div>
              
              {/* Status Display */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-slate-900/80 rounded-lg border border-slate-600/50 flex items-center justify-center">
                <div className="text-xs text-green-400 font-mono animate-pulse-brand">AI</div>
              </div>
            </div>

            {/* Professional Body - Enterprise design */}
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-32 h-28 bg-gradient-to-br from-slate-800 to-brand-teal/90 rounded-xl border border-slate-600/50 shadow-2xl">
              {/* RODELY Brand Panel */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-slate-900/90 rounded-lg border border-slate-600/50 flex items-center justify-center">
                <div className="text-brand-cyan font-bold text-xl tracking-wider">R</div>
              </div>
              
              {/* Professional Arms */}
              <div className={`absolute top-4 -left-5 w-5 h-14 bg-gradient-to-b from-slate-700 to-brand-teal rounded-lg border border-slate-600/50 transition-all duration-700 ${
                currentAnimation === 'waving' ? 'animate-bounce' : 
                currentAnimation === 'playing' ? 'animate-pulse-brand' : 'animate-float'
              }`}></div>
              <div className={`absolute top-4 -right-5 w-5 h-14 bg-gradient-to-b from-slate-700 to-brand-teal rounded-lg border border-slate-600/50 transition-all duration-700 ${
                currentAnimation === 'waving' ? 'animate-bounce' : 
                currentAnimation === 'playing' ? 'animate-pulse-brand' : 'animate-float'
              }`} style={{ animationDelay: currentAnimation === 'waving' ? '0.3s' : '0s' }}></div>
            </div>

            {/* Professional Base */}
            <div className="absolute top-48 left-1/2 transform -translate-x-1/2 w-24 h-10 bg-gradient-to-b from-slate-800 to-slate-700 rounded-xl border border-slate-600/50 shadow-xl flex justify-center space-x-4 items-center">
              <div className="w-2 h-3 bg-brand-cyan/60 rounded-full"></div>
              <div className="w-2 h-3 bg-brand-cyan/60 rounded-full"></div>
              <div className="w-2 h-3 bg-brand-cyan/60 rounded-full"></div>
            </div>
          </div>

          {/* Professional AI Assistant Hologram */}
          <div className={`absolute top-32 right-8 w-16 h-16 transition-all duration-1000 ${
            currentAnimation === 'playing' ? 'animate-bounce' : 'animate-float'
          }`}>
            <div className="relative w-full h-full">
              {/* Holographic AI Interface */}
              <div className="w-12 h-12 bg-gradient-to-br from-slate-800/90 to-brand-cyan/80 rounded-xl relative border border-slate-600/50 shadow-xl backdrop-blur-sm">
                {/* Status Light */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse-brand shadow-lg"></div>
                
                {/* Connection Lines */}
                <div className={`absolute -right-3 top-3 w-6 h-0.5 bg-gradient-to-r from-brand-cyan to-transparent transition-all duration-300 ${
                  currentAnimation === 'playing' ? 'animate-pulse-brand' : ''
                }`}></div>
                
                {/* LED Eyes */}
                <div className="absolute top-3 left-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse-brand shadow-sm"></div>
                <div className="absolute top-3 right-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse-brand shadow-sm" style={{ animationDelay: '0.3s' }}></div>
                
                {/* Data Stream */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-brand-cyan rounded-full animate-pulse-brand"></div>
              </div>
              
              {/* Professional Tech Particles */}
              {currentAnimation === 'playing' && (
                <>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse-brand"></div>
                  <div className="absolute -top-2 -left-2 w-1 h-1 bg-blue-400 rounded-full animate-pulse-brand" style={{ animationDelay: '0.4s' }}></div>
                  <div className="absolute -top-2 -right-2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse-brand" style={{ animationDelay: '0.8s' }}></div>
                </>
              )}
            </div>
          </div>

          {/* Professional Glow Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 via-brand-cyan/20 to-slate-800/20 blur-3xl animate-glow rounded-full"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-brand-teal/10 via-transparent to-brand-cyan/10 blur-2xl animate-pulse-brand rounded-full"></div>
        </div>
        
        {/* Professional Loading Interface */}
        <div className="space-y-8 max-w-2xl mx-auto">
          {/* Company Branding */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-brand-light to-brand-cyan bg-clip-text text-transparent tracking-wider">
              RODELY
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-brand"></div>
                <span>AI Systems Online</span>
              </div>
              <div className="w-px h-4 bg-slate-600"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-brand"></div>
                <span>Neural Networks Active</span>
              </div>
            </div>
          </div>
          
          {/* Professional Loading Status */}
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-white/90 text-xl font-medium mb-2 transition-all duration-500">
                {message || loadingMessages[currentMessageIndex]}
              </p>
              <p className="text-slate-400 text-sm font-mono">
                Initializing Enterprise AI Communication Platform
              </p>
            </div>
            
            {/* Professional Progress Bar */}
            <div className="space-y-3">
              <div className="w-full max-w-lg mx-auto bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/50 backdrop-blur-sm">
                <div
                  className="h-2 bg-gradient-to-r from-brand-teal via-brand-cyan to-brand-teal transition-all duration-500 relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Professional shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </div>
              
              {/* Progress Indicators */}
              <div className="flex justify-between items-center text-xs text-slate-400 w-full max-w-lg mx-auto font-mono">
                <span>INIT</span>
                <span className="text-brand-cyan font-bold">{progress}%</span>
                <span>READY</span>
              </div>
            </div>
          </div>

          {/* Professional Status Messages */}
          <div className="space-y-3 text-slate-400 text-sm max-w-lg mx-auto font-mono">
            {progress < 20 && <div className="flex items-center gap-3"><span className="text-green-400">✓</span><span>Core systems initialized</span></div>}
            {progress >= 20 && progress < 40 && <div className="flex items-center gap-3"><span className="text-green-400">✓</span><span>AI neural networks loaded</span></div>}
            {progress >= 40 && progress < 60 && <div className="flex items-center gap-3"><span className="text-green-400">✓</span><span>Communication protocols established</span></div>}
            {progress >= 60 && progress < 80 && <div className="flex items-center gap-3"><span className="text-green-400">✓</span><span>Voice synthesis engines ready</span></div>}
            {progress >= 80 && progress < 95 && <div className="flex items-center gap-3"><span className="text-green-400">✓</span><span>Security protocols activated</span></div>}
            {progress >= 95 && <div className="flex items-center gap-3"><span className="text-brand-cyan animate-pulse-brand">⚡</span><span>Ready to serve - Welcome to RODELY</span></div>}
          </div>
        </div>
      </div>
    </div>
  );
};
