// //Script Dark Mode + Modales 
//   window.addEventListener("DOMContentLoaded", () => {
//     const savedName = localStorage.getItem("userName");
//     if (savedName)
//       document.getElementById("userName").textContent = savedName;

//     const savedDesc = localStorage.getItem("userDesc");
//     if (savedDesc)
//       document.getElementById("userDesc").firstChild.textContent =
//         savedDesc + " ";

//     const savedEmail = localStorage.getItem("userEmail");
//     if (savedEmail) {
//       document.getElementById("userEmail").textContent = savedEmail;
//       document.getElementById("userEmail").href = "mailto:" + savedEmail;
//     }

//     // Cargar avatar guardado si tienes avatar con id profilePic
//     const savedAvatar = localStorage.getItem("userAvatar");
//     if (savedAvatar) {
//       document.getElementById("profilePic").src = savedAvatar;
//       if (document.getElementById("headerAvatar"))
//         document.getElementById("headerAvatar").src = savedAvatar;
//     }
//   });

//   const switchMode = document.getElementById("modeSwitch");

//   // Aplicar preferencia al cargar con localStorage
//   if (localStorage.getItem("theme") === "dark") {
//     applyDarkMode(true);
//     switchMode.checked = true;
//   }

//   // Evento cambio de tema
//   switchMode.addEventListener("change", () => {
//     if (switchMode.checked) {
//       applyDarkMode(true);
//       localStorage.setItem("theme", "dark");
//     } else {
//       applyDarkMode(false);
//       localStorage.setItem("theme", "light");
//     }
//   });

//   function applyDarkMode(enable) {
//     document.body.classList.toggle("bg-dark", enable);
//     document.body.classList.toggle("text-white", enable);

//     // Tarjetas
//     document.querySelectorAll(".card").forEach((card) => {
//       card.classList.toggle("bg-dark", enable);
//       card.classList.toggle("text-white", enable);
//     });

//     // Descripción (para que no se quede gris en dark mode)
//     document.querySelectorAll("#userDesc").forEach((desc) => {
//       if (enable) {
//         desc.classList.remove("text-muted");
//         desc.classList.add("text-light");
//       } else {
//         desc.classList.remove("text-light");
//         desc.classList.add("text-muted");
//       }
//     });

//     // Íconos de edición (para que se vean en dark mode)
//     document.querySelectorAll(".bi-pencil-square").forEach((icon) => {
//       if (enable) {
//         icon.style.color = "#fff";
//       } else {
//         icon.style.color = "";
//       }
//     });
//   }

