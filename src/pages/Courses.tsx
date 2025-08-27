import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, CheckCircle } from "lucide-react";
import jlptPreparation from "@/assets/jlpt-preparation.jpg";
import studentsLearning from "@/assets/students-learning.jpg";

const Courses = () => {
  const courses = [
    {
      title: "Beginner Course (N5 Level)",
      duration: "3 months",
      students: "15 per batch",
      description: "Perfect for absolute beginners. Learn Hiragana, Katakana, basic grammar and vocabulary.",
      features: [
        "Hiragana & Katakana mastery",
        "Basic conversation skills",
        "Elementary grammar patterns",
        "Cultural introduction",
        "Interactive exercises"
      ],
      price: "₹8,000",
      badge: "Most Popular"
    },
    {
      title: "Basic Course (N4 Level)",
      duration: "4 months",
      students: "12 per batch",
      description: "Build on your foundation with intermediate grammar, expanded vocabulary, and practical communication.",
      features: [
        "Extended vocabulary (1,000+ words)",
        "Complex sentence structures",
        "Practical conversation",
        "Reading comprehension",
        "Writing practice"
      ],
      price: "₹12,000",
      badge: "Recommended"
    },
    {
      title: "Intermediate Course (N3 Level)",
      duration: "6 months",
      students: "10 per batch",
      description: "Advanced grammar, business Japanese, and cultural nuances for serious learners.",
      features: [
        "Advanced grammar patterns",
        "Business Japanese basics",
        "Cultural understanding",
        "Advanced reading skills",
        "Formal writing techniques"
      ],
      price: "₹18,000",
      badge: "Professional"
    },
    {
      title: "JLPT Preparation",
      duration: "2-3 months",
      students: "8 per batch",
      description: "Intensive preparation for JLPT N5, N4, and N3 levels with mock tests and strategies.",
      features: [
        "Comprehensive test strategies",
        "Mock examinations",
        "Time management techniques",
        "Weak area identification",
        "Confidence building"
      ],
      price: "₹10,000",
      badge: "Exam Focus"
    },
    {
      title: "NAT Test Preparation",
      duration: "2 months",
      students: "8 per batch",
      description: "Specialized coaching for NAT (Nihongo Ability Test) with focused practice sessions.",
      features: [
        "NAT-specific curriculum",
        "Practice test series",
        "Score improvement techniques",
        "Individual attention",
        "Quick result strategies"
      ],
      price: "₹8,500",
      badge: "Fast Track"
    },
    {
      title: "Conversational Japanese",
      duration: "Ongoing",
      students: "6 per batch",
      description: "Focus on speaking and listening skills for real-world communication and cultural exchange.",
      features: [
        "Native speaker sessions",
        "Real-life scenarios",
        "Pronunciation perfection",
        "Cultural etiquette",
        "Confidence building"
      ],
      price: "₹6,000/month",
      badge: "Practical"
    }
  ];

  const teachingMethods = [
    {
      icon: <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Interactive Learning",
      description: "Engaging multimedia content with games, videos, and interactive exercises"
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Small Batches",
      description: "Limited students per class ensuring personalized attention and faster progress"
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Proven Curriculum",
      description: "Structured syllabus designed by experts with high success rates in proficiency tests"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Our Japanese Language Courses
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            <span className="hidden md:inline">
              From beginner to advanced levels, we offer comprehensive courses designed to help you achieve fluency in Japanese with our interactive and effective teaching methods.
            </span>
            <span className="md:hidden">
              Comprehensive Japanese courses from beginner to advanced levels with interactive teaching methods.
            </span>
          </p>
          <div className="flex justify-center">
            <img 
              src={jlptPreparation} 
              alt="JLPT Preparation"
              className="rounded-lg shadow-elegant max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
              Choose Your Perfect Course
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
              <span className="hidden sm:inline">Structured programs for every level and goal</span>
              <span className="sm:hidden">Programs for every level</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="relative hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                {course.badge && (
                  <Badge className="absolute -top-2 left-3 sm:left-4 z-10 bg-secondary text-secondary-foreground text-xs sm:text-sm px-2 py-1">
                    {course.badge}
                  </Badge>
                )}
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-lg sm:text-xl md:text-xl text-foreground leading-tight min-h-[3rem] sm:min-h-[3.5rem] flex items-start">
                    {course.title}
                  </CardTitle>
                  <div className="flex flex-col xs:flex-row xs:items-center xs:space-x-4 space-y-2 xs:space-y-0 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="truncate">{course.students}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
                    {course.description}
                  </p>
                  
                  <div className="space-y-2 flex-1">
                    <h4 className="font-semibold text-sm sm:text-base text-foreground">Course Features:</h4>
                    <ul className="space-y-1 sm:space-y-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-3 sm:pt-4 border-t mt-auto">
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                      <span className="text-xl sm:text-2xl md:text-2xl font-bold text-primary">
                        {course.price}
                      </span>
                    </div>
                    <Button className="w-full text-sm sm:text-base py-2 sm:py-3" variant="default">
                      <span className="hidden sm:inline">Enroll Now</span>
                      <span className="sm:hidden">Enroll</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Our Teaching Methods
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed">
              <span className="hidden sm:inline">
                Interactive and effective approaches that make learning Japanese fun and engaging
              </span>
              <span className="sm:hidden">
                Interactive approaches that make learning fun and engaging
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {teachingMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3 sm:mb-4 text-secondary">
                  {method.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
                  {method.title}
                </h3>
                <p className="opacity-90 text-sm sm:text-base md:text-lg leading-relaxed max-w-sm mx-auto px-12">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <img 
              src={studentsLearning} 
              alt="Students Learning"
              className="rounded-lg shadow-soft mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl w-full h-auto"
              loading="lazy"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            <span className="hidden sm:inline">
              Contact us today for a free consultation and find the perfect course for your goals
            </span>
            <span className="sm:hidden">
              Contact us for a free consultation and find your perfect course
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              <span className="hidden sm:inline">Book Free Demo Class</span>
              <span className="sm:hidden">Free Demo Class</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              <span className="hidden sm:inline">Get Course Details</span>
              <span className="sm:hidden">Course Details</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
