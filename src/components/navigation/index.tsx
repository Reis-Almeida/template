import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Nav } from './style'
import Icon from 'public/icons'
import empresa from 'shared/empresa'

const LINKS = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Quem Somos',
    path: '/quemsomos',
  },
  {
    name: 'Equipe',
    path: '/equipe',
  },
  {
    name: 'Contato',
    path: '/contato',
  }
]


export default function Navigation({name}:{name:string}) {
  const { pathname } = useRouter()
  const [open, setOpen] = useState(false)
  return (
    <Nav>
      <div className="img">
        <Image src={"/images/teste/nav.jpg"} objectFit='cover' layout="fill" />
      </div>
      <div className="info">
      <h1>{name}</h1>
        <span>
          <Link href={'/'}><a>Home</a></Link>
          <p className="stripe">/</p>
          <p>{name}</p>
        </span>
      </div>
    </Nav>
  )
}