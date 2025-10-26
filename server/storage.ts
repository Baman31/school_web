import { eq } from "drizzle-orm";
import { db } from "./db";
import {
  users,
  students,
  applications,
  inquiries,
  payments,
  faculty,
  blogPosts,
  events,
  galleryItems,
  attendance,
  grades,
  announcements,
  type User,
  type UpsertUser,
  type InsertUser,
  type Student,
  type InsertStudent,
  type Application,
  type InsertApplication,
  type Inquiry,
  type InsertInquiry,
  type Payment,
  type InsertPayment,
  type Faculty,
  type InsertFaculty,
  type BlogPost,
  type InsertBlogPost,
  type Event,
  type InsertEvent,
  type GalleryItem,
  type InsertGalleryItem,
  type Attendance,
  type InsertAttendance,
  type Grade,
  type InsertGrade,
  type Announcement,
  type InsertAnnouncement,
} from "@shared/schema";

export interface IStorage {
  // User operations (required for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Student operations
  getStudent(id: string): Promise<Student | undefined>;
  getStudentsByParent(parentId: string): Promise<Student[]>;
  createStudent(student: InsertStudent): Promise<Student>;
  updateStudent(id: string, student: Partial<InsertStudent>): Promise<Student>;
  
  // Application operations
  getApplication(id: string): Promise<Application | undefined>;
  getAllApplications(): Promise<Application[]>;
  createApplication(application: InsertApplication): Promise<Application>;
  updateApplication(id: string, application: Partial<InsertApplication>): Promise<Application>;
  
  // Inquiry operations
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getAllInquiries(): Promise<Inquiry[]>;
  updateInquiry(id: string, inquiry: Partial<InsertInquiry>): Promise<Inquiry>;
  
  // Payment operations
  createPayment(payment: InsertPayment): Promise<Payment>;
  getPaymentsByStudent(studentId: string): Promise<Payment[]>;
  updatePayment(id: string, payment: Partial<InsertPayment>): Promise<Payment>;
  
  // Faculty operations
  getAllFaculty(): Promise<Faculty[]>;
  getFaculty(id: string): Promise<Faculty | undefined>;
  createFaculty(faculty: InsertFaculty): Promise<Faculty>;
  
  // Blog operations
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  // Event operations
  getAllEvents(): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  // Gallery operations
  getAllGalleryItems(): Promise<GalleryItem[]>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;
  
  // Attendance operations
  getAttendanceByStudent(studentId: string): Promise<Attendance[]>;
  createAttendance(attendance: InsertAttendance): Promise<Attendance>;
  
  // Grade operations
  getGradesByStudent(studentId: string): Promise<Grade[]>;
  createGrade(grade: InsertGrade): Promise<Grade>;
  
  // Announcement operations
  getActiveAnnouncements(): Promise<Announcement[]>;
  createAnnouncement(announcement: InsertAnnouncement): Promise<Announcement>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Student operations
  async getStudent(id: string): Promise<Student | undefined> {
    const [student] = await db.select().from(students).where(eq(students.id, id));
    return student;
  }

  async getStudentsByParent(parentId: string): Promise<Student[]> {
    return db.select().from(students).where(eq(students.parentId, parentId));
  }

  async createStudent(studentData: InsertStudent): Promise<Student> {
    const [student] = await db.insert(students).values(studentData).returning();
    return student;
  }

  async updateStudent(id: string, studentData: Partial<InsertStudent>): Promise<Student> {
    const [student] = await db
      .update(students)
      .set(studentData)
      .where(eq(students.id, id))
      .returning();
    return student;
  }

  // Application operations
  async getApplication(id: string): Promise<Application | undefined> {
    const [application] = await db.select().from(applications).where(eq(applications.id, id));
    return application;
  }

  async getAllApplications(): Promise<Application[]> {
    return db.select().from(applications);
  }

  async createApplication(applicationData: InsertApplication): Promise<Application> {
    const [application] = await db.insert(applications).values(applicationData).returning();
    return application;
  }

