import type { ProjectContentSection } from "./projectContent";

export const fingraphContent: ProjectContentSection[] = [
  {
    label: "Problem",
    title: "How do freelancers prove financial stability?",
    paragraphs: [
      "Freelancers and gig workers struggle to prove financial stability to lenders, landlords, or clients. Traditional credit scores miss irregular income, client concentration risk, and cash runway, the things that matter when you don't get a paycheck every two weeks.",
    ],
  },
  {
    label: "Context",
    title: "Capital One hackathon at Technica UMD",
    paragraphs: [
      "Financial data is spread across deposits, withdrawals, bills, and transfers, but no single view answers: How stable is my income? How diversified are my clients? How many months of runway do I have?",
    ],
  },
  {
    label: "Solution",
    title: "A knowledge-graph-powered Financial Identity Score",
    variant: "callout",
    paragraphs: [
      "FinGraph turns banking history into a reproducible financial health score with an LLM-generated narrative, banks get a single number and an explanation, not a raw CSV.",
    ],
    grid: [
      { title: "Income", items: ["Stability", "Volatility", "Low-income months"] },
      { title: "Clients", items: ["Concentration", "Diversification", "Top-client share"] },
      { title: "Cashflow", items: ["Net monthly flow", "Drawdowns", "Negative months"] },
      { title: "Cushion", items: ["Runway months", "Balance vs expenses", "Letter grade"] },
    ],
  },
  {
    label: "Validation",
    paragraphs: [
      "We used Capital One's Nessie sandbox API to pull real transaction shapes, thousands of deposits, irregular client payments, monthly bills, and proved a graph structure captures relationships flat spreadsheets miss.",
    ],
  },
  {
    label: "POC",
    variant: "stats",
    stats: [
      { value: "1,707", label: "Deposits validated for one test customer" },
      { value: "0–100", label: "Financial Identity Score with letter grades" },
      { value: "6", label: "Analysis agents in the pipeline" },
      { value: "~20 hr", label: "Technica UMD hackathon sprint" },
    ],
  },
  {
    label: "User persona",
    title: "Freelancer proving financial health without a steady paycheck",
    paragraphs: [
      "Gig workers and freelancers need to show lenders, landlords, or clients that irregular income can still be stable. They want one clear score and a story behind it, not a raw bank CSV.",
    ],
    variant: "steps",
    steps: [
      {
        label: "Login",
        description: "Sign in and connect to their banking history for analysis",
      },
      {
        label: "Analyze",
        description: "One run loads income, cashflow, clients, and runway into the graph",
      },
      {
        label: "Dashboard",
        description: "See the health score with charts for cashflow, income mix, and cushion",
      },
      {
        label: "Explore",
        description: "Inspect the graph of accounts, deposits, merchants, and bills",
      },
    ],
  },
  {
    label: "Tech stack",
    title: "Deterministic scoring, LLM for language only",
    paragraphs: [
      "The architectural bet: keep scoring in pure Python so results stay reproducible; use the LLM only for explanations. The graph is the memory; agents query it with minimal Cypher.",
    ],
    chipRows: [
      ["Python 3.11", "FastAPI", "Neo4j AuraDB", "Nessie API"],
      ["Gemini 2.0 Flash", "Explanations and recommendations only"],
      ["React 18", "Vite", "Tailwind", "Recharts", "NeoVis.js"],
      ["Google Cloud Run", "Docker backend + frontend"],
    ],
  },
  {
    label: "Research",
    variant: "callout",
    paragraphs: [
      "Nessie API limitations shaped the design: no merchant_id on deposits (text substring matching), bills not linked to accounts (MD5-hash offset workaround). Each workaround is documented with honest trade-offs.",
      "Scoring weights, 35% income stability, 25% diversification, 20% volatility, 20% cushion, prioritize income regularity for freelancers.",
    ],
  },
  {
    label: "Build",
    title: "Five core pieces",
    variant: "grid",
    grid: [
      {
        title: "Data pipeline",
        description: "Nessie → Neo4j ingestion.",
        items: ["Six bulk API calls", "Four-phase Neo4j load", "MERGE idempotency", "Merchant substring linking", "Derived Transaction nodes"],
      },
      {
        title: "Deterministic agents",
        description: "Agents 1–4, no LLM, reproducible.",
        items: ["Income stability", "Cashflow volatility", "Client diversification", "Weighted 0–100 scorer"],
      },
      {
        title: "LLM layer",
        description: "Agents 5–6, human-facing text.",
        items: ["Gemini explanation", "Structured recommendations", "Template fallback", "Rule-based parser fallback"],
      },
      {
        title: "API + frontend",
        description: "How users interact.",
        items: ["POST /analysis/full", "Score gauge + charts", "Graph visualization", "Cloud Run deployment"],
      },
    ],
    gridFooter: {
      title: "Scoring formula",
      description: "Letter grades A+ (≥80) through D/F (<40).",
      items: [
        "35% income stability",
        "20% cashflow volatility (inverted)",
        "25% client diversification",
        "20% cushion, runway ÷ 6 months",
      ],
    },
  },
  {
    label: "How it works",
    variant: "phases",
    subsections: [
      {
        title: "Phase 1 - Ingestion (one-time)",
        code: `Nessie Enterprise API (6 bulk endpoints)
    → Python pipeline orchestrator
    → Neo4j loader (nodes → relationships → derived transactions → merchant links)
    → Neo4j AuraDB populated`,
      },
      {
        title: "Phase 2 - Analysis (per login)",
        code: `User logs in → POST /analysis/{id}/full
    → Agent 1: income metrics
    → Agent 2: cashflow volatility
    → Agent 3: client concentration + bills
    → Agent 4: weighted 0–100 score
    → Agent 5–6: Gemini explanation + recommendations
    → Dashboard + graph page render`,
      },
    ],
  },
];

