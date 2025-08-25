// Importación del JSON
import { products } from "./data.js";


// Función para agregar un producto al contenedor
function addItem(product) {
    const container = document.getElementById("itemsContainer");
    
const card = `
<div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card card-product h-100 shadow-sm clases">
        <img src="${product.mainImage}" class="card-img-top" alt="${product.alt}">
        
        <button class="btn btn-light btn-sm rounded-circle position-absolute top-0 start-0 m-2 btn-wishlist"
        data-id="${product.idProd}"> <i class="bi bi-heart"></i> </button>
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.shortDescription}</p>
            <div class="mt-3 pt-2">
                ${product.includesKit ?
                    `<div class="d-flex justify-content-between align-items-start mb-2">
                        <div class="d-flex flex-column">
                            <span class="h6 text-morado fw-bold">$ ${product.priceWithKit} MXN</span>
                            <small class="text-verde">Incluye kit de materiales</small>
                        </div>
                        <span class="badge bg-morado text-white"><i class="bi bi-box-seam"></i> Kit</span>
                    </div>
                    <div class="text-start">
                        <small class="text-muted">$ ${product.price} MXN sin kit</small>
                    </div>` :
                    `<div class="d-flex justify-content-between align-items-center">
                        <span class="h5 text-verde fw-bold">$ ${product.price} MXN</span>
                    </div>`
                }
            </div>
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

//traer wishlist de local storage, si no existe trae arreglo vacío
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


// --- Función para agregar/quitar un curso de la wishlist ---
export function ponerQuitarWishlist(id, button) {
  // Si ya existe el producto en wishlist
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(prodId => prodId !== id); // lo quitamos
    button.querySelector("i").classList.replace("bi-heart-fill", "bi-heart"); // cambia icono a vacío
  } else {
    wishlist.push(id); // lo agregamos
    button.querySelector("i").classList.replace("bi-heart", "bi-heart-fill"); // cambia icono a lleno
  }//if-else
  // Guardar cambios en localStorage
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}//fn t


//-----Función para asignar orejitas a los botones wishlist-----
export function orejasWishlistButtons() {
    let btnsWishlist = document.querySelectorAll('.btn-wishlist');

  btnsWishlist.forEach(btn => {
    const id = Number(btn.dataset.id); //leer data-id de cada botón<3
    // Si el producto ya está en wishlist, que muestre el icono lleno
    if (wishlist.includes(id)) {
      btn.querySelector("i").classList.replace("bi-heart", "bi-heart-fill");
    }//if

    // Evento click en cada botón
    btn.addEventListener('click', (e) => {
      e.preventDefault(); 
      e.stopPropagation();  // evita que se dispare redirección de la card
      ponerQuitarWishlist(id, btn);
    }); //oreja
  }); //foreach
}//fn orejasWishlistButtons

// --- Ejecutar ---
orejasWishlistButtons();
