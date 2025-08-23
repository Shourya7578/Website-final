# Simple Method to Find Entry IDs

## Method: Use Browser Developer Tools

### Step 1: Open Your Form
Go to: https://docs.google.com/forms/d/e/1FAIpQLSenckW5me1StAROhe0VSEgcMH3Y0XVEYETbbdZPVrFSHxCBeQ/viewform

### Step 2: Open Developer Tools
- **Windows/Linux**: Press `F12` or `Ctrl + Shift + I`
- **Mac**: Press `Cmd + Option + I`

### Step 3: Go to Console Tab
- Click on the "Console" tab in the developer tools

### Step 4: Run This Code
Copy and paste this code into the console and press Enter:

\`\`\`javascript
// Find all entry IDs in the form
const inputs = document.querySelectorAll('input[name^="entry."], textarea[name^="entry."]');
console.log('Found Entry IDs:');
inputs.forEach((input, index) => {
  console.log(`Field ${index + 1}: ${input.name}`);
});
\`\`\`

### Step 5: Copy the Results
The console will show you all the entry IDs like:
\`\`\`
Field 1: entry.123456789
Field 2: entry.987654321
Field 3: entry.456789123
...etc
\`\`\`

### Step 6: Send Me the List
Copy all the entry IDs and send them to me in order.

## Alternative: Manual Inspection

If the console method doesn't work:

1. **Right-click on the first input field** (Name field)
2. **Select "Inspect Element"**
3. **Look for `name="entry.XXXXXXXXX"`** in the highlighted code
4. **Repeat for each field**

## What I Need:

Send me the entry IDs like this:
\`\`\`
Field 1 (Name): entry.123456789
Field 2 (Restaurant): entry.987654321
Field 3 (Designation): entry.456789123
Field 4 (Location): entry.789123456
Field 5 (Contact): entry.321654987
Field 6 (Email): entry.654987321
Field 7 (Message): entry.147258369
\`\`\`

Once you give me these, I'll update your contact form immediately!
