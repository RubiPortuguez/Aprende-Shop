
const copiarCorreo = document.getElementsByClassName('copiarCorreo')

for (let i = 0; i < copiarCorreo.length; i++) {
    copiarCorreo[i].addEventListener('click', function(event){
        event.preventDefault();
        const correoPersona = this.dataset.correo;

        navigator.clipboard.writeText(correoPersona).then(function(){
            Swal.fire({
              title: `Correo ${correoPersona} copiado al portapapeles`,
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
        })
    });
};

document.addEventListener('DOMContentLoaded', function() {
    const myCarousel = document.getElementById('equipoCarousel');
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000, // Cambia cada 3 segundos
        pause: 'hover', // Pausa al hacer hover
        wrap: true // Vuelve al inicio después del último
    });
});