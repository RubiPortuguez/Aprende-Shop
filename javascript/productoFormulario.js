import { products } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
    // Elementos del formulario
    const form = document.getElementById('product-form');
    const shortDescription = document.getElementById('shortDescription');
    const charCount = document.getElementById('charCount');
    const includesKit = document.getElementById('includesKit');
    const kitDescriptionContainer = document.getElementById('kitDescriptionContainer');
    const otherLanguage = document.getElementById('otherLanguage');
    const otherLanguageText = document.getElementById('otherLanguageText');
    const mainImage = document.getElementById('mainImage');
    const previewImage = document.getElementById('previewImage');
    const imagePreview = document.getElementById('imagePreview');
    const additionalImages = document.getElementById('additionalImages');
    const galleryPreview = document.getElementById('galleryPreview');
    const coursePrice = document.getElementById('coursePrice');
    
    // Referencias a los elementos de precio con kit
    const priceWithKitContainer = document.getElementById('priceWithKitContainer');
    const coursePriceWithKit = document.getElementById('coursePriceWithKit');

    // Contador de caracteres para descripción corta
    shortDescription.addEventListener('input', function () {
        const remaining = 200 - this.value.length;
        charCount.textContent = this.value.length;

        if (remaining < 0) {
            this.value = this.value.substring(0, 200);
            charCount.textContent = 200;
        }
    });

    // EVENTO ÚNICO para el switch de kit
    includesKit.addEventListener('change', function () {
        const isChecked = this.checked;
        
        kitDescriptionContainer.style.display = isChecked ? 'block' : 'none';
        priceWithKitContainer.style.display = isChecked ? 'block' : 'none';
        
        if (isChecked) {
            coursePriceWithKit.setAttribute('required', 'true');
        } else {
            coursePriceWithKit.removeAttribute('required');
            coursePriceWithKit.value = '';
            document.getElementById('kitDescription').value = '';
        }
    });

    // Validación en tiempo real de precios
    coursePriceWithKit.addEventListener('input', function() {
        const price = parseFloat(coursePrice.value) || 0;
        const priceWithKit = parseFloat(this.value) || 0;

        if (priceWithKit <= price && priceWithKit > 0) {
            this.classList.add('is-invalid');
            this.nextElementSibling.textContent = 'El precio con kit debe ser mayor al precio base';
        } else {
            this.classList.remove('is-invalid');
        }
    });

    // Mostrar/ocultar campo de otro idioma
    otherLanguage.addEventListener('change', function () {
        otherLanguageText.style.display = this.checked ? 'block' : 'none';
        if (!this.checked) {
            otherLanguageText.value = '';
        }
    });

    // Vista previa de imagen principal
    mainImage.addEventListener('change', function (e) {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = function (event) {
                previewImage.src = event.target.result;
                imagePreview.style.display = 'block';
            };

            reader.readAsDataURL(file);
        } else {
            imagePreview.style.display = 'none';
        }
    });

    // Vista previa de galería adicional
    additionalImages.addEventListener('change', function (e) {
        galleryPreview.innerHTML = '';

        if (e.target.files.length > 0) {
            const files = Array.from(e.target.files).slice(0, 3);

            files.forEach(file => {
                if (file.type.match('image.*')) {
                    const reader = new FileReader();
                    const col = document.createElement('div');
                    col.className = 'position-relative';
                    col.style.width = '150px';

                    reader.onload = function (event) {
                        const img = document.createElement('img');
                        img.src = event.target.result;
                        img.className = 'img-thumbnail';
                        img.style.height = '100px';
                        img.style.objectFit = 'cover';

                        const btn = document.createElement('button');
                        btn.className = 'btn btn-danger btn-sm position-absolute top-0 end-0';
                        btn.innerHTML = '<i class="fas fa-times"></i>';
                        btn.onclick = function () {
                            col.remove();
                        };

                        col.appendChild(img);
                        col.appendChild(btn);
                        galleryPreview.appendChild(col);
                    };

                    reader.readAsDataURL(file);
                }
            });
        }
    });

    // Validación del formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        const price = parseFloat(coursePrice.value);
        const priceWithKitValue = parseFloat(coursePriceWithKit.value);
        const kitChecked = includesKit.checked;

        if (kitChecked && (isNaN(priceWithKitValue) || priceWithKitValue <= price)) {
            coursePriceWithKit.classList.add('is-invalid');
            coursePriceWithKit.nextElementSibling.textContent = 'El precio con kit debe ser mayor al precio base';
            return;
        }

        if (form.checkValidity()) {
            Swal.fire({
                title: '¿Guardar este curso?',
                html: `Estás a punto de crear el curso: <strong>${document.getElementById('courseName').value}</strong>`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#00b19a',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, guardar',
                cancelButtonText: 'Cancelar'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    let mainImageUrl = null;
                    if (mainImage.files[0]) {
                        mainImageUrl = await sendImage(mainImage.files[0]);
                    }

                    const formData = {
                        idProd: products.length + 1,
                        name: document.getElementById('courseName').value,
                        shortDescription: shortDescription.value,
                        fullDescription: document.getElementById('fullDescription').value,
                        category: document.getElementById('courseCategory').value,
                        difficulty: document.querySelector('input[name="difficulty"]:checked').value,
                        duration: {
                            value: document.getElementById('courseDuration').value,
                            unit: document.getElementById('durationUnit').value
                        },
                        resolution: document.getElementById('videoResolution').value,
                        languages: getSelectedLanguages(),
                        materials: document.getElementById('materialsList').value.split(/[\n,]/).filter(item => item.trim()),
                        includesKit: kitChecked,
                        kitDescription: kitChecked ? document.getElementById('kitDescription').value : null,
                        price: price,
                        priceWithKit: kitChecked ? priceWithKitValue : null,
                        discount: parseInt(document.getElementById('courseDiscount').value) || 0,
                        rating: parseInt(document.getElementById('courseRating').value),
                        mainImage: mainImageUrl,
                        additionalImages: additionalImages.files.length > 0 ?
                            Array.from(additionalImages.files).slice(0, 3).map(file => file.name) : []
                    };

                    // 👉 Guardar en el array global
                    products.push(formData);

                    // 👉 Guardar en localStorage como lista
                    localStorage.setItem('cursos', JSON.stringify(products));

                    // 👉 Debug en consola
                    console.log("Nuevo curso creado:", formData);

                    Swal.fire(
                        '¡Guardado!',
                        'El curso ha sido creado exitosamente.',
                        'success'
                    );

                    form.reset();
                    form.classList.remove('was-validated');
                    imagePreview.style.display = 'none';
                    galleryPreview.innerHTML = '';
                    priceWithKitContainer.style.display = 'none';
                    kitDescriptionContainer.style.display = 'none';
                }
            });
        }

        form.classList.add('was-validated');
    }, false);
});

// Función auxiliar para obtener idiomas seleccionados
function getSelectedLanguages() {
    const languages = [];
    if (document.getElementById('spanish').checked) languages.push('es');
    if (document.getElementById('english').checked) languages.push('en');
    if (document.getElementById('otherLanguage').checked && document.getElementById('otherLanguageText').value) {
        languages.push(document.getElementById('otherLanguageText').value);
    }
    return languages;
}

async function sendImage(file) {
    const formData = new FormData();
    const cloudName = "dwkykeqgz";
    const uploadPreset = "imagen_cursos";
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        return data.secure_url;
    } catch (error) {
        console.log("Error al cargar imagen");
        return null;
    }
}
