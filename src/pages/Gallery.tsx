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
      image: learningMaterials,
      title: "Learning Materials",
      category: "Resources",
      description: "Comprehensive textbooks and digital learning resources"
    },
    {
      id: 4,
      image: japaneseCulture,
      title: "Cultural Activities",
      category: "Events",
      description: "Cultural immersion activities and Japanese festivals celebration"
    },
    {
      id: 5,
      image: schoolEntrance,
      title: "School Entrance",
      category: "Facilities",
      description: "Welcome to Yume Japanese Language School - your gateway to Japan"
    },
    {
      id: 6,
      image: jlptPreparation,
      title: "JLPT Preparation",
      category: "Exams",
      description: "Intensive JLPT preparation sessions with mock tests"
    }
  ];

  const categories = ["All", "Facilities", "Classes", "Resources", "Events", "Exams"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            School Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a glimpse into our vibrant learning environment, modern facilities, and the amazing journey of our students learning Japanese at Yume.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-background sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className="group cursor-pointer hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold bg-primary/80 px-4 py-2 rounded-lg">
                      View Image
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                    <span className="text-sm bg-accent text-accent-foreground px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Yume Yourself
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Visit our campus for a tour and see our facilities, meet our teachers, and experience the Yume difference firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-3">
              Schedule Campus Visit
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              Book Demo Class
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;