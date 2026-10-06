/* ==========================================================
   GLOBAL OBJECT
   ========================================================== */

const KANJI = {
  dataset: [],
  currentItem: null,
  mcqLocked: false,
  activeScreen: null,

  audio: {
    current: null,
    cancelToken: { cancel: false },
    generation: 0
  }
};

/* ==========================================================
   INTERNAL DATASET STORAGE
   ========================================================== */

KANJI.allKanji = {
  aru: {
    id: "aru",
    audio: "audio/aru.wav",
    kanji: "有る",
    kanjiBase: "有",
    okurigana: "る",
    furigana: "あ",
    romaji: "aru",
    kun: "ある",
    on: "ユウ",
    meaning: "to exist; to have",
    answer: "有る"
  },

  aruku: {
    id: "aruku",
    audio: "audio/aruku.wav",
    kanji: "歩く",
    kanjiBase: "歩",
    okurigana: "く",
    furigana: "ある",
    romaji: "aruku",
    kun: "あるく",
    on: "ホ",
    meaning: "to walk",
    answer: "歩く"
  },

  miru: {
    id: "miru",
    audio: "audio/miru.wav",
    kanji: "見る",
    kanjiBase: "見",
    okurigana: "る",
    furigana: "み",
    romaji: "miru",
    kun: "みる",
    on: "ケン",
    meaning: "to see",
    answer: "見る"
  },

  taberu: {
  id: "taberu",
  audio: "audio/taberu.wav",
  kanji: "食べる",
  kanjiBase: "食べ",
  okurigana: "る",
  furigana: "た",
  romaji: "taberu",
  kun: "たべる",
  on: "ショク",
  meaning: "to eat",
  answer: "食べる"
},



nomu: {
  id: "nomu",
  audio: "audio/nomu.wav",
  kanji: "飲む",
  kanjiBase: "飲",
  okurigana: "む",
  furigana: "の",
  romaji: "nomu",
  kun: "のむ",
  on: "イン",
  meaning: "to drink",
  answer: "飲む"
},


tsukeru: {
  id: "tsukeru",
  audio: "audio/tsukeru.wav",
  kanji: "付ける",
  kanjiBase: "付け",
  okurigana: "る",
  furigana: "つ",
  romaji: "tsukeru",
  kun: "つける",
  on: "フ",
  meaning: "to attach; to apply; to turn on",
  answer: "付ける"
},


kesu: {
  id: "kesu",
  audio: "audio/kesu.wav",
  kanji: "消す",
  kanjiBase: "消",
  okurigana: "す",
  furigana: "け",
  romaji: "kesu",
  kun: "けす",
  on: "ショウ",
  meaning: "to erase; to turn off; to extinguish",
  answer: "消す"
},

ireru: {
  id: "ireru",
  audio: "audio/ireru.wav",
  kanji: "入れる",
  kanjiBase: "入れ",
  okurigana: "る",
  furigana: "い",
  romaji: "ireru",
  kun: "いれる",
  on: "ニュウ",
  meaning: "to put in; to insert; to add",
  answer: "入れる"
},

neru: {
  id: "neru",
  audio: "audio/neru.wav",
  kanji: "寝る",
  kanjiBase: "寝",
  okurigana: "る",
  furigana: "ね",
  romaji: "neru",
  kun: "ねる",
  on: "シン",
  meaning: "to sleep; to lie down",
  answer: "寝る"
},

hairu: {
  id: "hairu",
  audio: "audio/hairu.wav",
  kanji: "入る",
  kanjiBase: "入",
  okurigana: "る",
  furigana: "はい",
  romaji: "hairu",
  kun: "はいる",
  on: "ニュウ",
  meaning: "to enter; to go in",
  answer: "入る"
},

oku: {
  id: "oku",
  audio: "audio/oku.wav",
  kanji: "置く",
  kanjiBase: "置",
  okurigana: "く",
  furigana: "お",
  romaji: "oku",
  kun: "おく",
  on: "チ",
  meaning: "to place; to put; to set down",
  answer: "置く"
},

ochiru: {
  id: "ochiru",
  audio: "audio/ochiru.wav",
  kanji: "落ちる",
  kanjiBase: "落ち",
  okurigana: "る",
  furigana: "お",
  romaji: "ochiru",
  kun: "おちる",
  on: "ラク",
  meaning: "to fall; to drop; to come off",
  answer: "落ちる"
},

okuru: {
  id: "okuru",
  audio: "audio/okuru.wav",
  kanji: "送る",
  kanjiBase: "送",
  okurigana: "る",
  furigana: "おく",
  romaji: "okuru",
  kun: "おくる",
  on: "ソウ",
  meaning: "to send; to dispatch; to escort",
  answer: "送る"
},

tsukuru: {
  id: "tsukuru",
  audio: "audio/tsukuru.wav",
  kanji: "作る",
  kanjiBase: "作",
  okurigana: "る",
  furigana: "つく",
  romaji: "tsukuru",
  kun: "つくる",
  on: "サク",
  meaning: "to make; to create; to build",
  answer: "作る"
},












};

