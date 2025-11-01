import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import SiteLogo from "@/assets/site-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary text-primary-foreground rounded-full p-[3px]">
                <img src={SiteLogo} alt="YJLS Logo" className="size-8" />
              </div>
              <div className="font-bold text-lg">YJLS</div>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Kolkata's premier Japanese language institute. Learn Japanese the fun and easy way!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
                <Link to="/testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Testimonials
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
              <li>Scholarship Guidance</li>
              <li>Study in Japan Guidance</li>
              <li>Job & Resume Guidance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary-foreground/80 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Rajpur Sonarpur, Kolkata</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 86700 35037</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80 text-sm">
                <Mail className="h-4 w-4" />
                <span>yumejapaneseschool@gmail.com</span>
              </div>
              {/* Social Media Links */}
              <div className="hover:shadow-soft transition-all duration-300">
                <div className="">
                  <div className="flex flex-wrap justify-start">
                    <div
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/profile.php?id=100084716997973&sk=photos&locale=hi_IN",
                          "_blank"
                        )
                      }
                      className="text-blue-600 rounded-lg transition-colors cursor-pointer group relative min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="Facebook"
                      title="Facebook"
                    >
                      <Facebook className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                        Facebook
                      </div>
                    </div>
                    <div
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/suntugaye?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                          "_blank"
                        )
                      }
                      className="text-pink-600 rounded-lg transition-colors cursor-pointer group relative min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="Instagram"
                      title="Instagram"
                    >
                      <Instagram className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                        Instagram
                      </div>
                    </div>
                    <div
                      onClick={() =>
                        window.open(
                          "https://whatsapp.com/channel/0029VbB3Yfr3WHTbY1VRoI2D",
                          "_blank"
                        )
                      }
                      className="text-green-600 rounded-lg transition-colors cursor-pointer group relative min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="WhatsApp Channel"
                      title="WhatsApp Channel"
                    >
                      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                        WhatsApp Channel
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center space-y-5">
          <p className="text-primary-foreground/80 text-sm">
            © {new Date().getFullYear()} Yume Japanese Language School. All rights reserved. |
            <Link to="/privacy" className="hover:text-primary-foreground ml-1 hover:underline">Privacy Policy</Link>
          </p>
          <p className="text-primary-foreground/50 text-xs">
            Website developed by
            <span
              onClick={() =>
                window.open(
                  "https://pancham-portfolio.netlify.app/",
                  "_blank"
                )
              }
              className="text-primary-foreground ml-1 cursor-pointer hover:underline"
            >
              Pancham Sardar
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;