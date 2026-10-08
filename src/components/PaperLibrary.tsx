"use client";

import { useState } from "react";
import { papers } from "@/lib/papers";

export function PaperLibrary() {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? papers : papers.filter((paper) => paper.id === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter by exam body">
        <FilterButton label="All exams" pressed={active === "all"} onClick={() => setActive("all")} />
        {papers.map((paper) => (
          <FilterButton
            key={paper.id}
            label={paper.body}
            pressed={active === paper.id}
            onClick={() => setActive(paper.id)}
          />
        ))}
      </div>
      <p className="mt-4 text-sm text-mist">
        Showing {visible.length} {visible.length === 1 ? "guide" : "guides"}
      </p>
      <div className="mt-8 grid gap-6">
        {visible.map((paper) => (
          <article key={paper.id} className="surface-rest p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-terra-deep">{paper.body}</p>
            <h2 className="mt-2 font-display text-3xl text-ink">{paper.title}</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink-soft">{paper.summary}</p>
            <h3 className="mt-6 text-sm font-semibold text-ink">Subjects we teach against this exam</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {paper.subjects.map((subject) => (
                <li key={subject} className="rounded-full border border-line bg-paper px-3 py-1 text-sm text-ink-soft">
                  {subject}
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-sm font-semibold text-ink">How it is used in class</h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-ink-soft">{paper.inClass}</p>
            <a
              href={paper.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm font-semibold text-blue-deep underline-offset-4 hover:underline"
            >
              Official site: {paper.linkLabel}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

function FilterButton({
  label,
  pressed,
  onClick,
}: {
  label: string;
  pressed: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold ${
        pressed ? "bg-blue-deep text-white" : "border border-line bg-white text-ink hover:border-blue-deep"
      }`}
    >
      {label}
    </button>
  );
}
