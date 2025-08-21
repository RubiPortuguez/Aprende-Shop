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

    // Mostrar/ocultar descripción del kit
    includesKit.addEventListener('change', function () {
        kitDescriptionContainer.style.display = this.checked ? 'block' : 'none';

        // Mostrar/ocultar validación de precio con kit
        if (this.checked) {
            coursePriceWithKit.setAttribute('required', 'true');
            coursePriceWithKit.closest('.mb-3').style.display = 'block';
        } else {
            coursePriceWithKit.removeAttribute('required');
            coursePriceWithKit.closest('.mb-3').style.display = 'none';
            coursePriceWithKit.value = '';
        }

        if (!this.checked) {
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
            const files = Array.from(e.target.files).slice(0, 3); // Limitar a 3 imágenes

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
                            // Aquí podrías agregar lógica para remover el archivo del input
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

        // Validación personalizada de precios
        const price = parseFloat(coursePrice.value);
        const priceWithKit = parseFloat(coursePriceWithKit.value);
        const kitChecked = includesKit.checked;

        if (kitChecked && (isNaN(priceWithKit) || priceWithKit <= price)) {
            coursePriceWithKit.classList.add('is-invalid');
            coursePriceWithKit.nextElementSibling.textContent = 'El precio con kit debe ser mayor al precio base';
            return;
        }

        if (form.checkValidity()) {

            // SweetAlert2
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

                    // Crear objeto con los datos del formulario
                    const formData = {
                        idProd: products.length + 1, // Asignar un nuevo ID
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
                        priceWithKit: kitChecked ? priceWithKit : null,
                        discount: parseInt(document.getElementById('courseDiscount').value) || 0,
                        rating: parseInt(document.getElementById('courseRating').value),
                        mainImage: mainImageUrl,
                        additionalImages: additionalImages.files.length > 0 ?
                            Array.from(additionalImages.files).slice(0, 3).map(file => file.name) : []
                    };

                    // Añade información al local storage
                    localStorage.setItem('curso', JSON.stringify(formData));

                    // for (const file of additionalImages.files) {
                    //     sendImage(file);
                    // }

                    if (mainImageUrl) {
                        Swal.fire(
                            '¡Guardado!',
                            'El curso ha sido creado exitosamente.',
                            'success'
                        );
                    } else {
                        Swal.fire(
                            'Error al guardar',
                        );
                    }

                    // Resetear formulario
                    form.reset();
                    form.classList.remove('was-validated');
                    imagePreview.style.display = 'none';
                    galleryPreview.innerHTML = '';
                    coursePriceWithKit.closest('.mb-3').style.display = 'none';
                }
            });
        }

        form.classList.add('was-validated');
    }, false);

    // Ocultar inicialmente el campo de precio con kit
    coursePriceWithKit.closest('.mb-3').style.display = 'none';
});

// Función auxiliar para obtener idiomas seleccionados
function getSelectedLanguages() {
    const languages = [];
    if (document.getElementById('spanish').checked) languages.push('es');
    if (document.getElementById('english').checked) languages.push('en');
    if (document.getElementById('otherLanguage').checked && otherLanguageText.value) {
        languages.push(otherLanguageText.value);
    }
    return languages;
}

async function sendImage(file) {
    //Preparar los datos para enviar imagen a Cloudinary
    const formData = new FormData();
    //Cloudinary info
    const cloudName = "dwkykeqgz"; // Nombre en Cloudinary
    const uploadPreset = "imagen_cursos"; //Upload Preset
    formData.append("file", file); // El archivo
    formData.append("upload_preset", uploadPreset); // Tu preset unsigned

    //Enviar la imagen a Cloudinary
    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        //  Aquí está la URL de la imagen (que se debe utilizar para cargar la imagen)
        const uploadedImageUrl = data.secure_url;

        //  Para verificar en consola
        console.log(uploadedImageUrl);

        return data.secure_url;

    } catch (error) {
        console.log("Error al cargar imagen");
        return null;
    };

}