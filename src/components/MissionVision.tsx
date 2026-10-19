import Image from "next/image";
import { academyCopy, containerClass } from "@/lib/site";

export function MissionVision() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className={`${containerClass} grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20`}>
          <div>
            <h2 className="font-display text-4xl text-terra sm:text-5xl">Our Vision</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
              {academyCopy.vision}
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-blue-deep">
            <Image
              src="/hero/student-home.jpg"
              alt="A student waving during an online lesson at home"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[62%_center]"
            />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className={`${containerClass} grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20`}>
          <div className="relative aspect-[16/10] overflow-hidden bg-sand">
            <Image
              src="/hero/students-together.jpg"
              alt="Students joining an online class together"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_42%]"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl text-blue-deep sm:text-5xl">Our Mission</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
              {academyCopy.mission}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
