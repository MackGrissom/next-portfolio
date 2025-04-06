import ProjectCardHorizontal from '@/components/ProjectCardHorizontal'
import RepositoryCard from '@/components/RepositoryCard'
import ContentRenderer from '@/components/ContentRenderer'
import Reveal from '@/components/Reveal'
import TipJar from '@/components/TipJar'

const Layout = ({ projects, github }) => {
  return (
    <div className="mx-auto p-3 md:p-6 lg:p-12 pt-0"> 
      <div className="prose prose-headings:mb-4 dark:prose-invert">
        <h1 className='text-alpha'> Recent Projects </h1>
        <p className='text-beta'>A few projects that I'm excited to share with you. </p>
        
        {/* NDA Note */}
        <p className='text-sm italic mb-6'>
          <strong>Note:</strong> Many of my professional projects are under Non-Disclosure Agreements (NDAs) and cannot be publicly displayed. 
          The projects showcased here represent a small portion of my work that is available for public viewing. 
          If you'd like to discuss my experience with specific technologies or project types in more detail, please <a href="/contact">contact me</a>.
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
