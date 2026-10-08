/* ==========================================================
   GLOBAL OBJECT
   ========================================================== */
// 1. Create the KANJI object FIRST
const KANJI = {
  dataset: [],
  currentItem: null,
  mcqLocked: false,
  mode: null,

  audio: {
    current: null,
    cancelToken: { cancel: false },
    generation: 0
  }
};



/* ==========================================================
   INTERNAL DATASET STORAGE
   ========================================================== */

KANJI.allKanji = {
  aru: {
    id: "aru",
    audio: "audio/aru.wav",
    kanji: "有る",
    kanjiBase: "有",
    okurigana: "る",
    furigana: "あ",
    romaji: "aru",
    kun: "ある",
    on: "ユウ",
    meaning: "to exist; to have",
    answer: "有る"
  },

  aruku: {
    id: "aruku",
    audio: "audio/aruku.wav",
    kanji: "歩く",
    kanjiBase: "歩",
    okurigana: "く",
    furigana: "ある",
    romaji: "aruku",
    kun: "あるく",
    on: "ホ",
    meaning: "to walk",
    answer: "歩く"
  },

  miru: {
    id: "miru",
    audio: "audio/miru.wav",
    kanji: "見る",
    kanjiBase: "見",
    okurigana: "る",
    furigana: "み",
    romaji: "miru",
    kun: "みる",
    on: "ケン",
    meaning: "to see",
    answer: "見る"
  },

  taberu: {
  id: "taberu",
  audio: "audio/taberu.wav",
  kanji: "食べる",
  kanjiBase: "食べ",
  okurigana: "る",
  furigana: "た",
  romaji: "taberu",
  kun: "たべる",
  on: "ショク",
  meaning: "to eat",
  answer: "食べる"
},



nomu: {
  id: "nomu",
  audio: "audio/nomu.wav",
  kanji: "飲む",
  kanjiBase: "飲",
  okurigana: "む",
  furigana: "の",
  romaji: "nomu",
  kun: "のむ",
  on: "イン",
  meaning: "to drink",
  answer: "飲む"
},


tsukeru: {
  id: "tsukeru",
  audio: "audio/tsukeru.wav",
  kanji: "付ける",
  kanjiBase: "付け",
  okurigana: "る",
  furigana: "つ",
  romaji: "tsukeru",
  kun: "つける",
  on: "フ",
  meaning: "to attach; to apply; to turn on",
  answer: "付ける"
},


kesu: {
  id: "kesu",
  audio: "audio/kesu.wav",
  kanji: "消す",
  kanjiBase: "消",
  okurigana: "す",
  furigana: "け",
  romaji: "kesu",
  kun: "けす",
  on: "ショウ",
  meaning: "to erase; to turn off; to extinguish",
  answer: "消す"
},

ireru: {
  id: "ireru",
  audio: "audio/ireru.wav",
  kanji: "入れる",
  kanjiBase: "入れ",
  okurigana: "る",
  furigana: "い",
  romaji: "ireru",
  kun: "いれる",
  on: "ニュウ",
  meaning: "to put in; to insert; to add",
  answer: "入れる"
},

neru: {
  id: "neru",
  audio: "audio/neru.wav",
  kanji: "寝る",
  kanjiBase: "寝",
  okurigana: "る",
  furigana: "ね",
  romaji: "neru",
  kun: "ねる",
  on: "シン",
  meaning: "to sleep; to lie down",
  answer: "寝る"
},

hairu: {
  id: "hairu",
  audio: "audio/hairu.wav",
  kanji: "入る",
  kanjiBase: "入",
  okurigana: "る",
  furigana: "はい",
  romaji: "hairu",
  kun: "はいる",
  on: "ニュウ",
  meaning: "to enter; to go in",
  answer: "入る"
},

oku: {
  id: "oku",
  audio: "audio/oku.wav",
  kanji: "置く",
  kanjiBase: "置",
  okurigana: "く",
  furigana: "お",
  romaji: "oku",
  kun: "おく",
  on: "チ",
  meaning: "to place; to put; to set down",
  answer: "置く"
},

ochiru: {
  id: "ochiru",
  audio: "audio/ochiru.wav",
  kanji: "落ちる",
  kanjiBase: "落ち",
  okurigana: "る",
  furigana: "お",
  romaji: "ochiru",
  kun: "おちる",
  on: "ラク",
  meaning: "to fall; to drop; to come off",
  answer: "落ちる"
},

okuru: {
  id: "okuru",
  audio: "audio/okuru.wav",
  kanji: "送る",
  kanjiBase: "送",
  okurigana: "る",
  furigana: "おく",
  romaji: "okuru",
  kun: "おくる",
  on: "ソウ",
  meaning: "to send; to dispatch; to escort",
  answer: "送る"
},

tsukuru: {
  id: "tsukuru",
  audio: "audio/tsukuru.wav",
  kanji: "作る",
  kanjiBase: "作",
  okurigana: "る",
  furigana: "つく",
  romaji: "tsukuru",
  kun: "つくる",
  on: "サク",
  meaning: "to make; to create; to build",
  answer: "作る"
},

kaeru: {
  id: "kaeru",
  audio: "audio/kaeru.wav",
  kanji: "帰る",
  kanjiBase: "帰",
  okurigana: "る",
  furigana: "かえ",
  romaji: "kaeru",
  kun: "かえる",
  on: "キ",
  meaning: "to return; to go back; to come home",
  answer: "帰る"
},

kaeru2: {
  id: "kaeru2",
  audio: "audio/kaeru.wav",
  kanji: "変える",
  kanjiBase: "変え",
  okurigana: "る",
  furigana: "かえ",
  romaji: "kaeru",
  kun: "かえる",
  on: "ヘン",
  meaning: "to change; to alter; to modify",
  answer: "変える"
},

hikaru: {
  id: "hikaru",
  audio: "audio/hikaru.wav",
  kanji: "光る",
  kanjiBase: "光",
  okurigana: "る",
  furigana: "ひか",
  romaji: "hikaru",
  kun: "ひかる",
  on: "コウ",
  meaning: "to shine; to glitter; to glow",
  answer: "光る"
},

manabu: {
  id: "manabu",
  audio: "audio/manabu.wav",
  kanji: "学ぶ",
  kanjiBase: "学",
  okurigana: "ぶ",
  furigana: "まな",
  romaji: "manabu",
  kun: "まなぶ",
  on: "ガク",
  meaning: "to learn; to study; to take lessons",
  answer: "学ぶ"
},

iru: {
  id: "iru",
  audio: "audio/iru.wav",
  kanji: "いる",
  kanjiBase: "い",
  okurigana: "る",
  furigana: "い",
  romaji: "iru",
  kun: "いる",
  on: "",
  meaning: "to exist; to be (living things)",
  answer: "いる"
},

hirogaru: {
  id: "hirogaru",
  audio: "audio/hirogaru.wav",
  kanji: "広がる",
  kanjiBase: "広が",
  okurigana: "る",
  furigana: "ひろ",
  romaji: "hirogaru",
  kun: "ひろがる",
  on: "コウ",
  meaning: "to spread; to expand; to widen; to extend",
  answer: "広がる"
},

nemuru: {
  id: "nemuru",
  audio: "audio/nemuru.wav",
  kanji: "眠る",
  kanjiBase: "眠",
  okurigana: "る",
  furigana: "ねむ",
  romaji: "nemuru",
  kun: "ねむる",
  on: "ミン",
  meaning: "to sleep; to slumber; to rest",
  answer: "眠る"
},

hashiru: {
  id: "hashiru",
  audio: "audio/hashiru.wav",
  kanji: "走る",
  kanjiBase: "走",
  okurigana: "る",
  furigana: "はし",
  romaji: "hashiru",
  kun: "はしる",
  on: "ソウ",
  meaning: "to run",
  answer: "走る"
},

iku: {
  id: "iku",
  audio: "audio/iku.wav",
  kanji: "行く",
  kanjiBase: "行",
  okurigana: "く",
  furigana: "い",
  romaji: "iku",
  kun: "いく",
  on: "コウ",
  meaning: "to go",
  answer: "行く"
},

kiru: {
  id: "kiru",
  audio: "audio/kiru.wav",
  kanji: "切る",
  kanjiBase: "切",
  okurigana: "る",
  furigana: "き",
  romaji: "kiru",
  kun: "きる",
  on: "セツ",
  meaning: "to cut; to slice",
  answer: "切る"
},

kiru2: {
  id: "kiru2",
  audio: "audio/kiru.wav",
  kanji: "着る",
  kanjiBase: "着",
  okurigana: "る",
  furigana: "き",
  romaji: "kiru",
  kun: "きる",
  on: "チャク",
  meaning: "to wear; to put on (upper-body clothing)",
  answer: "着る"
},

tsuku: {
  id: "tsuku",
  audio: "audio/tsuku.wav",
  kanji: "付く",
  kanjiBase: "付",
  okurigana: "く",
  furigana: "つ",
  romaji: "tsuku",
  kun: "つく",
  on: "フ",
  meaning: "to stick; to be attached; to be added; to be included",
  answer: "付く"
},

tsuku2: {
  id: "tsuku2",
  audio: "audio/tsuku.wav",
  kanji: "就く",
  kanjiBase: "就",
  okurigana: "く",
  furigana: "つ",
  romaji: "tsuku",
  kun: "つく",
  on: "シュウ",
  meaning: "to take a position; to assume a role; to start (a job); to engage in",
  answer: "就く"
},

tsuku3: {
  id: "tsuku3",
  audio: "audio/tsuku.wav",
  kanji: "着く",
  kanjiBase: "着",
  okurigana: "く",
  furigana: "つ",
  romaji: "tsuku",
  kun: "つく",
  on: "チャク",
  meaning: "to arrive; to reach; to get to (a place)",
  answer: "着く"
},

sagaru: {
  id: "sagaru",
  audio: "audio/sagaru.wav",
  kanji: "下がる",
  kanjiBase: "下が",
  okurigana: "る",
  furigana: "さが",
  romaji: "sagaru",
  kun: "さがる",
  on: "カ",
  meaning: "to go down; to drop; to fall; to hang down; to step back",
  answer: "下がる"
},

orosu: {
  id: "orosu",
  audio: "audio/orosu.wav",
  kanji: "下ろす",
  kanjiBase: "下ろ",
  okurigana: "す",
  furigana: "おろ",
  romaji: "orosu",
  kun: "おろす",
  on: "ゲ",
  meaning: "to lower; to bring down; to take down; to withdraw; to unload",
  answer: "下ろす"
},

naru: {
  id: "naru",
  audio: "audio/naru.wav",
  kanji: "なる",
  kanjiBase: "な",
  okurigana: "る",
  furigana: "な",
  romaji: "naru",
  kun: "なる",
  on: "",
  meaning: "to become; to turn into; to reach (a state)",
  answer: "なる"
},

naru2: {
  id: "naru2",
  audio: "audio/naru.wav",
  kanji: "鳴る",
  kanjiBase: "鳴",
  okurigana: "る",
  furigana: "な",
  romaji: "naru",
  kun: "なる",
  on: "メイ",
  meaning: "to ring; to sound; to make a noise",
  answer: "鳴る"
},

noboru: {
  id: "noboru",
  audio: "audio/noboru.wav",
  kanji: "登る",
  kanjiBase: "登",
  okurigana: "る",
  furigana: "のぼ",
  romaji: "noboru",
  kun: "のぼる",
  on: "ト",
  meaning: "to climb; to go up; to ascend; to rise",
  answer: "登る"
},

ageru: {
  id: "ageru",
  audio: "audio/ageru.wav",
  kanji: "上げる",
  kanjiBase: "上げ",
  okurigana: "る",
  furigana: "あ",
  romaji: "ageru",
  kun: "あげる",
  on: "ジョウ",
  meaning: "to raise; to lift; to increase, to give",
  answer: "上げる"
},

akeru: {
  id: "akeru",
  audio: "audio/akeru.wav",
  kanji: "開ける",
  kanjiBase: "開け",
  okurigana: "る",
  furigana: "あ",
  romaji: "akeru",
  kun: "あける",
  on: "カイ",
  meaning: "to open",
  answer: "開ける"
},

shimeru: {
  id: "shimeru",
  audio: "audio/shimeru.wav",
  kanji: "閉める",
  kanjiBase: "閉め",
  okurigana: "る",
  furigana: "し",
  romaji: "shimeru",
  kun: "しめる",
  on: "ヘイ",
  meaning: "to close; to shut",
  answer: "閉める"
},

utsu: {
  id: "utsu",
  audio: "audio/utsu.wav",
  kanji: "打つ",
  kanjiBase: "打",
  okurigana: "つ",
  furigana: "う",
  romaji: "utsu",
  kun: "うつ",
  on: "ダ",
  meaning: "to hit; to strike; to type",
  answer: "打つ"
},

osu: {
  id: "osu",
  audio: "audio/osu.wav",
  kanji: "押す",
  kanjiBase: "押",
  okurigana: "す",
  furigana: "お",
  romaji: "osu",
  kun: "おす",
  on: "オウ",
  meaning: "to push; to press",
  answer: "押す"
},

deru: {
  id: "deru",
  audio: "audio/deru.wav",
  kanji: "出る",
  kanjiBase: "出",
  okurigana: "る",
  furigana: "で",
  romaji: "deru",
  kun: "でる",
  on: "シュツ",
  meaning: "to exit; to leave; to come out",
  answer: "出る"
},

tobu: {
  id: "tobu",
  audio: "audio/tobu.wav",
  kanji: "飛ぶ",
  kanjiBase: "飛",
  okurigana: "ぶ",
  furigana: "と",
  romaji: "tobu",
  kun: "とぶ",
  on: "ヒ",
  meaning: "to fly; to jump",
  answer: "飛ぶ"
},

kureru: {
  id: "kureru",
  audio: "audio/kureru.wav",
  kanji: "呉れる",
  kanjiBase: "呉れ",
  okurigana: "る",
  furigana: "くれ",
  romaji: "kureru",
  kun: "くれる; くれ",
  on: "ゴ",
  meaning: "to give (to me/us)",
  answer: "呉れる"
},


yaru: {
  id: "yaru",
  audio: "audio/yaru.wav",
  kanji: "遣る",
  kanjiBase: "遣",
  okurigana: "る",
  furigana: "や",
  romaji: "yaru",
  kun: "やる; つかう; つかい; づかい; つかわす",
  on: "ケン",
  meaning: "to do; to give; to send; to dispatch",
  answer: "遣る"
},


morau: {
  id: "morau",
  audio: "audio/morau.wav",
  kanji: "貰う",
  kanjiBase: "貰",
  okurigana: "う",
  furigana: "もら",
  romaji: "morau",
  kun: "もらう",
  on: "セイ, シャ",
  meaning: "to receive",
  answer: "貰う"
},


tsukau: {
  id: "tsukau",
  audio: "audio/tsukau.wav",
  kanji: "使う",
  kanjiBase: "使",
  okurigana: "う",
  furigana: "つか",
  romaji: "tsukau",
  kun: "つかう",
  on: "シ",
  meaning: "to use",
  answer: "使う"
},

kureru2: {
  id: "kureru2",
  audio: "audio/kureru.wav",
  kanji: "暮れる",
  kanjiBase: "暮れ",
  okurigana: "る",
  furigana: "くれ",
  romaji: "kureru",
  kun: "くれる; くれ",
  on: "ボ",
  meaning: "to get dark; to end; to come to an end (day, year, season)",
  answer: "暮れる"
},

shimeru2: {
  id: "shimeru2",
  audio: "audio/shimeru.wav",
  kanji: "締める",
  kanjiBase: "締め",
  okurigana: "る",
  furigana: "しめ",
  romaji: "shimeru",
  kun: "しめる; しめ",
  on: "テイ",
  meaning: "to tighten; to fasten; to tie; to secure; to press firmly",
  answer: "締める"
},

shimeru3: {
  id: "shimeru3",
  audio: "audio/shimeru.wav",
  kanji: "絞める",
  kanjiBase: "絞め",
  okurigana: "る",
  furigana: "しめ",
  romaji: "shimeru",
  kun: "しめる; しめ",
  on: "コウ",
  meaning: "to strangle; to squeeze; to wring; to tighten firmly",
  answer: "絞める"
},

komaru: {
  id: "komaru",
  audio: "audio/komaru.wav",
  kanji: "困る",
  kanjiBase: "困",
  okurigana: "る",
  furigana: "こま",
  romaji: "komaru",
  kun: "こまる",
  on: "コン",
  meaning: "to be troubled; to be bothered; to be in difficulty",
  answer: "困る"
},

kuru: {
  id: "kuru",
  audio: "audio/kuru.wav",
  kanji: "来る",
  kanjiBase: "来",
  okurigana: "る",
  furigana: "く",
  romaji: "kuru",
  kun: "くる",
  on: "ライ",
  meaning: "to come",
  answer: "来る"
},

wakaru: {
  id: "wakaru",
  audio: "audio/wakaru.wav",
  kanji: "分かる",
  kanjiBase: "分か",
  okurigana: "る",
  furigana: "わか",
  romaji: "wakaru",
  kun: "わかる",
  on: "ブン",
  meaning: "to understand; to know; to comprehend",
  answer: "分かる"
},

shiru: {
  id: "shiru",
  audio: "audio/shiru.wav",
  kanji: "知る",
  kanjiBase: "知",
  okurigana: "る",
  furigana: "し",
  romaji: "shiru",
  kun: "しる",
  on: "チ",
  meaning: "to know; to learn; to find out",
  answer: "知る"
},

detekuru: {
  id: "detekuru",
  audio: "audio/detekuru.wav",
  kanji: "出て来る",
  kanjiBase: "出て来",
  okurigana: "る",
  furigana: "でてく",
  romaji: "detekuru",
  kun: "でてくる",
  on: "シュツ, ライ",
  meaning: "to come out; to appear; to emerge",
  answer: "出て来る"
},

fumu: {
  id: "fumu",
  audio: "audio/fumu.wav",
  kanji: "踏む",
  kanjiBase: "踏",
  okurigana: "む",
  furigana: "ふ",
  romaji: "fumu",
  kun: "ふむ",
  on: "トウ",
  meaning: "to step on; to tread; to stomp",
  answer: "踏む"
},

suru: {
  id: "suru",
  audio: "audio/suru.wav",
  kanji: "する",
  kanjiBase: "す",
  okurigana: "る",
  furigana: "す",
  romaji: "suru",
  kun: "する",
  on: "",
  meaning: "to do; to perform",
  answer: "する"
},

utsuru: {
  id: "utsuru",
  audio: "audio/utsuru.wav",
  kanji: "移る",
  kanjiBase: "移",
  okurigana: "る",
  furigana: "うつ",
  romaji: "utsuru",
  kun: "うつる",
  on: "イ",
  meaning: "to move; to shift; to transfer; to change location",
  answer: "移る"
},

fureru: {
  id: "fureru",
  audio: "audio/fureru.wav",
  kanji: "触れる",
  kanjiBase: "触れ",
  okurigana: "る",
  furigana: "ふれ",
  romaji: "fureru",
  kun: "ふれる",
  on: "ショク",
  meaning: "to touch; to feel; to come into contact",
  answer: "触れる"
},

tsunagu: {
  id: "tsunagu",
  audio: "audio/tsunagu.wav",
  kanji: "繋ぐ",
  kanjiBase: "繋",
  okurigana: "ぐ",
  furigana: "つな",
  romaji: "tsunagu",
  kun: "つなぐ",
  on: "",
  meaning: "to connect; to link; to tie together",
  answer: "繋ぐ"
},

tsunageru: {
  id: "tsunageru",
  audio: "audio/tsunageru.wav",
  kanji: "繋げる",
  kanjiBase: "繋げ",
  okurigana: "る",
  furigana: "つな",
  romaji: "tsunageru",
  kun: "つなげる",
  on: "",
  meaning: "to connect; to attach; to fasten; to link",
  answer: "繋げる"
},

shibaru: {
  id: "shibaru",
  audio: "audio/shibaru.wav",
  kanji: "縛る",
  kanjiBase: "縛",
  okurigana: "る",
  furigana: "しば",
  romaji: "shibaru",
  kun: "しばる",
  on: "バク",
  meaning: "to tie; to bind; to restrain",
  answer: "縛る"
},

tanoshimu: {
  id: "tanoshimu",
  audio: "audio/tanoshimu.wav",
  kanji: "楽しむ",
  kanjiBase: "楽し",
  okurigana: "む",
  furigana: "たのし",
  romaji: "tanoshimu",
  kun: "たのしむ",
  on: "ラク",
  meaning: "to enjoy; to have fun; to take pleasure in",
  answer: "楽しむ"
},

utsuru2: {
  id: "utsuru2",
  audio: "audio/utsuru.wav",
  kanji: "映る",
  kanjiBase: "映",
  okurigana: "る",
  furigana: "うつ",
  romaji: "utsuru",
  kun: "うつる",
  on: "エイ",
  meaning: "to be reflected; to be projected; to appear (in a mirror, on a screen)",
  answer: "映る"
},

utsuru3: {
  id: "utsuru3",
  audio: "audio/utsuru.wav",
  kanji: "伝染る",
  kanjiBase: "伝染",
  okurigana: "る",
  furigana: "うつ",
  romaji: "utsuru",
  kun: "うつる",
  on: "デン, セン",
  meaning: "to be infected; to catch an illness; to spread contagiously",
  answer: "伝染る"
},

utsuru4: {
  id: "utsuru4",
  audio: "audio/utsuru.wav",
  kanji: "感染る",
  kanjiBase: "感染",
  okurigana: "る",
  furigana: "うつ",
  romaji: "utsuru",
  kun: "うつる",
  on: "カン, セン",
  meaning: "to be infected (medical/clinical); to contract an illness",
  answer: "感染る"
},

utsuru5: {
  id: "utsuru5",
  audio: "audio/utsuru.wav",
  kanji: "写る",
  kanjiBase: "写",
  okurigana: "る",
  furigana: "うつ",
  romaji: "utsuru",
  kun: "うつる",
  on: "シャ",
  meaning: "to be photographed; to come out (in a photo); to be copied",
  answer: "写る"
},

  tsumu: {
    id: "tsumu",
    audio: "audio/tsumu.wav",
    kanji: "摘む",
    kanjiBase: "摘",
    okurigana: "む",
    furigana: "つ",
    romaji: "tsumu",
    kun: "つむ",
    on: "テキ",
    meaning: "to pick; to pluck (flowers, buds, fruit). A gentle, careful picking motion with fingers, without ripping or tearing.",
    answer: "摘む"
  },

  mushiru: {
    id: "mushiru",
    audio: "audio/mushiru.wav",
    kanji: "毟る",
    kanjiBase: "毟",
    okurigana: "る",
    furigana: "むし",
    romaji: "mushiru",
    kun: "むしる",
    on: "",
    meaning: "to pluck; to pull out forcefully (hair, feathers, grass). A repeated small pulling motion that removes something attached, often sharply.",
    answer: "毟る"
  },

  chigiru: {
    id: "chigiru",
    audio: "audio/chigiru.wav",
    kanji: "千切る",
    kanjiBase: "千切",
    okurigana: "る",
    furigana: "ちぎ",
    romaji: "chigiru",
    kun: "ちぎる",
    on: "",
    meaning: "to tear to pieces; to rip off; to shred. A messy, irregular tearing motion that breaks something into small chunks.",
    answer: "千切る"
  },

  yaburu: {
    id: "yaburu",
    audio: "audio/yaburu.wav",
    kanji: "破る",
    kanjiBase: "破",
    okurigana: "る",
    furigana: "やぶ",
    romaji: "yaburu",
    kun: "やぶる",
    on: "ハ",
    meaning: "to tear; to break; to rip (paper, cloth, rules). A general-purpose tearing motion, intentional and direct.",
    answer: "破る"
  },

    mogiru: {
    id: "mogiru",
    audio: "audio/mogiru.wav",
    kanji: "捥る",
    kanjiBase: "捥",
    okurigana: "る",
    furigana: "もぎ",
    romaji: "mogiru",
    kun: "もぎる",
    on: "",
    meaning: "to pluck; to twist off; to yank off (fruit, leaves). A twisting + pulling motion that detaches something at its base.",
    answer: "捥る"
  },

  mogu: {
    id: "mogu",
    audio: "audio/mogu.wav",
    kanji: "捥ぐ",
    kanjiBase: "捥",
    okurigana: "ぐ",
    furigana: "も",
    romaji: "mogu",
    kun: "もぐ",
    on: "",
    meaning: "to tear off; to rip off (with hands or teeth). A direct ripping motion, often rough, removing something completely.",
    answer: "捥ぐ"
  },

  mogitoru: {
    id: "mogitoru",
    audio: "audio/mogitoru.wav",
    kanji: "捥り取る",
    kanjiBase: "捥り取",
    okurigana: "る",
    furigana: "もぎと",
    romaji: "mogitoru",
    kun: "もぎとる",
    on: "",
    meaning: "to pluck off; to tear off completely; to snatch away. A strong twist-and-pull motion that removes something fully.",
    answer: "捥り取る"
  },


  yabureru: {
    id: "yabureru",
    audio: "audio/yabureru.wav",
    kanji: "破れる",
    kanjiBase: "破",
    okurigana: "れる",
    furigana: "やぶ",
    romaji: "yabureru",
    kun: "やぶれる",
    on: "ハ",
    meaning: "to be torn; to rip; to break (intransitive). Something becomes torn on its own, without an agent.",
    answer: "破れる"
  },

  mushiritoru: {
    id: "mushiritoru",
    audio: "audio/mushiritoru.wav",
    kanji: "毟り取る",
    kanjiBase: "毟り取",
    okurigana: "る",
    furigana: "むしりと",
    romaji: "mushiritoru",
    kun: "むしりとる",
    on: "",
    meaning: "to pluck out; to tear off by pulling repeatedly. A sharper, repeated pulling motion that removes something attached.",
    answer: "毟り取る"
  },

  toru: {
    id: "toru",
    audio: "audio/toru.wav",
    kanji: "取る",
    kanjiBase: "取",
    okurigana: "る",
    furigana: "と",
    romaji: "toru",
    kun: "とる",
    on: "シュ",
    meaning: "to take; to pick up; to grab. A basic taking or grabbing motion, without tearing.",
    answer: "取る"
  },

  tsumitoru: {
    id: "tsumitoru",
    audio: "audio/tsumitoru.wav",
    kanji: "摘み取る",
    kanjiBase: "摘み取",
    okurigana: "る",
    furigana: "つみと",
    romaji: "tsumitoru",
    kun: "つみとる",
    on: "テキ",
    meaning: "to pick and remove; to pluck off (flowers, buds). A gentle picking motion that removes something cleanly without ripping.",
    answer: "摘み取る"
  },

  hikisaku: {
    id: "hikisaku",
    audio: "audio/hikisaku.wav",
    kanji: "引き裂く",
    kanjiBase: "引き裂",
    okurigana: "く",
    furigana: "ひきさ",
    romaji: "hikisaku",
    kun: "ひきさく",
    on: "",
    meaning: "to tear apart; to rip violently; to split by pulling. A strong motion pulling in opposite directions to tear something open.",
    answer: "引き裂く"
  },

  hiku: {
    id: "hiku",
    audio: "audio/hiku.wav",
    kanji: "引く",
    kanjiBase: "引",
    okurigana: "く",
    furigana: "ひ",
    romaji: "hiku",
    kun: "ひく",
    on: "イン",
    meaning: "to pull; to tug; to draw. A basic pulling motion, used as the root for stronger tearing verbs like 引き裂く.",
    answer: "引く"
  },
























};

