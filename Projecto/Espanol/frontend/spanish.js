
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startLearningBtn");
  const landing = document.getElementById("landingScreen");
  const screen0 = document.getElementById("screen0");

  startBtn.addEventListener("click", () => {
    landing.classList.add("hidden");
    screen0.classList.remove("hidden");
  });
});














/* ------------------------------
   SENTENCES (LEVEL 1 + LEVEL 2)
------------------------------ */
const sentences = [



  



{
  id: "l1-es-1",
  meaning: "What do you do?",
  level: 1,
  chunks: [
    {
      romaji: "qué",
      hiragana: "qué",
      meaning: "what",
      audio: {
        daughter: "audio/spanish/que.wav",
        me: "audio/spanish/que.wav"
      }
    },
    {
      romaji: "haces",
      hiragana: "haces",
      meaning: "do",
      audio: {
        daughter: "audio/spanish/haces.wav",
        me: "audio/spanish/haces.wav"
      }
    },
    {
      romaji: "tú",
      hiragana: "tú",
      meaning: "you",
      audio: {
        daughter: "audio/spanish/tu.wav",
        me: "audio/spanish/tu.wav"
      }
    }
  ]
},
  









{
  id: "l1-es-2",
  meaning: "Are you okay?",
  level: 1,
  chunks: [
    {
      romaji: "estás",
      hiragana: "estás",
      meaning: "are (you)",
      audio: {
        daughter: "audio/spanish/estas.wav",
        me: "audio/spanish/estas.wav"
      }
    },
    {
      romaji: "bien",
      hiragana: "bien",
      meaning: "okay / well",
      audio: {
        daughter: "audio/spanish/bien.wav",
        me: "audio/spanish/bien.wav"
      }
    }
  ]
},













{
  id: "l1-es-3",
  meaning: "I write with a pencil.",
  level: 1,
  chunks: [
    {
      romaji: "escribo",
      hiragana: "escribo",
      meaning: "I write",
      audio: {
        daughter: "audio/spanish/escribo.wav",
        me: "audio/spanish/escribo.wav"
      }
    },
    {
      romaji: "con",
      hiragana: "con",
      meaning: "with",
      audio: {
        daughter: "audio/spanish/con_with.wav",
        me: "audio/spanish/con_with.wav"
      }
    },
    {
      romaji: "lápiz",
      hiragana: "lápiz",
      meaning: "pencil",
      audio: {
        daughter: "audio/spanish/lapiz.wav",
        me: "audio/spanish/lapiz.wav"
      }
    }
  ]
},






{
  id: "l1-es-4",
  meaning: "What do you do in your free time?",
  level: 1,
  chunks: [
    {
      romaji: "qué",
      hiragana: "qué",
      meaning: "what",
      audio: {
        daughter: "audio/spanish/que.wav",
        me: "audio/spanish/que.wav"
      }
    },
    {
      romaji: "haces",
      hiragana: "haces",
      meaning: "do (you)",
      audio: {
        daughter: "audio/spanish/haces.wav",
        me: "audio/spanish/haces.wav"
      }
    },
    {
      romaji: "en",
      hiragana: "en",
      meaning: "in",
      audio: {
        daughter: "audio/spanish/en.wav",
        me: "audio/spanish/en.wav"
      }
    },
    {
      romaji: "tu",
      hiragana: "tu",
      meaning: "your",
      audio: {
        daughter: "audio/spanish/tu.wav",
        me: "audio/spanish/tu.wav"
      }
    },
    {
      romaji: "tiempo",
      hiragana: "tiempo",
      meaning: "time",
      audio: {
        daughter: "audio/spanish/tiempo.wav",
        me: "audio/spanish/tiempo.wav"
      }
    },
    {
      romaji: "libre",
      hiragana: "libre",
      meaning: "free",
      audio: {
        daughter: "audio/spanish/libre.wav",
        me: "audio/spanish/libre.wav"
      }
    }
  ]
},






{
  id: "l1-es-5",
  meaning: "I play games.",
  level: 1,
  chunks: [
    {
      romaji: "yo",
      hiragana: "yo",
      meaning: "I",
      audio: {
        daughter: "audio/spanish/yo.wav",
        me: "audio/spanish/yo.wav"
      }
    },
    {
      romaji: "juego",
      hiragana: "juego",
      meaning: "play",
      audio: {
        daughter: "audio/spanish/juego.wav",
        me: "audio/spanish/juego.wav"
      }
    },
    {
      romaji: "juegos",
      hiragana: "juegos",
      meaning: "games",
      audio: {
        daughter: "audio/spanish/juegos.wav",
        me: "audio/spanish/juegos.wav"
      }
    }
  ]
},






{
  id: "l1-es-6",
  meaning: "I go to school.",
  level: 1,

  chunks: [
    {
      romaji: "yo",
      hiragana: "yo",
      meaning: "I",
      audio: {
        daughter: "audio/spanish/yo.wav",
        me: "audio/spanish/yo.wav"
      }
    },
    {
      romaji: "voy",
      hiragana: "voy",
      meaning: "go",
      audio: {
        daughter: "audio/spanish/voy.wav",
        me: "audio/spanish/voy.wav"
      }
    },
    {
      romaji: "a",
      hiragana: "a",
      meaning: "to",
      audio: {
        daughter: "audio/spanish/a.wav",
        me: "audio/spanish/a.wav"
      }
    },
    {
      romaji: "la",
      hiragana: "la",
      meaning: "the (feminine)",
      audio: {
        daughter: "audio/spanish/la.wav",
        me: "audio/spanish/la.wav"
      }
    },
    {
      romaji: "escuela",
      hiragana: "escuela",
      meaning: "school",
      audio: {
        daughter: "audio/spanish/escuela.wav",
        me: "audio/spanish/escuela.wav"
      }
    }
  ]
},









{
  id: "l1-es-7",
  meaning: "I go to the river.",
  level: 1,

  chunks: [
    {
      romaji: "voy",
      hiragana: "voy",
      meaning: "I go",
      audio: {
        daughter: "audio/spanish/voy.wav",
        me: "audio/spanish/voy.wav"
      }
    },
    {
      romaji: "al",
      hiragana: "al",
      meaning: "to the",
      audio: {
        daughter: "audio/spanish/al.wav",
        me: "audio/spanish/al.wav"
      }
    },
    {
      romaji: "río",
      hiragana: "río",
      meaning: "river",
      audio: {
        daughter: "audio/spanish/rio.wav",
        me: "audio/spanish/rio.wav"
      }
    }
  ]
},









{
  id: "l1-es-8",
  meaning: "I climb the mountain.",
  level: 1,

  chunks: [
    {
      romaji: "subo",
      hiragana: "subo",
      meaning: "I climb",
      audio: {
        daughter: "audio/spanish/subo.wav",
        me: "audio/spanish/subo.wav"
      }
    },
    {
      romaji: "la",
      hiragana: "la",
      meaning: "the",
      audio: {
        daughter: "audio/spanish/la.wav",
        me: "audio/spanish/la.wav"
      }
    },
    {
      romaji: "montaña",
      hiragana: "montaña",
      meaning: "mountain",
      audio: {
        daughter: "audio/spanish/montana.wav",
        me: "audio/spanish/montana.wav"
      }
    }
  ]
},











{
  id: "l1-es-9",
  meaning: "Put on the cap.",
  level: 1,

  chunks: [
    {
      romaji: "ponte",
      hiragana: "ponte",
      meaning: "put on (yourself)",
      audio: {
        daughter: "audio/spanish/ponte.wav",
        me: "audio/spanish/ponte.wav"
      }
    },
    {
      romaji: "la",
      hiragana: "la",
      meaning: "the",
      audio: {
        daughter: "audio/spanish/la.wav",
        me: "audio/spanish/la.wav"
      }
    },
    {
      romaji: "gorra",
      hiragana: "gorra",
      meaning: "cap",
      audio: {
        daughter: "audio/spanish/gorra.wav",
        me: "audio/spanish/gorra.wav"
      }
    }
  ]
},














{
  id: "l1-es-10",
  meaning: "Give it your best.",
  level: 1,

  chunks: [
    {
      romaji: "echa",
      hiragana: "echa",
      meaning: "give / put",
      audio: {
        daughter: "audio/spanish/echa.wav",
        me: "audio/spanish/echa.wav"
      }
    },
    {
      romaji: "le",
      hiragana: "le",
      meaning: "to it — a tiny pronoun that points the action toward something",
      audio: {
        daughter: "audio/spanish/le.wav",
        me: "audio/spanish/le.wav"
      }
    },
    {
      romaji: "ganas",
      hiragana: "ganas",
      meaning: "effort / desire",
      audio: {
        daughter: "audio/spanish/ganas.wav",
        me: "audio/spanish/ganas.wav"
      }
    }
  ]
},
















{
  id: "l1-es-11",
  meaning: "Take care of yourself.",
  level: 1,

  chunks: [
    {
      romaji: "cuida",
      hiragana: "cuida",
      meaning: "take care",
      audio: {
        daughter: "audio/spanish/cuida.wav",
        me: "audio/spanish/cuida.wav"
      }
    },
    {
      romaji: "te",
      hiragana: "te",
      meaning: "yourself — a reflexive pronoun that shows the action is done to your own body",
      audio: {
        daughter: "audio/spanish/te.wav",
        me: "audio/spanish/te.wav"
      }
    }
  ]
},













{
  id: "l1-es-12",
  meaning: "I'm already leaving.",
  level: 1,

  chunks: [
    {
      romaji: "ya",
      hiragana: "ya",
      meaning: "already",
      audio: {
        daughter: "audio/spanish/ya.wav",
        me: "audio/spanish/ya.wav"
      }
    },
    {
      romaji: "me",
      hiragana: "me",
      meaning: "myself — reflexive pronoun showing the action applies to your own body",
      audio: {
        daughter: "audio/spanish/me.wav",
        me: "audio/spanish/me.wav"
      }
    },
    {
      romaji: "voy",
      hiragana: "voy",
      meaning: "I go / I'm going",
      audio: {
        daughter: "audio/spanish/voy.wav",
        me: "audio/spanish/voy.wav"
      }
    }
  ]
},














{
  id: "l1-es-13",
  meaning: "Goodbye.",
  level: 1,

  chunks: [
    {
      romaji: "adios",
      hiragana: "adios",
      meaning: "goodbye",
      audio: {
        daughter: "audio/spanish/adios.wav",
        me: "audio/spanish/adios.wav"
      }
    }
  ]
},
















{
  id: "l1-es-14",
  meaning: "Where are you from?",
  level: 1,

  chunks: [
    {
      romaji: "de",
      hiragana: "de",
      meaning: "from",
      audio: {
        daughter: "audio/spanish/de.wav",
        me: "audio/spanish/de.wav"
      }
    },
    {
      romaji: "donde",
      hiragana: "donde",
      meaning: "where",
      audio: {
        daughter: "audio/spanish/donde.wav",
        me: "audio/spanish/donde.wav"
      }
    },
    {
      romaji: "eres",
      hiragana: "eres",
      meaning: "you are (informal)",
      audio: {
        daughter: "audio/spanish/eres.wav",
        me: "audio/spanish/eres.wav"
      }
    }
  ]
},












{
  id: "l1-es-15",
  meaning: "I come from the United States.",
  level: 1,

  chunks: [
    {
      romaji: "yo",
      hiragana: "yo",
      meaning: "I",
      audio: {
        daughter: "audio/spanish/yo.wav",
        me: "audio/spanish/yo.wav"
      }
    },
    {
      romaji: "vengo",
      hiragana: "vengo",
      meaning: "come",
      audio: {
        daughter: "audio/spanish/vengo.wav",
        me: "audio/spanish/vengo.wav"
      }
    },
    {
      romaji: "de",
      hiragana: "de",
      meaning: "from",
      audio: {
        daughter: "audio/spanish/de.wav",
        me: "audio/spanish/de.wav"
      }
    },
    {
      romaji: "los",
      hiragana: "los",
      meaning: "the (plural)",
      audio: {
        daughter: "audio/spanish/los.wav",
        me: "audio/spanish/los.wav"
      }
    },
    {
      romaji: "estados",
      hiragana: "estados",
      meaning: "states",
      audio: {
        daughter: "audio/spanish/estados.wav",
        me: "audio/spanish/estados.wav"
      }
    },
    {
      romaji: "unidos",
      hiragana: "unidos",
      meaning: "united",
      audio: {
        daughter: "audio/spanish/unidos.wav",
        me: "audio/spanish/unidos.wav"
      }
    }
  ]
},














{
  id: "l1-es-16",
  meaning: "When did you come?",
  level: 1,

  chunks: [
    {
      romaji: "cuando",
      hiragana: "cuando",
      meaning: "when",
      audio: {
        daughter: "audio/spanish/cuando.wav",
        me: "audio/spanish/cuando.wav"
      }
    },
    {
      romaji: "viniste",
      hiragana: "viniste",
      meaning: "you came",
      audio: {
        daughter: "audio/spanish/viniste.wav",
        me: "audio/spanish/viniste.wav"
      }
    }
  ]
},





































];

// ⭐ ADD THIS PATCH RIGHT HERE
sentences.forEach(sentence => {
  sentence.chunks = sentence.chunks.map((chunk, i) => ({
    ...chunk,
    originalIndex: i
  }));
});


