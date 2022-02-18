import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component'
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
        <LazyLoadImage src={website.navigation} alt="navegação" />
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