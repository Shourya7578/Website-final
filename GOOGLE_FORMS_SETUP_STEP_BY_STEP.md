# Google Forms Setup - Step by Step Guide

## 🎯 Step 1: Create Your Google Form

### 1. Go to Google Forms
- Visit [forms.google.com](https://forms.google.com)
- Sign in with your Google account
- Click **"+ Blank"** to create a new form

### 2. Set Up Form Title and Description
- **Title**: "Scandalous Foods - Partnership Inquiry"
- **Description**: "Tell us about your business and how we can help transform your dessert menu with authentic Indian mithai."

### 3. Add Form Fields (In This Exact Order)

#### Field 1: Name
- Click **"+ Add Question"**
- Question: "Your Name"
- Type: **Short answer**
- Toggle **"Required"** ON

#### Field 2: Restaurant Name  
- Question: "Restaurant/Business Name"
- Type: **Short answer**
- Toggle **"Required"** OFF

#### Field 3: Designation
- Question: "Your Designation/Role"
- Type: **Short answer**
- Toggle **"Required"** OFF

#### Field 4: Location
- Question: "Business Location (City)"
- Type: **Short answer**
- Toggle **"Required"** OFF

#### Field 5: Contact Number
- Question: "Contact Number"
- Type: **Short answer**
- Toggle **"Required"** OFF
- Add description: "10-digit mobile number"

#### Field 6: Email Address
- Question: "Email Address"
- Type: **Short answer**
- Toggle **"Required"** OFF
- Turn ON **"Response validation"**
- Select **"Text"** → **"Email address"**

#### Field 7: Message
- Question: "Tell us about your business and how we can help"
- Type: **Paragraph**
- Toggle **"Required"** OFF

## 🎯 Step 2: Configure Form Settings

### 1. Click Settings (Gear Icon)
- **General Tab**:
  - ✅ Check "Collect email addresses"
  - ✅ Check "Limit to 1 response" (optional)
  
- **Presentation Tab**:
  - ✅ Check "Show progress bar"
  - **Confirmation message**: "Thank you for your interest! Our team will contact you within 24 hours."

- **Responses Tab**:
  - ✅ Check "Accepting responses"
  - ✅ Check "Send respondents a copy of their response"

### 2. Customize Form Appearance
- Click **"Customize theme"** (palette icon)
- Choose **orange/red color** to match your brand
- Upload your logo if desired

## 🎯 Step 3: Get Your Form URLs

### 1. Get Form ID
- Click **"Send"** button
- Click the **link icon** 🔗
- Copy the URL - it looks like:
  \`\`\`
  https://docs.google.com/forms/d/e/1FAIpQLSe_YOUR_FORM_ID_HERE/viewform
  \`\`\`
- **Save this Form ID** - you'll need it later

### 2. Create Action URL
- Replace the ending `/viewform` with `/formResponse`
- Your action URL will be:
  \`\`\`
  https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/formResponse
  \`\`\`

## 🎯 Step 4: Get Field Entry IDs

### Method 1: Inspect Element (Recommended)
1. Open your Google Form in a new tab
2. Right-click on the **first field** (Name)
3. Select **"Inspect"** or **"Inspect Element"**
4. Look for an input with `name="entry.XXXXXXXXX"`
5. Copy the entry ID (the numbers after "entry.")
6. Repeat for all 7 fields

### Method 2: View Page Source
1. Right-click on your form page
2. Select **"View Page Source"**
3. Press **Ctrl+F** (or Cmd+F on Mac)
4. Search for `"entry."`
5. You'll find entries like `entry.123456789`
6. Match them to your fields in order

### Example Entry IDs:
\`\`\`
Field 1 (Name): entry.123456789
Field 2 (Restaurant): entry.987654321  
Field 3 (Designation): entry.456789123
Field 4 (Location): entry.789123456
Field 5 (Contact): entry.321654987
Field 6 (Email): entry.654987321
Field 7 (Message): entry.147258369
\`\`\`

## 🎯 Step 5: Connect to Google Sheets

### 1. Link Responses to Sheets
- In your Google Form, click **"Responses"** tab
- Click the **Google Sheets icon** 📊
- Select **"Create a new spreadsheet"**
- Name it: **"Scandalous Foods - Partnership Leads"**
- Click **"Create"**

### 2. Set Up Sheet Notifications
- Open the linked Google Sheet
- Go to **Tools** → **Notification rules**
- Select **"Any changes are made"**
- Choose **"Email - immediately"**
- Click **"Save"**

## 🎯 Step 6: Test Your Form

### 1. Submit Test Response
- Fill out your form with test data
- Submit it
- Check that it appears in Google Sheets
- Verify you receive email notification

### 2. Check Response Format
Your Google Sheet should have columns:
- Timestamp
- Your Name
- Restaurant/Business Name  
- Your Designation/Role
- Business Location (City)
- Contact Number
- Email Address
- Tell us about your business...

## 🎯 Step 7: Update Your Website Code

Replace these values in your `contact-section.tsx`:

\`\`\`javascript
// Replace with your actual Form ID
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/formResponse"

// Replace with your actual Entry IDs
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

## 🎯 Step 8: Final Testing

### 1. Test Website Form
- Fill out your website contact form
- Submit it
- Check Google Forms responses
- Verify data in Google Sheets
- Confirm email notification

### 2. Verify Data Flow
\`\`\`
Website Form → Google Forms → Google Sheets → Email Notification
\`\`\`

## 📊 Step 9: Monitor Your Responses

### View Responses in Google Forms:
1. Open your Google Form
2. Click **"Responses"** tab
3. View **Summary**, **Individual**, or **Spreadsheet** view

### View Responses in Google Sheets:
1. Open your linked Google Sheet
2. All responses appear automatically
3. Each row = one form submission
4. Timestamp shows when submitted

### Email Notifications:
- You'll get email for every new response
- Contains all form data
- Immediate notification

## 🎯 What's Next?

Once your Google Form is working:
1. ✅ **Test thoroughly** - submit multiple test responses
2. ✅ **Verify data accuracy** - check all fields map correctly  
3. ✅ **Set up Bigin CRM integration** - use Zapier or Apps Script
4. ✅ **Train your team** - show them how to access responses
5. ✅ **Monitor daily** - check for new leads regularly

## 📞 Need Help?

### Common Issues:
- **Form not submitting**: Check Form ID and Entry IDs
- **No email notifications**: Verify notification settings
- **Missing data**: Ensure all fields have correct entry IDs
- **CORS errors**: Normal with no-cors mode, data still submits

### Support Resources:
- **Google Forms Help**: support.google.com/forms
- **Google Sheets Help**: support.google.com/sheets

Your Google Form is now ready to capture leads! 🎉

Next step: Set up the Bigin CRM integration to automatically create leads from these responses.
