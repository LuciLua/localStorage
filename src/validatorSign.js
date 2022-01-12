const email = document.querySelector("#email");
const emailConfirm = document.querySelector("#emailConfirm");

const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");

const submitButton = document.querySelector('#submitButton');

const loginLocal = localStorage;


submitButton.addEventListener('click', e => {
    e.preventDefault();
    validarLogin();
})
  
  function validarLogin(){
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    
    
    if(email.value === loginLocal.getItem('email')  && password.value === loginLocal.getItem('password'))
    {
      window.location.href = "secret.html";
      
    }
    else{
      alert("entre com um login válido")
    }
  }