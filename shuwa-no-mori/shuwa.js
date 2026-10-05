/* ==========================================================
   SHUWA — DATASET (Aisatsu)
   ========================================================== */

const shuwaAisatsu = [
  {
    id: "ohayou",
    audio: "audio/ohayou.wav",
    choices: ["おはよう", "こんにちは", "こんばんは"],
    answer: "おはよう",
    summary_hiragana:
      "てをぎゅっとにぎってちいさなまくらをつくり、こめかみのよこからすとんとさげます。あさにめがさめるかんじをあらわしています。これはどういういみになりますか。",
    summary_english:
      "Make a small 'pillow' with your fist and lower it from the temple. This gesture represents waking up in the morning. What does this mean?"
  },

  {
    id: "konnichiwa",
    audio: "audio/konnichiwa.wav",
    choices: ["おはよう", "こんにちは", "こんばんは"],
    answer: "こんにちは",
    summary_hiragana:
      "みぎてのひとさしゆびとなかゆびをめとめのあいだにあてて、かおをとけいのばんのようにみたてます。そのあと、りょうほうのひとさしゆびをむねのまえですこしはなしてむかいあわせ、かるくまげてあいさつのうごきをあらわします。これはどういういみになりますか。",
    summary_english:
      "Place your right index and middle finger between your eyes to represent your face as a clock. Then hold both index fingers in front of your chest, slightly apart and facing each other, and curl them gently to show a greeting motion. What does this mean?"
  },

  {
    id: "konbanwa",
    audio: "audio/konbanwa.wav",
    choices: ["おはよう", "こんにちは", "こんばんは"],
    answer: "こんばんは",
    summary_hiragana:
      "よるのふんいきをあらわすように、てでそっとカーテンをしめるイメージをみたてます。そのあと、むねのまえでてをかすかにはなしてむかいあわせ、りょうほうのひとさしゆびをかるくまげて、やわらかいあいさつのきもちをしめします。このいちれんのしぐさが、どういういみになりますか。",
    summary_english:
      "You imagine gently closing a curtain to express the feeling of evening. Then you slightly separate your hands in front of your chest, facing each other, bend both index fingers softly, and show a gentle sense of greeting. What does this sequence of movements mean?"
  },

  {
    id: "oyasuminasai",
    audio: "audio/oyasuminasai.wav",
    choices: ["おはよう", "こんにちは", "おやすみなさい"],
    answer: "おやすみなさい",
    summary_hiragana:
      "こぶしでまくらのイメージをみたてて、こめかみのあたりにかるくそえます。ねむりにつくまえのしずかなようすをしめすうごきで、このいちれんのしぐさが、どういういみになりますか。",
    summary_english:
      "You form the image of a pillow with your fist and gently place it near your temple. This movement shows the quiet feeling before falling asleep. What does this sequence of gestures mean?"
  },

  {
    id: "gomennasai",
    audio: "audio/gomennasai.wav",
    choices: ["ごめんなさい", "ありがとう", "こんにちは"],
    answer: "ごめんなさい",
    summary_hiragana:
      "なやんでシワがよるようにみぎのひとさしゆびとなかゆびではなをつまみ、まるでしゅとうでうつようにみぎてをまえにそっとさしだし、さらにかすかにこしをかがめてあやまるきもちをしめします。このいちれんのしぐさが、どういういみになりますか。",
    summary_english:
      "As if troubled, you pinch your nose lightly with the right index and middle finger, then gently extend your right hand forward as if making a hand‑blade motion, and finally bend your waist slightly to show a sincere apology. What does this sequence of gestures mean?"
  },

  {
    id: "arigatou",
    audio: "audio/arigatou.wav",
    choices: ["ありがとう", "ごめんなさい", "こんばんは"],
    answer: "ありがとう",
    summary_hiragana:
      "まるでしゅとうでそっとうつようなきどうにみぎてをみたて、みぎてでかるくひだりてのこうにふれ、そのままじょうたいをほんのすこしまえへかたむけてかんしゃのきもちをしめします。このいちれんのしぐさが、どういういみになりますか。",
    summary_english:
      "You treat your right hand as if it were moving along a gentle hand‑blade path, touch the back of your left hand lightly with your right hand, and then lean your upper body forward just a little to express gratitude. What does this sequence of gestures mean?"
  },

  {
    id: "otsukaresama",
    audio: "audio/otsukaresama.wav",
    choices: ["おつかれさま", "ありがとう", "こんにちは"],
    answer: "おつかれさま",
    summary_hiragana:
      "まるであいてのかたをてのひらでたたくしぐさをなぞるように、みぎてでこぶしをつくり、ぎゅっとにぎったひだりてのこうをぽんぽんとたたきます。このいちれんのしぐさが、どういういみになりますか。",
    summary_english:
      "As if tracing the gesture of patting the other person's shoulder with your palm, you form a fist with your right hand and tap the back of your tightly closed left hand in a soft pon‑pon rhythm. What does this sequence of gestures mean?"
  }
];

/* ==========================================================
   SHUWA — CORE ENGINE (mobile‑safe, no auto‑advance)
   ========================================================== */

