// src/data/projects.js
// Notes:
// - Put files under /public so they’re served at the same path (e.g. /docs/…, /slides/…, /videos/…).
// - Use safe filenames (no spaces or &). Example renames used below:
//   /docs/URIC_Certificate_Mazen_El_Sedfy.pdf
// - MP4s should be H.264 + yuv420p. Your BCI demo is already silent H.264.

/* Project catalog */
export const projects = [
  /* ---------- 1) LLM + SQL Semantic Rewriter ---------- */
  {
    title: "LLM + SQL Semantic Rewriter",
    timeframe: "2025",
    tags: ["Python", "FastAPI", "Hugging Face", "vLLM", "PostgreSQL"],
    blurb:
      "API that rewrites natural-language queries into optimized SQL using LLMs. Includes query analysis, rewrite heuristics, and latency/cost tracing.",
    repo: "",                  // e.g. "https://github.com/MazenELSEDFY/llm-sql"
    demo: "",                  // e.g. "https://llm-sql-demo.vercel.app"
    image: "/images/projects/llm-sql.jpg",
    video: "",                 // e.g. "/videos/llm-sql-demo.mp4"
    resources: {
      pdfs: [
        // { title: "Design Doc (PDF)", href: "/docs/llm-sql-design.pdf" },
      ],
      slides: [
        // { title: "Tech Talk (PPTX)", href: "/slides/llm-sql-talk.pptx" },
      ],
    },
  },

  /* ---------- 2) Anomaly Detection for Server Health ---------- */
  {
    title: "Anomaly Detection for Server Health",
    timeframe: "2024",
    tags: ["Python", "Scikit-learn", "Pandas"],
    blurb:
      "Prototype ML pipeline to flag abnormal server metrics and reduce manual log checks. Built feature engineering and thresholding with explainable outputs.",
    repo: "",
    demo: "",
    image: "/images/projects/anomaly.jpg",
    video: "",
    resources: {
      pdfs: [
        { title: "AIOps Report (PDF)", href: "/docs/NBE_AIOps_Report_and_Presentation.pdf" },
      ],
      slides: [
        // Add a real .pptx here if available later
        // { title: "AIOps Slides (PPTX)", href: "/slides/aiops-slides.pptx" },
      ],
    },
  },

  /* ---------- 3) Graduation Project — P300 Brain-Computer Interface ---------- */
  {
    title: "Graduation Project — P300 Brain-Computer Interface",
    timeframe: "2025",
    tags: ["C#", "Python", "Machine Learning", "EEG", "BCI"],
    blurb:
      "Non-invasive P300-based BCI to assist individuals with severe motor disabilities. Uses the Unicorn Black headset to detect ERPs and control educational sites & custom games (UNO, Maze). Includes signal processing, ML classification, and accessible UIs.",
    repo: "",
    demo: "",
    image: "/images/projects/bci-cover.jpg",
    video: "/videos/bci-demo-silent.mp4", // place at /public/videos/bci-demo-silent.mp4
    resources: {
      pdfs: [
        { title: "Project Book (PDF)", href: "/docs/graduation_project_book.pdf" },
        { title: "URIC Certificate (PDF)", href: "/docs/URIC_Certificate_Mazen_El_Sedfy.pdf" },
      ],
      slides: [
        { title: "Defense Slides (PPTX)", href: "/slides/Final_presentation.pptx" },
      ],
    },
  },

  /* ---------- 4) Smart Mask — Biosensor-Based Pathogen Exposure Monitor ---------- */
  {
    title: "Smart Mask — Biosensor-Based Pathogen Exposure Monitor",
    timeframe: "2020",
    tags: ["IoT", "Biosensors", "Wearable", "Bluetooth", "PMMA", "LiPo"],
    blurb:
      "Wearable mask concept with integrated biosensors to classify and count pathogens. Electronics sit in a waterproof PMMA case powered by a 3.7V LiPo; the controller processes readings and pushes Bluetooth alerts when exposure exceeds normal thresholds.",
    repo: "",
    demo: "",
    image: "",                 // e.g. "/images/projects/smart-mask.jpg"
    video: "",                 // e.g. "/videos/smart-mask-demo.mp4"
    resources: {
      pdfs: [
        // { title: "One-Pager (PDF)", href: "/docs/smart_mask_overview.pdf" },
      ],
      slides: [
        { title: "Smart Mask Slides (PPTX)", href: "/slides/Smart_Mask_Presentation.pptx" }, // put file at /public/slides
      ],
    },
  },
];
