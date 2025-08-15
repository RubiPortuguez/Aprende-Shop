// Importación del JSON
import { products } from "./data.js";

const nombreProducto = document.getElementById('nombreProducto');
const precioProducto = document.getElementById('precioProducto');
const descripcionProducto = document.getElementById('descripcionProducto');
const imgContainer = document.getElementById('imgContainer');
const botones = document.querySelectorAll('.botonHide');
const cardMateriales = document.getElementById('card-materiales');

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id')); // obtiene el sku de la URL 
console.log(id);

// JSON del producto 
const producto = products.find(prod => prod.idProd === id);
console.log(producto);


if (producto){
    nombreProducto.textContent = producto.name;
    nombreProducto.insertAdjacentHTML('afterend', 
        `<p class="my-0">Calificación: ${stars(producto.rating.rate)}</p>`
    )
    precioProducto.textContent = `$ ${producto.price} MX`
    imgContainer.insertAdjacentHTML('afterbegin', 
        `<img src="${producto.mainImage}" class="imagen-producto imgProducto" alt="${producto.alt}">`
    );
    descripcionProducto.textContent = producto.fullDescription;
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

producto.reviews.forEach(review => { addFeedback(review) });


// Función para agregar feedback
function addFeedback(review) {
    const container = document.getElementById("feedbackContainer");
    
    const card = `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${review.user.name}</h5>
                            <p>${stars(review.rating)}</p>
                            <p class="card-text">${review.comment}</p>
                            <p class="card-text"><small class="text-muted">${review.createdAt}</small></p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    `;
    container.insertAdjacentHTML('beforeend', card);
}

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

