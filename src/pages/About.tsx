import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  BookOpen, 
  Globe, 
  Target, 
  Heart,
  GraduationCap,
  TrendingUp,
  MapPin,
  Briefcase,
  CheckCircle,
  Star,
  Calendar,
  Building,
  Lightbulb,
  Shield,
  Sparkles,
  ArrowRight
} from "lucide-react";
import schoolEntrance from "@/assets/school-entrance.jpg";
import studentsLearning from "@/assets/students-learning.jpg";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";

const About = () => {
  const achievements = [
    {
      number: "500+",
      label: "Students Taught",
      description: "Successfully guided students to fluency",
      icon: <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8" />
    },
    {
      number: "95%",
      label: "JLPT Success Rate", 
      description: "High pass rates in proficiency tests",
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />
    },
    {
      number: "8+",
      label: "Years Experience",
      description: "Proven track record in language education",
      icon: <Calendar className="h-6 w-6 sm:h-8 sm:w-8" />
    },
    {
      number: "50+", 
      label: "Job Placements",
      description: "Students working in Japan",
      icon: <Briefcase className="h-6 w-6 sm:h-8 sm:w-8" />
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
      name: "Sensei Tanaka",
      role: "Head Instructor",
      qualification: "Native Speaker, M.A. in Japanese Linguistics",
      experience: "10+ years teaching experience",
      icon: <Star className="h-8 w-8 sm:h-10 sm:w-10" />
    },
    {
      name: "Dr. Priya Chakraborty",
      role: "Senior Faculty",
      qualification: "Ph.D. in Japanese Studies, JLPT N1",
      experience: "8 years in language education",
      icon: <BookOpen className="h-8 w-8 sm:h-10 sm:w-10" />
    },
    {
      name: "Mr. Ravi Kumar",
      role: "JLPT Specialist",
      qualification: "JLPT N1, Former Japan Resident",
      experience: "5 years test preparation expert",
      icon: <Award className="h-8 w-8 sm:h-10 sm:w-10" />
    }
  ];

  const whyChooseFeatures = [
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      title: "Proven Track Record",
      description: "Highest success rates in JLPT and NAT examinations in the region"
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: "Comprehensive Support",
      description: "From language learning to visa assistance and job placement"
    },
    {
      icon: <Building className="h-5 w-5 text-primary" />,
      title: "Modern Facilities",
      description: "State-of-the-art classrooms with latest learning technology"
    },
    {
      icon: <Sparkles className="h-5 w-5 text-primary" />,
      title: "Affordable Excellence",
      description: "Premium education at competitive prices with flexible payment options"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Cultural Immersion",
      description: "Regular cultural events and festivals to deepen understanding"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
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
                <Button variant="hero" size="lg" className="w-full sm:w-auto group">
                  <BookOpen className="h-4 w-4 mr-2" />
                  View Courses
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Sparkles className="h-4 w-4 mr-2 pt-[1px]" />
                  View Our Gallery
                </Button>
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

      {/* Mission & Vision as Journey Timeline */}
      {/* <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            <div className="space-y-16">
              <div className="flex items-center justify-start">
                <div className="w-1/2 pr-8 text-right">
                  <div className="flex items-center justify-end gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Target className="size-6 text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground">
                    To provide exceptional Japanese language education that empowers students to achieve their personal and professional goals. We believe in making Japanese learning accessible, enjoyable, and effective for everyone, regardless of their background or starting level.
                  </p>
                </div>
                <div className="w-4 h-4 bg-primary rounded-full z-10"></div>
                <div className="w-1/2"></div>
              </div>

              <div className="flex items-center justify-end">
                <div className="w-1/2"></div>
                <div className="w-4 h-4 bg-primary rounded-full z-10"></div>
                <div className="w-1/2 pl-8 text-left">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Globe className="size-6 text-primary" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground">
                    To be the leading bridge between India and Japan, fostering cultural understanding and creating global opportunities. We envision a future where language barriers don't limit dreams, and every student can confidently pursue their aspirations in Japan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Achievements */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-4">
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Our Achievements
            </h2>
            <p className="text-lg sm:text-xl opacity-90">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    <div className="text-secondary">
                      {achievement.icon}
                    </div>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-1 sm:mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">{achievement.label}</div>
                <div className="text-xs sm:text-sm opacity-90 px-1">{achievement.description}</div>
              </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-primary rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <div className="text-primary-foreground">
                      {member.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-sm sm:text-base text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">{member.qualification}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{member.experience}</p>
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  Why YJLS is Kolkata's #1 Choice
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-5">
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
            <Button variant="secondary" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto group">
              <GraduationCap className="h-4 w-4 mr-2" />
              Start Your Application
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-3 border-white text-gray-900 hover:bg-white hover:text-gray-700 w-full sm:w-auto group"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
