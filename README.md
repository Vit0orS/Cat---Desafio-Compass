<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Lora&family=Titillium+Web:wght@200&display=swap" rel="stylesheet">
</head>
<div style="background: #251e3e; padding: 20px; color: #FFFFFF; font-family: 'Titillium Web', sans-serif; font-size: 17px;">
<h1 style="text-align: center; font-size: 4em; font-family: 'Lora', serif;">
    <p style="text-shadow: 3px 3px #000000">Cat - Gatos desaparecidos</p>
    <img src="assets/img/pageIcon.png">
</h1>

Website utilizando API <span style="color: orange; font-size: 1.1em">**"catAPI"**</span>, escrito para o Desafio 2 do Programa de Bolsas da *Compass UOL*.<br><br>

**Tecnologias utilizadas:**
* HTML
* CSS
* Javascript
* Bootstrap

<hr style="margin-top: 50px;">

<h2 style="font-size: 2.5em; color: #eb6841; text-align: center; margin-top: 40px; font-family: 'Comfortaa', cursive;">Idéia</h2>

O síte seria um lugar onde as pessoas poderiam adicionar seus gatos que desapareceram, e então, através da pesquisa, as pessoas poderiam ver que gatos estão desaparecidos perto de onde moram através da pesquisa por CEP, ou pesquisar por algum gato específico pelo seu ID.

<hr style="margin-top: 50px;">

<h2 style="font-size: 2.5em; color: #eb6841; text-align: center; margin-top: 40px; font-family: 'Comfortaa', cursive;">APIs</h2>

<h3 style="font-size: 1.4em; color: #ff8b94; text-align: center; margin-top: 40px; font-family: 'Comfortaa', cursive;" >catAPI</h3>

A principal API utilizada foi a *[catAPI](https://github.com/ThatCopy/catAPI)* criada por **ThatCopy**, uma API com a funcionalidade de retornar imagens dos gatos do autor, os dados que ela retorna são o ID, uma imagem em formato .jpg e uma imagem em formato .webpurl e o ponto de foco das imagens. Todas as imagens utilizadas são em formato .webpurl, por serem mais leves.

<h3 style="font-size: 1.4em; color: #ff8b94; text-align: center; margin-top: 40px; font-family: 'Comfortaa', cursive;" >ViaCEP</h3>

Outra API utilizada foi a do *[ViaCEP](https://viacep.com.br/)*, para a parte de formulário e de pesquisa de gatos por CEP.

<h3 style="font-size: 1.4em; color: #ff8b94; text-align: center; margin-top: 40px; font-family: 'Comfortaa', cursive;" >API do programa de bolsas</h3>

Por último, como solicitado no desafio, é feita uma requisição POST para a *[API do programa de bolsas](https://prog-bolsas-api.herokuapp.com/)*, ao enviar o formulário da página de adicionar.

<hr style="margin-top: 50px;">

<h2 style="font-size: 2.5em; color: #eb6841; text-align: center; margin-top: 40px; font-family: 'Comfortaa', cursive;">Páginas</h2>

A maioria das estilizações foram feitas utilizando a biblioteca "Bootstrap 5", como por exemplo a navbar presente em todas as páginas.

<h3 style="font-size: 1.4em; color: #ff8b94; text-align: center; margin-top: 40px; font-family: 'Comfortaa', cursive;" >Index</h3>

Página principal do síte, onde é possível ir para qualquer uma das outras páginas, contém três cards em que, ao clicar em seus botões, leva o 
usuário para a página desejada.

<h3 style="font-size: 1.4em; color: #ff8b94; text-align: center; margin-top: 40px; font-family: 'Comfortaa', cursive;" >Adicionar</h3>

Página onde seria possível adicionar um gato ao sistema, os campos possuem tratamentos de erro, a maioria também possuí regex. 

O endereço é preenchido automaticamente utilizando a API da ViaCEP após o preenchimento de um CEP válido. 

Ao clicar no botão enviar, é feita uma requisição POST para a API do programa de bolsas, e então o usuário é redirecionado para a página de sucesso ou erro, dependendo se a requisição retornar sucesso.

<h3 style="font-size: 1.4em; color: #ff8b94; text-align: center; margin-top: 40px; font-family: 'Comfortaa', cursive;" >Pesquisar</h3>

Página em que o usuário é redirecionado caso clique no card de pesquisar da página index, contém dois cards que levam para as páginas de Pesquisa por ID e Pesquisa por CEP.

<h3 style="font-size: 1.4em; color: #ff8b94; text-align: center; margin-top: 40px; font-family: 'Comfortaa', cursive;" >Pesquisa por ID</h3>

Página em que é possível fazer uma pesquisa por ID, ao preencher o campo e clicar em pesquisar, é feita uma requisição para a API do catAPI passando o ID, onde uma imagem específica é então retornada.

Também são gerados um nome, se foi encontrado ou não e data em que sumiu aleatórios para o card.

Se a requisição retornar Bad Request, ou a API estiver fora do ar, é colocada uma mensagem de erro no card.

<h3 style="font-size: 1.4em; color: #ff8b94; text-align: center; margin-top: 40px; font-family: 'Comfortaa', cursive;" >Pesquisa por CEP</h3>

Página em que é possível fazer uma pesquisa por CEP, ao preencher o campo de CEP com um CEP válido e clicar em pesquisar, são feitas 3 requisições para a catAPI, em que três imagens aleatórias são retornadas, além disso, também são gerados um nome, se foi encontrado ou não, e data em que sumiu aleatórios.

São então gerados 3 cards, e neles além dos campos acima, também é adicionado um campo de bairro, onde se utiliza o retorno da API da ViaCEP.

Se o CEP for inválido, ou alguma das APIs estiver fora do ar, é mostrada uma mensagem de erro nos três cards.

<h3 style="font-size: 1.4em; color: #ff8b94; text-align: center; margin-top: 40px; font-family: 'Comfortaa', cursive;" >Sobre</h3>

Página com algumas informações e um carrossel de imagens, onde também são feitas 3 requisições para a catAPI, e as imagens são colocadas no carrossel.

<h3 style="font-size: 1.4em; color: #ff8b94; text-align: center; margin-top: 40px; font-family: 'Comfortaa', cursive;" >Páginas de erro e de sucesso</h3>

Páginas simples com mensagem de erro ou sucesso. É onde o usuário é redirecionado dependendo da resposta da requisição de enviar o formulário da página adicionar.
<hr style="margin-top: 50px;">
</div>