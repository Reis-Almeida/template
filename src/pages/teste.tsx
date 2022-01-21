import CardClient from '../components/CardClient'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import company from '../shared/json/company'
import website from '../shared/json/website'
import { StyledMain } from '../styles'
import CardLocation from '../components/CardLocation'
import Gallery from '../components/Gallery'
import SuspenseImage from '../components/SuspenseImage'

type PropsClient = {
  src: string
  title: string
  description: string
  name: string
  star: number

}

export default function Home() {
  return(
    <Layout>
    <SuspenseImage />
    </Layout>
  )
}