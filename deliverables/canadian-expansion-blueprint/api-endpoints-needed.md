# API Endpoints Required for 2-Step Form Lead Capture

## Overview
The 2-step form now captures leads at both steps to ensure no data is lost. Here are the endpoints you need to implement:

---

## Endpoint 1: Step 1 Lead Capture

**URL:** `POST /api/canadian-expansion-step1`

**Purpose:** Capture basic contact information immediately when user completes Step 1

**Payload Example:**
```json
{
  "contactName": "John Smith",
  "email": "john@company.com", 
  "website": "https://company.com",
  "submittedAt": "2025-09-09T13:01:00.000Z",
  "source": "canadian_expansion_landing_page",
  "stepCompleted": 1,
  "leadStatus": "step1_complete"
}
```

**Response:** 
```json
{
  "success": true,
  "leadId": "uuid-12345",
  "message": "Step 1 data captured successfully"
}
```

**Use Cases:**
- Start automated research process with company website
- Begin email nurture sequence for incomplete leads  
- Trigger follow-up campaigns for Step 1 abandoners
- Create lead record in CRM with "Step 1 Complete" status

---

## Endpoint 2: Complete Lead Qualification

**URL:** `POST /api/canadian-expansion-form` 

**Purpose:** Capture complete business information when user completes both steps

**Payload Example:**
```json
{
  "contactName": "John Smith",
  "email": "john@company.com",
  "website": "https://company.com", 
  "companyName": "Smith Manufacturing",
  "phone": "+1-555-123-4567",
  "primaryProducts": "b2b-components",
  "otherProduct": "",
  "annualRevenue": "2m-5m",
  "currentMarkets": ["Europe", "Asia-Pacific"],
  "biggestChallenge": "shipping-costs",
  "submittedAt": "2025-09-09T13:05:00.000Z",
  "source": "canadian_expansion_landing_page",
  "stepCompleted": 2,
  "leadStatus": "fully_qualified",
  "completedSteps": 2
}
```

**Response:**
```json
{
  "success": true,
  "leadId": "uuid-12345", 
  "message": "Complete lead captured successfully",
  "blueprintDelivery": {
    "estimatedDelivery": "2025-09-11T13:05:00.000Z",
    "trackingId": "blueprint-67890"
  }
}
```

**Use Cases:**
- Trigger comprehensive Canadian Expansion Blueprint generation
- Qualify lead for high-touch sales follow-up
- Start priority nurture sequence
- Schedule personalized video creation

---

## Lead Segmentation Strategy

### Step 1 Only Leads (`leadStatus: "step1_complete"`)
**Follow-up Strategy:**
- **Email Sequence:** "Complete Your Canadian Market Analysis"
- **Timeline:** Send reminder emails at 1 hour, 24 hours, 3 days
- **Offer:** Simplified blueprint with basic market data
- **Goal:** Re-engage to complete Step 2

**Email Examples:**
- **1 Hour:** "John, finish getting your Canadian market analysis (2 minutes)"
- **24 Hours:** "Don't miss this opportunity - your Canadian expansion data is waiting"
- **3 Days:** "Final reminder: Complete your market analysis before we archive it"

### Step 2 Complete Leads (`leadStatus: "fully_qualified"`)
**Follow-up Strategy:**
- **Immediate:** Full Canadian Expansion Blueprint generation
- **24-48 Hours:** Personal video walkthrough delivery
- **1 Week:** Calendar booking for strategy call
- **2 Weeks:** Case study follow-up if no response

---

## Implementation Recommendations

### Database Schema
```sql
CREATE TABLE canadian_expansion_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  website VARCHAR(500),
  company_name VARCHAR(255),
  phone VARCHAR(50),
  primary_products VARCHAR(100),
  other_product TEXT,
  annual_revenue VARCHAR(50), 
  current_markets JSONB,
  biggest_challenge VARCHAR(100),
  submitted_at TIMESTAMP NOT NULL,
  source VARCHAR(100) NOT NULL,
  step_completed INTEGER NOT NULL,
  lead_status VARCHAR(50) NOT NULL,
  blueprint_generated BOOLEAN DEFAULT FALSE,
  video_created BOOLEAN DEFAULT FALSE,
  follow_up_status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_email ON canadian_expansion_leads(email);
CREATE INDEX idx_lead_status ON canadian_expansion_leads(lead_status);
CREATE INDEX idx_submitted_at ON canadian_expansion_leads(submitted_at);
```

### Error Handling
Both endpoints should:
- Return success even if database write fails (don't block user flow)
- Log errors for monitoring
- Queue retries for failed database writes
- Send alerts for critical failures

### Rate Limiting
- Implement per-IP rate limiting (10 requests/minute)
- Duplicate email detection within 24 hours
- Spam protection with basic validation

---

## Analytics & Tracking Integration

### Google Analytics Events Already Implemented:
```javascript
// Step 1 completion
gtag('event', 'form_step_1_complete', {
  form_type: 'canadian_expansion_blueprint',
  contact_name: 'John Smith',
  email: 'john@company.com', 
  website: 'https://company.com'
});

// Step 2 completion  
gtag('event', 'form_submit', {
  form_type: 'canadian_expansion_blueprint',
  company_name: 'Smith Manufacturing',
  revenue_range: '2m-5m',
  products: 'b2b-components'
});
```

### CRM Integration Points:
- **HubSpot:** Map lead status to lifecycle stages
- **Salesforce:** Create lead records with custom fields
- **Pipedrive:** Set up deal stages based on completion level
- **Custom CRM:** Use leadStatus field for segmentation

---

## Automated Workflows to Trigger

### Step 1 Complete → Automated Research
1. **Company Research:** Website analysis, competitor research
2. **Market Data:** Canadian market size for their product category  
3. **Basic Blueprint:** Generate simplified analysis for re-engagement
4. **Email Sequence:** Start Step 1 completion nurture campaign

### Step 2 Complete → Full Blueprint Generation
1. **Comprehensive Analysis:** Full feasibility report generation
2. **Video Creation:** Personal Loom video recording trigger
3. **Calendar Booking:** Send calendar link for strategy call
4. **High-Priority Alert:** Notify sales team of qualified lead

---

## Testing Checklist

### Step 1 Endpoint Testing:
- [ ] Successful submission saves to database
- [ ] Email validation works correctly  
- [ ] Duplicate email handling
- [ ] Error handling doesn't block user flow
- [ ] Analytics events fire correctly

### Step 2 Endpoint Testing:
- [ ] Updates existing lead record (don't create duplicate)
- [ ] All form fields captured correctly
- [ ] Multi-select arrays handled properly
- [ ] Blueprint generation triggers
- [ ] Success response includes delivery timeline

### User Experience Testing:
- [ ] Step 1 → Step 2 flow works smoothly
- [ ] Back button maintains data
- [ ] Form submission loading states
- [ ] Success message displays correctly
- [ ] Mobile responsiveness

---

## Success Metrics to Track

### Conversion Funnel:
- **Landing Page Views** → **Step 1 Starts** → **Step 1 Completes** → **Step 2 Completes** → **Calendar Bookings** → **Sales Qualified**

### Key Performance Indicators:
- **Step 1 Conversion Rate:** Target >25%
- **Step 1 → Step 2 Conversion:** Target >60% 
- **Overall Form Completion:** Target >15%
- **Blueprint Delivery Rate:** Target >95%
- **Calendar Booking Rate:** Target >20%

This implementation ensures maximum lead capture while providing a smooth user experience and comprehensive follow-up capabilities.