export const feedforwardContent: ProjectContentSection[] = [
  {
    label: "Problem",
    title: "Food assistance shouldn't depend on static lists and phone trees",
    paragraphs: [
      "People facing food insecurity hit language gaps, low tech literacy, stigma, and not knowing which pantry is open when they need it. Existing resources are often hard to navigate on a phone and not available in their language or at odd hours.",
    ],
  },
  {
    label: "Solution",
    title: "24/7 AI assistance for 441 DC-area food agencies",
    variant: "callout",
    paragraphs: [
      "FeedForward walks users through intake by voice or chat, searches a database of 441 food agencies, and returns ranked matches with optional public transit directions.",
    ],
    grid: [
      { title: "Voice", items: ["OpenAI Realtime", "WebRTC", "Bilingual EN/ES"] },
      { title: "Chat", items: ["GPT-4o streaming", "Socket.IO", "14 conditional steps"] },
      { title: "Search", items: ["Dietary filters", "Schedule logic", "Haversine sort"] },
      { title: "Transit", items: ["WMATA integration", "Transit App API", "Directions to pantry"] },
    ],
  },
  {
    label: "Outcomes",
    variant: "stats",
    stats: [
      { value: "2nd", label: "Runner-up · UMD Smith School × Capital Area Food Bank" },
      { value: "441", label: "DC-area food agencies in MySQL" },
      { value: "24/7", label: "Voice and chat availability" },
      { value: "2", label: "Languages, English and Spanish" },
    ],
  },
  {
    label: "Validation",
    paragraphs: [
      "Built around real agency data with location, availability schedules, dietary options, and service frequency. Core test: can an AI agent reliably complete intake and return accurate, distance-sorted matches?",
    ],
  },
  {
    label: "POC",
    bullets: [
      "Voice agent fills a visible intake form in real time while talking to the user.",
      "Structured answers drive complex pantry scheduling logic (day-of-week, week-of-month, dietary filters).",
      "Results ranked by Haversine distance and enriched with transit directions.",
    ],
  },
  {
    label: "User persona",
    variant: "steps",
    steps: [
      { label: "Open", description: "Homepage floating widget → voice or chat" },
      { label: "Intake", description: "12 voice questions or 14 chat steps with branching" },
      { label: "Search", description: "MySQL query with dietary + schedule filters" },
      { label: "Results", description: "Ranked matches + optional transit directions" },
    ],
  },
  {
    label: "Tech stack",
    paragraphs: [
      "Split AI plumbing from data plumbing. Flask handles LLM sessions; Express handles the database layer both agents share.",
    ],
    chipRows: [
      ["Flask", "Express", "MySQL on AWS RDS", "JWT auth"],
      ["OpenAI Realtime API", "WebRTC", "GPT-4o", "Socket.IO streaming"],
      ["Vanilla JS + Jinja2", "Webflow-exported site base"],
    ],
  },
  {
    label: "Research",
    variant: "callout",
    paragraphs: [
      "Voice required sub-second audio, WebRTC directly to OpenAI, Flask only mints ephemeral keys. Chat benefited from server-side streaming via Socket.IO.",
      "Form reliability was the hardest UX problem. Fix: tool-first design, the model must call structured form tools before each question, with client-side validation guarding progression.",
    ],
  },
  {
    label: "Build",
    title: "Four core pieces",
    variant: "grid",
    grid: [
      {
        title: "Voice agent (Alysia)",
        description: "Bilingual voice intake.",
        items: ["WebRTC to Realtime API", "7 client-side tools", "DOM form questions", "Branching logic", "Haversine-sorted results"],
      },
      {
        title: "Chat agent",
        description: "Text alternative to voice.",
        items: ["Socket.IO to Flask", "GPT-4o streaming", "6 tools", "14 conditional steps", "Same search backend"],
      },
      {
        title: "Search engine",
        description: "441 agencies in MySQL.",
        items: ["Dynamic SQL builder", "Dietary + schedule filters", "Week-of-month logic", "Haversine distance", "Transit proxy"],
      },
      {
        title: "Web surfaces",
        description: "Supporting UX.",
        items: ["Explore / maps", "Heatmap", "Staff dashboard", "Feedback endpoint", "Floating widget"],
      },
    ],
  },
  {
    label: "How it works",
    variant: "phases",
    subsections: [
      {
        title: "Voice path",
        code: `User opens /voice
    → Flask mints Realtime session token (EN or ES)
    → WebRTC + data channel to OpenAI
    → Client-side tools fill form (12 questions)
    → POST to Express /search → MySQL → Haversine sort
    → Optional /transitPlan → agent speaks nearest match`,
      },
      {
        title: "Chat path",
        code: `User opens /chat
    → Socket.IO to Flask
    → GPT-4o streams with tool calls
    → Client executes form tools (14 steps)
    → Same Express /search for results
    → Text response with ranked matches`,
      },
    ],
  },
];

