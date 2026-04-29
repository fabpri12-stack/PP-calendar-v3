import type { CalendarEvent, CalendarResponse, EventSession } from "@shared/schema";

export const DMN_CONFIG = {
  venueGroupId: "6141cde2ccb4d7565902c433",
  venueId: process.env.DMN_VENUE_ID ?? "6214cfdb21d4111e033a9433",
  source: "NovaAI",
  returnUrl: process.env.DMN_RETURN_URL ?? "https://www.purplepeacockncl.co.uk/thank_you_nova",
};

export const BOOKING_TYPES = {
  drunch: {
    id: "65ae86770e1da03dc56bbfc2",
    name: "Drunch",
    eventId: "drunch",
  },
  musicals: {
    id: "699c75ac64961365fa00f622",
    name: "Dine & Dance The Musicals",
    eventId: "show-nights",
  },
  coyoteWild: {
    id: "6401d10d3999aa1ee05f3337",
    name: "Coyote Wild",
    eventId: "show-nights",
  },
  dirtyDancingGreaseMammaMia: {
    id: "648712780777cd2888360f33",
    name: "Dine & Dance Dirty Dancing / Grease / Mamma Mia",
    eventId: "show-nights",
  },
  ministryClubland: {
    id: "641c28c62869494e792e79c7",
    name: "Ministry of Clubland",
    eventId: "show-nights",
  },
  noughties: {
    id: "6732703224ba1307360a7068",
    name: "It’s Giving Noughties",
    eventId: "show-nights",
  },
  christmasSpecial: {
    id: "64abca361a4382378b322dbd",
    name: "Dine & Dance Christmas Special",
    eventId: "christmas-peacock",
  },
  grinch: {
    id: "669a3a4fdc19bc597e755541",
    name: "The Grinch Who Stole Peacock",
    eventId: "christmas-peacock",
  },
  clublandChristmas: {
    id: "685128cff0e42f21fb2dee33",
    name: "Ministry of Clubland Christmas Special",
    eventId: "christmas-peacock",
  },
} as const;

const DRUNCH_THEMES: Record<string, string> = {
  "2026-01-10": "Clubland",
  "2026-01-17": "RnB (Rhythm n Booze)",
  "2026-01-24": "Hoedown at Peacock",
  "2026-01-31": "Peacock Playhouse",
  "2026-02-07": "Posh & Prosecco",
  "2026-02-14": "Retro",
  "2026-02-21": "Hoedown at Peacock",
  "2026-02-28": "Peacock Playhouse",
  "2026-03-07": "Girl Power",
  "2026-03-14": "RnB (Rhythm n Booze)",
  "2026-03-21": "Hoedown at Peacock",
  "2026-03-28": "Peacock Playhouse",
  "2026-04-03": "Posh & Prosecco",
  "2026-04-04": "90's V 00's",
  "2026-04-05": "Girl Power",
  "2026-04-11": "Retro",
  "2026-04-18": "Hoedown at Peacock",
  "2026-04-25": "Peacock Playhouse",
  "2026-05-02": "90's V 00's",
  "2026-05-03": "Peacock Playhouse",
  "2026-05-09": "Girl Power",
  "2026-05-16": "RnB (Rhythm n Booze)",
  "2026-05-23": "Hoedown at Peacock",
  "2026-05-24": "Peacock Playhouse",
  "2026-05-30": "Peacock Playhouse",
  "2026-06-06": "Ibiza Style",
  "2026-06-13": "Retro",
  "2026-06-20": "Sax & Sip Bottomless",
  "2026-06-27": "Peacock Playhouse",
  "2026-07-04": "90's V 00's",
  "2026-07-11": "Girl Power",
  "2026-07-18": "RnB (Rhythm n Booze)",
  "2026-07-25": "Peacock Playhouse",
  "2026-08-01": "Ibiza Style",
  "2026-08-07": "ICON Bottomless - Lady Gaga",
  "2026-08-08": "Retro",
  "2026-08-14": "ICON Bottomless - Britney",
  "2026-08-15": "Hoedown at Peacock",
  "2026-08-21": "ICON Bottomless - Beyonce",
  "2026-08-22": "Sax & Sip Bottomless",
  "2026-08-28": "ICON Bottomless - Rihanna",
  "2026-08-29": "Peacock Playhouse",
  "2026-08-30": "90s & 00s",
  "2026-09-05": "Posh & Prosecco",
  "2026-09-12": "Girl Power",
  "2026-09-19": "Rhythm n Booze",
  "2026-09-26": "Peacock Playhouse",
  "2026-10-03": "Hoedown",
  "2026-10-10": "Retro",
  "2026-10-17": "The House of Peacock",
  "2026-10-25": "90's vs 00's",
  "2026-10-31": "Halloween Drunch",
  "2026-11-07": "Posh & Prosecco",
  "2026-11-14": "Girl Power",
  "2026-11-21": "Clubland",
  "2026-11-28": "The Drunch before Christmas",
  "2026-12-04": "The Drunch before Christmas",
  "2026-12-05": "The Drunch before Christmas",
  "2026-12-11": "The Drunch before Christmas",
  "2026-12-12": "The Drunch before Christmas",
  "2026-12-18": "The Drunch before Christmas",
  "2026-12-19": "The Drunch before Christmas",
  "2026-12-26": "Peacock Playhouse",
};

