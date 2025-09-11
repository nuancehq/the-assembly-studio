# Prospect Data Collection Framework
## Inputs Required for Semi-Automated Canadian Expansion Blueprint

---

## Data Collection Strategy

### Collection Method Options:
1. **Lead Magnet Form** (5-7 essential fields only)
2. **Follow-up Survey** (detailed questionnaire after initial signup)  
3. **Discovery Call** (human verification of key data points)
4. **Company Research** (automated data enrichment from public sources)

**Recommended Approach:** Minimal lead magnet form + automated research + follow-up survey for missing data

---

## Section 1: Essential Lead Magnet Form Fields

### Required for Report Generation (Keep form short - 5 fields max)
```html
Company Information:
- Company Name* (text)
- Website URL* (text) 
- Your Name* (text)
- Email Address* (text)
- Phone Number (optional)

Business Basics:
- Primary Products (dropdown + text)
  □ Consumer 3D printed goods
  □ Functional prototypes  
  □ Custom/personalized products
  □ B2B components
  □ Other: ___________

- Approximate Annual Revenue (dropdown)
  □ Under $500K
  □ $500K - $1M
  □ $1M - $2M  
  □ $2M - $5M
  □ $5M - $10M
  □ Over $10M
  □ Prefer not to say

- Current Geographic Markets (checkboxes)
  □ Europe  
  □ Asia-Pacific
  □ North America (already selling)
  □ Other: ___________

- Biggest Challenge with International Expansion (dropdown)
  □ Shipping costs and delays
  □ Customs and duties complexity  
  □ Currency and payment processing
  □ Customer service across time zones
  □ Don't know where to start
  □ Other: ___________
```

---

## Section 2: Automated Data Enrichment

### Data Sources for Automatic Research
**Company Intelligence (Use tools like Clearbit, ZoomInfo, or manual research):**
- Industry classification
- Employee count estimate
- Founded year
- Headquarters location  
- Technology stack (e-commerce platform)
- Social media presence
- Estimated annual revenue (if not provided)

**Website Analysis (Automated tools like SimilarWeb, SEMrush):**
- Monthly website traffic
- Traffic geographic distribution
- Top traffic sources
- E-commerce platform detection
- Product catalog size estimate
- Pricing information (if public)

**Market Research (Industry databases):**
- Industry growth rates for their product category
- Market size data for their geographic regions
- Competitive landscape information
- Average pricing in their product category

---

## Section 3: Follow-Up Survey (Detailed Data Collection)

### Send after initial signup for comprehensive analysis

#### Current Business Metrics
```
Revenue & Volume:
- What's your average monthly revenue? $______
- How many orders do you process per month? ______
- What's your average order value? $______
- What percentage of revenue comes from repeat customers? _____%

Product Information:
- How many different products do you currently sell? ______
- What are your top 3 best-selling products?
  1. ________________
  2. ________________  
  3. ________________
- What's your current gross margin? _____%
- How long does it take you to fulfill an order? ____ days
```

#### International Selling Experience
```
Current International Sales:
- Do you currently ship internationally? □ Yes □ No
- If yes, what percentage of sales are international? _____%
- Which countries do you currently ship to? ________________
- What's your average international shipping cost? $______
- What's your average international delivery time? ____ days
- What percentage of international orders result in customer service issues? _____%

Canada-Specific:
- Have you sold to Canadian customers before? □ Yes □ No
- If yes, how many Canadian orders in the last 12 months? ______
- What challenges have you faced with Canadian customers? ________________
- What's your current conversion rate for Canadian traffic? _____%
```

#### Manufacturing & Operations
```
Production Details:
- Where are your products currently manufactured? ________________
- Do you manufacture in-house or use partners? □ In-house □ Partners □ Both
- What's your current production capacity per month? ______
- How long does it take to produce a typical order? ____ days
- What materials/processes do you use? ________________

Quality & Compliance:
- Do you have any quality certifications (ISO, etc.)? ________________
- Are your products compliant with North American safety standards? □ Yes □ No □ Unknown
- Do you have product liability insurance? □ Yes □ No
```

#### Growth Goals & Timeline
```
Expansion Goals:
- What's your target for additional monthly revenue from Canadian market? $______
- When would you like to launch in Canada? ________________
- What's your budget for initial market entry investment? $______
- Who would be responsible for managing Canadian expansion? ________________

Success Metrics:
- What would make Canadian expansion a success for you? ________________
- What's your biggest concern about expanding to Canada? ________________
- Have you considered Canadian expansion before? What stopped you? ________________
```

---

## Section 4: Discovery Call Verification Questions

### Use for high-value prospects or when data is incomplete

