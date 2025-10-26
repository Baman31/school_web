import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import SectionHeader from "@/components/SectionHeader";
import ProgramCard from "@/components/ProgramCard";
import TestimonialCard from "@/components/TestimonialCard";
import FacultyCard from "@/components/FacultyCard";
import FacilityCard from "@/components/FacilityCard";
import EventCard from "@/components/EventCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { GraduationCap, Beaker, Globe, Palette, Trophy, Users, FlaskConical, Dumbbell, BookOpen, Laptop } from "lucide-react";

import heroImage from "@assets/generated_images/School_campus_hero_image_8fe69a50.png";
import classroomImage from "@assets/generated_images/Students_in_classroom_learning_6a740ef2.png";
import labImage from "@assets/generated_images/Science_lab_with_students_8bb7b718.png";
import sportsImage from "@assets/generated_images/Students_playing_sports_outdoors_250be082.png";
import teacherFemale from "@assets/generated_images/Female_teacher_professional_portrait_8405caec.png";
import teacherMale from "@assets/generated_images/Male_teacher_professional_portrait_f0cd058b.png";
import assemblyImage from "@assets/generated_images/School_community_assembly_gathering_6e0ddf44.png";

export default function Home() {
  const stats = [
    { value: "3500+", label: "Students Enrolled" },
    { value: "98.5%", label: "CBSE Board Results" },
    { value: "120+", label: "Qualified Faculty" },
    { value: "25+", label: "Years of Excellence" },
  ];

  const programs = [
    {
      title: "Academic Excellence",
      description: "Rigorous curriculum following CBSE standards with emphasis on critical thinking and problem-solving skills.",
      icon: GraduationCap,
      image: classroomImage,
    },
    {
      title: "STEM Programs",
      description: "State-of-the-art laboratories and hands-on learning in Science, Technology, Engineering, and Mathematics.",
      icon: Beaker,
      image: labImage,
    },
    {
      title: "Global Perspective",
      description: "International curriculum exposure and cultural exchange programs to prepare global citizens.",
      icon: Globe,
    },
    {
      title: "Arts & Culture",
      description: "Comprehensive programs in music, dance, drama, and visual arts to nurture creativity.",
      icon: Palette,
    },
  ];

  const facilities = [
    {
      title: "Science Laboratories",
      description: "State-of-the-art labs for Physics, Chemistry, and Biology with modern equipment and safety measures.",
      icon: FlaskConical,
      image: labImage,
    },
    {
      title: "Sports Complex",
      description: "Olympic-sized swimming pool, basketball courts, cricket ground, and fully equipped indoor stadium.",
      icon: Dumbbell,
      image: sportsImage,
    },
    {
      title: "Digital Library",
      description: "Over 50,000 books, e-resources, and quiet study spaces with modern learning technology.",
      icon: BookOpen,
      image: classroomImage,
    },
    {
      title: "Computer Labs",
      description: "Advanced computing facilities with latest hardware and software for digital literacy.",
      icon: Laptop,
      image: labImage,
    },
  ];

  const testimonials = [
    {
      quote: "Excellence Academy has transformed my daughter's approach to learning. The dedicated teachers truly care about each student's holistic development and academic excellence.",
      author: "Mrs. Priya Sharma",
      role: "Parent of Class VIII Student",
    },
    {
      quote: "The world-class infrastructure and emphasis on both academics and co-curricular activities has shaped my son into a confident and well-rounded individual.",
      author: "Mr. Rajesh Kumar",
      role: "Parent of Class X Student",
    },
    {
      quote: "I am grateful for the constant guidance from our teachers. The school has prepared me exceptionally well for competitive exams and life beyond academics.",
      author: "Ananya Patel",
      role: "Class XII Student",
    },
  ];

  const faculty = [
    {
      name: "Dr. Meera Krishnan",
      position: "Head of Mathematics Department",
      qualification: "Ph.D. Mathematics, IIT Delhi",
      experience: "15",
      specialization: ["Advanced Mathematics", "IIT-JEE Coaching", "Math Olympiad"],
      avatar: teacherFemale,
    },
    {
      name: "Prof. Vikram Singh",
      position: "Science Department Head",
      qualification: "M.Sc. Physics, IISc Bangalore",
      experience: "12",
      specialization: ["Physics", "NEET/JEE Preparation", "Research Methodology"],
      avatar: teacherMale,
    },
    {
      name: "Ms. Anjali Reddy",
      position: "English & Social Studies Teacher",
      qualification: "M.A. English Literature, Delhi University",
      experience: "10",
      specialization: ["Creative Writing", "Public Speaking", "Debate"],
      avatar: teacherFemale,
    },
  ];

  const events = [
    {
      title: "Annual Sports Day",
      description: "A day of athletic competitions, inter-house challenges, and celebration of sportsmanship and teamwork.",
      date: "15th December 2024",
      time: "9:00 AM - 4:00 PM",
      location: "School Sports Complex",
      category: "Sports",
      image: sportsImage,
    },
    {
      title: "Science & Innovation Fair",
      description: "Student projects showcasing innovative solutions, working models, and scientific research.",
      date: "20th December 2024",
      time: "10:00 AM - 2:00 PM",
      location: "School Auditorium",
      category: "Academic",
      image: labImage,
    },
    {
      title: "Republic Day Celebrations",
      description: "Patriotic cultural program featuring classical and folk performances, parade, and prize distribution ceremony.",
      date: "26th January 2025",
      time: "8:00 AM - 12:00 PM",
      location: "School Assembly Ground",
      category: "Cultural",
      image: assemblyImage,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection
        title="Nurturing Excellence, Shaping Future Leaders"
        subtitle="Join our community of 3500+ successful students. CBSE affiliated school offering holistic education from Nursery to Class XII with state-of-the-art facilities, experienced faculty, and proven track record of 98.5% board results."
        image={heroImage}
      />
      
      <StatsBar stats={stats} />
      
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Programs"
            subtitle="Comprehensive education programs designed to nurture every aspect of student development from academics to character building."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="World-Class Facilities"
            subtitle="Modern infrastructure designed to provide the best learning environment for our students."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {facilities.map((facility, index) => (
              <FacilityCard key={index} {...facility} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What Parents & Students Say"
            subtitle="Hear from our community about their experiences at Excellence Academy."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Meet Our Expert Faculty"
            subtitle="Learn from passionate educators with years of experience and proven track records."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {faculty.map((member, index) => (
              <FacultyCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Stay updated with our latest events, activities, and important dates."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Begin Your Journey to Excellence"
        description="Join our community of achievers and experience world-class education. Admissions open for Academic Year 2025-26. Limited seats available."
        primaryButton={{ text: "Apply for Admission", href: "/admissions" }}
        secondaryButton={{ text: "Schedule Campus Visit", href: "/contact" }}
        variant="primary"
      />
      
      <Footer />
      <ChatBot />
    </div>
  );
}
