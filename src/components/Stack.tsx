import { BrandIcon, brandTitle, type BrandName } from "./BrandIcon";
import { Reveal } from "./Reveal";

const stack: BrandName[] = [
  "typescript",
  "react",
  "next",
  "node",
  "graphql",
  "postgres",
  "supabase",
  "aws",
  "terraform",
  "docker",
  "swift",
  "tailwind",
];

export function Stack() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-center">
        <Reveal>
          <p className="font-mono text-xs tracking-wider text-accent uppercase">Toolbox</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            The right tool,{" "}
            <span className="font-serif font-normal italic">not the trendiest one.</span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            A TypeScript-first stack I know deeply, plus the judgment that only comes
            from having shipped with plenty of others — from C# and ASP.NET to native
            iOS.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4">
            {stack.map((name) => (
              <li
                key={name}
                className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-white/60 transition duration-300 hover:-translate-y-0.5 hover:border-ink/20"
              >
                <span className="text-ink/70 transition-colors group-hover:hidden">
                  <BrandIcon name={name} className="size-7" />
                </span>
                <span className="hidden group-hover:block">
                  <BrandIcon name={name} className="size-7" colored />
                </span>
                <span className="text-xs text-muted">{brandTitle(name)}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
