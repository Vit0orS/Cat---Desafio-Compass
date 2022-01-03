function adicionaListeners(){
    const dado = document.querySelectorAll(`[data-input]`);
    dado.forEach(element => {
        element.addEventListener('focus', removeMensagemErro);
        element.addEventListener('blur', mostraMensagemErro);
    })
    document.querySelector(`[data-type="enviar"]`).addEventListener('click', enviarDados);
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
        if(tipo=="CEP"){
            removeDadosCEP();
        }
        elemento.innerHTML = pegaMensagemErro(tipo);
        input.classList.add("border-danger");
    } else {
        if(tipo=="CEP"){
            preencheCEP();
        }
    }


}

function removeMensagemErro(evento){
    const tipo = evento.currentTarget.dataset.input;
    const elemento = document.querySelector(`[data-mensagemErro="${tipo}"]`);
    const input = document.querySelector(`[data-input="${tipo}"]`)

    elemento.innerHTML = "";
    input.classList.remove("border-danger");
}

function preencheCEP() {
    const CEP = document.querySelector(`[data-input="CEP"]`).value;
    const CEPformatado = CEP.replace('-', '');
    console.log(CEPformatado);
    
    dadosCEP(CEPformatado)
    .then (endereco => {
        if(typeof endereco.uf !== 'undefined'){
            document.querySelector("#inputEstado").value = endereco.uf;
            document.querySelector("#inputCidade").value = endereco.localidade;
            document.querySelector("#inputRua").value = endereco.logradouro;
            document.querySelector("#inputBairro").value = endereco.bairro;
        }
        else {
            document.querySelector(`[data-mensagemErro="CEP"]`).innerHTML = "CEP Inválido.";
            document.querySelector(`[data-input="CEP"]`).classList.add("border-danger");

            removeDadosCEP();
        }
    })
    
}

function removeDadosCEP() {
    document.querySelector("#inputEstado").value = "";
    document.querySelector("#inputCidade").value = "";
    document.querySelector("#inputRua").value = "";
    document.querySelector("#inputBairro").value = "";
}

function enviarDados(evento){
    evento.preventDefault();
    let allValid = true;

    const elementos = document.querySelectorAll('[data-input]');
    
    elementos.forEach(elemento => {
        if (!elemento.validity.valid){
            console.log(elemento + elemento.validity.valid);
            allValid = false;
        }
    })

    if(allValid){
        sendData();
    }
}