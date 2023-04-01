//  icons
import {
    FiInstagram,
    FiGithub,
    FiLayout,
    FiSettings,
    FiMail,
    FiMapPin,
    FiLinkedin,
    FiUser,
    FiSmile,
  } from 'react-icons/fi';
  
  // companies icons
  import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
  import UpworkBrandIcon from './assets/img/brands/upwork.png';
  import FiverBrandIcon from './assets/img/brands/fiverr.png';
  import BehanceBrandIcon from './assets/img/brands/behance.png';
  import DribbbleBrandIcon from './assets/img/brands/dribbble.png';
  
  // projects images
  import Project1 from './assets/img/projects/p1.webp';
  import Project2 from './assets/img/projects/p2.webp';
  import Project3 from './assets/img/projects/p3.webp';
  import Project4 from './assets/img/projects/p4.webp';
  import Project5 from './assets/img/projects/p5.webp';
  import Project6 from './assets/img/projects/p6.webp';
  import Project7 from './assets/img/projects/p7.webp';
  import Project8 from './assets/img/projects/p8.webp';
  import Project9 from './assets/img/projects/p9.webp';
  import Project10 from './assets/img/projects/p10.webp'
  import Project11 from './assets/img/projects/p11.webp'
  import Project12 from './assets/img/projects/p12.webp'
  import Project13 from './assets/img/projects/p13.webp'
  // skills images
  import SkillImg1 from './assets/img/skills/html5.png';
  import SkillImg2 from './assets/img/skills/css3.png';
  import SkillImg3 from './assets/img/skills/js.png';
  import SkillImg4 from './assets/img/skills/reactjs.png';
  import SkillImg5 from './assets/img/skills/nodejs.png';
  import SkillImg6 from './assets/img/skills/git.png';
  import SkillImg7 from './assets/img/skills/figma.png';
  import SkillImg8 from './assets/img/skills/ruby.png';
  import SkillImg9 from './assets/img/skills/rails.png';
  import SkillImg10 from './assets/img/skills/redux.png';
  import SkillImg11 from './assets/img/skills/Tailwind.png';
  
  // testimonial images
  import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
  import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
  import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';
  
  // navigation
  export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'portfolio',
      href: 'portfolio',
    },
    {
      name: 'services',
      href: 'services',
    },
    {
      name: 'testimonials',
      href: 'testimonials',
    },
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
  // social
  export const social = [
    {
      icon: <FiGithub />,
      href: 'https://github.com/MackGrissom',
    },
    {
      icon: <FiLinkedin />,
      href: 'https://www.linkedin.com/in/mackgrissom/',
    },
    {
      icon: <FiInstagram />,
      href: 'https://www.instagram.com/mackgrissom/',
    },
  ];
  
  // companies
  export const brands = [
    {
      img: FreelancerBrandIcon,
      href: '',
    },
    {
      img: UpworkBrandIcon,
      href: '',
    },
    {
      img: FiverBrandIcon,
      href: '',
    },
    {
      img: BehanceBrandIcon,
      href: '',
    },
    {
      img: DribbbleBrandIcon,
      href: '',
    },
  ];
  
  // projects
  export const projectsData = [
    {
      id: '1',
      image: Project4,
      name: 'Full Circle Web Design',
      category: 'React.js',
      description: 'Web design agency landing page- currently operating and available to provide services. Optimized for all devices',
      link: 'https://www.fullcircledesign.io/',
      technologies: "React, Tailwind.CSS, Node.js"
      
    },
    // {
    //   id: '5',
    //   image: Project5,
    //   name: 'JamSesh',
    //   category: 'API',
    //   description: "A Spotify Clone utilizing two APIs to pull top music by genre and by location. Note: Adblockers or Brave browser must be turned off to use location API. ",
    //   link: "https://superlative-dolphin-935b01.netlify.app/",
    //   technologies: "React.js, Next.js, Typescript, Tailwind.CSS, Node.js",
    //   Note: ''
    
    // },
    {
      id: '9',
      image: Project9,
      name: 'Coding Chat Bot - GPT3',
      category: 'JavaScript',
      description: 'A GPT-3 chatbot using OpenAI API that can write code and explain coding concepts to you! (Currently Under Maintenance)',
      technologies: "Javascript",
      link: 'https://open-ai-codex-gilt.vercel.app/',
      note:''
    },
    {
      id: '11',
      image: Project11,
      name: 'Empower Advocacy',
      category: 'React',
      description: "Built using vite, React and Tailwind CSS. Landing page for a Special Education Consultant, based in Georgia, USA.",
      link: "https://empoweradvocacy.netlify.app/",
      technologies: "React.js, Figma, Tailwind",
      note: ''
      
    },
    {
      id: '10',
      image: Project10,
      name: 'Precision Stoneworks',
      category: 'React',
      description: "Built using vite, React and Tailwind CSS. Landing page for a stone fabricator located in North Georgia, USA.",
      link: "https://precisionstoneworks.netlify.app/",
      technologies: "React.js, Figma, Tailwind",
      note: ''
      
    },
    {
      id: '12',
      image: Project12,
      name: 'Weightless',
      category: 'React',
      description: "Built using vite, React and Tailwind CSS. Mockup Landing page for digital nomad job board.",
      link: "https://weightless-frontend.netlify.app/",
      technologies: "React.js, Figma, Tailwind",
      note: ''
      
    },
    {
      id: '8',
      image: Project8,
      name: 'ThreeJS Interactive 3d Sphere',
      category: 'ThreeJS',
      description: 'An interactive sphere built using Threejs and GSAP ',
      technologies: "ThreeJS",
      link: 'https://cozy-maamoul-17e39f.netlify.app/',
      note:''
    },
    {
      id: '13',
      image: Project13,
      name: 'Weather App',
      category: 'Javascript',
      description: 'Weather App utilizing openweathermap.org API ',
      technologies: "JavaScript",
      link: 'https://weattherapp.netlify.app/',
      note:''
    },
    {
      id: '6',
      image: Project6,
      name: 'Redux Counter App',
      category: 'Redux',
      description: 'A simple counter app using Redux to manage the state and return updated state.',
      link:'https://peppy-alpaca-c01da6.netlify.app/',
      technologies: "React.js, CSS, Redux",
      
      note:''
    },
    {
      id: '7',
      image: Project7,
      name: 'Redux Toolkit Shopping Cart',
      category: 'Redux',
      description: 'A fully functional shopping cart built using react & redux toolkit. The shopping cart uses an API call to display items and their details.',
      link:'https://prismatic-fenglisu-9a68d5.netlify.app/',
      technologies: "React.js, CSS, Redux",
      
      note:''
    },
    {
      id: '2',
      image: Project1,
      name: 'Renbo.io',
      category: 'Rails',
      description: "Renbo is a full stack Blockchain ticketing platform that utilizes NFT ticketing. Built on Ruby on Rails. User / Admin login capabilities using devise. Payment capabilities using Stripe. PostgreSQL database currently down.  ",
      link: "https://renbo-redeploy.herokuapp.com/",
      technologies: "Ruby, Ruby on Rails, PostgreSQL",
      note: ''
      
    },
    
    {
      id: '3',
      image: Project2,
      name: 'Snatch',
      category: 'Rails',
      description: "A full stack motorbike marketplace that allows users to rent based on their location. This was built using Ruby on Rails, SCSS and PostgreSQL. Authentication using devise, with admin and user views. ",
      link: "https://snatch-app.herokuapp.com/",
      technologies: "Ruby, Rails, PostgreSQL, Figma",
      note:''
    },
    // {
    //   id: '4',
    //   image: Project3,
    //   name: 'Modern UI/UX Landing Page',
    //   category: 'React.js',
    //   description: "A static modern UI-UX landing page for GPT-3 Artifical Intelligence, built in React.  Based off of a Figma design. Easily repurposed for any product/service. ",
    //   link: "https://modern-user-interface.herokuapp.com/",
    //   technologies: "React.js, Scss, Figma",
    //   note:''
      
      
    // },
    
  ];
  
  // projects
  export const projectsNav = [
    {
      name: 'All',
    },
    {
      name: 'React.js',
    },  
    {
      name: 'Rails',
    },  
    {
      name: 'API',
    },  
    {
      name: 'Redux',
    },  
    {
      name: 'ThreeJS',
    },  
    {
      name: 'Tailwind',
    },  
    
  ];
  
  // skill
  export const skills = [
    {
      image: SkillImg1,
    },
    {
      image: SkillImg2,
    },
    {
      image: SkillImg3,
    },
    {
      image: SkillImg4,
    },
    {
      image: SkillImg5,
    },
    {
      image: SkillImg6,
    },
    {
      image: SkillImg7,
    },
    {
      image: SkillImg8,
    },
    {
      image: SkillImg9,
    },
    {
      image: SkillImg10,
    },
    {
      image: SkillImg11,
    }
  ];
  
  // services
  export const services = [
    {
      icon: <FiLayout />,
      name: 'Web Design',
      image: '',
      description:
      'I will provide you with a custom website design that is perfect for your business or personal site. We will work together to find the perfect style for you while maintaining modern design principles and making your website a delight to use for your end user.',
    },
    {
      icon: <FiSettings />,
      name: 'Web Development',
      image: '',
      description:
      'Whether you already have a design in mind , or we just built one together now is the time to make it real. This is where the real leg-work begins and your idea becomes a reality for the whole world to see.',
    },
    // {
    //   icon: <FiUser />,
    //   name: 'User Research',
    //   image: '',
    //   description:
    //     'Having and idea is one thing, building it is another, but building it correctly and determining if users even want it and how they would want it is vastly more important. I will provide you with answers to challenging and unexplored questions surrounding your products design. Lets get the conversation with your users started.',
    // },
    // {
    //   icon: <FiSmile />,
    //   name: 'Design Sprint',
    //   image: '',
    //   description:
    //     'I will lead you and your team through a intensive 5 day design sprint. If you are unfamiliar a design sprint is a time-constrained, five-phase process that uses design thinking with the aim of reducing the risk when bringing a new product, service or a feature to the market. This is vital for any new product or service - here is a look into the 5 stages of a design sprint: Empathize, Define, Ideate, Prototype, and Test. If you are ready, lets start sprinting!   ',
    // },
  ];
  // testimonials
  export const testimonials = [
    {
      authorImg: TestiImage1,
      authorText:
      'I worked with Mack as project manager during the development of his web app Renbo. Mack impressed me by his detail oriented attitude towards his front-end features from the from the prototyping to the deployment in production. I can also state with confidence that he has been a balancing element in the dev team as per his strong interpersonal skills, an important skill that I look for in the fast paced environment of building an MVP. I can recommend 100% Mack for a full-stack developer or front-end role.',
      authorName: 'Daniel Rodriguez',
      authorPosition: 'Project Manager',
    },
    {
      authorImg: TestiImage2,
      authorText:
      'Mack is an excellent leader. He is incredibly aware of his skills and the people that surround him. He is definitely a great team player, especially under high pressure, and it was always rewarding to work with him. He has helped me grow as a professional and as an individual. I am looking forward to working with you again Mack!',
      authorName: 'Jorge Eduardo Quiroz Villa',
      authorPosition: 'Founder of Digital Marketing & Sales Agency - Medical Industry',
    },
  ];
  
  // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Have a question?',
      subtitle: 'Ask me anything!',
      description: 'Email me at mack@mackgrissom.io',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      subtitle: 'Remote',
      description: 'Serving clients worldwide',
    },
  ];
  