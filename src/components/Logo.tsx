export function Mark({
  className = "h-10 w-10",
  variant = "color",
}: {
  className?: string;
  variant?: "color" | "light";
}) {
  const main = variant === "light" ? "#F4F1EC" : "#1468A3";
  const accent = variant === "light" ? "#F0A090" : "#C44732";

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path fill={main} d="M6 6h40v12H22v6h18v10H22v6h20v12H6V6z" />
      <path fill={accent} d="M36 4h16v14H36z" />
      <path fill={accent} d="M32 24h14v10H32z" />
      <path fill={accent} d="M34 46h18v14H34z" />
    </svg>
  );
}

export function Logo({ tone = "default" }: { tone?: "default" | "light" }) {
  const title = tone === "light" ? "text-white" : "text-blue";
  const sub = tone === "light" ? "text-[#F0A090]" : "text-terra-deep";
  const rule = tone === "light" ? "bg-white/35" : "bg-ink/15";

  return (
    <span className="inline-flex items-center gap-3">
      <Mark className="h-9 w-9 shrink-0" variant={tone === "light" ? "light" : "color"} />
      <span className={`hidden h-8 w-px sm:block ${rule}`} aria-hidden="true" />
      <span className="flex flex-col leading-none">
        <span className={`text-[13px] font-extrabold tracking-[0.16em] ${title}`}>
          DA ELITES
        </span>
        <span className={`mt-1 text-[8px] font-bold tracking-[0.18em] sm:text-[9px] ${sub}`}>
          VIRTUAL TUTORING
        </span>
      </span>
    </span>
  );
}
