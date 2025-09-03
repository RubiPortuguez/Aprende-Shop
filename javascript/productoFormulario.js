import { products } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  // --- Referencias mínimas necesarias ---
  const form = document.getElementById("product-form");

  const mainImage = document.getElementById("mainImage");
  const additionalImages = document.getElementById("additionalImages");

  const includesKit = document.getElementById("includesKit");
  const kitDescriptionContainer = document.getElementById("kitDescriptionContainer");
  const kitDescription = document.getElementById("kitDescription");

  const priceWithKitContainer = document.getElementById("priceWithKitContainer");
  const coursePriceWithKit = document.getElementById("coursePriceWithKit");

  const coursePrice = document.getElementById("coursePrice");

  const shortDescription = document.getElementById("shortDescription");
  const charCount = document.getElementById("charCount");

  const otherLanguage = document.getElementById("otherLanguage");
  const otherLanguageText = document.getElementById("otherLanguageText");

  // --- Helpers UI ---
  const toggleKitUI = (checked) => {
    kitDescriptionContainer.style.display = checked ? "block" : "none";
    priceWithKitContainer.style.display = checked ? "block" : "none";
    if (checked) {
      coursePriceWithKit.setAttribute("required", "true");
    } else {
      coursePriceWithKit.removeAttribute("required");
      coursePriceWithKit.value = "";
      if (kitDescription) kitDescription.value = "";
      coursePriceWithKit.classList.remove("is-invalid");
    }
  };

  // Estado inicial
  toggleKitUI(includesKit.checked);
  otherLanguageText.style.display = otherLanguage.checked ? "block" : "none";

  // Switch kit
  includesKit.addEventListener("change", function () {
    toggleKitUI(this.checked);
  });

  // “Otro idioma”
  otherLanguage.addEventListener("change", function () {
    otherLanguageText.style.display = this.checked ? "block" : "none";
    if (!this.checked) otherLanguageText.value = "";
  });

  // Contador + validación descripción corta
  shortDescription.addEventListener("input", function () {
    // Limitar máximo a 200
    if (this.value.length > 200) this.value = this.value.slice(0, 200);
    charCount.textContent = this.value.length;

    // Validar mínimo de 10 caracteres
    if (this.value.length < 10) {
      this.setCustomValidity("La descripción corta debe tener al menos 10 caracteres");
    } else {
      this.setCustomValidity(""); // Limpia el error si ya cumple
    }
  });

  // Validación precio kit > precio base
  coursePriceWithKit.addEventListener("input", function () {
    const base = parseFloat(coursePrice.value) || 0;
    const kit = parseFloat(this.value) || 0;
    if (kit > 0 && kit <= base) {
      this.classList.add("is-invalid");
      if (this.nextElementSibling) {
        this.nextElementSibling.textContent = "El precio con kit debe ser mayor al precio base";
      }
    } else {
      this.classList.remove("is-invalid");
    }
  });

  // Guardado en localStorage (clave: "cursos")
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    const base = parseFloat(coursePrice.value);
    const kitChecked = includesKit.checked;
    const kit = parseFloat(coursePriceWithKit.value);

    if (kitChecked && (isNaN(kit) || kit <= base)) {
      coursePriceWithKit.classList.add("is-invalid");
      if (coursePriceWithKit.nextElementSibling) {
        coursePriceWithKit.nextElementSibling.textContent =
          "El precio con kit debe ser mayor al precio base";
      }
      return;
    }

    // Validación de imágenes
    if (!mainImage.files[0]) {
      if (window.Swal) {
        Swal.fire("Error", "Debes seleccionar una imagen principal", "error");
      } else {
        alert("Debes seleccionar una imagen principal");
      }
      return;
    }

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const languages = [];
    if (document.getElementById("spanish").checked) languages.push("es");
    if (document.getElementById("english").checked) languages.push("en");
    if (otherLanguage.checked && otherLanguageText.value) languages.push(otherLanguageText.value);

    // Recuperar cursos ANTES de usarlos
    const cursos = JSON.parse(localStorage.getItem("cursos") || "[]");

    // Subir imagen principal a Cloudinary
    let mainImageUrl = null;
    if (mainImage.files[0]) {
      mainImageUrl = await sendImage(mainImage.files[0]);
    }

    // Subir imágenes adicionales
    let additionalImageUrls = [];
    if (additionalImages.files.length > 0) {
      const files = Array.from(additionalImages.files).slice(0, 3);
      for (const file of files) {
        const url = await sendImage(file);
        if (url) additionalImageUrls.push(url);
      }
    }

    const idProd = Math.max(0, ...products.map(p => p.idProd || 0)) + 1;


    // Crear objeto curso
    const data = {
      idProd: idProd,
      name: document.getElementById("courseName").value,
      shortDescription: shortDescription.value,
      fullDescription: document.getElementById("fullDescription").value,
      category: document.getElementById("courseCategory").value,
      difficulty: document.querySelector('input[name="difficulty"]:checked').value,
      duration: {
        value: document.getElementById("courseDuration").value,
        unit: document.getElementById("durationUnit").value,
      },
      resolution: document.getElementById("videoResolution").value,
      languages,
      materials: document.getElementById("materialsList").value
        .split(/[\n,]/).map(x => x.trim()).filter(Boolean),
      includesKit: kitChecked,
      kitDescription: kitChecked ? kitDescription.value : null,
      price: base,
      priceWithKit: kitChecked ? kit : null,
      rating: parseInt(document.getElementById("courseRating").value, 10) || 0,
      mainImage: mainImageUrl, // URL de Cloudinary
      additionalImages: additionalImageUrls // URLs de Cloudinary
    };

    // Guardar curso en localStorage
    cursos.push(data);
    localStorage.setItem("cursos", JSON.stringify(cursos));

    // Feedback
    if (window.Swal) {
      Swal.fire("¡Enviado con éxito!", "El curso se guardó correctamente", "success");
    } else {
      alert("¡Enviado con éxito!");
    }

    // Reset
    form.reset();
    toggleKitUI(false);
    charCount.textContent = "0";
    form.classList.remove("was-validated");
  });
});

// Función para subir imágenes a Cloudinary
async function sendImage(file) {
  const formData = new FormData();
  const cloudName = "dwkykeqgz"; // checar si es otro cloud
  const uploadPreset = "imagen_cursos"; // cehcar si coincide con el de Cloudinary
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
    console.error("Error al cargar imagen", error);
    return null;
  }
}



