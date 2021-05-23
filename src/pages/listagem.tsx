import CardImovel from '@components/cardImovel'
import Filter from '@components/filter'
import Footer from '@components/footer'
import Header from '@components/header'

export default function Listagem() {
  return (
    <>
      <Header/>
      <CardImovel cardL={''} filter={
      <Filter/>
      } />
      <main>
      </main>
      <Footer/>
    </>
    )
}