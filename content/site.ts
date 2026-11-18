export interface ContactInfo {
  name: string;
  tagline: string;
  location: string;
  address: string;
  landmark: string;
  city: string;
  pin: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string;
  operatingHours: string;
  email: string;
}

export interface AnnouncementBarData {
  tag: string;
  text: string;
  highlightText: string;
  subtext: string;
  eventDate: string; // ISO date format for live countdown
  ctaText: string;
  whatsappMessage: string;
}

export interface HeroMetric {
  value: number;
  suffix: string;
  label: string;
  subtext: string;
  teacherMark: string;
}

export interface HeroData {
  badge: string;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix: string;
  subheadline: string;
  primaryCta: {
    label: string;
    whatsappMessage: string;
  };
  secondaryCta: {
    label: string;
    anchorTarget: string;
  };
  statsBlock: {
    title: string;
    termBadge: string;
    metrics: HeroMetric[];
    teacherMarginNote: string;
  };
}

export interface TopperResult {
  id: string;
  name: string;
  exam: string;
  rankOrScore: string;
  year: string;
  batch: string;
  achievementBadge: string;
  quote?: string;
  size: 'compact' | 'medium' | 'featured';
  rotation: string; // e.g. "-rotate-1"
}

export interface CourseBatchItem {
  id: string;
  name: string;
  targetExam: 'JEE Main & Adv' | 'NEET UG' | 'Foundation & Olympiads';
  classGrade: 'Class 9' | 'Class 10' | 'Class 11' | 'Class 12' | 'Dropper';
  duration: string;
  timings: string;
  days: string;
  batchSizeLimit: number;
  seatsFilled: number;
  feeAnnual: string;
  installmentOption: string;
  features: string[];
  mode: string;
}

export interface TeachingStep {
  number: string;
  title: string;
  hindiLabel: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  teacherMarginNote: string;
  pageLineNumber: string;
}

export interface FacultyTeacher {
  id: string;
  name: string;
  subject: string;
  background: string;
  experienceYears: number;
  formerInstitute: string;
  philosophy: string;
  specialtyChapters: string[];
  imageBrief: string;
}

export interface WeeklyAnalyticsData {
  headline: string;
  subline: string;
  studentNameSample: string;
  examTargetSample: string;
  testWeeks: Array<{
    week: string;
    score: number;
    batchAvg: number;
    highest: number;
  }>;
  chapterStrengths: Array<{
    chapter: string;
    mastery: number;
    status: 'Mastered' | 'Re-test Due' | 'In Progress';
    subject: string;
  }>;
  parentAppHighlights: Array<{
    title: string;
    description: string;
  }>;
}

export interface ScholarshipSlab {
  rankRange: string;
  discountPercentage: number;
  criteria: string;
  seatsCap: number;
  note: string;
}

export interface ScholarshipData {
  badge: string;
  title: string;
  subtitle: string;
  testDateDisplay: string;
  testTimings: string;
  venue: string;
  registrationFee: string;
  slabs: ScholarshipSlab[];
  formFields: {
    studentNamePlaceholder: string;
    classOptions: string[];
    schoolPlaceholder: string;
    parentPhonePlaceholder: string;
  };
}

export interface FeeRow {
  courseName: string;
  classGrade: string;
  annualFee: string;
  installments: string;
  materialIncluded: boolean;
  testSeriesIncluded: boolean;
  appAccessIncluded: boolean;
}

export interface TestimonialVoice {
  id: string;
  authorName: string;
  authorRole: 'Parent' | 'Student';
  studentBatch: string;
  schoolOrCollege: string;
  quote: string;
  handwrittenNote: string;
  dateStamp: string;
  tilt: string;
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
  tag: string;
}

export interface SiteContent {
  contact: ContactInfo;
  announcement: AnnouncementBarData;
  hero: HeroData;
  results: TopperResult[];
  courses: CourseBatchItem[];
  teachingMethod: TeachingStep[];
  faculty: FacultyTeacher[];
  analytics: WeeklyAnalyticsData;
  scholarship: ScholarshipData;
  fees: {
    headline: string;
    subline: string;
    table: FeeRow[];
    noHiddenChargesPledge: string[];
  };
  testimonials: TestimonialVoice[];
  faqs: FaqEntry[];
  footer: {
    wordmarkLine: string;
    subline: string;
    freeDemoCallout: string;
    quickLinks: Array<{ label: string; href: string }>;
    legalDisclaimer: string;
  };
}

