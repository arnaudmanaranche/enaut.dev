import {
  AcademicCapIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CloudIcon,
  HomeIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

export const headerLinks = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Projects',
    path: null,
  },
  {
    label: 'Quotes',
    path: '/quotes',
  },
  {
    label: 'Readings',
    path: null,
  },
]

export const footerLinks = [
  {
    label: 'Changelog',
    path: '/changelog',
  },
  {
    label: 'TWIL',
    path: '/this-week-i-learned',
  },
  {
    label: 'Activities',
    path: null,
  },
]

export const socialLinks = [
  {
    label: 'Twitter',
    path: '/twitter',
  },
  {
    label: 'Github',
    path: '/github',
  },
  {
    label: 'Polywork',
    path: '/polywork',
  },
  {
    label: 'LinkedIn',
    path: '/linkedin',
  },
]

export const fixedNavLinks = [
  {
    label: 'Home',
    path: '/',
    icon: () => {
      return <HomeIcon width={22} height={22} />
    },
  },
  {
    label: 'Projects',
    path: null,
    icon: () => {
      return <BriefcaseIcon width={22} height={22} />
    },
  },
  {
    label: 'Quotes',
    path: '/quotes',
    icon: () => {
      return <CloudIcon width={22} height={22} />
    },
  },
]

export const fixedNavMoreLinks = [
  {
    label: 'Readings',
    path: null,
    icon: () => {
      return (
        <BookOpenIcon
          className="ml-1 text-opacity-40 text-current"
          color="#212121"
          width={16}
          height={16}
        />
      )
    },
  },
  {
    label: 'Changelog',
    path: '/changelog',
    icon: () => {
      return (
        <SparklesIcon
          className="ml-1 text-opacity-40 text-current"
          color="#212121"
          width={16}
          height={16}
        />
      )
    },
  },
  {
    label: 'TWIL',
    path: '/this-week-i-learned',
    icon: () => {
      return (
        <AcademicCapIcon
          className="ml-1 text-opacity-40 text-current"
          color="#212121"
          width={16}
          height={16}
        />
      )
    },
  },
  {
    label: 'Activities',
    path: null,
    icon: () => {
      return (
        <ChartBarIcon
          className="ml-1 text-opacity-40 text-current"
          color="#212121"
          width={16}
          height={16}
        />
      )
    },
  },
]
