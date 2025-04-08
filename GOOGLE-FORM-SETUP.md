# Google Form Setup Guide for Contact Page

## Overview
This is a simple guide to set up a Google Form to collect contact submissions from your website. Google Forms is completely free, requires no API keys, and will send you email notifications for each submission.

## Step 1: Create a Google Form

1. Go to [forms.google.com](https://forms.google.com/) and sign in with your Google account.
2. Click the "+" button to create a new form.
3. Name your form (e.g., "Website Contact Form").

## Step 2: Add Form Questions

Add questions that match the fields from your original contact form:

1. **Contact Information Section**:
   - First name (Short answer)
   - Last name (Short answer)
   - Email address (Short answer) - Mark as "Required"
   - Company name (Short answer)
   - Phone number (Short answer)
   - Country (Dropdown)

2. **Project Information Section**:
   - What services do you need? (Checkboxes)
     - Website Development
     - App Development
     - Design System
     - Website Migration
     - E-commerce Site
     - Performance Evaluation

3. **Budget Section**:
   - How much is the anticipated budget? (Multiple choice)
     - Less than $2,000
     - $2,000 - $10,000
     - More than $10,000

4. **Message Section**:
   - Project description (Paragraph) - Mark as "Required"

## Step 3: Configure Form Settings

1. Click the gear icon (⚙️) to open settings.
2. Under the "General" tab:
   - Make sure "Collect email addresses" is turned OFF (you're already collecting this as a form field)
   - Enable "Response receipts" if you want respondents to get a copy of their responses

3. Under the "Presentation" tab:
   - Add a confirmation message like "Thank you for contacting me. I'll get back to you as soon as possible."

## Step 4: Set Up Email Notifications

1. Click the three dots (⋮) in the upper-right corner.
2. Select "Get email notifications for new responses."
3. Choose notification settings that work for you (immediately, daily digest, etc.).

## Step 5: Get the Form URL

1. Click the "Send" button at the top right.
2. In the popup, click the link icon (🔗).
3. Copy the URL that appears.
4. This is the URL you'll need to update in your code.

## Step 6: Update Your Code

1. Open the `layouts/Contact.jsx` file.
2. Look for the `GOOGLE_FORM_URL` constant near the top.
3. Replace the placeholder URL with your actual Google Form URL:
   ```javascript
   const GOOGLE_FORM_URL = "https://forms.gle/your-actual-form-link";
   ```
4. Save the file.

## Step 7: Test Your Form

1. Run your site locally with `npm run dev`.
2. Navigate to your Contact page.
3. Click the "Contact Me" button.
4. Verify that it opens your Google Form in a new tab.
5. Submit a test entry and confirm you receive the notification.

## Additional Customization Options

- **Form Styling**: You can customize the form's appearance in the "Theme" options.
- **Custom Thank You Page**: Use the "Presentation" tab to redirect to a custom thank you page on your site after form submission.
- **Response Spreadsheet**: All responses are automatically saved to a Google Sheet that you can access anytime. 