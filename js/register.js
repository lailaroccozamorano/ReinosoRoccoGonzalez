let formulario = document.querySelector(".formularioregistro");

console.log(formulario);

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let repetirPassword = document.querySelector("#repeat");

console.log(email, password, repetirPassword);

let errorEmail = document.querySelector(".error-email");
let errorPassword = document.querySelector(".error-password");
let errorRepeat = document.querySelector(".error-repeat");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    errorEmail.innerText = "";
    if (email.value == "") {
        errorEmail.innerText = "El email es obligatorio";
    }

    errorPassword.innerText = "";
    if (password.value == "") {
        errorPassword.innerText = "La contraseña es obligatoria";
    }
    else if (password.value.length < 6) {
        errorPassword.innerText = "La contraseña debe tener al menos 6 caracteres";
    }

    errorRepeat.innerText = "";
    if (password.value != repetirPassword.value) {
        errorRepeat.innerText = "Las contraseñas no coinciden";
    }

    if (
        email.value != "" &&
        password.value.length >= 6 &&
        password.value == repetirPassword.value
    ) {
        location.href = "./login.html";
    }
});


