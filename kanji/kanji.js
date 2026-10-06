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

kaeru: {
  id: "kaeru",
  audio: "audio/kaeru.wav",
  kanji: "帰る",
  kanjiBase: "帰",
  okurigana: "る",
  furigana: "かえ",
  romaji: "kaeru",
  kun: "かえる",
  on: "キ",
  meaning: "to return; to go back; to come home",
  answer: "帰る"
},

kaeru2: {
  id: "kaeru2",
  audio: "audio/kaeru.wav",
  kanji: "変える",
  kanjiBase: "変え",
  okurigana: "る",
  furigana: "かえ",
  romaji: "kaeru",
  kun: "かえる",
  on: "ヘン",
  meaning: "to change; to alter; to modify",
  answer: "変える"
},

hikaru: {
  id: "hikaru",
  audio: "audio/hikaru.wav",
  kanji: "光る",
  kanjiBase: "光",
  okurigana: "る",
  furigana: "ひか",
  romaji: "hikaru",
  kun: "ひかる",
  on: "コウ",
  meaning: "to shine; to glitter; to glow",
  answer: "光る"
},

manabu: {
  id: "manabu",
  audio: "audio/manabu.wav",
  kanji: "学ぶ",
  kanjiBase: "学",
  okurigana: "ぶ",
  furigana: "まな",
  romaji: "manabu",
  kun: "まなぶ",
  on: "ガク",
  meaning: "to learn; to study; to take lessons",
  answer: "学ぶ"
},

iru: {
  id: "iru",
  audio: "audio/iru.wav",
  kanji: "いる",
  kanjiBase: "い",
  okurigana: "る",
  furigana: "い",
  romaji: "iru",
  kun: "いる",
  on: "",
  meaning: "to exist; to be (living things)",
  answer: "いる"
},

hirogaru: {
  id: "hirogaru",
  audio: "audio/hirogaru.wav",
  kanji: "広がる",
  kanjiBase: "広が",
  okurigana: "る",
  furigana: "ひろ",
  romaji: "hirogaru",
  kun: "ひろがる",
  on: "コウ",
  meaning: "to spread; to expand; to widen; to extend",
  answer: "広がる"
},

nemuru: {
  id: "nemuru",
  audio: "audio/nemuru.wav",
  kanji: "眠る",
  kanjiBase: "眠",
  okurigana: "る",
  furigana: "ねむ",
  romaji: "nemuru",
  kun: "ねむる",
  on: "ミン",
  meaning: "to sleep; to slumber; to rest",
  answer: "眠る"
},

hashiru: {
  id: "hashiru",
  audio: "audio/hashiru.wav",
  kanji: "走る",
  kanjiBase: "走",
  okurigana: "る",
  furigana: "はし",
  romaji: "hashiru",
  kun: "はしる",
  on: "ソウ",
  meaning: "to run",
  answer: "走る"
},

iku: {
  id: "iku",
  audio: "audio/iku.wav",
  kanji: "行く",
  kanjiBase: "行",
  okurigana: "く",
  furigana: "い",
  romaji: "iku",
  kun: "いく",
  on: "コウ",
  meaning: "to go",
  answer: "行く"
},

kiru: {
  id: "kiru",
  audio: "audio/kiru.wav",
  kanji: "切る",
  kanjiBase: "切",
  okurigana: "る",
  furigana: "き",
  romaji: "kiru",
  kun: "きる",
  on: "セツ",
  meaning: "to cut; to slice",
  answer: "切る"
},

kiru2: {
  id: "kiru2",
  audio: "audio/kiru.wav",
  kanji: "着る",
  kanjiBase: "着",
  okurigana: "る",
  furigana: "き",
  romaji: "kiru",
  kun: "きる",
  on: "チャク",
  meaning: "to wear; to put on (upper-body clothing)",
  answer: "着る"
},

tsuku: {
  id: "tsuku",
  audio: "audio/tsuku.wav",
  kanji: "付く",
  kanjiBase: "付",
  okurigana: "く",
  furigana: "つ",
  romaji: "tsuku",
  kun: "つく",
  on: "フ",
  meaning: "to stick; to be attached; to be added; to be included",
  answer: "付く"
},