/*-------------------------------------------------------------------------------------
Nouns
---------------------------------------------------------------------------------------*/





KANJI.allNouns = {

  kuruma: {
    id: "kuruma",
    audio: "audio/kuruma.wav",
    kanji: "車",
    kanjiBase: "車",
    okurigana: "",
    furigana: "くるま",
    romaji: "kuruma",
    kun: "くるま",
    on: "シャ",
    meaning: "car; vehicle",
    answer: "車"
  },

  neko: {
    id: "neko",
    audio: "audio/neko.wav",
    kanji: "猫",
    kanjiBase: "猫",
    okurigana: "",
    furigana: "ねこ",
    romaji: "neko",
    kun: "ねこ",
    on: "",
    meaning: "cat",
    answer: "猫"
  },

  inu: {
    id: "inu",
    audio: "audio/inu.wav",
    kanji: "犬",
    kanjiBase: "犬",
    okurigana: "",
    furigana: "いぬ",
    romaji: "inu",
    kun: "いぬ",
    on: "ケン",
    meaning: "dog",
    answer: "犬"
  },

  hon: {
    id: "hon",
    audio: "audio/hon.wav",
    kanji: "本",
    kanjiBase: "本",
    okurigana: "",
    furigana: "ほん",
    romaji: "hon",
    kun: "もと",
    on: "ホン",
    meaning: "book",
    answer: "本"
  },

  mizu: {
    id: "mizu",
    audio: "audio/mizu.wav",
    kanji: "水",
    kanjiBase: "水",
    okurigana: "",
    furigana: "みず",
    romaji: "mizu",
    kun: "みず",
    on: "スイ",
    meaning: "water",
    answer: "水"
  },

  ki: {
    id: "ki",
    audio: "audio/ki.wav",
    kanji: "木",
    kanjiBase: "木",
    okurigana: "",
    furigana: "き",
    romaji: "ki",
    kun: "き",
    on: "モク",
    meaning: "tree; wood",
    answer: "木"
  },

  yama: {
    id: "yama",
    audio: "audio/yama.wav",
    kanji: "山",
    kanjiBase: "山",
    okurigana: "",
    furigana: "やま",
    romaji: "yama",
    kun: "やま",
    on: "サン",
    meaning: "mountain",
    answer: "山"
  },

  kawa: {
    id: "kawa",
    audio: "audio/kawa.wav",
    kanji: "川",
    kanjiBase: "川",
    okurigana: "",
    furigana: "かわ",
    romaji: "kawa",
    kun: "かわ",
    on: "セン",
    meaning: "river",
    answer: "川"
  },

  sora: {
    id: "sora",
    audio: "audio/sora.wav",
    kanji: "空",
    kanjiBase: "空",
    okurigana: "",
    furigana: "そら",
    romaji: "sora",
    kun: "そら",
    on: "クウ",
    meaning: "sky",
    answer: "空"
  },

  hito: {
    id: "hito",
    audio: "audio/hito.wav",
    kanji: "人",
    kanjiBase: "人",
    okurigana: "",
    furigana: "ひと",
    romaji: "hito",
    kun: "ひと",
    on: "ジン",
    meaning: "person",
    answer: "人"
  },

  hi: {
    id: "hi",
    audio: "audio/hi.wav",
    kanji: "火",
    kanjiBase: "火",
    okurigana: "",
    furigana: "ひ",
    romaji: "hi",
    kun: "ひ",
    on: "カ",
    meaning: "fire",
    answer: "火"
  },

  taiyou: {
    id: "taiyou",
    audio: "audio/taiyou.wav",
    kanji: "太陽",
    kanjiBase: "太陽",
    okurigana: "",
    furigana: "たいよう",
    romaji: "taiyou",
    kun: "",
    on: "タイヨウ",
    meaning: "sun",
    answer: "太陽"
  },

  mizuumi: {
    id: "mizuumi",
    audio: "audio/mizuumi.wav",
    kanji: "湖",
    kanjiBase: "湖",
    okurigana: "",
    furigana: "みずうみ",
    romaji: "mizuumi",
    kun: "みずうみ",
    on: "コ",
    meaning: "lake",
    answer: "湖"
  },

  umi: {
    id: "umi",
    audio: "audio/umi.wav",
    kanji: "海",
    kanjiBase: "海",
    okurigana: "",
    furigana: "うみ",
    romaji: "umi",
    kun: "うみ",
    on: "カイ",
    meaning: "sea; ocean",
    answer: "海"
  },

  hayashi: {
    id: "hayashi",
    audio: "audio/hayashi.wav",
    kanji: "林",
    kanjiBase: "林",
    okurigana: "",
    furigana: "はやし",
    romaji: "hayashi",
    kun: "はやし",
    on: "リン",
    meaning: "woods; grove",
    answer: "林"
  },

  ichi: {
    id: "ichi",
    audio: "audio/ichi.wav",
    kanji: "一",
    kanjiBase: "一",
    okurigana: "",
    furigana: "いち",
    romaji: "ichi",
    kun: "ひと",
    on: "イチ",
    meaning: "one",
    answer: "一"
  },

  ni: {
    id: "ni",
    audio: "audio/ni.wav",
    kanji: "二",
    kanjiBase: "二",
    okurigana: "",
    furigana: "に",
    romaji: "ni",
    kun: "ふた",
    on: "ニ",
    meaning: "two",
    answer: "二"
  },

  san: {
    id: "san",
    audio: "audio/san.wav",
    kanji: "三",
    kanjiBase: "三",
    okurigana: "",
    furigana: "さん",
    romaji: "san",
    kun: "み",
    on: "サン",
    meaning: "three",
    answer: "三"
  },

  yon: {
    id: "yon",
    audio: "audio/yon.wav",
    kanji: "四",
    kanjiBase: "四",
    okurigana: "",
    furigana: "よん",
    romaji: "yon",
    kun: "よ",
    on: "シ",
    meaning: "four",
    answer: "四"
  },

  go: {
    id: "go",
    audio: "audio/go.wav",
    kanji: "五",
    kanjiBase: "五",
    okurigana: "",
    furigana: "ご",
    romaji: "go",
    kun: "いつ",
    on: "ゴ",
    meaning: "five",
    answer: "五"
  },

  mori: {
    id: "mori",
    audio: "audio/mori.wav",
    kanji: "森",
    kanjiBase: "森",
    okurigana: "",
    furigana: "もり",
    romaji: "mori",
    kun: "もり",
    on: "シン",
    meaning: "forest",
    answer: "森"
  },











};