const SHUWA = {
  round: 0,
  TOTAL_ROUNDS: 3,
  mcqLocked: false,
  activeScreen: null,

  dataset: shuwaAisatsu,
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

SHUWA.stopAllAudio = function () {
  SHUWA.audio.cancelToken.cancel = true;
  SHUWA.audio.generation++;

  if (SHUWA.audio.current) {
    try {
      SHUWA.audio.current.pause();
      SHUWA.audio.current.currentTime = 0;
    } catch (e) {}
  }
};

SHUWA.generationGuards = function () {
  SHUWA.audio.cancelToken.cancel = false;
  SHUWA.audio.generation++;
  SHUWA.audio.current = null;
};

SHUWA.playAudio = function (file) {
  if (!file) return;

  SHUWA.stopAllAudio();
  SHUWA.generationGuards();

  const audio = SHUWA.audio.current || new Audio();
  SHUWA.audio.current = audio;
  audio.src = file;

  audio.play().catch(() => {
    // Mobile autoplay blocked — do nothing
  });
};

/* ==========================================================
   SCREEN SWITCHER
   ========================================================== */

SHUWA.show = function (id) {
  document.querySelectorAll(".shuwa-screen")
    .forEach(el => el.classList.remove("show"));

  document.getElementById(id)?.classList.add("show");
  SHUWA.activeScreen = id;
};

/* ==========================================================
   RANDOM PICK
   ========================================================== */

SHUWA.pickRandom = function () {
  const arr = SHUWA.dataset;
  const item = arr[Math.floor(Math.random() * arr.length)];
  SHUWA.currentItem = item;
  return item;
};

/* ==========================================================
   START + ROUND
   ========================================================== */

SHUWA.start = function () {
  SHUWA.round = 0;
  SHUWA.mcqLocked = false;
  SHUWA.currentItem = null;

  SHUWA.stopAllAudio();
  SHUWA.audio.cancelToken.cancel = false;
  SHUWA.audio.generation++;

  SHUWA.startRound();
};

SHUWA.startRound = function () {
  SHUWA.stopAllAudio();
  SHUWA.audio.cancelToken.cancel = false;
  SHUWA.audio.generation++;

  SHUWA.mcqLocked = false;

  SHUWA.screen1();
};

/* ==========================================================
   SCREEN 1 — AUDIO ONLY (NO AUTO‑ADVANCE)
   ========================================================== */

SHUWA.screen1 = function () {
  SHUWA.show("shuwaScreen1");

  const item = SHUWA.pickRandom();
  if (!item.audio) return;

  SHUWA.playAudio(item.audio);
};

/* ==========================================================
   SCREEN 2 — MCQ
   ========================================================== */

SHUWA.screen2 = function () {
  SHUWA.show("shuwaScreen2");
  SHUWA.mcqLocked = false;

  const item = SHUWA.currentItem;
  const mcqBox = document.getElementById("shuwaMcqContainer");
  mcqBox.innerHTML = "";

  const options = [...item.choices];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "mcqBtn";
    btn.textContent = opt;

    btn.onclick = () => SHUWA.handleMCQ(opt);
    mcqBox.appendChild(btn);
  });

  const replayBtn = document.getElementById("shuwaReplayBtn");
  if (replayBtn) {
    replayBtn.onclick = () => {
      if (SHUWA.mcqLocked) return;
      SHUWA.playAudio(item.audio);
    };
  }
};

/* ==========================================================
   HANDLE MCQ
   ========================================================== */

SHUWA.handleMCQ = function (choice) {
  if (SHUWA.mcqLocked) return;
  SHUWA.mcqLocked = true;

  const item = SHUWA.currentItem;
  const correct = item.answer;

  const buttons = document.querySelectorAll("#shuwaMcqContainer .mcqBtn");

  buttons.forEach(btn => {
    btn.disabled = true;
    const val = btn.textContent.trim();
    if (val === correct) btn.classList.add("correct");
    else btn.classList.add("wrong");
  });

  SHUWA.round++;

  setTimeout(() => {
    SHUWA.screen3();
  }, 900);
};

/* ==========================================================
   SCREEN 3 — SUMMARY
   ========================================================== */

SHUWA.screen3 = function () {
  SHUWA.show("shuwaScreen3");

  const item = SHUWA.currentItem;

  const hiraBox = document.getElementById("shuwaSummaryTextHiragana");
  const engBox = document.getElementById("shuwaSummaryTextEnglish");

  if (hiraBox) hiraBox.textContent = item.summary_hiragana;
  if (engBox) engBox.textContent = item.summary_english;

  const nextBtn = document.getElementById("shuwaNextBtn");
  if (nextBtn) {
    nextBtn.onclick = () => {
      SHUWA.startRound();
    };
  }
};

/* ==========================================================
   GLOBAL FIX — REMOVE INLINE onclick FROM SCREEN1 BUTTON
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#shuwaScreen1 .next-btn");
  if (btn) {
    btn.onclick = null; // remove inline handler
    btn.addEventListener("click", () => SHUWA.screen2());
  }

  SHUWA.start();
});
