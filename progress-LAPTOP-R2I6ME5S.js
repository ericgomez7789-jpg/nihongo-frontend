/* ----------------------------------------------------------
   PROGRESS ENGINE (OFFLINE FIRST, CLOUD-READY)
   Matches Level 1 architecture in script.js
---------------------------------------------------------- */

const Progress = {
  data: {},

  init() {
    try {
      this.data = JSON.parse(localStorage.getItem("progress")) || {};
    } catch (e) {
      this.data = {};
    }
  },

  save() {
    localStorage.setItem("progress", JSON.stringify(this.data));
  },

  normalize(level) {
    if (typeof level === "number") return `level${level}`;
    return level;
  },

  ensure(level) {
    const key = this.normalize(level);
    if (!this.data[key]) {
      this.data[key] = {
        total: 0,
        completed: 0,
        percent: 0,
        masteredSentences: []
      };
    }
    return this.data[key];
  },

  setTotal(level, total) {
    const key = this.normalize(level);
    const d = this.ensure(key);
    d.total = total;
    this.updatePercent(key);
    this.save();
  },

  markSentenceComplete(level, sentenceId) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    if (!d.masteredSentences.includes(sentenceId)) {
      d.masteredSentences.push(sentenceId);
      d.completed = d.masteredSentences.length;
      this.updatePercent(key);
      this.save();
    }
  },

  getLevelProgress(level) {
    const key = this.normalize(level);
    return this.ensure(key);
  },

  updatePercent(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    if (d.total > 0) {
      d.percent = Math.round((d.completed / d.total) * 100);
    } else {
      d.percent = 0;
    }
  },

  resetLevel(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    d.masteredSentences = [];
    d.completed = 0;
    this.updatePercent(key);
    this.save();
  },

  load() {
    try {
      return JSON.parse(localStorage.getItem("progress")) || {};
    } catch (e) {
      return {};
    }
  },

  saveRaw(obj) {
    this.data = obj || {};
    localStorage.setItem("progress", JSON.stringify(this.data));
  }
};

/* ------------------------------------------------------
   INIT ON PAGE LOAD
------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  Progress.init();
});

/* ------------------------------------------------------
   L1.Reset — Reset Button Wiring
------------------------------------------------------ */









/* ----------------------------------------------------------
   PROGRESS2 — Level 2 Mastery Tracking
   (Only increments on correct answers)
---------------------------------------------------------- */

const Progress2 = {
  data: {},

  init() {
    try {
      this.data = JSON.parse(localStorage.getItem("progress2")) || {};
    } catch (e) {
      this.data = {};
    }
  },

  save() {
    localStorage.setItem("progress2", JSON.stringify(this.data));
  },

  normalize(level) {
    if (typeof level === "number") return `level${level}`;
    return level;
  },

  ensure(level) {
    const key = this.normalize(level);
    if (!this.data[key]) {
      this.data[key] = {
        total: 0,              // total sentences in Level 2
        completed: 0,          // number of correctly mastered sentences
        percent: 0,            // completion %
        masteredSentences: []  // list of sentence IDs answered correctly
      };
    }
    return this.data[key];
  },

  setTotal(level, total) {
    const key = this.normalize(level);
    const d = this.ensure(key);
    d.total = total;
    this.updatePercent(key);
    this.save();
  },

  // ⭐ Only called when the user answers correctly
  markSentenceComplete(level, sentenceId) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    if (!d.masteredSentences.includes(sentenceId)) {
      d.masteredSentences.push(sentenceId);
      d.completed = d.masteredSentences.length;
      this.updatePercent(key);
      this.save();
    }
  },

  getLevelProgress(level) {
    const key = this.normalize(level);
    return this.ensure(key);
  },

  updatePercent(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    if (d.total > 0) {
      d.percent = Math.round((d.completed / d.total) * 100);
    } else {
      d.percent = 0;
    }
  },

  resetLevel(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    d.masteredSentences = [];
    d.completed = 0;
    this.updatePercent(key);
    this.save();
  },

  load() {
    try {
      return JSON.parse(localStorage.getItem("progress2")) || {};
    } catch (e) {
      return {};
    }
  },

  saveRaw(obj) {
    this.data = obj || {};
    localStorage.setItem("progress2", JSON.stringify(this.data));
  }
};

