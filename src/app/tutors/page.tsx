import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { containerClass } from "@/lib/site";
import { tutors, type TutorBlock } from "@/lib/tutors";

export const metadata: Metadata = {
  title: "Our Tutors",
  description:
    "Meet the tutors at Da’Elites Academy, including English, Mathematics, Biology, Chemistry, and Physics.",
};

function Blocks({ blocks }: { blocks: TutorBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => {
        if (block.type === "paragraphs") {
          return (
            <div key={index} className="space-y-3">
              {block.text.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={index} className="space-y-2">
              {block.items.map((item) => (
                <li key={item} className="border-l-2 border-terra pl-4 text-sm leading-relaxed text-ink">
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "steps") {
          return (
            <ol key={index} className="grid gap-3 sm:grid-cols-2">
              {block.items.map((item, stepIndex) => (
                <li key={item.title} className="surface-rest p-4">
                  <p className="font-display text-sm text-terra">{String(stepIndex + 1).padStart(2, "0")}</p>
                  <h4 className="mt-1 font-semibold text-ink">{item.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </li>
              ))}
            </ol>
          );
        }
        return (
          <div key={index} className="grid gap-4 sm:grid-cols-2">
            {block.groups.map((group) => (
              <article key={group.title} className="surface-rest p-5">
                <h4 className="font-display text-xl text-ink">{group.title}</h4>
                {group.intro ? <p className="mt-2 text-sm leading-relaxed text-ink-soft">{group.intro}</p> : null}
                {group.items.length > 0 ? (
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-ink-soft">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default function TutorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Tutors"
        title="The people who teach."
        lede="Profiles of the Da’Elites tutors, written from the details they provided."
      />

      <section className="bg-white">
        <div className={`${containerClass} grid gap-5 py-14 sm:grid-cols-2 lg:grid-cols-4`}>
          {tutors.map((tutor) => (
            <a
              key={tutor.id}
              href={`#${tutor.id}`}
              className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-navy"
            >
              <Image
                src={tutor.image}
                alt={tutor.imageAlt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h2 className="font-display text-2xl leading-tight text-white">{tutor.name}</h2>
                <p className="mt-1 text-sm text-white/80">{tutor.role}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {tutors.map((tutor) => (
        <article key={tutor.id} id={tutor.id} className="scroll-mt-28 border-t border-line bg-white">
          <div className={`${containerClass} grid gap-10 py-16 lg:grid-cols-[280px_1fr] lg:py-20`}>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="surface-rest relative aspect-[3/4] overflow-hidden bg-navy">
                <Image
                  src={tutor.image}
                  alt={tutor.imageAlt}
                  fill
                  sizes="280px"
                  className="object-cover object-top"
                />
              </div>
              <h2 className="mt-5 font-display text-4xl text-ink">{tutor.name}</h2>
              <p className="mt-2 text-sm font-semibold text-terra-deep">{tutor.role}</p>
              <ul className="mt-4 space-y-2">
                {tutor.facts.map((fact) => (
                  <li key={fact} className="text-sm leading-relaxed text-ink-soft">
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0 space-y-12">
              <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">{tutor.tagline}</p>
              {tutor.sections.map((section) => (
                <section key={section.title}>
                  <h3 className="font-display text-3xl text-ink">{section.title}</h3>
                  <div className="mt-4">
                    <Blocks blocks={section.blocks} />
                  </div>
                </section>
              ))}
              <ButtonLink href="/book">Request a class</ButtonLink>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
