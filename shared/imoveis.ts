function convertString(words:string) {
    let separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}

const price = (e:any) => {
    let p
    p = e.PrecoLocacao == '' ? p :  e.PrecoLocacao
    p = e.PrecoLocacaoTemporada == '' ? p :  e.PrecoLocacaoTemporada
    p = e.PrecoVenda == '' ?  p :  e.PrecoVenda
    
    return p
}

const nego = (e:any) => {
    let p
    p = e.PrecoLocacao == '' ? p :  'Aluguel'
    p = e.PrecoLocacaoTemporada == '' ? p :  'Aluguel temporada'
    p = e.PrecoVenda == '' ?  p :  'Venda'
    
    return p
}

const exists1 = (e:any) => e ? e : false
const exists2 = (e:any) => e ? true : false

function array(obj:[object]) {
    const iml:[object] = obj
    const array:any = []

    iml.map((element:any) => {
        const w:any = {}
            w.cod = element.CodigoImovel
            w.nome = element.TituloImovel
            w.cidade = convertString(element.Cidade)
            w.bairro = convertString(element.Bairro)
            w.endereco = element.Endereco
            w.cep = element.CEP
            w.uf = element.UF
            w.lat = element.Latitude
            w.lon = element.Longitude
            w.data = element.DataCadastro
            w.obs = element.Observacao
            w.src = element.Fotos
            w.area = element.AreaUtil ? element.AreaUtil : element.AreaTotal
            w.preco = price(element)
            w.negocio = nego(element)
            w.tipoImovel = element.TipoImovel
            w.oferta = element.TipoOferta
            w.condominio = exists1(element.PrecoCondominio)
            w.iptu = exists1(element.ValorIPTU)
            w.andar = exists1(element.QtdAndar)
            w.banho = exists1(element.QtdBanheiros)
            w.quarto = exists1(element.QtdDormitorios)
            w.salas = exists1(element.QtdSalas)
            w.suites = exists1(element.QtdSuites)
            w.vagas = exists1(element.QtdVagas)
            w.jardim = exists2(element.Jardim)
            w.mobiliado = exists2(element.Mobiliado)
            w.QEmpregada = exists2(element.QuartoWCEmpregada)
            w.sauna = exists2(element.Sauna)
            w.churras = exists2(element.Churrasqueira)
            w.interfone = exists2(element.Interfone)
            w.piscina = exists2(element.Piscina)
            w.playground = exists2(element.Playground)
            w.esport = exists2(element.QuadraPoliEsportiva)
            w.festa = exists2(element.SalaoFestas)
            w.jogos = exists2(element.SalaoJogos)
            w.hidromassagem = exists2(element.SpaHidromassagem)

            array.push(w)
    })

    return array

}

const Imoveis = async () => {
        try {
            const res = await fetch("https://allmateste.com.br/site-next/extractXml.php", { method: 'GET' })
            const data = await res.json()

            return array(data.Imoveis.Imovel)

        } catch (error) {
            console.log("Error", error)
            return "Failed"
        }
}

Imoveis()

export default Imoveis






// AreaTotal: "1"
// AreaUtil: "1"
// Bairro: "*" 
// CEP: "*"
// CategoriaImovel: "Terrea"
// Cidade: "*"
// CodigoImovel: "*"
// DataCadastro: "12/7/2018 12:01:17 PM"
// DataUltimateracao: "5/3/2019 1:14:40 PM"
// Endereco: "*"
// Fotos: {Foto: Array(2)}
// Jardim: "1"
// Latitude: "*"
// Longitude: "*"
// Mobiliado: "1"
// Numero: "404"
// Observacao: "*"
// PrecoCondominio: "1"
// PrecoLocacao: "*"
// PrecoLocacaoTemporada: "*"
// PrecoVenda: "*"
// QtdAndar: "1"
// QtdBanheiros: "4"
// QtdDormitorios: "2"
// QtdSalas: "1"
// QtdSuites: "2"
// QtdVagas: "2"
// QuartoWCEmpregada: "1"
// Sauna: "1"
// SubTipoImovel: "*"
// TipoImovel: "*"
// TipoOferta: "*number"
// TituloImovel: "*"
// UF: "*"
// ValorIPTU: "1"
// Churrasqueira: "1"
// Interfone: "1"
// Piscina: "1"
// Playground: "1"
// QuadraPoliEsportiva: "1"
// SalaoFestas: "1"
// SalaoJogos: "1"
// SpaHidromassagem: "1"