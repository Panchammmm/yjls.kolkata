import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Loader2, 
  CheckCircle, 
  AlertCircle,
  Calendar,
  Users,
  Shield,
  Star,
  MessageCircle,
  BookOpen,
  GraduationCap
} from "lucide-react";
import { useForm } from 'react-hook-form';
import useWeb3Forms from "@web3forms/react";
import ContactInfo from "../components/ContactInfo";
import { createHtmlEmailTemplate, contactInfo, additionalServices, timeSlots } from "../components/contactData";

const Contact = () => {
  const { toast } = useToast();
  const { register, reset, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm();
  const [result, setResult] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [preferredTime, setPreferredTime] = useState("");

  // Your Web3Forms access key
  const accessKey = "5516de44-fd98-4a9a-ada1-d95fcb67574b";

  // Watch form values
  const courseValue = watch("course");
  const urgencyLevel = watch("urgency");
  const newsletter = watch("newsletter");

  // Enhanced Web3Forms configuration
  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "YJLS Contact Form",
      subject: "🎌 New Student Inquiry - Yume Japanese Language School",
      spam_check: true,
      replyto: true,
    },
    onSuccess: (msg, data) => {
      setResult("✅ Thank you! Your inquiry has been sent successfully. We'll contact you within 24 hours.");
      setIsSuccess(true);
      toast({
        title: "🎉 Message Sent Successfully!",
        description: "We'll get back to you within 24 hours with detailed course information.",
      });
      reset();
      setSelectedServices([]);
      setPreferredTime("");
    },
    onError: (msg, data) => {
      setResult("❌ Sorry, there was an error sending your message. Please try again or contact us directly via WhatsApp.");
      setIsSuccess(false);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact us directly via WhatsApp.",
        variant: "destructive"
      });
    },
  });

  const handleFormSubmit = async (formData) => {
    const { name, email, phone, course, message, age, experience, urgency, newsletter } = formData;
    
    const htmlMessage = createHtmlEmailTemplate({
      name, email, phone, age, course, experience, 
      selectedServices, urgency, preferredTime, message, newsletter
    });

    const enhancedData = {
      name,
      email,
      phone,
      age: age || "Not provided",
      course: course || "General Inquiry",
      experience: experience || "Not specified",
      message: message || "No specific message provided",
      urgency: urgency || "Medium",
      preferred_time: preferredTime || "Any time",
      additional_services: selectedServices.join(", ") || "None selected",
      newsletter_optin: newsletter ? "Yes" : "No",
      subject: `🎌 New Student Inquiry - ${name} (${course || "General"})`,
      html: htmlMessage,
      text: `
New Student Inquiry - Yume Japanese Language School

Personal Information:
Name: ${name}
Email: ${email}
Phone: ${phone}
Age: ${age || "Not provided"}

Course Information:
Course Interest: ${course || "General Inquiry"}
Experience Level: ${experience || "Not specified"}
Additional Services: ${selectedServices.join(", ") || "None"}

Priority: ${urgency || "Medium"}
Preferred Contact Time: ${preferredTime || "Any time"}

Message:
${message || "No message provided"}

Newsletter Opt-in: ${newsletter ? "Yes" : "No"}
Source: YJLS Website Contact Form
Timestamp: ${new Date().toLocaleString()}
      `,
      timestamp: new Date().toISOString(),
      source: "YJLS Website Contact Form",
      form_version: "2.0"
    };

    await onSubmit(enhancedData);
  };

  const handleServiceChange = (service, checked) => {
    if (checked) {
      setSelectedServices([...selectedServices, service]);
    } else {
      setSelectedServices(selectedServices.filter(s => s !== service));
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
              <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            Contact YJLS
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4">
            Ready to start your Japanese learning journey? Get in touch with us today for course information, enrollment details, or any questions you may have.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 sm:mt-8 text-xs sm:text-sm px-2">
            <div className="flex items-center gap-1 sm:gap-2 bg-white/10 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="whitespace-nowrap">Secure Form</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 bg-white/10 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="whitespace-nowrap">24/7 Available</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 bg-white/10 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="whitespace-nowrap">Quick Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant order-1">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl md:text-2xl text-foreground flex items-center gap-2">
                  <Send className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary flex-shrink-0" />
                  <span className="leading-tight">Send us a Message</span>
                </CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4 sm:space-y-6">
                  {/* Basic Information */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-sm sm:text-base text-foreground flex items-center gap-2">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                      <span>Personal Information</span>
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          {...register("name", { 
                            required: "Name is required",
                            minLength: { value: 2, message: "Name must be at least 2 characters" }
                          })}
                          disabled={isSubmitting}
                          className={`h-10 sm:h-11 ${errors.name ? "border-red-500" : ""}`}
                        />
                        {errors.name && (
                          <p className="text-xs sm:text-sm text-red-500">
                            {typeof errors.name?.message === "string" ? errors.name.message : null}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="age" className="text-sm font-medium">Age</Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="Your age"
                          {...register("age", { 
                            min: { value: 10, message: "Age must be at least 10" },
                            max: { value: 80, message: "Age must be less than 80" }
                          })}
                          disabled={isSubmitting}
                          className={`h-10 sm:h-11 ${errors.age ? "border-red-500" : ""}`}
                        />
                        {errors.age && (
                          <p className="text-xs sm:text-sm text-red-500">
                            {typeof errors.age?.message === "string" ? errors.age.message : null}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          {...register("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Please enter a valid email"
                            }
                          })}
                          disabled={isSubmitting}
                          className={`h-10 sm:h-11 ${errors.email ? "border-red-500" : ""}`}
                        />
                        {errors.email && (
                          <p className="text-xs sm:text-sm text-red-500">
                            {typeof errors.email?.message === "string" ? errors.email.message : null}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                        <Input
                          id="phone"
                          placeholder="+91 98765 43210"
                          {...register("phone", { 
                            required: "Phone number is required",
                            pattern: {
                              value: /^[+]?[1-9][\d]{0,15}$/,
                              message: "Please enter a valid phone number"
                            }
                          })}
                          disabled={isSubmitting}
                          className={`h-10 sm:h-11 ${errors.phone ? "border-red-500" : ""}`}
                        />
                        {errors.phone && (
                          <p className="text-xs sm:text-sm text-red-500">
                            {typeof errors.phone?.message === "string" ? errors.phone.message : null}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Course Information */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-sm sm:text-base text-foreground flex items-center gap-2">
                      <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                      <span>Course Information</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="course" className="text-sm font-medium">Course Interest</Label>
                        <Select 
                          value={courseValue || ""} 
                          onValueChange={(value) => setValue("course", value)}
                        >
                          <SelectTrigger className="h-10 sm:h-11">
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner Course (N5)</SelectItem>
                            <SelectItem value="basic">Basic Course (N4)</SelectItem>
                            <SelectItem value="intermediate">Intermediate Course (N3)</SelectItem>
                            <SelectItem value="advanced">Advanced Course (N2/N1)</SelectItem>
                            <SelectItem value="jlpt">JLPT Preparation</SelectItem>
                            <SelectItem value="nat">NAT Test Preparation</SelectItem>
                            <SelectItem value="conversation">Conversational Japanese</SelectItem>
                            <SelectItem value="business">Business Japanese</SelectItem>
                            <SelectItem value="other">Other/General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience" className="text-sm font-medium">Experience Level</Label>
                        <Select 
                          value={watch("experience") || ""} 
                          onValueChange={(value) => setValue("experience", value)}
                        >
                          <SelectTrigger className="h-10 sm:h-11">
                            <SelectValue placeholder="Your Japanese level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="complete-beginner">Complete Beginner</SelectItem>
                            <SelectItem value="some-knowledge">Some Basic Knowledge</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="studied-before">Studied Japanese Before</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Additional Services */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Additional Services (Optional)</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {additionalServices.map((service) => (
                          <div key={service} className="flex items-start space-x-2">
                            <Checkbox
                              id={service}
                              checked={selectedServices.includes(service)}
                              onCheckedChange={(checked) => handleServiceChange(service, checked)}
                              disabled={isSubmitting}
                              className="mt-0.5 flex-shrink-0"
                            />
                            <Label 
                              htmlFor={service} 
                              className="text-xs sm:text-sm leading-tight cursor-pointer"
                            >
                              {service}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Priority & Timing */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-sm sm:text-base text-foreground flex items-center gap-2">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                      <span>Priority & Timing</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-3">
                        <Label className="text-sm font-medium">Urgency Level</Label>
                        <RadioGroup
                          value={urgencyLevel || ""}
                          onValueChange={(value) => setValue("urgency", value)}
                          className="space-y-2"
                        >
                          <div className="flex items-start space-x-2">
                            <RadioGroupItem value="high" id="high" className="mt-0.5 flex-shrink-0" />
                            <Label htmlFor="high" className="text-xs sm:text-sm leading-tight cursor-pointer">
                              High - Need to start ASAP
                            </Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <RadioGroupItem value="medium" id="medium" className="mt-0.5 flex-shrink-0" />
                            <Label htmlFor="medium" className="text-xs sm:text-sm leading-tight cursor-pointer">
                              Medium - Within 2 weeks
                            </Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <RadioGroupItem value="low" id="low" className="mt-0.5 flex-shrink-0" />
                            <Label htmlFor="low" className="text-xs sm:text-sm leading-tight cursor-pointer">
                              Low - Just exploring
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Preferred Contact Time</Label>
                        <Select 
                          value={preferredTime} 
                          onValueChange={setPreferredTime}
                        >
                          <SelectTrigger className="h-10 sm:h-11">
                            <SelectValue placeholder="When to contact you" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your goals, questions, or how we can help you..."
                      rows={4}
                      {...register("message")}
                      disabled={isSubmitting}
                      className="min-h-[100px] resize-none"
                    />
                  </div>

                  {/* Newsletter & Terms */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={newsletter || false}
                        onCheckedChange={(checked) => setValue("newsletter", checked)}
                        disabled={isSubmitting}
                        className="mt-0.5 flex-shrink-0"
                      />
                      <Label htmlFor="newsletter" className="text-xs sm:text-sm leading-tight cursor-pointer">
                        Subscribe to our newsletter for course updates and Japanese learning tips
                      </Label>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      By submitting this form, you agree to be contacted by YJLS regarding your inquiry. 
                      We respect your privacy and won't share your information with third parties.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full h-11 sm:h-12 group text-sm sm:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin flex-shrink-0" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                        <span>Send Message</span>
                      </>
                    )}
                  </Button>

                  {/* Success/Error Message */}
                  {result && (
                    <div 
                      className={`flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg ${
                        isSuccess 
                          ? 'bg-green-50 border border-green-200 text-green-700' 
                          : 'bg-red-50 border border-red-200 text-red-700'
                      }`}
                    >
                      {isSuccess ? (
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-0.5" />
                      )}
                      <p className="text-xs sm:text-sm leading-relaxed">{result}</p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Information Component */}
            <div className="order-1 lg:order-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
