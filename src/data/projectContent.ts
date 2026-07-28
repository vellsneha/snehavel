export type ProjectStat = {
  value: string;
  label: string;
};

export type ProjectTable = {
  title?: string;
  headers: string[];
  rows: string[][];
};

export type ProjectStep = {
  label: string;
  description?: string;
};

export type ProjectGridCard = {
  title: string;
  items: string[];
  description?: string;
};

export type ProjectSubsection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  code?: string;
};

export type ProjectContentSection = {
  label: string;
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: ProjectSubsection[];
  code?: string;
  variant?: "default" | "callout" | "stats" | "table" | "steps" | "grid" | "phases";
  stats?: ProjectStat[];
  table?: ProjectTable;
  steps?: ProjectStep[];
  grid?: ProjectGridCard[];
  gridFooter?: ProjectGridCard;
  chipRows?: string[][];
  image?: string;
  imageAlt?: string;
};

export const vistaContent: ProjectContentSection[] = [
  {
    label: "Problem",
    title: "Why can't VLMs remember video in a spatio-temporal way?",
    paragraphs: [
      "Frontier vision-language models describe the current frame well. They struggle when questions need memory across time and camera movement.",
    ],
  },
  {
    label: "Context",
    title: "The hackathon challenge",
    paragraphs: [
      "Construction supervisors receive hours of first-person hardhat-camera footage. It's useful, but painful to review. You can't easily ask: What tasks were completed between 2:00 and 4:00 minutes? or Where was the ladder relocated?",
    ],
  },
  {
    label: "Solution",
    title: "Give hardhat-camera video a memory",
    variant: "callout",
    paragraphs: [
      "VISTA watches egocentric construction video once, builds persistent spatio-temporal memory, then answers questions about it, ***without re-sending the whole video every time.***",
      "The core idea: give video object permanence through structured memory and intelligent retrieval, not embedding similarity alone.",
    ],
    grid: [
      { title: "Who", items: ["Workers", "Supervisors", "Equipment"] },
      { title: "What", items: ["Objects", "Actions", "State changes"] },
      { title: "Where", items: ["Allocentric direction", "Scene position"] },
      { title: "When", items: ["Timelines", "Idle periods", "Events"] },
    ],
  },
  {
    label: "Outcomes",
    variant: "stats",
    stats: [
      { value: "2nd", label: "Runner-up · UMD Startup Shell × Ironsite" },
      { value: "93.3%", label: "Spatial / temporal eval accuracy" },
      { value: "35s", label: "To process a 10-minute test video" },
      { value: "14/15", label: "Hand-checked benchmark questions" },
    ],
  },
  {
    label: "Idea validation",
    paragraphs: [
      "We validated against real Ironsite benchmark clips: questions requiring where, when, and what changed over time.",
    ],
    variant: "table",
    table: {
      title: "Comparison of Methods",
      headers: ["Approach", "Spatial accuracy", "Temporal accuracy"],
      rows: [
        ["Raw video → Gemini", "Often correct", "Wildly off on idle-time estimates"],
        ["Raw video → Molmo", "Frequent direction errors", "Severe under-estimation"],
        ["VISTA memory layer", "Consistently better", "Consistently better"],
      ],
    },
  },
  {
    label: "POC",
    title: "Three things proven on a laptop: no GPS, SLAM, or depth sensors",
    bullets: [
      "Track camera heading with classical optical flow on every frame.",
      "Sample keyframes and ask Gemini to extract structured scene data.",
      "Merge observations into a scene graph, then answer via an agent that queries it.",
    ],
  },
  {
    label: "User persona",
    title: "Construction supervisor reviewing hardhat footage",
    paragraphs: [
      "Needs directional and temporal answers in plain language, without scrubbing through hours of video or adding extra sensors.",
    ],
    variant: "steps",
    steps: [
      { label: "Upload", description: "Select or upload hardhat-camera video" },
      { label: "Process", description: "VISTA builds scene memory once" },
      { label: "Ask", description: "“How long was the worker idle?”" },
      { label: "Answer", description: "Grounded in graph-backed spatio-temporal memory" },
    ],
  },
  {
    label: "Tech stack",
    title: "Constraints",
    paragraphs: [
      "Hackathon timeline - no custom VLM training. Monocular camera only. Speed and accuracy on spatial/temporal queries both mattered.",
      "The architectural bet: scene graph as memory store, retrieve by location, direction, and time - spatio-temporal RAG, not vector similarity.",
    ],
    chipRows: [
      ["Python", "OpenCV", "Google Gemini", "Pydantic"],
      ["Pickle + JSON persistence", "SQLite FTS5 for OSHA lookup"],
      ["Streamlit demo", "Plotly / Matplotlib visualizations"],
    ],
  },
  {
    label: "Research",
    variant: "callout",
    paragraphs: [
      "VLMs fail on egocentric construction footage for an architectural reason, not a perceptual one. They see fine in-frame but lack allocentric persistence - a world-fixed sense of where things are as the camera moves.",
      "Our hybrid mirrors human navigation: a fast vestibular sense (which way am I facing?) plus slower deliberate observation (what do I see right now?).",
    ],
  },
  {
    label: "Build",
    title: "Five core pieces that connect",
    variant: "grid",
    grid: [
      {
        title: "Camera motion",
        description: "Optical flow heading on every frame.",
        items: ["ORB detection", "Feature matching", "RANSAC affine", "Heading accumulation", "Farneback fallback"],
      },
      {
        title: "Scene extraction",
        description: "Structured perception from keyframes.",
        items: ["Keyframe sampling", "Gemini scene prompt", "Structured JSON", "Async batch processing"],
      },
      {
        title: "Scene graph",
        description: "Persistent spatio-temporal memory.",
        items: ["Allocentric coordinates", "Entity merging", "Confidence decay", "Relationship edges", "Query APIs"],
      },
      {
        title: "Q&A agent",
        description: "Reasoning over the graph.",
        items: ["Pre-retrieval context", "Video fallback", "8 tool-calling APIs", "Natural-language answers"],
      },
    ],
    gridFooter: {
      title: "OSHA Data Engine",
      description: "Safety and compliance context for construction-site queries.",
      items: [
        "SQLite with FTS5 for fast incident lookup",
        "OSHA regulation reference data",
        "Full-text search for safety-related questions",
        "Grounds agent answers in compliance context",
      ],
    },
  },
  {
    label: "How it works",
    variant: "phases",
    subsections: [
      {
        title: "Phase 1 - Processing (builds the memory)",
        code: `Video file
    │
    ├─ Pass 1: Read every frame
    │     → Optical flow computes heading per frame
    │     → Keyframe sampler marks frames for Gemini
    │
    ├─ Pass 2: Batch Gemini calls (up to 10 concurrent)
    │     → Each keyframe → structured JSON
    │
    └─ Pass 3: Build scene graph
          → Allocentric coordinates + entity merge
          → Confidence decay + save to disk`,
      },
      {
        title: "Phase 2 - Querying (uses the memory)",
        paragraphs: ['User question: "When was the ladder moved, and where was it relocated?"'],
        code: `Load graph → Build context → Attach video
    → Gemini + tools (direction, entities, timeline)
    → "The ladder was moved to the center of the room at 2:48."`,
      },
    ],
  },
  {
    label: "Result",
    title: "Benchmark comparison",
    paragraphs: [
      "14 of 15 hand-checked Ironsite questions answered correctly. Baselines struggled on direction and duration.",
    ],
    variant: "table",
    table: {
      headers: ["Question", "VISTA", "Gemini", "Molmo"],
      rows: [
        ["Concrete walls at 30s?", "Right", "Right", "Wrong (left)"],
        ["Ladder at 10s?", "Behind", "Right", "Wrong (right)"],
        ["Worker idle duration?", "176s (7% error)", "299s (57% over)", "10s (95% under)"],
        ["Bucket start vs end?", "Tracked movement", "Locked direction", "Locked direction"],
      ],
    },
    bullets: [
      "Temporal: “When does the worker lay the first brick?” → 371s",
      "Heading drift kept under 2° over 60 seconds of footage",
    ],
  },
];