/* ==========================================================
   LOAD SINGLE KANJI
   ========================================================== */

KANJI.loadSingle = function (id) {
  const item = KANJI.allKanji[id];
  if (!item) {
    console.error("Unknown kanji id:", id);
    return null;
  }
  KANJI.dataset = [item];
  return item;
};

/* ==========================================================
   LOAD ALL KANJI (RANDOM MODE)
   ========================================================== */

KANJI.loadAll = function () {
  KANJI.dataset = Object.values(KANJI.allKanji);
};

/* ==========================================================
   RANDOM PICK
   ========================================================== */

KANJI.pickRandom = function () {
  const item = KANJI.dataset[Math.floor(Math.random() * KANJI.dataset.length)];
  KANJI.currentItem = item;
  return item;
};

/* ==========================================================
   START
   ========================================================== */

KANJI.start = function (id) {

  if (id === "random") {
    KANJI.loadAll();     // load ALL verbs
  } else {
    KANJI.loadSingle(id); // load ONE verb
  }

  KANJI.startRound();
};

/* ==========================================================
   START ROUND
   ========================================================== */

KANJI.startRound = function () {
  KANJI.mcqLocked = false;
  KANJI.screen1();
};

/* ==========================================================
   AUDIO CONTROL
   ========================================================== */

KANJI.playAudio = function (file) {
  const audio = new Audio(file);
  audio.play().catch(() => {});
};

/* ==========================================================
   SCREEN SWITCHER
   ========================================================== */

KANJI.show = function (id) {
  document.querySelectorAll(".kanji-screen").forEach(el => el.classList.remove("active"));
  document.getElementById(id).classList.add("active");
};

/* ==========================================================
   SCREEN 1 — AUDIO ONLY
   ========================================================== */

KANJI.screen1 = function () {
  KANJI.show("kanjiScreen1");

  const item = KANJI.pickRandom();
  KANJI.playAudio(item.audio);

  document.getElementById("kanjiReplayBtn").onclick = () => KANJI.playAudio(item.audio);
  document.getElementById("kanjiNextBtn").onclick = () => KANJI.screen2();
};

/* ==========================================================
   DECOY POOL
   ========================================================== */

const kanjiPool = [
  { kanjiBase: "行", okurigana: "く" },
  { kanjiBase: "見", okurigana: "る" },
  { kanjiBase: "食べ", okurigana: "る" },
  { kanjiBase: "歩", okurigana: "く" },
  { kanjiBase: "入", okurigana: "る" },
  { kanjiBase: "出", okurigana: "る" },

  // New additions
  { kanjiBase: "飲", okurigana: "む" },
  { kanjiBase: "付け", okurigana: "る" },
  { kanjiBase: "消", okurigana: "す" },
  { kanjiBase: "入れ", okurigana: "る" },
  { kanjiBase: "寝", okurigana: "る" },
  { kanjiBase: "入", okurigana: "る" }, // hairu
  { kanjiBase: "置", okurigana: "く" },
  { kanjiBase: "落ち", okurigana: "る" },
  { kanjiBase: "送", okurigana: "る" },

  // More N5/N4 verbs
  { kanjiBase: "書", okurigana: "く" },
  { kanjiBase: "読", okurigana: "む" },
  { kanjiBase: "作", okurigana: "る" },
  { kanjiBase: "笑", okurigana: "う" },
  { kanjiBase: "買", okurigana: "う" },
  { kanjiBase: "売", okurigana: "る" },
  { kanjiBase: "使", okurigana: "う" },
  { kanjiBase: "待", okurigana: "つ" },
  { kanjiBase: "立", okurigana: "つ" },
  { kanjiBase: "座", okurigana: "る" },
  { kanjiBase: "開", okurigana: "ける" },
  { kanjiBase: "閉", okurigana: "める" },
  { kanjiBase: "帰", okurigana: "る" },
  { kanjiBase: "走", okurigana: "る" },
  { kanjiBase: "泳", okurigana: "ぐ" }
];


