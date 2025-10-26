import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import FacultyCard from "@/components/FacultyCard";
import { GraduationCap, Award, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import teacherFemale from "@assets/generated_images/Female_teacher_professional_portrait_8405caec.png";
import teacherMale from "@assets/generated_images/Male_teacher_professional_portrait_f0cd058b.png";

export default function Faculty() {
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
    {
      name: "Mr. Sanjay Kumar",
      position: "Computer Science Teacher",
      qualification: "M.Tech. Computer Science, NIT",
      experience: "8",
      specialization: ["Programming", "Web Development", "Robotics"],
      avatar: teacherMale,
    },
    {
      name: "Dr. Priya Sharma",
      position: "Chemistry Teacher",
      qualification: "Ph.D. Organic Chemistry",
      experience: "14",
      specialization: ["Organic Chemistry", "Lab Research", "Board Exam Prep"],
      avatar: teacherFemale,
    },
    {
      name: "Mr. Rahul Verma",
      position: "Physical Education Coordinator",
      qualification: "M.P.Ed., National Coach",
      experience: "11",
      specialization: ["Athletics", "Basketball", "Sports Training"],
      avatar: teacherMale,
    },
    {
      name: "Ms. Kavita Iyer",
      position: "Biology Teacher",
      qualification: "M.Sc. Biotechnology",
      experience: "9",
      specialization: ["Biology", "Biotechnology", "NEET Coaching"],
      avatar: teacherFemale,
    },
    {
      name: "Mr. Deepak Gupta",
      position: "Commerce Teacher",
      qualification: "MBA Finance, CA Inter",
      experience: "10",
      specialization: ["Accountancy", "Business Studies", "Economics"],
      avatar: teacherMale,
    },
    {
      name: "Ms. Neha Patel",
      position: "Art & Music Teacher",
      qualification: "M.A. Fine Arts",
      experience: "7",
      specialization: ["Fine Arts", "Classical Music", "Dance"],
      avatar: teacherFemale,
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "120+",
      label: "Qualified Teachers",
    },
    {
      icon: GraduationCap,
      value: "10+",
      label: "Years Avg Experience",
    },
    {
      icon: Award,
      value: "85%",
      label: "Post-Graduate Degrees",
    },
    {
      icon: TrendingUp,
      value: "100%",
      label: "Regular Training",
    },
  ];

  const qualifications = [
    "Ph.D. and Post-Doctoral degrees from premier institutions",
    "M.Ed. and B.Ed. certifications from recognized universities",
    "Specialized training in CBSE curriculum and pedagogy",
    "Experience in competitive exam coaching (JEE, NEET, Olympiads)",
    "Regular professional development and workshops",
    "International teaching certifications (Cambridge, IB)",
  ];

  const values = [
    {
      title: "Student-Centric Approach",
      description: "Every teacher focuses on individual student needs, learning styles, and potential to ensure personalized attention and growth.",
    },
    {
      title: "Innovation in Teaching",
      description: "Our faculty employs modern teaching methods, technology integration, and interactive learning to make education engaging and effective.",
    },
    {
      title: "Mentorship & Guidance",
      description: "Beyond academics, teachers serve as mentors providing career guidance, emotional support, and life skills development.",
    },
    {
      title: "Continuous Learning",
      description: "Regular training programs, workshops, and research activities keep our faculty updated with latest educational trends and methodologies.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Faculty</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Meet our team of passionate, experienced, and dedicated educators 
              committed to shaping the future of every student
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="hover-elevate text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Members Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Meet Our Team"
            title="Our Educators"
            description="Highly qualified professionals dedicated to academic excellence"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <FacultyCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Excellence in Education"
            title="Faculty Qualifications"
            description="Our teachers bring extensive expertise and credentials"
          />
          <div className="max-w-4xl mx-auto">
            <Card className="hover-elevate">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {qualifications.map((qual, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{qual}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Our Approach"
            title="Teaching Philosophy"
            description="What makes our educators exceptional"
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Teaching Team</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Are you a passionate educator looking to make a difference? We're always looking 
              for talented teachers to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View Open Positions
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Contact HR
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
