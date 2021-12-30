function carregaCarrossel(){
    const carrossel = document.getElementsByClassName("fotoCarrossel");
    for(let i=0; i<carrossel.length; i++){
        catApiGet()
        .then(resposta =>{
            carrossel[i].src = resposta.webpurl;
    }) 
    }
}