tsuku2: {
  id: "tsuku2",
  audio: "audio/tsuku.wav",
  kanji: "就く",
  kanjiBase: "就",
  okurigana: "く",
  furigana: "つ",
  romaji: "tsuku",
  kun: "つく",
  on: "シュウ",
  meaning: "to take a position; to assume a role; to start (a job); to engage in",
  answer: "就く"
},

tsuku3: {
  id: "tsuku3",
  audio: "audio/tsuku.wav",
  kanji: "着く",
  kanjiBase: "着",
  okurigana: "く",
  furigana: "つ",
  romaji: "tsuku",
  kun: "つく",
  on: "チャク",
  meaning: "to arrive; to reach; to get to (a place)",
  answer: "着く"
},

sagaru: {
  id: "sagaru",
  audio: "audio/sagaru.wav",
  kanji: "下がる",
  kanjiBase: "下が",
  okurigana: "る",
  furigana: "さが",
  romaji: "sagaru",
  kun: "さがる",
  on: "カ",
  meaning: "to go down; to drop; to fall; to hang down; to step back",
  answer: "下がる"
},

orosu: {
  id: "orosu",
  audio: "audio/orosu.wav",
  kanji: "下ろす",
  kanjiBase: "下ろ",
  okurigana: "す",
  furigana: "おろ",
  romaji: "orosu",
  kun: "おろす",
  on: "ゲ",
  meaning: "to lower; to bring down; to take down; to withdraw; to unload",
  answer: "下ろす"
},

naru: {
  id: "naru",
  audio: "audio/naru.wav",
  kanji: "なる",
  kanjiBase: "な",
  okurigana: "る",
  furigana: "な",
  romaji: "naru",
  kun: "なる",
  on: "",
  meaning: "to become; to turn into; to reach (a state)",
  answer: "なる"
},

naru2: {
  id: "naru2",
  audio: "audio/naru.wav",
  kanji: "鳴る",
  kanjiBase: "鳴",
  okurigana: "る",
  furigana: "な",
  romaji: "naru",
  kun: "なる",
  on: "メイ",
  meaning: "to ring; to sound; to make a noise",
  answer: "鳴る"
},

noboru: {
  id: "noboru",
  audio: "audio/noboru.wav",
  kanji: "登る",
  kanjiBase: "登",
  okurigana: "る",
  furigana: "のぼ",
  romaji: "noboru",
  kun: "のぼる",
  on: "ト",
  meaning: "to climb; to go up; to ascend; to rise",
  answer: "登る"
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
  KANJI.mcqLocked = false;

  const item = KANJI.currentItem;
  const mcqBox = document.getElementById("kanjiMcqContainer");
  mcqBox.innerHTML = "";

  // --- REPLAY BUTTON EMBEDDED ---
  const replayBtn = document.createElement("button");
  replayBtn.className = "kanji-replay-btn";
  replayBtn.textContent = "🔊 Replay";
  replayBtn.style.cssText = `
    font-size: 20px;
    padding: 10px 18px;
    margin-bottom: 18px;
    border-radius: 8px;
    background: #444;
    color: white;
    border: none;
    cursor: pointer;
  `;
  replayBtn.onclick = () => {
    if (!KANJI.mcqLocked) {
      KANJI.playAudio(item.audio);
    }
  };
  mcqBox.appendChild(replayBtn);
  // --------------------------------

  const options = KANJI.buildChoices(item);

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

  // ⭐ ENLARGE THE KANJI CHARACTER
  const kanjiBox = document.getElementById("kanjiSummaryKanji");
  kanjiBox.textContent = item.kanji;
  kanjiBox.style.fontSize = "96px";       // ← BIG, readable, DS-style
  kanjiBox.style.fontWeight = "bold";
  kanjiBox.style.marginBottom = "20px";
  kanjiBox.style.textAlign = "center";

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
