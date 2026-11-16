let enlaceLogout = document.querySelector(".logout");

enlaceLogout.addEventListener("click", function(event) {
    event.preventDefault();

    localStorage.removeItem("emailUsuario");

    saludo.innerText = "";
    menuLogout.style.display = "none";
    menuLogin.style.display = "list-item";
    menuRegistro.style.display = "list-item";
});