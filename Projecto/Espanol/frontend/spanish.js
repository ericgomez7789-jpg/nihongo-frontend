
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


/*

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

