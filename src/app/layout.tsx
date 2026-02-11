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
  title: "Mack Grissom | AI Consultant & Software Engineer",
  description:
    "I build premium digital experiences and AI solutions that transform businesses. Full-stack developer specializing in React, Next.js, and modern web applications.",
  metadataBase: new URL("https://www.mackgrissom.io"),
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-background text-text-primary antialiased">
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
