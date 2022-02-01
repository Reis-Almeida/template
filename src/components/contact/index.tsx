import { Input } from '../Fields'
import { StyledForm } from './style'

export default function Contact() {
  return (
    <StyledForm>
      <h2>SOBRE O QUE É SUA DUVIDA?</h2>
      <Input label="Nome" name="name" placeholder="Obrigatório" required />
      <Input label="Nome" name="email" type="email" placeholder="Obrigatório" required />
      <Input label="Nome" name="subject" placeholder="Obrigatório" required />
      <span>
      <label htmlFor="">Sua Mensagem</label>
        <textarea name="" rows={10} />
      </span>
      <input type="submit" className="button" value="Enviar" />
    </StyledForm>
  )
}