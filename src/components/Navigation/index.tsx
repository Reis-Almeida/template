import Link from 'next/link'
import { MyImage } from '../Image'
import website from '../../shared/json/website'
import { StyledNav } from './style'

type NavigationProps = {
  router: string
  router2?: string
}

export default function Navigation(props:NavigationProps) {
  const { router, router2 } = props

  return (
    <StyledNav>
      <div className="img">
        <MyImage src={website.navImg} alt="navegação" />
      </div>
      <div className="info">
      <h1>{router}</h1>
        <span>
          <Link href={'/'}><a>Home</a></Link>
          {router2 ? (
           <>
              <p className="stripe">/</p>
              <Link href={`/${router2}`}><a>{router2}</a></Link>
           </>
          ) : false}
          <p className="stripe">/</p>
          <p>{router}</p>
        </span>
      </div>
    </StyledNav>
  )
}