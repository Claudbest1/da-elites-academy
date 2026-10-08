import Image from "next/image";
import Link from "next/link";
import type { Subject } from "@/lib/subjects";

export function SubjectChapter({ subject, index }: { subject: Subject; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <article id={subject.slug} className="scroll-mt-28 border-t border-line py-14 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
        <div className={`group ${reversed ? "lg:order-2" : ""}`}>
          <div className="surface-rest relative aspect-[5/4] overflow-hidden bg-navy">
            <Image
              src={subject.image}
              alt={subject.imageAlt}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          </div>
        </div>
        <div className={reversed ? "lg:order-1" : undefined}>
          <p className="font-display text-sm tracking-[0.2em] text-terra-deep">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">{subject.name}</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">{subject.summary}</p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {subject.stages.map((stage) => (
              <li key={stage.id}>
                <Link
                  href={`/curriculum/${subject.slug}#${stage.id}`}
                  className="flex items-center justify-between gap-4 py-3 text-sm font-semibold text-ink hover:text-blue-deep"
                >
                  {stage.label}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={`/curriculum/${subject.slug}`}
            className="mt-6 inline-flex text-sm font-semibold text-blue-deep underline-offset-4 hover:underline"
          >
            View the full syllabus
          </Link>
        </div>
      </div>
    </article>
  );
}
