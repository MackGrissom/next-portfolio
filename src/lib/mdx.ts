import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/mdx-components";

export async function renderMDX<T extends Record<string, unknown>>(source: string) {
  const { content, frontmatter } = await compileMDX<T>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
    },
  });
  return { content, frontmatter };
}
