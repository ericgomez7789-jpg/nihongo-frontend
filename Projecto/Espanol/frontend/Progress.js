/* ----------------------------------------------------------
   PROGRESS ENGINE — SPANISH VERSION (LEVELS 1–6 ONLY)
   Unified, offline-first, cloud-ready
---------------------------------------------------------- */

/* ==========================================================
   LEVEL 1 — BASE PROGRESS
========================================================== */

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
    return typeof level === "number" ? `level${level}` : level;
  },

  ensure(level) {
    const key = this.normalize(level);
    if (!this.data[key]) {
      this.data[key] = { total: 0, completed: 0, percent: 0, masteredSentences: [] };
    }
    return this.data[key];
  },

  setTotal(level, total) {
    const d = this.ensure(level);
    d.total = total;
    this.updatePercent(level);
    this.save();
  },

  markSentenceComplete(level, sentenceId) {
    const d = this.ensure(level);
    if (!d.masteredSentences.includes(sentenceId)) {
      d.masteredSentences.push(sentenceId);
      d.completed = d.masteredSentences.length;
      this.updatePercent(level);
      this.save();
    }
  },

  getLevelProgress(level) {
    return this.ensure(level);
  },

  getProgress() {
    return this.getLevelProgress("level1");
  },

  updatePercent(level) {
    const d = this.ensure(level);
    d.percent = d.total > 0 ? Math.round((d.completed / d.total) * 100) : 0;
  },

  resetLevel(level) {
    const d = this.ensure(level);
    d.masteredSentences = [];
    d.completed = 0;
    this.updatePercent(level);
    this.save();
  }
};

document.addEventListener("DOMContentLoaded", () => Progress.init());


/* ==========================================================
   TEMPLATE MAKER FOR LEVELS 2–6
========================================================== */

function createProgressModule(storageKey, levelKey) {
  return {
    data: {},

    init() {
      try {
        this.data = JSON.parse(localStorage.getItem(storageKey)) || {};
      } catch (e) {
        this.data = {};
      }
    },

    save() {
      localStorage.setItem(storageKey, JSON.stringify(this.data));
    },

    normalize(level) {
      return typeof level === "number" ? `level${level}` : level;
    },

    ensure(level) {
      const key = this.normalize(level);
      if (!this.data[key]) {
        this.data[key] = { total: 0, completed: 0, percent: 0, masteredSentences: [] };
      }
      return this.data[key];
    },

    setTotal(level, total) {
      const d = this.ensure(level);
      d.total = total;
      this.updatePercent(level);
      this.save();
    },

    markSentenceComplete(level, sentenceId) {
      const d = this.ensure(level);
      if (!d.masteredSentences.includes(sentenceId)) {
        d.masteredSentences.push(sentenceId);
        d.completed = d.masteredSentences.length;
        this.updatePercent(level);
        this.save();
      }
    },

    getLevelProgress(level) {
      return this.ensure(level);
    },

    // ⭐ Needed for Level‑4 split‑column module
    getProgress() {
      return this.getLevelProgress(levelKey);
    },

    updatePercent(level) {
      const d = this.ensure(level);
      d.percent = d.total > 0 ? Math.round((d.completed / d.total) * 100) : 0;
    },

    resetLevel(level) {
      const d = this.ensure(level);
      d.masteredSentences = [];
      d.completed = 0;
      this.updatePercent(level);
      this.save();
    }
  };
}


/* ==========================================================
   LEVEL 2 — PROGRESS2
========================================================== */
const Progress2 = createProgressModule("progress2", "level2");
document.addEventListener("DOMContentLoaded", () => Progress2.init());


/* ==========================================================
   LEVEL 3 — PROGRESS3
========================================================== */
const Progress3 = createProgressModule("progress3", "level3");
document.addEventListener("DOMContentLoaded", () => Progress3.init());


/* ==========================================================
   LEVEL 4 — PROGRESS4 (SPANISH PARAPHRASING)
========================================================== */
const Progress4 = createProgressModule("progress4", "level4");
document.addEventListener("DOMContentLoaded", () => Progress4.init());


/* ==========================================================
   LEVEL 5 — PROGRESS5
========================================================== */
const Progress5 = createProgressModule("progress5", "level5");
document.addEventListener("DOMContentLoaded", () => Progress5.init());


/* ==========================================================
   LEVEL 6 — PROGRESS6
========================================================== */
const Progress6 = createProgressModule("progress6", "level6");
document.addEventListener("DOMContentLoaded", () => Progress6.init());
