/* ==========================================================
   DATASET
========================================================== */

const kaiwaSentences = [

{
    id: "kaiwa1",

    audio: "audio/kaiwa1.wav",

    speaker1:
        "おかあさん",

    line1:
        "おはよう。よく ねむれましたか？",

    speaker2:
        "むすめ",

    line2:
        "おはよう。えっと、しけんの せいで よどおし そわそわして、あまり ねむれなかった。",

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


{
    id: "kaiwa2",

    audio: "audio/kaiwa2.wav",

    speaker1:
        "むすめ",

    line1:
        "おかあさん、あのね。きょうは べんきょうしなくても いいですか？ べんきょうする きに なれないから。",

    speaker2:
        "おかあさん",

    line2:
        "ううん。にちようび いがいは、まいにち べんきょうしなければ なりませんよ。",

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




{
    id: "kaiwa3",

    audio: "audio/kaiwa3.wav",

    speaker1:
        "おんなのこ",

    line1:
        "しまった。スマホの でんちが きれちゃった。",

    speaker2:
        "おとこのこ",

    line2:
        "そうか。じゅうでんするのを わすれたんだろうね。",

    question:
        "どうして おんなのこは こまっていましたか？",

    answer:
        "スマホの でんちが きれたから",

    choices: [

        "スマホの でんちが きれたから",

        "スマホを なくしたから",

        "ともだちから でんわが あったから",

        "じゅうでんきを かったから",

        "スマホが あたらしかったから"

    ]

},



{
    id: "kaiwa4",

    audio: "audio/kaiwa4.wav",

    speaker1:
        "おとうさん",

    line1:
        "ひとつ おねがいが あるんだけど。だいどころの かたづけを てつだってくれない？",

    speaker2:
        "むすめ",

    line2:
        "うん、ぜひ！",

    question:
        "おとうさんは なぜ おねがいを しましたか？",

    answer:
        "だいどころの かたづけを てつだってほしかったから",

    choices: [

        "だいどころの かたづけを てつだってほしかったから",

        "むすめと べんきょうしたかったから",

        "ばんごはんを たべたかったから",

        "かいものに いきたかったから",

        "テレビを みたかったから"

    ]

},




{
    id: "kaiwa5",

    audio: "audio/kaiwa5.wav",

    speaker1:
        "おとうさん",

    line1:
        "きょう がっこうは どうだった？",

    speaker2:
        "むすめ",

    line2:
        "えっと、ひどかったよ。おとこのこと けんかしていて、せんせいに しかられたから。",

    question:
        "どうして むすめは がっこうが ひどかったと おもいましたか？",

    answer:
        "せんせいに しかられたから",

    choices: [

        "せんせいに しかられたから",

        "しゅくだいを わすれたから",

        "ともだちが やすんだから",

        "テストが むずかしかったから",

        "がっこうに おくれたから"

    ]

},


{
    id: "kaiwa6",

    audio: "audio/kaiwa6.wav",

    speaker1:
        "おっと",

    line1:
        "あの、どうして そんなに ゆっくり あるいているの？",

    speaker2:
        "つま",

    line2:
        "まあ、きのう たいへん な うんどうを したから。",

    question:
        "なぜ つまは ゆっくり あるいていましたか？",

    answer:
        "きのう たいへん な うんどうを したから",

    choices: [

        "きのう たいへん な うんどうを したから",

        "あしを けがしたから",

        "みちに まよったから",

        "ともだちを まっていたから",

        "つかれなかったから"

    ]

},



{
    id: "kaiwa7",

    audio: "audio/kaiwa7.wav",

    speaker1:
        "むすめ",

    line1:
        "なんで まいにち うんどうするの？",

    speaker2:
        "おとうと",

    line2:
        "えっと、けんこうのためだよ。",

    question:
        "なぜ おとうとは まいにち うんどうしますか？",

    answer:
        "けんこうのため",

    choices: [

        "けんこうのため",

        "テストのため",

        "おかねを かせぐため",

        "ともだちに あうため",

        "ひまだから"

    ]

},


















];


/* ==========================================================
   GLOBAL VARIABLES
========================================================== */

let kaiwaScore1 = 0;
let kaiwaScore2 = 0;

let kaiwaRound = 0;

let kaiwaCurrentSentence = null;

let kaiwaTimerInterval = null;

let currentKaiwaAudio = null;


/* ==========================================================
   AUDIO
========================================================== */

function stopAllKaiwaAudio() {

    if (currentKaiwaAudio) {

        try {

            currentKaiwaAudio.pause();

            currentKaiwaAudio.currentTime = 0;

        } catch (e) {}

    }

}


/* ==========================================================
   SCREEN
========================================================== */

function kaiwa() {

    stopAllKaiwaAudio();

    window.currentLevel = "kaiwa";

    kaiwaScore1 = 0;
    kaiwaScore2 = 0;

    kaiwaRound = 0;

    updateKaiwaScorekeepers();

    KaiwaProgress.setTotal(
        "kaiwa",
        kaiwaSentences.length
    );

    KAIWA.renderProgress();

    wireKaiwaReplayButton();

    showScreen(
        "kaiwaScreen"
    );

    kaiwaNextRound();

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

window.KAIWA =
    window.KAIWA || {};

KAIWA.renderProgress =
function () {

    const currentRound =
        Math.min(
            Math.max(
                kaiwaRound,
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
            "#kaiwaProgress1, #kaiwaProgress2"
        );

    wrappers.forEach(wrapper => {

        const label =
            wrapper.querySelector(
                ".kaiwa-progress-label"
            );

        const bar =
            wrapper.querySelector(
                ".kaiwa-progress-bar"
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
        "kaiwaQuestion"
    ).textContent =
        kaiwaCurrentSentence.question;

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
                ? "kaiwaContainer1"
                : "kaiwaContainer2"

        );

    container.innerHTML = "";

    const choices =
        shuffleArray(
            [...kaiwaCurrentSentence.choices]
        );

    choices.forEach(choice => {

        const btn =
            document.createElement(
                "button"
            );

        btn.className =
            "kaiwaBtn";

        btn.textContent =
            choice;

        btn.addEventListener(
            "click",
            () => {

                checkKaiwaAnswer(
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

function checkKaiwaAnswer(
    player,
    selectedChoice,
    button
) {

    if (

        selectedChoice ===
        kaiwaCurrentSentence.answer

    ) {

        button.classList.add(
            "correct"
        );

        kaiwaPlayerWins(
            player
        );

    }
    else {

        button.classList.add(
            "wrong"
        );

    }

}


/* ==========================================================
   PLAYER WIN
========================================================== */

function kaiwaPlayerWins(
    player
) {

    clearInterval(
        kaiwaTimerInterval
    );

    if (player === 1) {

        kaiwaScore1++;

    }
    else {

        kaiwaScore2++;

    }

    updateKaiwaScorekeepers();

    KaiwaProgress.markSentenceComplete(
        "kaiwa",
        kaiwaCurrentSentence.id
    );

    KAIWA.renderProgress();

    const reveal =
        document.getElementById(
            "kaiwaReveal"
        );

    reveal.innerHTML = `
        <div>
            ${kaiwaCurrentSentence.answer}
        </div>
    `;

    reveal.style.display =
        "block";

    setTimeout(() => {

        reveal.style.display =
            "none";

        kaiwaNextRound();

    }, 5000);

}


/* ==========================================================
   SCOREKEEPERS
========================================================== */

function updateKaiwaScorekeepers() {

    document.getElementById(
        "kaiwaScore1"
    ).textContent =
        kaiwaScore1;

    document.getElementById(
        "kaiwaScore2"
    ).textContent =
        kaiwaScore2;

}


/* ==========================================================
   TIMER
========================================================== */

function startKaiwaTimer(
    onExpire
) {

    let timeLeft = 30;

    const timer =
        document.getElementById(
            "kaiwaTimer"
        );

    timer.textContent =
        timeLeft;

    clearInterval(
        kaiwaTimerInterval
    );

    kaiwaTimerInterval =
        setInterval(() => {

            timeLeft--;

            timer.textContent =
                timeLeft;

            if (timeLeft <= 0) {

                clearInterval(
                    kaiwaTimerInterval
                );

                onExpire();

            }

        }, 1000);

}


/* ==========================================================
   REPLAY BUTTON
========================================================== */

function wireKaiwaReplayButton() {

    const btn =
        document.getElementById(
            "kaiwaReplayBtn"
        );

    if (!btn) return;

    btn.onclick = () => {

        playKaiwaSentence(
            kaiwaCurrentSentence
        );

    };

}


/* ==========================================================
   AUDIO
========================================================== */

function playKaiwaSentence(sentence)
{
    console.log(
        "Loading:",
        sentence.audio
    );

    stopAllKaiwaAudio();

    currentKaiwaAudio =
        new Audio(sentence.audio);

    currentKaiwaAudio.play();
}


/* ==========================================================
   SHUFFLE
========================================================== */

function shuffleArray(arr) {

    const copy =
        [...arr];

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

function kaiwaNextRound() {

    kaiwaRound++;

    KAIWA.renderProgress();

    if (kaiwaRound > 5) {

        clearInterval(
            kaiwaTimerInterval
        );

        alert(`Game Over!

Player 1: ${kaiwaScore1}

Player 2: ${kaiwaScore2}`);

        kaiwa();

        return;

    }

    kaiwaCurrentSentence =
        kaiwaSentences[
            Math.floor(
                Math.random() *
                kaiwaSentences.length
            )
        ];

    renderQuestion();

    renderPlayerBoard(1);

    renderPlayerBoard(2);

    playKaiwaSentence(
        kaiwaCurrentSentence
    );

    startKaiwaTimer(
        kaiwaNextRound
    );

}


/* ==========================================================
   AUTO START
========================================================== */

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            kaiwa();

        }, 500);

    }
);