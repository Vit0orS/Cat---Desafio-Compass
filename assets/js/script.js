function carregaCarrossel(){
    const carrossel = document.getElementsByClassName("fotoCarrossel");
    for(let i=0; i<carrossel.length; i++){
        catApiGet()
        .then(resposta =>{
            carrossel[i].src = resposta.webpurl;
    }) 
    }
}

const nomes = [
    "Bob",
    "Charlie",
    "Cookie",
    "Garfield",
    "Mimi",
    "Kiki",
    "Luna",
    "Zoey"
]

function gatoPorID(){
    document.querySelector(".imagemGato").src = "../assets/img/loading-buffering.gif"

    const timeout = setTimeout(() => {
        document.querySelector(".imagemGato").src = "../assets/img/errorImage.png";
        document.querySelector(".nomeGato").innerHTML = `Não foi possível encontrar um gato com esse ID`;
        document.querySelector(".encontrado").innerHTML = `Talvez você digitou errado, ou o servidor está fora...`;
        document.querySelector(".dataPerdido").innerHTML = '';
    }, 6000)

    const data = new generateRandomDate().toLocaleDateString('pt-BR');

    const id = document.querySelector("#inputID").value;

    const encontrado = Math.floor(Math.random() * (10 - 1)) + 1;

    const nomeDoGato = nomes[Math.floor(Math.random() * nomes.length)];

    catApiGetID(id)
    .then((dado) => {
        clearTimeout(timeout);
        document.querySelector(".imagemGato").src = dado.webpurl;
        document.querySelector(".nomeGato").innerHTML = `Nome: ${nomeDoGato}`;
        document.querySelector(".encontrado").innerHTML = `Encontrado? ${encontrado%2==0 ? "SIM" : "NÃO"}`;
        document.querySelector(".dataPerdido").innerHTML = `Data em que sumiu: ${data}`;
        })
}

function gatoPorCEP(){
    const imagemSrc = document.querySelectorAll(".imagemGato");
    const CEP = document.querySelector("#inputCEP").value;
    const nomeTexto = document.querySelectorAll(".nomeGato");
    const encontradoTexto = document.querySelectorAll(".encontrado");
    const dataPerdidoTexto = document.querySelectorAll(".dataPerdido");
    const localTexto = document.querySelectorAll(".localidade");
    
    dadosCEP(CEP)
    .then(local => {
        for (let i=0; i<3; i++){
            imagemSrc[i].src = "../assets/img/loading-buffering.gif"
            const data = new generateRandomDate().toLocaleDateString('pt-BR');
            const encontrado = Math.floor(Math.random() * (10 - 1)) + 1;
            const nomeDoGato = nomes[Math.floor(Math.random() * nomes.length)];
            nomeTexto[i].innerHTML = `Nome: ${nomeDoGato}`;
            encontradoTexto[i].innerHTML = `Encontrado? ${encontrado%2==0 ? "SIM" : "NÃO"}`;
            dataPerdidoTexto[i].innerHTML = `Data em que sumiu: ${data}`;
            localTexto[i].innerHTML = `Perto do bairro: ${local.bairro}`;
        }
    
        for (let i=0; i<3; i++){
            catApiGet()
            .then(dado => {
                console.log(dado);
                document.querySelectorAll(".imagemGato")[i].src = dado.webpurl;
            })
        }
    })


}

function generateRandomDate(){
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
}
    
