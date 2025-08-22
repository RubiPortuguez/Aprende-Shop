// Lista de 10 cursos (misma estructura + reviews)
let cont = 0;

export const products = [
    {
        idProd: 1,
        name: "Velas artesanales",
        shortDescription: "Curso completo para crear velas únicas y personalizadas.",
        fullDescription: "Descubre el arte de fabricar velas hechas a mano, aprendiendo sobre diferentes tipos de cera, moldes, fragancias y técnicas de decoración. Ideal para quienes buscan un nuevo hobby o iniciar un negocio artesanal.",
        category: "Artesanías",
        difficulty: "Intermedio",
        duration: { value: 5, unit: "horas" },
        resolution: "1080p",
        languages: ["Español", "Inglés"],
        materials: ["Cera de soya", "Cera de abeja", "Moldes de silicona", "Pabilos", "Fragancias", "Colorantes"],
        includesKit: true,
        kitDescription: "Incluye cera de soya, moldes, pabilos y fragancias.",
        price: 87,
        discount: 10,
        rating: { rate: 4.3, count: 215 },  


        mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199911/candles_jrg8zo.jpg",
        additionalImages: [
            "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199911/detalle1.jpg",
            "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199911/detalle2.jpg"
        ]
    },
    {
        idProd: 2,
        name: "Crochet",
        shortDescription: "Crea tus propias figuras con la técnica de crochet.",
        fullDescription: "Curso completo de bordado con hilos, puntadas decorativas, y técnicas mixtas sobre tela.",
        category: "Manualidades",
        difficulty: "Básico",
        duration: { value: 4, unit: "horas" },
        resolution: "1080p",
        languages: ["Español","Inglés"],
        materials: [ "Agujas de crochet", "bolas de lana","cinta metrica", "esponja de relleno","tijeras"],
        includesKit: true,
        kitDescription: "Incluye Agujas de crochet, bolas de lana, cinta metrica y esponja de relleno ",
        price: 87,
        rating: { rate: 4.3, count: 215 },
        mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199917/crochet_m1mcfh.jpg",
        additionalImages: ["https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199917/crochet_m1mcfh.jpg"]
    },
    {
        idProd: 3,
        name: "Bordado",
        shortDescription: "Aprende puntadas,técnicas y acabados que darán vida a textiles únicos",
        fullDescription: "Aprende el arte de bordado, desde las puntadas básicas hasta diseños completos y personalizados .",
        category: "Artesanías",
        difficulty: "Intermedio",
        duration: { value: 6, unit: "horas" },
        resolution: "1080p",
        languages: ["Español","Inglés"],
        materials: ["Aros de bordado", "Telas", "Tijeras","Agujas para bordado"],
        includesKit: true,
        kitDescription: "Incluye cuerda y guía de patrones.",
        price: 100,
        rating: { rate: 4.7, count: 210 },
        mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199910/bordado_z1rogd.jpg",
        additionalImages: ["https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199910/bordado_z1rogd.jpg"]
    },
    {
        idProd: 4,
        name: "Joyería artesanal",
        shortDescription: "Diseña, crea y aprende accesorios exclusivos y personalizados.",
        fullDescription: "Un espacio para crear accesorios exclusivos con tus propias manos.Aprenderas técnicas de armado, combinación de materiales y acabados que transforman tus diseños.",
        category: "Autoempleo",
        difficulty: "Intermedio",
        duration: { value: 5, unit: "horas" },
        resolution: "1080p",
        languages: ["Español","Inglés"],
        materials: ["Cuentas","Piedras","Dijes","Hilo elástico", "Alambre", "Pinzas"],
        includesKit: true,
        kitDescription: "Incluye cuentas, alambre y herramientas básicas.",
        price: 120,
        rating: { rate: 4.8, count: 300 },
        mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199921/joyeria_dejtub.jpg",
        additionalImages: ["https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199921/joyeria_dejtub.jpg"]
    },
    {
        idProd: 5,
        name: "Pintura",
        shortDescription: "Explora colores, estilos y técnicas para expresar tu mundo interior",
        fullDescription: "Aprende técnicas básicas y avanzadas de pintura textil para personalizar prendas y accesorios.",
        category: "Arte textil",
        difficulty: "Avanzado",
        duration: { value: 7, unit: "horas" },
        resolution: "1080p",
        languages: ["Español","Inglés"],
        materials: ["Pinturas acrilicas","Paleta de mezclas", "Pinceles","Barniz protector", "Lienzo"],
        includesKit: true,
        kitDescription: "Incluye pinturas acrilicas, pinceles y Lienzo.",
        price: 115,
        rating: { rate: 4.4, count: 130 },
        mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755200187/paint_tlowmd.jpg",
        additionalImages: ["https://res.cloudinary.com/dwkykeqgz/image/upload/v1755200187/paint_tlowmd.jpg"]
    },
    {
        idProd: 6,
        name: "Reposteria",
        shortDescription: "Endulza tu creatividad preparando postres deliciosos y artísticos",
        fullDescription: "Curso de manualidades con materiales reciclados para crear decoraciones y artículos funcionales.",
        category: "Sustentabilidad",
        difficulty: "Básico",
        duration: { value: 3, unit: "horas" },
        resolution: "720p",
        languages: ["Español","Inglés"],
        materials: ["Botellas", "Papel", "Cartón", "Pegamento"],
        includesKit: false,
        kitDescription: "Botellas de plastico, botellas de vidrio, papel, carton",
        price: 70,
        rating: { rate: 4.2, count: 80 },
        mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755200193/reposteria_o20yu8.jpg",
        additionalImages: ["https://res.cloudinary.com/dwkykeqgz/image/upload/v1755200193/reposteria_o20yu8.jpg"]
    },
    {
        idProd: 7,
        name: "Macrame",
        shortDescription: "Aprende a tejer prendas básicas y decorativas.",
        fullDescription: "Técnicas de crochet para principiantes, creación de gorros, bufandas y accesorios para el hogar.",
        category: "Textil",
        difficulty: "Intermedio",
        duration: { value: 6, unit: "horas" },
        resolution: "1080p",
        languages: ["Español","Inglés"],
        materials: ["Cordón de algodón", "Tijeras","Soporte","Cinta métrica","Ganchos"],
        includesKit: true,
        kitDescription: "Incluye cordón de algodón, soporte y patrones básicos, Ganchos.",
        price: 90,
        rating: { rate: 4.9, count: 180 },
        mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199923/macrame_kdb2db.jpg",
        additionalImages: ["https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199923/macrame_kdb2db.jpg"]
    },
    {
        idProd: 8,
        name: "Costura",
        shortDescription: "Crea piezas brillantes y personalizadas con resina.",
        fullDescription: "Descubre como confeccionar, reparar y diseñar prendas y accesorios con acabados profesionales.",
        category: "Textil",
        difficulty: "Avanzado",
        duration: { value: 5, unit: "horas" },
        resolution: "1080p",
        languages: ["Español","Inglés"],
        materials: ["Maquina de coser", "Telas", "Hilos","Agujas de mano y maquina","Regla","Cinta métrica"],
        includesKit: true,
        kitDescription: "Incluye Tela, Aguja, Regla, Cinta Metrica.",
        price: 130,
        rating: { rate: 4.6, count: 160 },
        mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199915/costura_n7dre2.jpg",
        additionalImages: ["https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199915/costura_n7dre2.jpg"]
    },
    {
        idProd: 9,
        name: "Ceramica",
        shortDescription: "Diseña, moldea y hornea piezas originales.",
        fullDescription: "Moldea, decora y hornea piezas de arcilla transformando tus ideas en arte utilitario y decorativo.",
        category: "Autoempleo",
        difficulty: "Intermedio",
        duration: { value: 4, unit: "horas" },
        resolution: "1080p",
        languages: ["Español","Inglés"],
        materials: ["Arcilla", "Torno de alfarero","Espatulas","Esmaltes","Horno cerámico"],
        includesKit: false,
        kitDescription: "Arcilla, Torno de alfarero,Espatulas,Esmaltes",
        price: 100,
        rating: { rate: 4.5, count: 95 },
        mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199914/ceramica_snmxab.jpg",
        additionalImages: ["https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199914/ceramica_snmxab.jpg"]
    },
    {
        idProd: 10,
        name: "Fotografía",
        shortDescription: "Captura momentos especiales y domina el arte de la composición y la luz.",
        fullDescription: "Domina la composición de la luz y la edición básica para capturar imágenes con estilo propio.",
        category: "Técnico",
        difficulty: "Intermedio",
        duration: { value: 5, unit: "horas" },
        resolution: "1080p",
        languages: ["Español","Inglés"],
        materials: ["Camára réflex","Miroless", "Focos", "Aro de luz", "Tripie"],
        includesKit: true,
        kitDescription: "Iluminación aro de luz , fondo neutro.",
        price: 75,
        rating: { rate: 4.7, count: 110 },
        mainImage: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199920/fotografia_ru9lml.jpg",
        additionalImages: ["https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199920/fotografia_ru9lml.jpg"]
    }
];

