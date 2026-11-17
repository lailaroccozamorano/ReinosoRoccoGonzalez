window.addEventListener("load", function () {
     let listaCategorias= document.querySelector (".categorias"); 
     let tituloCategoria= document.querySelector(".section-category h1");
     let contenedorProductos= document.querySelector (".section-category div");

     let queryString= location.search;
     let queryStringObj= new URLSearchParams(queryString);
     let categoriaSeleccionada= queryStringObj.get("category");

     fetch("https://dummyjson.com/products/category-list")
     .then (function (response) {
        return response.json()
     })
     .then (function(data) {
        listaCategorias.innerHTML= "";
         for (let i = 0; i < data.length; i++) {
           listaCategorias.innerHTML += `
                <li>
                    <a href="./category.html?category=${data[i]}">${data[i]}</a>
                </li>
            `;
         } 
     })
     .catch (function (error) {
        console.log("el error es:" + error);
        
     })
    if (categoriaSeleccionada){
        tituloCategoria.innerHTML= categoriaSeleccionada;
         let url= `https://dummyjson.com/products/category/${categoriaSeleccionada}`;

         fetch (url)
         .then (function (response) {
            return response.json();
         })
         .then (function (data) {
            let productos= data.products;
            contenedorProductos.innerHTML="";

            for (let i = 0; i < productos.length; i++) {
                contenedorProductos.innerHTML+= `
                <article class="article-category">
                        <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                        <h3>${productos[i].title}</h3>
                        <p>${productos[i].brand}</p>
                        <p>$${productos[i].price}</p>
                        <a href="./product.html?id=${productos[i].id}">Ver detalles</a>
                    </article>
                `;
            }
         })
         .catch(function (error) {
        console.log("El error es:" + error);
    });
    }
});