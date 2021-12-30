/*async function pegaFoto (){
    const foto = await catApiGet();
    console.log(foto);
}*/ // Testes

async function catApiGet() {
    return fetch(`https://thatcopy.pw/catapi/rest/`)
    .then( resposta => {
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error('Não foi acessar a foto');
    })
}