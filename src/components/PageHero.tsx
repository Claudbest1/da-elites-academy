import { containerClass } from "@/lib/site";

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
		<section className="bg-blue-deep text-white">
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
		</section>
	);
}
