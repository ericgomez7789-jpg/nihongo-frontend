/* ==========================================================
   KANJI — DATASET (Basic Verbs)
   ========================================================== */

const kanjiBasic = [
  {
    id: "miru",
    audio: "audio/miru.wav",

    kanji: "見る",
    furigana: "みる",
    romaji: "miru",

    kun: "みる",
    on: "けん",

    meaning: "to see; to look",

    answer: "見る"
  },











{
  id: "aruku",
  audio: "audio/aruku.wav",

  kanji: "歩く",
  furigana: "あるく",
  romaji: "aruku",

  kun: "あるく",
  on: "ホ",

  meaning: "to walk",

  answer: "歩く"
},











{
  id: "aru",
  audio: "audio/aru.wav",

  kanji: "有る",
  furigana: "ある",
  romaji: "aru",

  kun: "ある",
  on: "ユウ",

  meaning: "to exist; to have",

  answer: "有る"
},










{
  id: "asobu",
  audio: "audio/asobu.wav",

  kanji: "遊ぶ",
  furigana: "あそぶ",
  romaji: "asobu",

  kun: "あそぶ",
  on: "ユウ",

  meaning: "to play; to hang out",

  answer: "遊ぶ"
},










{
  id: "ateru",
  audio: "audio/ateru.wav",

  kanji: "当てる",
  furigana: "あてる",
  romaji: "ateru",

  kun: "あてる",
  on: "トウ",

  meaning: "to hit; to guess; to apply; to touch; to place",

  answer: "当てる"
},











{
  id: "au",
  audio: "audio/au.wav",

  kanji: "会う",
  furigana: "あう",
  romaji: "au",

  kun: "あう",
  on: "カイ",

  meaning: "to meet; to see someone",

  answer: "会う"
},










{
  id: "awateru",
  audio: "audio/awateru.wav",

  kanji: "慌てる",
  furigana: "あわてる",
  romaji: "awateru",

  kun: "あわてる",
  on: "コウ",

  meaning: "to panic; to become flustered; to become confused; to rush; to hurry",

  answer: "慌てる"
},









{
  id: "ayamaru",
  audio: "audio/ayamaru.wav",

  kanji: "謝る",
  furigana: "あやまる",
  romaji: "ayamaru",

  kun: "あやまる",
  on: "シャ",

  meaning: "to apologize",

  answer: "謝る"
},











{
  id: "chigiru",
  audio: "audio/chigiru.wav",

  kanji: "千切る",
  furigana: "ちぎる",
  romaji: "chigiru",

  kun: "ちぎる",
  on: "セン",

  meaning: "to tear to pieces; to tear up; to pluck; to tear off; to do vigorously",

  answer: "千切る"
},











{
  id: "chiru",
  audio: "audio/chiru.wav",

  kanji: "散る",
  furigana: "ちる",
  romaji: "chiru",

  kun: "ちる",
  on: "サン",

  meaning: "to scatter; to fall (flowers, leaves, petals); to disperse; to break up; to fade",

  answer: "散る"
},








];

/* ==========================================================
   GLOBAL DECOY POOL (used for MCQ generation)
   ========================================================== */

