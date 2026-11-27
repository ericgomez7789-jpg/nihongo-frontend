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




{
    id: "kaiwa3",

    audio: "Audio/kaiwa3.wav",

    speaker1:
        "おんなのこ",

    line1:
        "しまった。スマホの でんちが きれちゃった。",

    speaker2:
        "おとこのこ",

    line2:
        "そうか。じゅうでんするのを わすれたんだろうね。",

    translation:
        "Girl: Oh no. My phone's battery died.\n\nBoy: I see. You probably forgot to charge it.",

    translationChoices: [

        "Girl: Oh no. My phone's battery died.\n\nBoy: I see. You probably forgot to charge it.",

        "Girl: I lost my phone.\n\nBoy: Then let's go look for it together.",

        "Girl: My phone is brand new.\n\nBoy: That's great. It looks very nice.",

        "Girl: Someone called me earlier.\n\nBoy: Did you answer the call?",

        "Girl: I bought a new charger.\n\nBoy: Good idea. Your old one was broken."
    ],

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

    audio: "Audio/kaiwa4.wav",

    speaker1:
        "おとうさん",

    line1:
        "ひとつ おねがいが あるんだけど。だいどころの かたづけを てつだってくれない？",

    speaker2:
        "むすめ",

    line2:
        "うん、ぜひ！",

    translation:
        "Father: I have a favor to ask. Could you help me clean up the kitchen?\n\nDaughter: Sure, I'd love to!",

    translationChoices: [

        "Father: I have a favor to ask. Could you help me clean up the kitchen?\n\nDaughter: Sure, I'd love to!",

        "Father: Could you help me with my homework?\n\nDaughter: Sorry, I'm busy right now.",

        "Father: Let's go shopping this afternoon.\n\nDaughter: Great idea. Let's leave soon.",

        "Father: What would you like for dinner?\n\nDaughter: I'd like curry and rice.",

        "Father: Do you want to watch TV with me?\n\nDaughter: Maybe later. I'm studying now."
    ],

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

    audio: "Audio/kaiwa5.wav",

    speaker1:
        "おとうさん",

    line1:
        "きょう がっこうは どうだった？",

    speaker2:
        "むすめ",

    line2:
        "えっと、ひどかったよ。おとこのこと けんかしていて、せんせいに しかられたから。",

    translation:
        "Father: How was school today?\n\nDaughter: Well, it was awful. I got into a fight with a boy and the teacher scolded me.",

    translationChoices: [

        "Father: How was school today?\n\nDaughter: Well, it was awful. I got into a fight with a boy and the teacher scolded me.",

        "Father: How was school today?\n\nDaughter: It was great. We played games all day.",

        "Father: Did you finish your homework?\n\nDaughter: Yes, I finished everything before class.",

        "Father: Why are you tired?\n\nDaughter: Because I stayed up late watching movies.",

        "Father: Did you make any friends?\n\nDaughter: Yes, I met many new classmates."
    ],

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

    audio: "Audio/kaiwa6.wav",

    speaker1:
        "おっと",

    line1:
        "あの、どうして そんなに ゆっくり あるいているの？",

    speaker2:
        "つま",

    line2:
        "まあ、きのう たいへん な うんどうを したから。",

    translation:
        "Husband: Um, why are you walking so slowly?\n\nWife: Well, because I did some very intense exercise yesterday.",

    translationChoices: [

        "Husband: Um, why are you walking so slowly?\n\nWife: Well, because I did some very intense exercise yesterday.",

        "Husband: Why are you running so fast?\n\nWife: Because I'm late for work.",

        "Husband: Did you hurt your leg?\n\nWife: Yes, I fell down this morning.",

        "Husband: Where are you going?\n\nWife: I'm going to visit a friend.",

        "Husband: Why are you smiling?\n\nWife: Because I received good news."
    ],

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

    audio: "Audio/kaiwa7.wav",

    speaker1:
        "むすめ",

    line1:
        "なんで まいにち うんどうするの？",

    speaker2:
        "おとうと",

    line2:
        "えっと、けんこうのためだよ。",

    translation:
        "Daughter: Why do you exercise every day?\n\nYounger Brother: Well, it's for my health.",

    translationChoices: [

        "Daughter: Why do you exercise every day?\n\nYounger Brother: Well, it's for my health.",

        "Daughter: Why do you study every day?\n\nYounger Brother: Because I want good grades.",

        "Daughter: Why do you work every day?\n\nYounger Brother: Because I need money.",

        "Daughter: Why do you call your friends every day?\n\nYounger Brother: Because I'm lonely.",

        "Daughter: Why do you stay home every day?\n\nYounger Brother: Because I'm tired."
    ],

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




{
    id: "kaiwa8",

    audio: "Audio/kaiwa8.wav",

    speaker1:
        "むすめ",

    line1:
        "ねえ、となりから おんがくが きこえるの。",

    speaker2:
        "おかあさん",

    line2:
        "えっ？ あんなに おおきな おとが きこえない わけが ないでしょう。",

    translation:
        "Daughter: Hey, I can hear music coming from next door.\n\nMother: Huh? There's no way you couldn't hear a sound that loud.",

    translationChoices: [

        "Daughter: Hey, I can hear music coming from next door.\n\nMother: Huh? There's no way you couldn't hear a sound that loud.",

        "Daughter: I can't hear anything from next door.\n\nMother: That's because it's very quiet today.",

        "Daughter: The neighbors are sleeping.\n\nMother: Then let's be quiet too.",

        "Daughter: I want to listen to music.\n\nMother: Okay, let's turn on the radio.",

        "Daughter: My ears hurt.\n\nMother: Then we should go to the doctor."
    ],

    question:
        "なぜ おかあさんは 「きこえない わけが ない」と いいましたか？",

    answer:
        "おんがくの おとが とても おおきいから",

    choices: [

        "おんがくの おとが とても おおきいから",

        "おんがくが とても しずかだから",

        "となりの ひとが ねているから",

        "おかあさんが おんがくを きらいだから",

        "むすめが みみを ふさいでいたから"
    ]
},





{
    id: "kaiwa9",

    audio: "Audio/kaiwa9.wav",

    speaker1:
        "おかあさん",

    line1:
        "ねえ、しゅくだいを おえたの？",

    speaker2:
        "むすめ",

    line2:
        "えっと、ううん。ともだちと はなしていて、つい きが まぎれていたの。",

    translation:
        "Mother: Hey, have you finished your homework?\n\nDaughter: Um, no. I was talking with a friend and got distracted.",

    translationChoices: [

        "Mother: Hey, have you finished your homework?\n\nDaughter: Um, no. I was talking with a friend and got distracted.",

        "Mother: Did you finish cleaning your room?\n\nDaughter: Yes, I finished it this morning.",

        "Mother: Are you going to meet your friend?\n\nDaughter: Yes, we're meeting after school.",

        "Mother: Why are you studying so hard?\n\nDaughter: Because I have a test tomorrow.",

        "Mother: Did your teacher give homework?\n\nDaughter: No, there wasn't any today."
    ],

    question:
        "なぜ むすめは しゅくだいを おえませんでしたか？",

    answer:
        "ともだちと はなしていて きが まぎれていたから",

    choices: [

        "ともだちと はなしていて きが まぎれていたから",

        "しゅくだいを もう おえていたから",

        "せんせいが やすみだったから",

        "しゅくだいが なかったから",

        "ともだちが しゅくだいを やってくれたから"
    ]
},




{
    id: "kaiwa10",

    audio: "Audio/kaiwa10.wav",

    speaker1:
        "むすめ",

    line1:
        "ちち、しけんに ごうかくしたよ。",

    speaker2:
        "おとうさん",

    line2:
        "へえ、おめでとう。どうりで よろこんでいる わけだ。",

    translation:
        "Daughter: Dad, I passed the exam.\n\nFather: Wow, congratulations. No wonder you're so happy.",

    translationChoices: [

        "Daughter: Dad, I passed the exam.\n\nFather: Wow, congratulations. No wonder you're so happy.",

        "Daughter: Dad, I failed the exam.\n\nFather: That's okay. Better luck next time.",

        "Daughter: Dad, I met my friend today.\n\nFather: That's nice. Did you have fun?",

        "Daughter: Dad, I bought a new book.\n\nFather: Great. I hope you enjoy reading it.",

        "Daughter: Dad, school is closed tomorrow.\n\nFather: Really? That's surprising."
    ],

    question:
        "なぜ むすめは よろこんでいますか？",

    answer:
        "しけんに ごうかくしたから",

    choices: [

        "しけんに ごうかくしたから",

        "ともだちに あったから",

        "おこづかいを もらったから",

        "がっこうが やすみだから",

        "あたらしい ほんを かったから"
    ]
},





{
    id: "kaiwa11",

    audio: "Audio/kaiwa11.wav",

    speaker1:
        "おとうさん",

    line1:
        "ねえ、なんで そんなに いそいでるの？",

    speaker2:
        "むすめ",

    line2:
        "えっと、バスに まにあうためだよ。",

    translation:
        "Father: Hey, why are you in such a hurry?\n\nDaughter: Well, it's so I can catch the bus.",

    translationChoices: [

        "Father: Hey, why are you in such a hurry?\n\nDaughter: Well, it's so I can catch the bus.",

        "Father: Why are you waiting here?\n\nDaughter: I'm waiting for my friend.",

        "Father: Why are you studying so hard?\n\nDaughter: Because I have a test tomorrow.",

        "Father: Why are you carrying that bag?\n\nDaughter: Because I'm going shopping.",

        "Father: Why are you running every day?\n\nDaughter: Because I want to stay healthy."
    ],

    question:
        "なぜ むすめは いそいでいますか？",

    answer:
        "バスに まにあうため",

    choices: [

        "バスに まにあうため",

        "ともだちと あそぶため",

        "がっこうを やすむため",

        "ほんを かうため",

        "うんどうするため"
    ]
},


{
    id: "kaiwa12",

    audio: "Audio/kaiwa12.wav",

    speaker1:
        "つま",

    line1:
        "ねえ、どうやって もりで みちに まよったの？",

    speaker2:
        "おっと",

    line2:
        "まあ、くらくなってきて みちを まちがえたんだ。",

    translation:
        "Wife: Hey, how did you get lost in the forest?\n\nHusband: Well, it started getting dark and I took the wrong path.",

    translationChoices: [

        "Wife: Hey, how did you get lost in the forest?\n\nHusband: Well, it started getting dark and I took the wrong path.",

        "Wife: How did you find your way through the forest?\n\nHusband: I followed a map the whole time.",

        "Wife: Did you go to the forest yesterday?\n\nHusband: No, I stayed home all day.",

        "Wife: Why were you running in the forest?\n\nHusband: Because I was exercising.",

        "Wife: Did your friend show you the way?\n\nHusband: Yes, he guided me through the forest."
    ],

    question:
        "なぜ おっとは もりで みちに まよいましたか？",

    answer:
        "くらくなってきて みちを まちがえたため",

    choices: [

        "くらくなってきて みちを まちがえたため",

        "ちずを みながら あるいていたため",

        "ともだちに あんないしてもらったため",

        "もりに いかなかったため",

        "みちを よく しっていたため"
    ]
},




{
    id: "kaiwa13",

    audio: "Audio/kaiwa13.wav",

    speaker1:
        "つま",

    line1:
        "ねえ、もりで みちに まよったんだし、あちらへ いったら どう？",

    speaker2:
        "おっと",

    line2:
        "まあ、ちずを みなおしましょうか。",

    translation:
        "Wife: Hey, since we're lost in the forest, why don't we go that way?\n\nHusband: Well, shall we look at the map again?",

    translationChoices: [

        "Wife: Hey, since we're lost in the forest, why don't we go that way?\n\nHusband: Well, shall we look at the map again?",

        "Wife: Let's run through the forest.\n\nHusband: Great idea. Let's go faster.",

        "Wife: Do you want to take a break?\n\nHusband: Yes, let's sit down for a while.",

        "Wife: Should we call our friends?\n\nHusband: No, they're already here.",

        "Wife: Do you know this road?\n\nHusband: Yes, I've walked it many times."
    ],

    question:
        "おっとは なにを ていあんしていますか？",

    answer:
        "ちずを みなおすこと",

    choices: [

        "ちずを みなおすこと",

        "あちらへ いくこと",

        "もりを はしること",

        "ともだちを さがすこと",

        "きゅうけいすること"
    ]
},




{
    id: "kaiwa14",

    audio: "Audio/kaiwa14.wav",

    speaker1:
        "おとうさん",

    line1:
        "ねえ、なんで ないているの？",

    speaker2:
        "むすめ",

    line2:
        "えっと、おかあさんの いうことを きかなかったから しかられたの。",

    translation:
        "Father: Hey, why are you crying?\n\nDaughter: Well, I got scolded because I didn't listen to what Mom said.",

    translationChoices: [

        "Father: Hey, why are you crying?\n\nDaughter: Well, I got scolded because I didn't listen to what Mom said.",

        "Father: Why are you laughing?\n\nDaughter: Because my friend told a funny joke.",

        "Father: Why are you studying?\n\nDaughter: Because I have an exam tomorrow.",

        "Father: Why are you upset?\n\nDaughter: Because I lost my favorite toy.",

        "Father: Why are you tired?\n\nDaughter: Because I played sports all day."
    ],

    question:
        "なぜ むすめは ないていましたか？",

    answer:
        "おかあさんの いうことを きかなかったから しかられた",

    choices: [

        "おかあさんの いうことを きかなかったから しかられた",

        "ともだちと けんかしたから",

        "しけんに おちたから",

        "おもちゃを なくしたから",

        "ころんで けがを したから"
    ]
},




{
    id: "kaiwa15",

    audio: "Audio/kaiwa15.wav",

    speaker1:
        "おとうさん",

    line1:
        "ねえ、なんで そんなに わくわくしているの？",

    speaker2:
        "むすめ",

    line2:
        "まあ、もうすぐ すばらしい もよおしに いくのが たのしみなの。",

    translation:
        "Father: Hey, why are you so excited?\n\nDaughter: Well, I'm looking forward to going to a wonderful event soon.",

    translationChoices: [

        "Father: Hey, why are you so excited?\n\nDaughter: Well, I'm looking forward to going to a wonderful event soon.",

        "Father: Why are you crying?\n\nDaughter: Because I lost my favorite toy.",

        "Father: Why are you studying so hard?\n\nDaughter: Because I have an important exam tomorrow.",

        "Father: Why are you upset?\n\nDaughter: Because I argued with my friend.",

        "Father: Why are you staying home today?\n\nDaughter: Because I caught a cold."
    ],

    question:
        "なぜ むすめは こうふんしていましたか？",

    answer:
        "もうすぐ すばらしい もよおしに いくのが たのしみだから",

    choices: [

        "もうすぐ すばらしい もよおしに いくのが たのしみだから",

        "ともだちと けんかしたから",

        "しけんに ごうかくしたから",

        "おもちゃを なくしたから",

        "かぜを ひいたから"
    ]
},




{
    id: "kaiwa16",

    audio: "Audio/kaiwa16.wav",

    speaker1:
        "おとこのこ",

    line1:
        "はは！きみの かみのけ、ぼさぼさだし、すっかり みだれているね。ひとめを きにしていないんだろう？",

    speaker2:
        "おんなのこ",

    line2:
        "まあ、きみだって わらうと まえばが めだつし、かみのけの ながさも ふぞろいで、いっぽんだけ ぴょんと たっているよ。",

    translation:
        "Boy: Ha ha! Your hair is all messy and completely disheveled. You don't care what people think, do you?\n\nGirl: Well, when you laugh, your front teeth stand out, your hair isn't even, and there's one strand sticking straight up.",

    translationChoices: [

        "Boy: Ha ha! Your hair is all messy and completely disheveled. You don't care what people think, do you?\n\nGirl: Well, when you laugh, your front teeth stand out, your hair isn't even, and there's one strand sticking straight up.",

        "Boy: Your test score was amazing.\n\nGirl: Thanks! I studied very hard for it.",

        "Boy: Why are you crying?\n\nGirl: Because I lost my favorite book.",

        "Boy: Your new haircut looks nice.\n\nGirl: Thank you. I like it too.",

        "Boy: Do you want to play outside?\n\nGirl: Sure, let's go to the park."
    ],

    question:
        "なぜ おとこのこは おんなのこを からかいましたか？",

    answer:
        "かみのけが ぼさぼさで、みだれていたから",

    choices: [

        "かみのけが ぼさぼさで、みだれていたから",

        "まえばが めだったから",

        "しけんに おちたから",

        "かぜを ひいていたから",

        "おもちゃを なくしたから"
    ]
},




{
    id: "kaiwa17",

    audio: "Audio/kaiwa17.wav",

    speaker1:
        "おとこのこ",

    line1:
        "はは！きみ、ねむりながら いびきを かくし、あかんぼうみたいに よだれを だらだら たらすんだね。ひとめなんて きにしていないのかもね？",

    speaker2:
        "おんなのこ",

    line2:
        "まあ、きみだって えがおが そんなに ぶきみで ほかの こどもを こわがらせるし、あまつさえ つかいを たのまれても いつも きたいを うらぎるよ。",

    translation:
        "Boy: Ha ha! You snore while you sleep and drool like a baby. Maybe you don't care what other people think at all, huh?\n\nGirl: Well, your smile is so creepy that it scares other children, and on top of that, whenever you're asked to run an errand, you always let people down.",

    translationChoices: [

        "Boy: Ha ha! You snore while you sleep and drool like a baby. Maybe you don't care what other people think at all, huh?\n\nGirl: Well, your smile is so creepy that it scares other children, and on top of that, whenever you're asked to run an errand, you always let people down.",

        "Boy: You study harder than everyone else.\n\nGirl: Well, I want to get a perfect score on the test.",

        "Boy: Why are you carrying so many books?\n\nGirl: Because I have several classes today.",

        "Boy: Do you want to play soccer after school?\n\nGirl: Sure, let's invite everyone.",

        "Boy: Your new haircut looks great.\n\nGirl: Thanks, I just got it yesterday."
    ],

    question:
        "なぜ おとこのこは おんなのこを からかいましたか？",

    answer:
        "ねむりながら いびきを かき、よだれを だらだら たらしていたから",

    choices: [

        "ねむりながら いびきを かき、よだれを だらだら たらしていたから",

        "えがおが ぶきみだったから",

        "つかいを たのまれていたから",

        "しけんに おちたから",

        "おもちゃを なくしたから"
    ]
},




{
    id: "kaiwa18",

    audio: "Audio/kaiwa18.wav",

    speaker1:
        "おとうさん",

    line1:
        "ねえ、あぶらをうるくらいなら、ひとはだぬいでくれるとうれしいな。",

    speaker2:
        "むすめ",

    line2:
        "うん、じかんを むだにしないで、きたいを うらぎらないように するよ。",

    translation:
        "Father: Hey, if you're going to put effort into something, I'd be happy if you gave it your all.\n\nDaughter: Okay. I'll try not to waste time and not to disappoint anyone's expectations.",

    translationChoices: [

        "Father: Hey, if you're going to put effort into something, I'd be happy if you gave it your all.\n\nDaughter: Okay. I'll try not to waste time and not to disappoint anyone's expectations.",

        "Father: Why don't you sell more oil?\n\nDaughter: Okay. I'll open a bigger store tomorrow.",

        "Father: Are you tired today?\n\nDaughter: Yes. I think I'll go to bed early.",

        "Father: Did you finish your homework?\n\nDaughter: Yes. I finished it before dinner.",

        "Father: Do you want to go shopping?\n\nDaughter: Sure. Let's go after lunch."
    ],

    question:
        "なぜ むすめは ひとはだを ぬぐことに しましたか？",

    answer:
        "じかんを むだにせず、きたいを うらぎらないように したかったから",

    choices: [

        "じかんを むだにせず、きたいを うらぎらないように したかったから",

        "もっと あぶらを うりたかったから",

        "ともだちと あそびたかったから",

        "ねむかったから",

        "しゅくだいが おわったから"
    ]
},




{
    id: "kaiwa19",

    audio: "Audio/kaiwa19.wav",

    speaker1:
        "おとうさん",

    line1:
        "ねえ、なんで べんきょうするように たのまれると、いつも たいざんめいどう みたいな さわぎを おこすの？",

    speaker2:
        "むすめ",

    line2:
        "まあ、からだを おしんでいる わけじゃないけど、こしを すえて とりくむのに てを やいているんだ。",

    translation:
        "Father: Hey, why is it that whenever you're asked to study, you always make a huge fuss about it?\n\nDaughter: Well, it's not that I'm trying to spare myself the effort. I just have trouble settling down and sticking with it.",

    translationChoices: [

        "Father: Hey, why is it that whenever you're asked to study, you always make a huge fuss about it?\n\nDaughter: Well, it's not that I'm trying to spare myself the effort. I just have trouble settling down and sticking with it.",

        "Father: Why do you study so hard every day?\n\nDaughter: Because I enjoy studying more than anything.",

        "Father: Why are you exercising every morning?\n\nDaughter: Because my coach told me to.",

        "Father: Did you finish cleaning your room?\n\nDaughter: Yes, I finished it already.",

        "Father: Why are you going to school early?\n\nDaughter: Because I have a club activity."
    ],

    question:
        "なぜ むすめは べんきょうするように たのまれると さわぎを おこしてしまいますか？",

    answer:
        "こしを すえて とりくむのに てを やいているから",

    choices: [

        "こしを すえて とりくむのに てを やいているから",

        "からだを おしみたかったから",

        "べんきょうが だいすきだから",

        "ともだちと あそびたかったから",

        "もう べんきょうが おわっていたから"
    ]
},




{
    id: "kaiwa20",

    audio: "Audio/kaiwa20.wav",

    speaker1:
        "おとこのこ",

    line1:
        "ねえ、なんで きみを みるたびに、うろうろして みちに まよっている みたいに みえるの？",

    speaker2:
        "おんなのこ",

    line2:
        "まあ、おおげさだなあ。バスを みのがさないように、めを ひからせているだけだよ。",

    translation:
        "Boy: Hey, why is it that every time I see you, you look like you're wandering around and completely lost?\n\nGirl: Come on, you're exaggerating. I'm just keeping a sharp eye out so I don't miss the bus.",

    translationChoices: [

        "Boy: Hey, why is it that every time I see you, you look like you're wandering around and completely lost?\n\nGirl: Come on, you're exaggerating. I'm just keeping a sharp eye out so I don't miss the bus.",

        "Boy: Why are you running so fast?\n\nGirl: Because I'm late for school.",

        "Boy: Are you looking for your friend?\n\nGirl: Yes, I haven't seen her all day.",

        "Boy: Why are you standing still?\n\nGirl: I'm waiting for the traffic light to change.",

        "Boy: Did you get lost?\n\nGirl: Yes, I have no idea where I am."
    ],

    question:
        "なぜ おんなのこは うろうろしているように みえましたか？",

    answer:
        "バスを みのがさないように、めを ひからせていたから",

    choices: [

        "バスを みのがさないように、めを ひからせていたから",

        "ほんとうに みちに まよっていたから",

        "ともだちを さがしていたから",

        "うんどうを していたから",

        "かいものに いく ところだったから"
    ]
},





{
    id: "kaiwa21",

    audio: "Audio/kaiwa21.wav",

    speaker1:
        "むすめ",

    line1:
        "ええ、なんで かくれんぼじゅう、さがしに こなかったの？",

    speaker2:
        "おとうさん",

    line2:
        "まあ、きみが ひとつの ところに ながいあいだ みをひそめていたら、あとで おもしろおかしい はなしに なると おもったんだ。",

    translation:
        "Daughter: Hey, why didn't you come look for me during hide-and-seek?\n\nFather: Well, I thought that if you stayed hidden in one place for a long time, it would make a funny story later.",

    translationChoices: [

        "Daughter: Hey, why didn't you come look for me during hide-and-seek?\n\nFather: Well, I thought that if you stayed hidden in one place for a long time, it would make a funny story later.",

        "Daughter: Why did you find me so quickly?\n\nFather: Because I saw where you were hiding.",

        "Daughter: Why didn't you play hide-and-seek?\n\nFather: Because I was busy studying.",

        "Daughter: Why were you laughing?\n\nFather: Because someone told me a joke.",

        "Daughter: Why didn't you come outside?\n\nFather: Because it was raining heavily."
    ],

    question:
        "なぜ おとうさんは さがしに いかなかったのですか？",

    answer:
        "あとで おもしろおかしい はなしに なると おもったから",

    choices: [

        "あとで おもしろおかしい はなしに なると おもったから",

        "むすめが すぐに みつかると おもったから",

        "かくれんぼを やめたと おもったから",

        "べつの あそびを していたから",

        "むすめが さがしに くると おもったから"
    ]
},




{
    id: "kaiwa22",

    audio: "Audio/kaiwa22.wav",

    speaker1:
        "むすめ",

    line1:
        "ねえ、きゅうに きえる ひかりを みたの？",

    speaker2:
        "おとうさん",

    line2:
        "ええ、あんな ひかり、みない わけが ないでしょう。",

    translation:
        "Daughter: Hey, did you see that light that suddenly disappeared?\n\nFather: Yeah. There's no way someone could miss a light like that.",

    translationChoices: [

        "Daughter: Hey, did you see that light that suddenly disappeared?\n\nFather: Yeah. There's no way someone could miss a light like that.",

        "Daughter: Did you take a picture of the light?\n\nFather: Yes, I took several pictures.",

        "Daughter: Was the light difficult to see?\n\nFather: Yes, it was too dark to see clearly.",

        "Daughter: Did someone tell you about the light?\n\nFather: Yes, my friend explained it to me.",

        "Daughter: Were you far away from the light?\n\nFather: Yes, it was too far away to see."
    ],

    question:
        "なぜ おとうさんは その ひかりを みたと いいましたか？",

    answer:
        "あんな ひかりを みない わけが ないと おもったから",

    choices: [

        "あんな ひかりを みない わけが ないと おもったから",

        "くらくて よく みえなかったから",

        "だれかに おしえて もらったから",

        "しゃしんで みたから",

        "とおくに いて みえなかったから"
    ]
},




{
    id: "kaiwa23",

    audio: "Audio/kaiwa23.wav",

    speaker1:
        "おんなのこ",

    line1:
        "ねえ、きみは はえみたいに つきまとってきて、ほんとうに しゃくにさわるんだけど。",

    speaker2:
        "おとこのこ",

    line2:
        "へえ。でも、じゅぎょうちゅうの きみの おならも ぼくには めにあまるよう。",

    translation:
        "Girl: Hey, you keep following me around like a fly. It's really irritating.\n\nBoy: Huh. But your farting during class is more than I can tolerate.",

    translationChoices: [

        "Girl: Hey, you keep following me around like a fly. It's really irritating.\n\nBoy: Huh. But your farting during class is more than I can tolerate.",

        "Girl: You're always helping me with my homework. Thanks.\n\nBoy: You're welcome. I'm happy to help.",

        "Girl: Why don't you talk to me anymore?\n\nBoy: Because I've been busy studying.",

        "Girl: Let's go to the park after school.\n\nBoy: Good idea. I'll bring a ball.",

        "Girl: Did you hear that noise?\n\nBoy: No, I didn't hear anything."
    ],

    question:
        "なぜ おとこのこは 「めに あまる」と いいましたか？",

    answer:
        "おんなのこの おならが がまんできないほど ひどいと おもったから",

    choices: [

        "おんなのこの おならが がまんできないほど ひどいと おもったから",

        "おならを きいて うれしかったから",

        "おならに きづかなかったから",

        "おならの おとか すくなかったから",

        "おならを ほめたかったから"
    ]
},




{
    id: "kaiwa24",

    audio: "Audio/kaiwa24.wav",

    speaker1:
        "おとこのこ",

    line1:
        "くさい おならの においが きえて、ほっと むねを なでおろした。",

    speaker2:
        "おんなのこ",

    line2:
        "ねえ、むねが いっぱいに なるほどの ことじゃ ないよ。きを とりなおして。いつも きみは おおげさだよ。",

    translation:
        "Boy: The smell of the stinky fart finally disappeared, and I felt a huge sense of relief.\n\nGirl: Hey, it's not something to get that emotional about. Pull yourself together. You're always exaggerating.",

    translationChoices: [

        "Boy: The smell of the stinky fart finally disappeared, and I felt a huge sense of relief.\n\nGirl: Hey, it's not something to get that emotional about. Pull yourself together. You're always exaggerating.",

        "Boy: The smell keeps getting stronger.\n\nGirl: You're right. Let's open a window.",

        "Boy: I can't smell anything.\n\nGirl: That's strange. The smell is very strong.",

        "Boy: I found a new toy.\n\nGirl: That's wonderful. Let's play with it.",

        "Boy: I'm excited about tomorrow's trip.\n\nGirl: Me too. I can't wait."
    ],

    question:
        "なぜ おんなのこは 「むねが いっぱいに なるほどの ことじゃ ない」と いいましたか？",

    answer:
        "おとこのこが おならの においが きえたことに おおげさに はんのうしていたと おもったから",

    choices: [

        "おとこのこが おならの においが きえたことに おおげさに はんのうしていたと おもったから",

        "おんなのこも おならの においに かんどうしたから",

        "おとこのこが おならの においを もっと たのしんでほしかったから",

        "おとこのこが おならの においに きづかなかったから",

        "おんなのこが おならの においを ほめたかったから"
    ]
},




{
    id: "kaiwa25",

    audio: "Audio/kaiwa25.wav",

    speaker1:
        "つま",

    line1:
        "ねえ、なんで いそがしい ときって ぶさほうに なっちゃうの？",

    speaker2:
        "おっと",

    line2:
        "うーん、いいわけに なるかも しれないけど、なにかに むちゅうに なっていると、まわりへの きくばりにまで きを つかえなく なってしまうような きが するんだよ。",

    translation:
        "Wife: Hey, why do you become inconsiderate when you're busy?\n\nHusband: Hmm, this might sound like an excuse, but when I become completely absorbed in something, I feel like I stop having enough attention left to be considerate of the people around me.",

    translationChoices: [

        "Wife: Hey, why do you become inconsiderate when you're busy?\n\nHusband: Hmm, this might sound like an excuse, but when I become completely absorbed in something, I feel like I stop having enough attention left to be considerate of the people around me.",

        "Wife: Why are you always so polite when you're busy?\n\nHusband: Because I enjoy helping everybody.",

        "Wife: Why don't you finish your work earlier?\n\nHusband: Because I usually arrive late.",

        "Wife: Why are you taking a day off tomorrow?\n\nHusband: Because I want to go sightseeing.",

        "Wife: Why are you talking to your friends so much?\n\nHusband: Because they need my advice."
    ],

    question:
        "なぜ おっとは ぶさほうに なってしまうことが あると いいましたか？",

    answer:
        "なにかに むちゅうに なると、まわりへの きくばりにまで きを つかえなく なってしまうと おもっているから",

    choices: [

        "なにかに むちゅうに なると、まわりへの きくばりにまで きを つかえなく なってしまうと おもっているから",

        "わざと まわりの ひとに しつれいな たいどを とりたいから",

        "いそがしい ときほど ひとに やさしく したいと おもっているから",

        "まわりの ひとが じぶんを たすけて くれないから",

        "ぶさほうでいるほうが しごとが はやく おわると おもっているから"
    ]
},


{
    id: "kaiwa26",

    audio: "Audio/kaiwa26.wav",

    speaker1:
        "むすめ",

    line1:
        "おとうさん、なんで どうぶつみたいに じめんを コツンと たたいて、いつも わたしを こわがらせるのが すきなの？",

    speaker2:
        "ちち",

    line2:
        "うーん、その はんのうを みるのが おもしろおかしいと おもっちゃうんだよね。",

    translation:
        "Daughter: Dad, why do you like tapping the ground with a little knock like an animal and always scaring me?\n\nFather: Hmm, I guess it's because I end up finding your reaction funny and amusing to watch.",

    translationChoices: [

        "Daughter: Dad, why do you like tapping the ground with a little knock like an animal and always scaring me?\n\nFather: Hmm, I guess it's because I end up finding your reaction funny and amusing to watch.",

        "Daughter: Dad, why do you always feed animals in the park?\n\nFather: Because I want them to become my friends.",

        "Daughter: Dad, why do you sleep outside every night?\n\nFather: Because the fresh air helps me relax.",

        "Daughter: Dad, why are you teaching animals new tricks?\n\nFather: Because I want to enter a competition.",

        "Daughter: Dad, why do you make loud noises when you work?\n\nFather: Because it helps me concentrate."
    ],

    question:
        "なぜ ちちは むすめを こわがらせることが あるのですか？",

    answer:
        "むすめの はんのうを みるのが おもしろおかしいと おもっているから",

    choices: [

        "むすめの はんのうを みるのが おもしろおかしいと おもっているから",

        "どうぶつの まねを じょうずに なりたいから",

        "むすめを ほんとうに おこらせたいから",

        "じめんを たたかないと あるけないから",

        "どうぶつと はなせるように なりたいから"
    ]
},





{
    id: "kaiwa27",

    audio: "Audio/kaiwa27.wav",

    speaker1: "つま",

    line1:
        "ねえ、きのう よふかししていたせいで、だいじな かいぎに まにあわないかもって、あさから うおうさおうしていたじゃない。おまけに、あわてていて ひに あぶらを そそぐような ことまで していたわよ。",

    speaker2: "おっと",

    line2:
        "うーん、その はなしには くびを つっこまないで、みてみぬふりを しておいてよ。つまり、しらぬぞんぜぬで いるってこと。",

    translation:
        "Wife: Hey, because you stayed up late last night, you were panicking all morning thinking you might not make it to your important meeting. On top of that, you were so flustered that you even made the situation worse.\n\nHusband: Hmm, don't stick your nose into that story. Just pretend you didn't see it. In other words, act like you know nothing about it.",

    translationChoices: [

        "Wife: Hey, because you stayed up late last night, you were panicking all morning thinking you might not make it to your important meeting. On top of that, you were so flustered that you even made the situation worse.\n\nHusband: Hmm, don't stick your nose into that story. Just pretend you didn't see it. In other words, act like you know nothing about it.",

        "Wife: You got up early and arrived at your meeting with plenty of time to spare.\n\nHusband: That's right. Everything went exactly as planned.",

        "Wife: You spent all morning reading a book before your meeting.\n\nHusband: Yes, it was very relaxing and productive.",

        "Wife: You stayed home all day and didn't have any responsibilities.\n\nHusband: It was a peaceful day without any problems.",

        "Wife: You were excited to go shopping and bought many things.\n\nHusband: Yes, it was a wonderful experience."
    ],

    question:
        "なぜ おっとは 「みてみぬふりを しておいてよ」と いいましたか？",

    answer:
        "その はなしに くびを つっこまず、しらぬぞんぜぬで いてほしいと おもったから",

    choices: [
        "その はなしに くびを つっこまず、しらぬぞんぜぬで いてほしいと おもったから",
        "もっと ひに あぶらを そそいでほしいと おもったから",
        "つまに もっと うおうさおうしてほしいと おもったから",
        "よふかしを つづけることを すすめたかったから",
        "つまが あさまで ねないことを ほめたかったから"
    ]
},






{
    id: "kaiwa28",

    audio: "Audio/kaiwa28.wav",

    speaker1: "おとうさん",

    line1:
        "まさか、よふけまで おもいがけず べんきょうしているとはね！",

    speaker2: "むすめ",

    line2:
        "まあ、やっとの おもいで べんきょうするために おもいこしを あげたんだから、きたいを うらぎりたくないよ。",

    translation:
        "Father: Well, this is unexpected. I can't believe you're studying late into the night!\n\nDaughter: Well, I finally managed to get myself motivated to study after a lot of effort, so I don't want to let anyone's expectations down.",

    translationChoices: [

        "Father: Well, this is unexpected. I can't believe you're studying late into the night!\n\nDaughter: Well, I finally managed to get myself motivated to study after a lot of effort, so I don't want to let anyone's expectations down.",

        "Father: You seem tired because you slept all day.\n\nDaughter: That's right. I have no interest in studying anymore.",

        "Father: I see you're getting ready to play games all night.\n\nDaughter: Yes, I don't care about anyone's expectations.",

        "Father: I can't believe you finished all your homework weeks ago.\n\nDaughter: That's because I never need to make any effort.",

        "Father: You should stop studying immediately.\n\nDaughter: You're right. I'll give up before I even begin."
    ],

    question:
        "なぜ むすめは 「きたいを うらぎりたくない」と いいましたか？",

    answer:
        "やっとの おもいで べんきょうする きになったので、その どりょくを むだに したくないと おもったから",

    choices: [
        "やっとの おもいで べんきょうする きになったので、その どりょくを むだに したくないと おもったから",
        "よふけを つづけることが もくてきだったから",
        "べんきょうを すぐに やめたかったから",
        "おとうさんに おこられたかったから",
        "きたいを うらぎることが たいせつだと おもったから"
    ]
},




{
    id: "kaiwa29",

    audio: "Audio/kaiwa29.wav",

    speaker1: "おとこのこ",

    line1:
        "あや、もんだいを とけないとはね。",

    speaker2: "おんなのこ",

    line2:
        "ううん、それが どうしたの？",

    translation:
        "Boy: Well, well. To think you can't solve the problem.\n\nGirl: Hmm? So what?",

    translationChoices: [

        "Boy: Well, well. To think you can't solve the problem.\n\nGirl: Hmm? So what?",

        "Boy: Amazing! You solved the problem perfectly.\n\nGirl: Yes, it was very easy.",

        "Boy: I think this problem is impossible for anyone.\n\nGirl: Then let's stop studying forever.",

        "Boy: To think you finished every problem already.\n\nGirl: That's because I practiced all month.",

        "Boy: You should be worried about the problem.\n\nGirl: You're right. I'm very scared."
    ],

    question:
        "なぜ おんなのこは 「それが どうしたの？」と いいましたか？",

    answer:
        "もんだいを とけないことを それほど きにしていないから",

    choices: [
        "もんだいを とけないことを それほど きにしていないから",
        "もんだいを もう とけたと おもっているから",
        "おとこのこに ほめられたと おもったから",
        "もんだいが なくなったと おもったから",
        "べんきょうを やめることに きめたから"
    ]
},




{
    id: "kaiwa30",

    audio: "Audio/kaiwa30.wav",

    speaker1: "おとこのこ",

    line1:
        "ねえ、きみ、なんで しゅくだいが おわってないの？ どういうこと？ なんで そんなに やるきが ないの？",

    speaker2: "おんなのこ",

    line2:
        "ていうか、なんで いつも きみが くびを つっこむの？ できるなら、ひとはだ ぬいでよ。 じゃなきゃ、だまってて。",

    translation:
        "Boy: Hey, why isn't your homework finished? What's going on? Why are you so unmotivated?\n\nGirl: More importantly, why do you always stick your nose into my business? If you can help, then lend a hand. Otherwise, be quiet.",

    translationChoices: [

        "Boy: Hey, why isn't your homework finished? What's going on? Why are you so unmotivated?\n\nGirl: More importantly, why do you always stick your nose into my business? If you can help, then lend a hand. Otherwise, be quiet.",

        "Boy: Great job finishing your homework so quickly.\n\nGirl: Thanks. It was very easy for me.",

        "Boy: Do you want me to help you with your homework?\n\nGirl: No thanks. I've already finished everything.",

        "Boy: Why don't we go play outside together?\n\nGirl: That's a good idea. Let's go right away.",

        "Boy: Your homework looks perfect.\n\nGirl: I spent all night working on it."
    ],

    question:
        "なぜ おんなのこは 「ひとはだ ぬいでよ。じゃなきゃ、だまってて。」と いいましたか？",

    answer:
        "てつだえないなら よけいな くちだしを してほしくないから",

    choices: [
        "てつだえないなら よけいな くちだしを してほしくないから",
        "おとこのこに しゅくだいを ぜんぶ やってもらいたいから",
        "しゅくだいが もう おわっているから",
        "おとこのこに おこっていないから",
        "これから いっしょに あそびに いくから"
    ]
},





{
    id: "kaiwa31",

    audio: "Audio/kaiwa31.wav",

    speaker1: "おとこのこ",

    line1:
        "ねえ、このままじゃ しあいに まけて ひとまえで かおむけできないよ。",

    speaker2: "おんなのこ",

    line2:
        "ていうか、すくなくとも、しあいには たずさわったよ。",

    translation:
        "Boy: At this rate, you'll lose the match and won't be able to show your face in front of others.\n\nGirl: More importantly, at least I took part in the match.",

    translationChoices: [

        "Boy: At this rate, you'll lose the match and won't be able to show your face in front of others.\n\nGirl: More importantly, at least I took part in the match.",

        "Boy: You're definitely going to win the match.\n\nGirl: Yes, I'm completely confident.",

        "Boy: Why didn't you join the match?\n\nGirl: Because I wasn't interested in participating.",

        "Boy: Everyone was impressed by your performance.\n\nGirl: I know. It was an easy victory.",

        "Boy: Let's watch the match together.\n\nGirl: No thanks. I'd rather stay home."
    ],

    question:
        "なぜ おんなのこは 「すくなくとも、しあいには たずさわったよ。」と いいましたか？",

    answer:
        "かてなくても さんかしたことには いみが あると おもっているから",

    choices: [
        "かてなくても さんかしたことには いみが あると おもっているから",
        "しあいに さんかしていないから",
        "しあいに かならず かてると おもっているから",
        "しあいが ちゅうしに なったから",
        "おとこのこに かわりに でてもらうから"
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