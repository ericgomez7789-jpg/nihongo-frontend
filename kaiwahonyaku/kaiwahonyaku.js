/* ==========================================================
   DATASET
========================================================== */

const kaiwaSentences = [

{
    id: "kaiwa1",

    audio: "Audio/kaiwa1.wav",

    speaker1:
        "おかあさん",

    line1:
        "おはよう。よく ねむれましたか？",

    speaker2:
        "むすめ",

    line2:
        "おはよう。えっと、しけんの せいで よどおし そわそわして、あまり ねむれなかった。",

    translation:
        "Mother: Good morning. Did you sleep well?\n\nDaughter: Good morning. Well, I was so worried about the exam that I felt restless all night and couldn't sleep very much.",

    translationChoices: [

        "Mother: Good morning. Did you sleep well?\n\nDaughter: Good morning. Well, I was so worried about the exam that I felt restless all night and couldn't sleep very much.",

        "Mother: Good morning. Did you finish your homework?\n\nDaughter: Yes, I finished everything before breakfast.",

        "Mother: Why are you crying?\n\nDaughter: Because I lost my favorite toy yesterday.",

        "Mother: Are you hungry?\n\nDaughter: Yes, I haven't eaten anything all day.",

        "Mother: How was school?\n\nDaughter: It was great. I played with my friends all afternoon."

    ],

    question:
        "むすめは なぜ あまり ねむれませんでしたか？",

    answer:
        "しけんが しんぱいだったから",

    choices: [

        "しけんが しんぱいだったから",

        "あさ はやく おきたから",

        "おなかが すいていたから",

        "びょうきだったから",

        "ともだちと はなしていたから"

    ]

},

// kaiwa2 starts here
{
    id: "kaiwa2",

    audio: "Audio/kaiwa2.wav",

    speaker1:
        "むすめ",

    line1:
        "おかあさん、あのね。きょうは べんきょうしなくても いいですか？ べんきょうする きに なれないから。",

    speaker2:
        "おかあさん",

    line2:
        "ううん。にちようび いがいは、まいにち べんきょうしなければ なりませんよ。",

    translation:
        "Daughter: Mom, um... is it okay if I don't study today? I just can't get myself in the mood to study.\n\nMother: No. Except for Sundays, you must study every day.",

    translationChoices: [

        "Daughter: Mom, um... is it okay if I don't study today? I just can't get myself in the mood to study.\n\nMother: No. Except for Sundays, you must study every day.",

        "Daughter: Mom, can I go shopping today?\n\nMother: Yes, but don't come home late.",

        "Daughter: Mom, where is my school bag?\n\nMother: It's next to the front door.",

        "Daughter: Mom, can I sleep a little longer?\n\nMother: Okay, but don't miss breakfast.",

        "Daughter: Mom, I finished all my homework.\n\nMother: Great. You worked very hard."
    ],

    question:
        "むすめは なぜ べんきょうしたくないですか？",

    answer:
        "べんきょうする きに なれないから",

    choices: [

        "べんきょうする きに なれないから",

        "ともだちと あそびたいから",

        "おなかが すいているから",

        "もう しゅくだいを おえたから",

        "がっこうが やすみだから"
    ]
},

];






/* ==========================================================
   KAIWA HONYAKU ENGINE
========================================================== */

let kaiwaHonyakuScore1 = 0;
let kaiwaHonyakuScore2 = 0;

let kaiwaHonyakuRound = 0;

let kaiwaHonyakuCurrentSentence = null;

let kaiwaHonyakuTimerInterval = null;

let currentKaiwaHonyakuAudio = null;

let kaiwaHonyakuPlayer1Out = false;
let kaiwaHonyakuPlayer2Out = false;

/* ==========================================================
   AUDIO
========================================================== */

function stopAllKaiwaHonyakuAudio() {

    if (currentKaiwaHonyakuAudio) {

        try {

            currentKaiwaHonyakuAudio.pause();

            currentKaiwaHonyakuAudio.currentTime = 0;

        } catch (e) {}

    }

}

/* ==========================================================
   SCREEN
========================================================== */

