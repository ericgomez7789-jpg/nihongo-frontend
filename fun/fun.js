/* ==========================================================
   DATASET
   ========================================================== */

const funDataset = [

{
  id: "fun1",

  audio: "audio/fun1.wav",

  choices: [
    "On that particular day, he did not show up.",
    "He arrived early that day.",
    "Only he came that day.",
    "He never returned again."
  ],

  answer: "On that particular day, he did not show up.",

  fun: [
  {
    jp: "その ひ",
    romaji: "sono hi",
    en: "that day"
  },
  {
    jp: "に かぎって",
    romaji: "ni kagitte",
    en: "on that particular occasion"
  },
  {
    jp: "かれ は",
    romaji: "kare wa",
    en: "he"
  },
  {
    jp: "でてこなかった",
    romaji: "detekonakatta",
    en: "did not show up"
  },
  {
    jp: "です",
    romaji: "desu",
    en: "(polite ending)"
  }
]
},










{
  id: "fun2",

  audio: "audio/fun2.wav",

  choices: [
    "I visited that town for the first time in ten years.",
    "I moved to that town ten years ago.",
    "I left that town after ten years.",
    "I visited that town every year."
  ],

  answer: "I visited that town for the first time in ten years.",

  fun: [
    {
      jp: "その まち を",
      romaji: "sono machi wo",
      en: "that town"
    },
    {
      jp: "じゅうねん ぶり に",
      romaji: "juunen buri ni",
      en: "for the first time in ten years"
    },
    {
      jp: "おとずれた",
      romaji: "otozureta",
      en: "visited"
    }
  ]
},






{
  id: "fun3",

  audio: "audio/fun3.wav",

  choices: [
    "Even in a dangerous situation, he did not lose his composure.",
    "He escaped from the dangerous situation immediately.",
    "He became frightened in the dangerous situation.",
    "He ignored the dangerous situation."
  ],

  answer: "Even in a dangerous situation, he did not lose his composure.",

  fun: [
    {
      jp: "かれ は",
      romaji: "kare wa",
      en: "he"
    },
    {
      jp: "きけん な じょうきょう に あっても",
      romaji: "kiken na joukyou ni atte mo",
      en: "even in a dangerous situation"
    },
    {
      jp: "れいせいさ を",
      romaji: "reiseisa wo",
      en: "his composure"
    },
    {
      jp: "うしなわなかった",
      romaji: "ushinawanakatta",
      en: "did not lose"
    }
  ]
},






{
  id: "fun4",

  audio: "audio/fun4.wav",

  choices: [
    "I was eating a snack while watching TV.",
    "I watched TV after eating a snack.",
    "I stopped watching TV to eat a snack.",
    "I was eating dinner while watching TV."
  ],

  answer: "I was eating a snack while watching TV.",

  fun: [
    {
      jp: "テレビ を",
      romaji: "terebi wo",
      en: "TV"
    },
    {
      jp: "みながら",
      romaji: "minagara",
      en: "while watching"
    },
    {
      jp: "おやつ を",
      romaji: "oyatsu wo",
      en: "a snack"
    },
    {
      jp: "たべていた",
      romaji: "tabete ita",
      en: "was eating"
    }
  ]
},









];

/* ==========================================================
   CORE
   ========================================================== */

const FUN = {

  dataset: funDataset,

  currentItem: null,

  mcqLocked: false,

  audio: {
    current: null
  }

};

/* ==========================================================
   AUDIO
   ========================================================== */

FUN.stopAudio = function () {

  if (FUN.audio.current) {
    try {
      FUN.audio.current.pause();
      FUN.audio.current.currentTime = 0;
    } catch (e) {}
  }

};

FUN.playAudio = function (file) {

  console.log("ATTEMPTING:", file);

  if (!file) return;

  FUN.stopAudio();

  const audio = new Audio(file);

  FUN.audio.current = audio;

  audio.onerror = () => {
    console.log("AUDIO FAILED");
  };

  audio.oncanplaythrough = () => {
    console.log("AUDIO LOADED");
  };

  audio.play()
    .then(() => console.log("PLAYING SUCCESS"))
    .catch(err => console.log("PLAY ERROR:", err));

};

/* ==========================================================
   SCREEN SWITCHER
   ========================================================== */

FUN.show = function (id) {

  document
    .querySelectorAll(".fun-screen")
    .forEach(el => el.classList.remove("show"));

  document
    .getElementById(id)
    ?.classList.add("show");

};

