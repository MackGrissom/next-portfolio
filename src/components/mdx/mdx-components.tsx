import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mb-6 mt-12 text-3xl font-bold tracking-tighter first:mt-0 md:text-4xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mb-4 mt-10 text-2xl font-bold tracking-tight scroll-mt-20"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mb-3 mt-8 text-xl font-semibold tracking-tight scroll-mt-20"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-4 leading-relaxed text-text-secondary" {...props} />
  ),
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 transition-colors hover:text-text-primary"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href ?? "#"}
        className="text-accent underline underline-offset-4 transition-colors hover:text-text-primary"
        {...props}
      >
        {children}
      </Link>
    );
  },
  ul: (props) => (
    <ul
      className="mb-4 ml-4 list-disc space-y-2 text-text-secondary marker:text-text-tertiary"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mb-4 ml-4 list-decimal space-y-2 text-text-secondary marker:text-text-tertiary"
      {...props}
    />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-accent pl-4 italic text-text-secondary"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-white/10 px-1.5 py-0.5 text-sm font-mono text-text-secondary"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-xl bg-surface p-4 text-sm"
      {...props}
    />
  ),
  img: ({ src, alt, ...props }) => (
    <Image
      src={src ?? ""}
      alt={alt ?? ""}
      width={800}
      height={450}
      className="my-6 rounded-xl"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-border" />,
  strong: (props) => <strong className="font-semibold text-text-primary" {...props} />,
};
