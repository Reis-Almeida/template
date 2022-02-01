import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import { StyledNav } from './style'

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

  // console.log(window.location.href)
  
  return (
    <StyledNav>
      <div className="img">
        <img src={"/images/teste/nav.jpg"} />
      </div>
      <div className="info">
      <h1>{name}</h1>
        <span>
          <Link href={'/'}><a>Home</a></Link>
          <p className="stripe">/</p>
          <p>{name}</p>
        </span>
      </div>
    </StyledNav>
  )
}