# Landing Page Analytics & Tracking Setup

## Overview
Comprehensive tracking system for international brand outreach campaign measuring conversion funnel, A/B test performance, and lead quality across multiple landing page variants.

---

## Google Analytics 4 Setup

### Custom Events to Track

```javascript
// Form Submissions
gtag('event', 'form_submit', {
  form_type: 'lead_generation',
  page_variant: 'canadian-expansion-v1', // or european-expansion, etc.
  user_country: '[detected_country]',
  traffic_source: '[email/linkedin/organic]'
});

// Video Engagement
gtag('event', 'video_play', {
  video_title: 'canadian_expansion_demo',
  page_variant: 'canadian-expansion-v1'
});

gtag('event', 'video_progress', {
  video_title: 'canadian_expansion_demo',
  progress_percentage: 25, // 25%, 50%, 75%, 100%
  page_variant: 'canadian-expansion-v1'
});

// Scroll Depth
gtag('event', 'scroll', {
  percent_scrolled: 75,
  page_variant: 'canadian-expansion-v1'
});

// Time on Page Milestones
gtag('event', 'time_on_page', {
  time_threshold: 120, // seconds
  page_variant: 'canadian-expansion-v1'
});
```

### Custom Dimensions
1. **Page Variant** - tracks which A/B test version
2. **Traffic Source** - email campaign, LinkedIn, organic
3. **User Country** - geographic performance analysis  
4. **Company Size** - if captured in forms
5. **Product Category** - 3D printing vertical

### Goals & Conversions
- **Primary:** Form submissions
- **Secondary:** Video completion (>75%)
- **Engagement:** Time on page >2 minutes
- **Micro:** Scroll depth >75%

---

## A/B Testing Framework

### Test Variables

**Headlines (Primary Test):**
- V1: "Stop Losing 25-35% Revenue to Cross-Border Chaos"
- V2: "US Sellers Convert 180% Better in Canada. Here's Why."
- V3: "You're Missing 180% More Revenue in the Canadian Market"  
- V4: "Turn Your 1.65% Canadian Conversion Into US-Level 4.62%"

**Call-to-Action Buttons:**
- A: "Get Your Free Canadian Expansion Blueprint"
- B: "Show Me The Case Study"
- C: "Calculate My Revenue Potential"
- D: "Claim My Free Analysis"

**Social Proof Placement:**
- Top: Case study quotes in hero section
- Middle: Testimonials after problem section
- Bottom: Results data before CTA

### Statistical Significance
- **Minimum Sample Size:** 384 visitors per variant (95% confidence, 5% margin)
- **Test Duration:** Run for minimum 2 weeks or until significance
- **Winner Threshold:** 95% confidence level
- **Practical Significance:** Minimum 15% improvement required

### Testing Schedule
- **Week 1-2:** Headline variants (Canadian market)
- **Week 3-4:** CTA button variants (winning headline)
- **Week 5-6:** European market headline variants
- **Week 7-8:** Social proof placement tests

---

## UTM Parameter Strategy

### Campaign Tracking Structure
```
utm_source=email&utm_medium=outreach&utm_campaign=intl_expansion_q1&utm_content=canadian_v1&utm_term=3dprinting_brands
```

### Parameter Definitions
- **Source:** email, linkedin, organic, referral, paid
- **Medium:** outreach, social, search, display
- **Campaign:** intl_expansion_q1, european_outreach_q1
- **Content:** canadian_v1, european_v1, etc.
- **Term:** 3dprinting_brands, manufacturing_partners

### URL Builder Template
```
Base URLs:
- Canadian: https://assembly.studio/canadian-expansion
- European: https://assembly.studio/european-expansion
- A/B Tests: https://assembly.studio/international-brands-v[1-4]

Example Full URLs:
- https://assembly.studio/canadian-expansion?utm_source=email&utm_medium=outreach&utm_campaign=intl_expansion_q1&utm_content=canadian_v1&utm_term=eu_3dprinting
- https://assembly.studio/european-expansion?utm_source=linkedin&utm_medium=social&utm_campaign=european_outreach_q1&utm_content=european_v1&utm_term=manufacturing_partners
```

---

## Lead Tracking & Attribution

