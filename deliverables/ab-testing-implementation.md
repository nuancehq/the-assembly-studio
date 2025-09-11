# A/B Testing Implementation Framework

## Overview
Systematic approach to testing landing page elements for maximum conversion rate optimization, focusing on headline variants, CTAs, and social proof placement across international brand outreach campaign.

---

## Testing Infrastructure

### React Component Architecture

```tsx
// AB Testing Hook
import { useState, useEffect } from 'react';

interface ABTestVariant {
  id: string;
  name: string;
  traffic_split: number;
  active: boolean;
}

export function useABTest(testName: string) {
  const [variant, setVariant] = useState<string>('');
  
  useEffect(() => {
    // Get or create visitor ID
    let visitorId = localStorage.getItem('visitor_id');
    if (!visitorId) {
      visitorId = generateVisitorId();
      localStorage.setItem('visitor_id', visitorId);
    }
    
    // Determine variant based on consistent hash
    const variantId = assignVariant(visitorId, testName);
    setVariant(variantId);
    
    // Track assignment
    gtag('event', 'ab_test_assignment', {
      test_name: testName,
      variant_id: variantId,
      visitor_id: visitorId
    });
  }, [testName]);
  
  return variant;
}

// Variant assignment logic
function assignVariant(visitorId: string, testName: string): string {
  const hash = hashFunction(visitorId + testName);
  const bucket = hash % 100;
  
  // Get active test configuration
  const testConfig = getTestConfig(testName);
  
  let cumulative = 0;
  for (const variant of testConfig.variants) {
    cumulative += variant.traffic_split;
    if (bucket < cumulative) {
      return variant.id;
    }
  }
  
  return testConfig.control_variant;
}
```

### Test Configuration Management

```tsx
// Test configurations stored in environment or CMS
const AB_TESTS = {
  headline_test_canadian: {
    active: true,
    control_variant: 'v1',
    variants: [
      { id: 'v1', name: 'Stop Losing 25-35%', traffic_split: 25 },
      { id: 'v2', name: 'US Sellers Convert 180%', traffic_split: 25 },
      { id: 'v3', name: 'Missing 180% Revenue', traffic_split: 25 },
      { id: 'v4', name: 'Turn 1.65% Into 4.62%', traffic_split: 25 }
    ]
  },
  cta_button_test: {
    active: true,
    control_variant: 'blueprint',
    variants: [
      { id: 'blueprint', name: 'Get Free Blueprint', traffic_split: 25 },
      { id: 'case_study', name: 'Show Me Case Study', traffic_split: 25 },
      { id: 'calculator', name: 'Calculate Revenue', traffic_split: 25 },
      { id: 'analysis', name: 'Claim Free Analysis', traffic_split: 25 }
    ]
  },
  social_proof_placement: {
    active: true,
    control_variant: 'hero',
    variants: [
      { id: 'hero', name: 'Testimonial in Hero', traffic_split: 33 },
      { id: 'middle', name: 'After Problem Section', traffic_split: 33 },
      { id: 'bottom', name: 'Before Final CTA', traffic_split: 34 }
    ]
  }
};
```

---

## Test Implementation Examples

### 1. Headline Variants Test

```tsx
// CanadianExpansionPage.tsx
import { useABTest } from '../hooks/useABTest';

export function CanadianExpansionPage() {
  const headlineVariant = useABTest('headline_test_canadian');
  
  const headlines = {
    v1: "Stop Losing 25-35% Revenue to Cross-Border Chaos",
    v2: "US Sellers Convert 180% Better in Canada. Here's Why.",
    v3: "You're Missing 180% More Revenue in the Canadian Market",
    v4: "Turn Your 1.65% Canadian Conversion Into US-Level 4.62%"
  };
  
  const subheadlines = {
    v1: "The counterintuitive approach smart 3D printing brands use to crack the Canadian market",
    v2: "Discover the simple system that eliminates shipping headaches and doubles conversion rates",
    v3: "How international brands achieve US-level conversion rates in the Canadian market",
    v4: "The proven system that transforms struggling Canadian campaigns into profit engines"
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-5xl mx-auto">
            {headlines[headlineVariant] || headlines.v1}
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto">
            {subheadlines[headlineVariant] || subheadlines.v1}
          </p>
        </div>
        {/* Rest of component */}
      </div>
    </div>
  );
}
```

### 2. CTA Button Test

