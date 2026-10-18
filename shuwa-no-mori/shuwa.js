/* ==========================================================
   SHUWA — DATASET (Aisatsu)
   ========================================================== */

const shuwaAisatsu = [
  {
    id: "ohayou",
    audio: "audio/ohayou.wav",
    choices: ["おはよう", "こんにちは", "こんばんは"],
    answer: "おはよう",
    summary_hiragana:
      "てをぎゅっとにぎってちいさなまくらをつくり、こめかみのよこからすとんとさげます。あさにめがさめるかんじをあらわしています。これはどういういみになりますか。",
    summary_english:
      "Make a small 'pillow' with your fist and lower it from the temple. This gesture represents waking up in the morning. What does this mean?"
  },

  {
    id: "konnichiwa",
    audio: "audio/konnichiwa.wav",
    choices: ["おはよう", "こんにちは", "こんばんは"],
    answer: "こんにちは",
    summary_hiragana:
      "みぎてのひとさしゆびとなかゆびをめとめのあいだにあてて、かおをとけいのばんのようにみたてます。そのあと、りょうほうのひとさしゆびをむねのまえですこしはなしてむかいあわせ、かるくまげてあいさつのうごきをあらわします。これはどういういみになりますか。",
    summary_english:
      "Place your right index and middle finger between your eyes to represent your face as a clock. Then hold both index fingers in front of your chest, slightly apart and facing each other, and curl them gently to show a greeting motion. What does this mean?"
  },

  {
    id: "konbanwa",
    audio: "audio/konbanwa.wav",
    choices: ["おはよう", "こんにちは", "こんばんは"],
    answer: "こんばんは",
    summary_hiragana:
      "よるのふんいきをあらわすように、てでそっとカーテンをしめるイメージをみたてます。そのあと、むねのまえでてをかすかにはなしてむかいあわせ、りょうほうのひとさしゆびをかるくまげて、やわらかいあいさつのきもちをしめします。このいちれんのしぐさが、どういういみになりますか。",
    summary_english:
      "You imagine gently closing a curtain to express the feeling of evening. Then you slightly separate your hands in front of your chest, facing each other, bend both index fingers softly, and show a gentle sense of greeting. What does this sequence of movements mean?"
  },

  {
    id: "oyasuminasai",
    audio: "audio/oyasuminasai.wav",
    choices: ["おはよう", "こんにちは", "おやすみなさい"],
    answer: "おやすみなさい",
    summary_hiragana:
      "こぶしでまくらのイメージをみたてて、こめかみのあたりにかるくそえます。ねむりにつくまえのしずかなようすをしめすうごきで、このいちれんのしぐさが、どういういみになりますか。",
    summary_english:
      "You form the image of a pillow with your fist and gently place it near your temple. This movement shows the quiet feeling before falling asleep. What does this sequence of gestures mean?"
  },

  {
    id: "gomennasai",
    audio: "audio/gomennasai.wav",
    choices: ["ごめんなさい", "ありがとう", "こんにちは"],
    answer: "ごめんなさい",
    summary_hiragana:
      "なやんでシワがよるようにみぎのひとさしゆびとなかゆびではなをつまみ、まるでしゅとうでうつようにみぎてをまえにそっとさしだし、さらにかすかにこしをかがめてあやまるきもちをしめします。このいちれんのしぐさが、どういういみになりますか。",
    summary_english:
      "As if troubled, you pinch your nose lightly with the right index and middle finger, then gently extend your right hand forward as if making a hand‑blade motion, and finally bend your waist slightly to show a sincere apology. What does this sequence of gestures mean?"
  },

  {
    id: "arigatou",
    audio: "audio/arigatou.wav",
    choices: ["ありがとう", "ごめんなさい", "こんばんは"],
    answer: "ありがとう",
    summary_hiragana:
      "まるでしゅとうでそっとうつようなきどうにみぎてをみたて、みぎてでかるくひだりてのこうにふれ、そのままじょうたいをほんのすこしまえへかたむけてかんしゃのきもちをしめします。このいちれんのしぐさが、どういういみになりますか。",
    summary_english:
      "You treat your right hand as if it were moving along a gentle hand‑blade path, touch the back of your left hand lightly with your right hand, and then lean your upper body forward just a little to express gratitude. What does this sequence of gestures mean?"
  },

  {
    id: "otsukaresama",
    audio: "audio/otsukaresama.wav",
    choices: ["おつかれさま", "ありがとう", "こんにちは"],
    answer: "おつかれさま",
    summary_hiragana:
      "まるであいてのかたをてのひらでたたくしぐさをなぞるように、みぎてでこぶしをつくり、ぎゅっとにぎったひだりてのこうをぽんぽんとたたきます。このいちれんのしぐさが、どういういみになりますか。",
    summary_english:
      "As if tracing the gesture of patting the other person's shoulder with your palm, you form a fist with your right hand and tap the back of your tightly closed left hand in a soft pon‑pon rhythm. What does this sequence of gestures mean?"
  },

  {
    id: "sayounara",
    audio: "audio/sayounara.wav",
    choices: ["さようなら", "ありがとう", "こんにちは"],
    answer: "さようなら",
    summary_hiragana:
      "みぎてのひらをあいてにむけてみせ、かるくさゆうにふることで、あいてにわかれをつげるしぐさをあらわします。このいちれんのしぐさが、どういういみになりますか。",
    summary_english:
      "You show your right palm toward the other person and gently move it side to side, expressing a friendly parting gesture. What does this sequence of movements mean?"
  },

  {
    id: "matane",
    audio: "audio/matane.wav",
    choices: ["またね", "ありがとう", "ごめんなさい"],
    answer: "またね",
    summary_hiragana:
      "みぎて の ひとさしゆび と なかゆび を さしだす ことで、ゆび で ちいさく「また」らしい かたち を つくり、そのまま むね の まえ で、はじめ に ひだりて が みぎて の まえ に おかれ、りょうて の ひとさしゆび を はなして むかいあわせ に し、くいっ と まえ に つなげる ことで、あいて に「また あおう」 という きもち を つたえる しぐさ を あらわします。この いちれん の しぐさ が、どういう いみ に なりますか。",
    summary_english:
      "By extending the right index and middle finger to form a small shape that suggests 'again,' then placing the left hand before the right in front of the chest, opening both index fingers and bringing them to face each other, you give a small kui‑t forward linking motion. This expresses the feeling of 'let’s meet again.' What does this sequence of gestures represent?"
  },

  {
    id: "hajimemashite",
    audio: "audio/hajimemashite.wav",
    choices: ["はじめまして", "こんにちは", "ありがとう"],
    answer: "はじめまして",
    summary_hiragana:
      "ふせた まま の みぎて の ひら で すべて の ゆび を のばして、みぎて を あげながら ひとさしゆび いがい の ゆび を ぎゅっと にぎり、さらに むね の まえ に ひだりて を みぎて の まえ に おいて、りょうほう の ひとさしゆび を はなして むかいあわせ に し、そのうえ ひとさしゆび を つなげます。この いちれん の しぐさ は どういう いみ に なりますか。",
    summary_english:
      "With the right hand held palm‑down and all fingers extended, you raise the hand and then close every finger except the index finger to show 'first time.' Placing the left hand in front of the right at chest level, you open both index fingers so they face each other, then connect them. What does this sequence of gestures represent?"
  },

  {
    id: "yoroshiku_onegaishimasu",
    audio: "audio/yoroshiku-onegaishimasu.wav",
    choices: ["よろしくおねがいします", "ありがとう", "ごめんなさい"],
    answer: "よろしくおねがいします",
    summary_hiragana:
      "まるで ぼくしんぐ の かまえ を とる ように、みぎて を ぎゅっと にぎり、そっと はな の まえ に つけて 「こん」 と かすか に ふれる。そのあと まるで すうっと はな から みぎて を はなれて、ぱたっと こぶし を あけて、かすか に あたま を さげて、ていねい な あいさつ の きもち を あらわします。この いちれん の しぐさ は どういう いみ に なりますか。",
    summary_english:
      "As if taking a boxing stance, you clench your right hand tightly, place it softly in front of your nose, and let it touch with a faint little “kon.” After that, you smoothly move your right hand away from your nose, open your fist with a light “pata,” and lower your head just a little, expressing a polite, sincere greeting. What does this sequence of gestures mean?"
  },

  {
  id: "omedetou",
  audio: "audio/omedetou.wav",
  choices: ["おめでとう", "ありがとう", "ごめんなさい"],
  answer: "おめでとう",

  summary_hiragana:
    "はじめに ぱつぱつ と りょうて の ゆびさき を つなげながら、はじけさせる よう に うごかし、さらに からだ の まえ で はなび が はじける みたい に ふわっと あげて、よろこび や いわい の きもち を あらわします。この いちれん の しぐさ は どういう いみ に なりますか。",

  summary_english:
    "First, with a lively *patsu‑patsu* motion, you connect the fingertips of both hands and move them as if making tiny sparks burst. Then, in front of your body, you lift your hands in a soft upward motion like a firework bursting open, expressing joy and celebration. What does this sequence of gestures mean?"
},


];




