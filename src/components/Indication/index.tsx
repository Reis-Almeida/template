import { Input } from '../Fields'
import { StyledForm } from './style'

export default function Indication() {
  return (
    <StyledForm>
      <h2>Indique a um amigo</h2>
      <Input label="Nome" name="name" placeholder="Obrigatório" required />
      <Input label="Email" name="email" type="email" placeholder="Obrigatório" required />
      <Input label="Nome do destinatário" name="destName" placeholder="Obrigatório" required />
      <Input label="Email do destinatário" name="destEmail" type="email" placeholder="Obrigatório" required />
      <input type="submit" className="button" value="Enviar" />
      <article>
      Informamos aos seus clientes e amigos que não utiliza 
      os endereços eletrônicos aqui fornecidos para comercialização 
      ou criação de SPAM.
      </article>
    </StyledForm>
  )
}