const showSchedule = [
  { date: "2026-05-01", time: "19:00", doors: "Doors 7pm", type: BOOKING_TYPES.musicals, title: "Dine & Dance The Musicals" },
  { date: "2026-05-02", time: "20:00", doors: "Doors 8pm", type: BOOKING_TYPES.dirtyDancingGreaseMammaMia, title: "Dirty Dancing / Grease / Mamma Mia" },
  { date: "2026-05-08", time: "19:00", doors: "Doors 7pm", type: BOOKING_TYPES.coyoteWild, title: "Coyote Wild" },
  { date: "2026-05-09", time: "20:00", doors: "Doors 8pm", type: BOOKING_TYPES.ministryClubland, title: "Ministry of Clubland" },
  { date: "2026-05-15", time: "19:00", doors: "Doors 7pm", type: BOOKING_TYPES.noughties, title: "It’s Giving Noughties" },
  { date: "2026-05-16", time: "20:00", doors: "Doors 8pm", type: BOOKING_TYPES.musicals, title: "Dine & Dance The Musicals" },
  { date: "2026-11-20", time: "19:00", doors: "Doors 7pm", type: BOOKING_TYPES.christmasSpecial, title: "Dine & Dance Christmas Special" },
  { date: "2026-11-27", time: "19:00", doors: "Doors 7pm", type: BOOKING_TYPES.clublandChristmas, title: "Ministry of Clubland Christmas Special" },
  { date: "2026-12-05", time: "19:00", doors: "Doors 7pm", type: BOOKING_TYPES.grinch, title: "The Grinch Who Stole Peacock" },
];

function buildDmnBookingUrl(input: {
  typeId: string;
  date: string;
  time: string;
  durationMinutes: number;
  numPeople?: number;
}) {
  const params = new URLSearchParams({
    venue_group: DMN_CONFIG.venueGroupId,
    venue_id: DMN_CONFIG.venueId,
    type: input.typeId,
    num_people: String(input.numPeople ?? 2),
    date: input.date,
    time: input.time,
    duration: String(input.durationMinutes),
    source: DMN_CONFIG.source,
    return_url: DMN_CONFIG.returnUrl,
  });

  return `https://bookings.designmynight.com/book?${params.toString()}`;
}

function statusFor(index: number): EventSession["status"] {
  if (index % 11 === 0) return "sold_out";
  if (index % 5 === 0) return "limited";
  if (index % 7 === 0) return "enquire";
  return "available";
}

function actionFor(status: EventSession["status"]): EventSession["action"] {
  if (status === "sold_out") return "reject";
  if (status === "enquire") return "enquire";
  return "accept";
}

function buildDrunchSessions(): EventSession[] {
  const slots = [
    { time: "12:30", doors: "Arrive 12:15" },
    { time: "15:00", doors: "Arrive 2:45" },
    { time: "17:30", doors: "Arrive 5:15" },
  ];

  return Object.entries(DRUNCH_THEMES).flatMap(([date, theme], dateIndex) =>
    slots.map((slot, slotIndex) => {
      const status = statusFor(dateIndex + slotIndex);
      const displayTitle = `${theme} Drunch`;
      return {
        id: `drunch-${date}-${slot.time.replace(":", "")}`,
        eventId: "drunch",
        displayTitle,
        displaySubtitle: `${theme} themed bottomless Drunch with live Peacock energy, food, drinks and show-bar atmosphere.`,
        themeName: theme,
        dmnBookingTypeId: BOOKING_TYPES.drunch.id,
        dmnBookingTypeName: BOOKING_TYPES.drunch.name,
        date,
        time: slot.time,
        durationMinutes: 120,
        doors: slot.doors,
        status,
        action: actionFor(status),
        remaining: status === "sold_out" ? 0 : Math.max(3, 24 - ((dateIndex + slotIndex) % 18)),
        dmnUrl: buildDmnBookingUrl({
          typeId: BOOKING_TYPES.drunch.id,
          date,
          time: slot.time,
          durationMinutes: 120,
        }),
      };
    }),
  );
}

