import { WorkHistory } from "@/types";
import { SectionHeaderText } from "./SectionHeader";
import { readableDateString } from "@/utils/dateUtils";

export function WorkHistoryComponent({
  workHistory,
}: {
  workHistory: WorkHistory[];
}) {
  return (
    <>
      <SectionHeaderText>Work History</SectionHeaderText>
      <div className="gap-3">
        {workHistory.map((work, index) => (
          <div key={index} className="text-s sm:text-m">
            <p className="mb-2">
              <b>{work.company}</b> - ({readableDateString(work.from)} -{" "}
              {work.to instanceof Date ? readableDateString(work.to) : work.to})
            </p>
            <div className="mb-4">
              <ul className="list-disc">
                {work.positions.map((position, index) => (
                  <li key={index} className="ml-4">
                    <div className="relative group overflow-hidden flex items-center gap-1.5 flex-wrap text-xs sm:text-sm">
                      <div className="bg-purple-600 duration-400 group-hover:translate-x-full h-[2px] w-full absolute right-full bottom-0"></div>
                      <p className="font-bold">{position.positionTitle}</p>
                    </div>
                    <ul className="list-disc">
                      {position.acheivments.map((achievment, index) => (
                        <li key={index} className="ml-8">
                          {achievment}
                        </li>
                      ))}
                    </ul>
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
