import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded font-bold text-lg">
                夢
              </div>
              <div className="font-bold text-lg">Yume</div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              South Kolkata's premier Japanese language institute. Learn Japanese the fun and easy way!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>JLPT Preparation</li>
              <li>NAT Test Coaching</li>
              <li>Visa Assistance</li>
              <li>Job Placement</li>
              <li>Cultural Training</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary-foreground/80 text-sm">
                <MapPin className="h-4 w-4" />
                <span>South Kolkata, West Bengal</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@yumejapanese.com</span>
              </div>
              <div className="flex space-x-3 mt-4">
                <Facebook className="h-5 w-5 text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors" />
                <Instagram className="h-5 w-5 text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-primary-foreground/80 hover:text-primary-foreground cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Yume Japanese Language School. All rights reserved. | 
            <Link to="/privacy" className="hover:text-primary-foreground ml-1">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;