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

export const storage = new DatabaseStorage();
