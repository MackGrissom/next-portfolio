import { MDXRemote } from 'next-remote-mdx'
import Link from 'next/link'
import ProjectCardHorizontal from '../components/ProjectCardHorizontal'
import Sep from '../components/Sep'
import { getCollectionItems } from '../utils/mdx'

export default function Projects({ projects, source, frontMatter }) {
  return (
    <div className="mx-auto max-w-7xl pt-0 md:p-6 lg:p-12">
      <div className="prose prose-zinc mx-auto dark:prose-invert">
        <h1 className="text-alpha">Projects</h1>
        <h2 className="text-beta">My Recent Work</h2>
        
        <p className="mb-6 text-sm italic">
          Note: Many of my client projects are covered under Non-Disclosure
          Agreements (NDAs) and cannot be publicly displayed. The projects showcased here represent
          a small portion of my work that is available for public viewing. If you'd like to discuss
          my experience with specific technologies or project types in more detail, please{' '}
          <Link href="/contact">contact me</Link>.
        </p>
        
        <MDXRemote {...source} components={{}} />
      </div>

      <Sep line className="my-8 md:my-16" />

      <div className="grid grid-cols-1 gap-12 md:gap-16">
        {projects.map((project) => (
          <ProjectCardHorizontal key={project.slug} {...project} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const projects = await getCollectionItems('projects')
  return {
    props: {
      projects,
    },
  }
}
