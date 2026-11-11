/* ==========================================================
   WAKIMAERU PROGRESS ENGINE
========================================================== */

const WakimaeruProgress = {

  data: {},

  init() {

    try {

      this.data =
        JSON.parse(
          localStorage.getItem("wakimaeruProgress")
        ) || {};

    } catch (e) {

      this.data = {};

    }

  },

  save() {

    localStorage.setItem(
      "wakimaeruProgress",
      JSON.stringify(this.data)
    );

  },

  normalize(level) {

    return typeof level === "number"
      ? `level${level}`
      : level;

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

    if (
      !d.masteredSentences.includes(
        sentenceId
      )
    ) {

      d.masteredSentences.push(
        sentenceId
      );

      d.completed =
        d.masteredSentences.length;

      this.updatePercent(key);

      this.save();

    }

  },

  getLevelProgress(level) {

    return this.ensure(
      this.normalize(level)
    );

  },

  updatePercent(level) {

    const key = this.normalize(level);

    const d = this.ensure(key);

    d.percent =
      d.total > 0
        ? Math.round(
            (
              d.completed /
              d.total
            ) * 100
          )
        : 0;

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

      return JSON.parse(
        localStorage.getItem(
          "wakimaeruProgress"
        )
      ) || {};

    } catch (e) {

      return {};

    }

  },

  saveRaw(obj) {

    this.data = obj || {};

    localStorage.setItem(
      "wakimaeruProgress",
      JSON.stringify(this.data)
    );

  }

};

document.addEventListener(
  "DOMContentLoaded",
  () => WakimaeruProgress.init()
);