export const siteContent: SiteContent = {
  contact: {
    name: "Lakshya Academy",
    tagline: "Serious IIT-JEE, NEET & Foundation Classroom Preparation",
    location: "Kakadeo Coaching Hub, Kanpur",
    address: "Plot 14-B, Opposite Geeta Nagar Crossing, Main Coaching Belt, Kakadeo",
    landmark: "Near Central Bank & Gurudwara Road",
    city: "Kanpur, Uttar Pradesh",
    pin: "208025",
    phoneDisplay: "+91 90000 00000",
    phoneRaw: "+919000000000",
    whatsappNumber: "+919000000000",
    operatingHours: "Monday to Saturday: 8:00 AM – 8:00 PM | Sunday: 8:30 AM – 2:00 PM",
    email: "admissions@lakshya-kanpur.in",
  },

  announcement: {
    tag: "UPCOMING TEST",
    text: "Sunday Scholarship & Batch Diagnostic Test",
    highlightText: "This Sunday, 9:00 AM",
    subtext: "Kakadeo Offline Campus. Up to 100% tuition fee waiver based on merit.",
    eventDate: "2026-11-22T09:00:00+05:30",
    ctaText: "Register on WhatsApp",
    whatsappMessage: "Namaste Lakshya Academy. I want to register my ward for the Sunday 9 AM Scholarship Test at Kakadeo campus. Student Name: ",
  },

  hero: {
    badge: "ADMISSIONS OPEN 2026–27 • KANPUR OFFLINE CLASSROOMS",
    headlinePrefix: "Padhai ka matlab,",
    headlineHighlight: "clarity",
    headlineSuffix: "hona chahiye.",
    subheadline: "Formula rattne se rank nahi banti. Concept samajhna padta hai, aur galati pe red pen lagana padta hai. Small 40-student batches for JEE, NEET & Foundation with daily teacher doubt clearing.",
    primaryCta: {
      label: "Book a Free Demo Class",
      whatsappMessage: "Hello Lakshya Academy, I want to book a free demo class for Class [Enter Class] JEE/NEET offline batch in Kanpur. My name is: ",
    },
    secondaryCta: {
      label: "Sunday Scholarship Test",
      anchorTarget: "#scholarship",
    },
    statsBlock: {
      title: "BATCH PROGRESSION REPORT CARD",
      termBadge: "Session 2024-25 Audit",
      metrics: [
        {
          value: 94,
          suffix: "%",
          label: "Score Improvement",
          subtext: "Average test score delta measured over first 90 days in batch.",
          teacherMark: "Verified ✓",
        },
        {
          value: 38,
          suffix: "",
          label: "Students in Top 500 Rank",
          subtext: "JEE Main & NEET selections across Kakadeo day-scholar batches.",
          teacherMark: "Authentic Kanpur Ranks",
        },
        {
          value: 40,
          suffix: " max",
          label: "Students Per Batch",
          subtext: "Strict cap so every student's notebook gets checked personally.",
          teacherMark: "No 200-seat crowd",
        },
      ],
      teacherMarginNote: "Har bache ki copy check hoti hai. Yahan koi piche nahi chhoot-ta.",
    },
  },

  results: [
    {
      id: "res-1",
      name: "Aarav Srivastava",
      exam: "JEE Advanced 2025",
      rankOrScore: "AIR 142",
      year: "2025",
      batch: "Two-Year Classroom (PCM)",
      achievementBadge: "IIT Bombay CSE",
      quote: "Sir ne Rotational Motion ke 30-page handwritten notes banwaaye the. Wahi se 4 sawal sidhe crack hue.",
      size: "featured",
      rotation: "-rotate-1",
    },
    {
      id: "res-2",
      name: "Sneha Bajpai",
      exam: "NEET UG 2025",
      rankOrScore: "705 / 720",
      year: "2025",
      batch: "Lakshya Sankalp Dropper (PCB)",
      achievementBadge: "KGMU Lucknow",
      quote: "Physics me 90 se 165 score jump hua because weekly error diary compulsory thi.",
      size: "medium",
      rotation: "rotate-1",
    },
    {
      id: "res-3",
      name: "Utkarsh Mishra",
      exam: "JEE Main 2025",
      rankOrScore: "99.88 %ile",
      year: "2025",
      batch: "Class 12 Target Batch",
      achievementBadge: "IIT Kanpur Mech",
      size: "compact",
      rotation: "rotate-0",
    },
    {
      id: "res-4",
      name: "Rhea Tiwari",
      exam: "Class 10 CBSE Boards",
      rankOrScore: "98.4%",
      year: "2025",
      batch: "Foundation Shikhar (9-10)",
      achievementBadge: "State Topper Zone",
      quote: "NTSE stage-1 and board science done with zero pressure.",
      size: "compact",
      rotation: "-rotate-1",
    },
    {
      id: "res-5",
      name: "Devendra Verma",
      exam: "NEET UG 2024",
      rankOrScore: "AIR 389",
      year: "2024",
      batch: "Two-Year NEET Medical",
      achievementBadge: "GSVM Kanpur",
      size: "medium",
      rotation: "rotate-1",
    },
    {
      id: "res-6",
      name: "Kushagra Shukla",
      exam: "JEE Advanced 2024",
      rankOrScore: "AIR 411",
      year: "2024",
      batch: "Lakshya Super-30 Kakadeo",
      achievementBadge: "IIT Roorkee Electrical",
      size: "compact",
      rotation: "-rotate-1",
    },
  ],

  courses: [
    {
      id: "course-1",
      name: "Lakshya Shikhar Foundation (Class 9)",
      targetExam: "Foundation & Olympiads",
      classGrade: "Class 9",
      duration: "1 Year Academic Program",
      timings: "4:00 PM – 6:45 PM",
      days: "Mon, Wed, Fri",
      batchSizeLimit: 35,
      seatsFilled: 29,
      feeAnnual: "₹54,000",
      installmentOption: "3 Easy Installments (₹18,000 x 3)",
      features: ["Strong Math-Science foundation", "Olympiad & NTSE prep", "Weekend doubt room"],
      mode: "Offline Classroom + App Recorded Library",
    },
    {
      id: "course-2",
      name: "Lakshya Pratibha Foundation (Class 10)",
      targetExam: "Foundation & Olympiads",
      classGrade: "Class 10",
      duration: "1 Year Board + Early JEE/NEET",
      timings: "4:00 PM – 7:00 PM",
      days: "Tue, Thu, Sat",
      batchSizeLimit: 35,
      seatsFilled: 31,
      feeAnnual: "₹58,000",
      installmentOption: "3 Easy Installments (₹20,000 + ₹19,000 x 2)",
      features: ["100% NCERT mastery", "Early 11th bridge modules", "Weekly subjective mock tests"],
      mode: "Offline Classroom + App Recorded Library",
    },
    {
      id: "course-3",
      name: "JEE Pinnacle (Class 11 PCM)",
      targetExam: "JEE Main & Adv",
      classGrade: "Class 11",
      duration: "2-Year Integrated Classroom",
      timings: "8:00 AM – 1:30 PM",
      days: "Mon to Sat",
      batchSizeLimit: 40,
      seatsFilled: 34,
      feeAnnual: "₹92,000 / yr",
      installmentOption: "Quarterly Installments available",
      features: ["Mechanics to Calculus mastery", "Daily Problem Practice Sheets (DPPS)", "Weekly OMR Testing"],
      mode: "Offline Classroom + App Recorded Library",
    },
    {
      id: "course-4",
      name: "NEET Sanjeevani (Class 11 PCB)",
      targetExam: "NEET UG",
      classGrade: "Class 11",
      duration: "2-Year Medical Program",
      timings: "8:00 AM – 1:30 PM",
      days: "Mon to Sat",
      batchSizeLimit: 40,
      seatsFilled: 36,
      feeAnnual: "₹88,000 / yr",
      installmentOption: "Quarterly Installments available",
      features: ["Line-by-line NCERT Biology dissecting", "Physics numerical workshops", "Daily chemistry quizzes"],
      mode: "Offline Classroom + App Recorded Library",
    },
    {
      id: "course-5",
      name: "JEE Vijayi (Class 12 + Revision PCM)",
      targetExam: "JEE Main & Adv",
      classGrade: "Class 12",
      duration: "1 Year High-Intensity Program",
      timings: "2:30 PM – 7:30 PM",
      days: "Mon to Sat",
      batchSizeLimit: 40,
      seatsFilled: 37,
      feeAnnual: "₹96,000",
      installmentOption: "2 Installments (₹50,000 + ₹46,000)",
      features: ["Syllabus completion by October", "Full 11th parallel revision", "15 All-India pattern CBT tests"],
      mode: "Offline Classroom + App Recorded Library",
    },
    {
      id: "course-6",
      name: "Lakshya Sankalp Dropper Batch (JEE / NEET Repeater)",
      targetExam: "JEE Main & Adv",
      classGrade: "Dropper",
      duration: "10-Month Intensive Rank Booster",
      timings: "9:00 AM – 4:00 PM (Daily)",
      days: "Mon to Sat + Sun Mock",
      batchSizeLimit: 40,
      seatsFilled: 38,
      feeAnnual: "₹98,000",
      installmentOption: "Installment option with post-dated cheques",
      features: ["Complete 11th & 12th rigorous re-run", "Mandatory daily self-study library hours", "1-on-1 mentor assignment"],
      mode: "Offline Classroom + App Recorded Library",
    },
  ],

  teachingMethod: [
    {
      number: "01",
      title: "First-Principle Concepts",
      hindiLabel: "Buniyaad",
      subtitle: "No memorizing shortcuts before derivation.",
      description: "Every topic begins on the blackboard with fundamental derivations. Whether it is Gauss’s Law or Organic reaction mechanisms, students write full steps in their register before attempting objective tricks.",
      keyPoints: [
        "Physical blackboard teaching with structured lecture registers",
        "Questions framed to challenge common conceptual misconceptions",
        "Direct teacher questioning during lectures to check active attention",
      ],
      teacherMarginNote: "Formula yaad rakhna aasaan hai, apply karna tab aayega jab origin pata ho.",
      pageLineNumber: "Page 12 / Step 1",
    },
    {
      number: "02",
      title: "Targeted Daily Practice (DPPS)",
      hindiLabel: "Riyaaz",
      subtitle: "30 curated questions every single night.",
      description: "Homework is not a 100-page book dump. Every day after class, students receive a 30-question graded sheet divided into Level 1 (speed & accuracy) and Level 2 (multi-concept JEE/NEET questions).",
      keyPoints: [
        "Curated specifically for that morning's lecture content",
        "Mix of 20 direct concept builders and 10 brain-twister problems",
        "Submitted and stamped by the teacher next morning",
      ],
      teacherMarginNote: "Rose 30 sawal bina phone dekhe ban gaye, to selection rokna namumkin hai.",
      pageLineNumber: "Page 13 / Step 2",
    },
    {
      number: "03",
      title: "Sunday OMR / CBT Rigor",
      hindiLabel: "Pariksha",
      subtitle: "Real exam simulation with negative marking analysis.",
      description: "Every Sunday, students sit for a timed 3-hour test in exam hall conditions. OMR sheets are scanned same-evening, generating an objective error log showing where marks were lost.",
      keyPoints: [
        "Strict penalty tracking for wild guessing and silly arithmetic slips",
        "Automated parent SMS report by 8:00 PM Sunday evening",
        "Rank lists displayed with percentile and subject-wise cutoffs",
      ],
      teacherMarginNote: "Negative marking se darna nahi, calculate karna sikhna hai.",
      pageLineNumber: "Page 14 / Step 3",
    },
    {
      number: "04",
      title: "Same-Day Doubt Clearing Cell",
      hindiLabel: "Nidaan",
      subtitle: "A doubt left overnight becomes an exam failure.",
      description: "Between 2:00 PM and 6:00 PM every day, senior subject faculties sit in the Kakadeo study room. Any student can walk up with their rough register and get their calculation debugged face-to-face.",
      keyPoints: [
        "No teaching assistants (TAs); original faculty answers doubts",
        "Dedicated silent study cubicles with reference book library",
        "Mobile app recorded backups available if a lecture was missed due to illness",
      ],
      teacherMarginNote: "Class ke baad 15 minute teacher se baat kar li, to doubt crystal clear ho gaya.",
      pageLineNumber: "Page 15 / Step 4",
    },
  ],

  faculty: [
    {
      id: "fac-1",
      name: "Er. Alok Sharma",
      subject: "Physics (JEE Adv & NEET)",
      background: "B.Tech, IIT Kanpur (Mechanical)",
      experienceYears: 16,
      formerInstitute: "Ex-Senior Faculty Allen Kota & Bansal Classes",
      philosophy: "Physics imagination se chalti hai. Mechanics tab tak nahi aati jab tak body ka FBD khud draw na karo.",
      specialtyChapters: ["Rotational Dynamics", "Electrodynamics", "Fluid Mechanics"],
      imageBrief: "Er. Alok Sharma standing by blackboard explaining a pendulum vector diagram. Chalk in hand, focused, mature educator, Kanpur classroom backdrop.",
    },
    {
      id: "fac-2",
      name: "Dr. Pratibha Srivastava",
      subject: "Botany & Zoology (NEET Specialist)",
      background: "MBBS, GSVM Medical College Kanpur",
      experienceYears: 13,
      formerInstitute: "Ex-Aakash Kanpur Academic Head",
      philosophy: "NCERT ki har diagram aur summary line me se 4 sawal nikalte hain. Ratto mat, visualize karo.",
      specialtyChapters: ["Human Physiology", "Genetics & Inheritance", "Ecology"],
      imageBrief: "Dr. Pratibha holding an NCERT Biology book, pointing to a cell diagram on board. Candid and encouraging teaching stance.",
    },
    {
      id: "fac-3",
      name: "Er. Vikramaditya Gupta",
      subject: "Mathematics (Calculus & Coordinate)",
      background: "B.Tech, IIT Roorkee",
      experienceYears: 14,
      formerInstitute: "Ex-FIITJEE Kanpur & Delhi",
      philosophy: "Maths is a sport. Pen chalana padta hai. Rough register bharo, graph draw karo, tab rank aati hai.",
      specialtyChapters: ["Definite Integration", "Coordinate Geometry", "Probability & Matrices"],
      imageBrief: "Er. Vikramaditya plotting a quadratic curve on graph board, engaging student queries in an interactive Kakadeo seminar room.",
    },
    {
      id: "fac-4",
      name: "Dr. Anirudh Dixit",
      subject: "Physical & Organic Chemistry",
      background: "Ph.D., IIT BHU Chemistry",
      experienceYears: 15,
      formerInstitute: "Ex-Resonance Kota",
      philosophy: "Organic reaction mechanism ratne ki cheez nahi hai. Electron movement samajh aa gaya toh sawal 20 second me solve hoga.",
      specialtyChapters: ["Reaction Mechanisms", "Thermodynamics", "Chemical Bonding"],
      imageBrief: "Dr. Anirudh drawing benzene ring resonance structures on whiteboard with red and black markers, looking directly at student desk.",
    },
  ],

  analytics: {
    headline: "Weekly Testing & Progress Analytics",
    subline: "Parents don't need to guess how their child is performing. We provide objective data every Sunday evening.",
    studentNameSample: "Aryan Saxena",
    examTargetSample: "Target JEE Advanced 2026 (Batch PCM-11)",
    testWeeks: [
      { week: "Week 1", score: 142, batchAvg: 120, highest: 265 },
      { week: "Week 3", score: 168, batchAvg: 135, highest: 272 },
      { week: "Week 5", score: 185, batchAvg: 142, highest: 280 },
      { week: "Week 7", score: 215, batchAvg: 154, highest: 288 },
      { week: "Week 9", score: 242, batchAvg: 162, highest: 294 },
    ],
    chapterStrengths: [
      { chapter: "Kinematics & Newton's Laws", mastery: 92, status: "Mastered", subject: "Physics" },
      { chapter: "Chemical Bonding & Molecular Structure", mastery: 86, status: "Mastered", subject: "Chemistry" },
      { chapter: "Sequences & Quadratic Equations", mastery: 88, status: "Mastered", subject: "Mathematics" },
      { chapter: "Rotational Motion (Torque & MOI)", mastery: 64, status: "Re-test Due", subject: "Physics" },
      { chapter: "Thermodynamics & Thermochemistry", mastery: 74, status: "In Progress", subject: "Chemistry" },
    ],
    parentAppHighlights: [
      {
        title: "Immediate Sunday SMS & WhatsApp Report",
        description: "Exact marks breakdown, batch percentile, and attendance timestamp delivered by 8 PM every test day.",
      },
      {
        title: "Subject-wise Red Flag Alerts",
        description: "If marks drop below 60% in any chapter, an automated mentor check-in is scheduled the following Tuesday.",
      },
      {
        title: "Companion App with Recorded Class Backups",
        description: "Illness or school exams? All classroom lectures are archived in the Lakshya student app for 365 days.",
      },
    ],
  },

  scholarship: {
    badge: "LAKSHYA SCHOLARSHIP APTITUDE TEST (LSAT-2026)",
    title: "Earn Up to 100% Scholarship on Merit.",
    subtitle: "Financial background should never stop a hardworking student from Kanpur. Appear for our 90-minute offline aptitude test this Sunday.",
    testDateDisplay: "Sunday, 9:00 AM – 10:30 AM",
    testTimings: "Reporting Time: 8:30 AM",
    venue: "Lakshya Academy Campus, Opposite Geeta Nagar Crossing, Kakadeo, Kanpur",
    registrationFee: "₹0 (Completely Free for First 100 Applicants)",
    slabs: [
      {
        rankRange: "Top 3 Rankers",
        discountPercentage: 100,
        criteria: "Score ≥ 90% in LSAT",
        seatsCap: 5,
        note: "100% Tuition Fee Waived for Entire Year",
      },
      {
        rankRange: "Rank 4 to 15",
        discountPercentage: 50,
        criteria: "Score 80% – 89%",
        seatsCap: 15,
        note: "50% Tuition Fee Exemption",
      },
      {
        rankRange: "Rank 16 to 50",
        discountPercentage: 25,
        criteria: "Score 70% – 79%",
        seatsCap: 35,
        note: "25% Fee Deduction",
      },
      {
        rankRange: "Girls Merit Incentive",
        discountPercentage: 15,
        criteria: "Special grant for girl students across UP boards",
        seatsCap: 20,
        note: "Encouraging more women in STEM & Medicine",
      },
    ],
    formFields: {
      studentNamePlaceholder: "Student's Full Name",
      classOptions: ["Class 9 (Going to 10)", "Class 10 (Going to 11)", "Class 11 (Going to 12)", "Class 12 (Target/Dropper)"],
      schoolPlaceholder: "School Name (e.g. DPS Kalyanpur, BNSD Shiksha Niketan)",
      parentPhonePlaceholder: "Parent WhatsApp Number",
    },
  },

  fees: {
    headline: "Transparent Batch Fees. Zero Hidden Surcharges.",
    subline: "We believe parents deserve honest, straightforward fee structures without surprise GST additions or separate test series fees.",
    table: [
      {
        courseName: "Class 9 Foundation Shikhar",
        classGrade: "Class 9",
        annualFee: "₹54,000",
        installments: "3 installments of ₹18,000",
        materialIncluded: true,
        testSeriesIncluded: true,
        appAccessIncluded: true,
      },
      {
        courseName: "Class 10 Foundation Pratibha",
        classGrade: "Class 10",
        annualFee: "₹58,000",
        installments: "3 installments of ₹20,000 + ₹19,000 x 2",
        materialIncluded: true,
        testSeriesIncluded: true,
        appAccessIncluded: true,
      },
      {
        courseName: "Class 11 JEE Pinnacle (PCM)",
        classGrade: "Class 11",
        annualFee: "₹92,000",
        installments: "4 quarterly installments of ₹23,000",
        materialIncluded: true,
        testSeriesIncluded: true,
        appAccessIncluded: true,
      },
      {
        courseName: "Class 11 NEET Sanjeevani (PCB)",
        classGrade: "Class 11",
        annualFee: "₹88,000",
        installments: "4 quarterly installments of ₹22,000",
        materialIncluded: true,
        testSeriesIncluded: true,
        appAccessIncluded: true,
      },
      {
        courseName: "Class 12 JEE Vijayi / NEET Target",
        classGrade: "Class 12",
        annualFee: "₹96,000",
        installments: "2 installments of ₹50,000 + ₹46,000",
        materialIncluded: true,
        testSeriesIncluded: true,
        appAccessIncluded: true,
      },
      {
        courseName: "Dropper Ranker Batch (JEE / NEET)",
        classGrade: "Dropper",
        annualFee: "₹98,000",
        installments: "Flexible monthly PDC plan available",
        materialIncluded: true,
        testSeriesIncluded: true,
        appAccessIncluded: true,
      },
    ],
    noHiddenChargesPledge: [
      "All printed study modules and theory booklets included.",
      "Complete 30-week Sunday OMR Test Series included.",
      "Recorded lecture library access in Lakshya mobile app included.",
      "18% GST invoice provided on every payment receipt.",
    ],
  },

  testimonials: [
    {
      id: "test-1",
      authorName: "Dr. Rajeshwar Bajpai",
      authorRole: "Parent",
      studentBatch: "Father of Sneha (NEET 705/720, KGMU)",
      schoolOrCollege: "Medical Officer, Kanpur",
      quote: "Kota bhejne ka man banaya tha, par Kanpur me Lakshya ne jo personal care diya, wo bade institutes me 200 bacho ke batch me sambhav nahi tha. Har mahine Alok Sir ka phone aata tha Sneha ke weak areas discuss karne.",
      handwrittenNote: "Parent's heartfelt feedback verified ✓",
      dateStamp: "July 2025",
      tilt: "-rotate-1",
    },
    {
      id: "test-2",
      authorName: "Aarav Srivastava",
      authorRole: "Student",
      studentBatch: "JEE Advanced AIR 142 • IIT Bombay",
      schoolOrCollege: "Alumnus, Seth Anandram Jaipuria Kanpur",
      quote: "Kakadeo me coaching ka matlab aksar crowd hota hai. Yahan sir ne hamare 35 bacho ke batch ko family ki tarah guide kiya. Jab bhi numerical me atak jaate the, doubt room me seedha sir se milte the.",
      handwrittenNote: "Original student review ✓",
      dateStamp: "June 2025",
      tilt: "rotate-1",
    },
    {
      id: "test-3",
      authorName: "Mrs. Meenakshi Tiwari",
      authorRole: "Parent",
      studentBatch: "Mother of Rhea (Class 10 CBSE 98.4%)",
      schoolOrCollege: "Teacher, Swaroop Nagar Kanpur",
      quote: "Foundation stage me sabse zaroori hai ki bache ka science se dar khatam ho. Lakshya ke teachers ne Rhea ke maths basics itne strong kar diye ki ab wo 11th JEE prep bina kisi ghabrahat ke kar rahi hai.",
      handwrittenNote: "Parent verified ✓",
      dateStamp: "August 2025",
      tilt: "rotate-0",
    },
    {
      id: "test-4",
      authorName: "Utkarsh Mishra",
      authorRole: "Student",
      studentBatch: "JEE Main 99.88 %ile • IIT Kanpur",
      schoolOrCollege: "Alumnus, BNSD Shiksha Niketan",
      quote: "Test series ka negative marking analysis game changer tha. Pehle mere 30 number sirf calculation slips me katte the. Error diary system se negative marks 60 se ghat kar 8 par aa gaye.",
      handwrittenNote: "Score Jump Record ✓",
      dateStamp: "May 2025",
      tilt: "-rotate-1",
    },
    {
      id: "test-5",
      authorName: "Sanjay Dixit",
      authorRole: "Parent",
      studentBatch: "Father of Aditya (Class 11 NEET PCB Batch)",
      schoolOrCollege: "Businessman, Govind Nagar Kanpur",
      quote: "Fee structure bilkul saaf tha. Koi hidden charge nahi maanga baad me. Har Sunday shaam ko mere WhatsApp par report card aa jaata hai, jisse pata rehta hai beta regular padh raha hai.",
      handwrittenNote: "Parent verified ✓",
      dateStamp: "October 2025",
      tilt: "rotate-1",
    },
  ],

  faqs: [
    {
      id: "faq-1",
      question: "Ek batch me kitne bache hote hain? (What is the exact batch size?)",
      answer: "We strictly limit our batches to 35-40 students maximum. Unlike mass institutes with 150-200 students in a hall, our teachers know each student by name, monitor their homework register daily, and track their test scores individually.",
      tag: "Batches",
    },
    {
      id: "faq-2",
      question: "Demo class kaise book karein aur kya iske charges hain? (Is demo class really free?)",
      answer: "Pehla class bilkul free hai. You can attend 2 consecutive days of offline lectures in your respective subject stream at our Kakadeo campus. There are zero registration fees or obligations. Simply tap 'Book Free Demo' on WhatsApp to reserve your bench.",
      tag: "Demo",
    },
    {
      id: "faq-3",
      question: "Agar student ko padhai pasand na aaye toh kya fee refund hoti hai? (Refund Policy)",
      answer: "Yes. If a student decides to discontinue within 15 days of batch commencement, we refund the tuition fee after deducting a nominal registration charge. Transparent written policies are handed over during admission.",
      tag: "Fees",
    },
    {
      id: "faq-4",
      question: "Doubt sessions ka process kya rehta hai? (How does doubt clearing work?)",
      answer: "Every day between 2:00 PM and 6:00 PM, subject faculties sit in the Kakadeo study room. Students bring their rough registers and question sheets directly to the faculty desk. We do not use inexperienced junior assistants for doubt clearing.",
      tag: "Doubts",
    },
    {
      id: "faq-5",
      question: "Study material me kya-kya milta hai? (What study material is provided?)",
      answer: "Students receive printed topic modules, Daily Problem Practice Sheets (DPPS), past 10 years solved chapter-wise JEE/NEET papers, and formula revision handbooks. All material is included in the declared course fee.",
      tag: "Material",
    },
    {
      id: "faq-6",
      question: "Outstation students ke liye PG ya hostel ki suvidha hai? (Hostel & PG Assistance)",
      answer: "Yes, Kakadeo is Uttar Pradesh's prime student educational hub. We have verified partnerships with reliable student hostels and PGs within 5-10 minutes walking distance of our campus, with CCTV security, hygienic mess, and quiet study environments.",
      tag: "Hostel",
    },
    {
      id: "faq-7",
      question: "Agar koi class miss ho jaaye toh kya backup milta hai? (Online App Access)",
      answer: "Yes! Every classroom lecture is recorded with multi-angle HD cameras and uploaded to the Lakshya Student App within 6 hours. Students have 24/7 access to review missed concepts, revise difficult derivations, or re-watch problem solutions.",
      tag: "App",
    },
  ],

  footer: {
    wordmarkLine: "LAKSHYA ACADEMY KANPUR",
    subline: "Class 9-10 Foundation • Class 11-12 PCM / PCB • JEE Main & Advanced • NEET UG",
    freeDemoCallout: "Pehla class free hai. Aayiye, Kakadeo campus par padhai ka standard dekhiye.",
    quickLinks: [
      { label: "Book Free Demo", href: "#demo" },
      { label: "Sunday Scholarship Test", href: "#scholarship" },
      { label: "Class 9-10 Foundation", href: "#courses" },
      { label: "JEE Main & Advanced", href: "#courses" },
      { label: "NEET Medical Preparation", href: "#courses" },
      { label: "Weekly Progress System", href: "#analytics" },
      { label: "Transparent Fee Structure", href: "#fees" },
    ],
    legalDisclaimer: "Lakshya Academy is an independent classroom coaching institute based in Kanpur, UP. All selections and ranks listed are verified from our classroom students.",
  },
};