/* ----------------------------------------------------------
   GLOBAL AUDIO SAFETY
---------------------------------------------------------- */
window.audioCancelToken = { cancel: false };
window.audioGeneration = 0;
window.currentChunkAudio = null;
window.screen2Audio = null;
window.activeAudioElements = [];
window.L1 = window.L1 || {};

function stopAllAudio() {
  // Cancel async sequences
  if (window.audioCancelToken) {
    window.audioCancelToken.cancel = true;
  }
  window.audioGeneration++;

  // Helper to safely stop any audio object
  const safeStop = (a) => {
    if (!a) return;
    try {
      if (typeof a.pause === "function") a.pause();
      if ("currentTime" in a) a.currentTime = 0;
      a.onended = null;
      a.onerror = null;
    } catch (err) {
      console.warn("safeStop() failed:", err);
    }
  };

  // Stop chunk audio
  safeStop(window.currentChunkAudio);
  window.currentChunkAudio = null;

  // Stop full-sentence audio
  safeStop(window.screen2Audio);
  window.screen2Audio = null;

  // Stop any tracked audio
  if (Array.isArray(window.activeAudioElements)) {
    for (const a of window.activeAudioElements) {
      safeStop(a);
    }
    window.activeAudioElements = [];
  }
}

function cancelAllAudioPlayback() {
  // Cancel all async audio sequences
  window.audioCancelToken.cancel = true;

  // Invalidate all pending callbacks
  window.audioGeneration++;

  // Stop chunk audio
  if (window.currentChunkAudio) {
    try {
      window.currentChunkAudio.pause();
      window.currentChunkAudio.currentTime = 0;
      window.currentChunkAudio.onended = null;
      window.currentChunkAudio.onerror = null;
    } catch (e) {}
    window.currentChunkAudio = null;
  }

  // Stop full-sentence audio
  if (window.screen2Audio) {
    try {
      window.screen2Audio.pause();
      window.screen2Audio.currentTime = 0;
      window.screen2Audio.onended = null;
      window.screen2Audio.onerror = null;
    } catch (e) {}
    window.screen2Audio = null;
  }

  // Stop any other tracked audio (future-proof)
  if (window.activeAudioElements.length > 0) {
    window.activeAudioElements.forEach(a => {
      try {
        a.pause();
        a.currentTime = 0;
        a.onended = null;
        a.onerror = null;
      } catch (e) {}
    });
    window.activeAudioElements = [];
  }
}





let level1Score = 0;
let level1Round = 0;
const TOTAL_ROUNDS = 5;
window.level1TotalRounds = TOTAL_ROUNDS;
let level1Index = 0;
let level1Sentences = [];
window.currentLevel = 0;







/*-----------------------------------------------------------------------------------------
Replay Button Wiring
-----------------------------------------------------------------------------------------*/

function updateScoreKeeper() {
  const el = document.getElementById("scoreKeeper");
  if (!el) return;

  // ⭐ Level 1
  if (window.currentLevel === 1) {
    const total = window.level1TotalRounds || TOTAL_ROUNDS;
    const text = `${level1Score} / ${total}`;

    if (el.textContent !== text) {
      el.textContent = text;
    }

    console.log("📊 updateScoreKeeper (L1)", {
      level1Score,
      level1Round,
      total,
      text
    });

    return;
  }

  // ⭐ Level 2
  if (window.currentLevel === 2) {
    const total = window.level2TotalRounds || window.level2Sentences?.length || 0;
    const text = `${level2Score} / ${total}`;

    if (el.textContent !== text) {
      el.textContent = text;
    }

    console.log("📊 updateScoreKeeper (L2)", {
      level2Score,
      level2Round,
      total,
      text
    });

    return;
  }
}





// -----------------------------
// Timer
// -----------------------------
L1.createAndWireLevel1ReplayButton = function(currentAudioChunks) {
  const oldBtn = document.getElementById("l1ReplayBtn");
  if (oldBtn) oldBtn.remove();

  const btn = document.createElement("button");
  btn.id = "l1ReplayBtn";
  btn.className = "iconBtn replay-top";
  btn.textContent = "🔁 Replay";

  const screen2 = document.getElementById("level1Screen2");
  if (!screen2) return;
  screen2.appendChild(btn);

  btn.onclick = () => {

    if (window.currentLevel !== 1) return;

    stopAllAudio();

    window.audioCancelToken.cancel = false;
    window.audioGeneration++;
    L1._locked = false;

    // ⭐ DO NOT re-enter screen2
    // ⭐ DO NOT restart the timer
    // ⭐ Only restart audio

    playChunkSequence(
      0,
      () => {
        if (window.currentLevel !== 1) return;
        // ⭐ Replay finished — do nothing else
      },
      currentAudioChunks
    );
  };
};








// ---------------------------------------------------------
// TIMER MODULE FOR SCREEN 2
// ---------------------------------------------------------
function startLevel1Screen2Timer(onExpire) {
  let timeLeft = 30;

  const timerEl = document.getElementById("screen2Timer");
  console.log("TIMER ELEMENT:", timerEl);  // ✔ SAFE HERE

  if (timerEl) timerEl.textContent = timeLeft;

  if (window.screen2TimerInterval) {
    clearInterval(window.screen2TimerInterval);
  }

  window.screen2TimerInterval = setInterval(() => {
    timeLeft--;
    if (timerEl) timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(window.screen2TimerInterval);
      onExpire();
    }
  }, 1000);
}





// -----------------------------
// SHUFFLE UTILITIES
// -----------------------------

// Pure Fisher–Yates shuffle (never mutates original)
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Track last scramble pattern to avoid repeats
let lastScrambleKey = "";

/*
  Returns a *visual-only* scrambled array.
  - Does NOT modify sentence.chunks
  - Audio order stays correct (uses original)
  - Drag/drop stays correct (dataset.index uses original index)
*/

function getScrambledChunksForScreen2(sentence) {
  // ⭐ NEVER touch sentence.chunks directly
  const original = [...sentence.chunks];   // clone for safety

  // ⭐ Scramble a SEPARATE array
  let scrambled = shuffleArray(original);

  // Build a pattern key like "2-0-3-1"
  let key = scrambled
    .map(chunk => sentence.chunks.indexOf(chunk))
    .join("-");

  // Prevent identical scramble twice in a row
  if (key === lastScrambleKey) {
    scrambled = shuffleArray(original);
    key = scrambled
      .map(chunk => sentence.chunks.indexOf(chunk))
      .join("-");
  }

  lastScrambleKey = key;

  // ⭐ Return scrambled VISUALS ONLY
  return scrambled;
}

function cleanupDragModule() {
  if (DragModule && typeof DragModule.reset === "function") {
    DragModule.reset();
  }

  // Safety: remove any lingering onComplete handlers
  DragModule.onComplete = null;
}


/* ----------------------------------------------------------
   GLOBAL AUDIO SAFETY (UPDATED + STRONGER)
---------------------------------------------------------- */

/* ----------------------------------------------------------
   GLOBAL AUDIO STATE (DEFINE ONCE, AT TOP OF FILE)
---------------------------------------------------------- */


// ⭐ HARD KILL SWITCH — stops ALL audio instantly

/*------------------------------------------------------------------------
Stop All Audio
-----------------------------------------------------------------------------*/



// 🔹 HARD KILL SWITCH — stops ALL audio immediately
/* ----------------------------------------------------------
   GLOBAL AUDIO KILL SWITCH — FINAL VERSION
---------------------------------------------------------- */

/* ----------------------------------------------------------
   ⭐ LEVEL 1 PROGRESS RENDERER
---------------------------------------------------------- */
/* ----------------------------------------------------------
   ⭐ LEVEL 1 PROGRESS RENDERER (NO HTML CHANGES REQUIRED)
---------------------------------------------------------- */


L1.renderProgress = function (screenId) {
  const screen = document.getElementById(screenId);
  if (!screen) return;

  const { total, completed, percent } = Progress.getLevelProgress("level1");

  // Reuse or create wrapper
  let wrapper = screen.querySelector(".l1-progress-wrapper");
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.className = "l1-progress-wrapper";
    wrapper.style.marginBottom = "20px";

    wrapper.innerHTML = `
      <div class="l1-progress-label"
           style="font-size: 18px; margin-bottom: 6px; color: #fff; text-align: center;">
      </div>

      <div class="l1-progress-outer"
           style="width: 100%; height: 10px; background: #333; border-radius: 6px; overflow: hidden;">
        <div class="l1-progress-bar"
             style="height: 100%; width: 0%; background: #4caf50; transition: width 0.3s ease;">
        </div>
      </div>
    `;
  }

  // Insert wrapper once
  if (!wrapper.parentNode) {
    const title = screen.querySelector(".title");
    if (title) {
      title.insertAdjacentElement("afterend", wrapper);
    } else {
      screen.prepend(wrapper);
    }
  }

  // Update UI
  wrapper.querySelector(".l1-progress-bar").style.width = percent + "%";
  wrapper.querySelector(".l1-progress-label").textContent =
    `Progress: ${completed} / ${total}`;
};



L1.Reset = {
  attach(screenEl, screenName) {
    if (!screenEl) return;

    if (screenName !== "screen1") return;

    let btn = screenEl.querySelector(".resetBtn");

    if (!btn) {
      btn = document.createElement("button");
      btn.className = "resetBtn";
      btn.textContent = "Reset Level";

      btn.style.position = "absolute";
      btn.style.top = "10px";
      btn.style.right = "10px";
      btn.style.zIndex = "9999";

      screenEl.appendChild(btn);
    }

    btn.style.display = "block";

    if (!btn.dataset.wired) {
      btn.dataset.wired = "true";

      btn.onclick = () => {
        stopAllAudio();
        Progress.resetLevel("level1");

        // Restart Level 1 using the correct entry point
        setTimeout(() => {
          level1();
        }, 0);
      };
    }
  }
};





/* ----------------------------------------------------------
   ⭐ PLAY FILE PATHS IN ORDER (Screen 1)
---------------------------------------------------------- */
function playChunksInOrder(chunkList, onComplete) {
  // ⭐ Hard stop any leftover audio
  //stopAllAudio();

  // ⭐ Reset cancel + increment generation (audio only)
  window.audioCancelToken.cancel = false;
  window.audioGeneration++;
  const myGen = window.audioGeneration;

  let index = 0;

  function playNext() {
    // ⭐ Guard audio only — do NOT block transitions
    if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;

    if (index >= chunkList.length) {
      if (!window.audioCancelToken.cancel &&
          myGen === window.audioGeneration &&
          typeof onComplete === "function") {
        onComplete();
      }
      return;
    }

    const file = chunkList[index];
    const audio = new Audio(file);
    window.screen2Audio = audio;

    audio.onended = () => {
      if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;
      index++;
      playNext();
    };

    audio.onerror = () => {
      if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;
      index++;
      playNext();
    };

    audio.play().catch(() => {
      if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;
      index++;
      playNext();
    });
  }

  playNext();
}


/* ----------------------------------------------------------
   ⭐ PLAY CHUNK OBJECTS IN SEQUENCE (Screen 2+)
---------------------------------------------------------- */
let currentChunks = [];
let correctDrops = 0;

// ---------------------------------------------------------
// AUDIO SEQUENCE (ALWAYS USES audioArray)
// ---------------------------------------------------------
function playChunkSequence(i = 0, callback, audioArray = currentAudioChunks) {
  const myGen = window.audioGeneration;

  // ⭐ Correct: guard at the top
  if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;

  if (window.currentChunkAudio) {
    try {
      window.currentChunkAudio.pause();
      window.currentChunkAudio.onended = null;
      window.currentChunkAudio.onerror = null;
    } catch (e) {}
    window.currentChunkAudio = null;
  }

  if (i >= audioArray.length) {
    // ⭐ Correct: guard callback only
    if (!window.audioCancelToken.cancel &&
        myGen === window.audioGeneration &&
        typeof callback === "function") {
      callback();
    }
    return;
  }

  const chunk = audioArray[i];
  const voice = Math.random() < 0.5 ? "daughter" : "me";
  const file = chunk.audio?.[voice];

  const audio = new Audio(file);
  window.currentChunkAudio = audio;

  let safety = setTimeout(() => {
    // ⭐ Correct: guard safety timeout
    if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;
    playChunkSequence(i + 1, callback, audioArray);
  }, 10000);

  audio.onended = () => {
    // ⭐ Correct: guard onended
    if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;
    clearTimeout(safety);
    playChunkSequence(i + 1, callback, audioArray);
  };

  audio.onerror = () => {
    // ⭐ Correct: guard onerror
    if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;
    clearTimeout(safety);
    playChunkSequence(i + 1, callback, audioArray);
  };

  audio.play().catch(() => {
    // ⭐ Correct: guard play() failure
    if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;
    clearTimeout(safety);
    playChunkSequence(i + 1, callback, audioArray);
  });

  if (i === 0) return audio;
}



/* ----------------------------------------------------------
   ⭐ SCREEN SYSTEM
---------------------------------------------------------- */
function showScreen(id) {
console.log("[showScreen] switching to:", id);

  console.log(`[showScreen] switching to: ${id}`);

  // Hide all screens FIRST
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });

  // ⭐ Reset level state ONLY when returning to level-select screen
