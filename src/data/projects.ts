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
      "A Spatio-Temporal RAG system that gives hardhat-camera video object permanence - structured memory any VLM can query.",
  },
  {
    id: "fingraph",
    title: "FinGraph",
    projectPage: true,
    url: "https://devpost.com/software/fingraph",
    tags: ["LLMs", "Agents", "Data", "Graph"],
    description:
      "A multi-agent graph system analyzing freelancer finances to deliver explainable stability insights.",
  },
  {
    id: "orchestrator",
    title: "Cloud Orchestrator",
    projectPage: true,
    url: "https://github.com/shifamehreen-005/cloud-orchestrator",
    tags: ["Agents", "LLMs", "Cloud", "GCP"],
    description:
      "Multi-agent ADK system that turns plain-English intents into 20+ GCP actions (GKE, Vertex, BigQuery), no scripts needed.",
  },
  {
    id: "feedforward",
    title: "FeedForward",
    featured: true,
    projectPage: true,
    url: "https://github.com/shifamehreen-005/FeedForward",
    tags: ["LLMs", "Data", "Agents", "Voice AI"],
    description:
      "A multi-modal agent built for the Capital One Food Bank Challenge.",
  },
  {
    id: "intelli-rags",
    title: "IntelliRAGs",
    projectPage: true,
    url: "https://github.com/vellsneha/IntelliRAGs",
    tags: ["LLMs", "NLP", "RAGs", "Evaluation"],
    description:
      "A production-ready RAG platform leveraging embeddings and LLMs for semantic search and context-grounded Q&A.",
  },
  {
    id: "neuradance",
    title: "NeuraDance",
    url: "https://github.com/vellsneha/vellsneha/blob/main/add-link",
    tags: ["Computer Vision", "Data", "Core ML"],
    description:
      "Pose-based dance-form classifier using MediaPipe and Keras for real-time movement recognition.",
    hidden: true,
  },
  {
    id: "stock-market-prediction",
    title: "Stock Sentiments",
    url: "https://github.com/vellsneha/vellsneha/blob/main/add-link",
    tags: ["Core ML", "Data", "NLP"],
    description:
      "Twitter sentiment analysis combined with ML baselines for market movement prediction.",
    hidden: true,
  },
  {
    id: "weather-kinesis",
    title: "Weather Kinesis",
    url: "https://github.com/vellsneha/weather-kinesis",
    tags: ["Data", "Cloud"],
    description:
      "A production-ready pipeline for ingesting, streaming, and analyzing weather data using AWS Kinesis, S3, and visualization tools.",
    hidden: true,
  },
];
