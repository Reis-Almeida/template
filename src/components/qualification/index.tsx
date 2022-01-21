import Icon from '../../shared/icons'
import { StyledQualification } from './style'


export default function Qualification() {

      return (
        <StyledQualification>
          <div>
            <h1>Melhores Imóveis</h1>
            <h5>Você precisa fazer é muito simples, basta juntar-se a nós</h5>
          </div>
          <div>
            <span>
              <div><Icon.home /></div>
              <h3>Encontra Sua Casa</h3>
              <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt. Lorem ipsum dolor...
              </article>
            </span>
            <span>
              <div><Icon.lock /></div>
              <h3>Protegendo a propriedade</h3>
              <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt. Lorem ipsum dolor...
              </article>
            </span>
            <span>
              <div><Icon.tool /></div>
              <h3>Mobilar a propriedade</h3>
              <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt. Lorem ipsum dolor...
              </article>
            </span>
            <span>
              <div><Icon.arrow /></div>
              <h3>Fornecendo suporte jurídico</h3>
              <article>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt. Lorem ipsum dolor...
              </article>
            </span>
          </div>
        </StyledQualification>
      )

}