'use server'

import Airtable from 'airtable'

const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'RSVP'

console.log('Airtable config check:', {
  hasToken: !!AIRTABLE_TOKEN,
  hasBaseId: !!AIRTABLE_BASE_ID,
  tableName: AIRTABLE_TABLE_NAME
})

export async function submitRSVP(formData: FormData) {
  try {
    const email = formData.get('email') as string
    const name = formData.get('name') as string
    const company = formData.get('company') as string
    const role = formData.get('role') as string

    console.log('Form data received:', { email, name, company, role })

    if (!email || !name) {
      return { success: false, error: 'Email and name are required' }
    }

    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
      console.error('Missing Airtable configuration')
      return { success: false, error: 'Airtable configuration missing. Please check environment variables.' }
    }

    console.log('Initializing Airtable...')
    const base = new Airtable({ apiKey: AIRTABLE_TOKEN }).base(AIRTABLE_BASE_ID)

    const recordData = {
      fields: {
        Email: email,
        Name: name,
        Company: company || '',
        Role: role || '',
        SubmittedAt: new Date().toISOString(),
        Status: 'RSVP Received'
      }
    }

    console.log('Creating record:', recordData)

    const result = await base(AIRTABLE_TABLE_NAME).create([recordData])
    console.log('Record created successfully:', result)

    return { success: true, message: 'RSVP submitted successfully!' }
  } catch (error) {
    console.error('Airtable submission error:', error)
    console.error('Error details:', JSON.stringify(error, null, 2))
    
    // More specific error messages
    if (error instanceof Error) {
      if (error.message.includes('AUTHENTICATION_REQUIRED') || error.message.includes('NOT_AUTHORIZED')) {
        return { success: false, error: 'Invalid Airtable token or insufficient permissions. Please check your AIRTABLE_TOKEN and ensure it has the correct scopes: data.records:read, data.records:write, schema.bases:read' }
      }
      if (error.message.includes('NOT_FOUND')) {
        return { success: false, error: 'Invalid Base ID or table name. Please check AIRTABLE_BASE_ID and AIRTABLE_TABLE_NAME.' }
      }
      if (error.message.includes('PERMISSION_DENIED')) {
        return { success: false, error: 'Insufficient permissions. Check your Airtable token scopes.' }
      }
    }
    
    return { 
      success: false, 
      error: `Failed to submit RSVP: ${error instanceof Error ? error.message : 'Unknown error'}` 
    }
  }
}
