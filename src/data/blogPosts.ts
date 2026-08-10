export type BlogLink = {
  id: string;
  title: string;
  source: string;
  url: string;
};

/** External writing & project write-ups. Newest / featured first. */
export const blogLinks: BlogLink[] = [
  {
    id: "visualize-ai-agent",
    title: "Can I visualize an AI Agent as a Human?",
    source: "Medium",
    url: "https://medium.com/@work.vellsneha/can-i-visualize-an-ai-agent-as-a-human-516f993cc2c4",
  },
  {
    id: "fingraph",
    title: "FinGraph",
    source: "Devpost",
    url: "https://devpost.com/software/fingraph",
  },
  {
    id: "vista",
    title: "VISTA",
    source: "Devpost",
    url: "https://devpost.com/software/project-m1vfpu5ny2c4",
  },
  {
    id: "cloud-orchestrator",
    title: "The Cloud Orchestrator",
    source: "Devpost",
    url: "https://devpost.com/software/cloud-orchestrator",
  },
];
