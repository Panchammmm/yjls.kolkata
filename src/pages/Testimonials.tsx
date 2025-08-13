"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Star,
  Play,
  X,
  Video,
  MessageSquareText,
  Phone,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "JLPT N3 Graduate",
      rating: 5,
      text: "Yume Japanese Language School transformed my career prospects. The teachers are incredibly supportive, and the lessons are engaging and effective.",
    },
    {
      name: "Ravi Kumar",
      role: "Current N4 Student",
      rating: 5,
      text: "I love how interactive the classes are. I never thought learning Japanese could be so much fun!",
    },
    {
      name: "Priya Verma",
      role: "Parent",
      rating: 5,
      text: "My daughter is thriving at Yume! Her confidence in speaking Japanese has grown tremendously.",
    },
    {
      name: "Akash Mehta",
      role: "JLPT N2 Student",
      rating: 4,
      text: "The mock tests and personalized feedback really help in understanding the JLPT exam pattern.",
    },
    {
      name: "Sara Khan",
      role: "Beginner Level Student",
      rating: 5,
      text: "Even as a beginner, I feel very comfortable in class. The pace is perfect, and the materials are top-notch.",
    },
    {
      name: "Vikram Singh",
      role: "JLPT N5 Graduate",
      rating: 5,
      text: "Completing my N5 at Yume was the best decision I made. The faculty genuinely care about student success.",
    },
  ];

  const videoTestimonials = [
    {
      name: "Sakura Tanaka",
      role: "Former Student",
      title: "How I passed JLPT N2 in one year",
      thumbnail: "/videos/video1-thumb.jpg",
      videoId: "abcd1234",
    },
    {
      name: "Kenji Sato",
      role: "Business Professional",
      title: "Learning Japanese for my career",
      thumbnail: "/videos/video2-thumb.jpg",
      videoId: "efgh5678",
    },
    {
      name: "Aiko Nakamura",
      role: "Exchange Student",
      title: "My study abroad experience",
      thumbnail: "/videos/video3-thumb.jpg",
      videoId: "ijkl9012",
    },
    {
      name: "Hiroshi Yamamoto",
      role: "JLPT N3 Graduate",
      title: "Balancing work and study",
      thumbnail: "/videos/video4-thumb.jpg",
      videoId: "mnop3456",
    },
    {
      name: "Yuki Kobayashi",
      role: "Beginner Student",
      title: "My first steps in learning Japanese",
      thumbnail: "/videos/video5-thumb.jpg",
      videoId: "qrst7890",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-2xl sm:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Student Success Stories
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground">
            Hear from our amazing students who have achieved their Japanese
            language goals and transformed their careers.
          </p>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10">
            <div className="flex justify-center items-center gap-2 mb-2 sm:mb-3">
              <Video className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              <h2 className="text-2xl sm:text-4xl font-bold text-foreground">
                Video Testimonials
              </h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Watch our students share their success stories
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto px-2 sm:px-4"
          >
            <CarouselContent>
              {videoTestimonials.map((video, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[90%] sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="relative aspect-video">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Button
                            size="icon"
                            className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                            onClick={() => setActiveVideo(video.videoId)}
                          >
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-4 sm:p-5">
                        <h3 className="font-semibold mb-1 text-base sm:text-lg">
                          {video.title}
                        </h3>
                        <p className="font-medium text-sm sm:text-base">
                          {video.name}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {video.role}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10">
            <div className="flex justify-center items-center gap-2 mb-2 sm:mb-3">
              <MessageSquareText className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              <h2 className="text-2xl sm:text-4xl font-bold text-foreground">
                What Our Students Say
              </h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              Read more reviews from our satisfied students and parents
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto px-2 sm:px-4"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[90%] sm:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-3 sm:mb-4">
                        <img
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                            testimonial.name
                          )}`}
                          alt={testimonial.name}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-primary"
                        />
                        <div>
                          <p className="font-semibold text-sm sm:text-base">
                            {testimonial.name}
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-3 sm:mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="italic flex-grow text-sm sm:text-base">
                        "{testimonial.text}"
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
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
            Ready to Start Your Japanese Journey?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
            Join hundreds of successful students who have achieved their dreams with Yume Japanese Language School.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-2xl px-5 py-3 bg-white text-primary font-semibold hover:bg-white/70"
            >
              <a href="/courses" className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> View Our Courses
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-2xl px-5 py-3 border bg-transparent border-white text-white hover:bg-white/20"
            >
              <a href="tel:+918670035037" className="flex items-center gap-2">
                <Phone className="w-5 h-5" /> Book a Free Class
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-md"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-8 right-0 text-white hover:text-gray-300"
            >
              <X className="w-7 h-7 sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
