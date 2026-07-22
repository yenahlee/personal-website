// Edit this file to personalize your portfolio.

export const profile = {
  name: "Yenah Lee",
  role: "Software Engineer",
  tagline:
    "Building full-stack applications, AI-powered experiences, and user-focused products.",
  bio: [
    "I'm a software engineer and Computer Science student at the University of Toronto. I enjoy turning ideas into products, whether that's building AI-powered applications, designing intuitive user experiences, or developing scalable full-stack systems.",
    "I'm currently seeking new graduate software engineering opportunities where I can continue learning, building, and making an impact.",
  ],
  email: "yenah.lee@mail.utoronto.ca",
  github: "https://github.com/yenahlee",
  linkedin: "https://www.linkedin.com/in/yenah-lee-785299250/",
};

export const skills = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Vue.js",
  "Flask",
  "Bootstrap",
  "Tailwind CSS",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Git",
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  href?: string;
  github?: string;
  devpost?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    name: "PeaceKeeper",
    description:
      " a real-time incident reporting app that analyzes audio conversations with Cohere AI to detect racismand microaggressions",
    tags: ["Python", "CohereAI", "ReactJS", "Flask", "SQLite"],
    github: "https://devpost.com/software/brutalitywatch",
    linkLabel: "Devpost",
  },
  {
    name: "ArguMentor",
    description:
      "AI-powered debate platform where chatbots debate topics, requiring users to identify misinformation.",
    tags: ["React", "Python", "Flask", "OpenAI API", "TailwindCSS"],
    github: "https://devpost.com/software/temptalk-pdw2o6",
    linkLabel: "Devpost",
  },
  {
    name: "Green Speaking",
    description:
      "A brand new website for Green Speaking, a non-profit organization that promotes environmental awareness and sustainability through educational programs and community initiatives.",
    tags: ["React", "FastAPI", "Tailwind CSS"],
    github: "https://www.greenspeaking.org/",
    linkLabel: "Website",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string | string[];
};

export const experience: Experience[] = [
  {
    company: "TD Bank",
    role: "Software Engineer Intern",
    period: "January 2026 — April 2026",
    description: [
      "Refactored legacy regex-based parsing logic into pure SQL queries within enterprise Java/Spring applications, improving maintainability and alignment with team coding standards across tax and regulatory reporting systems.",
      "Identified and documented gaps in validation logic for client tax filing workflows, surfacing edge cases that strengthened data integrity for a platform processing filings at institutional scale.",
      "Gained hands-on exposure to Autosys job scheduling in a production enterprise environment, independently learning and configuring batch job workflows to support regulatory reporting pipelines.",
    ],
  },
  {
    company: "Dash Social",
    role: "Development Intern",
    period: "September 2025 - December 2025",
    description: [
      "Owned the end-to-end implementation of the Delete Inbox View feature — from backend logic through to reusable Vue.js UI components — within a SaaS platform serving 30M+ monthly active users.",
      "Contributed to two major feature launches (Custom Inbox View and Salesforce integration), building frontend flows including confirmation dialogs, warning banners, and drawer navigation, alongside a backend GET endpoint for Salesforce case mappings.",
      "Resolved a range of post-release production tickets — including timezone handling, unread counter accuracy, and UI state bugs — catching defects through test coverage before they reached production.",
    ],
  },
];
