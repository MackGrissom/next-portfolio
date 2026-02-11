import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { renderMDX } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { PageTransition } from "@/components/animation/page-transition";
import { FadeIn } from "@/components/animation/fade-in";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getBlogPostBySlug(slug);
  if (!result) return {};

  const url = `https://www.mackgrissom.io/blog/${slug}`;

  return {
    title: result.meta.title,
    description: result.meta.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: result.meta.title,
      description: result.meta.description,
      url,
      type: "article",
      publishedTime: result.meta.date,
      authors: ["Mack Grissom"],
      tags: result.meta.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: result.meta.title,
      description: result.meta.description,
    },
  };
}

function ArticleJsonLd({ meta, slug }: { meta: { title: string; description: string; date: string; tags: string[] }; slug: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    author: {
      "@type": "Person",
      name: "Mack Grissom",
      url: "https://www.mackgrissom.io",
    },
    publisher: {
      "@type": "Person",
      name: "Mack Grissom",
      url: "https://www.mackgrissom.io",
    },
    url: `https://www.mackgrissom.io/blog/${slug}`,
    keywords: meta.tags.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const result = getBlogPostBySlug(slug);
  if (!result) notFound();

  const { meta, content } = result;
  const { content: mdxContent } = await renderMDX(content);

  return (
    <PageTransition>
      <ArticleJsonLd meta={meta} slug={slug} />
      <article className="px-6 pt-32 pb-16 md:pt-40">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <FadeIn>
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm text-text-tertiary transition-colors hover:text-text-primary"
            >
              <ArrowLeft size={16} />
              Back to blog
            </Link>
          </FadeIn>

          {/* Header */}
          <FadeIn delay={0.1}>
            <header className="mb-12">
              <h1 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                {meta.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-text-tertiary">
                <time dateTime={meta.date}>
                  {new Date(meta.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {meta.readingTime && (
                  <>
                    <span>&middot;</span>
                    <span>{meta.readingTime}</span>
                  </>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {meta.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </header>
          </FadeIn>

          {/* MDX Content */}
          <FadeIn delay={0.2}>
            <div>{mdxContent}</div>
          </FadeIn>

          {/* Back to blog */}
          <div className="mt-16 border-t border-border pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-text-tertiary transition-colors hover:text-text-primary"
            >
              <ArrowLeft size={16} />
              Back to all posts
            </Link>
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