### Form Data Capture
```javascript
// Enhanced form submission tracking
function trackFormSubmission(formData) {
  // Google Analytics
  gtag('event', 'generate_lead', {
    currency: 'USD',
    value: 5000, // estimated lead value
    page_variant: getPageVariant(),
    traffic_source: getTrafficSource(),
    form_completion_time: getFormTime()
  });
  
  // Facebook Pixel (if using paid social)
  fbq('track', 'Lead', {
    value: 5000,
    currency: 'USD',
    content_category: '3D_Printing_Manufacturing'
  });
  
  // LinkedIn Insight Tag
  lintrk('track', { conversion_id: YOUR_CONVERSION_ID });
}
```

### CRM Integration Points
```javascript
// Send to HubSpot/CRM
const leadData = {
  email: formData.email,
  company: formData.company,
  country: formData.country,
  page_variant: getPageVariant(),
  traffic_source: getTrafficSource(),
  utm_parameters: getUTMParams(),
  session_data: {
    time_on_page: getTimeOnPage(),
    scroll_depth: getScrollDepth(),
    video_watched: getVideoProgress()
  }
};
```

---

## Conversion Funnel Tracking

### Funnel Stages
1. **Traffic** - Landing page visits
2. **Engagement** - >30 seconds on page OR >50% scroll
3. **Interest** - Video play OR scroll to case study
4. **Consideration** - Form field focus OR CTA hover
5. **Conversion** - Form submission
6. **Qualification** - Sales team qualification
7. **Opportunity** - Discovery call scheduled

### Funnel Analysis Queries

```sql
-- Google Analytics 4 Exploration
-- Funnel: Page View → Engaged Session → Form Submit

-- Segment by:
- Page variant (A/B test)
- Traffic source (email vs organic)
- Geographic region
- Device type
- Time period
```

---

## Dashboard Setup

### Real-Time Monitoring Dashboard
**KPIs to Display:**
- Conversion rate by page variant
- Traffic source performance  
- Geographic distribution
- Form completion rate
- Average time to conversion

### Weekly Performance Report
**Automated Metrics:**
- Total visits per variant
- Conversion rates with confidence intervals
- Cost per lead by channel
- Lead quality scores
- Pipeline attribution

### Monthly Campaign Analysis
**Deep Dive Metrics:**
- Cohort analysis by acquisition month
- Customer lifetime value by source
- Win rate by lead source
- Time to close by campaign

---

## Implementation Code

### Google Analytics 4 Configuration

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GA_MEASUREMENT_ID', {
    // Enhanced ecommerce for lead value tracking
    custom_map: {
      'custom_parameter_1': 'page_variant',
      'custom_parameter_2': 'traffic_source'
    }
  });
</script>
```

### React Component Tracking

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function usePageTracking() {
  const location = useLocation();
  
  useEffect(() => {
    // Track page view with variant
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: location.pathname,
      custom_parameter_1: getPageVariant(location.pathname),
      custom_parameter_2: getTrafficSource()
    });
  }, [location]);
}

// In each landing page component
function CanadianExpansionPage() {
  usePageTracking();
  
  const handleFormSubmit = (formData) => {
    // Track conversion
    gtag('event', 'generate_lead', {
      value: 5000,
      currency: 'USD',
      page_variant: 'canadian_expansion',
      form_data: formData
    });
  };
  
  return (
    // Component JSX
  );
}
```

---

## Privacy & Compliance

### GDPR Compliance
- Cookie consent banner for EU traffic
- Data processing agreements
- Right to deletion workflows
- Consent tracking in analytics

### Data Retention
- Analytics data: 26 months
- Form submissions: 7 years (business records)
- Marketing cookies: 13 months
- Essential cookies: Session only

---

## Success Metrics & Benchmarks

### Primary KPIs
- **Conversion Rate:** Target 3-5% (vs industry avg 2-3%)
- **Cost Per Lead:** Target <$100
- **Lead Quality Score:** Target >7/10
- **Time to Qualification:** Target <48 hours

### Secondary KPIs  
- **Page Load Time:** <3 seconds
- **Mobile Conversion Rate:** >80% of desktop
- **Email Open Rate:** >25%
- **Email Click Rate:** >5%

### A/B Test Success Criteria
- **Statistical Significance:** 95% confidence
- **Practical Significance:** >15% improvement
- **Sample Size:** Minimum 1,000 visitors per variant
- **Test Duration:** 2-4 weeks minimum