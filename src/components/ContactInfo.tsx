// components/ContactInfo.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  MessageCircle,
  Star,
  Users,
  GraduationCap
} from "lucide-react";

interface ContactAction {
  text: string;
  link: string;
  isCustomHandler?: boolean;
}

interface ContactInfoItem {
  icon: React.ReactNode;
  title: string;
  details: string[];
  action?: ContactAction;
}

const ContactInfo: React.FC = () => {
  const handleEmailClick = () => {
    const email = "Yumejapaneseschool@gmail.com";
    const subject = "Japanese Course Inquiry - Yume Japanese Language School";
    const body = `Dear YJLS Team,

I hope this email finds you well. I came across your website and I'm very interested in learning Japanese at your institute.

Could you please provide me with detailed information about:

✅ Course levels (Beginner/Intermediate/Advanced)
✅ Class schedules and duration
✅ Course fees and payment options
✅ JLPT exam preparation
✅ Availability of free trial classes
✅ Online/offline class options

Personal Details:
Name: [Your Name]
Phone: [Your Phone Number]
Age: [Your Age]
Current Japanese Level: [Beginner/Some Knowledge/Intermediate]
Preferred Start Date: [When you'd like to start]

I would appreciate any additional information or brochures you could share.

Thank you for your time and I look forward to hearing from you soon!

Warm regards,
[Your Name]`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailtoLink;
    } catch (error) {
      navigator.clipboard.writeText(email).then(() => {
        alert(`Email address copied to clipboard: ${email}\nPlease paste it into your email client.`);
      });
    }
  };

  const handleActionClick = (action: ContactAction) => {
    if (action.isCustomHandler && action.text === "Send Email") {
      handleEmailClick();
    } else {
      window.open(action.link, '_blank');
    }
  };

  const contactInfo: ContactInfoItem[] = [
    {
      icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Address",
      details: ["Mali Pukria, near IILDS Hospital", "Rajpur Sonarpur, Kolkata", "West Bengal 700150"],
      action: { text: "Get Directions", link: "https://maps.app.goo.gl/NyC6MFCtXFqLYXfz5" }
    },
    {
      icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Phone",
      details: ["+91 80130 72585", "+91 87776 71272", "Available: 9 AM - 8 PM"],
      action: { text: "Call Now", link: "tel:+918013072585" }
    },
    {
      icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Email",
      details: ["Yumejapaneseschool@gmail.com", "Quick response guaranteed", "Available 24/7"],
      action: { text: "Send Email", link: "#", isCustomHandler: true }
    },
    {
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      action: { text: "Book a Free Trial", link: "tel:+918670035037" }
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {contactInfo.map((info, index) => (
          <Card key={index} className="hover:shadow-soft transition-all duration-300 group">
            <CardContent className="p-3 sm:p-4 md:p-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-primary mt-0.5 sm:mt-1 group-hover:scale-110 transition-transform flex-shrink-0">
                  {info.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-xs sm:text-sm mb-0.5 sm:mb-1 leading-relaxed">
                      {detail}
                    </p>
                  ))}
                  {info.action && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 sm:mt-3 h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm"
                      onClick={() => handleActionClick(info.action!)}
                    >
                      {info.action.text}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* WhatsApp Quick Contact */}
      <Card className="hover:shadow-soft transition-all duration-300 bg-green-50 border-green-200">
        <CardContent className="p-3 sm:p-4 md:p-6">
          <h3 className="font-semibold text-foreground text-sm sm:text-base md:text-lg mb-3 sm:mb-4 flex items-center gap-2">
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
            <span>Quick WhatsApp Contact</span>
          </h3>
          <div className="space-y-2 sm:space-y-3">
            <a
              href="https://wa.me/918013072585?text=Hello%20YJLS%21%20I%20saw%20your%20website%20and%20I%27m%20impressed%20with%20your%20course%20offerings.%20Can%20you%20guide%20me%20on%20which%20Japanese%20course%20would%20be%20best%20for%20me%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 sm:p-3 bg-green-100 rounded-lg hover:bg-green-200 transition-colors group min-h-[44px]"
            >
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                <span className="text-green-700 font-medium text-xs sm:text-sm truncate">
                  +91 80130 72585
                </span>
              </div>
              <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 h-8 px-2 sm:px-3 text-xs sm:text-sm flex-shrink-0 ml-2">
                Chat Now
              </Button>
            </a>
            <a
              href="https://wa.me/918670035037?text=Hello%20YJLS%21%20I%20saw%20your%20website%20and%20I%27m%20impressed%20with%20your%20course%20offerings.%20Can%20you%20guide%20me%20on%20which%20Japanese%20course%20would%20be%20best%20for%20me%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 sm:p-3 bg-green-100 rounded-lg hover:bg-green-200 transition-colors group min-h-[44px]"
            >
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                <span className="text-green-700 font-medium text-xs sm:text-sm truncate">
                  +91 8670035037
                </span>
              </div>
              <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 h-8 px-2 sm:px-3 text-xs sm:text-sm flex-shrink-0 ml-2">
                Chat Now
              </Button>
            </a>
            <a
              href="https://wa.me/918777671272?text=Hello%20YJLS%21%20I%20saw%20your%20website%20and%20I%27m%20impressed%20with%20your%20course%20offerings.%20Can%20you%20guide%20me%20on%20which%20Japanese%20course%20would%20be%20best%20for%20me%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2 sm:p-3 bg-green-100 rounded-lg hover:bg-green-200 transition-colors group min-h-[44px]"
            >
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                <span className="text-green-700 font-medium text-xs sm:text-sm truncate">
                  +91 87776 71272
                </span>
              </div>
              <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 h-8 px-2 sm:px-3 text-xs sm:text-sm flex-shrink-0 ml-2">
                Chat Now
              </Button>
            </a>
            <p className="text-xs text-green-600 mt-2 leading-relaxed">
              💬 Get instant responses to your questions!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card className="hover:shadow-soft transition-all duration-300">
        <img
          src="https://i.pinimg.com/originals/d9/e6/e0/d9e6e0126e9cf8ca543a1ca26c9b176c.gif"
          alt="Chibi Mascot"
          className="w-14 md:w-20 transform scale-x-[-1] text-right"
        />
        <CardContent className="p-3 sm:p-4 md:p-6">
          <h3 className="font-semibold text-foreground text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
            Follow Us
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-start">
            <div
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100084716997973&sk=photos&locale=hi_IN",
                  "_blank"
                )
              }
              className="p-2.5 sm:p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer group relative min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Facebook"
              title="Facebook"
            >
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
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
              className="p-2.5 sm:p-3 bg-pink-50 text-pink-600 rounded-lg hover:bg-pink-100 transition-colors cursor-pointer group relative min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
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
              className="p-2.5 sm:p-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors cursor-pointer group relative min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="WhatsApp Channel"
              title="WhatsApp Channel"
            >
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                WhatsApp Channel
              </div>
            </div>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed text-center sm:text-left">
            🌟 Stay updated with our latest courses, events, and student success stories!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
