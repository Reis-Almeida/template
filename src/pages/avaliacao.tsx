import { Input, Select, TextArea } from "../components/Fields";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import { StyledForm } from "../styles/avaliacao";

export default function Avaliacao() {
    return(
        <Layout>
            <Navigation router="Avaliação" />
            <div className="media">
                <StyledForm>
                    <div className="group">
                        <h2>Dados do imóvel</h2>
                        <fieldset>
                            <Input className="field" label="Endereço:" name="endereco" />
                            <Input className="field" label="Bairro:" name="bairro" />
                            <div className="fieldGroup">
                                <Input className="field" label="Cidade:" name="cidade" />
                                <Select className="field" label="Estado:" name="uf" >
                                    <option value="">DF</option>
                                </Select>
                            </div>
                            <div className="fieldGroup">
                                <Select className="field" label="Tipo de imóvel:" name="tipo" >
                                    <option value="">DF</option>
                                </Select>
                                <Select className="field" label="Interesse:" name="oferta" >
                                    <option value="">Selecione</option>
                                    <option value="">Aluguel</option>
                                    <option value="">Venda</option>
                                </Select>
                            </div>
                            <div className="fieldGroup">
                                <Input className="field" label="Área total (m²):" name="areaTotal" />
                                <Input className="field" label="Área privativa (m²):" name="areaPrivada" />
                            </div>
                        </fieldset>
                    </div>
                    <div className="group">
                        <h2>Dados do proprietário</h2>
                        <fieldset>
                            <Input className="field" label="Nome:" name="nome" />
                            <Input className="field" label="Email:" name="email" type="email" />
                            <Input className="field" label="Telefone:" name="telefone" />
                            <TextArea className="field" label="Espaço para observações adicionais:" name="obs" rows={10} />
                            <input type="button" value="Enviar" />
                        </fieldset>
                    </div>
                </StyledForm>
            </div>
        </Layout>
    )
}