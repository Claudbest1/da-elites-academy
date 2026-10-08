import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { containerClass, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to Da’Elites Academy about classes, timetables, and enrolment.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Write to the academy"
        lede="Questions about a subject, a timetable, or an exam go to the same desk. For a class request, the booking form is the faster path."
      />
      <section>
        <div className={`${containerClass} grid gap-10 py-14 lg:grid-cols-[280px_1fr] lg:py-16`}>
          <aside className="h-fit space-y-6 text-sm leading-relaxed text-ink-soft">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-terra-deep">Email</h2>
              <a className="mt-2 inline-block font-semibold text-blue-deep" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-terra-deep">Classes</h2>
              <p className="mt-2">{site.format}</p>
              <p>{site.location}</p>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-terra-deep">Profile</h2>
              <a
                className="mt-2 inline-block font-semibold text-blue-deep"
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </aside>
          <EnquiryForm intent="message" />
        </div>
      </section>
    </>
  );
}
