// Detecta si estamos en perfil.html para usar anchors locales
const isPerfil = /(^|\/)perfil\.html(\?|#|$)/.test(location.pathname);

const hrefPerfil = isPerfil ? '#perfil' : './perfil.html#perfil';
const hrefConfig = isPerfil ? '#configuracion' : './perfil.html#configuracion';
const hrefWishlist = isPerfil ? '#wishlist' : './perfil.html#wishlist';

const navBarLoggedIn = `
  <nav id="perfilMenu" class="navbar navbar-expand-lg sticky-top">
            <div class="container-fluid align-items-center">
                <a class="navbar-brand" href="./index.html">Aprende<span id="shop">Shop</span></a>
                <button class="navbar-toggler color-boton-nav" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                   
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-end">
                        <li class="nav-item ">
                            <a class="nav-link active" aria-current="page" href="./clases.html">Clases</a>
                         </li>
                         
                        <li class="nav-item ">
                            <a class="nav-link active" aria-current="page" href="./foro.html">Foro</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link active" aria-current="page" href="./contacto.html">Contacto</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link active" id="carrito" aria-current="page" href="./carrito.html">
                                <i class="bi bi-cart d-none d-lg-inline"></i>
                                <span class="d-lg-none"> Carrito</span>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href=" href="${hrefPerfil}" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-person-circle d-none d-lg-inline"></i>
                            <span class="d-lg-none">Mi perfil</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item desktop-menu d-none d-md-block" href="${hrefPerfil}">Mi perfil</a></li>
                            <li><a class="dropdown-item" href="${hrefConfig}">Configuración</a></li>
                            <li><a class="dropdown-item" href="${hrefWishlist}">Wishlist</a></li>
                            <li><a class="dropdown-item" href="./iniciarSesion.html">Cerrar sesión</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;

const navBarNotLoggedIn = `  <nav class="navbar navbar-expand-lg sticky-top">
            <div class="container-fluid align-items-center">
                <a class="navbar-brand d-flex align-content-center" href="./index.html">Aprende<span id="shop">Shop</span></a>
                <button class="navbar-toggler color-boton-nav" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <br>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
                        <li class="nav-item align-self-end">
                            <a class="nav-link active" aria-current="page" href="./clases.html">Clases</a>
                        </li>
                        <li class="nav-item align-self-end">
                            <a class="nav-link active" aria-current="page" href="./materiales.html">Materiales</a>
                        </li>
                        <li class="nav-item align-self-end">
                            <a class="nav-link active" aria-current="page" href="./contacto.html">Contacto</a>
                        </li>
                    </ul>

                    <div class="d-flex flex-column flex-lg-row gap-2">
                        <button class="color-boton-nav btn btn-outline-success align-self-end rounded-4" type="button">Iniciar
                            Sesión</button>
                        <button class="btn btn-outline-success align-self-end rounded-4"
                            type="button">Registrarse</button>
                    </div>

                </div>
            </div>
        </nav>`;

const footerAprendeShop =
    `<footer class="py-4 border-top"> 
<div class="container">
        <div class="row">
            <div class="col-md-3 mb-2"></div>

            <div class="col-md-3 mb-1">
                <h2 id="titulo-istok-footter">Cursos</h2>
                <ul class="nav flex-column">
                    <li class="nav-item"><a href="./clases.html" class="nav-link p-0 text-muted">Catálogo completo</a></li>
                    <li class="nav-item"><a href="./foro.html" class="nav-link p-0 text-muted">Foro</a></li>
                </ul>
            </div>

            <div class="col-md-3 mb-1">
                <h2 id="titulo-istok-footter">Usuario</h2>
                <ul class="nav flex-column">
                    <li class="nav-item"><a href="${hrefPerfil}" class="nav-link p-0 text-muted">Perfil</a></li>
                    <li class="nav-item"><a href="${hrefConfig}" class="nav-link p-0 text-muted">Configuración de cuenta</a></li>
                    <li class="nav-item"><a href="./clases.html" class="nav-link p-0 text-muted">Mis cursos</a></li>
                    <li class="nav-item"><a href="./perfil.html" class="nav-link p-0 text-muted">Wishlist</a></li>
                    <li class="nav-item"><a href="./carrito.html" class="nav-link p-0 text-muted">Carrito de compras</a></li>

                </ul>
            </div>

            <div class="col-md-3 mb-1">
                <h2 id="titulo-istok-footter">Más sobre AprendeShop</h2>
                <ul class="nav flex-column">
                    <li class="nav-item"><a href="./nosotras.html" class="nav-link p-0 text-muted">Nosotras</a>
                    </li>
                    <li class="nav-item"><a href="./contacto.html" class="nav-link p-0 text-muted">Contacto</a></li>
                </ul>
            </div>
        </div>

        <!-- línea + copyright + iconos abajo -->
        <div class="d-flex justify-content-between align-items-center pt-3 mt-2">
            <small class="text-muted">© 2025 AprendeShop</small>
            <div class="d-flex gap-4">
                <a href="#" target="_blank" rel="noopener noreferrer" data-correo="aprendeshop808@gmail.com"
                    class="copiarCorreoFooter"><i class="fas fa-envelope fa-lg iconos-redes-footer"></i></a>
                <a href="https://www.linkedin.com/" target="_blank"
                    rel="noopener noreferrer"><i class="fab fa-linkedin fa-lg iconos-redes-footer"></i></a>
                <a href="https://github.com/RubiPortuguez/Aprende-Shop" target="_blank" rel="noopener noreferrer"><i
                        class="fab fa-github fa-lg iconos-redes-footer"></i></a>
            </div>
        </div>

    </div>
    </footer>`; 

document.addEventListener("DOMContentLoaded", function() {
    document.body.insertAdjacentHTML("afterbegin", navBarLoggedIn);
    document.body.insertAdjacentHTML("beforeend", footerAprendeShop);
  
    // Activa ScrollSpy solo en perfil.html
    if (isPerfil && window.bootstrap) {
      // Atributos útiles para ScrollSpy
      document.body.setAttribute('data-bs-spy', 'scroll');
      document.body.setAttribute('data-bs-target', '#perfilMenu');
      document.body.setAttribute('data-bs-offset', '80');
      document.body.setAttribute('tabindex', '0');
  
      // Inicialización programática (opcional pero recomendable al inyectar HTML)
      new bootstrap.ScrollSpy(document.body, {
        target: '#perfilMenu',
        offset: 80
      });
    }
  });  

document.body.addEventListener('click', function (event) {
    if (event.target.closest('.copiarCorreoFooter')) { //Detecta el elemento donde se origino el clic
        event.preventDefault();
        const elemento = event.target.closest('.copiarCorreoFooter');
        const correo = elemento.dataset.correo; //Obtiene el valor de data-correo

        navigator.clipboard.writeText(correo).then(() => { //Metodo que copia el correo al portapapeles a traves de la API Clipboard (del navegador)
            Swal.fire({
                title: `Correo ${correo} copiado al portapapeles`,
                icon: "success",
                draggable: true,
                // Personalización de botones
                buttonsStyling: true, // Mantener estilos base de SweetAlert2
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#985EFF",
                cancelButtonColor: "#d33",
                // Personalización de fuentes
                customClass: {
                    title: "mi-titulo", // Clase para el título
                    content: "mi-contenido", // Clase para el contenido
                    confirmButton: "mi-boton", // Clase para el botón confirmar
                },
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  
    // Marca los links del navbar principal
    document.querySelectorAll('.navbar a.nav-link[href]').forEach(a => {
      const page = a.getAttribute('href').split('/').pop().toLowerCase();
      if (page && page === current) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      } else {
        a.classList.remove('active');
        a.removeAttribute('aria-current');
      }
    });
  
    // (Opcional) Marca dentro del dropdown si estás en perfil/config/etc.
    document.querySelectorAll('.navbar .dropdown-menu a.dropdown-item[href]').forEach(a => {
      const page = a.getAttribute('href').split('/').pop().toLowerCase();
      if (page && page === current) a.classList.add('active');
      else a.classList.remove('active');
    });
  });
  