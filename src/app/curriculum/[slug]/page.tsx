import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHeroBand } from "@/components/PageHero";
import { containerClass } from "@/lib/site";
import { getSubject, subjects } from "@/lib/subjects";

type SubjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return subjects.map((subject) => ({ slug: subject.slug }));
}

export async function generateMetadata({ params }: SubjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const subject = getSubject(slug);
  if (!subject) return { title: "Subject" };
  return {
    title: subject.name,
    description: subject.summary,
  };
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  return (
    <article>
      <PageHeroBand as="header">
        <div className={`${containerClass} py-14 sm:py-20`}>
          <p className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/curriculum" className="hover:text-white">
              Curriculum
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-white">{subject.name}</span>
          </p>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-[#f0b2a4]">
            {subject.kicker}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl text-white sm:text-6xl">{subject.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{subject.summary}</p>
        </div>
      </PageHeroBand>

      <div className={`${containerClass} grid gap-12 py-14 lg:grid-cols-[240px_1fr] lg:py-20`}>
        <aside className="h-fit rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)] lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-mist">On this page</p>
          <ul className="mt-3 space-y-2">
            {subject.stages.map((stage) => (
              <li key={stage.id}>
                <a href={`#${stage.id}`} className="text-sm font-semibold text-ink hover:text-blue-deep">
                  {stage.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <ButtonLink href={`/book?subject=${encodeURIComponent(subject.name)}`}>
              Book this subject
            </ButtonLink>
          </div>
        </aside>

        <div className="space-y-14">
          {subject.stages.map((stage) => (
            <section key={stage.id} id={stage.id} className="scroll-mt-28">
              <h2 className="font-display text-3xl text-ink sm:text-4xl">{stage.label}</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{stage.summary}</p>
              <ul className="mt-5 space-y-2 border-l border-line pl-5">
                {stage.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-ink">
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
