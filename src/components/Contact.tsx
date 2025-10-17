import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePageTransition } from "@/hooks/usePageTransition";
import { 
  Phone, Mail, MapPin, MessageSquare, Clock, Users, Zap, 
  Calendar, CheckCircle, Star, ArrowRight, Globe, Headphones,
  Shield, Award, TrendingUp
} from "lucide-react";

export const Contact = () => {
  const { navigateWithLoading } = usePageTransition();

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our AI experts",
      details: [
        "Egypt: +20 11 4889 9442",
        "Egypt: +20 11 1597 2288",
        "US: +1 (555) 123-4567"
      ],
      action: "Call Now",
      color: "brand-teal"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Business",
      description: "Instant messaging for quick support",
      details: [
        "Available 24/7",
        "File sharing enabled",
        "Voice messages supported"
      ],
      action: "Chat Now",
      color: "green-500"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed inquiries and documentation",
      details: [
        "info@rodely.ai",
        "support@rodely.ai",
        "sales@rodely.ai"
      ],
      action: "Send Email",
      color: "brand-cyan"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a personalized consultation",
      details: [
        "Free 30-minute consultation",
        "Screen sharing available",
        "Custom demo included"
      ],
      action: "Book Now",
      color: "brand-teal"
    }
  ];

  const offices = [
    {
      country: "Egypt",
      flag: "🇪🇬",
      address: "Cairo, Egypt",
      timezone: "GMT+2",
      hours: "24/7 Support"
    },
    {
      country: "United States",
      flag: "🇺🇸", 
      address: "New York, NY",
      timezone: "GMT-5",
      hours: "24/7 Support"
    }
  ];

  const faqs = [
    {
      question: "How quickly can RODELY be implemented?",
      answer: "Most implementations are completed within 1-2 weeks, including setup, training, and testing phases."
    },
    {
      question: "Do you offer custom AI training?",
      answer: "Yes! We provide custom AI training based on your specific business needs, industry terminology, and communication style."
    },
    {
      question: "What languages does RODELY support?",
      answer: "RODELY supports 15+ languages including Arabic, English, Spanish, French, German, and more with native-level fluency."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial with full access to all features and dedicated support."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-brand-dark via-brand-teal-darker to-brand-cyan-darker text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Get in <span className="bg-gradient-to-r from-brand-cyan via-brand-light to-brand-teal bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-light/90 mb-8 leading-relaxed">
              Ready to transform your business communication? Our team of AI experts is here to help you 
              get started with RODELY and answer any questions you might have.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="brand-cyan" 
                size="lg"
                onClick={() => navigateWithLoading('/demo', 'Loading Demo...')}
              >
                <Zap className="mr-2" />
                Try Free Demo
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg"
                onClick={() => window.open('tel:01148899442')}
              >
                <Phone className="mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Multiple Ways to <span className="text-brand-teal">Connect</span></h2>
            <p className="text-xl text-muted-foreground">Choose the communication method that works best for you</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-brand-cyan/50 transition-all duration-300 hover:scale-105 group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`mb-4 p-3 bg-${method.color}/10 rounded-lg w-fit group-hover:bg-${method.color}/20 transition-colors`}>
                  <method.icon className={`w-6 h-6 text-${method.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{method.description}</p>
                <ul className="space-y-1 mb-4">
                  {method.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground">{detail}</li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-brand-teal group-hover:text-white group-hover:border-brand-teal transition-colors"
                >
                  {method.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-24 bg-brand-light/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground text-lg">
                    Get in touch with our team through any of these channels. We're here to help 24/7.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-teal/10 rounded-lg">
                      <Phone className="w-6 h-6 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone Numbers</h3>
                      <div className="space-y-1">
                        <a href="tel:01148899442" className="text-muted-foreground hover:text-brand-teal transition-colors block">
                          📞 +20 11 4889 9442 (Egypt)
                        </a>
                        <a href="tel:01115972288" className="text-muted-foreground hover:text-brand-teal transition-colors block">
                          📞 +20 11 1597 2288 (Egypt)
                        </a>
                        <a href="tel:15551234567" className="text-muted-foreground hover:text-brand-teal transition-colors block">
                          📞 +1 (555) 123-4567 (US)
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-cyan/10 rounded-lg">
                      <Mail className="w-6 h-6 text-brand-cyan" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email Addresses</h3>
                      <div className="space-y-1">
                        <a href="mailto:info@rodely.ai" className="text-muted-foreground hover:text-brand-cyan transition-colors block">
                          info@rodely.ai
                        </a>
                        <a href="mailto:support@rodely.ai" className="text-muted-foreground hover:text-brand-cyan transition-colors block">
                          support@rodely.ai
                        </a>
                        <a href="mailto:sales@rodely.ai" className="text-muted-foreground hover:text-brand-cyan transition-colors block">
                          sales@rodely.ai
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">WhatsApp Business</h3>
                      <a href="https://wa.me/01148899442" className="text-muted-foreground hover:text-green-500 transition-colors block">
                        Chat with us instantly on WhatsApp
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Available 24/7 with instant responses</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-teal/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Our Offices</h3>
                      <div className="space-y-2">
                        {offices.map((office, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="text-lg">{office.flag}</span>
                            <div>
                              <p className="font-medium">{office.address}</p>
                              <p className="text-sm text-muted-foreground">{office.timezone} • {office.hours}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-br from-brand-teal/10 to-brand-cyan/10 rounded-xl p-6 border border-brand-cyan/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-brand-cyan" />
                    <h3 className="font-semibold">Response Times</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Phone Calls:</span>
                      <span className="text-brand-teal font-medium">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span>WhatsApp:</span>
                      <span className="text-brand-teal font-medium">&lt; 1 minute</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <span className="text-brand-teal font-medium">&lt; 2 hours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-border">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you within 2 hours during business hours.
                </p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest</label>
                    <select className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors">
                      <option>Select a service</option>
                      <option>AI Receptionist</option>
                      <option>WhatsApp Automation</option>
                      <option>Lead Management</option>
                      <option>Business Process Automation</option>
                      <option>Customer Success Platform</option>
                      <option>Analytics & Intelligence</option>
                      <option>Custom Development</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      rows={5}
                      required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-colors resize-none"
                      placeholder="Tell us about your business needs and how we can help..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="newsletter" className="mt-1" />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      I'd like to receive updates about RODELY's new features and AI innovations
                    </label>
                  </div>

                  <Button 
                    variant="gradient-accent" 
                    size="lg" 
                    className="w-full btn-glow"
                    onClick={() => navigateWithLoading('/demo', 'Preparing demo for you...')}
                  >
                    Send Message
                    <ArrowRight className="ml-2" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked <span className="text-brand-cyan">Questions</span></h2>
            <p className="text-xl text-muted-foreground">Quick answers to common questions about RODELY</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-brand-cyan/50 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-3 text-brand-teal">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
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
            Join hundreds of businesses already using RODELY to transform their communication
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="brand-light" 
              size="lg"
              onClick={() => navigateWithLoading('/demo', 'Loading Demo...')}
            >
              <Zap className="mr-2" />
              Try Free Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-teal"
              onClick={() => window.open('https://wa.me/01148899442')}
            >
              <MessageSquare className="mr-2" />
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
