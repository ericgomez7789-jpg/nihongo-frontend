
const awaseruSentences = [

{

  id: "awaseru1",

  audio: "audio/awaseru1.wav",

  choices: [
    "Even in a dangerous situation, he did not lose his composure.",
    "He escaped from the dangerous situation immediately.",
    "He became frightened in the dangerous situation.",
    "He ignored the dangerous situation."
  ],

  answer:
    "Even in a dangerous situation, he did not lose his composure.",

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

  ],

  chunks: [
    "かれ は",
    "きけん な じょうきょう に あっても",
    "れいせいさ を",
    "うしなわなかった"
  ]

},










{
  id: "awaseru2",

  audio: "audio/awaseru2.wav",

  choices: [
    "Only on that day, he did not show up.",
    "He came early only on that day.",
    "He was late every day.",
    "He decided not to leave that day."
  ],

  answer:
    "Only on that day, he did not show up.",

  fun: [

    {
      jp: "その ひ に かぎって",
      romaji: "sono hi ni kagitte",
      en: "only on that day"
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
    }

  ],

  chunks: [
    "その ひ に かぎって",
    "かれ は",
    "でてこなかった"
  ]
},









{
  id: "awaseru3",

  audio: "audio/awaseru3.wav",

  choices: [
    "I visited that town for the first time in ten years.",
    "I moved to that town ten years ago.",
    "I lived in that town for ten years.",
    "I left that town after ten years."
  ],

  answer:
    "I visited that town for the first time in ten years.",

  fun: [

    {
      jp: "その まち を",
      romaji: "sono machi wo",
      en: "that town"
    },

    {
      jp: "じゅうねんぶり に",
      romaji: "juunenburi ni",
      en: "for the first time in ten years"
    },

    {
      jp: "おとずれた",
      romaji: "otozureta",
      en: "visited"
    }

  ],

  chunks: [
    "その まち を",
    "じゅうねんぶり に",
    "おとずれた"
  ]
},










{
  id: "awaseru4",

  audio: "audio/awaseru4.wav",

  choices: [
    "I was eating snacks while watching TV.",
    "I turned off the TV before eating snacks.",
    "I was studying while watching TV.",
    "I bought snacks and a television."
  ],

  answer:
    "I was eating snacks while watching TV.",

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
      en: "snacks"
    },

    {
      jp: "たべていた",
      romaji: "tabete ita",
      en: "was eating"
    }

  ],

  chunks: [
    "テレビ を",
    "みながら",
    "おやつ を",
    "たべていた"
  ]
},





];






/* ==========================================================
   GLOBAL VARIABLES
========================================================== */

let awaseruScore1 = 0;
let awaseruScore2 = 0;

let awaseruRound = 0;

let awaseruCurrentSentence = null;

let currentChunksP1 = [];
let currentChunksP2 = [];

let correctDropsP1 = 0;
let correctDropsP2 = 0;

let awaseruTimerInterval = null;

let currentSentenceAudio = null;

let lastScrambleP1 = "";
let lastScrambleP2 = "";

let awaseruSelectedChunk = null;




function stopAllAudio() {

  if (
    currentSentenceAudio
  ) {

    try {

      currentSentenceAudio.pause();

      currentSentenceAudio.currentTime = 0;

    } catch (e) {}

  }

}





function showScreen(id) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {
      screen.classList.add("hidden");
    });

  const screen =
    document.getElementById(id);

  if (screen) {
    screen.classList.remove(
      "hidden"
    );
  }

}





function awaseru() {

  if (
    typeof stopAllAudio ===
    "function"
  ) {
    stopAllAudio();
  }

  window.currentLevel = "awaseru";

  awaseruScore1 = 0;
  awaseruScore2 = 0;
  awaseruRound = 0;

  updateAwaseruScorekeepers();

  AwaseruProgress.setTotal(
    "awaseru",
    awaseruSentences.length
  );

  AWASERU.renderProgress();

  wireAwaseruReplayButton();

  // Only call if available
  if (
    typeof showScreen ===
    "function"
  ) {
    showScreen(
      "awaseruScreen"
    );
  }

  // Always start the game
  awaseruNextRound();

}



