import { Facebook, Linkedin, MessageCircle, Instagram, X, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import robotMascot from "@/assets/robot-mascot.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 w-fit">
              <img src={robotMascot} alt="RODELY" className="w-12 h-12" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                RODELY
              </span>
            </Link>
            <p className="text-muted-foreground">
              AI-powered communication automation for modern businesses in Egypt and the United States.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-muted-foreground hover:text-primary transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://wa.me/01148899442"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-500/10 hover:bg-green-500/20 rounded-lg transition-colors group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-pink-500/10 hover:bg-pink-500/20 rounded-lg transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-sky-500/10 hover:bg-sky-500/20 rounded-lg transition-colors group"
                aria-label="X (Twitter)"
              >
                <X className="w-5 h-5 text-sky-500 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:info@rodely.tech"
                className="p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2025 RODELY – All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
