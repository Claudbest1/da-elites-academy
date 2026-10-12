import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CountUp } from "@/components/CountUp";
import { HeroSlider } from "@/components/HeroSlider";
import { Reveal } from "@/components/Reveal";
import { containerClass, programmes } from "@/lib/site";
import { subjects } from "@/lib/subjects";

const stats = [
  { value: "12", label: "Qualified tutors" },
  { value: "40", label: "Students enrolled" },
  { value: "4+", label: "Countries" },
];

const reasons = [
  {
    title: "Certified and experienced tutors",
    text: "Tutors teach the subjects they know, including US curriculum, SAT, AP, and college mathematics.",
  },
  {
    title: "Updated teaching tools for engaging lessons",
    text: "Lessons use current tools so a student can see the working and take part, not only listen.",
  },
  {
    title: "1-on-1 lessons and group classes",
    text: "A family can book a one-to-one lesson or a small group. Both run live on Zoom.",
  },
  {
    title: "Aligned with global curriculum",
    text: "Teaching follows the programme the student is in, including US curriculum and other school systems.",
  },
];

const steps = [
  {
    title: "Name the class",
    text: "Tell us the subject, the grade or programme, and whether you want a one-to-one or a small group.",
  },
  {
    title: "Join a live class",
    text: "Lessons run on Zoom. You will need a quiet place, a notebook, and the topic you want to start with.",
  },
  {
    title: "Practise and review",
    text: "Each class ends with something to attempt. The next one begins with what that attempt showed.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

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

      <section className="bg-sand">
        <div className={`${containerClass} grid gap-6 py-16 lg:grid-cols-2 lg:py-20`}>
          <Reveal>
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
          </Reveal>
          <Reveal delay={80}>
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
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${containerClass} py-16 sm:py-20`}>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-terra-deep">Why choose us?</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl text-ink sm:text-5xl">
              A class that fits the student.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {reasons.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="surface-card h-full p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-deep font-display text-lg text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className={`${containerClass} py-16 sm:py-20`}>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-terra-deep">Programmes</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl text-ink sm:text-5xl">
              Support for international curricula and college mathematics.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
              Da’Elites’ Virtual Academy offers academic coaching mapped to the US, UK, and Canadian
              school programmes, and a college mathematics course for university-level work.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {programmes.map((programme) => (
              <article key={programme.id} className="surface-card p-7">
                <h3 className="font-display text-2xl text-ink">{programme.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{programme.intro}</p>
                <Link
                  href={`/curriculum#${programme.id}`}
                  className="mt-5 inline-flex text-xs font-bold uppercase tracking-[0.16em] text-blue-deep"
                >
                  Read the programme
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className={`${containerClass} py-16 sm:py-20`}>
          <Reveal>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-terra-deep">Subjects</p>
                <h2 className="mt-3 max-w-xl font-display text-4xl text-ink sm:text-5xl">
                  Classes for the work a student is doing now.
                </h2>
              </div>
              <Link
                href="/curriculum"
                className="text-sm font-semibold text-blue-deep underline-offset-4 hover:underline"
              >
                Open the full curriculum
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <Reveal key={subject.slug} delay={index * 80}>
                <Link href={`/curriculum/${subject.slug}`} className="group surface-card relative block h-full overflow-hidden">
                  <span className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-terra transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none" />
                  <div className="relative aspect-[16/10] overflow-hidden bg-navy">
                    <Image
                      src={subject.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-ink transition-colors group-hover:text-blue-deep">
                      {subject.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{subject.kicker}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-terra-deep">
                      Read more
                      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-sand">
        <div className={`${containerClass} grid gap-12 py-16 lg:grid-cols-2 lg:py-20`}>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-terra-deep">Start studying</p>
            <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Three steps into a class.</h2>
            <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
              There is no account to create on this site. An enquiry goes to the academy, and a place
              is confirmed when we reply.
            </p>
            <div className="mt-8">
              <ButtonLink href="/start-studying" variant="secondary">
                See how enrolment works
              </ButtonLink>
            </div>
          </Reveal>
          <ol className="grid gap-4">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <li className="surface-card grid grid-cols-[auto_1fr] items-center gap-5 p-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-terra/10 font-display text-xl text-terra-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mist">{step.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className={`${containerClass} py-16 sm:py-24`}>
          <blockquote className="max-w-3xl">
            <p className="font-display text-3xl leading-snug sm:text-4xl">
              A clear path through the class in front of a student: the topic, the method, and the time.
            </p>
            <footer className="mt-4 text-sm font-semibold text-white/70">Da’Elites Academy</footer>
          </blockquote>
          <div className="mt-10">
            <ButtonLink href="/book" variant="terra">
              Book a session
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}