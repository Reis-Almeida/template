import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { StyledHeader } from './style'
import Icon from '../../shared/icons'
import company from '../../shared/json/company'
import { MyImage } from '../Image'
import SocialNetwork from '../SocialNetwork'
import Head from 'next/head'
import website from '../../shared/json/website'

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
    <StyledHeader open={open}>
       <Head>
        {website.navigation.map(({name, path}) => {
          if(pathname === path) {
            return <title key={`title${name}`}>{name} - {company.name}</title>
          }
        })}
      </Head>

      <div className="headerInfo">
        <span>
          <div> 
            <a href={"mailto:" + company.email}><Icon.email />{company.email}</a>
            <a><Icon.phone />{company.telefone}</a>
          </div>
          <SocialNetwork/>
        </span>
      </div>

      <div className="headerNav">
        <Link href={'/'}>
          <a><MyImage src={company.logo.default} height={50} width={220} alt="logo" /></a>
        </Link>
        <ul>
          {website.navigation.map(({name, path}) => (
            <li key={path}>
              {path === pathname ? <span>{name}</span> : <NavAnchor path={path}>{name}</NavAnchor>}
            </li>
          ))}
        </ul>
        <Icon.menu  onClick={() => setOpen(!open)}/>
      </div>
    </StyledHeader>
  )
}