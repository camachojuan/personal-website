"use client";

import { useEffect, useState } from "react";

const items = [
  { href: "#work", label: "What I do" },
  { href: "#ai", label: "AI" },
  { href: "#experience", label: "Experience" },
  { href: "#working-together", label: "Working together" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-full bg-ink font-serif text-lg italic text-paper transition-colors group-hover:bg-accent">
            jc
          </span>
          <span className="hidden text-sm font-medium sm:inline">
            Juan Andrés Camacho
          </span>
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-ink lg:inline"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