/* ------------------------------------------------------
   INIT ON PAGE LOAD
------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  Progress2.init();
});


/* ----------------------------------------------------------
   INIT ON PAGE LOAD
---------------------------------------------------------- */

/* ==========================================================
   LEVEL 3 — HTML‑BASED PROGRESS UI
========================================================== */
/* ==========================================================
   LEVEL 3 — HTML-BASED PROGRESS UI
========================================================== */

/* ----------------------------------------------------------
   LEVEL 3 — ISOLATED PROGRESS ENGINE
   Mirrors Level 1 architecture but fully independent
---------------------------------------------------------- */



/* ------------------------------------------------------
   INIT ON PAGE LOAD (duplicate removed)
------------------------------------------------------ */




const Progress3 = {
  data: {},

  init() {
    try {
      this.data = JSON.parse(localStorage.getItem("progress3")) || {};
    } catch (e) {
      this.data = {};
    }
  },

  save() {
    localStorage.setItem("progress3", JSON.stringify(this.data));
  },

  normalize(level) {
    if (typeof level === "number") return `level${level}`;
    return level;
  },

  ensure(level) {
    const key = this.normalize(level);
    if (!this.data[key]) {
      this.data[key] = {
        total: 0,              // total sentences in Level 3
        completed: 0,          // number of correctly mastered sentences
        percent: 0,            // completion %
        masteredSentences: []  // list of sentence IDs answered correctly
      };
    }
    return this.data[key];
  },

  setTotal(level, total) {
    const key = this.normalize(level);
    const d = this.ensure(key);
    d.total = total;
    this.updatePercent(key);
    this.save();
  },

  // ⭐ Only called when the user answers correctly
  markSentenceComplete(level, sentenceId) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    if (!d.masteredSentences.includes(sentenceId)) {
      d.masteredSentences.push(sentenceId);
      d.completed = d.masteredSentences.length;
      this.updatePercent(key);
      this.save();
    }
  },

  getLevelProgress(level) {
    const key = this.normalize(level);
    return this.ensure(key);
  },

  updatePercent(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    if (d.total > 0) {
      d.percent = Math.round((d.completed / d.total) * 100);
    } else {
      d.percent = 0;
    }
  },

  resetLevel(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    d.masteredSentences = [];
    d.completed = 0;
    this.updatePercent(key);
    this.save();
  },

  load() {
    try {
      return JSON.parse(localStorage.getItem("progress3")) || {};
    } catch (e) {
      return {};
    }
  },

  saveRaw(obj) {
    this.data = obj || {};
    localStorage.setItem("progress3", JSON.stringify(this.data));
  }
};

