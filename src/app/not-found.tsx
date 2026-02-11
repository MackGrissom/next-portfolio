import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-text-tertiary">
        404
      </p>
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
