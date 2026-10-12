import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ButtonLink";
import { CountUp } from "@/components/CountUp";
import { containerClass, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Da’Elites Academy teaches live Zoom classes for students in the United States, including US curriculum, SAT, AP, French, Yoruba, and coding.",
};

const facts = [
  {
    label: "Who",
    value:
      "Students on the US, UK, or Canadian curriculum, including SAT, AP, GCSE, A-Level, and college mathematics, plus French, Yoruba, and coding.",
  },
  {
    label: "How",
    value: `${site.format}. A student needs a quiet place, a notebook, and work that can be looked at together.`,
  },
  {
    label: "Where",
    value: "Lessons are online. A student joins from home and does not need to live near the tutor.",
  },
  {
    label: "Size",
    value: "One-to-one lessons, or a small group. The format is chosen when you book.",
  },
];

const stats = [
  { value: "12", label: "Qualified tutors" },
  { value: "40", label: "Students enrolled" },
  { value: "4+", label: "Countries" },
];

const leaders = [
  {
    name: "Mrs Oyindamola Oladunjoye",
    role: "Certified HR and Co-founder",
    image: "/team/oyindamola-oladunjoye.jpg",
    imageAlt: "Portrait of Mrs Oyindamola Oladunjoye",
  },
  {
    name: "Mr Adeniyi Oladunjoye",
    role: "Founder and Director of Studies",
    image: "/team/adeniyi-oladunjoye.jpg",
    imageAlt: "Portrait of Mr Adeniyi Oladunjoye",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Live tutoring for students in the USA."
        lede="Da’Elites Academy teaches on Zoom for the US, UK, and Canadian curricula, and for college mathematics. French, Yoruba, and coding are taught the same way."
      />
      <section className="bg-white">
        <div className={`${containerClass} grid gap-4 py-8 sm:grid-cols-3`}>
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-2xl bg-sand px-5 py-6 text-center ring-1 ring-line">
              <p className="font-display text-4xl text-blue-deep" aria-label={stat.value}>
                <CountUp value={stat.value} />
              </p>
              <p className="mt-2 text-sm font-semibold text-ink">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white">
        <div className={`${containerClass} grid gap-6 py-16 lg:grid-cols-2 lg:py-20`}>
          <article className="surface-rest h-full p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-terra-deep">Mission</p>
            <p className="mt-4 font-display text-3xl leading-snug text-ink">
              Live tutoring for students in the United States, matched to the class they are in.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              A lesson is one-to-one or a small group on Zoom. The tutor stays with the grade,
              the subject, and the work the student needs to do next.
            </p>
          </article>
          <article className="surface-rest h-full p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-terra-deep">Vision</p>
            <p className="mt-4 font-display text-3xl leading-snug text-ink">
              Students who can use what they learn in class, on a test, and on their own.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              The academy wants that confidence across academics, French, Yoruba, and coding,
              for families in the United States and beyond.
            </p>
          </article>
        </div>
      </section>
      <section className="bg-white">
        <div className={`${containerClass} grid gap-12 py-16 lg:grid-cols-2 lg:py-20`}>
          <div>
            <h2 className="font-display text-4xl text-ink">What the academy is for</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
              <p>
                A US school day already has a curriculum. Da’Elites keeps the lesson on that work:
                the grade, the subject, and the assignment or test in front of the student.
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
      <section className="bg-sand">
        <div className={`${containerClass} py-16 sm:py-20`}>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-terra-deep">Leadership</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl text-ink sm:text-5xl">The people who lead the academy.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {leaders.map((leader) => (
              <article key={leader.name} className="surface-rest flex min-h-72 overflow-hidden">
                <div className="relative w-[42%] shrink-0 self-stretch bg-navy">
                  <Image
                    src={leader.image}
                    alt={leader.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 280px, 42vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center p-6 sm:p-8">
                  <h3 className="font-display text-3xl text-ink">{leader.name}</h3>
                  <p className="mt-3 text-sm font-semibold text-terra-deep">{leader.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-line bg-sand">
        <div className={`${containerClass} flex flex-col items-start gap-6 py-14 sm:flex-row sm:items-center sm:justify-between`}>
          <div>
            <h2 className="font-display text-3xl text-ink">See the classes</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist">
              Mathematics, English, the sciences, French, Yoruba, and coding are set out by stage.
            </p>
          </div>
          <ButtonLink href="/curriculum">Read the curriculum</ButtonLink>
        </div>
      </section>
    </>
  );
}
