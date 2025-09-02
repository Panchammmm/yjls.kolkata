import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, CheckCircle, PhoneOutgoing, School, BookMarked } from "lucide-react";
import jlptPreparation from "@/assets/jlpt-preparation.jpg";
import studentsLearning from "@/assets/students-learning.jpg";

const Courses = () => {
  const courses = [
    {
      title: "Beginner Course (N5 Level)",
      duration: "6 months",
      students: "6 per batch",
      classes: "2 classes/week",
      description: "Perfect for absolute beginners. Learn Hiragana, Katakana, basic grammar and vocabulary.",
      features: [
        "Hiragana & Katakana mastery",
        "Elementary grammar patterns",
        "Basic vocabulary (500+ words)",
        "Introduction to kanji (100+ characters)",
        "Basic conversation skills",
        "Cultural introduction",
        "Interactive exercises",
        "Listening skills"
      ],
      price: "₹1,000/month",
      badge: "Most Popular"
    },
    {
      title: "Basic Course (N4 Level)",
      duration: "6-8 months",
      students: "5 per batch",
      classes: "2 classes/week",
      description: "Build on your foundation with intermediate grammar, expanded vocabulary, and practical communication.",
      features: [
        "Extended vocabulary (1,000+ words)",
        "Complex sentence structures",
        "Intermediate kanji practice",
        "Reading comprehension",
        "Practical conversation",
        "Writing practice",
        "Listening skills"
      ],
      price: "₹1,500/month",
      badge: "Recommended"
    },
    {
      title: "JLPT Preparation",
      duration: "2-3 months",
      students: "8 per batch",
      classes: "3 classes/week",
      description: "Intensive preparation for JLPT N5, N4, and N3 levels with mock tests and strategies.",
      features: [
        "Comprehensive test strategies",
        "Mock examinations",
        "Time management techniques",
        "Weak area identification",
        "Confidence building"
      ],
      price: "₹2,000/month",
      badge: "Exam Focus"
    },
    {
      title: "NAT Test Preparation",
      duration: "3 months",
      students: "5-6 per batch",
      classes: "3 classes/week",
      description: "Specialized coaching for NAT (Nihongo Ability Test) with focused practice sessions.",
      features: [
        "NAT-specific curriculum",
        "Practice test series",
        "Score improvement techniques",
        "Individual attention",
        "Quick result strategies"
      ],
      price: "₹2,000/month",
      badge: "Fast Track"
    },
    {
      title: "Conversational Japanese",
      duration: "3 months",
      students: "6-8 per batch",
      classes: "1 class/week",
      description: "Focus on speaking and listening skills for real-world communication and cultural exchange.",
      features: [
        "Native speaker sessions",
        "Real-life scenarios",
        "Pronunciation perfection",
        "Cultural etiquette",
        "Confidence building"
      ],
      price: "₹1,200/month",
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
      {/* Enhanced Full-Screen Hero Section */}
      <section className="relative flex items-center justify-center bg-gradient-accent overflow-hidden">

        {/* Animated floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-secondary/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-40 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-60 right-20 w-3 h-3 bg-secondary/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-60 left-1/2 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="text-center">
            {/* Badge/Announcement */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 sm:mb-8 animate-fade-in">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted by 500+ Students</span>
            </div>

            {/* Main Heading with enhanced animation */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 sm:mb-8 leading-tight animate-slide-up">
              Master Japanese
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                From Zero to Fluency
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-5xl mx-auto mb-10 sm:mb-16 leading-relaxed font-light animate-fade-in-delay">
              <span className="hidden md:inline">
                Join our structured Japanese language courses designed for Indian learners.
                From Hiragana to JLPT success, we'll guide you every step of the way.
              </span>
              <span className="md:hidden">
                Structured Japanese courses designed for Indian learners. From basics to JLPT success.
              </span>
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto px-5 sm:px-0">
              <Button
                variant="hero"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 bg-gradient-to-r from-primary to-secondary border-0"
              >
                <a href="tel:+918670035037" className="flex items-center gap-2">
                  <PhoneOutgoing className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Book a Demo Class
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 border-0"
              >
                <a href="/about" className="flex items-center gap-2">
                  <School className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Know Our School
                </a>
              </Button>
            </div>
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
              <span className="hidden sm:inline">Structured programs for every Japanese level and goal</span>
              <span className="sm:hidden">Programs for every Japanese level</span>
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
                  <div className="flex flex-col xs:flex-row xs:items-center xs:space-x-4 space-y-2 xs:space-y-0 text-sm sm:text-[14.5px] text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <BookMarked className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="truncate">{course.classes}</span>
                    </div>
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
                        <li key={idx} className="flex items-start space-x-2 text-sm sm:text-[14.5px] text-muted-foreground">
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
                      <a href="/contact" className="flex items-center gap-2 justify-center w-full">
                        <span className="hidden sm:inline">Enroll Now</span>
                        <span className="sm:hidden">Enroll</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-14 pb-20 sm:py-16 md:py-20 lg:py-24 bg-gradient-accent text-gray-800">
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
    </div>
  );
};

export default Courses;
