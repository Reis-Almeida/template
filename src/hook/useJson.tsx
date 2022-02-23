const convertString = (words:string) => {
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

const exists1 = (e:any) => parseInt(e) ? e : false
const exists2 = (e:any) => e ? true : false


function array(obj:[object]) {
    const iml:[object] = obj
    const array:any = []

    iml.map((element:any) => {
        const date = new Date(element.DataCadastro)

        const w:any = {}

            w.cod = element.CodigoImovel
            w.name = element.TituloImovel || element.TipoImovel
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
            w.suite = exists1(element.QtdSuites)
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

const useJson = async () => {
        try {
            const res = await fetch("https://allmateste.com.br/xml-extract/extractXml.php", { method: 'GET' })
            const data = await res.json()

            return array(data.Imoveis.Imovel)

        } catch (error) {
            console.log("Error", error)
            return "Failed"
        }
}

export default useJson

