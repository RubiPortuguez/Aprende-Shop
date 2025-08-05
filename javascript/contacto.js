const iptCorreo = document.getElementById("iptCorreo");
const iptTelefono = document.getElementById("iptTel");
const iptNombre = document.getElementById("iptNombre");
const iptMensaje = document.getElementById("iptMensaje");
const form = document.getElementsByTagName("form").item(0);

const invalidName = document.getElementById("invalidName");
const btnEnviar = document.getElementById("btnEnviar");
const labelNombre = document.getElementById("labelNombre");
const labelCorreo = document.getElementById("labelCorreo");
const invalidCorreo = document.getElementById("invalidCorreo");
const labelTelefono = document.getElementById("labelTelefono");
const invalidTelefono = document.getElementById("invalidTelefono");
const labelMensaje = document.getElementById("labelMensaje");
const invalidMensaje = document.getElementById("invalidMensaje");

//const valido = this.getElementById("valido");

const mensajeValido = `<div class="valid-feedback" id="mensajeVal"> 
                            Campo valido
                        </div>`;
//validacion nombre
function validarNombre(nombre) {
    const regex = new RegExp(`^[A-Za-zÁÉÍÓÚáéíóúñÑüÜ\s]{2,35}$`);
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
    const regex = new RegExp(`^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`);
    return regex.test(telefono);
}
//validacion mensaje
function validarMensaje(mensaje) {
    if (mensaje.length <= 10) {
        return false;
    }
    return true;
}


btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    invalidName.style.display = "none";
    invalidCorreo.style.display = "none";
    invalidTelefono.style.display = "none";
    invalidMensaje.style.display = "none";

    document.querySelectorAll(".valid-feedback").forEach(el => el.remove());

    iptNombre.classList.remove("is-valid", "is-invalid");
    iptCorreo.classList.remove("is-valid", "is-invalid");
    iptTelefono.classList.remove("is-valid", "is-invalid");
    iptMensaje.classList.remove("is-valid", "is-invalid");

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

});

