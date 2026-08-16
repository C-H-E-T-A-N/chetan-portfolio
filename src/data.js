export const profile = {
  firstName: 'Chetan',
  lastName: 'Sharma',
  name: 'Chetan',
  fullName: 'Chetan Sharma',
  location: 'Gurugram, Haryana, India',
  email: 'chetansharma.pvt@gmail.com',
  phone: '+91-9996686450',
  phoneHref: 'tel:+919996686450',
  linkedin: 'https://linkedin.com/in/chetan-sharma-a9713a253',
  github: 'https://github.com/',
  resume: '/Chetan_Resume.pdf',
  headline: 'I do code and turn ideas into products.',
  subtitle:
    'I am a software engineer based in Gurugram, building responsive websites and mobile apps with React, Next.js, and React Native. I care about reusable components, performance, and interfaces people actually enjoy using.',
  bio: 'Software Engineer I at Adglobal360. I develop scalable web and mobile apps with React.js, React Native, Next.js, and TypeScript — and I am always up for a sharp product conversation.',
}

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const projects = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    blurb: 'Catalog, cart, checkout, and Razorpay payments',
    tools: 'React · React Query · Redux Toolkit · Tailwind · Razorpay',
    href: '#contact',
    art: 'shop',
  },
  {
    id: 'campaigns',
    title: 'Campaign Analytics',
    blurb: 'Campaign management dashboards and reporting UIs',
    tools: 'React · Next.js · TypeScript · Redux Toolkit',
    href: '#contact',
    art: 'charts',
  },
  {
    id: 'mobile',
    title: 'Cross-Platform Apps',
    blurb: 'Responsive mobile experiences with React Native',
    tools: 'React Native · Expo · TypeScript',
    href: '#contact',
    art: 'mobile',
  },
  {
    id: 'dashboards',
    title: 'Data Visualization',
    blurb: 'Dashboard modules and complex forms for analytics',
    tools: 'React · TypeScript · Tailwind CSS',
    href: '#contact',
    art: 'viz',
  },
]

export const experience = [
  {
    company: 'Adglobal360',
    role: 'Software Engineer I at Adglobal360',
    period: 'Nov 2024 – Present',
    logo: 'adg',
    description:
      'Building scalable web and mobile apps with React.js, React Native, Next.js, and TypeScript for campaign and analytics platforms. Shipping reusable UI, REST integrations, and performance work (lazy loading, code splitting, memoization).',
  },
  {
    company: 'Adglobal360',
    role: 'Software Developer Intern at Adglobal360',
    period: 'May 2024 – Nov 2024',
    logo: 'adg',
    description:
      'Developed responsive apps with React.js, Next.js, TypeScript, Tailwind CSS, and Material UI. Built dashboards, visualization modules, and complex forms in an Agile team using Git, GitHub, Postman, and Jira.',
  },
  {
    company: 'Upwork',
    role: 'Freelance Software Developer at Upwork',
    period: 'Jul 2023 – Jan 2024',
    logo: 'upwork',
    description:
      'Delivered client web apps with React.js, Next.js, and TypeScript. Implemented auth workflows, form validation, loading states, and REST API integration for production-ready UIs.',
  },
]