#### Business Validation
```
Financial Verification:
- "You mentioned $X in annual revenue - is that primarily from [home market]?"
- "What's driving your current growth? Is it new customers or higher order values?"
- "How much of your revenue do you reinvest in growth initiatives?"

Operational Validation:  
- "Walk me through your current order fulfillment process"
- "What's your biggest operational challenge right now?"
- "How do you handle customer service for international orders?"

Strategic Validation:
- "What's your 3-year vision for the business?"
- "Besides Canada, what other markets are you considering?"
- "What would need to happen for this to be your #1 priority?"
```

---

## Section 5: Data Requirements by Report Section

### Market Analysis Inputs
**Required Data:**
- Company industry/product category
- Current markets served  
- Target customer demographics
- Competitive positioning

**Calculations:**
- Canadian market size for their category
- Addressable market based on their price point
- Competitive gap analysis
- Market entry barriers assessment

### Financial Projections Inputs  
**Required Data:**
- Current monthly revenue
- Average order value
- Monthly order volume
- Current gross margin
- International shipping costs
- Customer acquisition cost

**Calculations:**
- Revenue projection scenarios
- Cost structure comparison
- ROI and payback analysis  
- Break-even volume analysis

### Operational Feasibility Inputs
**Required Data:**
- Current manufacturing setup
- Production capacity
- Quality certifications
- Technology stack
- Fulfillment processes

**Calculations:**
- Manufacturing suitability assessment
- Capacity planning analysis
- Technology integration requirements
- Operational readiness score

---

## Section 6: Semi-Automation Workflow

### Data Collection Sequence
```
Day 0: Lead Magnet Form Submission
├── Collect: 5 essential fields
├── Trigger: Welcome email sequence
└── Schedule: Automated research tasks

Day 1: Automated Research  
├── Company intelligence gathering
├── Website analysis
├── Market research for their industry
└── Competitive landscape research

Day 2: Follow-up Survey
├── Send detailed questionnaire
├── Personalize based on initial data
├── Set 3-day response reminder
└── Offer incentive for completion

Day 5: Discovery Call (if high-value)
├── Schedule for incomplete data
├── Verify key assumptions  
├── Gather strategic insights
└── Build relationship

Day 7: Report Generation
├── Compile all data sources
├── Generate financial projections
├── Create customized analysis
└── Prepare video walkthrough
```

### Automation Tools & Systems
**Data Collection:**
- **Typeform/Gravity Forms:** Smart forms with conditional logic
- **Calendly:** Automated discovery call scheduling
- **Zapier:** Connect form submissions to workflow

**Data Enrichment:**
- **Clearbit Enrichment:** Automatic company data
- **SimilarWeb API:** Website traffic analysis
- **LinkedIn Sales Navigator:** Company intelligence
- **Manual Research:** For gaps in automated data

**Report Generation:**
- **Google Sheets/Airtable:** Data consolidation and calculations
- **Mail Merge Tools:** Populate report templates  
- **Canva API:** Automated chart/graphic generation
- **PDF Generation:** Automated report compilation

---

## Section 7: Data Quality & Validation

### Validation Rules
```
Revenue Validation:
- Cross-check website traffic vs claimed revenue
- Verify order volume vs average order value
- Compare to industry benchmarks

Market Validation:
- Verify claimed markets vs website analytics
- Check product-market fit indicators
- Validate competitive positioning claims

Operational Validation:
- Verify manufacturing claims vs company size
- Check certification claims
- Validate capacity vs claimed volume
```

### Missing Data Handling
```
High Priority Missing Data:
- Revenue/volume data → Required for projections
- Product information → Required for manufacturing assessment  
- Current costs → Required for comparison analysis

Medium Priority Missing Data:  
- Detailed operational info → Use industry averages
- Specific competitive data → Use market research
- Geographic breakdown → Use website analytics

Low Priority Missing Data:
- Detailed company history → Use public information
- Secondary metrics → Use benchmarks
- Nice-to-have details → Skip or use placeholders
```

---

## Section 8: Implementation Recommendations

### Phase 1: Basic Automation (Week 1-2)
- [ ] Set up lead magnet form with 5 essential fields
- [ ] Create automated welcome email sequence  
- [ ] Implement basic company research workflow
- [ ] Build simple report template with mail merge

### Phase 2: Enhanced Automation (Week 3-4)  
- [ ] Add follow-up survey with conditional logic
- [ ] Integrate data enrichment tools
- [ ] Create financial projection calculator
- [ ] Build professional PDF template system

### Phase 3: Advanced Automation (Month 2)
- [ ] Implement discovery call scheduling
- [ ] Add video personalization workflow
- [ ] Create comprehensive data validation system
- [ ] Build analytics and optimization tracking

### Success Metrics
- **Data Completion Rate:** >80% of required fields populated
- **Report Generation Time:** <2 hours per prospect
- **Data Accuracy:** >95% validation success rate  
- **Conversion Rate:** >15% from report to discovery call

This framework enables you to collect the right data efficiently while maintaining a professional prospect experience and enabling high-quality, customized report generation with minimal manual effort.