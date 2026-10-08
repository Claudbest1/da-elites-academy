import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { containerClass, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Da’Elites Academy handles information you send by email.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Menu"
        title="Privacy policy"
        lede="This site explains the academy’s classes. It does not run student accounts, and it does not store the enquiry form on a server."
      />
      <section>
        <div className={`${containerClass} max-w-3xl space-y-8 py-14 text-sm leading-relaxed text-ink-soft sm:py-16`}>
          <div>
            <h2 className="font-display text-2xl text-ink">What you send</h2>
            <p className="mt-3">
              The contact and booking forms open an email to {site.email}. The message contains
              only what you type: a name, an email address, an optional phone number, and the
              details of the class you are asking about. If your email app does not open, nothing
              is sent until you send it yourself.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">What this website stores</h2>
            <p className="mt-3">
              Pages are public information about subjects and exams. The site does not ask you to
              create a password, and it does not keep a copy of the form after you leave the page.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Other sites</h2>
            <p className="mt-3">
              Links to WAEC, JAMB, IELTS, ETS, and LinkedIn leave this website. Those organisations
              have their own privacy notices.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Questions</h2>
            <p className="mt-3">
              Write to{" "}
              <a className="font-semibold text-blue-deep" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              if you want to know what the academy holds from an email you already sent.
            </p>
            <p className="mt-3 text-mist">Last updated 29 September 2026.</p>
          </div>
        </div>
      </section>
    </>
  );
}
