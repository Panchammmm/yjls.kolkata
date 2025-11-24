// components/contactData.ts

export interface EmailTemplateData {
  name: string;
  email: string;
  phone: string;
  age?: string;
  course?: string;
  experience?: string;
  selectedServices: string[];
  urgency?: string;
  preferredTime?: string;
  message?: string;
  newsletter?: boolean;
}

export interface ContactAction {
  text: string;
  link: string;
}

export interface ContactInfoItem {
  icon: string;
  title: string;
  details: string[];
  action?: ContactAction;
}

// Additional services data with updated job search terms
export const additionalServices: string[] = [
  "JLPT Exam Registration",
  "NAT Exam Registration",
  "Career Placement Support",
  "Japan Job Market Guidance",
  "Resume & Interview Preparation",
  "Cultural Events Access"
];

// Time slots for preferred contact time
export const timeSlots: string[] = [
  "Morning (9 AM - 12 PM)",
  "Afternoon (12 PM - 5 PM)", 
  "Evening (5 PM - 8 PM)",
  "Flexible timing"
];

// Contact information data
export const contactInfo: ContactInfoItem[] = [
  {
    icon: "MapPin",
    title: "Address",
    details: ["Mali Pukria, near IILDS Hospital", "Rajpur Sonarpur, Kolkata", "West Bengal 700150"],
    action: { text: "Get Directions", link: "https://maps.app.goo.gl/NyC6MFCtXFqLYXfz5" }
  },
  {
    icon: "Phone",
    title: "Phone",
    details: ["+91 80130 72585", "+91 87776 71272", "Available: 9 AM - 10 PM"],
    action: { text: "Call Now", link: "tel:+918013072585" }
  },
  {
    icon: "Mail",
    title: "Email",
    details: ["Yumejapaneseschool@gmail.com", "Quick response guaranteed", "Available 24/7"],
    action: { text: "Send Email", link: "mailto:Yumejapaneseschool@gmail.com" }
  },
  {
    icon: "Clock",
    title: "Hours",
    details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
    action: { text: "Book a Free Trial", link: "tel:+918670035037" }
  }
];

// HTML Email Template Function
export const createHtmlEmailTemplate = ({
  name, email, phone, age, course, experience, 
  selectedServices, urgency, preferredTime, message, newsletter
}: EmailTemplateData): string => {
  return `
    
  `;
};