/* ------------------------------------------------------
   INIT ON PAGE LOAD
------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  Progress3.init();
});

/* ==========================================================
   LEVEL 4 — HTML-BASED PROGRESS UI
========================================================== */
const Progress4 = {
  data: {},

  init() {
    try {
      this.data = JSON.parse(localStorage.getItem("progress4")) || {};
    } catch (e) {
      this.data = {};
    }
  },

  save() {
    localStorage.setItem("progress4", JSON.stringify(this.data));
  },

  normalize(level) {
    if (typeof level === "number") return `level${level}`;
    return level;
  },

  ensure(level) {
    const key = this.normalize(level);
    if (!this.data[key]) {
      this.data[key] = {
        total: 0,              // total sentences in Level 4
        completed: 0,          // number of correctly mastered sentences
        percent: 0,            // completion %
        masteredSentences: []  // list of sentence IDs answered correctly
      };
    }
    return this.data[key];
  },

  setTotal(level, total) {
    const key = this.normalize(level);
    const d = this.ensure(key);
    d.total = total;
    this.updatePercent(key);
    this.save();
  },

  // ⭐ Only called when the user answers correctly
  markSentenceComplete(level, sentenceId) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    if (!d.masteredSentences.includes(sentenceId)) {
      d.masteredSentences.push(sentenceId);
      d.completed = d.masteredSentences.length;
      this.updatePercent(key);
      this.save();
    }
  },

  getLevelProgress(level) {
    const key = this.normalize(level);
    return this.ensure(key);
  },

  updatePercent(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    if (d.total > 0) {
      d.percent = Math.round((d.completed / d.total) * 100);
    } else {
      d.percent = 0;
    }
  },

  resetLevel(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    d.masteredSentences = [];
    d.completed = 0;
    this.updatePercent(key);
    this.save();
  },

  load() {
    try {
      return JSON.parse(localStorage.getItem("progress4")) || {};
    } catch (e) {
      return {};
    }
  },

  saveRaw(obj) {
    this.data = obj || {};
    localStorage.setItem("progress4", JSON.stringify(this.data));
  }
};

/* ------------------------------------------------------
   INIT ON PAGE LOAD
------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  Progress4.init();
});

/* ==========================================================
   LEVEL 5 — HTML-BASED PROGRESS UI
========================================================== */

const Progress5 = {
  data: {},

  init() {
    try {
      this.data = JSON.parse(localStorage.getItem("progress5")) || {};
    } catch (e) {
      this.data = {};
    }
  },

  save() {
    localStorage.setItem("progress5", JSON.stringify(this.data));
  },

  normalize(level) {
    if (typeof level === "number") return `level${level}`;
    return level;
  },

  ensure(level) {
    const key = this.normalize(level);
    if (!this.data[key]) {
      this.data[key] = {
        total: 0,              // total sentences in Level 5
        completed: 0,          // number of correctly mastered sentences
        percent: 0,            // completion %
        masteredSentences: []  // list of sentence IDs answered correctly
      };
    }
    return this.data[key];
  },

  setTotal(level, total) {
    const key = this.normalize(level);
    const d = this.ensure(key);
    d.total = total;
    this.updatePercent(key);
    this.save();
  },

  // ⭐ Only called when the user answers correctly
  markSentenceComplete(level, sentenceId) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    if (!d.masteredSentences.includes(sentenceId)) {
      d.masteredSentences.push(sentenceId);
      d.completed = d.masteredSentences.length;
      this.updatePercent(key);
      this.save();
    }
  },

  getLevelProgress(level) {
    const key = this.normalize(level);
    return this.ensure(key);
  },

  updatePercent(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    if (d.total > 0) {
      d.percent = Math.round((d.completed / d.total) * 100);
    } else {
      d.percent = 0;
    }
  },

  resetLevel(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    d.masteredSentences = [];
    d.completed = 0;
    this.updatePercent(key);
    this.save();
  },

  load() {
    try {
      return JSON.parse(localStorage.getItem("progress5")) || {};
    } catch (e) {
      return {};
    }
  },

  saveRaw(obj) {
    this.data = obj || {};
    localStorage.setItem("progress5", JSON.stringify(this.data));
  }
};

/* ------------------------------------------------------
   INIT ON PAGE LOAD
------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  Progress5.init();
});

/* ==========================================================
   LEVEL 6 — HTML-BASED PROGRESS UI
========================================================== */

