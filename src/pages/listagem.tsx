import CardImovel from '@components/cardImovel'
import Filter from '@components/filter'
import Footer from '@components/footer'
import Header from '@components/header'
import Navigation from '@components/navigation'

export default function Listagem() {
  return (
    <>
      <Header/>
      <Navigation 
        name={'Listagem'}
      />
      <CardImovel cardL={''} filter={
      <Filter/>
      } />
      <main>
      </main>
      <Footer/>
    </>
    )
}