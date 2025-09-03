// Función para generar foto aleatoria
function getRandomUserPhoto() {
    const numeroAleatorio = Math.floor(Math.random() * 99) + 1;
    const genero = Math.random() > 0.5 ? 'men' : 'women';
    return `https://randomuser.me/api/portraits/${genero}/${numeroAleatorio}.jpg`;
}

// Lista de 10 cursos (misma estructura + reviews)
let cont = 0;
export const products = [
  {
    idProd: 1,
    name: "Velas artesanales",
    shortDescription: "Crea velas únicas con cera de soya/abeja, fragancias y moldes.",
    fullDescription: "Descubre el arte de fabricar velas a mano: tipos de cera, pabilos, temperaturas de vertido, pruebas de quemado y decoración. Ideal para hobby o emprendimiento.",
    category: "Artesanías",
    difficulty: "Intermedio",
    duration: { value: 5, unit: "horas" },
    resolution: "1080p",
    languages: ["Español", "Inglés"],
    materials: ["Cera de soya", "Cera de abeja", "Moldes de silicona", "Pabilos", "Fragancias", "Colorantes"],
    includesKit: true,
    kitDescription: "Cera de soya, 2 moldes, pabilos, 2 fragancias, colorante básico.",
    price: 87,
    priceWithKit: 120,
    discount: 10,
    rating: { rate: 4.3, count: 215 },
    mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199911/candles_jrg8zo.jpg",
    additionalImages: [
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199911/candles_detail1.jpg",
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199911/candles_detail2.jpg"
    ],
    reviews: [
      {
        id: "RVW-VE-A01",
        user: { id: "USR-1A", name: "Ana Pérez", country: "MX", verified: true, photo: getRandomUserPhoto() },
        rating: 5,
        title: "Resultados desde la primera tanda",
        comment: "La guía de temperaturas de vertido evita túneles y frosting. ¡Huelen delicioso!",
        createdAt: "2025-07-21",
        verifiedPurchase: true
      },
      {
        id: "RVW-VE-A02",
        user: { id: "USR-1B", name: "Luis Martínez", country: "MX", verified: true, photo: getRandomUserPhoto() },
        rating: 4,
        title: "Buen curso para emprender",
        comment: "Me ayudó a costear y presentar mis velas para Instagram.",
        createdAt: "2025-08-03",
        verifiedPurchase: true
      }
    ]
  },
  {
    idProd: 2,
    name: "Pintura creativa",
    shortDescription: "Color, texturas y composición para obras originales.",
    fullDescription: "De teoría del color a técnicas mixtas: acrílico, veladuras, composición, perspectiva y práctica guiada para construir portafolio.",
    category: "Arte",
    difficulty: "Principiante",
    duration: { value: 7, unit: "horas" },
    resolution: "1080p",
    languages: ["Español"],
    materials: ["Pinceles variados", "Lienzo", "Pinturas acrílicas", "Paleta de mezclas", "Caballetes", "Barniz protector"],
    includesKit: false,
    kitDescription: null,
    price: 124,
    priceWithKit: 164,
    discount: 0,
    rating: { rate: 3.8, count: 142 },
    mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755200187/paint_tlowmd.jpg",
    additionalImages: [
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755200187/paint_detail1.jpg",
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755200187/paint_detail2.jpg"
    ],
    reviews: [
      {
        id: "RVW-PI-A01",
        user: { id: "USR-2A", name: "Carolina Mendoza", country: "MX", verified: true, photo: getRandomUserPhoto() },
        rating: 4,
        title: "Teoría del color clara",
        comment: "Las armonías y paletas limitadas me cambiaron el juego.",
        createdAt: "2025-05-24",
        verifiedPurchase: true
      },
      {
        id: "RVW-PI-A02",
        user: { id: "USR-2B", name: "Rodrigo Salinas", country: "CL", verified: false, photo: getRandomUserPhoto() },
        rating: 3,
        title: "Más foco en óleo",
        comment: "Excelente en acrílico; ojalá más demos con óleo.",
        createdAt: "2025-06-01",
        verifiedPurchase: true
      }
    ]
  },
  {
    idProd: 3,
    name: "Crochet desde cero",
    shortDescription: "Amigurumis y accesorios con patrones guiados.",
    fullDescription: "Aprende puntos básicos, lectura de diagramas, cambios de color y acabados profesionales. Incluye tips para venta.",
    category: "Textil",
    difficulty: "Principiante",
    duration: { value: 6, unit: "horas" },
    resolution: "1080p",
    languages: ["Español"],
    materials: ["Hilos de algodón", "Ganchillo", "Tijeras pequeñas", "Agujas de lana", "Marcadores de puntos"],
    includesKit: true,
    kitDescription: "Set de ganchillos, hilo de algodón y marcadores.",
    price: 52,
    priceWithKit: 79,
    discount: 5,
    rating: { rate: 4.7, count: 367 },
    mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199917/crochet_m1mcfh.jpg",
    additionalImages: [
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199917/crochet_detail1.jpg",
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199917/crochet_detail2.jpg"
    ],
    reviews: [
      {
        id: "RVW-CR-A01",
        user: { id: "USR-3A", name: "Gabriela Castillo", country: "MX", verified: true, photo: getRandomUserPhoto() },
        rating: 5,
        title: "Patrones muy claros",
        comment: "Mis primeros amigurumis salieron perfectos.",
        createdAt: "2025-05-22",
        verifiedPurchase: true
      },
      {
        id: "RVW-CR-A02",
        user: { id: "USR-3B", name: "Paola Espinosa", country: "MX", verified: true, photo: getRandomUserPhoto() },
        rating: 5,
        title: "Listo para vender",
        comment: "Consejos de tallas y etiquetas súper útiles.",
        createdAt: "2025-06-30",
        verifiedPurchase: true
      }
    ]
  },
  {
    idProd: 4,
    name: "Repostería creativa",
    shortDescription: "Pasteles y cupcakes con técnicas modernas.",
    fullDescription: "Domina batidos, emulsiones, fondant, ganache, royal icing y templado de chocolate. Incluye costeo y empaque.",
    category: "Gastronomía",
    difficulty: "Intermedio",
    duration: { value: 9, unit: "horas" },
    resolution: "1080p",
    languages: ["Español"],
    materials: ["Batidora", "Moldes para pasteles", "Fondant", "Colorantes comestibles", "Boquillas y mangas pasteleras", "Espátulas"],
    includesKit: false,
    kitDescription: null,
    price: 163,
    priceWithKit: 199,
    discount: 15,
    rating: { rate: 4.9, count: 288 },
    mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755200193/reposteria_o20yu8.jpg",
    additionalImages: [
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755200193/reposteria_detail1.jpg",
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755200193/reposteria_detail2.jpg"
    ],
    reviews: [
      {
        id: "RVW-RC-A01",
        user: { id: "USR-4A", name: "Valeria Campos", country: "MX", verified: true, photo: getRandomUserPhoto() },
        rating: 5,
        title: "Bizcochos perfectos",
        comment: "La buttercream quedó estable en clima cálido.",
        createdAt: "2025-06-10",
        verifiedPurchase: true
      },
      {
        id: "RVW-RC-A02",
        user: { id: "USR-4B", name: "Jorge Sánchez", country: "MX", verified: true, photo: getRandomUserPhoto() },
        rating: 5,
        title: "Ideal para negocio",
        comment: "Plantillas de costeo y empaque profesionales.",
        createdAt: "2025-07-25",
        verifiedPurchase: true
      }
    ]
  },
  {
    idProd: 5,
    name: "Cerámica funcional",
    shortDescription: "Modelado, esmaltado y cocción segura.",
    fullDescription: "Del amasado al vitrificado: torno, modelado a mano, engobes y esmaltes. Seguridad, curvas de cocción y acabados.",
    category: "Cerámica",
    difficulty: "Intermedio",
    duration: { value: 8, unit: "horas" },
    resolution: "1080p",
    languages: ["Español"],
    materials: ["Arcilla", "Torno de alfarero", "Esmaltes", "Herramientas de modelado", "Horno cerámico"],
    includesKit: false,
    kitDescription: null,
    price: 97,
    priceWithKit: 139,
    discount: 0,
    rating: { rate: 3.6, count: 101 },
    mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199914/ceramica_snmxab.jpg",
    additionalImages: [
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199914/ceramica_detail1.jpg",
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199914/ceramica_detail2.jpg"
    ],
    reviews: [
      {
        id: "RVW-CE-A01",
        user: { id: "USR-5A", name: "Andrea Morales", country: "MX", verified: true, photo: getRandomUserPhoto() },
        rating: 4,
        title: "Proceso claro",
        comment: "Entendí plasticidad y tiempos de secado.",
        createdAt: "2025-05-30",
        verifiedPurchase: true
      },
      {
        id: "RVW-CE-A02",
        user: { id: "USR-5B", name: "Florencia Álvarez", country: "AR", verified: true, photo: getRandomUserPhoto() },
        rating: 5,
        title: "Esmaltes consistentes",
        comment: "Buenos protocolos de seguridad y pruebas.",
        createdAt: "2025-07-03",
        verifiedPurchase: true
      }
    ]
  },
  {
    idProd: 6,
    name: "Joyería artesanal",
    shortDescription: "Diseño y fabricación de piezas con metales y piedras.",
    fullDescription: "Soldadura con soplete, engastes, texturas y acabados espejo. Ergonomía, seguridad y costeo por pieza.",
    category: "Joyería",
    difficulty: "Avanzado",
    duration: { value: 10, unit: "horas" },
    resolution: "1080p",
    languages: ["Español", "Inglés"],
    materials: ["Alambre de plata", "Alicates de joyería", "Cuentas y piedras", "Cierres y ganchos", "Base para anillos"],
    includesKit: true,
    kitDescription: "Alambre de plata 925, pinzas básicas, piedras cabujón.",
    price: 145,
    priceWithKit: 199,
    discount: 12,
    rating: { rate: 4.4, count: 399 },
    mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199921/joyeria_dejtub.jpg",
    additionalImages: [
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199921/joyeria_detail1.jpg",
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199921/joyeria_detail2.jpg"
    ],
    reviews: [
      {
        id: "RVW-JO-A01",
        user: { id: "USR-6A", name: "Alejandra Vega", country: "MX", verified: true, photo: getRandomUserPhoto() },
        rating: 5,
        title: "Soldaduras limpias",
        comment: "Tips de temperatura y seguridad muy claros.",
        createdAt: "2025-05-29",
        verifiedPurchase: true
      },
      {
        id: "RVW-JO-A02",
        user: { id: "USR-6B", name: "Carolina Pérez", country: "ES", verified: true, photo: getRandomUserPhoto() },
        rating: 5,
        title: "Acabado espejo",
        comment: "Secuencia de lijas y pulido impecables.",
        createdAt: "2025-06-15",
        verifiedPurchase: true
      }
    ]
  },
  {
    idProd: 7,
    name: "Fotografía digital",
    shortDescription: "Exposición, composición e introducción a edición.",
    fullDescription: "Triángulo de exposición, enfoque, composición y flujo de trabajo en edición básica para construir un portafolio sólido.",
    category: "Fotografía",
    difficulty: "Principiante",
    duration: { value: 6, unit: "horas" },
    resolution: "1080p",
    languages: ["Español"],
    materials: ["Cámara DSLR o mirrorless", "Trípode", "Tarjeta de memoria", "Reflector", "Software de edición"],
    includesKit: false,
    kitDescription: null,
    price: 189,
    priceWithKit: 219,
    discount: 0,
    rating: { rate: 3.2, count: 227 },
    mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199920/fotografia_ru9lml.jpg",
    additionalImages: [
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199920/fotografia_detail1.jpg",
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199920/fotografia_detail2.jpg"
    ],
    reviews: [
      {
        id: "RVW-FO-A01",
        user: { id: "USR-7A", name: "Nicolás Ramírez", country: "AR", verified: true, photo: getRandomUserPhoto() },
        rating: 4,
        title: "Exposición entendible",
        comment: "Histograma y medición de luz bien explicados.",
        createdAt: "2025-06-02",
        verifiedPurchase: true
      },
      {
        id: "RVW-FO-A02",
        user: { id: "USR-7B", name: "Daniela Castañeda", country: "CO", verified: true, photo: getRandomUserPhoto() },
        rating: 4,
        title: "Composición que suma",
        comment: "Regla de tercios, líneas y enfoque al ojo útiles.",
        createdAt: "2025-07-22",
        verifiedPurchase: true
      }
    ]
  },
  {
    idProd: 8,
    name: "Bordado moderno",
    shortDescription: "Puntos, color y acabados para prendas y cuadros.",
    fullDescription: "Punto satín, cadeneta, nudo francés y degradados. Transferencias de patrones y montaje limpio en bastidor.",
    category: "Textil",
    difficulty: "Intermedio",
    duration: { value: 5, unit: "horas" },
    resolution: "1080p",
    languages: ["Español"],
    materials: ["Aros de bordado", "Hilos de colores", "Agujas de bordado", "Telas de lino o algodón", "Marcadores para tela"],
    includesKit: true,
    kitDescription: "Aro de 6”, set de hilos y agujas.",
    price: 61,
    priceWithKit: 89,
    discount: 8,
    rating: { rate: 4.8, count: 53 },
    mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199910/bordado_z1rogd.jpg",
    additionalImages: [
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199910/bordado_detail1.jpg",
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199910/bordado_detail2.jpg"
    ],
    reviews: [
      {
        id: "RVW-BO-A01",
        user: { id: "USR-8A", name: "Itzel Ramírez", country: "MX", verified: true, photo: getRandomUserPhoto() },
        rating: 5,
        title: "Paletas modernas",
        comment: "Los degradados quedan espectaculares en ropa.",
        createdAt: "2025-05-31",
        verifiedPurchase: true
      },
      {
        id: "RVW-BO-A02",
        user: { id: "USR-8B", name: "Valentina Ortiz", country: "CO", verified: true, photo: getRandomUserPhoto() },
        rating: 5,
        title: "De hobby a ventas",
        comment: "Tips de precios y presentación muy útiles.",
        createdAt: "2025-06-28",
        verifiedPurchase: true
      }
    ]
  },
  {
    idProd: 9,
    name: "Macramé boho",
    shortDescription: "Nudos y patrones para tapices y colgadores.",
    fullDescription: "Lark’s head, square knot y half hitch con proyectos guiados. Tensión, medidas y acabados invisibles.",
    category: "Textil",
    difficulty: "Principiante",
    duration: { value: 4, unit: "horas" },
    resolution: "1080p",
    languages: ["Español"],
    materials: ["Cuerda de algodón", "Aros de madera", "Tijeras", "Cinta métrica", "Cuentas decorativas"],
    includesKit: false,
    kitDescription: null,
    price: 78,
    priceWithKit: 99,
    discount: 5,
    rating: { rate: 2.9, count: 312 },
    mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199923/macrame_kdb2db.jpg",
    additionalImages: [
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199923/macrame_detail1.jpg",
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199923/macrame_detail2.jpg"
    ],
    reviews: [
      {
        id: "RVW-MA-A01",
        user: { id: "USR-9A", name: "Laura González", country: "MX", verified: true, photo: getRandomUserPhoto() },
        rating: 3,
        title: "Base útil",
        comment: "Buenos nudos básicos; ritmo algo irregular.",
        createdAt: "2025-06-05",
        verifiedPurchase: true
      },
      {
        id: "RVW-MA-A02",
        user: { id: "USR-9B", name: "Natalia Romero", country: "CO", verified: true, photo: getRandomUserPhoto() },
        rating: 4,
        title: "Proyectos guiados",
        comment: "Colgador y mini tapiz quedaron muy bien.",
        createdAt: "2025-06-23",
        verifiedPurchase: true
      }
    ]
  },
  {
    idProd: 10,
    name: "Costura básica",
    shortDescription: "Manejo de máquina, dobladillos y prendas sencillas.",
    fullDescription: "Toma de medidas, puntadas esenciales, patrones simples y uso de overlock. Repara y personaliza tu ropa.",
    category: "Moda",
    difficulty: "Principiante",
    duration: { value: 6, unit: "horas" },
    resolution: "1080p",
    languages: ["Español"],
    materials: ["Máquina de coser", "Hilos de colores", "Tijeras de tela", "Cinta métrica", "Alfileres", "Tela de práctica"],
    includesKit: false,
    kitDescription: null,
    price: 138,
    priceWithKit: 169,
    discount: 0,
    rating: { rate: 4.1, count: 275 },
    mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199915/costura_n7dre2.jpg",
    additionalImages: [
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199915/costura_detail1.jpg",
      "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199915/costura_detail2.jpg"
    ],
    reviews: [
      {
        id: "RVW-CO-A01",
        user: { id: "USR-10A", name: "Gina F.", country: "MX", verified: true, photo: getRandomUserPhoto() },
        rating: 4,
        title: "Sin miedo a la overlock",
        comment: "Dobladillos y remates perfectos.",
        createdAt: "2025-06-15",
        verifiedPurchase: true
      },
      {
        id: "RVW-CO-A02",
        user: { id: "USR-10B", name: "Patricia O.", country: "MX", verified: false, photo: getRandomUserPhoto() },
        rating: 4,
        title: "Claro y directo",
        comment: "Faltó un patrón extra de falda, lo demás excelente.",
        createdAt: "2025-07-31",
        verifiedPurchase: true
      }
    ]
  }
];

// Añadir cursos del usuario al catálogo
try {
    const cursosGuardados = localStorage.getItem('cursos');
    if (cursosGuardados) {
        const cursos = JSON.parse(cursosGuardados);
        console.log('Cursos encontrados:', cursos);
        
        // Si es un array de cursos
        if (Array.isArray(cursos)) {
            products.push(...cursos); // Agregar todos los cursos
        } else {
            // Si es un solo curso
            products.push(cursos);
        }
    }
} catch (error) {
    console.warn('Error al cargar cursos del localStorage:', error);
}