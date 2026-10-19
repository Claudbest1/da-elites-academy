import type { ReactNode } from "react";
import { containerClass } from "@/lib/site";

export function PageHeroBand({
	as: Tag = "section",
	children,
}: {
	as?: "section" | "header";
	children: ReactNode;
}) {
	return (
		<Tag className="relative overflow-hidden bg-[#07192c] text-white">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: "url('/hero/page-hero-bg.jpg')" }}
			/>
			<div className="relative z-10">{children}</div>
		</Tag>
	);
}

export function PageHero({
	eyebrow,
	title,
	lede,
}: {
	eyebrow: string;
	title: string;
	lede: string;
}) {
	return (
		<PageHeroBand>
			<div className={`${containerClass} slide-copy py-14 sm:py-20`}>
				<p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f0b2a4]">
					{eyebrow}
				</p>
				<h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] text-white sm:text-6xl">
					{title}
				</h1>
				<p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
					{lede}
				</p>
			</div>
		</PageHeroBand>
	);
}
