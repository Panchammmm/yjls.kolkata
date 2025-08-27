import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import heroClassroom from "@/assets/hero-classroom.jpg";
import learningMaterials from "@/assets/learning-materials.jpg";
import studentsLearning from "@/assets/students-learning.jpg";
import japaneseCulture from "@/assets/japanese-culture.jpg";
import schoolEntrance from "@/assets/school-entrance.jpg";
import jlptPreparation from "@/assets/jlpt-preparation.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      image: heroClassroom,
      title: "Modern Classroom",
      category: "Facilities",
      description: "Our state-of-the-art classrooms equipped with modern learning technology"
    },
    {
      id: 2,
      image: studentsLearning,
      title: "Interactive Learning",
      category: "Classes",
      description: "Students engaged in interactive Japanese language sessions"
    },
    {
      id: 3,
      image: japaneseCulture,
      title: "Cultural Activities",
      category: "Events",
      description: "Cultural immersion activities and Japanese festivals celebration"
    },
    {
      id: 4,
      image: schoolEntrance,
      title: "School Entrance",
      category: "Facilities",
      description: "Welcome to Yume Japanese Language School - your gateway to Japan"
    },
    {
      id: 5,
      image: jlptPreparation,
      title: "JLPT Preparation",
      category: "Exams",
      description: "Intensive JLPT preparation sessions with mock tests"
    }
  ];

  const categories = ["All", "Facilities", "Classes", "Events", "Exams"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
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
                      alt={item.title}
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Experience Yume Yourself
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto">
            <span className="hidden sm:inline">
              Visit our campus for a tour and see our facilities, meet our teachers, and experience the Yume difference firsthand.
            </span>
            <span className="sm:hidden">
              Visit our campus and experience the Yume difference firsthand.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              <span className="hidden sm:inline">Schedule Campus Visit</span>
              <span className="sm:hidden">Campus Visit</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
            >
              <span className="hidden sm:inline">Book Demo Class</span>
              <span className="sm:hidden">Demo Class</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
