// Google Apps Script code to paste in your Google Apps Script editor
// This will handle form submissions and save them to Google Sheets

function doPost(e) {
  try {
    // Get the active spreadsheet (make sure you have a sheet ready)
    const sheet = SpreadsheetApp.getActiveSheet()

    // Get form data from the POST request
    const formData = e.parameter

    // Create timestamp
    const timestamp = new Date()

    // Prepare the row data
    const rowData = [
      timestamp,
      formData.name || "",
      formData.restaurantName || "",
      formData.designation || "",
      formData.location || "",
      formData.email || "",
      formData.contactNumber || "",
      formData.message || "",
    ]

    // Add the row to the sheet
    sheet.appendRow(rowData)

    // Log the submission for debugging
    console.log("Form submitted:", formData)

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully",
        timestamp: timestamp,
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    // Log error for debugging
    console.error("Error processing form:", error)

    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
        message: "Failed to submit form",
      }),
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

// Optional: Handle GET requests for testing
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      message: "Scandalous Foods Form Handler is working!",
      timestamp: new Date(),
    }),
  ).setMimeType(ContentService.MimeType.JSON)
}

// Optional: Function to set up the sheet headers
function setupSheet() {
  const sheet = SpreadsheetApp.getActiveSheet()

  // Set up headers
  const headers = [
    "Timestamp",
    "Name",
    "Restaurant Name",
    "Designation",
    "Location",
    "Email",
    "Contact Number",
    "Message",
  ]

  // Add headers to the first row
  sheet.getRange(1, 1, 1, headers.length).setValues([headers])

  // Format headers
  sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#FF6B2B").setFontColor("white")

  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length)

  console.log("Sheet setup complete!")
}

// Declare SpreadsheetApp and ContentService
var ContentService = ContentService
var SpreadsheetApp = SpreadsheetApp
