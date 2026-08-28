export const SITE_URL = "https://www.snehavellelath.tech";
export const SITE_NAME = "Sneha Vellelath";
export const SITE_TITLE = "Sneha Vellelath | AI Systems Engineer";
export const SITE_DESCRIPTION =
  "Sneha Vellelath is an AI Systems Engineer building reliable AI systems with agents, eval loops, multimodal tools, and RAG pipelines. Portfolio of projects, designs, and product work.";

export const CONTACT_EMAIL = "work.vellsneha@gmail.com";

export const SOCIAL_PROFILES = [
  "https://github.com/vellsneha",
  "https://www.linkedin.com/in/snehavellelath",
  "https://x.com/itsvells",
  "https://devpost.com/vellsneha",
] as const;

export const NDA_ACCESS_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Portfolio NDA access request",
)}&body=${encodeURIComponent(
  "Hi Sneha,\n\nI'd like access to view your NFC, TASK, and PULSE case studies.\n\nThank you.",
)}`;