const Progress6 = {
  data: {},

  init() {
    try {
      this.data = JSON.parse(localStorage.getItem("progress6")) || {};
    } catch (e) {
      this.data = {};
    }
  },

  save() {
    localStorage.setItem("progress6", JSON.stringify(this.data));
  },

  normalize(level) {
    if (typeof level === "number") return `level${level}`;
    return level;
  },

  ensure(level) {
    const key = this.normalize(level);
    if (!this.data[key]) {
      this.data[key] = {
        total: 0,              // total sentences in Level 6
        completed: 0,          // number of correctly mastered sentences
        percent: 0,            // completion %
        masteredSentences: []  // list of sentence IDs answered correctly
      };
    }
    return this.data[key];
  },

  setTotal(level, total) {
    const key = this.normalize(level);
    const d = this.ensure(key);
    d.total = total;
    this.updatePercent(key);
    this.save();
  },

  // ⭐ Only called when the user answers correctly
  markSentenceComplete(level, sentenceId) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    if (!d.masteredSentences.includes(sentenceId)) {
      d.masteredSentences.push(sentenceId);
      d.completed = d.masteredSentences.length;
      this.updatePercent(key);
      this.save();
    }
  },

  getLevelProgress(level) {
    const key = this.normalize(level);
    return this.ensure(key);
  },

  updatePercent(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    if (d.total > 0) {
      d.percent = Math.round((d.completed / d.total) * 100);
    } else {
      d.percent = 0;
    }
  },

  resetLevel(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    d.masteredSentences = [];
    d.completed = 0;
    this.updatePercent(key);
    this.save();
  },

  load() {
    try {
      return JSON.parse(localStorage.getItem("progress6")) || {};
    } catch (e) {
      return {};
    }
  },

  saveRaw(obj) {
    this.data = obj || {};
    localStorage.setItem("progress6", JSON.stringify(this.data));
  }
};

/* ------------------------------------------------------
   INIT ON PAGE LOAD
------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  Progress6.init();
});


/* ==========================================================
   LEVEL 7 — HTML-BASED PROGRESS UI
========================================================== */
/* ==========================================================
   LEVEL 7 — HTML-BASED PROGRESS UI (MIRRORED FROM LEVEL 6)
========================================================== */

const Progress7 = {
  data: {},

  init() {
    try {
      this.data = JSON.parse(localStorage.getItem("progress7")) || {};
    } catch (e) {
      this.data = {};
    }
  },

  save() {
    localStorage.setItem("progress7", JSON.stringify(this.data));
  },

  normalize(level) {
    if (typeof level === "number") return `level${level}`;
    return level;
  },

  ensure(level) {
    const key = this.normalize(level);
    if (!this.data[key]) {
      this.data[key] = {
        total: 0,              // total sentences in Level 7
        completed: 0,          // number of correctly mastered sentences
        percent: 0,            // completion %
        masteredSentences: []  // list of sentence IDs answered correctly
      };
    }
    return this.data[key];
  },

  setTotal(level, total) {
    const key = this.normalize(level);
    const d = this.ensure(key);
    d.total = total;
    this.updatePercent(key);
    this.save();
  },

  // ⭐ Only called when the user answers correctly
  markSentenceComplete(level, sentenceId) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    if (!d.masteredSentences.includes(sentenceId)) {
      d.masteredSentences.push(sentenceId);
      d.completed = d.masteredSentences.length;
      this.updatePercent(key);
      this.save();
    }
  },

  getLevelProgress(level) {
    const key = this.normalize(level);
    return this.ensure(key);
  },

  updatePercent(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    if (d.total > 0) {
      d.percent = Math.round((d.completed / d.total) * 100);
    } else {
      d.percent = 0;
    }
  },

  resetLevel(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    d.masteredSentences = [];
    d.completed = 0;
    this.updatePercent(key);
    this.save();
  },

  load() {
    try {
      return JSON.parse(localStorage.getItem("progress7")) || {};
    } catch (e) {
      return {};
    }
  },

  saveRaw(obj) {
    this.data = obj || {};
    localStorage.setItem("progress7", JSON.stringify(this.data));
  }
};

