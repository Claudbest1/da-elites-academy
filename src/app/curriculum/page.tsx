import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SubjectChapter } from "@/components/SubjectChapter";
import { ButtonLink } from "@/components/ButtonLink";
import { containerClass } from "@/lib/site";
import { subjects } from "@/lib/subjects";

export const metadata: Metadata = {
  title: "Our Curriculum",
  description:
    "Mathematics, English, the sciences, IELTS, TOEFL, and a JAMB intensive. Each subject is organised by the stage a student is sitting.",
};

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        eyebrow="Subjects"
        title="Our Curriculum"
        lede="The curriculum is organised by subject, then by the stage a student is sitting. Open a stage to see what that part of the course covers."
      />
      <div className={containerClass}>
        {subjects.map((subject, index) => (
          <SubjectChapter key={subject.slug} subject={subject} index={index} />
        ))}
      </div>
      <section className="border-t border-line bg-paper">
        <div className={`${containerClass} flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between`}>
          <div>
            <h2 className="font-display text-3xl text-ink">Ready to choose a subject?</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist">
              Tell us the exam and the stage. We will reply with how a one-to-one or small-group class would run.
            </p>
          </div>
          <ButtonLink href="/book">Book a session</ButtonLink>
        </div>
      </section>
    </>
  );
}