if (id === "screen0") {
  window.currentLevel = 0;
}

  // SPECIAL CASE — Route ONLY Level 7 screens to L7.show()
  if (
    id === "level7Screen1" ||
    id === "level7Screen2" ||
    id === "level7Screen3" ||
    id === "level7Screen4"
  ) {
    return L7.show(id);
  }

  // Hide Level 7 wrapper when switching to non-Level-7
  const l7Wrapper = document.getElementById("level7Wrapper");
  if (l7Wrapper) l7Wrapper.classList.add("hidden");

  // Track previous screen BEFORE changing it
  const previousScreen = window.currentScreen;
  window.currentScreen = id;

  // Kill timer ONLY when leaving Screen 2
  if (previousScreen === "screen2" && window.screen2TimerInterval) {
    clearInterval(window.screen2TimerInterval);
    window.screen2TimerInterval = null;
  }

  // Screen 4 cleanup
  if (id === 'screen4' && typeof cleanupDragModule === 'function') {
    cleanupDragModule();
    const homeBtn = document.getElementById('sessionHomeBtn');
    if (homeBtn) homeBtn.onclick = () => showScreen('screen0');
  }

  // ⭐ LEVEL 11 → ensure Level 12 UI is hidden
  if (id === "level11Screen") {
    const l12Input = document.getElementById("l12InputArea");
    if (l12Input) l12Input.style.display = "none";

    const l11Input = document.getElementById("l11InputArea");
    if (l11Input) l11Input.style.display = "flex";
  }

  // ⭐ LEVEL 12 → ensure Level 11 UI is hidden
  if (id === "level12Screen") {
    const l11Input = document.getElementById("l11InputArea");
    if (l11Input) l11Input.style.display = "none";

    const l11End = document.getElementById("l11EndControls");
    if (l11End) l11End.classList.add("hidden");

    const l12Input = document.getElementById("l12InputArea");
    if (l12Input) l12Input.style.display = "flex";
  }

  // Show the requested screen
  document.getElementById(id).classList.remove('hidden');

  // Replay button visibility logic
  const replayBtn = document.getElementById("replaySentenceBtn");
  if (replayBtn) {
    if (id === "screen2" && (window.currentLevel === 1 || window.currentLevel === 2)) {
      replayBtn.style.display = "block";
    } else {
      replayBtn.style.display = "none";
    }
  }
}






/* ----------------------------------------------------------
   ⭐ DRAG MODULE (Shared)
---------------------------------------------------------- */
const DragModule = {
  onComplete: null,
  completed: false,

  setupDropLines(numLines) {
    const drop = document.getElementById("dropLines");
    drop.innerHTML = "";

    for (let i = 0; i < numLines; i++) {
      const line = document.createElement("div");
      line.className = "dropLine";
      line.dataset.index = i;
      line.textContent = "";

      line.ondragover = e => e.preventDefault();
      line.ondrop = DragModule.dropChunk;

      drop.appendChild(line);
    }

    DragModule.completed = false; // reset per round
  },

  dropChunk(e) {
    e.preventDefault();
    if (DragModule.completed) return;

    const chunkIndex = Number(e.dataTransfer.getData("chunkIndex"));
    const lineIndex = Number(e.target.dataset.index);

    if (chunkIndex === lineIndex) {
      DragModule.markCorrect(e.target);
    } else {
      alert("Try again");
    }
  },

  enableTouchForChunks() {
    const chunks = document.querySelectorAll(".chunkBtn");

    chunks.forEach(btn => {
      btn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        if (DragModule.completed) return;

        const chunkIndex = Number(btn.dataset.index);
        const requiredIndex = correctDrops;

        if (chunkIndex !== requiredIndex) {
          alert("Try again");
          return;
        }

        const dropLines = document.querySelectorAll(".dropLine");
        const targetLine = [...dropLines].find(
          line => Number(line.dataset.index) === chunkIndex
        );

        if (targetLine) {
          DragModule.simulateDrop(chunkIndex, targetLine);
        }

      }, { passive: false });
    });
  },

  simulateDrop(chunkIndex, lineElement) {
    if (DragModule.completed) return;

    const lineIndex = Number(lineElement.dataset.index);

    if (chunkIndex === lineIndex) {
      DragModule.markCorrect(lineElement);
    } else {
      alert("Try again");
    }
  },

  markCorrect(lineElement) {
    if (DragModule.completed) return;
    if (lineElement.classList.contains("correct")) return;

    lineElement.classList.add("correct");
    lineElement.textContent = "✔";

    correctDrops++;
    level1Score++;
    updateScoreKeeper();

    if (correctDrops === currentChunks.length) {
      DragModule.completed = true;

      // Call onComplete immediately, no delay, no overwrite
      if (typeof DragModule.onComplete === "function") {
        DragModule.onComplete();
      }
    }
  }
};





function renderSummaryScreen(sentence, nextLevelFn, correctDrops = null, audioChunks = null) {

  // ⭐ Kill leftover Level 1 audio immediately
  window.audioCancelToken.cancel = true;

  if (typeof nextLevelFn !== "function") {
    console.warn("⚠️ nextLevelFn missing, using fallback");
    nextLevelFn = () => {};
  }

  stopAllAudio();
  showScreen("screen3");

  if (window.Progress && typeof Progress.markSentenceComplete === "function") {
    Progress.markSentenceComplete("level1", sentence.id);
  }

  if (window.L1 && typeof L1.renderProgress === "function") {
    L1.renderProgress("screen3");
  }

  document.getElementById("meaningBox").textContent = sentence.meaning;

  const correctDropsElement = document.getElementById("summaryCorrectDrops");
  if (correctDropsElement) {
    correctDropsElement.textContent = `Correct Drops: ${Number(correctDrops) || 0}`;
  }

  const container = document.getElementById("summaryContainer");
  container.innerHTML = "";

  sentence.chunks.forEach(chunk => {
    const row = document.createElement("div");
    row.className = "summary-row";

    row.innerHTML = `
      <div class="summary-hiragana">${chunk.hiragana}</div>
      <div class="summary-romaji">${chunk.romaji}</div>
      <div class="summary-english">${chunk.meaning}</div>
    `;

    container.appendChild(row);
  });

  document.getElementById("screen3ReplayBtn").onclick = () => {
    stopAllAudio();
    window.audioCancelToken.cancel = false;

    if (!audioChunks || audioChunks.length === 0) {
      console.warn("No audio chunks found for Level 1 Screen 3 replay");
      return;
    }

    window.currentAudioChunks = audioChunks;
    playChunkSequence(0, () => {});
  };

  document.getElementById("screen3NextBtn").onclick = () => {
    if (level1Round >= TOTAL_ROUNDS) {
      showLevel1FinalSummary();
      return;
    }

    nextLevelFn();
  };
}




/*------------------------------------------------------------------------------
Score summary screen
--------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------
Score summary screen
--------------------------------------------------------------------------------*/
function showLevel1FinalSummary() {
  stopAllAudio();

  // ⭐ Kill any leftover Level 1 audio callbacks
  window.audioCancelToken.cancel = true;

  showScreen("screen4");

  // ⭐ Lifetime progress bar (Level 1)
  if (window.L1 && typeof L1.renderProgress === "function") {
    L1.renderProgress("screen4");
  }

  // Session-only stats (these stay as-is)
  const roundsEl = document.getElementById("sessionRounds");
  const scoreEl = document.getElementById("sessionScore");
  const dropsEl = document.getElementById("sessionDrops");

  if (roundsEl) roundsEl.textContent = level1Round;
  if (scoreEl) scoreEl.textContent = level1Score;
  if (dropsEl) dropsEl.textContent = Number(correctDrops) || 0;
}








/* ==========================================================
   ⭐ LEVEL 1 MODULE — CHUNK PUZZLE
========================================================== */

function level1() {
  stopAllAudio();

  window.currentLevel = 1;

  document.getElementById("replaySentenceBtn").classList.add("hidden");

  // Reset session stats
  level1Score = 0;
  level1Round = 0;

  // ⭐ Compute Level 1 sentences BEFORE updating score
  const level1Sentences = sentences.filter(s => s.level === 1);

  if (window.Progress && typeof Progress.setTotal === "function") {
    Progress.setTotal("level1", level1Sentences.length);
  }

  // ⭐ Set the REAL denominator BEFORE calling updateScoreKeeper
  window.level1TotalRounds = level1Sentences.length;

  // ⭐ NOW update the UI — denominator is correct
  updateScoreKeeper();

  level1_screen1();
}




function level1_screen1() {
  // Hard stop any leftover audio
  stopAllAudio();

  showScreen("screen1");

  // Ensure total is set even if level1() was bypassed
  const level1Sentences = sentences.filter(s => s.level === 1);
  Progress.setTotal("level1", level1Sentences.length);

  const screenEl = document.getElementById("screen1");
  L1.Reset.attach(screenEl, "screen1");

  // ⭐ Update lifetime progress bar on Screen 1
  L1.renderProgress("screen1");

  // ⭐ New round begins (session-only)
  level1Round++;
  updateScoreKeeper();

  // Reset cancel + increment generation (audio only)
  window.audioCancelToken.cancel = false;
  window.audioGeneration++;

  const level = 1;
  const levelSentences = sentences.filter(s => s.level === level);
  const sentence = levelSentences[Math.floor(Math.random() * levelSentences.length)];
  L1.currentSentence = sentence;

  const chunkFiles = sentence.chunks.map(chunk => {
    const voice = Math.random() < 0.5 ? "daughter" : "me";
    return chunk.audio[voice];
  });

  // ⭐ FIXED: Level 1 audio callback no longer leaks into Level 2
  playChunksInOrder(chunkFiles, () => {

    // ⭐ Kill callback if we are no longer on Screen 1
    if (window.currentScreen !== "screen1") return;

    // ⭐ Kill callback if Level 1 is no longer active
    if (window.currentLevel !== 1) return;

    setTimeout(() => {

      // ⭐ Double-guard inside timeout
      if (window.currentScreen !== "screen1") return;
      if (window.currentLevel !== 1) return;

      level1_screen2(sentence);

    }, 600);

  }); // ← Correct closing brace
}





function level1_screen2(sentence) {

  // ⭐ Store sentence for replay callback (non‑logic fix)
  L1.currentSentenceObj = sentence;

  // ⭐ Kill leftover Level 1 audio immediately
  window.audioCancelToken.cancel = true;

  console.log("🔥 ENTER level1_screen2");
  console.log("Sentence ID:", sentence.id);

  // Stop any audio from Screen 1
  stopAllAudio();

  // Switch UI
  showScreen("screen2");

  // Update lifetime progress bar
  L1.renderProgress("screen2");

  // Reset counters
  correctDrops = 0;

  // Prepare scrambled chunks
  currentChunks = getScrambledChunksForScreen2(sentence);

  // Render draggable chunk buttons
  const chunkContainer = document.getElementById("chunkContainer");
  chunkContainer.innerHTML = "";

  currentChunks.forEach(chunk => {
    const btn = document.createElement("button");
    btn.className = "chunkBtn";
    btn.textContent = chunk.hiragana;
    btn.dataset.index = chunk.originalIndex;

    btn.draggable = true;
    btn.ondragstart = e => {
      e.dataTransfer.setData("chunkIndex", chunk.originalIndex);
    };

    chunkContainer.appendChild(btn);
  });

  // Reset DragModule state
  cleanupDragModule();
  DragModule._fired = false;

  // Setup drop lines
  DragModule.setupDropLines(sentence.chunks.length);

  // Enable touch support
  DragModule.enableTouchForChunks();

  // Prepare audio chunks for replay
  const currentAudioChunks = sentence.chunks.map(c => ({ ...c }));

  // Create + wire Level 1 replay button
  L1.createAndWireLevel1ReplayButton(currentAudioChunks);

  // ⭐ Debounced completion handler
  DragModule.onComplete = () => {

    if (DragModule._fired) return;
    DragModule._fired = true;

    // Stop timer
    if (window.screen2TimerInterval) {
      clearInterval(window.screen2TimerInterval);
      window.screen2TimerInterval = null;
    }

    // ⭐⭐⭐ LIFETIME PROGRESS UPDATE
    console.log("✔️ Marking sentence complete:", sentence.id);
    Progress.markSentenceComplete("level1", sentence.id);

    // Go to summary
    renderSummaryScreen(sentence, level1_screen1, correctDrops, currentAudioChunks);

  };

  // ⭐ Start 30s timer
  startLevel1Screen2Timer(() => {
    console.log("⏰ Screen2 timer expired → forcing completion");
    DragModule.onComplete();
  });
}









/* ==========================================================
   ⭐ LEVEL 2 MODULE — ARRANGE MODE
========================================================== */

/* ==========================================================
   ⭐ LEVEL 2 — MCQ MODE
   Uses: universal Screen 1 (audio-only), Screen 2 (MCQ),
         Screen 3 (summary), Screen 4 (score)
========================================================== */

/* ==========================================================
   ⭐ LEVEL 2 MODULE — FULLY ISOLATED
   No shared globals, no shared handlers, no shared functions.
========================================================== */

