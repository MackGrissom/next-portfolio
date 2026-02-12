"use client";

import { Button } from "@/components/ui/button";
import { AsciiGlitch } from "@/components/ascii-plasma";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="mb-8">
        <AsciiGlitch text="404  —  NOT  FOUND" color="#c8ff00" size={13} width={40} />
      </div>
      <h1 className="mb-4 text-4xl font-bold tracking-tighter md:text-5xl">
        Page not found
      </h1>
      <p className="mb-8 text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Button href="/">Back to Home</Button>
    </div>
  );
}
