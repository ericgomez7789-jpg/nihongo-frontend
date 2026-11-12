const aparejarSentences = [

{
  id: "aparejar1",

  audio: "audio/spanish/aparejar1.wav",

  choices: [
    "Incluso en una situación peligrosa, él no perdió la calma.",
    "Escapó inmediatamente de la situación peligrosa.",
    "Se asustó en la situación peligrosa.",
    "Ignoró la situación peligrosa."
  ],

  answer:
    "Incluso en una situación peligrosa, él no perdió la calma.",

  fun: [

    {
      es: "incluso en una situación peligrosa",
      en: "even in a dangerous situation"
    },

    {
      es: "él",
      en: "he"
    },

    {
      es: "no perdió",
      en: "did not lose"
    },

    {
      es: "la calma",
      en: "his composure"
    }

  ],

  chunks: [
    "incluso en una situación peligrosa",
    "él",
    "no perdió",
    "la calma"
  ]
},


{
  id: "aparejar2",

  audio: "audio/spanish/aparejar2.wav",

  choices: [
    "Ese día en particular, él no apareció.",
    "Ese día en particular, él llegó temprano.",
    "Ese día en particular, él apareció de repente.",
    "Ese día en particular, él llamó por teléfono."
  ],

  answer:
    "Ese día en particular, él no apareció.",

  fun: [

    {
      es: "ese día en particular",
      en: "that particular day"
    },

    {
      es: "él",
      en: "he"
    },

    {
      es: "no apareció",
      en: "did not appear / did not show up"
    }

  ],

  chunks: [
    "ese día en particular",
    "él",
    "no apareció"
  ]
},



{
  id: "aparejar3",

  audio: "audio/spanish/aparejar3.wav",

  choices: [
    "Visité esta ciudad por primera vez en diez años.",
    "He vivido en esta ciudad durante diez años.",
    "Visité esta ciudad diez veces este año.",
    "Me mudé a esta ciudad hace diez años."
  ],

  answer:
    "Visité esta ciudad por primera vez en diez años.",

  fun: [

    {
      es: "visité",
      en: "I visited"
    },

    {
      es: "esta ciudad",
      en: "this city"
    },

    {
      es: "por primera vez",
      en: "for the first time"
    },

    {
      es: "en diez años",
      en: "in ten years"
    }

  ],

  chunks: [
    "visité",
    "esta ciudad",
    "por primera vez",
    "en diez años"
  ]
},










];









/* ==========================================================
   GLOBAL VARIABLES
========================================================== */

let aparejarScore1 = 0;
let aparejarScore2 = 0;

let aparejarRound = 0;

let aparejarCurrentSentence = null;

let currentChunksP1 = [];
let currentChunksP2 = [];

let correctDropsP1 = 0;
let correctDropsP2 = 0;

let aparejarTimerInterval = null;

let currentSentenceAudio = null;

let lastScrambleP1 = "";
let lastScrambleP2 = "";

let aparejarSelectedChunk = null;

window.aparejarDraggedButton = null;
window.aparejarDraggedButton2 = null;



