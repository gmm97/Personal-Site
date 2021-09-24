const AcademicTagColor: string = "#E8E8E8";
const ProfessionalTagColor: string = "#fadfda";

interface TagCategories {
  [key: string]: string;
}

const TagCategories: TagCategories = {
  Academics: "Academics",
  Professional: "Professional",
};

export interface TimelineEntry {
  text: string;
  date: string;
  category: Category;
}

interface Category {
  tag: TagCategories[keyof TagCategories];
  color: typeof AcademicTagColor;
}

export const TimelineData: TimelineEntry[] = [
  {
    text: "Graduated from Raffles Institution with 7 A-Level Distinctions",
    date: "Dec 2015",
    category: {
      tag: TagCategories.Academics,
      color: AcademicTagColor,
    },
  },
  {
    text: "Entered the Renaissance Engineering Programme at NTU",
    date: "Aug 2018",
    category: {
      tag: TagCategories.Academics,
      color: AcademicTagColor,
    },
  },
  {
    text: "Attended the advanced machine learning course at Zagreb School of Economics and Management",
    date: "Jun - Jul 2019",
    category: {
      tag: TagCategories.Academics,
      color: AcademicTagColor,
    },
  },
  {
    text: "Placed on the Dean's List for academic excellence in AY18/19",
    date: "Aug 2019",
    category: {
      tag: TagCategories.Academics,
      color: AcademicTagColor,
    },
  },
  {
    text: "Worked at Defence Science and Technology Agency as a Data Engineer (Intern)",
    date: "Dec 2019 - Jan 2020",
    category: {
      tag: TagCategories.Professional,
      color: ProfessionalTagColor,
    },
  },
  {
    text: "Worked at Deloitte Global as a Business Data Analyst",
    date: "Apr - Sep 2020",
    category: {
      tag: TagCategories.Professional,
      color: ProfessionalTagColor,
    },
  },
  {
    text: "Worked at Land Transport Authority as a Machine Learning Intern",
    date: "May - Aug 2020",
    category: {
      tag: TagCategories.Professional,
      color: ProfessionalTagColor,
    },
  },
  {
    text: "Awarded the Singtel-NTU Book Prize for academic excellence in AY19/20",
    date: "Aug 2020",
    category: {
      tag: TagCategories.Academics,
      color: ProfessionalTagColor,
    },
  },
  {
    text: "Worked at Shopee Singapore as a Product Manager (data)",
    date: "Feb - Apr 2021",
    category: {
      tag: TagCategories.Professional,
      color: ProfessionalTagColor,
    },
  },
  {
    text: "Completed a minor in mathematics and a minor in modern languages (german)",
    date: "May 2021",
    category: {
      tag: TagCategories.Academics,
      color: ProfessionalTagColor,
    },
  },
  {
    text: "Worked at NUS-Singtel Cyber Security R&D Laboratory as a Threat Intelligence Intern",
    date: "May - Aug 2021",
    category: {
      tag: TagCategories.Professional,
      color: ProfessionalTagColor,
    },
  },
  {
    text: "Placed on the Dean's List for academic excellence in AY20/21",
    date: "Aug 2021",
    category: {
      tag: TagCategories.Academics,
      color: AcademicTagColor,
    },
  },
  {
    text: "Working at TikTok as a Software Engineer (Product Infrastructure) in the e-commerce team",
    date: "Sep 2021 - Present",
    category: {
      tag: TagCategories.Professional,
      color: ProfessionalTagColor,
    },
  },
];
