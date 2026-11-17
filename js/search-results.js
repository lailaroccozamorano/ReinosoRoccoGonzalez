let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);
let termino = queryStringObj.get ("q");
let spanTermino = document.querySelector ("#terminoBuscado");
let sinresults = document.querySelector ("#sinResultado");
let conresults = document.querySelector ("#resultadosBusqueda");

spanTermino.innerText = termino;

fetch (`https://dummyjson.com/products/search?q=${termino}`)
    .then(function (response) {
        return response.json ();
    })

     .then (function(data) {
        let productos = data.products;

        if (productos.length == null) {
            sinresults.innerText = `No hay resultados para el término: ${termino}`
        } else {

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
