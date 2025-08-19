
(() => {
  const LS_KEY = "aprendeshop_forum_posts_v2";
  const NAME_KEY = "aprendeshop_display_name";

  const form = document.getElementById("formPublicacion");
  const feed = document.getElementById("feed");
  const btnClearDemo = document.getElementById("btnClearDemo");
  const btnSeed = document.getElementById("btnSeed");

  // === Perfiles de usuarios (color y/o avatar URL) ===
  const USER_PROFILES = {
    "Miss Carla": { color: "var(--morado)", avatar: "" },
    "Profe Lili": { color: "var(--guinda)", avatar: "" },
    "AprendeShop Team": { color: "var(--verde-oscuro)", avatar: "" },
  };

  function getUserProfile(name) {
    return USER_PROFILES[name] || null;
  }
  function userColor(name) {
    const p = getUserProfile(name);
    return p?.color || "var(--guinda)";
  }
  function getAvatar(name) {
    const p = getUserProfile(name);
    if (p?.avatar) return p.avatar;
    return makeInitialsAvatar(name);
  }
  function makeInitialsAvatar(name) {
    const initials = (name || "?")
      .trim().split(/\s+/).filter(Boolean).slice(0, 2)
      .map(w => w[0].toUpperCase()).join("");

    const css = getComputedStyle(document.documentElement);
    const pick = (v, fb) => css.getPropertyValue(v).trim() || fb;
    const palette = [
      pick("--guinda", "#910039"),
      pick("--verde", "#008876"),
      pick("--morado", "#7C3AED"),
      pick("--verde-oscuro", "#006153"),
      pick("--verde-fosfo", "#00B19A"),
    ];
    let h = 0;
    for (let i = 0; i < (name || "").length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
    const bg = palette[Math.abs(h) % palette.length];
    const fg = "#ffffff";
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96">
        <rect width="100%" height="100%" rx="16" ry="16" fill="${bg}"/>
        <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
              font-family="Istok Web, Arial, sans-serif" font-size="40" fill="${fg}">${initials}</text>
      </svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg.trim());
  }

  // ==== Nombre (sin panel): por defecto Invitado; el botón Demo lo pone en "AprendeShop Team"
  function loadName() {
    return localStorage.getItem(NAME_KEY) || "Invitado";
  }
  function saveName(n) {
    localStorage.setItem(NAME_KEY, n);
  }
  let currentName = loadName();

  // ==== Datos ====
  function uid() {
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  }
  function timeAgo(ts) {
    const s = Math.max(1, Math.floor((Date.now() - ts) / 1000));
    if (s < 60) return s + "s";
    const m = Math.floor(s / 60);
    if (m < 60) return m + "m";
    const h = Math.floor(m / 60);
    if (h < 24) return h + "h";
    const d = Math.floor(h / 24);
    return d + "d";
  }
  function escapeHtml(str) {
    return String(str ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // Semilla demo (se carga SOLO al pulsar Demo)
  function demoSeed() {
    const now = Date.now();
    return [
      {
        id: uid(),
        user: "Miss Carla",
        avatar: "",
        title: "Pintura acrílica – Opiniones",
        body: "Tip: Aplica una capa de imprimación. ¿Qué les parece el curso chicos?",
        image: "",
        likes: 3,
        liked: false,
        comments: [
          { user: "Rebecca", text: "Los materiales van perfecto.", createdAt: now - 1000 * 60 * 20 },
          { user: "Jenny", text: "Me encantó el curso.", createdAt: now - 1000 * 60 * 10 },
        ],
        createdAt: now - 1000 * 60 * 60 * 6,
        isDemo: true,
      },
      {
        id: uid(),
        user: "Profe Juan",
        avatar: "",
        title: "Velas artesanales – fragancias",
        body: "¿Cuánto % de fragancia usan para cera de soya? Estoy probando 6–8%.",
        image: "",
        likes: 5,
        liked: false,
        comments: [
          { user: "Ana", text: "En soya me funciona 8%, ojo con el punto de vertido.", createdAt: now - 1000 * 60 * 45 },
          { user: "Rodrigo", text: "Entre 6 y 8% está bien. Agregar a 65–70°C ayuda.", createdAt: now - 1000 * 60 * 40 },
        ],
        createdAt: now - 1000 * 60 * 60 * 12,
        isDemo: true,
      },
    ];
  }

  // Inicia sin demo: si no hay nada guardado, arranca vacío
  function loadPosts() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
  let posts = loadPosts();
  function save() {
    localStorage.setItem(LS_KEY, JSON.stringify(posts));
  }

  // ==== Render ====
  function render() {
    if (!feed) return;
    if (!posts.length) {
      feed.innerHTML = `<div class="text-muted text-center py-5 border rounded bg-white">Aún no hay publicaciones.</div>`;
      return;
    }
    const realPosts = posts.filter(p => !p.isDemo).sort((a, b) => b.createdAt - a.createdAt);
    const demoPosts = posts.filter(p => p.isDemo);
    const ordered = [...realPosts, ...demoPosts];
    feed.innerHTML = ordered.map(cardHTML).join("");
  }

  function cardHTML(p) {
    const avatarPost = getAvatar(p.user);
    const heart = p.liked ? "bi-heart-fill" : "bi-heart";
    const heartLabel = p.liked ? "Quitar like" : "Dar like";
    const img = p.image ? `<img class="post-img mt-2" src="${escapeHtml(p.image)}" alt="imagen">` : "";

    const comments = (p.comments || [])
      .slice().sort((a, b) => b.createdAt - a.createdAt)
      .map(c => {
        const cAvatar = getAvatar(c.user);
        return `
          <div class="d-flex gap-2 mt-2">
            <img src="${cAvatar}" class="post-avatar" alt="avatar">
            <div class="flex-grow-1">
              <div class="bg-light border rounded p-2">
                <div class="small text-muted mb-1">
                  <strong class="comment-user" style="color:${userColor(c.user)}">${escapeHtml(c.user)}</strong>
                  · ${timeAgo(c.createdAt)}
                </div>
                <div>${escapeHtml(c.text)}</div>
              </div>
            </div>
          </div>`;
      }).join("");

    return `
      <div class="card shadow-sm" data-id="${p.id}">
        <div class="card-body">
          <div class="d-flex align-items-start gap-3">
            <img src="${avatarPost}" class="post-avatar" alt="avatar">
            <div class="flex-grow-1">
              <div class="d-flex align-items-center gap-2">
                <span class="fw-semibold post-user" style="color:${userColor(p.user)}">${escapeHtml(p.user)}</span>
                <span class="text-muted small">· ${timeAgo(p.createdAt)}</span>
              </div>
              <div class="fw-semibold mt-1">${escapeHtml(p.title)}</div>
              <div class="text-muted mt-1">${escapeHtml(p.body)}</div>
              ${img}
              <div class="d-flex align-items-center gap-3 mt-3">
                <button class="icon-btn like-btn" aria-label="${heartLabel}">
                  <i class="bi ${heart}"></i><span class="ms-1 small">${p.likes}</span>
                </button>
                <button class="icon-btn toggle-comment" aria-expanded="false">
                  <i class="bi bi-chat"></i><span class="ms-1 small">Comentar</span>
                </button>
              </div>
              <div class="comment-box d-none mt-3">
                <label class="form-label small">Nuevo comentario</label>
                <textarea class="form-control mb-2" rows="2" placeholder="Escribe un comentario..."></textarea>
                <div class="d-flex gap-2">
                  <button class="btn btn-sm btn-primary send-comment">Enviar</button>
                  <button class="btn btn-sm btn-outline-secondary cancel-comment">Cancelar</button>
                </div>
              </div>
              <div class="comments mt-2">${comments}</div>
            </div>
          </div>
        </div>
      </div>`;
  }

  // ==== Eventos ====
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }
    const title = document.getElementById("postTitle").value.trim();
    const body = document.getElementById("postBody").value.trim();
    const image = document.getElementById("postImage").value.trim();

    posts.push({
      id: uid(),
      user: currentName,
      avatar: "",
      title,
      body,
      image,
      likes: 0,
      liked: false,
      comments: [],
      createdAt: Date.now(),
      isPinned: false,
    });
    save();
    form.reset();
    form.classList.remove("was-validated");
    render();
  });

  feed?.addEventListener("click", (e) => {
    const card = e.target.closest(".card[data-id]");
    if (!card) return;
    const id = card.getAttribute("data-id");
    const post = posts.find((p) => p.id === id);
    if (!post) return;

    if (e.target.closest(".like-btn")) {
      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;
      save();
      render();
      return;
    }
    if (e.target.closest(".toggle-comment")) {
      const box = card.querySelector(".comment-box");
      const hidden = box.classList.toggle("d-none");
      if (!hidden) setTimeout(() => box.querySelector("textarea")?.focus(), 0);
      return;
    }
    if (e.target.closest(".send-comment")) {
      const ta = card.querySelector(".comment-box textarea");
      const text = ta.value.trim();
      if (!text) return;
      post.comments.unshift({ user: currentName, text, createdAt: Date.now() });
      save();
      render();
      return;
    }
    if (e.target.closest(".cancel-comment")) {
      const box = card.querySelector(".comment-box");
      box.querySelector("textarea").value = "";
      box.classList.add("d-none");
      return;
    }
  });

  btnClearDemo?.addEventListener("click", () => {
    if (!confirm("¿Borrar todas las publicaciones?")) return;
    posts = [];
    save();
    render();
  });

  btnSeed?.addEventListener("click", () => {
    currentName = "AprendeShop Team";
    saveName(currentName);
    posts = demoSeed();
    save();
    render();
  });

  // Inicial: sin demo, feed vacío o lo que haya en localStorage
  render();
})();
