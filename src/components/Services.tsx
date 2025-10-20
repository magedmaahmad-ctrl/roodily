import { 
  Phone, MessageSquare, TrendingUp, Workflow, Users, Zap, Shield, 
  Globe, Clock, BarChart3, Settings, Headphones, Bot, Star,
  CheckCircle, ArrowRight, Play, Calendar, Mail, Database
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePageTransition } from "@/hooks/usePageTransition";

export const Services = () => {
  const { navigateWithLoading } = usePageTransition();

  const mainServices = [
    {
      icon: Phone,
      title: "AI Receptionist",
      description: "Advanced AI-powered phone answering system that handles calls with human-like intelligence, 24/7 availability, and seamless call routing.",
      features: [
        "Natural voice interaction with emotional intelligence",
        "Smart call routing and transfer to appropriate departments",
        "Automated appointment scheduling and calendar integration",
        "Multi-language support (Arabic, English, Spanish, French)",
        "Call recording and transcription for quality assurance",
        "Integration with popular phone systems (VoIP, PBX)"
      ],
      benefits: ["99% reduction in missed calls", "24/7 availability", "Consistent professional service"],
      pricing: "Starting at $99/month",
      popular: true
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Business Automation",
      description: "Comprehensive WhatsApp Business solution that automates customer interactions, order processing, and support with intelligent responses.",
      features: [
        "Instant auto-replies with context awareness",
        "Product catalog integration and ordering",
        "Order tracking and status updates",
        "Customer support ticket management",
        "Bulk messaging and broadcast capabilities",
        "Media sharing and document handling"
      ],
      benefits: ["80% faster response times", "Increased customer satisfaction", "Automated order processing"],
      pricing: "Starting at $79/month",
      popular: false
    },
    {
      icon: TrendingUp,
      title: "Smart Lead Management",
      description: "Intelligent lead capture, qualification, and nurturing system that maximizes conversion rates and sales efficiency.",
      features: [
        "Automated lead qualification and scoring",
        "Multi-channel lead capture (website, social, phone)",
        "Follow-up automation and email sequences",
        "Lead assignment and team collaboration",
        "Performance analytics and ROI tracking",
        "Integration with sales CRM systems"
      ],
      benefits: ["3x higher conversion rates", "Automated follow-ups", "Better lead quality"],
      pricing: "Starting at $149/month",
      popular: true
    },
    {
      icon: Workflow,
      title: "Business Process Automation",
      description: "End-to-end automation platform that streamlines business workflows and integrates with your existing tools and systems.",
      features: [
        "Custom workflow automation and triggers",
        "Integration with 100+ popular business tools",
        "Data synchronization across platforms",
        "Automated reporting and notifications",
        "Custom API development and webhooks",
        "Multi-user collaboration and permissions"
      ],
      benefits: ["50% time savings", "Reduced human errors", "Seamless integrations"],
      pricing: "Starting at $199/month",
      popular: false
    },
    {
      icon: Users,
      title: "Customer Success Platform",
      description: "Comprehensive customer relationship management with AI-powered insights, automated support, and personalized experiences.",
      features: [
        "360-degree customer view and history",
        "AI-powered customer insights and predictions",
        "Automated customer onboarding and training",
        "Proactive support and issue resolution",
        "Customer satisfaction surveys and feedback",
        "Retention campaigns and upselling automation"
      ],
      benefits: ["25% increase in retention", "Proactive support", "Data-driven insights"],
      pricing: "Starting at $179/month",
      popular: false
    },
    {
      icon: BarChart3,
      title: "Analytics & Intelligence",
      description: "Advanced analytics dashboard with AI-powered insights, performance tracking, and business intelligence for data-driven decisions.",
      features: [
        "Real-time performance dashboards",
        "AI-powered business insights and recommendations",
        "Custom reporting and data visualization",
        "ROI tracking and cost analysis",
        "Predictive analytics and forecasting",
        "Competitive analysis and benchmarking"
      ],
      benefits: ["Data-driven decisions", "Performance optimization", "Competitive advantage"],
      pricing: "Starting at $129/month",
      popular: true
    }
  ];

  const additionalServices = [
    {
      icon: Settings,
      title: "Custom Development",
      description: "Tailored AI solutions built specifically for your unique business requirements and workflows."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support and customer success management from our expert team."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with SOC 2 compliance and GDPR adherence for data protection."
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Native support for 15+ languages with localized AI responses and cultural adaptation."
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with AI automation",
      features: [
        "Basic AI Receptionist",
        "Up to 500 calls/month",
        "Email support",
        "Basic analytics",
        "1 phone number"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses needing comprehensive automation",
      features: [
        "All core services included",
        "Up to 2,000 calls/month",
        "WhatsApp Business automation",
        "Priority support",
        "Advanced analytics",
        "Up to 5 phone numbers",
        "CRM integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with specific needs",
      features: [
        "Unlimited calls and messages",
        "Custom AI training",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "SLA guarantees",
        "On-premise deployment options"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-dark via-brand-teal-darker to-brand-cyan-darker text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Our <span className="bg-gradient-to-r from-brand-cyan via-brand-light to-brand-teal bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-light/90 mb-8 leading-relaxed">
              Comprehensive AI automation solutions that transform how your business communicates, 
              operates, and grows. From intelligent phone answering to complete workflow automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="brand-cyan" 
                size="lg"
                onClick={() => navigateWithLoading('/demo', 'Loading Demo Environment...')}
              >
                <Play className="mr-2" />
                Watch Demo
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg"
                onClick={() => navigateWithLoading('/contact', 'Connecting with Sales...')}
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Core <span className="text-brand-teal">AI Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Powerful AI solutions designed to automate and enhance every aspect of your business communication
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.slice(0, 2).map((service, index) => (
              <Card
                key={index}
                className={`p-8 bg-card/80 backdrop-blur-sm border-border hover:border-brand-cyan/50 transition-all duration-300 group relative ${
                  service.popular ? 'ring-2 ring-brand-cyan/30' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-cyan text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="mb-6 flex items-start justify-between">
                  <div className="p-4 bg-gradient-to-br from-brand-teal/20 to-brand-cyan/20 rounded-xl w-fit group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-brand-teal" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-brand-cyan">{service.pricing}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-brand-teal">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-brand-teal">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-xs font-medium">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-brand-teal group-hover:text-white group-hover:border-brand-teal transition-colors"
                  onClick={() => navigateWithLoading('/contact', 'Setting up consultation...')}
                >
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-brand-light/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Additional <span className="text-brand-cyan">Services</span></h2>
            <p className="text-xl text-muted-foreground">Complementary services to support your AI automation journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-brand-cyan/50 transition-all duration-300 hover:scale-105 group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 p-3 bg-brand-cyan/10 rounded-lg w-fit group-hover:bg-brand-cyan/20 transition-colors">
                  <service.icon className="w-6 h-6 text-brand-cyan" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent <span className="text-brand-teal">Pricing</span></h2>
            <p className="text-xl text-muted-foreground">Choose the plan that fits your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`p-8 bg-card/80 backdrop-blur-sm border-border transition-all duration-300 hover:scale-105 relative ${
                  tier.popular ? 'ring-2 ring-brand-cyan/50 shadow-elevated' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brand-cyan text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-brand-teal">{tier.price}</span>
                    <span className="text-muted-foreground ml-1">{tier.period}</span>
                  </div>
                  <p className="text-muted-foreground">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={tier.popular ? "brand-cyan" : "outline"}
                  className="w-full"
                  onClick={() => navigateWithLoading('/contact', 'Setting up your plan...')}
                >
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-teal to-brand-cyan text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of businesses already using RODELY to transform their communication and boost productivity
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="brand-light" 
              size="lg"
              onClick={() => navigateWithLoading('/demo', 'Loading Demo...')}
            >
              <Play className="mr-2" />
              Try Free Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white bg-transparent hover:bg-white hover:text-brand-teal"
              onClick={() => navigateWithLoading('/contact', 'Connecting with Sales...')}
            >
              <Calendar className="mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