/* ==========================================================
   BUILD MCQ CHOICES
   ========================================================== */

KANJI.buildChoices = function (item) {
  const decoys = [...kanjiPool].sort(() => Math.random() - 0.5).slice(0, 3);

  const correct = {
    kanjiBase: item.kanjiBase,
    okurigana: item.okurigana
  };

  const choices = [correct, ...decoys];

  // Shuffle
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }

  return choices;
};

/* ==========================================================
   SCREEN 2 — KANJI + OKURIGANA ONLY
   ========================================================== */

KANJI.screen2 = function () {
  KANJI.show("kanjiScreen2");

  const mcqBox = document.getElementById("kanjiMcqContainer");
  mcqBox.innerHTML = "";

  const options = KANJI.buildChoices(KANJI.currentItem);

  options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "mcq-option";

    div.innerHTML = `
      <span style="font-size: 32px;">${opt.kanjiBase}</span>
      <span style="font-size: 22px; color:#bbbbbb; margin-left: 12px;">
        ${opt.okurigana}
      </span>
    `;

    div.onclick = () => KANJI.handleMCQ(opt.kanjiBase + opt.okurigana);
    mcqBox.appendChild(div);
  });
};

/* ==========================================================
   HANDLE MCQ
   ========================================================== */

KANJI.handleMCQ = function (choiceKanji) {
  const correct = KANJI.currentItem.answer;
  const buttons = document.querySelectorAll(".mcq-option");

  buttons.forEach(btn => {
    btn.style.pointerEvents = "none";
    const isCorrect = btn.textContent.includes(correct);
    btn.style.background = isCorrect ? "#1e5128" : "#512828";
  });

  setTimeout(() => KANJI.screen3(), 900);
};

/* ==========================================================
   SCREEN 3 — SUMMARY + NEXT BUTTON
   ========================================================== */

KANJI.screen3 = function () {
  KANJI.show("kanjiScreen3");

  const item = KANJI.currentItem;

  document.getElementById("kanjiSummaryKanji").textContent = item.kanji;
  document.getElementById("kanjiSummaryFurigana").textContent = item.furigana;
  document.getElementById("kanjiSummaryRomaji").textContent = item.romaji;
  document.getElementById("kanjiSummaryKun").textContent = "Kun: " + item.kun;
  document.getElementById("kanjiSummaryOn").textContent = "On: " + item.on;
  document.getElementById("kanjiSummaryMeaning").textContent = "Meaning: " + item.meaning;

  // Remove old button
  const oldBtn = document.getElementById("kanjiNextRoundBtn");
  if (oldBtn) oldBtn.remove();

  // Create Next button
  const nextBtn = document.createElement("button");
  nextBtn.id = "kanjiNextRoundBtn";
  nextBtn.textContent = "Next";
  nextBtn.style.marginTop = "20px";
  nextBtn.style.padding = "14px 28px";
  nextBtn.style.fontSize = "18px";
  nextBtn.style.borderRadius = "8px";
  nextBtn.style.border = "none";
  nextBtn.style.cursor = "pointer";
  nextBtn.style.background = "#7fd1ff";
  nextBtn.style.color = "#000";

  nextBtn.onclick = () => {
    KANJI.startRound();
  };

  document.getElementById("kanjiScreen3").appendChild(nextBtn);
};
