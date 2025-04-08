# EmailJS Setup Guide for Contact Form

## Overview
This contact form uses EmailJS, which is a free service that allows you to send emails directly from client-side JavaScript without requiring a server.

## Step 1: Create an EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account.
2. The free plan includes 200 emails per month, which should be sufficient for most personal websites.

## Step 2: Create an Email Service
1. In your EmailJS dashboard, go to "Email Services".
2. Click "Add New Service" and select your email provider (Gmail, Outlook, etc.).
3. Follow the authentication steps to connect your email account.
4. Once connected, note the Service ID (e.g., "service_xxxxxxx").

## Step 3: Create an Email Template
1. Go to "Email Templates" in your dashboard.
2. Click "Create New Template".
3. Design your email template with the following variables:
   - `{{from_name}}` - The name of the person contacting you
   - `{{from_email}}` - The email address of the person contacting you
   - `{{message}}` - The message content
   - `{{company}}` - The company name
   - `{{phone}}` - The phone number
   - `{{country}}` - The country
   - `{{project_types}}` - The types of projects they're interested in
   - `{{budget}}` - The budget range
4. Save the template and note the Template ID (e.g., "template_xxxxxxx").

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys".
2. Copy your Public Key.

## Step 5: Update Environment Variables
1. Open the `.env.local` file in your project.
2. Update the following values with the ones you noted:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. Save the file.

## Step 6: Restart Your Development Server
1. Stop your development server if it's running.
2. Run `npm run dev` to start it again with the new environment variables.

## Testing
1. Navigate to your contact page.
2. Fill out the form and submit it.
3. You should receive an email at the address associated with the service you created.

## Troubleshooting
- Check browser console for any errors.
- Verify that you've correctly set up all environment variables.
- Make sure your template variables match those sent from the form.

## Usage Limits
- The free plan includes 200 emails per month.
- For more emails or additional features, check their pricing plans at [EmailJS.com/pricing](https://www.emailjs.com/pricing/). 