/* ==========================================================
   DATASET SETUP (VERBS + NOUNS)
   ========================================================== */

/* ==========================================================
   DATASET SETUP (VERBS + NOUNS)
   ========================================================== */

/* ==========================================================
   DATASET SETUP (VERBS + NOUNS)
   ========================================================== */

if (typeof KANJI.allKanji === "undefined") {
  KANJI.allKanji = {};
}

if (typeof KANJI.allNouns === "undefined") {
  KANJI.allNouns = {};
}

KANJI.allVerbs = { ...KANJI.allKanji };


/* ==========================================================
   LOADERS
   ========================================================== */

KANJI.loadSingle = function (id) {
  const item =
    KANJI.allVerbs[id] ||
    KANJI.allNouns[id];

  if (!item) {
    console.error("Unknown kanji id:", id);
    return null;
  }

  KANJI.dataset = [item];
  return item;
};

KANJI.loadVerbs = function () {
  KANJI.dataset = Object.values(KANJI.allVerbs);
};

KANJI.loadNouns = function () {
  if (Object.keys(KANJI.allNouns).length === 0) {
    console.warn("No noun dataset yet — falling back to verbs.");
    KANJI.dataset = Object.values(KANJI.allVerbs);
    return;
  }
  KANJI.dataset = Object.values(KANJI.allNouns);
};


