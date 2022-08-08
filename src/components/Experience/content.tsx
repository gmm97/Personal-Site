export interface WorkExperienceItem {
  Title: string;
  Date: string;
  Role: string;
  Details: string[];
}

export const WorkExperienceData: WorkExperienceItem[] = [
  {
    Title: "Singularity Data",
    Date: "Aug 2022 - Present",
    Role: "Software Engineer (Database Kernel)",
    Details: [
      "Deployed to the database kernel team to work on the development of the RisingWave streaming database"
    ],
  },
  {
    Title: "Facebook (Meta)",
    Date: "May 2022 - Aug 2022",
    Role: "Enterprise (Internal Software) Engineer - Access Management",
    Details: [
      "Created an internal database cronjob tool (datafix) for enterprise centre using React, Typescript, GraphQL, Relay and Hack. This tool interfaces with 15+ department’s SQL databases to run scheduled jobs required for business, development or audit purposes",
      "Implemented user event flow logging and application performance logging in datafix to understand and remedy application bottlenecks. Relay query preloading, for example, reduced initial page load latency from 1.3s to 700ms (p99) in production",
      "Spearheaded the user testing, access migration and staged rollout of the aforementioned tool to 300+ daily enterprise centre users"
    ],
  },
  {
    Title: "TikTok (ByteDance)",
    Date: "Sep 2021 - Jan 2022",
    Role: "Software Engineer (Product Infrastructure), E-Commerce",
    Details: [
      "Developed a signal aggregation platform for deployment across TikTok using React, Golang, Bosun and openTSDB. This tool traces dependency chains in microservice deployments and raises alerts to microservice administrators when abnormalities are detected in upstream or downstream microservices. This platform is expected to reduce debugging times for platform engineers by up to 30%"
    ],
  },
  {
    Title: "Singtel-NUS Worldwide Corporate Research Laboratory",
    Date: "May 2021 - Aug 2021",
    Role: "Software Engineer (Machine Learning), Threat Intelligence",
    Details: [
      "Designed, developed, and deployed machine learning pipelines using spaCy, BERT and LDA for structured feature extraction from 185 MITRE technique and 540 CAPEC attack pattern descriptions",
      "Designed an algorithm which operates on endpoint detection (EDR) tool logs and produces a threat prioritization score for SOC analysts to review. This algorithm is currently being reviewed for publication by IEEE S&P and USENIX",
    ],
  },
  {
    Title: "Shopee Singapore",
    Date: "Feb 2021 - Apr 2021",
    Role: "Technical Product Manager (Data)",
    Details: [
      "Collaborated with developers to optimize query performance from data warehouses using apache druid. The feature request to rewrite backend SQL queries for vectorized execution reduced dashboard query times by 25% in peak traffic hours",
      "Designed dashboards accessed by 3,000 employees using Figma, and collaborated with feature development teams to iteratively improve the availability of these dashboards in peak traffic hours",
    ],
  },
  {
    Title: "Deloitte Global",
    Date: "Apr 2020 – Sep 2020",
    Role: "Data Analyst, Risk Advisory Department",
    Details: [
      "Performed Structural Equation Modelling in R to develop a unified framework for modelling organisational performance in SEA",
      "Utilized text mining, topic modelling and hierarchical clustering to identify areas for improvement in TTSH’s customer journey, based on the survey results of 30,000 patients. The findings were presented to TTSH’s top management and board of directors",
    ],
  },
  {
    Title: "Land Transport Authority",
    Date: "May 2020 – Aug 2020",
    Role: "NLP Engineer, Development",

    Details: [
      "Implemented a dynamic memory network framework for constructing a question-answering chatbot. The MVP produced could parse text documents of 5 pages and answer direct queries by aggregating information from different paragraphs. The model was earmarked for further development and internal deployment by LTA’s system engineering team",
    ],
  },
  {
    Title: "Defence Science and Technology Agency (DSTA)",
    Date: "Dec 2019 – Jan 2020",
    Role: "Machine Learning Intern, C3 Development",
    Details: [
      "Built upon leading research conducted in acoustic speech recognition to implement a self-supervised speech-to-text model. This model reduced the amount of labelled audio data required by 20% while maintaining the model F1 score",
    ],
  },
];

export interface EducationItem {
  InstitutionName: string;
  QualificationName: string;
  Date: string;
  Details: string[];
}

export const EducationData: EducationItem[] = [
  {
    InstitutionName: "Nanyang Technological University, Singapore",
    QualificationName:
      "Renaissance Engineering Programme - Bachelor of Engineering Science (Electrical and Electronic Engineering)",
    Date: "Aug 2018 - Present",
    Details: [
      "Expected Honours (Highest Distinction), Current CGPA: 4.88/5.00",
      "Dean's List, AY 18/19, Dean's List, AY 20/21",
      "Completed a Minor in Mathematics and Minor in Modern Languages (German)",
      "Singapore Universities Student Exchange Programme 2020, NUS, CGPA: 5.00/5.00",
      "Singtel-NTU Book Prize Award for excellence in Electrical Engineering, AY 19/20",
      "Achieved ‘Distinction’ in the advanced machine learning course at Zagreb School of Economics and Management (ZSEM)",
      "Embarked upon an exchange program to Royal Institute of Technology (KTH), Stockholm",
    ],
  },
  {
    InstitutionName: "Raffles Institution Junior College",
    QualificationName: "Singapore - Cambridge GCE A Levels",
    Date: "Jan 2014 - Dec 2015",
    Details: [
      "Achieved 7 Distinctions for the GCE A-Level examinations",
      "Obtained Distinction in Higher 3 Mathematics",
    ],
  },
];

