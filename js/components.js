// ── HTML component helpers ──────────────────────────────────────────────────
// All functions return HTML strings. No framework dependency.

const SPEAKER = 'Gerley Adriano';

function eyebrow(text) {
  return `<div class="eyebrow">${text}</div>`;
}

function rule() {
  return `<div class="rule"></div>`;
}

function slideNumEl(current, total) {
  const pad = n => String(n).padStart(2, '0');
  return `<div class="slide-num">${pad(current)} / ${pad(total)}</div>`;
}

function speakerTagEl(name) {
  return `<div class="speaker-tag">${name}</div>`;
}

function ph(text) {
  return `<span class="ph">${text}</span>`;
}

// ── Content components ──────────────────────────────────────────────────────

// Small inline logo for checklist / text contexts
function toolLogo(domain) {
  const url = `https://www.google.com/s2/favicons?sz=32&domain=${domain}`;
  return `<img class="inline-logo" src="${url}" alt="${domain}" loading="lazy" onerror="this.hidden=true">`;
}

function card({ num, title, body, tags = [], logos = [], cardH3Style = '', style = '' }) {
  const numHTML   = num !== undefined ? `<div class="card-num">${num}</div>` : '';
  const logosHTML = logos.length
    ? `<div class="card-logos">${logos.map(d => {
        const url = `https://www.google.com/s2/favicons?sz=64&domain=${d}`;
        return `<img class="card-logo" src="${url}" alt="${d}" loading="lazy" onerror="this.hidden=true">`;
      }).join('')}</div>`
    : '';
  const tagsHTML  = tags.length
    ? `<div style="margin-top:10px">${tags.map(t => `<span class="tag ${t.cls}">${t.label}</span>`).join('')}</div>`
    : '';
  const h3Style   = cardH3Style ? ` style="${cardH3Style}"` : '';
  return `<div class="card" style="${style}">${numHTML}${logosHTML}<h3${h3Style}>${title}</h3><p>${body}</p>${tagsHTML}</div>`;
}

function grid(cols, items, mt = 24) {
  return `<div class="grid-${cols}" style="margin-top:${mt}px;">${items.join('')}</div>`;
}

function twoCol(left, right, mt = 28) {
  return `<div class="two-col" style="margin-top:${mt}px;">${left}${right}</div>`;
}

function checklist(items) {
  const lis = items.map(({ icon = '&#8594;', iconStyle = '', text }) =>
    `<li><span class="check" style="${iconStyle}">${icon}</span>${text}</li>`
  ).join('');
  return `<ul class="checklist">${lis}</ul>`;
}

function stepList(items) {
  const lis = items.map(({ num, title, body }) =>
    `<li><div class="step-num">${num}</div><div class="step-text"><strong>${title}</strong>${body}</div></li>`
  ).join('');
  return `<ul class="step-list">${lis}</ul>`;
}

function promptLabel(text) {
  return `<div class="prompt-label">${text}</div>`;
}

function promptBox(html) {
  return `<div class="prompt-box">${html}</div>`;
}

function toolsTable(headers, rows) {
  const ths = headers.map(h => `<th>${h}</th>`).join('');
  const trs = rows.map(cols =>
    `<tr>${cols.map((c, i) => `<td>${i === 0 ? `<strong>${c}</strong>` : c}</td>`).join('')}</tr>`
  ).join('');
  return `<div class="scrollable"><table class="tools-table"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
}

function pyramidSVG() {
  // Each level: polygon coords + midpoint Y + right-edge X at midY (for connector line)
  const levels = [
    { points: '130,10 160,60 100,60',          fill: '#1D6E4F', midY: 35,  xEdge: 145, label: 'Meta-análise / RS',     desc: 'Síntese máxima · maior confiabilidade' },
    { points: '100,62 160,62 180,102 80,102',   fill: '#2D9468', midY: 82,  xEdge: 170, label: 'ECR',                   desc: 'Padrão-ouro para intervenções' },
    { points: '80,104 180,104 205,148 55,148',  fill: '#3BAA78', midY: 126, xEdge: 193, label: 'Coorte · Caso-controle', desc: 'Prognóstico e etiologia' },
    { points: '55,150 205,150 228,194 32,194',  fill: '#5DC090', midY: 172, xEdge: 217, label: 'Estudos Transversais',  desc: 'Foto instantânea da população' },
    { points: '32,196 228,196 248,238 12,238',  fill: '#8EDAD8', midY: 217, xEdge: 238, label: 'Relatos de Caso',       desc: 'Geram hipóteses · baixo poder inferencial' },
    { points: '12,240 248,240 260,270 0,270',   fill: '#C2EDEA', midY: 255, xEdge: 254, label: 'Opinião / Editorial',   desc: 'Contexto · não base de decisão' },
  ];

  const polygons = levels.map(l =>
    `<polygon points="${l.points}" fill="${l.fill}"/>`
  ).join('');

  const annotations = levels.map(l => {
    const y1 = l.midY - 5;  // main label baseline
    const y2 = l.midY + 10; // description baseline
    return `<line x1="${l.xEdge + 3}" y1="${l.midY}" x2="263" y2="${l.midY}" stroke="#C8C3BB" stroke-width="0.8"/>
      <text x="270" y="${y1}" font-size="13.5" font-family="Cormorant Garamond,serif" fill="#1A1814" font-weight="500">${l.label}</text>
      <text x="270" y="${y2}" font-size="10.5" font-family="Cormorant Garamond,serif" fill="#8A8480">${l.desc}</text>`;
  }).join('\n      ');

  return `<div class="pyramid-container">
    <svg viewBox="0 0 490 282" xmlns="http://www.w3.org/2000/svg" aria-label="Pirâmide de Evidências">
      ${polygons}
      ${annotations}
    </svg>
  </div>`;
}