const kanjiDecoys = [
  { kanji: "食べる", furigana: "たべる", romaji: "taberu" },
  { kanji: "行く", furigana: "いく", romaji: "iku" },
  { kanji: "書く", furigana: "かく", romaji: "kaku" },
  { kanji: "読む", furigana: "よむ", romaji: "yomu" },
  { kanji: "出る", furigana: "でる", romaji: "deru" },
  { kanji: "入る", furigana: "はいる", romaji: "hairu" },
  { kanji: "飲む", furigana: "のむ", romaji: "nomu" },
  { kanji: "買う", furigana: "かう", romaji: "kau" },
  { kanji: "売る", furigana: "うる", romaji: "uru" },
  { kanji: "立つ", furigana: "たつ", romaji: "tatsu" },
  { kanji: "座る", furigana: "すわる", romaji: "suwaru" },
  { kanji: "歩く", furigana: "あるく", romaji: "aruku" },
  { kanji: "走る", furigana: "はしる", romaji: "hashiru" },
  { kanji: "泳ぐ", furigana: "およぐ", romaji: "oyogu" },
  { kanji: "開ける", furigana: "あける", romaji: "akeru" },
  { kanji: "閉める", furigana: "しめる", romaji: "shimeru" },
  { kanji: "使う", furigana: "つかう", romaji: "tsukau" },
  { kanji: "作る", furigana: "つくる", romaji: "tsukuru" },
  { kanji: "始める", furigana: "はじめる", romaji: "hajimeru" },
  { kanji: "終わる", furigana: "おわる", romaji: "owaru" },
  { kanji: "見る", furigana: "みる", romaji: "miru" },
  { kanji: "聞く", furigana: "きく", romaji: "kiku" },
  { kanji: "話す", furigana: "はなす", romaji: "hanasu" },
  { kanji: "待つ", furigana: "まつ", romaji: "matsu" },
  { kanji: "呼ぶ", furigana: "よぶ", romaji: "yobu" },
  { kanji: "乗る", furigana: "のる", romaji: "noru" },
  { kanji: "降りる", furigana: "おりる", romaji: "oriru" },
  { kanji: "返す", furigana: "かえす", romaji: "kaesu" },
  { kanji: "借りる", furigana: "かりる", romaji: "kariru" },
  { kanji: "貸す", furigana: "かす", romaji: "kasu" },
  { kanji: "教える", furigana: "おしえる", romaji: "oshieru" },
  { kanji: "習う", furigana: "ならう", romaji: "narau" },
  { kanji: "分かる", furigana: "わかる", romaji: "wakaru" },
  { kanji: "考える", furigana: "かんがえる", romaji: "kangaeru" },
  { kanji: "決める", furigana: "きめる", romaji: "kimeru" },
  { kanji: "選ぶ", furigana: "えらぶ", romaji: "erabu" },
  { kanji: "送る", furigana: "おくる", romaji: "okuru" },
  { kanji: "止まる", furigana: "とまる", romaji: "tomaru" },
  { kanji: "始まる", furigana: "はじまる", romaji: "hajimaru" },
  { kanji: "笑う", furigana: "わらう", romaji: "warau" },
  { kanji: "泣く", furigana: "なく", romaji: "naku" },
  { kanji: "歌う", furigana: "うたう", romaji: "utau" },
  { kanji: "遊ぶ", furigana: "あそぶ", romaji: "asobu" },
  { kanji: "洗う", furigana: "あらう", romaji: "arau" },
  { kanji: "切る", furigana: "きる", romaji: "kiru" },
  { kanji: "着る", furigana: "きる", romaji: "kiru" },
  { kanji: "持つ", furigana: "もつ", romaji: "motsu" },
  { kanji: "探す", furigana: "さがす", romaji: "sagasu" },
  { kanji: "見つける", furigana: "みつける", romaji: "mitsukeru" }
];


/* ==========================================================
   KANJI — CORE ENGINE
   ========================================================== */

const KANJI = {
  round: 0,
  TOTAL_ROUNDS: 3,
  mcqLocked: false,
  activeScreen: null,

  dataset: kanjiBasic,
  currentItem: null,

  audio: {
    cancelToken: { cancel: false },
    generation: 0,
    current: null
  }
};

/* ==========================================================
   AUDIO CONTROL
   ========================================================== */

KANJI.stopAllAudio = function () {
  KANJI.audio.cancelToken.cancel = true;
  KANJI.audio.generation++;

  if (KANJI.audio.current) {
    try {
      KANJI.audio.current.pause();
      KANJI.audio.current.currentTime = 0;
    } catch (e) {}
  }
};

KANJI.generationGuards = function () {
  KANJI.audio.cancelToken.cancel = false;
  KANJI.audio.generation++;
  KANJI.audio.current = null;
};

KANJI.playAudio = function (file) {
  if (!file) return;

  KANJI.stopAllAudio();
  KANJI.generationGuards();

  const audio = KANJI.audio.current || new Audio();
  KANJI.audio.current = audio;
  audio.src = file;

  audio.play().catch(() => {});
};

/* ==========================================================
   SCREEN SWITCHER
   ========================================================== */

KANJI.show = function (id) {
  document.querySelectorAll(".kanji-screen")
    .forEach(el => el.classList.remove("show"));

  document.getElementById(id)?.classList.add("show");
  KANJI.activeScreen = id;
};

/* ==========================================================
   RANDOM PICK
   ========================================================== */

KANJI.pickRandom = function () {
  const arr = KANJI.dataset;
  const item = arr[Math.floor(Math.random() * arr.length)];
  KANJI.currentItem = item;
  return item;
};

/* ==========================================================
   START + ROUND
   ========================================================== */

