import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema, insertApplicationSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Faculty endpoints
  app.get("/api/faculty", async (_req, res) => {
    try {
      const facultyList = await storage.getAllFaculty();
      res.json(facultyList);
    } catch (error) {
      console.error("Error fetching faculty:", error);
      res.status(500).json({ error: "Failed to fetch faculty" });
    }
  });

  app.get("/api/faculty/:id", async (req, res) => {
    try {
      const faculty = await storage.getFaculty(req.params.id);
      if (!faculty) {
        return res.status(404).json({ error: "Faculty member not found" });
      }
      res.json(faculty);
    } catch (error) {
      console.error("Error fetching faculty member:", error);
      res.status(500).json({ error: "Failed to fetch faculty member" });
    }
  });

  // Event endpoints
  app.get("/api/events", async (_req, res) => {
    try {
      const eventsList = await storage.getAllEvents();
      res.json(eventsList);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: "Failed to fetch events" });
    }
  });

  app.get("/api/events/:id", async (req, res) => {
    try {
      const event = await storage.getEvent(req.params.id);
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      console.error("Error fetching event:", error);
      res.status(500).json({ error: "Failed to fetch event" });
    }
  });

  // Announcement endpoints
  app.get("/api/announcements", async (_req, res) => {
    try {
      const announcementsList = await storage.getActiveAnnouncements();
      res.json(announcementsList);
    } catch (error) {
      console.error("Error fetching announcements:", error);
      res.status(500).json({ error: "Failed to fetch announcements" });
    }
  });

  // Inquiry endpoints
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validationResult = insertInquirySchema.safeParse(req.body);
      if (!validationResult.success) {
        const validationError = fromError(validationResult.error);
        return res.status(400).json({ error: validationError.toString() });
      }

      const inquiry = await storage.createInquiry(validationResult.data);
      res.status(201).json(inquiry);
    } catch (error) {
      console.error("Error creating inquiry:", error);
      res.status(500).json({ error: "Failed to create inquiry" });
    }
  });

  app.get("/api/inquiries", async (_req, res) => {
    try {
      const inquiriesList = await storage.getAllInquiries();
      res.json(inquiriesList);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({ error: "Failed to fetch inquiries" });
    }
  });

  // Application endpoints
  app.post("/api/applications", async (req, res) => {
    try {
      const validationResult = insertApplicationSchema.safeParse(req.body);
      if (!validationResult.success) {
        const validationError = fromError(validationResult.error);
        return res.status(400).json({ error: validationError.toString() });
      }

      const application = await storage.createApplication(validationResult.data);
      res.status(201).json(application);
    } catch (error) {
      console.error("Error creating application:", error);
      res.status(500).json({ error: "Failed to create application" });
    }
  });

  app.get("/api/applications", async (_req, res) => {
    try {
      const applicationsList = await storage.getAllApplications();
      res.json(applicationsList);
    } catch (error) {
      console.error("Error fetching applications:", error);
      res.status(500).json({ error: "Failed to fetch applications" });
    }
  });

  app.get("/api/applications/:id", async (req, res) => {
    try {
      const application = await storage.getApplication(req.params.id);
      if (!application) {
        return res.status(404).json({ error: "Application not found" });
      }
      res.json(application);
    } catch (error) {
      console.error("Error fetching application:", error);
      res.status(500).json({ error: "Failed to fetch application" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
