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
  { kanjiBase: "出", okurigana: "る" }
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
