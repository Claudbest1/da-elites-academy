"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";
import { academics, containerClass, mainNav } from "@/lib/site";

function isActive(pathname: string, href: string) {
	if (href === "/") return pathname === "/";
	return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
	const pathname = usePathname();
	return <HeaderBar key={pathname} pathname={pathname} />;
}

function HeaderBar({ pathname }: { pathname: string }) {
	const menuId = useId();
	const mobileId = useId();
	const [open, setOpen] = useState(false);
	const [mobile, setMobile] = useState(false);
	const academicsActive = academics.some((item) =>
		isActive(pathname, item.href),
	);

	useEffect(() => {
		function onKey(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setOpen(false);
				setMobile(false);
			}
		}
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, []);

	return (
		<header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
			<div className="bg-blue-deep text-paper">
				<div
					className={`${containerClass} flex items-center justify-between gap-3 py-2 text-xs sm:text-sm`}
				>
					<p className="min-w-0 leading-snug">
						Live Zoom classes for WAEC, JAMB, IELTS, and TOEFL
					</p>
					<Link
						href="/book"
						className="shrink-0 font-semibold text-white underline-offset-4 hover:underline"
					>
						Book a session
					</Link>
				</div>
			</div>
			<div
				className={`${containerClass} flex h-16 min-w-0 items-center justify-between gap-3`}
			>
				<Link
					href="/"
					aria-label="Da’Elites Academy, home"
					className="shrink-0"
				>
					<Logo />
				</Link>

				<nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
					{mainNav.slice(0, 2).map((item) => (
						<Link
							key={item.href}
							href={item.href}
							aria-current={isActive(pathname, item.href) ? "page" : undefined}
							className={`text-sm font-semibold ${
								isActive(pathname, item.href)
									? "text-blue-deep"
									: "text-ink-soft hover:text-blue-deep"
							}`}
						>
							{item.label}
						</Link>
					))}

					<div
						className="relative"
						onMouseEnter={() => setOpen(true)}
						onMouseLeave={() => setOpen(false)}
					>
						<button
							type="button"
							className={`inline-flex items-center gap-1 text-sm font-semibold ${
								academicsActive
									? "text-blue-deep"
									: "text-ink-soft hover:text-blue-deep"
							}`}
							aria-expanded={open}
							aria-controls={menuId}
							onClick={() => setOpen((value) => !value)}
						>
							Academics
							<span aria-hidden="true" className="text-[10px]">
								▾
							</span>
						</button>
						{open ? (
							<div
								id={menuId}
								className="absolute left-0 top-full z-20 w-80 pt-3"
							>
								<ul className="rounded-2xl border border-line bg-white/95 p-2 shadow-[var(--shadow-card)] backdrop-blur">
									{academics.map((item) => (
										<li key={item.href}>
											<Link
												href={item.href}
												className="block rounded-xl px-3 py-3 hover:bg-paper"
												aria-current={
													isActive(pathname, item.href) ? "page" : undefined
												}
											>
												<span className="block text-sm font-semibold text-ink">
													{item.label}
												</span>
												<span className="mt-1 block text-sm text-mist">
													{item.description}
												</span>
											</Link>
										</li>
									))}
								</ul>
							</div>
						) : null}
					</div>

					{mainNav.slice(2).map((item) => (
						<Link
							key={item.href}
							href={item.href}
							aria-current={isActive(pathname, item.href) ? "page" : undefined}
							className={`text-sm font-semibold ${
								isActive(pathname, item.href)
									? "text-blue-deep"
									: "text-ink-soft hover:text-blue-deep"
							}`}
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<Link
						href="/book"
						className="hidden rounded-full bg-terra px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-terra-deep sm:inline-flex"
					>
						Book a session
					</Link>
					<button
						type="button"
						className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink lg:hidden"
						aria-expanded={mobile}
						aria-controls={mobileId}
						aria-label={mobile ? "Close menu" : "Open menu"}
						onClick={() => setMobile((value) => !value)}
					>
						<svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
							{mobile ? (
								<path
									d="M6 6l12 12M18 6L6 18"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.75"
									strokeLinecap="round"
								/>
							) : (
								<path
									d="M4 7h16M4 12h16M4 17h16"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.75"
									strokeLinecap="round"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>

			{mobile ? (
				<nav
					id={mobileId}
					className="border-t border-line bg-white lg:hidden"
					aria-label="Mobile"
				>
					<ul className={`${containerClass} py-3`}>
						{mainNav.slice(0, 2).map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									className="block py-3 text-base font-semibold"
								>
									{item.label}
								</Link>
							</li>
						))}
						<li className="py-2 text-xs font-bold uppercase tracking-[0.18em] text-mist">
							Academics
						</li>
						{academics.map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									className="block py-2.5 pl-3 text-base font-semibold"
								>
									{item.label}
								</Link>
							</li>
						))}
						{mainNav.slice(2).map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									className="block py-3 text-base font-semibold"
								>
									{item.label}
								</Link>
							</li>
						))}
						<li className="py-3">
							<Link
								href="/book"
								className="inline-flex rounded-full bg-terra px-5 py-3 text-sm font-semibold text-white"
							>
								Book a session
							</Link>
						</li>
					</ul>
				</nav>
			) : null}
		</header>
	);
}
