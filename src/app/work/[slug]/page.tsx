import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProjects, getProjectBySlug } from "@/lib/projects";
import { renderMDX } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/animation/page-transition";
import { FadeIn } from "@/components/animation/fade-in";
import { AsciiBlogHeader } from "@/components/ascii-blog-header";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getProjectBySlug(slug);
  if (!result) return {};

  const url = `https://www.mackgrissom.io/work/${slug}`;

  return {
    title: `${result.meta.title} | Mack Grissom`,
    description: result.meta.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${result.meta.title} | Mack Grissom`,
      description: result.meta.description,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: result.meta.title,
      description: result.meta.description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const result = getProjectBySlug(slug);
  if (!result) notFound();

  const { meta, content } = result;
  const { content: mdxContent } = await renderMDX(content);

  const allProjects = getProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <PageTransition>
      <article className="px-6 pt-32 pb-16 md:pt-40">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <FadeIn>
            <Link
              href="/#work"
              className="mb-8 inline-flex items-center gap-2 text-sm text-text-tertiary transition-colors hover:text-text-primary"
            >
              <ArrowLeft size={16} />
              Back to work
            </Link>
          </FadeIn>

          {/* ASCII decorative header */}
          <FadeIn delay={0.05}>
            <div className="mb-6 overflow-hidden">
              <AsciiBlogHeader />
            </div>
          </FadeIn>

          {/* Header */}
          <FadeIn delay={0.1}>
            <header className="mb-12">
              <h1 className="mb-4 text-2xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                {meta.title}
              </h1>
              <p className="mb-6 text-lg text-text-secondary">
                {meta.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {meta.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              {/* Meta grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-3">
                {meta.role && (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
                      Role
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">
                      {meta.role}
                    </p>
                  </div>
                )}
                {meta.duration && (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
                      Duration
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">
                      {meta.duration}
                    </p>
                  </div>
                )}
                {meta.date && (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
                      Year
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">
                      {new Date(meta.date).getFullYear()}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 flex items-center gap-4">
                {meta.link && (
                  <Button href={meta.link} variant="outline" size="sm" external>
                    Visit Live Site
                    <ExternalLink size={14} className="ml-2" />
                  </Button>
                )}
                <span className="flex items-center gap-2 text-xs text-text-tertiary">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Full details available upon request
                </span>
              </div>
            </header>
          </FadeIn>

          {/* Project image placeholder */}
          {meta.image && (
            <FadeIn delay={0.2}>
              <div className="mb-12 aspect-video overflow-hidden rounded-2xl bg-surface">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${meta.image})` }}
                />
              </div>
            </FadeIn>
          )}

          {/* MDX Content */}
          <FadeIn delay={0.25}>
            <div>{mdxContent}</div>
          </FadeIn>

          {/* Prev/Next navigation */}
          <div className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
            {prevProject ? (
              <Link
                href={`/work/${prevProject.slug}`}
                className="group rounded-xl border border-border p-4 transition-colors hover:border-border-hover hover:bg-white/[0.02]"
              >
                <p className="text-xs text-text-tertiary">Previous</p>
                <p className="mt-1 text-sm font-medium group-hover:text-accent transition-colors">
                  {prevProject.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextProject && (
              <Link
                href={`/work/${nextProject.slug}`}
                className="group rounded-xl border border-border p-4 text-right transition-colors hover:border-border-hover hover:bg-white/[0.02]"
              >
                <p className="text-xs text-text-tertiary">Next</p>
                <p className="mt-1 text-sm font-medium group-hover:text-accent transition-colors">
                  {nextProject.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
