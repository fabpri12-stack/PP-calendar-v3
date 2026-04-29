# Purple Peacock Booking Widget

Apple Liquid Glass booking widget prototype for Purple Peacock Newcastle.

## What this version does

- Shows the customer-facing calendar-first booking journey.
- Includes the alternative event-card view.
- Tries to load published event data from Supabase first.
- Falls back to the public `calendar.json` demo data if Supabase is not configured or returns no usable events.
- Generates a DesignMyNight payment handoff URL using the selected event, date, time, guests and customer details.
- Includes the branded transfer screen and welcome/confirmation preview.

## Data source

The production data flow is:

```text
Nova CMS -> Supabase -> This widget -> DesignMyNight
```

The Supabase adapter is in:

```text
client/src/lib/calendarData.ts
```

It reads:

```text
event_series
schedule_rules
booking_types
```

It also attempts to use:

```text
get_event_instances(p_from, p_to)
```

If Supabase environment variables are missing, the app uses:

```text
client/public/calendar.json
```

## Deploy to Vercel

1. Create a new GitHub repo, for example `purple-peacock-widget`.
2. Upload this project folder to GitHub.
3. Do not upload `node_modules`.
4. In Vercel, import the GitHub repo.
5. Use these settings if Vercel asks:

```text
Framework Preset: Vite
Install Command: npm install
Build Command: npm run build
Output Directory: dist/public
```

The included `vercel.json` already sets these.

## Local commands

```bash
npm install
npm run dev
npm run build
```

## Environment variables

For production CMS data, add these in Vercel:

```text
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

Private keys such as DMN API keys or Supabase service role keys must never be placed in frontend code.
