import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Award, Target, Eye, Heart, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import parentMeetingImage from "@assets/generated_images/Parent_consultation_meeting_73026c14.png";
import assemblyImage from "@assets/generated_images/School_community_assembly_gathering_6e0ddf44.png";
import teacherFemale from "@assets/generated_images/Female_teacher_professional_portrait_8405caec.png";
import teacherMale from "@assets/generated_images/Male_teacher_professional_portrait_f0cd058b.png";

export default function About() {
  const milestones = [
    { year: "1999", event: "Excellence Academy was established with 200 students" },
    { year: "2005", event: "Expanded to include senior secondary classes" },
    { year: "2012", event: "Received ISO 9001:2008 certification for quality education" },
    { year: "2018", event: "State-of-the-art science and computer labs inaugurated" },
    { year: "2024", event: "Serving 3500+ students with 98.5% board results" },
  ];

  const leadership = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Principal",
      qualification: "Ph.D. Education Management",
      image: teacherMale,
      bio: "With over 25 years in education, Dr. Kumar leads our mission to provide world-class learning experiences.",
    },
    {
      name: "Mrs. Sunita Verma",
      position: "Vice Principal (Academic)",
      qualification: "M.Ed., Cambridge Certified",
      image: teacherFemale,
      bio: "Mrs. Verma oversees our academic programs ensuring excellence in teaching and learning methodologies.",
    },
    {
      name: "Mr. Amit Patel",
      position: "Director of Student Affairs",
      qualification: "MBA, Certified Counselor",
      image: teacherMale,
      bio: "Mr. Patel focuses on student well-being, counseling, and co-curricular development.",
    },
  ];

  const certifications = [
    { name: "CBSE Affiliation", code: "123456" },
    { name: "ISO 9001:2015 Certified", code: "Quality Management" },
    { name: "Green School Certification", code: "Environmental Excellence" },
    { name: "Cambridge Assessment Partner", code: "International Standards" },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do",
      icon: Award,
    },
    {
      title: "Integrity",
      description: "We uphold honesty, fairness, and strong moral principles",
      icon: Heart,
    },
    {
      title: "Innovation",
      description: "We embrace new ideas and creative approaches to learning",
      icon: TrendingUp,
    },
    {
      title: "Inclusivity",
      description: "We celebrate diversity and ensure equal opportunities for all",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About Excellence Academy</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
              Committed to nurturing young minds for over 25 years with academic excellence, 
              character development, and holistic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            subtitle="Our Journey"
            title="Our Story"
            description="A legacy of educational excellence spanning over two decades"
          />
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <img 
                src={assemblyImage} 
                alt="School Assembly" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground">
                Founded in 1999, Excellence Academy began with a vision to provide world-class 
                education that nurtures both academic achievement and character development. What 
                started with 200 students has grown into a thriving institution serving over 3,500 
                students.
              </p>
              <p className="text-lg text-muted-foreground">
                Our journey has been marked by continuous innovation in teaching methodologies, 
                infrastructure development, and a steadfast commitment to holistic education. Today, 
                we stand proud as one of the region's leading educational institutions, maintaining 
                a 98.5% CBSE board result success rate.
              </p>
              <div className="bg-primary/5 p-6 rounded-lg border">
                <h3 className="font-semibold text-xl mb-4">Key Milestones</h3>
                <div className="space-y-3">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-4">
                      <Badge variant="secondary" className="font-bold">{milestone.year}</Badge>
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <Card className="hover-elevate">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide a nurturing environment that empowers students to achieve academic 
                  excellence, develop strong character, and become responsible global citizens who 
                  contribute positively to society.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-elevate">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as a leading educational institution that sets benchmarks in 
                  academic excellence, innovation in teaching, and holistic development, preparing 
                  students for success in an ever-changing world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            subtitle="What We Stand For"
            title="Our Core Values"
            description="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-elevate text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section id="team" className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            subtitle="Meet Our Leaders"
            title="Leadership Team"
            description="Experienced educators committed to your child's success"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover-elevate overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium mb-2">{leader.position}</p>
                  <p className="text-sm text-muted-foreground mb-3">{leader.qualification}</p>
                  <p className="text-sm leading-relaxed">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Quality Assurance"
            title="Certifications & Accreditations"
            description="Recognized for excellence by leading educational bodies"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover-elevate text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.code}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
