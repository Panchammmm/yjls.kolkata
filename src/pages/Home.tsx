import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, BookOpen, Award, Globe, Heart } from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";
import learningMaterials from "@/assets/learning-materials.jpg";
import studentsLearning from "@/assets/students-learning.jpg";
import japaneseCulture from "@/assets/japanese-culture.jpg";

const Home = () => {
  const benefits = [
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Expert Faculty",
      description: "Learn from experienced native speakers and certified instructors"
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
      name: "Ravi Poddar",
      rating: 5,
      text: "Got my student visa for Japan with their expert guidance. Forever grateful to Yume!",
      role: "Former Student"
    },
    {
      name: "Ayesha Sengupta",
      rating: 5,
      text: "Yume's modern materials and friendly faculty made learning enjoyable and effective. Highly recommended!",
      role: "JLPT N5 Achiever"
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
        
        <div className="relative z-10 text-center text-primary-foreground max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
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
              Know Us
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Why Choose Yume?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Experience the difference with our proven teaching methods and dedicated support
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 mx-2 sm:mx-0">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-primary mb-3 sm:mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-center lg:text-left">
                Career & Visa Support
              </h2>
              <div className="space-y-3 sm:space-y-4 text-foreground">
                <p className="text-base sm:text-lg leading-relaxed text-center lg:text-left">
                  We don't just teach Japanese - we open doors to your future! Our comprehensive support includes:
                </p>
                <ul className="space-y-2 sm:space-y-3 max-w-lg mx-auto lg:mx-0">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Student and Job Visa guidance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">TITP visa program assistance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Global institution applications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Job placement assistance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Personalized coaching for opportunities</span>
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
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <a href="/contact">Start Learning Today</a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 border-white hover:bg-white text-gray-800 hover:text-gray-700">
              <a href="/gallery">View Our Gallery</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
