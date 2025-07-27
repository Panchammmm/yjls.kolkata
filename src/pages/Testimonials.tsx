import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Play } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "The teachers at Yume are incredibly patient and supportive. I passed my JLPT N3 on my first attempt!",
      role: "Student, N3 Level"
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Best Japanese language school in Kolkata! The practical approach to teaching made learning so much easier.",
      role: "Student, N4 Level"
    },
    {
      name: "Anita Bose",
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
    },
    {
      name: "Sneha Roy",
      rating: 5,
      text: "The mock tests and exam preparation were spot-on. Cleared JLPT N4 with flying colors!",
      role: "Student"
    },
    {
      name: "Amit Banerjee",
      rating: 5,
      text: "From zero knowledge to conversational Japanese in 10 months. Highly recommend Yume!",
      role: "Working Professional"
    }
  ];

  const videoTestimonials = [
    {
      name: "Sakshi Agarwal",
      role: "N2 Level Graduate",
      title: "My Journey to Japan",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
      name: "Rohit Chakraborty",
      role: "Alumni, Working in Tokyo",
      title: "How Yume Changed My Life",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
      name: "Priyanka Das",
      role: "JLPT N1 Pass",
      title: "From Beginner to Advanced",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Student <span className="text-primary">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Hear from our amazing students who have achieved their Japanese language goals and transformed their careers
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch our students share their success stories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="relative aspect-video bg-muted">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank')}
                    >
                      <Play className="h-6 w-6 ml-1" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{video.title}</h3>
                  <p className="font-medium text-foreground">{video.name}</p>
                  <p className="text-sm text-muted-foreground">{video.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Read more reviews from our satisfied students and parents
            </p>
          </div>
          
          <div className="relative px-12 sm:px-16">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-6xl mx-auto"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Japanese Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of successful students who have achieved their dreams with Yume Japanese Language School
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              <a href="/contact">Contact Us Today</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <a href="/courses">View Our Courses</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;