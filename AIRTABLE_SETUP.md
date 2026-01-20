# Airtable Integration Setup Instructions

## 1. Create Your Airtable Base

1. Go to [Airtable](https://airtable.com) and create a new base
2. Create a table named "RSVPs" (or any name you prefer)
3. Add the following columns to your table:
   - **Email** (Single line text)
   - **Name** (Single line text) 
   - **Company** (Single line text, optional)
   - **Role** (Single line text, optional)
   - **SubmittedAt** (Date, with time enabled)
   - **Status** (Single line text, default value: "RSVP Received")

## 2. Get Your Airtable Credentials

1. Go to [Airtable Account Settings](https://airtable.com/create/tokens)
2. Click "Create new token"
3. Give it a name (e.g., "AI Skills Event RSVP")
4. Select the scopes: `data.records:read`, `data.records:write`, `schema.bases:read`
5. Select your base from the dropdown
6. Copy the token (this will only be shown once)

3. Get your Base ID:
   - In your Airtable base, go to "Help" → "API documentation"
   - Your Base ID will be shown in the "authentication" section
   - It looks like: `appXXXXXXXXXXXXXX`

## 3. Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
AIRTABLE_TOKEN=patYourTokenHere
AIRTABLE_BASE_ID=appYourBaseIdHere
AIRTABLE_TABLE_NAME=RSVPs
```

**Important**: Replace the placeholder values with your actual Airtable token and base ID.

## 4. Test the Integration

1. Start your development server: `npm run dev`
2. Fill out the RSVP form on your website
3. Check your Airtable base to see the new record

## Form Fields

The RSVP form now includes:
- **Email** (required)
- **Full Name** (required) 
- **Company** (optional)
- **Job Title** (optional)

The form has a two-step UX:
1. Initially shows just the email field
2. Clicking "RSVP Now" expands to show the full form
3. Submitting sends data directly to your Airtable base

## Security Notes

- Your Airtable token is stored securely in environment variables
- The form uses server actions for secure data submission
- Email validation is handled both on client and server side
