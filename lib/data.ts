export const profile = {
  name: "Aniruth Raghuraman",
  shortName: "Aniruth",
  role: "Backend Engineer",
  focus: "Banking & FinTech systems",
  location: "Chennai, India",
  status: "Open to remote roles",
  email: "aniruth.raman5@gmail.com",
  github: "https://github.com/Aniruth-raman",
  linkedin: "https://www.linkedin.com/in/aniruth-raghuraman/",
  resumeUrl: "/Resume.pdf",
  resumeFileName: "Aniruth-Raghuraman-Backend-Engineer.pdf",
  yearsExperience: "6.5+",
};

export const about = {
  paragraphs: [
    "I'm a backend engineer with 6.5+ years in banking and fintech, currently a Technical Lead at HCLTech. I spend most of my time in Java and Spring Boot, moving services onto Kubernetes and wiring them together with Kafka.",
    "I started at TCS in a functional testing role, standardizing a BDD framework and picking up Java, ML and React Native work along the way. I moved into Java development at Wipro because building was what I actually wanted to do — deployment and infra came with that role rather than as a separate track, which gave me a working view of a system end to end, from the code to the cluster it runs on.",
    "Outside of client work, I build small tools that solve problems I actually have — a mod-queue bot, a content scheduler, a document scanner — and write about the process. I'm also learning AI agents and systems, and I keep a running note of what I'm focused on at any given time on my /now page.",
  ],
};

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript"],
  },
  {
    label: "Backend",
    items: ["Spring Boot", "Django", "Flask", "FastAPI", "Node.js"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    label: "Infrastructure",
    items: ["Kafka", "Kubernetes", "Docker", "Microservices", "CI/CD"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: "Cloud",
    items: ["Google Cloud", "Microsoft Azure"],
  },
];

export type Experience = {
  role: string;
  org: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Technical Lead",
    org: "HCLTech",
    location: "Chennai, India",
    period: "2026 — Present",
    current: true,
    points: [
      "Leading migration of a legacy Java Spring / JSP banking application from on-prem to Google Cloud Platform.",
      "Resolving SonarQube-flagged vulnerabilities as part of the modernization effort.",
      "Preparing the next phase of the rewrite, moving the service to Java Quarkus with a React frontend.",
      "Deploying through Harness as part of the team's CI/CD pipeline.",
    ],
  },
  {
    role: "Senior Software Engineer",
    org: "Wipro Technologies",
    location: "Chennai, India",
    period: "2024 — 2026",
    points: [
      "Moved into Java development after four and a half years in testing, to focus on building rather than validating.",
      "Handled deployment and infrastructure as part of the development role — Helm, OpenShift, GKE and Docker — rather than as a separate DevOps track.",
      "Shipped a production change for a new service as part of a platform migration.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Tata Consultancy Services",
    location: "Chennai, India",
    period: "2019 — 2024",
    points: [
      "Started in a functional testing role on a BDD framework (WebdriverIO), and helped migrate it from JavaScript to TypeScript and from sync to async.",
      "Also worked on ML initiatives, a VR application, and a React Native app for client visits, alongside the core testing work.",
      "Built strong visibility with client leadership through the impact of this work.",
    ],
  },
];

export type Education = {
  degree: string;
  org: string;
  period?: string;
};

export const education: Education[] = [
  {
    degree: "MBA, FinTech",
    org: "Birla Institute of Technology and Science (BITS), Pilani",
    period: "2022 — 2024",
  },
  {
    degree: "B.Tech, Information and Communication Technology",
    org: "SASTRA Deemed University, Thanjavur",
    period: "2015 — 2019",
  },
];

export const now = {
  lastUpdated: "August 2026",
  mainFocus: [
    "Leading the migration of a legacy Java Spring/JSP banking application from on-prem to Google Cloud Platform at HCLTech, with a Java Quarkus + React rewrite coming up next.",
    "Learning AI agents and the broader AI systems space — genuinely interesting territory to me right now.",
    "Working on my fitness. Don't be surprised if you catch me at the gym.",
  ],
  backBurner: [
    "Building and writing about small side projects — a Reddit mod-queue bot, a LinkedIn content scheduler, a document scanner app.",
    "Moderating r/developersIndia.",
  ],
};

export type InterviewQA = {
  question: string;
  answer: string[];
};

export const interview: InterviewQA[] = [
  {
    question: "What makes you who you are today?",
    answer: [
      "Curiosity. Whenever I come across something I don't know, I try to learn it — not to become an expert, but to have enough fluency to understand what's going on. So if something breaks, I can fix it myself instead of depending on someone else. This isn't just technical. I try to do this in general too.",
    ],
  },
  {
    question: "What's the best thing you've built without anyone asking you to?",
    answer: [
      "Back in 2020, my aunt worked at a small company. Part of her job was consolidating hundreds of client invoices into a report, by hand, every time. It used to eat up days of her time. I built her a tool: parsed the PDFs to text, used regex to pull out the fields, and generated the consolidated report using Jinja templates in her company's format. This was pre-LLM, so this kind of thing actually took real work.",
      "The harder part was giving it to someone non-technical. I couldn't hand her a script and a terminal. So I built a GUI in tkinter — file/folder pickers, client selection, the works — and packaged it into an executable with cxfreeze so she didn't have to install Python or any dependencies. I kept the regex rules in an external config file, so if an invoice format changed, she — or I — could fix it without rebuilding the whole app.",
      "What used to take her 5-7 days took an hour. That's one of the things I'm most proud of building.",
    ],
  },
  {
    question: "How did you get from testing to where you are now?",
    answer: [
      "I started at TCS in a functional testing role, working on the team's WebdriverIO BDD framework. Within six months, with barely any handover, I was working at the level of the senior folks on it. I also worked on ML initiatives, a VR application, and a React Native app for client visits. I helped move the testing framework from sync to async and from JavaScript to TypeScript, and standardized it for the team. My work had real visibility on the client side — client leadership knew me and my work by name. But eventually it got repetitive and I stopped learning. So I moved into Java development at Wipro, since dev work was what I actually wanted. Deployment and infra work came as part of that role, not as a separate track. Same at HCLTech, where I now lead the effort moving our banking application from on-prem to GCP.",
    ],
  },
  {
    question:
      "Some interviewers test deep language trivia — HashMap internals, sorting by hand. What's your take on that as a signal?",
    answer: [
      "Honestly, I haven't run into real situations where I needed to write a sorting algorithm from scratch, so I might be rusty on it. But if a job actually needs that depth, I'll learn it. I have no resistance to learning new things — that's kind of the whole premise of who I am.",
    ],
  },
  {
    question: "Generalist or specialist?",
    answer: [
      "Generalist. I don't want to tie myself to one stack or language. Languages are tools for the problem in front of you — if all you have is a hammer, everything looks like a nail. I'd rather know what's actually best for the problem and use that.",
    ],
  },
  {
    question: "How good are you with infra/DevOps vs. backend dev?",
    answer: ["Comfortable on both."],
  },
  {
    question: "What kind of team are you looking for?",
    answer: [
      "One where my work has real impact, and where people are treated like adults — decisions make logical sense, not arbitrary rules for their own sake. People should have the autonomy to do what's actually best rather than follow process for the sake of process.",
    ],
  },
  {
    question: "What are you working on right now?",
    answer: [
      "Learning AI agents and the broader AI systems space — I find it genuinely interesting. Also working on my fitness, so don't be surprised if you catch me at the gym. More detail on my /now page.",
    ],
  },
  {
    question: "Thoughts on AI-assisted programming?",
    answer: [
      "Useful — it adds a layer of abstraction where you're not thinking about every line but looking at things from a higher level. But you still need to judge whether a piece of code is actually needed or correct. A human has to sign off, not just accept whatever the AI produces.",
    ],
  },
];

export type Project = {
  name: string;
  status: "active" | "shipped";
  description: string;
  stack: string[];
  repoUrl: string;
};

export const projects: Project[] = [
  {
    name: "reddit-llm-moderator",
    status: "active",
    description:
      "An LLM-powered automation tool for a Reddit mod queue, built to cut down manual review time. Uses PRAW to read the queue and free-tier LLM APIs via OpenRouter to make moderation calls, deployed on a schedule through GitHub Actions.",
    stack: ["Python", "PRAW", "OpenRouter", "GitHub Actions"],
    repoUrl: "https://github.com/Aniruth-raman/reddit-llm-moderator",
  },
  {
    name: "contentpilot",
    status: "active",
    description:
      "A LinkedIn content bot, rewritten from a Java Spring Boot original into a lighter Python script run on a GitHub Actions cron. Drafts are reviewed and approved from Telegram — a button tap approves or regenerates a post within seconds.",
    stack: ["Python", "GitHub Actions", "Telegram Bot API"],
    repoUrl: "https://github.com/Aniruth-raman/contentpilot",
  },
  {
    name: "Lens",
    status: "active",
    description:
      "A document scanner app for mobile, built with React Native and Expo. Detects document edges from the camera feed and exports clean, cropped PDFs.",
    stack: ["React Native", "Expo", "TypeScript"],
    repoUrl: "https://github.com/Aniruth-raman/Lens",
  },
];
