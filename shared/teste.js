const price = (e) => {
    let p = ''
    p = e.PrecoLocacao == [] ? p :  e.PrecoLocacao
    p = e.PrecoLocacaoTemporada ==[] ? p :  e.PrecoLocacaoTemporada
    // p = e.PrecoVenda == [] ?  p :  e.PrecoVenda
    
    return p
}


const obj = {
PrecoLocacao: 1,
PrecoLocacaoTemporada: [],
PrecoVenda: []
}

console.log(obj.PrecoLocacaoTemporada == '')