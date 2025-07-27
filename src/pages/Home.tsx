import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Users, BookOpen, Award, Globe, Heart } from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";
import learningMaterials from "@/assets/learning-materials.jpg";
import studentsLearning from "@/assets/students-learning.jpg";
import japaneseCulture from "@/assets/japanese-culture.jpg";

const Home = () => {
  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Faculty",
      description: "Learn from experienced native speakers and certified instructors"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Modern Materials",
      description: "Interactive learning with latest textbooks and digital resources"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Proven Track Record",
      description: "High success rate in JLPT and NAT proficiency tests"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Opportunities",
      description: "Access to jobs, education, and visas in Japan"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "The best Japanese language school in Kolkata! Teachers are patient and the methods are so effective.",
      role: "Student, N3 Level"
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Thanks to Yume, I cleared JLPT N4 in first attempt. Now working in Tokyo!",
      role: "Former Student"
    },
    {
      name: "Anita Roy",
      rating: 5,
      text: "My daughter loves learning here. The environment is so supportive and encouraging.",
      role: "Parent"
    },
    {
      name: "Suman Das",
      rating: 5,
      text: "Excellent teaching quality! I went from complete beginner to N2 level in just 18 months.",
      role: "Student, N2 Level"
    },
    {
      name: "Kavita Gupta",
      rating: 5,
      text: "The career guidance is amazing. Got placed in a Japanese company through their support!",
      role: "Alumni"
    },
    {
      name: "Arjun Chatterjee",
      rating: 5,
      text: "Interactive classes and cultural activities made learning Japanese so enjoyable and memorable.",
      role: "Student, N4 Level"
    },
    {
      name: "Meera Jain",
      rating: 5,
      text: "Personalized attention and flexible timings helped me balance work and studies perfectly.",
      role: "Working Professional"
    },
    {
      name: "Ravi Poddar",
      rating: 5,
      text: "Got my student visa for Japan with their expert guidance. Forever grateful to Yume!",
      role: "Former Student"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Learn Japanese the Fun and Easy Way at{" "}
            <span className="text-secondary">Yume</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
            Your Gateway to Global Success! Unlock opportunities in Japan with South Kolkata's premier Japanese language institute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-3">
              Enroll Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Yume?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our proven teaching methods and dedicated support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Career & Visa Support
              </h2>
              <div className="space-y-4 text-foreground">
                <p className="text-lg leading-relaxed">
                  We don't just teach Japanese - we open doors to your future! Our comprehensive support includes:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span>Student and Job Visa guidance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span>TITP visa program assistance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span>Global institution applications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span>Job placement assistance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <span>Personalized coaching for opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={learningMaterials} 
                alt="Learning Materials"
                className="rounded-lg shadow-soft"
              />
              <img 
                src={japaneseCulture} 
                alt="Japanese Culture"
                className="rounded-lg shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied students who achieved their Japanese language goals
            </p>
          </div>
          
          <div className="relative px-12 sm:px-16">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="hover:shadow-elegant transition-all duration-300 h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-foreground mb-4 italic flex-grow">"{testimonial.text}"</p>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <a href="/testimonials">View All Testimonials & Videos</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Japanese Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join South Kolkata's most trusted Japanese language school and unlock your global potential!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-3">
              <Heart className="h-5 w-5 mr-2" />
              Start Learning Today
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;