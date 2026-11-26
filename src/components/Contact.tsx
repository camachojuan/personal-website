import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { links } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-paper md:p-14">
        <div className="bg-grid-dark mask-fade pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-accent/25 blur-3xl" />
        <div className="relative grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="font-mono text-xs tracking-wider text-accent uppercase">Contact</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance md:text-6xl">
              Have something <span className="font-serif font-normal italic text-paper/70">in mind?</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-paper/60">
              The best way to reach me is on LinkedIn. Send me a message with a few lines
              about your project or team, and I&apos;ll get back to you quickly.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-paper"
              >
                Message me on LinkedIn
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group mx-auto block max-w-xs rotate-2 overflow-hidden rounded-3xl bg-paper text-ink shadow-[0_30px_60px_-20px_rgb(0_0_0/0.5)] transition duration-300 hover:rotate-0"
            >
              <div className="h-20 bg-[linear-gradient(120deg,var(--color-accent-soft),var(--color-paper-2))]" />
              <div className="px-6 pb-6">
                <div className="relative -mt-10 size-20 overflow-hidden rounded-full ring-4 ring-paper">
                  <Image src="/images/juan.png" alt="" fill sizes="80px" className="object-cover" />
                </div>
                <p className="mt-3 font-semibold">Juan Andrés Camacho</p>
                <p className="text-sm text-muted">Senior Full-Stack Engineer · Applied AI</p>
                <span className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#0a66c2] py-2 text-sm font-medium text-white transition-opacity group-hover:opacity-90">
                  Message
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
