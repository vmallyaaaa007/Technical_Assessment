# Airtable Table Setup - Field Names

## The Problem
Your Airtable table doesn't have the required field names that the code is trying to use.

## Solution: Create These Exact Fields in Your Airtable Table

### Required Field Names (EXACTLY as shown):
1. **Email** (Single line text)
2. **Name** (Single line text)  
3. **Company** (Single line text)
4. **Role** (Single line text)
5. **SubmittedAt** (Date, with time enabled)
6. **Status** (Single line text)

### Step-by-Step Setup:

1. **Open your Airtable base**
2. **Go to your RSVP table**
3. **Add these columns**:
   - Click "Add or remove fields"
   - Add each field with the EXACT name and type below

### Field Configuration:

| Field Name | Type | Notes |
|------------|------|-------|
| Email | Single line text | Required |
| Name | Single line text | Required |
| Company | Single line text | Optional |
| Role | Single line text | Optional |
| SubmittedAt | Date | Enable "Include time" |
| Status | Single line text | Default: "RSVP Received" |

### Important:
- **Field names are CASE-SENSITIVE**
- **No spaces in field names** (except "SubmittedAt")
- **Must match exactly** what the code expects

### Test After Setup:
1. Save your Airtable table
2. Try the RSVP form again
3. You should see: "Record created successfully"

### Alternative: Update Code to Match Your Fields
If you prefer to keep your existing field names, tell me what they are and I'll update the code to match.