KANJI.start = function () {
  KANJI.round = 0;
  KANJI.mcqLocked = false;
  KANJI.currentItem = null;

  KANJI.stopAllAudio();
  KANJI.audio.cancelToken.cancel = false;
  KANJI.audio.generation++;

  KANJI.startRound();
};

KANJI.startRound = function () {
  KANJI.stopAllAudio();
  KANJI.audio.cancelToken.cancel = false;
  KANJI.audio.generation++;

  KANJI.mcqLocked = false;

  KANJI.screen1();
};

/* ==========================================================
   SCREEN 1 — AUDIO ONLY
   ========================================================== */

KANJI.screen1 = function () {
  KANJI.show("kanjiScreen1");

  const item = KANJI.pickRandom();
  if (!item.audio) return;

  KANJI.playAudio(item.audio);
};

/* ==========================================================
   BUILD MCQ CHOICES (correct + random decoys)
   ========================================================== */

KANJI.buildChoices = function (item) {
  const decoys = [...kanjiDecoys]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const correctObj = {
    kanji: item.kanji,
    furigana: item.furigana,
    romaji: item.romaji
  };

  const choices = [correctObj, ...decoys];

  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }

  return choices;
};

/* ==========================================================
   SCREEN 2 — MCQ (kanji + furigana)
   ========================================================== */

KANJI.screen2 = function () {
  KANJI.show("kanjiScreen2");
  KANJI.mcqLocked = false;

  const item = KANJI.currentItem;
  const mcqBox = document.getElementById("kanjiMcqContainer");
  mcqBox.innerHTML = "";

  // Build randomized choices (correct + decoys)
  const options = KANJI.buildChoices(item);

  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "mcqBtn";

    // ⭐ Kanji only (no furigana, no romaji)
    btn.innerHTML = `
      <div style="font-size: 32px;">${opt.kanji}</div>
    `;

    btn.onclick = () => KANJI.handleMCQ(opt.kanji);
    mcqBox.appendChild(btn);
  });

  const replayBtn = document.getElementById("kanjiReplayBtn");
  if (replayBtn) {
    replayBtn.onclick = () => {
      if (KANJI.mcqLocked) return;
      KANJI.playAudio(item.audio);
    };
  }
};


/* ==========================================================
   HANDLE MCQ
   ========================================================== */

KANJI.handleMCQ = function (choiceKanji) {
  if (KANJI.mcqLocked) return;
  KANJI.mcqLocked = true;

  const item = KANJI.currentItem;
  const correct = item.answer;

  const buttons = document.querySelectorAll("#kanjiMcqContainer .mcqBtn");

  buttons.forEach(btn => {
    btn.disabled = true;

    const btnKanji = btn.querySelector("div").textContent.trim();

    if (btnKanji === correct) btn.classList.add("correct");
    else btn.classList.add("wrong");
  });

  KANJI.round++;

  setTimeout(() => {
    KANJI.screen3();
  }, 900);
};

/* ==========================================================
   SCREEN 3 — SUMMARY
   ========================================================== */

KANJI.screen3 = function () {
  KANJI.show("kanjiScreen3");

  const item = KANJI.currentItem;

  const kanjiBox   = document.getElementById("kanjiSummaryKanji");
  const furiBox    = document.getElementById("kanjiSummaryFurigana");
  const romajiBox  = document.getElementById("kanjiSummaryRomaji");
  const kunBox     = document.getElementById("kanjiSummaryKun");
  const onBox      = document.getElementById("kanjiSummaryOn");
  const meaningBox = document.getElementById("kanjiSummaryMeaning");

  if (kanjiBox) kanjiBox.textContent = item.kanji;
  if (furiBox)  furiBox.textContent  = item.furigana;
  if (romajiBox) romajiBox.textContent = item.romaji;

  if (kunBox) kunBox.textContent = `Kun-yomi (Japanese reading): ${item.kun}`;
  if (onBox)  onBox.textContent  = `On-yomi (Chinese reading): ${item.on}`;

  if (meaningBox) meaningBox.textContent = `Meaning: ${item.meaning}`;

  const nextBtn = document.getElementById("kanjiNextBtn");
  if (nextBtn) {
    nextBtn.onclick = () => {
      KANJI.startRound();
    };
  }
};

/* ==========================================================
   GLOBAL FIX — REMOVE INLINE onclick FROM SCREEN1 BUTTON
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#kanjiScreen1 .next-btn");
  if (btn) {
    btn.onclick = null;
    btn.addEventListener("click", () => KANJI.screen2());
  }

  KANJI.start();
});
