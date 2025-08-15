// Lista de 10 cursos (misma estructura + reviews)
let cont = 0;
export const products = [
    {
        idProd : 1,
        name: "Velas artesanales",
        shortDescription: "Curso completo para crear velas únicas y personalizadas.",
        fullDescription: "Descubre el arte de fabricar velas hechas a mano, aprendiendo sobre diferentes tipos de cera, moldes, fragancias y técnicas de decoración. Ideal para quienes buscan un nuevo hobby o iniciar un negocio artesanal.",
        category: "Artesanías",
        difficulty: "Intermedio",
        duration: {
            value: 5,
            unit: "horas"
        },
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
            "detalle1.jpg",
            "detalle2.jpg"
        ],
        reviews: [
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
        ]
    }
];

// Añadir al catálogo ---------------------------------------------- Pendiente 
if (localStorage.getItem('curso')) {
    localStorage.getItem('curso');
    const nuevoCurso = JSON.parse(localStorage.getItem('curso'));
    console.log(nuevoCurso);
    products.push(nuevoCurso);
} 