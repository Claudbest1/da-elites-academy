import { ButtonLink } from "@/components/ButtonLink";
import { containerClass } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className={`${containerClass} py-24`}>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-terra-deep">404</p>
        <h1 className="mt-3 font-display text-5xl text-ink">This page is not on the site.</h1>
        <p className="mt-4 max-w-lg text-ink-soft">
          The address may be mistyped. The curriculum and the booking form are the two places most
          people need.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/curriculum">Our curriculum</ButtonLink>
          <ButtonLink href="/" variant="secondary">
            Home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
