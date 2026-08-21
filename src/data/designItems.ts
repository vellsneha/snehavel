export type DesignItem = {
  id: string;
  title: string;
  /** Case-study header headline; kept distinct from overviewTitle. */
  headline: string;
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
    headline: "Making irregular income easier to trust",
    date: "2026",
    description:
      "A redesign that turns messy freelance deposits into one clear score, useful for freelancers, and for the banks reviewing them.",
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
    headline: "A simple way to find food help",
    date: "2025",
    description:
      "Built for people who need a food bank or want to volunteer, in plain language, over chat or a phone call.",
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
    overviewTitle: "Food bank matching without friction",
    overview:
      "People come to find a food bank or volunteer. We kept the language plain, shipped English and Spanish, and added a phone call agent for anyone who would rather talk than tap.",
    projectId: "feedforward",
    projectLabel: "FeedForward",
  },
  {
    id: "d4",
    title: "AdVantage",
    headline: "Helping students find their people",
    date: "2024",
    description:
      "A welcoming marketing site that explains AdVantage quickly and gives students and communities an easy way to join.",
    hue: 280,
    role: "Web Designer",
    timeline: "2024",
    team: "AdVantage founding team",
    skills: [
      "Social Interaction Design",
      "Emotional Design",
      "User Motivation Patterns",
    ],
    overviewTitle: "Students and communities, one pitch",
    overview:
      "Students needed peers; communities needed discovery. The site had to explain AdVantage in seconds, feel bold for tier 3 campuses, and give both audiences a short path to join.",
  },
  {
    id: "d3",
    title: "Advantage Ecosystem",
    headline: "An easier way to run student groups",
    date: "2025",
    description:
      "A shared place for discovery, events, and roles, so communities do not have to live only inside WhatsApp threads.",
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
    overviewTitle: "Roles instead of endless threads",
    overview:
      "WhatsApp and Discord were fine for talk, not for discovery or roles. Members, leaders, and managers each needed their own view, so the MVP covered dashboards, events, forums, and profiles.",
  },
  {
    id: "d5",
    title: "TASK app",
    headline: "Work tickets that feel easy on a phone",
    date: "2022",
    ndaProtected: true,
    description:
      "A mobile app that replaced a slow desktop tool, so people could update and track tickets more easily.",
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
    overviewTitle: "Internal tools still need care",
    overview:
      "I learned that internal tools still need care. The biggest shift was moving dense ticket workflows into something fast enough for a phone, without making people think harder to get basic work done.",
  },
  {
    id: "d6",
    title: "NFC Solutions",
    headline: "A company website that makes sense fast",
    date: "2022",
    ndaProtected: true,
    description:
      "A clear brand site for NFC: services, proof, and contact in a path people can follow without getting lost.",
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
    headline: "Explaining one service, simply",
    date: "2022",
    ndaProtected: true,
    description:
      "A focused marketing page for PULSE that tells the story quickly, without repeating everything on the main NFC site.",
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
