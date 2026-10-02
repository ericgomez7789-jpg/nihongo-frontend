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
    "みぎての ひとさしゆび と なかゆび を め と め の あいだ に あてて、かお を とけい の ばん の よう に みたてます。そのあと、りょうほう の ひとさしゆび を むね の まえ で すこし はなして むかいあわせ、かるく まげて あいさつ の うごきを あらわします。これは どういう いみ に なりますか。",

  summary_english:
    "Place your right index and middle finger between your eyes to represent your face as a clock. Then hold both index fingers in front of your chest, slightly apart and facing each other, and curl them gently to show a greeting motion. What does this mean?"
},


























];










// ==========================================================
//  SHUWA — CORE STATE
// ==========================================================

const SHUWA = {
  round: 0,
  TOTAL_ROUNDS: 3,
  mcqLocked: false,
  activeScreen: null,

  dataset: shuwaAisatsu,   // your aisatsu dataset
  currentItem: null,

  audio: {
    cancelToken: { cancel: false },
    generation: 0,
    current: null
  }
};

// ==========================================================
//  AUDIO GUARDS + STOP
// ==========================================================

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

SHUWA.playAudio = function (file, callback) {
  if (!file) return;

  SHUWA.stopAllAudio();
  SHUWA.generationGuards();

  const audio = SHUWA.audio.current || new Audio();
  SHUWA.audio.current = audio;
  audio.src = file;

  audio.onended = () => {
    if (typeof callback === "function") callback();
  };

  audio.onerror = () => {
    if (typeof callback === "function") callback();
  };

  audio.play().catch(() => {
    if (typeof callback === "function") callback();
  });
};

// ==========================================================
//  MCQ RAILGUARDS
// ==========================================================

SHUWA.mcqRailguards = function () {
  if (SHUWA.mcqLocked) return true;
  SHUWA.mcqLocked = true;
  return false;
};

// ==========================================================
//  SCREEN SWITCHER
// ==========================================================

SHUWA.show = function (id) {
  document.querySelectorAll(".shuwa-screen")
    .forEach(el => el.classList.add("hidden"));

  document.getElementById(id)?.classList.remove("hidden");
  SHUWA.activeScreen = id;
};

// ==========================================================
//  RANDOM PICK
// ==========================================================

SHUWA.pickRandom = function () {
  const arr = SHUWA.dataset;
  const item = arr[Math.floor(Math.random() * arr.length)];
  SHUWA.currentItem = item;
  return item;
};

// ==========================================================
//  START + ROUND
// ==========================================================

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

// ==========================================================
//  SCREEN 1 — AUDIO ONLY
// ==========================================================

SHUWA.screen1 = function () {
  SHUWA.show("shuwaScreen1");

  const item = SHUWA.pickRandom();
  if (!item.audio) {
    SHUWA.screen2();
    return;
  }

  SHUWA.playAudio(item.audio, () => {
    SHUWA.screen2();
  });
};

// ==========================================================
//  SCREEN 2 — MCQ
// ==========================================================

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

// ==========================================================
//  HANDLE MCQ
// ==========================================================

SHUWA.handleMCQ = function (choice) {
  if (SHUWA.mcqRailguards()) return;

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
    if (SHUWA.activeScreen !== "shuwaScreen2") return;
    SHUWA.screen3();
  }, 900);
};

// ==========================================================
//  SCREEN 3 — SUMMARY
// ==========================================================

SHUWA.screen3 = function () {
  SHUWA.show("shuwaScreen3");

  const item = SHUWA.currentItem;

  const hiraBox = document.getElementById("shuwaSummaryTextHiragana");
  const engBox = document.getElementById("shuwaSummaryTextEnglish");
  const imgBox = document.getElementById("shuwaSummaryImg");

  if (hiraBox) hiraBox.textContent = item.summary_hiragana;
  if (engBox) engBox.textContent = item.summary_english;
  if (imgBox) imgBox.src = item.image;

  const nextBtn = document.getElementById("shuwaNextBtn");
  if (nextBtn) {
    nextBtn.onclick = () => {
      SHUWA.startRound();
    };
  }
};

