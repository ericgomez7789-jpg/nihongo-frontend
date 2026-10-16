/* ==========================================================
   BLACK HOLE — CORE ENGINE
   ========================================================== */

const BlackHole = {
  mcqLocked: false,
  activeScreen: null,

  dataset: [],
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

BlackHole.stopAllAudio = function () {
  BlackHole.audio.cancelToken.cancel = true;
  BlackHole.audio.generation++;

  if (BlackHole.audio.current) {
    try {
      BlackHole.audio.current.pause();
      BlackHole.audio.current.currentTime = 0;
    } catch (e) {}
  }
};

BlackHole.generationGuards = function () {
  BlackHole.audio.cancelToken.cancel = false;
  BlackHole.audio.generation++;
  BlackHole.audio.current = null;
};

BlackHole.playAudio = function (file) {
  if (!file) return;

  BlackHole.stopAllAudio();
  BlackHole.generationGuards();

  const audio = BlackHole.audio.current || new Audio();
  BlackHole.audio.current = audio;
  audio.src = file;

  audio.play().catch(() => {});
};

/* ==========================================================
   SCREEN SWITCHER
   ========================================================== */

BlackHole.show = function (id) {
  document.querySelectorAll(".blackhole-screen")
    .forEach(el => el.classList.remove("show"));

  document.getElementById(id)?.classList.add("show");
  BlackHole.activeScreen = id;
};

/* ==========================================================
   RANDOM PICK
   ========================================================== */

BlackHole.pickRandom = function () {
  const arr = BlackHole.dataset;
  const item = arr[Math.floor(Math.random() * arr.length)];
  BlackHole.currentItem = item;
  return item;
};

/* ==========================================================
   START
   ========================================================== */

BlackHole.start = function () {
  BlackHole.mcqLocked = false;
  BlackHole.currentItem = null;

  BlackHole.stopAllAudio();
  BlackHole.audio.cancelToken.cancel = false;
  BlackHole.audio.generation++;

  BlackHole.screen1();
};

/* ==========================================================
   SCREEN 1 — AUDIO ONLY
   ========================================================== */

BlackHole.screen1 = function () {
  BlackHole.show("blackHoleScreen1");

  const item = BlackHole.pickRandom();
  if (!item.audio) return;

  BlackHole.playAudio(item.audio);
};

/* ==========================================================
   SCREEN 2 — MCQ
   ========================================================== */

BlackHole.screen2 = function () {
  BlackHole.show("blackHoleScreen2");
  BlackHole.mcqLocked = false;

  const item = BlackHole.currentItem;
  const mcqBox = document.getElementById("blackHoleMcqContainer");
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

    btn.onclick = () => BlackHole.handleMCQ(opt);
    mcqBox.appendChild(btn);
  });
};

/* ==========================================================
   HANDLE MCQ
   ========================================================== */

BlackHole.handleMCQ = function (choice) {
  if (BlackHole.mcqLocked) return;
  BlackHole.mcqLocked = true;

  const item = BlackHole.currentItem;
  const correct = item.answer;

  const buttons = document.querySelectorAll("#blackHoleMcqContainer .mcqBtn");

  buttons.forEach(btn => {
    btn.disabled = true;
    const val = btn.textContent.trim();
    if (val === correct) btn.classList.add("correct");
    else btn.classList.add("wrong");
  });

  setTimeout(() => {
    BlackHole.screen3(choice === correct);
  }, 900);
};

/* ==========================================================
   SCREEN 3 — JUDGEMENT
   ========================================================== */

BlackHole.screen3 = function (isCorrect) {
  BlackHole.show("blackHoleScreen3");

  const live = document.getElementById("blackHoleLive");
  const hole = document.getElementById("blackHoleHole");

  if (isCorrect) {
    live.style.display = "block";
    hole.style.display = "none";
  } else {
    live.style.display = "none";
    hole.style.display = "block";

    const person = document.getElementById("fallingPerson");
    person.style.animation = "none";
    void person.offsetWidth;
    person.style.animation = "fallIntoHole 2.8s ease-in forwards";
  }
};

/* ==========================================================
   RESTART
   ========================================================== */

BlackHole.restart = function () {
  BlackHole.start();
};

/* ==========================================================
   BUTTON HOOKS
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("blackHoleNext1").onclick = () => BlackHole.screen2();
  document.getElementById("blackHoleRestartLive").onclick = () => BlackHole.restart();
  document.getElementById("blackHoleRestartHole").onclick = () => BlackHole.restart();
});

/* ==========================================================
   DATASET (BOTTOM OF FILE)
   ========================================================== */

const blackHoleDataset = [
  {
  id: "blackhole1",
  audio: "audio/blackhole1.wav",
  choices: [
    "I greeted my boss politely in the morning.",
    "I casually said good morning to a friend.",
    "I greeted my boss at night with good evening."
  ],
  answer: "I greeted my boss politely in the morning.",
  japanese: "朝上司に会った時「おはようございます」と申しました。"
},



{
  id: "blackhole2",
  audio: "audio/blackhole2.wav",
  choices: [
    "I introduced myself politely to the department chief for the first time.",
    "I casually greeted a coworker I already knew.",
    "I apologized to my boss for being late."
  ],
  answer: "I introduced myself politely to the department chief for the first time.",
  japanese: "はじめて部長に会ったとき、「はじめまして、ゴメズ・エリックと申します。よろしくお願いいたします」と言いました。"
},










];

BlackHole.dataset = blackHoleDataset;