export interface ActivitiesItem {
  ClubName: string;
  PositionName: string;
  Date: string;
  Details: string[];
}

export const ActivitiesData: ActivitiesItem[] = [
  {
    ClubName: "Business Solutions",
    PositionName: "Research Director, Training Department",
    Date: "Aug 2018 - Present",
    Details: [
      "Led training of junior associates in a 12-week intensive management consulting training program ",
      "Acted as International Relations Officer for UNSW in the Asian Business Case Competition (ABCC) 2018",
      "Acted as Director of Competition for Singapore Business Case Competition (SBCC) 2019",
      "Crypto.com Case Competition 2019, 1st Runner’s-up",
      "Hult’s Start-Up Accelerator: National Semi-Finalist",
      "Venture Capitalist Case Competition (VCCC) 2019, 2nd Runner’s-up",
    ],
  },
  {
    ClubName: "Raffles Institution / Singapore Cricket Team",
    PositionName: "Vice-Captain/Player",
    Date: "Jan 2010 - Dec 2015",
    Details: [
      "Competed in the Singapore Cricket Championships, taking the role of a vice-captain and player ",
      "Represented Singapore in the SEA youth cricket championship",
    ],
  },
];

export interface SkillsContentItem {
  Skill: string;
  Frameworks: { name: string; capability: number }[];
}

export const SkillsContent: SkillsContentItem[] = [
  {
    Skill: "Python",
    Frameworks: [
      {
        name: "Pandas",
        capability: 70,
      },
      {
        name: "Flask/ Django",
        capability: 40,
      },
      {
        name: "TensorFlow",
        capability: 80,
      },
      {
        name: "Machine Learning Libraries",
        capability: 80,
      },
      {
        name: "NLP Toolkits (spaCy etc)",
        capability: 70,
      },
    ],
  },
  {
    Skill: "Javascript",
    Frameworks: [
      {
        name: "Reactjs (Nextjs / Redux etc)",
        capability: 80,
      },
      {
        name: "Nodejs",
        capability: 80,
      },
      {
        name: "Typescript",
        capability: 80,
      },
    ],
  },
  {
    Skill: "Additional",
    Frameworks: [
      {
        name: "GoLang",
        capability: 90,
      },
      {
        name: "LaTex",
        capability: 70,
      },
      {
        name: "SPSS",
        capability: 70,
      },
      {
        name: "MATLAB",
        capability: 40,
      },
      {
        name: "Docker/Kubernetes",
        capability: 80,
      },
      {
        name: "R",
        capability: 40,
      },
    ],
  },
];

export interface VisibleCourseItem {
  Title: string;
  Grade: string;
}

export const VisibleCourseData: VisibleCourseItem[] = [
  {
    Title: "EE0005 INTRODUCTION TO DATA SCIENCE & ARTIFICIAL INTELLIGENCE",
    Grade: "A+",
  },
  {
    Title: "RE1016 ENGINEERING COMPUTATION",
    Grade: "A+",
  },
  {
    Title: "RE1012 MATHEMATICS II",
    Grade: "A+",
  },
  {
    Title: "RE1011 MATHEMATICS I",
    Grade: "A+",
  },
  {
    Title: "RE1014 ELECTRONIC & INFORMATION ENGINEERING",
    Grade: "A+",
  },
  {
    Title: "EE2002 ANALOG ELECTRONICS",
    Grade: "A+",
  },
  {
    Title: "EE3002 MICROPROCESSORS",
    Grade: "A-",
  },
  {
    Title: "EE2010 SIGNALS & SYSTEMS",
    Grade: "A+",
  },
  {
    Title: "EE4761 COMPUTER NETWORKING (NUS) ",
    Grade: "A",
  },
  {
    Title: "EE3011 MODELLING & CONTROL (NUS) ",
    Grade: "A",
  },
  {
    Title: "EE5103 COMPUTER CONTROL SYSTEMS (NUS)",
    Grade: "A",
  },
  {
    Title: "EE4285 COMPUTATIONAL INTELLIGENCE",
    Grade: "A-",
  },
  {
    Title: "EE4497 PATTERN RECOGNITION & MACHINE LEARNING",
    Grade: "A+",
  },
  {
    Title: "EE4791 DATABASE SYSTEMS",
    Grade: "A",
  },
  {
    Title: "CZ3001 ADVANCED COMPUTER ARCHITECTURE",
    Grade: "A",
  },
  {
    Title: "MH3400 ALGORITHMS FOR THE REAL WORLD",
    Grade: "A+",
  },
];

