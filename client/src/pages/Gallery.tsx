import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import GalleryGrid from "@/components/GalleryGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import heroImage from "@assets/generated_images/School_campus_hero_image_8fe69a50.png";
import classroomImage from "@assets/generated_images/Students_in_classroom_learning_6a740ef2.png";
import labImage from "@assets/generated_images/Science_lab_with_students_8bb7b718.png";
import sportsImage from "@assets/generated_images/Students_playing_sports_outdoors_250be082.png";
import teacherFemale from "@assets/generated_images/Female_teacher_professional_portrait_8405caec.png";
import teacherMale from "@assets/generated_images/Male_teacher_professional_portrait_f0cd058b.png";
import assemblyImage from "@assets/generated_images/School_community_assembly_gathering_6e0ddf44.png";
import parentMeetingImage from "@assets/generated_images/Parent_consultation_meeting_73026c14.png";

export default function Gallery() {
  const campusImages = [
    {
      src: heroImage,
      alt: "School Campus Aerial View",
      title: "Main Campus",
    },
    {
      src: classroomImage,
      alt: "Modern Classroom",
      title: "Smart Classroom",
    },
    {
      src: labImage,
      alt: "Science Laboratory",
      title: "Science Lab",
    },
    {
      src: sportsImage,
      alt: "Sports Facilities",
      title: "Sports Ground",
    },
  ];

  const eventsImages = [
    {
      src: assemblyImage,
      alt: "Annual Day Celebration",
      title: "Annual Day 2024",
    },
    {
      src: sportsImage,
      alt: "Sports Day",
      title: "Sports Day",
    },
    {
      src: parentMeetingImage,
      alt: "Parent-Teacher Meeting",
      title: "PTM Session",
    },
    {
      src: assemblyImage,
      alt: "Cultural Festival",
      title: "Cultural Fest",
    },
  ];

  const academicImages = [
    {
      src: classroomImage,
      alt: "Students in Class",
      title: "Interactive Learning",
    },
    {
      src: labImage,
      alt: "Science Experiment",
      title: "Lab Session",
    },
    {
      src: teacherFemale,
      alt: "Teacher Teaching",
      title: "Classroom Teaching",
    },
    {
      src: classroomImage,
      alt: "Group Study",
      title: "Collaborative Learning",
    },
  ];

  const sportsImages = [
    {
      src: sportsImage,
      alt: "Students Playing Sports",
      title: "Outdoor Sports",
    },
    {
      src: sportsImage,
      alt: "Basketball Match",
      title: "Basketball Tournament",
    },
    {
      src: sportsImage,
      alt: "Cricket Practice",
      title: "Cricket Training",
    },
    {
      src: sportsImage,
      alt: "Swimming Pool",
      title: "Swimming Activities",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Gallery</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
              Explore our campus, events, and the vibrant life at Excellence Academy
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Tabs Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore moments from campus life, events, academics, and sports activities 
              that showcase our vibrant school community
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Tabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="campus" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
              <TabsTrigger value="campus">Campus</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="academics">Academics</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="campus">
              <SectionHeader
                subtitle="Our Infrastructure"
                title="Campus & Facilities"
                description="Take a tour of our modern campus and world-class facilities"
              />
              <GalleryGrid images={campusImages} />
            </TabsContent>
            
            <TabsContent value="events">
              <SectionHeader
                subtitle="Celebrations & Occasions"
                title="School Events"
                description="Memorable moments from our annual celebrations and special events"
              />
              <GalleryGrid images={eventsImages} />
            </TabsContent>
            
            <TabsContent value="academics">
              <SectionHeader
                subtitle="Learning in Action"
                title="Academic Activities"
                description="Students engaged in interactive learning and classroom experiences"
              />
              <GalleryGrid images={academicImages} />
            </TabsContent>
            
            <TabsContent value="sports">
              <SectionHeader
                subtitle="Athletic Excellence"
                title="Sports & Fitness"
                description="Students participating in various sports and physical activities"
              />
              <GalleryGrid images={sportsImages} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Virtual Tour"
            title="School Tour Video"
            description="Take a virtual walkthrough of Excellence Academy"
          />
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border">
              <div className="text-center p-8">
                <svg
                  className="w-20 h-20 mx-auto mb-4 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="font-semibold text-lg mb-2">Campus Tour Video</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Watch our comprehensive virtual tour showcasing all facilities
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Video will be available soon. Visit our campus for a live tour!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-center mb-8">Gallery Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-sm text-muted-foreground">Photos</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Events Covered</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">25+</div>
                  <p className="text-sm text-muted-foreground">Years of Memories</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <p className="text-sm text-muted-foreground">Albums</p>
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
