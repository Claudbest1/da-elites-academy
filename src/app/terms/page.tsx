import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { containerClass, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using the Da’Elites Academy website and sending a lesson enquiry.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Menu"
        title="Terms of use"
        lede="These terms cover the website. A confirmed class is agreed separately, in the academy’s reply to you."
      />
      <section>
        <div className={`${containerClass} max-w-3xl space-y-8 py-14 text-sm leading-relaxed text-ink-soft sm:py-16`}>
          <div>
            <h2 className="font-display text-2xl text-ink">The site</h2>
            <p className="mt-3">
              {site.name} publishes information about {site.legalName}: subjects, how classes run,
              and how to enquire. It is not the website of WAEC, JAMB, IELTS, or ETS, and it does
              not register candidates for those examinations.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Enquiries</h2>
            <p className="mt-3">
              Sending a form opens an email. It does not reserve a seat, fix a fee, or start a
              class. A place exists when the academy writes back and you accept the arrangement
              in that reply.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Past papers</h2>
            <p className="mt-3">
              Examination papers and scoring materials remain the property of the bodies that
              publish them. This site links to those bodies. It does not copy their papers.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Writing on these pages</h2>
            <p className="mt-3">
              Curriculum descriptions on this site were written for Da’Elites. You may not copy
              them onto another site and present them as your own course.
            </p>
            <p className="mt-3 text-mist">Last updated 29 September 2026.</p>
          </div>
        </div>
      </section>
    </>
  );
}
