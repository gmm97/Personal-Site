export interface ProjectDescriptionSection {
  ProjectPrimarySubHeading: string;
  ProjectPrimaryElaboration: string;
}

export const ProjectDescription: ProjectDescriptionSection = {
  ProjectPrimarySubHeading: "Academic, Professional and Personal Projects",
  ProjectPrimaryElaboration:
    "Throughout my academic life, I've always tried to come up with something new, fun and innovative to broaden my horizons. Some of the projects are listed here! A few may not have a description just yet, but I'm working on adding them:",
};

export interface CarouselContentItem {
  ProjectName: String;
  Organisation: String;
  KeywordTags: String[];
  BackgroundImage: String;
  BriefDescription: String;
  LinkName: String;
  Progress: "Completed" | "In Progress";
  PageData: SeparateProjectPageDetails;
}

interface SeparateProjectPageDetails {
  TimeWorked: String;
}

export const CarouselContent: CarouselContentItem[] = [
  {
    ProjectName:
      "Modelling market competition: Telecommunication companies in the US",
    Organisation: "MH3110: Ordinary Differential Equations",
    KeywordTags: ["MATLAB", "Optimization", "Differential Geometry"],
    BackgroundImage: "ParticleSwarm",
    BriefDescription:
      "Implementing Particle Swarm Optimization (PSO) in MATLAB to model market share dynamics in the US telecommunications industry",
    LinkName: "particleswarm",
    Progress: "Completed",
    PageData: {
      TimeWorked: "Jan 2020 - May 2020",
    },
  },

  {
    ProjectName: "Monitoring database query performance using PostgreSQL",
    Organisation: "EE4791: Database Systems",
    KeywordTags: ["PostgreSQL", "Benchmarking"],
    BackgroundImage: "Database",
    BriefDescription:
      "Examining the role of database indexing on query planning and execution",
    LinkName: "database",
    Progress: "Completed",
    PageData: {
      TimeWorked: "Jan 2021 - May 2021",
    },
  },
  {
    ProjectName: "Integrating memory networks into generative chatbots",
    Organisation: "Land Transport Authority",
    KeywordTags: ["Development", "NLP", "Chatbot"],
    BackgroundImage: "Chatbot",
    BriefDescription:
      "Designing and testing a small memory-network based chatbot",
    LinkName: "chatbots",
    Progress: "Completed",
    PageData: {
      TimeWorked: "May 2020 - Aug 2020",
    },
  },

  {
    ProjectName: "Structural Equation Modelling (SEM)",
    Organisation: "Deloitte Global",
    KeywordTags: ["R", "Machine Learning", "Statistical Modelling"],
    BackgroundImage: "Structure",
    BriefDescription:
      "Using structural equation models in R to predict organisational performance",
    LinkName: "SEM",
    Progress: "Completed",
    PageData: {
      TimeWorked: "Apr 2020 - Sep 2020",
    },
  },

  {
    ProjectName: "Microservices with Nodejs and React",
    Organisation: "-",
    KeywordTags: [
      "React (Next.js)",
      "Nodejs",
      "Typescript",
      "Node-Nats-Streaming",
      "Docker",
      "Kubernetes",
    ],
    BackgroundImage: "Microservices",
    BriefDescription:
      "Designing and building a e-commerce platform using Nodejs and Next.js",
    LinkName: "microservices",
    Progress: "In Progress",
    PageData: {
      TimeWorked: "Jan 2021 - May 2021",
    },
  },
  {
    ProjectName: "Building a code execution platform in React & Typescript",
    Organisation: "-",
    KeywordTags: ["React", "Typescript", "Lerna", "NPM"],
    BackgroundImage: "CodeExecution",
    BriefDescription:
      "Designing and building a ticketing platform using Nodejs and React",
    LinkName: "codebook",
    Progress: "Completed",
    PageData: {
      TimeWorked: "Jan 2021 - May 2021",
    },
  },
  {
    ProjectName: "My Personal Website",
    Organisation: "-",
    KeywordTags: ["React", "Styled Components"],
    BackgroundImage: "PersonalWebsite",
    BriefDescription:
      "Building my personal website using React Styled Components",
    LinkName: "personal-site",
    Progress: "In Progress",
    PageData: {
      TimeWorked: "May 2021 - Jul 2021",
    },
  },
  {
    ProjectName: "Machine Learning for Heart Sound Classification",
    Organisation: "EE4497 Pattern Recognition & Machine Learning",
    KeywordTags: ["Machine Learning", "Survey Paper"],
    BackgroundImage: "Heartsound",
    BriefDescription:
      "Submitting a survey paper on Heart Sound Classification for publication",
    LinkName: "heart-sound",
    Progress: "In Progress",
    PageData: {
      TimeWorked: "Jan 2021 - May 2021",
    },
  },
  {
    ProjectName: "Designing a Kalman Filter for Feedback Control Systems",
    Organisation: "EE5103 Computer Control Systems",
    KeywordTags: ["MATLAB", "Control Theory", "Modelling"],
    BackgroundImage: "Filter",
    BriefDescription: "Implementing and testing a Kalman Filter using MATLAB",
    LinkName: "kalman-filter",
    Progress: "Completed",
    PageData: {
      TimeWorked: "Aug 2020 - Dec 2020",
    },
  },
  {
    ProjectName: "MITRE Att&CK - Detecting Cybersecurity Threats",
    Organisation: "Singtel-NUS Cybersecurity Research Lab",
    KeywordTags: ["Python", "Machine Learning", "Modelling"],
    BackgroundImage: "Attack",
    BriefDescription:
      "Training, testing and deploying NLP models for threat classification",
    LinkName: "mitre-attack",
    Progress: "In Progress",
    PageData: {
      TimeWorked: "May 2021 - Aug 2021",
    },
  },
];