/* ==========================================================
   RANDOM PICK
   ========================================================== */

KANJI.pickRandom = function () {
  const item = KANJI.dataset[Math.floor(Math.random() * KANJI.dataset.length)];
  KANJI.currentItem = item;
  return item;
};


/* ==========================================================
   START ENGINE
   ========================================================== */

KANJI.start = function (mode) {
  KANJI.mode = mode;

  if (mode === "verbs") {
    KANJI.loadVerbs();

  } else if (mode === "nouns") {
    KANJI.loadNouns();

  } else {
    KANJI.loadSingle(mode);
  }

  KANJI.startRound();
};


/* ==========================================================
   START ROUND
   ========================================================== */

KANJI.startRound = function () {
  KANJI.mcqLocked = false;
  KANJI.screen1();
};


/* ==========================================================
   AUDIO CONTROL
   ========================================================== */

KANJI.playAudio = function (file) {
  try {
    const audio = new Audio(file);
    audio.play().catch(() => {});
  } catch (e) {
    console.error("Audio error:", e);
  }
};


/* ==========================================================
   SCREEN SWITCHER
   ========================================================== */

KANJI.show = function (id) {
  document.querySelectorAll(".kanji-screen").forEach(el =>
    el.classList.remove("active")
  );
  document.getElementById(id).classList.add("active");
};


