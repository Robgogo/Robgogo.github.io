import { EducationHistory, PortfolioLink, Skill, WorkHistory } from "@/types";

const links: PortfolioLink[] = [
  { name: "Email", link: "", content: "robgogoworku@gmail.com" },
  { name: "Github", link: "https://github.com/Robgogo", content: "Robgogo" },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/robera-worku/",
    content: "robera-worku",
  },
];

const skills: Skill[] = [
  {
    name: "Javascript/Typescript",
    subSkill: ["Node.js", "NestJS🥰", "React", "React Native"],
  },
  {
    name: "Python",
    subSkill: [
      "Django",
      "Django REST🥰",
      "Flask",
      "Fast API␆",
      "Data Analysis tools like Pandas, numpy ...",
    ],
  },
  { name: "Java", subSkill: ["Spring Boot"] },
  { name: "CI/CD", subSkill: ["Jenkins", "Github Actions"] },
  { name: "Database", subSkill: ["PostgreSQL", "MySQL", "Mongodb"] },
  { name: "Cloud", subSkill: ["AWS", "GCP"] },
  { name: "Misc", subSkill: ["GIT", "Docker", "Kubernetes␆"] },
];

const workHistory: WorkHistory[] = [
  {
    company: "Klarna",
    from: new Date("2021/12/01"),
    to: "now",
    positions: [
      {
        positionTitle: "Software Engineer",
        acheivments: ["Worked on.."],
      },
      {
        positionTitle: "Graduate Software Engineer",
        acheivments: ["Worked on.."],
      },
    ],
  },
  {
    company: "Better Mobile Security",
    from: new Date("2019/08/01"),
    to: new Date("2020/08/31"),
    positions: [
      {
        positionTitle: "Backend Engineer",
        acheivments: ["Worked on.."],
      },
      {
        positionTitle: "Junior ML and Backend Engineer",
        acheivments: ["Worked on.."],
      },
    ],
  },
];

const educationHistory: EducationHistory[] = [
  {
    school: "IE University",
    level: "Masters",
    course: "Master in Computer Science and Business Technology",
    awards: ["IE Kistefos Full Scholarship for Young Talented"],
    from: new Date("2020/09/01"),
    to: new Date("2021/07/23"),
    gpa: 3.74,
  },
];

export { links, skills, workHistory, educationHistory };
