import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { BrandIcon, type BrandName } from "./BrandIcon";
import { Reveal } from "./Reveal";

const orbitChips: { name: BrandName; label: string; className: string }[] = [
  { name: "openai", label: "OpenAI", className: "left-[2%] top-[18%]" },
  { name: "react", label: "React", className: "right-[0%] top-[10%]" },
  { name: "anthropic", label: "Anthropic", className: "right-[-4%] top-[56%]" },
  { name: "node", label: "Node.js", className: "left-[-2%] top-[64%]" },
  { name: "aws", label: "AWS", className: "left-[40%] bottom-[-2%]" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="bg-grid mask-fade pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] -z-10 size-[520px] rounded-full bg-accent-soft/60 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[1.15fr_1fr]">
        <div>
          <Reveal>
            <h1 className="text-5xl leading-[1.02] font-semibold tracking-tight text-balance md:text-7xl">
              I build software that puts{" "}
              <span className="font-serif font-normal italic text-accent">AI</span>{" "}
              to work.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              I&apos;m Juan, a senior full-stack engineer with 18 years of shipping
              web products. Today I help teams turn AI from a flashy demo into a
              feature their users rely on — and I use it every day to build
              faster.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
              >
                Let&apos;s build something
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
              >
                See my experience
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 inline-flex items-center gap-2 text-sm text-muted">
              <Clock className="size-4" />
              Remote · working US Eastern Time (ET) business hours
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative mx-auto aspect-square w-full max-w-[420px]">
          <svg viewBox="0 0 400 400" className="absolute inset-0 size-full" aria-hidden>
            <g className="animate-orbit">
              <circle cx="200" cy="200" r="190" fill="none" stroke="var(--color-line)" strokeDasharray="2 6" />
            </g>
            <circle cx="200" cy="200" r="150" fill="none" stroke="var(--color-line)" />
            <circle cx="200" cy="200" r="190" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="60 1134" strokeLinecap="round" className="animate-orbit" />
            <circle cx="350" cy="200" r="4" fill="var(--color-accent)" />
            <circle cx="62" cy="120" r="3" fill="var(--color-ink)" />
            <circle cx="120" cy="345" r="3" fill="var(--color-sage)" />
          </svg>

          <div className="absolute inset-[22%] overflow-hidden rounded-full shadow-[0_30px_60px_-20px_rgb(19_19_22/0.35)] ring-8 ring-paper">
            <Image
              src="/images/juan.png"
              alt="Juan Andrés Camacho"
              fill
              priority
              sizes="240px"
              className="object-cover"
            />
          </div>

          {orbitChips.map((chip, i) => (
            <div
              key={chip.name}
              className={`animate-float absolute ${chip.className}`}
              style={{ animationDelay: `${i * -1.3}s` }}
            >
              <div className="flex items-center gap-2 rounded-full border border-line bg-paper/90 py-1.5 pr-3 pl-1.5 text-xs font-medium shadow-sm backdrop-blur">
                <span className="grid size-6 place-items-center rounded-full bg-paper-2">
                  <BrandIcon name={chip.name} className="size-3.5" />
                </span>
                {chip.label}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