const shuwaWeekdays = [
 {
  id: "getsuyoubi",
  audio: "audio/getsuyoubi.wav",
  choices: ["げつようび", "かようび", "すいようび"],
  answer: "げつようび",

  summary_hiragana:
    "おやゆび と ひとさしゆび を そっと ひらいて、まるで ちいさな つき を えがく よう に、くるり と かたち を なぞります。て の うごき が ふわっと まるく ひろがって、つき の イメージ を あらわします。この いちれん の しぐさ は なん の いみ に なる のでしょうか。",

  summary_english:
    "You softly open your thumb and index finger, tracing a small circular motion as if drawing a tiny moon. The movement spreads gently in a rounded shape, expressing the image of the moon. What does this sequence of gestures represent?"
},



{
  id: "kayoubi",
  audio: "audio/kayoubi.wav",
  choices: ["かようび", "すいようび", "もくようび"],
  answer: "かようび",

  summary_hiragana:
    "はじめに くちびる の ひだりがわ に みぎて の ひとさしゆび を そっと あて、みぎて の ひとさしゆび で あか の いみ を あらわす よう に くちびる を なぞり、さらに ひ の いみ を あらわす よう に みぎ の てくび を ひらひら して ひらり と ひねりながら あげます。この いちれん の しぐさ は なん の いみ に なりますか。",

  summary_english:
    "First, you gently touch the left side of your lips with your right index finger. Then, using the same finger, you trace your lips to express the idea of red. After that, you twist your right wrist upward with a fluttering, light *hirahira–hirari* motion to represent fire rising. What does this sequence of gestures mean?"
},




{
  id: "suiyoubi",
  audio: "audio/suiyoubi.wav",
  choices: ["すいようび", "げつようび", "かようび"],
  answer: "すいようび",

  summary_hiragana:
    "みぎてのひら を あおむけ に して、からだ の むかいがわ から、まるで ふね が でこぼこ な なみ に とおりかかる よう に、あおむけ な みぎて の まま で みぎがわ に もどします。この いちれん の しぐさ は なん の いみ に なる のでしょう。",

  summary_english:
    "With your right palm turned upward, you begin from the opposite side of your body. Then, keeping your palm facing upward, you move your hand back toward the right as if a small boat were passing over uneven, bumpy waves. What does this sequence of gestures represent?"
},




{
  id: "mokuyoubi",
  audio: "audio/mokuyoubi.wav",
  choices: ["もくようび", "すいようび", "かようび"],
  answer: "もくようび",

  summary_hiragana:
    "レンチ の よう に りょうて の おやゆびさき と ひとさしゆびさき を はなれて むかいあわせ に し、レンチ の かたち を たもった まま で りょうて を ひねりながら うえ に むかいます。この いちれん の しぐさ は なん の いみ に なる の でしょう。",

  summary_english:
    "Like forming the shape of a wrench, you separate the tips of both thumbs and index fingers so they face each other. Then, keeping that wrench‑like shape, you twist both hands upward. What does this sequence of gestures represent?"
},


{
  id: "kinyoubi",
  audio: "audio/kinyoubi.wav",
  choices: ["きんようび", "もくようび", "すいようび"],
  answer: "きんようび",

  summary_hiragana:
    "みぎて の ひとさしゆび と おやゆび を つなげ まる を つくり、まるで ゆき が ひらひら と まいおちる よう に みぎて を ぐるぐる と かわりがわり さゆう に まわします。この いちれん の しぐさ は なん の いみ に なる の でしょう。",

  summary_english:
    "You connect your right index finger and thumb to form a small circle. Then, as if snow were fluttering softly downward, you rotate your right hand in alternating left‑right motions. What does this sequence of gestures represent?"
},





{
  id: "doyoubi",
  audio: "audio/doyoubi.wav",
  choices: ["どようび", "きんようび", "にちようび"],
  answer: "どようび",

  summary_hiragana:
    "まるで みぎて で しお を ぱらぱら と ふりまく よう に、みぎて の すべて の ゆびさき を そっと こすりあわせて つち を あらわします。この いちれん の しぐさ は なん の いみ に なる の でしょう。",

  summary_english:
    "As if lightly sprinkling salt with your right hand, you gently rub all the fingertips of your right hand together to represent soil. What does this sequence of gestures mean?"
},





{
  id: "nichiyoubi",
  audio: "audio/nichiyoubi.wav",
  choices: ["にちようび", "どようび", "きんようび"],
  answer: "にちようび",

  summary_hiragana:
    "はじめに みぎて の ひとさしゆび で くちびる の ひだりがわ を あて、まるで せん を ひく よう に ひとさしゆび で くちびる を なぞります。そのうえで、りょうて の ひら を した に むけた まま で、むね の まえ に りょうて を かすか に はなして つなげます。この いちれん の しぐさ は なん の いみ に なる の でしょう。",

  summary_english:
    "First, you touch the left side of your lips with your right index finger and trace across as if drawing a line. Then, with both palms facing downward, you gently bring your hands together in front of your chest with a slight separation. What does this sequence of gestures represent?"
},


];




