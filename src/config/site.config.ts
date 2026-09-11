/**
 * ===================================================
 * SITE CONFIGURATION
 * ===================================================
 * Edit this file to customize the entire landing page.
 * No need to touch any component code.
 * ===================================================
 */

import { siteConfigSchema } from './site.config.schema'

import katieImage from '../images/katie.jpg'
import moonImage from '../images/moon.png'
import ellImage from '../images/ell.png'
import alexImage from '../images/alex.png'
import tamsinImage from '../images/tamsin.png'
import faisalImage from '../images/faisal.jpg'
import qiskitImage from '../images/qiskit.png'

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
      { label: 'About the Event', href: '/#roadmap' },
      { label: 'Our Speakers', href: '/#speakers' },
      { label: 'Resources', href: '/#features' },
      { label: 'Our Team', href: '/#team' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact Us', href: '/#contact' },
    ],
    cta: {
      label: 'Register',
      href: 'https://www.eventbrite.com/e/qiskit-fall-fest-tickets-2000051764668?aff=oddtdtcreator',
    },
  },

  /** ---- SEO & language (@astrojs/sitemap uses seo.siteUrl) ---- */
  seo: {
    siteUrl: 'https://bristolqiskitfallfest.org',
    defaultOgImage: '/social-preview.jpg',
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
   * Web3Forms: set contactAction to https://api.web3forms.com/submit and contactAccessKey to your access key.
   */
  forms: {
    contactAction: 'https://api.web3forms.com/submit',
    contactAccessKey: '28a886d6-2476-4e89-8592-9b665c0037f0',
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
    primaryCta: {
      label: 'Register',
      href: 'https://www.eventbrite.com/e/qiskit-fall-fest-tickets-2000051764668?aff=oddtdtcreator',
    },
    stats: [] as { value: string; label: string }[],
    // stats: [
    //   { value: '10K+', label: 'Active users' },
    //   { value: '99.9%', label: 'Uptime' },
    //   { value: '4.9/5', label: 'Rating' },
    // ],
  },

  /** ---- Getting Involved (rendered as the two main action buttons inside the Roadmap section) ---- */
  howItWorks: {
    steps: [
      {
        icon: 'calendar',
        title: 'Register',
        description: 'Register interest on our EventBrite page.',
        href: 'https://www.eventbrite.com/e/qiskit-fall-fest-tickets-2000051764668?aff=oddtdtcreator',
      },
      {
        icon: 'users',
        title: 'Join our Discord',
        description: 'Find resources, ask questions, and meet others in the community.',
        href: 'https://discord.gg/VKh5gHcqg6',
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
        description: 'Learn about basic concepts in quantum computing, and the fundamentals coding with Qiskit. \
          Hosted by a speaker from IBM Quantum (speaker TBA). No prior knowledge assumed.',
        status: 'in-progress',
        tags: ['Location TBA', '5-6pm'],
      },
      {
        period: 'TUES 13th OCT',
        title: 'Quantum Careers Panel',
        description: 'Explore possible careers in quantum computing, with experts in both industry and academia. \
          We are pleased to welcome speakers from Riverlane, Phasecraft, and University of Bristol\'s QIST CDT.',
        status: 'planned',
        tags: ['Location TBA', '5-6pm'],
        href: '/#speakers',
        linkLabel: 'Meet the speakers',
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
        description: 'Gain hands-on experience coding in Qiskit. \
          We will provide Jupyter Notebooks which walk you through examples of modelling chemical systems using quantum computers, \
          and our team will be available to help and offer guidance. \
          If you cannot attend live, we will also be offering coding help on our Discord server.',
        status: 'planned',
        tags: ['Location TBA', 'Time TBA'],
        href: '/#features',
        linkLabel: 'Prepare with our resources',
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
        avatar: qiskitImage,
        socials: [],
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
        avatar: faisalImage,
        socials: [],
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
        avatar: tamsinImage,
        socials: [],
      },
      {
        name: 'Zulekha (Zu) Samiullah',
        role: 'PhD Student at Quantum Engineering CDT, Bristol',
        bio: 'Zulekha Samiullah is a final-year PhD student searching for long-range entanglement between spins on hexagonal lattices. \
          She is a Widening Participation Tutor, sharing her love of maths and physics with young people across the UK. \
          Zulekha has delivered winter maths workshops funded by the HIMR. \
          She has co-organised Quantum in the Summer and spoken at Quantum Questions at Pint of Science. \
          During her PhD, she founded Quantum Squash and annual showcase Quantum Carousel. \
          She also completed a Department for Education policy internship through cross-government unit, Open Innovation Team.',
        avatar: qiskitImage,
        socials: [],
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
        description: 'Install the Qiskit Python library so you\'re ready to code during the workshop.',
        href: 'https://quantum.cloud.ibm.com/docs/en/guides/install-qiskit',
        details: {
          label: 'Using Anaconda Navigator',
          steps: [
            'Open Anaconda Navigator, then open Environments.',
            'Choose the environment you\'d like to run your code in.',
            'In the package list, change the dropdown from "Installed" to "Not installed".',
            'Search the packages for "qiskit", tick the checkbox, then click "Apply".',
            'This may take some time but should download the library to your environment.',
          ],
        },
      },
      {
        icon: 'user-add',
        title: 'Set up an account with IBM Quantum',
        description: 'Create an account to run code on real quantum computers.\nYou\'ll need to use this account in the coding workshops!',
        href: 'https://quantum.cloud.ibm.com/',
        details: {
          label: 'Creating an Account',
          steps: [
            'On IBM Quantum Platform press "Sign in" -> "Create a new account."',
            'The trial account lasts 30 days, after which you will be asked for card information. \
            A small amount (~£2) will be charged for verification then refunded within a few days. \
            After this, you will be charged if and only if you open a "Pay-as-you-go" instance, \
            but this is not necessary to complete our coding workshop.',
            'Once you are logged in to IBM Quantum Platform, go to "Instances" -> "View all" -> "Create Instance" and create an "Open" instance. \
            This is what you will use to submit code to real quantum computers during our coding workshops!',
          ],
        },
      },
      {
        icon: 'add',
        title: 'Further reading: Quantum Country',
        description: 'A well-structured introduction to basic ideas in quantum computing.',
        href: 'https://quantum.country/',
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
        bio: 'Katie Hoffelner graduated with a First Class MSci Physics degree from the University of Bristol in 2026. \
          Her research focused on evaluating entanglement between fermions as a potential resource for quantum computing. \
          She is also committed to science communication, \
          with experience including 2 years public speaking and 1 year writing for the Science & Technology section of Epigram. \
          In her free time she enjoys weightlifting, climbing, and juggling; she is currently learning to juggle 5 balls!',
        avatar: katieImage,
        socials: [
          { platform: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/katie-hoffelner/' },
          { platform: 'GitHub', icon: 'github', href: 'https://github.com/katiehoffelner' },
        ],
      },
      {
        name: 'Moon Devendra',
        role: 'Organiser',
        bio: 'Moon Devendra graduated with a First Class Mathematics degree from the University of Bristol in 2026. \
          Their research focused on developing a Hamiltonian to describe the quantum processes governing a solar cell, \
          through which they discovered a passion for quantum chemistry. Through completing the IBM Qiskit Global Summer School, \
          they discovered computational quantum chemistry, a field they endeavour to learn more about. \
          In their free time, they can usually be found climbing up walls!',
        avatar: moonImage,
        socials: [
          { platform: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/nuclear-moon/' },
        ],
      },
      {
        name: 'Eleanor Prideaux',
        role: 'Organiser',
        bio: 'Eleanor Prideaux is a fourth year Msci Physics student at the University of Bristol. \
          She has studied Quantum Information Theory and is currenty studying Quantum Computing. \
          She has experience in teaching, \
          tutoring second year physics students, often explaing quantum mechanics concepts. \
          In her free time she enjoys crocheting, swimming and running.',
        avatar: ellImage,
        socials: [
          { platform: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/eleanor-prideaux-a39459352' },
          { platform: 'GitHub', icon: 'github', href: 'https://github.com/eleanorprideaux' },
        ],
      },
      {
        name: 'Alexander Wood',
        role: 'Organiser',
        bio: 'Alex graduated with a First Class MEng Computer Science, and is starting a PhD at the Bristol Programming Languages Research Group. He is a passionate educator about all aspects of Computer Science, working as a Teaching Assistant alongside his PhD, and for the School of Computer Science on University Open Days.',
        avatar: alexImage,
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
          'The event is open to all students currently enrolled at the University of Bristol. \
          Please register before attending. \
          If you are not currently enrolled at the University of Bristol, please contact us to find out whether you are eligible to attend.',
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
      "If you plan on attending the event, we recommend that you join our Discord server. \
      Our team are available on this server to help you out.",
    channels: [
      { icon: 'mail',      label: 'Email us',     href: 'mailto:contact@bristolqiskitfallfest.org', value: 'contact@bristolqiskitfallfest.org' },
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
    title: 'Thank you to IBM Quantum, who help organise Qiskit Fall Fest every year, and to Phasecraft and Riverlane, \
      whose researchers are speaking at our Quantum Careers Panel. \
      Qiskit Fall Fest is a global collection of quantum computing events, primarily aimed at undergraduate students.',
    logos: [
      { name: 'IBM', id: 'ibm' },
      { name: 'Phasecraft', id: 'phasecraft' },
      { name: 'Riverlane', id: 'riverlane' },
    ],
  },

    /** ---- Footer ---- */
  footer: {
    description: 'A student-run event exploring quantum computing, hosted at the University of Bristol in collaboration with IBM Quantum.',
    columns: [
      {
        title: 'Event',
        links: [
          { label: 'About the Event', href: '/#roadmap' },
          { label: 'Speakers', href: '/#speakers' },
          { label: 'Resources', href: '/#features' },
          { label: 'Our Team', href: '/#team' },
        ],
      },
      {
        title: 'Get Help',
        links: [
          { label: 'Join our Discord', href: 'https://discord.gg/VKh5gHcqg6' },
          { label: 'FAQ', href: '/#faq' },
          { label: 'Contact Us', href: '/#contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '/privacy' },
        ],
      },
    ],
    socials: [] as { icon: string; href: string }[],
  },


/** THIS LIL GUY IS IMPORTANT */
}

export const siteConfig = siteConfigSchema.parse(siteConfigRaw) as typeof siteConfigRaw
export type SiteConfig = typeof siteConfig
