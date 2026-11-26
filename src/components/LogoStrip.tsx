import Image from "next/image";
import { jobs } from "@/lib/content";

export function LogoStrip() {
  const withLogos = jobs.filter((job) => job.logo);
  return (
    <section className="border-y border-line bg-paper-2/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-10 md:flex-row md:justify-between">
        <p className="shrink-0 font-mono text-xs tracking-wider text-muted uppercase">
          Where I&apos;ve built things
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {withLogos.map((job) => (
            <li key={job.company}>
              <a href={job.url} target="_blank" rel="noreferrer" aria-label={job.company}>
                <Image
                  src={job.logo!.src}
                  alt={job.company}
                  width={job.logo!.width}
                  height={job.logo!.height}
                  className={`w-auto opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 ${
                    job.logo!.square ? "h-10" : "h-7"
                  } ${job.logo!.invert ? "invert" : ""}`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