/* ------------------------------------------------------
   INIT ON PAGE LOAD
------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  Progress7.init();
});


/* ==========================================================
   LEVEL 8 — HTML-BASED PROGRESS UI
========================================================== */
const Progress8 = {
  data: {
    total: 0,
    completed: 0,
    percent: 0,
    masteredSentences: []
  },

  /* ==========================================================
     INIT — safely merge saved data without breaking structure
  ========================================================== */
  init() {
    try {
      const saved = JSON.parse(localStorage.getItem("progress8"));

      if (saved && typeof saved === "object") {
        this.data = {
          total: saved.total ?? this.data.total,
          completed: saved.completed ?? 0,
          percent: saved.percent ?? 0,
          masteredSentences: Array.isArray(saved.masteredSentences)
            ? saved.masteredSentences
            : []
        };
      }
    } catch (e) {
      console.warn("[Progress8] Failed to load, using defaults");
    }
  },

  /* ==========================================================
     SAVE
  ========================================================== */
  save() {
    localStorage.setItem("progress8", JSON.stringify(this.data));
  },

  /* ==========================================================
     SET TOTAL SENTENCES
  ========================================================== */
  setTotal(total) {
    this.data.total = total;
    this.updatePercent();
    this.save();
  },

  /* ==========================================================
     MARK SENTENCE COMPLETE (Level 8 uses only sentenceId)
  ========================================================== */
  markSentenceComplete(sentenceId) {
    if (!sentenceId) {
      console.warn("[Progress8] markSentenceComplete called with no sentenceId");
      return;
    }

    if (!this.data.masteredSentences.includes(sentenceId)) {
      this.data.masteredSentences.push(sentenceId);
      this.data.completed = this.data.masteredSentences.length;
      this.updatePercent();
      this.save();
    }
  },

  /* ==========================================================
     GET PROGRESS
  ========================================================== */
  getProgress() {
    return this.data;
  },

  /* ==========================================================
     UPDATE PERCENT
  ========================================================== */
  updatePercent() {
    if (this.data.total > 0) {
      this.data.percent = Math.round(
        (this.data.completed / this.data.total) * 100
      );
    } else {
      this.data.percent = 0;
    }
  },

  /* ==========================================================
     RESET (keeps total)
  ========================================================== */
  reset() {
    this.data = {
      total: this.data.total,
      completed: 0,
      percent: 0,
      masteredSentences: []
    };
    this.save();
  }
};

/* ==========================================================
   INIT ON PAGE LOAD
========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  Progress8.init();
});


/* ==========================================================
   Level 9 Progess Bar
========================================================== */



