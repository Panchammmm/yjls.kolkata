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
import { Link } from "react-router-dom";

// thumbnails
import apurba from "@/assets/video-thumbnails/aburba_ghosh.png";
import ditipriya from "@/assets/video-thumbnails/ditipriya_jana.png";
import rashmi from "@/assets/video-thumbnails/rashmi_roy.png";
import saikat from "@/assets/video-thumbnails/saikat_mondal.png";
import sangita from "@/assets/video-thumbnails/sangita_laha.png";
import subhashree from "@/assets/video-thumbnails/subhashree_sardar.png";
import sumita from "@/assets/video-thumbnails/sumita_mondal.png";
import sutaba from "@/assets/video-thumbnails/sutaba_sardar.png";

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const testimonials = [
    {
      name: "Rohit Sarkar",
      role: "JLPT N5 Graduate",
      rating: 5,
      text: "The instructor is incredibly approachable and create a fun and engaging environment, even when tackling complex concepts. Their structured curriculum ensures a clear learning path, making it an excellent choice for both beginners and those seeking to enhance their existing knowledge.",
    },
    {
      name: "Suchismita Mridha",
      role: "Current N3 Student",
      rating: 5,
      text: "My experience with Yume Japanese Language School was quite well and I've learned a lot from the teacher. Equal attention was given to every individual which is the best part of YJLS. So I would suggest if you really interested in Japanese language you should definitely go for it. It helps you to overcome your fears and helps in achieving your goals.",
    },
    {
      name: "Khan Jaber",
      role: "Current N5 Student",
      rating: 5,
      text: "I am learning Japanese language from Pancham sensei. He is a ideal sensei.",
    },
    {
      name: "Ritwayan Mondal",
      role: "JLPT N5 Graduate",
      rating: 5,
      text: "'Yume' means Dream in Japan. If you dream it you can achieve it. Jyoti Sir is so polite and humble, I advise if you check it, just one call to sir, he definitely give you real advice. By the way it's your decision to join the class. Currently I'm still learning, still now my experience is V. good",
    },
    {
      name: "Sayandeep Biswas",
      role: "Current N4 Student",
      rating: 5,
      text: "One of the best places you can learn japanese in West Bengal. Gayen sensei, our teacher, is also extremely open about him and knows how to make his students open up to him and get the best out of every individual.",
    },
    {
      name: "Mahak Mala Saren",
      role: "Beginner Student",
      rating: 5,
      text: "The teacher teaches with a lot of care and patience and not only he teaches the students about the language but also talks about Japanese people, their lifestyle, cuisine, culture and a lot more things, through which we learn a lot about Japan. I am personally very grateful that such a good Japanese teacher is there who teaches something so unique. I highly recommend this place if you are willing to learn Japanese.",
    },
    {
      name: "Rahul Roy",
      role: "Current N4 Student",
      rating: 5,
      text: "If you want to learn Japanese, this is the best place to follow a guided learning path. The structured approach and expert guidance make it an excellent choice for all levels.",
    },
    {
      name: "Mousumi Kumar",
      role: "Current N5 Student",
      rating: 5,
      text: "This is an excellent place to learn Japanese. In my case, my teacher is Jyotirmoy Gayen sensei, he is very friendly and interactive. I recommend this institution.",
    },
    {
      name: "Sumita Mondal",
      role: "JLPT N5 Graduate",
      rating: 5,
      text: "Best Japanese School. This is the best school if you want to learn Japanese. So without wasting time get admitted immediately!! 🇮🇳❤️🇯🇵",
    },
    {
      name: "Srayashi Ghosh",
      role: "Beginner level Student",
      rating: 5,
      text: "Amazing place to begin with learning Japanese language. With approachable and understanding teacher it becomes easy to learn and grasp a difficult language like Japanese. Highly recommended for all stages.",
    },
  ];

  // Updated videoTestimonials with correct names, thumbnails, and 6-12 month learning experience
  const videoTestimonials = [
    
    {
      name: "Ditipriya Jana",
      role: "Beginner Student (6 months)",
      title: "My First Steps in Japanese",
      thumbnail: ditipriya,
      embedUrl: "https://drive.google.com/file/d/14jkUexeRg6LBCU5gIXr0gRV4mtwOypQF/preview",
    },
    {
      name: "Rashmi Roy",
      role: "JLPT N3 level Student (4 years)",
      title: "Discovering Japan Through Language",
      thumbnail: rashmi,
      embedUrl: "https://drive.google.com/file/d/1bW7E3udDvD9NYMBbVWhgkK3GmLoWoPAY/preview",
    },
    {
      name: "Apurba Ghosh",
      role: "Conversational Student (11 months)",
      title: "Building Confidence in Japanese Speaking",
      thumbnail: apurba,
      embedUrl: "https://drive.google.com/file/d/1GAhixlXRzzMZct2VfEKDR1dpsmPHkCJj/preview",
    },
    {
      name: "Subhashree Sardar",
      role: "N5 Graduate (7 months)",
      title: "Successfully Passing My First JLPT",
      thumbnail: subhashree,
      embedUrl: "https://drive.google.com/file/d/1ZzY_RKDG3I-SWIWAqSbFxqHuPqsUtVs1/preview",
    },
    {
      name: "Sutaba Sardar",
      role: "N4 Preparation Student (10 months)",
      title: "Preparing for My JLPT N4 Exam",
      thumbnail: sutaba,
      embedUrl: "https://drive.google.com/file/d/1eNBSZrv7V2KJkZMyEQPXX2RjMVIVtlW_/preview",
    },
    {
      name: "Sangita Laha",
      role: "Advanced Student (12 months)",
      title: "One Year of Amazing Progress",
      thumbnail: sangita,
      embedUrl: "https://drive.google.com/file/d/16_giObaEyS6HzLdac-VP3soYAY7zIoP0/preview",
    },
    {
      name: "Saikat Mondal",
      role: "Intermediate Student (9 months)",
      title: "How YJLS Changed My Learning Style",
      thumbnail: saikat,
      embedUrl: "https://drive.google.com/file/d/1LRJtf9pl0ZW8o3z_7_gjS3KM43lO05aP/preview",
    },
    {
      name: "Sumita Mondal",
      role: "N5 Level Student (8 months)",
      title: "From Zero to Confident Conversations",
      thumbnail: sumita,
      embedUrl: "https://drive.google.com/file/d/1xrm1TpyAjVhZBhAAgyfr_Lqc1_rg7-NJ/preview",
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
                            onClick={() => setActiveVideo(video.embedUrl)}
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

        <div className="text-center mt-6 sm:mt-8 px-4">
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <a
              href="https://www.google.com/search?sca_esv=74352027cc1c8752&biw=1536&bih=776&sxsrf=AE3TifNsnlfw4Y77iQZd5ne2tW8jSNu7DQ:1756387197956&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E6oWvXHDct70AgkFqQFuUAGw05vHMsBGMTyleyUQ6KRS4dtmiOcQ35KTd_zer_v0A8096sZt4V1hx5hnMH45QS6QvMtV81rt8w7iGpobTDk4FgcFKg%3D%3D&q=Yume+Japanese+Language+School+Reviews&sa=X&ved=2ahUKEwjsv5aYzK2PAxU4h1YBHafsFboQ0bkNegQIHBAE"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Google Testimonials
            </a>
          </Button>
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
            <Link to="/courses">
              <Button
                size="lg"
                className="rounded-2xl px-5 py-3 bg-white text-primary font-semibold hover:bg-white/70 w-full sm:w-auto"
              >
                <BookOpen className="w-5 h-5 mr-2" /> View Our Courses
              </Button>
            </Link>
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

      {/* Video Modal for Google Drive */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-md"
              src={activeVideo}
              allow="autoplay"
              allowFullScreen
              frameBorder="0"
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-8 right-0 text-white hover:text-gray-300"
            >
              <X className="w-7 h-7 sm:w-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
