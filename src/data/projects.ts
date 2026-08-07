export type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  featured?: boolean;
  hidden?: boolean;
  /** When true, home list links to /projects#id instead of the external url. */
  projectPage?: boolean;
};

/** Home sidebar cards only, kept free of media imports so `/` stays light. */
export const projects: Project[] = [
  {
    id: "vista",
    title: "Vista",
    featured: true,
    projectPage: true,
    url: "https://github.com/shifamehreen-005/VISTA",
    tags: ["Computer Vision", "LLMs", "RAGs", "Agents"],
    description:
      "Spatio-temporal RAG that gives hardhat-camera video a lasting memory VLMs can query.",
  },
  {
    id: "orchestrator",
    title: "Cloud Orchestrator",
    projectPage: true,
    url: "https://github.com/shifamehreen-005/cloud-orchestrator",
    tags: ["Agents", "LLMs", "Cloud", "GCP"],
    description:
      "Agents that turn plain-English intents into 20+ GCP actions, no scripts needed.",
  },
  {
    id: "feedforward",
    title: "FeedForward",
    featured: true,
    projectPage: true,
    url: "https://github.com/shifamehreen-005/FeedForward",
    tags: ["LLMs", "Data", "Agents", "Voice AI"],
    description:
      "Multimodal voice and chat agent for finding nearby food assistance.",
  },
  {
    id: "fingraph",
    title: "FinGraph",
    projectPage: true,
    url: "https://devpost.com/software/fingraph",
    tags: ["LLMs", "Agents", "Data", "Graph"],
    description:
      "Multi-agent graph system that turns freelancer finances into explainable stability scores.",
  },
  {
    id: "intelli-rags",
    title: "IntelliRAGs",
    projectPage: true,
    url: "https://github.com/vellsneha/IntelliRAGs",
    tags: ["LLMs", "NLP", "RAGs", "Evaluation"],
    description:
      "Production RAG platform for semantic search with grounded Q&A and evals.",
  },
  {
    id: "neuradance",
    title: "NeuraDance",
    url: "https://github.com/vellsneha/vellsneha/blob/main/add-link",
    tags: ["Computer Vision", "Data", "Core ML"],
    description:
      "Pose-based dance classifier with MediaPipe and Keras for real-time recognition.",
    hidden: true,
  },
  {
    id: "stock-market-prediction",
    title: "Stock Sentiments",
    url: "https://github.com/vellsneha/vellsneha/blob/main/add-link",
    tags: ["Core ML", "Data", "NLP"],
    description:
      "Twitter sentiment plus ML baselines for predicting market moves.",
    hidden: true,
  },
  {
    id: "weather-kinesis",
    title: "Weather Kinesis",
    url: "https://github.com/vellsneha/weather-kinesis",
    tags: ["Data", "Cloud"],
    description:
      "AWS pipeline for ingesting, streaming, and analyzing live weather data.",
    hidden: true,
  },
];
