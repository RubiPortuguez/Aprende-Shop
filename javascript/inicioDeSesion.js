    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("error-msg");
    const btnIngresar = document.getElementById("btnIngresar");

    btnIngresar.addEventListener("click", function validarUsuario(e) {
        e.preventDefault();
        const iptEmail = document.getElementById("useremail").value.trim();
        const iptPassword = document.getElementById("userpassword").value.trim();

        // Validar campos vacíos
        if (iptEmail === "" || iptPassword === "") {
            showError("Por favor, completa todos los campos.");
        }

        // Obtener usuarios del localStorage
        const getUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        // Buscar usuario válido
        const buscarUsuario = getUsuarios.find(
            user => user.email === iptEmail && user.password === iptPassword
        );
        if (buscarUsuario) {
            window.location.href = "./index.html";
            localStorage.setItem("usuarioInicio",iptEmail);
        } else {
            showError("Usuario o contraseña incorrectos.");
        }

    });


    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.classList.remove("d-none");
    }


