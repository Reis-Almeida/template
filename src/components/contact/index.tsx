import { StyledForm } from './style'

export default function Contact() {
  return (
    <StyledForm>
      <h2>SOBRE O QUE É SUA DUVIDA?</h2>
      <label htmlFor="">Nome</label>
        <input type="text" placeholder="Obrigatório" />
      <label htmlFor="">Email</label>
        <input type="email" placeholder="Obrigatório" />
      <label htmlFor="">Assunto</label>
        <input type="text" />
      <label htmlFor="">Sua Mensagem</label>
        <textarea name="" rows={10}></textarea>
      <input type="submit" className="button" value="Enviar" />
    </StyledForm>
  )
}