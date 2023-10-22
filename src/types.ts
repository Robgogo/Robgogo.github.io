export type PortfolioLink = { name: string; link: string; content: string };

export type Skill = { name: string; subSkill: string[] };

export type WorkHistory = {
  company: string;
  from: Date;
  to: Date | "now";
  positions: [{ positionTitle: string; acheivments: string[] }];
};

export type EducationHistory = {
  school: string;
  level: "Masters" | "Bachelors";
  course: string;
  gpa: number;
  awards: string[];
  from: Date;
  to: Date | "now";
};