/*----------------------------------------------------------------------------------
Months
-------------------------------------------------------------------------------------*/

const shuwaMonths = [
{
  id: "haru",
  audio: "audio/haru.wav",
  choices: ["はる", "あき", "なつ"],
  answer: "はる",

  summary_hiragana:
    "まず むね の まえ に りょうて が かすか に はなれて いて \
りょうて の ひら が あおむき に して、\
それから りょうて の ひら が あおむき に した ままで、\
まるで あたたかい くうき が ふわっと わきあがったり \
じゅうりょうあげ を したり する よう に、\
かた に むかって にど そっと りょうて が ちかづく。\
この いちれん の しぐさ が なん の いみ に なる の でしょうか。",

  summary_english:
    "First, your hands rest slightly apart in front of your chest with both palms facing upward.\
Then, keeping your palms facing upward, you move your hands as if warm air is rising softly or as if gently lifting a bit of weight.\
With that soft, floating motion, your hands approach your shoulders twice.\
What does this sequence of gestures represent?"
},



{
  id: "natsu",
  audio: "audio/natsu.wav",
  choices: ["なつ", "あき", "ふゆ"],
  answer: "なつ",

  summary_hiragana:
    "まず みぎて を かるく まえ に だし、\
まるで おうぎ を つかって あおぐ よう に、\
みぎて を さゆう に ゆらゆら と うごかします。\
その やわらかい うごき で、あつさ を あらわします。\
この いちれん の しぐさ は なん の いみ に なる の でしょうか。",

  summary_english:
    "First, you extend your right hand gently forward.\
Then you sway your right hand side to side, as if fanning yourself with a folding fan.\
This soft, airy motion expresses the feeling of summer heat.\
What does this sequence of gestures represent?"
},





{
  id: "aki",
  audio: "audio/aki.wav",
  choices: ["あき", "はる", "ふゆ"],
  answer: "あき",

  summary_hiragana:
    "まず かお の まえ に りょうて を あげて、\
それから りょうて を ひらいて さしだして、\
りょうて の ひら を みて、\
まるで だれか を はいる と さそう よう に\
りょうて を ぜんこう そっと うごかす。\
この いちれん の しぐさ が なん の いみ に なる んだろうか。",

  summary_english:
    "First, you raise both hands in front of your face.\
Then you open your hands, extend them forward, and look at your palms.\
After that, you gently move your hands forward as if inviting someone to come in.\
What does this sequence of gestures represent?"
},






{
  id: "fuyu",
  audio: "audio/fuyu.wav",
  choices: ["ふゆ", "あき", "なつ"],
  answer: "ふゆ",

  summary_hiragana:
    "まるで こがらし では からだ が ぶるぶる と ふるえる よう に、\
りょうこぶし を わきした の まえ に おいて、\
りょうて を さゆう に ゆらゆら と ゆらす。\
この いちれん の しぐさ が なん の いみ に なる んだろうか。",

  summary_english:
    "As if your body shivers in a cold winter wind, you place both fists in front of your underarms.\
Then you gently sway your hands side to side.\
What does this sequence of gestures represent?"
},




{
  id: "ichigatsu",
  audio: "audio/ichigatsu.wav",
  choices: ["いちがつ", "しがつ", "みかづき"],
  answer: "いちがつ",

  summary_hiragana:
    "はじめに、まるで みぎがわ を さししめす よう に ひだりて を ぎゅっと にぎり、\
ひだりて の ひとさしゆび を のばして「１」 を つくった まま で、\
みぎて の おやゆび と ひとさしゆび を つないだ まま かるく ひらき、\
それから くうき で みかづき の かたち を つくって から、\
ふたたび おやゆび と ひとさしゆび を つなげる。\
この いちれん の しぐさ は なん の いみ に なる の だろう か。",

  summary_english:
    "First, as if pointing toward the right side, you tightly close your left hand and extend the index finger to form “1.”\
Then, keeping your right thumb and index finger connected, you gently open them and shape a crescent moon in the air.\
Finally, you connect the thumb and index finger again.\
What does this sequence of gestures represent?"
},






{
  id: "nigatsu",
  audio: "audio/nigatsu.wav",
  choices: ["にがつ", "さんがつ", "みかづき"],
  answer: "にがつ",

  summary_hiragana:
    "みぎがわ を さししめす よう に、はじめに ひだりて を ぎゅっと にぎり、\
ひだりて の ひとさしゆび と なかゆび を のばして「2」 の かたち を つくった まま で、\
みぎて の おやゆび と ひとさしゆび を つないだ まま かるく ひらき、\
それから くうき に みかづき の かたち を えがく よう に うごかし、\
さいご に ふたたび おやゆび と ひとさしゆび を つなげる。\
この いちれん の しぐさ は、なん の いみ に なる の だろう か。",

  summary_english:
    "As if indicating the right side, you first close your left hand tightly and extend the index and middle fingers to form the number “2.”\
Keeping your right thumb and index finger connected, you gently open them and trace the shape of a crescent moon in the air.\
Finally, the thumb and index finger connect once again.\
What does this sequence of gestures represent?"
},





{
  id: "sangatsu",
  audio: "audio/sangatsu.wav",
  choices: ["さんがつ", "にがつ", "みかづき"],
  answer: "さんがつ",

  summary_hiragana:
    "みぎがわ を さししめす よう に、はじめに ひだりて を ぎゅっと にぎり、\
ひだりて の ひとさしゆび と なかゆび と くすりゆび を のばして「3」 の かたち を つくった まま で、\
みぎて の おやゆび と ひとさしゆび を つないだ まま かるく ひらき、\
それから くうき に みかづき の かたち を えがく よう に うごかし、\
さいご に ふたたび おやゆび と ひとさしゆび を つなげる。\
この いちれん の しぐさ は、なん の いみ に なる の だろう か。",

  summary_english:
    "As if indicating the right side, you first close your left hand tightly and extend the index, middle, and ring fingers to form the number “3.”\
Keeping your right thumb and index finger connected, you gently open them and trace the shape of a crescent moon in the air.\
Finally, the thumb and index finger connect once again.\
What does this sequence of gestures represent?"
},




{
  id: "shigatsu",
  audio: "audio/shigatsu.wav",
  choices: ["しがつ", "さんがつ", "みかづき"],
  answer: "しがつ",

  summary_hiragana:
    "みぎがわ を さししめす よう に、はじめに ひだりて を ぎゅっと にぎり、\
ひだりて の ひとさしゆび と なかゆび と くすりゆび と こゆび を のばして「4」 の かたち を つくった まま で、\
みぎて の おやゆび と ひとさしゆび を つないだ まま かるく ひらき、\
それから くうき に みかづき の かたち を えがく よう に うごかし、\
さいご に ふたたび おやゆび と ひとさしゆび を つなげる。\
この いちれん の しぐさ は、なん の いみ に なる の だろう か。",

  summary_english:
    "As if indicating the right side, you first close your left hand tightly and extend the index, middle, ring, and little fingers to form the number “4.”\
Keeping your right thumb and index finger connected, you gently open them and trace the shape of a crescent moon in the air.\
Finally, the thumb and index finger connect once again.\
What does this sequence of gestures represent?"
},





{
  id: "gogatsu",
  audio: "audio/gogatsu.wav",
  choices: ["ごがつ", "しがつ", "みかづき"],
  answer: "ごがつ",

  summary_hiragana:
    "みぎがわ を さししめす よう に、\
はじめに ひだりて を ぎゅっと にぎり、\
あいて に てのひら を むけた まま、\
おやゆび だけ を のばして「5」 の かたち を つくった まま で、\
みぎて の おやゆび と ひとさしゆび を つないだ まま かるく ひらき、\
それから くうき に みかづき の かたち を えがく よう に うごかし、\
さいご に ふたたび おやゆび と ひとさしゆび を つなげる。\
この いちれん の しぐさ は、なん の いみ に なる の だろう か。",

  summary_english:
    "As if indicating the right side, you first close your left hand tightly.\
With your palm facing the other person, you extend only the thumb to form the number “5.”\
Keeping your right thumb and index finger connected, you gently open them and trace the shape of a crescent moon in the air.\
Finally, the thumb and index finger connect once again.\
What does this sequence of gestures represent?"
},






{
  id: "rokugatsu",
  audio: "audio/rokugatsu.wav",
  choices: ["ろくがつ", "ごがつ", "みかづき"],
  answer: "ろくがつ",

  summary_hiragana:
    "はじめに、まるで みぎがわ を さししめす よう に ひだりて を ぎゅっと にぎり、\
ひだりて の ひら を みて、\
ひだりて の ひとさしゆび と おやゆび を のばして「6」 の かたち を つくった まま、\
みぎて の おやゆび と ひとさしゆび を つないだ まま かるく ひらき、\
それから くうちゅう で みかづき の かたち を つくって から、\
ふたたび おやゆび と ひとさしゆび を くっつける。\
この いちれん の しぐさ には、どんな いみ が ある の だろう か。",

  summary_english:
    "First, clench your left hand tightly as if pointing to the right.\
Look at the palm of your left hand, then extend your left index finger and thumb to form the number “6.”\
Keeping your right thumb and index finger connected, gently open them.\
Then make a crescent moon shape in the air before bringing your thumb and index finger together again.\
What does this sequence of gestures mean?"
},





{
  id: "shichigatsu",
  audio: "audio/shichigatsu.wav",
  choices: ["しちがつ", "ろくがつ", "みかづき"],
  answer: "しちがつ",

  summary_hiragana:
    "はじめに、まるで みぎがわ を さししめす よう に ひだりて を ぎゅっと にぎり、\
ひだりて の ひら を みて、\
ひだりて の ひとさしゆび と なかゆび を のばして「7」 の かたち を つくった まま、\
みぎて の おやゆび と ひとさしゆび を つないだ まま かるく ひらき、\
それから くうちゅう で みかづき の かたち を つくって から、\
ふたたび おやゆび と ひとさしゆび を くっつける。\
この いちれん の しぐさ には、どんな いみ が ある の だろう か。",

  summary_english:
    "First, clench your left hand tightly as if pointing to the right.\
Look at the palm of your left hand, then extend your left index and middle fingers to form the number “7.”\
Keeping your right thumb and index finger connected, gently open them.\
Then make a crescent moon shape in the air before bringing your thumb and index finger together again.\
What does this sequence of gestures mean?"
},




];














