const wakimaeruSentences = [

{
    id: "wakimaeru1",
    audio: "audio/wakimaeru1.wav",
    answer: "It is 11:14 PM.",
    choices: [
        "It is 11:14 PM.",
        "It is 11:40 PM."
    ]
},




{
    id: "wakimaeru2",
    audio: "audio/wakimaeru2.wav",
    answer: "There are two people.",
    choices: [
        "There is one person.",
        "There are two people."
    ]
},



{
    id: "wakimaeru3",
    audio: "audio/wakimaeru3.wav",
    answer: "It's 7:30 in the morning.",
    choices: [
        "It's 7:00 in the morning.",
        "It's 7:30 in the morning."
    ]
},




{
    id: "wakimaeru4",
    audio: "audio/wakimaeru4.wav",
    answer: "There are two tree branches.",
    choices: [
        "There is one tree branch.",
        "There are two tree branches."
    ]
},




{
    id: "wakimaeru5",
    audio: "audio/wakimaeru5.wav",
    answer: "It's 2:38 in the afternoon.",
    choices: [
        "It's 2:38 in the afternoon.",
        "It's 3:38 in the afternoon."
    ]
},




{
    id: "wakimaeru6",
    audio: "audio/wakimaeru6.wav",
    answer: "There is one banana.",
    choices: [
        "There are two bananas.",
        "There is one banana."
    ]
},




{
    id: "wakimaeru7",
    audio: "audio/wakimaeru7.wav",
    answer: "There are three articles of clothing.",
    choices: [
        "There are two articles of clothing.",
        "There are three articles of clothing."
    ]
},



{
    id: "wakimaeru8",
    audio: "audio/wakimaeru8.wav",
    answer: "It's 8:45 at night.",
    choices: [
        "It's 8:45 at night.",
        "It's 8:15 at night."
    ]
},




{
    id: "wakimaeru9",
    audio: "audio/wakimaeru9.wav",
    answer: "The house has four rooms.",
    choices: [
        "The house has three rooms.",
        "The house has four rooms."
    ]
},




{
    id: "wakimaeru10",
    audio: "audio/wakimaeru10.wav",
    answer: "It's 10:13 in the morning.",
    choices: [
        "It's 10:30 in the morning.",
        "It's 10:13 in the morning."
    ]
},



{
    id: "wakimaeru11",
    audio: "audio/wakimaeru11.wav",
    answer: "It's 6:47 PM.",
    choices: [
        "It's 6:47 AM.",
        "It's 6:47 PM."
    ]
},


{
    id: "wakimaeru12",
    audio: "audio/wakimaeru12.wav",
    answer: "There are five balls.",
    choices: [
        "There are four balls.",
        "There are five balls."
    ]
},







];












/* ==========================================================
   GLOBAL VARIABLES
========================================================== */

let wakimaeruScore1 = 0;
let wakimaeruScore2 = 0;

let wakimaeruRound = 0;

let wakimaeruCurrentSentence = null;

let wakimaeruTimerInterval = null;

let currentSentenceAudio = null;

/* ==========================================================
   AUDIO
========================================================== */

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
    screen.classList.remove("hidden");
  }

}

/* ==========================================================
   SCREEN
========================================================== */

function wakimaeru() {

    stopAllAudio();

    window.currentLevel = "wakimaeru";

    wakimaeruScore1 = 0;
    wakimaeruScore2 = 0;

    wakimaeruRound = 0;

    updateWakimaeruScorekeepers();

    WakimaeruProgress.setTotal(
        "wakimaeru",
        wakimaeruSentences.length
    );

    WAKIMAERU.renderProgress();

    wireWakimaeruReplayButton();

    showScreen("wakimaeruScreen");

    wakimaeruNextRound();
}

/* ==========================================================
   PROGRESS
========================================================== */

window.WAKIMAERU = window.WAKIMAERU || {};

