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
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const projects = [
  {
    id: 'selfrate',
    title: 'SelfRate',
    blurb: 'Personal calorie tracking web app',
    tools: 'React · PWA · MongoDB Atlas · Vercel',
    href: 'https://selfrate.vercel.app',
    art: 'mobile',
  },
  {
    id: 'adspective',
    title: 'Adspective Dashboard',
    blurb: 'Campaign analytics and ads operations UI',
    tools: 'Vue.js · TypeScript · REST APIs · Vercel',
    href: 'https://adspective-dashboard.vercel.app',
    art: 'charts',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    blurb: 'Catalog, cart, checkout, and Razorpay payments',
    tools: 'React · React Query · Redux Toolkit · Tailwind · Razorpay',
    href: '#contact',
    art: 'shop',
  },
  {
    id: 'mobile',
    title: 'Cross-Platform Apps',
    blurb: 'Responsive mobile experiences with React Native',
    tools: 'React Native · Expo · TypeScript',
    href: '#contact',
    art: 'viz',
  },
]

export const experience = [
  {
    company: 'Adglobal360',
    role: 'Software Engineer I',
    place: 'Gurugram',
    period: 'Nov 2024 – Present',
    logo: 'adg',
    description:
      'Own frontend for campaign management and analytics platforms across web and React Native. Ship reusable UI, REST integrations, and performance work in Agile squads with design, QA, and backend.',
    points: [
      'Promoted from intern to Software Engineer I in 6 months.',
      'Build campaign + analytics UIs with React, Next.js, React Native, and TypeScript.',
      'Cut extra network work with React Query caching, optimistic updates, and Redux Toolkit.',
      'Improve load time with lazy loading, code splitting, memoization, and smaller bundles.',
      'Ship WCAG-minded, SEO-ready responsive interfaces used in production releases.',
    ],
    metrics: [
      { value: '6 mo', label: 'intern → SE I' },
      { value: '2', label: 'platforms (web + RN)' },
      { value: 'WCAG', label: 'accessibility focus' },
    ],
  },
  {
    company: 'Adglobal360',
    role: 'Software Developer Intern',
    place: 'Gurugram',
    period: 'May 2024 – Nov 2024',
    logo: 'adg',
    description:
      'Joined the delivery team building dashboards, visualization modules, and complex forms for internal campaign tools.',
    points: [
      'Delivered responsive screens in React, Next.js, TypeScript, Tailwind CSS, and Material UI.',
      'Handled loading, validation, and error states on REST-backed forms.',
      'Worked in Scrum with Git, GitHub, Postman, and Jira through the 6-month internship.',
    ],
    metrics: [
      { value: '6 mo', label: 'internship' },
      { value: '3+', label: 'UI surfaces shipped' },
      { value: 'Agile', label: 'release cadence' },
    ],
  },
  {
    company: 'Upwork',
    role: 'Freelance Software Developer',
    place: 'Remote',
    period: 'Jul 2023 – Jan 2024',
    logo: 'upwork',
    description:
      'Built production web apps for remote clients: auth, protected flows, and API-backed dashboards.',
    points: [
      'Shipped React / Next.js / TypeScript apps over a 7-month freelance stretch.',
      'Implemented JWT-style auth, form validation, and REST integration.',
      'Handed over reusable components and responsive layouts for ongoing use.',
    ],
    metrics: [
      { value: '7 mo', label: 'freelance' },
      { value: '100%', label: 'remote delivery' },
      { value: 'Auth + REST', label: 'core flows' },
    ],
  },
]

export const education = [
  {
    school: 'Guru Jambheshwar University of Science & Technology',
    place: 'Haryana, India',
    title: 'B.Tech in Information Technology',
    period: 'Aug 2020 – Jul 2024',
    detail: 'Core CS coursework plus frontend-focused project work through graduation.',
    metrics: [
      { value: '7.5', label: 'CGPA' },
      { value: '4 yrs', label: 'degree' },
    ],
  },
  {
    school: 'Senior Secondary (CBSE)',
    place: 'India',
    title: 'Science stream',
    period: '2017 – 2020',
    detail: 'Physics, chemistry, and mathematics with a strong academics finish.',
    metrics: [
      { value: '95%', label: '12th score' },
      { value: 'CBSE', label: 'board' },
    ],
  },
]

