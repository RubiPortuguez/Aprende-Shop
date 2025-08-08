let header = document.getElementsByTagName("header").item(0);
let footer = document.getElementsByTagName("footer").item(0);

const navBarLoggedIn =        
`
        <nav class="navbar navbar-expand-lg sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="./index.html">Aprende<span id="shop">Shop</span></a>
                <button class="navbar-toggler color-boton-nav" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <br>
                    <form class="d-flex">
                        <div class="input-group border rounded-4 overflow-hidden">
                            <input class="form-control border-0 shadow-none" type="search" placeholder="Buscar"
                                aria-label="Search">
                            <button class="color-boton-nav btn btn-outline-success border-0 shadow-none" type="submit"><i
                                    class="bi bi-search"></i></button>
                        </div>
                    </form>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-end">
                        <li class="nav-item align-self-end">
                            <a class="nav-link active" aria-current="page" href="./clases.html">Clases</a>
                        </li>
                        <li class="nav-item align-self-end">
                            <a class="nav-link active" aria-current="page" href="./materiales.html">Materiales</a>
                        </li>
                        <li class="nav-item align-self-end">
                            <a class="nav-link active" aria-current="page" href="./foro.html">Foro</a>
                        </li>
                        <li class="nav-item align-self-end">
                            <a class="nav-link active" aria-current="page" href="./contacto.html">Contacto</a>
                        </li>
                        <li class="nav-item align-self-end">
                            <a class="nav-link active" id="carrito" aria-current="page" href="./carrito.html">
                                <i class="bi bi-cart d-none d-lg-inline"></i>
                                <span class="d-lg-none"> Carrito</span>
                            </a>
                        </li>
                        <li class="nav-item dropdown align-self-end">
                            <a class="nav-link dropdown-toggle" href="./perfil.html" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <i class="bi bi-person-circle d-none d-lg-inline"></i>
                                <span class="d-lg-none">Mi perfil</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a class="dropdown-item desktop-menu d-none d-md-block" href="./perfil.html">Mi perfil</a>
                                </li>
                                <li><a class="dropdown-item" href="./config.html">Configuración</a></li>
                                <li><a class="dropdown-item" href="./perfil.html">Wishlist</a></li>
                                <li><a class="dropdown-item" href="./iniciarSesion.html">Cerrar sesión</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;

const navBarNotLoggedIn = `  <nav class="navbar navbar-expand-lg sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand d-flex align-content-center" href="./index.html">Aprende<span id="shop">Shop</span></a>
                <button class="navbar-toggler color-boton-nav" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <br>
                    <form class="d-flex">
                        <div class="input-group border rounded-4 overflow-hidden">
                            <input class="form-control border-0 shadow-none" type="search" placeholder="Buscar"
                                aria-label="Search">
                            <button class="btn btn-outline-success border-0 shadow-none color-boton-nav" type="submit"><i
                                    class="bi bi-search"></i></button>
                        </div>
                    </form>
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
`   <div class="container">
        <div class="row">
            <div class="col-md-3 mb-3 d-flex  align-items-end gap-5">
                    <a href="#" target="_blank" rel="noopener noreferrer" data-correo="aprendeshop808@gmail.com"
                        class="copiarCorreo"><i class="fas fa-envelope fa-lg iconos-redes-footer"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank"
                        rel="noopener noreferrer"><i class="fab fa-linkedin fa-lg iconos-redes-footer"></i></a>
                    <a href="https://github.com/RubiPortuguez/Aprende-Shop" target="_blank" rel="noopener noreferrer"><i
                            class="fab fa-github fa-lg iconos-redes-footer"></i></a>


            </div>

            <!-- Repetimos 3 columnas iguales -->
            <div class="col-md-3 mb-3">
                <h2>Cursos</h2>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="./clases.html" class="nav-link p-0 text-muted">Catálogo completo</a></li>
                    <li class="nav-item mb-2"><a href="./materiales.html" class="nav-link p-0 text-muted">Materiales</a></li>
                    <li class="nav-item mb-2"><a href="./foro.html" class="nav-link p-0 text-muted">Foro</a></li>
                </ul>
            </div>

            <div class="col-md-3 mb-3">
                <h2>Usuario</h2>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="./perfil.html" class="nav-link p-0 text-muted">Perfil</a></li>
                    <li class="nav-item mb-2"><a href="./config.html" class="nav-link p-0 text-muted">Configuración de cuenta</a>
                    </li>
                    <li class="nav-item mb-2"><a href="./clases.html" class="nav-link p-0 text-muted">Mis cursos</a></li>
                    <li class="nav-item mb-2"><a href="./perfil.html" class="nav-link p-0 text-muted">Wishlist</a></li>
                    <li class="nav-item mb-2"><a href="./carrito.html" class="nav-link p-0 text-muted">Carrito de compras</a></li>

                </ul>
            </div>

            <div class="col-md-3 mb-3">
                <h2>Más sobre AprendeShop</h2>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="./nosotras.html" class="nav-link p-0 text-muted">Nosotras</a>
                    </li>
                    <li class="nav-item mb-2"><a href="./contacto.html" class="nav-link p-0 text-muted">Contacto</a></li>
                </ul>
            </div>
        </div>

    </div>
`;

document.addEventListener("DOMContentLoaded",function(event){
    event.preventDefault();
    header.insertAdjacentHTML("afterbegin",navBarLoggedIn);
    footer.insertAdjacentHTML("beforeend", footerAprendeShop);
});
