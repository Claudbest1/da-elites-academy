import Link from "next/link";

const variants = {
  primary: "bg-blue-deep text-white hover:bg-blue",
  terra: "bg-terra text-white hover:bg-terra-deep",
  secondary:
    "border border-ink/15 bg-white text-ink hover:border-blue-deep hover:text-blue-deep",
  ghost: "border border-white/40 bg-white/10 text-white hover:bg-white hover:text-navy",
  light: "bg-white text-blue-deep hover:bg-paper",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition duration-300 hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