export const reviews = [
    {
        id: "RVW-VE-001",
        user: { id: "USR-1021", name: "Ana Pérez", country: "MX", verified: true },
        rating: 5,
        title: "Excelente para empezar",
        comment: "Explicaciones claras y recetas que salieron a la primera. ¡Las fragancias quedaron increíbles!",
        createdAt: "2025-07-21",
        verifiedPurchase: true
    },
    {
        id: "RVW-VE-002",
        user: { id: "USR-1187", name: "Luis Martínez", country: "MX", verified: true },
        rating: 4,
        title: "Muy bien",
        comment: "El módulo de colorantes es oro. Agregaría más tips de costos y empaque.",
        createdAt: "2025-08-03",
        verifiedPurchase: true
    },
    {
        id: "RVW-VE-003",
        user: { id: "USR-1240", name: "Sofía Rodríguez", country: "CO", verified: true },
        rating: 4,
        title: "Aprendí a costear mis velas",
        comment: "La hoja de costos me ayudó a fijar precios sin perder. Buenas prácticas con cera de soya.",
        createdAt: "2025-08-07",
        verifiedPurchase: true
    },
    {
        id: "RVW-VE-004",
        user: { id: "USR-1379", name: "Arturo Castillo", country: "MX", verified: false },
        rating: 3,
        title: "Buen curso, faltó troubleshooting",
        comment: "Me habría gustado una sección más larga sobre túneles y ‘frosting’ y cómo evitarlos.",
        createdAt: "2025-08-12",
        verifiedPurchase: true
    },
    {
        id: "RVW-VE-005",
        user: { id: "USR-1415", name: "Valeria Gómez", country: "ES", verified: true },
        rating: 5,
        title: "Resultados profesionales",
        comment: "Los moldes de silicona y pabilos correctos marcaron la diferencia. Fotos paso a paso muy útiles.",
        createdAt: "2025-06-29",
        verifiedPurchase: true
    },
    {
        id: "RVW-VE-006",
        user: { id: "USR-1522", name: "Diego Hernández", country: "MX", verified: true },
        rating: 4,
        title: "Contenido sólido",
        comment: "Me encantó la parte de seguridad y temperaturas de vertido. Faltó un capítulo de etiquetado.",
        createdAt: "2025-06-15",
        verifiedPurchase: true
    },
    {
        id: "RVW-VE-007",
        user: { id: "USR-1609", name: "Camila Fernández", country: "AR", verified: true },
        rating: 5,
        title: "Ideal para emprender",
        comment: "Abrí mis pedidos en Instagram gracias a los consejos sobre fragancias y combinaciones de color.",
        createdAt: "2025-05-30",
        verifiedPurchase: true
    },
    {
        id: "RVW-VE-008",
        user: { id: "USR-1714", name: "Javier Torres", country: "MX", verified: false },
        rating: 4,
        title: "Bien explicado",
        comment: "Los tiempos de curado y pruebas de quemado quedaron muy claros. Sumaría más ejemplos de envases.",
        createdAt: "2025-07-05",
        verifiedPurchase: true
    },
    {
        id: "RVW-VE-009",
        user: { id: "USR-1827", name: "Paula Navarro", country: "CL", verified: true },
        rating: 5,
        title: "Me encantó",
        comment: "La sección de velas decorativas fue mi favorita. Quedaron lisas y sin marcas.",
        createdAt: "2025-07-18",
        verifiedPurchase: true
    },
    {
        id: "RVW-VE-010",
        user: { id: "USR-1953", name: "Fernando Ruiz", country: "MX", verified: true },
        rating: 4,
        title: "Buen nivel",
        comment: "Excelente guía para elegir pabilos y ajustar fragancia por % de carga. Recomiendo.",
        createdAt: "2025-08-10",
        verifiedPurchase: true
    }
];
if (localStorage.getItem('curso')) {
    const nuevoCurso = JSON.parse(localStorage.getItem('curso'));
    console.log(nuevoCurso);
    products.push(nuevoCurso);
}
