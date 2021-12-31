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

async function sendData(){
    const nome = document.querySelector(`[data-type="nome"]`).value;
    const email = document.querySelector(`[data-type="email"]`).value;

    return fetch(`https://prog-bolsas-api.herokuapp.com/`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    }).then( resposta => {
        console.log(resposta.json)
        if(resposta.ok){
            window.location.href = "paginaSucesso.html";
        } else {
            window.location.href = "paginaErro.html"
        }
    })
}