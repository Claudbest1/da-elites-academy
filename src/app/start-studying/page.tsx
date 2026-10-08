import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ButtonLink";
import { containerClass } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start Studying",
  description:
    "How to join a Da’Elites class: choose the exam, send an enquiry, and meet live on Zoom.",
};

const steps = [
  {
    title: "Choose the exam and subject",
    text: "Use the curriculum to find the stage: junior secondary, senior secondary, WAEC, JAMB, IELTS, or TOEFL. If you are unsure, say so in the enquiry.",
  },
  {
    title: "Send a lesson enquiry",
    text: "The booking form opens an email to the academy with your subject, format, and the days you can meet. A place is not held until we reply.",
  },
  {
    title: "Agree the format",
    text: "One-to-one or small group. You will receive the Zoom details and what to bring to the first class.",
  },
  {
    title: "Begin with a diagnostic",
    text: "The first lesson finds the topics that are already steady and the ones that need the term. Later classes follow that list.",
  },
];

const bring = [
  "The exam and, if you have it, a recent score or a target",
  "The subject, or the full JAMB combination",
  "Days and times you can be online",
  "A notebook for working you can hold up to the camera",
];

export default function StartStudyingPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Start studying"
        lede="Joining is a short conversation, then a live class. There is no dashboard to set up and no payment taken on this website."
      />
      <section className="bg-white">
        <div className={`${containerClass} py-16 sm:py-20`}>
          <ol className="grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <li key={step.title} className="surface-card p-7">
                <p className="font-display text-4xl text-terra">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-display text-2xl text-ink">{step.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section>
        <div className={`${containerClass} grid gap-10 py-16 lg:grid-cols-2`}>
          <div>
            <h2 className="font-display text-4xl text-ink">Have this ready</h2>
            <ul className="mt-6 space-y-3">
              {bring.map((item) => (
                <li key={item} className="border-l-2 border-terra pl-4 text-sm leading-relaxed text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-rest p-6 sm:p-8">
            <h2 className="font-display text-3xl text-ink">Who the classes are for</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Junior and senior secondary students preparing school work, WAEC candidates, JAMB
              candidates with a known subject combination, and IELTS or TOEFL candidates with a
              band or score in mind.
            </p>
            <div className="mt-6">
              <ButtonLink href="/book">Book a session</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
