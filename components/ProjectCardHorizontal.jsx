import React from 'react'
import Link from 'next/link'
import classNames from 'clsx'
import Image from '@/components/Image'
import Icon from '@/components/Icon'
import Tag from '@/components/Tag'
import Button from './Button'
import { MDXRemote } from 'next-remote-mdx'
import Sep from './Sep'

const ProjectCardHorizontal = ({
  title,
  logo,
  images,
  slug,
  tags,
  description,
  attributes,
  index,
  link,
  github,
  date,
  content,
  image,
}) => (
  <div className='mb-10'> 
  <div className="group">
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <div
          className="dark:bg-gradient-omega-900 prose prose-zinc bg-white shadow-[#6366F1] dark:prose-invert dark:md:shadow-lg"
          style={{ boxShadow: '5px 5px 30px rgba(99, 102, 241, 0.2)' }}
        >
          <div className="p-6 md:p-10">
            <div className="flex items-center justify-between">
              <div className="mb-4">
                <div className="flex items-center">
                  <div className="mr-2 text-sm text-omega-500">
                    {date && <time dateTime={date}>{date}</time>}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <h4 className="dark:group-hover:text-alpha mt-6 transition-colors group-hover:text-accent">
                    {title}
                  </h4>
                </div>
              </div>
              <Button href={link} className="mx-5 h-[20%] w-[20%]">
                {' '}
                Site
              </Button>
              <Button href={github} className="mx-20 mt-5 h-[20%] w-[20%]">
                Github{' '}
              </Button>
            </div>

            <div className="mt-4">
              <div className="prose-sm prose-zinc dark:prose-invert">
                <MDXRemote
                  {...content}
                  components={{
                    // Override default components
                    img: () => null,
                  }}
                />
              </div>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {description &&
                  description.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full bg-omega-100 px-2 py-1 text-xs dark:bg-omega-800"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full md:mt-0 md:w-1/2">
        <Link href={`/projects/${slug}`}>
          <div className="relative aspect-video overflow-hidden rounded-lg md:ml-6">
            {image?.src && (
              <Image
                src={image.src}
                alt={image.alt || title}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>
        </Link>
      </div>
    </div>
  </div>
  </div>
)

export default ProjectCardHorizontal
