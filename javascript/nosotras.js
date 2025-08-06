
const copiarCorreo = document.getElementsByClassName('copiarCorreo')

for (let i = 0; i < copiarCorreo.length; i++) {
    copiarCorreo[i].addEventListener('click', function(event){
        event.preventDefault();
        const correoPersona = this.dataset.correo;

        navigator.clipboard.writeText(correoPersona).then(function(){
            alert(`Correo ${correoPersona} copiado al portapapeles`);
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