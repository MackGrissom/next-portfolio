import React from 'react'
import classNames from 'clsx'
import ContentRenderer from '@/components/ContentRenderer'
import Image from '@/components/Image'
import Sep from '@/components/Sep'
import BlogCardHorizontalMini from '@/components/BlogCardHorizontalMini'
import Reveal from '@/components/Reveal'
import Companies from '@/components/Companies'
import { FiThumbsUp } from 'react-icons/fi'
import Button from '@/components/Button'
import { FiFileText, FiLinkedin } from 'react-icons/fi'

const HeroPhoto = ({ main }) =>
  main.images?.[1] && (
    <div className="relative mx-auto w-full max-w-md text-center">
      <Image
        src={main.images[1].src}
        width={main.images[1].width}
        height={main.images[1].height}
        alt={main.images[1].alt}
        animation="zoom-out"
        className="mx-auto"
        priority
      />
      <Sep size={12} />
    </div>
  )

const HeroAbout = ({ main }) => (
  <>
    
  
    <Reveal
      animation="fade-in slide-in-bottom"
      className={classNames(
        'mx-auto max-w-3xl px-4 md:p-0',
        'prose prose-invert prose-headings:my-4 first-of-type:prose-headings:mt-0',
        'prose-p:mx-auto prose-p:max-w-prose md:prose-headings:my-6',
        'prose-hr:mx-auto prose-hr:max-w-md'
      )}
    >
      <ContentRenderer source={main} />
    </Reveal>
  </>
)

const Achievements = ({ achievements }) => (
  <>
    <div
      className={classNames(
        'p-10 text-center md:p-6',
        'ld:grid-cols-4 prose prose-invert grid grid-cols-2 lg:grid-cols-4',
        'bg-gradient-to-tr from-alpha-100 via-alpha to-beta',
        'divide-omega-700/30 lg:divide-x'
      )}
    >
      {achievements?.map((item, i) => (
        <Reveal key={i} animation="fade-in" delay={i * 150} className="flex-1 p-2">
          <h3 className="m-0 text-omega-900">{item.number}</h3>
          <p className="mt-2 mb-0 font-bold text-omega-700">{item.text}</p>
        </Reveal>
      ))}
    </div>
  </>
)

const Articles = ({ articles }) => (
  <>
    <div className="prose prose-invert text-center">
      <ContentRenderer source={articles?.content} />
    </div>
    <div className="mt-8 grid gap-6 md:mt-14 md:gap-4 lg:grid-cols-2">
      {articles?.collection?.records?.map((record) => (
        <BlogCardHorizontalMini key={record.slug.join('/')} {...record} />
      ))}
    </div>
  </>
)

const Layout = ({ main = {}, articles = {}, cta = {}, achievements = [], companies }) => (
  <div className="mx-auto my-auto">
    <div className="items-center py-10 md:p-10 lg:p-20">
      <div className="text-center">
        <HeroPhoto main={main} />
        <HeroAbout main={main} />
        
        <div className="flex gap-5 justify-center mt-6 mb-10">
          <a href="/resume/Mack_grissom_Resume.pdf" className="px-5 py-2.5 text-sm font-medium inline-flex items-center gap-2 bg-gradient-to-r from-alpha-400 to-alpha-600 text-white rounded transition-all hover:from-alpha-500 hover:to-alpha-700 hover:scale-105" target="_blank" rel="noopener noreferrer">
            <FiFileText className="w-4 h-4" />
            Resume
          </a>
          <a href="https://www.linkedin.com/in/mackgrissom/" className="px-5 py-2.5 text-sm font-medium inline-flex items-center gap-2 bg-[#0077B5] text-white rounded transition-all hover:bg-[#005885] hover:scale-105" target="_blank" rel="noopener noreferrer">
            <FiLinkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
        
        <Sep size={12} />
        <div className="prose prose-invert">
          <ContentRenderer source={cta} />
        </div>
        <Sep className="my-8 my-16" />
        <Achievements achievements={achievements} />
      </div>
      <Sep size={24} />
      <Articles articles={articles} />
      <div className="hidden md:block">
        <Sep size={24} />
        <Companies {...companies} />
      </div>
    </div>
  </div>
)

export default Layout
