import ProjectCardHorizontal from '@/components/ProjectCardHorizontal'
import RepositoryCard from '@/components/RepositoryCard'
import ContentRenderer from '@/components/ContentRenderer'
import Reveal from '@/components/Reveal'
import TipJar from '@/components/TipJar'
import Link from 'next/link'

const Layout = ({ projects, github }) => {
  return (
    <div className="mx-auto max-w-7xl pt-0 md:p-6 lg:p-8">
      <div className="prose prose-zinc mx-auto dark:prose-invert">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
          <div>
            <h1 className="text-alpha mb-1">Projects</h1>
            <h2 className="text-beta mt-0 mb-4">My Recent Work</h2>
          </div>
          
          <div className="text-sm italic max-w-md mb-4">
            <strong>Note:</strong> Some client projects are covered by NDAs and cannot be displayed.
            <Link href="/contact" className="ml-1 text-accent hover:underline">
              Contact me
            </Link> for details on specific technologies.
          </div>
        </div>
        
        <ContentRenderer source={projects} />
        <div className="mt-2 grid gap-4 md:mt-6 md:gap-6">
          {projects?.collection?.records?.map((item, i) => (
            <ProjectCardHorizontal key={item.slug} index={i} {...item} />
          ))}
        </div>

        <ContentRenderer source={github} />
        <div className="mt-2 grid grid-cols-fluid gap-4 [--tw-fluid-col-min:15rem] md:mt-6 md:gap-6">
          {github?.repositories?.records?.map((item, i) => (
            <Reveal animation="fade-in slide-in-top" delay={i * 100} key={item.name}>
              <RepositoryCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Layout
