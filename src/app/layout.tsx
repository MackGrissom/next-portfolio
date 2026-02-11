import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mack Grissom | AI Consultant & Software Engineer",
    template: "%s | Mack Grissom",
  },
  description:
    "I build premium digital experiences and AI solutions that transform businesses. Full-stack developer specializing in React, Next.js, and AI integrations.",
  metadataBase: new URL("https://www.mackgrissom.io"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "AI consultant",
    "software engineer",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "AI integration",
    "web development",
    "Mack Grissom",
    "freelance developer",
    "AI strategy",
  ],
  authors: [{ name: "Mack Grissom", url: "https://www.mackgrissom.io" }],
  creator: "Mack Grissom",
  openGraph: {
    title: "Mack Grissom | AI Consultant & Software Engineer",
    description:
      "I build premium digital experiences and AI solutions that transform businesses.",
    url: "https://www.mackgrissom.io",
    siteName: "Mack Grissom",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mack Grissom | AI Consultant & Software Engineer",
    description:
      "I build premium digital experiences and AI solutions that transform businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mack Grissom",
  url: "https://www.mackgrissom.io",
  jobTitle: "AI Consultant & Software Engineer",
  description:
    "Full-stack developer and AI consultant specializing in React, Next.js, and AI integrations. 50+ projects delivered for 40+ clients.",
  sameAs: [
    "https://github.com/MackGrissom",
    "https://www.linkedin.com/in/mackgrissom/",
    "https://www.instagram.com/mackgrissom/",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Development",
    "AI Strategy",
    "LLM Integration",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-text-primary antialiased">
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
