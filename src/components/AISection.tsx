import { Bot, FileSearch, MessagesSquare, Plug, Sparkles, Workflow } from "lucide-react";
import { BrandIcon, brandTitle, type BrandName } from "./BrandIcon";
import { PipelineDiagram } from "./Illustrations";
import { Reveal } from "./Reveal";

const inProduct = [
  { icon: MessagesSquare, text: "Copilots and chat experiences grounded in your own data" },
  { icon: FileSearch, text: "Document and data extraction that turns messy input into structured records" },
  { icon: Bot, text: "Agents that call your APIs and automate multi-step workflows" },
];

const inProcess = [
  { icon: Sparkles, text: "Agentic coding with Cursor and Claude Code — with the review discipline to match" },
  { icon: Workflow, text: "Rapid prototypes that validate an idea in days instead of weeks" },
  { icon: Plug, text: "MCP servers and integrations that plug AI into the tools teams already use" },
];

const aiTools: BrandName[] = ["openai", "anthropic", "gemini", "langchain", "cursor", "claude"];

export function AISection() {
  return (
    <section id="ai" className="relative overflow-hidden bg-ink text-paper">
      <div className="bg-grid-dark mask-fade pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="font-mono text-xs tracking-wider text-accent uppercase">Applied AI</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            AI in the product.{" "}
            <span className="font-serif font-normal italic text-paper/70">AI in the process.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/60">
            The hard part of AI isn&apos;t calling a model, it&apos;s everything around it.
            I pick the right model for the job, design the prompts and tools it works
            with, wire it into real systems, and measure whether it actually delivers.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-8 md:px-10">
            <PipelineDiagram />
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            { title: "What I build with it", items: inProduct },
            { title: "How I build with it", items: inProcess },
          ].map((col, i) => (
            <Reveal key={col.title} delay={0.1 + i * 0.08}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <h3 className="font-mono text-xs tracking-wider text-paper/50 uppercase">{col.title}</h3>
                <ul className="mt-6 space-y-5">
                  {col.items.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex gap-4">
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-accent">
                        <Icon className="size-4" />
                      </span>
                      <span className="pt-1.5 leading-relaxed text-paper/80">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5 text-paper/40">
            <span className="font-mono text-xs tracking-wider uppercase">Daily drivers</span>
            {aiTools.map((name) => (
              <span
                key={name}
                className="flex items-center gap-2 text-sm transition-colors hover:text-paper"
              >
                <BrandIcon name={name} className="size-5" />
                {brandTitle(name)}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
