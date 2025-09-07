import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Globe,
  Target,
  Heart,
  GraduationCap,
  TrendingUp,
  MapPin,
  Star,
  Shield,
  Sparkles,
  ArrowRight,
  PhoneOutgoing
} from "lucide-react";
import { Link } from "react-router-dom";
import schoolEntrance from "@/assets/school-entrance.jpg";
import studentsLearning from "@/assets/students-learning.jpg";

import teampic1 from "@/assets/team/jyotirmoy_gayen.jpg";
import teampic2 from "@/assets/team/samata_gayen.jpg";
import teampic3 from "@/assets/team/pancham_sardar.jpg";

const About = () => {
  const stats = [
    {
      number: "160+",
      label: "Students Taught",
      description: "From beginners to confident Japanese speakers",
    },
    {
      number: "95%",
      label: "JLPT Success Rate",
      description: "Exceptional success rates in japanese proficiency tests",
    },
    {
      number: "3+",
      label: "Years Experience",
      description: "Proven track record in language education",
    },
    {
      number: "100+",
      label: "All Star Ratings",
      description: "Exceptional ratings across all platforms globally",
    }
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Excellence",
      description: "We strive for the highest standards in Japanese language education"
    },
    {
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Care",
      description: "Personalized attention and support for every student's journey"
    },
    {
      icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Global Vision",
      description: "Preparing students for international opportunities and cultural exchange"
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Quality",
      description: "Modern teaching methods and comprehensive learning materials"
    }
  ];

  const team = [
    {
      name: "Jyotirmoy Gayen",
      role: "Head Instructor & Founder",
      qualification: "JLPT N2 Certified | Currently Living in Japan",
      experience: "Over 5 years of passionate teaching experience, committed to helping students master Japanese language and culture with real-world insights.",
      speciality: "Conversational Japanese & Cultural Integration",
      img: teampic1,
    },
    {
      name: "Samata Gayen",
      role: "Head of Student Success",
      qualification: "Japanese Studies Specialist | Education Management Expert",
      experience: "Brings 3+ years of expertise in education management, focusing on personalized student journeys and program excellence.",
      speciality: "Student Support & Academic Planning",
      img: teampic2,
    },
    {
      name: "Pancham Sardar",
      role: "JLPT Preparation Specialist",
      qualification: "JLPT N4 Certified | Exam Strategy Expert",
      experience: "Dedicated JLPT instructor with proven techniques for exam success, helping students achieve their certification goals efficiently.",
      speciality: "Test Preparation & Grammar Mastery",
      img: teampic3,
    }
  ];

  const whyChooseFeatures = [
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: "Proven Track Record",
      description: "Exceptional success rates in japanese proficiency tests and student satisfaction."
    },
    {
      icon: <Star className="h-5 w-5 text-primary" />,
      title: "Expert Faculty & Free Resources",
      description: "Learn from qualified instructors and access high-quality study materials and mock tests at no extra cost."
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: "Comprehensive Support",
      description: "JLPT prep, scholarship advice, job coaching, and study-in-Japan assistance."
    },
    {
      icon: <Globe className="h-5 w-5 text-primary" />,
      title: "Accessible for All",
      description: "Courses available in Bengali, Hindi, and English for students worldwide."
    },
    {
      icon: <Sparkles className="h-5 w-5 text-primary" />,
      title: "Affordable Fees",
      description: "Top-quality programs with flexible payment plans for all learners."
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Virtual Cultural Experience",
      description: "Interactive online events and activities to engage with Japanese culture from anywhere."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 px-3 sm:px-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <span className="text-sm sm:text-base text-primary font-semibold">Premium Japanese Education</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                About Yume Japanese Language School
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Established as Kolkata's premier Japanese language institute, YJLS has been transforming dreams into reality by providing world-class Japanese language education and comprehensive career support.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/courses">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto group">
                    <BookOpen className="h-4 w-4 mr-2" />
                    View Courses
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Sparkles className="h-4 w-4 mr-2 pt-[1px]" />
                    View Our Gallery
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={schoolEntrance}
                alt="Yume School Entrance"
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <Card className="hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Target className="size-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  To provide exceptional Japanese language education that empowers students to achieve their personal and professional goals. We believe in making Japanese learning accessible, enjoyable, and effective for everyone, regardless of their background or starting level.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Globe className="size-6 text-primary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  To be the leading bridge between India and Japan, fostering cultural understanding and creating global opportunities. We envision a future where language barriers don't limit dreams, and every student can confidently pursue their aspirations in Japan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
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

      {/* Team */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-4">
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Meet Our Expert Faculty
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Learn from experienced teachers who are passionate about Japanese language and culture
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 group border-0 bg-card/60 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6 sm:p-8 text-center">
                  {/* Enhanced Image Container */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-lg"
                    />
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Enhanced Text Layout */}
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-700 sm:text-base text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full inline-block">
                      {member.role}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm sm:text-base text-muted-foreground font-medium">
                        {member.qualification}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.experience}
                      </p>
                      {member.speciality && (
                        <div className="pt-2 border-t border-border/50">
                          <p className="text-xs sm:text-sm text-primary font-medium">
                            <Sparkles className="inline h-3 w-3 mr-1" />
                            {member.speciality}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-4">
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Our Values
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {value.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Why YJLS is Kolkata's #1 Choice
                </h2>
              </div>
              <div className="space-y-5 ml-2 md:ml-0">
                {whyChooseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={studentsLearning}
                alt="Students Learning"
                className="rounded-lg shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-lg">
              <Sparkles className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
            Ready to Begin Your Journey with YJLS?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
            Join hundreds of successful students who have achieved their Japanese language goals with us. Your success story starts here!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto group">
                <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Start Your Application
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 border-white text-gray-900 hover:bg-white hover:text-gray-700 w-full sm:w-auto group"
            >
              <a href="tel:+918670035037" className="flex items-center gap-2">
                <PhoneOutgoing className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Book a Demo Class
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-x-1 transition-transform sm:hidden" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
