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





{
  id: "blackhole17",
  audio: "audio/blackhole17.wav",
  choices: [
    "I politely asked whether takeout was allowed, and the employee confirmed that it was.",
    "I demanded takeout rudely without asking first.",
    "I insisted that takeout was forbidden even though I wasn’t sure."
  ],
  answer: "I politely asked whether takeout was allowed, and the employee confirmed that it was.",
  japanese: "レストランで食べ物をお持ち帰りしてもよろしいかと私がうかがうと、従業員が「はい、お持ち帰りでも大丈夫でございます」と申しました。"
},





{
  id: "blackhole18",
  audio: "audio/blackhole18.wav",
  choices: [
    "I offered my heartfelt congratulations on their children's successful employment and wished them continued success.",
    "I ignored their children's achievement and said nothing about their future.",
    "I criticized their children's career choices and discouraged them."
  ],
  answer: "I offered my heartfelt congratulations on their children's successful employment and wished them continued success.",
  japanese: "お嬢様とご子息様のご就職、誠におめでとうございます。今後ますますのご活躍を心よりお祈り申し上げます。"
},





{
  id: "blackhole19",
  audio: "audio/blackhole19.wav",
  choices: [
    "I offered birthday congratulations and politely remarked that they looked young.",
    "I ignored their birthday entirely and changed the subject.",
    "I bluntly told them they looked older than expected."
  ],
  answer: "I offered birthday congratulations and politely remarked that they looked young.",
  japanese: "お誕生日おめでとうございます。お若く見えますと申し上げました。"
},






{
  id: "blackhole20",
  audio: "audio/blackhole20.wav",
  choices: [
    "I congratulated them on their birthday and politely remarked that their formal attire suited them beautifully and their smile was truly lovely.",
    "I made no comment about their appearance and simply ended the conversation.",
    "I criticized their outfit and said their smile looked awkward."
  ],
  answer: "I congratulated them on their birthday and politely remarked that their formal attire suited them beautifully and their smile was truly lovely.",
  japanese: "お誕生日おめでとうございます。晴れ着がよくお似合いで、笑顔がとても素敵でいらっしゃいました。"
},





{
  id: "blackhole21",
  audio: "audio/blackhole21.wav",
  choices: [
    "I congratulated them on their child's school entrance and expressed that their child's future growth is something to look forward to.",
    "I ignored their child's school entrance and changed the topic abruptly.",
    "I said their child's future did not seem promising."
  ],
  answer: "I congratulated them on their child's school entrance and expressed that their child's future growth is something to look forward to.",
  japanese: "お子様のご入学おめでとうございます。これからのご成長がますます楽しみでございます。"
},





{
  id: "blackhole22",
  audio: "audio/blackhole22.wav",
  choices: [
    "I congratulated them on the birth of their baby and mentioned that she is a healthy and lively girl.",
    "I ignored the news of their baby's birth and talked about something unrelated.",
    "I said their newborn did not seem healthy."
  ],
  answer: "I congratulated them on the birth of their baby and mentioned that she is a healthy and lively girl.",
  japanese: "赤ちゃんのご出産おめでとうございます。元気で健やかな女の子でございます。"
},






{
  id: "blackhole23",
  audio: "audio/blackhole23.wav",
  choices: [
    "I expressed my gratitude to my supervisor for kindly lending me money.",
    "I refused to acknowledge my supervisor’s help and acted as if nothing happened.",
    "I complained that my supervisor did not lend me enough money."
  ],
  answer: "I expressed my gratitude to my supervisor for kindly lending me money.",
  japanese: "上司が私にお金を貸してくださり、そのご厚意に対して御礼を申し上げました。"
},





{
  id: "blackhole24",
  audio: "audio/blackhole24.wav",
  choices: [
    "I thanked them sincerely for taking the trouble to deliver the goods so carefully.",
    "I ignored the delivery and acted as if it was not important.",
    "I complained that the goods were not delivered quickly enough."
  ],
  answer: "I thanked them sincerely for taking the trouble to deliver the goods so carefully.",
  japanese: "納品物をご丁寧にお届けいただき、誠にありがとうございます。"
},





{
  id: "blackhole25",
  audio: "audio/blackhole25.wav",
  choices: [
    "I thanked them politely for taking the trouble to look after my dog and for all their help.",
    "I acted as if they had not helped with my dog at all.",
    "I complained that they did not take good enough care of my dog."
  ],
  answer: "I thanked them politely for taking the trouble to look after my dog and for all their help.",
  japanese: "わざわざ犬の世話をしていただき、いろいろとお世話になりましたと申し上げました。"
},




{
  id: "blackhole26",
  audio: "audio/blackhole26.wav",
  choices: [
    "I congratulated them on their new home and commented that it is a lovely place rich in nature.",
    "I criticized their new home for being in an area with too much nature.",
    "I ignored their new home entirely and talked about something unrelated."
  ],
  answer: "I congratulated them on their new home and commented that it is a lovely place rich in nature.",
  japanese: "ご新築をおめでとうございます。自然が豊かで良いところですね。"
},







