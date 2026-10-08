import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ButtonLink";
import { containerClass, exams, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Da’Elites Academy is the virtual tutoring studio of Da’Elites Virtual Tutoring, teaching WAEC, JAMB, IELTS, and TOEFL live on Zoom.",
};

const facts = [
  { label: "Where", value: `${site.location}. Students join from wherever they have a steady connection.` },
  { label: "How", value: site.format + ". Cameras and notebooks stay part of the lesson." },
  { label: "Who", value: "Secondary students preparing for WAEC or JAMB, and candidates preparing for IELTS or TOEFL." },
  { label: "Size", value: "One-to-one lessons, or a small group. The format is chosen when you book." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A virtual academy for a specific exam."
        lede="Da’Elites Virtual Tutoring teaches live classes for students who need WAEC, JAMB, IELTS, or TOEFL. The work is narrow on purpose: the paper, the method, and enough practice to use it."
      />
      <section className="bg-white">
        <div className={`${containerClass} grid gap-12 py-16 lg:grid-cols-2 lg:py-20`}>
          <div>
            <h2 className="font-display text-4xl text-ink">What the academy is for</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
              <p>
                School schemes are wide. Exam seasons are not. Da’Elites keeps the lesson on the
                subject a student is sitting, and on the stage they are in: junior secondary,
                senior secondary, or an international English test.
              </p>
              <p>
                Classes are virtual because that is how the academy teaches. A student does not
                need to live near the tutor. They do need to be present, with work that can be
                looked at together.
              </p>
              <p>
                The public profile of the academy is on{" "}
                <a
                  href={site.linkedin}
                  className="font-semibold text-blue-deep underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </div>
          <dl className="divide-y divide-line border-y border-line">
            {facts.map((fact) => (
              <div key={fact.label} className="grid gap-2 py-5 sm:grid-cols-[8rem_1fr]">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-terra-deep">{fact.label}</dt>
                <dd className="text-sm leading-relaxed text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section>
        <div className={`${containerClass} py-16`}>
          <h2 className="font-display text-3xl text-ink">The examinations</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {exams.map((exam) => (
              <li key={exam.name} className="surface-card p-7">
                <h3 className="font-display text-2xl text-ink">{exam.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{exam.detail}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ButtonLink href="/curriculum">Read the curriculum</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
