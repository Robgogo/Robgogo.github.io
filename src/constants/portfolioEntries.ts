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
        acheivments: [
          "Currently working on Peak Season Readiness intiative of 2023 to make sure our service are ready",
          "Leading new topics to improve our team KPI and achieve our goals",
          "Led the effort of Cost Reduction by optimizing our services which lead to 25% reduction of infrastructure costs in the team🎉🎉🎉",
          "Kept on leading security topics, ensuring we stay compliant in the team",
          "Started working on a new service, from the system design to implementation",
          "Worked on migrating data from old service to new service and made sure there were 0 issues during migration",
        ],
      },
      {
        positionTitle: "Graduate Software Engineer",
        acheivments: [
          "Worked on my `My Stores` section of the Klarna App.",
          "Worked on introducing the `Follow my stores` feature in the Klarna App",
          "Lead the Security/Compliance Epic/Topic in the team, resulting in 0 violations and compliance issues in the team",
          "Lead the migration of internal tool from REST API to GraphQl and the UI/UX development of an admin tool related to that to move from its own standing app to be part of the wider Klarna admin tool",
          "Lead the Peak Season Readiness intiative of 2022 in the team, making sure our systems were ready and there were 0 incidents during Peak Season",
        ],
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
        acheivments: [
          "Worked as a Backend developer to develop a security specially soc2 compliance checking tool",
          "Led a team formed from different teams in the company to create a platform that connects all products developed in the company",
        ],
      },
      {
        positionTitle: "Junior ML and Backend Engineer",
        acheivments: [
          "Worked in the intelligence team as ML engineer, to modify an existing model that can detect malicious android applications and increased its accuracy from 87% to 97%",
          "Worked in the intelligence team as ML engineer, to create a model that can identify phishing links. And developed 3 models with different approaches",
        ],
      },
    ],
  },
  {
    company: "Apposite LLC",
    from: new Date("2018/03/01"),
    to: new Date("2018/06/31"),
    positions: [
      {
        positionTitle: "Software Developer(Intrern)",
        acheivments: [
          "Developed an internal tool used to monitor developer performance based on jira platform with my partner",
          "Experienced project management in industry level",
        ],
      },
    ],
  },
  {
    company: "Federal TVET Agency",
    from: new Date("2018/03/01"),
    to: new Date("2018/10/31"),
    positions: [
      {
        positionTitle: "Software Developer(Intrern)",
        acheivments: [
          "Developed a system that is used to monitor and automate the exam preparation process for internal office use and online certification system for students with my team",
          "Setup IT infrastructure for the service we built and trained some officials",
        ],
      },
    ],
  },
];

const educationHistory: EducationHistory[] = [
  {
    school: "IE University",
    level: "Masters",
    course: "Master in Computer Science and Business Technology",
    awards: [
      "Top 10 percentile of my class",
      "IE Kistefos Full Scholarship for Young Talented",
    ],
    from: new Date("2020/09/01"),
    to: new Date("2021/07/23"),
    gpa: 3.74,
  },
  {
    school: "Addis Ababa University",
    level: "Bachelors",
    course:
      "Electrical and Computer Engineering (Specialized in Computer Engineering)",
    awards: ["Top 10 percentile of my class"],
    from: new Date("2014/09/01"),
    to: new Date("2019/07/30"),
    gpa: 3.66,
  },
];

export { links, skills, workHistory, educationHistory };
