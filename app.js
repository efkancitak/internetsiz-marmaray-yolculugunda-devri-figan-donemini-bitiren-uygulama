(function () {
  "use strict";

  const DATA = Array.isArray(window.VOCAB_DATA) ? window.VOCAB_DATA : [];
  const PASSAGES = Array.isArray(window.TOPIC_PASSAGES) ? window.TOPIC_PASSAGES : [];
  const TOPIC_ALIASES = {
    "Akademik Akıl Yürütme": "academic-reasoning",
    "Neden ve Değişim": "cause-change",
    "Kampüs ve E-posta": "campus-email",
    "Konuşma ve Görüş": "opinion-discussion",
    "Tarih": "history",
    "Sanat ve Müzik": "art-music",
    "İşletme ve Ekonomi": "business-economics",
    "Yaşam Bilimleri": "life-science",
    "Fiziksel Bilimler": "physical-science",
    "Sosyal Bilimler": "social-science",
    "Çevre ve İklim": "environment-climate",
    "Ekoloji": "ecology",
    "Jeoloji": "geology",
    "Astronomi": "astronomy",
    "Sağlık ve Tıp": "health-medicine",
    "Teknoloji ve Mühendislik": "technology-engineering",
    "Eğitim": "education",
    "Dilbilim": "linguistics",
    "Siyaset ve Hukuk": "politics-law",
    "Coğrafya": "geography",
    "Tarım": "agriculture",
    "Edebiyat": "literature",
    "Araştırma ve İstatistik": "research-statistics"
  };
  DATA.forEach((item) => { item.topic = TOPIC_ALIASES[item.topic] || item.topic; });
  const STORAGE_KEY = "internetsiz-marmaray-devri-figan.v1";
  const AVATAR_STORAGE_KEY = "internetsiz-marmaray-devri-figan.local-avatar.v1";
  const AVATAR_MAX_BYTES = 8 * 1024 * 1024;
  const SCHEMA_VERSION = 2;
  const COURSE_DAYS = 60;
  const SKILLS = ["recognize", "spell", "family", "collocation", "sentence"];
  const SKILL_LABELS = {
    recognize: "2 sn tanıma",
    spell: "Yazım",
    family: "Kelime ailesi",
    collocation: "Kalıp",
    sentence: "Kendi cümlen",
    cloze: "Bağlam boşluğu"
  };
  const FAMILY_LABELS = { noun: "İsim", verb: "Fiil", adjective: "Sıfat", adverb: "Zarf" };
  const TOPICS = {
    all: { label: "Tüm bağlamlar", icon: "✦", color: "#6c55d9" },
    "academic-reasoning": { label: "Akademik akıl yürütme", icon: "⌁", color: "#6c55d9" },
    "cause-change": { label: "Neden, sonuç ve değişim", icon: "↗", color: "#e27c4f" },
    "campus-email": { label: "Kampüs ve e-posta", icon: "✉", color: "#2789a7" },
    "opinion-discussion": { label: "Görüş ve tartışma", icon: "◌", color: "#b45a91" },
    history: { label: "Tarih", icon: "⌛", color: "#96734a" },
    "art-music": { label: "Sanat ve müzik", icon: "♪", color: "#d05278" },
    "business-economics": { label: "İşletme ve ekonomi", icon: "▥", color: "#247c70" },
    "life-science": { label: "Yaşam bilimleri", icon: "⌘", color: "#4c8b42" },
    "physical-science": { label: "Fiziksel bilimler", icon: "◈", color: "#3d70b2" },
    "social-science": { label: "Sosyal bilimler", icon: "◎", color: "#87663b" },
    "environment-climate": { label: "Çevre ve iklim", icon: "♧", color: "#33825a" },
    ecology: { label: "Ekoloji", icon: "♻", color: "#4c8b42" },
    geology: { label: "Jeoloji", icon: "◇", color: "#9a6942" },
    astronomy: { label: "Astronomi", icon: "✧", color: "#505da8" },
    "health-medicine": { label: "Sağlık ve tıp", icon: "+", color: "#c95866" },
    "technology-engineering": { label: "Teknoloji ve mühendislik", icon: "⚙", color: "#367995" },
    education: { label: "Eğitim", icon: "▣", color: "#8b619f" },
    linguistics: { label: "Dilbilim", icon: "Aa", color: "#b05d82" },
    "politics-law": { label: "Siyaset ve hukuk", icon: "§", color: "#756049" },
    geography: { label: "Coğrafya", icon: "⌖", color: "#328a84" },
    agriculture: { label: "Tarım", icon: "♢", color: "#71863c" },
    literature: { label: "Edebiyat", icon: "¶", color: "#a65c5c" },
    "research-statistics": { label: "Araştırma ve istatistik", icon: "%", color: "#5d6aa8" }
  };
  if (window.TOPIC_META && typeof window.TOPIC_META === "object") {
    const metadataEntries = Array.isArray(window.TOPIC_META)
      ? window.TOPIC_META.filter((meta) => meta?.id).map((meta) => [meta.id, meta])
      : Object.entries(window.TOPIC_META);
    metadataEntries.forEach(([id, meta]) => {
      if (id !== "all") TOPICS[id] = {
        label: meta.label || meta.titleTr || meta.title || topicMetaLabel(id),
        icon: meta.icon || TOPICS[id]?.icon || "•",
        color: meta.color || TOPICS[id]?.color || "#6c55d9",
        ...TOPICS[id],
        ...meta
      };
    });
  }
  const MODULES = [
    { id: "recognize", icon: "⚡", title: "2 Saniyede Tanı", text: "Kelimeyi ya da kalıbı görür görmez Türkçe karşılığını seç.", meta: "Hız + anlam", soft: "#fff0df" },
    { id: "spell", icon: "✎", title: "Yazım Atölyesi", text: "Türkçe ipucu ve bağlamdan İngilizce biçimi eksiksiz yaz.", meta: "Aktif hatırlama", soft: "#e9f5ff" },
    { id: "family", icon: "⌘", title: "Word Family Lab", text: "İsim, fiil, sıfat ve zarf biçimleri arasında dönüşüm yap.", meta: "Biçim bilgisi", soft: "#eee9ff" },
    { id: "collocation", icon: "⛓", title: "Kalıp Kurucu", text: "Doğal sözcük birlikteliklerini parça parça kur; tek kelime ezberleme.", meta: "Doğallık", soft: "#e7f7ef" },
    { id: "sentence", icon: "◒", title: "Kendi Cümlen", text: "Hedef kalıbı TOEFL bağlamında kullan ve açık ölçütlerle kontrol et.", meta: "Üretim", soft: "#ffecef" },
    { id: "cloze", icon: "□", title: "Bağlam Boşluğu", text: "Akademik cümlede anlam ve dil bilgisine uyan hedef sözcüğü seç.", meta: "Okuma bağlamı", soft: "#eef4ff" },
    { id: "complete", icon: "▤", title: "Complete the Words", text: "Kısa akademik metinde yarım bırakılan sözcükleri bağlamdan tamamla.", meta: "Bağlam + yazım", soft: "#f2f5dc" }
  ];

  const app = document.getElementById("app");
  let timerId = null;
  let toastId = null;
  let session = null;
  let drawerWordId = null;
  let avatarDialogOpen = false;
  let localAvatar = loadLocalAvatar();
  let state = loadState();

  function loadLocalAvatar() {
    try {
      const saved = localStorage.getItem(AVATAR_STORAGE_KEY) || "";
      return /^data:image\/(?:jpeg|png|webp);base64,/i.test(saved) ? saved : "";
    } catch (_) {
      return "";
    }
  }

  function defaultState() {
    return {
      schemaVersion: SCHEMA_VERSION,
      view: "today",
      topic: "all",
      profiles: {},
      passageProgress: {},
      activity: {},
      sessions: [],
      filters: { search: "", topic: "all", level: "all", page: 1 },
      settings: { dailyTarget: 30, timerEnabled: true },
      course: { startDate: todayKey(), completedDays: {} }
    };
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      return migrateState(saved);
    } catch (_) {
      return defaultState();
    }
  }

  function migrateState(saved) {
    const base = defaultState();
    if (!saved || typeof saved !== "object") return base;
    const migrated = {
      ...base,
      ...saved,
      schemaVersion: SCHEMA_VERSION,
      profiles: saved.profiles && typeof saved.profiles === "object" ? saved.profiles : {},
      passageProgress: saved.passageProgress && typeof saved.passageProgress === "object" ? saved.passageProgress : {},
      activity: saved.activity && typeof saved.activity === "object" ? saved.activity : {},
      sessions: Array.isArray(saved.sessions) ? saved.sessions.slice(0, 60) : [],
      settings: { ...base.settings, ...(saved.settings || {}) },
      filters: { ...base.filters, ...(saved.filters || {}) },
      course: { ...base.course, ...(saved.course || {}) }
    };
    migrated.settings.dailyTarget = Math.max(8, Math.min(100, Number(migrated.settings.dailyTarget) || base.settings.dailyTarget));
    if (!/^\d{4}-\d{2}-\d{2}$/.test(migrated.course.startDate || "")) migrated.course.startDate = todayKey();
    if (!migrated.course.completedDays || typeof migrated.course.completedDays !== "object") migrated.course.completedDays = {};
    return migrated;
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function esc(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalize(value) {
    return String(value ?? "")
      .toLocaleLowerCase("tr-TR")
      .replaceAll("ı", "i")
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[’‘]/g, "'")
      .replace(/[.,!?;:]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function shuffled(input) {
    const copy = [...input];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function todayKey(offset = 0) {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function escapeRegExp(value) {
    return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function topicMetaLabel(id) {
    return String(id || "Genel").replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  function topicMeta(id) {
    if (TOPICS[id]) return { ...TOPICS[id], label: TOPICS[id].label || TOPICS[id].titleTr || TOPICS[id].title || topicMetaLabel(id) };
    return { label: topicMetaLabel(id), icon: "•", color: "#6c55d9" };
  }

  function topicEntries(includeAll = true) {
    const ids = [...new Set(DATA.map((item) => item.topic).filter(Boolean))];
    PASSAGES.forEach((passage) => {
      const topicId = passage.topic || passage.topicId;
      if (topicId && !ids.includes(topicId)) ids.push(topicId);
    });
    const entries = ids.map((id) => [id, topicMeta(id)]);
    return includeAll ? [["all", TOPICS.all], ...entries] : entries;
  }

  function applicableSkills(item) {
    const skills = ["recognize", "spell"];
    const familyForms = Object.values(item.family || {}).flatMap(splitAnswers).filter(Boolean);
    if (new Set(familyForms).size >= 2) skills.push("family");
    if (Array.isArray(item.collocations) && item.collocations.filter(Boolean).length) skills.push("collocation");
    if ((item.collocations?.[0] || item.lemma || "").trim()) skills.push("sentence");
    return skills;
  }

  function profileFor(id) {
    if (!state.profiles[id]) {
      state.profiles[id] = {
        skills: Object.fromEntries(SKILLS.map((s) => [s, 0])),
        due: Object.fromEntries(SKILLS.map((s) => [s, todayKey()])),
        attempts: 0,
        lastSeen: null,
        rotations: { family: 0, collocation: 0, sentence: 0 },
        practice: { clozeAttempts: 0, clozeCorrect: 0 },
        failures: {}
      };
    }
    const p = state.profiles[id];
    p.skills = { ...Object.fromEntries(SKILLS.map((s) => [s, 0])), ...(p.skills || {}) };
    p.due = { ...Object.fromEntries(SKILLS.map((s) => [s, todayKey()])), ...(p.due || {}) };
    p.rotations = { family: 0, collocation: 0, sentence: 0, ...(p.rotations || {}) };
    p.practice = { clozeAttempts: 0, clozeCorrect: 0, ...(p.practice || {}) };
    p.failures = { ...(p.failures || {}) };
    return p;
  }

  function mastery(item) {
    const scores = applicableSkills(item).map((s) => profileFor(item.id).skills[s] || 0);
    return scores.length ? Math.min(...scores) : 0;
  }

  function dueTasksCount() {
    const now = todayKey();
    return DATA.reduce((total, item) => {
      const p = profileFor(item.id);
      return total + applicableSkills(item).filter((skill) => ((p.skills[skill] || 0) > 0 || p.failures[skill]) && (p.due[skill] || now) <= now).length;
    }, 0);
  }

  function learnedCount() {
    return DATA.filter((item) => SKILLS.some((s) => (profileFor(item.id).skills[s] || 0) > 0)).length;
  }

  function activeCount() {
    return DATA.filter((item) => mastery(item) >= 2).length;
  }

  function unseenItems() {
    return DATA.filter((item) => !applicableSkills(item).some((skill) => (profileFor(item.id).skills[skill] || 0) > 0));
  }

  function courseDay() {
    const completed = Object.entries(state.course.completedDays || {}).filter(([, value]) => value);
    const completedCount = completed.length;
    const completedToday = completed.some(([, value]) => value === todayKey());
    return Math.max(1, Math.min(COURSE_DAYS, completedToday ? completedCount : completedCount + 1));
  }

  function dayPlan(day = courseDay()) {
    const topics = topicEntries(false);
    const phaseIndex = Math.min(5, Math.floor((day - 1) / 10));
    const phases = [
      "Akademik temel ve iletişim",
      "Araştırma, veri ve öğrenme",
      "İnsan, toplum ve tarih",
      "Yaşam, sağlık ve çevre",
      "Fizik, dünya ve teknoloji",
      "Bütünleşik tekrar ve üretim"
    ];
    const phaseTopicIds = [
      ["academic-reasoning", "cause-change", "campus-email", "opinion-discussion", "research-methods"],
      ["data-statistics", "research-statistics", "business-economics", "education-learning", "education", "language-literature", "linguistics", "social-science"],
      ["history", "art-music", "government-law", "politics-law", "philosophy-religion", "geography-urbanization", "geography", "literature"],
      ["life-science", "environment-ecology", "environment-climate", "ecology", "health-medicine", "agriculture-food", "agriculture", "architecture-design"],
      ["physical-science", "earth-science", "geology", "astronomy-space", "astronomy", "technology-engineering"],
      topics.map(([id]) => id)
    ];
    const phaseTopics = topics.filter(([id]) => phaseTopicIds[phaseIndex].includes(id));
    const available = phaseTopics.length ? phaseTopics : topics;
    const focusIndex = available.length ? Math.floor(((day - 1) % 10) / 2) % available.length : 0;
    const focus = available[focusIndex] || ["all", TOPICS.all];
    const daysLeft = Math.max(1, COURSE_DAYS - day + 1);
    const unseen = unseenItems().length;
    const coverageMinimum = Math.ceil(unseen / daysLeft);
    const reviewDay = day % 7 === 0;
    return {
      day,
      phase: phaseIndex + 1,
      phaseLabel: phases[phaseIndex],
      focusId: focus[0],
      focusLabel: focus[1].label,
      coverageMinimum,
      recommendedTarget: Math.max(12, Math.ceil(coverageMinimum / (reviewDay ? .4 : .7))),
      daysLeft,
      reviewDay
    };
  }

  function topicOptions(selected, includeAll = true) {
    return topicEntries(includeAll)
      .map(([id, t]) => `<option value="${esc(id)}" ${selected === id ? "selected" : ""}>${esc(t.label)}</option>`)
      .join("");
  }

  function avatarVisual(location) {
    if (localAvatar) {
      const className = location === "mobile" ? "mobile-nav-photo" : "";
      return `<img class="${className}" src="${esc(localAvatar)}" alt="">`;
    }
    return location === "mobile"
      ? '<span class="mobile-nav-photo mobile-nav-placeholder">DF</span>'
      : '<span class="brand-initials">DF</span>';
  }

  function renderAvatarDialog() {
    if (!avatarDialogOpen) return "";
    return `
      <div class="avatar-dialog-backdrop" data-avatar-dialog-backdrop>
        <section class="avatar-dialog" role="dialog" aria-modal="true" aria-labelledby="avatar-dialog-title" aria-describedby="avatar-dialog-description">
          <button class="avatar-dialog-close" type="button" data-close-avatar aria-label="Fotoğraf penceresini kapat">×</button>
          <div class="avatar-dialog-preview" aria-hidden="true"><span class="brand-mark">${avatarVisual("header")}</span></div>
          <p class="eyebrow">Cihaza özel görünüm</p>
          <h2 id="avatar-dialog-title">Bugün simgeni seç</h2>
          <p id="avatar-dialog-description">Buradan seçtiğin fotoğraf küçültülerek yalnızca bu cihazdaki bu tarayıcıda saklanır. GitHub’a, ilerleme yedeğine veya başka bir sunucuya gönderilmez.</p>
          <input id="local-avatar-input" type="file" accept="image/jpeg,image/png,image/webp" hidden>
          <div class="avatar-dialog-actions">
            <button class="btn btn-purple" type="button" data-select-avatar>${localAvatar ? "Fotoğrafı değiştir" : "Fotoğraf seç"}</button>
            ${localAvatar ? '<button class="btn btn-ghost avatar-remove-button" type="button" data-remove-avatar>Bu cihazdan kaldır</button>' : ""}
            <button class="btn btn-ghost" type="button" data-close-avatar>Vazgeç</button>
          </div>
          <p class="avatar-file-note">JPG, PNG veya WebP · en fazla 8 MB</p>
        </section>
      </div>`;
  }

  function shell(content) {
    const due = dueTasksCount();
    const nav = [
      ["today", "Bugün"],
      ["plan", "60 Gün"],
      ["modules", "Modüller"],
      ["words", "Kelimeler"],
      ["progress", "İlerlemem"],
      ["about", "Yöntem"]
    ];
    const mobile = [["today", "Bugün"], ["plan", "60 Gün"], ["modules", "Modüller"], ["progress", "İlerlemem"]];
    return `
      <a class="skip-link" href="#main">İçeriğe geç</a>
      <div class="app-shell">
        <header class="topbar">
          <div class="topbar-inner">
            <div class="brand">
              <button class="avatar-button" type="button" data-open-avatar aria-label="${localAvatar ? "Cihaza özel fotoğrafı değiştir" : "Cihaza özel fotoğraf seç"}">
                <span class="brand-mark" aria-hidden="true">${avatarVisual("header")}</span>
                <span class="avatar-edit-badge" aria-hidden="true">+</span>
              </button>
              <button class="brand-home" type="button" data-view="today" aria-label="Uygulama ana sayfası">
                <span class="brand-copy"><strong>Fuzûlî der ki:</strong><small>“Aşk derdiyle hoşem, el çek ilâcımdan tabîb.”</small></span>
              </button>
            </div>
            <nav class="desktop-nav" aria-label="Ana menü">
              ${nav.map(([id, label]) => `<button class="nav-btn ${state.view === id ? "active" : ""}" data-view="${id}">${label}</button>`).join("")}
            </nav>
            <span class="count-pill" title="Vadesi gelen beceri kartları" aria-label="${due} tekrar bekliyor">${due > 99 ? "99+" : due}</span>
          </div>
        </header>
        <main class="main" id="main" tabindex="-1">${content}</main>
        <nav class="mobile-nav" aria-label="Mobil ana menü">
          ${mobile.map(([id, label], i) => `<button class="${state.view === id ? "active" : ""}" data-view="${id}" ${state.view === id ? 'aria-current="page"' : ""}><span aria-hidden="true">${id === "today" ? avatarVisual("mobile") : ["⌂","60","◫","↗"][i]}</span>${label}</button>`).join("")}
        </nav>
        <div id="live" class="sr-only" aria-live="polite"></div>
      </div>
      ${drawerWordId ? wordDrawer(drawerWordId) : ""}
      ${renderAvatarDialog()}
    `;
  }

  function render() {
    clearInterval(timerId);
    timerId = null;
    let content;
    if (state.view === "practice") content = renderPractice();
    else if (state.view === "plan") content = renderPlan();
    else if (state.view === "modules") content = renderModules();
    else if (state.view === "words") content = renderWords();
    else if (state.view === "progress") content = renderProgress();
    else if (state.view === "about") content = renderAbout();
    else content = renderToday();
    app.innerHTML = shell(content);
    bindCommon();
    if (state.view === "practice") bindPractice();
  }

  function renderToday() {
    const due = dueTasksCount();
    const learned = learnedCount();
    const targetDone = state.activity[todayKey()] || 0;
    const pct = Math.min(100, Math.round((targetDone / state.settings.dailyTarget) * 100));
    const plan = dayPlan();
    const coursePct = Math.round((plan.day / COURSE_DAYS) * 100);
    const targetOptions = [...new Set([12, 18, 24, 30, 40, 50, 60, 80, state.settings.dailyTarget])].sort((a, b) => a - b);
    return `
      <section class="hero">
        <div class="hero-main">
          <p class="eyebrow">60 günlük kurs · ${plan.day}. gün · ${new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long" }).format(new Date())}</p>
          <h1>Bugün: <span style="color:var(--lime)">${esc(plan.focusLabel)}</span></h1>
          <p>${esc(plan.phaseLabel)} evresindesin. Oturum; vadesi gelen tekrarları, zayıf becerileri ve havuzun tamamına ulaşmak için gereken yeni kartları birlikte seçer.</p>
          <div class="hero-actions">
            <button class="btn btn-primary" data-start="mixed">${state.settings.dailyTarget} görevlik karmaya başla <span aria-hidden="true">→</span></button>
            <button class="btn btn-ghost" data-start="review">Yalnızca tekrar</button>
            <button class="btn btn-ghost" data-view="plan">60 günlük plan</button>
          </div>
        </div>
        <div class="hero-side">
          <div class="stat-card">
            <span class="stat-number">${due}</span>
            <span class="stat-label">vadesi gelen beceri tekrarı</span>
            <div class="mini-progress" aria-label="Öğrenilen kelime oranı"><span style="width:${DATA.length ? Math.round(learned / DATA.length * 100) : 0}%"></span></div>
          </div>
          <div class="stat-card">
            <span class="stat-number">${targetDone}<small style="font-size:18px;color:var(--muted)">/${state.settings.dailyTarget}</small></span>
            <span class="stat-label">bugünkü hedef</span>
            <div class="mini-progress"><span style="width:${pct}%;background:var(--teal)"></span></div>
          </div>
        </div>
      </section>

      <section class="course-strip" aria-label="Kurs durumu">
        <div><span class="eyebrow">Kurs ilerlemesi</span><strong>${plan.day}/60. gün</strong><div class="mini-progress"><span style="width:${coursePct}%"></span></div></div>
        <div><span class="eyebrow">Havuz</span><strong>${learned}/${DATA.length} görüldü</strong><p>${unseenItems().length} kart ilk temasını bekliyor.</p></div>
        <div><label class="eyebrow" for="daily-target">Günlük hedef</label><select class="select compact-select" id="daily-target">${targetOptions.map((n) => `<option value="${n}" ${n === state.settings.dailyTarget ? "selected" : ""}>${n} görev</option>`).join("")}</select><p>İstediğin an değiştir; ilerlemen silinmez.</p></div>
      </section>
      ${state.settings.dailyTarget < plan.recommendedTarget ? `<div class="notice coverage-warning"><strong>Tam havuz uyarısı:</strong> Kalan ${plan.daysLeft} günde her kartı en az bir kez görmek ve tekrara da yer bırakmak için günlük yaklaşık ${plan.recommendedTarget} görev öneriliyor (${plan.coverageMinimum} yeni temas + tekrar). Hedefi artırabilir veya kursu 60 günden uzun sürdürebilirsin.</div>` : ""}

      <section class="section">
        <div class="section-head"><div><p class="eyebrow">Ustalık modeli</p><h2>Bir kelimeyi ne zaman “biliyorum” diyeceğiz?</h2></div></div>
        <div class="skill-grid">
          ${[
            ["İki saniyede tanı", "Gördüğünde düşünmeden anlamını yakala."],
            ["Doğru yaz", "Bağlamdan eksiksiz geri çağır."],
            ["Aileyi kur", "Yaygın biçimler varsa isim, fiil, sıfat ve zarfı ayır."],
            ["Kalıpla söyle", "Tek kelime değil, doğal birliktelik üret."],
            ["Cümlede kullan", "Yeni bir bağlama kendin taşı."]
          ].map((x, i) => `<div class="skill-tile"><span class="skill-index">${i + 1}</span><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-head"><div><p class="eyebrow">Bağlam seç</p><h2>Bugün hangi alana girelim?</h2></div><button class="btn btn-soft" data-view="words">Tüm havuzu gör</button></div>
        <div class="topic-row">
          ${topicEntries(true).map(([id, t]) => `<button class="topic-chip ${state.topic === id ? "active" : ""}" data-topic="${id}" style="--dot:${t.color}"><span class="topic-dot"></span>${t.label}</button>`).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-head"><div><p class="eyebrow">Hızlı giriş</p><h2>Tek beceriye odaklan</h2></div></div>
        <div class="module-grid">
          ${["recognize", "spell", "cloze"].map((id) => MODULES.find((m) => m.id === id)).map(moduleCard).join("")}
        </div>
      </section>
    `;
  }

  function renderPlan() {
    const current = dayPlan();
    const weeks = Array.from({ length: 9 }, (_, weekIndex) => {
      const start = weekIndex * 7 + 1;
      const end = Math.min(COURSE_DAYS, start + 6);
      if (start > COURSE_DAYS) return "";
      const sample = dayPlan(start);
      const days = Array.from({ length: end - start + 1 }, (_, i) => {
        const plan = dayPlan(start + i);
        const done = !!state.course.completedDays[String(plan.day)];
        return `<div class="plan-day ${plan.day === current.day ? "current" : ""} ${done ? "done" : ""}"><span>${plan.day}</span><strong>${esc(plan.focusLabel)}</strong><small>${plan.reviewDay ? "Haftalık pekiştirme + " : ""}karma tekrar</small></div>`;
      }).join("");
      return `<section class="plan-week"><div class="plan-week-head"><span>Hafta ${weekIndex + 1}</span><strong>${esc(sample.phaseLabel)}</strong><small>Gün ${start}–${end}</small></div><div class="plan-days">${days}</div></section>`;
    }).join("");
    return `<div class="section-head"><div><p class="eyebrow">Uyarlanabilir yol haritası</p><h1 style="font-size:clamp(38px,5vw,62px)">60 gün, tek bir<br>ezber listesi değil.</h1><p class="muted">Her gün konu odağı değişir; fakat vadesi gelen tekrarlar bütün konulardan gelir. Bir gün kaçırırsan kartlar kaybolmaz, sonraki oturum öncelik sırasını yeniden kurar.</p></div><button class="btn btn-primary" data-start="mixed">${current.day}. gün karmasını aç</button></div>
      <div class="plan-summary"><div><span>Bugünkü odak</span><strong>${esc(current.focusLabel)}</strong></div><div><span>Evren</span><strong>${current.phase}/6 · ${esc(current.phaseLabel)}</strong></div><div><span>Minimum yeni temas</span><strong>${current.coverageMinimum} kart</strong></div><div><span>Günlük hedef</span><strong>${state.settings.dailyTarget} görev</strong></div></div>
      <div class="notice"><strong>Planın çalışma mantığı:</strong> “Bugünün kelimelerini gör, bir daha açma” sistemi değildir. Yeni temas yalnızca havuzun tamamını dolaştırır; asıl sıra vadesi gelen tekrar, en zayıf beceri ve konu odağına göre kurulur.</div>
      <div class="plan-list">${weeks}</div>`;
  }

  function moduleCard(m) {
    return `<article class="module-card">
      <div class="module-icon" style="--soft:${m.soft}" aria-hidden="true">${m.icon}</div>
      <h3>${m.title}</h3><p>${m.text}</p>
      <div class="module-meta"><span>${m.meta}</span><button class="btn btn-soft" data-start="${m.id}">Başla →</button></div>
    </article>`;
  }

  function renderModules() {
    return `
      <div class="section-head"><div><p class="eyebrow">Çalışma salonu</p><h1 style="font-size:clamp(38px,5vw,62px)">Bir kas seç,<br>doğrudan çalış.</h1><p class="muted">Her modül 8–10 kısa görev üretir. Konu filtresi bütün modüllere uygulanır.</p></div></div>
      <div class="panel" style="margin-bottom:22px">
        <label for="module-topic"><strong>Çalışma bağlamı</strong></label>
        <select class="select" id="module-topic" style="margin-top:10px;max-width:360px">${topicOptions(state.topic)}</select>
      </div>
      <div class="module-grid">${MODULES.map(moduleCard).join("")}</div>
      <div class="notice" style="margin-top:24px"><strong>Nasıl tekrar ediyor?</strong> Yanlış yaptığın beceri aynı gün tekrar kuyruğuna girer. Doğru yaptıkça aralık 1 → 3 → 7 gün olur; diğer beceriler bundan bağımsız ilerler.</div>
    `;
  }

  function filteredWords() {
    const f = state.filters;
    const q = normalize(f.search);
    return DATA.filter((item) => {
      const topicOk = f.topic === "all" || item.topic === f.topic;
      const levelOk = f.level === "all" || item.level === f.level;
      const text = normalize([item.lemma, item.tr, ...(item.collocations || [])].join(" "));
      return topicOk && levelOk && (!q || text.includes(q));
    });
  }

  function renderWords() {
    const list = filteredWords();
    const pageSize = 48;
    const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
    state.filters.page = Math.max(1, Math.min(totalPages, Number(state.filters.page) || 1));
    const page = state.filters.page;
    const shown = list.slice((page - 1) * pageSize, page * pageSize);
    return `
      <div class="section-head"><div><p class="eyebrow">Çekirdek havuz</p><h1 style="font-size:clamp(38px,5vw,62px)">${DATA.length} kelime ve kalıp</h1><p class="muted">Tek tek sözcükleri değil; anlamı, ailesi, eşlik ettiği kelimeler ve bağlamıyla birlikte incele.</p></div></div>
      <div class="filterbar">
        <label><span class="sr-only">Kelime ara</span><input class="field" id="word-search" type="search" placeholder="Kelime, anlam veya kalıp ara…" value="${esc(state.filters.search)}" /></label>
        <label><span class="sr-only">Konu</span><select class="select" id="word-topic">${topicOptions(state.filters.topic)}</select></label>
        <label><span class="sr-only">Seviye</span><select class="select" id="word-level"><option value="all">Tüm seviyeler</option>${["B2","C1","C2"].map(x => `<option ${state.filters.level === x ? "selected" : ""}>${x}</option>`).join("")}</select></label>
      </div>
      <p class="small muted">${list.length} sonuç · ${list.length ? `${(page - 1) * pageSize + 1}–${Math.min(page * pageSize, list.length)} gösteriliyor` : "Kart bulunamadı"}.</p>
      ${list.length ? `<div class="word-grid">${shown.map(wordCard).join("")}</div>${pagination(page, totalPages)}` : `<div class="empty">Bu filtrelerle eşleşen kart yok.</div>`}
    `;
  }

  function pagination(page, totalPages) {
    if (totalPages <= 1) return "";
    const pages = [...new Set([1, page - 1, page, page + 1, totalPages].filter((n) => n >= 1 && n <= totalPages))];
    return `<nav class="pagination" aria-label="Kelime sayfaları"><button class="btn btn-soft" data-page="${page - 1}" ${page === 1 ? "disabled" : ""}>← Önceki</button>${pages.map((n, i) => `${i && n - pages[i - 1] > 1 ? `<span aria-hidden="true">…</span>` : ""}<button class="page-btn ${n === page ? "active" : ""}" data-page="${n}" aria-current="${n === page ? "page" : "false"}">${n}</button>`).join("")}<button class="btn btn-soft" data-page="${page + 1}" ${page === totalPages ? "disabled" : ""}>Sonraki →</button></nav>`;
  }

  function wordCard(item) {
    const m = mastery(item);
    const topic = topicMeta(item.topic);
    return `<article class="word-card">
      <div class="word-top"><div><h3>${esc(item.lemma)}</h3><p class="muted" style="margin:5px 0 0">${esc(item.tr)}</p></div><button class="icon-btn" data-speak="${esc(item.lemma)}" aria-label="${esc(item.lemma)} telaffuzunu dinle">🔊</button></div>
      <div class="tag-row"><span class="tag accent">${esc(item.level || "C1")}</span><span class="tag"><span class="topic-dot" style="--dot:${topic.color};margin-right:5px"></span>${esc(topic.label)}</span>${item.active ? `<span class="tag">Aktif üretim</span>` : ""}</div>
      <div><span class="small muted">Doğal kalıp</span><br><span class="collocation">${esc(item.collocations?.[0] || item.lemma)}</span></div>
      <div class="word-actions"><span class="mastery-dots" title="Uygulanabilir beceri ustalığı">${SKILLS.map((s) => `<i class="${!applicableSkills(item).includes(s) ? "na" : (profileFor(item.id).skills[s] || 0) >= 2 ? "on" : ""}" title="${esc(SKILL_LABELS[s])}: ${applicableSkills(item).includes(s) ? `${profileFor(item.id).skills[s] || 0}/3` : "bu kart için uygulanmaz"}"></i>`).join("")}</span><button class="btn btn-soft" data-word="${esc(item.id)}">Kartı aç</button></div>
    </article>`;
  }

  function wordDrawer(id) {
    const item = DATA.find((x) => x.id === id);
    if (!item) return "";
    const topic = topicMeta(item.topic);
    const family = item.family || {};
    return `<div class="drawer-backdrop" data-close-drawer role="presentation">
      <aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        <div class="drawer-head"><div><p class="eyebrow">${esc(topic.label)} · ${esc(item.level)}</p><h2 id="drawer-title">${esc(item.lemma)}</h2><p class="prompt-meaning">${esc(item.tr)}</p></div><button class="icon-btn" data-close-drawer aria-label="Kapat">✕</button></div>
        <div class="detail-section"><button class="btn btn-soft" data-speak="${esc(item.lemma)}">🔊 Telaffuz et</button></div>
        <div class="detail-section"><h3>Kelime ailesi</h3><div class="family-table">${Object.keys(FAMILY_LABELS).map(k => `<div><small>${FAMILY_LABELS[k]}</small><strong>${esc(family[k] || "—")}</strong></div>`).join("")}</div></div>
        <div class="detail-section"><h3>Kalıpla öğren</h3><div class="tag-row">${(item.collocations || []).map(x => `<span class="collocation">${esc(x)}</span>`).join("")}</div></div>
        <div class="detail-section"><h3>Bağlam içinde</h3><div class="context-card">${esc(item.example)}</div></div>
        <div class="detail-section"><h3>Kullanım notu</h3><p class="muted">${esc(item.note || "Bu ifadeyi tek başına değil, yukarıdaki doğal kalıplarla birlikte öğren.")}</p></div>
        <div class="detail-section"><h3>Beceri durumu</h3><div class="metric-list">${SKILLS.map(s => applicableSkills(item).includes(s) ? metricRow(SKILL_LABELS[s], profileFor(item.id).skills[s] || 0, 3) : `<div class="metric-row"><span>${esc(SKILL_LABELS[s])}</span><div class="metric-bar unavailable"><i></i></div><strong>—</strong></div>`).join("")}</div><p class="small muted">“—” bu kartta yaygın/öğretilebilir bir biçim olmadığı için becerinin ustalık hesabına katılmadığını gösterir.</p></div>
        <button class="btn btn-purple" data-practice-word="${esc(item.id)}">Bu kartı çalış</button>
      </aside>
    </div>`;
  }

  function metricRow(label, value, max) {
    const pct = Math.round((value / max) * 100);
    return `<div class="metric-row"><span>${esc(label)}</span><div class="metric-bar"><i style="width:${pct}%"></i></div><strong>${value}</strong></div>`;
  }

  function renderProgress() {
    const attempted = learnedCount();
    const active = activeCount();
    const avgs = Object.fromEntries(SKILLS.map((s) => {
      const eligible = DATA.filter((item) => applicableSkills(item).includes(s));
      const sum = eligible.reduce((n, item) => n + (profileFor(item.id).skills[s] || 0), 0);
      return [s, eligible.length ? sum / eligible.length : 0];
    }));
    const totalAttempts = Object.values(state.profiles).reduce((n, p) => n + (p.attempts || 0), 0);
    const passageDone = PASSAGES.filter((p, index) => (state.passageProgress[passageKey(p, index)]?.attempts || 0) > 0).length;
    const passagePct = PASSAGES.length ? Math.round(passageDone / PASSAGES.length * 100) : 0;
    const plan = dayPlan();
    return `
      <div class="section-head"><div><p class="eyebrow">İlerleme</p><h1 style="font-size:clamp(38px,5vw,62px)">Ne biliyorsun,<br>nerede zorlanıyorsun?</h1></div></div>
      <div class="progress-layout">
        <section class="panel"><p class="eyebrow">Genel görünüm</p><span class="stat-number">${active}</span><p class="muted">kartın uygulanabilir bütün becerilerinde en az orta düzeydesin.</p><div class="summary-grid"><div><strong>${attempted}</strong><span>görülen kart</span></div><div><strong>${totalAttempts}</strong><span>deneme</span></div><div><strong>${dueTasksCount()}</strong><span>vadesi gelen</span></div></div></section>
        <section class="panel"><p class="eyebrow">Beceri dengesi</p><h3>Ortalama ustalık</h3><div class="metric-list">${SKILLS.map((s) => metricRow(SKILL_LABELS[s], Math.round(avgs[s] * 10) / 10, 3)).join("")}</div></section>
        <section class="panel"><p class="eyebrow">60 günlük rota</p><h3>${plan.day}/60. gün · ${esc(plan.phaseLabel)}</h3><p class="muted">Bugünkü konu odağın: <strong>${esc(plan.focusLabel)}</strong>. Kaçırılan günler içerik kaybı yaratmaz; bekleyen tekrarlar sonraki oturuma taşınır.</p><div class="mini-progress"><span style="width:${Math.round(plan.day / COURSE_DAYS * 100)}%"></span></div><button class="btn btn-soft" data-view="plan" style="margin-top:16px">Planı aç</button></section>
        <section class="panel"><p class="eyebrow">Complete the Words</p><h3>${passageDone}/${PASSAGES.length} metin görüldü</h3><p class="muted">Oturumlar en az çalışılan metinleri öne alır; böylece metin havuzunun tamamı sırayla dolaşılır.</p><div class="mini-progress"><span style="width:${passagePct}%;background:var(--teal)"></span></div><button class="btn btn-soft" data-start="complete" style="margin-top:16px">Metin çalış</button></section>
        <section class="panel"><p class="eyebrow">Son 7 gün</p><h3>Çalışma ritmi</h3><div class="activity-grid">${Array.from({length:7}, (_, i) => {
          const offset = i - 6; const key = todayKey(offset); const count = state.activity[key] || 0;
          return `<div class="activity-day ${count ? "on" : ""}" title="${key}: ${count} görev"><span>${new Intl.DateTimeFormat("tr-TR", {weekday:"short"}).format(new Date(key + "T12:00:00"))}<br>${count || "·"}</span></div>`;
        }).join("")}</div></section>
        <section class="panel"><p class="eyebrow">Verilerin</p><h3>Yedekle veya sıfırla</h3><p class="muted">İlerleme yalnızca bu tarayıcıda tutulur. Başka cihaza geçeceksen JSON yedeğini indir. Eski sürüm yedekleri açılırken güvenli biçimde güncellenir.</p><div class="hero-actions"><button class="btn btn-ink" id="export-progress">Yedeği indir</button><label class="btn btn-soft" for="import-progress">Yedek yükle</label><input id="import-progress" type="file" accept="application/json" hidden><button class="btn btn-danger" id="reset-progress">Sıfırla</button></div></section>
      </div>
    `;
  }

  function renderAbout() {
    return `
      <div class="section-head"><div><p class="eyebrow">Yöntem ve kaynaklar</p><h1 style="font-size:clamp(38px,5vw,62px)">Bu havuz neye dayanıyor?</h1><p class="muted">626 tek sözcük ve 94 akademik kalıptan oluşan 720 içerik; 2026 sınav görevleri, akademik kullanım değeri ve konu kapsamı etrafında hazırlanmış bağımsız bir çalışma havuzudur.</p></div></div>
      <div class="progress-layout">
        <section class="panel"><h2>Beş temas, tek kart</h2><p>Bir sözcüğü yalnızca Türkçe karşılığıyla eşleştirmek pasif tanıma üretir. Burada aynı kart; hız, yazım, word family, collocation ve özgün cümle üzerinden ayrı ayrı izlenir. Yaygın bir kelime ailesi olmayan kartta o beceri “uygulanmaz” sayılır ve ustalığı engellemez.</p><div class="notice"><strong>Önemli:</strong> TOEFL için resmî, sonlu ve garantili bir kelime listesi yoktur. Uygulamadaki tanımlar, örnekler ve alıştırmalar özgün hazırlanmıştır; resmî soru kopyası içermez.</div></section>
        <section class="panel"><h2>Kullandığımız kaynak çerçevesi</h2><div class="source-list">
          <div class="source-item"><strong>ETS — 2026 TOEFL iBT Test Content</strong><span class="muted small">Güncel bölüm ve görev türlerini doğrulamak için kullanılan resmî sayfa.</span><a href="https://www.ets.org/toefl/test-takers/ibt/about/content.html" target="_blank" rel="noreferrer">Resmî içeriği aç ↗</a></div>
          <div class="source-item"><strong>ETS — 2026 Test Specifications</strong><span class="muted small">2026 yapı ve yeterlik tanımları için resmî teknik belge.</span><a href="https://www.ets.org/content/dam/ets-india/pdfs/toefl/toefl-ibt-test-specifications-2026.pdf" target="_blank" rel="noreferrer">Resmî PDF’yi aç ↗</a></div>
          <div class="source-item"><strong>Oxford Phrasal Academic Lexicon (OPAL)</strong><span class="muted small">Akademik yazı ve konuşmada yüksek değerli sözcük ve kalıp seçimini bilgilendiren OUP kaynağı.</span><a href="https://www.oxfordlearnersdictionaries.com/about/wordlists/opal" target="_blank" rel="noreferrer">OPAL genel bakışı ↗</a><a href="https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/opal/OPAL_written%20single%20words.pdf" target="_blank" rel="noreferrer">OPAL yazılı sözcük listesi ↗</a><a href="https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/opal/OPAL_written%20phrases.pdf" target="_blank" rel="noreferrer">OPAL yazılı kalıp listesi ↗</a><a href="https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/opal/OPAL_spoken%20single%20words.pdf" target="_blank" rel="noreferrer">OPAL sözlü sözcük listesi ↗</a><a href="https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/opal/OPAL_spoken%20phrases.pdf" target="_blank" rel="noreferrer">OPAL sözlü kalıp listesi ↗</a></div>
        </div></section>
        <section class="panel"><h2>Bağımsızlık ve marka notu</h2><p><strong>OPAL</strong>, Oxford University Press’in (OUP) telifli akademik kelime/kullanım kaynağıdır. Bu uygulama OUP ile bağlantılı değildir ve OUP tarafından onaylanmamıştır; OPAL yalnızca kelime seçimini bilgilendiren kaynaklardan biridir.</p><p><strong>TOEFL®</strong>, ETS’in tescilli markasıdır. Bu bağımsız araç ETS tarafından hazırlanmış veya onaylanmış değildir.</p></section>
        <section class="panel"><h2>Nasıl kullanmalısın?</h2><ol style="line-height:1.8;padding-left:22px"><li>Önce günlük karma oturumu bitir: yeni temas ve tekrar birlikte gelir.</li><li>En düşük becerine göre tek modül aç.</li><li>Yanlış kartı aynı gün yeniden gör; peş peşe on kez ezberleme.</li><li>Kalıbı sesli söyle ve cümleni mümkünse sesli oku.</li><li>Complete the Words havuzunu kapsama göstergesinden takip et.</li></ol></section>
        <section class="panel"><h2>Zamanlayıcı ayarı</h2><p class="muted">İki saniyelik tanıma ölçümü yalnızca veri verir; cevap vermeni engellemez. Baskı yaratıyorsa görsel zaman çubuğunu kapatabilirsin.</p><label class="check-item"><input id="timer-setting" type="checkbox" ${state.settings.timerEnabled ? "checked" : ""}><span><strong>2 saniyelik görsel zaman çubuğu</strong><br><span class="small muted">Klavye veya ekran okuyucu kullanımını kilitlemez.</span></span></label></section>
      </div>
    `;
  }

  function poolFor(skill, singleWordId) {
    let pool = singleWordId ? DATA.filter((x) => x.id === singleWordId) : DATA.filter((x) => state.topic === "all" || x.topic === state.topic);
    if (SKILLS.includes(skill)) pool = pool.filter((x) => applicableSkills(x).includes(skill));
    if (skill === "collocation") pool = pool.filter((x) => x.collocations?.length);
    if (skill === "cloze") pool = pool.filter((x) => x.cloze || x.example);
    return pool;
  }

  function uniqueChoices(correct, preferred, field, item) {
    const seen = new Set();
    const result = [];
    const add = (value) => {
      const clean = String(value || "").trim();
      const key = normalize(clean);
      if (clean && key && !seen.has(key)) { seen.add(key); result.push(clean); }
    };
    add(correct);
    (preferred || []).forEach(add);
    const sameTopic = DATA.filter((candidate) => candidate.id !== item.id && candidate.topic === item.topic);
    const sameLevel = DATA.filter((candidate) => candidate.id !== item.id && candidate.level === item.level);
    shuffled([...sameTopic, ...sameLevel, ...DATA]).forEach((candidate) => add(candidate[field]));
    return shuffled(result.slice(0, 4));
  }

  function createTask(item, skill) {
    const task = { itemId: item.id, skill, phase: "question", startedAt: Date.now(), hinted: false };
    const profile = profileFor(item.id);
    if (skill === "recognize") task.choices = uniqueChoices(item.tr, item.recognitionChoices, "tr", item);
    if (skill === "cloze") task.choices = uniqueChoices(item.lemma, item.distractors, "lemma", item);
    if (skill === "family") {
      const entries = Object.entries(item.family || {}).filter(([, v]) => v);
      const targetIndex = profile.rotations.family % entries.length;
      const target = entries[targetIndex];
      const prompt = entries.find((entry, index) => index !== targetIndex && normalize(entry[1]) !== normalize(target[1])) || entries[(targetIndex + 1) % entries.length];
      task.familyTarget = target[0];
      task.expected = target[1];
      task.familyPrompt = prompt;
    }
    if (skill === "collocation") {
      const collocations = item.collocations.filter(Boolean);
      task.expected = collocations[profile.rotations.collocation % collocations.length];
      task.tokens = shuffled(task.expected.split(/\s+/).map((text, i) => ({ id: `${i}-${text}`, text })));
      task.selected = [];
    }
    if (skill === "sentence") {
      const targets = item.collocations?.filter(Boolean).length ? item.collocations.filter(Boolean) : [item.lemma];
      task.expected = targets[profile.rotations.sentence % targets.length];
    }
    return task;
  }

  function passageKey(passage, index = 0) {
    return String(passage.key || passage.passageId || passage.id || `passage-${index}`);
  }

  function mixedTasks(count, singleWordId) {
    if (singleWordId) return applicableSkills(DATA.find((x) => x.id === singleWordId) || {}).map((skill) => createTask(DATA.find((x) => x.id === singleWordId), skill));
    const tasks = [];
    const used = new Set();
    const push = (item, skill) => {
      const key = `${item.id}:${skill}`;
      if (!item || used.has(key) || tasks.length >= count) return;
      tasks.push(createTask(item, skill)); used.add(key);
    };
    const plan = dayPlan();
    const focusId = state.topic === "all" ? plan.focusId : state.topic;
    const unseen = unseenItems().sort((a, b) => Number(b.topic === focusId) - Number(a.topic === focusId));
    const due = [];
    DATA.forEach((item) => applicableSkills(item).forEach((skill) => {
      const p = profileFor(item.id);
      if (((p.skills[skill] || 0) > 0 || p.failures[skill]) && (p.due[skill] || todayKey()) <= todayKey()) due.push({ item, skill, score: p.skills[skill] || 0, focus: item.topic === focusId });
    }));
    due.sort((a, b) => a.score - b.score || Number(b.focus) - Number(a.focus) || String(a.item.id).localeCompare(String(b.item.id)));
    const reviewShare = plan.reviewDay ? .6 : .3;
    const maxNew = due.length ? Math.max(0, count - Math.max(1, Math.ceil(count * reviewShare))) : count;
    const newSlots = Math.min(unseen.length, maxNew, Math.max(1, plan.coverageMinimum));
    unseen.slice(0, newSlots).forEach((item) => push(item, "recognize"));
    due.forEach(({ item, skill }) => push(item, skill));
    const development = [];
    DATA.filter((item) => applicableSkills(item).some((skill) => (profileFor(item.id).skills[skill] || 0) > 0)).forEach((item) => {
      applicableSkills(item).forEach((skill) => development.push({ item, skill, score: profileFor(item.id).skills[skill] || 0, focus: item.topic === focusId }));
    });
    development.sort((a, b) => a.score - b.score || Number(b.focus) - Number(a.focus) || Math.random() - .5);
    development.forEach(({ item, skill }) => push(item, skill));
    unseen.slice(newSlots).forEach((item) => push(item, "recognize"));
    return tasks;
  }

  function reviewTasks(count) {
    const candidates = [];
    DATA.forEach((item) => applicableSkills(item).forEach((skill) => {
      const p = profileFor(item.id);
      if (((p.skills[skill] || 0) > 0 || p.failures[skill]) && (p.due[skill] || todayKey()) <= todayKey()) candidates.push({ item, skill, score: p.skills[skill] || 0, due: p.due[skill] || todayKey() });
    }));
    candidates.sort((a, b) => a.due.localeCompare(b.due) || a.score - b.score);
    return candidates.slice(0, count).map(({ item, skill }) => createTask(item, skill));
  }

  function startSession(mode, singleWordId = null) {
    if (!DATA.length && mode !== "complete") {
      toast("Kelime verisi henüz yüklenemedi.");
      return;
    }
    if (mode === "complete") {
      if (!PASSAGES.length) { toast("Metin verisi henüz yüklenemedi."); return; }
      const filtered = state.topic === "all" ? PASSAGES : PASSAGES.filter((p) => p.topic === state.topic || p.topicId === state.topic || p.id === state.topic);
      const source = (filtered.length ? filtered : PASSAGES).map((passage, index) => ({ passage, key: passageKey(passage, index) }));
      source.sort((a, b) => (state.passageProgress[a.key]?.attempts || 0) - (state.passageProgress[b.key]?.attempts || 0) || String(state.passageProgress[a.key]?.lastSeen || "").localeCompare(String(state.passageProgress[b.key]?.lastSeen || "")));
      session = { mode: "complete", passages: source.slice(0, Math.min(3, source.length)).map((x) => ({ ...x.passage, _progressKey: x.key })), index: 0, score: 0, total: 0, results: [] };
      prepareCtest();
    } else {
      const count = singleWordId ? 5 : mode === "mixed" || mode === "review" ? state.settings.dailyTarget : 10;
      let tasks = [];
      if (mode === "mixed") tasks = mixedTasks(count, singleWordId);
      else if (mode === "review") tasks = reviewTasks(count);
      else {
        const pool = poolFor(mode, singleWordId).sort((a, b) => (profileFor(a.id).skills[mode] || 0) - (profileFor(b.id).skills[mode] || 0) || (profileFor(a.id).lastSeen || "").localeCompare(profileFor(b.id).lastSeen || ""));
        for (let i = 0; i < Math.min(count, pool.length); i++) tasks.push(createTask(pool[i], mode));
      }
      if (!tasks.length) { toast(mode === "review" ? "Vadesi gelen tekrar yok. Günlük karma oturumu açabilirsin." : "Bu filtre için uygun görev bulunamadı."); return; }
      session = { mode, tasks, index: 0, correct: 0, fast: 0, startedAt: Date.now(), results: [] };
    }
    state.view = "practice";
    drawerWordId = null;
    render();
    requestAnimationFrame(() => document.querySelector(".practice-card button, .practice-card input, .practice-card textarea")?.focus());
  }

  function renderPractice() {
    if (!session) { state.view = "today"; return renderToday(); }
    if (session.done) return renderSessionSummary();
    if (session.mode === "complete") return renderCtest();
    const task = session.tasks[session.index];
    if (!task) { session.done = true; return renderSessionSummary(); }
    const item = DATA.find((x) => x.id === task.itemId);
    const pct = Math.round((session.index / session.tasks.length) * 100);
    return `<div class="practice-wrap">
      <div class="practice-top"><button class="icon-btn" data-exit-practice aria-label="Çalışmadan çık">✕</button><div class="practice-progress" aria-label="Oturum ilerlemesi"><span style="width:${pct}%"></span></div><span class="practice-count">${session.index + 1} / ${session.tasks.length}</span></div>
      <section class="practice-card">${renderTask(task, item)}</section>
      <p class="small muted" style="text-align:center;margin-top:14px">Kısayollar: 1–4 seçenek · Enter kontrol/devam · H ipucu · S cevabı göster</p>
    </div>`;
  }

  function taskHeader(task, item, instruction) {
    const topic = topicMeta(item.topic);
    return `<div class="practice-label"><p class="eyebrow">${esc(SKILL_LABELS[task.skill])} · ${esc(topic.label)}</p><span class="tag accent">${esc(item.level)}</span></div><p class="muted">${instruction}</p>`;
  }

  function renderTask(task, item) {
    if (task.skill === "recognize") return renderRecognition(task, item);
    if (task.skill === "spell") return renderSpelling(task, item);
    if (task.skill === "family") return renderFamily(task, item);
    if (task.skill === "collocation") return renderCollocation(task, item);
    if (task.skill === "sentence") return renderSentence(task, item);
    return renderCloze(task, item);
  }

  function feedbackHtml(task, item) {
    if (task.phase !== "answered") return "";
    const good = task.correct;
    if (task.skill === "sentence") {
      return `<div class="feedback ${good ? "good" : "bad"}" role="status"><strong>${good ? "✓ Öz değerlendirmene göre ölçütler karşılandı" : "Tekrar kuyruğuna alındı"}</strong><p>${good ? "Bu sonuç otomatik dil bilgisi onayı değildir. Cümleni sesli okuyup hedef kalıbın anlamını bir kez daha kontrol et." : `Uygulama cümlene “yanlış” demiyor; senin rubrik yanıtın veya nesnel biçim kontrollerinden biri tamamlanmadı. Hedef: <strong>${esc(task.answer || item.lemma)}</strong>.`}</p><div class="context-card"><strong>Referans örnek:</strong><br>${esc(item.example || "")}</div><button class="btn btn-purple" data-next>Devam →</button></div>`;
    }
    return `<div class="feedback ${good ? "good" : "bad"}" role="status"><strong>${good ? "✓ Doğru" : "Henüz değil"}${task.fast ? " · 2 saniyenin içinde" : ""}</strong><p>${good ? esc(item.note || "İyi. Şimdi kalıbıyla birlikte bir kez sesli söyle.") : `Doğru cevap: <strong>${esc(task.answer || item.lemma)}</strong>. ${esc(item.note || "Kalıbı örnek cümleyle birlikte tekrar et.")}`}</p><div class="context-card">${highlightTarget(item.example, item.lemma)}</div><button class="btn btn-purple" data-next>Devam →</button></div>`;
  }

  function highlightTarget(text, target) {
    const safe = esc(text || "");
    const escapedTarget = esc(target || "");
    const idx = safe.toLocaleLowerCase("en-US").indexOf(escapedTarget.toLocaleLowerCase("en-US"));
    if (idx < 0) return safe;
    return `${safe.slice(0, idx)}<mark>${safe.slice(idx, idx + escapedTarget.length)}</mark>${safe.slice(idx + escapedTarget.length)}`;
  }

  function renderRecognition(task, item) {
    return `${taskHeader(task, item, "İngilizce ifadeyi görür görmez Türkçe karşılığını seç.")}
      <h2 class="prompt-word">${esc(item.lemma)}</h2>
      ${state.settings.timerEnabled && task.phase === "question" ? `<div class="timer-track" aria-hidden="true"><span></span></div>` : ""}
      <div class="option-grid">${task.choices.map((choice, i) => `<button class="option ${task.phase === "answered" ? (normalize(choice) === normalize(item.tr) ? "correct" : normalize(choice) === normalize(task.chosen) ? "wrong" : "") : ""}" data-choice="${esc(choice)}" ${task.phase === "answered" ? "disabled" : ""}><span class="tag" style="margin-right:8px">${i + 1}</span>${esc(choice)}</button>`).join("")}</div>
      ${feedbackHtml(task, item)}`;
  }

  function renderSpelling(task, item) {
    return `${taskHeader(task, item, "Türkçe anlamdan İngilizce kelimeyi veya kalıbı eksiksiz yaz.")}
      <p class="eyebrow" style="margin-top:38px">Türkçe ipucu</p><h2 class="prompt-word" style="font-size:clamp(31px,5vw,52px)">${esc(item.tr)}</h2>
      <div class="context-card">${esc((item.cloze || item.example || "").replace("___", "________"))}</div>
      ${task.hinted && task.phase === "question" ? `<p class="notice">İpucu: <strong>${esc(item.lemma.slice(0, Math.min(2, item.lemma.length)))}…</strong> · İpuçlu doğru en fazla 1 ustalık puanı kazandırır.</p>` : ""}
      ${task.phase === "question" ? `<form class="answer-area" data-answer-form><label for="spell-answer"><strong>Cevabın</strong></label><div class="answer-row"><input class="field" id="spell-answer" autocomplete="off" autocapitalize="none" spellcheck="false" /><button class="btn btn-purple">Kontrol et</button></div><div class="hero-actions"><button type="button" class="btn btn-soft" data-hint>H · İpucu</button><button type="button" class="btn btn-ghost" data-show-answer>S · Cevabı göster</button></div></form>` : ""}
      ${feedbackHtml(task, item)}`;
  }

  function splitAnswers(value) {
    return String(value || "").split(/\s*\/\s*|\s*;\s*/).map(normalize).filter(Boolean);
  }

  function renderFamily(task, item) {
    const family = item.family || {};
    const promptType = task.familyPrompt?.[0];
    const promptValue = task.familyPrompt?.[1];
    return `${taskHeader(task, item, "Verilen biçimden istenen kelime türüne dönüşüm yap. Yaygın olmayan biçimler özellikle sorulmaz.")}
      <p class="eyebrow" style="margin-top:32px">Verilen ${esc(FAMILY_LABELS[promptType] || promptType)}</p><h2 class="prompt-word">${esc(promptValue)}</h2>
      <div class="family-grid">${Object.keys(FAMILY_LABELS).map((key) => {
        const isTarget = key === task.familyTarget;
        return `<div class="family-cell ${isTarget ? "target" : ""}"><span class="label">${FAMILY_LABELS[key]}</span>${isTarget && task.phase === "question" ? `<strong>?</strong>` : `<strong>${esc(family[key] || "—")}</strong>`}</div>`;
      }).join("")}</div>
      ${task.phase === "question" ? `<form data-answer-form><label for="family-answer"><strong>${esc(FAMILY_LABELS[task.familyTarget])} biçimini yaz</strong></label><div class="answer-row"><input class="field" id="family-answer" autocomplete="off" autocapitalize="none" spellcheck="false"><button class="btn btn-purple">Kontrol et</button></div><div class="hero-actions"><button type="button" class="btn btn-soft" data-hint>H · İlk harf</button><button type="button" class="btn btn-ghost" data-show-answer>S · Cevabı göster</button></div></form>` : ""}
      ${task.hinted && task.phase === "question" ? `<p class="notice">İpucu: <strong>${esc(String(task.expected).charAt(0))}…</strong></p>` : ""}
      ${feedbackHtml(task, { ...item, lemma: task.answer || task.expected, example: item.example })}`;
  }

  function renderCollocation(task, item) {
    const selected = task.selected.map((id) => task.tokens.find((t) => t.id === id)).filter(Boolean);
    return `${taskHeader(task, item, "Parçalara doğru sırayla dokun ve doğal kalıbı kur. Geri almak için üstteki parçaya yeniden dokun.")}
      <p class="eyebrow" style="margin-top:32px">Anlam</p><h2 class="prompt-word" style="font-size:clamp(30px,5vw,50px)">${esc(item.tr)}</h2>
      ${task.phase === "question" ? `<div class="token-zone" aria-label="Kurduğun kalıp">${selected.length ? selected.map(t => `<button class="token chosen" data-token="${esc(t.id)}">${esc(t.text)}</button>`).join("") : `<span class="muted">Parçalar buraya gelecek…</span>`}</div><div class="token-zone" aria-label="Kullanılabilir parçalar">${task.tokens.filter(t => !task.selected.includes(t.id)).map(t => `<button class="token" data-token="${esc(t.id)}">${esc(t.text)}</button>`).join("")}</div><div class="hero-actions"><button class="btn btn-purple" data-check-collocation ${selected.length ? "" : "disabled"}>Kontrol et</button><button class="btn btn-soft" data-clear-tokens>Sıfırla</button><button class="btn btn-ghost" data-show-answer>S · Cevabı göster</button></div>` : `<div class="context-card"><span class="collocation">${esc(task.expected)}</span><br><br>${esc(item.example)}</div>`}
      ${feedbackHtml(task, { ...item, lemma: task.expected })}`;
  }

  function sentenceTarget(item, task) {
    return task?.expected || item.collocations?.[0] || item.lemma;
  }

  function renderSentence(task, item) {
    const target = sentenceTarget(item, task);
    const topic = topicMeta(item.topic);
    if (task.phase === "question") {
      return `${taskHeader(task, item, "Hedef ifadeyi verilen bağlamda yeni bir cümlede kullan.")}
        <p class="eyebrow" style="margin-top:32px">Hedef kalıp</p><h2 class="prompt-word" style="font-size:clamp(30px,5vw,50px)">${esc(target)}</h2>
        <div class="context-card"><strong>Bağlam:</strong> ${esc(topic.label)}. Bu konuda özgün, en az 8 kelimelik bir cümle yaz.</div>
        <form data-sentence-form><label for="sentence-answer"><strong>Cümlen</strong></label><textarea class="textarea" id="sentence-answer" placeholder="${esc(target)} ifadesini kullan…"></textarea><div class="hero-actions"><button class="btn btn-purple">Rubriği aç</button></div></form>`;
    }
    if (task.phase === "self") {
      return `${taskHeader(task, item, "Bu uygulama dil bilgisi veya doğallığı otomatik olarak doğrulamaz. İlk üç işaret yalnızca biçim kontrolüdür; kalan ölçütler dürüst öz değerlendirmedir.")}
        <h2 class="prompt-word" style="font-size:clamp(26px,5vw,44px)">${esc(task.sentence)}</h2>
        <div class="checklist">
          ${objectiveCheck("Hedef ifade cümlede geçiyor", task.objective.target)}
          ${objectiveCheck("En az 8 kelime var", task.objective.length)}
          ${objectiveCheck("Büyük harf ve son noktalama var", task.objective.form)}
        </div>
        <div class="context-card"><strong>Karşılaştırma örneği:</strong><br>${esc(item.example)}</div>
        <p><strong>Şimdi kendine dürüstçe bak:</strong></p>
        <div class="checklist">${[
          ["meaning", "Hedef ifadeyi doğru anlamda kullandım."],
          ["context", "Cümlem verilen konu bağlamına uyuyor."],
          ["grammar", "Özne-fiil uyumu, zaman ve artikel kullanımını kontrol ettim."],
          ["natural", "Cümle doğal ve açık geliyor; emin değilsem tekrar seçiyorum."]
        ].map(([key, label]) => `<label class="check-item"><input type="checkbox" data-self="${key}" ${task.self?.[key] ? "checked" : ""}><span>${label}</span></label>`).join("")}</div>
        <div class="notice"><strong>Dürüst puanlama:</strong> “Doğru ve doğal” seçimi öğretmen kontrolü değildir; senin beyanındır. Emin değilsen kart bugün tekrar kuyruğunda kalır.</div>
        <div class="hero-actions"><button class="btn btn-purple" data-finish-sentence="pass">Cümlem doğru ve doğal</button><button class="btn btn-soft" data-finish-sentence="review">Gözden geçirmem gerek</button></div>`;
    }
    return feedbackHtml(task, item);
  }

  function objectiveCheck(label, ok) {
    return `<div class="check-item"><span aria-hidden="true">${ok ? "✓" : "○"}</span><span>${esc(label)}</span></div>`;
  }

  function renderCloze(task, item) {
    return `${taskHeader(task, item, "Boşluğa bağlama en uygun kelimeyi yerleştir.")}
      <div class="context-card" style="font-size:20px">${esc(item.cloze || String(item.example || "").replace(new RegExp(escapeRegExp(item.lemma), "i"), "___"))}</div>
      <div class="option-grid">${task.choices.map((choice, i) => `<button class="option ${task.phase === "answered" ? (normalize(choice) === normalize(item.lemma) ? "correct" : normalize(choice) === normalize(task.chosen) ? "wrong" : "") : ""}" data-choice="${esc(choice)}" ${task.phase === "answered" ? "disabled" : ""}><span class="tag" style="margin-right:8px">${i + 1}</span>${esc(choice)}</button>`).join("")}</div>${feedbackHtml(task, item)}`;
  }

  function recordResult(item, skill, correct, hinted = false) {
    const p = profileFor(item.id);
    if (skill === "cloze") {
      p.practice.clozeAttempts += 1;
      if (correct) p.practice.clozeCorrect += 1;
      p.attempts = (p.attempts || 0) + 1;
      p.lastSeen = new Date().toISOString();
      state.activity[todayKey()] = (state.activity[todayKey()] || 0) + 1;
      if (state.activity[todayKey()] >= state.settings.dailyTarget) state.course.completedDays[String(courseDay())] = todayKey();
      saveState();
      return;
    }
    const old = p.skills[skill] || 0;
    const next = correct ? (hinted ? Math.min(1, Math.max(old, 1)) : Math.min(3, old + 1)) : Math.max(0, old - 1);
    p.skills[skill] = next;
    p.failures[skill] = !correct;
    const intervals = [0, 1, 3, 7];
    p.due[skill] = todayKey(correct ? intervals[next] : 0);
    p.attempts = (p.attempts || 0) + 1;
    p.lastSeen = new Date().toISOString();
    if (["family", "collocation", "sentence"].includes(skill)) p.rotations[skill] = (p.rotations[skill] || 0) + 1;
    state.activity[todayKey()] = (state.activity[todayKey()] || 0) + 1;
    if (state.activity[todayKey()] >= state.settings.dailyTarget) state.course.completedDays[String(courseDay())] = todayKey();
    saveState();
  }

  function finishAttempt(task, item, correct, answer, extra = {}) {
    if (task.phase === "answered") return;
    task.phase = "answered";
    task.correct = !!correct;
    task.answer = answer;
    task.fast = task.skill === "recognize" && !!correct && Date.now() - task.startedAt <= 2000;
    task.chosen = extra.chosen;
    recordResult(item, task.skill, !!correct, task.hinted);
    session.results.push({ itemId: item.id, skill: task.skill, correct: !!correct, hinted: task.hinted });
    if (correct) session.correct += 1;
    if (task.fast) session.fast += 1;
    render();
  }

  function nextTask() {
    if (!session || session.mode === "complete") return;
    if (session.index >= session.tasks.length - 1) {
      session.done = true;
      state.sessions.unshift({ date: new Date().toISOString(), correct: session.correct, total: session.tasks.length, mode: session.mode });
      state.sessions = state.sessions.slice(0, 30);
      saveState();
    } else {
      session.index += 1;
      session.tasks[session.index].startedAt = Date.now();
    }
    render();
  }

  function renderSessionSummary() {
    const total = session.mode === "complete" ? session.total : session.tasks.length;
    const correct = session.mode === "complete" ? session.score : session.correct;
    const pct = total ? Math.round(correct / total * 100) : 0;
    const needs = session.results?.filter((x) => !x.correct).length || 0;
    const restartMode = session.mode === "review" ? "mixed" : session.mode;
    const restartLabel = session.mode === "review" ? "Günlük karmaya geç" : "Bir tur daha";
    return `<div class="practice-wrap"><section class="practice-card session-summary"><p class="eyebrow">Oturum tamamlandı</p><h1 style="font-size:clamp(36px,6vw,58px)">${pct >= 80 ? "Sağlam iş." : pct >= 55 ? "Temel oturuyor." : "Tekrar kuyruğu hazır."}</h1><div class="score-ring" style="--score:${pct}%"><strong>${pct}%</strong></div><div class="summary-grid"><div><strong>${correct}/${total}</strong><span>doğru</span></div><div><strong>${session.fast || 0}</strong><span>doğru 2 sn tanıma</span></div><div><strong>${session.mode === "complete" ? session.passages.length : needs}</strong><span>${session.mode === "complete" ? "tamamlanan metin" : "tekrar edilecek"}</span></div></div><p class="muted">${session.mode === "complete" ? "Metin puanların kaydedildi; sonraki oturumda en az görülen metinler öne gelecek." : "Yanlışların yalnızca ilgili beceride tekrar sırasına alındı; diğer kazanımların korunuyor."}</p><div class="hero-actions" style="justify-content:center"><button class="btn btn-primary" data-start="${restartMode}">${restartLabel}</button><button class="btn btn-soft" data-view="progress">İlerlemeyi gör</button><button class="btn btn-ghost" data-view="today">Ana sayfa</button></div></section></div>`;
  }

  function prepareCtest() {
    const passage = session.passages[session.index];
    if (!passage) { session.done = true; return; }
    session.ctest = buildCtest(passage.passage || passage.text || "");
    session.checked = false;
  }

  function buildCtest(text) {
    const firstEnd = text.indexOf(".");
    const before = firstEnd >= 0 ? text.slice(0, firstEnd + 1) : "";
    const rest = firstEnd >= 0 ? text.slice(firstEnd + 1).trim() : text;
    const tokens = rest.split(/\s+/);
    let eligible = 0;
    let blanks = 0;
    const parts = tokens.map((raw) => {
      const match = raw.match(/^([^A-Za-z]*)([A-Za-z'-]+)([^A-Za-z]*)$/);
      if (!match) return { text: raw };
      const [, prefix, word, suffix] = match;
      eligible += 1;
      if (eligible % 2 === 0 && word.length >= 4 && blanks < 10) {
        blanks += 1;
        const keep = Math.ceil(word.length / 2);
        return { prefix, visible: word.slice(0, keep), answer: word.slice(keep), suffix, index: blanks - 1 };
      }
      return { text: raw };
    });
    return { before, parts, count: blanks, answers: {} };
  }

  function renderCtest() {
    const passage = session.passages[session.index];
    if (!passage || session.done) return renderSessionSummary();
    const c = session.ctest;
    return `<div class="practice-wrap"><div class="practice-top"><button class="icon-btn" data-exit-practice aria-label="Çalışmadan çık">✕</button><div class="practice-progress"><span style="width:${session.checked ? 100 : 30}%"></span></div><span class="practice-count">Metin ${session.index + 1}/${session.passages.length}</span></div><section class="practice-card">
      <div class="practice-label"><p class="eyebrow">Complete the Words · ${esc(passage.titleTr || passage.title || topicMeta(passage.topic || passage.topicId || passage.id).label)}</p><span class="tag accent">${c.count} boşluk</span></div>
      <p class="muted">İlk cümle tamdır. Sonraki bölümde yarım bırakılan sözcükleri bağlam ve dil bilgisiyle tamamla; kutuya yalnızca eksik harfleri yaz.</p>
      <div class="ctest-text"><span>${esc(c.before)} </span>${c.parts.map((part) => part.answer !== undefined ? `${esc(part.prefix)}${esc(part.visible)}<input class="ctest-input ${session.checked ? (normalize(c.answers[part.index]) === normalize(part.answer) ? "correct" : "wrong") : ""}" data-ctest="${part.index}" aria-label="${esc(part.visible)} ile başlayan eksik kelime" value="${esc(c.answers[part.index] || "")}" ${session.checked ? "disabled" : ""}>${esc(part.suffix)} ` : `${esc(part.text)} `).join("")}</div>
      ${session.checked ? `<div class="feedback ${session.ctestScore >= Math.ceil(c.count * .7) ? "good" : "bad"}"><strong>${session.ctestScore}/${c.count} doğru</strong><p>Yanlış kutuların üzerine doğru eksik harfler yazıldı: ${c.parts.filter(p => p.answer !== undefined && normalize(c.answers[p.index]) !== normalize(p.answer)).map(p => `<span class="collocation">${esc(p.visible)}<strong>${esc(p.answer)}</strong></span>`).join(" ") || "Hepsi doğru."}</p><button class="btn btn-purple" data-next-ctest>${session.index < session.passages.length - 1 ? "Yeni metin →" : "Oturumu bitir"}</button></div>` : `<button class="btn btn-purple" data-check-ctest style="margin-top:26px">Metni kontrol et</button>`}
    </section></div>`;
  }

  function closeAvatarDialog() {
    avatarDialogOpen = false;
    render();
    requestAnimationFrame(() => document.querySelector("[data-open-avatar]")?.focus());
  }

  function imageFileToAvatar(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error("read"));
      reader.onload = () => {
        const image = new Image();
        image.onerror = () => reject(new Error("image"));
        image.onload = () => {
          const size = 320;
          const sourceSize = Math.min(image.naturalWidth, image.naturalHeight);
          const sourceX = Math.max(0, (image.naturalWidth - sourceSize) / 2);
          const sourceY = Math.max(0, (image.naturalHeight - sourceSize) / 2);
          const canvas = document.createElement("canvas");
          canvas.width = size;
          canvas.height = size;
          const context = canvas.getContext("2d");
          if (!context || !sourceSize) { reject(new Error("canvas")); return; }
          context.fillStyle = "#f4f2ec";
          context.fillRect(0, 0, size, size);
          context.drawImage(image, sourceX, sourceY, sourceSize, sourceSize, 0, 0, size, size);
          resolve(canvas.toDataURL("image/jpeg", .84));
        };
        image.src = String(reader.result || "");
      };
      reader.readAsDataURL(file);
    });
  }

  async function importLocalAvatar(event) {
    const input = event.currentTarget;
    const file = input.files?.[0];
    if (!file) return;
    const permittedType = /^image\/(?:jpeg|png|webp)$/i.test(file.type || "");
    const permittedName = /\.(?:jpe?g|png|webp)$/i.test(file.name || "");
    if (!permittedType && !permittedName) {
      input.value = "";
      toast("JPG, PNG veya WebP biçiminde bir fotoğraf seç.");
      return;
    }
    if (file.size > AVATAR_MAX_BYTES) {
      input.value = "";
      toast("Fotoğraf 8 MB’tan küçük olmalı.");
      return;
    }
    toast("Fotoğraf bu cihaz için hazırlanıyor…");
    try {
      const compressed = await imageFileToAvatar(file);
      localStorage.setItem(AVATAR_STORAGE_KEY, compressed);
      navigator.storage?.persist?.().catch(() => {});
      localAvatar = compressed;
      avatarDialogOpen = false;
      render();
      toast("Fotoğraf yalnızca bu cihazdaki tarayıcıya kaydedildi.");
    } catch (_) {
      toast("Fotoğraf kaydedilemedi. Tarayıcı depolama iznini kontrol et.");
    } finally {
      input.value = "";
    }
  }

  function bindCommon() {
    document.querySelector("[data-open-avatar]")?.addEventListener("click", () => {
      avatarDialogOpen = true;
      render();
      requestAnimationFrame(() => document.querySelector("[data-select-avatar]")?.focus());
    });
    document.querySelectorAll("[data-close-avatar]").forEach((el) => el.addEventListener("click", closeAvatarDialog));
    document.querySelector("[data-avatar-dialog-backdrop]")?.addEventListener("click", (event) => {
      if (event.target === event.currentTarget) closeAvatarDialog();
    });
    document.querySelector("[data-select-avatar]")?.addEventListener("click", () => document.getElementById("local-avatar-input")?.click());
    document.getElementById("local-avatar-input")?.addEventListener("change", importLocalAvatar);
    document.querySelector("[data-remove-avatar]")?.addEventListener("click", () => {
      try { localStorage.removeItem(AVATAR_STORAGE_KEY); } catch (_) { /* The in-memory copy is still cleared. */ }
      localAvatar = "";
      avatarDialogOpen = false;
      render();
      toast("Cihaza özel fotoğraf kaldırıldı.");
      requestAnimationFrame(() => document.querySelector("[data-open-avatar]")?.focus());
    });
    document.querySelectorAll("[data-view]").forEach((el) => el.addEventListener("click", () => {
      state.view = el.dataset.view;
      session = state.view === "practice" ? session : null;
      drawerWordId = null;
      saveState();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }));
    document.querySelectorAll("[data-start]").forEach((el) => el.addEventListener("click", () => startSession(el.dataset.start)));
    document.querySelectorAll("[data-topic]").forEach((el) => el.addEventListener("click", () => { state.topic = el.dataset.topic; saveState(); render(); }));
    document.getElementById("module-topic")?.addEventListener("change", (e) => { state.topic = e.target.value; saveState(); });
    document.getElementById("daily-target")?.addEventListener("change", (e) => { state.settings.dailyTarget = Math.max(8, Math.min(100, Number(e.target.value) || 30)); if ((state.activity[todayKey()] || 0) >= state.settings.dailyTarget) state.course.completedDays[String(courseDay())] = todayKey(); saveState(); render(); toast(`Günlük hedef ${state.settings.dailyTarget} görev oldu.`); });
    document.getElementById("word-search")?.addEventListener("input", (e) => {
      const pos = e.target.selectionStart;
      state.filters.search = e.target.value; state.filters.page = 1; saveState();
      render();
      const input = document.getElementById("word-search");
      input?.focus(); input?.setSelectionRange(pos, pos);
    });
    document.getElementById("word-topic")?.addEventListener("change", (e) => { state.filters.topic = e.target.value; state.filters.page = 1; saveState(); render(); });
    document.getElementById("word-level")?.addEventListener("change", (e) => { state.filters.level = e.target.value; state.filters.page = 1; saveState(); render(); });
    document.querySelectorAll("[data-page]").forEach((el) => el.addEventListener("click", () => { state.filters.page = Number(el.dataset.page) || 1; saveState(); render(); window.scrollTo({ top: 0, behavior: "smooth" }); }));
    document.querySelectorAll("[data-word]").forEach((el) => el.addEventListener("click", () => { drawerWordId = el.dataset.word; render(); requestAnimationFrame(() => document.querySelector(".drawer [data-close-drawer]")?.focus()); }));
    document.querySelectorAll("[data-close-drawer]").forEach((el) => el.addEventListener("click", (e) => { if (e.target === el || el.matches("button")) { drawerWordId = null; render(); } }));
    document.querySelectorAll("[data-speak]").forEach((el) => el.addEventListener("click", () => speak(el.dataset.speak)));
    document.querySelector("[data-practice-word]")?.addEventListener("click", (e) => startSession("mixed", e.currentTarget.dataset.practiceWord));
    document.getElementById("timer-setting")?.addEventListener("change", (e) => { state.settings.timerEnabled = e.target.checked; saveState(); toast(e.target.checked ? "Zaman çubuğu açıldı." : "Zaman çubuğu kapatıldı."); });
    document.getElementById("export-progress")?.addEventListener("click", exportProgress);
    document.getElementById("import-progress")?.addEventListener("change", importProgress);
    document.getElementById("reset-progress")?.addEventListener("click", resetProgress);
    document.onkeydown = globalKeydown;
  }

  function bindPractice() {
    document.querySelector("[data-exit-practice]")?.addEventListener("click", () => {
      if (confirm("Bu oturumdan çıkılsın mı? Tamamladığın kartlar kaydedildi.")) { session = null; state.view = "modules"; render(); }
    });
    document.querySelectorAll("[data-choice]").forEach((el) => el.addEventListener("click", () => {
      const task = session.tasks[session.index];
      const item = DATA.find((x) => x.id === task.itemId);
      const expected = task.skill === "recognize" ? item.tr : item.lemma;
      finishAttempt(task, item, normalize(el.dataset.choice) === normalize(expected), expected, { chosen: el.dataset.choice });
    }));
    document.querySelector("[data-answer-form]")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const task = session.tasks[session.index];
      const item = DATA.find((x) => x.id === task.itemId);
      const input = e.currentTarget.querySelector("input");
      const expectedList = task.skill === "family" ? splitAnswers(task.expected) : [normalize(item.lemma)];
      const correct = expectedList.includes(normalize(input.value));
      finishAttempt(task, item, correct, task.skill === "family" ? task.expected : item.lemma);
    });
    document.querySelector("[data-hint]")?.addEventListener("click", () => { const task = session.tasks[session.index]; task.hinted = true; render(); });
    document.querySelector("[data-show-answer]")?.addEventListener("click", () => {
      const task = session.tasks[session.index]; const item = DATA.find((x) => x.id === task.itemId);
      const answer = task.skill === "family" || task.skill === "collocation" ? task.expected : item.lemma;
      task.hinted = true; finishAttempt(task, item, false, answer);
    });
    document.querySelectorAll("[data-token]").forEach((el) => el.addEventListener("click", () => {
      const task = session.tasks[session.index]; const id = el.dataset.token; const index = task.selected.indexOf(id);
      if (index >= 0) task.selected.splice(index, 1); else task.selected.push(id); render();
    }));
    document.querySelector("[data-clear-tokens]")?.addEventListener("click", () => { session.tasks[session.index].selected = []; render(); });
    document.querySelector("[data-check-collocation]")?.addEventListener("click", () => {
      const task = session.tasks[session.index]; const item = DATA.find((x) => x.id === task.itemId);
      const answer = task.selected.map((id) => task.tokens.find((t) => t.id === id)?.text).join(" ");
      finishAttempt(task, item, normalize(answer) === normalize(task.expected), task.expected);
    });
    document.querySelector("[data-sentence-form]")?.addEventListener("submit", (e) => {
      e.preventDefault(); const task = session.tasks[session.index]; const item = DATA.find((x) => x.id === task.itemId); const sentence = e.currentTarget.querySelector("textarea").value.trim();
      task.sentence = sentence;
      task.objective = {
        target: normalize(sentence).includes(normalize(sentenceTarget(item, task))),
        length: sentence.split(/\s+/).filter(Boolean).length >= 8,
        form: /^[A-Z]/.test(sentence) && /[.!?]$/.test(sentence)
      };
      task.self = {}; task.phase = "self"; render();
    });
    document.querySelectorAll("[data-self]").forEach((el) => el.addEventListener("change", () => { session.tasks[session.index].self[el.dataset.self] = el.checked; }));
    document.querySelectorAll("[data-finish-sentence]").forEach((button) => button.addEventListener("click", () => {
      const task = session.tasks[session.index]; const item = DATA.find((x) => x.id === task.itemId);
      document.querySelectorAll("[data-self]").forEach((el) => { task.self[el.dataset.self] = el.checked; });
      const objectiveOk = Object.values(task.objective).every(Boolean); const selfOk = ["meaning","context","grammar","natural"].every(k => task.self[k]);
      const userPassed = button.dataset.finishSentence === "pass";
      finishAttempt(task, item, userPassed && objectiveOk && selfOk, sentenceTarget(item, task));
    }));
    document.querySelector("[data-next]")?.addEventListener("click", nextTask);
    document.querySelectorAll("[data-ctest]").forEach((el) => el.addEventListener("input", () => { session.ctest.answers[el.dataset.ctest] = el.value; }));
    document.querySelector("[data-check-ctest]")?.addEventListener("click", () => {
      document.querySelectorAll("[data-ctest]").forEach((el) => { session.ctest.answers[el.dataset.ctest] = el.value; });
      session.ctestScore = session.ctest.parts.filter((p) => p.answer !== undefined && normalize(session.ctest.answers[p.index]) === normalize(p.answer)).length;
      session.score += session.ctestScore; session.total += session.ctest.count; session.checked = true;
      const passage = session.passages[session.index]; const key = passage._progressKey || passageKey(passage, session.index);
      const prior = state.passageProgress[key] || { attempts: 0, best: 0 };
      const pct = session.ctest.count ? Math.round(session.ctestScore / session.ctest.count * 100) : 0;
      state.passageProgress[key] = { attempts: prior.attempts + 1, best: Math.max(prior.best || 0, pct), lastSeen: new Date().toISOString() };
      state.activity[todayKey()] = (state.activity[todayKey()] || 0) + session.ctest.count;
      if (state.activity[todayKey()] >= state.settings.dailyTarget) state.course.completedDays[String(courseDay())] = todayKey();
      saveState(); render();
    });
    document.querySelector("[data-next-ctest]")?.addEventListener("click", () => {
      if (session.index >= session.passages.length - 1) { session.done = true; state.sessions.unshift({ date: new Date().toISOString(), correct: session.score, total: session.total, mode: "complete" }); saveState(); }
      else { session.index += 1; prepareCtest(); }
      render();
    });
  }

  function globalKeydown(e) {
    if (avatarDialogOpen) {
      if (e.key === "Escape") { e.preventDefault(); closeAvatarDialog(); return; }
      if (e.key === "Tab") {
        const focusable = [...document.querySelectorAll(".avatar-dialog button:not([disabled]), .avatar-dialog input:not([disabled])")].filter((el) => !el.hidden);
        if (focusable.length) {
          const first = focusable[0]; const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }
      return;
    }
    if (e.key === "/" && state.view === "words" && document.activeElement?.tagName !== "INPUT") { e.preventDefault(); document.getElementById("word-search")?.focus(); }
    if (e.key === "Escape" && drawerWordId) { drawerWordId = null; render(); return; }
    if (state.view !== "practice" || !session || session.mode === "complete" || session.done) return;
    const task = session.tasks[session.index];
    if (["1","2","3","4"].includes(e.key) && task.phase === "question") document.querySelectorAll("[data-choice]")[Number(e.key) - 1]?.click();
    if (e.key.toLowerCase() === "h" && task.phase === "question" && !["INPUT","TEXTAREA"].includes(document.activeElement?.tagName)) document.querySelector("[data-hint]")?.click();
    if (e.key.toLowerCase() === "s" && task.phase === "question" && !["INPUT","TEXTAREA"].includes(document.activeElement?.tagName)) document.querySelector("[data-show-answer]")?.click();
    if (e.key === "Enter" && task.phase === "answered") document.querySelector("[data-next]")?.click();
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) { toast("Bu tarayıcı sesli okuma özelliğini desteklemiyor."); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text); u.lang = "en-US"; u.rate = .86; speechSynthesis.speak(u);
  }

  function exportProgress() {
    const blob = new Blob([JSON.stringify({ version: SCHEMA_VERSION, exportedAt: new Date().toISOString(), state }, null, 2)], { type: "application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `devri-figan-yedek-${todayKey()}.json`; a.click(); URL.revokeObjectURL(a.href); toast("İlerleme yedeği indirildi.");
  }

  function importProgress(e) {
    const file = e.target.files?.[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try { const parsed = JSON.parse(reader.result); if (!parsed.state?.profiles) throw new Error(); state = migrateState(parsed.state); saveState(); toast("Yedek yüklendi ve güncel biçime uyarlandı."); render(); }
      catch (_) { toast("Bu dosya geçerli bir Devri Figan yedeği değil."); }
    };
    reader.readAsText(file);
  }

  function resetProgress() {
    if (!confirm("Bütün ilerleme silinecek. Önce yedek indirmek ister misin? Bu işlem geri alınamaz.")) return;
    const keepSettings = state.settings; state = defaultState(); state.settings = keepSettings; saveState(); render(); toast("İlerleme sıfırlandı.");
  }

  function toast(message) {
    document.querySelector(".toast")?.remove(); clearTimeout(toastId);
    const el = document.createElement("div"); el.className = "toast"; el.setAttribute("role", "status"); el.textContent = message; document.body.appendChild(el);
    toastId = setTimeout(() => el.remove(), 3200);
  }

  render();
})();