function playAwaseruChunksInSequence(
  chunkList,
  onComplete
) {

  let index = 0;

  function playNext() {

    if (
      index >= chunkList.length
    ) {

      if (
        typeof onComplete ===
        "function"
      ) {
        onComplete();
      }

      return;
    }

    const audio =
      new Audio(
        chunkList[index]
      );

    audio.onended = () => {

      index++;

      playNext();

    };

    audio.onerror = () => {

      index++;

      playNext();

    };

    audio.play().catch(() => {

      index++;

      playNext();

    });

  }

  playNext();

}


/* ==========================================================
   AWASERU UI / PROGRESS
========================================================== */

window.AWASERU = window.AWASERU || {};

AWASERU.renderProgress = function () {

  const progress =
    AwaseruProgress.getLevelProgress(
      "awaseru"
    );

  const wrappers =
    document.querySelectorAll(
      "#awaseruProgress1, #awaseruProgress2"
    );

  wrappers.forEach(wrapper => {

    const label =
      wrapper.querySelector(
        ".awaseru-progress-label"
      );

    const bar =
      wrapper.querySelector(
        ".awaseru-progress-bar"
      );

    if (label) {
      label.textContent =
        `Progress: ${progress.completed} / ${progress.total}`;
    }

    if (bar) {
      bar.style.width =
        `${progress.percent}%`;
    }

  });

};


const AwaseruDragModule = {

  setupDropLines(
    player,
    count
  ) {

    const answerArea =
      document.getElementById(
        player === 1
          ? "awaseruAnswerArea1"
          : "awaseruAnswerArea2"
      );

    answerArea.innerHTML = "";

    for (
      let i = 0;
      i < count;
      i++
    ) {

      const slot =
        document.createElement(
          "div"
        );

      slot.className =
        "builtChunk";

      slot.style.minWidth =
        "120px";

      slot.style.minHeight =
        "40px";

      slot.style.border =
        "2px dashed #666";

      slot.style.background =
        "#222";

      slot.style.display =
        "flex";

      slot.style.alignItems =
        "center";

      slot.style.justifyContent =
        "center";

      slot.dataset.index =
        i;

      slot.dataset.player =
        player;

      slot.ondragover =
        e => {
          e.preventDefault();
        };

      slot.ondrop =
        AwaseruDragModule.dropChunk;

      slot.addEventListener(
        "click",
        () => {

          if (
            !window.awaseruDraggedButton
          ) {
            return;
          }

          const fakeEvent = {
            preventDefault() {},
            target: slot
          };

          AwaseruDragModule.dropChunk(
            fakeEvent
          );

        }
      );

      answerArea.appendChild(
        slot
      );

    }

  },

  dropChunk(e) {

    e.preventDefault();

    const dragged =
      window.awaseruDraggedButton;

    if (!dragged) return;

    const chunkIndex =
      Number(
        dragged.dataset.chunkIndex
      );

    const requiredIndex =
      Number(
        e.target.dataset.index
      );

    if (
      chunkIndex !==
      requiredIndex
    ) {

      alert(
        "Try Again"
      );

      return;

    }

    if (
      e.target.dataset.filled ===
      "true"
    ) {
      return;
    }

    e.target.textContent =
      dragged.textContent;

    e.target.dataset.filled =
      "true";

    e.target.style.background =
      "#4caf50";

    dragged.remove();

    document
      .querySelectorAll(
        ".chunkBtn"
      )
      .forEach(btn => {
        btn.style.outline = "";
      });

    window.awaseruDraggedButton =
      null;

    const player =
      Number(
        e.target.dataset.player
      );

    if (player === 1) {

      correctDropsP1++;

      if (
        correctDropsP1 ===
        awaseruCurrentSentence
          .chunks.length
      ) {

        playerWins(1);

      }

    }

    if (player === 2) {

      correctDropsP2++;

      if (
        correctDropsP2 ===
        awaseruCurrentSentence
          .chunks.length
      ) {

        playerWins(2);

      }

    }

  }

};




