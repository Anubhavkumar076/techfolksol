# TechFolkSolution — Agency Landing Page

Premium animated agency landing page built with Next.js 14, TailwindCSS, and Framer Motion.

---

## Quick Start

```bash
cd techfolksol
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Google Sheets Integration (Lead Form)

All form submissions are saved directly into a Google Sheet.
**You only need to change one file: `lib/config.ts`**

---

### Step 1 — Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet.
2. In **Sheet1**, add these headers in row 1:

```
| A         | B    | C     | D     | E       | F       | G      | H                   |
|-----------|------|-------|-------|---------|---------|--------|---------------------|
| Timestamp | Name | Email | Phone | Company | Service | Budget | Project Description |
```

---

### Step 2 — Copy your Google Sheet ID

Your sheet URL looks like this:

```
https://docs.google.com/spreadsheets/d/1ABC123xyz456/edit
```

The Sheet ID is the part between `/d/` and `/edit`:

```
1ABC123xyz456
```

---

### Step 3 — Update `lib/config.ts`

Open `lib/config.ts` and replace the placeholder with your Sheet ID:

```ts
// BEFORE
export const GOOGLE_SHEET_ID = "YOUR_GOOGLE_SHEET_ID";

// AFTER
export const GOOGLE_SHEET_ID = "1ABC123xyz456";
```

That is the **only line you need to change** to link the form to your sheet.

---

### Step 4 — Deploy the Google Apps Script

1. In your Google Sheet click **Extensions → Apps Script**.
2. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp
    .openById("YOUR_GOOGLE_SHEET_ID")   // ← replace with your Sheet ID
    .getSheetByName("Sheet1");

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.phone,
    data.company,
    data.service,
    data.budget,
    data.description
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

> Replace `YOUR_GOOGLE_SHEET_ID` inside the script with the same ID from Step 2.

3. Click **Deploy → New deployment**.
4. Choose type: **Web App**.
5. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Click **Deploy** and grant permissions when prompted.
7. Copy the **Web App URL** — it looks like:

```
https://script.google.com/macros/s/AKfycb.../exec
```

---

### Step 5 — Paste the webhook URL into `lib/config.ts`

```ts
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycb.../exec";
```

> Replace the entire template literal with the URL you copied.

After this step the form is fully connected. Submit a test entry and check your Google Sheet — the row will appear within seconds.

---

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo.
3. Click **Deploy** — no extra configuration needed.
4. Make sure `lib/config.ts` already has your real Sheet ID and Script URL before pushing.

---

## Project Structure

```
techfolksol/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Page — assembles all sections
│   └── globals.css         # Global styles and utilities
│
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile drawer
│   ├── HeroSection.tsx     # Animated hero with floating glows
│   ├── Services.tsx        # Service cards with hover effects
│   ├── ProcessTimeline.tsx # Scroll-animated timeline
│   ├── Portfolio.tsx       # Project showcase cards
│   ├── WhyChooseUs.tsx     # Features grid + stats
│   ├── LeadForm.tsx        # Validated form → Google Sheets
│   └── Footer.tsx          # Footer with CTA and links
│
├── lib/
│   ├── config.ts           # ← ONLY FILE YOU NEED TO EDIT
│   └── googleSheets.ts     # sendToGoogleSheets() function
│
└── README.md
```

---

## How the form submission works

```
User fills form
      ↓
React Hook Form validates all fields
      ↓
sendToGoogleSheets(formData) is called
      ↓
fetch() POSTs JSON to GOOGLE_SCRIPT_URL
      ↓
Apps Script receives the POST request
      ↓
sheet.appendRow() writes a new row to Sheet1
      ↓
{ status: "success" } returned → form shows success state
```
