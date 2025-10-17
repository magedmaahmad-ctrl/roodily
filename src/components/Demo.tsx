import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

export const Demo = () => {
  const whatsappChat = [
    { type: "customer", text: "Hello, I'm interested in your services" },
    { type: "ai", text: "Hi! 👋 I'm RODELY's AI assistant. I'd be happy to help! What would you like to know about our AI automation services?" },
    { type: "customer", text: "What are your pricing plans?" },
    { type: "ai", text: "Great question! We offer flexible plans based on your needs. Would you like me to connect you with our sales team for a personalized quote?" },
  ];

  const phoneCall = [
    { time: "00:05", text: "AI: Good morning! Thank you for calling RODELY. How may I assist you today?" },
    { time: "00:12", text: "Customer: I'd like to schedule an appointment" },
    { time: "00:15", text: "AI: I'd be happy to help you schedule an appointment. What day works best for you?" },
    { time: "00:22", text: "Customer: Tomorrow at 2 PM" },
    { time: "00:25", text: "AI: Perfect! I've scheduled your appointment for tomorrow at 2 PM. You'll receive a confirmation via email shortly." },
  ];

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">RODELY</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Watch how our AI handles real customer interactions with intelligence and efficiency
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* WhatsApp Demo */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">WhatsApp AI Assistant</h3>
                <p className="text-sm text-muted-foreground">Real-time chat automation</p>
              </div>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {whatsappChat.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === "customer" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === "customer"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Response time: &lt;2 seconds</span>
              </div>
            </div>
          </Card>

          {/* Phone Call Demo */}
          <Card className="p-6 bg-card border-border">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">AI Phone Receptionist</h3>
                <p className="text-sm text-muted-foreground">Natural voice conversation</p>
              </div>
            </div>

            <div className="space-y-4">
              {phoneCall.map((entry, index) => (
                <div key={index} className="flex gap-3">
                  <div className="text-xs text-muted-foreground font-mono mt-1 w-12 flex-shrink-0">
                    {entry.time}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm ${entry.text.startsWith("AI:") ? "text-primary" : "text-foreground"}`}>
                      {entry.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Appointment scheduled successfully</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