  async updateApplication(id: string, applicationData: Partial<InsertApplication>): Promise<Application> {
    const [application] = await db
      .update(applications)
      .set(applicationData)
      .where(eq(applications.id, id))
      .returning();
    return application;
  }

  // Inquiry operations
  async createInquiry(inquiryData: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db.insert(inquiries).values(inquiryData).returning();
    return inquiry;
  }

  async getAllInquiries(): Promise<Inquiry[]> {
    return db.select().from(inquiries);
  }

  async updateInquiry(id: string, inquiryData: Partial<InsertInquiry>): Promise<Inquiry> {
    const [inquiry] = await db
      .update(inquiries)
      .set(inquiryData)
      .where(eq(inquiries.id, id))
      .returning();
    return inquiry;
  }

  // Payment operations
  async createPayment(paymentData: InsertPayment): Promise<Payment> {
    const [payment] = await db.insert(payments).values(paymentData).returning();
    return payment;
  }

  async getPaymentsByStudent(studentId: string): Promise<Payment[]> {
    return db.select().from(payments).where(eq(payments.studentId, studentId));
  }

  async updatePayment(id: string, paymentData: Partial<InsertPayment>): Promise<Payment> {
    const [payment] = await db
      .update(payments)
      .set(paymentData)
      .where(eq(payments.id, id))
      .returning();
    return payment;
  }

  // Faculty operations
  async getAllFaculty(): Promise<Faculty[]> {
    return db.select().from(faculty).where(eq(faculty.isActive, true));
  }

  async getFaculty(id: string): Promise<Faculty | undefined> {
    const [member] = await db.select().from(faculty).where(eq(faculty.id, id));
    return member;
  }

  async createFaculty(facultyData: InsertFaculty): Promise<Faculty> {
    const [member] = await db.insert(faculty).values(facultyData).returning();
    return member;
  }

  // Blog operations
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return db.select().from(blogPosts).where(eq(blogPosts.published, true));
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post;
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post;
  }

  async createBlogPost(postData: InsertBlogPost): Promise<BlogPost> {
    const [post] = await db.insert(blogPosts).values(postData).returning();
    return post;
  }

  // Event operations
  async getAllEvents(): Promise<Event[]> {
    return db.select().from(events).where(eq(events.isPublic, true));
  }

  async getEvent(id: string): Promise<Event | undefined> {
    const [event] = await db.select().from(events).where(eq(events.id, id));
    return event;
  }

  async createEvent(eventData: InsertEvent): Promise<Event> {
    const [event] = await db.insert(events).values(eventData).returning();
    return event;
  }

  // Gallery operations
  async getAllGalleryItems(): Promise<GalleryItem[]> {
    return db.select().from(galleryItems);
  }

  async createGalleryItem(itemData: InsertGalleryItem): Promise<GalleryItem> {
    const [item] = await db.insert(galleryItems).values(itemData).returning();
    return item;
  }

  // Attendance operations
  async getAttendanceByStudent(studentId: string): Promise<Attendance[]> {
    return db.select().from(attendance).where(eq(attendance.studentId, studentId));
  }

  async createAttendance(attendanceData: InsertAttendance): Promise<Attendance> {
    const [record] = await db.insert(attendance).values(attendanceData).returning();
    return record;
  }

  // Grade operations
  async getGradesByStudent(studentId: string): Promise<Grade[]> {
    return db.select().from(grades).where(eq(grades.studentId, studentId));
  }

  async createGrade(gradeData: InsertGrade): Promise<Grade> {
    const [grade] = await db.insert(grades).values(gradeData).returning();
    return grade;
  }

  // Announcement operations
  async getActiveAnnouncements(): Promise<Announcement[]> {
    return db.select().from(announcements).where(eq(announcements.isActive, true));
  }

  async createAnnouncement(announcementData: InsertAnnouncement): Promise<Announcement> {
    const [announcement] = await db.insert(announcements).values(announcementData).returning();
    return announcement;
  }
}