/* ==========================================================
   ⭐ LEVEL 2 — ISOLATED GLOBAL STATE
   (No sharing with Level 1 or any other level)
========================================================== */
const level2Sentences = [
  {
    id: "l2_001",
    sentence: "Podemos quedarnos en el parque pero va a llover.",
    conjunction: "pero",
    meaning: "We can stay in the park, but it's going to rain.",

    fullAudio: "audio/spanish/conjunction1.wav",  // ← STRING

    chunks: [
      {
        audio: {
          me: "audio/spanish/conjunction1.wav",
          daughter: "audio/spanish/conjunction1.wav"
        }
      }
    ]
  },











  





  

{
  id: "l2_002",
  sentence: "Mañana hay un examen entonces voy a ir estudiar ahora.",
  conjunction: "entonces",
  meaning: "There’s an exam tomorrow, so I'm going to go study now.",

  fullAudio: "audio/spanish/conjunction2.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction2.wav",
        daughter: "audio/spanish/conjunction2.wav"
      }
    }
  ]
},














{
  id: "l2_003",
  sentence: "Se me olvidó la cartera y por eso regreso a la casa.",
  conjunction: "por eso",
  meaning: "I forgot my wallet, and that's why I'm going back home.",

  fullAudio: "audio/spanish/conjunction3.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction3.wav",
        daughter: "audio/spanish/conjunction3.wav"
      }
    }
  ]
},















{
  id: "l2_004",
  sentence: "No hay señal, por eso el teléfono no sirve.",
  conjunction: "por eso",
  meaning: "There’s no signal, that's why the phone doesn’t work.",

  fullAudio: "audio/spanish/conjunction4.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction4.wav",
        daughter: "audio/spanish/conjunction4.wav"
      }
    }
  ]
},















{
  id: "l2_005",
  sentence: "Quiero mejorar en japonés, por eso practico a diario.",
  conjunction: "por eso",
  meaning: "I want to improve my Japanese, that's why I practice daily.",

  fullAudio: "audio/spanish/conjunction5.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction5.wav",
        daughter: "audio/spanish/conjunction5.wav"
      }
    }
  ]
},










{
  id: "l2_006",
  sentence: "Aunque esté lloviendo, él salió a caminar.",
  conjunction: "aunque",
  meaning: "Even though it's raining, he went out for a walk.",

  fullAudio: "audio/spanish/conjunction6.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction6.wav",
        daughter: "audio/spanish/conjunction6.wav"
      }
    }
  ]
},


















];









const L2 = {
  round: 0,
  score: 0,
  TOTAL_ROUNDS: 4,

  dataset: level2Sentences,
  currentSentence: null,
  activeScreen: null,

  mcqLocked: false,

  audio: {
    cancelToken: { cancel: false },
    generation: 0,
    current: null
  }
};

L2.stopAllAudio = function () {
  L2.audio.cancelToken.cancel = true;
  L2.audio.generation++;

  if (L2.audio.current) {
    try {
      L2.audio.current.pause();
      L2.audio.current.currentTime = 0;
    } catch (e) {}
    L2.audio.current = null;
  }
};

L2.setCurrentSentence = function (sentenceObj) {
  if (!sentenceObj) {
    console.error("L2.setCurrentSentence called with invalid sentence:", sentenceObj);
    return;
  }

  L2.currentSentence = sentenceObj;
};

L2.getCurrentSentence = function () {
  return L2.currentSentence || null;
};


L2.updateScoreKeeper = function () {
  const roundsEl = document.getElementById("l2SessionRounds");
  const scoreEl = document.getElementById("l2SessionScore");
  const correctEl = document.getElementById("l2SessionCorrect");

  if (roundsEl) roundsEl.textContent = L2.round;
  if (scoreEl) scoreEl.textContent = L2.score;
  if (correctEl) correctEl.textContent = L2.correct;
};




document.getElementById("l2PlayAgainBtn")?.addEventListener("click", () => {
  L2.mcqLocked = false;

  if (L2.audio && L2.audio.cancelToken) {
    L2.audio.cancelToken.cancel = true;
  }
  if (L2.audio) {
    L2.audio.generation++;
    L2.audio.current = null;
  }

  L2.stopAllAudio();

  L2.round = 0;
  L2.score = 0;

  L2.show("level2Screen1");
  L2.startRound();
});

document.getElementById("l2HomeBtn")?.addEventListener("click", () => {
  L2.mcqLocked = true;

  if (L2.audio && L2.audio.cancelToken) {
    L2.audio.cancelToken.cancel = true;
  }
  if (L2.audio) {
    L2.audio.generation++;
    L2.audio.current = null;
  }

  L2.stopAllAudio();

  showScreen("screen0");
});


L2.playNaturalSentence = function (callback) {
  const s = L2.getCurrentSentence();
  console.log("[Level2] playNaturalSentence() sentence:", s);

  if (!s || !s.fullAudio) {
    console.log("[Level2] No fullAudio, calling callback immediately");
    if (typeof callback === "function") callback();
    return;
  }

  const audio = new Audio(s.fullAudio);
  L2.audio.current = audio;

  audio.onended = () => {
    console.log("[Level2] audio ended");
    if (typeof callback === "function") callback();
  };

  audio.onerror = (e) => {
    console.log("[Level2] audio error", e);
    if (typeof callback === "function") callback();
  };

  audio.play().then(() => {
    console.log("[Level2] audio playing:", s.fullAudio);
  }).catch(err => {
    console.log("[Level2] audio play() failed:", err);
    if (typeof callback === "function") callback();
  });
};






L2.show = function (id) {
  // Hide Level 4 explanation if present
  const l4Box = document.getElementById("level4ExplanationBox");
  if (l4Box) l4Box.classList.add("hidden");

  // Hide ALL Level 2 screens
  document.querySelectorAll(".level2-screen")
    .forEach(el => el.classList.add("hidden"));

  // LEVEL 2 SCREENS
  if (id.startsWith("level2")) {

    // Show wrapper
    const wrapper = document.getElementById("level2Wrapper");
    if (wrapper) wrapper.classList.remove("hidden");

    // Show the specific Level 2 screen
    const target = document.getElementById(id);
    if (target) target.classList.remove("hidden");

    return;
  }

  // UNIVERSAL SUMMARY SCREEN (screen3)
  if (id === "screen3") {
    document.getElementById("level2Wrapper")?.classList.add("hidden");

    document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
    document.getElementById("screen3")?.classList.remove("hidden");
    return;
  }
};



L2.startRound = function () {
  console.log(`[Level2] startRound() — Round ${L2.round + 1}`);

  // Reset audio state
  L2.stopAllAudio();
  L2.audio.cancelToken.cancel = false;
  L2.audio.generation++;

  L2.mcqLocked = false;

  // ⭐ Randomize sentence every round
  const sentence = L2.dataset[Math.floor(Math.random() * L2.dataset.length)];

  // ⭐ Always store the full object
  L2.setCurrentSentence(sentence);

  // Show Screen 1 (natural sentence audio)
  L2.screen1();

  // ⭐ Wrap-around increment
  L2.round++;
  if (L2.round >= L2.dataset.length) {
    L2.round = 0;
  }
};





L2.screen1 = function () {
  console.log("[Level2] screen1()");

  const replayBtn = document.getElementById("l2ReplaySentenceBtn");
  if (replayBtn) replayBtn.style.display = "none";

  if (typeof L2.stopAllAudio === "function") {
    L2.stopAllAudio();
  }

  if (L2.audio && L2.audio.cancelToken) {
    L2.audio.cancelToken.cancel = false;
  }

  if (L2.audio) {
    L2.audio.generation++;
    L2.audio.current = null;
  }

  const sentence = L2.dataset[Math.floor(Math.random() * L2.dataset.length)];
  L2.currentSentence = sentence;

  L2.show("level2Screen1");

  const screenEl = document.getElementById("level2Screen1");
  if (screenEl && L2.Reset && typeof L2.Reset.attach === "function") {
    L2.Reset.attach(screenEl, "screen1");
  }

  if (typeof L2.renderProgress === "function") {
    L2.renderProgress("level2Screen1");
  }

  L2.playNaturalSentence(() => {

    // Guards
    if (window.currentScreen !== "level2Screen1") return;
    if (window.currentLevel !== 2) return;

    // ⭐ Give time to hear the audio
    // Use a longer delay — 1500ms is a good starting point
    setTimeout(() => {

      if (window.currentScreen !== "level2Screen1") return;
      if (window.currentLevel !== 2) return;

      L2.screen2();

    }, 1500); // ← increase this to give more time
  });
};







L2.conjunctionCategories = {
  contrast: ["pero", "sin embargo", "aunque"],
  cause: ["porque", "ya que", "puesto que"],
  sequence: ["luego", "entonces", "después"],
  addition: ["y", "además"],
  condition: ["si"]
};


L2.generateDistractors = function (correct) {
  const distractors = new Set();

  let categoryKey = null;
  for (const key in L2.conjunctionCategories) {
    if (L2.conjunctionCategories[key].includes(correct)) {
      categoryKey = key;
      break;
    }
  }

  const pool = [];
  for (const key in L2.conjunctionCategories) {
    if (key !== categoryKey) {
      pool.push(...L2.conjunctionCategories[key]);
    }
  }

  while (distractors.size < 3 && pool.length > 0) {
    const pick = pool[Math.floor(Math.random() * pool.length)];
    if (pick !== correct) distractors.add(pick);
  }

  return Array.from(distractors).slice(0, 3);
};


L2.screen2 = function () {
  L2.activeScreen = "screen2";
  console.log("[Level2] screen2()");

  L2.show("level2Screen2");

  requestAnimationFrame(() => {
    const replayBtn = document.getElementById("l2ReplaySentenceBtn");
    if (replayBtn) replayBtn.style.display = "inline-block";

    L2.mcqLocked = false;

    const s = L2.currentSentence;
    const mcqBox = document.getElementById("level2McqContainer");
    const sentenceLine = document.getElementById("level2SentenceLine");

    if (!sentenceLine) {
      console.warn("❌ level2SentenceLine missing from DOM");
      return;
    }

    sentenceLine.textContent = s.sentence.replace(s.conjunction, "_____");

    const distractors = L2.generateDistractors(s.conjunction);
    const allOptions = [s.conjunction, ...distractors];

    for (let i = allOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
    }

    mcqBox.innerHTML = "";
    allOptions.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "mcqBtn";
      btn.textContent = opt;
      btn.onclick = () => L2.handleMCQ(opt);
      mcqBox.appendChild(btn);
    });

    if (replayBtn) {
      replayBtn.onclick = () => {
        if (L2.mcqLocked) return;

        L2.stopAllAudio();
        L2.audio.cancelToken.cancel = false;
        L2.audio.generation++;

        L2.playNaturalSentence(() => {});
      };
    }
  });
};




L2.handleMCQ = function (choice) {
  if (L2.mcqLocked) return;
  L2.mcqLocked = true;

  const s = L2.currentSentence;        // full object
  const correct = s.conjunction;       // correct answer

  const normalize = str => str.trim().normalize("NFC");
  const isCorrect = normalize(choice) === normalize(correct);

  const buttons = document.querySelectorAll("#level2McqContainer .mcqBtn");

  // ⭐ Lock buttons + color feedback (same as Level‑6)
  buttons.forEach(btn => {
    btn.disabled = true;
    const val = normalize(btn.textContent.trim());
    if (val === normalize(correct)) {
      btn.classList.add("correct");    // green
    } else {
      btn.classList.add("wrong");      // red
    }
  });

  // ⭐ Correct answer logic
  if (isCorrect) {
    L2.score++;
    Progress3.markSentenceComplete("level2", s.id);
  }

  L2.updateScoreKeeper();

  // ⭐ Increment round
  L2.round++;

  // ⭐ Move to summary (Level‑6 style guard)
  setTimeout(() => {
    if (L2.activeScreen !== "screen2") return;
    L2.showRoundSummary();
  }, 900);
};



L2.showRoundSummary = function () {
  L2.activeScreen = "screen3";

  const s = L2.currentSentence;

  L2.stopAllAudio();

  L2.show("screen3");

  document.getElementById("meaningBox").textContent = s.meaning;

  document.getElementById("summaryCorrectDrops").textContent =
    `Correct Answer: ${s.conjunction}`;

  const cont = document.getElementById("summaryContainer");
  cont.innerHTML = "";

  const row = document.createElement("div");
  row.className = "summary-row";
  row.innerHTML = `
    <div class="summary-hiragana">${s.sentence}</div>
    <div class="summary-romaji">${s.conjunction}</div>
    <div class="summary-english">${s.meaning}</div>
  `;
  cont.appendChild(row);

  document.getElementById("screen3ReplayBtn").onclick = () => {
    L2.stopAllAudio();
    L2.audio.cancelToken.cancel = false;
    L2.audio.generation++;
    L2.audio.current = null;

    L2.playNaturalSentence(() => {});
  };

  document.getElementById("screen3NextBtn").onclick = () => {
    L2.mcqLocked = true;
    L2.stopAllAudio();

    document.getElementById("screen3")?.classList.add("hidden");

    document.getElementById("screen2L2")?.classList.remove("hidden");
    document.getElementById("level2Wrapper")?.classList.remove("hidden");

    if (L2.round >= L2.TOTAL_ROUNDS) {
      showLevel2FinalSummary();
      return;
    }

    L2.currentSentence = null;
    L2.startRound();
  };
};



