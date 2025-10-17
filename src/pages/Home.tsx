import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { usePageTransition } from "@/hooks/usePageTransition";
import robotMascot from "@/assets/robot-mascot.png";
import heroBg from "@/assets/hero-bg.png";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Home = () => {
  const { navigateWithLoading } = usePageTransition();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-hero"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-teal-darker/80 to-brand-cyan-darker/70 backdrop-blur-sm" />
        
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                  AI-Powered Communication
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Your AI Receptionist,{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Always Ready
                </span>{" "}
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
                  onClick={() => navigateWithLoading('/contact', 'Preparing Contact Form...')}
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="brand-teal" 
                  size="lg" 
                  className="group"
                  onClick={() => navigateWithLoading('/demo', 'Loading Demo Environment...')}
                >
                  <Play className="mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center p-4 rounded-lg bg-brand-light/10 border border-brand-cyan/20">
                  <div className="text-3xl font-bold text-brand-cyan">24/7</div>
                  <div className="text-sm text-brand-light/80">Available</div>
                </div>
                <div className="h-12 w-px bg-brand-cyan/30" />
                <div className="text-center p-4 rounded-lg bg-brand-light/10 border border-brand-teal/20">
                  <div className="text-3xl font-bold text-brand-teal">100%</div>
                  <div className="text-sm text-brand-light/80">Automated</div>
                </div>
                <div className="h-12 w-px bg-brand-cyan/30" />
                <div className="text-center p-4 rounded-lg bg-brand-light/10 border border-brand-cyan/20">
                  <div className="text-3xl font-bold text-brand-cyan">AI</div>
                  <div className="text-sm text-brand-light/80">Powered</div>
                </div>
              </div>
            </div>
            
            <div className="relative lg:block hidden">
              <div className="relative z-10 animate-float">
                <img
                  src={robotMascot}
                  alt="RODELY AI Robot"
                  className="w-full max-w-md mx-auto drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/30 via-brand-cyan/40 to-brand-teal/30 blur-3xl animate-glow rounded-full" />
              <div className="absolute inset-4 bg-gradient-to-r from-brand-cyan/20 to-brand-teal/20 blur-2xl animate-pulse-brand rounded-full" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