```tsx
// CTA Component with A/B Testing
function CallToActionSection() {
  const ctaVariant = useABTest('cta_button_test');
  
  const ctaButtons = {
    blueprint: {
      text: "Get Your Free Canadian Expansion Blueprint",
      icon: <FileText className="w-5 h-5" />
    },
    case_study: {
      text: "Show Me The Case Study",  
      icon: <BarChart className="w-5 h-5" />
    },
    calculator: {
      text: "Calculate My Revenue Potential",
      icon: <Calculator className="w-5 h-5" />
    },
    analysis: {
      text: "Claim My Free Market Analysis",
      icon: <TrendingUp className="w-5 h-5" />
    }
  };
  
  const handleCTAClick = () => {
    // Track conversion by variant
    gtag('event', 'cta_click', {
      cta_variant: ctaVariant,
      test_name: 'cta_button_test'
    });
    
    // Scroll to form or open modal
    document.getElementById('contact-form')?.scrollIntoView();
  };
  
  return (
    <button
      onClick={handleCTAClick}
      className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center gap-3"
    >
      {ctaButtons[ctaVariant]?.icon}
      {ctaButtons[ctaVariant]?.text || ctaButtons.blueprint.text}
    </button>
  );
}
```

### 3. Social Proof Placement Test

```tsx
// Social Proof Component with Dynamic Placement
function SocialProofSection() {
  const placementVariant = useABTest('social_proof_placement');
  
  const testimonial = {
    quote: "We went from $0 to $43K/month in Canadian sales in just 90 days. The local manufacturing approach eliminated our biggest barrier - shipping costs and delivery times.",
    author: "Marcus Weber",
    company: "Precision3D Europe",
    result: "$43K/month in 90 days"
  };
  
  // Only render if this is the selected placement
  const shouldRender = (placement: string) => placementVariant === placement;
  
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
            <Quote className="w-6 h-6 text-emerald-600" />
          </div>
        </div>
        <div>
          <blockquote className="text-lg text-slate-700 mb-4 italic">
            "{testimonial.quote}"
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <cite className="font-semibold text-slate-900">{testimonial.author}</cite>
              <div className="text-slate-600">{testimonial.company}</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-emerald-600">{testimonial.result}</div>
              <div className="text-sm text-slate-600">Revenue Growth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Usage in main component
function CanadianExpansionPage() {
  const socialProofPlacement = useABTest('social_proof_placement');
  
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      {socialProofPlacement === 'hero' && <SocialProofSection />}
      
      {/* Problem Section */}
      <ProblemSection />
      {socialProofPlacement === 'middle' && <SocialProofSection />}
      
      {/* Solution Section */}
      <SolutionSection />
      
      {/* Final CTA */}
      {socialProofPlacement === 'bottom' && <SocialProofSection />}
      <CallToActionSection />
    </div>
  );
}
```

---

## Testing Schedule & Roadmap

### Phase 1: Headline Optimization (Weeks 1-2)
**Test:** Canadian market headline variants
**Variants:** 4 different value propositions
**Sample Size:** 400 visitors per variant (1,600 total)
**Success Metric:** Conversion rate improvement >15%

**Timeline:**
- Week 1: Launch test, monitor for technical issues
- Week 2: Complete data collection, analyze results
- Week 2 End: Implement winning variant

### Phase 2: CTA Button Optimization (Weeks 3-4)
**Test:** Call-to-action button text and positioning
**Variants:** 4 different action-oriented phrases
**Sample Size:** 400 visitors per variant
**Success Metric:** Click-through rate improvement >10%

### Phase 3: European Market Headlines (Weeks 5-6)
**Test:** EU-focused headline variants
**Variants:** 4 headlines targeting European pain points
**Sample Size:** 300 visitors per variant (smaller EU traffic)
**Success Metric:** Conversion rate >3%

### Phase 4: Social Proof Placement (Weeks 7-8)
**Test:** Testimonial and case study positioning
**Variants:** Hero, middle, bottom placement
**Sample Size:** 500 visitors per variant
**Success Metric:** Engagement and conversion optimization

### Phase 5: Advanced Optimizations (Weeks 9-12)
- Video vs no video testing
- Form length optimization (2-field vs 4-field)
- Risk reversal messaging variants
- Mobile-specific optimizations

---

## Statistical Analysis Framework

### Sample Size Calculations

