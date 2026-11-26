import type { ReactNode } from "react";
import {
  BrowserIllustration,
  ChatIllustration,
  CloudIllustration,
  LaunchIllustration,
} from "./Illustrations";
import { Reveal } from "./Reveal";

const services: { title: string; body: string; art: ReactNode; tags: string[] }[] = [
  {
    title: "AI-powered features",
    body: "Assistants, smart search, document processing and agents that take real actions — built to be reliable, not just impressive in a demo.",
    art: <ChatIllustration />,
    tags: ["LLM APIs", "RAG", "Agents"],
  },
  {
    title: "Full-stack products",
    body: "Fast, polished web apps with interfaces people enjoy using, backed by clean APIs that are easy to grow.",
    art: <BrowserIllustration />,
    tags: ["React", "Next.js", "Node", "GraphQL"],
  },
  {
    title: "Cloud & data",
    body: "Infrastructure that stays boring in the best way: serverless, Postgres, pipelines and infrastructure as code.",
    art: <CloudIllustration />,
    tags: ["AWS", "Postgres", "Terraform"],
  },
  {
    title: "Idea to launch",
    body: "A technical partner for founders: scoping, architecture, MVP, and everything that comes after go-live.",
    art: <LaunchIllustration />,
    tags: ["MVPs", "Architecture", "Product"],
  },
];

export function Services() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <p className="font-mono text-xs tracking-wider text-accent uppercase">What I do</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          From the first sketch to the <span className="font-serif font-normal italic">thousandth</span> user.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <article className="group h-full overflow-hidden rounded-3xl border border-line bg-white/60 transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_20px_40px_-24px_rgb(19_19_22/0.25)]">
              <div className="bg-grid h-44 border-b border-line bg-paper-2/40 p-4">{s.art}</div>
              <div className="p-7">
                <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
