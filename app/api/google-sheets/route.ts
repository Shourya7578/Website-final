import { type NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Set up Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    // Prepare the row data
    const values = [
      [
        new Date().toISOString(), // Timestamp
        formData.name || "",
        formData.restaurantName || "",
        formData.designation || "",
        formData.location || "",
        formData.email || "",
        formData.contactNumber || "",
        formData.message || "",
      ],
    ]

    // Append to sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SHEET_ID,
      range: "Sheet1!A:H",
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    })

    console.log("Successfully added to Google Sheets:", response.data)

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    })
  } catch (error) {
    console.error("Google Sheets error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit form",
      },
      { status: 500 },
    )
  }
}
