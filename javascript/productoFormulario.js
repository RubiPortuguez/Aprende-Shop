// ./javascript/productoFormulario.js
document.addEventListener("DOMContentLoaded", () => {
  // --- Referencias mínimas necesarias ---
  const form = document.getElementById("product-form");

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

  // Contador descripción corta
  shortDescription.addEventListener("input", function () {
    if (this.value.length > 200) this.value = this.value.slice(0, 200);
    charCount.textContent = this.value.length;
  });

  // Validación precio kit > precio base
  coursePriceWithKit.addEventListener("input", function () {
    const base = parseFloat(coursePrice.value) || 0;
    const kit = parseFloat(this.value) || 0;
    if (kit > 0 && kit <= base) {
      this.classList.add("is-invalid");
      this.nextElementSibling.textContent = "El precio con kit debe ser mayor al precio base";
    } else {
      this.classList.remove("is-invalid");
    }
  });

  // Guardado en localStorage (clave: "cursos")
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    const base = parseFloat(coursePrice.value);
    const kitChecked = includesKit.checked;
    const kit = parseFloat(coursePriceWithKit.value);

    if (kitChecked && (isNaN(kit) || kit <= base)) {
      coursePriceWithKit.classList.add("is-invalid");
      coursePriceWithKit.nextElementSibling.textContent =
        "El precio con kit debe ser mayor al precio base";
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

    const data = {
      id: Date.now(),
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
      rating: parseInt(document.getElementById("courseRating").value, 10) || 0
    };

    const cursos = JSON.parse(localStorage.getItem("cursos") || "[]");
    cursos.push(data);
    localStorage.setItem("cursos", JSON.stringify(cursos));

    // Feedback
    if (window.Swal) {
      Swal.fire("¡Guardado!", "El curso se guardó en localStorage (clave: \"cursos\").", "success");
    } else {
      alert('Guardado. Revisa localStorage → clave "cursos".');
    }

    form.reset();
    toggleKitUI(false);
    charCount.textContent = "0";
    form.classList.remove("was-validated");
  });
});



