import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import EventCard from "@/components/EventCard";
import { Music, Drama, Palette, Trophy, Users, Newspaper, Globe, Heart, Lightbulb, Mic, Camera, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import sportsImage from "@assets/generated_images/Students_playing_sports_outdoors_250be082.png";
import assemblyImage from "@assets/generated_images/School_community_assembly_gathering_6e0ddf44.png";

export default function StudentLife() {
  const clubs = [
    {
      name: "Music Club",
      description: "Learn instruments, vocal music, and participate in concerts and competitions",
      icon: Music,
      activities: ["Classical Music", "Western Music", "Choir", "Band Performance"],
    },
    {
      name: "Drama & Theatre",
      description: "Develop acting skills, stage presence, and creative expression through plays",
      icon: Drama,
      activities: ["Annual Plays", "Street Theatre", "Mime", "Story Telling"],
    },
    {
      name: "Art & Craft",
      description: "Explore creativity through painting, sculpture, and various art forms",
      icon: Palette,
      activities: ["Painting", "Sculpture", "Pottery", "Art Exhibitions"],
    },
    {
      name: "Sports Teams",
      description: "Competitive and recreational sports with professional coaching",
      icon: Trophy,
      activities: ["Cricket", "Basketball", "Football", "Swimming"],
    },
    {
      name: "Debate & MUN",
      description: "Develop public speaking, critical thinking, and leadership skills",
      icon: Mic,
      activities: ["Debates", "MUN", "Public Speaking", "Elocution"],
    },
    {
      name: "Science Club",
      description: "Hands-on experiments, projects, and participation in science fairs",
      icon: Lightbulb,
      activities: ["Experiments", "Science Fair", "Olympiads", "Astronomy"],
    },
    {
      name: "Literary Society",
      description: "Creative writing, book clubs, and literary magazine publication",
      icon: BookOpen,
      activities: ["Creative Writing", "Poetry", "Book Club", "Magazine"],
    },
    {
      name: "Photography Club",
      description: "Learn photography techniques and document school events",
      icon: Camera,
      activities: ["Photo Walks", "Events Coverage", "Exhibitions", "Editing"],
    },
    {
      name: "Social Service",
      description: "Community outreach programs and social awareness initiatives",
      icon: Heart,
      activities: ["NGO Visits", "Awareness Drives", "Charity Events", "Environment"],
    },
    {
      name: "International Club",
      description: "Cultural exchange, language learning, and global awareness",
      icon: Globe,
      activities: ["Cultural Exchange", "Language Learning", "Pen Pals", "Global Issues"],
    },
    {
      name: "Tech & Coding",
      description: "Programming, robotics, app development, and tech competitions",
      icon: Lightbulb,
      activities: ["Coding", "Robotics", "App Development", "Hackathons"],
    },
    {
      name: "School Magazine",
      description: "Student-run publication featuring articles, art, and creative content",
      icon: Newspaper,
      activities: ["Writing", "Editing", "Design", "Publishing"],
    },
  ];

  const events = [
    {
      title: "Annual Sports Day",
      date: "February 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Main Sports Ground",
      category: "Sports",
      description: "Inter-house athletics competition with track and field events, team sports, and prize distribution ceremony.",
      image: sportsImage,
    },
    {
      title: "Cultural Festival",
      date: "November 20-22, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "School Auditorium",
      category: "Cultural",
      description: "Three-day extravaganza featuring music, dance, drama performances, and art exhibitions by students.",
      image: assemblyImage,
    },
    {
      title: "Science Exhibition",
      date: "September 10, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Science Block",
      category: "Academic",
      description: "Students showcase innovative projects, working models, and scientific experiments across all grades.",
      image: assemblyImage,
    },
  ];

  const houses = [
    { name: "Red House - Courage", color: "bg-red-500", values: "Bravery, Strength, Determination" },
    { name: "Blue House - Wisdom", color: "bg-blue-500", values: "Knowledge, Intelligence, Insight" },
    { name: "Green House - Growth", color: "bg-green-500", values: "Progress, Development, Excellence" },
    { name: "Yellow House - Happiness", color: "bg-yellow-500", values: "Joy, Positivity, Enthusiasm" },
  ];

  const highlights = [
    {
      title: "Student Council",
      description: "Democratically elected student representatives leading various initiatives and voice of the student body.",
    },
    {
      title: "Inter-House Competitions",
      description: "Year-round competitions in sports, academics, and cultural activities fostering healthy competition.",
    },
    {
      title: "Field Trips & Excursions",
      description: "Educational tours, museum visits, historical site explorations, and adventure camps.",
    },
    {
      title: "Celebrations & Festivals",
      description: "Independence Day, Republic Day, Diwali, Christmas, and various cultural celebrations.",
    },
    {
      title: "Guest Lectures",
      description: "Inspirational talks by industry experts, alumni, and notable personalities.",
    },
    {
      title: "Workshops & Seminars",
      description: "Skill development workshops on leadership, time management, and career planning.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Student Life</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
              Beyond academics - a vibrant community of clubs, events, and activities for holistic development
            </p>
          </div>
        </div>
      </section>

      {/* Clubs & Activities Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Life</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Beyond academics - a vibrant campus life filled with activities, events, 
              and opportunities for holistic development
            </p>
          </div>
        </div>
      </section>

      {/* Clubs & Activities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Get Involved"
            title="Clubs & Activities"
            description="Discover your passion and develop new skills through diverse extracurricular programs"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <club.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{club.name}</h3>
                      <p className="text-sm text-muted-foreground">{club.description}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {club.activities.map((activity, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* House System Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Team Spirit"
            title="House System"
            description="Every student belongs to a house, fostering teamwork and healthy competition"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {houses.map((house, index) => (
              <Card key={index} className="hover-elevate overflow-hidden">
                <div className={`h-3 ${house.color}`}></div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{house.name}</h3>
                  <p className="text-sm text-muted-foreground">{house.values}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <p className="text-muted-foreground">
              The house system promotes camaraderie, leadership, and teamwork through year-round 
              competitions in academics, sports, and cultural activities. Points are awarded for 
              achievements and the winning house receives the championship trophy at the annual day.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Celebrate Together"
            title="Annual Events"
            description="Major events that make each year memorable and exciting"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Highlights Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="More Opportunities"
            title="Beyond the Classroom"
            description="Additional programs and initiatives enriching student experience"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <blockquote className="text-xl italic mb-4">
              "The diverse clubs and activities at Excellence Academy have helped me discover my 
              passion for robotics and public speaking. The supportive environment encourages us 
              to try new things and grow beyond academics."
            </blockquote>
            <p className="font-semibold">Arjun Mehta</p>
            <p className="text-sm text-muted-foreground">Class XI, Student Council President</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
