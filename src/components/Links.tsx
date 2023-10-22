import { PortfolioLink } from "@/types";
import { SectionHeaderText, SummaryText } from "./SectionHeader";

export function PortfolioLinks({ links }: { links: PortfolioLink[] }) {
  return (
    <>
      <SectionHeaderText>
        Robera Worku - Computer/Software Engineer, Cybersecurity Enthusiast
      </SectionHeaderText>
      <SummaryText>My Professional and personal summary goes here</SummaryText>
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
    </>
  );
}