function renderPlayerBoard(
  player,
  chunks
) {

  console.log(
    "renderPlayerBoard",
    player,
    chunks
  );

  const chunkContainer =
    document.getElementById(
      player === 1
        ? "awaseruChunkContainer1"
        : "awaseruChunkContainer2"
    );

  const answerArea =
    document.getElementById(
      player === 1
        ? "awaseruAnswerArea1"
        : "awaseruAnswerArea2"
    );

  console.log(
    "containers:",
    chunkContainer,
    answerArea
  );

  if (
    !chunkContainer ||
    !answerArea
  ) {

    console.error(
      "Missing containers"
    );

    return;

  }

  chunkContainer.innerHTML = "";
  answerArea.innerHTML = "";

  console.log(
    "before setupDropLines"
  );

  AwaseruDragModule.setupDropLines(
    player,
    chunks.length
  );

  console.log(
    "after setupDropLines"
  );

  chunks.forEach(chunk => {

    console.log(
      "adding",
      chunk
    );

    const btn =
      document.createElement(
        "button"
      );

    btn.className =
      "chunkBtn";

    btn.textContent =
      chunk;

    const chunkIndex =
      awaseruCurrentSentence.chunks.indexOf(
        chunk
      );

    btn.dataset.chunkIndex =
      chunkIndex;

    btn.draggable = true;

    btn.addEventListener(
      "dragstart",
      () => {

        console.log(
          "DRAG START",
          chunk,
          chunkIndex
        );

        window.awaseruDraggedButton =
          btn;

      }
    );

    btn.addEventListener(
      "dragend",
      () => {

        console.log(
          "DRAG END",
          chunk
        );

      }
    );

    btn.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".chunkBtn"
          )
          .forEach(b => {
            b.style.outline = "";
          });

        btn.style.outline =
          "4px solid yellow";

        window.awaseruDraggedButton =
          btn;

        console.log(
          "SELECTED",
          chunk
        );

      }
    );

    chunkContainer.appendChild(
      btn
    );

  });

  console.log(
    "final count:",
    chunkContainer.children.length
  );

}

/* ==========================================================
   PLAYER WIN
========================================================== */

function playerWins(player) {

  if (!awaseruCurrentSentence) {
    console.error(
      "No active sentence."
    );
    return;
  }

  clearInterval(
    awaseruTimerInterval
  );

  if (player === 1) {
    awaseruScore1++;
  } else {
    awaseruScore2++;
  }

  updateAwaseruScorekeepers();

  AwaseruProgress.markSentenceComplete(
    "awaseru",
    awaseruCurrentSentence.id
  );

  AWASERU.renderProgress();

  const reveal =
    document.getElementById(
      "awaseruReveal"
    );

  if (reveal) {

    reveal.innerHTML = `

      <div class="awaseru-japanese">

        ${awaseruCurrentSentence.chunks.join(" ")}

      </div>

      <div class="awaseru-english">

        ${awaseruCurrentSentence.answer}

      </div>

    `;

    reveal.style.display =
      "block";

  }

  setTimeout(() => {

    if (reveal) {
      reveal.style.display =
        "none";
    }

    awaseruNextRound();

  }, 5000);

}


/* ==========================================================
   AUDIO
========================================================== */

function playAwaseruSentence(sentence) {

  if (!sentence) {
    console.error(
      "No sentence provided."
    );
    return;
  }

  console.log(
    "=== PLAY AWASERU SENTENCE ==="
  );

  console.log(sentence);

  try {
    stopAllAudio();
  } catch (e) {
    console.log(
      "stopAllAudio missing"
    );
  }

  currentSentenceAudio =
    new Audio(sentence.audio);

  console.log(
    "Attempting:",
    sentence.audio
  );

  currentSentenceAudio.oncanplaythrough =
    () => {

      console.log(
        "Audio loaded successfully"
      );

    };

  currentSentenceAudio.onerror =
    (e) => {

      console.error(
        "Audio failed to load",
        sentence.audio,
        e
      );

    };

  currentSentenceAudio.play()
    .then(() => {

      console.log(
        "Audio playing"
      );

    })
    .catch(err => {

      console.error(
        "Play failed",
        err
      );

    });

}

/* ==========================================================
   SCOREKEEPERS
========================================================== */

