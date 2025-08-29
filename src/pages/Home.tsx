import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, BookOpen, Award, Globe, Heart, Clock, CheckCircle, School, Play, Calendar, MapPin, Phone, Mail, GraduationCap, FileText, MessageCircle, Target, Headphones, Gift, Sparkle, Sparkles, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";
import learningMaterials from "@/assets/learning-materials.jpg";
import studentsLearning from "@/assets/students-learning.jpg";
import japaneseCulture from "@/assets/japanese-culture.jpg";

const Home = () => {
  const benefits = [
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Expert Faculty",
      description: "Learn from experienced certified instructors with proven teaching expertise"
    },
    {
      icon: <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Modern Materials",
      description: "Interactive learning with latest textbooks and digital resources"
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Proven Track Record",
      description: "High success rate in JLPT and NAT proficiency tests"
    },
    {
      icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Global Opportunities",
      description: "Comprehensive guidance for studying and working in Japan"
    }
  ];

  const testimonials = [
    {
      name: "Anirban Mondal",
      rating: 5,
      text: "I'm currently studying Japanese at Yume Japanese Language School and the experience has been fantastic. The teachers are excellent—knowledgeable, patient, and make learning enjoyable.",
      role: "Current Student"
    },
    {
      name: "Rohit Sarkar",
      rating: 5,
      text: "The instructor is incredibly approachable and create a fun and engaging environment, even when tackling complex concepts. Their structured curriculum ensures a clear learning path.",
      role: "JLPT Graduate"
    },
    {
      name: "Suchismita Mridha",
      rating: 5,
      text: "My experience with Yume Japanese Language School was quite well and I've learned a lot from the teacher. Equal attention was given to every individual which is the best part of YJLS.",
      role: "Former Student"
    }
  ];

  const courses = [
    {
      title: "Beginner Course (N5)",
      duration: "3 months",
      price: "₹8,000",
      features: ["Hiragana & Katakana", "Basic Grammar", "Cultural Introduction"],
      popular: true
    },
    {
      title: "JLPT Preparation",
      duration: "2-3 months",
      price: "₹10,000",
      features: ["Mock Tests", "Strategy Training", "Quick Results"],
      popular: false
    },
    {
      title: "Conversational Japanese",
      duration: "Ongoing",
      price: "₹6,000/month",
      features: ["Native Speakers", "Real Scenarios", "Pronunciation"],
      popular: false
    }
  ];

  const stats = [
    {
      number: "500+",
      label: "Students Taught",
      description: "Successfully guided students to fluency",
    },
    {
      number: "95%",
      label: "JLPT Success Rate", 
      description: "High pass rates in proficiency tests",
    },
    {
      number: "8+",
      label: "Years Experience",
      description: "Proven track record in language education",
    },
    {
      number: "50+", 
      label: "Students in Japan",
      description: "Successfully studying and working in Japan",
    }
  ];

  const upcomingEvents = [
    {
      date: "15",
      month: "Sep",
      title: "Free Japanese Cultural Workshop",
      time: "2:00 PM - 4:00 PM",
      type: "Workshop"
    },
    {
      date: "22",
      month: "Sep",
      title: "JLPT N5 Mock Test",
      time: "10:00 AM - 12:00 PM",
      type: "Test"
    },
    {
      date: "30",
      month: "Sep",
      title: "MEXT Scholarship Guidance Seminar",
      time: "3:00 PM - 5:00 PM",
      type: "Seminar"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground max-w-6xl mx-auto px-8">
          <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
            Learn Japanese the Fun and Easy Way at{" "}
            <span className="text-secondary">Yume Japanese Language School</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 animate-slide-up max-w-4xl mx-auto leading-relaxed">
            Your Gateway to Global Success! Unlock opportunities in Japan with Kolkata's premier Japanese language institute.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 flex items-center justify-center">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <a href="/contact">Start Learning Today</a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 border-white text-gray-800 hover:text-gray-700 hover:bg-white">
              <School className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              About Our School
            </Button>
          </div>
        </div>
      </section>

      {/* NEW: Statistics Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Our Success Story
            </h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto px-4">
              Numbers that speak for our excellence and dedication
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <h3 className="text-md sm:text-xl font-semibold mb-1 sm:mb-2">{stat.label}</h3>
                <p className="text-sm sm:text-base opacity-90 leading-relaxed hidden sm:inline">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Popular Courses Preview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Popular Courses
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Start your Japanese learning journey with our most loved courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="relative hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                {course.popular && (
                  <div className="absolute -top-2 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium z-10">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{course.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="text-lg font-bold text-primary">{course.price}</div>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Button asChild variant="outline" size="lg">
              <a href="/courses">View All Courses</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section - What we provide */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-center lg:text-left">
                Comprehensive Support & Guidance
              </h2>
              <div className="space-y-3 sm:space-y-4 text-foreground">
                <p className="text-base sm:text-lg leading-relaxed text-center lg:text-left">
                  We don't just teach Japanese - we guide you toward your dreams! Our comprehensive support includes:
                </p>
                <ul className="space-y-2 sm:space-y-3 max-w-lg ml-2 sm:ml-0 sm:mx-0">
                  <li className="flex items-start space-x-3">
                    <GraduationCap className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base"><strong>JLPT & NAT Preparation</strong> & free mock tests</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <FileText className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base"><strong>MEXT Scholarship Guidance</strong> & application support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <School className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base"><strong>Study in Japan Consultation</strong> & university guidance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Globe className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base"><strong>Japanese Culture & Lifestyle</strong> training</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base"><strong>Interview Preparation</strong> & job guidance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Gift className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base"><strong>Free Study Materials</strong> & WhatsApp groups</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              <img 
                src={learningMaterials} 
                alt="Modern learning materials and textbooks"
                className="rounded-lg shadow-soft w-full h-48 sm:h-64 object-cover"
              />
              <img 
                src={japaneseCulture} 
                alt="Japanese cultural elements and traditions"
                className="rounded-lg shadow-soft w-full h-48 sm:h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Upcoming Events */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Join our free workshops, seminars, and cultural events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-primary">{event.date}</div>
                      <div className="text-sm text-muted-foreground uppercase">{event.month}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                          {event.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline" size="sm">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Button asChild variant="outline" size="lg">
              <a href="/events">View All Events</a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Why Choose Yume?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Experience the difference with our proven teaching methods and dedicated support
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-primary mb-3 sm:mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-md sm:text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Join thousands of satisfied students who achieved their Japanese language goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 h-full mx-2 sm:mx-0">
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex mb-3 sm:mb-4 justify-center sm:justify-start">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-foreground mb-3 sm:mb-4 italic flex-grow text-center sm:text-left leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="text-center sm:text-left">
                    <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-6 sm:mt-8 px-4">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <a href="/testimonials">View All Testimonials & Videos</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            Ready to Start Your Japanese Journey?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join Kolkata's most trusted Japanese language school and unlock your global potential!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 flex items-center justify-center">
              <a href="/contact" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Start Your Application
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 border-white hover:bg-white text-gray-800 hover:text-gray-700">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <a href="/gallery">View Our Gallery</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
