const stroke = "var(--color-ink)";
const accent = "var(--color-accent)";
const soft = "var(--color-accent-soft)";
const line = "var(--color-line)";

export function ChatIllustration() {
  return (
    <svg viewBox="0 0 240 140" className="h-full w-full" aria-hidden>
      <rect x="28" y="22" width="120" height="40" rx="14" fill="white" stroke={line} />
      <rect x="42" y="36" width="70" height="5" rx="2.5" fill={line} />
      <rect x="42" y="46" width="46" height="5" rx="2.5" fill={line} />
      <rect x="92" y="74" width="124" height="46" rx="14" fill={stroke} />
      <rect x="106" y="88" width="86" height="5" rx="2.5" fill="white" opacity=".85" />
      <rect x="106" y="99" width="60" height="5" rx="2.5" fill="white" opacity=".5" />
      <path d="M196 30l3.5 9.5L209 43l-9.5 3.5L196 56l-3.5-9.5L183 43l9.5-3.5z" fill={accent} />
      <path d="M216 18l1.8 4.7 4.7 1.8-4.7 1.8L216 31l-1.8-4.7-4.7-1.8 4.7-1.8z" fill={accent} opacity=".6" />
      <circle cx="52" cy="104" r="12" fill={soft} />
      <circle cx="52" cy="104" r="4" fill={accent} />
    </svg>
  );
}

export function BrowserIllustration() {
  return (
    <svg viewBox="0 0 240 140" className="h-full w-full" aria-hidden>
      <rect x="30" y="16" width="180" height="112" rx="10" fill="white" stroke={line} />
      <path d="M30 34h180" stroke={line} />
      <circle cx="42" cy="25" r="3" fill={accent} />
      <circle cx="52" cy="25" r="3" fill={line} />
      <circle cx="62" cy="25" r="3" fill={line} />
      <rect x="44" y="46" width="64" height="8" rx="4" fill={stroke} />
      <rect x="44" y="60" width="44" height="5" rx="2.5" fill={line} />
      <rect x="44" y="76" width="34" height="12" rx="6" fill={accent} />
      <rect x="124" y="46" width="72" height="66" rx="8" fill={soft} />
      <path d="M134 98l16-18 12 12 10-8 14 14" fill="none" stroke={accent} strokeWidth="2" strokeLinejoin="round" />
      <rect x="44" y="98" width="64" height="14" rx="4" fill="none" stroke={line} />
    </svg>
  );
}

export function CloudIllustration() {
  return (
    <svg viewBox="0 0 240 140" className="h-full w-full" aria-hidden>
      <path
        d="M120 54V72M120 72H50V90M120 72H190V90M120 72V90"
        fill="none"
        stroke={stroke}
        strokeOpacity=".35"
        className="animate-dash"
      />
      <path
        d="M92 52A12 12 0 0 1 94 28.5A20 20 0 0 1 132 22A14 14 0 0 1 150 52Z"
        fill="white"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="120" cy="40" r="4" fill={accent} />

      <path d="M32 96v22a18 6 0 0 0 36 0V96" fill="white" stroke={line} strokeWidth="1.5" />
      <path d="M32 107a18 6 0 0 0 36 0" fill="none" stroke={line} strokeWidth="1.5" />
      <ellipse cx="50" cy="96" rx="18" ry="6" fill={soft} stroke={accent} strokeWidth="1.5" />

      <rect x="102" y="92" width="36" height="34" rx="9" fill={stroke} />
      <text
        x="120"
        y="116"
        textAnchor="middle"
        fill="white"
        fontSize="20"
        fontStyle="italic"
        fontFamily="var(--font-instrument-serif)"
      >
        λ
      </text>

      {[92, 110].map((y) => (
        <g key={y}>
          <rect x="172" y={y} width="36" height="15" rx="4" fill="white" stroke={line} strokeWidth="1.5" />
          <circle cx="180" cy={y + 7.5} r="2" fill={accent} />
          <rect x="186" y={y + 6} width="16" height="3" rx="1.5" fill={line} />
        </g>
      ))}

      <circle cx="206" cy="26" r="10" fill={soft} />
      <circle cx="206" cy="26" r="3" fill={accent} />
      <circle cx="30" cy="30" r="5" fill="none" stroke={line} />
    </svg>
  );
}

export function LaunchIllustration() {
  return (
    <svg viewBox="0 0 240 140" className="h-full w-full" aria-hidden>
      <path
        d="M30 112c30 0 34-40 70-40s36 26 66 6 24-48 44-50"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />
      <circle cx="30" cy="112" r="7" fill="white" stroke={stroke} strokeWidth="1.5" />
      <circle cx="100" cy="72" r="5" fill={line} />
      <circle cx="166" cy="78" r="5" fill={line} />
      <path d="M210 28V8" stroke={stroke} strokeWidth="1.5" />
      <path d="M210 8h18l-5 6 5 6h-18z" fill={accent} />
      <circle cx="210" cy="28" r="4" fill={stroke} />
      <rect x="70" y="96" width="56" height="22" rx="11" fill={soft} />
      <rect x="80" y="104" width="36" height="5" rx="2.5" fill={accent} opacity=".7" />
    </svg>
  );
}

export function PipelineDiagram() {
  const nodes = [
    { x: 60, label: "Your data", sub: "docs · DBs · APIs" },
    { x: 230, label: "Context", sub: "retrieval · prompts" },
    { x: 400, label: "Model", sub: "GPT · Claude · Gemini" },
    { x: 570, label: "Tools", sub: "actions · agents" },
    { x: 740, label: "Product", sub: "evals · guardrails" },
  ];
  return (
    <svg viewBox="0 0 800 150" className="h-auto w-full" aria-hidden>
      {nodes.slice(0, -1).map((n, i) => (
        <path
          key={n.x}
          d={`M${n.x + 46} 60 L${nodes[i + 1].x - 46} 60`}
          stroke="rgb(255 255 255 / 0.35)"
          strokeWidth="1.5"
          className="animate-dash"
        />
      ))}
      {nodes.map((n, i) => {
        const isModel = i === 2;
        return (
          <g key={n.label}>
            <rect
              x={n.x - 46}
              y={36}
              width={92}
              height={48}
              rx={24}
              fill={isModel ? accent : "rgb(255 255 255 / 0.06)"}
              stroke={isModel ? accent : "rgb(255 255 255 / 0.18)"}
            />
            <text
              x={n.x}
              y={65}
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="500"
              fontFamily="var(--font-geist-sans)"
            >
              {n.label}
            </text>
            <text
              x={n.x}
              y={112}
              textAnchor="middle"
              fill="rgb(255 255 255 / 0.5)"
              fontSize="11"
              fontFamily="var(--font-geist-mono)"
            >
              {n.sub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
