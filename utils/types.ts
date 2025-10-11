// ------------------- Home Page Types ------------------- //
export type HomeDataType = {
  name: string;
  heilightText: string;
  description: string;
  header: {
    start: string;
    colored: string;
    end: string;
  };
};

// ------------------- Work Page Types ------------------- //
export type WorkListType = {
  name: string;
  description: string;
  credential: {
    username: string;
    password: string;
  };
  tools: string[];
  source: {
    live?: string;
    github: string;
  };
  img: string;
};

export type WorkDataType = {
  header: string;
  label: string;
  workList: WorkListType[];
};

// ------------------- Skill Page Types ------------------- //
export type CategoryType =
  | "Language"
  | "Libraries & Framework"
  | "Database"
  | "DevOps"
  | "Machine learning";

export type SkillListType = {
  label: string;
  icon: string;
  category: CategoryType;
};

export type SkillDataType = {
  header: string;
  label: string;
  categories: CategoryType[];
  skillList: SkillListType[];
};

// ------------------- Experience Page Types ------------------- //
export type WorkTimeType = {
  from: string;
  to: string;
};

export type ExperienceType = {
  designation: string;
  workType: string;
  workTime: WorkTimeType;
};

export type ExperienceListTypes = {
  companyLogo: string;
  companyName: string;
  totalWorkTime: WorkTimeType;
  companyLocation: string;
  companyUrl: string;
  experiences: ExperienceType[];
};

export type ExperienceDataType = {
  header: string;
  label: string;
  experienceList: ExperienceListTypes[];
};

// ------------------- Experience Page Types ------------------- //
export type EducationListTypes = {
  institutionName: string;
  degreeName: string;
  result: string;
  duration: string;
  institutionUrl?: string;
};

export type EducationDataType = {
  header: string;
  label: string;
  educationList: EducationListTypes[];
};

// ------------------- Contact Page Types ------------------- //
export type ContactDataType = {
  header: string;
  label: string;
  phone: string;
  emails: string[];
  links: [];
};

// ------------------- Contact Page Types ------------------- //
export type AboutDataType = {
  header: string;
  label: string;
  profileURL: string;
  descriptions: string[];
};
