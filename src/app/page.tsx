import { PortfolioLinks } from "@/components/Links";
import { Skills } from "@/components/Skills";
import { WorkHistoryComponent } from "@/components/WorkHistory";
import { PortfolioLink, Skill, WorkHistory, EducationHistory } from "@/types";

export default function Home() {
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
          positionTitle: "Graduate Software Engineer",
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

  return (
    <main className="flex flex-col gap-5 p-4 mx-auto max-w-[900px] w-full">
      <h2 className="font-bold text-2xl md:text-3xl sm:text-4xl">
        My Portfolio
      </h2>
      <section>
        <PortfolioLinks links={links} />
      </section>
      <section>
        <Skills skills={skills} />
      </section>
      <section>
        <WorkHistoryComponent workHistory={workHistory} />
      </section>
      <section></section>
    </main>
  );
}
