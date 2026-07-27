/* ----------------------------------------------------------
   PROGRESS — Level 1 (Original)
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

    d.percent = d.total > 0
      ? Math.round((d.completed / d.total) * 100)
      : 0;
  },

  resetLevel(level) {
    const key = this.normalize(level);
    const d = this.ensure(key);

    d.masteredSentences = [];
    d.completed = 0;
    this.updatePercent(key);
    this.save();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Progress.init();
});


/* ----------------------------------------------------------
   TEMPLATE MAKER FOR LEVELS 2–6
---------------------------------------------------------- */

function createProgressModule(storageKey) {
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

      d.percent = d.total > 0
        ? Math.round((d.completed / d.total) * 100)
        : 0;
    },

    resetLevel(level) {
      const key = this.normalize(level);
      const d = this.ensure(key);

      d.masteredSentences = [];
      d.completed = 0;
      this.updatePercent(key);
      this.save();
    }
  };
}


/* ----------------------------------------------------------
   PROGRESS2 — Level 2
---------------------------------------------------------- */

const Progress2 = createProgressModule("progress2");
document.addEventListener("DOMContentLoaded", () => Progress2.init());


/* ----------------------------------------------------------
   PROGRESS3 — Level 3
---------------------------------------------------------- */

const Progress3 = createProgressModule("progress3");
document.addEventListener("DOMContentLoaded", () => Progress3.init());


/* ----------------------------------------------------------
   PROGRESS4 — Level 4
---------------------------------------------------------- */

const Progress4 = createProgressModule("progress4");
document.addEventListener("DOMContentLoaded", () => Progress4.init());


/* ----------------------------------------------------------
   PROGRESS5 — Level 5
---------------------------------------------------------- */

const Progress5 = createProgressModule("progress5");
document.addEventListener("DOMContentLoaded", () => Progress5.init());


/* ----------------------------------------------------------
   PROGRESS6 — Level 6
---------------------------------------------------------- */

const Progress6 = createProgressModule("progress6");
document.addEventListener("DOMContentLoaded", () => Progress6.init());
