// Lista de 10 cursos
const products = [
    {
        name: "Velas",
        img: "./assets/cursos/candles.jpeg",
        description: "Descubre el arte de fabricar velas hechas a mano, aprendiendo sobre tipos de cera, moldes, fragancias y decoración. Perfecto para quienes quieren crear productos únicos para uso personal o para iniciar un negocio artesanal."
    },
    {
        name: "Pintura",
        img: "./assets/cursos/paint.jpeg",
        description: "Aprende técnicas básicas y avanzadas de pintura, desde el manejo del color y las texturas hasta la creación de obras originales. Ideal para quienes desean explorar su creatividad y desarrollar habilidades artísticas en diferentes estilos y materiales."
    },
    {
        name: "Crochet",
        img: "./assets/cursos/crochet.jpeg",
        description: "Conoce las técnicas para diseñar y elaborar accesorios personalizados utilizando diversos materiales.Ideal para quienes disfrutan crear detalles únicos para complementar su estilo o regalar."
    },
    {
        name: "Repostería Creativa",
        img: "./assets/cursos/reposteria.jpg",
        description: "Domina la elaboración de pasteles, cupcakes y postres decorados con técnicas modernas. Aprende desde las recetas básicas hasta el uso de fondant, glasé y técnicas de decoración para crear piezas irresistibles."
    },
    {
        name: "Cerámica",
        img: "./assets/cursos/ceramica.jpg",
        description: "Explora el modelado, esmaltado y cocción de piezas de cerámica. Aprende a crear objetos funcionales y decorativos, combinando tradición y creatividad en cada diseño."
    },
    {
        name: "Joyería Artesanal",
        img: "./assets/cursos/joyeria.jpg",
        description: "Aprende a diseñar y fabricar piezas únicas de joyería con metales, piedras y otros materiales. Ideal para emprendedores o amantes de los accesorios exclusivos."
    },
    {
        name: "Fotografía Digital",
        img: "./assets/cursos/fotografia.jpg",
        description: "Domina el uso de tu cámara y las técnicas de composición, iluminación y edición. Perfecto para capturar momentos únicos o iniciar un portafolio profesional."
    },
    {
        name: "Bordado Moderno",
        img: "./assets/cursos/bordado.jpg",
        description: "Conoce puntos, combinaciones de colores y técnicas creativas para bordar en prendas, accesorios o cuadros decorativos. Ideal para personalizar y dar vida a tus proyectos textiles."
    },
    {
        name: "Macramé",
        img: "./assets/cursos/macrame.jpg",
        description: "Aprende nudos y patrones para crear tapices, colgadores de plantas, bolsos y accesorios decorativos con un estilo moderno y bohemio."
    },
    {
        name: "Costura Básica",
        img: "./assets/cursos/costura.jpg",
        description: "Descubre cómo usar la máquina de coser, tomar medidas y confeccionar prendas sencillas. Perfecto para quienes desean reparar, personalizar o crear su propia ropa."
    }
];

// Función para agregar un producto al contenedor
function addItem(product) {
    const container = document.getElementById("itemsContainer");

    const card = `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100 shadow-sm">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                </div>
            </div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', card);
}

// Recorrer la lista de productos y agregarlos a la página
products.forEach(product => addItem(product));