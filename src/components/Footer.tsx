import Link from "next/link";
import { Logo } from "@/components/Logo";
import { academics, containerClass, mainNav, site } from "@/lib/site";

const menu = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/contact", label: "Help & Support" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-navy text-paper">
      <div className="h-1 bg-blue" />
      <div className={`${containerClass} grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4`}>
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo tone="light" />
          <ul className="mt-8 space-y-2 text-sm text-white/85">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            {site.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone}`} className="hover:text-white">
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">Menu</h2>
          <ul className="mt-4 space-y-2">
            {menu.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/85 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">Academics</h2>
          <ul className="mt-4 space-y-2">
            {academics.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/85 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">Social</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>
              <a href={site.linkedin} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>{site.location}</li>
            <li>{site.format}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className={`${containerClass} flex flex-col gap-4 py-5 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between`}>
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