function kaiwaHonyaku() {

    stopAllKaiwaHonyakuAudio();

    window.currentLevel =
        "kaiwaHonyaku";

    kaiwaHonyakuScore1 = 0;
    kaiwaHonyakuScore2 = 0;

    kaiwaHonyakuRound = 0;

    updateKaiwaHonyakuScorekeepers();

    KaiwaHonyakuProgress.setTotal(
        "kaiwaHonyaku",
        kaiwaSentences.length
    );

    KAIWAHONYAKU.renderProgress();

    wireKaiwaHonyakuReplayButton();

    showScreen(
        "kaiwaHonyakuScreen"
    );

    kaiwaHonyakuNextRound();

}

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.add(
                "hidden"
            );

        });

    const screen =
        document.getElementById(
            id
        );

    if (screen) {

        screen.classList.remove(
            "hidden"
        );

    }

}

/* ==========================================================
   PROGRESS
========================================================== */

window.KAIWAHONYAKU =
    window.KAIWAHONYAKU || {};

KAIWAHONYAKU.renderProgress =
function () {

    const currentRound =
        Math.min(
            Math.max(
                kaiwaHonyakuRound,
                1
            ),
            5
        );

    const totalRounds = 5;

    const percent =
        (currentRound /
         totalRounds) * 100;

    const wrappers =
        document.querySelectorAll(
            "#kaiwaHonyakuProgress1, #kaiwaHonyakuProgress2"
        );

    wrappers.forEach(wrapper => {

        const label =
            wrapper.querySelector(
                ".kaiwaHonyaku-progress-label"
            );

        const bar =
            wrapper.querySelector(
                ".kaiwaHonyaku-progress-bar"
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
   QUESTION
========================================================== */

function renderQuestion() {

    document.getElementById(
        "kaiwaHonyakuQuestion"
    ).textContent =
        "Which English translation is correct?";

}


/* ==========================================================
   DIALOGUE
========================================================== */

function renderDialogue() {

    document.getElementById(
        "kaiwaHonyakuDialogue"
    ).innerHTML = `

        <strong>
            ${kaiwaHonyakuCurrentSentence.speaker1}
        </strong>

        <br>

        ${kaiwaHonyakuCurrentSentence.line1}

        <br><br>

        <strong>
            ${kaiwaHonyakuCurrentSentence.speaker2}
        </strong>

        <br>

        ${kaiwaHonyakuCurrentSentence.line2}

    `;

}

/* ==========================================================
   TEMP CHOICE BUILDER
   Replace later with:
   sentence.translationChoices
========================================================== */

function buildTranslationChoices() {

    return shuffleArray(

        [
            ...kaiwaHonyakuCurrentSentence.translationChoices
        ]

    );

}

/* ==========================================================
   PLAYER BOARD
========================================================== */

function renderPlayerBoard(
    player
) {

    const container =
        document.getElementById(

            player === 1
                ? "kaiwaHonyakuContainer1"
                : "kaiwaHonyakuContainer2"

        );

    container.innerHTML = "";

    const choices =
        buildTranslationChoices();

    choices.forEach(choice => {

        const btn =
            document.createElement(
                "button"
            );

        btn.className =
            "kaiwaHonyakuBtn";

        btn.textContent =
            choice;

        btn.addEventListener(
            "click",
            () => {

                checkKaiwaHonyakuAnswer(
                    player,
                    choice,
                    btn
                );

            }
        );

        container.appendChild(
            btn
        );

    });

}

/* ==========================================================
   CHECK ANSWER
========================================================== */

function checkKaiwaHonyakuAnswer(
    player,
    selectedChoice,
    button
) {

    if (

        selectedChoice ===
        kaiwaHonyakuCurrentSentence.translation

    ) {

        button.classList.add(
            "correct"
        );

        kaiwaHonyakuPlayerWins(
            player
        );

    }

    else {

        button.classList.add(
            "wrong"
        );

        button.disabled = true;

        if (player === 1) {

            kaiwaHonyakuPlayer1Out = true;

        }

        else {

            kaiwaHonyakuPlayer2Out = true;

        }

        const container =
            document.getElementById(

                player === 1
                    ? "kaiwaHonyakuContainer1"
                    : "kaiwaHonyakuContainer2"

            );

        container
            .querySelectorAll(
                "button"
            )
            .forEach(btn => {

                btn.disabled = true;

            });

        if (

            kaiwaHonyakuPlayer1Out &&
            kaiwaHonyakuPlayer2Out

        ) {

            clearInterval(
                kaiwaHonyakuTimerInterval
            );

            setTimeout(() => {

                kaiwaHonyakuNextRound();

            }, 2000);

        }

    }

}

/* ==========================================================
   PLAYER WIN
========================================================== */

function kaiwaHonyakuPlayerWins(
    player
) {

    clearInterval(
        kaiwaHonyakuTimerInterval
    );

    if (player === 1) {

        kaiwaHonyakuScore1++;

    }

    else {

        kaiwaHonyakuScore2++;

    }

    updateKaiwaHonyakuScorekeepers();

    KaiwaHonyakuProgress
        .markSentenceComplete(
            "kaiwaHonyaku",
            kaiwaHonyakuCurrentSentence.id
        );

    KAIWAHONYAKU.renderProgress();

    const reveal =
        document.getElementById(
            "kaiwaHonyakuReveal"
        );

    reveal.innerHTML = `
        <div>
            ${
                kaiwaHonyakuCurrentSentence.translation ||
                "Translation"
            }
        </div>
    `;

    reveal.style.display =
        "block";

    setTimeout(() => {

        reveal.style.display =
            "none";

        kaiwaHonyakuNextRound();

    }, 5000);

}

/* ==========================================================
   SCOREKEEPERS
========================================================== */

function updateKaiwaHonyakuScorekeepers() {

    document.getElementById(
        "kaiwaHonyakuScore1"
    ).textContent =
        kaiwaHonyakuScore1;

    document.getElementById(
        "kaiwaHonyakuScore2"
    ).textContent =
        kaiwaHonyakuScore2;

}

/* ==========================================================
   TIMER
========================================================== */

function startKaiwaHonyakuTimer(
    onExpire
) {

    let timeLeft = 60;

    const timer =
        document.getElementById(
            "kaiwaHonyakuTimer"
        );

    timer.textContent =
        timeLeft;

    clearInterval(
        kaiwaHonyakuTimerInterval
    );

    kaiwaHonyakuTimerInterval =
        setInterval(() => {

            timeLeft--;

            timer.textContent =
                timeLeft;

            if (timeLeft <= 0) {

                clearInterval(
                    kaiwaHonyakuTimerInterval
                );

                onExpire();

            }

        }, 1000);

}

/* ==========================================================
   REPLAY BUTTON
========================================================== */

function wireKaiwaHonyakuReplayButton() {

    const btn =
        document.getElementById(
            "kaiwaHonyakuReplayBtn"
        );

    if (!btn) return;

    btn.onclick = () => {

        playKaiwaHonyakuSentence(
            kaiwaHonyakuCurrentSentence
        );

    };

}

/* ==========================================================
   AUDIO
========================================================== */

function playKaiwaHonyakuSentence(
    sentence
) {

    stopAllKaiwaHonyakuAudio();

    currentKaiwaHonyakuAudio =
        new Audio(
            sentence.audio
        );

    currentKaiwaHonyakuAudio.play();

}

/* ==========================================================
   SHUFFLE
========================================================== */

function shuffleArray(arr) {

    const copy = [...arr];

    for (

        let i =
            copy.length - 1;

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

function kaiwaHonyakuNextRound() {

    kaiwaHonyakuRound++;

    KAIWAHONYAKU.renderProgress();

    if (kaiwaHonyakuRound > 5) {

        clearInterval(
            kaiwaHonyakuTimerInterval
        );

        alert(`Game Over!

Player 1:
${kaiwaHonyakuScore1}

Player 2:
${kaiwaHonyakuScore2}`);

        kaiwaHonyaku();

        return;

    }

    kaiwaHonyakuCurrentSentence =

        kaiwaSentences[
            Math.floor(
                Math.random() *
                kaiwaSentences.length
            )
        ];

    kaiwaHonyakuPlayer1Out = false;
    kaiwaHonyakuPlayer2Out = false;

    renderDialogue();

    renderQuestion();

    renderPlayerBoard(1);

    renderPlayerBoard(2);

    playKaiwaHonyakuSentence(
        kaiwaHonyakuCurrentSentence
    );

    startKaiwaHonyakuTimer(
        kaiwaHonyakuNextRound
    );

}

/* ==========================================================
   AUTO START
========================================================== */

window.addEventListener(

    "load",

    () => {

        setTimeout(() => {

            kaiwaHonyaku();

        }, 500);

    }

);