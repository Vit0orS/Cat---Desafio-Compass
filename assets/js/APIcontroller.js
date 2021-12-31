/*async function pegaFoto (){
    const foto = await catApiGet();
    console.log(foto);
}*/ // Testes

async function catApiGet() {
    return await fetch(`https://thatcopy.pw/catapi/rest/`)
    .then( resposta => {
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error('Não foi acessar a foto');
    })
}

async function catApiGetID(id) {
    const pegaDados = await fetch(`https://thatcopy.pw/catapi/restId/${id}`);
    return pegaDados.json();
}

async function dadosCEP(CEP){
    const pegaEndereco = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
    console.log(pegaEndereco);
    return pegaEndereco.json();
}