/* ==========================================================
   SHUWA — CORE ENGINE (mobile‑safe, no auto‑advance)
   ========================================================== */

const SHUWA = {
  round: 0,
  TOTAL_ROUNDS: 3,
  mcqLocked: false,
  activeScreen: null,

  dataset: shuwaAisatsu,
  currentItem: null,

  audio: {
    cancelToken: { cancel: false },
    generation: 0,
    current: null
  }
};

/* ==========================================================
   AUDIO CONTROL
   ========================================================== */

SHUWA.stopAllAudio = function () {
  SHUWA.audio.cancelToken.cancel = true;
  SHUWA.audio.generation++;

  if (SHUWA.audio.current) {
    try {
      SHUWA.audio.current.pause();
      SHUWA.audio.current.currentTime = 0;
    } catch (e) {}
  }
};

SHUWA.generationGuards = function () {
  SHUWA.audio.cancelToken.cancel = false;
  SHUWA.audio.generation++;
  SHUWA.audio.current = null;
};

SHUWA.playAudio = function (file) {
  if (!file) return;

  SHUWA.stopAllAudio();
  SHUWA.generationGuards();

  const audio = SHUWA.audio.current || new Audio();
  SHUWA.audio.current = audio;
  audio.src = file;

  audio.play().catch(() => {
    // Mobile autoplay blocked — do nothing
  });
};

