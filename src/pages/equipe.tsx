import CardServant from '@components/cardServant'
import Footer from '@components/footer'
import Header from '@components/header'
import Navigation from '@components/navigation'
import empresa from 'shared/empresa'
import { Main } from 'src/styles/equipe'

export default function Equipe() {
  return (
    <>
      <Header/>
      <Navigation 
        name={'Equipe'}
        />
      <Main>
        {empresa.equipe.map((i, e) => (
          <CardServant  key={e} obj={i} />
         
        ))}    
      </Main>
      <main>
      </main>
      <Footer/>
    </>
    )
}