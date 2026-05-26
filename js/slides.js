// ── Slide definitions ───────────────────────────────────────────────────────
// Each entry: { id, render(slideIndex, totalSlides) → inner HTML of .slide }
// deck.js wraps each entry in <div class="slide" id="..."> automatically.
// Slide numbers and totals are injected dynamically — no hardcoding needed.

const SLIDES = [

  // ── 0 · CAPA ──────────────────────────────────────────────────────────────
  {
    id: 's0',
    render(i, total) {
      return `<div class="surface cover-surface">
        ${eyebrow('Ciclo de Palestras · Use a Inteligência, Mas Não Seja Superficial')}
        <h1>Inteligência Artificial<br>na <em>Produção Científica</em></h1>
        <p class="lead" style="margin-top:16px; max-width:580px;">
          Como usar IA de forma ética, crítica e eficiente — e sair na frente na academia.
        </p>
        <div class="bio-block">
          <div class="bio-line"></div>
          <div>
            <div class="bio-name">Gerley Adriano Miranda Cruz</div>
            <div class="bio-text">
              Assistente Científico Nacional · IFMSA Brazil &nbsp;|&nbsp; Revisor Estatístico · Brazilian Medical Students Journal<br>
              Vice-presidente p/ Assuntos Externos · IFMSA Brazil UniEvangélica &nbsp;|&nbsp; Premiado Regional e Nacionalmente
            </div>
          </div>
        </div>
        ${slideNumEl(i + 1, total)}
      </div>`;
    },
  },

  // ── 1 · QUIZ 1 ───────────────────────────────────────────────────────────
  {
    id: 's1',
    render(i, total) {
      const quiz = quizOptions([
        { label: 'A', correct: false, text: 'Revisão Narrativa' },
        { label: 'B', correct: false, text: 'Ensaio Clínico Randomizado (ECR)' },
        { label: 'C', correct: true,  text: 'Meta-análise / Revisão Sistemática' },
        { label: 'D', correct: false, text: 'Estudo de Coorte Prospectivo' },
      ], `<strong>✓ C — Meta-análise / Revisão Sistemática.</strong> Representa o topo da pirâmide de evidências: sintetiza resultados de múltiplos estudos com rigor estatístico e oferece o maior poder inferencial disponível.`);

      return `<div class="surface">
        ${eyebrow('Quiz · 01')}
        <p class="quiz-question">Qual é o nível mais alto na pirâmide de evidências científicas?</p>
        ${quiz}
        ${rule()}
        ${slideNumEl(i + 1, total)}
        ${speakerTagEl(SPEAKER)}
      </div>`;
    },
  },

  // ── 2 · QUIZ 2 ───────────────────────────────────────────────────────────
  {
    id: 's2',
    render(i, total) {
      const quiz = quizOptions([
        { label: 'A', correct: true,  text: 'Geração de conteúdo plausível mas factualmente incorreto' },
        { label: 'B', correct: false, text: 'Lentidão ao processar textos muito longos' },
        { label: 'C', correct: false, text: 'Erros de formatação em documentos exportados' },
        { label: 'D', correct: false, text: 'Recusa em responder perguntas sensíveis' },
      ], `<strong>✓ A — Conteúdo plausível mas incorreto.</strong> IAs generativas podem inventar referências, datas, dados ou citações com aparência real. Por isso, nunca use uma referência gerada por IA sem conferir a fonte original.`);

      return `<div class="surface">
        ${eyebrow('Quiz · 02')}
        <p class="quiz-question">O que é "alucinação" no contexto de ferramentas de IA generativa?</p>
        ${quiz}
        ${rule()}
        ${slideNumEl(i + 1, total)}
        ${speakerTagEl(SPEAKER)}
      </div>`;
    },
  },

  // ── 3 · QUIZ 3 ───────────────────────────────────────────────────────────
  {
    id: 's3',
    render(i, total) {
      const quiz = quizOptions([
        { label: 'A', correct: false, text: 'Pesquisar artigos no PubMed sem filtros definidos' },
        { label: 'B', correct: false, text: 'Escolher a ferramenta de gestão de referências' },
        { label: 'C', correct: false, text: 'Redigir a introdução do trabalho' },
        { label: 'D', correct: true,  text: 'Definir a pergunta de pesquisa com o framework PICO' },
      ], `<strong>✓ D — Definir a pergunta com PICO.</strong> Population, Intervention, Comparison e Outcome estruturam toda a revisão: determinam os critérios de inclusão/exclusão, os descritores de busca e garantem a reprodutibilidade do protocolo.`);

      return `<div class="surface">
        ${eyebrow('Quiz · 03')}
        <p class="quiz-question">Qual é o primeiro passo ao iniciar uma revisão sistemática de qualidade?</p>
        ${quiz}
        ${rule()}
        ${slideNumEl(i + 1, total)}
        ${speakerTagEl(SPEAKER)}
      </div>`;
    },
  },

  // ── 4 · DIVISOR: Tipos de Trabalhos ──────────────────────────────────────
  {
    id: 's4',
    render(i, total) {
      return `<div class="surface divider-surface">
        ${eyebrow('Seção I')}
        <h2>Tipos de<br><em>Trabalhos Científicos</em></h2>
        <p class="lead">O mapa antes do território.</p>
        <div class="section-num">I</div>
        ${slideNumEl(i + 1, total)}
      </div>`;
    },
  },

  // ── 5 · Tipos de Trabalhos ────────────────────────────────────────────────
  {
    id: 's5',
    render(i, total) {
      const cards = [
        { num: '01', title: 'Relato &amp; Série de Casos',               body: 'Descrição de paciente(s) com achado incomum. Nível mais acessível para iniciantes.' },
        { num: '02', title: 'Estudo Transversal / Coorte / Caso-Controle', body: 'Observacionais. Analisam associações sem intervir. Frequentes em epidemiologia.' },
        { num: '03', title: 'Ensaio Clínico Randomizado (ECR)',            body: 'Padrão ouro da pesquisa interventiva. Exige rigor metodológico elevado.' },
        { num: '04', title: 'Revisão Narrativa',                           body: 'Síntese qualitativa da literatura. Menos rigorosa, porém didática e acessível.' },
        { num: '05', title: 'Revisão Sistemática',                         body: 'Pergunta estruturada (PICO), busca reproduzível, análise crítica padronizada.' },
        { num: '06', title: 'Meta-análise',                                body: 'Síntese quantitativa de múltiplos estudos. Maior poder estatístico e evidência.' },
      ].map(c => card(c));

      return `<div class="surface">
        ${eyebrow('Seção I · Tipos de Trabalhos Científicos')}
        <h2>Do relato de caso <em>à meta-análise</em></h2>
        ${grid(3, cards, 24)}
        ${slideNumEl(i + 1, total)}
        ${speakerTagEl(SPEAKER)}
      </div>`;
    },
  },

  // ── 6 · DIVISOR: Pirâmide ────────────────────────────────────────────────
  {
    id: 's6',
    render(i, total) {
      return `<div class="surface divider-surface">
        ${eyebrow('Seção II')}
        <h2>Pirâmide de<br><em>Evidências</em></h2>
        <p class="lead">Nem toda evidência pesa o mesmo.</p>
        <div class="section-num">II</div>
        ${slideNumEl(i + 1, total)}
      </div>`;
    },
  },

  // ── 7 · Pirâmide de Evidências ────────────────────────────────────────────
  {
    id: 's7',
    render(i, total) {
      return `<div class="surface">
        ${eyebrow('Seção II · Pirâmide de Evidências')}
        <h2>Quanto <em>mais alto</em>, mais robusto</h2>
        ${pyramidSVG()}
        ${slideNumEl(i + 1, total)}
        ${speakerTagEl(SPEAKER)}
      </div>`;
    },
  },

  // ── 8 · DIVISOR: IA por tipo ─────────────────────────────────────────────
  {
    id: 's8',
    render(i, total) {
      return `<div class="surface divider-surface">
        ${eyebrow('Seção III')}
        <h2>IA para cada<br><em>Tipo de Estudo</em></h2>
        <p class="lead">A ferramenta certa no momento certo.</p>
        <div class="section-num">III</div>
        ${slideNumEl(i + 1, total)}
      </div>`;
    },
  },

  // ── 9 · IA x Tipo de Estudo ──────────────────────────────────────────────
  {
    id: 's9',
    render(i, total) {
      const headers = ['Tipo de Estudo', 'Como a IA pode ajudar', 'Cuidados'];
      const rows = [
        ['Relato de Caso',         'Estruturar linha do tempo clínica; revisar gramática e coesão; sugerir diagnósticos diferenciais para discussão',                                           'IA não substitui raciocínio clínico; checar alucinações em referências'],
        ['Transversal / Coorte',   'Auxiliar na escolha de testes estatísticos; interpretar outputs do R/SPSS; redigir seção de métodos a partir da metodologia definida',                       'Decisão estatística deve ser sua; IA pode errar em contextos complexos'],
        ['Revisão Narrativa',      'Sintetizar artigos; criar tabelas comparativas; sugerir estrutura de seções',                                                                                'Verificar sempre as fontes originais; não confiar em citações geradas'],
        ['Revisão Sistemática',    'Formular estratégia de busca (PICO); triagem de títulos/resumos; extração padronizada de dados',                                                            'Usar Rayyan ou ASReview para triagem; dupla revisão humana obrigatória'],
        ['Meta-análise',           'Ajudar a interpretar forest plots; redigir interpretação de heterogeneidade; organizar tabela GRADE',                                                        'Análise quantitativa requer domínio estatístico; IA é suporte, não executor'],
      ];

      return `<div class="surface">
        ${eyebrow('Seção III · IA por Tipo de Estudo')}
        <h2>Cada desenho, <em>uma estratégia</em></h2>
        ${toolsTable(headers, rows)}
        ${slideNumEl(i + 1, total)}
        ${speakerTagEl(SPEAKER)}
      </div>`;
    },
  },

  // ── 10 · DIVISOR: Ferramentas ────────────────────────────────────────────
  {
    id: 's10',
    render(i, total) {
      return `<div class="surface divider-surface">
        ${eyebrow('Seção IV')}
        <h2>Ferramentas de IA<br><em>de Acesso Fácil</em></h2>
        <p class="lead">O ecossistema que você pode usar agora.</p>
        <div class="section-num">IV</div>
        ${slideNumEl(i + 1, total)}
      </div>`;
    },
  },

  // ── 11 · Ferramentas: Planejamento & Busca ───────────────────────────────
  {
    id: 's11',
    render(i, total) {
      const FREE      = [{ cls: 'free', label: 'Grátis' }];
      const FREE_LIM  = [{ cls: 'free', label: 'Grátis (limitado)' }];
      const FREE_PRO  = [{ cls: 'free', label: 'Grátis' }, { cls: 'paid', label: 'Pro disponível' }];

      const cards = [
        { title: 'ChatGPT / Claude / Gemini',         body: 'Formular pergunta PICO, construir estratégia de busca booleana, criar cronograma de projeto.',                                      tags: FREE_PRO, logos: ['chatgpt.com', 'claude.ai', 'gemini.google.com'] },
        { title: 'Consensus.app',                     body: 'Busca em linguagem natural em mais de 200M de artigos científicos. Extrai consenso da literatura automaticamente.',                 tags: FREE_LIM, logos: ['consensus.app'] },
        { title: 'Elicit',                            body: 'IA para revisão de literatura: extrai dados de PDFs, resume artigos, identifica lacunas. Excelente para RS.',                       tags: FREE_LIM, logos: ['elicit.com'] },
        { title: 'Research Rabbit / Connected Papers', body: 'Mapeia rede de citações. Encontra artigos relacionados visualmente. Ideal para descobrir literatura relevante.',                   tags: FREE,     logos: ['researchrabbit.ai', 'connectedpapers.com'] },
      ].map(c => card(c));

      return `<div class="surface">
        ${eyebrow('Seção IV · Ferramentas · Planejamento &amp; Busca')}
        <h2><em>Planejar</em> antes de pesquisar</h2>
        ${grid(2, cards, 20)}
        ${slideNumEl(i + 1, total)}
        ${speakerTagEl(SPEAKER)}
      </div>`;
    },
  },

  // ── 12 · Ferramentas: Triagem / RS ───────────────────────────────────────
  {
    id: 's12',
    render(i, total) {
      const FREE      = [{ cls: 'free', label: 'Grátis' }];
      const FREE_LIM  = [{ cls: 'free', label: 'Grátis (limitado)' }];
      const FREE_OS   = [{ cls: 'free', label: 'Grátis (open source)' }];
      const FREEMIUM  = [{ cls: 'free', label: 'Freemium' }];

      const cards = [
        { title: 'Rayyan',                  body: 'Plataforma colaborativa para triagem de títulos e resumos em RS. Sugestão automática por IA com aprendizado.', tags: FREE,     logos: ['rayyan.ai'] },
        { title: 'ASReview',                body: 'Active learning para triagem. Prioriza os artigos mais relevantes com base no que você já classificou.',       tags: FREE_OS,  logos: ['asreview.nl'] },
        { title: 'SciSpace / Typeset',      body: 'Leia PDFs com assistente IA integrado. Faça perguntas ao artigo, compare metodologias entre trabalhos.',       tags: FREE_LIM, logos: ['scispace.com'] },
        { title: 'Semantic Scholar',        body: 'Motor de busca com IA da Allen Institute. Extrai conclusões-chave e correlações entre papers.',                 tags: FREE,     logos: ['semanticscholar.org'] },
        { title: 'Perplexity',              body: 'Busca na web com fontes citadas em tempo real. Útil para contexto rápido e verificação de dados.',             tags: FREE,     logos: ['perplexity.ai'] },
        { title: 'PICO Portal / Covidence', body: 'Plataformas robustas para gestão de RS. Covidence é pago, mas oferece trial. PICO Portal é gratuito.',         tags: FREEMIUM, logos: ['covidence.org'] },
      ].map(c => card(c));

      return `<div class="surface">
        ${eyebrow('Seção IV · Ferramentas · Revisão Sistemática')}
        <h2>Do abstract <em>à extração</em></h2>
        ${grid(3, cards, 20)}
        ${slideNumEl(i + 1, total)}
        ${speakerTagEl(SPEAKER)}
      </div>`;
    },
  },

  // ── 13 · Ferramentas: Estatística ────────────────────────────────────────
  {
    id: 's13',
    render(i, total) {
      const leftCol = `<div>
        <h3 style="color:var(--accent); font-size:15px; letter-spacing:0.05em; margin-bottom:16px;">O QUE A IA FAZ BEM</h3>
        ${checklist([
          { text: 'Recomendar o teste correto para seus dados (paramétrico vs. não-paramétrico)' },
          { text: 'Explicar o output do R, SPSS ou JAMOVI em linguagem acessível' },
          { text: 'Escrever ou depurar scripts em R/Python para análise' },
          { text: 'Interpretar intervalos de confiança, valores-p e tamanho de efeito' },
          { text: 'Sugerir como relatar resultados segundo CONSORT, STROBE, PRISMA' },
        ])}
      </div>`;

      const rightCol = `<div>
        <h3 style="color:var(--ink-muted); font-size:15px; letter-spacing:0.05em; margin-bottom:16px;">FERRAMENTAS PRÁTICAS</h3>
        ${checklist([
          { icon: '&#8212;', iconStyle: 'color:var(--ink-muted)', text: `${toolLogo('julius.ai')} <strong>Julius AI</strong> — sobe planilha, faz análise e gera gráficos com linguagem natural` },
          { icon: '&#8212;', iconStyle: 'color:var(--ink-muted)', text: `${toolLogo('chatgpt.com')} <strong>ChatGPT + Code Interpreter</strong> — análise em Python diretamente na conversa` },
          { icon: '&#8212;', iconStyle: 'color:var(--ink-muted)', text: `${toolLogo('claude.ai')} <strong>Claude</strong> — excelente para interpretar metodologia e sugerir abordagens` },
          { icon: '&#8212;', iconStyle: 'color:var(--ink-muted)', text: `${toolLogo('cochrane.org')} <strong>REVMAN (Cochrane)</strong> — meta-análise; IA ajuda a interpretar forest plot gerado` },
        ])}
      </div>`;

      return `<div class="surface">
        ${eyebrow('Seção IV · Ferramentas · Análise Estatística')}
        <h2>IA como <em>guia metodológico</em></h2>
        ${twoCol(leftCol, rightCol)}
        ${slideNumEl(i + 1, total)}
        ${speakerTagEl(SPEAKER)}
      </div>`;
    },
  },

  // ── 14 · Ferramentas: Escrita ────────────────────────────────────────────
  {
    id: 's14',
    render(i, total) {
      const FREE     = [{ cls: 'free', label: 'Grátis' }];
      const FREE_LIM = [{ cls: 'free', label: 'Grátis (limitado)' }];

      const cards = [
        { title: 'Jenni AI / Paperpal',   body: 'Assistentes de escrita acadêmica. Completam frases, sugerem transições, verificam tom científico. Integração com Zotero.', tags: FREE_LIM, logos: ['jenni.ai', 'paperpal.com'] },
        { title: 'Grammarly / Writefull', body: 'Revisão gramatical + tom acadêmico. Writefull é especializado em linguagem científica e publicação em inglês.',             tags: FREE,     logos: ['grammarly.com', 'writefull.com'] },
        { title: 'ChatGPT / Claude',      body: 'Para rascunhos de seções, reescritas de parágrafos, simplificação de linguagem, tradução técnica PT↔EN.',                  tags: FREE,     logos: ['chatgpt.com', 'claude.ai'] },
        { title: 'Zotero + ZoteroBib',   body: 'Gestão de referências com plugins de IA. Formata citações automaticamente em qualquer norma (ABNT, Vancouver, APA).',       tags: FREE,     logos: ['zotero.org'] },
      ].map(c => card(c));

      return `<div class="surface">
        ${eyebrow('Seção IV · Ferramentas · Escrita Científica')}
        <h2>Escrever com IA — <em>sem perder a autoria</em></h2>
        ${grid(2, cards, 20)}
        ${slideNumEl(i + 1, total)}
        ${speakerTagEl(SPEAKER)}
      </div>`;
    },
  },

  // ── 15 · DIVISOR: Prompts ────────────────────────────────────────────────
  {
    id: 's15',
    render(i, total) {
      return `<div class="surface divider-surface">
        ${eyebrow('Seção V')}
        <h2>A Arte de<br><em>Fazer Boas Perguntas</em></h2>
        <p class="lead">Prompts que entregam resultados de verdade.</p>
        <div class="section-num">V</div>
        ${slideNumEl(i + 1, total)}
      </div>`;
    },
  },

  // ── 16 · Anatomia de um Prompt ───────────────────────────────────────────
  {
    id: 's16',
    render(i, total) {
      const cards = [
        { title: '① Papel',      body: '"Aja como um revisor de periódico científico médico com experiência em epidemiologia…"' },
        { title: '② Contexto',   body: '"Estou escrevendo uma revisão sistemática sobre hipertensão em jovens de 18–25 anos…"' },
        { title: '③ Tarefa',     body: '"Reescreva o parágrafo abaixo mantendo linguagem técnica, voz passiva e máximo de 150 palavras."' },
        { title: '④ Restrições', body: '"Não invente referências. Use apenas o conteúdo que forneci. Responda em português científico."' },
      ].map(c => card(c));

      return `<div class="surface">
        ${eyebrow('Seção V · Engenharia de Prompts')}
        <h2>A anatomia de um <em>prompt eficaz</em></h2>
        ${grid(4, cards, 24)}
        ${rule()}
        <p class="body" style="font-style:italic; color:var(--ink-muted);">
          Quanto mais contexto você der, melhor a resposta. IA é tão boa quanto a pergunta que você faz.
        </p>
        ${slideNumEl(i + 1, total)}
        ${speakerTagEl(SPEAKER)}
      </div>`;
    },
  },

  // ── 17 · Prompt: PICO e Busca ────────────────────────────────────────────
  {
    id: 's17',
    render(i, total) {
      const box = promptBox(`Aja como um metodologista de pesquisa clínica. Meu tema de interesse é: ${ph('[ex: uso de metformina na prevenção de diabetes em adolescentes obesos]')}.<br><br>
      Com base nisso:<br>
      1. Estruture uma pergunta PICO completa (Population, Intervention, Comparison, Outcome).<br>
      2. Sugira os descritores em inglês para busca no PubMed (MeSH terms + termos livres).<br>
      3. Monte uma estratégia booleana com AND, OR e aspas para termos compostos.<br>
      4. Indique os filtros recomendados (ex: últimos 10 anos, ensaios clínicos, humanos).<br><br>
      Responda de forma estruturada, em português. Não invente referências.`);

      return `<div class="surface">
        ${eyebrow('Seção V · Prompts Práticos · Planejamento')}
        <h2>Prompt para <em>construir a pergunta PICO</em></h2>
        ${promptLabel('Exemplo de Prompt')}
        ${box}
        ${rule()}
        <p class="body" style="color:var(--ink-muted); font-style:italic;">
          Substitua o trecho em itálico pelo seu tema. Copie a estratégia gerada direto para o PubMed.
        </p>
        ${slideNumEl(i + 1, total)}
        ${speakerTagEl(SPEAKER)}
      </div>`;
    },
  },

  // ── 18 · Prompt: Estatística ─────────────────────────────────────────────
  {
    id: 's18',
    render(i, total) {
      const box = promptBox(`Sou estudante de medicina e estou conduzindo um estudo ${ph('[observacional transversal / ensaio clínico / coorte]')}.<br><br>
      Minha variável desfecho é: ${ph('[ex: pressão arterial sistólica — numérica contínua]')}<br>
      Minha variável independente principal é: ${ph('[ex: prática de exercício físico — categórica binária]')}<br>
      Tenho ${ph('[N]')} participantes. Os dados ${ph('[seguem / não seguem]')} distribuição normal (verificado pelo teste de Shapiro-Wilk).<br><br>
      Com base nisso:<br>
      1. Qual teste estatístico devo usar? Por quê?<br>
      2. Quais premissas preciso verificar antes?<br>
      3. Como reportar o resultado segundo as normas APA/CONSORT?<br>
      4. Como eu escreveria isso na seção "Análise Estatística" da metodologia?`);

      return `<div class="surface">
        ${eyebrow('Seção V · Prompts Práticos · Metodologia Estatística')}
        <h2>Prompt para <em>escolha do teste estatístico</em></h2>
        ${promptLabel('Exemplo de Prompt')}
        ${box}
        ${slideNumEl(i + 1, total)}
        ${speakerTagEl(SPEAKER)}
      </div>`;
    },
  },

  // ── 19 · Prompt: Escrita ─────────────────────────────────────────────────
  {
    id: 's19',
    render(i, total) {
      const box = promptBox(`Aja como um editor de periódico médico de alto impacto (nível Nature Medicine).<br><br>
      Reescreva o parágrafo abaixo respeitando estas regras:<br>
      • Linguagem técnica, formal e objetiva<br>
      • Voz passiva quando adequado à seção ${ph('[Introdução / Métodos / Resultados / Discussão]')}<br>
      • Mantenha todas as informações originais — não adicione fatos novos<br>
      • Máximo de ${ph('[150]')} palavras<br>
      • Não invente referências<br><br>
      Parágrafo original:<br>
      ${ph('[Cole aqui seu parágrafo]')}`);

      return `<div class="surface">
        ${eyebrow('Seção V · Prompts Práticos · Escrita Científica')}
        <h2>Prompt para <em>reescrever com rigor</em></h2>
        ${promptLabel('Exemplo de Prompt — Revisar parágrafo')}
        ${box}
        ${slideNumEl(i + 1, total)}
        ${speakerTagEl(SPEAKER)}
      </div>`;
    },
  },

  // ── 20 · Princípios Éticos ────────────────────────────────────────────────
  {
    id: 's20',
    render(i, total) {
      const leftCol = stepList([
        { num: '①', title: 'Declare o uso da IA',       body: 'Verifique as políticas do periódico/evento. Muitos exigem disclosure no método ou agradecimentos.' },
        { num: '②', title: 'Nunca cite o que não leu',  body: 'IA alucina referências. Toda citação deve ser verificada na fonte original antes de ser incluída.' },
        { num: '③', title: 'Autoria é sua responsabilidade', body: 'IA não é co-autor. Você responde integralmente pelo que assina.' },
      ]);

      const rightCol = stepList([
        { num: '④', title: 'Revise criticamente tudo',        body: 'Trate o output da IA como rascunho de um assistente juniorizadíssimo — útil, mas não confiável sem revisão.' },
        { num: '⑤', title: 'Não insira dados de pacientes',   body: 'Nunca coloque dados identificáveis em ferramentas de IA públicas. Risco de privacidade e violação de LGPD/HIPAA.' },
        { num: '⑥', title: 'IA potencializa — não substitui', body: 'O diferencial competitivo é o seu julgamento crítico, não a IA em si.' },
      ]);

      return `<div class="surface">
        ${eyebrow('Seção VI · Ética no Uso da IA')}
        <h2>Use com <em>integridade</em></h2>
        ${twoCol(leftCol, rightCol, 20)}
        ${slideNumEl(i + 1, total)}
        ${speakerTagEl(SPEAKER)}
      </div>`;
    },
  },

  // ── 21 · ENCERRAMENTO ────────────────────────────────────────────────────
  {
    id: 's21',
    render(i, total) {
      return `<div class="surface cover-surface">
        ${eyebrow('Encerramento')}
        <div class="big-quote" style="border-color:var(--accent-light); color:var(--bg); max-width:700px;">
          "A IA não substitui o cientista.<br>Ela potencializa quem pensa."
        </div>
        <div class="rule" style="background:rgba(255,255,255,0.15); margin:32px 0;"></div>
        <p class="lead" style="margin-top:0; color:rgba(248,246,241,0.6); font-style:italic;">
          Você saiu daqui com o mapa. O território é seu.
        </p>
        <div class="bio-block" style="margin-top:36px;">
          <div class="bio-line"></div>
          <div>
            <div class="bio-name">Gerley Adriano Miranda Cruz</div>
            <div class="bio-text">Dúvidas? Procure ao final. Bora fazer ciência de verdade.</div>
          </div>
        </div>
        ${slideNumEl(i + 1, total)}
      </div>`;
    },
  },

];
