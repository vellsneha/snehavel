export type DesignItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  hue: number;
  role: string;
  timeline: string;
  team: string;
  skills: string[];
  overviewTitle: string;
  overview: string;
  ndaProtected?: boolean;
  projectId?: string;
  projectLabel?: string;
  readMoreHref?: string;
  readMoreLabel?: string;
};

export const designItems: DesignItem[] = [
  {
    id: "d1",
    title: "Freelancer dashboard",
    date: "2026",
    description:
      "A dashboard that turns freelancer income patterns into a credibility score banks can actually use.",
    hue: 38,
    role: "Product Designer",
    timeline: "2025 to 2026",
    team: "Santhi, Afaan, Mohneet, Me",
    skills: [
      "Behavioral Data Visualization",
      "Dashboard Information Density",
      "Decision Centered UX",
      "Data Interpretation Interfaces",
    ],
    overviewTitle: "A credit signal for irregular income",
    overview:
      "Banks usually ignore freelancers because the deposits look messy. FinGraph turns stability, client mix, and runway into one score, with the charts to back it up.",
    projectId: "fingraph",
    projectLabel: "FinGraph",
    readMoreHref: "https://devpost.com/software/fingraph",
    readMoreLabel: "Read more on Devpost",
  },
  {
    id: "d2",
    title: "FeedForward",
    date: "2025",
    description:
      "An accessible product that connects surplus food with people who need it, over chat or a phone call.",
    hue: 168,
    role: "Product Designer",
    timeline: "2025",
    team: "Nithin, Shifa, Swapnita, Me",
    skills: [
      "Accessibility First Design",
      "AI Assisted Interaction Design",
      "Simplified Communication Systems",
      "Trust and Clarity in UX",
    ],
    overviewTitle: "Food matching without friction",
    overview:
      "People come to find a food bank or volunteer. We kept the language plain, shipped English and Spanish, and added a phone call agent for anyone who would rather talk than tap.",
    projectId: "feedforward",
    projectLabel: "FeedForward",
  },
  {
    id: "d4",
    title: "AdVantage",
    date: "2024",
    description:
      "The marketing site for AdVantage, meant to pull tier 3 students and communities into one network.",
    hue: 280,
    role: "Web Designer",
    timeline: "2024",
    team: "AdVantage founding team",
    skills: [
      "Social Interaction Design",
      "Emotional Design",
      "User Motivation Patterns",
    ],
    overviewTitle: "A front door for campus communities",
    overview:
      "Students needed peers; communities needed discovery. The site had to explain AdVantage in seconds, feel bold for tier 3 campuses, and give both audiences a short path to join.",
  },
  {
    id: "d3",
    title: "Advantage Ecosystem",
    date: "2025",
    description:
      "A role based community platform for student groups, built for what WhatsApp and Discord never handled well.",
    hue: 210,
    role: "Product Designer",
    timeline: "2024 to 2025",
    team: "Student communities pilot group",
    skills: [
      "Community Management Systems",
      "Role Based Experience Design",
      "Interaction Design",
      "User Journey Mapping",
    ],
    overviewTitle: "Community ops beyond group chats",
    overview:
      "WhatsApp and Discord were fine for talk, not for discovery or roles. Members, leaders, and managers each needed their own view — so the MVP covered dashboards, events, forums, and profiles.",
  },
  {
    id: "d5",
    title: "TASK app",
    date: "2022",
    ndaProtected: true,
    description:
      "A mobile first ticket app that replaced NFC’s slow legacy web tool for internal work tracking.",
    hue: 12,
    role: "Product Designer",
    timeline: "2022",
    team: "NFC, mobile product team",
    skills: [
      "Mobile First Design",
      "Workflow Simplification",
      "Task Prioritization Patterns",
      "Cross Platform Consistency",
      "Microinteraction Thinking",
    ],
    overviewTitle: "Tickets that fit a phone",
    overview:
      "I learned that internal tools still need care. The biggest shift was moving dense ticket workflows into something fast enough for a phone, without making people think harder to get basic work done.",
  },
  {
    id: "d6",
    title: "NFC Solutions",
    date: "2022",
    ndaProtected: true,
    description:
      "The enterprise brand site for NFC, covering services, client work, and products in one place.",
    hue: 195,
    role: "UI UX Designer",
    timeline: "2022",
    team: "UI UX team",
    skills: [
      "Information Architecture",
      "Visual Hierarchy",
      "Conversion Focused Layouts",
      "Brand Consistency",
      "Responsive Web Design",
    ],
    overviewTitle: "Services, then proof, then contact",
    overview:
      "I learned how much structure matters on a company website. The real job was not making it look polished, but helping people understand what NFC does, trust it quickly, and know where to go next.",
  },
  {
    id: "d7",
    title: "PULSE",
    date: "2022",
    ndaProtected: true,
    description:
      "Marketing website for PULSE, a service from NFC Solutions.",
    hue: 330,
    role: "UI UX Designer",
    timeline: "2022",
    team: "UI UX team",
    skills: [
      "Marketing Website Design",
      "Service Oriented Navigation",
      "Visual Storytelling",
      "Clean Interface Systems",
      "Responsive Web Design",
    ],
    overviewTitle: "A service page, not a product dump",
    overview:
      "I learned that marketing a service is mostly about restraint. Visitors needed a clear picture of PULSE fast, not every detail NFC already covered elsewhere.",
  },
];
