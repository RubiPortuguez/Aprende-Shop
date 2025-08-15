// Lista de 10 cursos
// Lista de 10 cursos (misma estructura + reviews)
export const products = [
    {
        SKU: "CRS-VE-4821",
        name: "Velas",
        img: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199911/candles_jrg8zo.jpg",
        alt: "Velas artesanales hechas a mano con cera de colores y fragancias",
        description:
            "Descubre el arte de fabricar velas hechas a mano, aprendiendo sobre tipos de cera, moldes, fragancias y decoración. Perfecto para quienes quieren crear productos únicos para uso personal o para iniciar un negocio artesanal.",
        rating: { rate: 4.3, count: 215 },
        price: 87,
        materials: ["Cera de soya", "Cera de abeja", "Moldes de silicona", "Pabilos", "Fragancias", "Colorantes"],
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

    },
    {
        SKU: "CRS-PI-9375",
        name: "Pintura",
        img: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755200187/paint_tlowmd.jpg",
        alt: "Set de pintura con lienzo, pinceles y paleta de mezclas",
        description:
            "Aprende técnicas básicas y avanzadas de pintura, desde el manejo del color y las texturas hasta la creación de obras originales. Ideal para quienes desean explorar su creatividad y desarrollar habilidades artísticas en diferentes estilos y materiales.",
        rating: { rate: 3.8, count: 142 },
        price: 124,
        materials: ["Pinceles variados", "Lienzo", "Pinturas acrílicas", "Paleta de mezclas", "Caballetes", "Barniz protector"],
        reviews: [
            {
                id: "RVW-PI-001",
                user: { id: "USR-2101", name: "Carolina Mendoza", country: "MX", verified: true },
                rating: 4,
                title: "Buen contenido y bien explicado",
                comment: "La teoría del color y las mezclas primarias están súper claras. Ideal si empiezas con acrílico.",
                createdAt: "2025-05-24",
                verifiedPurchase: true
            },
            {
                id: "RVW-PI-002",
                user: { id: "USR-2134", name: "Rodrigo Salinas", country: "CL", verified: false },
                rating: 3,
                title: "Esperaba más óleo",
                comment: "El curso está bien, pero se centra mucho en acrílico. Agregaría sesiones de óleo y solventes.",
                createdAt: "2025-06-01",
                verifiedPurchase: true
            },
            {
                id: "RVW-PI-003",
                user: { id: "USR-2190", name: "Elena Vargas", country: "ES", verified: true },
                rating: 5,
                title: "Excelente estructura",
                comment: "Ejercicios progresivos, composición y perspectiva muy bien guiadas. Me sirvió para armar portafolio.",
                createdAt: "2025-06-12",
                verifiedPurchase: true
            },
            {
                id: "RVW-PI-004",
                user: { id: "USR-2228", name: "Mauricio López", country: "MX", verified: true },
                rating: 4,
                title: "Técnicas útiles",
                comment: "El módulo de veladuras y mantenimiento de pinceles está de lujo. Faltan más ejemplos de piel.",
                createdAt: "2025-06-20",
                verifiedPurchase: true
            },
            {
                id: "RVW-PI-005",
                user: { id: "USR-2275", name: "Daniela Rivas", country: "AR", verified: true },
                rating: 5,
                title: "Aprendí un montón",
                comment: "Proyectos paso a paso (bodegón y paisaje) muy claros. Noté mejora real en mis trabajos.",
                createdAt: "2025-06-29",
                verifiedPurchase: true
            },
            {
                id: "RVW-PI-006",
                user: { id: "USR-2316", name: "Héctor Morales", country: "MX", verified: false },
                rating: 3,
                title: "Va un poco rápido",
                comment: "Algunos videos de demostración van muy acelerados. Pondría más tomas en tiempo real.",
                createdAt: "2025-07-04",
                verifiedPurchase: true
            },
            {
                id: "RVW-PI-007",
                user: { id: "USR-2359", name: "Lucía Ortega", country: "PE", verified: true },
                rating: 4,
                title: "Texturas y gesso",
                comment: "Me encantó el módulo de texturas con impasto y gesso. Haría un capítulo de pintura con espátula.",
                createdAt: "2025-07-10",
                verifiedPurchase: true
            },
            {
                id: "RVW-PI-008",
                user: { id: "USR-2411", name: "Julián Pérez", country: "CO", verified: true },
                rating: 2,
                title: "No era lo que buscaba",
                comment: "Yo quería acuarela. El enfoque en acrílico no me sirvió tanto. Aun así, buena teoría del color.",
                createdAt: "2025-07-18",
                verifiedPurchase: true
            },
            {
                id: "RVW-PI-009",
                user: { id: "USR-2468", name: "María Fernanda Castro", country: "MX", verified: true },
                rating: 4,
                title: "Feedback valioso",
                comment: "Las rúbricas para evaluar composición ayudan mucho. Mejoraría la iluminación en dos lecciones.",
                createdAt: "2025-07-27",
                verifiedPurchase: true
            },
            {
                id: "RVW-PI-010",
                user: { id: "USR-2517", name: "Santiago Romero", country: "MX", verified: true },
                rating: 5,
                title: "Color a otro nivel",
                comment: "El ejercicio de paleta limitada me voló la cabeza. Entendí armonías y contraste como nunca.",
                createdAt: "2025-08-09",
                verifiedPurchase: true
            }
        ]

    },
    {
        SKU: "CRS-CR-6502",
        name: "Crochet",
        img: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199917/crochet_m1mcfh.jpg",
        alt: "Accesorios de crochet tejidos con hilo de algodón de colores",
        description:
            "Conoce las técnicas para diseñar y elaborar accesorios personalizados utilizando diversos materiales.Ideal para quienes disfrutan crear detalles únicos para complementar su estilo o regalar.",
        rating: { rate: 4.7, count: 367 },
        price: 52,
        materials: ["Hilos de algodón", "Ganchillo", "Tijeras pequeñas", "Agujas de lana", "Marcadores de puntos"],
        reviews: [
            {
                id: "RVW-CR-001",
                user: { id: "USR-3101", name: "Gabriela Castillo", country: "MX", verified: true },
                rating: 5,
                title: "Patrones claros y bonitos",
                comment: "Hice mis primeros amigurumis sin perderme. Las fotos paso a paso ayudan muchísimo.",
                createdAt: "2025-05-22",
                verifiedPurchase: true
            },
            {
                id: "RVW-CR-002",
                user: { id: "USR-3114", name: "Marina Soler", country: "ES", verified: true },
                rating: 4,
                title: "Buena base y acabados",
                comment: "Aprendí puntos básicos y remates. Agregaría más ejemplos de bloqueo y remate invisible.",
                createdAt: "2025-06-03",
                verifiedPurchase: true
            },
            {
                id: "RVW-CR-003",
                user: { id: "USR-3132", name: "Ricardo Molina", country: "CO", verified: false },
                rating: 4,
                title: "Lectura de diagramas por fin",
                comment: "La sección de símbolos y lectura de gráficos me desbloqueó. Me gustaría un PDF resumen.",
                createdAt: "2025-06-18",
                verifiedPurchase: true
            },
            {
                id: "RVW-CR-004",
                user: { id: "USR-3150", name: "Paola Espinosa", country: "MX", verified: true },
                rating: 5,
                title: "Ideal para emprender",
                comment: "Incluye tips de tallas, etiquetas y cálculo de insumos. Ya vendí mis primeras piezas.",
                createdAt: "2025-06-30",
                verifiedPurchase: true
            },
            {
                id: "RVW-CR-005",
                user: { id: "USR-3169", name: "Luciana Prieto", country: "AR", verified: true },
                rating: 5,
                title: "También para zurdos",
                comment: "Gracias por la sección para mano izquierda. Cambios de color sin líneas: ¡magia!",
                createdAt: "2025-07-09",
                verifiedPurchase: true
            },
            {
                id: "RVW-CR-006",
                user: { id: "USR-3187", name: "Camilo Andrade", country: "CL", verified: true },
                rating: 3,
                title: "Algunos videos van rápido",
                comment: "Pondría más tomas en cámara lenta y close-ups en puntos complejos.",
                createdAt: "2025-07-21",
                verifiedPurchase: true
            },
            {
                id: "RVW-CR-007",
                user: { id: "USR-3199", name: "Elisa Domínguez", country: "PE", verified: true },
                rating: 4,
                title: "Muy práctico y directo",
                comment: "Tensión del hilo, marcadores y errores comunes bien cubiertos. Perfecto para empezar.",
                createdAt: "2025-08-05",
                verifiedPurchase: true
            }
        ]

    },
    {
        SKU: "CRS-RC-2214",
        name: "Repostería Creativa",
        img: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755200193/reposteria_o20yu8.jpg",
        alt: "Cupcakes y pasteles decorados con fondant y glasé de colores",
        description:
            "Domina la elaboración de pasteles, cupcakes y postres decorados con técnicas modernas. Aprende desde las recetas básicas hasta el uso de fondant, glasé y técnicas de decoración para crear piezas irresistibles.",
        rating: { rate: 4.9, count: 288 },
        price: 163,
        materials: ["Batidora", "Moldes para pasteles", "Fondant", "Colorantes comestibles", "Boquillas y mangas pasteleras", "Espátulas"],
        reviews: [
            {
                id: "RVW-RC-001",
                user: { id: "USR-4102", name: "Valeria Campos", country: "MX", verified: true },
                rating: 5,
                title: "Recetas exactas y resultados wow",
                comment: "El bizcocho esponjoso salió perfecto a la primera y la buttercream quedó estable incluso con calor.",
                createdAt: "2025-06-10",
                verifiedPurchase: true
            },
            {
                id: "RVW-RC-002",
                user: { id: "USR-4250", name: "Jorge Sánchez", country: "MX", verified: true },
                rating: 5,
                title: "Ideal para vender",
                comment: "Las plantillas de costeo y el módulo de empaque me ayudaron a profesionalizar mi pastelería.",
                createdAt: "2025-07-25",
                verifiedPurchase: true
            },
            {
                id: "RVW-RC-003",
                user: { id: "USR-4321", name: "Mariana Rivera", country: "ES", verified: true },
                rating: 5,
                title: "Fondant sin grietas",
                comment: "Por fin forré un pastel alto sin ‘elefantiasis’. Técnicas de alisado y bordes perfectos.",
                createdAt: "2025-06-18",
                verifiedPurchase: true
            },
            {
                id: "RVW-RC-004",
                user: { id: "USR-4388", name: "Fernando Juárez", country: "MX", verified: false },
                rating: 4,
                title: "Muy completo, faltó sin gluten",
                comment: "Gran curso, añadiría variantes sin gluten y sin lácteos. El resto impecable.",
                createdAt: "2025-06-24",
                verifiedPurchase: true
            },
            {
                id: "RVW-RC-005",
                user: { id: "USR-4410", name: "Daniela Muñoz", country: "AR", verified: true },
                rating: 5,
                title: "Decoración nivel pro",
                comment: "Figuras en fondant y flores de pasta de goma explicadas paso a paso. Mis clientes lo aman.",
                createdAt: "2025-07-02",
                verifiedPurchase: true
            },
            {
                id: "RVW-RC-006",
                user: { id: "USR-4466", name: "Alejandro Torres", country: "CO", verified: true },
                rating: 5,
                title: "Ganache y drip perfectos",
                comment: "La proporción de chocolate/crema y temperaturas exactas. Cero goteos raros.",
                createdAt: "2025-07-09",
                verifiedPurchase: true
            },
            {
                id: "RVW-RC-007",
                user: { id: "USR-4520", name: "Paola Delgado", country: "MX", verified: true },
                rating: 5,
                title: "Boquillas y glasé domados",
                comment: "Domino conchas, rosetones y letras con royal icing. La consistencia por etapas fue clave.",
                createdAt: "2025-07-14",
                verifiedPurchase: true
            },
            {
                id: "RVW-RC-008",
                user: { id: "USR-4577", name: "Santiago Cabrera", country: "CL", verified: false },
                rating: 4,
                title: "Ciencia del horneado",
                comment: "Excelente parte de emulsiones y leudantes. Pondría más sobre distintos hornos.",
                createdAt: "2025-07-20",
                verifiedPurchase: true
            },
            {
                id: "RVW-RC-009",
                user: { id: "USR-4629", name: "Lucía Benítez", country: "PE", verified: true },
                rating: 5,
                title: "Templado de chocolate sin miedo",
                comment: "Método por siembra explicado con curvas. Brillo espejo y buen snap garantizados.",
                createdAt: "2025-07-28",
                verifiedPurchase: true
            },
            {
                id: "RVW-RC-010",
                user: { id: "USR-4684", name: "Camila Ortiz", country: "MX", verified: true },
                rating: 5,
                title: "Macarons al fin",
                comment: "Trucos de humedad y reposo me salvaron. Pie uniforme, sin huecos y rellenos deliciosos.",
                createdAt: "2025-08-04",
                verifiedPurchase: true
            },
            {
                id: "RVW-RC-011",
                user: { id: "USR-4733", name: "Héctor Villalobos", country: "MX", verified: true },
                rating: 4,
                title: "Alturas y tiempos",
                comment: "Muy bueno. Agregaría tabla de ajustes por altitud y conversiones de moldes.",
                createdAt: "2025-08-11",
                verifiedPurchase: true
            }
        ]

    },
    {
        SKU: "CRS-CE-8450",
        name: "Cerámica",
        img: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199914/ceramica_snmxab.jpg",
        alt: "Piezas de cerámica artesanales listas para esmaltar",
        description:
            "Explora el modelado, esmaltado y cocción de piezas de cerámica. Aprende a crear objetos funcionales y decorativos, combinando tradición y creatividad en cada diseño.",
        rating: { rate: 3.6, count: 101 },
        price: 97,
        materials: ["Arcilla", "Torno de alfarero", "Esmaltes", "Herramientas de modelado", "Horno cerámico"],
        reviews: [
            {
                id: "RVW-CE-001",
                user: { id: "USR-5012", name: "Andrea Morales", country: "MX", verified: true },
                rating: 4,
                title: "Buenas bases y proceso claro",
                comment: "Modelado a mano y en torno explicados con calma. Me ayudó a entender la plasticidad de la arcilla.",
                createdAt: "2025-05-30",
                verifiedPurchase: true
            },
            {
                id: "RVW-CE-002",
                user: { id: "USR-5078", name: "Pablo Serrano", country: "ES", verified: false },
                rating: 3,
                title: "Falta más sobre hornos",
                comment: "Echo en falta curvas de cocción y cono pirométrico. Lo demás, correcto para principiantes.",
                createdAt: "2025-06-16",
                verifiedPurchase: true
            },
            {
                id: "RVW-CE-003",
                user: { id: "USR-5134", name: "Florencia Álvarez", country: "AR", verified: true },
                rating: 5,
                title: "Esmaltado sin sorpresas",
                comment: "Probé engobes y esmaltes transparentes con resultados consistentes. Buenas pautas de seguridad.",
                createdAt: "2025-07-03",
                verifiedPurchase: true
            },
            {
                id: "RVW-CE-004",
                user: { id: "USR-5191", name: "Camilo Restrepo", country: "CO", verified: true },
                rating: 4,
                title: "Del barro a la pieza final",
                comment: "Me sirvió para diferenciar loza, gres y porcelana y ajustar el vitrificado. Recomendado.",
                createdAt: "2025-08-08",
                verifiedPurchase: true
            }
        ]

    },
    {
        SKU: "CRS-JO-1798",
        name: "Joyería Artesanal",
        img: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199921/joyeria_dejtub.jpg",
        alt: "Piezas de joyería artesanal con piedras y metales",
        description:
            "Aprende a diseñar y fabricar piezas únicas de joyería con metales, piedras y otros materiales. Ideal para emprendedores o amantes de los accesorios exclusivos.",
        rating: { rate: 4.4, count: 399 },
        price: 145,
        materials: ["Alambre de plata", "Alicates de joyería", "Cuentas y piedras", "Cierres y ganchos", "Base para anillos"],
        reviews: [
            {
                id: "RVW-JO-001",
                user: { id: "USR-6205", name: "Alejandra Vega", country: "MX", verified: true },
                rating: 5,
                title: "Soldadura y seguridad al punto",
                comment: "Domino el soplete, soldaduras limpias y sin sobrecalentado. Buenas prácticas de seguridad.",
                createdAt: "2025-05-29",
                verifiedPurchase: true
            },
            {
                id: "RVW-JO-002",
                user: { id: "USR-6231", name: "Marco Domínguez", country: "CO", verified: false },
                rating: 4,
                title: "Engastes claros",
                comment: "Muy bien el engaste en bisel y medidas. Agregaría un módulo de engaste en garra.",
                createdAt: "2025-06-04",
                verifiedPurchase: true
            },
            {
                id: "RVW-JO-003",
                user: { id: "USR-6280", name: "Carolina Pérez", country: "ES", verified: true },
                rating: 5,
                title: "Acabado espejo impecable",
                comment: "Secuencia de lijas, pulido con pasta y tumbler explicados paso a paso. Resultado profesional.",
                createdAt: "2025-06-15",
                verifiedPurchase: true
            },
            {
                id: "RVW-JO-004",
                user: { id: "USR-6339", name: "Iván Morales", country: "MX", verified: true },
                rating: 3,
                title: "Bueno, faltó CAD",
                comment: "Contenido sólido en wire wrapping y cortadores. Me habría gustado una intro a CAD/3D.",
                createdAt: "2025-06-27",
                verifiedPurchase: true
            },
            {
                id: "RVW-JO-005",
                user: { id: "USR-6392", name: "Patricia Ríos", country: "AR", verified: true },
                rating: 5,
                title: "Listo para vender",
                comment: "Incluye costeo por pieza, fichas técnicas y tips de fotografía para catálogo. ¡Genial!",
                createdAt: "2025-07-05",
                verifiedPurchase: true
            },
            {
                id: "RVW-JO-006",
                user: { id: "USR-6444", name: "Santiago Guzmán", country: "CL", verified: false },
                rating: 4,
                title: "Texturas y pátinas",
                comment: "Rodillo, martillado y pátina con sulfuro de potasio bien explicados. Faltó barniz protector.",
                createdAt: "2025-07-16",
                verifiedPurchase: true
            },
            {
                id: "RVW-JO-007",
                user: { id: "USR-6498", name: "Lucía Pacheco", country: "PE", verified: true },
                rating: 5,
                title: "Engaste de cabujón sin miedo",
                comment: "Biselado, asentado y bruñido del cabujón claro y seguro. Ajustes para piedras calibradas.",
                createdAt: "2025-07-30",
                verifiedPurchase: true
            },
            {
                id: "RVW-JO-008",
                user: { id: "USR-6555", name: "Ximena Soto", country: "MX", verified: true },
                rating: 4,
                title: "Ergonomía y seguridad A+",
                comment: "Postura, mascarillas y ventilación del área de trabajo. Añadiría más sobre manejo de ácidos.",
                createdAt: "2025-08-08",
                verifiedPurchase: true
            }
        ]

    },
    {
        SKU: "CRS-FO-5834",
        name: "Fotografía Digital",
        img: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199920/fotografia_ru9lml.jpg",
        alt: "Cámara fotográfica profesional con lente y trípode",
        description:
            "Domina el uso de tu cámara y las técnicas de composición, iluminación y edición. Perfecto para capturar momentos únicos o iniciar un portafolio profesional.",
        rating: { rate: 3.2, count: 227 },
        price: 189,
        materials: ["Cámara DSLR o mirrorless", "Trípode", "Tarjeta de memoria", "Reflector", "Software de edición"],
        reviews: [
            {
                id: "RVW-FO-001",
                user: { id: "USR-7101", name: "Nicolás Ramírez", country: "AR", verified: true },
                rating: 4,
                title: "Buenos fundamentos de exposición",
                comment: "Triángulo de exposición e histograma bien explicados. Faltó profundizar en RAW vs JPEG y perfiles de color.",
                createdAt: "2025-06-02",
                verifiedPurchase: true
            },
            {
                id: "RVW-FO-002",
                user: { id: "USR-7120", name: "Marta Quiroga", country: "MX", verified: true },
                rating: 3,
                title: "Iluminación algo básica",
                comment: "Trabaja luz natural y reflectores con claridad, pero me hubiera gustado más esquemas con 2 luces y geles.",
                createdAt: "2025-06-19",
                verifiedPurchase: true
            },
            {
                id: "RVW-FO-003",
                user: { id: "USR-7145", name: "Álvaro Fernández", country: "ES", verified: false },
                rating: 2,
                title: "Edición muy acelerada",
                comment: "Las lecciones de Lightroom van rápido. Haría falta un flujo de trabajo completo con máscaras y calibración.",
                createdAt: "2025-07-03",
                verifiedPurchase: true
            },
            {
                id: "RVW-FO-004",
                user: { id: "USR-7178", name: "Daniela Castañeda", country: "CO", verified: true },
                rating: 4,
                title: "Composición y enfoque que suman",
                comment: "Regla de tercios, líneas guía y AF-C/AF-S bien aterrizados. Me sirvió para retratos y fotografía de movimiento.",
                createdAt: "2025-07-22",
                verifiedPurchase: true
            },
            {
                id: "RVW-FO-005",
                user: { id: "USR-7199", name: "Ignacio Villalba", country: "CL", verified: true },
                rating: 3,
                title: "Buen arranque para mirrorless",
                comment: "Configuración de enfoque al ojo y estilos de imagen útil. Agregaría una sección de lentes y bokeh.",
                createdAt: "2025-08-11",
                verifiedPurchase: true
            }
        ]

    },
    {
        SKU: "CRS-BO-7069",
        name: "Bordado Moderno",
        img: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199910/bordado_z1rogd.jpg",
        alt: "Bordado moderno con hilos de colores y aro de madera",
        description:
            "Conoce puntos, combinaciones de colores y técnicas creativas para bordar en prendas, accesorios o cuadros decorativos. Ideal para personalizar y dar vida a tus proyectos textiles.",
        rating: { rate: 4.8, count: 53 },
        price: 61,
        materials: ["Aros de bordado", "Hilos de colores", "Agujas de bordado", "Telas de lino o algodón", "Marcadores para tela"],
        reviews: [
            {
                id: "RVW-BO-001",
                user: { id: "USR-8001", name: "Itzel Ramírez", country: "MX", verified: true },
                rating: 5,
                title: "Puntadas y combinaciones A+",
                comment: "Dominé punto satín, cadeneta y nudo francés. Las paletas de color modernas se ven increíbles en prendas.",
                createdAt: "2025-05-31",
                verifiedPurchase: true
            },
            {
                id: "RVW-BO-002",
                user: { id: "USR-8017", name: "Rocío Delgado", country: "MX", verified: false },
                rating: 4,
                title: "Muy inspirador",
                comment: "Me encantó el módulo de transferencia de patrones y el bastidor. Agregaría más ejemplos de terminados.",
                createdAt: "2025-06-04",
                verifiedPurchase: true
            },
            {
                id: "RVW-BO-003",
                user: { id: "USR-8032", name: "María José Paredes", country: "ES", verified: true },
                rating: 5,
                title: "Sombras con hilo, wow",
                comment: "La técnica de degradado con hebras fue clara. Mis flores ahora tienen volumen y luz realista.",
                createdAt: "2025-06-09",
                verifiedPurchase: true
            },
            {
                id: "RVW-BO-004",
                user: { id: "USR-8046", name: "Camila Araya", country: "CL", verified: true },
                rating: 3,
                title: "Buen curso, ritmo irregular",
                comment: "Algunas lecciones van muy rápido y otras muy lentas. Pondría tiempos más consistentes.",
                createdAt: "2025-06-16",
                verifiedPurchase: true
            },
            {
                id: "RVW-BO-005",
                user: { id: "USR-8061", name: "Javier Muñoz", country: "AR", verified: false },
                rating: 2,
                title: "Video y PDF mejorables",
                comment: "Varias tomas están fuera de foco y un enlace del PDF no funciona. El contenido base es bueno, pero distrae.",
                createdAt: "2025-06-22",
                verifiedPurchase: true
            },
            {
                id: "RVW-BO-006",
                user: { id: "USR-8079", name: "Valentina Ortiz", country: "CO", verified: true },
                rating: 5,
                title: "De hobby a negocio",
                comment: "Incluye tips de precios y presentación. Mis cuadros en aro de madera se venden mejor que nunca.",
                createdAt: "2025-06-28",
                verifiedPurchase: true
            },
            {
                id: "RVW-BO-007",
                user: { id: "USR-8094", name: "Daniel Hernández", country: "MX", verified: true },
                rating: 4,
                title: "Base sólida, falta avanzado",
                comment: "Excelente para puntos básicos y modernos. Quisiera más sobre bordado pictórico y plumetti.",
                createdAt: "2025-07-05",
                verifiedPurchase: true
            },
            {
                id: "RVW-BO-008",
                user: { id: "USR-8110", name: "Paula Aguilar", country: "PE", verified: true },
                rating: 1,
                title: "Links desactualizados",
                comment: "Dos enlaces a patrones descargables ya no estaban activos cuando entré. Necesita actualización.",
                createdAt: "2025-07-11",
                verifiedPurchase: true
            },
            {
                id: "RVW-BO-009",
                user: { id: "USR-8126", name: "Renata Flores", country: "MX", verified: true },
                rating: 5,
                title: "Acabados limpios",
                comment: "Aprendí remate invisible y cómo tensar la tela sin arrugas. Mis piezas quedaron de exhibición.",
                createdAt: "2025-07-17",
                verifiedPurchase: true
            },
            {
                id: "RVW-BO-010",
                user: { id: "USR-8142", name: "Santiago Rivas", country: "CO", verified: false },
                rating: 4,
                title: "Transferencias y estabilizadores",
                comment: "Muy útil la comparación entre papel carbónico y lápiz térmico. Haría falta capítulo de estabilizadores.",
                createdAt: "2025-07-24",
                verifiedPurchase: true
            },
            {
                id: "RVW-BO-011",
                user: { id: "USR-8158", name: "Lucero Cabrera", country: "MX", verified: true },
                rating: 2,
                title: "Pocas tomas cercanas",
                comment: "En puntos complejos faltan close-ups. Se me dificultó seguir el split stitch sin esa vista.",
                createdAt: "2025-07-30",
                verifiedPurchase: true
            },
            {
                id: "RVW-BO-012",
                user: { id: "USR-8173", name: "Alejandro Pineda", country: "MX", verified: true },
                rating: 5,
                title: "Color y composición modernos",
                comment: "Paletas contemporáneas y diseño de motivos minimalistas. Quedé listo para personalizar ropa.",
                createdAt: "2025-08-06",
                verifiedPurchase: true
            },
            {
                id: "RVW-BO-013",
                user: { id: "USR-8189", name: "Sofía Lozano", country: "ES", verified: true },
                rating: 3,
                title: "Correcto, pero básico",
                comment: "Si ya bordas, no verás mucho nuevo. Aún así, buen repaso y consejos de montaje en bastidor.",
                createdAt: "2025-08-12",
                verifiedPurchase: true
            }
        ]

    },
    {
        SKU: "CRS-MA-9427",
        name: "Macramé",
        img: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199923/macrame_kdb2db.jpg",
        alt: "Tapiz decorativo de macramé con nudos y cuentas",
        description:
            "Aprende nudos y patrones para crear tapices, colgadores de plantas, bolsos y accesorios decorativos con un estilo moderno y bohemio.",
        rating: { rate: 2.9, count: 312 },
        price: 78,
        materials: ["Cuerda de algodón", "Aros de madera", "Tijeras", "Cinta métrica", "Cuentas decorativas"],
        reviews: [
            {
                id: "RVW-MA-001",
                user: { id: "USR-9201", name: "Laura González", country: "MX", verified: true },
                rating: 3,
                title: "Buenos nudos básicos, ritmo irregular",
                comment: "Lark’s head, square knot y half hitch bien explicados. Algunas lecciones van demasiado rápido.",
                createdAt: "2025-06-05",
                verifiedPurchase: true
            },
            {
                id: "RVW-MA-002",
                user: { id: "USR-9213", name: "Tomás Andrade", country: "CL", verified: false },
                rating: 2,
                title: "Materiales poco claros",
                comment: "Me costó entender calibres de cuerda y equivalencias. Faltan recomendaciones por proyecto.",
                createdAt: "2025-06-12",
                verifiedPurchase: true
            },
            {
                id: "RVW-MA-003",
                user: { id: "USR-9228", name: "Natalia Romero", country: "CO", verified: true },
                rating: 4,
                title: "Base sólida para empezar",
                comment: "Aprendí a hacer un colgador simple y un mini tapiz. Agregaría un proyecto grande con tiempos.",
                createdAt: "2025-06-23",
                verifiedPurchase: true
            },
            {
                id: "RVW-MA-004",
                user: { id: "USR-9244", name: "Jorge Villanueva", country: "MX", verified: true },
                rating: 1,
                title: "Audio bajo y enlaces caídos",
                comment: "Varias partes casi no se escuchan y un PDF no abre. Necesita actualización urgente.",
                createdAt: "2025-07-01",
                verifiedPurchase: true
            },
            {
                id: "RVW-MA-005",
                user: { id: "USR-9260", name: "Elena Paredes", country: "ES", verified: true },
                rating: 5,
                title: "Tapices bonitos sin nudos extraños",
                comment: "Consejos de tensión y remates invisibles súper útiles. Mi primer tapiz quedó impecable.",
                createdAt: "2025-07-16",
                verifiedPurchase: true
            },
            {
                id: "RVW-MA-006",
                user: { id: "USR-9279", name: "Ricardo Medina", country: "PE", verified: false },
                rating: 3,
                title: "Bien, pero faltan diagramas",
                comment: "Los nudos se entienden, pero incluiría diagramas descargables y medidas por tamaño de proyecto.",
                createdAt: "2025-08-06",
                verifiedPurchase: true
            }
        ]

    },
    {
        SKU: "CRS-CO-3195",
        name: "Costura Básica",
        img: "https://res.cloudinary.com/dwkykeqgz/image/upload/v1755199915/costura_n7dre2.jpg",
        alt: "Máquina de coser con tela y accesorios de costura",
        description:
            "Descubre cómo usar la máquina de coser, tomar medidas y confeccionar prendas sencillas. Perfecto para quienes desean reparar, personalizar o crear su propia ropa.",
        rating: { rate: 4.1, count: 275 },
        price: 138,
        materials: ["Máquina de coser", "Hilos de colores", "Tijeras de tela", "Cinta métrica", "Alfileres", "Tela de práctica"],
        reviews: [
            {
                id: "RVW-CO-001",
                user: { id: "USR-10011", name: "Gina F.", country: "MX", verified: true },
                rating: 4,
                title: "Buen curso",
                comment: "Aprendí a hacer dobladillos y a usar la overlock sin miedo.",
                createdAt: "2025-06-15",
                verifiedPurchase: true
            },
            {
                id: "RVW-CO-002",
                user: { id: "USR-10032", name: "Patricia O.", country: "MX", verified: false },
                rating: 4,
                title: "Claro y directo",
                comment: "Me hubiera gustado un patrón extra para faldas.",
                createdAt: "2025-07-31",
                verifiedPurchase: true
            }
        ]
    }
];

// Añadir al catálogo ----------------------------------------------
    localStorage.getItem('curso');
    const nuevoCurso = JSON.parse(localStorage.getItem('curso'));
    console.log(nuevoCurso);
    products.push(nuevoCurso); 

