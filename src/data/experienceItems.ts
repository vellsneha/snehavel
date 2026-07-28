import { withBase } from "../utils/withBase";

export type ExperienceItem = {
  id: string;
  category: "work" | "more";
  period: string;
  role: string;
  company: string;
  companyUrl: string;
  logo: string;
  logoDark?: string;
  description: string;
};

export const experienceItems: ExperienceItem[] = [
  {
    id: "xfoundry-video",
    category: "more",
    period: "2025 - 2026",
    role: "Video Editing Intern",
    company: "xFoundry",
    companyUrl: "https://www.xfoundry.org/",
    logo: withBase("logos/xfoundry.png"),
    description:
      "xFoundry is all about transforming colleges into solution engines for real world challenges, and being part of that is really cool. My work has been on the content side, editing raw footage with AI at every step of the process, cuts, stabilization, color grading, motion graphics, all of it.",
  },
  {
    id: "tltc-math-coach",
    category: "work",
    period: "2025 - 2026",
    role: "Math Coach",
    company: "TLTC's Math Success Program at UMD",
    companyUrl: "https://tltc.umd.edu/students/math-success-program",
    logo: "https://framerusercontent.com/images/GSDsGMvqfy4ib2r896jBzkOK0.png?width=2400&height=2400",
    logoDark: withBase("logos/umd white logo.png?v=1"),
    description:
      "Helping UMD students navigate through Algebra, Calculus, Probability and Statistics. The goal was never to just solve problems for them, but to guide them enough that they could figure it out themselves.",
  },
  {
    id: "aap-math-tutor",
    category: "work",
    period: "2025",
    role: "Math Tutor",
    company: "Academic Achievement Programs at UMD",
    companyUrl: "https://aap.umd.edu/math-ied-sss.html",
    logo: "https://framerusercontent.com/images/GSDsGMvqfy4ib2r896jBzkOK0.png?width=2400&height=2400",
    logoDark: withBase("logos/umd white logo.png?v=1"),
    description:
      "Never thought I'd enjoy teaching this much. Working with undergrad students, their drive to learn kept me just as motivated. Math works differently for everyone, so figuring out how to explain it in a way that made sense to each person was the real challenge.",
  },
  {
    id: "umd-research",
    category: "work",
    period: "2024",
    role: "Research Assistant",
    company: "Department of Mathematics at UMD",
    companyUrl: "https://sites.google.com/prod/view/haizhaoyang/group?authuser=0",
    logo: "https://framerusercontent.com/images/GSDsGMvqfy4ib2r896jBzkOK0.png?width=2400&height=2400",
    logoDark: withBase("logos/umd white logo.png?v=1"),
    description:
      "A short exploration into Numerical Methods. Really interesting to see ML being used in a mathematical context, a FEX system that regenerates mathematical equations from data, pretty cool stuff. Learned a lot in just 3 months under Prof. Haizhao Yang.",
  },
  {
    id: "umd-grad",
    category: "work",
    period: "2024 - 2026",
    role: "Graduate Student, Applied Machine Learning",
    company: "University of Maryland",
    companyUrl: "https://cmns.umd.edu/",
    logo: "https://framerusercontent.com/images/GSDsGMvqfy4ib2r896jBzkOK0.png?width=2400&height=2400",
    description:
      "Machine Learning at UMD changed a lot for me. Pushed myself, learned a ton, met some really inspiring people, still going. Agents, RAG systems, and now deep into Computer Vision and ML Systems. Building something. Soon.",
  },
  {
    id: "frosthacks",
    category: "more",
    period: "2023 - 2024",
    role: "Organizer",
    company: "MLH FrostHacks",
    companyUrl: "https://unstop.com/hackathons/frost-hacks-institute-of-aeronautical-engineering-iare-hyderabad-836326",
    logo: "https://framerusercontent.com/images/3yYM6l5e6DfZTiQCgzCPazab94.png?width=782&height=781",
    description:
      "We just wanted to do something memorable before graduating, and this ended up being exactly that. What started as a plan for 150 participants quickly scaled to 300, and suddenly it was very real.",
  },
  {
    id: "venkys",
    category: "work",
    period: "2023 - 2024",
    role: "Software Engineer Intern",
    company: "Venkys.io (now ZenV Academy)",
    companyUrl: "https://www.linkedin.com/company/venkysio/",
    logo: "https://framerusercontent.com/images/h51s8dlJyjOVNzP13sDIsqO0eQ.png?width=298&height=258",
    description:
      "This internship had everything, coding, managing, and a whole lot of creative thinking. Worked on CI/CD pipelines, developed an in-website code editor, and also co-authored a DSA for Beginners book with my mentor.",
  },
  {
    id: "advantage",
    category: "work",
    period: "2023 - 2024",
    role: "Product Director",
    company: "AdVantage Ecosystem",
    companyUrl: "https://www.linkedin.com/company/advantagecommunity/",
    logo: "https://framerusercontent.com/images/70Os1pdlMzER1q1UcKNo0jZ1gYs.png?width=312&height=280",
    description:
      "Driven by the most basic human need, working with people you vibe with. The goal was to make education more engaging, inclusive, and practical. Designing the product, turning ideas into execution, taking on operational duties, all of it gave me a new perspective.",
  },
  {
    id: "tedx",
    category: "more",
    period: "2022 - 2023",
    role: "Core Committee",
    company: "TEDxIARE",
    companyUrl: "https://www.ted.com/tedx/events/52558",
    logo: withBase("logos/TEDX logo.png?v=1"),
    logoDark: withBase("logos/TEDX logo.png?v=1"),
    description:
      "What a mess, but such a fun event to be part of. Got to be involved in pretty much everything, from brand strategy and marketing to leading the design team, and making some really cool stuff along the way.",
  },
  {
    id: "gdsc",
    category: "more",
    period: "2022 - 2023",
    role: "Public Relations",
    company: "GDSCxIARE",
    companyUrl: "https://gdsciare-docs.vercel.app/about",
    logo: "https://framerusercontent.com/images/Nhi9BjuAxdl4SoDXXF0tlS23fFI.png?width=321&height=157",
    description:
      "Brought the campus developer community together through events, workshops, and collabs, making Google Developer Groups resources more accessible and approachable for students.",
  },
  {
    id: "nfc",
    category: "work",
    period: "2022",
    role: "Software Engineer Intern",
    company: "NFC USA Solutions",
    companyUrl: "https://www.linkedin.com/company/nfc-solutions-usa/",
    logo: "https://framerusercontent.com/images/NiThnUW7LzGB3ztygrfgVsqC6Q.png?width=110&height=125",
    description:
      "This is where I finally understood what software engineers are actually doing behind their screens all day. Got to design product pages, test the website, sit through endless tiny fixes, and somehow ended up really enjoying the whole Design × Development side of things.",
  },
  {
    id: "edam",
    category: "more",
    period: "2021 - 2023",
    role: "Lead Mentor and Engineer",
    company: "e-DAM The Technical Club",
    companyUrl: "https://www.linkedin.com/company/edamcommunity/posts/?feedView=all",
    logo: "https://framerusercontent.com/images/oapYwW71xjzg3o9MbzOvXlX9g4.png?width=226&height=226",
    description:
      "This is where I explored various sides of tech, software, design, everything in between. Picked up Graphic Design, got introduced to UI/UX, built projects, and genuinely enjoyed working with the club. Most importantly, this is where my Machine Learning journey started.",
  },
];

const WORK_TAB_IDS = new Set([
  "tltc-math-coach",
  "aap-math-tutor",
  "umd-research",
  "venkys",
  "advantage",
  "nfc",
]);

const MORE_TAB_IDS = new Set([
  "xfoundry-video",
  "frosthacks",
  "tedx",
  "gdsc",
  "edam",
]);

export function getExperienceItems(category: "work" | "more") {
  const ids = category === "work" ? WORK_TAB_IDS : MORE_TAB_IDS;
  return experienceItems.filter((item) => ids.has(item.id));
}
