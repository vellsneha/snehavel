import vistaImage from "../../projvids/VISTA.jpg?url";
import intelliRagsImage from "../../projvids/IntelliRAGs.jpg?url";
import openClipVideo from "../../projvids/OpenCLIP.mp4?url";
import alzheimersVideo from "../../projvids/Alzheimers.mp4?url";
import finGraphVideo from "../../projvids/FinGraph.mp4?url";
import weatherKinesisVideo from "../../projvids/WeatherKinesis.mp4?url";
import neuraDanceImage from "../../projvids/NeuraDance.png?url";
import feedForwardImage from "../../projvids/FeedForward.png?url";
import stockMarketImage from "../../projvids/StockMarket.png?url";
import openaiVideo from "../../projvids/openai.mp4?url";
import { projectContentById, type ProjectContentSection } from "./projectContent";

export type ProjectItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  url: string;
  tags: string[];
  featured?: boolean;
  status: string;
  hue: number;
  role: string;
  timeline: string;
  team: string;
  skills: string[];
  overviewTitle: string;
  overview: string;
  designId?: string;
  designLabel?: string;
  readMoreHref?: string;
  readMoreLabel?: string;
  hidden?: boolean;
  sections?: ProjectContentSection[];
  media?: string;
  mediaType?: "image" | "video";
};

