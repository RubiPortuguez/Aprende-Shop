// Importación del JSON
import { products } from "./data.js";

const nombreProducto = document.getElementById('nombreProducto');
const precioProducto = document.getElementById('precioProducto');
const descripcionProducto = document.getElementById('descripcionProducto');
const imgContainer = document.getElementById('imgContainer');
const botones = document.querySelectorAll('.botonHide');
const cardMateriales = document.getElementById('card-materiales');

const params = new URLSearchParams(window.location.search);
const sku = params.get('sku'); // obtiene el sku de la URL 

// JSON del producto 
const producto = products.find(prod => prod.SKU === sku);
// console.log(producto);

if (producto){
    nombreProducto.textContent = producto.name;
    nombreProducto.insertAdjacentHTML('afterend', 
        `<p class="my-0">Calificación: ${stars(producto.rating.rate)}</p>`
    )
    precioProducto.textContent = `$ ${producto.price} MX`
    imgContainer.insertAdjacentHTML('afterbegin', 
        `<img src="${producto.img}" class="imagen-producto imgProducto" alt="${producto.alt}">`
    );
    descripcionProducto.textContent = producto.description;
    cardMateriales.insertAdjacentHTML('afterbegin', 
        `<ul class="list-group list-group-flush">
         ${ (producto.materials || []).map(material => `<li class="list-group-item py-1">${material}</li>`).join('') }
        </ul>
        `);
} else {
    nombreProducto.textContent = `Producto no encontrado`
    botones.forEach( btn => btn.style.display = 'none')
    imgContainer.insertAdjacentHTML('afterbegin', 
        `<img src="./assets/cursos/carritoVacio.png" class="card-img-top imgProducto" alt="Producto no encontrado ">`
    );
};

function stars(rate) {
    let resultado = "";
    let estrella = `<i class="bi bi-star-fill" style="color:#D4AC0D"></i>`;
    let mitad = `<i class="bi bi-star-half" style="color:#D4AC0D"></i>`;
    let vacia = `<i class="bi bi-star" style="color:#D4AC0D" ></i>`;
    let rateEntero = parseInt(rate);

    for (let cont = 1; cont <= rateEntero; cont++) {
        resultado += estrella;
    }
    if (rateEntero < rate) {
        resultado += mitad;
    }

    let cont = Math.ceil(rate);
    while (cont < 5) {
        resultado += vacia;
        cont++
    }
    return resultado;

}; //createStars