/* ==========================================================
   SCREEN 1 — AUDIO ONLY
   ========================================================== */

KANJI.screen1 = function () {
  KANJI.show("kanjiScreen1");

  const item = KANJI.pickRandom();
  KANJI.playAudio(item.audio);

  document.getElementById("kanjiReplayBtn").onclick = () =>
    KANJI.playAudio(item.audio);

  document.getElementById("kanjiNextBtn").onclick = () =>
    KANJI.screen2();
};


/* ==========================================================
   DECOY POOL (VERBS)
   ========================================================== */

const kanjiPool = [
  { kanjiBase: "行", okurigana: "く" },
  { kanjiBase: "見", okurigana: "る" },
  { kanjiBase: "食べ", okurigana: "る" },
  { kanjiBase: "歩", okurigana: "く" },
  { kanjiBase: "入", okurigana: "る" },
  { kanjiBase: "出", okurigana: "る" },

  { kanjiBase: "飲", okurigana: "む" },
  { kanjiBase: "付け", okurigana: "る" },
  { kanjiBase: "消", okurigana: "す" },
  { kanjiBase: "入れ", okurigana: "る" },
  { kanjiBase: "寝", okurigana: "る" },
  { kanjiBase: "置", okurigana: "く" },
  { kanjiBase: "落ち", okurigana: "る" },
  { kanjiBase: "送", okurigana: "る" },

  { kanjiBase: "書", okurigana: "く" },
  { kanjiBase: "読", okurigana: "む" },
  { kanjiBase: "作", okurigana: "る" },
  { kanjiBase: "笑", okurigana: "う" },
  { kanjiBase: "買", okurigana: "う" },
  { kanjiBase: "売", okurigana: "る" },
  { kanjiBase: "使", okurigana: "う" },
  { kanjiBase: "待", okurigana: "つ" },
  { kanjiBase: "立", okurigana: "つ" },
  { kanjiBase: "座", okurigana: "る" },
  { kanjiBase: "開", okurigana: "ける" },
  { kanjiBase: "閉", okurigana: "める" },
  { kanjiBase: "帰", okurigana: "る" },
  { kanjiBase: "走", okurigana: "る" },
  { kanjiBase: "泳", okurigana: "ぐ" }
];


