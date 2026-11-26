import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const description =
  "Senior full-stack engineer with 18 years of experience. I build web products and AI-powered features for startups and global teams, working US Eastern Time.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.juanandrescamacho.com"),
  title: "Juan Andrés Camacho — Full-stack & AI Product Engineer",
  description,
  openGraph: {
    title: "Juan Andrés Camacho",
    description,
    url: "https://www.juanandrescamacho.com",
    siteName: "Juan Andrés Camacho",
    images: [{ url: "/images/juan.png", width: 250, height: 250 }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Juan Andrés Camacho",
    description,
    images: ["/images/juan.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
