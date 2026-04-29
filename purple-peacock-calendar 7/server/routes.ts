import type { Express } from "express";
import type { Server } from "node:http";
import { storage } from "./storage";

const DMN_BASE_URL = "https://api.designmynight.com/v4";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/calendar", async (_req, res) => {
    const calendar = await storage.getCalendar();
    res.json(calendar);
  });

  app.post("/api/dmn/availability-preview", async (req, res) => {
    const hasCredentials = Boolean(process.env.DMN_APP_ID && process.env.DMN_API_KEY);

    if (!hasCredentials) {
      res.json({
        mode: "mock",
        paymentHandoffRequired: true,
        message:
          "DesignMyNight credentials are not configured in this prototype. This endpoint is ready to proxy booking-availability when DMN_APP_ID and DMN_API_KEY are supplied.",
        requestShape: {
          endpoint: `${DMN_BASE_URL}/venues/{venue_id}/booking-availability`,
          method: "POST",
          body: {
            type: req.body?.type ?? "show_tickets",
            num_people: req.body?.num_people ?? 2,
            date: req.body?.date ?? "YYYY-MM-DD",
            time: req.body?.time ?? "HH:mm",
            duration: req.body?.duration ?? 120,
          },
        },
      });
      return;
    }

    res.status(501).json({
      mode: "designmynight-ready",
      message:
        "Credentials detected. Add the venue ID and final field mapping to enable live DMN booking-availability calls.",
    });
  });

  return httpServer;
}
