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
  const levels = [
    { points: '130,10 160,60 100,60',          fill: '#1D6E4F', y: 43,  label: 'Meta-análise / RS',      color: 'white',   size: 8, bold: true },
    { points: '100,62 160,62 180,102 80,102',   fill: '#2D9468', y: 87,  label: 'ECR',                   color: 'white',   size: 9 },
    { points: '80,104 180,104 205,148 55,148',  fill: '#3BAA78', y: 131, label: 'Coorte · Caso-controle', color: 'white',   size: 9 },
    { points: '55,150 205,150 228,194 32,194',  fill: '#5DC090', y: 177, label: 'Estudos Transversais',   color: '#1A1814', size: 9 },
    { points: '32,196 228,196 248,238 12,238',  fill: '#8EDAD8', y: 221, label: 'Relatos de Caso',        color: '#1A1814', size: 9 },
    { points: '12,240 248,240 260,270 0,270',   fill: '#C2EDEA', y: 258, label: 'Opinião de Especialistas', color: '#1A1814', size: 9 },
  ];

  const legendData = [
    { color: '#1D6E4F', html: '<strong>Meta-análise / RS:</strong> síntese máxima de evidências, maior confiabilidade.' },
    { color: '#2D9468', html: '<strong>ECR:</strong> aleatorização minimiza vieses; referência para intervenções.' },
    { color: '#3BAA78', html: '<strong>Observacionais analíticos:</strong> coorte e caso-controle, bons para prognóstico/etiologia.' },
    { color: '#5DC090', html: '<strong>Transversais:</strong> foto instantânea da população; limitação de causalidade.' },
    { color: '#8EDAD8', html: '<strong>Relatos de caso:</strong> geram hipóteses; baixo poder inferencial.' },
    { color: '#C2EDEA', html: '<strong>Opinião / Editorial:</strong> úteis como contexto, não como base de decisão.' },
  ];

  const svgPolygons = levels.map(l => {
    const weight = l.bold ? ' font-weight="500"' : '';
    return `<polygon points="${l.points}" fill="${l.fill}"/>
    <text x="130" y="${l.y}" text-anchor="middle" font-size="${l.size}" font-family="Cormorant Garamond,serif" fill="${l.color}"${weight}>${l.label}</text>`;
  }).join('\n    ');

  const legendItems = legendData.map(l =>
    `<li><span class="pleg-dot" style="background:${l.color}"></span>${l.html}</li>`
  ).join('');

  return `<div class="pyramid-wrap">
    <div class="pyramid">
      <svg width="260" height="280" viewBox="0 0 260 280">
        ${svgPolygons}
      </svg>
    </div>
    <ul class="pyramid-legend">${legendItems}</ul>
  </div>`;
}