/* ==========================================================
   RANDOM PICK
   ========================================================== */

FUN.pickRandom = function () {

  const item =
    FUN.dataset[
      Math.floor(
        Math.random() * FUN.dataset.length
      )
    ];

  FUN.currentItem = item;

  return item;

};

/* ==========================================================
   START
   ========================================================== */
FUN.start = function () {

  FUN.mcqLocked = false;

  FUN.stopAudio();

  FUN.currentItem = FUN.pickRandom();

  FUN.screen1();

};

/* ==========================================================
   SCREEN 1
   ========================================================== */

FUN.screen1 = function () {

  console.log("SCREEN1");

  FUN.show("funScreen1");

  const item = FUN.currentItem;

  console.log("ITEM:", item);

  if (!item.audio) {
    console.log("NO AUDIO");
    return;
  }

  console.log("PLAYING:", item.audio);

  FUN.playAudio(item.audio);

};

/* ==========================================================
   SCREEN 2
   ========================================================== */

FUN.screen2 = function () {

  FUN.show("funScreen2");

  const item = FUN.currentItem;

  FUN.mcqLocked = false;

  const mcqBox =
    document.getElementById("funMcqContainer");

  mcqBox.innerHTML = "";

  const options = [...item.choices];

  for (let i = options.length - 1; i > 0; i--) {

    const j =
      Math.floor(Math.random() * (i + 1));

    [options[i], options[j]] =
      [options[j], options[i]];
  }

  options.forEach(option => {

    const btn =
      document.createElement("button");

    btn.className = "mcqBtn";

    btn.textContent = option;

    btn.onclick = () =>
      FUN.handleMCQ(option);

    mcqBox.appendChild(btn);

  });

  document.getElementById(
    "funReplayBtn"
  ).onclick = () => {

    if (FUN.mcqLocked) return;

    FUN.playAudio(item.audio);

  };

};

/* ==========================================================
   HANDLE MCQ
   ========================================================== */

FUN.handleMCQ = function(choice) {

  if (FUN.mcqLocked) return;

  FUN.mcqLocked = true;

  const correct =
    FUN.currentItem.answer;

  document
    .querySelectorAll(
      "#funMcqContainer .mcqBtn"
    )
    .forEach(btn => {

      btn.disabled = true;

      if (btn.textContent === correct) {
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
      }

    });

  setTimeout(() => {

    FUN.screen3();

  }, 900);

};

/* ==========================================================
   SCREEN 3
   ========================================================== */

FUN.screen3 = function () {

  FUN.show("funScreen3");

  const container =
    document.getElementById("funContainer");

  container.innerHTML = `
    <div class="puzzle-title">
      🧩 Sentence Complete
    </div>

    <div class="puzzle-card">

      <div id="puzzleJapanese"
           class="puzzle-japanese"></div>

      <div id="puzzleRomaji"
           class="puzzle-romaji"></div>

      <div class="puzzle-divider"></div>

      <div id="puzzleEnglish"
           class="puzzle-english"></div>

    </div>
  `;

  const jpBox =
    document.getElementById("puzzleJapanese");

  const romajiBox =
    document.getElementById("puzzleRomaji");

  const englishBox =
    document.getElementById("puzzleEnglish");

  const jp =
    FUN.currentItem.fun
      .map(x => x.jp)
      .join("　");

  const romaji =
    FUN.currentItem.fun
      .map(x => x.romaji)
      .join(" ");

  const english =
    FUN.currentItem.answer;

  let delay = 0;

  /* Hiragana */

  for (let i = 0; i < jp.length; i++) {

    setTimeout(() => {
      jpBox.textContent += jp[i];
    }, delay);

    delay += 90;
  }

  /* Pause before romaji */

  delay += 500;

  for (let i = 0; i < romaji.length; i++) {

    setTimeout(() => {
      romajiBox.textContent += romaji[i];
    }, delay);

    delay += 50;
  }

  /* Pause before English */

  delay += 700;

  for (let i = 0; i < english.length; i++) {

    setTimeout(() => {
      englishBox.textContent += english[i];
    }, delay);

    delay += 35;
  }

};

/* ==========================================================
   BUTTONS
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

  document.querySelector(
    "#funScreen1 .next-btn"
  ).onclick = () => FUN.screen2();

  document.getElementById(
    "funNextBtn"
  ).onclick = () => FUN.start();

  FUN.start();

});