{
  id: "blackhole27",
  audio: "audio/blackhole27.wav",
  choices: [
    "I understand you have been through a difficult experience because of this disaster, and I offer my heartfelt sympathies.",
    "I congratulated them on successfully overcoming the disaster without any problems.",
    "I advised them to prepare for future disasters and avoid worrying too much."
  ],
  answer: "I understand you have been through a difficult experience because of this disaster, and I offer my heartfelt sympathies.",
  japanese: "このたびの災害により、大変な思いをされたことと存じます。心よりお見舞い申し上げます。"
},





{
  id: "blackhole28",
  audio: "audio/blackhole28.wav",
  choices: [
    "As I was leaving after visiting the sick person, I respectfully said, 'Please take good care of yourself.'",
    "Before visiting the sick person, I asked whether they needed anything from me.",
    "I told them that they should return to work as soon as possible after recovering."
  ],
  answer: "As I was leaving after visiting the sick person, I respectfully said, 'Please take good care of yourself.'",
  japanese: "お見舞いの帰り際に、「どうぞお大事になさってください」と申し上げました。"
},





{
  id: "blackhole29",
  audio: "audio/blackhole29.wav",
  choices: [
    "I expressed gratitude for their daily caregiving and told them to take care of their own health as well.",
    "I apologized for not being able to visit the patient more often.",
    "I recommended that they hire a professional caregiver immediately."
  ],
  answer: "I expressed gratitude for their daily caregiving and told them to take care of their own health as well.",
  japanese: "日々のご看病に感謝申し上げます。お疲れが出ませんよう、どうぞご自愛ください。"
},






{
  id: "blackhole30",
  audio: "audio/blackhole30.wav",
  choices: [
    "When entering the hospital room during a visit, I respectfully said, 'Excuse my intrusion.'",
    "When leaving the hospital room after a visit, I apologized for staying too long.",
    "I informed the nurse that I would return the next day."
  ],
  answer: "When entering the hospital room during a visit, I respectfully said, 'Excuse my intrusion.'",
  japanese: "お見舞いで病室に入る時、「おじゃまいたします」と申し上げました。"
},








{
  id: "blackhole31",
  audio: "audio/blackhole31.wav",
  choices: [
    "During a hospital visit, I encouraged the patient by saying, 'You seem to be doing well, which puts me at ease.'",
    "I asked the patient whether they were ready to leave the hospital soon.",
    "I advised the patient to follow the doctor's instructions more carefully."
  ],
  answer: "During a hospital visit, I encouraged the patient by saying, 'You seem to be doing well, which puts me at ease.'",
  japanese: "お見舞いの際、患者さんを元気づけるために、「お元気そうで安心いたしました」と申し上げました。"
},







{
  id: "blackhole32",
  audio: "audio/blackhole32.wav",
  choices: [
    "During a hospital visit, I politely asked about the patient's condition by saying, 'How have you been feeling?'",
    "During a hospital visit, I asked whether the patient would like a larger hospital room.",
    "During a hospital visit, I suggested that the patient take a walk outside the hospital."
  ],
  answer: "During a hospital visit, I politely asked about the patient's condition by saying, 'How have you been feeling?'",
  japanese: "お見舞いに伺い、お具合をお尋ねする時、「お加減はいかがでいらっしゃいますか」と申し上げました。"
},









{
  id: "blackhole33",
  audio: "audio/blackhole33.wav",
  choices: [
    "At a restaurant, since my ordered food had not arrived for quite some time, I politely asked how much longer it would take.",
    "At a restaurant, I complained that the food tasted bad and asked for a refund.",
    "At a restaurant, I immediately canceled my order without speaking to the staff."
  ],
  answer: "At a restaurant, since my ordered food had not arrived for quite some time, I politely asked how much longer it would take.",
  japanese: "注文した料理がなかなか来ないので、あとどのぐらいでできますかとお尋ねしました。"
},









{
  id: "blackhole34",
  audio: "audio/blackhole34.wav",
  choices: [
    "My supervisor took me out for a meal and treated me. At the end of the meal, I respectfully thanked them and told them the food was very delicious.",
    "My supervisor asked me to pay for everyone's meal, so I apologized and left early.",
    "My supervisor invited me to a restaurant, but I declined because I was not hungry."
  ],
  answer: "My supervisor took me out for a meal and treated me. At the end of the meal, I respectfully thanked them and told them the food was very delicious.",
  japanese: "上司がワタクシを食事に連れて行ってくださり、おごってくださいました。それから食事の終わりに「ごちそうさまでした。とても美味しかったです。ありがとうございました。」と申し上げました。"
},






{
  id: "blackhole35",
  audio: "audio/blackhole35.wav",
  choices: [
    "At a restaurant, when I was ready to place an order, I politely called the server and said, 'Excuse me, may I place an order?'",
    "At a restaurant, I accidentally ordered the wrong meal and asked the server to cancel it.",
    "At a restaurant, I thanked the server and immediately paid the bill before ordering."
  ],
  answer: "At a restaurant, when I was ready to place an order, I politely called the server and said, 'Excuse me, may I place an order?'",
  japanese: "飲食店で、注文しようと思い、店員さんに「すみません、注文をお願いできますか」と申し上げました。"
},


















];

BlackHole.dataset = blackHoleDataset;
