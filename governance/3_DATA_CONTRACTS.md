# 3. DATA CONTRACTS & SINGLE SOURCE OF TRUTH

All site data, text copy, course information, fees, faculty profiles, and contact details are strictly declared in `/content/site.ts`.

## 1. Schema Definition (`/content/site.ts`)

```typescript
export interface ContactInfo {
  name: string;
  location: string;
  address: string;
  landmark: string;
  city: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string; // Dummy: "+919000000000"
  whatsappDefaultMsg: string;
  operatingHours: string;
  googleMapsEmbedUrl?: string;
}

export interface AnnouncementBarData {
  text: string;
  highlightText: string;
  targetDate: string; // ISO date for live countdown
  ctaText: string;
  whatsappMsg: string;
}

export interface HeroData {
  badgeText: string;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix: string;
  subheadline: string;
  primaryCta: {
    label: string;
    whatsappMsg: string;
  };
  secondaryCta: {
    label: string;
    targetSectionId: string;
  };
  statsCard: {
    title: string;
    metrics: Array<{
      value: number | string;
      suffix?: string;
      label: string;
      subtext?: string;
    }>;
    teacherNote: string;
  };
}

export interface ResultItem {
  id: string;
  studentName: string;
  exam: 'JEE Main' | 'JEE Advanced' | 'NEET' | 'Class 10 CBSE' | 'Class 12 Board';
  rankOrScore: string;
  year: string;
  batchType: string;
  featuredSize: 'regular' | 'large' | 'tall';
  quote?: string;
}

export interface CourseBatch {
  id: string;
  name: string;
  classGrade: 'Class 9' | 'Class 10' | 'Class 11' | 'Class 12' | 'Dropper';
  stream: 'Foundation' | 'PCM' | 'PCB';
  targetExams: string[];
  duration: string;
  timings: string;
  seatLimit: number;
  seatsRemaining: number;
  annualFee: number;
  installmentOption: string;
  startDate: string;
  mode: 'Offline Classroom + App Access';
}

export interface TeachingStep {
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  teacherMarginNote: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  subject: 'Physics' | 'Chemistry' | 'Mathematics' | 'Biology';
  education: string; // e.g. "B.Tech, IIT Kanpur"
  experienceYears: number;
  exExperience: string; // e.g. "Ex-Allen Kota, 12+ yrs"
  teachingPhilosophy: string;
  imageBrief: string;
}

export interface WeeklyAnalyticsMetric {
  title: string;
  summary: string;
  scoreTrend: Array<{ testWeek: string; studentScore: number; batchAverage: number }>;
  chapterStrengths: Array<{ topic: string; masteryPercentage: number; status: 'Strong' | 'Needs Revision' }>;
  parentReportFeatures: string[];
}

export interface ScholarshipSlab {
  testScoreRange: string;
  scholarshipPercentage: number;
  availableSeats: number;
  condition: string;
}

export interface TestimonialItem {
  id: string;
  authorName: string;
  role: 'Student' | 'Parent';
  studentClassOrBatch: string;
  quote: string;
  handwrittenDate: string;
  verifiedStatus: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Batches' | 'Demo' | 'Fees' | 'Doubts' | 'Hostel' | 'App';
}

export interface SiteContent {
  contact: ContactInfo;
  announcement: AnnouncementBarData;
  hero: HeroData;
  results: ResultItem[];
  courses: CourseBatch[];
  method: TeachingStep[];
  faculty: FacultyMember[];
  analytics: WeeklyAnalyticsMetric;
  scholarship: {
    title: string;
    description: string;
    date: string;
    timings: string;
    venue: string;
    slabs: ScholarshipSlab[];
  };
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
  footer: {
    punchline: string;
    subline: string;
    disclaimer: string;
  };
}
```

## 2. Dynamic WhatsApp Prefill Helper
```typescript
export function buildWhatsAppUrl(phone: string, text: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(text.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}
```

## 3. Strict Image Brief Rules
Whenever visual media is required, `next/image` placeholder boxes will render with a visible structural wireframe, accompanied by an exact real-world photographic brief comment, e.g.:
```tsx
{/* 
  IMAGE BRIEF:
  Subject: Candid Indian classroom at Lakshya Academy, Kanpur.
  Setting: Teacher writing Physics derivations with chalk/marker, students taking notes in spiral notebooks.
  Lighting: Natural daylight from large windows, authentic, no corporate smiles, no staged thumbs-up.
  Dimensions: 800x600px.
*/}
```
