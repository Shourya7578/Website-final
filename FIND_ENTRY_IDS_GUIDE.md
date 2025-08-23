# How to Find Your Google Form Entry IDs

## Method 1: View Page Source (Most Reliable)

1. **Open your Google Form**: https://docs.google.com/forms/d/e/1FAIpQLSenckW5me1StAROhe0VSEgcMH3Y0XVEYETbbdZPVrFSHxCBeQ/viewform

2. **Right-click anywhere on the page** → Select **"View Page Source"**

3. **Search for entry IDs**:
   - Press **Ctrl+F** (or Cmd+F on Mac)
   - Search for: `entry.`
   - You'll see entries like `entry.123456789`

4. **Copy each entry ID** in the order they appear (should match your form fields)

## Method 2: Inspect Network Tab

1. **Open your Google Form**
2. **Press F12** to open Developer Tools
3. **Go to "Network" tab**
4. **Fill out and submit your form**
5. **Look for the POST request** to `formResponse`
6. **Check the request payload** to see the entry IDs

## Method 3: Test Submission

1. **Fill out your Google Form directly** (not the website)
2. **Submit it**
3. **Check if you can see the entry IDs in the URL** after submission

## What to Look For:

You need 7 entry IDs for these fields (in order):
1. Name: `entry.XXXXXXX`
2. Restaurant Name: `entry.XXXXXXX`
3. Designation: `entry.XXXXXXX`
4. Location: `entry.XXXXXXX`
5. Contact Number: `entry.XXXXXXX`
6. Email: `entry.XXXXXXX`
7. Message: `entry.XXXXXXX`

## Send Me the Entry IDs

Once you find them, send me the list like this:
\`\`\`
Name: entry.123456789
Restaurant: entry.987654321
Designation: entry.456789123
Location: entry.789123456
Contact: entry.321654987
Email: entry.654987321
Message: entry.147258369
\`\`\`

Then I'll update your contact form with the correct IDs!
