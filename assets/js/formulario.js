function adicionaListeners(){
    const dado = document.querySelectorAll(`[data-input]`);
    dado.forEach(element => {
        element.addEventListener('focus', removeMensagemErro);
        element.addEventListener('blur', mostraMensagemErro);
    })
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch'
]

const mensagensErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio'
    },
    email: {
        valueMissing: 'O campo email não pode estar vazio',
        typeMismatch: 'O email digitado não é valido',
        patternMismatch: 'O email digitado não é valido'
    },
    telefone: {
        valueMissing: 'O campo telefone não pode estar vazio',
        typeMismatch: 'O telefone digitado não é valido',
        patternMismatch: 'O telefone digitado não é valido'
    },
    CEP: {
        valueMissing: 'O campo CEP não pode estar vazio',
        typeMismatch: 'O CEP digitado não é valido',
        patternMismatch: 'O CEP digitado não é valido'
    },
    nomeGato: {
        valueMissing: 'O campo nome do gato não pode estar vazio'
    },
    raca: {
        valueMissing: 'O campo raça não pode estar vazio'
    }
}

function pegaMensagemErro(tipo){
    const elemento = document.querySelector(`[data-input="${tipo}"]`);

    let mensagem = '';

    tiposDeErro.forEach(erro => {
        if(elemento.validity[erro]){
            console.log(erro);
            mensagem = mensagensErro[tipo][erro];
        }
    })

    return mensagem;
}

function mostraMensagemErro(evento){
    const tipo = evento.currentTarget.dataset.input;
    const elemento = document.querySelector(`[data-mensagemErro="${tipo}"]`);
    const input = document.querySelector(`[data-input="${tipo}"]`)

    if(!evento.currentTarget.validity.valid){
        elemento.innerHTML = pegaMensagemErro(tipo);
        input.classList.add("border-danger");
    }


}

function removeMensagemErro(evento){
    const tipo = evento.currentTarget.dataset.input;
    const elemento = document.querySelector(`[data-mensagemErro="${tipo}"]`);
    const input = document.querySelector(`[data-input="${tipo}"]`)

    elemento.innerHTML = "";
    input.classList.remove("border-danger");
}

function enviarDados(){
    event.preventDefault;
    
    
}