const Progress9 = {
  data: {
    total: 0,
    completed: 0,
    percent: 0,
    masteredSentences: []
  },

  /* ==========================================================
     INIT — safely merge saved data without breaking structure
  ========================================================== */
  init() {
    try {
      const saved = JSON.parse(localStorage.getItem("progress9"));

      if (saved && typeof saved === "object") {
        this.data = {
          total: saved.total ?? this.data.total,
          completed: saved.completed ?? 0,
          percent: saved.percent ?? 0,
          masteredSentences: Array.isArray(saved.masteredSentences)
            ? saved.masteredSentences
            : []
        };
      }
    } catch (e) {
      console.warn("[Progress9] Failed to load, using defaults");
    }
  },

  /* ==========================================================
     SAVE
  ========================================================== */
  save() {
    localStorage.setItem("progress9", JSON.stringify(this.data));
  },

  /* ==========================================================
     SET TOTAL SENTENCES
  ========================================================== */
  setTotal(total) {
    this.data.total = total;
    this.updatePercent();
    this.save();
  },

  /* ==========================================================
     MARK SENTENCE COMPLETE (Level 9 uses only sentenceId)
  ========================================================== */
  markSentenceComplete(sentenceId) {
    if (!sentenceId) {
      console.warn("[Progress9] markSentenceComplete called with no sentenceId");
      return;
    }

    if (!this.data.masteredSentences.includes(sentenceId)) {
      this.data.masteredSentences.push(sentenceId);
      this.data.completed = this.data.masteredSentences.length;
      this.updatePercent();
      this.save();
    }
  },

  /* ==========================================================
     GET PROGRESS
  ========================================================== */
  getProgress() {
    return this.data;
  },

  /* ==========================================================
     UPDATE PERCENT
  ========================================================== */
  updatePercent() {
    if (this.data.total > 0) {
      this.data.percent = Math.round(
        (this.data.completed / this.data.total) * 100
      );
    } else {
      this.data.percent = 0;
    }
  },

  /* ==========================================================
     RESET (keeps total)
  ========================================================== */
  reset() {
    this.data = {
      total: this.data.total,
      completed: 0,
      percent: 0,
      masteredSentences: []
    };
    this.save();
  }
};
/*================================================
   INIT ON PAGE LOAD
========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  Progress9.init();
});



/* ==========================================================
  Level 10 — mirrored from Level 9
========================================================== */
/* ==========================================================
   Level 10 Progress Engine
   Mirrors Level 9 structure exactly
========================================================== */
const Progress10 = {
  data: {
    total: 0,
    completed: 0,
    percent: 0,
    masteredSentences: []
  },

  /* ==========================================================
     INIT — load saved data OR fall back to memory-only mode
  ========================================================== */
  init() {
    try {
      const raw = localStorage.getItem("progress10");
      if (!raw) return;

      const saved = JSON.parse(raw);

      if (saved && typeof saved === "object") {
        this.data.total = saved.total || 0;
        this.data.completed = saved.completed || 0;
        this.data.percent = saved.percent || 0;
        this.data.masteredSentences = Array.isArray(saved.masteredSentences)
          ? saved.masteredSentences
          : [];
      }
    } catch (e) {
      console.warn("[Progress10] Storage blocked — running in memory-only mode");
      // Data stays at defaults
    }
  },

  /* ==========================================================
     SAVE — safe write (won’t crash if storage is blocked)
  ========================================================== */
  save() {
    try {
      localStorage.setItem("progress10", JSON.stringify(this.data));
    } catch (e) {
      console.warn("[Progress10] Save failed — storage blocked");
    }
  },

  /* ==========================================================
     SET TOTAL SENTENCES
  ========================================================== */
  setTotal(total) {
    this.data.total = total;
    this.updatePercent();
    this.save();
  },

  /* ==========================================================
     MARK SENTENCE COMPLETE (public API)
  ========================================================== */
  markSentenceComplete(sentenceId) {
    if (!sentenceId) {
      console.warn("[Progress10] markSentenceComplete called with no sentenceId");
      return;
    }

    if (!this.data.masteredSentences.includes(sentenceId)) {
      this.data.masteredSentences.push(sentenceId);
      this.data.completed = this.data.masteredSentences.length;
      this.updatePercent();
      this.save();
    }
  },

  // Backwards compatibility
  markCompleted(sentenceId) {
    this.markSentenceComplete(sentenceId);
  },

  /* ==========================================================
     GET PROGRESS
  ========================================================== */
  getProgress() {
    return this.data;
  },

  /* ==========================================================
     UPDATE PERCENT
  ========================================================== */
  updatePercent() {
    if (this.data.total > 0) {
      this.data.percent = Math.round(
        (this.data.completed / this.data.total) * 100
      );
    } else {
      this.data.percent = 0;
    }
  },

  /* ==========================================================
     RESET (keeps total)
  ========================================================== */
  reset() {
    this.data.completed = 0;
    this.data.percent = 0;
    this.data.masteredSentences = [];
    this.save();
  }
};

/* ==========================================================
   INIT ON PAGE LOAD
========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  Progress10.init();
});

/* ==========================================================
   BLOG / PODCAST STORAGE
========================================================== */

/* ==========================================================
   BLOG / PODCAST STORAGE (merged into Progress)
========================================================== */
/* ==========================================================
   BLOG / PODCAST STORAGE (standalone, safe, isolated)
========================================================== */

