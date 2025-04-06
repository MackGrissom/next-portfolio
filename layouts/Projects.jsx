import ProjectCardHorizontal from '@/components/ProjectCardHorizontal'
import RepositoryCard from '@/components/RepositoryCard'
import ContentRenderer from '@/components/ContentRenderer'
import Reveal from '@/components/Reveal'
import TipJar from '@/components/TipJar'
import Link from 'next/link'

const Layout = ({ projects, github }) => {
  return (
    <div className="mx-auto max-w-7xl pt-0 md:p-6 lg:p-12">
      <div className="prose prose-zinc mx-auto dark:prose-invert">
        <h1 className="text-alpha">Projects</h1>
        <h2 className="text-beta">My Recent Work</h2>
        
        <p className="mb-6 text-sm italic">
          <strong>Note:</strong> Many of my client projects are covered under Non-Disclosure
          Agreements (NDAs) and cannot be publicly displayed. The projects showcased here represent
          a small portion of my work that is available for public viewing. If you'd like to discuss
          my experience with specific technologies or project types in more detail, please{' '}
          <Link href="/contact">contact me</Link>.
        </p>
        
        <ContentRenderer source={github} />
        <div className="mt-4 grid grid-cols-fluid gap-4 [--tw-fluid-col-min:15rem] md:mt-12 md:gap-6">
          {github?.repositories?.records?.map((item, i) => (
            <Reveal animation="fade-in slide-in-top" delay={i * 100} key={item.name}>
              <RepositoryCard {...item} />
            </Reveal>
          ))}
        </div>

        <ContentRenderer source={projects} />
        <div className="mt-4 grid gap-4 md:mt-12 md:gap-6">
          {projects?.collection?.records?.map((item, i) => (
            <ProjectCardHorizontal key={item.slug} index={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Layout
