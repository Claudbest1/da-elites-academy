import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SubjectChapter } from "@/components/SubjectChapter";
import { ButtonLink } from "@/components/ButtonLink";
import { containerClass, programmes } from "@/lib/site";
import { subjects } from "@/lib/subjects";

export const metadata: Metadata = {
  title: "Our Curriculum",
  description:
    "Academic support for the US, UK, and Canadian curricula, college mathematics, French, Yoruba, and coding.",
};

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        eyebrow="Subjects"
        title="Our Curriculum"
        lede="Da’Elites’ Virtual Academy offers academic support for international curricula and higher education: the US, UK, and Canadian school programmes, and college mathematics."
      />
      <section className="bg-white">
        <div className={`${containerClass} grid gap-6 py-16 lg:grid-cols-2`}>
          {programmes.map((programme) => (
            <article key={programme.id} id={programme.id} className="surface-rest scroll-mt-28 p-7 sm:p-8">
              <h2 className="font-display text-3xl text-ink">{programme.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{programme.intro}</p>
              <ul className="mt-5 space-y-3">
                {programme.items.map((item) => (
                  <li key={item} className="border-l-2 border-terra pl-4 text-sm leading-relaxed text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
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
