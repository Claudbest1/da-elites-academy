"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { containerClass } from "@/lib/site";

const slides = [
  {
    eyebrow: "Virtual tutoring · Nigeria",
    title: "Prepare for the paper, not a generic lesson.",
    text: "Da’Elites Academy runs live classes for WAEC, JAMB, IELTS, and TOEFL. Mathematics, English, and the sciences are taught to the stage a student is sitting.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "A student writing notes at a desk",
    primary: { href: "/book", label: "Book a session" },
    secondary: { href: "/curriculum", label: "Our curriculum" },
  },
  {
    eyebrow: "WAEC and JAMB",
    title: "School papers, taught live.",
    text: "Objective practice, theory working, and Use of English. Lessons stay with the paper a student is actually sitting, in a one-to-one or a small group.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Students in a classroom",
    primary: { href: "/curriculum/mathematics", label: "Explore subjects" },
    secondary: { href: "/start-studying", label: "How to join" },
  },
  {
    eyebrow: "IELTS and TOEFL",
    title: "International English, one paper at a time.",
    text: "Listening, reading, writing, and speaking are trained on their own criteria, then sat together so timing becomes familiar.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80",
    imageAlt: "Students working together around a laptop",
    primary: { href: "/curriculum/ielts", label: "IELTS syllabus" },
    secondary: { href: "/curriculum/toefl", label: "TOEFL syllabus" },
  },
];

function ArrowIcon({ direction }: { direction: "previous" | "next" }) {
  const path = direction === "next" ? "M5 12h14M13 6l6 6-6 6" : "M19 12H5M11 18l-6-6 6-6";
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d={path} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
    </svg>
  );
}

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || paused) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [paused]);

  function go(next: number) {
    setIndex((next + slides.length) % slides.length);
  }

  return (
    <section
      className="relative isolate min-h-[34rem] overflow-hidden bg-navy text-white sm:min-h-[40rem]"
      aria-roledescription="carousel"
      aria-label="Academy highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((item, itemIndex) => (
        <div
          key={item.title}
          aria-hidden={itemIndex !== index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            itemIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={item.image}
            alt=""
            fill
            priority={itemIndex === 0}
            sizes="100vw"
            className={`object-cover ${itemIndex === index ? "kenburns" : ""}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/82 to-navy/20" />
        </div>
      ))}

      <div className={`${containerClass} relative z-10 flex min-h-[34rem] flex-col justify-end py-16 sm:min-h-[40rem] sm:py-20`}>
        <div key={slide.title} className="slide-copy max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f0b2a4]">{slide.eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.08] sm:text-6xl">{slide.title}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{slide.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={slide.primary.href} variant="terra">
              {slide.primary.label}
            </ButtonLink>
            <ButtonLink href={slide.secondary.href} variant="ghost">
              {slide.secondary.label}
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-start gap-3 sm:justify-end">
          <div className="mr-2 flex gap-2" role="tablist" aria-label="Slides">
            {slides.map((item, itemIndex) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={itemIndex === index}
                aria-label={`Show slide ${itemIndex + 1}: ${item.eyebrow}`}
                className={`h-2.5 w-2.5 rounded-full ${itemIndex === index ? "bg-terra" : "bg-white/40"}`}
                onClick={() => go(itemIndex)}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Previous slide"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white hover:text-navy"
            onClick={() => go(index - 1)}
          >
            <ArrowIcon direction="previous" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white hover:text-navy"
            onClick={() => go(index + 1)}
          >
            <ArrowIcon direction="next" />
          </button>
        </div>
      </div>
    </section>
  );
}
