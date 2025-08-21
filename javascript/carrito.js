const productosPendientes = document.getElementById("productosPendientes");

function mostrarCarrito() {
    productosPendientes.innerHTML = "";
    const productosCesta = JSON.parse(localStorage.getItem("productos-cesta"));

    if (productosCesta) {

        productosCesta.forEach((producto, index) => {
            const div = document.createElement("div");
            div.classList.add("col", "mt-4", "porductoAgregado");
            div.innerHTML =
                `
        <div class="card">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.alt}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$ ${producto.precio}</p>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto mb-4">
                    <button data-index="${index}" type="button" class="btn btn-outline-success btnEliminar">Eliminar</button>
                </div>
        </div>
        `;
            productosPendientes.appendChild(div);
        });

        const btnEliminar = document.querySelectorAll(".btnEliminar");
        btnEliminar.forEach(quitar => {
            quitar.addEventListener("click", (e) => {
                const index =  parseInt(e.target.dataset.index);
                eliminarProducto(index);
            });
        });

    } else {
        productosPendientes.innerHTML = "<p>El carrito está vacío</p>";
    }
    actualizariconoPA();
    preciosCarrito();
}



function eliminarProducto(index) {
    let productosCesta = JSON.parse(localStorage.getItem("productos-cesta"));
    productosCesta.splice(index, 1);
    localStorage.setItem("productos-cesta", JSON.stringify(productosCesta));
    mostrarCarrito();
    
    const alertaToast = document.getElementById("liveToast");
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(alertaToast)
    toastBootstrap.show()
    preciosCarrito();
}

function actualizariconoPA(){
    const productosCesta = JSON.parse(localStorage.getItem("productos-cesta"));
  if(productosCesta.length > 0){
    iconoPA.classList.remove("visually-hidden");
    iconoPA.textContent = productosCesta.length;
  }else{
    iconoPA.classList.add("visually-hidden");
  }
}

function preciosCarrito(){
    const productosCesta = JSON.parse(localStorage.getItem("productos-cesta"));
    const subtotalCarrito = document.getElementById("subtotalCarrito");
    const descuentosCarrito = document.getElementById("descuentosCarrito");
    let totalCarrito = document.getElementById("totalCarrito");
    let subtotal = 0;

    productosCesta.forEach(producto => subtotal += Number(producto.precio));
    if (subtotalCarrito) subtotalCarrito.textContent = `$${subtotal.toFixed(2)}`;

    let descuentos = 0;
    if (descuentosCarrito) descuentosCarrito.textContent = `$${descuentos.toFixed(2)}`;

    if(totalCarrito) totalCarrito.textContent = `$${(subtotal - descuentos).toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", mostrarCarrito);