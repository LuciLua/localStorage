const submitButton = document.querySelector('#submitButton');

const loginLocal = localStorage;

const email = document.querySelector("#email");
const emailConfirm = document.querySelector("#emailConfirm");

const buttonSign = document.querySelector("#submitSign");

const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");


buttonSign.addEventListener('click', (e) => {
    e.preventDefault()
    validarDados()
})

function validarDados(){

    let validos = 0

    if(email.value === emailConfirm.value){
        loginLocal.setItem('email', `${email.value}`)
        validos++
    }

    else if(email.value !== emailConfirm.value){
        alert("Emails não correspondem")
    }

    if(password.value === passwordConfirm.value){
        loginLocal.setItem('password', `${password.value}`)
        validos++
    }

    else if(password.value !== passwordConfirm.value){
        alert("Senhas não correspondem")
    }

    if(validos > 1){
        alert("Cadastro realizado com sucesso!")
        window.location.href = "index.html"
    }
}