function updateAwaseruScorekeepers() {

  const p1 =
    document.getElementById(
      "awaseruScore1"
    );

  const p2 =
    document.getElementById(
      "awaseruScore2"
    );

  if (p1) {
    p1.textContent =
      awaseruScore1;
  }

  if (p2) {
    p2.textContent =
      awaseruScore2;
  }

}

/* ==========================================================
   TIMER
========================================================== */

function startAwaseruTimer(onExpire) {

  let timeLeft = 30;

  const timer = document.getElementById("awaseruTimer");

  if (timer) {
    timer.textContent = timeLeft;
  }

  clearInterval(awaseruTimerInterval);

  awaseruTimerInterval = setInterval(() => {

    timeLeft--;

    if (timer) {
      timer.textContent = timeLeft;
    }

    if (timeLeft <= 0) {

      clearInterval(awaseruTimerInterval);

      if (timer) {
        timer.textContent = "0";
      }

      if (typeof onExpire === "function") {
        onExpire();
      }
    }

  }, 1000);

}

/* ==========================================================
   REPLAY BUTTON
========================================================== */

function wireAwaseruReplayButton() {

  const btn =
    document.getElementById(
      "awaseruReplayBtn"
    );

  if (!btn) return;

  btn.onclick = () => {

    playAwaseruSentence(
      awaseruCurrentSentence
    );

  };

}

/* ==========================================================
   SHUFFLE
========================================================== */

function shuffleArray(arr) {

  const copy = [...arr];

  for (
    let i = copy.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() *
        (i + 1)
      );

    [copy[i], copy[j]]
      =
    [copy[j], copy[i]];

  }

  return copy;

}

/* ==========================================================
   SCRAMBLE
========================================================== */

function getScrambledChunks(
  sentence,
  player
) {

  const original =
    [...sentence.chunks];

  let scrambled =
    shuffleArray(original);

  let key =
    scrambled
      .map(
        chunk =>
        sentence.chunks.indexOf(chunk)
      )
      .join("-");

  if (
    player === 1 &&
    key === lastScrambleP1
  ) {

    scrambled =
      shuffleArray(original);

    key =
      scrambled
        .map(
          chunk =>
          sentence.chunks.indexOf(chunk)
        )
        .join("-");
  }

  if (
    player === 2 &&
    key === lastScrambleP2
  ) {

    scrambled =
      shuffleArray(original);

    key =
      scrambled
        .map(
          chunk =>
          sentence.chunks.indexOf(chunk)
        )
        .join("-");
  }

  if (player === 1) {
    lastScrambleP1 = key;
  }

  if (player === 2) {
    lastScrambleP2 = key;
  }

  return scrambled;

}

/* ==========================================================
   NEXT ROUND
========================================================== */

function awaseruNextRound() {

  correctDropsP1 = 0;
  correctDropsP2 = 0;

  awaseruRound++;


  if (awaseruRound > 5) {

    clearInterval(
      awaseruTimerInterval
    );

    alert(
      `Game Over!

Player 1: ${awaseruScore1}
Player 2: ${awaseruScore2}`
    );

    awaseru();

    return;

  }

  awaseruCurrentSentence =
    awaseruSentences[
      Math.floor(
        Math.random() *
        awaseruSentences.length
      )
    ];

  console.log(
    "sentence:",
    awaseruCurrentSentence
  );

  console.log(
    "chunks:",
    awaseruCurrentSentence.chunks
  );

  currentChunksP1 =
    getScrambledChunks(
      awaseruCurrentSentence,
      1
    );

  currentChunksP2 =
    getScrambledChunks(
      awaseruCurrentSentence,
      2
    );

  console.log(
    "P1:",
    currentChunksP1
  );

  console.log(
    "P2:",
    currentChunksP2
  );

  renderPlayerBoard(
    1,
    currentChunksP1
  );

  renderPlayerBoard(
    2,
    currentChunksP2
  );

  startAwaseruTimer(
    awaseruNextRound
  );

  playAwaseruSentence(
    awaseruCurrentSentence
  );

}

window.addEventListener("load", () => {

  console.log("AUTO START");

  setTimeout(() => {
    awaseru();
  }, 500);

});