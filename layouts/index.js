import dynamic from 'next/dynamic'

const layouts = {
  About: dynamic(() => import(`@/layouts/About`)),
  Contact: dynamic(() => import(`@/layouts/Contact`)),
  Services: dynamic(() => import(`@/layouts/Services`)),
  'Home-4': dynamic(() => import(`@/layouts/Home-4`)),
  Post: dynamic(() => import(`@/layouts/Post`)),
  Projects: dynamic(() => import(`@/layouts/Projects`)),
  Fallback: dynamic(() => import(`@/layouts/Fallback`)),
  Blog: dynamic(() => import(`@/layouts/Blog`)),
}

export default layouts
