import { WorkHistory } from "@/types";
import { SectionHeaderText } from "./SectionHeader";

export function WorkHistoryComponent({
  workHistory,
}: {
  workHistory: WorkHistory[];
}) {
  return (
    <>
      <SectionHeaderText>Work History</SectionHeaderText>
      <div className="flex gap-3">
        {workHistory.map((work, index) => (
          <div key={index} className="text-xs sm:text-sm">
            <p className="mb-3">
              <b>{work.company}</b> - ({work.from.toDateString()} -{" "}
              {work.to.toLocaleString()})
            </p>
            <div>
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
