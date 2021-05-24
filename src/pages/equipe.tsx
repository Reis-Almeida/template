import CardServant from '@components/cardServant'
import Footer from '@components/footer'
import Header from '@components/header'
import Navigation from '@components/navigation'

export default function Equipe() {
  return (
    <>
      <Header/>
      <Navigation 
        name={'Equipe'}
        />
      <CardServant/>
      <main>
      </main>
      <Footer/>
    </>
    )
}