function stopAllAudio() {

  if (currentSentenceAudio) {

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



function aparejar() {

  if (
    typeof stopAllAudio ===
    "function"
  ) {
    stopAllAudio();
  }

  window.currentLevel = "aparejar";

  aparejarScore1 = 0;
  aparejarScore2 = 0;
  aparejarRound = 0;

  updateAparejarScorekeepers();

  AparejarProgress.setTotal(
    "aparejar",
    aparejarSentences.length
  );

  APAREJAR.renderProgress();

  wireAparejarReplayButton();

  if (
    typeof showScreen ===
    "function"
  ) {
    showScreen(
      "aparejarScreen"
    );
  }

  aparejarNextRound();

}



/* ==========================================================
   AUDIO SEQUENCE
========================================================== */

function playAparejarChunksInSequence(
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
   APAREJAR UI / PROGRESS
========================================================== */

window.APAREJAR =
  window.APAREJAR || {};

APAREJAR.renderProgress =
function () {

  const currentRound =
    Math.min(
      Math.max(
        aparejarRound,
        1
      ),
      5
    );

  const totalRounds = 5;

  const percent =
    (currentRound /
      totalRounds) *
    100;

  const wrappers =
    document.querySelectorAll(
      "#aparejarProgress1, #aparejarProgress2"
    );

  wrappers.forEach(wrapper => {

    const label =
      wrapper.querySelector(
        ".aparejar-progress-label"
      );

    const bar =
      wrapper.querySelector(
        ".aparejar-progress-bar"
      );

    if (label) {

      label.textContent =
        `Round: ${currentRound} / ${totalRounds}`;

    }

    if (bar) {

      bar.style.width =
        `${percent}%`;

    }

  });

};



const AparejarDragModule = {

  setupDropLines(player, count) {

    const answerArea =
      document.getElementById(
        player === 1
          ? "aparejarAnswerArea1"
          : "aparejarAnswerArea2"
      );

    answerArea.innerHTML = "";

    for (let i = 0; i < count; i++) {

      const slot =
        document.createElement("div");

      slot.className = "builtChunk";

      slot.style.minWidth = "120px";
      slot.style.minHeight = "40px";
      slot.style.border = "2px dashed #666";
      slot.style.background = "#222";
      slot.style.display = "flex";
      slot.style.alignItems = "center";
      slot.style.justifyContent = "center";

      slot.dataset.index = i;
      slot.dataset.player = player;

      slot.ondragover = e => {
        e.preventDefault();
      };

      slot.ondrop =
        AparejarDragModule.dropChunk;

      slot.addEventListener(
        "click",
        () => {

          const dragged =
            player === 1
              ? window.aparejarDraggedButton
              : window.aparejarDraggedButton2;

          console.log(
            "SLOT CLICKED",
            {
              player,
              dragged
            }
          );

          if (!dragged) {
            console.log(
              "NO CHUNK SELECTED"
            );
            return;
          }

          const fakeEvent = {
            preventDefault() {},
            target: slot
          };

          AparejarDragModule.dropChunk(
            fakeEvent
          );

        }
      );

      answerArea.appendChild(slot);

    }

  },

  dropChunk(e) {

    e.preventDefault();

    console.log(
      "===== DROP START ====="
    );

    const player =
      Number(
        e.target.dataset.player
      );

    console.log(
      "player:",
      player
    );

    const dragged =
      player === 1
        ? window.aparejarDraggedButton
        : window.aparejarDraggedButton2;

    console.log(
      "dragged:",
      dragged
    );

    if (!dragged) {

      console.log(
        "NO DRAGGED BUTTON FOUND"
      );

      return;
    }

    console.log(
      "dragged text:",
      dragged.textContent
    );

    console.log(
      "dragged dataset:",
      dragged.dataset
    );

    const chunkIndex =
      Number(
        dragged.dataset.chunkIndex
      );

    const requiredIndex =
      Number(
        e.target.dataset.index
      );

    console.log(
      "chunkIndex:",
      chunkIndex
    );

    console.log(
      "requiredIndex:",
      requiredIndex
    );

    console.log(
      "match:",
      chunkIndex === requiredIndex
    );

    if (
      chunkIndex !==
      requiredIndex
    ) {

      console.log(
        "WRONG SLOT"
      );

      e.target.style.background =
        "#d32f2f";

      setTimeout(() => {

        e.target.style.background =
          "#222";

      }, 300);

      return;

    }

    console.log(
      "CORRECT SLOT"
    );

    if (
      e.target.dataset.filled ===
      "true"
    ) {

      console.log(
        "SLOT ALREADY FILLED"
      );

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
      .querySelectorAll(".chunkBtn")
      .forEach(btn => {
        btn.style.outline = "";
      });

    if (player === 1) {

      window.aparejarDraggedButton =
        null;

    } else {

      window.aparejarDraggedButton2 =
        null;

    }

    if (player === 1) {

      correctDropsP1++;

      console.log(
        "correctDropsP1:",
        correctDropsP1
      );

      if (
        correctDropsP1 ===
        aparejarCurrentSentence
          .chunks.length
      ) {

        console.log(
          "PLAYER 1 WINS"
        );

        playerWins(1);

      }

    }

    if (player === 2) {

      correctDropsP2++;

      console.log(
        "correctDropsP2:",
        correctDropsP2
      );

      if (
        correctDropsP2 ===
        aparejarCurrentSentence
          .chunks.length
      ) {

        console.log(
          "PLAYER 2 WINS"
        );

        playerWins(2);

      }

    }

    console.log(
      "===== DROP END ====="
    );

  }

};

function renderPlayerBoard(
  player,
  chunks
) {

  const chunkContainer =
    document.getElementById(
      player === 1
        ? "aparejarChunkContainer1"
        : "aparejarChunkContainer2"
    );

  const answerArea =
    document.getElementById(
      player === 1
        ? "aparejarAnswerArea1"
        : "aparejarAnswerArea2"
    );

  if (
    !chunkContainer ||
    !answerArea
  ) {
    return;
  }

  chunkContainer.innerHTML = "";
  answerArea.innerHTML = "";

  AparejarDragModule.setupDropLines(
    player,
    chunks.length
  );

  chunks.forEach(chunk => {

    const btn =
      document.createElement(
        "button"
      );

    btn.className =
      "chunkBtn";

    btn.textContent =
      chunk;

    const chunkIndex =
      aparejarCurrentSentence.chunks.indexOf(
        chunk
      );

    console.log(
      "CHUNK:",
      chunk,
      "INDEX:",
      chunkIndex
    );

    btn.dataset.chunkIndex =
      chunkIndex;

    btn.draggable = true;

    btn.addEventListener(
      "dragstart",
      () => {

        console.log(
          "DRAG START:",
          chunk
        );

        if (player === 1) {

          window.aparejarDraggedButton =
            btn;

        } else {

          window.aparejarDraggedButton2 =
            btn;

        }

      }
    );

    btn.addEventListener(
      "click",
      () => {

        console.log(
          "CHUNK CLICKED:",
          chunk
        );

        chunkContainer
          .querySelectorAll(".chunkBtn")
          .forEach(b => {
            b.style.outline = "";
          });

        btn.style.outline =
          "4px solid yellow";

        if (player === 1) {

          window.aparejarDraggedButton =
            btn;

        } else {

          window.aparejarDraggedButton2 =
            btn;

        }

      }
    );

    chunkContainer.appendChild(
      btn
    );

  });

}



/* ==========================================================
   PLAYER WIN
========================================================== */

function playerWins(player) {

  if (!aparejarCurrentSentence) {
    return;
  }

  clearInterval(
    aparejarTimerInterval
  );

  if (player === 1) {
    aparejarScore1++;
  } else {
    aparejarScore2++;
  }

  updateAparejarScorekeepers();

  AparejarProgress.markSentenceComplete(
    "aparejar",
    aparejarCurrentSentence.id
  );

  APAREJAR.renderProgress();

  const reveal =
    document.getElementById(
      "aparejarReveal"
    );

  if (reveal) {

    reveal.innerHTML = `

      <div class="aparejarJapanese">
        ${aparejarCurrentSentence.chunks.join(" ")}
      </div>

      <div class="aparejarEnglish">
        ${aparejarCurrentSentence.answer}
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

    aparejarNextRound();

  }, 5000);

}



/* ==========================================================
   AUDIO
========================================================== */

function playAparejarSentence(
  sentence
) {

  if (!sentence) {
    return;
  }

  stopAllAudio();

  currentSentenceAudio =
    new Audio(
      sentence.audio
    );

  currentSentenceAudio.play();

}



/* ==========================================================
   SCOREKEEPERS
========================================================== */

function updateAparejarScorekeepers() {

  const p1 =
    document.getElementById(
      "aparejarScore1"
    );

  const p2 =
    document.getElementById(
      "aparejarScore2"
    );

  if (p1) {
    p1.textContent =
      aparejarScore1;
  }

  if (p2) {
    p2.textContent =
      aparejarScore2;
  }

}



/* ==========================================================
   TIMER
========================================================== */

function startAparejarTimer(
  onExpire
) {

  let timeLeft = 30;

  const timer =
    document.getElementById(
      "aparejarTimer"
    );

  if (timer) {
    timer.textContent =
      timeLeft;
  }

  clearInterval(
    aparejarTimerInterval
  );

  aparejarTimerInterval =
    setInterval(() => {

      timeLeft--;

      if (timer) {
        timer.textContent =
          timeLeft;
      }

      if (
        timeLeft <= 0
      ) {

        clearInterval(
          aparejarTimerInterval
        );

        if (
          typeof onExpire ===
          "function"
        ) {
          onExpire();
        }

      }

    }, 1000);

}



/* ==========================================================
   REPLAY BUTTON
========================================================== */

function wireAparejarReplayButton() {

  const btn =
    document.getElementById(
      "aparejarReplayBtn"
    );

  if (!btn) return;

  btn.onclick = () => {

    playAparejarSentence(
      aparejarCurrentSentence
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

    [copy[i], copy[j]] =
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

  }

  if (
    player === 2 &&
    key === lastScrambleP2
  ) {

    scrambled =
      shuffleArray(original);

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

function aparejarNextRound() {

  correctDropsP1 = 0;
  correctDropsP2 = 0;

  aparejarRound++;

  APAREJAR.renderProgress();

  if (
    aparejarRound > 5
  ) {

    clearInterval(
      aparejarTimerInterval
    );

    alert(
`Game Over!

Player 1: ${aparejarScore1}
Player 2: ${aparejarScore2}`
    );

    aparejar();

    return;

  }

  aparejarCurrentSentence =
    aparejarSentences[
      Math.floor(
        Math.random() *
        aparejarSentences.length
      )
    ];

  currentChunksP1 =
    getScrambledChunks(
      aparejarCurrentSentence,
      1
    );

  currentChunksP2 =
    getScrambledChunks(
      aparejarCurrentSentence,
      2
    );

  renderPlayerBoard(
    1,
    currentChunksP1
  );

  renderPlayerBoard(
    2,
    currentChunksP2
  );

  startAparejarTimer(
    aparejarNextRound
  );

  playAparejarSentence(
    aparejarCurrentSentence
  );

}



window.addEventListener(
  "load",
  () => {

    setTimeout(() => {

      aparejar();

    }, 500);

  }
);