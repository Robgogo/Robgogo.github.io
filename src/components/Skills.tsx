import { Skill } from "@/types";
import { SectionHeaderText } from "./SectionHeader";

export function Skills({ skills }: { skills: Skill[] }) {
  return (
    <>
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
    </>
  );
}
