import { StaticImageData } from 'next/image'
import baracode from '../public/baracode.png'
import clientvault from '../public/clientvault.png'
import megaani from '../public/megaani.png'
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
  {
    name: 'megaani Edutech',
    description:
      'An e-learning platform that offers a wide range of courses and resources for students and educators.',
    link: 'https://megaani-six.vercel.app',
    picture: megaani,
    id: 'project3',
  },
  {
    name: 'Client Vault',
    description:
      'A secure and user-friendly web application that allows users to store and manage their sensitive information, such as passwords, credit card details, and personal notes, all in one place.',
    link: 'https://client-vault-rho.vercel.app',
    picture: clientvault,
    id: 'project4',
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
