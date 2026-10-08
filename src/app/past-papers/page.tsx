import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PaperLibrary } from "@/components/PaperLibrary";
import { containerClass } from "@/lib/site";

export const metadata: Metadata = {
  title: "Past Papers",
  description:
    "How Da’Elites uses WAEC, JAMB, IELTS, and TOEFL questions in class, with links to the official exam bodies.",
};

export default function PastPapersPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Past papers"
        lede="Past questions are how a student learns the paper’s habits. Da’Elites does not republish exam papers. Lessons use questions the student is entitled to practise, and the official sites below remain the source for each board."
      />
      <section>
        <div className={`${containerClass} py-14 sm:py-16`}>
          <PaperLibrary />
        </div>
      </section>
    </>
  );
}
