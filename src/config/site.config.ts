/**
 * ===================================================
 * SITE CONFIGURATION
 * ===================================================
 * Edit this file to customize the entire landing page.
 * No need to touch any component code.
 * ===================================================
 */

import { siteConfigSchema } from './site.config.schema'

const siteConfigRaw = {
  /** ---- Brand ---- */
  brand: {
    name: 'Qiskit Fall Fest',
    tagline: 'University of Bristol',
    logo: '/logo.svg',
  },

  /** ---- Navigation ---- */
  nav: {
    links: [
      { label: 'About the Event', href: '#roadmap' },
      { label: 'Our Speakers', href: '#speakers' },
      { label: 'Resources', href: '#features' },
      { label: 'Our Team', href: '#team' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact Us', href: '#contact' },
    ],
    cta: { label: 'Get Started', href: '#howItWorks' },
  },

  /** ---- SEO & language (@astrojs/sitemap uses seo.siteUrl) ---- */
  seo: {
    siteUrl: 'https://your-domain.com',
    defaultOgImage: '/favicon.svg',
    twitterHandle: undefined as string | undefined,
    lang: 'en',
  },

  /**
   * ---- Umami Analytics ----
   * Set PUBLIC_UMAMI_WEBSITE_ID in your .env file to enable analytics.
   * Change src only if you use a self-hosted Umami instance.
   */
  umami: {
    src: 'https://cloud.umami.is/script.js' as string,
  },

  /**
   * ---- Forms ----
   * Demo: leave actions empty and Netlify flags false — components show a fake success state.
   * Real POST: set contactAction / newsletterAction to your endpoint.
   * Netlify Forms: set contactNetlify / newsletterNetlify to true and deploy on Netlify.
   */
  forms: {
    contactAction: '',
    newsletterAction: '',
    contactNetlify: false,
    newsletterNetlify: false,
  },

  /** ---- Hero Section ---- */
  hero: {
    badge: null,
    title: 'Explore Quantum Computing',
    description:
      'This October, join us for an introductory lecture, careers panel, and coding workshop. Hosted at the University of Bristol in collaboration with IBM Quantum.',
    primaryCta: { label: 'Register', href: '#pricing' },
    secondaryCta: { label: 'See Demo', href: '#features' },
    stats: [] as { value: string; label: string }[],
    // stats: [
    //   { value: '10K+', label: 'Active users' },
    //   { value: '99.9%', label: 'Uptime' },
    //   { value: '4.9/5', label: 'Rating' },
    // ],
  },

  /** ---- How It Works Section ---- */
  howItWorks: {
    badge: null,
    title: 'Getting Started',
    description: 'If you want to get involved, follow these 3 easy steps.',
    steps: [
      {
        number: 1,
        title: 'Register',
        description: 'Register interest on our EventBrite page.',
      },
      {
        number: 2,
        title: 'Join our Discord server',
        description: 'Find resources, ask questions, and meet others in the community.',
      },
      {
        number: 3,
        title: 'Download Qiskit library',
        description: 'Prepare for our coding workshop by making sure you have the necessary installations.',
      },
    ],
  },

  /** ---- Roadmap Section ---- */
  roadmap: {
    badge: null,
    title: "About the Event",
    description: "Four sessions designed to help you embark on your quantum computing journey with confidence. Register now to attend.",
    items: [
      {
        period: 'MON 12th OCT',
        title: 'Quantum and Qiskit 101',
        description: 'Learn about basic concepts in quantum computing, and the fundamentals coding with Qiskit. Hosted by a speaker from IBM Quantum (speaker TBD). No prior knowledge assumed.',
        status: 'in-progress',
        tags: ['Location TBA', '5-6pm'],
      },
      {
        period: 'TUES 13th OCT',
        title: 'Quantum Careers Panel',
        description: 'Explore possible careers in quantum computing, with experts in both industry and academia. We are pleased to welcome speakers from Riverland, Phasecraft, and University of Bristol\'s QIST CDT. Click here for more information on the speakers.',
        status: 'planned',
        tags: ['Location TBA', '5-6pm'],
      },
      {
        period: 'SUN 18th OCT',
        title: 'Picnic Social',
        description: 'Get to know other students interested in quantum in a friendly, laid-back social setting.',
        status: 'planned',
        tags: ['Location TBA', 'Time TBA'],
      },
      {
        period: 'MON 19th OCT',
        title: 'Qiskit Coding Workshop',
        description: 'Gain hands-on experience coding in Qiskit. We will provide Jupyter Notebooks which walk you through examples of modelling chemical systems using quantum computers, and our team will be available to help and offer guidance. Please check out the Resources page for prerequisite downloads, so you have more time during the session to crack on with coding! If you cannot attend live, we will also be offering coding help on our discord server.',
        status: 'planned',
        tags: ['Location TBA', 'Time TBA'],
      },
    ],
  },

    /** ---- Speakers Section ---- */
  speakers: {
    badge: null,
    title: 'Our Speakers',
    description: 'Thank you to the speakers who have agreed to help with this event. \
      The first speaker, from IBM Quantum, will be leading the Quantum and Qiskit 101 session. \
      The other three speakers will be speaking in the Quantum Careers Panel.',
    members: [
      {
        name: 'TBA',
        role: 'IBM Quantum',
        bio: 'An IBM speaker will lead the Quantum and Qiskit 101 session. More details TBA.',
        avatar: 'url(../images/katie.jpg)',
        socials: [
          { platform: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/katie-hoffelner/' },
          { platform: 'GitHub', icon: 'github', href: 'https://github.com/katiehoffelner' },
        ],
      },
      {
        name: 'Faisal Alam',
        role: 'Quantum Algorithms Scientist at Phasecraft',
        bio: 'Faisal graduated from Franklin & Marshall College with degrees in physics and mathematics. \
          He received a PhD in physics, with a focus on quantum algorithms, \
          from the University of Illinois at Urbana-Champaign, with a 2-year stint at Los Alamos National Laboratory. \
          His research interests are centred on compilation of quantum algorithms to hardware and on classical simulation of quantum systems. \
          In the past Faisal has worked on gravitational waves and bound states in quantum field theories. \
          Outside of physics, Faisal’s time is spent reading and writing fiction. \
          He is also interested in history and philosophy, and enjoys weightlifting and cricket.',
        avatar: 'url(../images/moon.png)',
        socials: [
          { platform: 'Twitter', icon: 'twitter', href: '#' },
          { platform: 'GitHub', icon: 'github', href: '#' },
        ],
      },
      {
        name: 'Tamsin Sandhu',
        role: 'Associate Research Engineer at Riverlane',
        bio: 'Tamsin Sandhu is an associate research engineer at Riverlane, \
          where she models new scientific ideas from Riverlane\'s research team and helps translate them into Deltaflow, \
          the company\'s product. She holds a degree in mathematics from Cambridge and a master\'s in applied mathematics from Imperial, \
          and joined Riverlane\'s graduate scheme in 2025. Tamsin also leads Riverlane\'s annual Bertha Swirles QEC Workshop, \
          which supports women entering the quantum industry - a cause she is personally passionate about, \
          having entered the company through the same route herself.',
        avatar: 'url(../images/ell.png)',
        socials: [
          { platform: 'Twitter', icon: 'twitter', href: '#' },
        ],
      },
      {
        name: 'TBA',
        /**name: 'Zulekha (Zu) Samiullah', */  
        role: 'PhD Student at QIST CDT, Bristol',
        bio: 'More details TBA.',
        avatar: 'url(../images/alex.png)',
        socials: [
          { platform: 'LinkedIn', icon: 'linkedin', href: '#' },
        ],
      },
    ],
  },

    /** ---- Features Section ---- */
  features: {
    badge: null,
    title: 'Resources',
    description: 'We recommend preparing before attending the coding workshop with these resources in order to improve your learning experience. \
      More resources are available on our Discord server.',
    items: [
      {
        icon: 'download',
        title: 'Download Qiskit library',
        description:
          'LOCK IN UPDATE THIS.',
      },
      {
        icon: 'user-add',
        title: 'Set up an account with IBM Quantum',
        description:
          'Create an account with https://quantum.cloud.ibm.com/ to submit code to real quantum computers.',
      },
      {
        icon: 'add',
        title: 'Further reading: Quantum Country',
        description:
          'We recommend https://quantum.country/ as a well-structured introduction to basic ideas in quantum computing.',
      },
    ],
  },

  /** ---- Team Section ---- */
  team: {
    badge: null,
    title: 'Our Team',
    description: 'An event organised by University of Bristol students, for University of Bristol students.',
    members: [
      {
        name: 'Katie Hoffelner',
        role: 'Lead Organiser',
        bio: 'MSci Physics graduate.',
        avatar: './src/images/katie.jpg',
        socials: [
          { platform: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/katie-hoffelner/' },
          { platform: 'GitHub', icon: 'github', href: 'https://github.com/katiehoffelner' },
        ],
      },
      {
        name: 'Moon Devendra',
        role: 'Organiser',
        bio: 'MSci Mathematics graduate.',
        avatar: './src/images/moon.png',
        socials: [
          { platform: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/nuclear-moon/' },
        ],
      },
      {
        name: 'Eleanor Prideaux',
        role: 'Organiser',
        bio: '4th year MSci Physics student.',
        avatar: './src/images/ell.png',
        socials: [
          { platform: 'Twitter', icon: 'twitter', href: '#' },
        ],
      },
      {
        name: 'Alexander Wood',
        role: 'Organiser',
        bio: 'MSci Computer Science graduate, 1st year PhD student in Programming Languages.',
        avatar: './src/images/alex.png',
        socials: [
          { platform: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/alexwood2403/' },
          { platform: 'GitHub', icon: 'github', href: 'https://github.com/bristermitten' },
        ],
      },
    ],
  },

  /** ---- FAQ Section ---- */
  faq: {
    badge: null,
    title: 'Frequently Asked Questions',
    description: "Can't find what you're looking for? Join our Discord server and our team will be available to answer questions.",
    items: [
      {
        question: 'Who can come to the event?',
        answer:
          'The event is open to all students currently enrolled at the University of Bristol. Please register before attending.',
      },
      {
        question: 'Is the event free?',
        answer:
          'Yes!',
      },
      {
        question: 'Do I need to know anything about quantum computing?',
        answer:
          'No, our sessions are designed to provide value to everyone, regardless of prior knowledge. However, if you want to get more out of the event, we would recommend checking out our Resources page to learn more.',
      },
      {
        question: 'I won\'t be available to attend all the sessions, is that okay?',
        answer:
          'Attendance at all four sessions is recommended but not compulsory. Please register even if you only plan on attending one session. For those who can\'t attend the coding workshop but would still like to try out the exercises, our team will be available on our Discord server to help out.',
      },
      {
        question: 'Do I need to prepare anything before the event?',
        answer:
          'Our coding workshop will make use of the Qiskit library on Python, which will need to be installed. We highly encourage you to work through the Resources page which will help you making the necessary installations, so that you can spend more time during the session working on the coding exercises. The first three sessions don\'t require any preparation, just show up ready to learn!',
      },
    ],
  },

  /** ---- Contact Section ---- */
  contact: {
    badge: null,
    title: "Contact Us",
    description:
      "If you plan on attending the event, we recommend that you join our Discord server. Our team are available on this server to help you out.",
    channels: [
      { icon: 'mail',      label: 'Email us',     href: 'mailto:katie.hoffelner.2022@bristol.ac.uk', value: 'katie.hoffelner.2022@bristol.ac.uk' },
    ],
    topics: [
      { label: 'Student enquiry',   value: 'general'  },
      { label: 'External enquiry',       value: 'partners' },
      { label: 'Other',             value: 'other'    },
    ],
    cta: 'Send Message',
  },

  /** ---- LogoCloud Section (optional) ---- */
  logocloud: {
    title: 'Thank you to IBM Quantum who help organise Qiskit Fall Fest every year. \
      Qiskit Fall Fest is a global collection of quantum computing events, primarily aimed at undergraduate students.',
    logos: [
      { name: 'Stripe',  id: 'stripe'  },
    ],
  },

    /** ---- Footer ---- */
  footer: {
    description: 'Build, launch, and scale your SaaS with confidence.',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Changelog', href: '#' },
          { label: 'Docs', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#' },
          { label: 'Blog', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Contact', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '/privacy' },
          { label: 'Terms', href: '#' },
          { label: 'License', href: '#' },
        ],
      },
    ],
    socials: [
      { icon: 'twitter', href: '#' },
      { icon: 'github', href: '#' },
      { icon: 'linkedin', href: '#' },
    ],
  },


/** THIS LIL GUY IS IMPORTANT */
}

export const siteConfig = siteConfigSchema.parse(siteConfigRaw) as typeof siteConfigRaw
export type SiteConfig = typeof siteConfig
