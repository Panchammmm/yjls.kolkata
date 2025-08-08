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
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #ff6b35, #f7931e); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: white; padding: 30px; border: 1px solid #ddd; }
          .section { margin-bottom: 25px; padding: 20px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #ff6b35; }
          .label { font-weight: bold; color: #ff6b35; display: inline-block; min-width: 140px; }
          .value { color: #333; }
          .priority { padding: 5px 15px; border-radius: 20px; color: white; font-size: 12px; font-weight: bold; }
          .high { background: #dc3545; }
          .medium { background: #ffc107; color: #333; }
          .low { background: #28a745; }
          .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
          .services { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
          .service-tag { background: #e7f3ff; color: #0066cc; padding: 4px 12px; border-radius: 15px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎌 New Student Inquiry</h1>
            <p>Yume Japanese Language School</p>
            <p style="margin: 0; font-size: 14px; opacity: 0.9;">Received on ${new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
          
          <div class="content">
            <div class="section">
              <h3 style="margin-top: 0; color: #ff6b35;">👤 Personal Information</h3>
              <p><span class="label">Full Name:</span> <span class="value">${name}</span></p>
              <p><span class="label">Email:</span> <span class="value">${email}</span></p>
              <p><span class="label">Phone:</span> <span class="value">${phone}</span></p>
              ${age ? `<p><span class="label">Age:</span> <span class="value">${age} years</span></p>` : ''}
            </div>

            <div class="section">
              <h3 style="margin-top: 0; color: #ff6b35;">📚 Course Information</h3>
              <p><span class="label">Course Interest:</span> <span class="value">${course || "General Inquiry"}</span></p>
              ${experience ? `<p><span class="label">Experience Level:</span> <span class="value">${experience}</span></p>` : ''}
              ${selectedServices && selectedServices.length > 0 ? `
                <p><span class="label">Additional Services:</span></p>
                <div class="services">
                  ${selectedServices.map(service => `<span class="service-tag">${service}</span>`).join('')}
                </div>
              ` : ''}
            </div>

            ${urgency ? `
              <div class="section">
                <h3 style="margin-top: 0; color: #ff6b35;">⚡ Inquiry Priority</h3>
                <p>
                  <span class="label">Urgency:</span> 
                  <span class="priority ${urgency.toLowerCase()}">${urgency.toUpperCase()}</span>
                </p>
                ${preferredTime ? `<p><span class="label">Preferred Contact Time:</span> <span class="value">${preferredTime}</span></p>` : ''}
              </div>
            ` : ''}

            ${message ? `
              <div class="section">
                <h3 style="margin-top: 0; color: #ff6b35;">💬 Message</h3>
                <p style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">${message}</p>
              </div>
            ` : ''}

            <div class="section">
              <h3 style="margin-top: 0; color: #ff6b35;">📊 Lead Information</h3>
              <p><span class="label">Source:</span> <span class="value">YJLS Website Contact Form</span></p>
              <p><span class="label">Newsletter Opt-in:</span> <span class="value">${newsletter ? 'Yes ✅' : 'No ❌'}</span></p>
              <p><span class="label">Submission Time:</span> <span class="value">${new Date().toLocaleString()}</span></p>
            </div>
          </div>

          <div class="footer">
            <p><strong>🏫 Yume Japanese Language School</strong></p>
            <p>📍 Mali Pukria, near IILDS Hospital, Rajpur Sonarpur, Kolkata 700150</p>
            <p>📞 +91 80130 72585 | 📞 +91 87776 71272</p>
            <p>📧 Yumejapaneseschool@gmail.com</p>
            <p style="margin-top: 15px; font-size: 12px; opacity: 0.8;">
              🚀 Please respond to this inquiry within 24 hours for best conversion rates.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
};