```javascript
// Statistical significance calculator
function calculateSampleSize(baseRate, minDetectableEffect, alpha = 0.05, power = 0.8) {
  // Using normal approximation for proportion tests
  const z_alpha = 1.96; // 95% confidence level
  const z_beta = 0.84;  // 80% power
  
  const p1 = baseRate;
  const p2 = baseRate * (1 + minDetectableEffect);
  const p_pooled = (p1 + p2) / 2;
  
  const n = Math.ceil(
    (2 * p_pooled * (1 - p_pooled) * Math.pow(z_alpha + z_beta, 2)) /
    Math.pow(p2 - p1, 2)
  );
  
  return n;
}

// Example: Base conversion 2%, want to detect 20% improvement
const sampleSize = calculateSampleSize(0.02, 0.20);
console.log(`Need ${sampleSize} visitors per variant`);
```

### Results Analysis

```javascript
// A/B test results analysis
function analyzeTestResults(controlConversions, controlVisitors, testConversions, testVisitors) {
  const controlRate = controlConversions / controlVisitors;
  const testRate = testConversions / testVisitors;
  const improvement = (testRate - controlRate) / controlRate;
  
  // Calculate statistical significance (Z-test)
  const pooledRate = (controlConversions + testConversions) / (controlVisitors + testVisitors);
  const standardError = Math.sqrt(pooledRate * (1 - pooledRate) * (1/controlVisitors + 1/testVisitors));
  const zScore = (testRate - controlRate) / standardError;
  const pValue = 2 * (1 - normalCDF(Math.abs(zScore)));
  
  return {
    controlRate: (controlRate * 100).toFixed(2) + '%',
    testRate: (testRate * 100).toFixed(2) + '%',
    improvement: (improvement * 100).toFixed(1) + '%',
    significant: pValue < 0.05,
    pValue: pValue.toFixed(4),
    confidence: (1 - pValue) * 100
  };
}
```

---

## Implementation Checklist

### Technical Setup
- [ ] A/B testing hooks implemented in React
- [ ] Variant assignment logic with consistent hashing
- [ ] Google Analytics custom events for test tracking
- [ ] Test configuration management system
- [ ] Statistical significance monitoring dashboard

### Test Preparation
- [ ] Baseline conversion rates measured
- [ ] Sample size calculations completed
- [ ] Test variants designed and reviewed
- [ ] Success metrics defined
- [ ] Test duration planned

### Launch Readiness
- [ ] QA testing of all variants completed
- [ ] Analytics tracking verified
- [ ] Mobile responsiveness tested
- [ ] Load testing for traffic spikes
- [ ] Fallback mechanisms in place

### Monitoring & Analysis
- [ ] Daily performance monitoring setup
- [ ] Weekly statistical significance checks
- [ ] Automated alerts for unusual patterns
- [ ] Results documentation template
- [ ] Decision-making criteria defined

---

## Success Metrics & Reporting

### Primary Metrics
- **Conversion Rate:** Form submissions / page visitors
- **Statistical Significance:** p-value <0.05
- **Practical Significance:** >15% improvement minimum
- **Confidence Level:** 95% confidence in results

### Secondary Metrics
- **Engagement Rate:** Time on page, scroll depth
- **Bounce Rate:** Single-page sessions
- **Mobile vs Desktop Performance:** Device-specific conversion
- **Traffic Source Impact:** Email vs organic vs social

### Reporting Schedule
- **Daily:** Basic performance monitoring
- **Weekly:** Statistical significance analysis
- **Bi-weekly:** Detailed results review and optimization
- **Monthly:** Comprehensive test performance report

### Decision Framework
1. **Statistical Significance Achieved:** p-value <0.05
2. **Practical Significance Met:** >15% improvement
3. **Sample Size Sufficient:** Minimum calculated threshold reached
4. **Test Duration Complete:** Minimum 2 weeks or 1,000 conversions
5. **Business Impact Positive:** Aligns with revenue goals

---

## Risk Management

### Testing Risks
- **Insufficient Traffic:** Extend test duration or reduce variants
- **Technical Issues:** Fallback to control variant automatically
- **External Factors:** Monitor for seasonal/promotional impacts
- **Statistical Noise:** Ensure adequate sample sizes

### Mitigation Strategies
- **Traffic Monitoring:** Real-time alerts for low traffic periods
- **Error Handling:** Graceful degradation for technical failures
- **Segment Analysis:** Identify confounding variables
- **Historical Comparison:** Compare against previous performance

This A/B testing framework provides a systematic approach to optimizing your international brand outreach landing pages for maximum conversion rates while maintaining statistical rigor.