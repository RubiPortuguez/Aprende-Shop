//Script Dark Mode + Modales 
  window.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("userName");
    if (savedName)
      document.getElementById("userName").textContent = savedName;

    const savedDesc = localStorage.getItem("userDesc");
    if (savedDesc)
      document.getElementById("userDesc").firstChild.textContent =
        savedDesc + " ";

    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
      document.getElementById("userEmail").textContent = savedEmail;
      document.getElementById("userEmail").href = "mailto:" + savedEmail;
    }

    // Cargar avatar guardado si tienes avatar con id profilePic
    const savedAvatar = localStorage.getItem("userAvatar");
    if (savedAvatar) {
      document.getElementById("profilePic").src = savedAvatar;
      if (document.getElementById("headerAvatar"))
        document.getElementById("headerAvatar").src = savedAvatar;
    }
  });

  const switchMode = document.getElementById("modeSwitch");

  // Aplicar preferencia al cargar con localStorage
  if (localStorage.getItem("theme") === "dark") {
    applyDarkMode(true);
    switchMode.checked = true;
  }

  // Evento cambio de tema
  switchMode.addEventListener("change", () => {
    if (switchMode.checked) {
      applyDarkMode(true);
      localStorage.setItem("theme", "dark");
    } else {
      applyDarkMode(false);
      localStorage.setItem("theme", "light");
    }
  });

  function applyDarkMode(enable) {
    document.body.classList.toggle("bg-dark", enable);
    document.body.classList.toggle("text-white", enable);

    // Tarjetas
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.toggle("bg-dark", enable);
      card.classList.toggle("text-white", enable);
    });

    // Descripción (para que no se quede gris en dark mode)
    document.querySelectorAll("#userDesc").forEach((desc) => {
      if (enable) {
        desc.classList.remove("text-muted");
        desc.classList.add("text-light");
      } else {
        desc.classList.remove("text-light");
        desc.classList.add("text-muted");
      }
    });

    // Íconos de edición (para que se vean en dark mode)
    document.querySelectorAll(".bi-pencil-square").forEach((icon) => {
      if (enable) {
        icon.style.color = "#fff";
      } else {
        icon.style.color = "";
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const $  = (s) => document.querySelector(s);
    const $$ = (s) => Array.from(document.querySelectorAll(s));
  
    function hideModal(id) {
      const el = document.getElementById(id);
      if (!el || !window.bootstrap) return;
      bootstrap.Modal.getOrCreateInstance(el).hide();
    }
  
    // Avatares
    $$('.avatar-select').forEach((avatar) => {
      avatar.addEventListener('click', () => {
        const profilePic   = $('#profilePic');
        const headerAvatar = $('#headerAvatar');
        if (profilePic)   profilePic.src = avatar.src;
        if (headerAvatar) headerAvatar.src = avatar.src;
        try { localStorage.setItem('userAvatar', avatar.src); } catch {}
        hideModal('avatarModal');
      });
    });
  
    // Guardar nombre
    const saveNameBtn = $('#saveNameBtn');
    if (saveNameBtn) {
      saveNameBtn.addEventListener('click', () => {
        const val = ($('#userNameInput')?.value || '').trim();
        if (val) {
          const userName = $('#userName');
          if (userName) userName.textContent = val;
          try { localStorage.setItem('userName', val); } catch {}
        }
        hideModal('editNameModal');
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
          try { localStorage.setItem('userDesc', val); } catch {}
        }
        hideModal('editDescModal');
      });
    }
  
    // Guardar email
    const saveEmailBtn = $('#saveEmailBtn');
    if (saveEmailBtn) {
      saveEmailBtn.addEventListener('click', () => {
        const val = ($('#userEmailInput')?.value || '').trim();
        if (val) {
          const a = $('#userEmail');
          if (a) { a.textContent = val; a.href = 'mailto:' + val; }
          try { localStorage.setItem('userEmail', val); } catch {}
        }
        hideModal('editEmailModal');
      });
    }
  
    // Cambio de contraseña (sin “ojitos”)
    const form = $('#changePasswordForm');
    if (form) {
      const currentPassword = $('#currentPassword');
      const newPassword     = $('#newPassword');
      const confirmPassword = $('#confirmPassword');
      const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  
      const setValidity = (input, ok) => input && (input.classList.toggle('is-invalid', !ok), input.classList.toggle('is-valid', ok));
  
      const validate = () => {
        const curOk     = !!(currentPassword?.value.trim());
        const passOk    = strongRegex.test(newPassword?.value || '');
        const confirmOk = passOk && (confirmPassword?.value === newPassword?.value);
        setValidity(currentPassword, curOk);
        setValidity(newPassword, passOk);
        setValidity(confirmPassword, confirmOk);
        return curOk && passOk && confirmOk;
      };
  
      ['input','change'].forEach(ev => {
        currentPassword?.addEventListener(ev, validate);
        newPassword?.addEventListener(ev, validate);
        confirmPassword?.addEventListener(ev, validate);
      });
  
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validate()) return;
        if (window.Swal) Swal.fire({ title: 'Contraseña actualizada', icon: 'success' });
        else alert('Contraseña actualizada');
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
  