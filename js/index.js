function seccion (url, selectorContenedor){
    let contenedor = document.querySelector (selectorContenedor);

    fetch(url)
    .then (function(response) {
        return response.json();
    })

    .then (function(data) {
        let productos = data.products;

        for (let i=0;  i< productos.length; i++ ) {
            contenedor.innerHTML += `
                    <article class="article-index">
                        <img src="${productos[i].thumbnail}" alt="${productos[i].title}">
                        <h3>${productos[i].title}</h3>
                        <p>${productos[i].description}</p>
                        <p>$${productos[i].price}</p>
                        <a href="./product.html?id=${productos[i].id}">Ver detalle</a>
                    </article>
        `;
        }
    })

    .catch(function (error){
        console.log("El error es:" + error); 
    });

}

seccion('https://dummyjson.com/products', '#masVendidos');
seccion('https://dummyjson.com/products', '#gustos');