document.addEventListener('DOMContentLoaded', () => {
    const $ = (s) => document.querySelector(s);
    const $$ = (s) => Array.from(document.querySelectorAll(s));

    function hideModal(id) {
        const el = document.getElementById(id);
        if (!el || !window.bootstrap) return;
        bootstrap.Modal.getOrCreateInstance(el).hide();
    }

    // Cargar avatar guardado
    const profilePic = document.getElementById('profilePic');
    const headerAvatar = document.getElementById('headerAvatar');

    if (profilePic || headerAvatar) {
        try {
            const usuarioInicio = localStorage.getItem('usuarioInicio');

            if (usuarioInicio) {
                const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
                const usuarioActual = usuarios.find(user => user.email === usuarioInicio);

                // Si el usuario tiene avatar guardado, cargarlo
                if (usuarioActual && usuarioActual.avatar) {
                    if (profilePic) profilePic.src = usuarioActual.avatar;
                    if (headerAvatar) headerAvatar.src = usuarioActual.avatar;
                }
            }

            // También intentar cargar desde userAvatar (por compatibilidad)
            const savedAvatar = localStorage.getItem('userAvatar');
            if (savedAvatar && (!usuarioActual || !usuarioActual.avatar)) {
                if (profilePic) profilePic.src = savedAvatar;
                if (headerAvatar) headerAvatar.src = savedAvatar;
            }
        } catch (error) {
            console.warn('No se pudo cargar el avatar:', error);
        }
    }
    $$('.avatar-select').forEach((avatar) => {
        avatar.addEventListener('click', () => {
            const profilePic = $('#profilePic');
            const headerAvatar = $('#headerAvatar');
            if (profilePic) profilePic.src = avatar.src;
            if (headerAvatar) headerAvatar.src = avatar.src;

            try {
                // Guardar en userAvatar (compatibilidad)
                localStorage.setItem('userAvatar', avatar.src);

                // Guardar en el array de usuarios
                const usuarioInicio = localStorage.getItem('usuarioInicio');
                if (usuarioInicio) {
                    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
                    const index = usuarios.findIndex(user => user.email === usuarioInicio);

                    if (index !== -1) {
                        usuarios[index].avatar = avatar.src; // Guardar avatar en el usuario
                        localStorage.setItem('usuarios', JSON.stringify(usuarios));
                    }
                }
            } catch (error) {
                console.warn('Error al guardar avatar:', error);
            }

            hideModal('avatarModal');
        });
    });

    // Guardar nombre
    const userName = document.getElementById('userName');
    try {
        const usuarioInicio = localStorage.getItem('usuarioInicio');

        if (usuarioInicio) {
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            const usuarioActual = usuarios.find(user => user.email === usuarioInicio);
            if (usuarioActual && usuarioActual.name) {
                userName.textContent = usuarioActual.name;
            }
        }
    } catch (error) {
        console.warn('No se pudo acceder al localStorage:', error);
    }

    const saveNameBtn = $('#saveNameBtn');
    if (saveNameBtn) {
        saveNameBtn.addEventListener('click', () => {
            const val = ($('#userNameInput')?.value || '').trim();
            if (val) {
                // Validar que el nombre no esté vacío y tenga al menos 2 caracteres
                if (val.length < 2) {
                    if (window.Swal) {
                        Swal.fire({
                            title: 'Nombre muy corto',
                            text: 'El nombre debe tener al menos 2 caracteres',
                            icon: 'warning'
                        });
                    } else {
                        alert('El nombre debe tener al menos 2 caracteres');
                    }
                    return;
                }

                // Validar que solo contenga letras, espacios y algunos caracteres especiales
                const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;
                if (!nameRegex.test(val)) {
                    if (window.Swal) {
                        Swal.fire({
                            title: 'Nombre inválido',
                            text: 'El nombre solo puede contener letras, espacios, apostrofes y guiones',
                            icon: 'warning'
                        });
                    } else {
                        alert('El nombre solo puede contener letras, espacios, apostrofes y guiones');
                    }
                    return;
                }

                // Si pasa las validaciones, actualizar
                const userName = $('#userName');
                if (userName) userName.textContent = val;

                try {
                    const usuarioInicio = localStorage.getItem('usuarioInicio');

                    if (usuarioInicio) {
                        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
                        const index = usuarios.findIndex(user => user.email === usuarioInicio);

                        if (index !== -1) {
                            usuarios[index].name = val;
                            localStorage.setItem('usuarios', JSON.stringify(usuarios));
                        }
                    }

                    localStorage.setItem('userName', val);

                    // Mostrar éxito
                    if (window.Swal) {
                        Swal.fire({
                            title: 'Nombre actualizado',
                            text: 'Tu nombre se ha actualizado correctamente',
                            icon: 'success'
                        });
                    } else {
                        alert('Nombre actualizado correctamente');
                    }

                } catch (error) {
                    console.warn('No se pudo actualizar el localStorage:', error);
                    if (window.Swal) {
                        Swal.fire({
                            title: 'Error',
                            text: 'No se pudo guardar el nombre. Inténtalo de nuevo.',
                            icon: 'error'
                        });
                    }
                }

                hideModal('editNameModal');
            } else {
                // Si el campo está vacío
                if (window.Swal) {
                    Swal.fire({
                        title: 'Campo requerido',
                        text: 'Por favor ingresa tu nombre',
                        icon: 'warning'
                    });
                } else {
                    alert('Por favor ingresa tu nombre');
                }
            }
        });
    }

    // Guardar descripción
    const saveDescBtn = $('#saveDescBtn');
    if (saveDescBtn) {
        saveDescBtn.addEventListener('click', () => {
            const val = ($('#userDescInput')?.value || '').trim();
            if (val) {
                const span = $('#userDescText');
                if (span) span.textContent = val;
                else {
                    const p = $('#userDesc');
                    if (p && p.firstChild) p.firstChild.nodeValue = val + ' ';
                }
                try { localStorage.setItem('userDesc', val); } catch { }
            }
            hideModal('editDescModal');
        });
    }

    // Cargar email
    const userEmail = document.getElementById('userEmail');
    if (userEmail) {
        try {
            const usuarioInicio = localStorage.getItem('usuarioInicio');

            if (usuarioInicio) {
                const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
                const usuarioActual = usuarios.find(user => user.email === usuarioInicio);
                if (usuarioActual && usuarioActual.email) {
                    userEmail.textContent = usuarioActual.email;
                    userEmail.href = 'mailto:' + usuarioActual.email;
                }
            }
        } catch (error) {
            console.warn('No se pudo cargar el email del localStorage:', error);
        }
    }

    // Guardar email
    const saveEmailBtn = $('#saveEmailBtn');
    if (saveEmailBtn) {
        saveEmailBtn.addEventListener('click', () => {
            const val = ($('#userEmailInput')?.value || '').trim();
            if (val) {
                // Validar formato de email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailRegex.test(val)) {
                    // Mostrar error de validación
                    if (window.Swal) {
                        Swal.fire({
                            title: 'Email inválido',
                            text: 'Por favor ingresa un email válido',
                            icon: 'error'
                        });
                    } else {
                        alert('Por favor ingresa un email válido');
                    }
                    return; // No continuar si el email es inválido
                }

                try {
                    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
                    const usuarioInicio = localStorage.getItem('usuarioInicio');

                    // Buscar si otro usuario ya tiene este email
                    const emailExiste = usuarios.find(user => user.email === val && user.email !== usuarioInicio);

                    if (emailExiste) {
                        if (window.Swal) {
                            Swal.fire({
                                title: 'Email ya registrado',
                                text: 'Este email ya está siendo usado por otro usuario',
                                icon: 'warning'
                            });
                        } else {
                            alert('Este email ya está siendo usado por otro usuario');
                        }
                        return; // No continuar si el email ya existe
                    }
                } catch (error) {
                    console.warn('Error al verificar email duplicado:', error);
                }

                const a = $('#userEmail');
                if (a) {
                    a.textContent = val;
                    a.href = 'mailto:' + val;
                }

                try {
                    const usuarioInicio = localStorage.getItem('usuarioInicio');

                    if (usuarioInicio) {
                        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
                        const index = usuarios.findIndex(user => user.email === usuarioInicio);

                        if (index !== -1) {
                            usuarios[index].email = val; // Actualizar el email
                            localStorage.setItem('usuarios', JSON.stringify(usuarios));
                            localStorage.setItem('usuarioInicio', val); // Actualizar usuario actual
                        }
                    }

                    localStorage.setItem('userEmail', val);

                    // Mostrar éxito
                    if (window.Swal) {
                        Swal.fire({
                            title: 'Email actualizado',
                            text: 'Tu email se ha actualizado correctamente',
                            icon: 'success'
                        });
                    } else {
                        alert('Email actualizado correctamente');
                    }

                } catch (error) {
                    console.warn('No se pudo actualizar el email:', error);
                }

                hideModal('editEmailModal');
            }
        });
    }

    // Cambio de contraseña
    const form = $('#changePasswordForm');
    if (form) {
        const currentPassword = $('#currentPassword');
        const newPassword = $('#newPassword');
        const confirmPassword = $('#confirmPassword');
        const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        const setValidity = (input, ok) => input && (input.classList.toggle('is-invalid', !ok), input.classList.toggle('is-valid', ok));

        const validate = () => {
            const curOk = !!(currentPassword?.value.trim());
            const passOk = strongRegex.test(newPassword?.value || '');
            const confirmOk = passOk && (confirmPassword?.value === newPassword?.value);
            setValidity(currentPassword, curOk);
            setValidity(newPassword, passOk);
            setValidity(confirmPassword, confirmOk);
            return curOk && passOk && confirmOk;
        };

        ['input', 'change'].forEach(ev => {
            currentPassword?.addEventListener(ev, validate);
            newPassword?.addEventListener(ev, validate);
            confirmPassword?.addEventListener(ev, validate);
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!validate()) {
                if (window.Swal) {
                    Swal.fire({
                        title: 'Datos incompletos',
                        text: 'Por favor completa todos los campos correctamente',
                        icon: 'warning'
                    });
                }
                return;
            }

            try {
                const usuarioInicio = localStorage.getItem('usuarioInicio');

                if (usuarioInicio) {
                    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
                    const index = usuarios.findIndex(user => user.email === usuarioInicio);

                    if (index !== -1) {
                        // Verificar que la contraseña actual sea correcta
                        if (usuarios[index].password !== currentPassword.value.trim()) {
                            if (window.Swal) {
                                Swal.fire({
                                    title: 'Contraseña incorrecta',
                                    text: 'La contraseña actual no es correcta',
                                    icon: 'error'
                                });
                            } else {
                                alert('La contraseña actual no es correcta');
                            }
                            return;
                        }

                        // Verificar que la nueva contraseña sea diferente a la actual
                        if (usuarios[index].password === newPassword.value.trim()) {
                            if (window.Swal) {
                                Swal.fire({
                                    title: 'Contraseña repetida',
                                    text: 'La nueva contraseña debe ser diferente a la actual',
                                    icon: 'warning'
                                });
                            } else {
                                alert('La nueva contraseña debe ser diferente a la actual');
                            }
                            return;
                        }

                        // Actualizar la contraseña
                        usuarios[index].password = newPassword.value.trim();
                        localStorage.setItem('usuarios', JSON.stringify(usuarios));

                        // Mostrar éxito
                        if (window.Swal) {
                            Swal.fire({
                                title: 'Contraseña actualizada',
                                text: 'Tu contraseña se ha actualizado correctamente',
                                icon: 'success'
                            });
                        } else {
                            alert('Contraseña actualizada correctamente');
                        }

                    } else {
                        throw new Error('Usuario no encontrado');
                    }
                } else {
                    throw new Error('No hay usuario logueado');
                }

            } catch (error) {
                console.warn('Error al actualizar contraseña:', error);
                if (window.Swal) {
                    Swal.fire({
                        title: 'Error',
                        text: 'No se pudo actualizar la contraseña. Inténtalo de nuevo.',
                        icon: 'error'
                    });
                } else {
                    alert('Error al actualizar la contraseña');
                }
            }

            hideModal('changePasswordModal');
            form.reset();
            [currentPassword, newPassword, confirmPassword].forEach(i => i?.classList.remove('is-valid', 'is-invalid'));
        });
    }

    // ScrollSpy (opcional)
    if (/(^|\/)perfil\.html(\?|#|$)/.test(location.pathname) && window.bootstrap) {
        const spy = bootstrap.ScrollSpy.getOrCreateInstance(document.body, {
            target: '#perfilMenu',
            offset: 80,
        });
        spy.refresh();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const btnNuevoProducto = document.getElementById('btnNuevoProducto');
    if (btnNuevoProducto) {
        btnNuevoProducto.addEventListener('click', function () {
            window.location.href = 'formularioProducto.html';
        });
    }
});



