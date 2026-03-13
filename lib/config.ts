// ─────────────────────────────────────────────────────────────────────────────
// GOOGLE SHEETS CONFIGURATION
//
// To connect your lead form to Google Sheets you only need to change TWO values:
//
//  1. GOOGLE_SHEET_ID   — the ID from your Google Sheet URL (see README Step 2)
//  2. GOOGLE_SCRIPT_URL — the Web App URL you get after deploying Apps Script
//
// The GOOGLE_SHEET_ID goes into your Apps Script code (see README).
// The GOOGLE_SCRIPT_URL is what the form POSTs to.
// ─────────────────────────────────────────────────────────────────────────────

// Step 1: Paste your Google Sheet ID here
// Example: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms"
export const GOOGLE_SHEET_ID = "1QGrVc2tq-9AIcMfG8TXTXkeYIg7Qst3bmz_0-Kcb40I";

// Step 2: After deploying your Apps Script as a Web App, paste the full URL here.
// It will look like: https://script.google.com/macros/s/AKfycb.../exec
// NOTE: This URL is issued by Apps Script and is separate from GOOGLE_SHEET_ID.
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwSQY4w7g8_dI1ju0ZtnEyNrQAlDccdlUxqIPW_jVHuzvi9LJW4WqCEnHBRWk3Qs6OYDA/exec";
