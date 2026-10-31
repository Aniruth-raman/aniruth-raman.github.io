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
    "I'm a backend engineer with 6.5+ years in banking and fintech, and a Technical Lead at HCLTech. Most days I'm working in Java and Spring Boot, moving services to Kubernetes and connecting them with Kafka.",
    "I started at TCS in functional testing, where I helped standardize a BDD framework and also got to work on Java, ML, and React Native projects. At Wipro, I moved into Java development. Deployment and infrastructure came with the job, so I learned to follow a system from the code all the way to the cluster running it.",
    "Outside work, I build small tools for problems I run into, like a mod-queue bot, a content scheduler, and a document scanner. I write about the process, too. Lately I've been learning about AI agents and systems. My /now page is where I keep track of what I'm focused on.",
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
      "Leading the move of a legacy Java Spring/JSP banking application from on-premises servers to Google Cloud Platform.",
      "Resolving SonarQube-flagged vulnerabilities as part of the modernization effort.",
      "Preparing the next phase of the rewrite, which will move the service to Java Quarkus with a React frontend.",
      "Deploying through Harness as part of the team's CI/CD pipeline.",
    ],
  },
  {
    role: "Senior Software Engineer",
    org: "Wipro Technologies",
    location: "Chennai, India",
    period: "2024 — 2026",
    points: [
      "Moved into Java development after four and a half years in testing. I wanted to spend more of my time building software.",
      "Worked on deployment and infrastructure alongside development, using Helm, OpenShift, GKE, and Docker.",
      "Shipped a production change for a new service as part of a platform migration.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Tata Consultancy Services",
    location: "Chennai, India",
    period: "2019 — 2024",
    points: [
      "Started in functional testing with the team's WebdriverIO BDD framework. Helped move it from JavaScript to TypeScript and from synchronous to asynchronous tests.",
      "Alongside testing, worked on ML initiatives, a VR application, and a React Native app for client visits.",
      "The work brought me regular visibility with client leadership.",
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
    "At HCLTech, I'm leading the move of a legacy Java Spring/JSP banking application to Google Cloud Platform. A rewrite in Java Quarkus and React is next.",
    "I'm learning about AI agents and the wider field of AI systems. It's what I'm curious about lately.",
    "I'm also working on my fitness. You might see me at the gym.",
  ],
  backBurner: [
    "Building small side projects and writing about them: a Reddit mod-queue bot, a LinkedIn content scheduler, and a document scanner app.",
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
      "Curiosity. When I run into something I don't know, I try to learn enough to understand it. That way, when something breaks, I can often figure it out myself. I try to bring the same curiosity to things outside work, too.",
    ],
  },
  {
    question: "What's the best thing you've built without anyone asking you to?",
    answer: [
      "Back in 2020, my aunt worked at a small company. Part of her job was consolidating hundreds of client invoices into a report, by hand, every time. It used to eat up days of her time. I built her a tool: it parsed the PDFs to text, used regex to pull out the fields, and generated the report in her company's format with Jinja templates. I built it before LLM tools were part of my workflow.",
      "The tricky part was making it usable for someone who doesn't work in a terminal. I built a tkinter interface with file and folder pickers and client selection, then packaged it with cxfreeze so she didn't need Python or any other dependencies. I kept the regex rules in a separate config file, which meant she or I could update them if an invoice format changed without rebuilding the app.",
      "The report went from taking her five to seven days to taking an hour. I'm proud of that one.",
    ],
  },
  {
    question: "How did you get from testing to where you are now?",
    answer: [
      "I started at TCS in functional testing, working on the team's WebdriverIO BDD framework. With little handover, I was taking on work at the level of the senior engineers within six months. I also worked on ML initiatives, a VR application, and a React Native app for client visits. On the testing framework, I helped move the team from synchronous to asynchronous tests and from JavaScript to TypeScript. Client leadership knew my work, but after a while the role stopped teaching me much. I moved to Wipro to work in Java development, which was the direction I wanted to take. Deployment and infrastructure were part of that role, and now, at HCLTech, I lead the move of a banking application from on-premises servers to GCP.",
    ],
  },
  {
    question:
      "Some interviewers test deep language trivia — HashMap internals, sorting by hand. What's your take on that as a signal?",
    answer: [
      "I haven't had to write a sorting algorithm from scratch at work, so I'd probably be rusty. If a role calls for that level of detail, I'll brush up. I like learning new things, and I'm comfortable admitting when I need to.",
    ],
  },
  {
    question: "Generalist or specialist?",
    answer: [
      "Generalist. I don't want to limit myself to one stack or language. The problem should guide the choice of tools, and I'd rather understand the options than reach for the same answer every time.",
    ],
  },
  {
    question: "How good are you with infra/DevOps vs. backend dev?",
    answer: ["Comfortable on both."],
  },
  {
    question: "What kind of team are you looking for?",
    answer: [
      "A team where my work has a clear impact and people are trusted to make decisions. I value processes that help the work, and I like having room to choose the right approach when the situation calls for it.",
    ],
  },
  {
    question: "What are you working on right now?",
    answer: [
      "I'm learning about AI agents and AI systems, and working on my fitness. You might find me at the gym. I keep more detail on my /now page.",
    ],
  },
  {
    question: "Thoughts on AI-assisted programming?",
    answer: [
      "It's useful because it lets you work at a higher level instead of thinking through every line yourself. You still need to decide whether the code is needed and whether it's correct. I treat the AI's output as a suggestion that needs a person to review it.",
    ],
  },
];

export type Project = {
  name: string;
  status: "active" | "shipped";
  description: string;
  stack: string[];
  repoUrl: string;
  featured?: boolean;
  highlights?: string[];
};

export const projects: Project[] = [
  {
    name: "scale",
    status: "shipped",
    featured: true,
    description:
      "The vendor app required an account and sent every reading to their servers. I just wanted to read my weight and save it locally, so I reverse-engineered the scale's BLE protocol from the APK and built a simple replacement with no account and no server.",
    highlights: [
      "Derived the AILink BLE protocol from the shipped APK so the scale never needs the vendor app.",
      "No account and no cloud — readings go straight into a local SQLite database.",
      "Weight decoding verified against the physical scale; handles split frames and checksum validation.",
    ],
    stack: ["Flutter", "Dart", "BLE", "SQLite"],
    repoUrl: "https://github.com/Aniruth-raman/scale",
  },
  {
    name: "scan",
    status: "shipped",
    description:
      "Microsoft Lens moved scanning behind OneDrive, and the replacements all wanted an account or a subscription. I rebuilt the exact flow I actually used — point, shoot, adjust corners, save — so my documents stay on my phone.",
    stack: ["Flutter", "Dart", "Kotlin", "TensorFlow Lite"],
    repoUrl: "https://github.com/Aniruth-raman/scan",
  },
  {
    name: "reddit-llm-moderator",
    status: "active",
    description:
      "Moderating r/developersIndia meant reviewing the same modqueue patterns every day. I wanted the obvious cases handled automatically so I could spend time on the edge cases instead.",
    stack: ["Python", "PRAW", "OpenRouter", "GitHub Actions"],
    repoUrl: "https://github.com/Aniruth-raman/reddit-llm-moderator",
  },
  {
    name: "TechNeck",
    status: "active",
    description:
      "After too many hours looking down at my phone, I wanted a simple nudge when my neck angle drifted. The camera measures head pitch on-device and never records or uploads anything.",
    stack: ["React Native", "TypeScript", "ML Kit", "VisionCamera"],
    repoUrl: "https://github.com/Aniruth-raman/TechNeck",
  },
];