// ------------- wishlist -----------------
//importar productos:
import { products } from "./data.js";
//importar función para agregar cards
import { addItem } from "./clasesCatalogo.js";
//importar función para redireccionamiento
import { redirection } from "./clasesCatalogo.js";


//traer wishlist de local storage y normalizar IDs a números
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
wishlist = wishlist.map(id => Number(id));

const itemsContainer = document.getElementById("itemsContainer");

//mostrar cursos - CON DEPURACIÓN
function mostrarCursosWishlist() {
    itemsContainer.innerHTML = "";
    console.log("Mostrando wishlist. IDs:", wishlist);
    
    if (wishlist.length === 0) {
        itemsContainer.innerHTML = `<p class="text-muted">No tienes cursos en tu lista de deseos.</p>`;
        return;
    }

    wishlist.forEach(id => {
        const product = products.find(p => p.idProd === id);
        if (product) {
            console.log("Agregando producto a la vista:", product.idProd, product.name);
            addItem(product);
        } else {
            console.warn("Producto no encontrado en data.js para ID:", id);
        }
    });
}

function quitarCursoWishlist(id) {
    wishlist = wishlist.filter(prodId => prodId !== id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    console.log("Producto removido. Nueva wishlist:", wishlist);
}

function renderWishlist() {
    mostrarCursosWishlist();

    const cards = document.querySelectorAll('.card-product');
    cards.forEach(card => {
        const btn = card.querySelector('.btn-wishlist');
        if (btn) {
            const id = Number(btn.dataset.id);
            redirection(card, id);
        }
    });

   
    const btnsWishlist = document.querySelectorAll('.btn-wishlist');
    console.log("Botones encontrados:", btnsWishlist.length);

    btnsWishlist.forEach(btn => {
        const id = Number(btn.dataset.id);
        const icon = btn.querySelector("i");
        
        // Estado visual
        if (wishlist.includes(id)) {
            icon.classList.replace("bi-heart", "bi-heart-fill");
        } else {
            icon.classList.replace("bi-heart-fill", "bi-heart");
        }


        btn.onclick = (event) => {
            event.preventDefault();
            event.stopPropagation();
            quitarCursoWishlist(id);
            renderWishlist();
        };
    });
}

// Verificar integridad de la wishlist al inicio
function verificarWishlist() {
    const wishlistFiltrada = wishlist.filter(id => 
        products.some(p => p.idProd === id)
    );
    
    if (wishlistFiltrada.length !== wishlist.length) {
        console.warn("Limpieando IDs inválidos de la wishlist");
        wishlist = wishlistFiltrada;
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
}

// En perfil.js, verifica que estás en la página correcta
if (window.location.pathname.includes('perfil.html')) {
    // Solo ejecutar la lógica de wishlist en la página de perfil
    verificarWishlist();
    renderWishlist();
}

//Faltan agregar algunos detalles:
//listo 1. que el botón de corazón esté relleno en perfil porque ya están en wishlist
//listo 2.que se quiten los cursos de la página de perfil al presionar el botón de corazon
// listo 3. que redirija a pag de producto desde la wishlist
//4. agregar funcionalidad de botón wishlist en página de producto

//////////////////////////////////////////////////



