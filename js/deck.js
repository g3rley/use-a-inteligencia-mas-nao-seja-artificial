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

  // Keyboard
  document.addEventListener('keydown', e => {
    if (['ArrowRight', 'ArrowDown', ' '].includes(e.key)) { e.preventDefault(); navigate(1);  }
    if (['ArrowLeft',  'ArrowUp'       ].includes(e.key)) { e.preventDefault(); navigate(-1); }
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
