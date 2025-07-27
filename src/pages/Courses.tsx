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
      icon: <BookOpen className="h-8 w-8" />,
      title: "Interactive Learning",
      description: "Engaging multimedia content with games, videos, and interactive exercises"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Small Batches",
      description: "Limited students per class ensuring personalized attention and faster progress"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Proven Curriculum",
      description: "Structured syllabus designed by experts with high success rates in proficiency tests"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Japanese Language Courses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From beginner to advanced levels, we offer comprehensive courses designed to help you achieve fluency in Japanese with our interactive and effective teaching methods.
          </p>
          <div className="flex justify-center">
            <img 
              src={jlptPreparation} 
              alt="JLPT Preparation"
              className="rounded-lg shadow-elegant max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Perfect Course
            </h2>
            <p className="text-xl text-muted-foreground">
              Structured programs for every level and goal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="relative hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                {course.badge && (
                  <Badge className="absolute -top-2 left-4 z-10 bg-secondary text-secondary-foreground">
                    {course.badge}
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{course.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{course.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Course Features:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-primary">{course.price}</span>
                    </div>
                    <Button className="w-full" variant="default">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Teaching Methods
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Interactive and effective approaches that make learning Japanese fun and engaging
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teachingMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-secondary">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="opacity-90">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <img 
              src={studentsLearning} 
              alt="Students Learning"
              className="rounded-lg shadow-soft mx-auto max-w-2xl w-full"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for a free consultation and find the perfect course for your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              Book Free Demo Class
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Get Course Details
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;