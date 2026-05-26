// ── Deck engine ─────────────────────────────────────────────────────────────
// Reads the global SLIDES array (slides.js), renders them into #deck,
// and wires up keyboard, touch, and click navigation.

(function () {
  const total = SLIDES.length;

  // ── Render slides into DOM ─────────────────────────────────────────────
  const deck = document.getElementById('deck');

  SLIDES.forEach((slide, i) => {
    const el = document.createElement('div');
    el.className = 'slide' + (i === 0 ? ' active' : '');
    el.id = slide.id;
    el.innerHTML = slide.render(i, total);
    deck.appendChild(el);
  });

  // ── Progress dots ──────────────────────────────────────────────────────
  const prog = document.getElementById('progress');

  SLIDES.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    prog.appendChild(d);
  });

  // ── Navigation ─────────────────────────────────────────────────────────
  let current = 0;
  const slideEls = () => document.querySelectorAll('.slide');
  const dotEls   = () => document.querySelectorAll('.dot');

  function goTo(n) {
    const slides = slideEls();
    const dots   = dotEls();

    slides[current].classList.remove('active');
    dots[current].classList.remove('active');

    current = ((n % total) + total) % total;

    slides[current].classList.add('active');
    dots[current].classList.add('active');
    updateNavButtons();
  }

  function navigate(dir) { goTo(current + dir); }

  function updateNavButtons() {
    document.getElementById('prev').style.opacity = current === 0         ? '0.3' : '1';
    document.getElementById('next').style.opacity = current === total - 1 ? '0.3' : '1';
  }

  document.getElementById('prev').addEventListener('click', () => navigate(-1));
  document.getElementById('next').addEventListener('click', () => navigate(1));

  // ── Fullscreen ─────────────────────────────────────────────────────────
  const ICON_ENTER = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>`;
  const ICON_EXIT  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>`;

  const fsBtn = document.createElement('button');
  fsBtn.id = 'fullscreen-btn';
  fsBtn.title = 'Tela cheia (F)';
  fsBtn.innerHTML = ICON_ENTER;
  document.body.appendChild(fsBtn);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  fsBtn.addEventListener('click', toggleFullscreen);
  document.addEventListener('fullscreenchange', () => {
    fsBtn.innerHTML = document.fullscreenElement ? ICON_EXIT : ICON_ENTER;
    fsBtn.title = document.fullscreenElement ? 'Sair da tela cheia (F)' : 'Tela cheia (F)';
  });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (['ArrowRight', 'ArrowDown', ' '].includes(e.key)) { e.preventDefault(); navigate(1);  }
    if (['ArrowLeft',  'ArrowUp'       ].includes(e.key)) { e.preventDefault(); navigate(-1); }
    if (e.key === 'f' || e.key === 'F') toggleFullscreen();
  });

  // Touch / swipe
  let startX = 0;
  document.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) navigate(dx < 0 ? 1 : -1);
  }, { passive: true });

  updateNavButtons();
}());