function showLevel2FinalSummary() {
  L2.mcqLocked = true;

  if (L2.audio && L2.audio.cancelToken) {
    L2.audio.cancelToken.cancel = true;
  }

  if (L2.audio) {
    L2.audio.generation++;
    L2.audio.current = null;
  }

  if (typeof L2.stopAllAudio === "function") {
    L2.stopAllAudio();
  }

  L2.show("level2Screen4");

  document.getElementById("l2SessionRounds").textContent = L2.TOTAL_ROUNDS;
  document.getElementById("l2SessionScore").textContent = L2.score;
  document.getElementById("l2SessionCorrect").textContent = L2.score;
}



window.L2 = window.L2 || {};

L2.Reset = {
  attach(screenEl, screenName) {
    if (!screenEl) return;
    if (screenName !== "screen1") return;

    let btn = screenEl.querySelector(".resetBtn");

    if (!btn) {
      btn = document.createElement("button");
      btn.className = "resetBtn";
      btn.textContent = "Reset Level 2";

      btn.style.position = "absolute";
      btn.style.top = "10px";
      btn.style.right = "10px";
      btn.style.zIndex = "9999";

      screenEl.appendChild(btn);
    }

    btn.style.display = "block";

    if (!btn.dataset.wired) {
      btn.dataset.wired = "true";

      btn.onclick = () => {
        if (typeof L2.stopAllAudio === "function") {
          L2.stopAllAudio();
        }

        if (L2.audio && L2.audio.cancelToken) {
          L2.audio.cancelToken.cancel = true;
        }

        if (L2.audio) {
          L2.audio.generation++;
          L2.audio.current = null;
        }

        Progress3.resetLevel("level2");

        setTimeout(() => {
          L2.start();
        }, 0);
      };
    }
  }
};



L2.renderProgress = function (screenId) {
  const screen = document.getElementById(screenId);
  if (!screen) return;

  const p = Progress3.getLevelProgress("level2");
  const total = p.total;
  const current = p.completed;
  const pct = p.percent;

  let wrapper = document.getElementById("l2ProgressWrapper");
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.id = "l2ProgressWrapper";
    wrapper.style.marginBottom = "20px";

    wrapper.innerHTML = `
      <div id="l2ProgressLabel" style="
        font-size: 18px;
        margin-bottom: 6px;
        color: #fff;
        text-align: center;
      "></div>

      <div id="l2ProgressOuter" style="
        width: 100%;
        height: 10px;
        background: #333;
        border-radius: 6px;
        overflow: hidden;
      ">
        <div id="l2ProgressBar" style="
          height: 100%;
          width: 0%;
          background: #4caf50;
          transition: width 0.3s ease;
        "></div>
      </div>
    `;
  }

  const title = screen.querySelector(".title");
  if (title && !wrapper.parentNode) {
    title.insertAdjacentElement("afterend", wrapper);
  } else if (!wrapper.parentNode) {
    screen.prepend(wrapper);
  }

  document.getElementById("l2ProgressBar").style.width = pct + "%";
  document.getElementById("l2ProgressLabel").textContent =
    `Progress: ${current} / ${total}`;
};



L2.start = function () {
  console.log("[Level2] start()");

  L2.round = 0;
  L2.score = 0;
  L2.mcqLocked = false;
  L2.currentSentence = null;

  if (Array.isArray(L2.dataset)) {
    Progress3.setTotal("level2", L2.dataset.length);
  }

  if (typeof L2.stopAllAudio === "function") {
    L2.stopAllAudio();
  }

  if (L2.audio && L2.audio.cancelToken) {
    L2.audio.cancelToken.cancel = false;
  }

  // ⭐ REMOVE THIS — it breaks screen1
  // document.getElementById("level2Wrapper")?.classList.remove("hidden");

  document.getElementById("level3Wrapper")?.classList.add("hidden");
  document.getElementById("level1Screen2")?.classList.add("hidden");

  L2.startRound();
};







/* ==========================================================
   ⭐ LEVEL 3 MODULE — ARRANGE MODE
========================================================== */

/* ==========================================================
   ⭐ LEVEL 3 — MCQ MODE
   Uses: universal Screen 1 (audio-only), Screen 2 (MCQ),
         Screen 3 (summary), Screen 4 (score)
========================================================== */

/* ==========================================================
   ⭐ LEVEL 3 MODULE — FULLY ISOLATED
   No shared globals, no shared handlers, no shared functions.
========================================================== */

/* ==========================================================
   ⭐ LEVEL 3 — ISOLATED GLOBAL STATE
   (No sharing with Level 1 or any other level)
========================================================== */



const level3 = [
  {
    id: "es3-01",
    meaning: "Cuando escuchas un trueno y ves un rayo, ¿qué ocurre después?",
    level: 3,

    // ⭐ Spanish inference options (mirrors Japanese MCQ)
    options: [
      "Empieza a llover",
      "Hace calor",
      "Se hace de día",
      "No pasa nada"
    ],

    // ⭐ Underscore format (mirrors optionsRomaji)
    optionsRomaji: [
      "empieza_a_llover",
      "hace_calor",
      "se_hace_de_dia",
      "no_pasa_nada"
    ],

    // ⭐ English glosses (mirrors optionsEN)
    optionsEN: [
      "it starts to rain",
      "it gets hot",
      "it becomes daytime",
      "nothing happens"
    ],

    // ⭐ Correct answer
    correct: "Empieza a llover",

    // ⭐ Full-sentence audio (mirrors fullAudio)
    fullAudio: {
      daughter: "audio/spanish/inference1.wav",
      me:       "audio/spanish/inference1.wav"
    },

    // ⭐ Choice audio (mirrors choiceAudio)
    choiceAudio: {
      options: [
        ["spanish/audio/empieza_a_llover.wav"],
        ["spanish/audio/hace_calor.wav"],
        ["spanish/audio/se_hace_de_dia.wav"],
        ["spanish/audio/no_pasa_nada.wav"]
      ]
    },

    // ⭐ Meaning audio (mirrors meaningAudio)
    meaningAudio: [
      ["spanish/audio/empieza_a_llover.wav"],
      ["spanish/audio/hace_calor.wav"],
      ["spanish/audio/se_hace_de_dia.wav"],
      ["spanish/audio/no_pasa_nada.wav"]
    ],

    // ⭐ Chunk breakdown (mirrors Japanese chunks)
    chunks: [
      { spanish: "Cuando", english: "when" },
      { spanish: "escuchas un trueno", english: "you hear thunder" },
      { spanish: "y ves un rayo", english: "and you see lightning" },
      { spanish: "¿qué ocurre después?", english: "what happens next?" }
    ]
  }
];





/* ==========================================================
   ⭐ LEVEL 3 — CORE STATE
========================================================== */

const L3 = {
  round: 0,
  score: 0,
  TOTAL_ROUNDS: 3,

  dataset: level3,   // your Spanish Level‑3 inference dataset array
  currentSentence: null,
  currentSentenceObj: null,
  columnLocked: false,
  activeScreen: null,

  audio: {
    cancelToken: { cancel: false },
    generation: 0,
    current: null
  }
};


/* ==========================================================
   ⭐ LEVEL 3 — STORE CURRENT SENTENCE
========================================================== */

L3.setCurrentSentence = function (sentenceObj) {
  if (!sentenceObj || !sentenceObj.id) {
    console.error("L3.setCurrentSentence called with invalid sentence:", sentenceObj);
    return;
  }

  L3.currentSentence = sentenceObj.id;
  L3.currentSentenceObj = sentenceObj;
};

L3.getCurrentSentence = function () {
  return L3.currentSentence;
};


/* ==========================================================
   ⭐ LEVEL 3 — AUDIO SAFETY + GUARDS
========================================================== */

L3.stopAllAudio = function () {
  L3.audio.cancelToken.cancel = true;
  L3.audio.generation++;

  if (L3.audio.current) {
    try {
      L3.audio.current.pause();
      L3.audio.current.currentTime = 0;
    } catch (e) {}
  }
};

L3.generationGuards = function () {
  L3.audio.cancelToken.cancel = false;
  L3.audio.generation++;
  L3.audio.current = null;
};


/* ==========================================================
   ⭐ LEVEL 3 — PLAY SENTENCE (FULL AUDIO)
========================================================== */

L3.playSentence = function (callback, audioObj) {
  const myGen = ++L3.audio.generation;

  if (L3.audio.cancelToken.cancel) return;

  let file = audioObj?.me;
  if (!file) return;

  if (!L3.audio.current) {
    L3.audio.current = new Audio();
  }

  const audio = L3.audio.current;
  audio.src = file;

  const finish = () => {
    if (myGen !== L3.audio.generation) return;
    if (!L3.audio.cancelToken.cancel && typeof callback === "function") {
      callback();
    }
  };

  let safety = setTimeout(finish, 10000);

  audio.onended = () => {
    clearTimeout(safety);
    finish();
  };

  audio.onerror = () => {
    clearTimeout(safety);
    finish();
  };

  audio.play().catch(() => {
    clearTimeout(safety);
    finish();
  });
};


/* ==========================================================
   ⭐ LEVEL 3 — PROGRESS BAR
========================================================== */

L3.renderProgress = function (screenId) {
  const screen = document.getElementById(screenId);
  if (!screen) return;

  const p = Progress3.getLevelProgress("level3");
  const total = p.total;
  const current = p.completed;
  const pct = p.percent;

  let wrapper = document.getElementById("l3ProgressWrapper");
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.id = "l3ProgressWrapper";
    wrapper.style.marginBottom = "20px";

    wrapper.innerHTML = `
      <div id="l3ProgressLabel" style="
        font-size: 18px;
        margin-bottom: 6px;
        color: #fff;
        text-align: center;
      "></div>

      <div id="l3ProgressOuter" style="
        width: 100%;
        height: 10px;
        background: #333;
        border-radius: 6px;
        overflow: hidden;
      ">
        <div id="l3ProgressBar" style="
          height: 100%;
          width: 0%;
          background: #4caf50;
          transition: width 0.3s ease;
        "></div>
      </div>
    `;
  }

  const title = screen.querySelector(".title");
  if (title && !wrapper.parentNode) {
    title.insertAdjacentElement("afterend", wrapper);
  } else if (!wrapper.parentNode) {
    screen.prepend(wrapper);
  }

  document.getElementById("l3ProgressBar").style.width = pct + "%";
  document.getElementById("l3ProgressLabel").textContent =
    `Progreso: ${current} / ${total}`;
};


/* ==========================================================
   ⭐ LEVEL 3 — SHOW (SCREEN SWITCHER)
========================================================== */

L3.show = function (id) {
  document.querySelectorAll(".level3-screen")
    .forEach(el => el.classList.add("hidden"));

  if (id.startsWith("level3")) {
    document.getElementById("level3Wrapper")?.classList.remove("hidden");
    document.getElementById(id)?.classList.remove("hidden");
    return;
  }

  if (id === "screen0") {
    document.getElementById("level3Wrapper")?.classList.add("hidden");
    document.querySelectorAll(".screen")
      .forEach(s => s.classList.add("hidden"));
    document.getElementById("screen0")?.classList.remove("hidden");
    return;
  }
};


/* ==========================================================
   ⭐ LEVEL 3 — START
========================================================== */

L3.start = function () {
  console.log("[Level3] start()");

  L3.round = 0;
  L3.score = 0;
  L3.columnLocked = false;
  L3.currentSentence = null;
  L3.currentSentenceObj = null;

  L3.stopAllAudio();
  L3.audio.cancelToken.cancel = false;
  L3.audio.generation++;

  if (Array.isArray(L3.dataset)) {
    Progress3.setTotal("level3", L3.dataset.length);
  }

  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById("level3Wrapper")?.classList.remove("hidden");

  L3.startRound();
};


/* ==========================================================
   ⭐ LEVEL 3 — START ROUND
========================================================== */

L3.startRound = function () {
  console.log(`[Level3] startRound() — Round ${L3.round + 1}`);

  L3.stopAllAudio();
  L3.audio.cancelToken.cancel = false;
  L3.audio.generation++;

  L3.columnLocked = false;

  L3.screen1();
};


/* ==========================================================
   ⭐ LEVEL 3 — SCREEN 1 (AUDIO ONLY)
========================================================== */

L3.screen1 = function () {
  console.log("[Level3] screen1()");

  document.getElementById("level3Wrapper")?.classList.remove("hidden");
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));

  const replayBtn = document.getElementById("l3ReplaySentenceBtn");
  if (replayBtn) replayBtn.style.display = "none";

  L3.stopAllAudio();
  L3.audio.cancelToken.cancel = false;
  L3.audio.generation++;

  const sentence = L3.dataset[Math.floor(Math.random() * L3.dataset.length)];
  L3.setCurrentSentence(sentence);

  const audioObj = { me: sentence.fullAudio.me };

  L3.show("level3Screen1");
  L3.renderProgress("level3Screen1");

  if (!audioObj.me) {
    L3.screen2();
    return;
  }

  L3.audio.current = null;

  L3.playSentence(() => {
    L3.screen2();
  }, audioObj);
};