/* ==========================================================
   SCREEN SWITCHER
   ========================================================== */

SHUWA.show = function (id) {
  document.querySelectorAll(".shuwa-screen")
    .forEach(el => el.classList.remove("show"));

  document.getElementById(id)?.classList.add("show");
  SHUWA.activeScreen = id;
};

/* ==========================================================
   RANDOM PICK
   ========================================================== */

SHUWA.pickRandom = function () {
  const arr = SHUWA.dataset;
  const item = arr[Math.floor(Math.random() * arr.length)];
  SHUWA.currentItem = item;
  return item;
};

/* ==========================================================
   START + ROUND
   ========================================================== */

SHUWA.start = function () {
  SHUWA.round = 0;
  SHUWA.mcqLocked = false;
  SHUWA.currentItem = null;

  SHUWA.stopAllAudio();
  SHUWA.audio.cancelToken.cancel = false;
  SHUWA.audio.generation++;

  SHUWA.startRound();
};

SHUWA.startRound = function () {
  SHUWA.stopAllAudio();
  SHUWA.audio.cancelToken.cancel = false;
  SHUWA.audio.generation++;

  SHUWA.mcqLocked = false;

  SHUWA.screen1();
};

/* ==========================================================
   SCREEN 1 — AUDIO ONLY (NO AUTO‑ADVANCE)
   ========================================================== */