export const intelliRagsContent: ProjectContentSection[] = [
  {
    label: "Problem",
    title: "Most RAG demos stop at a chatbot",
    paragraphs: [
      "IntelliRAGs does ingestion and Q&A, but adds an evaluation harness that measures retrieval and answer quality on a real benchmark, so every design choice is backed by numbers instead of vibes.",
    ],
  },
  {
    label: "Solution",
    title: "RAG with a benchmark-backed evaluation harness",
    variant: "callout",
    paragraphs: [
      "Ingest documents, answer questions with source grounding, and prove quality with Hit@1, Recall@5, MRR, and LLM-judged faithfulness on Vectara's Open RAG Benchmark.",
    ],
  },
  {
    label: "Validation",
    paragraphs: [
      "Ran the full pipeline against Vectara's Open RAG Benchmark, 147 text-only queries over 120 academic papers. Clear diagnosis: retrieval was decent, but ranking needed work.",
    ],
    variant: "table",
    table: {
      headers: ["Metric", "Score", "What it means"],
      rows: [
        ["Hit@1", "0.46", "Right chunk ranked first ~46% of the time"],
        ["Recall@5", "0.69", "Gold chunk in top 5 ~69% of the time"],
        ["MRR", "0.60", "Mean reciprocal rank across queries"],
        ["Faithfulness", "4.31 / 5", "LLM judge, answer grounded in context"],
        ["Correctness", "4.29 / 5", "LLM judge, answer matches gold"],
      ],
    },
  },
  {
    label: "POC",
    variant: "stats",
    stats: [
      { value: "147", label: "Benchmark queries evaluated" },
      { value: "0.22", label: "Recall@5 − Hit@1 gap, ranking opportunity" },
      { value: "0.21s", label: "Average retrieval latency per query" },
      { value: "~8 min", label: "Full eval wall time" },
    ],
  },
  {
    label: "Tech stack",
    paragraphs: [
      "Key design choices: asymmetric Cohere embeddings (search_document vs search_query), 500-word chunks with 50-word overlap, section-recall gold mapping, LLM-as-judge with documented same-model bias caveat.",
    ],
    chipRows: [
      ["FastAPI", "Streamlit", "ChromaDB", "SQLite analytics"],
      ["Cohere embed-english-v3.0", "command-r7b-12-2024"],
      ["JWT auth", "Input/output guardrails"],
    ],
  },
  {
    label: "Research",
    variant: "callout",
    paragraphs: [
      "Section-recall gold mapping evaluates 'does this chunk expose the answer?' not 'is this chunk identical to the gold section?', an 8-gram overlap threshold of 0.30 with section-size denominator.",
      "Highest-leverage next step identified: reranking (e.g. Cohere Rerank) to close the Recall@5 vs Hit@1 gap. Not implemented yet.",
    ],
  },
  {
    label: "Build",
    title: "Four core pieces",
    variant: "grid",
    grid: [
      {
        title: "Document ingestion",
        description: "Text → vectors in ChromaDB.",
        items: ["Text extraction", "500-word chunks, 50 overlap", "Cohere embeddings", "Metadata + rate-limit handling", "Analytics logging"],
      },
      {
        title: "Retrieval + generation",
        description: "Grounded Q&A engine.",
        items: ["Input/output guardrails", "Top-5 semantic search", "Prompt template", "command-r7b-12-2024", "Source citations"],
      },
      {
        title: "Evaluation harness",
        description: "Open RAG Benchmark runner.",
        items: ["147-query sample", "Gold-chunk mapping", "Hit@1 · Recall@5 · MRR", "LLM judge scores", "JSONL + eval_runs history"],
      },
      {
        title: "Analytics + dashboard",
        description: "Usage and eval visibility.",
        items: ["SQLite events", "Streamlit statistics page", "JWT auth", "Human QA workflow", "Reproducible runs"],
      },
    ],
  },
  {
    label: "How it works",
    variant: "phases",
    subsections: [
      {
        title: "Production path",
        code: `Upload file → extract → chunk → embed (search_document)
    → ChromaDB storage
    → User asks question → guardrails → embed (search_query)
    → Retrieve top-5 → generate answer → guardrails → log analytics`,
      },
      {
        title: "Evaluation path",
        code: `Load RAGBench metadata → sample 147 queries
    → Ingest corpus → map gold sections to chunk IDs
    → Per query: retrieve + generate + score
    → Compute Hit@1, Recall@5, MRR, faithfulness, correctness
    → Save JSONL + Statistics page plots`,
      },
    ],
  },
  {
    label: "Results",
    bullets: [
      "Baseline run (ragbench-baseline, git badf46c): Hit@1 0.46, Recall@5 0.69, MRR 0.60",
      "Generation latency: 2.19 s/query average",
      "3 of 147 judge failures on LaTeX-heavy text, logged as 0, run continued",
    ],
  },
];

