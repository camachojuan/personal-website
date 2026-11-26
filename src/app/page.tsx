import { AISection } from "@/components/AISection";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
import { Stack } from "@/components/Stack";
import { WorkingTogether } from "@/components/WorkingTogether";
import { links } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <AISection />
        <Stack />
        <Experience />
        <WorkingTogether />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
          <p>© Juan Andrés Camacho</p>
          <div className="flex gap-6">
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
