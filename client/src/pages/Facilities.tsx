import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import FacilityCard from "@/components/FacilityCard";
import { FlaskConical, Dumbbell, BookOpen, Laptop, Microscope, Utensils, Bus, Heart, Library, MonitorPlay, Building2, TreePine } from "lucide-react";

import labImage from "@assets/generated_images/Science_lab_with_students_8bb7b718.png";
import sportsImage from "@assets/generated_images/Students_playing_sports_outdoors_250be082.png";
import classroomImage from "@assets/generated_images/Students_in_classroom_learning_6a740ef2.png";

export default function Facilities() {
  const facilities = [
    {
      title: "Science Laboratories",
      description: "Fully equipped Physics, Chemistry, and Biology labs with modern equipment, safety measures, and hands-on learning resources for practical experiments.",
      icon: FlaskConical,
      image: labImage,
    },
    {
      title: "Computer Labs",
      description: "State-of-the-art computer labs with latest hardware, high-speed internet, and software for coding, design, and digital learning.",
      icon: Laptop,
      image: classroomImage,
    },
    {
      title: "Sports Complex",
      description: "Olympic-sized swimming pool, basketball courts, cricket ground, football field, indoor badminton courts, and fully equipped gymnasium.",
      icon: Dumbbell,
      image: sportsImage,
    },
    {
      title: "Digital Library",
      description: "Extensive collection of 50,000+ books, e-resources, digital databases, quiet study zones, and reading rooms with modern amenities.",
      icon: BookOpen,
      image: classroomImage,
    },
    {
      title: "Smart Classrooms",
      description: "Interactive digital boards, multimedia projectors, audio systems, and air-conditioned learning spaces for enhanced teaching.",
      icon: MonitorPlay,
      image: classroomImage,
    },
    {
      title: "Medical Room",
      description: "Equipped medical facility with qualified nurses on duty, first-aid provisions, and tie-ups with nearby hospitals for emergencies.",
      icon: Heart,
      image: classroomImage,
    },
    {
      title: "Transportation",
      description: "Safe and comfortable GPS-enabled school buses covering all areas of the city with trained drivers and attendants.",
      icon: Bus,
      image: classroomImage,
    },
    {
      title: "Cafeteria",
      description: "Hygienic food court serving nutritious meals, snacks, and beverages with variety of healthy options for students and staff.",
      icon: Utensils,
      image: classroomImage,
    },
    {
      title: "Auditorium",
      description: "Modern 500-seater auditorium with advanced sound system, lighting, and stage facilities for events, performances, and assemblies.",
      icon: Building2,
      image: classroomImage,
    },
    {
      title: "Art & Music Rooms",
      description: "Dedicated spaces for fine arts, music practice, dance studios with instruments, easels, and creative learning materials.",
      icon: Library,
      image: classroomImage,
    },
    {
      title: "STEM Lab",
      description: "Innovation lab with robotics kits, 3D printers, electronics equipment, and tools for hands-on STEM project work.",
      icon: Microscope,
      image: labImage,
    },
    {
      title: "Green Campus",
      description: "Eco-friendly environment with gardens, tree plantation areas, rainwater harvesting, solar panels, and waste management systems.",
      icon: TreePine,
      image: classroomImage,
    },
  ];

  const highlights = [
    {
      title: "24/7 Security",
      description: "CCTV surveillance, trained security personnel, and controlled access systems",
    },
    {
      title: "Wi-Fi Campus",
      description: "High-speed internet connectivity throughout the campus for digital learning",
    },
    {
      title: "Accessibility",
      description: "Wheelchair ramps, elevators, and facilities designed for students with special needs",
    },
    {
      title: "Power Backup",
      description: "Uninterrupted power supply with generators ensuring continuous operations",
    },
    {
      title: "Drinking Water",
      description: "RO purified drinking water systems installed at multiple locations",
    },
    {
      title: "Parking",
      description: "Ample parking space for staff and visitors with organized vehicle management",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">World-Class Facilities</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
              Modern infrastructure and amenities designed to provide an enriching 
              learning environment for holistic development
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Infrastructure"
            title="Our Facilities"
            description="State-of-the-art amenities supporting academic and co-curricular excellence"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <FacilityCard key={index} {...facility} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Highlights Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="More Features"
            title="Additional Amenities"
            description="Ensuring safety, comfort, and convenience for all"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="bg-card border rounded-lg p-6 hover-elevate"
              >
                <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-center mb-8">Infrastructure at a Glance</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <p className="text-sm text-muted-foreground">Acres Campus</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <p className="text-sm text-muted-foreground">Smart Classrooms</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5</div>
                  <p className="text-sm text-muted-foreground">Science Labs</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <p className="text-sm text-muted-foreground">Books in Library</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