/* ==========================================================
   DECOY POOL (NOUNS)
   ========================================================== */

const nounPool = [
  { kanjiBase: "車" },
  { kanjiBase: "猫" },
  { kanjiBase: "犬" },
  { kanjiBase: "本" },
  { kanjiBase: "水" },
  { kanjiBase: "木" },
  { kanjiBase: "山" },
  { kanjiBase: "川" },
  { kanjiBase: "空" },
  { kanjiBase: "人" },

  // Add more N5 nouns
  { kanjiBase: "雨" },
  { kanjiBase: "火" },
  { kanjiBase: "金" },
  { kanjiBase: "手" },
  { kanjiBase: "目" },
  { kanjiBase: "口" },
  { kanjiBase: "耳" },
  { kanjiBase: "家" },
  { kanjiBase: "町" },
  { kanjiBase: "道" }
];


/* ==========================================================
   BUILD MCQ CHOICES
   ========================================================== */

/* ==========================================================
   BUILD MCQ CHOICES (VERBS + NOUNS)
   ========================================================== */

KANJI.buildChoices = function (item) {

  let decoys;

  // VERBS → use verb pool (kanji + okurigana)
  if (KANJI.mode === "verbs") {
    decoys = [...kanjiPool]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const correct = {
      kanjiBase: item.kanjiBase,
      okurigana: item.okurigana
    };

    const choices = [correct, ...decoys];

    // shuffle
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }

    return choices;
  }

  // NOUNS → use noun pool (kanji only)
  if (KANJI.mode === "nouns") {
    decoys = [...nounPool]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const correct = {
      kanjiBase: item.kanjiBase,
      okurigana: ""   // nouns have no okurigana
    };

    const choices = [correct, ...decoys];

    // shuffle
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }

    return choices;
  }

};



