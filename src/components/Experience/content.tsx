export interface WorkExperienceItem {
  Title: string;
  Date: string;
  Role: string;
  Details: string[];
}

export const WorkExperienceData: WorkExperienceItem[] = [
  {
    Title: "Singtel-NUS Worldwide Corporate Research Laboratory",
    Date: "May 2021 - Present",
    Role: "Machine Learning Developer / Research Assistant",
    Details: [
      "Working as part of a research team focusing on attributing Advanced Persistent Threats (APT's) to a specific APT group",
      "Tasked with building machine learning frameworks for feature extraction from unstructured MITRE technique descriptions",
      "Developing a proof-of-concept for training sentence transformer models on unstructured data for multi-label classification tasks",
      "Working on integrating complex machine learning frameworks for end-to-end inference in a complex framework",
    ],
  },
  {
    Title: "Shopee Singapore",
    Date: "Feb 2021 - Apr 2021",
    Role: "Technical Product Manager (Data)",
    Details: [
      "Assigned to a team involved in designing database schemas and database ingestion for real-time data analytics",
      "Working with developers to reduce query time from Data Warehouses using Apache Druid",
      "Modifying UI components of internal data systems for improved user interaction",
      "Using Figma to design the User Interface (UI) for internal tools",
    ],
  },
  {
    Title: "Deloitte Global",
    Date: "Apr 2020 – Sep 2020",
    Role: "Data Analyst, Risk Advisory Department",
    Details: [
      "Performed Structural Equation Modelling (SEM) in R to develop a framework for organisational performance",
      "Published SEM technical manuals and guides for data analysts in Deloitte",
      "Utilised IBM SPSS for advanced data exploration and mathematical modelling",
      "Worked independently as a data analyst and reported directly to board members of Deloitte’s multinational clients",
    ],
  },
  {
    Title: "Land Transport Authority",
    Date: "May 2020 – Aug 2020",
    Role: "NLP Engineer, Development",

    Details: [
      "Applied learning NLP tools and techniques for entity extraction from complex sentences",
      "Implemented memory network frameworks for constructing a question-answering chatbot",
      "Researched on leading techniques in knowledge graph construction and text reduction",
    ],
  },
  {
    Title: "Defence Science and Technology Agency (DSTA)",
    Date: "Dec 2019 – Jan 2020",
    Role: "Machine Learning Intern, C3 Development",
    Details: [
      "Spearheaded a project which involves using acoustic speech recognition (ASR) to develop a speech to text NLP model",
      "Built upon leading research conducted in ASR to reduce labelled data required for self-training an RNN end to end neural network",
      "Modified dynamic memory networks to perform question-answering tasks on technical manuals",
      "Performed machine learning across distributed Nvidia DGX servers and proposed a system design which integrated memory network components in the model training process",
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
      "Expected Honours (Highest Distinction), Current CGPA: 4.89/5.00",
      "Singtel-NTU Book Prize Award for excellence in Electrical Engineering, AY 19/20",
      "Singapore Universities Student Exchange Programme 2020, NUS, CGPA: 5.00/5.00",
      "Minor in Mathematics and Modern Languages (German)",
      "Dean's List, AY 18/19",
    ],
  },
  {
    InstitutionName: "Zagreb School of Economics and Management (ZSEM)",
    QualificationName: "Summer Exchange Programme",
    Date: "Jun - Jul 2019",
    Details: [
      "Obtained Distinction in the advanced machine learning course at ZSEM",
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
        name: "Data Structures",
        capability: 80,
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
    Skill: "Databases",
    Frameworks: [
      {
        name: "SQL Queries",
        capability: 80,
      },
      {
        name: "PostgreSQL",
        capability: 70,
      },
      {
        name: "MySQL",
        capability: 40,
      },
      {
        name: "MongoDB",
        capability: 70,
      },
    ],
  },
  {
    Skill: "AWS Cloud Technologies",
    Frameworks: [
      {
        name: "Solutions Architecting",
        capability: 80,
      },
      {
        name: "Machine Learning (Sagemaker)",
        capability: 80,
      },
    ],
  },
  {
    Skill: "UI/UX",
    Frameworks: [
      {
        name: "Figma",
        capability: 40,
      },
    ],
  },
  {
    Skill: "Additional",
    Frameworks: [
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
        name: "Microservices",
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
