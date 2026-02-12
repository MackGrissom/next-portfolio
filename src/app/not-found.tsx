"use client";

import { Button } from "@/components/ui/button";
import { AsciiPlasma } from "@/components/ascii-plasma";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 md:px-6">
      <div className="relative mb-10 flex items-center justify-center">
        <div className="absolute hidden opacity-50 md:block">
          <AsciiPlasma color="#c8ff00" size={12} width={45} height={18} />
        </div>
        <h1 className="relative z-10 text-[4rem] font-bold leading-none tracking-tighter text-text-primary md:text-[8rem] lg:text-[12rem]">
          404
        </h1>
      </div>
      <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-text-tertiary">
        Page not found
      </p>
      <p className="mb-8 text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Button href="/">Back to Home</Button>
    </div>
  );
}
