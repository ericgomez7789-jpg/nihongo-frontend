const Progress = {
  data: {},

  init() {
    try {
      this.data = JSON.parse(localStorage.getItem("spanish_progress")) || {};
    } catch (e) {
      this.data = {};
    }
  },

  save() {
    localStorage.setItem("spanish_progress", JSON.stringify(this.data));
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
      return JSON.parse(localStorage.getItem("spanish_progress")) || {};
    } catch (e) {
      return {};
    }
  },

  saveRaw(obj) {
    this.data = obj || {};
    localStorage.setItem("spanish_progress", JSON.stringify(this.data));
  }
};

/* ------------------------------------------------------
   INIT ON PAGE LOAD
------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  Progress.init();
});