export const orchestratorContent: ProjectContentSection[] = [
  {
    label: "Problem",
    title: "Provisioning GCP still means docs, flags, and 3am IAM errors",
    paragraphs: [
      "Setting up a GCP pipeline, Pub/Sub → Dataflow → BigQuery, requires knowing service dependencies, CLI syntax, project configuration, and quota limits. People want to describe the outcome and have the system figure out the steps.",
    ],
  },
  {
    label: "Solution",
    title: "Plain English → ordered tool plans → gcloud execution",
    variant: "callout",
    paragraphs: [
      "Cloud Orchestrator is a multi-agent GCP automation platform on Google's ADK that turns natural-language requests into ordered execution plans with DAG visualization, budget/quota guardrails, and gcloud-backed tools across ~20 GCP services.",
    ],
    grid: [
      { title: "Plan", items: ["Gemini 2.5-flash", "3–5 tool calls", "Dependency order"] },
      { title: "Visualize", items: ["Cytoscape.js DAG", "HTML export", "Service edges"] },
      { title: "Guard", items: ["Budget check", "Quota API", "BLOCK / WARN / PASS"] },
      { title: "Execute", items: ["15 tool modules", "gcloud subprocess", "68 catalog actions"] },
    ],
  },
  {
    label: "Validation",
    paragraphs: [
      "Core test: can an LLM produce ordered, dependency-correct tool-call plans for real GCP operations, and can those plans execute via gcloud subprocess tools? Capability catalog defines 68 named actions; 34 fully implemented with parameter schemas.",
    ],
  },
  {
    label: "User persona",
    variant: "steps",
    steps: [
      { label: "Auth", description: "Check gcloud login, list/create/set GCP project" },
      { label: "Plan", description: "Type intent → planner generates 3–5 tool calls" },
      { label: "Visualize", description: "DAG opens in browser (Cytoscape.js)" },
      { label: "Execute", description: "Worker hub runs gcloud tools → resources provisioned" },
    ],
  },
  {
    label: "Tech stack",
    paragraphs: [
      "Multi-agent decomposition (plan → guard → execute) over a monolithic script. YAML catalog as source of truth for actions and agent routing. gcloud subprocess chosen over per-service SDKs for hackathon speed.",
    ],
    chipRows: [
      ["Google ADK 1.2.1", "Gemini 2.5-flash", "Gemini 2.0-flash"],
      ["YAML capability catalog", "Cytoscape.js DAG"],
      ["Docker", "Cloud Run", "2 Gi RAM", "2 CPU", "gcloud bundled"],
      ["Vertex AI Reasoning Engine", "AdkApp"],
    ],
  },
  {
    label: "Research",
    variant: "callout",
    paragraphs: [
      "Plans parsed with ast.literal_eval (not eval) after stripping markdown fences, fast for demos, fragile for production. Production would use JSON schema or structured output.",
      "Alternate DAG planner path (3 LLM calls: intent → service DAG → tool plan) built but not wired to active parent, direct planner uses 1 call for speed.",
    ],
  },
  {
    label: "Build",
    title: "Three agent layers + registry",
    variant: "grid",
    grid: [
      {
        title: "Planner agent",
        description: "NL → ordered tool calls.",
        items: ["build_tool_plan (Gemini 2.5)", "Direct path (active)", "DAG path (alternate)", "Auth/setup tools", "open_dag_page visualization"],
      },
      {
        title: "Guard agent",
        description: "Budget + quota safety.",
        items: ["check_budget, BLOCK at 100%", "check_quota, Service Usage API", "Quota increase mailto drafts", "check_quota_before_planning bridge"],
      },
      {
        title: "Worker hub",
        description: "gcloud execution layer.",
        items: ["15 tool modules", "Compute · BQ · Pub/Sub · Dataflow", "GKE · Vertex AI · IAM", "subprocess.run pattern", "Capability routing from YAML"],
      },
      {
        title: "Deployment",
        description: "Where it runs.",
        items: ["adk web (local)", "Cloud Run port 8080", "Vertex AdkApp + tracing", "Vercel stub API", "68 actions in catalog"],
      },
    ],
  },
  {
    label: "How it works",
    variant: "phases",
    subsections: [
      {
        title: "Request flow (active demo path)",
        code: `"Create a VM and set up monitoring"
    → direct_agent → build_tool_plan (Gemini 2.5-flash)
    → [{compute.create_vm}, {cloudmonitoring.create_dashboard}]
    → open_dag_page → Cytoscape.js HTML
    → [Optional: guard quota check]
    → worker_hub_agent → gcloud → GCP APIs`,
      },
      {
        title: "Agent topology",
        paragraphs: [
          "Several root patterns coexist from iterative design: Conductor root (intent routing), Sequential root (Planner → Guard → Worker), and Planner parent (what app.py uses, delegates to direct_agent only).",
        ],
      },
    ],
  },
];
