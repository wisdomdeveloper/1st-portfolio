import { StaticImageData } from 'next/image'
import baracode from '../public/baracode.png'
import realEstate from '../public/real-estate.png'

type Project = {
  name: string
  description: string
  link: string
  picture: StaticImageData | string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Baracode Scanner',
    description:
      'Smart attendance made easy with fast, reliable barcode scanning.',
    link: 'https://baracode-scanner.vercel.app/',
    picture: realEstate,
    id: 'project1',
  },
  {
    name: 'Real estate',
    description:
      'showcases my skills in creating a pixel perfect real estate web App',
    link: 'https://real-estate-topaz-gamma.vercel.app/',
    picture: baracode,
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Interen',
    title: 'Front-end Engineer',
    start: '2024',
    end: '2025',
    link: 'https://coderigi.co',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2025',
    end: 'Present',
    link: '',
    id: 'work2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/wisdomdeveloper',
  },
]

export const EMAIL = 'wisdomdev660@gmail.com'
