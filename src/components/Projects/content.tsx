export interface ProjectDescription {
  ProjectPrimarySubHeading: string;
  ProjectPrimaryElaboration: string;
}

export const ProjectDescription: ProjectDescription = {
  ProjectPrimarySubHeading: "Academic, Professional and Personal Projects",
  ProjectPrimaryElaboration:
    "Throughout my academic life, I've taken on many modules that required me to come up with something new, fun and innovative. As a side hustle, I've also spent considerable time on developing those projects after the end of the semester or picked up something entirely new just for fun. I'd be more than happy to share a detailed account of those projects and show some of my works over here. For professional projects, I can elaborate on the project scope, direction and outcome, but I won't be able to provide any code or works due to IP reasons. Nevertheless, if you'd like to learn more, just drop me a message and we can discuss further!",
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
    Organisation: "Udemy - React & Typescript",
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
    Organisation: "Independent",
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
];
