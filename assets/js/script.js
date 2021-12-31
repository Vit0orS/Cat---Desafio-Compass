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
    "Garfield",
    "Kiki",
    "Zoey"
]

function gatoPorID(){
    document.querySelector(".imagemGato").src = "../assets/img/loading-buffering.gif"

    const data = new generateRandomDate().toLocaleDateString('pt-BR');

    const id = document.querySelector("#inputID").value;

    const encontrado = Math.floor(Math.random() * (10 - 1)) + 1;

    const nomeDoGato = nomes[Math.floor(Math.random() * nomes.length)];

    document.querySelector(".nomeGato").innerHTML = `Nome: ${nomeDoGato}`;
    document.querySelector(".encontrado").innerHTML = `Encontrado? ${encontrado%2==0 ? "SIM" : "NÃO"}`;
    document.querySelector(".dataPerdido").innerHTML = `Data em que sumiu: ${data}`;

    catApiGetID(id)
    .then(dado => {
        console.log(dado);
        document.querySelector(".imagemGato").src = dado.webpurl;
    })
}

function gatoPorCEP(){
    const imagemSrc = document.querySelectorAll(".imagemGato");
    const nomeTexto = document.querySelectorAll(".nomeGato");
    const encontradoTexto = document.querySelectorAll(".encontrado");
    const dataPerdidoTexto = document.querySelectorAll(".dataPerdido");
    
    for (let i=0; i<3; i++){
        imagemSrc[i].src = "../assets/img/loading-buffering.gif"
        const data = new generateRandomDate().toLocaleDateString('pt-BR');
        const encontrado = Math.floor(Math.random() * (10 - 1)) + 1;
        const nomeDoGato = nomes[Math.floor(Math.random() * nomes.length)];
        nomeTexto[i].innerHTML = `Nome: ${nomeDoGato}`;
        encontradoTexto[i].innerHTML = `Encontrado? ${encontrado%2==0 ? "SIM" : "NÃO"}`;
        dataPerdidoTexto[i].innerHTML = `Data em que sumiu: ${data}`;
    }

    for (let i=0; i<3; i++){
        catApiGet()
        .then(dado => {
            console.log(dado);
            document.querySelectorAll(".imagemGato")[i].src = dado.webpurl;
        })
    }
}

function generateRandomDate(){
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
}
    
