import { Roboto } from '@next/font/google'

const sans = Roboto({
  weight: ['400', '700'],
  variable: '--font-sans',
  display: 'swap',
  subsets: ['latin']
})

const variables = [sans.variable]

export default variables