//declaramos campos
const iptCorreo = document.getElementById("iptCorreo");
const iptTelefono = document.getElementById("iptTel");
const iptNombre = document.getElementById("iptNombre");
const iptMensaje = document.getElementById("iptMensaje");
const form = document.getElementsByTagName("form").item(0);
//alerta campos invalidos
const invalidName = document.getElementById("invalidName");
const invalidCorreo = document.getElementById("invalidCorreo");
const invalidTelefono = document.getElementById("invalidTelefono");
const invalidMensaje = document.getElementById("invalidMensaje");
//boton
const btnEnviar = document.getElementById("btnEnviar");
//label campos
const labelNombre = document.getElementById("labelNombre");
const labelCorreo = document.getElementById("labelCorreo");
const labelTelefono = document.getElementById("labelTelefono");
const labelMensaje = document.getElementById("labelMensaje");

//mensaje valido
const mensajeValido = `<div class="valid-feedback" id="mensajeVal"> 
                            Campo valido
                        </div>`;
//validacion nombre
function validarNombre(nombre) {
    const regex = new RegExp("^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ\\s]+$");
    return regex.test(nombre);
}
//Mensaje validación
function inputValido(input, nombre) {
    input.classList.add("is-valid");
    nombre.insertAdjacentHTML("beforeend", mensajeValido);
}
//validacion correo
function validarCorreo(correo) {
    const regex = new RegExp(/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/);
    return regex.test(correo);
}
//validación numero telefonico
function validarTelefono(telefono) {
    const regex = new RegExp(`^(?!0+$)(?!1+$)(?!0*1+0*$)[1-9][0-9]{9}$`);
    return regex.test(telefono) && !/^0+$/.test(telefono.replace(/\D/g, '')); //no acepta solo ceros
}
//validacion mensaje
function validarMensaje(mensaje) {
    if (mensaje.length <= 10) {
        return false;
    }
    return true;
}

//orejita boton
btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    //ocultar alertas invalido
    invalidName.style.display = "none";
    invalidCorreo.style.display = "none";
    invalidTelefono.style.display = "none";
    invalidMensaje.style.display = "none";
    //ocultar alertas valido
    document.querySelectorAll(".valid-feedback").forEach(el => el.remove());

    iptNombre.classList.remove("is-valid", "is-invalid");
    iptCorreo.classList.remove("is-valid", "is-invalid");
    iptTelefono.classList.remove("is-valid", "is-invalid");
    iptMensaje.classList.remove("is-valid", "is-invalid");
    //condicionales
    if (!validarNombre(iptNombre.value)) {
        iptNombre.classList.add("is-invalid");
        invalidName.style.display = "block";
        
    } else {
        inputValido(iptNombre, labelNombre);
    }

    if (!validarCorreo(iptCorreo.value)) {
        iptCorreo.classList.add("is-invalid");
        invalidCorreo.style.display = "block";
    } else {
        inputValido(iptCorreo, labelCorreo);
    }

    if (!validarTelefono(iptTelefono.value)) {
        iptTelefono.classList.add("is-invalid");
        invalidTelefono.style.display = "block";
    } else {
        inputValido(iptTelefono, labelTelefono);
    }

    if (!validarMensaje(iptMensaje.value)) {
        iptMensaje.classList.add("is-invalid");
        invalidMensaje.style.display = "block";
    } else {
        inputValido(iptMensaje, labelMensaje);
    }

       // Si todo está validado correctamente, enviar con EmailJS
if (validarNombre(iptNombre.value) && validarCorreo(iptCorreo.value) && validarTelefono(iptTelefono.value) &&validarMensaje(iptMensaje.value))
    {
    const templateParams = {
    nombre_usuario: iptNombre.value,
    correo_usuario: iptCorreo.value,
    telefono_usuario: iptTelefono.value,
    mensaje_usuario: iptMensaje.value,
  };
  emailjs.send("service_jajmsal", "template_8c8ushm", templateParams)
    .then(function () {
      //alert("✅ ¡Mensaje enviado con éxito!");

            Swal.fire({
              title: "¡Información enviada!",
              icon: "success",
              draggable: true,
              // Personalización de botones
              buttonsStyling: true, // Mantener estilos base de SweetAlert2
              confirmButtonText: "Aceptar",
              confirmButtonColor: "#985EFF", // Color azul (puedes cambiarlo)
              cancelButtonColor: "#d33", // Color rojo para botón cancelar
              // Personalización de fuentes
              customClass: {
                title: "mi-titulo", // Clase para el título
                content: "mi-contenido", // Clase para el contenido
                confirmButton: "mi-boton", // Clase para el botón confirmar
              },
            });
      form.reset();
      document.querySelectorAll(".is-valid").forEach(el => el.classList.remove("is-valid"));
      document.querySelectorAll(".valid-feedback").forEach(el => el.remove());
    }, 
    
    function (error) {
      console.error("Error:", error);
      alert("❌ Ocurrió un error al enviar el mensaje.");
    });
}
});