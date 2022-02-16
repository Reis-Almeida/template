import { Input, TextArea } from '../Fields'
import { StyledForm } from './style'

export default function Contact() {
  return (
    <StyledForm>
      <h2>SOBRE O QUE É SUA DUVIDA?</h2>
      <Input label="Nome" name="name" placeholder="Obrigatório" required />
      <Input label="Email" name="email" type="email" placeholder="Obrigatório" required />
      <Input label="Assunto" name="subject" placeholder="Obrigatório" required />
      <TextArea label="Sua Mensagem" name="mensage" rows={10} />
      <input type="submit" className="button" value="Enviar" />
    </StyledForm>
  )
}