/**
 * Icons from react-icons: https://react-icons.github.io/react-icons
 */

import { IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import { TfiGithub, TfiHome, TfiPencilAlt } from 'react-icons/tfi'

import { SlUser, SlBriefcase, SlEnvolope, SlTrophy } from 'react-icons/sl'

/**
 * Main Menu Items
 */

export const menu = [
  {
    name: 'Home',
    slug: '/',
    Icon: TfiHome,
  },
  {
    name: 'About',
    slug: '/about',
    Icon: SlUser,
  },
  {
    name: 'Services',
    slug: '/services',
    Icon: SlBriefcase,
  },
  {
    name: 'Articles',
    slug: '/blog',
    Icon: TfiPencilAlt,
  },
  {
    name: 'Projects',
    slug: '/projects',
    Icon: SlTrophy,
  },
  {
    name: 'Contact',
    slug: '/contact',
    Icon: SlEnvolope,
  },
]

/**
 * Social Links under the Main Menu
 */

export const social = [
  {
    name: 'Github',
    url: 'https://www.github.com/mackgrissom',
    Icon: TfiGithub,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/mackgrissom',
    Icon: IoLogoInstagram,
  },
]

/**
 * General configurations
 */

export const config = {
  dateLocale: 'en-US',
  dateOptions: {
    // dateOptions is passed to JavaScript's toLocaleDateString()
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  },
  convertKit: {
    tipUrl: 'https://mackgrissom.ck.page/products/mackgrissom',
  },
  contactForm: {
    inputs: require('./content/contact-form.json'),
    recipient: 'mack@mackgrissom.io',
    sender: 'mack@mackgrissom.io',
    subject: 'EMAIL NOTIFICATION SUBJECT',
  },
}

/**
 * MDX/Markdown configurations
 */

export const mdxConfig = {
  publicDir: 'public',
  pagesDir: 'content',
  fileExt: '.md',
  collections: ['/blog', '/projects'],
  remarkPlugins: [],
  rehypePlugins: [],
}

/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */

export const siteMetaData = {
  title: 'Mack Grissom | Full-Stack Web Developer',
  author: 'Mack Grissom',
  headerTitle: 'Mack Grissom',
  description: 'Professional web developer specializing in Next.js, React, and modern web applications. Creating high-performance websites and applications for businesses worldwide.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://www.mackgrissom.io', // Update with your actual URL
  siteLogo: '/logo.png',
  socialBanner: '/social-banner.png',
  email: 'mack@mackgrissom.io',
  github: 'https://github.com/mackgrissom',
  locale: 'en-US',
  analytics: {
    googleAnalyticsId: '', // Add your GA ID
  },
  newsletter: {
    provider: 'convertkit',
  },
}
