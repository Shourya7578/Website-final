import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const leadData = await request.json()

    // Bigin CRM API configuration
    const BIGIN_API_URL = 'https://www.zohoapis.in/bigin/v1/Leads'
    const BIGIN_ACCESS_TOKEN = process.env.BIGIN_ACCESS_TOKEN // You'll need to set this

    // Format data for Bigin CRM
    const biginLeadData = {
      data: [
        {
          Company: leadData.company || 'Unknown Company',
          Last_Name: leadData.lead_name || 'Unknown',
          First_Name: leadData.lead_name ? leadData.lead_name.split(' ')[0] : 'Unknown',
          Email: leadData.email,
          Phone: leadData.phone,
          Designation: leadData.designation,
          City: leadData.city,
          Description: leadData.description,
          Lead_Source: leadData.lead_source || 'Website',
          Lead_Status: leadData.lead_status || 'New',
          Industry: leadData.industry || 'Food & Beverage',
          Created_Time: leadData.created_time,
        }
      ]
    }

    // Send to Bigin CRM
    const response = await fetch(BIGIN_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${BIGIN_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(biginLeadData),
    })

    if (response.ok) {
      const result = await response.json()
      console.log('Lead successfully created in Bigin CRM:', result)
      
      return NextResponse.json({ 
        success: true, 
        message: 'Lead created in Bigin CRM',
        biginResponse: result 
      })
    } else {
      const error = await response.text()
      console.error('Bigin CRM API error:', error)
      
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to create lead in Bigin CRM' 
      }, { status: 400 })
    }

  } catch (error) {
    console.error('Bigin webhook error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}
