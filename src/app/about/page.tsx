import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { MissionVision } from "@/components/MissionVision";
import { ButtonLink } from "@/components/ButtonLink";
import { CountUp } from "@/components/CountUp";
import { academyCopy, containerClass, site } from "@/lib/site";

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
  { value: "12", label: "Qualified tutors", color: "text-blue" },
  { value: "40", label: "Students enrolled", color: "text-terra" },
  { value: "4+", label: "Countries", color: "text-[#1f8a4c]" },
];

const leaders = [
  {
    name: "Mrs Oyindamola Oladunjoye",
    role: "Certified HR and Co-founder",
    image: "/team/oyindamola-oladunjoye.jpg",
    imageAlt: "Portrait of Mrs Oyindamola Oladunjoye",
    imageClass: "object-cover object-[72%_24%] scale-[2.2]",
  },
  {
    name: "Mr Adeniyi Oladunjoye",
    role: "Founder and Director of Studies",
    image: "/team/adeniyi-oladunjoye.jpg",
    imageAlt: "Portrait of Mr Adeniyi Oladunjoye",
    imageClass: "object-cover object-[50%_12%] scale-[1.55]",
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
        <div className={`${containerClass} grid grid-cols-3 gap-2 py-4 sm:gap-4 sm:py-8`}>
          {stats.map((stat) => (
            <article key={stat.label} className="px-1 py-2 text-center sm:px-5 sm:py-6">
              <p className={`font-display text-3xl ${stat.color} sm:text-6xl`} aria-label={stat.value}>
                <CountUp value={stat.value} />
              </p>
              <p className="mt-1 text-[11px] font-semibold leading-tight text-ink sm:mt-2 sm:text-sm">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white">
        <div className={`${containerClass} py-8 sm:py-20`}>
          <h2 className="max-w-3xl font-display text-4xl text-ink sm:text-5xl">
            {academyCopy.hookEyebrow}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {academyCopy.hook}
          </p>
        </div>
      </section>
      <MissionVision />
      <section className="bg-white">
        <div className={`${containerClass} grid gap-12 py-16 lg:grid-cols-2 lg:py-20`}>
          <div>
            <h2 className="font-display text-4xl text-ink">{academyCopy.aboutTitle}</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
              {academyCopy.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
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
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-navy"
              >
                <Image
                  src={leader.image}
                  alt={leader.imageAlt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className={leader.imageClass}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-2xl leading-tight text-white">{leader.name}</h3>
                  <p className="mt-1 text-sm text-white/80">{leader.role}</p>
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
