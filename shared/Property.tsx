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
        const date = new Date(element.DataCadastro)

        const w:any = {}

            w.cod = element.CodigoImovel
            w.name = element.TituloImovel
            w.city = convertString(element.Cidade)
            w.district = convertString(element.Bairro)
            w.address = element.Endereco
            w.cep = element.CEP
            w.uf = element.UF
            w.lat = element.Latitude
            w.lon = element.Longitude
            w.c_date = date.getTime()
            w.obs = element.Observacao
            w.src = element.Fotos
            w.square = element.AreaUtil ? element.AreaUtil : element.AreaTotal
            w.price = price(element)
            w.business = nego(element)
            w.p_type = element.TipoImovel
            w.offer = element.TipoOferta
            w.condominium = exists1(element.PrecoCondominio)
            w.iptu = exists1(element.ValorIPTU)
            w.floor = exists1(element.QtdAndar)
            w.bath = exists1(element.QtdBanheiros)
            w.bedroom = exists1(element.QtdDormitorios)
            w.room = exists1(element.QtdSalas)
            w.suites = exists1(element.QtdSuites)
            w.vacancy = exists1(element.QtdVagas)
            w.garden = exists2(element.Jardim)
            w.furnished = exists2(element.Mobiliado)
            w.br_maid = exists2(element.QuartoWCEmpregada)
            w.sauna = exists2(element.Sauna)
            w.barbecue = exists2(element.Churrasqueira)
            w.intercom = exists2(element.Interfone)
            w.poll = exists2(element.Piscina)
            w.playground = exists2(element.Playground)
            w.esport = exists2(element.QuadraPoliEsportiva)
            w.party = exists2(element.SalaoFestas)
            w.games = exists2(element.SalaoJogos)
            w.whirlpool = exists2(element.SpaHidromassagem)
            w.garage = exists2(element.Garagem)

        array.push(w)
    })

    return array

}

const Property = async () => {
        try {
            const res = await fetch("https://allmateste.com.br/site-next/extractXml.php", { method: 'GET' })
            const data = await res.json()

            return array(data.Imoveis.Imovel)

        } catch (error) {
            console.log("Error", error)
            return "Failed"
        }
}



export default Property











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