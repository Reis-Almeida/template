import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import { HeadInfo, HeadNav } from './style'
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

type TnavAnchor = {
  path: string
  children: ReactNode
}

function NavAnchor({ path, children }: TnavAnchor) {
  return (
    <Link href={path}><a>{children}</a></Link>
  )
}

export default function Header() {
  const { pathname } = useRouter()
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <HeadInfo>
        <div> 
          <a href={"mailto:" + empresa.email}><Icon.Email className="icon"/>{empresa.email}</a>
          <a><Icon.Phone className="icon"/>{empresa.telefone}</a>
        </div>
        <div>
          <a href={empresa.twitter}><Icon.Twitter className="icon"/></a>
          <a href={empresa.facebook}><Icon.Facebook className="icon"/></a>
          <a href={empresa.instagram}><Icon.Instagram className="icon"/></a>
          <a href={empresa.pinterest}><Icon.Pinterest className="icon"/></a>
          <a href={empresa.linkedin}><Icon.Linkedin className="icon"/></a>
        </div>
      </HeadInfo>
      <HeadNav open={open}>
        <Link href={'/'}><a><Image src={empresa.logo.default} height={50} width={220} alt="logo" /></a></Link>
        <ul>
          {LINKS.map(({name, path}) => (
            <li key={path}>
              {path === pathname ? <span>{name}</span> : <NavAnchor path={path}>{name}</NavAnchor>}
            </li>
          ))}
        </ul>
        <Icon.Menu className="icon" onClick={() => setOpen(!open)}/>
      </HeadNav>
    </nav>
  )
}