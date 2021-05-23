import empresa from 'shared/empresa'
import { Main } from './style'


export default function Text() {
  return (
    <Main>
      <h1>Quem é a {empresa.nome}?</h1>
      <hr />
      <article>{empresa.quemsomos}</article>
    </Main>
  )
}