function buildShowSessions(): EventSession[] {
  return showSchedule.map((item, index) => {
    const status = statusFor(index + 2);
    return {
      id: `${item.type.id}-${item.date}-${item.time.replace(":", "")}`,
      eventId: item.type.eventId,
      displayTitle: item.title,
      displaySubtitle: `${item.type.name} mapped to DMN booking type ${item.type.id}.`,
      themeName: item.title,
      dmnBookingTypeId: item.type.id,
      dmnBookingTypeName: item.type.name,
      date: item.date,
      time: item.time,
      durationMinutes: 120,
      doors: item.doors,
      status,
      action: actionFor(status),
      remaining: status === "sold_out" ? 0 : Math.max(4, 30 - index * 3),
      dmnUrl: buildDmnBookingUrl({
        typeId: item.type.id,
        date: item.date,
        time: item.time,
        durationMinutes: 120,
      }),
    };
  });
}

const drunchSessions = buildDrunchSessions();
const showSessions = buildShowSessions().filter((session) => session.eventId === "show-nights");
const christmasSessions = buildShowSessions().filter((session) => session.eventId === "christmas-peacock");

export const mockEvents: CalendarEvent[] = [
  {
    id: "show-nights",
    title: "Show Nights",
    category: "Friday and Saturday",
    strapline: "Live show productions mapped to real DesignMyNight booking type IDs.",
    shortDescription:
      "The signature immersive show night with a welcome drink, stage-side table and optional dining.",
    description:
      "Show Nights now act as the branded front-end layer for live DMN booking types such as Dine & Dance, Coyote Wild, Ministry of Clubland and themed musical nights.",
    imageTone: "show",
    videoUrl: null,
    menuUrl: "#menu-popup",
    howItWorksUrl: "#how-it-works-popup",
    dmnBookingType: "show_nights_mapped",
    priceFromPence: 2995,
    depositPence: 1000,
    runStart: "2026-05-01",
    runEnd: "2026-12-31",
    inclusions: ["Welcome drink", "Reserved table", "Live vocals", "A la carte dining available"],
    sessions: showSessions,
  },
  {
    id: "drunch",
    title: "Bottomless Drunch",
    category: "Saturday daytime",
    strapline: "Theme-controlled Drunch dates mapped to the live DMN Drunch booking type.",
    shortDescription:
      "High-energy daytime booking with bottomless drinks, food and a full show-bar atmosphere.",
    description:
      "Drunch themes are generated from the website-side event manager layer, then connected to the real DesignMyNight Drunch booking type for availability and payment handoff.",
    imageTone: "drunch",
    videoUrl: null,
    menuUrl: "#drunch-menu-popup",
    howItWorksUrl: "#how-it-works-popup",
    dmnBookingType: BOOKING_TYPES.drunch.id,
    priceFromPence: 4995,
    depositPence: 2000,
    runStart: "2026-01-10",
    runEnd: "2026-12-26",
    inclusions: ["90 min bottomless", "Welcome drink", "Food included", "Three standard slots"],
    sessions: drunchSessions,
  },
  {
    id: "christmas-peacock",
    title: "Christmas Peacock",
    category: "Seasonal run",
    strapline: "Festive show dates connected to real seasonal DMN booking types.",
    shortDescription:
      "Seasonal show dates with festive production, group-led booking logic and enquiry fallback.",
    description:
      "Christmas Peacock keeps the calendar logic flexible: fixed seasonal dates, group availability and enquiry-led options when tables are close to capacity.",
    imageTone: "christmas",
    videoUrl: null,
    menuUrl: "#christmas-menu-popup",
    howItWorksUrl: "#christmas-how-it-works-popup",
    dmnBookingType: "christmas_mapped",
    priceFromPence: 5995,
    depositPence: 2000,
    runStart: "2026-11-20",
    runEnd: "2026-12-31",
    inclusions: ["Festive show", "Group tables", "Christmas menus", "Enquiry fallback"],
    sessions: christmasSessions,
  },
];

export interface IStorage {
  getCalendar(): Promise<CalendarResponse>;
}

export class MemoryStorage implements IStorage {
  async getCalendar(): Promise<CalendarResponse> {
    return {
      events: mockEvents,
      integration: {
        mode: "designmynight-ready",
        paymentHandoffRequired: true,
        notes: [
          "Website event content controls display, theme names, images, copy and CMS rules.",
          "DesignMyNight remains the source of truth for booking type IDs, live availability, pre-orders, deposits and payment.",
          "Direct booking URLs use the Nova pattern: bookings.designmynight.com/book with venue_group, venue_id, type, num_people, date, time, duration, source, customer details and return_url.",
          "API keys must stay server-side. Set DMN_APP_ID and DMN_API_KEY on the backend only when enabling live booking-availability calls.",
        ],
      },
    };
  }
}

export const storage = new MemoryStorage();