/* ==========================================================
   SCREEN 2 — MCQ
   ========================================================== */

/* ==========================================================
   SCREEN 2 — MCQ
   ========================================================== */

/* ==========================================================
   SCREEN 2 — MCQ
   ========================================================== */

KANJI.screen2 = function () {
  KANJI.show("kanjiScreen2");
  KANJI.mcqLocked = false;

  const item = KANJI.currentItem;
  const mcqBox = document.getElementById("kanjiMcqContainer");
  mcqBox.innerHTML = "";

  // replay button
  const replayBtn = document.createElement("button");
  replayBtn.textContent = "🔊 Replay";
  replayBtn.style.cssText = `
    font-size: 20px;
    padding: 10px 18px;
    margin-bottom: 18px;
    border-radius: 8px;
    background: #444;
    color: white;
    border: none;
    cursor: pointer;
  `;
  replayBtn.onclick = () => {
    if (!KANJI.mcqLocked) KANJI.playAudio(item.audio);
  };
  mcqBox.appendChild(replayBtn);

  const options = KANJI.buildChoices(item);

  options.forEach(opt => {
    const div = document.createElement("div");

    // Mode-specific class
    div.className = "mcq-option";


    // Nouns → kanji only
    if (KANJI.mode === "nouns") {
      div.innerHTML = `
        <span style="font-size: 32px;">${opt.kanjiBase}</span>
      `;
    }

    // Verbs → kanji + okurigana
    else {
      div.innerHTML = `
        <span style="font-size: 32px;">${opt.kanjiBase}</span>
        <span class="okurigana">${opt.okurigana}</span>

      `;
    }

    div.onclick = () => KANJI.handleMCQ(opt.kanjiBase + (opt.okurigana || ""));
    mcqBox.appendChild(div);
  }); // closes forEach

}; // closes KANJI.screen2