/* ==========================================================
   ⭐ LEVEL 3 — SCREEN 2 (INFERENCE)
========================================================== */

L3.screen2 = function () {
  L3.activeScreen = "screen2";
  console.log("[Level3] screen2()");

  const replayBtn = document.getElementById("l3ReplayBtn");
  if (replayBtn) replayBtn.style.display = "inline-block";

  L3.show("level3Screen2");
  L3.columnLocked = false;

  const s = L3.currentSentenceObj;

  document.getElementById("l3LeftColumn").textContent = s.meaning;

  const rightBox = document.getElementById("l3RightColumn");
  rightBox.innerHTML = "";

  const scrambled = [...s.options].sort(() => Math.random() - 0.5);

  scrambled.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "l3OptionBtn";
    btn.textContent = opt;

    btn.onclick = () => {
      if (L3.columnLocked) return;
      L3.handleColumnChoice(opt, btn);
    };

    rightBox.appendChild(btn);
  });

  replayBtn.onclick = () => {
    if (L3.columnLocked) return;

    L3.stopAllAudio();
    L3.audio.cancelToken.cancel = false;
    L3.audio.generation++;

    const audio = new Audio(s.fullAudio.me);
    L3.audio.current = audio;
    audio.play().catch(() => {});
  };

  L3.renderProgress("level3Screen2");
};


/* ==========================================================
   ⭐ LEVEL 3 — HANDLE INFERENCE CHOICE
========================================================== */

L3.handleColumnChoice = function (choice, btn) {
  if (L3.columnLocked) return;
  L3.columnLocked = true;

  const s = L3.currentSentenceObj;

  if (choice === s.correct) {
    btn.classList.add("l3-correct");
    L3.score++;

    Progress3.markSentenceComplete("level3", L3.currentSentence);
  } else {
    btn.classList.add("l3-wrong");

    const correctBtn = [...document.querySelectorAll(".l3OptionBtn")]
      .find(b => b.textContent === s.correct);

    if (correctBtn) correctBtn.classList.add("l3-correct");

    L3.dataset.push(s);
  }

  setTimeout(() => {
    if (L3.activeScreen !== "screen2") return;
    L3.showRoundSummary();
  }, 800);
};


/* ==========================================================
   ⭐ LEVEL 3 — ROUND SUMMARY
========================================================== */

L3.showRoundSummary = function () {
  L3.activeScreen = "screen3";
  console.log("[Level3] showRoundSummary()");

  const s = L3.currentSentenceObj;
  if (!s) return;

  L3.stopAllAudio();
  L3.show("level3Screen3");

  document.getElementById("l3MeaningBox").textContent = s.meaning;
  document.getElementById("l3SummaryCorrectDrops").textContent =
    `Respuesta correcta: ${s.correct}`;

  const cont = document.getElementById("l3SummaryContainer");
  cont.innerHTML = "";

  s.chunks.forEach(chunk => {
    const row = document.createElement("div");
    row.className = "summary-row";
    row.innerHTML = `
      <div class="summary-spanish">${chunk.spanish}</div>
      <div class="summary-english">${chunk.english}</div>
    `;
    cont.appendChild(row);
  });

  document.getElementById("l3SummaryNextBtn").onclick = () => {
    L3.round++;

    if (L3.round >= L3.TOTAL_ROUNDS) {
      showLevel3FinalSummary();
      return;
    }

    L3.currentSentence = null;
    L3.currentSentenceObj = null;

    L3.startRound();
  };
};


/* ==========================================================
   ⭐ LEVEL 3 — FINAL SUMMARY
========================================================== */

function showLevel3FinalSummary() {
  L3.columnLocked = true;

  L3.stopAllAudio();
  L3.audio.cancelToken.cancel = true;
  L3.audio.generation++;

  L3.show("level3Screen4");

  document.getElementById("l3FinalRounds").textContent = L3.TOTAL_ROUNDS;
  document.getElementById("l3FinalScore").textContent = L3.score;
  document.getElementById("l3FinalCorrect").textContent = L3.score;

  const replayBtn = document.getElementById("l3ReplaySummaryBtn");
  if (replayBtn) {
    replayBtn.onclick = () => {
      const s = L3.currentSentenceObj;
      if (!s) return;

      L3.stopAllAudio();
      L3.audio.cancelToken.cancel = false;
      L3.audio.generation++;

      L3.playSentence(() => {}, { me: s.fullAudio.me });
    };
  }

  const nextBtn = document.getElementById("l3PlayAgainBtn");
  if (nextBtn) {
    nextBtn.onclick = () => {
      L3.stopAllAudio();
      L3.audio.cancelToken.cancel = false;
      L3.audio.generation++;

      L3.round = 0;
      L3.score = 0;

      L3.startRound();
    };
  }

  const homeBtn = document.getElementById("l3HomeBtn");
  if (homeBtn) {
    homeBtn.onclick = () => {
      L3.exitToMenu();
    };
  }
}


/* ==========================================================
   ⭐ LEVEL 3 — EXIT TO MENU
========================================================== */

L3.exitToMenu = function () {
  console.log("[Level3] exitToMenu()");

  L3.stopAllAudio();
  L3.audio.cancelToken.cancel = true;
  L3.audio.generation++;

  document.getElementById("level3Screen1")?.classList.add("hidden");
  document.getElementById("level3Screen2")?.classList.add("hidden");
  document.getElementById("level3Screen3")?.classList.add("hidden");
  document.getElementById("level3Screen4")?.classList.add("hidden");

  document.getElementById("level3Wrapper")?.classList.add("hidden");

  document.getElementById("screen0")?.classList.remove("hidden");
};


/* ==========================================================
   ⭐ LEVEL 4 — BUTTON HANDLERS
========================================================== */

/* ==========================================================
   ⭐ LEVEL 4 MODULE — ARRANGE MODE
========================================================== */

/* ==========================================================
   ⭐ LEVEL 4 — MCQ MODE
   Uses: universal Screen 1 (audio-only), Screen 2 (MCQ),
         Screen 3 (summary), Screen 4 (score)
========================================================== */

/* ==========================================================
   ⭐ LEVEL 4 MODULE — FULLY ISOLATED
   No shared globals, no shared handlers, no shared functions.
========================================================== */

/* ==========================================================
   ⭐ LEVEL 4 — ISOLATED GLOBAL STATE
   (No sharing with Level 1 or any other level)
========================================================== */



/* ==========================================================
   ⭐ LEVEL 4 — CORE STATE (MIRRORED FROM LEVEL 8)
========================================================== */
const level4 = [
  {
    id: "L4-001",
    level: 4,

    spanish: "Quiero ir a la playa pero tengo que trabajar.",
    audio: "audio/spanish/paraphrase1.wav",

    paraphraseOptions: [
      { text: "Me gustaría ir a la playa, pero tengo obligaciones de trabajo.", correct: true },
      { text: "Voy a la playa después de terminar todo mi trabajo.", correct: false },
      { text: "No quiero ir a la playa porque tengo demasiado trabajo.", correct: false },
      { text: "Tengo tiempo libre y por eso voy a la playa.", correct: false },
      { text: "Prefiero trabajar en vez de ir a la playa.", correct: false }
    ],

    summaryChunks: [
      { spanish: "Quiero ir a la playa", english: "I want to go to the beach" },
      { spanish: "pero tengo que trabajar", english: "but I have to work" }
    ],

    meaning: "I want to go to the beach, but I have to work."
  }












];













const L4 = {
  round: 0,
  score: 0,
  TOTAL_ROUNDS: 3,

  dataset: level4,   // your Level‑4 dataset array
  currentSentence: null,
  currentSentenceObj: null,

  columnLocked: false,
  activeScreen: null,

  audio: {
    cancelToken: { cancel: false },
    generation: 0,
    current: null
  }
};

L4.lastScramble = null;


/* ==========================================================
   ⭐ LEVEL 4 — STOP ALL AUDIO
========================================================== */
L4.stopAllAudio = function () {
  L4.audio.cancelToken.cancel = true;
  L4.audio.generation++;

  if (L4.audio.current) {
    try {
      L4.audio.current.pause();
      L4.audio.current.currentTime = 0;
    } catch (e) {}
    L4.audio.current = null;
  }
};


/* ==========================================================
   ⭐ LEVEL 4 — GENERATION GUARDS
========================================================== */
L4.generationGuards = function () {
  L4.audio.cancelToken.cancel = false;
  L4.audio.generation++;
  L4.audio.current = null;
};


/* ==========================================================
   ⭐ LEVEL 4 — SET / GET CURRENT SENTENCE
========================================================== */
L4.setCurrentSentence = function (sentenceObj) {
  if (!sentenceObj || !sentenceObj.id) {
    console.error("L4.setCurrentSentence called with invalid sentence:", sentenceObj);
    return;
  }

  L4.currentSentence = sentenceObj.id;
  L4.currentSentenceObj = sentenceObj;
};

L4.getCurrentSentence = function () {
  return L4.currentSentenceObj;
};


/* ==========================================================
   ⭐ LEVEL 4 — SCRAMBLER (SPANISH)
========================================================== */
function scrambleSentencesLevel4(options, lastOrder) {
  let arr = [...options];

  // Proper Fisher–Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Prevent identical order
  if (lastOrder) {
    const newOrder = arr.map(o => o.text).join("|");
    const oldOrder = lastOrder.join("|");

    if (newOrder === oldOrder) {
      return scrambleSentencesLevel4(options, lastOrder);
    }
  }

  return arr;
}



/* ==========================================================
   ⭐ LEVEL 4 — SHOW SCREEN
========================================================== */
L4.show = function (screenId) {

  // ⭐ ALWAYS hide the Level 4 entry screen
  const entry = document.getElementById("screen2L4");
  if (entry) entry.classList.add("hidden");

  // ⭐ Unhide wrapper
  const wrapper = document.getElementById("level4Wrapper");
  if (wrapper) wrapper.classList.remove("hidden");

  // Hide all Level 4 screens
  const screens = [
    "level4Screen1",
    "level4Screen2",
    "level4Screen3",
    "level4Screen4"
  ];

  screens.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });

  // Show target screen
  const target = document.getElementById(screenId);
  if (target) target.classList.remove("hidden");
};









/* ==========================================================
   ⭐ LEVEL 4 — START
========================================================== */
L4.start = function () {
  console.log("[Level4] start()");

  L4.active = true;
  L4.round = 0;
  L4.score = 0;
  L4.columnLocked = false;
  L4.currentSentence = null;
  L4.currentSentenceObj = null;

  L4.dataset = scrambleSentencesLevel4(level4);

  Progress4.setTotal(level4.length);
  Progress4.save();

  L4.stopAllAudio();
  L4.audio.cancelToken.cancel = false;

  document.getElementById("level4Wrapper")?.classList.remove("hidden");

  L4.startRound();
};


/* ==========================================================
   ⭐ LEVEL 4 — START ROUND
========================================================== */
L4.startRound = function () {
  console.log(`[Level4] startRound() — Round ${L4.round + 1}`);
  if (!L4.active) return;

  if (L4.round >= L4.TOTAL_ROUNDS) {
    showLevel4FinalSummary();
    return;
  }

  L4.stopAllAudio();
  L4.audio.cancelToken.cancel = false;
  L4.audio.generation++;

  L4.columnLocked = false;

  const sentenceObj = L4.dataset[L4.round];
  L4.currentSentenceObj = sentenceObj;

  L4.lastScramble = null;

  L4.screen1();
};


/* ==========================================================
   ⭐ LEVEL 4 — SCREEN 1 (SPANISH AUDIO ONLY)
========================================================== */
L4.screen1 = function () {

  L4.show("level4Screen1");

  console.log(
    "wrapper hidden AFTER show():",
    document.getElementById("level4Wrapper").classList.contains("hidden")
  );

  console.log("[Level4] screen1()");

  L4.stopAllAudio();
  L4.audio.cancelToken.cancel = false;
  L4.audio.generation++;

  const sentence = L4.currentSentenceObj;

  const screenEl = document.getElementById("level4Screen1");

  L4.renderProgress();

  if (!sentence.audio) {
    console.warn("[Level4] No audio found, skipping to screen2()");
    L4.screen2();
    return;
  }

  const audio = new Audio(sentence.audio);
  L4.audio.current = audio;

  let safety = setTimeout(() => {
    console.warn("[Level4] Audio safety timeout — moving to screen2()");
    L4.screen2();
  }, 10000);

  const finish = () => {
    clearTimeout(safety);
    L4.screen2();
  };

  audio.onended = finish;
  audio.onerror = finish;

  audio.play().catch(() => {
    console.warn("[Level4] Audio play() failed — moving to screen2()");
    finish();
  });
};



