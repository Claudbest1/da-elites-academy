"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { containerClass } from "@/lib/site";

const slides = [
  {
    eyebrow: "Live tutoring · United States, UK, and Canada",
    title: "Personalised tutoring. Stronger results. Greater confidence.",
    text: "Expert online tutoring for students across the USA, the UK, and Canada. From SAT and AP preparation to college math, French, Yoruba, and coding, every lesson is tailored to help students thrive.",
    image: "/hero/student-home.jpg",
    imageAlt: "A student waving during an online lesson at home",
    objectClass: "object-[62%_center]",
    primary: { href: "/book", label: "Book a session" },
    secondary: { href: "/curriculum", label: "Our curriculum" },
  },
  {
    eyebrow: "US curriculum",
    title: "The class your student is actually in.",
    text: "Homework help and subject teaching stay with the grade and the programme, from elementary school through high school, SAT, AP, and college mathematics.",
    image: "/hero/students-together.jpg",
    imageAlt: "Students joining an online class together",
    objectClass: "object-[center_42%]",
    primary: { href: "/curriculum/mathematics", label: "Explore subjects" },
    secondary: { href: "/start-studying", label: "How to join" },
  },
  {
    eyebrow: "Languages and coding",
    title: "French, Yoruba, and coding, taught live.",
    text: "Language lessons build speaking and writing a student can use. Coding lessons build a program the student can explain. Both sit beside the academic subjects.",
    image: "/hero/student-study.jpg",
    imageAlt: "A student studying at a laptop with books",
    objectClass: "object-[78%_center]",
    primary: { href: "/curriculum/french", label: "French" },
    secondary: { href: "/curriculum/coding", label: "Coding" },
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
            className={`object-cover ${item.objectClass} ${itemIndex === index ? "kenburns" : ""}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/25" />
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
