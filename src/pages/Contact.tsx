import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["123 Main Street", "South Kolkata, WB 700001", "Near Metro Station"]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211", "Available: 9 AM - 8 PM"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@yumejapanese.com", "admissions@yumejapanese.com", "support@yumejapanese.com"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM", "Holidays: By appointment"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Yume
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your Japanese learning journey? Get in touch with us today for course information, enrollment details, or any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <Send className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="course">Course Interest</Label>
                      <Select value={formData.course} onValueChange={(value) => handleInputChange("course", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner Course (N5)</SelectItem>
                          <SelectItem value="basic">Basic Course (N4)</SelectItem>
                          <SelectItem value="intermediate">Intermediate Course (N3)</SelectItem>
                          <SelectItem value="jlpt">JLPT Preparation</SelectItem>
                          <SelectItem value="nat">NAT Test Preparation</SelectItem>
                          <SelectItem value="conversation">Conversational Japanese</SelectItem>
                          <SelectItem value="other">Other/General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your goals, questions, or how we can help you..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-primary mt-1">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-lg mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm mb-1">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground text-lg mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                      <Facebook className="h-6 w-6 text-primary" />
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                      <Instagram className="h-6 w-6 text-primary" />
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                      <Twitter className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4">
                    Stay updated with our latest courses, events, and student success stories!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Our Campus
            </h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of South Kolkata, easily accessible by metro and bus
            </p>
          </div>
          
          {/* Placeholder for Google Map */}
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground">Interactive Map</p>
              <p className="text-muted-foreground">Google Maps integration would be embedded here</p>
              <p className="text-muted-foreground mt-2">123 Main Street, South Kolkata, WB 700001</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">What are your class timings?</h3>
                <p className="text-muted-foreground text-sm">
                  We offer flexible timings including morning (9 AM - 12 PM), afternoon (2 PM - 5 PM), and evening (6 PM - 8 PM) batches.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Do you provide placement assistance?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we provide comprehensive job placement assistance and have partnerships with Japanese companies.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">What is the batch size?</h3>
                <p className="text-muted-foreground text-sm">
                  We maintain small batch sizes (8-15 students) to ensure personalized attention and better learning outcomes.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Do you offer online classes?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we offer both in-person and online classes with interactive sessions and digital learning materials.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Learning Japanese?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait! Join Yume today and take the first step towards mastering Japanese and unlocking global opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-3">
              Book Free Demo Class
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              Call Now: +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;