let formulario = document.querySelector(".formulariologin");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let errorEmail = document.querySelector(".error-email");
let errorPassword = document.querySelector(".error-password");


formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    errorEmail.innerText = "";
    if (email.value == "") {
        errorEmail.innerText = "El email es obligatorio";
    }

    errorPassword.innerText = "";
    if (password.value == "") {
        errorPassword.innerText = "La contraseña es obligatoria";
    } else if (password.value.length < 6) {
        errorPassword.innerText = "La contraseña debe tener al menos 6 caracteres";
    }

    if (email.value != "" && password.value.length >= 6) {
        localStorage.setItem("emailUsuario", email.value);
        location.href = "./index.html";
    }
});


