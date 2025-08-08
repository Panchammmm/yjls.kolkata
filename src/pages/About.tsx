import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, BookOpen, Globe, Target, Heart } from "lucide-react";
import schoolEntrance from "@/assets/school-entrance.jpg";
import studentsLearning from "@/assets/students-learning.jpg";

const About = () => {
  const achievements = [
    {
      number: "500+",
      label: "Students Taught",
      description: "Successfully guided students to fluency"
    },
    {
      number: "95%",
      label: "JLPT Success Rate",
      description: "High pass rates in proficiency tests"
    },
    {
      number: "8+",
      label: "Years Experience",
      description: "Proven track record in language education"
    },
    {
      number: "50+",
      label: "Job Placements",
      description: "Students working in Japan"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for the highest standards in Japanese language education"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Care",
      description: "Personalized attention and support for every student's journey"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Vision",
      description: "Preparing students for international opportunities and cultural exchange"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality",
      description: "Modern teaching methods and comprehensive learning materials"
    }
  ];

  const team = [
    {
      name: "Sensei Tanaka",
      role: "Head Instructor",
      qualification: "Native Speaker, M.A. in Japanese Linguistics",
      experience: "10+ years teaching experience"
    },
    {
      name: "Dr. Priya Chakraborty",
      role: "Senior Faculty",
      qualification: "Ph.D. in Japanese Studies, JLPT N1",
      experience: "8 years in language education"
    },
    {
      name: "Mr. Ravi Kumar",
      role: "JLPT Specialist",
      qualification: "JLPT N1, Former Japan Resident",
      experience: "5 years test preparation expert"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Yume Japanese Language School
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Established as South Kolkata's premier Japanese language institute, Yume has been transforming dreams into reality by providing world-class Japanese language education and comprehensive career support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  Join Our Family
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={schoolEntrance} 
                alt="Yume School Entrance"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-primary mb-4">
                  <Target className="h-12 w-12" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional Japanese language education that empowers students to achieve their personal and professional goals. We believe in making Japanese learning accessible, enjoyable, and effective for everyone, regardless of their background or starting level.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-primary mb-4">
                  <Globe className="h-12 w-12" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading bridge between India and Japan, fostering cultural understanding and creating global opportunities. We envision a future where language barriers don't limit dreams, and every student can confidently pursue their aspirations in Japan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl opacity-90">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {achievement.number}
                </div>
                <div className="text-xl font-semibold mb-2">{achievement.label}</div>
                <div className="text-sm opacity-90">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Faculty
            </h2>
            <p className="text-xl text-muted-foreground">
              Learn from experienced teachers who are passionate about Japanese language and culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-1">{member.qualification}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Yume is South Kolkata's #1 Choice
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Proven Track Record:</strong> Highest success rates in JLPT and NAT examinations in the region
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Comprehensive Support:</strong> From language learning to visa assistance and job placement
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Modern Facilities:</strong> State-of-the-art classrooms with latest learning technology
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Affordable Excellence:</strong> Premium education at competitive prices with flexible payment options
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Cultural Immersion:</strong> Regular cultural events and festivals to deepen understanding
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={studentsLearning} 
                alt="Students Learning"
                className="rounded-lg shadow-soft w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Journey with Yume?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of successful students who have achieved their Japanese language goals with us. Your success story starts here!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-3">
              Start Your Application
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;