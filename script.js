const cepInput =  document.querySelector('#cep');
const buscaBtn = document.querySelector('#buscaBTN')
const formCEP = document.querySelector('#formCEP')
const logradouro = document.querySelector('.logradouro')
const bairro = document.querySelector('.bairro')
const cidade = document.querySelector('.cidade')
const estado = document.querySelector('.estado')
const erro = document.querySelector('.erro') 

buscaBtn.addEventListener('click', handlerClick)

function handlerClick(e){
    e.preventDefault();
    const cep = cepInput.value
    buscaCep(cep)
    if (cepInput.value.length != 8){
        alert("O cep tem que ter 8 dígitos")
    }
}

formCEP.addEventListener('submit', submeter)

function submeter(e) {
    e.preventDefault()
    const cep = cepInput.value
    buscaCep(cep)
    if (cepInput.value.length != 8){
        alert("O cep tem que ter 8 dígitos")
    }
}

function buscaCep(cep){
    const ftc = fetch(`https://viacep.com.br/ws/${cep}/json`)

    ftc
    .then(r => r.json() ) 
    .then(body =>{

        if(!body["erro"]){
            logradouro.innerText = body["logradouro"],
            bairro.innerText = body["bairro"],
            cidade.innerText = body["localidade"],
            estado.innerText = body["uf"],
            console.log(body)
        } else if(body["erro"]) {
            alert("Insira um cep válido")
            
        }
    })
}
    