/* ==========================================================
   ⭐ LEVEL 4 — SCREEN 2 (SPLIT COLUMN)
========================================================== */
L4.screen2 = function () {
  L4.activeScreen = "screen2";
  if (!L4.active) return;
  console.log("[Level4] screen2()");

  /* ----------------------------------------------------------
     1. Retrieve current sentence
  ---------------------------------------------------------- */
  const s = L4.currentSentenceObj;
  if (!s) {
    console.warn("[Level4] No current sentence — fallback to startRound()");
    L4.startRound();
    return;
  }

  L4.columnLocked = false;
  L4.show("level4Screen2");

  /* ----------------------------------------------------------
     2. LEFT COLUMN — Spanish sentence
  ---------------------------------------------------------- */
  const leftBox = document.getElementById("l4LeftColumn");
  if (leftBox) leftBox.textContent = s.spanish;

  /* ----------------------------------------------------------
     3. RIGHT COLUMN — Paraphrase options (validated)
  ---------------------------------------------------------- */
  const rightBox = document.getElementById("l4RightColumn");
  rightBox.innerHTML = "";

  // Validate paraphraseOptions
  let opts = Array.isArray(s.paraphraseOptions) ? s.paraphraseOptions : [];

  // Filter out invalid entries
  opts = opts.filter(o => {
    const valid = o && typeof o.text === "string";
    if (!valid) console.warn("[Level4] Invalid paraphrase option:", o);
    return valid;
  });

  if (opts.length === 0) {
    console.error("[Level4] No valid paraphraseOptions for:", s);
    rightBox.textContent = "⚠️ No paraphrase options available.";
    return;
  }

  // Scramble safely
  const scrambled = scrambleSentencesLevel4(opts, L4.lastScramble);

  // Store last scramble safely
  L4.lastScramble = scrambled.map(o => o.text);

  // Render buttons
  scrambled.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "l4OptionBtn";
    btn.textContent = opt.text;

    btn.onclick = () => {
      if (L4.columnLocked) return;
      L4.handleColumnChoice(opt, btn);
    };

    rightBox.appendChild(btn);
  });

  /* ----------------------------------------------------------
     4. Replay button — plays s.audio
  ---------------------------------------------------------- */
  const replayBtn = document.getElementById("l4ReplayBtn");
  if (replayBtn) {
    replayBtn.style.display = "inline-block";
    replayBtn.onclick = () => {
      if (L4.columnLocked) return;

      L4.stopAllAudio();
      L4.audio.cancelToken.cancel = false;
      L4.audio.generation++;

      const audio = new Audio(s.audio);
      L4.audio.current = audio;
      audio.play().catch(() => {});
    };
  }
};




/* ==========================================================
   ⭐ LEVEL 4 — HANDLE COLUMN CHOICE
========================================================== */
L4.handleColumnChoice = function (opt, btn) {
  if (!L4.active) return;

  if (L4.columnLocked) return;
  L4.columnLocked = true;

  const s = L4.currentSentenceObj;
  if (!s) {
    L4.startRound();
    return;
  }

  if (opt.correct) {
    btn.classList.add("l4-correct");
    L4.score++;

    Progress4.markSentenceComplete(s.id);
    L4.updateScoreKeeper();
    L4.renderProgress();

  } else {
    btn.classList.add("l4-wrong");

    const correctOpt = s.paraphraseOptions.find(o => o.correct);
    if (correctOpt) {
      document.querySelectorAll(".l4OptionBtn").forEach(b => {
        if (b.textContent === correctOpt.text) {
          b.classList.add("l4-correct");
        }
      });
    }

    if (Progress4.storageAvailable !== false) {
      L4.dataset.push(s);
    }
  }

  setTimeout(() => {
    if (L4.activeScreen !== "screen2") return;
    L4.showRoundSummary();
  }, 800);
};


/* ==========================================================
   ⭐ LEVEL 4 — ROUND SUMMARY
========================================================== */
L4.showRoundSummary = function () {
  L4.activeScreen = "screen3";

  if (!L4.active) return;

  const s = L4.currentSentenceObj;
  if (!s) return;

  L4.stopAllAudio();
  L4.audio.cancelToken.cancel = false;
  L4.audio.generation++;

  L4.show("level4Screen3");

  const meaningBox = document.getElementById("l4MeaningBox");
  const cont = document.getElementById("l4SummaryContainer");

  meaningBox.textContent = s.meaning || "";
  cont.innerHTML = "";

  if (Array.isArray(s.summaryChunks)) {
    s.summaryChunks.forEach(chunk => {
      const row = document.createElement("div");
      row.className = "summary-row";

      row.innerHTML = `
        <div class="summary-spanish">${chunk.spanish || ""}</div>
        <div class="summary-english">${chunk.english || ""}</div>
      `;

      cont.appendChild(row);
    });
  }

  const nextBtn = document.getElementById("l4SummaryNextBtn");
  if (nextBtn) {
    nextBtn.onclick = () => {
      L4.stopAllAudio();
      L4.round++;

      if (L4.round >= L4.TOTAL_ROUNDS) {
        showLevel4FinalSummary();
        return;
      }

      L4.currentSentence = null;
      L4.currentSentenceObj = null;

      L4.startRound();
    };
  }

  createAndWireLevel4ReplayButton("level4Screen3", s.audio);
};


/* ==========================================================
   ⭐ LEVEL 4 — FINAL SUMMARY
========================================================== */
function showLevel4FinalSummary() {
  if (!L4.active) return;

  L4.active = false;

  L4.stopAllAudio();
  L4.audio.cancelToken.cancel = false;
  L4.audio.generation++;

  L4.show("level4Screen4");

  const rounds = document.getElementById("l4FinalRounds");
  const score = document.getElementById("l4FinalScore");
  const correct = document.getElementById("l4FinalCorrect");

  if (rounds) rounds.textContent = L4.round;
  if (score) score.textContent = L4.score;
  if (correct) correct.textContent = L4.score;

  const againBtn = document.getElementById("l4PlayAgainBtn");
  if (againBtn) {
    againBtn.onclick = () => {
      L4.reset();
      L4.start();
    };
  }

  const homeBtn = document.getElementById("l4HomeBtn");
  if (homeBtn) {
    homeBtn.onclick = () => {
      L4.reset();
      L4.show("screen0");
    };
  }
}


/* ==========================================================
   ⭐ LEVEL 4 — RESET
========================================================== */
L4.reset = function () {
  L4.round = 0;
  L4.score = 0;
  L4.currentSentence = null;

  L4.audio.cancelToken.cancel = false;
  L4.audio.generation++;

  L4.columnLocked = false;
};

/* ==========================================================
   ⭐ LEVEL 4 — PROGRESS BAR
========================================================== */
L4.renderProgress = function () {
  const wrapperParent = document.getElementById("level4Wrapper");
  if (!wrapperParent) return;

  const p = Progress4.getProgress();
  const pct = p.percent;

  let wrapper = document.getElementById("l4ProgressWrapper");
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.id = "l4ProgressWrapper";
    wrapper.style.marginBottom = "20px";

    wrapper.innerHTML = `
      <div id="l4ProgressLabel" style="
        font-size: 18px;
        margin-bottom: 6px;
        color: #fff;
        text-align: center;
      "></div>

      <div id="l4ProgressOuter" style="
        width: 100%;
        height: 10px;
        background: #333;
        border-radius: 6px;
        overflow: hidden;
      ">
        <div id="l4ProgressBar" style="
          height: 100%;
          width: 0%;
          background: #4caf50;
          transition: width 0.3s ease;
        "></div>
      </div>
    `;

    wrapperParent.prepend(wrapper);
  }

  document.getElementById("l4ProgressBar").style.width = pct + "%";
  document.getElementById("l4ProgressLabel").textContent =
    `Mastery: ${p.completed} / ${p.total}`;
};


/* ==========================================================
   ⭐ LEVEL 4 — SCORE KEEPER
========================================================== */
L4.updateScoreKeeper = function () {
  const el = document.getElementById("scoreKeeper");
  if (!el) return;

  const p = Progress4.getProgress();
  const current = p.completed;
  const total = p.total;

  el.textContent = `${current} / ${total}`;
};



/* ==========================================================
   ⭐ LEVEL 4 — REPLAY BUTTON CREATOR
========================================================== */
function createAndWireLevel4ReplayButton(targetScreenId, audioUrl) {
  const oldBtn = document.getElementById("l4ReplayBtnDynamic");
  if (oldBtn) oldBtn.remove();

  const btn = document.createElement("button");
  btn.id = "l4ReplayBtnDynamic";
  btn.className = "iconBtn replay-top";
  btn.textContent = "🔁 Repetir";

  const screen = document.getElementById(targetScreenId);
  if (!screen) return;
  screen.appendChild(btn);

  btn.onclick = () => {
    L4.stopAllAudio();
    L4.audio.cancelToken.cancel = false;
    L4.audio.generation++;

    const audio = new Audio(audioUrl);
    L4.audio.current = audio;
    audio.play().catch(() => {});
  };
}


/* ==========================================================
   ⭐ LEVEL 4 — BUTTON WIRING
========================================================== */
function wireLevel4Buttons() {
  const wrapper = document.getElementById("level4Wrapper");
  if (!wrapper || wrapper.classList.contains("hidden")) return;

  const startBtn = document.getElementById("startLevel4Btn");
  if (startBtn) {
    startBtn.onclick = () => {
      L4.stopAllAudio();
      L4.start();
    };
  }

  const replayBtn = document.getElementById("l4ReplaySentenceBtn");
  if (replayBtn) {
    replayBtn.onclick = () => {
      if (L4.columnLocked) return;

      const s = L4.currentSentenceObj;
      if (!s || !s.audio) return;

      L4.stopAllAudio();
      L4.audio.cancelToken.cancel = false;
      L4.audio.generation++;

      const audio = new Audio(s.audio);
      L4.audio.current = audio;
      audio.play().catch(() => {});
    };
  }
}

document.addEventListener("DOMContentLoaded", wireLevel4Buttons);


/* ==========================================================
   ⭐ LEVEL 4 — CLEANUP
========================================================== */
function cleanupLevel4() {
  L4.active = false;

  try { 
    if (L4.stopAllAudio) L4.stopAllAudio();
  } catch (e) {}

  if (L4.timer) { clearTimeout(L4.timer); L4.timer = null; }
  if (L4.interval) { clearInterval(L4.interval); L4.interval = null; }

  if (Array.isArray(L4.timeouts)) {
    L4.timeouts.forEach(id => clearTimeout(id));
    L4.timeouts = [];
  }

  const ids = [
    "l4LeftColumn",
    "l4RightColumn",
    "l4ReplayBtn",
    "l4ReplaySentenceBtn",
    "l4SummaryNextBtn",
    "l4PlayAgainBtn",
    "l4HomeBtn"
  ];

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.replaceWith(el.cloneNode(true));
  });

  const wrapper = document.getElementById("level4Wrapper");
  if (wrapper) wrapper.classList.add("hidden");
}



























/*----------------------------------------------------------------
LEVEL HANDLER (CLEAN, ISOLATED, ERROR‑FREE)
-------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {

  // ---------------------------------------------------------
  // UNIVERSAL LEVEL LAUNCHER (Levels 1–10 only)
  // ---------------------------------------------------------
  function launchLevel(levelNumber, startFn) {
    document.querySelectorAll(".screen").forEach(s =>
      s.classList.add("hidden")
    );

    document.getElementById(`screen2L${levelNumber}`)?.classList.remove("hidden");
    startFn();
  }

  // ---------------------------------------------------------
  // LEVEL 1
  // ---------------------------------------------------------
  document.querySelector('.levelBtn[data-level="1"]')
  ?.addEventListener("click", () => {
 if (window.currentScreen && window.currentScreen !== "screen0") return;




    if (window.currentLevel !== 0) return;   // ⭐ Only allow Level 1 when selecting from screen0

    window.currentLevel = 1;
    console.log("[Level 1] Isolated handler fired");
    launchLevel(1, level1);
  });




  // ---------------------------------------------------------
  // LEVEL 2
  // ---------------------------------------------------------
  document.querySelector('.levelBtn[data-level="2"]')
  ?.addEventListener("click", () => {

    if (window.currentScreen && window.currentScreen !== "screen0") return;
    if (window.currentLevel !== 0) return;

    window.currentLevel = 2;

    // ⭐ FIX: mark screen BEFORE launching Level‑2
    window.currentScreen = "level2Screen1";

    console.log("[Level 2] Isolated handler fired");
    launchLevel(2, L2.start);
  });









  // ---------------------------------------------------------
  // LEVEL 3
  // ---------------------------------------------------------
  document.querySelector('.levelBtn[data-level="3"]')
    ?.addEventListener("click", () => {
      console.log("[Level 3] Isolated handler fired");
      launchLevel(3, L3.start);
    });





/*







  // ---------------------------------------------------------
  // LEVEL 4
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 4 (GATED: BASIC OR PREMIUM, ISOLATED, CLEAN)
// ---------------------------------------------------------
const level4Btn = document.getElementById("level4Btn");

if (!level4Btn) {
  console.error("Level 4 button not found in DOM");
} else {
  level4Btn.addEventListener("click", async () => {
    console.log("[Level 4] Gated handler fired");

    const user = window.currentUser;
    if (!user) {
      alert("You must be logged in to access Level 4.");
      window.location.href = "blog-podcast.html";
      return;
    }

    // Instant unlock if success.html already set the flag
    if (
      localStorage.getItem("basicUnlock") === "true" ||
      localStorage.getItem("premiumUnlock") === "true"
    ) {
      console.log("Unlock flag detected — Level 4 unlocked.");
      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L4")?.classList.remove("hidden");
      L4.start();
      return;
    }

    // Otherwise check real membership in Supabase
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    console.log("Membership result (L4):", { data, error });

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;

    const allowed = [
      "basic-monthly",
      "basic-yearly",
      "premium-monthly",
      "premium-yearly"
    ];

    if (status === "active" && allowed.includes(plan)) {
      console.log("User has Basic or Premium — unlocking Level 4.");

      // Cache unlock for instant future access
      if (plan.startsWith("basic")) {
        localStorage.setItem("basicUnlock", "true");
      } else {
        localStorage.setItem("premiumUnlock", "true");
      }

      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L4")?.classList.remove("hidden");
      L4.start();
      return;
    }

    alert("Level 4 is locked. Basic or Premium required.");
    window.location.href = "membership.html";
  });
}

*/







