import { EducationHistoryComponent } from "@/components/EducationHistory";
import { PortfolioLinks } from "@/components/Links";
import { Skills } from "@/components/Skills";
import { WorkHistoryComponent } from "@/components/WorkHistory";
import {
  links,
  skills,
  workHistory,
  educationHistory,
} from "@/constants/portfolioEntries";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-4 mx-auto max-w-[900px] w-full">
      <h2 className="font-bold text-2xl md:text-3xl sm:text-4xl">
        My Portfolio
      </h2>
      <section>
        <PortfolioLinks links={links} />
      </section>
      <section>
        <EducationHistoryComponent educationHistory={educationHistory} />
      </section>
      <section>
        <Skills skills={skills} />
      </section>
      <section>
        <WorkHistoryComponent workHistory={workHistory} />
      </section>
    </main>
  );
}