WAKIMAERU.renderProgress = function () {

    const currentRound =
        Math.min(
            Math.max(wakimaeruRound, 1),
            5
        );

    const totalRounds = 5;

    const percent =
        (currentRound / totalRounds) * 100;

    const wrappers =
        document.querySelectorAll(
            "#wakimaeruProgress1, #wakimaeruProgress2"
        );

    wrappers.forEach(wrapper => {

        const label =
            wrapper.querySelector(
                ".wakimaeru-progress-label"
            );

        const bar =
            wrapper.querySelector(
                ".wakimaeru-progress-bar"
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

/* ==========================================================
   PLAYER BOARD
========================================================== */

function renderWakimaeruBoard(player) {

    const container =
        document.getElementById(
            player === 1
                ? "wakimaeruChoices1"
                : "wakimaeruChoices2"
        );

    container.innerHTML = "";

    const choices =
        shuffleArray(
            [...wakimaeruCurrentSentence.choices]
        );

    choices.forEach(choice => {

        const btn =
            document.createElement(
                "button"
            );

        btn.className =
            "wakimaeruBtn";

        btn.textContent =
            choice;

        btn.addEventListener(
            "click",
            () => {

                checkWakimaeruAnswer(
                    player,
                    choice,
                    btn
                );

            }
        );

        container.appendChild(btn);

    });

}

/* ==========================================================
   CHECK ANSWER
========================================================== */

function checkWakimaeruAnswer(
    player,
    selectedChoice,
    button
) {

    if (
        selectedChoice ===
        wakimaeruCurrentSentence.answer
    ) {

        button.classList.add(
            "correct"
        );

        wakimaeruPlayerWins(player);

    } else {

        button.classList.add(
            "wrong"
        );

    }

}

/* ==========================================================
   PLAYER WIN
========================================================== */

function wakimaeruPlayerWins(player) {

    clearInterval(
        wakimaeruTimerInterval
    );

    if (player === 1) {

        wakimaeruScore1++;

    } else {

        wakimaeruScore2++;

    }

    updateWakimaeruScorekeepers();

    WakimaeruProgress.markSentenceComplete(
        "wakimaeru",
        wakimaeruCurrentSentence.id
    );

    WAKIMAERU.renderProgress();

    const reveal =
        document.getElementById(
            "wakimaeruReveal"
        );

    reveal.innerHTML = `
        <div class="wakimaeru-english">
            ${wakimaeruCurrentSentence.answer}
        </div>
    `;

    reveal.style.display =
        "block";

    setTimeout(() => {

        reveal.style.display =
            "none";

        wakimaeruNextRound();

    }, 5000);

}

/* ==========================================================
   SCOREKEEPERS
========================================================== */

function updateWakimaeruScorekeepers() {

    document.getElementById(
        "wakimaeruScore1"
    ).textContent =
        wakimaeruScore1;

    document.getElementById(
        "wakimaeruScore2"
    ).textContent =
        wakimaeruScore2;

}

/* ==========================================================
   TIMER
========================================================== */

function startWakimaeruTimer(
    onExpire
) {

    let timeLeft = 30;

    const timer =
        document.getElementById(
            "wakimaeruTimer"
        );

    timer.textContent =
        timeLeft;

    clearInterval(
        wakimaeruTimerInterval
    );

    wakimaeruTimerInterval =
        setInterval(() => {

            timeLeft--;

            timer.textContent =
                timeLeft;

            if (timeLeft <= 0) {

                clearInterval(
                    wakimaeruTimerInterval
                );

                onExpire();

            }

        }, 1000);

}

/* ==========================================================
   REPLAY BUTTON
========================================================== */

function wireWakimaeruReplayButton() {

    const btn =
        document.getElementById(
            "wakimaeruReplayBtn"
        );

    if (!btn) return;

    btn.onclick = () => {

        playWakimaeruSentence(
            wakimaeruCurrentSentence
        );

    };

}

/* ==========================================================
   AUDIO
========================================================== */

function playWakimaeruSentence(
    sentence
) {

    stopAllAudio();

    currentSentenceAudio =
        new Audio(
            sentence.audio
        );

    currentSentenceAudio.play();

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
   NEXT ROUND
========================================================== */

function wakimaeruNextRound() {

    wakimaeruRound++;

    WAKIMAERU.renderProgress();

    if (wakimaeruRound > 5) {

        clearInterval(
            wakimaeruTimerInterval
        );

        alert(`Game Over!

Player 1: ${wakimaeruScore1}
Player 2: ${wakimaeruScore2}`);

        wakimaeru();

        return;

    }

    wakimaeruCurrentSentence =
        wakimaeruSentences[
            Math.floor(
                Math.random() *
                wakimaeruSentences.length
            )
        ];

    renderWakimaeruBoard(1);
    renderWakimaeruBoard(2);

    playWakimaeruSentence(
        wakimaeruCurrentSentence
    );

    startWakimaeruTimer(
        wakimaeruNextRound
    );

}

/* ==========================================================
   AUTO START
========================================================== */

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            wakimaeru();

        }, 500);

    }
);