level4Btn.addEventListener("click", () => {
  console.log("[Level 4] Ungated access — entering Level 4");

  launchLevel(4, L4.start);
});









/*












  // ---------------------------------------------------------
  // LEVEL 5
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 5 (GATED: BASIC OR PREMIUM, ISOLATED, CLEAN)
// ---------------------------------------------------------
const level5Btn = document.getElementById("level5Btn");

if (!level5Btn) {
  console.error("Level 5 button not found in DOM");
} else {
  level5Btn.addEventListener("click", async () => {
    console.log("[Level 5] Gated handler fired");

    const user = window.currentUser;
    if (!user) {
      alert("You must be logged in to access Level 5.");
      window.location.href = "blog-podcast.html";
      return;
    }

    // Instant unlock if success.html already set the flag
    if (
      localStorage.getItem("basicUnlock") === "true" ||
      localStorage.getItem("premiumUnlock") === "true"
    ) {
      console.log("Unlock flag detected — Level 5 unlocked.");
      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L5")?.classList.remove("hidden");
      L5.start();
      return;
    }

    // Otherwise check real membership in Supabase
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    console.log("Membership result (L5):", { data, error });

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;

    const allowed = [
      "basic-monthly",
      "basic-yearly",
      "premium-monthly",
      "premium-yearly"
    ];

    if (status === "active" && allowed.includes(plan)) {
      console.log("User has Basic or Premium — unlocking Level 5.");

      // Cache unlock for instant future access
      if (plan.startsWith("basic")) {
        localStorage.setItem("basicUnlock", "true");
      } else {
        localStorage.setItem("premiumUnlock", "true");
      }

      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L5")?.classList.remove("hidden");
      L5.start();
      return;
    }

    alert("Level 5 is locked. Basic or Premium required.");
    window.location.href = "membership.html";
  });
}





















  // ---------------------------------------------------------
  // LEVEL 6
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 6 (GATED: BASIC OR PREMIUM, ISOLATED, CLEAN)
// ---------------------------------------------------------
const level6Btn = document.getElementById("level6Btn");

if (!level6Btn) {
  console.error("Level 6 button not found in DOM");
} else {
  level6Btn.addEventListener("click", async () => {
    console.log("[Level 6] Gated handler fired");

    const user = window.currentUser;
    if (!user) {
      alert("You must be logged in to access Level 6.");
      window.location.href = "blog-podcast.html";
      return;
    }

    // Instant unlock if success.html already set the flag
    if (
      localStorage.getItem("basicUnlock") === "true" ||
      localStorage.getItem("premiumUnlock") === "true"
    ) {
      console.log("Unlock flag detected — Level 6 unlocked.");
      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L6")?.classList.remove("hidden");
      L6.start();
      return;
    }

    // Otherwise check real membership in Supabase
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    console.log("Membership result (L6):", { data, error });

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;

    const allowed = [
      "basic-monthly",
      "basic-yearly",
      "premium-monthly",
      "premium-yearly"
    ];

    if (status === "active" && allowed.includes(plan)) {
      console.log("User has Basic or Premium — unlocking Level 6.");

      // Cache unlock for instant future access
      if (plan.startsWith("basic")) {
        localStorage.setItem("basicUnlock", "true");
      } else {
        localStorage.setItem("premiumUnlock", "true");
      }

      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L6")?.classList.remove("hidden");
      L6.start();
      return;
    }

    alert("Level 6 is locked. Basic or Premium required.");
    window.location.href = "membership.html";
  });
}























  // ---------------------------------------------------------
  // LEVEL 7
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 7 (GATED: BASIC OR PREMIUM, ISOLATED, CLEAN)
// ---------------------------------------------------------
const level7Btn = document.getElementById("level7Btn");

if (!level7Btn) {
  console.error("Level 7 button not found in DOM");
} else {
  level7Btn.addEventListener("click", async () => {
    console.log("[Level 7] Gated handler fired");

    const user = window.currentUser;
    if (!user) {
      alert("You must be logged in to access Level 7.");
      window.location.href = "blog-podcast.html";
      return;
    }

    // Instant unlock if success.html already set the flag
    if (
      localStorage.getItem("basicUnlock") === "true" ||
      localStorage.getItem("premiumUnlock") === "true"
    ) {
      console.log("Unlock flag detected — Level 7 unlocked.");
      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L7")?.classList.remove("hidden");
      L7.start();
      return;
    }

    // Otherwise check real membership in Supabase
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    console.log("Membership result (L7):", { data, error });

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;

    const allowed = [
      "basic-monthly",
      "basic-yearly",
      "premium-monthly",
      "premium-yearly"
    ];

    if (status === "active" && allowed.includes(plan)) {
      console.log("User has Basic or Premium — unlocking Level 7.");

      // Cache unlock for instant future access
      if (plan.startsWith("basic")) {
        localStorage.setItem("basicUnlock", "true");
      } else {
        localStorage.setItem("premiumUnlock", "true");
      }

      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L7")?.classList.remove("hidden");
      L7.start();
      return;
    }

    alert("Level 7 is locked. Basic or Premium required.");
    window.location.href = "membership.html";
  });
}













  // ---------------------------------------------------------
  // LEVEL 8
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 8 (GATED: BASIC OR PREMIUM, ISOLATED, CLEAN)
// ---------------------------------------------------------
const level8Btn = document.getElementById("level8Btn");

if (!level8Btn) {
  console.error("Level 8 button not found in DOM");
} else {
  level8Btn.addEventListener("click", async () => {
    console.log("[Level 8] Gated handler fired");

    const user = window.currentUser;
    if (!user) {
      alert("You must be logged in to access Level 8.");
      window.location.href = "blog-podcast.html";
      return;
    }

    // Instant unlock if success.html already set the flag
    if (
      localStorage.getItem("basicUnlock") === "true" ||
      localStorage.getItem("premiumUnlock") === "true"
    ) {
      console.log("Unlock flag detected — Level 8 unlocked.");
      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L8")?.classList.remove("hidden");
      L8.start();
      return;
    }

    // Otherwise check real membership in Supabase
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    console.log("Membership result (L8):", { data, error });

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;

    const allowed = [
      "basic-monthly",
      "basic-yearly",
      "premium-monthly",
      "premium-yearly"
    ];

    if (status === "active" && allowed.includes(plan)) {
      console.log("User has Basic or Premium — unlocking Level 8.");

      // Cache unlock for instant future access
      if (plan.startsWith("basic")) {
        localStorage.setItem("basicUnlock", "true");
      } else {
        localStorage.setItem("premiumUnlock", "true");
      }

      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L8")?.classList.remove("hidden");
      L8.start();
      return;
    }

    alert("Level 8 is locked. Basic or Premium required.");
    window.location.href = "membership.html";
  });
}















  // ---------------------------------------------------------
  // LEVEL 9
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 9 (GATED, ISOLATED, CLEAN)
// ---------------------------------------------------------
const level9Btn = document.getElementById("level9Btn");

if (!level9Btn) {
  console.error("Level 9 button not found in DOM");
} else {
  level9Btn.addEventListener("click", async () => {
    console.log("[Level 9] Gated handler fired");

    const user = window.currentUser;
    if (!user) {
      alert("You must be logged in to access Level 9.");
      window.location.href = "blog-podcast.html";
      return;
    }

    // Instant unlock if success.html already set the flag
    if (localStorage.getItem("premiumUnlock") === "true") {
      console.log("premiumUnlock flag detected — Level 9 unlocked.");
      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L9")?.classList.remove("hidden");
      L9.start();
      return;
    }

    // Otherwise check real membership in Supabase
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    console.log("Membership result (L9):", { data, error });

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;
    const allowed = ["premium-monthly", "premium-yearly", "lifetime"];

    if (status === "active" && allowed.includes(plan)) {
      console.log("User already has premium — unlocking Level 9.");

      localStorage.setItem("premiumUnlock", "true");

      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L9")?.classList.remove("hidden");
      L9.start();
      return;
    }

    alert("Level 9 is locked. Premium required.");
    window.location.href = "membership.html";
  });
}















  // ---------------------------------------------------------
  // LEVEL 10
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 10 (GATED, ISOLATED, CLEAN)
// ---------------------------------------------------------
const level10Btn = document.getElementById("level10Btn");

if (!level10Btn) {
  console.error("Level 10 button not found in DOM");
} else {
  level10Btn.addEventListener("click", async () => {
    console.log("[Level 10] Gated handler fired");

    const user = window.currentUser;
    if (!user) {
      alert("You must be logged in to access Level 10.");
      window.location.href = "blog-podcast.html";
      return;
    }

    // Instant unlock if success.html already set the flag
    if (localStorage.getItem("premiumUnlock") === "true") {
      console.log("premiumUnlock flag detected — Level 10 unlocked.");
      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L10")?.classList.remove("hidden");
      L10.start();
      return;
    }

    // Otherwise check real membership in Supabase
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    console.log("Membership result (L10):", { data, error });

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;
    const allowed = ["premium-monthly", "premium-yearly", "lifetime"];

    if (status === "active" && allowed.includes(plan)) {
      console.log("User already has premium — unlocking Level 10.");

      localStorage.setItem("premiumUnlock", "true");

      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L10")?.classList.remove("hidden");
      L10.start();
      return;
    }

    alert("Level 10 is locked. Premium required.");
    window.location.href = "membership.html";
  });
}

























  // ---------------------------------------------------------
  // LEVEL 11 (custom)
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 11 (GATED, ISOLATED, CLEAN)
// ---------------------------------------------------------
const level11Btn = document.getElementById("level11Btn");

if (!level11Btn) {
  console.error("Level 11 button not found in DOM");
} else {
  level11Btn.addEventListener("click", async () => {
    console.log("[Level 11] Gated handler fired");

    const user = window.currentUser;
    if (!user) {
      alert("You must be logged in to access Level 11.");
      window.location.href = "blog-podcast.html";
      return;
    }

    // Instant unlock if success.html already set the flag
    if (localStorage.getItem("premiumUnlock") === "true") {
      console.log("premiumUnlock flag detected — Level 11 unlocked.");
      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("level11Screen")?.classList.remove("hidden");
      startLevel11(defaultScenario);
      return;
    }

    // Otherwise check real membership in Supabase
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    console.log("Membership result (L11):", { data, error });

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;
    const allowed = ["premium-monthly", "premium-yearly", "lifetime"];

    if (status === "active" && allowed.includes(plan)) {
      console.log("User already has premium — unlocking Level 11.");

      localStorage.setItem("premiumUnlock", "true");

      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("level11Screen")?.classList.remove("hidden");
      startLevel11(defaultScenario);
      return;
    }

    alert("Level 11 is locked. Premium required.");
    window.location.href = "membership.html";
  });
}





















  // ---------------------------------------------------------
  // LEVEL 12 (GATED, ISOLATED, CLEAN)
  // ---------------------------------------------------------
  const level12Btn = document.getElementById("level12Btn");

  if (!level12Btn) {
    console.error("Level 12 button not found in DOM");
  } else {
    level12Btn.addEventListener("click", async () => {
      console.log("[Level 12] Gated handler fired");

      const user = window.currentUser;
      if (!user) {
        alert("You must be logged in to access Level 12.");
        window.location.href = "blog-podcast.html";
        return;
      }

      // Instant unlock if success.html already set the flag
      if (localStorage.getItem("premiumUnlock") === "true") {
        console.log("premiumUnlock flag detected — Level 12 unlocked.");
        document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
        document.getElementById("level12Screen")?.classList.remove("hidden");
        startLevel12();
        return;
      }

      // Otherwise check real membership in Supabase
      const { data, error } = await sb
        .from("profiles")
        .select("membership_status, membership_plan")
        .eq("email", user.email)
        .maybeSingle();

      console.log("Membership result:", { data, error });

      if (error) {
        console.error("Membership query error:", error);
        alert("Membership check failed. Please try again.");
        return;
      }

      const status = data?.membership_status;
      const plan = data?.membership_plan;
      const allowed = ["premium-monthly", "premium-yearly", "lifetime"];

      if (status === "active" && allowed.includes(plan)) {
        console.log("User already has premium — unlocking Level 12.");

        localStorage.setItem("premiumUnlock", "true");

        document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
        document.getElementById("level12Screen")?.classList.remove("hidden");
        startLevel12();
        return;
      }

      alert("Level 12 is locked. Premium required.");
      window.location.href = "membership.html";
    });





  }

  */

});

