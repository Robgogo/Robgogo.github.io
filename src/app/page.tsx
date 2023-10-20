import Image from "next/image";

type PortfolioLink = { name: string; link: string; content: string };
type Skill = { name: string; subSkill: string[] };
type WorkHistory = {
  company: string;
  from: Date;
  to: Date | "now";
  positions: [{ positionTitle: string; acheivments: string[] }];
};
type EducationHistory = {
  school: string;
  level: "Masters" | "Bachelors";
  course: string;
  gpa: number;
  awards: string[];
  from: Date;
  to: Date | "now";
};

function SectionHeaderText(props: { children: any }) {
  const { children } = props;
  return <h4 className="pb-5 text-xl font-semibold">{children}</h4>;
}

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
        <SectionHeaderText>
          Robera Worku - Computer/Software Engineer, Cybersecurity Enthusiast
        </SectionHeaderText>
        <div className="flex flex-col gap-3">
          {links.map((link, index) => (
            <div
              key={index}
              className="relative group overflow-hidden flex items-center gap-1.5 flex-wrap text-xs sm:text-sm"
            >
              <div className="bg-purple-600 duration-400 group-hover:translate-x-full h-[2px] w-full absolute right-full bottom-0"></div>
              <p>
                <b>{link.name}</b>
              </p>
              <a
                href={link.link}
                target="_blank"
                className="text-sky-400 cursor-pointer"
              >
                {link.content}
              </a>
            </div>
          ))}
        </div>
      </section>
      <section>
        <SectionHeaderText>Skills</SectionHeaderText>
        <div className="flex flex-col gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group overflow-hidden flex items-center gap-1.5 flex-wrap text-xs sm:text-sm"
            >
              <div className="bg-purple-600 duration-400 group-hover:translate-x-full h-[2px] w-full absolute right-full bottom-0"></div>
              <p>
                <b>{skill.name}</b>
              </p>
              <p>{skill.subSkill.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <SectionHeaderText> Work History</SectionHeaderText>
        <div className="flex gap-3">
          {workHistory.map((work, index) => (
            <div key={index} className="text-xs sm:text-sm">
              <p>
                <b>{work.company}</b> - ({work.from.toDateString()} -{" "}
                {work.to.toLocaleString()})
              </p>
              <div>
                <ul>
                  {work.positions.map((position, index) => (
                    <li key={index}>
                      <p>
                        <b>{position.positionTitle}</b>
                        <ul>
                          {position.acheivments.map((achievment, index) => (
                            <li key={index}>{achievment}</li>
                          ))}
                        </ul>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section></section>
    </main>
  );
}
