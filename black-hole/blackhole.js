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


{
  id: "blackhole3",
  audio: "audio/blackhole3.wav",
  choices: [
    "At the end of the formal event, I politely took my leave.",
    "I interrupted the speaker in the middle of the presentation.",
    "I asked everyone to stay longer for an additional discussion."
  ],
  answer: "At the end of the formal event, I politely took my leave.",
  japanese: "大会の別れ際では、私が「失礼いたしました」と申し上げました。"
},





{
  id: "blackhole4",
  audio: "audio/blackhole4.wav",
  choices: [
    "I expressed appreciation to a coworker for their hard work.",
    "I casually joked with a friend after the event.",
    "I asked my team to work overtime without warning."
  ],
  answer: "I expressed appreciation to a coworker for their hard work.",
  japanese: "同僚をねぎらうために、「お疲れさまでございました」と申し上げました。"
},





{
  id: "blackhole5",
  audio: "audio/blackhole5.wav",
  choices: [
    "I greeted my department chief politely after not seeing him for a long time.",
    "I casually chatted with a coworker I see every day.",
    "I complained to my boss about recent workload issues."
  ],
  answer: "I greeted my department chief politely after not seeing him for a long time.",
  japanese: "久しぶりに部長にお会いした時、「ご無沙汰しております」と申し上げました。"
},





{
  id: "blackhole6",
  audio: "audio/blackhole6.wav",
  choices: [
    "I introduced myself politely to someone connected to my husband.",
    "I casually greeted a neighbor I see every day.",
    "I asked a stranger for directions in an informal way."
  ],
  answer: "I introduced myself politely to someone connected to my husband.",
  japanese: "夫の関係者に名乗る場合は、ワタクシは夫の妻でございますと申しました。"
},




{
  id: "blackhole7",
  audio: "audio/blackhole7.wav",
  choices: [
    "I politely thanked a stranger at my company for opening the door for me.",
    "I casually greeted a coworker I already knew well.",
    "I asked a visitor to wait outside in an informal tone."
  ],
  answer: "I politely thanked a stranger at my company for opening the door for me.",
  japanese: "会社で面識のない方に戸を開けていただいたので、私が「恐れ入ります」と申し上げました。"
},






{
  id: "blackhole8",
  audio: "audio/blackhole8.wav",
  choices: [
    "I apologized formally after accidentally stepping on someone's foot at the company.",
    "I casually bumped into a friend and laughed it off.",
    "I ignored someone after accidentally stepping on their foot."
  ],
  answer: "I apologized formally after accidentally stepping on someone's foot at the company.",
  japanese: "会社で誰かの足を踏んでしまった時、ワタクシが「申し訳ございません」と申し上げました。"
},





{
  id: "blackhole9",
  audio: "audio/blackhole9.wav",
  choices: [
    "I politely directed someone to the end of the line after they cut in.",
    "I ignored someone who stepped ahead of me in line.",
    "I scolded a coworker harshly for cutting in line."
  ],
  answer: "I politely directed someone to the end of the line after they cut in.",
  japanese: "会社で誰かが列を割り込んだ時、ワタシが「あちらが列の最後尾でございます」と申し上げました。"
},







{
  id: "blackhole10",
  audio: "audio/blackhole10.wav",
  choices: [
    "I expressed formal gratitude after someone kindly lent me money when I was in need.",
    "I casually borrowed money from a friend without thanking them.",
    "I demanded financial help from a colleague in a rude manner."
  ],
  answer: "I expressed formal gratitude after someone kindly lent me money when I was in need.",
  japanese: "小遣いがなく困っていたところ、ある方が私にご親切でお金を貸してくださり、そのご厚意に対して御礼を申し上げました。"
},





{
  id: "blackhole11",
  audio: "audio/blackhole11.wav",
  choices: [
    "I expressed gratitude to a nurse for kindly taking care of my mother.",
    "I ignored the nurse who was caring for my mother.",
    "I complained to the nurse about my mother's treatment."
  ],
  answer: "I expressed gratitude to a nurse for kindly taking care of my mother.",
  japanese: "病院で看護師の方が母にいろいろとお世話くださり、「いろいろとお世話になりました」と申し上げました。"
},






{
  id: "blackhole12",
  audio: "audio/blackhole12.wav",
  choices: [
    "I offered my seat to my grandmother when I saw her passing by.",
    "I refused to give up my seat even when my grandmother walked past.",
    "I asked someone else to give up their seat for my grandmother."
  ],
  answer: "I offered my seat to my grandmother when I saw her passing by.",
  japanese: "わたしは祖母が通りかかるのをみると、すぐ席をゆずるために「どうぞおかけください」と申しました。"
},





{
  id: "blackhole13",
  audio: "audio/blackhole13.wav",
  choices: [
    "I humbly told a stranger that I did not know the area when asked for directions.",
    "I gave incorrect directions even though I wasn’t sure.",
    "I ignored someone who asked me for directions."
  ],
  answer: "I humbly told a stranger that I did not know the area when asked for directions.",
  japanese: "だれかに道を聞かれたら、わたしがわからない場合は「すみません、わたしもこのあたりはよく存じておりません」と申します。"
},




{
  id: "blackhole14",
  audio: "audio/blackhole14.wav",
  choices: [
    "I politely explained that the new clothes did not fit me when someone asked me to try them on.",
    "I agreed to try on the new clothes even though I knew they didn’t fit.",
    "I ignored the person who asked me to try on the new clothes."
  ],
  answer: "I politely explained that the new clothes did not fit me when someone asked me to try them on.",
  japanese: "だれかに新しい服の試着をお願いされたら、「大きさが合わなかったのでございます」と申します。"
},





{
  id: "blackhole15",
  audio: "audio/blackhole15.wav",
  choices: [
    "I politely asked a person who looked unwell if something was wrong.",
    "I walked past a person who looked unwell without saying anything.",
    "I scolded a person who looked unwell for sitting on the ground."
  ],
  answer: "I politely asked a person who looked unwell if something was wrong.",
  japanese: "具合の悪そうな人に声をかけると「どうかなさいましたか」とお声がけします。"
},





{
  id: "blackhole16",
  audio: "audio/blackhole16.wav",
  choices: [
    "I politely explained the directions while mentioning that it takes about fifteen minutes from here.",
    "I refused to give directions and walked away without helping.",
    "I told the person that I had no idea how long it would take."
  ],
  answer: "I politely explained the directions while mentioning that it takes about fifteen minutes from here.",
  japanese: "あるところに行く道をお教えしながら、「こちらから約十五分ほどでございます」と申しました。"
},





];

BlackHole.dataset = blackHoleDataset;