/* ==========================================================
   HANDLE MCQ
   ========================================================== */

KANJI.handleMCQ = function (choiceKanji) {
  const correct = KANJI.currentItem.answer;
  const buttons = document.querySelectorAll(".mcq-option");

  buttons.forEach(btn => {
    btn.style.pointerEvents = "none";
    const isCorrect = btn.textContent.includes(correct);

    // unified colors for verbs + nouns
    btn.style.background = isCorrect ? "#1e5128" : "#512828";

  });

  setTimeout(() => KANJI.screen3(), 900);
};


/* ==========================================================
   SCREEN 3 — SUMMARY
   ========================================================== */

KANJI.screen3 = function () {
  KANJI.show("kanjiScreen3");

  const item = KANJI.currentItem;

  const kanjiBox = document.getElementById("kanjiSummaryKanji");
  kanjiBox.textContent = item.kanji;
  kanjiBox.style.fontSize = "96px";
  kanjiBox.style.fontWeight = "bold";
  kanjiBox.style.marginBottom = "20px";
  kanjiBox.style.textAlign = "center";

  document.getElementById("kanjiSummaryFurigana").textContent = item.furigana;
  document.getElementById("kanjiSummaryRomaji").textContent = item.romaji;
  document.getElementById("kanjiSummaryKun").textContent = "Kun: " + item.kun;
  document.getElementById("kanjiSummaryOn").textContent = "On: " + item.on;
  document.getElementById("kanjiSummaryMeaning").textContent = "Meaning: " + item.meaning;

  const oldBtn = document.getElementById("kanjiNextRoundBtn");
  if (oldBtn) oldBtn.remove();

  const nextBtn = document.createElement("button");
  nextBtn.id = "kanjiNextRoundBtn";
  nextBtn.textContent = "Next";
  nextBtn.style.cssText = `
    margin-top: 20px;
    padding: 14px 28px;
    font-size: 18px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background: #7fd1ff;
    color: #000;
  `;
  nextBtn.onclick = () => KANJI.startRound();

  document.getElementById("kanjiScreen3").appendChild(nextBtn);
};
