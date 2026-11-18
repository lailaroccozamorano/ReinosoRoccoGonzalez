let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);
let termino = queryStringObj.get ("q");
let titulo = document.querySelector ("#tituloBusqueda")
let sinresults = document.querySelector ("#sinResultados");
let conresults = document.querySelector ("#resultadosBusqueda");

if (termino == "") {
    titulo.innerText = "";
    sinresults.innerText = "No hay resultados para el término ingresado.";
} else {

fetch (`https://dummyjson.com/products/search?q=${termino}`)
    .then(function (response) {
        return response.json ();
    })

     .then (function(data) {
        let productos = data.products;

        if (productos.length === 0) {
            sinresults.innerText = `No hay resultados para el término: ${termino}`
        } else {
            titulo.innerText = `Resultados de tu búsqueda: ${termino}`

            for (let i=0;  i< productos.length; i++ ) {
                 conresults.innerHTML += `
                    <article class="article-search">
                        <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                        <h3>${productos[i].title}</h3>
                        <p>${productos[i].description}</p>
                        <p>$${productos[i].price}</p>
                        <a href="./product.html?id=${productos[i].id}">Ver detalle</a>
                    </article>
                `;
            }
            
        }
    })

    .catch(function (error){
       console.log("El error es:" + error); 
    });
}