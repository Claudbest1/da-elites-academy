import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { containerClass, site } from "@/lib/site";
import { subjects } from "@/lib/subjects";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Send a lesson enquiry to Da’Elites Academy for WAEC, JAMB, IELTS, or TOEFL.",
};

type BookPageProps = {
  searchParams: Promise<{ subject?: string }>;
};

export default async function BookPage({ searchParams }: BookPageProps) {
  const { subject } = await searchParams;
  const match = subjects.find((item) => item.name === subject || item.slug === subject);

  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Book a session"
        lede="Tell us the exam, the subject, and when you can be online. Sending the form opens an email to the academy. We confirm a place only after we reply."
      />
      <section>
        <div className={`${containerClass} grid gap-10 py-14 lg:grid-cols-[1fr_280px] lg:py-16`}>
          <EnquiryForm intent="session" defaultSubject={match?.name ?? ""} />
          <aside className="surface-rest h-fit p-6 text-sm leading-relaxed text-ink-soft">
            <h2 className="font-display text-2xl text-ink">Before you send</h2>
            <ul className="mt-4 space-y-3">
              <li>Classes are live on Zoom.</li>
              <li>Choose one-to-one or a small group.</li>
              <li>This page does not take payment.</li>
              <li>
                Enquiries go to{" "}
                <a className="font-semibold text-blue-deep" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                .
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
