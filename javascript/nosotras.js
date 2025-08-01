
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