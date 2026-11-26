import Image from "next/image";
import { GraduationCap, Languages } from "lucide-react";
import { jobs } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line bg-paper-2/40">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[1fr_1.6fr] md:py-32">
        <Reveal>
          <div className="md:sticky md:top-28">
            <p className="font-mono text-xs tracking-wider text-accent uppercase">Experience</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              18 years, <span className="font-serif font-normal italic">still curious.</span>
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-muted">
              From enterprise teams at Globant to founding-stage startups, I&apos;ve worked
              across the whole stack and every stage of a product&apos;s life.
            </p>

            <dl className="mt-10 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 size-4 shrink-0 text-muted" />
                <div>
                  <dt className="font-medium">Systems Engineer</dt>
                  <dd className="text-muted">Universidad ORT</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Languages className="mt-0.5 size-4 shrink-0 text-muted" />
                <div>
                  <dt className="font-medium">English & Spanish</dt>
                  <dd className="text-muted">Cambridge Certificate of Proficiency in English</dd>
                </div>
              </div>
            </dl>
          </div>
        </Reveal>

        <ol className="relative space-y-4">
          {jobs.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05}>
              <li className="group grid gap-4 rounded-3xl border border-line bg-paper p-6 transition duration-300 hover:border-ink/20 sm:grid-cols-[120px_1fr] sm:p-7">
                <div className="flex h-10 items-center sm:h-auto sm:items-start">
                  {job.logo ? (
                    <Image
                      src={job.logo.src}
                      alt={job.company}
                      width={job.logo.width}
                      height={job.logo.height}
                      className={`w-auto max-w-[110px] object-contain object-left ${
                        job.logo.square ? "h-10" : "h-7"
                      } ${job.logo.invert ? "invert" : ""}`}
                    />
                  ) : (
                    <span className="font-serif text-xl italic">{job.company.split(" ")[0]}</span>
                  )}
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {job.role}{" "}
                      <span className="font-normal text-muted">
                        ·{" "}
                        {job.url ? (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noreferrer"
                            className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                          >
                            {job.company}
                          </a>
                        ) : (
                          job.company
                        )}
                      </span>
                    </h3>
                    <span className="font-mono text-xs text-muted">{job.period}</span>
                  </div>
                  <p className="mt-2 leading-relaxed text-muted">{job.summary}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
