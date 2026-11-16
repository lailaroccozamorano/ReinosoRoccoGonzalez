let emailUsuario = localStorage.getItem("emailUsuario");
let saludo = document.querySelector(".saludo-usuario");
let menuLogin = document.querySelector(".menu-login");
let menuRegistro = document.querySelector(".menu-registro");
let menuLogout = document.querySelector(".menu-logout");
menuLogout.style.display = "none";
if (emailUsuario) {
    saludo.innerText = `Bienvenido: ${emailUsuario}`;
    menuLogin.style.display = "none";
    menuRegistro.style.display = "none";
    menuLogout.style.display = "list-item";
}