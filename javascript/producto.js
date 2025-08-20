// Importación del JSON
import { products } from "./data.js";

const nombreProducto = document.getElementById("nombreProducto");
const precioProducto = document.getElementById("precioProducto");
const descripcionProducto = document.getElementById("descripcionProducto");
const imgContainer = document.getElementById("imgContainer");
const botones = document.querySelectorAll(".botonHide");
const cardMateriales = document.getElementById("card-materiales");
const categoriaContainer = document.getElementById("categoriaContainer");
const nivelContainer = document.getElementById("nivelContainer");
const idiomaContainer = document.getElementById("idiomaContainer");
const duracionContainer = document.getElementById("duracionContainer");

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id")); // obtiene el sku de la URL
console.log(id);

// JSON del producto
const producto = products.find((prod) => prod.idProd === id);
console.log(producto);

if (producto) {
  nombreProducto.textContent = producto.name;
  nombreProducto.insertAdjacentHTML(
    "afterend",
    `<p class="my-0">Calificación </p>
        <div id="calificacionUsuarios" class="stars"></div>
        <span id="promedio">0</span>
        <p class="my-0">Dale una calificación a nuestro curso</p>
        <div id="seleccionarCalificacion" class="stars"></div>`
  );
  precioProducto.textContent = `$ ${producto.price} MXN`;
  imgContainer.insertAdjacentHTML(
    "afterbegin",
    `<img src="${producto.mainImage}" class="imagen-producto imgProducto" alt="${producto.alt}">`
  );
  descripcionProducto.textContent = producto.fullDescription;
  cardMateriales.insertAdjacentHTML(
    "afterbegin",
    `<ul class="list-group list-group-flush">
         ${(producto.materials || [])
           .map(
             (material) => `<li class="list-group-item py-1">${material}</li>`
           )
           .join("")}
        </ul>
        `
  );
  categoriaContainer.textContent = `Categoría : ${producto.category}`;
  nivelContainer.textContent = `Dificultad : ${producto.difficulty}`;
  idiomaContainer.textContent = `Idioma : ${producto.languages}`;
  duracionContainer.textContent = `Duración : ${producto.duration.value} ${producto.duration.unit}`;
} else {
  nombreProducto.textContent = `Producto no encontrado`;
  botones.forEach((btn) => (btn.style.display = "none"));
  imgContainer.insertAdjacentHTML(
    "afterbegin",
    `<img src="./assets/cursos/carritoVacio.png" class="card-img-top imgProducto" alt="Producto no encontrado ">`
  );
}

/***** INSERTA EL CARRUSEL DE COMENTARIOS *****/
let comentarios = [];
producto.reviews.forEach((review) => {
    comentarios.push(review);
  });

function agruparComentarios(comentarios,tamanoGrupo) {
  const grupos = [];
  for (let i = 0; i < comentarios.length; i += tamanoGrupo) {
    grupos.push(comentarios.slice(i, i + tamanoGrupo));
  }
  return grupos;
}

function crearCarruselComentarios() {
  let tamanoGrupo = 3;
  const carruselInner = document.getElementById("carousel-inner");
  const gruposComentarios = agruparComentarios(comentarios, tamanoGrupo);

  gruposComentarios.forEach((grupo, index) => {
    const item = document.createElement("div");
    item.className = `carousel-item ${index === 0 ? "active" : ""}`;

    let tarjetasHTML = '<div class="row justify-content-center">';

    grupo.forEach((comentario) => {
      tarjetasHTML += `
                        <div class="col-md-4 mb-4 mb-md-0">
                            <div class="card comment-card h-100 shadow-sm">
                                <div class="card-body text-center p-4">
                                    <img src="" class="avatar-img rounded-circle mb-3" alt="">
                                    <h3 class="card-title">${
                                      comentario.user.name
                                    }</h3>
                                    <p class="text-muted mb-2"></p>
                                    <div class="star-rating mb-3">
                                    ${starsRandom(comentario.rating)}
                                    </div>
                                    <p class="card-text">"${
                                      comentario.comment
                                    }"</p>
                                    <small class="text-muted">${
                                      comentario.createdAt
                                    }</small>
                                </div>
                            </div>
                        </div>
                    `;
    });

    tarjetasHTML += "</div>";
    item.innerHTML = tarjetasHTML;
    carruselInner.appendChild(item);
  });

  // Inicializar carrusel con autoplay
  const myCarousel = new bootstrap.Carousel(
    document.getElementById("commentsCarousel"),
    {
      interval: 5000, // 5 segundos entre transiciones
      wrap: true, // Permite ciclo infinito
      touch: true, // Habilita desplazamiento táctil
    }
  );
}
// Iniciar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", crearCarruselComentarios);

/*****************************/


/***** FUNCIONALIDAD DE LAS ESCTRELLAS *****/
function starsRandom(rate) {
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
    cont++;
  }
  return resultado;
} //createStars

//guardamos calificaciones
let calificaciones = [];
//puntuacion actual (la que ingresa el usuario)
let usuarioCalificacion = 0;

// Crear estrellas
function crearEstrella() {
  const container = document.getElementById("seleccionarCalificacion");
  container.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("span");
    star.classList.add("star");
    star.dataset.value = i;
    star.innerHTML = '★<span class="star-fill" style="width:0%">★</span>';
    //evento de selección
    star.addEventListener("click", (e) => {
      //lugar donde esta la estrellita
      const rect = e.target.getBoundingClientRect();
      //calcula la posicion para saber si es mitad o entero
      const clickX = e.clientX - rect.left;
      // calcula la mitad de la estrellita
      const half = rect.width / 2;
      //todo o media
      usuarioCalificacion = clickX < half ? i - 0.5 : i;
      //lo guarda en el array
      calificaciones.push(usuarioCalificacion);

      //actualiza el promedio
      actualizarPromedio();
      //mantiene la calificicación (relleno)
      actualizarCalificacion(usuarioCalificacion);
    });
    //agregamos al DOM
    container.appendChild(star);
  }
}

// Actualizar relleno de estrellas de selección
function actualizarCalificacion(value) {
  const container = document.getElementById("seleccionarCalificacion");
  //recopila cada estrellita creada
  const stars = container.children;
  //indica cuanto se va a pintar
  for (let i = 0; i < stars.length; i++) {
    const fill = stars[i].querySelector(".star-fill");
    //la seleccion solo esta para la mitad o entero
    if (value >= i + 1) fill.style.width = "100%";
    else if (value >= i + 0.5) fill.style.width = "50%";
    else fill.style.width = "0%";
  }
}

// Actualizar promedio
function actualizarPromedio() {
  //sumamos calificaciones
  const sum = calificaciones.reduce((a, b) => a + b, 0);
  //calculamos el promedio
  const calculaPromedio = sum / calificaciones.length || 0;
  //actualizamos en pantalla
  document.getElementById("promedio").textContent = calculaPromedio.toFixed(1);
  actualizarPromedioEstrella(calculaPromedio);
}

// Actualizar estrellas de promedio (relleno parcial permitido)
function actualizarPromedioEstrella(value) {
  const container = document.getElementById("calificacionUsuarios");
  container.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    let fillPercent = 0;
    if (value >= i) fillPercent = 100;
    else if (value >= i - 1) fillPercent = (value - (i - 1)) * 100; // relleno parcial
    const star = document.createElement("span");
    star.classList.add("star");
    star.innerHTML = `★<span class="star-fill" style="width:${fillPercent}%">★</span>`;
    container.appendChild(star);
  }
}

// Inicializar
crearEstrella();
actualizarPromedioEstrella(0);
