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
      <Image  src={"/images/teste/nav.jpg"} height={200} width={1300} />
      <div className="nav">
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