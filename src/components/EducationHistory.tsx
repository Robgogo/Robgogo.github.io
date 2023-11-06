import { EducationHistory } from "@/types";
import { SectionHeaderText } from "./SectionHeader";
import { readableDateString } from "@/utils/dateUtils";

export function EducationHistoryComponent({
  educationHistory,
}: {
  educationHistory: EducationHistory[];
}) {
  return (
    <>
      <SectionHeaderText>Education History</SectionHeaderText>
      <div className="gap-3">
        {educationHistory.map((education, index) => (
          <div key={index} className="text-s sm:text-m">
            <p className="mb-2">
              <b>{education.school}</b> -{" "}
              <i>
                <b>{education.level}</b>
              </i>{" "}
              - ({readableDateString(education.from)} -{" "}
              {education.to instanceof Date
                ? readableDateString(education.to)
                : education.to}
              )
            </p>
            <div>
              <p className="mb-1 font-semi-bold">
                {" "}
                Studied: <i>{education.course}</i>
              </p>
            </div>
            <div className="mb-4">
              <ul className="list-disc">
                <li className="ml-4 mb-1">
                  <div className="relative group overflow-hidden flex items-center gap-1.5 flex-wrap text-xs sm:text-sm">
                    <div className="bg-purple-600 duration-400 group-hover:translate-x-full h-[2px] w-full absolute right-full bottom-0"></div>
                    <p className="font-semi-bold">GPA: {education.gpa}</p>
                  </div>
                </li>
                <p className="font-semi-bold">Awards</p>
                {education.awards.map((award, index) => (
                  <li key={index} className="ml-7">
                    <div className="relative group overflow-hidden flex items-center gap-1.5 flex-wrap text-xs sm:text-sm">
                      <div className="bg-purple-600 duration-400 group-hover:translate-x-full h-[2px] w-full absolute right-full bottom-0"></div>
                      <p className="font-bold">{award}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