export const openClipContent: ProjectContentSection[] = [
  {
    label: "Problem",
    title: "Can CLIP answer to manga panel queries?",
    paragraphs: [
      "Manga fans and researchers want to find specific moments across hundreds of pages — a fight scene, an emotional close-up, a line of dialogue, a forest setting. Scrolling manually doesn't scale.",
      "Can CLIP understand the emotion and situation of a scene — not just generic image descriptions?",
    ],
  },
  {
    label: "Solution",
    title: "Search individual panels by what happens, what characters feel, what they say, or where scenes take place",
    variant: "callout",
    paragraphs: [
      "MangaSearch is a multi-modal retrieval system that extracts individual panels from uploaded manga PDFs and lets users search them by natural language — using a fine-tuned OpenCLIP model achieving 0.52 MRR against a random baseline of 0.05.",
    ],
    grid: [
      { title: "Action", items: ["Fight sequences", "Movement", "Physical events"] },
      { title: "Emotion", items: ["Facial expression", "Mood", "Character feeling"] },
      { title: "Dialogue", items: ["Speech text", "OCR-backed phrases", "Exact lines"] },
      { title: "Scene", items: ["Setting", "Location", "Environment"] },
    ],
  },
  {
    label: "Outcomes",
    variant: "stats",
    stats: [
      { value: "0.523", label: "MRR — fine-tuned OpenCLIP (top-10)" },
      { value: "10×", label: "Base CLIP vs random baseline on MRR" },
      { value: "66", label: "Ground-truth queries with Gemini judgments" },
      { value: "5", label: "Training manga titles · Fairy Tail held out" },
    ],
  },
  {
    label: "Validation",
    paragraphs: [
      "We built an evaluation set of 66 ground-truth queries across four types — ACTION, EMOTION, DIALOGUE, SCENE — with relevance judgments generated by Gemini. Training on 5 manga titles, testing on held-out Fairy Tail Vol. 1.",
    ],
    variant: "table",
    table: {
      headers: ["Model", "MRR", "MAP", "P@1"],
      rows: [
        ["Random baseline", "0.050", "—", "—"],
        ["Base CLIP", "0.512", "0.433", "0.394"],
        ["Fine-tuned CLIP", "0.523", "0.424", "0.409"],
      ],
    },
  },
  {
    label: "POC",
    title: "Fine-tuning gains on action and emotion — with a dialogue trade-off",
    paragraphs: [
      "Fine-tuned CLIP pushed P@1 to 0.409 and MRR to 0.523, with ACTION MAP up 7.1pp and EMOTION MAP up 11.4pp — at the cost of DIALOGUE MAP dropping 22pp.",
    ],
    variant: "table",
    table: {
      headers: ["Query type", "Base CLIP MAP", "Fine-tuned MAP", "Change"],
      rows: [
        ["ACTION", "0.325", "0.396", "+7.1pp"],
        ["EMOTION", "0.234", "0.348", "+11.4pp"],
        ["SCENE", "0.706", "0.722", "+1.6pp"],
        ["DIALOGUE", "0.658", "0.437", "−22pp (documented trade-off)"],
      ],
    },
  },
  {
    label: "How it works",
    variant: "steps",
    steps: [
      { label: "Upload", description: "PDF via Streamlit sidebar" },
      { label: "Extract", description: "Panels detected and embedded in background" },
      { label: "Search", description: "Query like “two people fighting” or “character looks sad”" },
      { label: "Browse", description: "3-column gallery with similarity scores color-coded green / amber / grey" },
    ],
  },
  {
    label: "Tech stack",
    title: "Constraints that shaped the architecture",
    paragraphs: [
      "Panel-level granularity requires reliable detection before any search works. Four query types need different retrieval strategies. Fine-tuning data must come from structured captions, not generic image descriptions.",
      "The architectural bet: separate visual and text vector collections so each query type can search the right signal. Type-aware routing beats one-size-fits-all retrieval.",
    ],
    bullets: [
      "YOLOv8 segmentation · OpenCLIP ViT-B/32 · EasyOCR · ChromaDB",
      "FastAPI backend · Streamlit frontend",
      "Gemini 2.5 Flash — captioning and eval ground truth",
      "Qwen2.5-1.5B / RunPod — query classification with regex fallback",
    ],
  },
  {
    label: "Research",
    variant: "callout",
    paragraphs: [
      "Fine-tuning only the text tower of CLIP (freezing the visual encoder) taught the model manga-specific vocabulary without catastrophic forgetting of visual features.",
      "The trade-off was real: DIALOGUE queries depend on exact phrase matching, which base CLIP handles well — fine-tuning shifted the text encoder toward visual-description language.",
    ],
  },
  {
    label: "Build",
    title: "Five core pieces that connect",
    variant: "grid",
    grid: [
      {
        title: "Panel extraction",
        description: "YOLOv8 segmentation with robust fallbacks.",
        items: [
          "YOLOv8 segmentation model",
          "Flood-fill gap detector",
          "OpenCV contour fallback",
          "Speech-bubble expander",
          "Reading-order sort · SHA-256 dedup",
        ],
      },
      {
        title: "OCR + embedding",
        description: "Dual signals for visual and text search.",
        items: [
          "EasyOCR (English)",
          "OpenCLIP ViT-B/32",
          "Dual embeddings: visual + text",
          "ChromaDB collections",
        ],
      },
      {
        title: "Query router",
        description: "Type classification + CLIP rephrasing.",
        items: [
          "ACTION · EMOTION · DIALOGUE · SCENE",
          "Qwen2.5-1.5B classifier",
          "Regex fallback",
          "CLIP-optimized rephrasings",
        ],
      },
      {
        title: "Type-aware search",
        description: "Retrieve and rank by query type.",
        items: [
          "Visual-only retrieval",
          "Text + visual merged search",
          "Type-specific ranking",
          "Top-k panel gallery",
        ],
      },
    ],
    gridFooter: {
      title: "Fine-tuning pipeline",
      description: "Structured caption pairs → text-tower-only training.",
      items: [
        "Gemini 2.5 Flash structured JSON captions per panel",
        "Up to 13 (image, text) pairs per panel → train_pairs.json",
        "Freeze visual encoder · train text-side only",
        "Symmetric InfoNCE · AdamW · cosine annealing · 7 epochs",
      ],
    },
  },
  {
    label: "Results",
    title: "Held-out evaluation on Fairy Tail Vol. 1",
    paragraphs: [
      "66 queries across 4 types. Train: 5 manga titles. Test: Fairy Tail Vol. 1 (held out). Ground truth: Gemini 2.5 Flash.",
    ],
    bullets: [
      "Overall top-10: Random MRR 0.050 → Base CLIP 0.512 → Fine-tuned 0.523",
      "ACTION and EMOTION improved most after fine-tuning; DIALOGUE trade-off documented",
      "SCENE remained strong across both models (+1.6pp after fine-tuning)",
    ],
  },
];

import {
  feedforwardContent,
  fingraphContent,
  intelliRagsContent,
  orchestratorContent,
} from "./moreProjectContent";

export const projectContentById: Record<string, ProjectContentSection[]> = {
  vista: vistaContent,
  openclip: openClipContent,
  fingraph: fingraphContent,
  feedforward: feedforwardContent,
  "intelli-rags": intelliRagsContent,
  orchestrator: orchestratorContent,
};