export const AllCoursesData: VisibleCourseItem[] = [
  {
    Title: "RE8011 FUNDAMENTALS OF MANAGEMENT",
    Grade: "A-",
  },
  {
    Title: "EE4761 COMPUTER NETWORKING (NUS) ",
    Grade: "A",
  },
  {
    Title: "EE3011 MODELLING & CONTROL (NUS) ",
    Grade: "A",
  },
  {
    Title: "EE5103 COMPUTER CONTROL SYSTEMS (NUS)",
    Grade: "A",
  },
  {
    Title: "RE1015 CHEMICAL & BIO ENGINEERING FUNDAMENTALS & APPLICATIONS",
    Grade: "A+",
  },
  {
    Title: "RE1014 ELECTRONIC & INFORMATION ENGINEERING	",
    Grade: "A+",
  },
  {
    Title: "RE1013 MATERIALS & MANUFACTURING",
    Grade: "A",
  },
  {
    Title: "RE1011 MATHEMATICS I",
    Grade: "A+",
  },
  {
    Title: "RE0011 WRITING & REASONING",
    Grade: "A",
  },
  {
    Title: "HY0001 ETHICS & MORAL REASONING",
    Grade: "Pass",
  },
  {
    Title: "RE8012 ACCOUNTING",
    Grade: "A+",
  },
  {
    Title: "RE1018 INTRODUCTORY THERMAL SCIENCES & ELECTROMAGNETISM",
    Grade: "A",
  },
  {
    Title: "RE1017 INTRODUCTION TO ENGINEERING MECHANICS",
    Grade: "A",
  },
  {
    Title: "RE1016 ENGINEERING COMPUTATION",
    Grade: "A+",
  },
  {
    Title: "RE1012 MATHEMATICS II",
    Grade: "A+",
  },
  {
    Title: "LG9001 GERMAN LANGUAGE LEVEL 1",
    Grade: "A",
  },
  {
    Title: "RE8013 FINANCIAL MANAGEMENT",
    Grade: "A+",
  },
  {
    Title: "RE2011 RENAISSANCE DESIGN I",
    Grade: "A-",
  },
  {
    Title: "RE0003 COMMUNICATING AS A 21ST CENTURY ENGINEER",
    Grade: "A",
  },
  {
    Title: "MH2200 GROUPS & SYMMETRIES",
    Grade: "A",
  },
  {
    Title: "LG9002 GERMAN LANGUAGE LEVEL 2",
    Grade: "B+",
  },
  {
    Title: "EE2010 SIGNALS & SYSTEMS",
    Grade: "A+",
  },
  {
    Title: "EE2002 ANALOG ELECTRONICS",
    Grade: "A+",
  },
  {
    Title: "EE0005 INTRODUCTION TO DATA SCIENCE & ARTIFICIAL INTELLIGENCE",
    Grade: "A+",
  },
  {
    Title: "RE8010 STRATEGIC MARKETING",
    Grade: "A",
  },
  {
    Title: "RE2012 RENAISSANCE DESIGN II",
    Grade: "Pass",
  },
  {
    Title: "MH3110 ORDINARY DIFFERENTIAL EQUATIONS",
    Grade: "A+",
  },
  {
    Title: "LG9003 GERMAN LANGUAGE LEVEL 3",
    Grade: "A+",
  },
  {
    Title: "EG0001 ENGINEERS & SOCIETY",
    Grade: "Pass",
  },
  {
    Title: "EE3002 MICROPROCESSORS",
    Grade: "A-",
  },
  {
    Title: "EE2008 DATA STRUCTURES & ALGORITHMS",
    Grade: "Pass",
  },
  {
    Title: "EE2003 SEMICONDUCTOR FUNDAMENTALS",
    Grade: "A-",
  },
  {
    Title: "RE0004 FOUNDATIONS OF ENGINEERING LEADERSHIP",
    Grade: "A-",
  },

  {
    Title: "MH4320 COMPUTATIONAL ECONOMICS",
    Grade: "A+",
  },
  {
    Title: "LG9004 GERMAN LANGUAGE LEVEL 4",
    Grade: "A+",
  },
  {
    Title: "HC9901 CHINESE LANGUAGE LEVEL 1",
    Grade: "Pass",
  },
  {
    Title: "MH3400 ALGORITHMS FOR THE REAL WORLD",
    Grade: "A+",
  },
  {
    Title: "LG9004 GERMAN LANGUAGE LEVEL 5",
    Grade: "A+",
  },
  {
    Title: "EE4791 DATABASE SYSTEMS",
    Grade: "A",
  },
  {
    Title: "EE4497 PATTERN RECOGNITION & MACHINE LEARNING",
    Grade: "A+",
  },
  {
    Title: "EE4285 COMPUTATIONAL INTELLIGENCE",
    Grade: "A-",
  },
  {
    Title: "CZ3001 ADVANCED COMPUTER ARCHITECTURE",
    Grade: "A",
  },
];
