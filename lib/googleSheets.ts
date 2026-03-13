import { GOOGLE_SCRIPT_URL, GOOGLE_SHEET_ID } from "@/lib/config";

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget?: string;
  description: string;
}

// Returns true when the Script URL points to a real Apps Script deployment
// (i.e. the URL contains an actual deployment ID, not just the Sheet ID)
const isConfigured =
  GOOGLE_SCRIPT_URL.includes("/macros/s/") &&
  !GOOGLE_SCRIPT_URL.includes(GOOGLE_SHEET_ID);

export async function sendToGoogleSheets(formData: LeadFormData) {
  // Dev-mode guard: show a clear console message instead of a silent failure
  if (!isConfigured) {
    console.warn(
      "[TechFolkSolution] Google Sheets not connected yet.\n" +
        "Open lib/config.ts and replace GOOGLE_SHEET_ID with your Sheet ID,\n" +
        "then replace GOOGLE_SCRIPT_URL with your Apps Script deployment URL.\n" +
        "See README.md for step-by-step instructions."
    );
    // Return a simulated success so you can test the full form UX locally
    return { status: "success (dev mode — sheet not connected)" };
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return await response.json();
  } catch (error) {
    console.error("Google Sheets Error:", error);
    throw error; // re-throw so LeadForm can show the error state
  }
}