export const projectItems: ProjectItem[] = [
  {
    id: "vista",
    title: "Vista",
    date: "Feb 2026",
    featured: true,
    status: "Hackathon",
    url: "https://github.com/shifamehreen-005/VISTA",
    tags: ["Computer Vision", "LLMs", "RAGs", "Agents"],
    hue: 198,
    role: "AI Engineer & Frontend Engineer",
    timeline: "36 hrs · Feb 2026",
    team: "Nithin, Santhi, Swapnita, Shifa, Me",
    skills: [
      "Computer Vision",
      "Agentic RAG System",
      "Property Graph Building",
      "Optical Flow",
      "Gemini VLM",
    ],
    overviewTitle: "Spatio-temporal memory layer for VLMs",
    overview:
      "VISTA watches egocentric hardhat-camera video once, builds persistent spatio-temporal memory, and answers natural-language questions about where things were, when they changed, and what happened off-screen.",
    description:
      "A Spatio-Temporal RAG system that gives hardhat-camera video object permanence - structured memory any VLM can query.",
    sections: projectContentById.vista,
    media: vistaImage,
    mediaType: "image",
  },
  {
    id: "fingraph",
    title: "FinGraph",
    date: "Nov 2025",
    status: "Hackathon",
    url: "https://devpost.com/software/fingraph",
    tags: ["LLMs", "Agents", "Data", "Graph"],
    hue: 38,
    role: "AI Engineer & Frontend",
    timeline: "Nov 15–16, 2025 · ~20 hr",
    team: "Santhi, Aafan, Moneet, Me",
    skills: [
      "Knowledge Graph",
      "Neo4j",
      "Financial Analytics",
      "Multi-Agent Pipeline",
      "Capital One Nessie API",
      "Gemini",
      "FastAPI",
      "React",
      "Cloud Run",
      "Graph Visualization",
    ],
    overviewTitle: "Financial Identity Score for Freelancers",
    overview:
      "A knowledge-graph-powered platform that turns banking history into a 0–100 financial health score — built for freelancers and gig workers whose irregular income patterns traditional credit scores miss.",
    description:
      "Multi-agent graph system that analyzes freelancer finances via Capital One's Nessie API and delivers an explainable 0–100 Financial Identity Score with AI recommendations.",
    sections: projectContentById.fingraph,
    designId: "d1",
    designLabel: "Freelancer dashboard",
    readMoreHref: "https://devpost.com/software/fingraph",
    readMoreLabel: "Read more on Devpost",
    media: finGraphVideo,
    mediaType: "video",
  },
  {
    id: "orchestrator",
    title: "Cloud Orchestrator",
    date: "Jun 2025",
    status: "Hackathon",
    url: "https://github.com/shifamehreen-005/cloud-orchestrator",
    tags: ["Agents", "LLMs", "Cloud", "GCP"],
    hue: 145,
    role: "AI Engineer",
    timeline: "Jun 2025",
    team: "Nithin, Swapnita, Shifa, Me",
    skills: [
      "GCP",
      "Google ADK",
      "Gemini",
      "Infrastructure Automation",
      "Tool Planning",
      "DAG Visualization",
      "gcloud",
      "Cloud Run",
      "Guardrails",
    ],
    overviewTitle: "Natural Language GCP Infrastructure Automation",
    overview:
      "Tell it what you want in plain English — it plans, visualizes, and executes across 20 Google Cloud services with budget and quota guardrails.",
    description:
      "Multi-agent ADK platform that turns natural-language infrastructure requests into ordered gcloud tool-call plans with DAG visualization.",
    sections: projectContentById.orchestrator,
    media: openaiVideo,
    mediaType: "video",
  },
  {
    id: "feedforward",
    title: "FeedForward",
    date: "Aug 2025",
    featured: true,
    status: "Hackathon",
    url: "https://github.com/shifamehreen-005/FeedForward",
    tags: ["LLMs", "Data", "Agents", "Voice AI"],
    hue: 168,
    role: "AI Engineer & Frontend",
    timeline: "Mar – Aug 2025",
    team: "Nithin, Swapnita, Shifa, Me",
    skills: [
      "Voice AI",
      "OpenAI Realtime",
      "WebRTC",
      "Multimodal Agents",
      "GPT-4o",
      "MySQL",
      "Geolocation",
      "Transit Routing",
      "Bilingual (English/Spanish)",
    ],
    overviewTitle: "AI Food Assistance for Capital One Area Food Bank",
    overview:
      "A multimodal platform that helps people find nearby food banks through voice or chat — runner-up at the UMD Smith School × Capital Area Food Bank hackathon.",
    description:
      "24/7 AI assistance that walks users through intake by voice or chat, then searches 441 DC-area food agencies and returns ranked matches with transit directions.",
    sections: projectContentById.feedforward,
    designId: "d2",
    designLabel: "FeedForward",
    media: feedForwardImage,
    mediaType: "image",
  },
  {
    id: "intelli-rags",
    title: "IntelliRAGs",
    date: "Feb 2026",
    status: "Ongoing",
    url: "https://github.com/vellsneha/IntelliRAGs",
    tags: ["LLMs", "NLP", "RAGs", "Evaluation"],
    hue: 265,
    role: "ML Engineer",
    timeline: "Ongoing",
    team: "Me",
    skills: [
      "RAG",
      "ChromaDB",
      "Cohere Embeddings",
      "Benchmark Evaluation",
      "Open RAG Benchmark",
      "FastAPI",
      "Streamlit",
      "LLM-as-Judge",
      "Hit@1",
      "MRR",
    ],
    overviewTitle: "RAG with a benchmark-backed evaluation harness",
    overview:
      "A learning project that ingests documents, answers questions with source grounding, and proves quality with Hit@1, Recall@5, MRR, and LLM-judged faithfulness on Vectara's Open RAG Benchmark.",
    description:
      "Production-style RAG pipeline with an evaluation harness that measures retrieval and answer quality on a real benchmark — every design choice backed by numbers.",
    sections: projectContentById["intelli-rags"],
    media: intelliRagsImage,
    mediaType: "image",
  },
  {
    id: "openclip",
    title: "MangaSearch",
    date: "Feb 2026",
    status: "Research",
    url: "https://github.com/vellsneha",
    tags: ["Computer Vision", "LLMs", "Research", "Multimodal"],
    hue: 52,
    role: "ML Engineer",
    timeline: "Feb 2026 · May 2026",
    team: "Swapnita, Shifa, Me",
    skills: [
      "Panel Detection",
      "YOLOv8",
      "OpenCLIP Fine-tuning",
      "ChromaDB",
      "Multimodal Retrieval",
      "Query Classification",
    ],
    overviewTitle: "OpenCLIP finetuning for specialized content",
    overview:
      "MangaSearch extracts panels from manga PDFs and lets users search by natural language — action, emotion, dialogue, or scene — with fine-tuned OpenCLIP reaching 0.52 MRR vs a 0.05 random baseline.",
    description:
      "Multi-modal manga panel search with fine-tuned OpenCLIP — find action, emotion, dialogue, or scene by natural language.",
    sections: projectContentById.openclip,
    media: openClipVideo,
    mediaType: "video",
  },
  {
    id: "neuradance",
    title: "NeuraDance",
    date: "Apr 2026",
    status: "Live",
    url: "https://github.com/vellsneha/vellsneha/blob/main/add-link",
    tags: ["Computer Vision", "Data", "Core ML"],
    hue: 320,
    role: "ML Engineer",
    timeline: "2026",
    team: "Personal project",
    skills: ["MediaPipe", "Pose Estimation", "Keras", "Real-Time Classification"],
    overviewTitle: "Real-time dance-form recognition from pose data",
    overview:
      "Pose-based dance-form classifier using MediaPipe and Keras for real-time movement recognition.",
    description:
      "Pose-based dance-form classifier using MediaPipe and Keras for real-time movement recognition.",
    hidden: true,
    media: neuraDanceImage,
    mediaType: "image",
  },
  {
    id: "alzheimers",
    title: "Alzheimer's",
    date: "Jan 2026",
    status: "Live",
    url: "https://github.com/vellsneha",
    tags: ["Core ML", "Computer Vision", "Healthcare"],
    hue: 12,
    role: "ML Engineer",
    timeline: "2026",
    team: "Personal project",
    skills: [
      "Medical Imaging",
      "Classification",
      "TensorFlow",
      "Data Augmentation",
      "Model Evaluation",
    ],
    overviewTitle: "Early Alzheimer's detection from brain imaging",
    overview:
      "A machine learning pipeline for classifying Alzheimer's-related patterns in neuroimaging data — built to explore early detection signals and model interpretability.",
    description:
      "ML pipeline for Alzheimer's classification from brain imaging, with preprocessing, training, and evaluation workflows.",
    hidden: true,
    media: alzheimersVideo,
    mediaType: "video",
  },
  {
    id: "stock-market-prediction",
    title: "Stock Sentiments",
    date: "Apr 2026",
    status: "Live",
    url: "https://github.com/vellsneha/vellsneha/blob/main/add-link",
    tags: ["Core ML", "Data", "NLP"],
    hue: 25,
    role: "ML Engineer",
    timeline: "2026",
    team: "Personal project",
    skills: ["Sentiment Analysis", "Time Series", "NLP", "Market Baselines"],
    overviewTitle: "Twitter sentiment meets market movement prediction",
    overview:
      "Twitter sentiment analysis combined with ML baselines for market movement prediction.",
    description:
      "Twitter sentiment analysis combined with ML baselines for market movement prediction.",
    hidden: true,
    media: stockMarketImage,
    mediaType: "image",
  },
  {
    id: "weather-kinesis",
    title: "Weather Kinesis",
    date: "Apr 2026",
    status: "Live",
    url: "https://github.com/vellsneha/weather-kinesis",
    tags: ["Data", "Cloud"],
    hue: 210,
    role: "Backend Engineer",
    timeline: "2026",
    team: "Personal project",
    skills: ["AWS Kinesis", "Stream Processing", "Data Pipelines", "Visualization"],
    overviewTitle: "Production-ready weather data streaming and analysis",
    overview:
      "A production-ready pipeline for ingesting, streaming, and analyzing weather data using AWS Kinesis, S3, and visualization tools.",
    description:
      "A production-ready pipeline for ingesting, streaming, and analyzing weather data using AWS Kinesis, S3, and visualization tools.",
    hidden: true,
    media: weatherKinesisVideo,
    mediaType: "video",
  },
];
