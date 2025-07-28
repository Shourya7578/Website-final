# 🚀 Complete Google Sheets Integration Setup

## Step 1: Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new sheet
3. Name it "Scandalous Foods Leads"

## Step 2: Set Up Google Apps Script
1. In your Google Sheet, click **Extensions > Apps Script**
2. Delete any existing code
3. Copy and paste the code from `scripts/google-apps-script.js`
4. Save the project (Ctrl+S or Cmd+S)
5. Name your project "Scandalous Foods Form Handler"

## Step 3: Set Up Sheet Headers (Optional)
1. In the Apps Script editor, run the `setupSheet()` function once
2. This will create proper headers and formatting

## Step 4: Deploy the Web App
1. Click **Deploy > New Deployment**
2. Click the gear icon next to "Select type"
3. Choose **Web app**
4. Configure settings:
   - **Description:** "Scandalous Foods Form Handler"
   - **Execute as:** "Me"
   - **Who has access:** "Anyone"
5. Click **Deploy**
6. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/ABC123.../exec`)
7. Click **Done**

## Step 5: Update the Form Code
Replace the `GOOGLE_SCRIPT_URL` in the contact section with your actual URL:

\`\`\`javascript
const GOOGLE_SCRIPT_URL = "YOUR_ACTUAL_GOOGLE_APPS_SCRIPT_URL_HERE"
\`\`\`

## Step 6: Test the Integration
1. Fill out the form on your website
2. Submit it
3. Check your Google Sheet - the data should appear automatically!

## Features Included:
✅ **Real-time Google Sheets integration**
✅ **Automatic timestamp generation**
✅ **Error handling and logging**
✅ **Form validation**
✅ **Professional success confirmation**
✅ **Mobile-responsive design**

## Troubleshooting:
- **Permission denied:** Make sure deployment is set to "Anyone"
- **Script not found:** Verify the URL is correct
- **Data not appearing:** Check the Apps Script logs for errors

Your form will now save all submissions directly to Google Sheets! 📊
