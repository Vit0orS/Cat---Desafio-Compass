async function catApiGet() {
    const pegaDados = await fetch(`https://thatcopy.pw/catapi/rest/`)
    return pegaDados.json();
}

async function catApiGetID(id) {
    const pegaDados = await fetch(`https://thatcopy.pw/catapi/restId/${id}`);
    return pegaDados.json();
}

async function dadosCEP(CEP){
    const pegaEndereco = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
    return pegaEndereco.json();
}

async function sendData(){
    const nome = document.querySelector(`[data-input=nome]`).value;
    const email = document.querySelector(`[data-input=email]`).value;

    const resposta = await fetch(`https://prog-bolsas-api.herokuapp.com/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    const respostaJSON = await resposta.json();

    console.log(respostaJSON);
    console.log(respostaJSON.data);

    if(respostaJSON.success){
        window.location.href = "paginaSucesso.html";
    } else {
        window.location.href = "paginaErro.html"
    }
}