// src/data/projects.js
export const projects = [
  {
    title: "LLM + SQL Semantic Rewriter",
    timeframe: "2025",
    tags: ["Python", "FastAPI", "Hugging Face", "vLLM", "PostgreSQL"],
    blurb:
      "API that rewrites natural-language queries into optimized SQL using LLMs. Includes query analysis, rewrite heuristics, and latency/cost tracing.",
    repo: "",
    demo: "",
    image: "/images/projects/llm-sql.jpg",
    video: "",
    resources: {
      pdfs: [
        // { title: "Design Doc", href: "/docs/llm-sql-design.pdf" },
      ],
      slides: [
        // { title: "Tech Talk (PPTX)", href: "/slides/llm-sql-talk.pptx" },
      ],
    },
  },
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
        // keep empty unless you actually have a .pptx for this project
      ],
    },
  },
  {
    title: "Graduation Project — P300 Brain-Computer Interface",
    timeframe: "2025",
    tags: ["C#", "Python", "Machine Learning", "EEG", "BCI"],
    blurb:
      "Non-invasive P300-based BCI to assist individuals with severe motor disabilities. Using the Hybrid Unicorn Black Headset for EEG acquisition, the system translates P300 ERPs into commands to control educational websites and custom BCI games (UNO, Maze). Integrated signal processing and ML for robust P300 detection with accessible UIs. Addresses noise, usability, and accessibility to improve engagement and quality of life while contributing insights to assistive BCI.",
    repo: "",
    demo: "",
    image: "/images/projects/bci-cover.jpg",
    video: "/videos/bci-demo-silent.mp4",
    resources: {
      pdfs: [
        { title: "Project Book (PDF)", href: "/docs/graduation_project_book.pdf" },
      ],
      slides: [
        { title: "Defense Slides (PPTX)", href: "/slides/Final_presentation.pptx" },
      ],
    },
  },
];
