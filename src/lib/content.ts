export const links = {
  linkedin: "https://www.linkedin.com/in/juanandrescamacho/",};

export type Job = {
  company: string;
  role: string;
  period: string;
  url?: string;
  summary: string;
  logo?: { src: string; width: number; height: number; invert?: boolean; square?: boolean };
};

export const jobs: Job[] = [
  {
    company: "Piton Labs",
    url: "https://pitonlabs.com",
    role: "Senior Full-Stack Engineer",
    period: "2021 — Now",
    summary:
      "Technical partner for founders going from idea to launch. I architect and build products end to end — fintech, payments and data platforms, and more and more of them with AI at the core.",
    logo: { src: "/logos/piton-labs.svg", width: 1000, height: 375 },
  },
  {
    company: "G2i",
    url: "https://www.g2i.co",
    role: "Senior Web Developer",
    period: "2018 — 2021",
    summary:
      "Senior React and Node.js engineer embedded with US product teams through G2i's vetted engineering network.",
    logo: { src: "/logos/g2i-mark.svg", width: 354, height: 354, square: true },
  },
  {
    company: "CodigoDelSur",
    url: "https://www.codigodelsur.com",
    role: "Senior Web Developer",
    period: "2016 — 2018",
    summary:
      "Web and mobile apps for startups across the US and Europe, from first commit to the App Store.",
    logo: { src: "/logos/codigodelsur.png", width: 900, height: 229, invert: true },
  },
  {
    company: "Globant",
    url: "https://www.globant.com",
    role: "Software Developer",
    period: "2013 — 2016",
    summary:
      "Enterprise web applications for global brands, including media-planning tools for Mindshare.",
    logo: { src: "/logos/globant.svg", width: 142, height: 28 },
  },
  {
    company: "inMind IT Solutions",
    role: "Developer → Project Manager",
    period: "2008 — 2012",
    summary:
      "Started as a developer, grew into leading small teams, client analysis and Scrum delivery.",
  },
];
