import type { SiteConfig, Testimonial } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Mack Grissom",
  title: "Mack Grissom | AI Consultant & Software Engineer",
  description:
    "Professional web developer specializing in Next.js, React, and modern web applications. Creating high-performance websites and AI solutions for businesses worldwide.",
  url: "https://www.mackgrissom.io",
  email: "mack@mackgrissom.io",
  socials: [
    { platform: "GitHub", url: "https://github.com/MackGrissom" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/mackgrissom/" },
    { platform: "Instagram", url: "https://www.instagram.com/mackgrissom/" },
  ],
  navigation: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "#contact" },
  ],
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mack delivered a platform that completely transformed how we operate. His ability to understand complex requirements and translate them into elegant solutions is rare.",
    name: "Satisfied Client",
    position: "CEO, Tech Startup",
  },
  {
    quote:
      "The website Mack built perfectly captures our brand identity. The custom CMS integration has made our content workflow seamless and empowered our entire team.",
    name: "Happy Client",
    position: "Founder, Creative Agency",
  },
  {
    quote:
      "I worked with Mack as project manager during the development of his web app Renbo. Mack impressed me by his detail oriented attitude towards his front-end features from prototyping to deployment in production.",
    name: "Daniel Rodriguez",
    position: "Project Manager",
  },
  {
    quote:
      "Mack is an excellent leader. He is incredibly aware of his skills and the people that surround him. He is definitely a great team player, especially under high pressure.",
    name: "Jorge Eduardo Quiroz Villa",
    position: "Founder",
    company: "Digital Marketing & Sales Agency",
  },
  {
    quote:
      "Our traffic and conversions increased significantly after the redesign. Mack's focus on performance and user experience made all the difference for our business.",
    name: "Repeat Client",
    position: "Marketing Director",
  },
];

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "40+", label: "Clients Served" },
  { value: "100%", label: "Satisfaction" },
];
