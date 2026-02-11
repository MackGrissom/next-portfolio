import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { getBlogPosts } from "@/lib/blog";
import { FadeIn } from "@/components/animation/fade-in";
import { PageTransition } from "@/components/animation/page-transition";

export const metadata: Metadata = {
  title: "Blog | Mack Grissom",
  description:
    "Thoughts on AI, web development, and building modern software products.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <PageTransition>
      <div className="px-6 pt-32 pb-16 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h1 className="mb-4 text-2xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Blog
            </h1>
            <p className="mb-12 text-base text-text-secondary md:text-lg">
              Thoughts on AI, web development, and building modern software.
            </p>
          </FadeIn>

          <div className="space-y-1">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-start justify-between gap-4 rounded-xl px-4 py-5 transition-colors hover:bg-white/[0.03]"
                >
                  <div className="min-w-0">
                    <h2 className="text-base font-semibold tracking-tight group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-1 text-sm text-text-secondary line-clamp-1">
                      {post.description}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-xs text-text-tertiary">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      {post.readingTime && (
                        <span className="text-xs text-text-tertiary">
                          {post.readingTime}
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-text-tertiary transition-all group-hover:text-text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
