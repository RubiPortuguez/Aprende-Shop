//declaramos campos
const iptNombre = document.getElementById("iptNombre");
const iptCorreo = document.getElementById("iptCorreo");
const iptTelefono = document.getElementById("iptTel");
const iptPassword = document.getElementById("iptPassword");
const iptConfirmPassword = document.getElementById("iptConfirmPassword");
const selectUsuario = document.getElementById("selectUsuario");

const form = document.getElementsByTagName("form").item(0);

//alerta campos invalidos
const invalidName = document.getElementById("invalidName");
const invalidCorreo = document.getElementById("invalidCorreo");
const invalidTelefono = document.getElementById("invalidTelefono");
const invalidPassword = document.getElementById("invalidPassword");
const invalidConfirmPassword = document.getElementById("invalidConfirmPassword");
const invalidSelectUsuario = document.getElementById("invalidSelectUsuario");

//boton
const btnRegistro = document.getElementById("btnRegistro");
//label campos
const labelNombre = document.getElementById("labelNombre");
const labelCorreo = document.getElementById("labelCorreo");
const labelTelefono = document.getElementById("labelTelefono");
const labelPassword = document.getElementById("labelPassword");
const labelConfirmPassword = document.getElementById("labelConfirmPassword");
const labelSelectUsuario = document.getElementById("labelSelectUsuario");

//mensaje valido
const mensajeValido = `<div class="valid-feedback" id="mensajeVal"> 
                            Campo valido
                        </div>`;


//Mensaje validación
function inputValido(input, nombre) {
    input.classList.add("is-valid");
    nombre.insertAdjacentHTML("beforeend", mensajeValido);
}
//validacion nombre
function validarNombre(nombre) {
    const regex = new RegExp("^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ\\s]+$");
    return regex.test(nombre);
}
//validacion correo
function validarCorreo(correo) {
    const regex = new RegExp(/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/);
    return regex.test(correo);
}
//validación numero telefonico
function validarTelefono(telefono) {
    const regex = new RegExp(`^[\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$`);
    return regex.test(telefono) && !/^0+$/.test(telefono.replace(/\D/g, '')); //no acepta solo ceros
}
// validación contraseña (mínimo 8, 1 número, 1 letra, 1 caracter especial)
function validarPassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&.,;:_\-])[A-Za-z\d@$!%*?&.,;:_\-]{8,}$/;
    return regex.test(password);
}
//validación confirmar contraseña
function confirmarPassword(password, confirmPassword) {
    return password === confirmPassword;
}
//Validación tipo usuario
function validarTipoUsuario(tipo) {
    return tipo !== "";
}






//orejita boton
btnRegistro.addEventListener("click", function (event) {
    event.preventDefault();
    //ocultar alertas invalido
    invalidName.style.display = "none";
    invalidCorreo.style.display = "none";
    invalidTelefono.style.display = "none";
    invalidPassword.style.display = "none";
    invalidConfirmPassword.style.display = "none";
    invalidSelectUsuario.style.display = "none";

    //ocultar alertas valido
    document.querySelectorAll(".valid-feedback").forEach(el => el.remove());

    //limpiar clases previas
    iptNombre.classList.remove("is-valid", "is-invalid");
    iptCorreo.classList.remove("is-valid", "is-invalid");
    iptTelefono.classList.remove("is-valid", "is-invalid");
    iptPassword.classList.remove("is-valid", "is-invalid");
    iptConfirmPassword.classList.remove("is-valid", "is-invalid");
    selectUsuario.classList.remove("is-valid", "is-invalid");

    //condicionales
    if (!validarNombre(iptNombre.value)) {
        iptNombre.classList.add("is-invalid");
        invalidName.style.display = "block";

    } else {
        inputValido(iptNombre, labelNombre);
    }//validarNombre

    if (!validarCorreo(iptCorreo.value)) {
        iptCorreo.classList.add("is-invalid");
        invalidCorreo.style.display = "block";
    } else {
        inputValido(iptCorreo, labelCorreo);
    }//validarCorreo

    if (!validarTelefono(iptTelefono.value)) {
        iptTelefono.classList.add("is-invalid");
        invalidTelefono.style.display = "block";
    } else {
        inputValido(iptTelefono, labelTelefono);
    }//validarTelefono

    if (!validarPassword(iptPassword.value)) {
        iptPassword.classList.add("is-invalid");
        invalidPassword.style.display = "block";
    } else {
        inputValido(iptPassword, labelPassword);
    }//validarPassword

    if (!confirmarPassword(iptPassword.value, iptConfirmPassword.value)) {
        iptConfirmPassword.classList.add("is-invalid");
        invalidConfirmPassword.style.display = "block";
    } else {
        inputValido(iptConfirmPassword, labelConfirmPassword);
    }//confirmarPassword

    if (!validarTipoUsuario(selectUsuario.value)) {
        selectUsuario.classList.add("is-invalid");
        invalidSelectUsuario.style.display = "block";
    } else {
        selectUsuario.classList.remove("is-invalid");
        selectUsuario.classList.add("is-valid");
    }//validarTipoUsuario


});//orejita boton