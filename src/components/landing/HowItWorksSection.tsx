"use client";

import { useMemo, useState } from "react";

type Step = {
	number: string;
	title: string;
	description: string;
};

export const HowItWorksSection = () => {
	const steps = useMemo<Step[]>(
		() => [
			{
				number: "01.",
				title: "Search or describe",
				description: "Use filters to search manually, or describe your ideal customer and let AI find matches.",
			},
			{
				number: "02.",
				title: "We aggregate data",
				description: "Our system pulls from public sources, professional networks, and verified databases.",
			},
			{
				number: "03.",
				title: "Real-time verification",
				description: "Every email and phone number is verified before you see it. No bounces, no wasted time.",
			},
			{
				number: "04.",
				title: "Export & outreach",
				description: "Download as CSV or sync directly to your CRM. Start your outreach in minutes.",
			},
		],
		[]
	);

	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section id="how-it-works" className="relative overflow-hidden bg-black py-20 sm:py-24">
			{/* Left green glow */}
			<img
				src="/assets/Green%20Gradient%20Image%20(1).png"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute -left-50 top-60 w-160 max-w-none select-none opacity-60 blur-[10px]"
				draggable={false}
			/>

			{/* Blue glow beside green */}
			<img
				src="/assets/Blue%20Gradient%20Image%20(2).png"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute -left-80 top-24 w-150 max-w-none select-none opacity-55 blur-md"
				draggable={false}
			/>

			{/* Left doodles */}
			<img
				src="/assets/doodle.svg"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute left-48 top-[62%] hidden w-40 -translate-y-1/2 select-none opacity-90 invert md:block"
				draggable={false}
			/>
			<img
				src="/assets/Burst-pucker-1.svg"
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute left-20 bottom-24 hidden w-19 select-none invert md:block"
				draggable={false}
			/>

			<div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-6xl">
					<div className="max-w-4xl">
						<h2 className="text-balance font-sans text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
							<span className="font-serif text-white/60 italic">How it works?</span> From search to outreach in four 
							<br />
							simple steps.
						</h2>
					</div>

					{/* Step rail (right-aligned on desktop) */}
					<div className="mt-14 md:ml-auto md:max-w-4xl">
						<div className="flex flex-col gap-6 md:flex-row md:items-stretch md:justify-end md:gap-8">
							{steps.map((step, index) => {
								const isActive = index === activeIndex;
								return (
									<button
										key={step.number}
										type="button"
										onClick={() => setActiveIndex(index)}
										aria-pressed={isActive}
										className={
											"group relative overflow-hidden rounded-xl bg-white/5 text-left ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 " +
											"md:h-105 " +
											"transition-[width,transform,background-color,box-shadow] duration-500 ease-in-out " +
											(isActive
												? "p-10 shadow-[0_24px_60px_rgba(0,0,0,0.55)] md:w-92"
												: "p-8 md:w-24 md:px-6 md:py-10")
										}
									>
										{/* KEY FIX: relative div must be h-full on desktop so children can fill it */}
										<div className="relative md:h-full">

											{/* Compact layout */}
											{!isActive && (
												<>
													{/* Mobile */}
													<div className="flex flex-row items-start justify-between gap-6 md:hidden">
														<div className="font-bayside text-3xl font-semibold text-white">{step.number}</div>
														<div className="text-lg font-medium text-white/80">{step.title}</div>
													</div>

													{/* Desktop: number pinned top-left, title centered in card */}
													<div className="hidden md:block md:h-full">
														{/* Number always top-left */}
														<div className="font-bayside text-3xl font-semibold text-white">
															{step.number}
														</div>
														{/* Title centered in the remaining vertical space */}
														<div
                                style={{ top: "4.5rem" }}
                                className="absolute left-0 right-0 flex justify-center"
                            >
															<div className="text-lg font-medium text-white/80 [writing-mode:vertical-rl] [text-orientation:mixed]">
																{step.title}
															</div>
														</div>
													</div>
												</>
											)}

											{/* Expanded layout */}
											{isActive && (
												<div>
													<div className="font-bayside text-7xl font-semibold tracking-[-0.02em] text-white">{step.number}</div>
													<div className="mt-6 text-3xl font-semibold text-white">{step.title}</div>
													<p className="mt-4 max-w-sm text-base leading-relaxed text-white/70">{step.description}</p>
												</div>
											)}
										</div>

										<div
											className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
											aria-hidden="true"
										>
											<div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent" />
										</div>
									</button>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};