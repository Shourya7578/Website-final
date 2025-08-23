# Google Forms Integration Setup Guide

## 🎯 How to Set Up Google Forms Integration

Follow these steps to connect your contact form to Google Forms for automatic lead collection.

## 📝 Step 1: Create Your Google Form

### 1. Go to Google Forms
- Visit [forms.google.com](https://forms.google.com)
- Click **"+ Blank"** to create a new form
- Title it: **"Scandalous Foods - Partnership Inquiries"**

### 2. Add Form Fields
Create these fields in **exact order**:

1. **Name** (Short answer)
2. **Restaurant Name** (Short answer)  
3. **Designation** (Short answer)
4. **Location** (Short answer)
5. **Contact Number** (Short answer)
6. **Email Address** (Short answer)
7. **Message** (Paragraph)

### 3. Configure Form Settings
- Click **Settings** (gear icon)
- Under **"Responses"**:
  - ✅ Check **"Collect email addresses"**
  - ✅ Check **"Send respondents a copy of their response"**
- Under **"Presentation"**:
  - ✅ Check **"Show progress bar"**
  - Set confirmation message: **"Thank you! We'll contact you soon."**

## 🔗 Step 2: Get Form Action URL

### 1. Get the Form ID
- In your Google Form, click **"Send"**
- Click the **link icon** 🔗
- Copy the URL - it looks like:
  \`\`\`
  https://docs.google.com/forms/d/e/1FAIpQLSe_FORM_ID_HERE/viewform
  \`\`\`
- Extract the **FORM_ID** part

### 2. Create Action URL
Replace `YOUR_FORM_ID` in the code with your actual form ID:
\`\`\`
https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
\`\`\`

## 🏷️ Step 3: Get Field Entry IDs

### Method 1: Inspect Form (Recommended)
1. Open your Google Form
2. Right-click and select **"Inspect"** or press F12
3. Look for input fields with names like `entry.123456789`
4. Copy each entry ID for the corresponding field

### Method 2: View Page Source
1. Open your Google Form
2. Right-click → **"View Page Source"**
3. Search for `entry.` to find all entry IDs
4. Match them to your form fields in order

### Example Entry IDs:
\`\`\`javascript
const GOOGLE_FORM_FIELDS = {
  name: "entry.123456789",           // Replace with actual ID
  restaurantName: "entry.987654321", // Replace with actual ID  
  designation: "entry.456789123",    // Replace with actual ID
  location: "entry.789123456",       // Replace with actual ID
  contactNumber: "entry.321654987",  // Replace with actual ID
  email: "entry.654987321",          // Replace with actual ID
  message: "entry.147258369"         // Replace with actual ID
}
\`\`\`

## ⚙️ Step 4: Update Your Code

Replace these values in `contact-section.tsx`:

\`\`\`javascript
// Replace with your actual Google Form action URL
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/formResponse"

// Replace with your actual entry IDs
const GOOGLE_FORM_FIELDS = {
  name: "entry.YOUR_NAME_ENTRY_ID",
  restaurantName: "entry.YOUR_RESTAURANT_ENTRY_ID", 
  designation: "entry.YOUR_DESIGNATION_ENTRY_ID",
  location: "entry.YOUR_LOCATION_ENTRY_ID",
  contactNumber: "entry.YOUR_CONTACT_ENTRY_ID",
  email: "entry.YOUR_EMAIL_ENTRY_ID",
  message: "entry.YOUR_MESSAGE_ENTRY_ID"
}
\`\`\`

## 📊 Step 5: Set Up Response Collection

### 1. Link to Google Sheets
- In your Google Form, click **"Responses"** tab
- Click the **Google Sheets icon** 📊
- Choose **"Create a new spreadsheet"**
- Name it: **"Scandalous Foods Leads"**

### 2. Set Up Notifications
- In the linked Google Sheet, go to **Tools** → **Notification rules**
- Set up email notifications for new form responses
- Choose **"Any changes are made"** and **"Email - immediately"**

## 🎯 Step 6: Test Your Integration

### 1. Test the Form
1. Fill out your website contact form
2. Submit it
3. Check your Google Form responses
4. Verify data appears in Google Sheets

### 2. Verify Email Backup
- Ensure the email client opens with pre-filled data
- This serves as a backup if Google Forms fails

## 📈 Step 7: Monitor Your Leads

### Google Sheets Dashboard
Your leads will automatically appear in the connected Google Sheet with:
- Timestamp
- All form field data
- Response ID for tracking

### Email Notifications
You'll receive email notifications for every new submission containing:
- Lead details
- Submission time
- Direct link to response

## 🔧 Troubleshooting

### Common Issues:

**Form not submitting:**
- Check that FORM_ID is correct
- Verify entry IDs match your form fields
- Ensure form is set to accept responses

**Data not appearing:**
- Confirm Google Sheets is properly linked
- Check if form fields match entry IDs exactly
- Test with a simple submission first

**CORS errors:**
- This is normal with `mode: "no-cors"`
- Data still submits successfully to Google Forms
- Email backup ensures no data is lost

## 🚀 Benefits of This Setup

### ✅ **Dual Submission System**
- Primary: Google Forms (automatic spreadsheet)
- Backup: Email (manual but reliable)

### ✅ **Automatic Data Collection**
- All leads in organized Google Sheets
- Real-time notifications
- Easy export and analysis

### ✅ **No External Dependencies**
- Uses Google's free infrastructure
- No monthly fees or limits
- Reliable and scalable

## 📞 Next Steps

1. **Set up the Google Form** following steps above
2. **Get your Form ID and Entry IDs**
3. **Update the code** with your actual values
4. **Test thoroughly** before going live
5. **Monitor your leads** in Google Sheets

Your Google Forms integration is now ready to capture all partnership inquiries automatically! 🎉
