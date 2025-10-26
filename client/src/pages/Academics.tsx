import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ProgramCard from "@/components/ProgramCard";
import { GraduationCap, BookOpen, Beaker, Globe, Calculator, FlaskConical, Languages, Music, Palette, Trophy, Code, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

import classroomImage from "@assets/generated_images/Students_in_classroom_learning_6a740ef2.png";
import labImage from "@assets/generated_images/Science_lab_with_students_8bb7b718.png";

export default function Academics() {
  const programs = [
    {
      title: "Primary Education (Classes I-V)",
      description: "Foundation years focusing on fundamental skills in reading, writing, mathematics, and environmental science with activity-based learning.",
      icon: BookOpen,
      image: classroomImage,
    },
    {
      title: "Middle School (Classes VI-VIII)",
      description: "Building strong academic foundations with comprehensive curriculum including sciences, mathematics, languages, and social studies.",
      icon: GraduationCap,
      image: labImage,
    },
    {
      title: "Secondary (Classes IX-X)",
      description: "CBSE board preparation with focus on core subjects and conceptual understanding to excel in board examinations.",
      icon: Brain,
    },
    {
      title: "Senior Secondary (Classes XI-XII)",
      description: "Stream-wise specialization in Science, Commerce, and Humanities with comprehensive board and competitive exam preparation.",
      icon: Trophy,
    },
  ];

  const streams = {
    science: {
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science", "English"],
      careers: ["Engineering", "Medical", "Research", "Technology", "Biotechnology"],
    },
    commerce: {
      subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"],
      careers: ["CA/CS", "Banking", "Finance", "Business Management", "Economics"],
    },
    humanities: {
      subjects: ["History", "Political Science", "Economics", "Psychology", "English", "Sociology"],
      careers: ["Civil Services", "Law", "Journalism", "Social Work", "Teaching"],
    },
  };

  const subjects = [
    {
      name: "Mathematics",
      icon: Calculator,
      description: "From basic arithmetic to advanced calculus, problem-solving and analytical thinking",
    },
    {
      name: "Science",
      icon: FlaskConical,
      description: "Physics, Chemistry, Biology with hands-on laboratory experiments and practical learning",
    },
    {
      name: "Languages",
      icon: Languages,
      description: "English, Hindi, and optional third language focusing on communication skills",
    },
    {
      name: "Computer Science",
      icon: Code,
      description: "Coding, programming, digital literacy, and emerging technologies",
    },
    {
      name: "Arts & Music",
      icon: Music,
      description: "Creative expression through visual arts, music, dance, and drama",
    },
    {
      name: "Physical Education",
      icon: Trophy,
      description: "Sports, fitness, yoga, and overall physical development",
    },
  ];

  const features = [
    {
      title: "CBSE Curriculum",
      description: "Following the latest CBSE guidelines with NEP 2020 integration",
    },
    {
      title: "Experienced Faculty",
      description: "120+ qualified teachers with average 10+ years of experience",
    },
    {
      title: "Smart Classrooms",
      description: "Digital learning with interactive boards and multimedia content",
    },
    {
      title: "Regular Assessments",
      description: "Continuous evaluation through tests, projects, and assignments",
    },
    {
      title: "Career Counseling",
      description: "Professional guidance for stream selection and career planning",
    },
    {
      title: "Competitive Exam Prep",
      description: "Special coaching for JEE, NEET, and other entrance examinations",
    },
  ];

  const achievements = [
    { metric: "98.5%", label: "CBSE Board Pass Rate" },
    { metric: "45+", label: "Students scored 90%+ in Class X" },
    { metric: "38+", label: "Students scored 90%+ in Class XII" },
    { metric: "15+", label: "Students cleared IIT-JEE" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Programs</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive CBSE curriculum designed to nurture academic excellence, 
              critical thinking, and lifelong learning
            </p>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Learning Pathways"
            title="Our Academic Programs"
            description="Structured education from primary to senior secondary levels"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Senior Secondary Streams */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Classes XI-XII"
            title="Senior Secondary Streams"
            description="Choose your path and prepare for your future"
          />
          <Tabs defaultValue="science" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="science">Science</TabsTrigger>
              <TabsTrigger value="commerce">Commerce</TabsTrigger>
              <TabsTrigger value="humanities">Humanities</TabsTrigger>
            </TabsList>
            
            <TabsContent value="science" className="mt-6">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Beaker className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Science Stream</h3>
                      <p className="text-muted-foreground">For future engineers, doctors, and researchers</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Subjects Offered</h4>
                      <div className="flex flex-wrap gap-2">
                        {streams.science.subjects.map((subject, i) => (
                          <Badge key={i} variant="secondary">{subject}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Career Opportunities</h4>
                      <ul className="space-y-2">
                        {streams.science.careers.map((career, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span className="text-muted-foreground">{career}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="commerce" className="mt-6">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Calculator className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Commerce Stream</h3>
                      <p className="text-muted-foreground">For future business leaders and financial experts</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Subjects Offered</h4>
                      <div className="flex flex-wrap gap-2">
                        {streams.commerce.subjects.map((subject, i) => (
                          <Badge key={i} variant="secondary">{subject}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Career Opportunities</h4>
                      <ul className="space-y-2">
                        {streams.commerce.careers.map((career, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span className="text-muted-foreground">{career}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="humanities" className="mt-6">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Humanities Stream</h3>
                      <p className="text-muted-foreground">For future civil servants, lawyers, and social scientists</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Subjects Offered</h4>
                      <div className="flex flex-wrap gap-2">
                        {streams.humanities.subjects.map((subject, i) => (
                          <Badge key={i} variant="secondary">{subject}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Career Opportunities</h4>
                      <ul className="space-y-2">
                        {streams.humanities.careers.map((career, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span className="text-muted-foreground">{career}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Comprehensive Learning"
            title="Subjects & Curriculum"
            description="Well-rounded education across diverse disciplines"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <subject.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{subject.name}</h3>
                      <p className="text-sm text-muted-foreground">{subject.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Why Choose Us"
            title="Academic Excellence Features"
            description="What makes our academic program stand out"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Pride"
            title="Academic Achievements 2023-24"
            description="Results that speak for themselves"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover-elevate text-center">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {achievement.metric}
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.label}</p>
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