// MemStorage for in-memory data (preferred for development)
export class MemStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private students: Map<string, Student> = new Map();
  private applications: Map<string, Application> = new Map();
  private inquiries: Map<string, Inquiry> = new Map();
  private payments: Map<string, Payment> = new Map();
  private facultyMembers: Map<string, Faculty> = new Map();
  private blogPostsMap: Map<string, BlogPost> = new Map();
  private eventsMap: Map<string, Event> = new Map();
  private galleryItemsMap: Map<string, GalleryItem> = new Map();
  private attendanceMap: Map<string, Attendance> = new Map();
  private gradesMap: Map<string, Grade> = new Map();
  private announcementsMap: Map<string, Announcement> = new Map();
  
  private nextId = 1;
  
  constructor() {
    this.seedData();
  }
  
  private generateId(): string {
    return `id_${this.nextId++}`;
  }
  
  private seedData() {
    // Seed faculty
    const faculty1: Faculty = {
      id: this.generateId(),
      userId: null,
      name: "Dr. Meera Krishnan",
      position: "Head of Mathematics Department",
      department: "Mathematics",
      qualification: "Ph.D. Mathematics, IIT Delhi",
      experience: 15,
      specialization: ["Advanced Mathematics", "IIT-JEE Coaching", "Math Olympiad"],
      bio: "Expert in advanced mathematics with proven track record of preparing students for competitive exams.",
      avatar: "/assets/generated_images/Female_teacher_professional_portrait_8405caec.png",
      email: "meera.krishnan@excellenceacademy.edu",
      phone: "+91 98765 43210",
      isActive: true,
      createdAt: new Date(),
    };
    
    const faculty2: Faculty = {
      id: this.generateId(),
      userId: null,
      name: "Prof. Vikram Singh",
      position: "Science Department Head",
      department: "Science",
      qualification: "M.Sc. Physics, IISc Bangalore",
      experience: 12,
      specialization: ["Physics", "NEET/JEE Preparation", "Research Methodology"],
      bio: "Passionate educator focused on making science engaging and accessible for all students.",
      avatar: "/assets/generated_images/Male_teacher_professional_portrait_f0cd058b.png",
      email: "vikram.singh@excellenceacademy.edu",
      phone: "+91 98765 43211",
      isActive: true,
      createdAt: new Date(),
    };
    
    const faculty3: Faculty = {
      id: this.generateId(),
      userId: null,
      name: "Ms. Anjali Reddy",
      position: "English & Social Studies Teacher",
      department: "Humanities",
      qualification: "M.A. English Literature, Delhi University",
      experience: 10,
      specialization: ["Creative Writing", "Public Speaking", "Debate"],
      bio: "Dedicated to fostering communication skills and critical thinking through literature and social studies.",
      avatar: "/assets/generated_images/Female_teacher_professional_portrait_8405caec.png",
      email: "anjali.reddy@excellenceacademy.edu",
      phone: "+91 98765 43212",
      isActive: true,
      createdAt: new Date(),
    };
    
    this.facultyMembers.set(faculty1.id, faculty1);
    this.facultyMembers.set(faculty2.id, faculty2);
    this.facultyMembers.set(faculty3.id, faculty3);
    
    // Seed events
    const event1: Event = {
      id: this.generateId(),
      title: "Annual Sports Day",
      description: "A day of athletic competitions, inter-house challenges, and celebration of sportsmanship and teamwork.",
      category: "Sports",
      date: "15th December 2024",
      time: "9:00 AM - 4:00 PM",
      location: "School Sports Complex",
      image: "/assets/generated_images/Students_playing_sports_outdoors_250be082.png",
      organizer: null,
      isPublic: true,
      createdAt: new Date(),
    };
    
    const event2: Event = {
      id: this.generateId(),
      title: "Science & Innovation Fair",
      description: "Student projects showcasing innovative solutions, working models, and scientific research.",
      category: "Academic",
      date: "20th December 2024",
      time: "10:00 AM - 2:00 PM",
      location: "School Auditorium",
      image: "/assets/generated_images/Science_lab_with_students_8bb7b718.png",
      organizer: null,
      isPublic: true,
      createdAt: new Date(),
    };
    
    const event3: Event = {
      id: this.generateId(),
      title: "Republic Day Celebrations",
      description: "Patriotic cultural program featuring classical and folk performances, parade, and prize distribution ceremony.",
      category: "Cultural",
      date: "26th January 2025",
      time: "8:00 AM - 12:00 PM",
      location: "School Assembly Ground",
      image: "/assets/generated_images/School_community_assembly_gathering_6e0ddf44.png",
      organizer: null,
      isPublic: true,
      createdAt: new Date(),
    };
    
    this.eventsMap.set(event1.id, event1);
    this.eventsMap.set(event2.id, event2);
    this.eventsMap.set(event3.id, event3);
    
    // Seed announcements
    const announcement1: Announcement = {
      id: this.generateId(),
      title: "Admissions Open for Academic Year 2025-26",
      content: "We are pleased to announce that admissions are now open for the academic year 2025-26. Limited seats available across all classes. Apply online or visit the school office for more information.",
      targetAudience: "all",
      priority: "high",
      publishedBy: null,
      isActive: true,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days from now
    };
    
    const announcement2: Announcement = {
      id: this.generateId(),
      title: "Parent-Teacher Meeting Scheduled",
      content: "The quarterly PTM is scheduled for 10th December 2024. Please collect your time slots from the respective class teachers. Attendance is mandatory.",
      targetAudience: "parents",
      priority: "normal",
      publishedBy: null,
      isActive: true,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    };
    
    this.announcementsMap.set(announcement1.id, announcement1);
    this.announcementsMap.set(announcement2.id, announcement2);
  }
  
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }
  
  async upsertUser(userData: UpsertUser): Promise<User> {
    const existingUser = userData.id ? this.users.get(userData.id) : undefined;
    const user: User = {
      id: userData.id || this.generateId(),
      email: userData.email || null,
      firstName: userData.firstName || null,
      lastName: userData.lastName || null,
      profileImageUrl: userData.profileImageUrl || null,
      role: userData.role || "parent",
      createdAt: existingUser?.createdAt || new Date(),
      updatedAt: new Date(),
    };
    this.users.set(user.id, user);
    return user;
  }
  
  // Student operations
  async getStudent(id: string): Promise<Student | undefined> {
    return this.students.get(id);
  }
  
  async getStudentsByParent(parentId: string): Promise<Student[]> {
    return Array.from(this.students.values()).filter(s => s.parentId === parentId);
  }
  
  async createStudent(studentData: InsertStudent): Promise<Student> {
    const student: Student = {
      id: this.generateId(),
      userId: studentData.userId || null,
      firstName: studentData.firstName,
      lastName: studentData.lastName,
      dateOfBirth: studentData.dateOfBirth,
      grade: studentData.grade,
      section: studentData.section || null,
      rollNumber: studentData.rollNumber || null,
      admissionDate: studentData.admissionDate || null,
      parentId: studentData.parentId || null,
      status: studentData.status || "active",
      createdAt: new Date(),
    };
    this.students.set(student.id, student);
    return student;
  }
  
  async updateStudent(id: string, studentData: Partial<InsertStudent>): Promise<Student> {
    const existing = this.students.get(id);
    if (!existing) throw new Error("Student not found");
    const updated = { ...existing, ...studentData };
    this.students.set(id, updated);
    return updated;
  }
  
  // Application operations
  async getApplication(id: string): Promise<Application | undefined> {
    return this.applications.get(id);
  }
  
  async getAllApplications(): Promise<Application[]> {
    return Array.from(this.applications.values());
  }
  
  async createApplication(applicationData: InsertApplication): Promise<Application> {
    const application: Application = {
      id: this.generateId(),
      studentName: applicationData.studentName,
      dateOfBirth: applicationData.dateOfBirth,
      grade: applicationData.grade,
      parentName: applicationData.parentName,
      parentEmail: applicationData.parentEmail,
      parentPhone: applicationData.parentPhone,
      address: applicationData.address,
      previousSchool: applicationData.previousSchool || null,
      documents: applicationData.documents || null,
      status: applicationData.status || "pending",
      notes: applicationData.notes || null,
      submittedAt: new Date(),
      reviewedAt: null,
      reviewedBy: null,
    };
    this.applications.set(application.id, application);
    return application;
  }
  
  async updateApplication(id: string, applicationData: Partial<InsertApplication>): Promise<Application> {
    const existing = this.applications.get(id);
    if (!existing) throw new Error("Application not found");
    const updated = { ...existing, ...applicationData };
    this.applications.set(id, updated);
    return updated;
  }
  
  // Inquiry operations
  async createInquiry(inquiryData: InsertInquiry): Promise<Inquiry> {
    const inquiry: Inquiry = {
      id: this.generateId(),
      name: inquiryData.name,
      email: inquiryData.email,
      phone: inquiryData.phone,
      subject: inquiryData.subject,
      message: inquiryData.message,
      status: inquiryData.status || "new",
      createdAt: new Date(),
    };
    this.inquiries.set(inquiry.id, inquiry);
    return inquiry;
  }
  
  async getAllInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values());
  }
  
  async updateInquiry(id: string, inquiryData: Partial<InsertInquiry>): Promise<Inquiry> {
    const existing = this.inquiries.get(id);
    if (!existing) throw new Error("Inquiry not found");
    const updated = { ...existing, ...inquiryData };
    this.inquiries.set(id, updated);
    return updated;
  }
  
  // Payment operations
  async createPayment(paymentData: InsertPayment): Promise<Payment> {
    const payment: Payment = {
      id: this.generateId(),
      studentId: paymentData.studentId || null,
      amount: paymentData.amount,
      currency: paymentData.currency || "INR",
      purpose: paymentData.purpose,
      status: paymentData.status || "pending",
      stripePaymentId: paymentData.stripePaymentId || null,
      receiptUrl: paymentData.receiptUrl || null,
      paidAt: null,
      createdAt: new Date(),
    };
    this.payments.set(payment.id, payment);
    return payment;
  }
  
  async getPaymentsByStudent(studentId: string): Promise<Payment[]> {
    return Array.from(this.payments.values()).filter(p => p.studentId === studentId);
  }
  
  async updatePayment(id: string, paymentData: Partial<InsertPayment>): Promise<Payment> {
    const existing = this.payments.get(id);
    if (!existing) throw new Error("Payment not found");
    const updated = { ...existing, ...paymentData };
    this.payments.set(id, updated);
    return updated;
  }
  
  // Faculty operations
  async getAllFaculty(): Promise<Faculty[]> {
    return Array.from(this.facultyMembers.values()).filter(f => f.isActive);
  }
  
  async getFaculty(id: string): Promise<Faculty | undefined> {
    return this.facultyMembers.get(id);
  }
  
  async createFaculty(facultyData: InsertFaculty): Promise<Faculty> {
    const member: Faculty = {
      id: this.generateId(),
      userId: facultyData.userId || null,
      name: facultyData.name,
      position: facultyData.position,
      department: facultyData.department,
      qualification: facultyData.qualification,
      experience: facultyData.experience,
      specialization: facultyData.specialization || null,
      bio: facultyData.bio || null,
      avatar: facultyData.avatar || null,
      email: facultyData.email || null,
      phone: facultyData.phone || null,
      isActive: facultyData.isActive ?? true,
      createdAt: new Date(),
    };
    this.facultyMembers.set(member.id, member);
    return member;
  }
  
  // Blog operations
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPostsMap.values()).filter(p => p.published);
  }
  
  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPostsMap.get(id);
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPostsMap.values()).find(p => p.slug === slug);
  }
  
  async createBlogPost(postData: InsertBlogPost): Promise<BlogPost> {
    const post: BlogPost = {
      id: this.generateId(),
      title: postData.title,
      slug: postData.slug,
      excerpt: postData.excerpt,
      content: postData.content,
      category: postData.category,
      author: postData.author || null,
      coverImage: postData.coverImage || null,
      tags: postData.tags || null,
      published: postData.published ?? false,
      publishedAt: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.blogPostsMap.set(post.id, post);
    return post;
  }
  
  // Event operations
  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.eventsMap.values()).filter(e => e.isPublic);
  }
  
  async getEvent(id: string): Promise<Event | undefined> {
    return this.eventsMap.get(id);
  }
  
  async createEvent(eventData: InsertEvent): Promise<Event> {
    const event: Event = {
      id: this.generateId(),
      title: eventData.title,
      description: eventData.description,
      category: eventData.category,
      date: eventData.date,
      time: eventData.time,
      location: eventData.location,
      image: eventData.image || null,
      organizer: eventData.organizer || null,
      isPublic: eventData.isPublic ?? true,
      createdAt: new Date(),
    };
    this.eventsMap.set(event.id, event);
    return event;
  }
  
  // Gallery operations
  async getAllGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.galleryItemsMap.values());
  }
  
  async createGalleryItem(itemData: InsertGalleryItem): Promise<GalleryItem> {
    const item: GalleryItem = {
      id: this.generateId(),
      title: itemData.title,
      description: itemData.description || null,
      type: itemData.type,
      url: itemData.url,
      thumbnail: itemData.thumbnail || null,
      category: itemData.category,
      uploadedBy: itemData.uploadedBy || null,
      createdAt: new Date(),
    };
    this.galleryItemsMap.set(item.id, item);
    return item;
  }
  
  // Attendance operations
  async getAttendanceByStudent(studentId: string): Promise<Attendance[]> {
    return Array.from(this.attendanceMap.values()).filter(a => a.studentId === studentId);
  }
  
  async createAttendance(attendanceData: InsertAttendance): Promise<Attendance> {
    const record: Attendance = {
      id: this.generateId(),
      studentId: attendanceData.studentId,
      date: attendanceData.date,
      status: attendanceData.status,
      remarks: attendanceData.remarks || null,
      markedBy: attendanceData.markedBy || null,
      createdAt: new Date(),
    };
    this.attendanceMap.set(record.id, record);
    return record;
  }
  
  // Grade operations
  async getGradesByStudent(studentId: string): Promise<Grade[]> {
    return Array.from(this.gradesMap.values()).filter(g => g.studentId === studentId);
  }
  
  async createGrade(gradeData: InsertGrade): Promise<Grade> {
    const grade: Grade = {
      id: this.generateId(),
      studentId: gradeData.studentId,
      subject: gradeData.subject,
      examType: gradeData.examType,
      marks: gradeData.marks,
      maxMarks: gradeData.maxMarks,
      grade: gradeData.grade || null,
      term: gradeData.term,
      academicYear: gradeData.academicYear,
      remarks: gradeData.remarks || null,
      createdAt: new Date(),
    };
    this.gradesMap.set(grade.id, grade);
    return grade;
  }
  
  // Announcement operations
  async getActiveAnnouncements(): Promise<Announcement[]> {
    const now = new Date();
    return Array.from(this.announcementsMap.values()).filter(
      a => a.isActive && (!a.expiresAt || a.expiresAt > now)
    );
  }
  
  async createAnnouncement(announcementData: InsertAnnouncement): Promise<Announcement> {
    const announcement: Announcement = {
      id: this.generateId(),
      title: announcementData.title,
      content: announcementData.content,
      targetAudience: announcementData.targetAudience,
      priority: announcementData.priority || "normal",
      publishedBy: announcementData.publishedBy || null,
      isActive: announcementData.isActive ?? true,
      createdAt: new Date(),
      expiresAt: announcementData.expiresAt || null,
    };
    this.announcementsMap.set(announcement.id, announcement);
    return announcement;
  }
}

export const storage = new MemStorage();
