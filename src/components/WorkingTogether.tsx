import { CalendarClock, CreditCard, FileSignature, MessagesSquare } from "lucide-react";
import { Reveal } from "./Reveal";

const points = [
  {
    icon: CreditCard,
    title: "Payments already sorted",
    body: "I have a payments solution in place. You get a clear invoice in USD and pay it like any other vendor — no new accounts or setup on your side.",
  },
  {
    icon: CalendarClock,
    title: "On your clock",
    body: "I work US Eastern Time business hours, so standups, calls and Slack happen while your team is online.",
  },
  {
    icon: FileSignature,
    title: "Simple to engage",
    body: "I work as an independent contractor: no payroll or benefits admin, and easy to scale up or down as the project needs.",
  },
  {
    icon: MessagesSquare,
    title: "Remote-native",
    body: "Years of embedding with US teams have made clear updates, written docs and fast responses second nature.",
  },
];

function InvoiceIllustration() {
  const ink = "var(--color-ink)";
  const line = "var(--color-line)";
  return (
    <svg viewBox="0 0 280 220" className="h-auto w-full max-w-[320px]" aria-hidden>
      <rect x="54" y="26" width="172" height="176" rx="14" fill="white" stroke={line} />
      <rect x="74" y="46" width="56" height="8" rx="4" fill={ink} />
      <rect x="74" y="60" width="36" height="5" rx="2.5" fill={line} />
      <text x="206" y="56" textAnchor="end" fontSize="11" fill="var(--color-muted)" fontFamily="var(--font-geist-mono)">
        USD
      </text>
      {[86, 104, 122].map((y, i) => (
        <g key={y}>
          <rect x="74" y={y} width={[80, 64, 72][i]} height="5" rx="2.5" fill={line} />
          <rect x="176" y={y} width="30" height="5" rx="2.5" fill={line} />
        </g>
      ))}
      <path d="M74 142h132" stroke={line} />
      <rect x="74" y="154" width="40" height="7" rx="3.5" fill={ink} />
      <rect x="160" y="152" width="46" height="11" rx="5.5" fill="var(--color-accent)" />
      <g transform="rotate(-12 200 186)">
        <rect x="160" y="168" width="84" height="34" rx="8" fill="var(--color-paper)" stroke="var(--color-sage)" strokeWidth="2" />
        <text x="202" y="191" textAnchor="middle" fontSize="15" fontWeight="600" fill="var(--color-sage)" fontFamily="var(--font-geist-sans)" letterSpacing="2">
          PAID
        </text>
      </g>
      <circle cx="40" cy="60" r="12" fill="var(--color-accent-soft)" />
      <circle cx="40" cy="60" r="4" fill="var(--color-accent)" />
    </svg>
  );
}

export function WorkingTogether() {
  return (
    <section id="working-together" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:items-center">
        <Reveal>
          <p className="font-mono text-xs tracking-wider text-accent uppercase">Working together</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            Never hired remote? <span className="font-serif font-normal italic">It&apos;s easy.</span>
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-muted">
            Hiring a remote engineer should feel like hiring anyone else. I&apos;ve taken
            care of the logistics so you can focus on the work.
          </p>
          <div className="mt-10">
            <InvoiceIllustration />
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {points.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-line bg-white/60 p-7 transition duration-300 hover:border-ink/20">
                <span className="grid size-10 place-items-center rounded-xl bg-accent-soft/70 text-accent">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
