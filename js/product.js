let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idProducto = qsObj.get("id");

let imagen = document.querySelector(".imagproducto");
let nombre = document.querySelector(".nombreproducto");
let precio = document.querySelector(".precioproducto");
let marca = document.querySelector(".marcaproducto");
let categoria = document.querySelector(".categoriaproducto");
let descripcion = document.querySelector(".descripcionproducto");
let stock = document.querySelector(".stockproducto");
let tags = document.querySelector(".tagsproducto");
let comentarios = document.querySelector(".comentarios");

let url = `https://dummyjson.com/products/${idProducto}`;

console.log(idProducto);
console.log(url);

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        nombre.innerText = data.title;
        imagen.src = data.thumbnail;
        imagen.alt = data.title;
        precio.innerText = `Precio: $${data.price}`;
        marca.innerText = `Marca: ${data.brand}`;
        descripcion.innerText = data.description;
        stock.innerText = `Stock disponible: ${data.stock} unidades`;
        categoria.innerText = data.category;
        categoria.href = `./category.html?category=${data.category}`;
        console.log(data.tags);
        tags.innerHTML = "";
        for (let i = 0; i < data.tags.length && i < 3; i++) {
            tags.innerHTML += `<li>${data.tags[i]}</li>`;
        }
        console.log(data.reviews);
        comentarios.innerHTML = "";
        for (let i = 0; i < data.reviews.length; i++) {
            comentarios.innerHTML += `
                <article>
                    <p>${data.reviews[i].reviewerName}</p>
                    <p>${data.reviews[i].date}</p>
                    <p>Rating: ${data.reviews[i].rating}</p>
                    <p>${data.reviews[i].comment}</p>
                </article>
            `;
        }
    })
    .catch(function(error) {
        console.log(error);
    });


