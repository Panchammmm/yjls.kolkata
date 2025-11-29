import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, PhoneOutgoing, Sparkles, X } from "lucide-react";

// event photos
import events1 from "@/assets/Gallery/events/photo1.jpg";
import events2 from "@/assets/Gallery/events/photo2.jpg";
// import events3 from "@/assets/Gallery/events/photo3.jpg";
import events4 from "@/assets/Gallery/events/photo4.jpg";
// import events5 from "@/assets/Gallery/events/photo5.jpg";
import events6 from "@/assets/Gallery/events/photo6.jpg";
import events7 from "@/assets/Gallery/events/photo7.jpg";
import events8 from "@/assets/Gallery/events/photo8.jpg";
import events9 from "@/assets/Gallery/events/photo9.jpg";
import events10 from "@/assets/Gallery/events/photo10.jpg";
import events11 from "@/assets/Gallery/events/photo11.jpg";
import events12 from "@/assets/Gallery/events/photo12.jpg";

// classes photos
import classes1 from "@/assets/Gallery/classes/class1.jpg";
import classes2 from "@/assets/Gallery/classes/class2.jpg";
import classes3 from "@/assets/Gallery/classes/class3.jpg";
import classes4 from "@/assets/Gallery/classes/class4.jpg";

// exams photos
import exams1 from "@/assets/Gallery/exams/exam1.jpg";
import exams2 from "@/assets/Gallery/exams/exam2.jpg";

// students photos
import students1 from "@/assets/Gallery/students/student1.jpg";
import students2 from "@/assets/Gallery/students/student2.jpg";
import students3 from "@/assets/Gallery/students/student3.jpg";
import students4 from "@/assets/Gallery/students/student4.jpg";
import students5 from "@/assets/Gallery/students/student5.jpg";
import students6 from "@/assets/Gallery/students/student6.jpg";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    // Events
    { id: 1, image: events1, title: "Japanese Quiz Contest", category: "Events", description: "Quiz contest event at Ramakrishna Mission Institute of Culture, Kolkata." },
    { id: 2, image: events2, title: "Japanese Quiz Contest", category: "Events", description: "Our students receiving certificates in the quiz contest." },
    { id: 3, image: events4, title: "Study In Japan", category: "Events", description: "Life of Indian students while studying in Japan." },
    { id: 4, image: events6, title: "Tradition Day", category: "Events", description: "Exploring traditional Japanese customs." },
    { id: 5, image: events7, title: "Community Event", category: "Events", description: "Building community spirit with enthusiastic participants." },
    { id: 6, image: events8, title: "Connect With Personnel", category: "Events", description: "Building meaningful connections with the Consulate General of Japan in Kolkata." },
    { id: 7, image: events9, title: "Picnic Memories", category: "Events", description: "Games, laughter, and friendship at the YJLS picnic." },
    { id: 8, image: events10, title: "Picnic Feast", category: "Events", description: "Joyful feast moments from our recent student & teacher picnic." },
    { id: 9, image: events11, title: "Teachers' Day Highlights", category: "Events", description: "Special moments from Teachers' Day at Yume." },
    { id: 10, image: events12, title: "Teachers' Day Celebration", category: "Events", description: "Our students honoring teachers with gratitude and performances." },

    // Classes
    { id: 11, image: classes1, title: "Offline Class", category: "Classes", description: "Face-to-face interactive sessions in the classroom." },
    { id: 12, image: classes2, title: "Opening Ceremony", category: "Classes", description: "A memorable day with fellow students during our opening ceremony." },
    { id: 13, image: classes3, title: "Teacher Guidance", category: "Classes", description: "Expert support during lessons and parent-teacher conferences." },
    { id: 14, image: classes4, title: "Focused Preparation", category: "Classes", description: "Advanced preparation for JLPT and NAT exams." },

    // Exams
    { id: 15, image: exams1, title: "JLPT Mock Test", category: "Exams", description: "Simulated exams to prepare for the JLPT exam." },
    { id: 16, image: exams2, title: "NAT Mock Test", category: "Exams", description: "Simulated exams for students preparing for the NAT exam." },

    // Students
    { id: 17, image: students1, title: "Learning Journey", category: "Students", description: "Dedicated learners at Yume Japanese Language School." },
    { id: 18, image: students2, title: "Representing School", category: "Students", description: "Representing our school with brilliant students." },
    { id: 19, image: students3, title: "Award Received", category: "Students", description: "Outstanding performance celebrated with awards." },
    { id: 20, image: students4, title: "Friendship", category: "Students", description: "Building bonds while learning Japanese." },
    { id: 21, image: students5, title: "School Program", category: "Students", description: "Collaboration with government schools." },
    { id: 22, image: students6, title: "Faculty", category: "Students", description: "Strong initiative and responsibilities demonstrated by faculty members." }
  ];

  const categories = ["All", "Events", "Classes", "Exams", "Students"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
    <SEO 
        title="School Gallery - Events, Classes & Student Life"
        description="Explore Yume Japanese Language School through our gallery. View photos of classroom sessions, JLPT mock tests, cultural events, picnics, Teachers' Day celebrations, and our vibrant student community in Kolkata."
        keywords="Japanese school gallery Kolkata, Japanese class photos, JLPT exam preparation, Japanese cultural events Kolkata, student activities"
        url="https://yjls-kolkata.in/gallery"
      />

    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            School Gallery
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed">
            <span className="hidden sm:inline">
              Take a glimpse into our vibrant learning environment, modern facilities, and the amazing journey of our students learning Japanese at Yume.
            </span>
            <span className="sm:hidden">
              Explore our vibrant learning environment and modern facilities at Yume Japanese Language School.
            </span>
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pt-8 pb-4 bg-background sticky top-16 z-40 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="mb-2 text-xs sm:text-sm px-2 sm:px-3 md:px-4 py-1 sm:py-2 min-w-0 flex-shrink-0 transition-all duration-200"
                size="sm"
              >
                <span className="truncate">
                  {category}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 sm:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <p className="text-lg sm:text-xl text-muted-foreground">
                No images found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {filteredItems.map((item) => (
                <Card 
                  key={item.id} 
                  className="group cursor-pointer hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-card"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title || "Gallery Image"}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-56 xl:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold bg-primary/80 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">
                        <span className="hidden sm:inline">View Image</span>
                        <span className="sm:hidden">View</span>
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2 sm:gap-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground line-clamp-2 flex-1 min-w-0">
                        {item.title}
                      </h3>
                      <span className="text-xs sm:text-sm bg-accent text-accent-foreground px-2 py-1 rounded flex-shrink-0 self-start">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground line-clamp-2 sm:line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[95vw] sm:max-w-4xl max-h-[95vh] sm:max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-8 sm:-top-12 right-0 text-white hover:text-gray-300 hover:bg-white/10 z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-[85vh] sm:max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

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
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto group">
                <div className="flex items-center gap-2 justify-center">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Start Your Application
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 border-white text-gray-900 hover:bg-white hover:text-gray-700 w-full sm:w-auto group"
            >
              <a href="tel:+918670035037" className="flex items-center gap-2">
                <PhoneOutgoing className="h-4 w-4 mr-2" />
                Book a Demo Class
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform sm:hidden" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Gallery;
