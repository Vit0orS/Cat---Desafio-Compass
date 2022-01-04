<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Lora&family=Titillium+Web:wght@200&display=swap" rel="stylesheet">
</head>

<h1 align="center">

🐱 Cat - Gatos desaparecidos 🐈
</h1>

<div align="center">
    
![Logo](/assets/img/pageIcon.png)
</div>

Website utilizando API <span style="color: orange; font-size: 1.1em">**"catAPI"**</span>, escrito para o Desafio 2 do Programa de Bolsas da *Compass UOL*.<br><br>

**Tecnologias utilizadas:**
* HTML
* CSS
* Javascript
* Bootstrap

<hr>

<h2 align="center">🚀 Idéia</h2>

O síte seria um lugar onde as pessoas poderiam adicionar seus gatos que desapareceram, e então, através da pesquisa, as pessoas poderiam ver que gatos estão desaparecidos perto de onde moram através da pesquisa por CEP, ou pesquisar por algum gato específico pelo seu ID.

<hr>

<h2 align="center">⭐ APIs</h2>

<h3 align="center">🔸 catAPI</h3>

A principal API utilizada foi a *[catAPI](https://github.com/ThatCopy/catAPI)* criada por **ThatCopy**, uma API com a funcionalidade de retornar imagens dos gatos do autor, os dados que ela retorna são o ID, uma imagem em formato .jpg, uma imagem em formato .webpurl e o ponto de foco das imagens. Todas as imagens utilizadas são em formato .webpurl, por serem mais leves.

<h3 align="center">🔸 ViaCEP</h3>

Outra API utilizada foi a do *[ViaCEP](https://viacep.com.br/)*, para a parte de formulário e de pesquisa de gatos por CEP.

<h3 align="center">🔸 API do programa de bolsas</h3>

Por último, como solicitado no desafio, é feita uma requisição POST para a *[API do programa de bolsas](https://prog-bolsas-api.herokuapp.com/)*, ao enviar o formulário da página de adicionar.

<hr>

<h2 align="center">📄 Páginas</h2>

A maioria das estilizações foram feitas utilizando a biblioteca "Bootstrap 5", como por exemplo a navbar presente em todas as páginas.

<h3 align="center">🔹 Index</h3>

Página principal do síte, onde é possível ir para qualquer uma das outras páginas, contém três cards em que, ao clicar em seus botões, leva o 
usuário para a página desejada.

<h3 align="center">🔹 Adicionar</h3>

Página onde seria possível adicionar um gato ao sistema, os campos possuem tratamentos de erro, a maioria também possui expressões regulares. 

O endereço é preenchido automaticamente utilizando a API da ViaCEP após o preenchimento de um CEP válido. 

Ao clicar no botão enviar, é feita uma requisição POST para a API do programa de bolsas, e então o usuário é redirecionado para a página de sucesso ou erro, dependendo se a requisição retornar sucesso.

<h3 align="center">🔹 Pesquisar</h3>

Página em que o usuário é redirecionado caso clique no card de pesquisar da página index, contém dois cards que levam para as páginas de Pesquisa por ID e Pesquisa por CEP.

<h3 align="center">🔹 Pesquisa por ID</h3>

Página em que é possível fazer uma pesquisa por ID, ao preencher o campo e clicar em pesquisar, é feita uma requisição para a API do catAPI passando o ID, onde uma imagem específica é então retornada.

Também são gerados um nome, se foi encontrado ou não e data em que sumiu aleatórios para o card.

Se a requisição retornar Bad Request, ou a API estiver fora do ar, é colocada uma mensagem de erro no card.

<h3 align="center">🔹 Pesquisa por CEP</h3>

Página em que é possível fazer uma pesquisa por CEP, ao preencher o campo de CEP com um CEP válido e clicar em pesquisar, são feitas 3 requisições para a catAPI, em que três imagens aleatórias são retornadas, além disso, também são gerados um nome, se foi encontrado ou não, e data em que sumiu aleatórios.

São então gerados 3 cards, e neles além dos campos acima, também é adicionado um campo de bairro, onde se utiliza o retorno da API da ViaCEP.

Se o CEP for inválido, ou alguma das APIs estiver fora do ar, é mostrada uma mensagem de erro nos três cards.

<h3 align="center">🔹 Sobre</h3>

Página com algumas informações e um carrossel de imagens, onde também são feitas 3 requisições para a catAPI, e as imagens são colocadas no carrossel.

<h3 align="center">🔹 Páginas de erro e de sucesso</h3>

Páginas simples com mensagem de erro ou sucesso. É onde o usuário é redirecionado dependendo da resposta da requisição de enviar o formulário da página adicionar.
<hr>
