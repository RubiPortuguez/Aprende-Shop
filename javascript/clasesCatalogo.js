// Importación del JSON
import { products } from "./data.js";


// Función para agregar un producto al contenedor
function addItem(product) {
    const container = document.getElementById("itemsContainer");
    
    const card = `
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card card-product h-100 shadow-sm clases">
            <img src="${product.mainImage}" class="card-img-top" alt="${product.alt}">
            <button id="corazon"> <i class="bi bi-heart-fill"></i> </button>
            <button id="corazon2"> <i class="bi bi-heart"></i> </button>
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.shortDescription}</p>
            </div>
        </div>
    </div>
    `;
    container.insertAdjacentHTML('beforeend', card);
}


// Redireccionamiento y adición del id
function redirection(card, id){
    card.addEventListener('click', function(event){
        event.preventDefault();
        window.location.href = `./producto.html?id=${id}`;

    }) // click
} // redirection


// Recorrer la lista de productos y agregarlos a la página
products.forEach(product => addItem(product));

const cards = document.querySelectorAll('.card-product');
cards.forEach((card,index) => redirection(card, products[index].idProd));