const NODE_LAYOUT = [
  { angle: 240, copy: 'nw' },
  { angle: 300, copy: 'ne' },
  { angle: 0, copy: 'e' },
  { angle: 60, copy: 'se' },
  { angle: 120, copy: 'sw' },
  { angle: 180, copy: 'w' },
]

function ringSkills(items) {
  return items.map((item, i) => ({ ...item, ...NODE_LAYOUT[i] }))
}

export const skillRings = [
  {
    id: 'core',
    title: 'Core',
    caption: 'Interfaces I ship every week.',
    skills: ringSkills([
      { id: 'javascript', name: 'JavaScript', desc: 'Interactive product UIs.', color: '#F7DF1E', badge: 'js' },
      { id: 'nextjs', name: 'Next.js', desc: 'Production web apps.', color: '#4ADE80', badge: 'next' },
      { id: 'react', name: 'React', desc: 'Reusable component systems.', color: '#7DD3FC', badge: 'react' },
      { id: 'typescript', name: 'TypeScript', desc: 'Safer app code.', color: '#C084FC', badge: 'ts' },
      { id: 'html5', name: 'HTML5', desc: 'Accessible document structure.', color: '#FF6B8A', badge: 'html' },
      { id: 'css3', name: 'CSS3', desc: 'Responsive layouts.', color: '#FB923C', badge: 'css' },
    ]),
  },
  {
    id: 'apps',
    title: 'Apps',
    caption: 'Stack from Adglobal360 and freelance work.',
    skills: ringSkills([
      { id: 'rn', name: 'React Native', desc: 'Cross-platform mobile.', color: '#61DAFB', badge: 'rn' },
      { id: 'expo', name: 'Expo', desc: 'Faster mobile delivery.', color: '#A5B4FC', badge: 'expo' },
      { id: 'vue', name: 'Vue.js', desc: 'Adspective dashboard UI.', color: '#42B883', badge: 'vue' },
      { id: 'redux', name: 'Redux Toolkit', desc: 'App-wide client state.', color: '#764ABC', badge: 'redux' },
      { id: 'query', name: 'React Query', desc: 'Server state and cache.', color: '#FF4154', badge: 'query' },
      { id: 'zustand', name: 'Zustand', desc: 'Lightweight store.', color: '#F59E0B', badge: 'zt' },
    ]),
  },
  {
    id: 'delivery',
    title: 'Delivery',
    caption: 'How those products stay fast and usable.',
    skills: ringSkills([
      { id: 'rest', name: 'REST APIs', desc: 'Campaign data integrations.', color: '#38BDF8', badge: 'rest' },
      { id: 'gql', name: 'GraphQL', desc: 'Typed API queries.', color: '#E535AB', badge: 'gql' },
      { id: 'tw', name: 'Tailwind', desc: 'Utility-first UI speed.', color: '#22D3EE', badge: 'tw' },
      { id: 'mui', name: 'Material UI', desc: 'Design-system components.', color: '#007FFF', badge: 'mui' },
      { id: 'jest', name: 'Jest + RTL', desc: 'Unit and UI tests.', color: '#C21325', badge: 'jest' },
      { id: 'wcag', name: 'WCAG / SEO', desc: 'Access and discoverability.', color: '#34D399', badge: 'a11y' },
    ]),
  },
  {
    id: 'tools',
    title: 'Tools',
    caption: 'Day-to-day with product, design, and QA.',
    skills: ringSkills([
      { id: 'git', name: 'Git', desc: 'Branching and reviews.', color: '#F97316', badge: 'git' },
      { id: 'github', name: 'GitHub', desc: 'PRs and releases.', color: '#E5E7EB', badge: 'gh' },
      { id: 'postman', name: 'Postman', desc: 'API contract checks.', color: '#FF6C37', badge: 'post' },
      { id: 'figma', name: 'Figma', desc: 'Handoff from design.', color: '#A78BFA', badge: 'fig' },
      { id: 'jira', name: 'Jira', desc: 'Scrum delivery.', color: '#60A5FA', badge: 'jira' },
      { id: 'perf', name: 'Perf', desc: 'Split, lazy-load, memoize.', color: '#FBBF24', badge: 'perf' },
    ]),
  },
]

