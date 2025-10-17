import { Bot, Globe, Zap, Clock, Users, Award, TrendingUp, Shield, MessageSquare, Phone, Heart, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePageTransition } from "@/hooks/usePageTransition";

export const About = () => {
  const { navigateWithLoading } = usePageTransition();

  const features = [
    {
      icon: Bot,
      title: "AI-Powered Intelligence",
      description: "Cutting-edge AI technology that learns and adapts to your business needs with advanced machine learning algorithms",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry with round-the-clock automated responses and intelligent call routing",
    },
    {
      icon: Globe,
      title: "Global Presence",
      description: "Serving businesses in Egypt 🇪🇬 and the United States 🇺🇸 with localized support and multi-language capabilities",
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Lightning-fast replies that keep your customers engaged and satisfied with sub-second response times",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless integration with your existing team workflows and CRM systems for unified communication",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Trusted by hundreds of businesses with 99.9% uptime and 95% customer satisfaction rates",
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Grows with your business from startup to enterprise with flexible pricing and feature scaling",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance with international data protection standards",
    },
  ];

  const stats = [
    { number: "500+", label: "Active Businesses", icon: Users },
    { number: "50K+", label: "Calls Handled Daily", icon: Phone },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Customer Support", icon: Heart },
  ];

  const timeline = [
    {
      year: "2025",
      title: "RODELY Founded",
      description: "Started with a vision to revolutionize business communication through AI",
    },
    {
      year: "2025",
      title: "First AI Receptionist",
      description: "Launched our first AI-powered phone answering system",
    },
    {
      year: "2025",
      title: "WhatsApp Integration",
      description: "Expanded to include WhatsApp automation for global reach",
    },
    {
      year: "2025",
      title: "Enterprise Solutions",
      description: "Launched enterprise-grade features and multi-language support",
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanded operations to serve businesses in Egypt and the United States",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-dark via-brand-teal-darker to-brand-cyan-darker text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              About <span className="bg-gradient-to-r from-brand-cyan via-brand-light to-brand-teal bg-clip-text text-transparent">RODELY</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-light/90 mb-8 leading-relaxed">
              RODELY is revolutionizing business communication through intelligent AI automation. 
              We empower businesses to provide exceptional customer experiences while reducing operational costs 
              and increasing efficiency across all communication channels.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="brand-cyan" 
                size="lg"
                onClick={() => navigateWithLoading('/services', 'Exploring Our Services...')}
              >
                Explore Services
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg"
                onClick={() => navigateWithLoading('/contact', 'Getting in Touch...')}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-brand-teal">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To democratize access to enterprise-level communication automation for businesses of all sizes. 
                We believe every business deserves to provide exceptional customer experiences without the overhead 
                of traditional call centers or support teams.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our AI-powered solutions bridge the gap between human touch and digital efficiency, 
                ensuring your customers always feel heard and valued while your business operates at peak performance.
              </p>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-teal/10 rounded-lg">
                  <Target className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Customer-First Approach</h3>
                  <p className="text-muted-foreground">Every feature is designed with your customers' experience in mind</p>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <div className="bg-gradient-to-br from-brand-teal/20 to-brand-cyan/20 rounded-2xl p-8 backdrop-blur-sm border border-brand-cyan/30">
                  <h3 className="text-2xl font-bold mb-4 text-brand-cyan">Our Vision</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To become the world's leading AI communication platform, transforming how businesses 
                    connect with their customers across every touchpoint, from the first hello to ongoing support.
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-cyan rounded-full animate-pulse-brand"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-teal rounded-full animate-pulse-brand" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-brand-light/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Businesses Worldwide</h2>
            <p className="text-xl text-muted-foreground">Numbers that speak to our success and reliability</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 text-center bg-card/50 backdrop-blur-sm border-border hover:border-brand-cyan/50 transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="mb-4 p-4 bg-brand-cyan/10 rounded-full w-fit mx-auto">
                  <stat.icon className="w-8 h-8 text-brand-cyan" />
                </div>
                <div className="text-4xl font-bold text-brand-teal mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="text-brand-cyan">RODELY</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover the features that make RODELY the preferred choice for intelligent business communication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-brand-dark/5 to-brand-teal/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">From startup to global AI communication leader</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-teal to-brand-cyan"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-12 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="absolute left-6 w-4 h-4 bg-brand-cyan rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-16">
                    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300">
                      <div className="text-brand-teal font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-teal to-brand-cyan text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of businesses already using RODELY to revolutionize their customer communication
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="brand-light" 
              size="lg"
              onClick={() => navigateWithLoading('/demo', 'Loading Demo...')}
            >
              Try Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-teal"
              onClick={() => navigateWithLoading('/contact', 'Connecting with Sales...')}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
