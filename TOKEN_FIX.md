# Airtable Token Fix - Step by Step

## The Problem
Your token is getting "NOT_AUTHORIZED" (403) error, which means insufficient permissions.

## Solution: Create New Token with Correct Scopes

### 1. Go to Airtable Tokens
- Visit: https://airtable.com/create/tokens
- Or: Account Settings → Developer Hub → Personal access tokens

### 2. Delete Your Current Token
- Find your existing token and delete it
- This ensures we start fresh

### 3. Create New Token
- **Token name**: "AI Skills Event RSVP"
- **Scopes** (CRITICAL - select ALL of these):
  ✅ `data.records:read`
  ✅ `data.records:write` 
  ✅ `schema.bases:read`
- **Access**: Select "All current and future bases" OR select your specific base
- **Click "Create token"**

### 4. Copy the Token Immediately
- Copy the full token (starts with `pat...`)
- This is the only time you'll see it

### 5. Update Your .env.local
Replace your current AIRTABLE_TOKEN with the new one:

```env
AIRTABLE_TOKEN=patYOURNEWTOKENHERE
AIRTABLE_BASE_ID=appYourBaseIdHere
AIRTABLE_TABLE_NAME=RSVP
```

### 6. Restart Your Server
```bash
# Stop the current server (Ctrl+C)
npm run dev
```

### 7. Test the Form
- Try submitting the RSVP form again
- It should now work!

## Common Mistakes to Avoid
❌ Missing `data.records:write` scope
❌ Token only has read permissions
❌ Token not linked to correct base
❌ Copy/paste errors in token

## Verify Token Works
After creating the new token, you should see:
```
Airtable config check: { hasToken: true, hasBaseId: true, tableName: 'RSVP' }
Record created successfully: [...]
```

Instead of the NOT_AUTHORIZED error.
