/* ==========================================================
   LEVEL 0 — HTML-BASED PROGRESS UI
========================================================== */

const Progress0 = {
  data: {},

  init() {
    try {
      this.data = JSON.parse(localStorage.getItem("progress0")) || {};
    } catch (e) {
      this.data = {};
    }
  },

  save() {
    localStorage.setItem("progress0", JSON.stringify(this.data));
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
    return this.ensure(this.normalize(level));
  },

  updatePercent(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);
    d.percent = d.total > 0 ? Math.round((d.completed / d.total) * 100) : 0;
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
      return JSON.parse(localStorage.getItem("progress0")) || {};
    } catch (e) {
      return {};
    }
  },

  saveRaw(obj) {
    this.data = obj || {};
    localStorage.setItem("progress0", JSON.stringify(this.data));
  }
};

document.addEventListener("DOMContentLoaded", () => Progress0.init());



/* ==========================================================
   LEVEL 1 — BASE PROGRESS ENGINE
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
    return this.ensure(this.normalize(level));
  },

  updatePercent(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);
    d.percent = d.total > 0 ? Math.round((d.completed / d.total) * 100) : 0;
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

// console.log(">>> Progress4 LOADED");

const Progress4 = createProgressModule("progress4", "level4");

// Auto-init removed (Option A)
// document.addEventListener("DOMContentLoaded", () => Progress4.init());



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



/* ==========================================================
   LEVEL 7 — PROGRESS7
========================================================== */

const Progress7 = createProgressModule("progress7", "level7");
document.addEventListener("DOMContentLoaded", () => Progress7.init());



/* ==========================================================
   LEVEL 8 — PROGRESS8
========================================================== */

const Progress8 = {
  data: { total: 0, completed: 0, percent: 0, masteredSentences: [] },

  init() {
    try {
      const saved = JSON.parse(localStorage.getItem("progress8"));
      if (saved && typeof saved === "object") {
        this.data.total = saved.total ?? this.data.total;
        this.data.completed = saved.completed ?? 0;
        this.data.percent = saved.percent ?? 0;
        this.data.masteredSentences = Array.isArray(saved.masteredSentences)
          ? saved.masteredSentences
          : [];
      }
    } catch (e) {
      console.warn("[Progress8] Failed to load, using defaults");
    }
  },

  save() {
    localStorage.setItem("progress8", JSON.stringify(this.data));
  },

  setTotal(total) {
    this.data.total = total;
    this.updatePercent();
    this.save();
  },

  markSentenceComplete(sentenceId) {
    if (!sentenceId) return;

    if (!this.data.masteredSentences.includes(sentenceId)) {
      this.data.masteredSentences.push(sentenceId);
      this.data.completed = this.data.masteredSentences.length;
      this.updatePercent();
      this.save();
    }
  },

  getProgress() {
    return this.data;
  },

  updatePercent() {
    this.data.percent =
      this.data.total > 0
        ? Math.round((this.data.completed / this.data.total) * 100)
        : 0;
  },

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

document.addEventListener("DOMContentLoaded", () => Progress8.init());



/* ==========================================================
   LEVEL 9 — PROGRESS9
========================================================== */

const Progress9 = {
  data: { total: 0, completed: 0, percent: 0, masteredSentences: [] },

  init() {
    try {
      const saved = JSON.parse(localStorage.getItem("progress9"));
      if (saved && typeof saved === "object") {
        this.data.total = saved.total ?? this.data.total;
        this.data.completed = saved.completed ?? 0;
        this.data.percent = saved.percent ?? 0;
        this.data.masteredSentences = Array.isArray(saved.masteredSentences)
          ? saved.masteredSentences
          : [];
      }
    } catch (e) {
      console.warn("[Progress9] Failed to load, using defaults");
    }
  },

  save() {
    localStorage.setItem("progress9", JSON.stringify(this.data));
  },

  setTotal(total) {
    this.data.total = total;
    this.updatePercent();
    this.save();
  },

  markSentenceComplete(sentenceId) {
    if (!sentenceId) return;

    if (!this.data.masteredSentences.includes(sentenceId)) {
      this.data.masteredSentences.push(sentenceId);
      this.data.completed = this.data.masteredSentences.length;
      this.updatePercent();
      this.save();
    }
  },

  getProgress() {
    return this.data;
  },

  updatePercent() {
    this.data.percent =
      this.data.total > 0
        ? Math.round((this.data.completed / this.data.total) * 100)
        : 0;
  },

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

document.addEventListener("DOMContentLoaded", () => Progress9.init());



/* ==========================================================
   LEVEL 10 — PROGRESS10
========================================================== */

const Progress10 = {
  data: { total: 0, completed: 0, percent: 0, masteredSentences: [] },

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
    }
  },

  save() {
    try {
      localStorage.setItem("progress10", JSON.stringify(this.data));
    } catch (e) {
      console.warn("[Progress10] Save blocked");
    }
  },

  setTotal(total) {
    this.data.total = total;
    this.updatePercent();
    this.save();
  },

  markSentenceComplete(sentenceId) {
    if (!sentenceId) return;

    if (!this.data.masteredSentences.includes(sentenceId)) {
      this.data.masteredSentences.push(sentenceId);
      this.data.completed = this.data.masteredSentences.length;
      this.updatePercent();
      this.save();
    }
  },

  getProgress() {
    return this.data;
  },

  updatePercent() {
    this.data.percent =
      this.data.total > 0
        ? Math.round((this.data.completed / this.data.total) * 100)
        : 0;
  },

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

document.addEventListener("DOMContentLoaded", () => Progress10.init());
