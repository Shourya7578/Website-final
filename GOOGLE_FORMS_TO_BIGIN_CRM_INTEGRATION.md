# Google Forms to Bigin CRM Integration Guide

## 🎯 Direct Integration: Google Forms → Bigin CRM

This guide shows you how to automatically send leads from Google Forms directly into Bigin CRM without any manual work.

## 🔗 Method 1: Using Zapier (Recommended)

### Step 1: Set Up Google Form
1. Create your Google Form with these fields:
   - Name (Short answer)
   - Restaurant Name (Short answer)
   - Designation (Short answer)
   - Location (Short answer)
   - Contact Number (Short answer)
   - Email Address (Short answer)
   - Message (Paragraph)

### Step 2: Connect to Google Sheets
1. In Google Forms → Responses → Link to Sheets
2. Create new spreadsheet: "Scandalous Foods Leads"

### Step 3: Set Up Zapier Integration
1. Go to [zapier.com](https://zapier.com) and create account
2. Click **"Create Zap"**
3. **Trigger App**: Google Sheets
   - Event: "New Spreadsheet Row"
   - Connect your Google account
   - Select your "Scandalous Foods Leads" spreadsheet
4. **Action App**: Bigin CRM
   - Event: "Create Lead"
   - Connect your Bigin CRM account
   - Map fields:
     \`\`\`
     Google Sheets → Bigin CRM
     Name → First Name + Last Name
     Restaurant Name → Company
     Email → Email
     Contact Number → Phone
     Location → City
     Designation → Designation
     Message → Description
     \`\`\`
5. **Test & Turn On** your Zap

## 🔗 Method 2: Using Google Apps Script (Free)

### Step 1: Open Google Apps Script
1. Go to your Google Sheets (linked to form)
2. Extensions → Apps Script

### Step 2: Add Bigin CRM Integration Code
\`\`\`javascript
function onFormSubmit(e) {
  // Get form response data
  const sheet = e.source.getActiveSheet();
  const row = e.range.getRow();
  
  // Extract data from the row
  const timestamp = sheet.getRange(row, 1).getValue();
  const name = sheet.getRange(row, 2).getValue();
  const restaurantName = sheet.getRange(row, 3).getValue();
  const designation = sheet.getRange(row, 4).getValue();
  const location = sheet.getRange(row, 5).getValue();
  const contactNumber = sheet.getRange(row, 6).getValue();
  const email = sheet.getRange(row, 7).getValue();
  const message = sheet.getRange(row, 8).getValue();
  
  // Bigin CRM API configuration
  const BIGIN_ACCESS_TOKEN = 'YOUR_BIGIN_ACCESS_TOKEN'; // Get from Bigin CRM
  const BIGIN_API_URL = 'https://www.zohoapis.in/bigin/v1/Leads';
  
  // Prepare lead data for Bigin CRM
  const leadData = {
    "data": [{
      "Company": restaurantName || "Unknown Company",
      "Last_Name": name || "Unknown",
      "First_Name": name ? name.split(' ')[0] : "Unknown",
      "Email": email,
      "Phone": contactNumber,
      "Designation": designation,
      "City": location,
      "Description": message,
      "Lead_Source": "Website - Google Form",
      "Lead_Status": "New",
      "Industry": "Food & Beverage"
    }]
  };
  
  // Send to Bigin CRM
  try {
    const response = UrlFetchApp.fetch(BIGIN_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': 'Zoho-oauthtoken ' + BIGIN_ACCESS_TOKEN,
        'Content-Type': 'application/json'
      },
      payload: JSON.stringify(leadData)
    });
    
    if (response.getResponseCode() === 201) {
      console.log('Lead successfully created in Bigin CRM');
      // Mark as processed in sheet
      sheet.getRange(row, 9).setValue('Sent to CRM');
    } else {
      console.error('Error creating lead:', response.getContentText());
      sheet.getRange(row, 9).setValue('CRM Error');
    }
  } catch (error) {
    console.error('API Error:', error);
    sheet.getRange(row, 9).setValue('API Error');
  }
}
\`\`\`

### Step 3: Set Up Trigger
1. In Apps Script, click **Triggers** (clock icon)
2. Click **"+ Add Trigger"**
3. Configure:
   - Function: `onFormSubmit`
   - Event source: "From spreadsheet"
   - Event type: "On form submit"
4. Save trigger

### Step 4: Get Bigin CRM Access Token
1. Go to [Zoho Developer Console](https://api-console.zoho.in/)
2. Create new "Server-based Application"
3. Get Client ID and Client Secret
4. Generate Access Token with Bigin CRM scope
5. Replace `YOUR_BIGIN_ACCESS_TOKEN` in the script

## 🔗 Method 3: Using Microsoft Power Automate

### Step 1: Create Flow
1. Go to [powerautomate.microsoft.com](https://powerautomate.microsoft.com)
2. Create new **"Automated cloud flow"**

### Step 2: Set Trigger
- **Trigger**: "When a new response is submitted" (Microsoft Forms)
- Or use "When a row is added" (Excel Online) if using Google Sheets

### Step 3: Add Bigin CRM Action
- **Action**: HTTP Request to Bigin CRM API
- Configure API call to create lead in Bigin CRM

## 📊 Method 4: Using Bigin CRM's Built-in Web Forms

### Step 1: Create Web Form in Bigin CRM
1. Login to Bigin CRM
2. Go to **Setup** → **Automation** → **Web Forms**
3. Click **"Create Web Form"**
4. Add fields matching your Google Form
5. Get the web form embed code

### Step 2: Dual Submission
Update your website form to submit to both:
1. Google Forms (for your records)
2. Bigin CRM Web Form (for CRM)

## 🎯 Recommended Setup: Zapier Integration

### Why Zapier is Best:
- ✅ **No coding required**
- ✅ **Reliable and tested**
- ✅ **Easy to set up and maintain**
- ✅ **Handles errors gracefully**
- ✅ **Built-in retry logic**

### Zapier Setup Steps:
1. **Google Forms** → **Google Sheets** (automatic)
2. **Google Sheets** → **Zapier** → **Bigin CRM** (automated)

### Cost:
- Free plan: 100 tasks/month
- Paid plans: $19.99/month for 750 tasks

## 📈 Lead Flow Process

### Complete Automation:
\`\`\`
Website Form Submission
        ↓
    Google Forms
        ↓
    Google Sheets
        ↓
      Zapier
        ↓
    Bigin CRM
        ↓
  Lead Assignment
        ↓
   Email Notification
\`\`\`

## 🔧 Field Mapping: Google Forms → Bigin CRM

\`\`\`
Google Form Field    →    Bigin CRM Field
─────────────────────────────────────────
Name                →    First Name + Last Name
Restaurant Name     →    Company
Email Address       →    Email
Contact Number      →    Phone
Location           →    City
Designation        →    Designation
Message            →    Description
[Auto]             →    Lead Source: "Website"
[Auto]             →    Lead Status: "New"
[Auto]             →    Industry: "Food & Beverage"
\`\`\`

## 🚀 Testing Your Integration

### Test Checklist:
1. ✅ Fill out website form
2. ✅ Check Google Forms responses
3. ✅ Verify data in Google Sheets
4. ✅ Confirm lead created in Bigin CRM
5. ✅ Test email notifications
6. ✅ Verify field mapping accuracy

## 📞 Support & Troubleshooting

### Common Issues:
- **API Token Expired**: Refresh Bigin CRM access token
- **Field Mapping Errors**: Check field names match exactly
- **Zapier Failures**: Check connection and retry failed tasks
- **Missing Data**: Verify all required fields are filled

### Getting Help:
- **Zapier Support**: help.zapier.com
- **Bigin CRM Support**: help.bigin.com
- **Google Forms Help**: support.google.com/forms

Your leads will now automatically flow from your website directly into Bigin CRM for immediate follow-up! 🎉