SHUWA.screen1 = function () {
  SHUWA.show("shuwaScreen1");

  const item = SHUWA.pickRandom();
  if (!item.audio) return;

  SHUWA.playAudio(item.audio);
};

/* ==========================================================
   SCREEN 2 — MCQ
   ========================================================== */

SHUWA.screen2 = function () {
  SHUWA.show("shuwaScreen2");
  SHUWA.mcqLocked = false;

  const item = SHUWA.currentItem;
  const mcqBox = document.getElementById("shuwaMcqContainer");
  mcqBox.innerHTML = "";

  const options = [...item.choices];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "mcqBtn";
    btn.textContent = opt;

    btn.onclick = () => SHUWA.handleMCQ(opt);
    mcqBox.appendChild(btn);
  });

  const replayBtn = document.getElementById("shuwaReplayBtn");
  if (replayBtn) {
    replayBtn.onclick = () => {
      if (SHUWA.mcqLocked) return;
      SHUWA.playAudio(item.audio);
    };
  }
};

/* ==========================================================
   HANDLE MCQ
   ========================================================== */

SHUWA.handleMCQ = function (choice) {
  if (SHUWA.mcqLocked) return;
  SHUWA.mcqLocked = true;

  const item = SHUWA.currentItem;
  const correct = item.answer;

  const buttons = document.querySelectorAll("#shuwaMcqContainer .mcqBtn");

  buttons.forEach(btn => {
    btn.disabled = true;
    const val = btn.textContent.trim();
    if (val === correct) btn.classList.add("correct");
    else btn.classList.add("wrong");
  });

  SHUWA.round++;

  setTimeout(() => {
    SHUWA.screen3();
  }, 900);
};

/* ==========================================================
   SCREEN 3 — SUMMARY
   ========================================================== */

SHUWA.screen3 = function () {
  SHUWA.show("shuwaScreen3");

  const item = SHUWA.currentItem;

  const correctBox = document.getElementById("shuwaCorrectAnswer");
  const hiraBox = document.getElementById("shuwaSummaryTextHiragana");
  const engBox = document.getElementById("shuwaSummaryTextEnglish");

  if (correctBox) {
    correctBox.textContent = "正解： " + item.answer;
  }

  if (hiraBox) hiraBox.textContent = item.summary_hiragana;
  if (engBox) engBox.textContent = item.summary_english;

  const nextBtn = document.getElementById("shuwaNextBtn");
  if (nextBtn) {
    nextBtn.onclick = () => {
      SHUWA.startRound();
    };
  }
};


/* ==========================================================
   GLOBAL FIX — REMOVE INLINE onclick FROM SCREEN1 BUTTON
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#shuwaScreen1 .next-btn");
  if (btn) {
    btn.onclick = null; // remove inline handler
    btn.addEventListener("click", () => SHUWA.screen2());
  }

  SHUWA.start();
});
