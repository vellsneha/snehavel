import vistaImage from "../../projvids/VISTA.jpg?url";
import openClipVideo from "../../projvids/OpenCLIP.mp4?url";
import intelliRagsImage from "../../projvids/IntelliRAGs.jpg?url";

export type LearningEntry = {
  id: string;
  period: string;
  title: string;
  description: string;
  media: string;
  mediaType: "image" | "video";
};

/** Newest first, add new entries to the top of this list. Keep descriptions to ~2 lines. */
export const learningTimeline: LearningEntry[] = [
  {
    id: "vista",
    period: "Feb 2026",
    title: "VISTA",
    description:
      "A Spatio-Temporal RAG system that turns raw footage into structured, queryable spatial-temporal memory any VLM can retrieve from.",
    media: vistaImage,
    mediaType: "image",
  },
  {
    id: "openclip",
    period: "Feb – May 2026",
    title: "OpenCLIP",
    description: "Looked into CLIP fine-tuning for multimodal vision–language tasks.",
    media: openClipVideo,
    mediaType: "video",
  },
  {
    id: "intelli-rags",
    period: "Feb 2026",
    title: "IntelliRAGs",
    description:
      "A production-ready RAG platform leveraging embeddings and LLMs for semantic search and context-grounded Q&A.",
    media: intelliRagsImage,
    mediaType: "image",
  },
];
