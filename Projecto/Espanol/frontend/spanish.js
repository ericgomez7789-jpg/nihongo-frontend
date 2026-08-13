
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startLearningBtn");
  const landing = document.getElementById("landingScreen");
  const screen0 = document.getElementById("screen0");

  startBtn.addEventListener("click", () => {
    landing.classList.add("hidden");
    screen0.classList.remove("hidden");
  });
});














/* ------------------------------
   SENTENCES (LEVEL 1 + LEVEL 2)
------------------------------ */
const sentences = [



  



{
  id: "l1-es-1",
  meaning: "What do you do?",
  level: 1,
  chunks: [
    {
      romaji: "qué",
      hiragana: "qué",
      meaning: "what",
      audio: {
        daughter: "audio/spanish/que.wav",
        me: "audio/spanish/que.wav"
      }
    },
    {
      romaji: "haces",
      hiragana: "haces",
      meaning: "do",
      audio: {
        daughter: "audio/spanish/haces.wav",
        me: "audio/spanish/haces.wav"
      }
    },
    {
      romaji: "tú",
      hiragana: "tú",
      meaning: "you",
      audio: {
        daughter: "audio/spanish/tu.wav",
        me: "audio/spanish/tu.wav"
      }
    }
  ]
},
  









{
  id: "l1-es-2",
  meaning: "Are you okay?",
  level: 1,
  chunks: [
    {
      romaji: "estás",
      hiragana: "estás",
      meaning: "are (you)",
      audio: {
        daughter: "audio/spanish/estas.wav",
        me: "audio/spanish/estas.wav"
      }
    },
    {
      romaji: "bien",
      hiragana: "bien",
      meaning: "okay / well",
      audio: {
        daughter: "audio/spanish/bien.wav",
        me: "audio/spanish/bien.wav"
      }
    }
  ]
},













{
  id: "l1-es-3",
  meaning: "I write with a pencil.",
  level: 1,
  chunks: [
    {
      romaji: "escribo",
      hiragana: "escribo",
      meaning: "I write",
      audio: {
        daughter: "audio/spanish/escribo.wav",
        me: "audio/spanish/escribo.wav"
      }
    },
    {
      romaji: "con",
      hiragana: "con",
      meaning: "with",
      audio: {
        daughter: "audio/spanish/con_with.wav",
        me: "audio/spanish/con_with.wav"
      }
    },
    {
      romaji: "lápiz",
      hiragana: "lápiz",
      meaning: "pencil",
      audio: {
        daughter: "audio/spanish/lapiz.wav",
        me: "audio/spanish/lapiz.wav"
      }
    }
  ]
},






{
  id: "l1-es-4",
  meaning: "What do you do in your free time?",
  level: 1,
  chunks: [
    {
      romaji: "qué",
      hiragana: "qué",
      meaning: "what",
      audio: {
        daughter: "audio/spanish/que.wav",
        me: "audio/spanish/que.wav"
      }
    },
    {
      romaji: "haces",
      hiragana: "haces",
      meaning: "do (you)",
      audio: {
        daughter: "audio/spanish/haces.wav",
        me: "audio/spanish/haces.wav"
      }
    },
    {
      romaji: "en",
      hiragana: "en",
      meaning: "in",
      audio: {
        daughter: "audio/spanish/en.wav",
        me: "audio/spanish/en.wav"
      }
    },
    {
      romaji: "tu",
      hiragana: "tu",
      meaning: "your",
      audio: {
        daughter: "audio/spanish/tu.wav",
        me: "audio/spanish/tu.wav"
      }
    },
    {
      romaji: "tiempo",
      hiragana: "tiempo",
      meaning: "time",
      audio: {
        daughter: "audio/spanish/tiempo.wav",
        me: "audio/spanish/tiempo.wav"
      }
    },
    {
      romaji: "libre",
      hiragana: "libre",
      meaning: "free",
      audio: {
        daughter: "audio/spanish/libre.wav",
        me: "audio/spanish/libre.wav"
      }
    }
  ]
},






{
  id: "l1-es-5",
  meaning: "I play games.",
  level: 1,
  chunks: [
    {
      romaji: "yo",
      hiragana: "yo",
      meaning: "I",
      audio: {
        daughter: "audio/spanish/yo.wav",
        me: "audio/spanish/yo.wav"
      }
    },
    {
      romaji: "juego",
      hiragana: "juego",
      meaning: "play",
      audio: {
        daughter: "audio/spanish/juego.wav",
        me: "audio/spanish/juego.wav"
      }
    },
    {
      romaji: "juegos",
      hiragana: "juegos",
      meaning: "games",
      audio: {
        daughter: "audio/spanish/juegos.wav",
        me: "audio/spanish/juegos.wav"
      }
    }
  ]
},






{
  id: "l1-es-6",
  meaning: "I go to school.",
  level: 1,

  chunks: [
    {
      romaji: "yo",
      hiragana: "yo",
      meaning: "I",
      audio: {
        daughter: "audio/spanish/yo.wav",
        me: "audio/spanish/yo.wav"
      }
    },
    {
      romaji: "voy",
      hiragana: "voy",
      meaning: "go",
      audio: {
        daughter: "audio/spanish/voy.wav",
        me: "audio/spanish/voy.wav"
      }
    },
    {
      romaji: "a",
      hiragana: "a",
      meaning: "to",
      audio: {
        daughter: "audio/spanish/a.wav",
        me: "audio/spanish/a.wav"
      }
    },
    {
      romaji: "la",
      hiragana: "la",
      meaning: "the (feminine)",
      audio: {
        daughter: "audio/spanish/la.wav",
        me: "audio/spanish/la.wav"
      }
    },
    {
      romaji: "escuela",
      hiragana: "escuela",
      meaning: "school",
      audio: {
        daughter: "audio/spanish/escuela.wav",
        me: "audio/spanish/escuela.wav"
      }
    }
  ]
},









{
  id: "l1-es-7",
  meaning: "I go to the river.",
  level: 1,

  chunks: [
    {
      romaji: "voy",
      hiragana: "voy",
      meaning: "I go",
      audio: {
        daughter: "audio/spanish/voy.wav",
        me: "audio/spanish/voy.wav"
      }
    },
    {
      romaji: "al",
      hiragana: "al",
      meaning: "to the",
      audio: {
        daughter: "audio/spanish/al.wav",
        me: "audio/spanish/al.wav"
      }
    },
    {
      romaji: "río",
      hiragana: "río",
      meaning: "river",
      audio: {
        daughter: "audio/spanish/rio.wav",
        me: "audio/spanish/rio.wav"
      }
    }
  ]
},









{
  id: "l1-es-8",
  meaning: "I climb the mountain.",
  level: 1,

  chunks: [
    {
      romaji: "subo",
      hiragana: "subo",
      meaning: "I climb",
      audio: {
        daughter: "audio/spanish/subo.wav",
        me: "audio/spanish/subo.wav"
      }
    },
    {
      romaji: "la",
      hiragana: "la",
      meaning: "the",
      audio: {
        daughter: "audio/spanish/la.wav",
        me: "audio/spanish/la.wav"
      }
    },
    {
      romaji: "montaña",
      hiragana: "montaña",
      meaning: "mountain",
      audio: {
        daughter: "audio/spanish/montana.wav",
        me: "audio/spanish/montana.wav"
      }
    }
  ]
},











{
  id: "l1-es-9",
  meaning: "Put on the cap.",
  level: 1,

  chunks: [
    {
      romaji: "ponte",
      hiragana: "ponte",
      meaning: "put on (yourself)",
      audio: {
        daughter: "audio/spanish/ponte.wav",
        me: "audio/spanish/ponte.wav"
      }
    },
    {
      romaji: "la",
      hiragana: "la",
      meaning: "the",
      audio: {
        daughter: "audio/spanish/la.wav",
        me: "audio/spanish/la.wav"
      }
    },
    {
      romaji: "gorra",
      hiragana: "gorra",
      meaning: "cap",
      audio: {
        daughter: "audio/spanish/gorra.wav",
        me: "audio/spanish/gorra.wav"
      }
    }
  ]
},














{
  id: "l1-es-10",
  meaning: "Give it your best.",
  level: 1,

  chunks: [
    {
      romaji: "echa",
      hiragana: "echa",
      meaning: "give / put",
      audio: {
        daughter: "audio/spanish/echa.wav",
        me: "audio/spanish/echa.wav"
      }
    },
    {
      romaji: "le",
      hiragana: "le",
      meaning: "to it — a tiny pronoun that points the action toward something",
      audio: {
        daughter: "audio/spanish/le.wav",
        me: "audio/spanish/le.wav"
      }
    },
    {
      romaji: "ganas",
      hiragana: "ganas",
      meaning: "effort / desire",
      audio: {
        daughter: "audio/spanish/ganas.wav",
        me: "audio/spanish/ganas.wav"
      }
    }
  ]
},
















{
  id: "l1-es-11",
  meaning: "Take care of yourself.",
  level: 1,

  chunks: [
    {
      romaji: "cuida",
      hiragana: "cuida",
      meaning: "take care",
      audio: {
        daughter: "audio/spanish/cuida.wav",
        me: "audio/spanish/cuida.wav"
      }
    },
    {
      romaji: "te",
      hiragana: "te",
      meaning: "yourself — a reflexive pronoun that shows the action is done to your own body",
      audio: {
        daughter: "audio/spanish/te.wav",
        me: "audio/spanish/te.wav"
      }
    }
  ]
},













{
  id: "l1-es-12",
  meaning: "I'm already leaving.",
  level: 1,

  chunks: [
    {
      romaji: "ya",
      hiragana: "ya",
      meaning: "already",
      audio: {
        daughter: "audio/spanish/ya.wav",
        me: "audio/spanish/ya.wav"
      }
    },
    {
      romaji: "me",
      hiragana: "me",
      meaning: "myself — reflexive pronoun showing the action applies to your own body",
      audio: {
        daughter: "audio/spanish/me.wav",
        me: "audio/spanish/me.wav"
      }
    },
    {
      romaji: "voy",
      hiragana: "voy",
      meaning: "I go / I'm going",
      audio: {
        daughter: "audio/spanish/voy.wav",
        me: "audio/spanish/voy.wav"
      }
    }
  ]
},














{
  id: "l1-es-13",
  meaning: "Goodbye.",
  level: 1,

  chunks: [
    {
      romaji: "adios",
      hiragana: "adios",
      meaning: "goodbye",
      audio: {
        daughter: "audio/spanish/adios.wav",
        me: "audio/spanish/adios.wav"
      }
    }
  ]
},
















{
  id: "l1-es-14",
  meaning: "Where are you from?",
  level: 1,

  chunks: [
    {
      romaji: "de",
      hiragana: "de",
      meaning: "from",
      audio: {
        daughter: "audio/spanish/de.wav",
        me: "audio/spanish/de.wav"
      }
    },
    {
      romaji: "donde",
      hiragana: "donde",
      meaning: "where",
      audio: {
        daughter: "audio/spanish/donde.wav",
        me: "audio/spanish/donde.wav"
      }
    },
    {
      romaji: "eres",
      hiragana: "eres",
      meaning: "you are (informal)",
      audio: {
        daughter: "audio/spanish/eres.wav",
        me: "audio/spanish/eres.wav"
      }
    }
  ]
},












{
  id: "l1-es-15",
  meaning: "I come from the United States.",
  level: 1,

  chunks: [
    {
      romaji: "yo",
      hiragana: "yo",
      meaning: "I",
      audio: {
        daughter: "audio/spanish/yo.wav",
        me: "audio/spanish/yo.wav"
      }
    },
    {
      romaji: "vengo",
      hiragana: "vengo",
      meaning: "come",
      audio: {
        daughter: "audio/spanish/vengo.wav",
        me: "audio/spanish/vengo.wav"
      }
    },
    {
      romaji: "de",
      hiragana: "de",
      meaning: "from",
      audio: {
        daughter: "audio/spanish/de.wav",
        me: "audio/spanish/de.wav"
      }
    },
    {
      romaji: "los",
      hiragana: "los",
      meaning: "the (plural)",
      audio: {
        daughter: "audio/spanish/los.wav",
        me: "audio/spanish/los.wav"
      }
    },
    {
      romaji: "estados",
      hiragana: "estados",
      meaning: "states",
      audio: {
        daughter: "audio/spanish/estados.wav",
        me: "audio/spanish/estados.wav"
      }
    },
    {
      romaji: "unidos",
      hiragana: "unidos",
      meaning: "united",
      audio: {
        daughter: "audio/spanish/unidos.wav",
        me: "audio/spanish/unidos.wav"
      }
    }
  ]
},














{
  id: "l1-es-16",
  meaning: "When did you come?",
  level: 1,

  chunks: [
    {
      romaji: "cuando",
      hiragana: "cuando",
      meaning: "when",
      audio: {
        daughter: "audio/spanish/cuando.wav",
        me: "audio/spanish/cuando.wav"
      }
    },
    {
      romaji: "viniste",
      hiragana: "viniste",
      meaning: "you came",
      audio: {
        daughter: "audio/spanish/viniste.wav",
        me: "audio/spanish/viniste.wav"
      }
    }
  ]
},













{
  id: "l1-es-17",
  meaning: "How do you read this?",
  level: 1,

  chunks: [
    {
      romaji: "como",
      hiragana: "como",
      meaning: "how",
      audio: {
        daughter: "audio/spanish/como.wav",
        me: "audio/spanish/como.wav"
      }
    },
    {
      romaji: "se",
      hiragana: "se",
      meaning: "(reflexive marker)",
      audio: {
        daughter: "audio/spanish/se.wav",
        me: "audio/spanish/se.wav"
      }
    },
    {
      romaji: "lee",
      hiragana: "lee",
      meaning: "read",
      audio: {
        daughter: "audio/spanish/lee.wav",
        me: "audio/spanish/lee.wav"
      }
    },
    {
      romaji: "esto",
      hiragana: "esto",
      meaning: "this",
      audio: {
        daughter: "audio/spanish/esto.wav",
        me: "audio/spanish/esto.wav"
      }
    }
  ]
},












{
  id: "l1-es-18",
  meaning: "to touch the window",
  level: 1,

  chunks: [
    {
      romaji: "tocar",
      hiragana: "tocar",
      meaning: "to touch",
      audio: {
        daughter: "audio/spanish/tocar.wav",
        me: "audio/spanish/tocar.wav"
      }
    },
    {
      romaji: "la",
      hiragana: "la",
      meaning: "the",
      audio: {
        daughter: "audio/spanish/la.wav",
        me: "audio/spanish/la.wav"
      }
    },
    {
      romaji: "ventana",
      hiragana: "ventana",
      meaning: "window",
      audio: {
        daughter: "audio/spanish/ventana.wav",
        me: "audio/spanish/ventana.wav"
      }
    }
  ]
},















{
  id: "l1-es-19",
  meaning: "it's going to get stained",
  level: 1,

  chunks: [
    {
      romaji: "se",
      hiragana: "se",
      meaning: "itself",
      audio: {
        daughter: "audio/spanish/se.wav",
        me: "audio/spanish/se.wav"
      }
    },
    {
      romaji: "va",
      hiragana: "va",
      meaning: "is going",
      audio: {
        daughter: "audio/spanish/va.wav",
        me: "audio/spanish/va.wav"
      }
    },
    {
      romaji: "a",
      hiragana: "a",
      meaning: "to",
      audio: {
        daughter: "audio/spanish/a.wav",
        me: "audio/spanish/a.wav"
      }
    },
    {
      romaji: "manchar",
      hiragana: "manchar",
      meaning: "to stain",
      audio: {
        daughter: "audio/spanish/manchar.wav",
        me: "audio/spanish/manchar.wav"
      }
    }
  ]
},















{
  id: "l1-es-20",
  meaning: "the floor is covered in snow",
  level: 1,

  chunks: [
    {
      romaji: "el",
      hiragana: "el",
      meaning: "the",
      audio: {
        daughter: "audio/spanish/el.wav",
        me: "audio/spanish/el.wav"
      }
    },
    {
      romaji: "piso",
      hiragana: "piso",
      meaning: "floor",
      audio: {
        daughter: "audio/spanish/piso.wav",
        me: "audio/spanish/piso.wav"
      }
    },
    {
      romaji: "esta",
      hiragana: "está",
      meaning: "is",
      audio: {
        daughter: "audio/spanish/esta.wav",
        me: "audio/spanish/esta.wav"
      }
    },
    {
      romaji: "cubierto",
      hiragana: "cubierto",
      meaning: "covered",
      audio: {
        daughter: "audio/spanish/cubierto.wav",
        me: "audio/spanish/cubierto.wav"
      }
    },
    {
      romaji: "de",
      hiragana: "de",
      meaning: "with / of",
      audio: {
        daughter: "audio/spanish/de.wav",
        me: "audio/spanish/de.wav"
      }
    },
    {
      romaji: "nieve",
      hiragana: "nieve",
      meaning: "snow",
      audio: {
        daughter: "audio/spanish/nieve.wav",
        me: "audio/spanish/nieve.wav"
      }
    }
  ]
},












{
id: "l1-es-21",
meaning: "sit down on the chair",
level: 1,
chunks: [
{
romaji: "sienta",
hiragana: "siéntate (sienta)",
meaning: "sit",
audio: {
daughter: "audio/spanish/sienta.wav",
me: "audio/spanish/sienta.wav"
}
},
{
romaji: "te",
hiragana: "te",
meaning: "yourself",
audio: {
daughter: "audio/spanish/te.wav",
me: "audio/spanish/te.wav"
}
},
{
romaji: "en",
hiragana: "en",
meaning: "on / in",
audio: {
daughter: "audio/spanish/en.wav",
me: "audio/spanish/en.wav"
}
},
{
romaji: "la",
hiragana: "la",
meaning: "the",
audio: {
daughter: "audio/spanish/la.wav",
me: "audio/spanish/la.wav"
}
},
{
romaji: "silla",
hiragana: "silla",
meaning: "chair",
audio: {
daughter: "audio/spanish/silla.wav",
me: "audio/spanish/silla.wav"
}
}
]
},


















{
  id: "l1-es-22",
  meaning: "the shirt is inside out",
  level: 1,

  chunks: [
    {
      romaji: "la",
      hiragana: "la",
      meaning: "the (feminine)",
      audio: {
        daughter: "audio/spanish/la.wav",
        me: "audio/spanish/la.wav"
      }
    },
    {
      romaji: "camisa",
      hiragana: "camisa",
      meaning: "shirt",
      audio: {
        daughter: "audio/spanish/camisa.wav",
        me: "audio/spanish/camisa.wav"
      }
    },
    {
      romaji: "esta",
      hiragana: "está",
      meaning: "is",
      audio: {
        daughter: "audio/spanish/esta.wav",
        me: "audio/spanish/esta.wav"
      }
    },
    {
      romaji: "al",
      hiragana: "al",
      meaning: "to the / at the",
      audio: {
        daughter: "audio/spanish/al.wav",
        me: "audio/spanish/al.wav"
      }
    },
    {
      romaji: "reves",
      hiragana: "revés",
      meaning: "inside out / backwards",
      audio: {
        daughter: "audio/spanish/reves.wav",
        me: "audio/spanish/reves.wav"
      }
    }
  ]
},














{
  id: "l1-es-23",
  meaning: "walk on tiptoes",
  level: 1,

  chunks: [
    {
      romaji: "camine",
      hiragana: "camine",
      meaning: "walk (command, formal usted)",
      audio: {
        daughter: "audio/spanish/camine.wav",
        me: "audio/spanish/camine.wav"
      }
    },
    {
      romaji: "de",
      hiragana: "de",
      meaning: "on / of",
      audio: {
        daughter: "audio/spanish/de.wav",
        me: "audio/spanish/de.wav"
      }
    },
    {
      romaji: "puntillas",
      hiragana: "puntillas",
      meaning: "tiptoes",
      audio: {
        daughter: "audio/spanish/puntillas.wav",
        me: "audio/spanish/puntillas.wav"
      }
    }
  ]
},












{
  id: "l1-es-24",
  meaning: "nice to meet you",
  level: 1,

  chunks: [
    {
      romaji: "mucho",
      hiragana: "mucho",
      meaning: "much / very",
      audio: {
        daughter: "audio/spanish/mucho.wav",
        me: "audio/spanish/mucho.wav"
      }
    },
    {
      romaji: "gusto",
      hiragana: "gusto",
      meaning: "pleasure",
      audio: {
        daughter: "audio/spanish/gusto.wav",
        me: "audio/spanish/gusto.wav"
      }
    },
    {
      romaji: "a",
      hiragana: "a",
      meaning: "to",
      audio: {
        daughter: "audio/spanish/a.wav",
        me: "audio/spanish/a.wav"
      }
    },
    {
      romaji: "conocer",
      hiragana: "conocer",
      meaning: "to meet / to know",
      audio: {
        daughter: "audio/spanish/conocer.wav",
        me: "audio/spanish/conocer.wav"
      }
    },
    {
      romaji: "te",
      hiragana: "te",
      meaning: "you — **reflexive pronoun** indicating the action is directed toward yourself",
      audio: {
        daughter: "audio/spanish/te.wav",
        me: "audio/spanish/te.wav"
      }
    }
  ]
},















{
  id: "l1-es-25",
  meaning: "to mutter the words",
  level: 1,

  chunks: [
    {
      romaji: "murmurar",
      hiragana: "murmurar",
      meaning: "to mutter / to speak softly under your breath",
      audio: {
        daughter: "audio/spanish/murmurar.wav",
        me: "audio/spanish/murmurar.wav"
      }
    },
    {
      romaji: "las",
      hiragana: "las",
      meaning: "the (feminine plural)",
      audio: {
        daughter: "audio/spanish/las.wav",
        me: "audio/spanish/las.wav"
      }
    },
    {
      romaji: "palabras",
      hiragana: "palabras",
      meaning: "words",
      audio: {
        daughter: "audio/spanish/palabras.wav",
        me: "audio/spanish/palabras.wav"
      }
    }
  ]
},














{
  id: "l1-es-26",
  meaning: "to drown in water",
  level: 1,

  chunks: [
    {
      romaji: "ahogar",
      hiragana: "ahogar",
      meaning: "to drown / to choke in water",
      audio: {
        daughter: "audio/spanish/ahogar.wav",
        me: "audio/spanish/ahogar.wav"
      }
    },
    {
      romaji: "en",
      hiragana: "en",
      meaning: "in",
      audio: {
        daughter: "audio/spanish/en.wav",
        me: "audio/spanish/en.wav"
      }
    },
    {
      romaji: "agua",
      hiragana: "agua",
      meaning: "water",
      audio: {
        daughter: "audio/spanish/agua.wav",
        me: "audio/spanish/agua.wav"
      }
    }
  ]
},














{
  id: "l1-es-27",
  meaning: "I am going to eat something",
  level: 1,

  chunks: [
    {
      romaji: "yo",
      hiragana: "yo",
      meaning: "I",
      audio: {
        daughter: "audio/spanish/yo.wav",
        me: "audio/spanish/yo.wav"
      }
    },
    {
      romaji: "voy",
      hiragana: "voy",
      meaning: "I go / I am going",
      audio: {
        daughter: "audio/spanish/voy.wav",
        me: "audio/spanish/voy.wav"
      }
    },
    {
      romaji: "a",
      hiragana: "a",
      meaning: "to",
      audio: {
        daughter: "audio/spanish/a.wav",
        me: "audio/spanish/a.wav"
      }
    },
    {
      romaji: "comer",
      hiragana: "comer",
      meaning: "to eat",
      audio: {
        daughter: "audio/spanish/comer.wav",
        me: "audio/spanish/comer.wav"
      }
    },
    {
      romaji: "algo",
      hiragana: "algo",
      meaning: "something",
      audio: {
        daughter: "audio/spanish/algo.wav",
        me: "audio/spanish/algo.wav"
      }
    }
  ]
},














];

// ⭐ ADD THIS PATCH RIGHT HERE
sentences.forEach(sentence => {
  sentence.chunks = sentence.chunks.map((chunk, i) => ({
    ...chunk,
    originalIndex: i
  }));
});


/* ----------------------------------------------------------
   GLOBAL AUDIO SAFETY
---------------------------------------------------------- */
window.audioCancelToken = { cancel: false };
window.audioGeneration = 0;
window.currentChunkAudio = null;
window.screen2Audio = null;
window.activeAudioElements = [];
window.L1 = window.L1 || {};

function stopAllAudio() {
  // Cancel async sequences
  if (window.audioCancelToken) {
    window.audioCancelToken.cancel = true;
  }
  window.audioGeneration++;

  // Helper to safely stop any audio object
  const safeStop = (a) => {
    if (!a) return;
    try {
      if (typeof a.pause === "function") a.pause();
      if ("currentTime" in a) a.currentTime = 0;
      a.onended = null;
      a.onerror = null;
    } catch (err) {
      console.warn("safeStop() failed:", err);
    }
  };

  // Stop chunk audio
  safeStop(window.currentChunkAudio);
  window.currentChunkAudio = null;

  // Stop full-sentence audio
  safeStop(window.screen2Audio);
  window.screen2Audio = null;

  // Stop any tracked audio
  if (Array.isArray(window.activeAudioElements)) {
    for (const a of window.activeAudioElements) {
      safeStop(a);
    }
    window.activeAudioElements = [];
  }
}

function cancelAllAudioPlayback() {
  // Cancel all async audio sequences
  window.audioCancelToken.cancel = true;

  // Invalidate all pending callbacks
  window.audioGeneration++;

  // Stop chunk audio
  if (window.currentChunkAudio) {
    try {
      window.currentChunkAudio.pause();
      window.currentChunkAudio.currentTime = 0;
      window.currentChunkAudio.onended = null;
      window.currentChunkAudio.onerror = null;
    } catch (e) {}
    window.currentChunkAudio = null;
  }

  // Stop full-sentence audio
  if (window.screen2Audio) {
    try {
      window.screen2Audio.pause();
      window.screen2Audio.currentTime = 0;
      window.screen2Audio.onended = null;
      window.screen2Audio.onerror = null;
    } catch (e) {}
    window.screen2Audio = null;
  }

  // Stop any other tracked audio (future-proof)
  if (window.activeAudioElements.length > 0) {
    window.activeAudioElements.forEach(a => {
      try {
        a.pause();
        a.currentTime = 0;
        a.onended = null;
        a.onerror = null;
      } catch (e) {}
    });
    window.activeAudioElements = [];
  }
}





let level1Score = 0;
let level1Round = 0;
const TOTAL_ROUNDS = 5;
window.level1TotalRounds = TOTAL_ROUNDS;
let level1Index = 0;
let level1Sentences = [];
window.currentLevel = 0;







/*-----------------------------------------------------------------------------------------
Replay Button Wiring
-----------------------------------------------------------------------------------------*/

function updateScoreKeeper() {
  const el = document.getElementById("scoreKeeper");
  if (!el) return;

  // ⭐ Level 1
  if (window.currentLevel === 1) {
    const total = window.level1TotalRounds || TOTAL_ROUNDS;
    const text = `${level1Score} / ${total}`;

    if (el.textContent !== text) {
      el.textContent = text;
    }

    console.log("📊 updateScoreKeeper (L1)", {
      level1Score,
      level1Round,
      total,
      text
    });

    return;
  }

  // ⭐ Level 2
  if (window.currentLevel === 2) {
    const total = window.level2TotalRounds || window.level2Sentences?.length || 0;
    const text = `${level2Score} / ${total}`;

    if (el.textContent !== text) {
      el.textContent = text;
    }

    console.log("📊 updateScoreKeeper (L2)", {
      level2Score,
      level2Round,
      total,
      text
    });

    return;
  }
}





// -----------------------------
// Timer
// -----------------------------
L1.createAndWireLevel1ReplayButton = function(currentAudioChunks) {
  const oldBtn = document.getElementById("l1ReplayBtn");
  if (oldBtn) oldBtn.remove();

  const btn = document.createElement("button");
  btn.id = "l1ReplayBtn";
  btn.className = "iconBtn replay-top";
  btn.textContent = "🔁 Replay";

  const screen2 = document.getElementById("level1Screen2");
  if (!screen2) return;
  screen2.appendChild(btn);

  btn.onclick = () => {

    if (window.currentLevel !== 1) return;

    stopAllAudio();

    window.audioCancelToken.cancel = false;
    window.audioGeneration++;
    L1._locked = false;

    // ⭐ DO NOT re-enter screen2
    // ⭐ DO NOT restart the timer
    // ⭐ Only restart audio

    playChunkSequence(
      0,
      () => {
        if (window.currentLevel !== 1) return;
        // ⭐ Replay finished — do nothing else
      },
      currentAudioChunks
    );
  };
};








// ---------------------------------------------------------
// TIMER MODULE FOR SCREEN 2
// ---------------------------------------------------------
function startLevel1Screen2Timer(onExpire) {
  let timeLeft = 30;

  const timerEl = document.getElementById("screen2Timer");
  console.log("TIMER ELEMENT:", timerEl);  // ✔ SAFE HERE

  if (timerEl) timerEl.textContent = timeLeft;

  if (window.screen2TimerInterval) {
    clearInterval(window.screen2TimerInterval);
  }

  window.screen2TimerInterval = setInterval(() => {
    timeLeft--;
    if (timerEl) timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(window.screen2TimerInterval);
      onExpire();
    }
  }, 1000);
}





// -----------------------------
// SHUFFLE UTILITIES
// -----------------------------

// Pure Fisher–Yates shuffle (never mutates original)
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Track last scramble pattern to avoid repeats
let lastScrambleKey = "";

/*
  Returns a *visual-only* scrambled array.
  - Does NOT modify sentence.chunks
  - Audio order stays correct (uses original)
  - Drag/drop stays correct (dataset.index uses original index)
*/

function getScrambledChunksForScreen2(sentence) {
  // ⭐ NEVER touch sentence.chunks directly
  const original = [...sentence.chunks];   // clone for safety

  // ⭐ Scramble a SEPARATE array
  let scrambled = shuffleArray(original);

  // Build a pattern key like "2-0-3-1"
  let key = scrambled
    .map(chunk => sentence.chunks.indexOf(chunk))
    .join("-");

  // Prevent identical scramble twice in a row
  if (key === lastScrambleKey) {
    scrambled = shuffleArray(original);
    key = scrambled
      .map(chunk => sentence.chunks.indexOf(chunk))
      .join("-");
  }

  lastScrambleKey = key;

  // ⭐ Return scrambled VISUALS ONLY
  return scrambled;
}

function cleanupDragModule() {
  if (DragModule && typeof DragModule.reset === "function") {
    DragModule.reset();
  }

  // Safety: remove any lingering onComplete handlers
  DragModule.onComplete = null;
}


/* ----------------------------------------------------------
   GLOBAL AUDIO SAFETY (UPDATED + STRONGER)
---------------------------------------------------------- */

/* ----------------------------------------------------------
   GLOBAL AUDIO STATE (DEFINE ONCE, AT TOP OF FILE)
---------------------------------------------------------- */


// ⭐ HARD KILL SWITCH — stops ALL audio instantly

/*------------------------------------------------------------------------
Stop All Audio
-----------------------------------------------------------------------------*/



// 🔹 HARD KILL SWITCH — stops ALL audio immediately
/* ----------------------------------------------------------
   GLOBAL AUDIO KILL SWITCH — FINAL VERSION
---------------------------------------------------------- */

/* ----------------------------------------------------------
   ⭐ LEVEL 1 PROGRESS RENDERER
---------------------------------------------------------- */
/* ----------------------------------------------------------
   ⭐ LEVEL 1 PROGRESS RENDERER (NO HTML CHANGES REQUIRED)
---------------------------------------------------------- */


L1.renderProgress = function (screenId) {
  const screen = document.getElementById(screenId);
  if (!screen) return;

  const { total, completed, percent } = Progress.getLevelProgress("level1");

  // Reuse or create wrapper
  let wrapper = screen.querySelector(".l1-progress-wrapper");
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.className = "l1-progress-wrapper";
    wrapper.style.marginBottom = "20px";

    wrapper.innerHTML = `
      <div class="l1-progress-label"
           style="font-size: 18px; margin-bottom: 6px; color: #fff; text-align: center;">
      </div>

      <div class="l1-progress-outer"
           style="width: 100%; height: 10px; background: #333; border-radius: 6px; overflow: hidden;">
        <div class="l1-progress-bar"
             style="height: 100%; width: 0%; background: #4caf50; transition: width 0.3s ease;">
        </div>
      </div>
    `;
  }

  // Insert wrapper once
  if (!wrapper.parentNode) {
    const title = screen.querySelector(".title");
    if (title) {
      title.insertAdjacentElement("afterend", wrapper);
    } else {
      screen.prepend(wrapper);
    }
  }

  // Update UI
  wrapper.querySelector(".l1-progress-bar").style.width = percent + "%";
  wrapper.querySelector(".l1-progress-label").textContent =
    `Progress: ${completed} / ${total}`;
};



L1.Reset = {
  attach(screenEl, screenName) {
    if (!screenEl) return;

    if (screenName !== "screen1") return;

    let btn = screenEl.querySelector(".resetBtn");

    if (!btn) {
      btn = document.createElement("button");
      btn.className = "resetBtn";
      btn.textContent = "Reset Level";

      btn.style.position = "absolute";
      btn.style.top = "10px";
      btn.style.right = "10px";
      btn.style.zIndex = "9999";

      screenEl.appendChild(btn);
    }

    btn.style.display = "block";

    if (!btn.dataset.wired) {
      btn.dataset.wired = "true";

      btn.onclick = () => {
        stopAllAudio();
        Progress.resetLevel("level1");

        // Restart Level 1 using the correct entry point
        setTimeout(() => {
          level1();
        }, 0);
      };
    }
  }
};





/* ----------------------------------------------------------
   ⭐ PLAY FILE PATHS IN ORDER (Screen 1)
---------------------------------------------------------- */
function playChunksInOrder(chunkList, onComplete) {
  // ⭐ Hard stop any leftover audio
  //stopAllAudio();

  // ⭐ Reset cancel + increment generation (audio only)
  window.audioCancelToken.cancel = false;
  window.audioGeneration++;
  const myGen = window.audioGeneration;

  let index = 0;

  function playNext() {
    // ⭐ Guard audio only — do NOT block transitions
    if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;

    if (index >= chunkList.length) {
      if (!window.audioCancelToken.cancel &&
          myGen === window.audioGeneration &&
          typeof onComplete === "function") {
        onComplete();
      }
      return;
    }

    const file = chunkList[index];
    const audio = new Audio(file);
    window.screen2Audio = audio;

    audio.onended = () => {
      if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;
      index++;
      playNext();
    };

    audio.onerror = () => {
      if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;
      index++;
      playNext();
    };

    audio.play().catch(() => {
      if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;
      index++;
      playNext();
    });
  }

  playNext();
}


/* ----------------------------------------------------------
   ⭐ PLAY CHUNK OBJECTS IN SEQUENCE (Screen 2+)
---------------------------------------------------------- */
let currentChunks = [];
let correctDrops = 0;

// ---------------------------------------------------------
// AUDIO SEQUENCE (ALWAYS USES audioArray)
// ---------------------------------------------------------
function playChunkSequence(i = 0, callback, audioArray = currentAudioChunks) {
  const myGen = window.audioGeneration;

  // ⭐ Correct: guard at the top
  if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;

  if (window.currentChunkAudio) {
    try {
      window.currentChunkAudio.pause();
      window.currentChunkAudio.onended = null;
      window.currentChunkAudio.onerror = null;
    } catch (e) {}
    window.currentChunkAudio = null;
  }

  if (i >= audioArray.length) {
    // ⭐ Correct: guard callback only
    if (!window.audioCancelToken.cancel &&
        myGen === window.audioGeneration &&
        typeof callback === "function") {
      callback();
    }
    return;
  }

  const chunk = audioArray[i];
  const voice = Math.random() < 0.5 ? "daughter" : "me";
  const file = chunk.audio?.[voice];

  const audio = new Audio(file);
  window.currentChunkAudio = audio;

  let safety = setTimeout(() => {
    // ⭐ Correct: guard safety timeout
    if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;
    playChunkSequence(i + 1, callback, audioArray);
  }, 10000);

  audio.onended = () => {
    // ⭐ Correct: guard onended
    if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;
    clearTimeout(safety);
    playChunkSequence(i + 1, callback, audioArray);
  };

  audio.onerror = () => {
    // ⭐ Correct: guard onerror
    if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;
    clearTimeout(safety);
    playChunkSequence(i + 1, callback, audioArray);
  };

  audio.play().catch(() => {
    // ⭐ Correct: guard play() failure
    if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) return;
    clearTimeout(safety);
    playChunkSequence(i + 1, callback, audioArray);
  });

  if (i === 0) return audio;
}



/* ----------------------------------------------------------
   ⭐ SCREEN SYSTEM
---------------------------------------------------------- */
function showScreen(id) {
console.log("[showScreen] switching to:", id);

  console.log(`[showScreen] switching to: ${id}`);

  // Hide all screens FIRST
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });

  // ⭐ Reset level state ONLY when returning to level-select screen
if (id === "screen0") {
  window.currentLevel = 0;
}

  // SPECIAL CASE — Route ONLY Level 7 screens to L7.show()
  if (
    id === "level7Screen1" ||
    id === "level7Screen2" ||
    id === "level7Screen3" ||
    id === "level7Screen4"
  ) {
    return L7.show(id);
  }

  // Hide Level 7 wrapper when switching to non-Level-7
  const l7Wrapper = document.getElementById("level7Wrapper");
  if (l7Wrapper) l7Wrapper.classList.add("hidden");

  // Track previous screen BEFORE changing it
  const previousScreen = window.currentScreen;
  window.currentScreen = id;

  // Kill timer ONLY when leaving Screen 2
  if (previousScreen === "screen2" && window.screen2TimerInterval) {
    clearInterval(window.screen2TimerInterval);
    window.screen2TimerInterval = null;
  }

  // Screen 4 cleanup
  if (id === 'screen4' && typeof cleanupDragModule === 'function') {
    cleanupDragModule();
    const homeBtn = document.getElementById('sessionHomeBtn');
    if (homeBtn) homeBtn.onclick = () => showScreen('screen0');
  }

  // ⭐ LEVEL 11 → ensure Level 12 UI is hidden
  if (id === "level11Screen") {
    const l12Input = document.getElementById("l12InputArea");
    if (l12Input) l12Input.style.display = "none";

    const l11Input = document.getElementById("l11InputArea");
    if (l11Input) l11Input.style.display = "flex";
  }

  // ⭐ LEVEL 12 → ensure Level 11 UI is hidden
  if (id === "level12Screen") {
    const l11Input = document.getElementById("l11InputArea");
    if (l11Input) l11Input.style.display = "none";

    const l11End = document.getElementById("l11EndControls");
    if (l11End) l11End.classList.add("hidden");

    const l12Input = document.getElementById("l12InputArea");
    if (l12Input) l12Input.style.display = "flex";
  }

  // Show the requested screen
  document.getElementById(id).classList.remove('hidden');

  // Replay button visibility logic
  const replayBtn = document.getElementById("replaySentenceBtn");
  if (replayBtn) {
    if (id === "screen2" && (window.currentLevel === 1 || window.currentLevel === 2)) {
      replayBtn.style.display = "block";
    } else {
      replayBtn.style.display = "none";
    }
  }
}






/* ----------------------------------------------------------
   ⭐ DRAG MODULE (Shared)
---------------------------------------------------------- */
const DragModule = {
  onComplete: null,
  completed: false,

  setupDropLines(numLines) {
    const drop = document.getElementById("dropLines");
    drop.innerHTML = "";

    for (let i = 0; i < numLines; i++) {
      const line = document.createElement("div");
      line.className = "dropLine";
      line.dataset.index = i;
      line.textContent = "";

      line.ondragover = e => e.preventDefault();
      line.ondrop = DragModule.dropChunk;

      drop.appendChild(line);
    }

    DragModule.completed = false; // reset per round
  },

  dropChunk(e) {
    e.preventDefault();
    if (DragModule.completed) return;

    const chunkIndex = Number(e.dataTransfer.getData("chunkIndex"));
    const lineIndex = Number(e.target.dataset.index);

    if (chunkIndex === lineIndex) {
      DragModule.markCorrect(e.target);
    } else {
      alert("Try again");
    }
  },

  enableTouchForChunks() {
    const chunks = document.querySelectorAll(".chunkBtn");

    chunks.forEach(btn => {
      btn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        if (DragModule.completed) return;

        const chunkIndex = Number(btn.dataset.index);
        const requiredIndex = correctDrops;

        if (chunkIndex !== requiredIndex) {
          alert("Try again");
          return;
        }

        const dropLines = document.querySelectorAll(".dropLine");
        const targetLine = [...dropLines].find(
          line => Number(line.dataset.index) === chunkIndex
        );

        if (targetLine) {
          DragModule.simulateDrop(chunkIndex, targetLine);
        }

      }, { passive: false });
    });
  },

  simulateDrop(chunkIndex, lineElement) {
    if (DragModule.completed) return;

    const lineIndex = Number(lineElement.dataset.index);

    if (chunkIndex === lineIndex) {
      DragModule.markCorrect(lineElement);
    } else {
      alert("Try again");
    }
  },

  markCorrect(lineElement) {
    if (DragModule.completed) return;
    if (lineElement.classList.contains("correct")) return;

    lineElement.classList.add("correct");
    lineElement.textContent = "✔";

    correctDrops++;
    level1Score++;
    updateScoreKeeper();

    if (correctDrops === currentChunks.length) {
      DragModule.completed = true;

      // Call onComplete immediately, no delay, no overwrite
      if (typeof DragModule.onComplete === "function") {
        DragModule.onComplete();
      }
    }
  }
};





function renderSummaryScreen(sentence, nextLevelFn, correctDrops = null, audioChunks = null) {

  // ⭐ Kill leftover Level 1 audio immediately
  window.audioCancelToken.cancel = true;

  if (typeof nextLevelFn !== "function") {
    console.warn("⚠️ nextLevelFn missing, using fallback");
    nextLevelFn = () => {};
  }

  stopAllAudio();
  showScreen("screen3");

  if (window.Progress && typeof Progress.markSentenceComplete === "function") {
    Progress.markSentenceComplete("level1", sentence.id);
  }

  if (window.L1 && typeof L1.renderProgress === "function") {
    L1.renderProgress("screen3");
  }

  document.getElementById("meaningBox").textContent = sentence.meaning;

  const correctDropsElement = document.getElementById("summaryCorrectDrops");
  if (correctDropsElement) {
    correctDropsElement.textContent = `Correct Drops: ${Number(correctDrops) || 0}`;
  }

  const container = document.getElementById("summaryContainer");
  container.innerHTML = "";

  sentence.chunks.forEach(chunk => {
    const row = document.createElement("div");
    row.className = "summary-row";

    row.innerHTML = `
      <div class="summary-hiragana">${chunk.hiragana}</div>
      <div class="summary-romaji">${chunk.romaji}</div>
      <div class="summary-english">${chunk.meaning}</div>
    `;

    container.appendChild(row);
  });

  document.getElementById("screen3ReplayBtn").onclick = () => {
    stopAllAudio();
    window.audioCancelToken.cancel = false;

    if (!audioChunks || audioChunks.length === 0) {
      console.warn("No audio chunks found for Level 1 Screen 3 replay");
      return;
    }

    window.currentAudioChunks = audioChunks;
    playChunkSequence(0, () => {});
  };

  document.getElementById("screen3NextBtn").onclick = () => {
    if (level1Round >= TOTAL_ROUNDS) {
      showLevel1FinalSummary();
      return;
    }

    nextLevelFn();
  };
}




/*------------------------------------------------------------------------------
Score summary screen
--------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------
Score summary screen
--------------------------------------------------------------------------------*/
function showLevel1FinalSummary() {
  stopAllAudio();

  // ⭐ Kill any leftover Level 1 audio callbacks
  window.audioCancelToken.cancel = true;

  showScreen("screen4");

  // ⭐ Lifetime progress bar (Level 1)
  if (window.L1 && typeof L1.renderProgress === "function") {
    L1.renderProgress("screen4");
  }

  // Session-only stats (these stay as-is)
  const roundsEl = document.getElementById("sessionRounds");
  const scoreEl = document.getElementById("sessionScore");
  const dropsEl = document.getElementById("sessionDrops");

  if (roundsEl) roundsEl.textContent = level1Round;
  if (scoreEl) scoreEl.textContent = level1Score;
  if (dropsEl) dropsEl.textContent = Number(correctDrops) || 0;
}








/* ==========================================================
   ⭐ LEVEL 1 MODULE — CHUNK PUZZLE
========================================================== */

function level1() {
  stopAllAudio();

  window.currentLevel = 1;

  document.getElementById("replaySentenceBtn").classList.add("hidden");

  // Reset session stats
  level1Score = 0;
  level1Round = 0;

  // ⭐ Compute Level 1 sentences BEFORE updating score
  const level1Sentences = sentences.filter(s => s.level === 1);

  if (window.Progress && typeof Progress.setTotal === "function") {
    Progress.setTotal("level1", level1Sentences.length);
  }

  // ⭐ Set the REAL denominator BEFORE calling updateScoreKeeper
  window.level1TotalRounds = level1Sentences.length;

  // ⭐ NOW update the UI — denominator is correct
  updateScoreKeeper();

  level1_screen1();
}




function level1_screen1() {
  // Hard stop any leftover audio
  stopAllAudio();

  showScreen("screen1");

  // Ensure total is set even if level1() was bypassed
  const level1Sentences = sentences.filter(s => s.level === 1);
  Progress.setTotal("level1", level1Sentences.length);

  const screenEl = document.getElementById("screen1");
  L1.Reset.attach(screenEl, "screen1");

  // ⭐ Update lifetime progress bar on Screen 1
  L1.renderProgress("screen1");

  // ⭐ New round begins (session-only)
  level1Round++;
  updateScoreKeeper();

  // Reset cancel + increment generation (audio only)
  window.audioCancelToken.cancel = false;
  window.audioGeneration++;

  const level = 1;
  const levelSentences = sentences.filter(s => s.level === level);
  const sentence = levelSentences[Math.floor(Math.random() * levelSentences.length)];
  L1.currentSentence = sentence;

  const chunkFiles = sentence.chunks.map(chunk => {
    const voice = Math.random() < 0.5 ? "daughter" : "me";
    return chunk.audio[voice];
  });

  // ⭐ FIXED: Level 1 audio callback no longer leaks into Level 2
  playChunksInOrder(chunkFiles, () => {

    // ⭐ Kill callback if we are no longer on Screen 1
    if (window.currentScreen !== "screen1") return;

    // ⭐ Kill callback if Level 1 is no longer active
    if (window.currentLevel !== 1) return;

    setTimeout(() => {

      // ⭐ Double-guard inside timeout
      if (window.currentScreen !== "screen1") return;
      if (window.currentLevel !== 1) return;

      level1_screen2(sentence);

    }, 600);

  }); // ← Correct closing brace
}





function level1_screen2(sentence) {

  // ⭐ Store sentence for replay callback (non‑logic fix)
  L1.currentSentenceObj = sentence;

  // ⭐ Kill leftover Level 1 audio immediately
  window.audioCancelToken.cancel = true;

  console.log("🔥 ENTER level1_screen2");
  console.log("Sentence ID:", sentence.id);

  // Stop any audio from Screen 1
  stopAllAudio();

  // Switch UI
  showScreen("screen2");

  // Update lifetime progress bar
  L1.renderProgress("screen2");

  // Reset counters
  correctDrops = 0;

  // Prepare scrambled chunks
  currentChunks = getScrambledChunksForScreen2(sentence);

  // Render draggable chunk buttons
  const chunkContainer = document.getElementById("chunkContainer");
  chunkContainer.innerHTML = "";

  currentChunks.forEach(chunk => {
    const btn = document.createElement("button");
    btn.className = "chunkBtn";
    btn.textContent = chunk.hiragana;
    btn.dataset.index = chunk.originalIndex;

    btn.draggable = true;
    btn.ondragstart = e => {
      e.dataTransfer.setData("chunkIndex", chunk.originalIndex);
    };

    chunkContainer.appendChild(btn);
  });

  // Reset DragModule state
  cleanupDragModule();
  DragModule._fired = false;

  // Setup drop lines
  DragModule.setupDropLines(sentence.chunks.length);

  // Enable touch support
  DragModule.enableTouchForChunks();

  // Prepare audio chunks for replay
  const currentAudioChunks = sentence.chunks.map(c => ({ ...c }));

  // Create + wire Level 1 replay button
  L1.createAndWireLevel1ReplayButton(currentAudioChunks);

  // ⭐ Debounced completion handler
  DragModule.onComplete = () => {

    if (DragModule._fired) return;
    DragModule._fired = true;

    // Stop timer
    if (window.screen2TimerInterval) {
      clearInterval(window.screen2TimerInterval);
      window.screen2TimerInterval = null;
    }

    // ⭐⭐⭐ LIFETIME PROGRESS UPDATE
    console.log("✔️ Marking sentence complete:", sentence.id);
    Progress.markSentenceComplete("level1", sentence.id);

    // Go to summary
    renderSummaryScreen(sentence, level1_screen1, correctDrops, currentAudioChunks);

  };

  // ⭐ Start 30s timer
  startLevel1Screen2Timer(() => {
    console.log("⏰ Screen2 timer expired → forcing completion");
    DragModule.onComplete();
  });
}









/* ==========================================================
   ⭐ LEVEL 2 MODULE — ARRANGE MODE
========================================================== */

/* ==========================================================
   ⭐ LEVEL 2 — MCQ MODE
   Uses: universal Screen 1 (audio-only), Screen 2 (MCQ),
         Screen 3 (summary), Screen 4 (score)
========================================================== */

/* ==========================================================
   ⭐ LEVEL 2 MODULE — FULLY ISOLATED
   No shared globals, no shared handlers, no shared functions.
========================================================== */

/* ==========================================================
   ⭐ LEVEL 2 — ISOLATED GLOBAL STATE
   (No sharing with Level 1 or any other level)
========================================================== */
const level2Sentences = [





  {
    id: "l2_001",
    sentence: "Podemos quedarnos en el parque pero va a llover.",
    conjunction: "pero",
    meaning: "We can stay in the park, but it's going to rain.",

    fullAudio: "audio/spanish/conjunction1.wav",  // ← STRING

    chunks: [
      {
        audio: {
          me: "audio/spanish/conjunction1.wav",
          daughter: "audio/spanish/conjunction1.wav"
        }
      }
    ]
  },











  





  

{
  id: "l2_002",
  sentence: "Mañana hay un examen entonces voy a ir estudiar ahora.",
  conjunction: "entonces",
  meaning: "There’s an exam tomorrow, so I'm going to go study now.",

  fullAudio: "audio/spanish/conjunction2.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction2.wav",
        daughter: "audio/spanish/conjunction2.wav"
      }
    }
  ]
},














{
  id: "l2_003",
  sentence: "Se me olvidó la cartera y por eso regreso a la casa.",
  conjunction: "por eso",
  meaning: "I forgot my wallet, and that's why I'm going back home.",

  fullAudio: "audio/spanish/conjunction3.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction3.wav",
        daughter: "audio/spanish/conjunction3.wav"
      }
    }
  ]
},















{
  id: "l2_004",
  sentence: "No hay señal, por eso el teléfono no sirve.",
  conjunction: "por eso",
  meaning: "There’s no signal, that's why the phone doesn’t work.",

  fullAudio: "audio/spanish/conjunction4.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction4.wav",
        daughter: "audio/spanish/conjunction4.wav"
      }
    }
  ]
},















{
  id: "l2_005",
  sentence: "Quiero mejorar en japonés, por eso practico a diario.",
  conjunction: "por eso",
  meaning: "I want to improve my Japanese, that's why I practice daily.",

  fullAudio: "audio/spanish/conjunction5.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction5.wav",
        daughter: "audio/spanish/conjunction5.wav"
      }
    }
  ]
},










{
  id: "l2_006",
  sentence: "Aunque esté lloviendo, él salió a caminar.",
  conjunction: "aunque",
  meaning: "Even though it's raining, he went out for a walk.",

  fullAudio: "audio/spanish/conjunction6.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction6.wav",
        daughter: "audio/spanish/conjunction6.wav"
      }
    }
  ]
},













{
  id: "l2_007",
  sentence: "Aunque estaba cansado, siguió trabajando.",
  conjunction: "aunque",
  meaning: "Even though he was tired, he kept working.",

  fullAudio: "audio/spanish/conjunction7.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction7.wav",
        daughter: "audio/spanish/conjunction7.wav"
      }
    }
  ]
},
















{
  id: "l2_008",
  sentence: "Quería salir afuera pero empezó a llover.",
  conjunction: "pero",
  meaning: "He wanted to go outside, but it started to rain.",

  fullAudio: "audio/spanish/conjunction8.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction8.wav",
        daughter: "audio/spanish/conjunction8.wav"
      }
    }
  ]
},















{
  id: "l2_009",
  sentence: "Después de un día difícil quize relajarme, sin embargo el teléfono siguió sonando.",
  conjunction: "sin embargo",
  meaning: "After a difficult day I wanted to relax, however the phone kept ringing.",

  fullAudio: "audio/spanish/conjunction9.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction9.wav",
        daughter: "audio/spanish/conjunction9.wav"
      }
    }
  ]
},












{
id: "l2_010",
sentence: "Hace un calor abrasador hoy así que abrí una ventana.",
conjunction: "así que",
meaning: "It's scorching hot today so I opened a window.",
fullAudio: "audio/spanish/conjunction10.wav",
chunks: [
{
audio: {
me: "audio/spanish/conjunction10.wav",
daughter: "audio/spanish/conjunction10.wav"
}
}
]
},
















{
  id: "l2_011",
  sentence: "En vez de ir a trabajar prefiero ir a la playa.",
  conjunction: "en vez de",
  meaning: "Instead of going to work I prefer to go to the beach.",

  fullAudio: "audio/spanish/conjunction11.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction11.wav",
        daughter: "audio/spanish/conjunction11.wav"
      }
    }
  ]
},














{
  id: "l2_012",
  sentence: "Me gusta más la carne que el pescado.",
  conjunction: "que",
  meaning: "I like meat more than fish.",

  fullAudio: "audio/spanish/conjunction12.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction12.wav",
        daughter: "audio/spanish/conjunction12.wav"
      }
    }
  ]
},
















{
  id: "l2_013",
  sentence: "Creo que escuchar las olas del mar me hace sentir renovado. En cambio, escuchar la quietud del lago me hace sentir incompleta.",
  conjunction: "en cambio",
  meaning: "I think listening to the waves of the sea makes me feel renewed. Instead, listening to the stillness of the lake makes me feel incomplete.",

  fullAudio: "audio/spanish/conjunction13.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction13.wav",
        daughter: "audio/spanish/conjunction13.wav"
      }
    }
  ]
},












{
  id: "l2_014",
  sentence: "Me enojé porque discutí con mi mamá.",
  conjunction: "porque",
  meaning: "I got angry because I argued with my mom.",

  fullAudio: "audio/spanish/conjunction14.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction14.wav",
        daughter: "audio/spanish/conjunction14.wav"
      }
    }
  ]
},













{
  id: "l2_015",
  sentence: "Me fui a dormir porque me sentía cansada.",
  conjunction: "porque",
  meaning: "I went to sleep because I felt tired.",

  fullAudio: "audio/spanish/conjunction15.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction15.wav",
        daughter: "audio/spanish/conjunction15.wav"
      }
    }
  ]
},











{
  id: "l2_016",
  sentence: "El perro empezó a ladrar, entonces yo le dije que se callara.",
  conjunction: "entonces",
  meaning: "The dog started barking, so I told him to be quiet.",

  fullAudio: "audio/spanish/conjunction16.wav",

  chunks: [
    {
      audio: {
        me: "audio/spanish/conjunction16.wav",
        daughter: "audio/spanish/conjunction16.wav"
      }
    }
  ]
},
















];









const L2 = {
  round: 0,
  score: 0,
  TOTAL_ROUNDS: 4,

  dataset: level2Sentences,
  currentSentence: null,
  activeScreen: null,

  mcqLocked: false,

  audio: {
    cancelToken: { cancel: false },
    generation: 0,
    current: null
  }
};

L2.stopAllAudio = function () {
  L2.audio.cancelToken.cancel = true;
  L2.audio.generation++;

  if (L2.audio.current) {
    try {
      L2.audio.current.pause();
      L2.audio.current.currentTime = 0;
    } catch (e) {}
    L2.audio.current = null;
  }
};

L2.setCurrentSentence = function (sentenceObj) {
  if (!sentenceObj) {
    console.error("L2.setCurrentSentence called with invalid sentence:", sentenceObj);
    return;
  }

  L2.currentSentence = sentenceObj;
};

L2.getCurrentSentence = function () {
  return L2.currentSentence || null;
};


L2.updateScoreKeeper = function () {
  const roundsEl = document.getElementById("l2SessionRounds");
  const scoreEl = document.getElementById("l2SessionScore");
  const correctEl = document.getElementById("l2SessionCorrect");

  if (roundsEl) roundsEl.textContent = L2.round;
  if (scoreEl) scoreEl.textContent = L2.score;
  if (correctEl) correctEl.textContent = L2.correct;
};




document.getElementById("l2PlayAgainBtn")?.addEventListener("click", () => {
  L2.mcqLocked = false;

  if (L2.audio && L2.audio.cancelToken) {
    L2.audio.cancelToken.cancel = true;
  }
  if (L2.audio) {
    L2.audio.generation++;
    L2.audio.current = null;
  }

  L2.stopAllAudio();

  L2.round = 0;
  L2.score = 0;

  L2.show("level2Screen1");
  L2.startRound();
});

document.getElementById("l2HomeBtn")?.addEventListener("click", () => {
  L2.mcqLocked = true;

  if (L2.audio && L2.audio.cancelToken) {
    L2.audio.cancelToken.cancel = true;
  }
  if (L2.audio) {
    L2.audio.generation++;
    L2.audio.current = null;
  }

  L2.stopAllAudio();

  showScreen("screen0");
});


L2.playNaturalSentence = function (callback) {
  const s = L2.getCurrentSentence();
  console.log("[Level2] playNaturalSentence() sentence:", s);

  if (!s || !s.fullAudio) {
    console.log("[Level2] No fullAudio, calling callback immediately");
    if (typeof callback === "function") callback();
    return;
  }

  const audio = new Audio(s.fullAudio);
  L2.audio.current = audio;

  audio.onended = () => {
    console.log("[Level2] audio ended");
    if (typeof callback === "function") callback();
  };

  audio.onerror = (e) => {
    console.log("[Level2] audio error", e);
    if (typeof callback === "function") callback();
  };

  audio.play().then(() => {
    console.log("[Level2] audio playing:", s.fullAudio);
  }).catch(err => {
    console.log("[Level2] audio play() failed:", err);
    if (typeof callback === "function") callback();
  });
};






L2.show = function (id) {
  // Hide Level 4 explanation if present
  const l4Box = document.getElementById("level4ExplanationBox");
  if (l4Box) l4Box.classList.add("hidden");

  // Hide ALL Level 2 screens
  document.querySelectorAll(".level2-screen")
    .forEach(el => el.classList.add("hidden"));

  // LEVEL 2 SCREENS
  if (id.startsWith("level2")) {

    // Show wrapper
    const wrapper = document.getElementById("level2Wrapper");
    if (wrapper) wrapper.classList.remove("hidden");

    // Show the specific Level 2 screen
    const target = document.getElementById(id);
    if (target) target.classList.remove("hidden");

    return;
  }

  // UNIVERSAL SUMMARY SCREEN (screen3)
  if (id === "screen3") {
    document.getElementById("level2Wrapper")?.classList.add("hidden");

    document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
    document.getElementById("screen3")?.classList.remove("hidden");
    return;
  }
};



L2.startRound = function () {
  console.log(`[Level2] startRound() — Round ${L2.round + 1}`);

  // Reset audio state
  L2.stopAllAudio();
  L2.audio.cancelToken.cancel = false;
  L2.audio.generation++;

  L2.mcqLocked = false;

  // ⭐ Randomize sentence every round
  const sentence = L2.dataset[Math.floor(Math.random() * L2.dataset.length)];

  // ⭐ Always store the full object
  L2.setCurrentSentence(sentence);

  // Show Screen 1 (natural sentence audio)
  L2.screen1();

  // ⭐ Wrap-around increment
  L2.round++;
  if (L2.round >= L2.dataset.length) {
    L2.round = 0;
  }
};





L2.screen1 = function () {
  console.log("[Level2] screen1()");

  const replayBtn = document.getElementById("l2ReplaySentenceBtn");
  if (replayBtn) replayBtn.style.display = "none";

  if (typeof L2.stopAllAudio === "function") {
    L2.stopAllAudio();
  }

  if (L2.audio && L2.audio.cancelToken) {
    L2.audio.cancelToken.cancel = false;
  }

  if (L2.audio) {
    L2.audio.generation++;
    L2.audio.current = null;
  }

  const sentence = L2.dataset[Math.floor(Math.random() * L2.dataset.length)];
  L2.currentSentence = sentence;

  L2.show("level2Screen1");

  const screenEl = document.getElementById("level2Screen1");
  if (screenEl && L2.Reset && typeof L2.Reset.attach === "function") {
    L2.Reset.attach(screenEl, "screen1");
  }

  if (typeof L2.renderProgress === "function") {
    L2.renderProgress("level2Screen1");
  }

  L2.playNaturalSentence(() => {

    // Guards
    if (window.currentScreen !== "level2Screen1") return;
    if (window.currentLevel !== 2) return;

    // ⭐ Give time to hear the audio
    // Use a longer delay — 1500ms is a good starting point
    setTimeout(() => {

      if (window.currentScreen !== "level2Screen1") return;
      if (window.currentLevel !== 2) return;

      L2.screen2();

    }, 1500); // ← increase this to give more time
  });
};







L2.conjunctionCategories = {
  contrast: ["pero", "sin embargo", "aunque"],
  cause: ["porque", "ya que", "puesto que"],
  sequence: ["luego", "entonces", "después"],
  addition: ["y", "además"],
  condition: ["si"]
};


L2.generateDistractors = function (correct) {
  const distractors = new Set();

  let categoryKey = null;
  for (const key in L2.conjunctionCategories) {
    if (L2.conjunctionCategories[key].includes(correct)) {
      categoryKey = key;
      break;
    }
  }

  const pool = [];
  for (const key in L2.conjunctionCategories) {
    if (key !== categoryKey) {
      pool.push(...L2.conjunctionCategories[key]);
    }
  }

  while (distractors.size < 3 && pool.length > 0) {
    const pick = pool[Math.floor(Math.random() * pool.length)];
    if (pick !== correct) distractors.add(pick);
  }

  return Array.from(distractors).slice(0, 3);
};


L2.screen2 = function () {
  L2.activeScreen = "screen2";
  console.log("[Level2] screen2()");

  L2.show("level2Screen2");

  requestAnimationFrame(() => {
    const replayBtn = document.getElementById("l2ReplaySentenceBtn");
    if (replayBtn) replayBtn.style.display = "inline-block";

    L2.mcqLocked = false;

    const s = L2.currentSentence;
    const mcqBox = document.getElementById("level2McqContainer");
    const sentenceLine = document.getElementById("level2SentenceLine");

    if (!sentenceLine) {
      console.warn("❌ level2SentenceLine missing from DOM");
      return;
    }

   
const blank = "___________"; // or your dashed line

sentenceLine.textContent = s.sentence
  .replace(new RegExp("\\b" + s.conjunction + "\\b", "gi"), blank)
  .replace(/\s{2,}/g, " ")   // fix double spaces
  .trim();


    const distractors = L2.generateDistractors(s.conjunction);
    const allOptions = [s.conjunction, ...distractors];

    for (let i = allOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
    }

    mcqBox.innerHTML = "";
    allOptions.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "mcqBtn";
      btn.textContent = opt;
      btn.onclick = () => L2.handleMCQ(opt);
      mcqBox.appendChild(btn);
    });

    if (replayBtn) {
      replayBtn.onclick = () => {
        if (L2.mcqLocked) return;

        L2.stopAllAudio();
        L2.audio.cancelToken.cancel = false;
        L2.audio.generation++;

        L2.playNaturalSentence(() => {});
      };
    }
  });
};




L2.handleMCQ = function (choice) {
  if (L2.mcqLocked) return;
  L2.mcqLocked = true;

  const s = L2.currentSentence;        // full object
  const correct = s.conjunction;       // correct answer

  const normalize = str => str.trim().normalize("NFC");
  const isCorrect = normalize(choice) === normalize(correct);

  const buttons = document.querySelectorAll("#level2McqContainer .mcqBtn");

  // ⭐ Lock buttons + color feedback (same as Level‑6)
  buttons.forEach(btn => {
    btn.disabled = true;
    const val = normalize(btn.textContent.trim());
    if (val === normalize(correct)) {
      btn.classList.add("correct");    // green
    } else {
      btn.classList.add("wrong");      // red
    }
  });

  // ⭐ Correct answer logic
  if (isCorrect) {
    L2.score++;
    Progress3.markSentenceComplete("level2", s.id);
  }

  L2.updateScoreKeeper();

  // ⭐ Increment round
  

  // ⭐ Move to summary (Level‑6 style guard)
  setTimeout(() => {
    if (L2.activeScreen !== "screen2") return;
    L2.showRoundSummary();
  }, 900);
};



L2.showRoundSummary = function () {
  L2.activeScreen = "screen3";

  const s = L2.currentSentence;

  L2.stopAllAudio();

  L2.show("screen3");

  document.getElementById("meaningBox").textContent = s.meaning;

  document.getElementById("summaryCorrectDrops").textContent =
    `Correct Answer: ${s.conjunction}`;

  const cont = document.getElementById("summaryContainer");
  cont.innerHTML = "";

  const row = document.createElement("div");
  row.className = "summary-row";
  row.innerHTML = `
    <div class="summary-hiragana">${s.sentence}</div>
    <div class="summary-romaji">${s.conjunction}</div>
    <div class="summary-english">${s.meaning}</div>
  `;
  cont.appendChild(row);

  document.getElementById("screen3ReplayBtn").onclick = () => {
    L2.stopAllAudio();
    L2.audio.cancelToken.cancel = false;
    L2.audio.generation++;
    L2.audio.current = null;

    L2.playNaturalSentence(() => {});
  };

  document.getElementById("screen3NextBtn").onclick = () => {
    L2.mcqLocked = true;
    L2.stopAllAudio();

    document.getElementById("screen3")?.classList.add("hidden");

    document.getElementById("screen2L2")?.classList.remove("hidden");
    document.getElementById("level2Wrapper")?.classList.remove("hidden");

    if (L2.round >= L2.TOTAL_ROUNDS) {
      showLevel2FinalSummary();
      return;
    }

    L2.currentSentence = null;
    L2.startRound();
  };
};



function showLevel2FinalSummary() {
  L2.mcqLocked = true;

  if (L2.audio && L2.audio.cancelToken) {
    L2.audio.cancelToken.cancel = true;
  }

  if (L2.audio) {
    L2.audio.generation++;
    L2.audio.current = null;
  }

  if (typeof L2.stopAllAudio === "function") {
    L2.stopAllAudio();
  }

  L2.show("level2Screen4");

  document.getElementById("l2SessionRounds").textContent = L2.TOTAL_ROUNDS;
  document.getElementById("l2SessionScore").textContent = L2.score;
  document.getElementById("l2SessionCorrect").textContent = L2.score;
}



window.L2 = window.L2 || {};

L2.Reset = {
  attach(screenEl, screenName) {
    if (!screenEl) return;
    if (screenName !== "screen1") return;

    let btn = screenEl.querySelector(".resetBtn");

    if (!btn) {
      btn = document.createElement("button");
      btn.className = "resetBtn";
      btn.textContent = "Reset Level 2";

      btn.style.position = "absolute";
      btn.style.top = "10px";
      btn.style.right = "10px";
      btn.style.zIndex = "9999";

      screenEl.appendChild(btn);
    }

    btn.style.display = "block";

    if (!btn.dataset.wired) {
      btn.dataset.wired = "true";

      btn.onclick = () => {
        if (typeof L2.stopAllAudio === "function") {
          L2.stopAllAudio();
        }

        if (L2.audio && L2.audio.cancelToken) {
          L2.audio.cancelToken.cancel = true;
        }

        if (L2.audio) {
          L2.audio.generation++;
          L2.audio.current = null;
        }

        Progress3.resetLevel("level2");

        setTimeout(() => {
          L2.start();
        }, 0);
      };
    }
  }
};



L2.renderProgress = function (screenId) {
  const screen = document.getElementById(screenId);
  if (!screen) return;

  const p = Progress3.getLevelProgress("level2");
  const total = p.total;
  const current = p.completed;
  const pct = p.percent;

  let wrapper = document.getElementById("l2ProgressWrapper");
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.id = "l2ProgressWrapper";
    wrapper.style.marginBottom = "20px";

    wrapper.innerHTML = `
      <div id="l2ProgressLabel" style="
        font-size: 18px;
        margin-bottom: 6px;
        color: #fff;
        text-align: center;
      "></div>

      <div id="l2ProgressOuter" style="
        width: 100%;
        height: 10px;
        background: #333;
        border-radius: 6px;
        overflow: hidden;
      ">
        <div id="l2ProgressBar" style="
          height: 100%;
          width: 0%;
          background: #4caf50;
          transition: width 0.3s ease;
        "></div>
      </div>
    `;
  }

  const title = screen.querySelector(".title");
  if (title && !wrapper.parentNode) {
    title.insertAdjacentElement("afterend", wrapper);
  } else if (!wrapper.parentNode) {
    screen.prepend(wrapper);
  }

  document.getElementById("l2ProgressBar").style.width = pct + "%";
  document.getElementById("l2ProgressLabel").textContent =
    `Progress: ${current} / ${total}`;
};



L2.start = function () {
  console.log("[Level2] start()");

  L2.round = 0;
  L2.score = 0;
  L2.mcqLocked = false;
  L2.currentSentence = null;

  if (Array.isArray(L2.dataset)) {
    Progress3.setTotal("level2", L2.dataset.length);
  }

  if (typeof L2.stopAllAudio === "function") {
    L2.stopAllAudio();
  }

  if (L2.audio && L2.audio.cancelToken) {
    L2.audio.cancelToken.cancel = false;
  }

  // ⭐ REMOVE THIS — it breaks screen1
  // document.getElementById("level2Wrapper")?.classList.remove("hidden");

  document.getElementById("level3Wrapper")?.classList.add("hidden");
  document.getElementById("level1Screen2")?.classList.add("hidden");

  L2.startRound();
};







/* ==========================================================
   ⭐ LEVEL 3 MODULE — ARRANGE MODE
========================================================== */

/* ==========================================================
   ⭐ LEVEL 3 — MCQ MODE
   Uses: universal Screen 1 (audio-only), Screen 2 (MCQ),
         Screen 3 (summary), Screen 4 (score)
========================================================== */

/* ==========================================================
   ⭐ LEVEL 3 MODULE — FULLY ISOLATED
   No shared globals, no shared handlers, no shared functions.
========================================================== */

/* ==========================================================
   ⭐ LEVEL 3 — ISOLATED GLOBAL STATE
   (No sharing with Level 1 or any other level)
========================================================== */



const level3 = [
  {
    id: "es3-01",
    meaning: "Cuando escuchas un trueno y ves un rayo, ¿qué ocurre después?",
    level: 3,

    // ⭐ Spanish inference options (mirrors Japanese MCQ)
    options: [
      "Empieza a llover",
      "Hace calor",
      "Se hace de día",
      "No pasa nada"
    ],

    // ⭐ Underscore format (mirrors optionsRomaji)
    optionsRomaji: [
      "empieza_a_llover",
      "hace_calor",
      "se_hace_de_dia",
      "no_pasa_nada"
    ],

    // ⭐ English glosses (mirrors optionsEN)
    optionsEN: [
      "it starts to rain",
      "it gets hot",
      "it becomes daytime",
      "nothing happens"
    ],

    // ⭐ Correct answer
    correct: "Empieza a llover",

    // ⭐ Full-sentence audio (mirrors fullAudio)
    fullAudio: {
      daughter: "audio/spanish/inference1.wav",
      me:       "audio/spanish/inference1.wav"
    },

    // ⭐ Choice audio (mirrors choiceAudio)
    choiceAudio: {
      options: [
        ["spanish/audio/empieza_a_llover.wav"],
        ["spanish/audio/hace_calor.wav"],
        ["spanish/audio/se_hace_de_dia.wav"],
        ["spanish/audio/no_pasa_nada.wav"]
      ]
    },

    // ⭐ Meaning audio (mirrors meaningAudio)
    meaningAudio: [
      ["spanish/audio/empieza_a_llover.wav"],
      ["spanish/audio/hace_calor.wav"],
      ["spanish/audio/se_hace_de_dia.wav"],
      ["spanish/audio/no_pasa_nada.wav"]
    ],

    // ⭐ Chunk breakdown (mirrors Japanese chunks)
    chunks: [
      { spanish: "Cuando", english: "when" },
      { spanish: "escuchas un trueno", english: "you hear thunder" },
      { spanish: "y ves un rayo", english: "and you see lightning" },
      { spanish: "¿qué ocurre después?", english: "what happens next?" }
    ]
  }
];





/* ==========================================================
   ⭐ LEVEL 3 — CORE STATE
========================================================== */

const L3 = {
  round: 0,
  score: 0,
  TOTAL_ROUNDS: 1,

  dataset: level3,   // your Spanish Level‑3 inference dataset array
  currentSentence: null,
  currentSentenceObj: null,
  columnLocked: false,
  activeScreen: null,

  audio: {
    cancelToken: { cancel: false },
    generation: 0,
    current: null
  }
};


/* ==========================================================
   ⭐ LEVEL 3 — STORE CURRENT SENTENCE
========================================================== */

L3.setCurrentSentence = function (sentenceObj) {
  if (!sentenceObj || !sentenceObj.id) {
    console.error("L3.setCurrentSentence called with invalid sentence:", sentenceObj);
    return;
  }

  L3.currentSentence = sentenceObj.id;
  L3.currentSentenceObj = sentenceObj;
};

L3.getCurrentSentence = function () {
  return L3.currentSentence;
};


/* ==========================================================
   ⭐ LEVEL 3 — AUDIO SAFETY + GUARDS
========================================================== */

L3.stopAllAudio = function () {
  L3.audio.cancelToken.cancel = true;
  L3.audio.generation++;

  if (L3.audio.current) {
    try {
      L3.audio.current.pause();
      L3.audio.current.currentTime = 0;
    } catch (e) {}
  }
};

L3.generationGuards = function () {
  L3.audio.cancelToken.cancel = false;
  L3.audio.generation++;
  L3.audio.current = null;
};


/* ==========================================================
   ⭐ LEVEL 3 — PLAY SENTENCE (FULL AUDIO)
========================================================== */

L3.playSentence = function (callback, audioObj) {
  const myGen = ++L3.audio.generation;

  if (L3.audio.cancelToken.cancel) return;

  let file = audioObj?.me;
  if (!file) return;

  if (!L3.audio.current) {
    L3.audio.current = new Audio();
  }

  const audio = L3.audio.current;
  audio.src = file;

  const finish = () => {
    if (myGen !== L3.audio.generation) return;
    if (!L3.audio.cancelToken.cancel && typeof callback === "function") {
      callback();
    }
  };

  let safety = setTimeout(finish, 10000);

  audio.onended = () => {
    clearTimeout(safety);
    finish();
  };

  audio.onerror = () => {
    clearTimeout(safety);
    finish();
  };

  audio.play().catch(() => {
    clearTimeout(safety);
    finish();
  });
};


/* ==========================================================
   ⭐ LEVEL 3 — PROGRESS BAR
========================================================== */

L3.renderProgress = function (screenId) {
  const screen = document.getElementById(screenId);
  if (!screen) return;

  const p = Progress3.getLevelProgress("level3");
  const total = p.total;
  const current = p.completed;
  const pct = p.percent;

  let wrapper = document.getElementById("l3ProgressWrapper");
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.id = "l3ProgressWrapper";
    wrapper.style.marginBottom = "20px";

    wrapper.innerHTML = `
      <div id="l3ProgressLabel" style="
        font-size: 18px;
        margin-bottom: 6px;
        color: #fff;
        text-align: center;
      "></div>

      <div id="l3ProgressOuter" style="
        width: 100%;
        height: 10px;
        background: #333;
        border-radius: 6px;
        overflow: hidden;
      ">
        <div id="l3ProgressBar" style="
          height: 100%;
          width: 0%;
          background: #4caf50;
          transition: width 0.3s ease;
        "></div>
      </div>
    `;
  }

  const title = screen.querySelector(".title");
  if (title && !wrapper.parentNode) {
    title.insertAdjacentElement("afterend", wrapper);
  } else if (!wrapper.parentNode) {
    screen.prepend(wrapper);
  }

  document.getElementById("l3ProgressBar").style.width = pct + "%";
  document.getElementById("l3ProgressLabel").textContent =
    `Progreso: ${current} / ${total}`;
};


L3.Reset = {
  attach(screenEl, screenName) {
    if (!screenEl) return;
    if (screenName !== "level3Screen1") return;

    let btn = screenEl.querySelector(".resetBtn");

    if (!btn) {
      btn = document.createElement("button");
      btn.className = "resetBtn";
      btn.textContent = "Reset Level 3";

      btn.style.position = "absolute";
      btn.style.top = "10px";
      btn.style.right = "10px";
      btn.style.zIndex = "9999";

      screenEl.appendChild(btn);
    }

    btn.style.display = "block";

    if (!btn.dataset.wired) {
      btn.dataset.wired = "true";

      btn.onclick = () => {
        // Stop audio
        if (typeof L3.stopAllAudio === "function") {
          L3.stopAllAudio();
        }

        if (L3.audio && L3.audio.cancelToken) {
          L3.audio.cancelToken.cancel = true;
        }

        if (L3.audio) {
          L3.audio.generation++;
          L3.audio.current = null;
        }

        // Reset progress
        Progress3.resetLevel("level3");

        // Restart Level 3 cleanly
        setTimeout(() => {
          L3.start();
        }, 0);
      };
    }
  }
};


/* ==========================================================
   ⭐ LEVEL 3 — SHOW (SCREEN SWITCHER)
========================================================== */

L3.show = function (id) {
  document.querySelectorAll(".level3-screen")
    .forEach(el => el.classList.add("hidden"));

  if (id.startsWith("level3")) {
    document.getElementById("level3Wrapper")?.classList.remove("hidden");
    document.getElementById(id)?.classList.remove("hidden");
    return;
  }

  if (id === "screen0") {
    document.getElementById("level3Wrapper")?.classList.add("hidden");
    document.querySelectorAll(".screen")
      .forEach(s => s.classList.add("hidden"));
    document.getElementById("screen0")?.classList.remove("hidden");
    return;
  }
};


/* ==========================================================
   ⭐ LEVEL 3 — START
========================================================== */

L3.start = function () {
  console.log("[Level3] start()");

  L3.round = 0;
  L3.score = 0;
  L3.columnLocked = false;
  L3.currentSentence = null;
  L3.currentSentenceObj = null;

  L3.stopAllAudio();
  L3.audio.cancelToken.cancel = false;
  L3.audio.generation++;

  if (Array.isArray(L3.dataset)) {
    Progress3.setTotal("level3", L3.dataset.length);
  }

  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
  document.getElementById("level3Wrapper")?.classList.remove("hidden");

  L3.startRound();
};


/* ==========================================================
   ⭐ LEVEL 3 — START ROUND
========================================================== */

L3.startRound = function () {
  console.log(`[Level3] startRound() — Round ${L3.round + 1}`);

  L3.stopAllAudio();
  L3.audio.cancelToken.cancel = false;
  L3.audio.generation++;

  L3.columnLocked = false;

  L3.screen1();
};


/* ==========================================================
   ⭐ LEVEL 3 — SCREEN 1 (AUDIO ONLY)
========================================================== */

L3.screen1 = function () {
  console.log("[Level3] screen1()");

  document.getElementById("level3Wrapper")?.classList.remove("hidden");
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));

  const replayBtn = document.getElementById("l3ReplaySentenceBtn");
  if (replayBtn) replayBtn.style.display = "none";

  L3.stopAllAudio();
  L3.audio.cancelToken.cancel = false;
  L3.audio.generation++;

  const sentence = L3.dataset[Math.floor(Math.random() * L3.dataset.length)];
  L3.setCurrentSentence(sentence);

  const audioObj = { me: sentence.fullAudio.me };

  L3.show("level3Screen1");

  // ⭐ ADD THIS LINE
  L3.Reset.attach(document.getElementById("level3Screen1"), "level3Screen1");

  L3.renderProgress("level3Screen1");

  if (!audioObj.me) {
    L3.screen2();
    return;
  }

  L3.audio.current = null;

  L3.playSentence(() => {
    L3.screen2();
  }, audioObj);
};



/* ==========================================================
   ⭐ LEVEL 3 — SCREEN 2 (INFERENCE)
========================================================== */

L3.screen2 = function () {
  L3.activeScreen = "screen2";
  console.log("[Level3] screen2()");

  const replayBtn = document.getElementById("l3ReplayBtn");
  if (replayBtn) replayBtn.style.display = "inline-block";

  L3.show("level3Screen2");
  L3.columnLocked = false;

  const s = L3.currentSentenceObj;

  document.getElementById("l3LeftColumn").textContent = s.meaning;

  const rightBox = document.getElementById("l3RightColumn");
  rightBox.innerHTML = "";

  const scrambled = [...s.options].sort(() => Math.random() - 0.5);

  scrambled.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "l3OptionBtn";
    btn.textContent = opt;

    btn.onclick = () => {
      if (L3.columnLocked) return;
      L3.handleColumnChoice(opt, btn);
    };

    rightBox.appendChild(btn);
  });

  replayBtn.onclick = () => {
    if (L3.columnLocked) return;

    L3.stopAllAudio();
    L3.audio.cancelToken.cancel = false;
    L3.audio.generation++;

    const audio = new Audio(s.fullAudio.me);
    L3.audio.current = audio;
    audio.play().catch(() => {});
  };

  L3.renderProgress("level3Screen2");
};


/* ==========================================================
   ⭐ LEVEL 3 — HANDLE INFERENCE CHOICE
========================================================== */

L3.handleColumnChoice = function (choice, btn) {
  if (L3.columnLocked) return;
  L3.columnLocked = true;

  const s = L3.currentSentenceObj;

  if (choice === s.correct) {
    btn.classList.add("l3-correct");
    L3.score++;

    // ⭐ increment progress
    Progress3.markSentenceComplete("level3", L3.currentSentence);

  } else {
    btn.classList.add("l3-wrong");

    const correctBtn = [...document.querySelectorAll(".l3OptionBtn")]
      .find(b => b.textContent === s.correct);

    if (correctBtn) correctBtn.classList.add("l3-correct");

    L3.dataset.push(s);
  }

  setTimeout(() => {
    if (L3.activeScreen !== "screen2") return;

    // ⭐ show summary screen
    L3.showRoundSummary();

    // ⭐ update progress bar on the visible summary screen
    L3.renderProgress("level3Screen3");

  }, 800);
};



/* ==========================================================
   ⭐ LEVEL 3 — ROUND SUMMARY
========================================================== */

L3.showRoundSummary = function () {
  L3.activeScreen = "screen3";
  console.log("[Level3] showRoundSummary()");

  const s = L3.currentSentenceObj;
  if (!s) return;

  L3.stopAllAudio();
  L3.show("level3Screen3");

  document.getElementById("l3MeaningBox").textContent = s.meaning;
  document.getElementById("l3SummaryCorrectDrops").textContent =
    `Respuesta correcta: ${s.correct}`;

  const cont = document.getElementById("l3SummaryContainer");
  cont.innerHTML = "";

  s.chunks.forEach(chunk => {
    const row = document.createElement("div");
    row.className = "summary-row";
    row.innerHTML = `
      <div class="summary-spanish">${chunk.spanish}</div>
      <div class="summary-english">${chunk.english}</div>
    `;
    cont.appendChild(row);
  });

  document.getElementById("l3SummaryNextBtn").onclick = () => {
    L3.round++;

    if (L3.round >= L3.TOTAL_ROUNDS) {
      showLevel3FinalSummary();
      return;
    }

    L3.currentSentence = null;
    L3.currentSentenceObj = null;

    L3.startRound();
  };
};


/* ==========================================================
   ⭐ LEVEL 3 — FINAL SUMMARY
========================================================== */

function showLevel3FinalSummary() {
  L3.columnLocked = true;

  L3.stopAllAudio();
  L3.audio.cancelToken.cancel = true;
  L3.audio.generation++;

  L3.show("level3Screen4");

  document.getElementById("l3FinalRounds").textContent = L3.TOTAL_ROUNDS;
  document.getElementById("l3FinalScore").textContent = L3.score;
  document.getElementById("l3FinalCorrect").textContent = L3.score;

  const replayBtn = document.getElementById("l3ReplaySummaryBtn");
  if (replayBtn) {
    replayBtn.onclick = () => {
      const s = L3.currentSentenceObj;
      if (!s) return;

      L3.stopAllAudio();
      L3.audio.cancelToken.cancel = false;
      L3.audio.generation++;

      L3.playSentence(() => {}, { me: s.fullAudio.me });
    };
  }

  const nextBtn = document.getElementById("l3PlayAgainBtn");
  if (nextBtn) {
    nextBtn.onclick = () => {
      L3.stopAllAudio();
      L3.audio.cancelToken.cancel = false;
      L3.audio.generation++;

      L3.round = 0;
      L3.score = 0;

      L3.startRound();
    };
  }

  const homeBtn = document.getElementById("l3HomeBtn");
  if (homeBtn) {
    homeBtn.onclick = () => {
      L3.exitToMenu();
    };
  }
}


/* ==========================================================
   ⭐ LEVEL 3 — EXIT TO MENU
========================================================== */

L3.exitToMenu = function () {
  console.log("[Level3] exitToMenu()");

  L3.stopAllAudio();
  L3.audio.cancelToken.cancel = true;
  L3.audio.generation++;

  document.getElementById("level3Screen1")?.classList.add("hidden");
  document.getElementById("level3Screen2")?.classList.add("hidden");
  document.getElementById("level3Screen3")?.classList.add("hidden");
  document.getElementById("level3Screen4")?.classList.add("hidden");

  document.getElementById("level3Wrapper")?.classList.add("hidden");

  document.getElementById("screen0")?.classList.remove("hidden");
};


/* ==========================================================
   ⭐ LEVEL 4 — BUTTON HANDLERS
========================================================== */

/* ==========================================================
   ⭐ LEVEL 4 MODULE — ARRANGE MODE
========================================================== */

/* ==========================================================
   ⭐ LEVEL 4 — MCQ MODE
   Uses: universal Screen 1 (audio-only), Screen 2 (MCQ),
         Screen 3 (summary), Screen 4 (score)
========================================================== */

/* ==========================================================
   ⭐ LEVEL 4 MODULE — FULLY ISOLATED
   No shared globals, no shared handlers, no shared functions.
========================================================== */

/* ==========================================================
   ⭐ LEVEL 4 — ISOLATED GLOBAL STATE
   (No sharing with Level 1 or any other level)
========================================================== */



/* ==========================================================
   ⭐ LEVEL 4 — CORE STATE (MIRRORED FROM LEVEL 8)
========================================================== */
const level4 = [
  {
    id: "L4-001",
    level: 4,

    spanish: "Quiero ir a la playa pero tengo que trabajar.",
    audio: "audio/spanish/paraphrase1.wav",

    paraphraseOptions: [
      { text: "Me gustaría ir a la playa, pero tengo obligaciones de trabajo.", correct: true },
      { text: "Voy a la playa después de terminar todo mi trabajo.", correct: false },
      { text: "No quiero ir a la playa porque tengo demasiado trabajo.", correct: false },
      { text: "Tengo tiempo libre y por eso voy a la playa.", correct: false },
      { text: "Prefiero trabajar en vez de ir a la playa.", correct: false }
    ],

    summaryChunks: [
      { spanish: "Quiero ir a la playa", english: "I want to go to the beach" },
      { spanish: "pero tengo que trabajar", english: "but I have to work" }
    ],

    meaning: "I want to go to the beach, but I have to work."
  },











];










/* ==========================================================
   ⭐ LEVEL 4 — CORE STATE
========================================================== */

const L4 = {
  round: 0,
  score: 0,
  TOTAL_ROUNDS: 3,

  dataset: level4,          // Spanish Level 4 dataset
  currentSentence: null,    // ID
  currentSentenceObj: null, // full object

  columnLocked: false,
  activeScreen: null,
  screen1Active: false,

  audio: {
    cancelToken: { cancel: false },
    generation: 0,
    current: null
  },

  lastScramble: null,
  hasMarked: false
};


/* ==========================================================
   ⭐ LEVEL 4 — CURRENT SENTENCE
========================================================== */

L4.setCurrentSentence = function (sentenceObj) {
  if (!sentenceObj || !sentenceObj.id) {
    console.error("L4.setCurrentSentence invalid:", sentenceObj);
    return;
  }
  L4.currentSentence = sentenceObj.id;
  L4.currentSentenceObj = sentenceObj;
};

L4.getCurrentSentence = function () {
  return L4.currentSentenceObj;
};


/* ==========================================================
   ⭐ LEVEL 4 — STOP ALL AUDIO
========================================================== */

L4.stopAllAudio = function () {
  L4.audio.cancelToken.cancel = true;
  L4.audio.generation++;

  if (L4.audio.current) {
    try {
      L4.audio.current.pause();
      L4.audio.current.currentTime = 0;
    } catch (e) {}
    L4.audio.current = null;
  }
};


/* ==========================================================
   ⭐ LEVEL 4 — GENERATION GUARDS
========================================================== */

L4.generationGuards = function () {
  L4.audio.cancelToken.cancel = false;
  L4.audio.generation++;
  L4.audio.current = null;
};


/* ==========================================================
   ⭐ LEVEL 4 — SENTENCE SCRAMBLER
========================================================== */

function scrambleSentencesLevel4(options, lastOrder) {
  let arr = [...options];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  if (lastOrder) {
    const newOrder = arr.map(o => o.text).join("|");
    const oldOrder = lastOrder.join("|");
    if (newOrder === oldOrder) {
      return scrambleSentencesLevel4(options, lastOrder);
    }
  }

  return arr;
}

L4.renderProgress = function (screenId) {
  const screen = document.getElementById(screenId);
  if (!screen) return;

  const p = Progress4.getLevelProgress("level4");
  const total = p.total;
  const current = p.completed;
  const pct = p.percent;

  let wrapper = document.getElementById("l4ProgressWrapper");
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.id = "l4ProgressWrapper";
    wrapper.style.marginBottom = "20px";

    wrapper.innerHTML = `
      <div id="l4ProgressLabel" style="
        font-size: 18px;
        margin-bottom: 6px;
        color: #fff;
        text-align: center;
      "></div>

      <div id="l4ProgressOuter" style="
        width: 100%;
        height: 10px;
        background: #333;
        border-radius: 6px;
        overflow: hidden;
      ">
        <div id="l4ProgressBar" style="
          height: 100%;
          width: 0%;
          background: #4caf50;
          transition: width 0.3s ease;
        "></div>
      </div>
    `;
  }

  const title = screen.querySelector(".title");
  if (title && !wrapper.parentNode) {
    title.insertAdjacentElement("afterend", wrapper);
  } else if (!wrapper.parentNode) {
    screen.prepend(wrapper);
  }

  document.getElementById("l4ProgressBar").style.width = pct + "%";
  document.getElementById("l4ProgressLabel").textContent =
    `Progreso: ${current} / ${total}`;
};




L4.Reset = {
  attach(screenEl, screenName) {
    if (!screenEl) return;
    if (screenName !== "level4Screen1") return;

    let btn = screenEl.querySelector(".resetBtn");

    if (!btn) {
      btn = document.createElement("button");
      btn.className = "resetBtn";
      btn.textContent = "Reset Level 4";

      btn.style.position = "absolute";
      btn.style.top = "10px";
      btn.style.right = "10px";
      btn.style.zIndex = "9999";

      screenEl.appendChild(btn);
    }

    btn.style.display = "block";

    if (!btn.dataset.wired) {
      btn.dataset.wired = "true";

      btn.onclick = () => {
        // Stop audio safely
        if (typeof L4.stopAllAudio === "function") {
          L4.stopAllAudio();
        }

        if (L4.audio && L4.audio.cancelToken) {
          L4.audio.cancelToken.cancel = true;
        }

        if (L4.audio) {
          L4.audio.generation++;
          L4.audio.current = null;
        }

        // Reset Level 4 progress
        Progress4.resetLevel("level4");

        // Restart Level 4 cleanly
        setTimeout(() => {
          L4.start();
        }, 0);
      };
    }
  }
};


/* ==========================================================
   ⭐ LEVEL 4 — SHOW SCREEN (ISOLATED)
========================================================== */

L4.show = function (screenId) {

  // optional special case — exit to home
  if (screenId === "screen0") {
    const wrapper = document.getElementById("level4Wrapper");
    if (wrapper) wrapper.classList.add("hidden");

    const home = document.getElementById("screen0");
    if (home) home.classList.remove("hidden");
    return;
  }

  const screens = [
    "level4Screen1",
    "level4Screen2",
    "level4Screen3",
    "level4Screen4"
  ];

  screens.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });

  const wrapper = document.getElementById("level4Wrapper");
  if (wrapper) wrapper.classList.remove("hidden");

  const target = document.getElementById(screenId);
  if (target) target.classList.remove("hidden");
};


/* ==========================================================
   ⭐ LEVEL 4 — START
========================================================== */

L4.start = function () {
  console.log("[Level4] start()");

  L4.screen1Active = false;

  L4.active = true;
  L4.round = 0;
  L4.score = 0;
  L4.columnLocked = false;
  L4.currentSentence = null;
  L4.currentSentenceObj = null;

  L4.dataset = scrambleSentencesLevel4(level4);

  Progress4.setTotal(level4.length);
  Progress4.save();

  L4.stopAllAudio();
  L4.audio.cancelToken.cancel = false;

  document.getElementById("level4Wrapper")?.classList.remove("hidden");

  L4.startRound();
};


/* ==========================================================
   ⭐ LEVEL 4 — START ROUND
========================================================== */

L4.startRound = function () {
  L4.hasMarked = false;

  console.log(`[Level4] startRound() — Round ${L4.round + 1}`);
  if (!L4.active) return;

  if (L4.round >= L4.TOTAL_ROUNDS) {
    showLevel4FinalSummary();
    return;
  }

  L4.stopAllAudio();
  L4.audio.cancelToken.cancel = false;
  L4.audio.generation++;

  L4.columnLocked = false;

  const sentenceObj = L4.dataset[L4.round];
  L4.currentSentenceObj = sentenceObj;

  L4.lastScramble = null;

  L4.screen1();
};


/* ==========================================================
   ⭐ LEVEL 4 — SCREEN 1 (SPANISH AUDIO ONLY)
========================================================== */

L4.screen1 = function () {
  console.log("[Level4] screen1()");

  if (L4.screen1Active) {
    console.warn("[Level4] screen1() called while already active — ignoring");
    return;
  }
  L4.screen1Active = true;

  const replayBtn = document.getElementById("l4ReplaySentenceBtn");
  if (replayBtn) replayBtn.style.display = "none";

  L4.stopAllAudio();
  L4.audio.cancelToken.cancel = false;
  L4.audio.generation++;

  const sentence = L4.currentSentenceObj;

  L4.show("level4Screen1");

  // ⭐ Attach reset button (same architecture as L2/L3)
  L4.Reset.attach(document.getElementById("level4Screen1"), "level4Screen1");

  // ⭐ Render progress bar (same architecture as L3)
  L4.renderProgress("level4Screen1");

  if (!sentence.audio) {
    console.warn("[Level4] No audio found, skipping to screen2()");
    L4.screen1Active = false;
    L4.screen2();
    return;
  }

  const audio = new Audio(sentence.audio);
  L4.audio.current = audio;

  let safety = setTimeout(() => {
    if (!L4.screen1Active) return;
    console.warn("[Level4] Audio safety timeout — moving to screen2()");
    L4.screen1Active = false;
    L4.screen2();
  }, 10000);

  const finish = () => {
    if (!L4.screen1Active) return;
    clearTimeout(safety);
    L4.screen1Active = false;
    L4.screen2();
  };

  audio.onended = finish;
  audio.onerror = finish;

  audio.play().catch(() => {
    console.warn("[Level4] Audio play() failed — moving to screen2()");
    finish();
  });
};



/* ==========================================================
   ⭐ LEVEL 4 — SCREEN 2 (SPLIT COLUMN PARAPHRASING)
========================================================== */

L4.screen2 = function () {
  L4.activeScreen = "screen2";

  if (!L4.active) return;
  console.log("[Level4] screen2()");

  const s = L4.currentSentenceObj;
  if (!s) {
    console.warn("[Level4] No current sentence — fallback to startRound()");
    L4.startRound();
    return;
  }

  L4.columnLocked = false;

  L4.show("level4Screen2");

  const leftBox = document.getElementById("l4LeftColumn");
  if (leftBox) leftBox.textContent = s.spanish;

  const rightBox = document.getElementById("l4RightColumn");
  rightBox.innerHTML = "";

  let opts = Array.isArray(s.paraphraseOptions) ? s.paraphraseOptions : [];
  opts = opts.filter(o => o && typeof o.text === "string");

  if (opts.length === 0) {
    console.error("[Level4] No valid paraphraseOptions for:", s);
    rightBox.textContent = "⚠️ No hay opciones de paráfrasis disponibles.";
    return;
  }

  const scrambled = scrambleSentencesLevel4(opts, L4.lastScramble);
  L4.lastScramble = scrambled.map(o => o.text);

  scrambled.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "l4OptionBtn";
    btn.textContent = opt.text;

    btn.onclick = () => {
      if (L4.columnLocked) return;
      L4.handleColumnChoice(opt, btn);
    };

    rightBox.appendChild(btn);
  });

  const replayBtn = document.getElementById("l4ReplayBtn");
  if (replayBtn) {
    replayBtn.style.display = "inline-block";
    replayBtn.onclick = () => {
      if (L4.columnLocked) return;

      L4.stopAllAudio();
      L4.audio.cancelToken.cancel = false;
      L4.audio.generation++;

      const audio = new Audio(s.audio);
      L4.audio.current = audio;
      audio.play().catch(() => {});
    };
  }
};


/* ==========================================================
   ⭐ LEVEL 4 — HANDLE COLUMN CHOICE
========================================================== */

L4.handleColumnChoice = function (opt, btn) {
  if (!L4.active) return;
  console.log("[Level4] handleColumnChoice()");

  if (L4.columnLocked) return;
  L4.columnLocked = true;

  const s = L4.currentSentenceObj;
  if (!s) {
    console.warn("[Level4] No current sentence — fallback to startRound()");
    L4.startRound();
    return;
  }

  if (opt.correct) {
    btn.classList.add("l4-correct");
    L4.score++;

    // ⭐ increment progress
    Progress4.markSentenceComplete(s.id);

    L4.updateScoreKeeper?.();

  } else {
    btn.classList.add("l4-wrong");

    const correctOpt = s.paraphraseOptions.find(o => o.correct);
    if (correctOpt) {
      document.querySelectorAll(".l4OptionBtn").forEach(b => {
        if (b.textContent === correctOpt.text) {
          b.classList.add("l4-correct");
        }
      });
    }

    if (Progress4.storageAvailable !== false) {
      L4.dataset.push(s);
    }
  }

  setTimeout(() => {
    if (L4.activeScreen !== "screen2") return;

    // ⭐ show summary screen
    L4.showRoundSummary();

    // ⭐ NOW update progress bar (screen3 is visible)
    L4.renderProgress("level4Screen3");

  }, 800);
};



/* ==========================================================
   ⭐ LEVEL 4 — ROUND SUMMARY (SCREEN 3)
========================================================== */

L4.showRoundSummary = function () {
  console.log("[Level4] showRoundSummary()");
  L4.activeScreen = "screen3";

  if (!L4.active) return;

  const s = L4.currentSentenceObj;
  if (!s) {
    console.warn("[Level4] No current sentence");
    return;
  }

  // Stop audio + reset token
  L4.stopAllAudio();
  L4.audio.cancelToken.cancel = false;
  L4.audio.generation++;

  // Show summary screen
  L4.show("level4Screen3");

  const meaningBox = document.getElementById("l4MeaningBox");
  const cont = document.getElementById("l4SummaryContainer");

  if (!meaningBox || !cont) {
    console.error("[Level4] Missing summary DOM elements");
    return;
  }

  // Clear old content
  meaningBox.textContent = s.meaning || "";
  cont.innerHTML = "";

  // ⭐ Render summary chunks (Spanish → English)
  if (Array.isArray(s.summaryChunks)) {
    s.summaryChunks.forEach(chunk => {
      const row = document.createElement("div");
      row.className = "summary-row";

      row.innerHTML = `
        <div class="summary-spanish">${chunk.spanish || ""}</div>
        <div class="summary-english">${chunk.english || ""}</div>
      `;

      cont.appendChild(row);
    });
  }

  // ⭐ Render correct paraphrase answer
  const correct = s.paraphraseOptions?.find(o => o.correct);
  if (correct) {
    const row = document.createElement("div");
    row.className = "summary-row";

    row.innerHTML = `
      <div class="summary-spanish">Correct Answer</div>
      <div class="summary-english">${correct.text}</div>
    `;

    cont.appendChild(row);
  }

  // ⭐ Wire NEXT button
  const nextBtn = document.getElementById("l4SummaryNextBtn");
  if (nextBtn) {
    nextBtn.onclick = () => {
      L4.stopAllAudio();
      L4.round++;

      if (L4.round >= L4.TOTAL_ROUNDS) {
        showLevel4FinalSummary();
        return;
      }

      L4.currentSentence = null;
      L4.currentSentenceObj = null;

      L4.startRound();
    };
  }

  // ⭐ Wire REPLAY button
  createAndWireLevel4ReplayButton("level4Screen3", s.audio);
};



/* ==========================================================
   ⭐ LEVEL 4 — DYNAMIC REPLAY BUTTON (SUMMARY)
========================================================== */

function createAndWireLevel4ReplayButton(targetScreenId, audioUrl) {
  const oldBtn = document.getElementById("l4SummaryReplayBtn");
  if (oldBtn) oldBtn.remove();

  const btn = document.createElement("button");
  btn.id = "l4SummaryReplayBtn";
  btn.className = "iconBtn replay-top";
  btn.textContent = "🔁 Repetir";

  const screen = document.getElementById(targetScreenId);
  if (!screen) return;
  screen.appendChild(btn);

  btn.onclick = () => {
    L4.stopAllAudio();
    L4.audio.cancelToken.cancel = false;
    L4.audio.generation++;

    const audio = new Audio(audioUrl);
    L4.audio.current = audio;
    audio.play().catch(() => {});
  };
}


/* ==========================================================
   ⭐ LEVEL 4 — FINAL SUMMARY (SCREEN 4)
========================================================== */

function showLevel4FinalSummary() {
  if (!L4.active) return;
  console.log("[Level4] showLevel4FinalSummary()");
  L4.active = false;

  L4.stopAllAudio();
  L4.audio.cancelToken.cancel = false;
  L4.audio.generation++;

  L4.show("level4Screen4");

  const rounds = document.getElementById("l4FinalRounds");
  const score = document.getElementById("l4FinalScore");
  const correct = document.getElementById("l4FinalCorrect");

  if (rounds) rounds.textContent = L4.round;
  if (score) score.textContent = L4.score;
  if (correct) correct.textContent = L4.score;

  const againBtn = document.getElementById("l4PlayAgainBtn");
  if (againBtn) {
    againBtn.onclick = () => {
      L4.reset();
      L4.start();
    };
  }

  const homeBtn = document.getElementById("l4HomeBtn");
  if (homeBtn) {
    homeBtn.onclick = () => {
      L4.reset();
      L4.show("screen0");
    };
  }
}


/* ==========================================================
   ⭐ LEVEL 4 — RESET
========================================================== */

L4.reset = function () {
  L4.round = 0;
  L4.score = 0;
  L4.currentSentence = null;
  L4.currentSentenceObj = null;

  L4.audio.cancelToken.cancel = false;
  L4.audio.generation++;

  L4.columnLocked = false;
};


/* ==========================================================
   ⭐ LEVEL 4 — BUTTON WIRING
========================================================== */

function wireLevel4Buttons() {
  const wrapper = document.getElementById("level4Wrapper");
  if (!wrapper || wrapper.classList.contains("hidden")) {
    return;
  }

  console.log("[Level4] Wiring buttons");

  const startBtn = document.getElementById("startLevel4Btn");
  if (startBtn) {
    startBtn.onclick = () => {
      L4.stopAllAudio();
      L4.start();
    };
  }

  const replayBtn = document.getElementById("l4ReplaySentenceBtn");
  if (replayBtn) {
    replayBtn.onclick = () => {
      if (L4.columnLocked) return;

      const s = L4.currentSentenceObj;
      if (!s || !s.audio) return;

      L4.stopAllAudio();
      L4.audio.cancelToken.cancel = false;
      L4.audio.generation++;

      const audio = new Audio(s.audio);
      L4.audio.current = audio;
      audio.play().catch(() => {});
    };
  }
}

document.addEventListener("DOMContentLoaded", wireLevel4Buttons);


/* ==========================================================
   ⭐ LEVEL 4 — CLEANUP
========================================================== */

function cleanupLevel4() {
  console.log("[Level4] cleanup()");

  L4.active = false;

  try {
    if (L4.stopAllAudio) L4.stopAllAudio();
  } catch (e) {
    console.warn("[Level4] stopAllAudio error", e);
  }

  if (L4.timer) {
    clearTimeout(L4.timer);
    L4.timer = null;
  }

  if (L4.interval) {
    clearInterval(L4.interval);
    L4.interval = null;
  }

  if (Array.isArray(L4.timeouts)) {
    L4.timeouts.forEach(id => clearTimeout(id));
    L4.timeouts = [];
  }

  const ids = [
    "l4LeftColumn",
    "l4RightColumn",
    "l4ReplayBtn",
    "l4ReplaySentenceBtn",
    "l4SummaryNextBtn",
    "l4PlayAgainBtn",
    "l4HomeBtn"
  ];

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.replaceWith(el.cloneNode(true));
  });

  const wrapper = document.getElementById("level4Wrapper");
  if (wrapper) wrapper.classList.add("hidden");
}



/* ==========================================================
   ⭐ LEVEL 5 — BUTTON HANDLERS
========================================================== */

/* ==========================================================
   ⭐ LEVEL 5 MODULE — ARRANGE MODE
========================================================== */

/* ==========================================================
   ⭐ LEVEL 5 — MCQ MODE
   Uses: universal Screen 1 (audio-only), Screen 2 (MCQ),
         Screen 3 (summary), Screen 4 (score)
========================================================== */

/* ==========================================================
   ⭐ LEVEL 5 MODULE — FULLY ISOLATED
   No shared globals, no shared handlers, no shared functions.
========================================================== */

/* ==========================================================
   ⭐ LEVEL 5 — ISOLATED GLOBAL STATE
   (No sharing with Level 1 or any other level)
========================================================== */



/* ==========================================================
   ⭐ LEVEL 5 — CORE STATE (MIRRORED FROM LEVEL 8)
========================================================== */




/* =====================================================================================
   SPANISH LEVEL 5 — CLEAN MIRROR OF JAPANESE LEVEL 11 (NO KANA LOGIC)
   ===================================================================================== */

/* ---------------------------------------------------------
   SPANISH FILLERS
--------------------------------------------------------- */
const L5_FILLERS = [
  "pues","bueno","entonces","o sea","mmm","eh","este",
  "a ver","vale","claro","ya","pero","aunque"
];

/* ---------------------------------------------------------
   STRIP FILLERS
--------------------------------------------------------- */
function stripFillers_es(text) {
  let t = text;
  for (const f of L5_FILLERS) {
    t = t.replace(new RegExp("^" + f, "g"), "");
    t = t.replace(new RegExp(f + "$", "g"), "");
  }
  return t;
}

/* ---------------------------------------------------------
   SPANISH NORMALIZER
--------------------------------------------------------- */
function l5Normalize(text) {
  if (!text) return "";

  let t = text.trim().normalize("NFKC");

  // Remove punctuation
  t = t.replace(/[¡!¿?.,]/g, "");

  // Lowercase
  t = t.toLowerCase();

  // Remove spaces
  t = t.replace(/\s+/g, "");

  // Strip fillers
  t = stripFillers_es(t);

  return t;
}

/* ---------------------------------------------------------
   ACCEPTANCE CHECK
--------------------------------------------------------- */
function isAcceptable_es(userRaw, expectedListRaw) {
  if (!userRaw) return false;

  const user = l5Normalize(userRaw);
  const cleanedUser = stripFillers_es(user);

  const expectedList = expectedListRaw.map(text => {
    let t = text.trim().normalize("NFKC");
    t = t.replace(/[¡!¿?.,]/g, "");
    t = t.toLowerCase();
    t = t.replace(/\s+/g, "");
    return stripFillers_es(t);
  });

  for (const exp of expectedList) {
    if (cleanedUser === exp) return true;
    if (cleanedUser.includes(exp)) return true;
  }

  return false;
}






/* ---------------------------------------------------------
   LEVEL 5 ENGINE OBJECT (MINIMAL MIRROR OF LEVEL 11)
--------------------------------------------------------- */
const L5 = {
  active: false,
  currentScenario: null,
  turnIndex: 0,

  start() {
    console.log("[L5] start()");
    this.active = true;
    this.currentScenario = null;
    this.turnIndex = 0;

    // Reset UI
    document.getElementById("l5ScenarioSelect")?.classList.remove("hidden");
    document.getElementById("l5ConversationContainer").innerHTML = "";
    document.getElementById("l5ScenarioCard").innerHTML = "";
    document.getElementById("l5InputArea")?.classList.add("hidden");
    document.getElementById("l5EndControls")?.classList.add("hidden");
  },

  loadScenario(scenarioObj) {
    console.log("[L5] loadScenario:", scenarioObj.id);

    this.currentScenario = JSON.parse(JSON.stringify(scenarioObj));
    this.turnIndex = 0;

    // Hide scenario select
    document.getElementById("l5ScenarioSelect")?.classList.add("hidden");

    // Show input area
    document.getElementById("l5InputArea")?.classList.remove("hidden");

    // Fill scenario card
    document.getElementById("l5ScenarioCard").innerHTML = `
      <div class="scenario-title">${scenarioObj.title}</div>
      <div class="scenario-description">${scenarioObj.description}</div>
    `;

    // Show first system turn
    this.showSystemTurn();
  },

  showSystemTurn() {
    const turn = this.currentScenario.systemTurns[this.turnIndex];
    if (!turn) return;
    this.appendSystemMessage(turn.es);
  },

  appendSystemMessage(text) {
    const container = document.getElementById("l5ConversationContainer");
    const bubble = document.createElement("div");
    bubble.className = "system-message";

    bubble.textContent = text;
    container.appendChild(bubble);
  },

  appendUserMessage(text) {
    const container = document.getElementById("l5ConversationContainer");
    const bubble = document.createElement("div");
    bubble.className = "userBubble";
    bubble.textContent = text;
    container.appendChild(bubble);
  },

  handleUserReply(raw) {
    const turn = this.currentScenario.systemTurns[this.turnIndex];
    if (!turn) return;

    this.appendUserMessage(raw);

    const expected = turn.expected;
    const ok = isAcceptable_es(raw, expected);

    if (!ok) {
      this.appendSystemMessage(turn.correction);
      return;
    }

    // Advance
    this.turnIndex++;

    if (this.turnIndex >= this.currentScenario.systemTurns.length) {
      this.finishScenario();
    } else {
      this.showSystemTurn();
    }
  },

  finishScenario() {
    console.log("[L5] Scenario finished");
    document.getElementById("l5InputArea")?.classList.add("hidden");
    document.getElementById("l5EndControls")?.classList.remove("hidden");
  }
};




const defaultScenario_es = {
  id: "defaultScenario_es",
  title: "Escenario",
  description: "Escenario predeterminado sin contenido.",
  systemTurns: [
    {
      jp: "Este es un escenario vacío.",
      expected: ["sí", "ok", "vale"],
      correction: "Puedes responder con cualquier frase corta."
    }
  ]
};




/* =====================================================================================
   SPANISH LEVEL 5 SCENARIOS (18 TOTAL)
   ===================================================================================== */

const l5_scenario_01 = {
  id: "l5_scenario_01",
  title: "Pedir café en una cafetería",
  description: "Estás en una cafetería. Pide una bebida y responde naturalmente.",
  systemTurns: [
    {
      es: "Hola, ¿qué te gustaría pedir?",
      expected: ["quisiera un café","me gustaría un café"],
      correction: "La forma más natural es «Quisiera un café»."
    },
    {
      es: "¿Qué tamaño quieres?",
      expected: ["mediano por favor","tamaño mediano"],
      correction: "Lo más natural es «Mediano, por favor»."
    },
    {
      es: "¿Quieres azúcar o leche?",
      expected: ["sí por favor","no gracias"],
      correction: "Puedes decir «Sí, por favor» o «No, gracias»."
    },
    {
      es: "Perfecto, espera un momento.",
      expected: ["sí","gracias"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 02 — Interjections
--------------------------------------------------------- */
const l5_scenario_02 = {
  id: "l5_scenario_02",
  title: "Reaccionar a noticias sorprendentes",
  description: "Responde naturalmente con una interjección en español.",
  systemTurns: [
    {
      es: "¡Oye, perdí mi cartera!",
      expected: ["¿en serio?","¿de verdad?","no puede ser"],
      correction: "Interjecciones naturales: «¿En serio?» o «No puede ser»."
    },
    {
      es: "Pero alguien amable la devolvió.",
      expected: ["qué bien","menos mal","ah qué bueno"],
      correction: "Lo más natural es «Qué bien»."
    },
    {
      es: "Me salvó completamente.",
      expected: ["me alegro","qué bueno"],
      correction: "«Me alegro» es lo más natural."
    },
    {
      es: "Gracias por escuchar.",
      expected: ["de nada","no hay problema"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 03 — Asking for help in a store
--------------------------------------------------------- */
const l5_scenario_03 = {
  id: "l5_scenario_03",
  title: "Pedir ayuda en una tienda",
  description: "Pide ayuda para encontrar un artículo y responde naturalmente.",
  systemTurns: [
    {
      es: "Hola, ¿qué estás buscando?",
      expected: ["busco pañuelos","estoy buscando pañuelos","¿tienen pañuelos?"],
      correction: "Lo más natural es «Busco pañuelos»."
    },
    {
      es: "Están en la esquina, en el estante.",
      expected: ["gracias","muchas gracias","entendido"],
      correction: "«Gracias» es lo más natural."
    },
    {
      es: "¿Necesitas algo más?",
      expected: ["no gracias","estoy bien","todo bien gracias"],
      correction: "«No, gracias» es lo más natural."
    },
    {
      es: "Perfecto, que tengas buen día.",
      expected: ["gracias","sí"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 04 — Bakery
--------------------------------------------------------- */
const l5_scenario_04 = {
  id: "l5_scenario_04",
  title: "Pedir pan en una panadería",
  description: "Pide pan y responde naturalmente.",
  systemTurns: [
    {
      es: "Hola, ¿qué buscas hoy?",
      expected: ["quiero un pan dulce","busco pan dulce","¿tienen pan dulce?"],
      correction: "Lo más natural es «Quiero un pan dulce»."
    },
    {
      es: "Está en la vitrina de allá.",
      expected: ["gracias","muchas gracias","entendido"],
      correction: "«Gracias» es lo más natural."
    },
    {
      es: "¿Algo más?",
      expected: ["no gracias","estoy bien","todo bien gracias"],
      correction: "«No, gracias» es lo más natural."
    },
    {
      es: "Perfecto, pasa a la caja.",
      expected: ["sí","gracias"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 05 — Hospital room change
--------------------------------------------------------- */
const l5_scenario_05 = {
  id: "l5_scenario_05",
  title: "Cambiar de habitación en el hospital",
  description: "Pide cambiar de habitación y responde naturalmente.",
  systemTurns: [
    {
      es: "Hola, ¿en qué puedo ayudarte hoy?",
      expected: ["quiero cambiar de habitación","¿puedo cambiar de habitación?"],
      correction: "Lo más natural es «¿Puedo cambiar de habitación?»."
    },
    {
      es: "Claro, ¿qué tipo de habitación quieres?",
      expected: ["una habitación tranquila","una habitación individual"],
      correction: "«Una habitación tranquila» es lo más natural."
    },
    {
      es: "Perfecto, ¿algo más?",
      expected: ["no gracias","estoy bien","todo bien gracias"],
      correction: "«No, gracias» es lo más natural."
    },
    {
      es: "Muy bien, te avisaré pronto.",
      expected: ["sí","gracias"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 06 — Asking a teacher for help
--------------------------------------------------------- */
const l5_scenario_06 = {
  id: "l5_scenario_06",
  title: "Pedir ayuda a un profesor",
  description: "Pide ayuda con algo en la escuela.",
  systemTurns: [
    {
      es: "Hola, ¿qué pasa?",
      expected: ["tengo una pregunta","necesito ayuda","tengo una duda"],
      correction: "Lo más natural es «Tengo una pregunta»."
    },
    {
      es: "Claro, ¿qué quieres preguntar?",
      expected: ["no entiendo esta tarea","explíqueme este problema","esto es difícil"],
      correction: "«No entiendo esta tarea» es lo más natural."
    },
    {
      es: "¿Algo más?",
      expected: ["no gracias","estoy bien","todo bien gracias"],
      correction: "«No, gracias» es lo más natural."
    },
    {
      es: "Perfecto, vuelve a clase.",
      expected: ["sí","gracias"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 07 — Asking a classmate for help
--------------------------------------------------------- */
const l5_scenario_07 = {
  id: "l5_scenario_07",
  title: "Pedir ayuda a un compañero",
  description: "Pide ayuda con la tarea.",
  systemTurns: [
    {
      es: "Hola, ¿tienes un momento?",
      expected: ["sí claro","sí","un momento está bien"],
      correction: "«Sí, claro» es lo más natural."
    },
    {
      es: "No entiendo esta tarea.",
      expected: ["esto es difícil","explícame esto","¿cómo se hace esto?"],
      correction: "«Esto es difícil» es lo más natural."
    },
    {
      es: "¿Algo más?",
      expected: ["no gracias","estoy bien","todo bien gracias"],
      correction: "«No, gracias» es lo más natural."
    },
    {
      es: "Perfecto, sigamos estudiando.",
      expected: ["sí","gracias"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 08 — Librarian
--------------------------------------------------------- */
const l5_scenario_08 = {
  id: "l5_scenario_08",
  title: "Pedir ayuda en la biblioteca",
  description: "Pide ayuda para encontrar un libro.",
  systemTurns: [
    {
      es: "Hola, ¿buscas algo?",
      expected: ["busco un libro","estoy buscando un libro","necesito ayuda"],
      correction: "«Busco un libro» es lo más natural."
    },
    {
      es: "¿Qué tipo de libro?",
      expected: ["un libro de historia","un libro de España","un libro de este tema"],
      correction: "«Un libro de historia» es lo más natural."
    },
    {
      es: "Está en ese estante. ¿Algo más?",
      expected: ["no gracias","estoy bien","todo bien gracias"],
      correction: "«No, gracias» es lo más natural."
    },
    {
      es: "Perfecto, disfruta la lectura.",
      expected: ["sí","gracias"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 09 — Campus directions
--------------------------------------------------------- */
const l5_scenario_09 = {
  id: "l5_scenario_09",
  title: "Pedir direcciones en el campus",
  description: "Pide ayuda para encontrar un salón.",
  systemTurns: [
    {
      es: "Hola, ¿buscas algún lugar?",
      expected: ["busco un salón","no encuentro este lugar","¿me dices el camino?"],
      correction: "«Busco un salón» es lo más natural."
    },
    {
      es: "¿Qué salón?",
      expected: ["A103","el salón A103","quiero ir a A103"],
      correction: "«A103» es lo más natural."
    },
    {
      es: "Sube las escaleras y gira a la derecha. ¿Algo más?",
      expected: ["no gracias","estoy bien","todo bien gracias"],
      correction: "«No, gracias» es lo más natural."
    },
    {
      es: "Perfecto, cuídate.",
      expected: ["sí","gracias"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 10 — School club
--------------------------------------------------------- */
const l5_scenario_10 = {
  id: "l5_scenario_10",
  title: "Preguntar sobre un club escolar",
  description: "Pregunta sobre unirte a un club.",
  systemTurns: [
    {
      es: "Hola, ¿te interesa algún club?",
      expected: ["sí me interesa","sí un poco","sí quiero unirme"],
      correction: "«Sí, me interesa» es lo más natural."
    },
    {
      es: "¿A cuál club quieres unirte?",
      expected: ["al club de tenis","me interesa tenis","quiero tenis"],
      correction: "«Al club de tenis» es lo más natural."
    },
    {
      es: "Puedes visitarlo mañana. ¿Algo más?",
      expected: ["no gracias","estoy bien","todo bien gracias"],
      correction: "«No, gracias» es lo más natural."
    },
    {
      es: "Perfecto, te esperamos mañana.",
      expected: ["sí","gracias"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 11 — Train station
--------------------------------------------------------- */
const l5_scenario_11 = {
  id: "l5_scenario_11",
  title: "Pedir ayuda en la estación",
  description: "Pide ayuda para entender el tren.",
  systemTurns: [
    {
      es: "Hola, ¿te ayudo en algo?",
      expected: ["quiero preguntar el camino","tengo una duda","no entiendo este tren"],
      correction: "«Quiero preguntar el camino» es lo más natural."
    },
    {
      es: "¿A dónde vas?",
      expected: ["a Madrid","quiero ir a Madrid","Madrid"],
      correction: "«Madrid» es lo más natural."
    },
    {
      es: "Puedes tomar el tren desde esa plataforma. ¿Algo más?",
      expected: ["no gracias","estoy bien","todo bien gracias"],
      correction: "«No, gracias» es lo más natural."
    },
    {
      es: "Perfecto, buen viaje.",
      expected: ["sí","gracias"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 12 — Home & family
--------------------------------------------------------- */
const l5_scenario_12 = {
  id: "l5_scenario_12",
  title: "Hablar en casa con la familia",
  description: "Habla con tus padres o hermanos.",
  systemTurns: [
    {
      es: "Hola, ¿cómo estuvo tu día?",
      expected: ["normal","bien","un poco cansado"],
      correction: "«Normal» es lo más natural."
    },
    {
      es: "Tu hermano dijo algo gracioso hoy.",
      expected: ["¿qué dijo?","¿qué cosa?","me interesa"],
      correction: "«¿Qué dijo?» es lo más natural."
    },
    {
      es: "¿Algo más que pasó hoy?",
      expected: ["no mucho","no gracias","todo bien"],
      correction: "«No mucho» es lo más natural."
    },
    {
      es: "Descansa un poco.",
      expected: ["sí","gracias"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 13 — Cleaning argument
--------------------------------------------------------- */
const l5_scenario_13 = {
  id: "l5_scenario_13",
  title: "Discutir sobre limpiar",
  description: "Una pequeña discusión sobre limpiar.",
  systemTurns: [
    {
      es: "¿Puedes lavar los platos hoy?",
      expected: ["no quiero","estoy cansado","lo hago después"],
      correction: "«No quiero» es lo más natural."
    },
    {
      es: "Solo un poco, nadie lo ha hecho.",
      expected: ["hoy no puedo","puedo un poco","lo hago después"],
      correction: "«Puedo un poco» es lo más natural."
    },
    {
      es: "¿Platos o ventanas?",
      expected: ["platos","ventanas","cualquiera"],
      correction: "«Cualquiera» es lo más natural."
    },
    {
      es: "Gracias, luego ayuda con la cena.",
      expected: ["sí","entendido"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 14 — Bath argument
--------------------------------------------------------- */
const l5_scenario_14 = {
  id: "l5_scenario_14",
  title: "Discutir sobre bañarse",
  description: "Una pequeña discusión sobre bañarse.",
  systemTurns: [
    {
      es: "Ya es tarde, ¿puedes bañarte?",
      expected: ["no quiero","quiero jugar","después"],
      correction: "«No quiero» es lo más natural."
    },
    {
      es: "Hace calor, es mejor bañarte.",
      expected: ["hoy no puedo","está bien me baño","puedo un poco"],
      correction: "«Está bien, me baño» es lo más natural."
    },
    {
      es: "¿Solo shampoo?",
      expected: ["solo shampoo","no todo","cualquiera"],
      correction: "«Solo shampoo» es lo más natural."
    },
    {
      es: "Gracias, ponte pijama después.",
      expected: ["sí","entendido"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 15 — Floss argument
--------------------------------------------------------- */
const l5_scenario_15 = {
  id: "l5_scenario_15",
  title: "Discutir sobre usar hilo dental",
  description: "Una pequeña discusión sobre usar hilo dental.",
  systemTurns: [
    {
      es: "¿Puedes usar hilo dental hoy?",
      expected: ["no quiero","es molesto","después"],
      correction: "«No quiero» es lo más natural."
    },
    {
      es: "Si no lo haces, puedes tener caries.",
      expected: ["no quiero caries","pero es molesto","puedo un poco"],
      correction: "«No quiero caries» es lo más natural."
    },
    {
      es: "¿Solo diez segundos?",
      expected: ["solo diez segundos"],
      correction: "«Solo diez segundos» es lo más natural."
    },
    {
      es: "Gracias, tus dientes estarán más sanos.",
      expected: ["sí","entendido"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 16 — Bank deposit & withdrawal
--------------------------------------------------------- */
const l5_scenario_16 = {
  id: "l5_scenario_16",
  title: "Depositar o retirar dinero en el banco",
  description: "Indica si quieres depositar o retirar dinero y di la cantidad.",
  systemTurns: [
    {
      es: "Hola, ¿quieres depositar o retirar dinero hoy?",
      expected: ["quiero depositar","quiero retirar","quiero ambas cosas"],
      correction: "Lo más natural es «Quiero depositar» o «Quiero retirar»."
    },
    {
      es: "Perfecto, ¿cuánto quieres depositar?",
      expected: ["quiero depositar cinco mil","deposito diez mil","deposito dos mil"],
      correction: "Lo más natural es «Deposito + cantidad»."
    },
    {
      es: "¿Y cuánto quieres retirar?",
      expected: ["retiro tres mil","quiero retirar quince mil","retiro un poco"],
      correction: "Lo más natural es «Retiro + cantidad»."
    },
    {
      es: "Gracias, confirma aquí por favor.",
      expected: ["sí","entendido"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 17 — Work task change
--------------------------------------------------------- */
const l5_scenario_17 = {
  id: "l5_scenario_17",
  title: "Cambiar tareas en el trabajo",
  description: "El jefe cambia tu tarea y dudas un poco.",
  systemTurns: [
    {
      es: "¿Puedo cambiar tu tarea de hoy?",
      expected: ["sí está bien","hoy no puedo","puedo un poco"],
      correction: "«Sí, está bien» es lo más natural."
    },
    {
      es: "Necesito que prepares un documento nuevo. ¿Tienes tiempo?",
      expected: ["tengo un poco de tiempo","estoy ocupado","puedo hacerlo después"],
      correction: "«Tengo un poco de tiempo» es lo más natural."
    },
    {
      es: "Puede ser corto. ¿Puedes hacerlo en diez minutos?",
      expected: ["sí puedo","diez minutos es difícil","espera un momento"],
      correction: "«Sí, puedo» es lo más natural."
    },
    {
      es: "Gracias, avísame cuando termines.",
      expected: ["sí","entendido"],
      correction: null
    }
  ]
};

/* ---------------------------------------------------------
   Scenario 18 — Clothing department
--------------------------------------------------------- */
const l5_scenario_18 = {
  id: "l5_scenario_18",
  title: "Elegir ropa en una tienda",
  description: "El dependiente pregunta talla y color.",
  systemTurns: [
    {
      es: "Hola, ¿qué tipo de ropa buscas?",
      expected: ["busco una camisa","quiero unos pantalones","no he decidido"],
      correction: "«Busco una camisa» es lo más natural."
    },
    {
      es: "¿Qué talla quieres?",
      expected: ["talla M","quiero talla L","una talla pequeña"],
      correction: "«Talla + letra» es lo más natural."
    },
    {
      es: "¿Qué color prefieres? Tenemos rojo, blanco y negro.",
      expected: ["prefiero negro","quiero ver el rojo","cualquiera"],
      correction: "«Prefiero negro» es lo más natural."
    },
    {
      es: "Gracias, pruébatelo por favor.",
      expected: ["sí","entendido"],
      correction: null
    }
  ]
};

/* =====================================================================================
   SPANISH LEVEL 5 — ENGINE (MINIMIZED)
   ===================================================================================== */

let l5CurrentScenario = null;
let l5TurnIndex = 0;
let l5Active = false;

/* ---------------------------------------------------------
   LOAD SCENARIO
--------------------------------------------------------- */
function loadScenario_es(scenario) {
  l5CurrentScenario = JSON.parse(JSON.stringify(scenario));
}

/* ---------------------------------------------------------
   START LEVEL 5
--------------------------------------------------------- */
function startLevel5(scenario) {
  removeL5HomeButton();

  l5CurrentScenario = JSON.parse(JSON.stringify(scenario));
  l5TurnIndex = 0;
  l5Active = true;

  clearConversation();
  fillScenarioCard_es(l5CurrentScenario);
  createAndWireLevel5HomeButton();
  showSystemTurn_es();
}

/* ---------------------------------------------------------
   SHOW SYSTEM TURN
--------------------------------------------------------- */
function showSystemTurn_es() {
  const turn = l5CurrentScenario.systemTurns[l5TurnIndex];
  if (turn) appendSystemMessage(turn.es);
}

/* ---------------------------------------------------------
   SCENARIO CARD
--------------------------------------------------------- */
function fillScenarioCard_es(scenario) {
  const card = document.getElementById("l5ScenarioCard");
  if (!card) return;

  card.innerHTML = `
    <div class="scenario-title">${scenario.title}</div>
    <div class="scenario-description">${scenario.description}</div>
  `;
}

/* ---------------------------------------------------------
   HOME BUTTON
--------------------------------------------------------- */
function removeL5HomeButton() {
  const btn = document.getElementById("l5HomeBtn");
  if (btn) btn.remove();
}

function createAndWireLevel5HomeButton() {
  const oldBtn = document.getElementById("l5HomeBtn");
  if (oldBtn) oldBtn.remove();

  const btn = document.createElement("button");
  btn.id = "l5HomeBtn";
  btn.className = "iconBtn home-top";
  btn.textContent = "🏠 Home";

  const screen = document.getElementById("level5Screen");
  if (!screen) return;
  screen.appendChild(btn);

  btn.onclick = () => {
    l5Active = false;
    l5TurnIndex = 0;
    l5CurrentScenario = null;

    const convo = document.getElementById("l5ConversationContainer");
    if (convo) convo.innerHTML = "";

    btn.remove();
    showScreen("screen0");
  };
}

/* ---------------------------------------------------------
   GET USER INPUT
--------------------------------------------------------- */
function getUserInput_es() {
  return document.getElementById("l5UserInput").value.trim();
}

/* ---------------------------------------------------------
   HANDLE USER REPLY
--------------------------------------------------------- */
function handleUserReply_es() {
  if (!l5Active || !l5CurrentScenario) return;

  const raw = getUserInput_es();
  if (!raw) return;

  const user = l5Normalize(raw);
  appendUserMessage(user);

  const turn = l5CurrentScenario.systemTurns[l5TurnIndex];
  const expected = turn.expected.map(l5Normalize);

  if (!isAcceptable_es(user, expected)) {
    appendSystemMessage(turn.correction);
    return;
  }

  l5TurnIndex++;

  if (l5TurnIndex >= l5CurrentScenario.systemTurns.length) {
    endScenario_es();
  } else {
    showSystemTurn_es();
  }
}

/* ---------------------------------------------------------
   END SCENARIO
--------------------------------------------------------- */
function endScenario_es() {
  l5Active = false;
  const endControls = document.getElementById("l5EndControls");
  if (endControls) endControls.classList.remove("hidden");
}

/* ---------------------------------------------------------
   UI HELPERS
--------------------------------------------------------- */
function appendSystemMessage(text) {
  const container = document.getElementById("l5ConversationContainer");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "system-message chat-bubble";
  div.textContent = text;

  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function appendUserMessage(text) {
  const container = document.getElementById("l5ConversationContainer");
  if (!container) return;

  const div = document.createElement("div");
  div.className = "user-message chat-bubble";
  div.textContent = text;

  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

/* ---------------------------------------------------------
   CLEAR CONVERSATION
--------------------------------------------------------- */
function clearConversation() {
  const container = document.getElementById("l5ConversationContainer");
  if (container) container.innerHTML = "";

  const input = document.getElementById("l5UserInput");
  if (input) input.value = "";
}

/* ---------------------------------------------------------
   INPUT WIRING
--------------------------------------------------------- */
const l5Input = document.getElementById("l5UserInput");

document.getElementById("l5SendBtn").onclick = () => {
  L5.handleUserReply(l5Input.value);
};

l5Input.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    if (l5Active) handleUserReply_es();
  }
});

/* ---------------------------------------------------------
   NEXT SCENARIO BUTTON
--------------------------------------------------------- */
const l5NextBtn = document.getElementById("l5NextScenarioBtn");
if (l5NextBtn) {
  l5NextBtn.onclick = () => {
    startLevel5(l5_scenario_01);
  };
}


/* ==========================================================
   LEVEL 5 — SCENARIO BUTTON WIRING
========================================================== */

/* ==========================================================
   LEVEL 5 — SCENARIO BUTTON WIRING
========================================================== */
/* ---------------------------------------------------------
   LEVEL 5 — SCENARIO BUTTON WIRING (FULL)
--------------------------------------------------------- */

document.getElementById("cafeBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_01);

document.getElementById("interjectionBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_02);

document.getElementById("storeHelpBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_03);

document.getElementById("bakeryBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_04);

document.getElementById("hospitalBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_05);

document.getElementById("schoolBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_06);

document.getElementById("classmateBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_07);

/* ⭐ ADD ALL REMAINING BUTTONS BELOW ⭐ */

document.getElementById("libraryBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_08);

document.getElementById("campusBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_09);

document.getElementById("schoolClubBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_10);

document.getElementById("trainStationBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_11);

document.getElementById("homeFamilyBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_12);

document.getElementById("cleaningArgumentBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_13);

document.getElementById("bathTimeArgumentBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_14);

document.getElementById("flossArgumentBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_15);

document.getElementById("bankAmountBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_16);

document.getElementById("workTaskBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_17);

document.getElementById("clothingDeptBtn_es").onclick = () =>
  L5.loadScenario(l5_scenario_18);

























/* ==========================================================
   ⭐ LEVEL 6 MODULE — ARRANGE MODE
========================================================== */

/* ==========================================================
   ⭐ LEVEL 6 — MCQ MODE
   Uses: universal Screen 1 (audio-only), Screen 2 (MCQ),
         Screen 3 (summary), Screen 4 (score)
========================================================== */

/* ==========================================================
   ⭐ LEVEL 6 MODULE — FULLY ISOLATED
   No shared globals, no shared handlers, no shared functions.
========================================================== */

/* ==========================================================
   ⭐ LEVEL 6 — ISOLATED GLOBAL STATE
   (No sharing with Level 1 or any other level)
========================================================== */











/* ==========================================================
   LEVEL 6 — SPANISH FREEFLOW CONVERSATION MODULE
   Mirrors Level 12 architecture (Japanese) but Spanish-specific
========================================================== */

/* ----------------------------------------------------------
   PUBLIC ENTRY POINT
---------------------------------------------------------- */
function l6ProcessUserInput(rawText) {
  return l6Normalize(rawText);
}

/* ----------------------------------------------------------
   NORMALIZER — Spanish-specific
---------------------------------------------------------- */
function l6Normalize(text) {
  if (!text) return "";

  let t = text.trim().normalize("NFKC").toLowerCase();

  // Remove punctuation except Spanish interrogatives
  t = t.replace(/[.,!¡?¿]/g, "");

  // Normalize accents
  const accentMap = {
    a: "á",
    e: "é",
    i: "í",
    o: "ó",
    u: "ú",
    n: "ñ"
  };
  // Fix common missing accents (optional)
  t = t.replace(/senor/g, "señor")
       .replace(/nino/g, "niño")
       .replace(/ano/g, "año");

  // Remove extra spaces
  t = t.replace(/\s+/g, " ");

  return t;
}

/* ----------------------------------------------------------
   UI HELPERS
---------------------------------------------------------- */
function l6AppendUserMessage(text) {
  const container = document.getElementById("l6ConversationContainer");
  const div = document.createElement("div");
  div.className = "user-message";
  div.textContent = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function l6AppendSystemMessage(text) {
  const container = document.getElementById("l6ConversationContainer");
  const div = document.createElement("div");
  div.className = "system-message";
  div.textContent = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function l6ClearConversation() {
  const container = document.getElementById("l6ConversationContainer");
  container.innerHTML = "";
}

// ---------------------------------------------------------
// LEVEL 6 — INPUT HANDLER (matches Japanese freeflow)
// ---------------------------------------------------------
/* ==========================================================
   ⭐ LEVEL 6 — INPUT HANDLER (mirrors Japanese freeflow)
========================================================== */
function l6AttachInputHandler() {
  const input = document.getElementById("l6UserInput");
  const sendBtn = document.getElementById("l6SendBtn");
  const container = document.getElementById("l6ConversationContainer");

  if (!input || !sendBtn || !container) {
    console.error("Level 6 input elements missing");
    return;
  }

  sendBtn.addEventListener("click", () => {
    const rawText = input.value.trim();
    if (!rawText) return;

    // Append user bubble
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="user-message">${rawText}</div>`
    );

    // Generate reply
    const reply = l6GenerateReply(rawText);

    // Append system bubble
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="system-message">${reply}</div>`
    );

    // Clear input
    input.value = "";

    // Auto-scroll
    container.scrollTop = container.scrollHeight;
  });
}



/* ----------------------------------------------------------
   CONVERSATION STATE
---------------------------------------------------------- */
const l6Context = {
  politeness: "neutral", // "formal" | "informal" | "neutral"
  emotion: null,
  tense: "present",
  mood: "indicative",
  lastIntent: null,
  lastTopic: null
};

/* ----------------------------------------------------------
   CLAUSE SPLITTING
---------------------------------------------------------- */
function l6SplitClauses(rawText) {
  if (!rawText) return [];

  const clauses = rawText
    .split(/\.|!|¡|\?|¿|y luego|después|entonces|luego|así que|por eso/g)
    .map(c => c.trim())
    .filter(c => c.length > 0);

  return clauses.length > 0 ? clauses : [rawText];
}

/* ----------------------------------------------------------
   DETECTORS
---------------------------------------------------------- */
function l6DetectPoliteness(t) {
  if (/usted|podría|quisiera|sería tan amable/.test(t)) return "formal";
  if (/tú|oye|vale|dime|haz/.test(t)) return "informal";
  return "neutral";
}

function l6DetectTense(t) {
  if (/estoy .*ando|estoy .*iendo/.test(t)) return "progressive";
  if (/voy a|iré|haré|mañana/.test(t)) return "future";
  if (/fui|estuve|hice|quería|había/.test(t)) return "past";
  return "present";
}

function l6DetectMood(t) {
  if (/ojalá|quiera|sea|vaya|pueda/.test(t)) return "subjunctive";
  if (/haz|ven|dime|cuéntame/.test(t)) return "imperative";
  return "indicative";
}

function l6DetectVolition(t) {
  return /(quiero|me gustaría|quisiera|tengo ganas|pienso)/.test(t);
}

/* ----------------------------------------------------------
   INTENT RULES
---------------------------------------------------------- */
const l6IntentRules = [
  { name: "greeting", match: t => /(hola|buenas|qué tal|hey)/.test(t) },
  { name: "request", match: t => /(puedes|podrías|haz|dime|muéstrame|por favor)/.test(t) },
  { name: "ask_status", match: t => /(cómo estás|qué tal|cómo te va)/.test(t) },
  { name: "status_reply", match: t => /(bien|mal|más o menos|todo bien)/.test(t) },
  { name: "ask_opinion", match: t => /(qué piensas|qué opinas|cómo ves)/.test(t) },
  { name: "ask_plan", match: t => /(qué harás|qué vas a hacer|planes)/.test(t) },
  { name: "plan_reply", match: t => /(voy a|pienso|tengo que|después)/.test(t) },
  { name: "light_plan", match: t => /(tal vez|quizá|me gustaría|puede que)/.test(t) },
  { name: "desire_preference", match: t => /(me gusta|prefiero|odio|quisiera)/.test(t) },
  { name: "negative_plan", match: t => /(no quiero|no puedo|me da pereza|no tengo ganas)/.test(t) },
  { name: "yesno_question", match: t => /^.*\?$/.test(t) },
  { name: "food_drink", match: t => /(comer|beber|café|pan|agua|cerveza)/.test(t), topic: "food" },
  { name: "study", match: t => /(estudiar|aprender|practicar)/.test(t), topic: "study" }
];

/* ----------------------------------------------------------
   SINGLE-CLAUSE ANALYZER
---------------------------------------------------------- */
function l6AnalyzeIntentClause(t) {
  const politeness = l6DetectPoliteness(t);
  const tense = l6DetectTense(t);
  const mood = l6DetectMood(t);
  const volition = l6DetectVolition(t);

  for (const rule of l6IntentRules) {
    if (rule.match(t)) {
      return {
        type: rule.name,
        politeness,
        tense,
        mood,
        volition,
        topic: rule.topic || null
      };
    }
  }

  return {
    type: "free",
    politeness,
    tense,
    mood,
    volition,
    topic: null
  };
}

/* ----------------------------------------------------------
   MULTI-SENTENCE ANALYZER
---------------------------------------------------------- */
/* ==========================================================
   ⭐ MULTI-SENTENCE INTENT ANALYZER (SPANISH L6)
========================================================== */
function l6AnalyzeIntent(rawText) {
  const clauses = l6SplitClauses(rawText);
  const results = [];

  for (const clause of clauses) {
    const t = l6Normalize(clause);

    let type = "free";
    let nuance = null;

    // --------------------------------------------------
    // ASK INFORMATION / QUESTIONS (NEW)
    // --------------------------------------------------
    if (
      /\b(cuantos|cuántos|cuantas|cuántas|como|cómo|cuando|cuándo|por qué|porque|para qué|para que)\b/.test(t) ||
      /\?$/.test(t)
    ) {
      type = "ask_info";
    }

    // --------------------------------------------------
    // BASIC INTENTS (mirrored from Japanese)
    // --------------------------------------------------
    if (/hola|buenos dias|buenas tardes|buenas noches/.test(t)) {
      type = "greeting";

    } else if (/hazlo|continua|sigue|puedes hacerlo|por favor/.test(t)) {
      type = "request";

    } else if (/como estas|que tal|como te encuentras/.test(t)) {
      type = "ask_status";

    } else if (/me alegra|que bueno|perfecto/.test(t)) {
      type = "status_reply";

    } else if (/que opinas|que piensas|opinion/.test(t)) {
      type = "ask_opinion";

    } else if (/que vas a hacer|planes|que haras|que haces hoy/.test(t)) {
      type = "ask_plan";

    } else if (/voy a|planeo|tengo pensado/.test(t)) {
      type = "plan_reply";

    } else if (/tal vez|quizas|no estoy seguro|no se/.test(t)) {
      type = "light_plan";

    } else if (/quiero|me gustaria|preferiria/.test(t)) {
      type = "desire_preference";
    }

    // --------------------------------------------------
    // DAY STATUS (mirrored)
    // --------------------------------------------------
    if (/dia|día/.test(t) && /como/.test(t)) {
      type = "ask_day_status";
    }

    // --------------------------------------------------
    // NEGATIVE / RELUCTANT PLAN (mirrored)
    // --------------------------------------------------
    if (
      /no quiero|no puedo|me cuesta|es dificil|es duro|no tengo ganas/.test(t)
    ) {
      type = "negative_plan";
    }

    // --------------------------------------------------
    // CAN'T-HELP EMOTIONAL NUANCES (mirrored)
    // --------------------------------------------------
    if (/no puedo evitar/.test(t)) {
      type = "cant_help";
      nuance = "evitar";

    } else if (/me es imposible/.test(t)) {
      type = "cant_help";
      nuance = "imposible";

    } else if (/no tengo opcion|no tengo opción/.test(t)) {
      type = "cant_help";
      nuance = "opcion";

    } else if (/no queda mas remedio|no queda más remedio/.test(t)) {
      type = "cant_help";
      nuance = "remedio";
    }

    // --------------------------------------------------
    // RESULT OBJECT (mirrored)
    // --------------------------------------------------
    results.push({
      type,
      nuance,
      politeness: l6Context.politeness,
      emotion: l6Context.emotion,
      voice: l6Context.voice
    });
  }

  return results;
}



/* ----------------------------------------------------------
   REPLY GENERATOR
---------------------------------------------------------- */
/* ==========================================================
   ⭐ REPLY GENERATOR (SPANISH L6)
========================================================== */
function l6GenerateReply(rawText) {
  const intents = l6AnalyzeIntent(rawText);
  const politeness = l6Context.politeness;

  const pick = (list) => list[Math.floor(Math.random() * list.length)];
  const replies = [];

  for (const intent of intents) {
    switch (intent.type) {

      // --------------------------------------------------
      // GREETING
      // --------------------------------------------------
      case "greeting":
        replies.push(
          politeness === "formal"
            ? pick([
                "Buenos días. ¿Sobre qué le gustaría conversar hoy?",
                "Hola. ¿Qué tema desea tratar hoy?",
                "Hola. ¿Cómo está pasando su día?"
              ])
            : pick([
                "¡Hola! ¿Qué quieres hablar hoy?",
                "Hey, ¿qué tal tu día?",
                "Hola, ¿cómo va todo?"
              ])
        );
        break;

      // --------------------------------------------------
      // REQUEST
      // --------------------------------------------------
      case "request":
        replies.push(
          politeness === "formal"
            ? pick([
                "Claro, con gusto continuaré.",
                "Por supuesto, seguiré adelante.",
                "Entendido, procederé."
              ])
            : pick([
                "Vale, sigo.",
                "Ok, continúo.",
                "Perfecto, voy."
              ])
        );
        break;

      // --------------------------------------------------
      // ASK STATUS
      // --------------------------------------------------
      case "ask_status":
        replies.push(
          politeness === "formal"
            ? pick([
                "Estoy bien, gracias. ¿Y usted?",
                "Todo en orden. ¿Cómo se encuentra usted?",
                "Me encuentro bien. ¿Y usted?"
              ])
            : pick([
                "Todo bien. ¿Y tú?",
                "Bien aquí. ¿Y tú cómo vas?",
                "Estoy bien. ¿Y tú?"
              ])
        );
        break;

      // --------------------------------------------------
      // ASK DAY STATUS
      // --------------------------------------------------
      case "ask_day_status":
        replies.push(
          politeness === "formal"
            ? pick([
                "Mi día va tranquilo. ¿Y el suyo?",
                "Mi día va bastante bien. ¿Cómo va el suyo?",
                "Mi día va sin problemas. ¿Y el suyo?"
              ])
            : pick([
                "Mi día va normal. ¿Y el tuyo?",
                "Va bien. ¿Y tú?",
                "Mi día va bien. ¿Y el tuyo?"
              ])
        );
        break;

      // --------------------------------------------------
      // STATUS REPLY
      // --------------------------------------------------
      case "status_reply":
        replies.push(
          politeness === "formal"
            ? pick([
                "Me alegra escuchar eso. ¿Sobre qué desea hablar?",
                "Perfecto. ¿Qué tema le gustaría tratar?",
                "Qué bueno. ¿Qué desea conversar?"
              ])
            : pick([
                "¡Qué bien! ¿De qué quieres hablar?",
                "Genial. Cuéntame más.",
                "Perfecto. ¿Qué más quieres contar?"
              ])
        );
        break;

      // --------------------------------------------------
      // ASK OPINION
      // --------------------------------------------------
      case "ask_opinion":
        replies.push(
          politeness === "formal"
            ? pick([
                "Creo que es interesante. ¿Qué opina usted?",
                "Me parece razonable. ¿Cuál es su opinión?",
                "Es una buena pregunta. ¿Qué piensa usted?"
              ])
            : pick([
                "Yo creo que está bien. ¿Tú qué piensas?",
                "Pues yo lo veo bien. ¿Y tú?",
                "Creo que está bien. ¿Qué opinas tú?"
              ])
        );
        break;

      // --------------------------------------------------
      // ASK PLAN
      // --------------------------------------------------
      case "ask_plan":
        replies.push(
          politeness === "formal"
            ? pick([
                "No tengo planes aún. ¿Y usted?",
                "Todavía no he decidido. ¿Qué hará usted?",
                "No tengo nada definido. ¿Y usted?"
              ])
            : pick([
                "No sé todavía. ¿Y tú?",
                "Aún no decido. ¿Qué vas a hacer tú?",
                "No tengo planes. ¿Y tú?"
              ])
        );
        break;

      // --------------------------------------------------
      // PLAN REPLY
      // --------------------------------------------------
      case "plan_reply":
        replies.push(
          politeness === "formal"
            ? pick([
                "Entiendo. Suena bien.",
                "Perfecto, espero que lo disfrute.",
                "Comprendo. Que tenga un buen día."
              ])
            : pick([
                "Genial, disfruta.",
                "Suena bien, pásala bien.",
                "Perfecto, dale."
              ])
        );
        break;

      // --------------------------------------------------
      // LIGHT PLAN
      // --------------------------------------------------
      case "light_plan":
        replies.push(
          politeness === "formal"
            ? pick([
                "Parece que aún no está seguro.",
                "Está considerando hacerlo, ¿verdad?",
                "Todavía lo está pensando, ¿cierto?"
              ])
            : pick([
                "Estás dudando, ¿no?",
                "Todavía no decides, ¿verdad?",
                "Parece que estás pensando."
              ])
        );
        break;

      // --------------------------------------------------
      // DESIRE / PREFERENCE
      // --------------------------------------------------
      case "desire_preference":
        replies.push(
          politeness === "formal"
            ? pick([
                "Comprendo ese sentimiento.",
                "Es totalmente válido sentir eso.",
                "Entiendo su perspectiva."
              ])
            : pick([
                "Te entiendo.",
                "Sí, tiene sentido.",
                "Es válido sentir eso."
              ])
        );
        break;

      // --------------------------------------------------
      // NEGATIVE PLAN
      // --------------------------------------------------
      case "negative_plan":
        replies.push(
          politeness === "formal"
            ? pick([
                "Lo comprendo. No se esfuerce demasiado.",
                "Entiendo. Tómese su tiempo.",
                "Es comprensible. Cuídese."
              ])
            : pick([
                "Uf, te entiendo. No te fuerces.",
                "Sí, a veces pasa. Descansa un poco.",
                "Lo entiendo. Tómalo con calma."
              ])
        );
        break;

      // --------------------------------------------------
      // ASK INFORMATION (NEW)
      // --------------------------------------------------
      case "ask_info":
        replies.push(
          politeness === "formal"
            ? pick([
                "Depende de sus objetivos, pero muchas personas estudian entre una y tres horas al día.",
                "Generalmente se recomienda estudiar al menos una hora diaria, aunque puede variar.",
                "Una buena referencia es entre una y dos horas al día, según su disponibilidad."
              ])
            : pick([
                "Depende de tus metas, pero mucha gente estudia entre una y tres horas al día.",
                "Normalmente se recomienda al menos una hora diaria, aunque varía según la persona.",
                "Una buena guía es estudiar entre una y dos horas al día, según tu ritmo."
              ])
        );
        break;

      // --------------------------------------------------
      // DEFAULT
      // --------------------------------------------------
      default:
        replies.push(
          politeness === "formal"
            ? pick([
                "¿Podría contarme un poco más?",
                "Interesante. ¿Desea continuar?",
                "Comprendo. ¿Podría ampliar un poco más?"
              ])
            : pick([
                "Cuéntame más.",
                "Interesante, sigue.",
                "Dime más."
              ])
        );
        break;
    }
  }

  return replies.length > 0 ? pick(replies) : "Cuéntame más.";
}



/* ----------------------------------------------------------
   MAIN HANDLER
---------------------------------------------------------- */
function handleL6UserReply() {
  if (!l6Active) return;

  const inputEl = document.getElementById("l6UserInput");
  const raw = inputEl.value.trim();
  if (!raw) return;

  l6AppendUserMessage(raw);
  inputEl.value = "";

  const reply = l6GenerateReply(raw);
  l6AppendSystemMessage(reply);
}

/* ----------------------------------------------------------
   STARTUP
---------------------------------------------------------- */
let l6Active = false;

function startLevel6() {
  l6Active = true;
  l6ClearConversation();

  l6AppendSystemMessage("Hola. Puedes hablar libremente en español.");

  const sendBtn = document.getElementById("l6SendBtn");
  const inputEl = document.getElementById("l6UserInput");

  if (sendBtn) {
    sendBtn.onclick = handleL6UserReply;
  }

  if (inputEl) {
    inputEl.onkeydown = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleL6UserReply();
      }
    };
  }

  const homeBtn = document.getElementById("l6HomeBtn");
  if (homeBtn) {
    homeBtn.onclick = () => {
      l6Active = false;
      l6ClearConversation();
      showScreen("screen0");
    };
  }
}


// ---------------------------------------------------------
// LEVEL 6 ENGINE (Minimal Freeflow)
// ---------------------------------------------------------
const L6 = {
  start() {
    console.log("[Level 6] Engine start()");

    const container = document.getElementById("l6ConversationContainer");
    if (!container) return;

    container.innerHTML = `
      <div class="system-message">
        ¡Bienvenido a la conversación libre! Escribe algo para comenzar.
      </div>
    `;

    // ⭐ Attach input handler (critical)
    l6AttachInputHandler();
  }
};

































/*----------------------------------------------------------------
LEVEL HANDLER (CLEAN, ISOLATED, ERROR‑FREE)
-------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {

  // ---------------------------------------------------------
  // UNIVERSAL LEVEL LAUNCHER (Levels 1–10 only)
  // ---------------------------------------------------------
  function launchLevel(levelNumber, startFn) {
    document.querySelectorAll(".screen").forEach(s =>
      s.classList.add("hidden")
    );

    document.getElementById(`screen2L${levelNumber}`)?.classList.remove("hidden");
    startFn();
  }

  // ---------------------------------------------------------
  // LEVEL 1
  // ---------------------------------------------------------
  document.querySelector('.levelBtn[data-level="1"]')
  ?.addEventListener("click", () => {
 if (window.currentScreen && window.currentScreen !== "screen0") return;




    if (window.currentLevel !== 0) return;   // ⭐ Only allow Level 1 when selecting from screen0

    window.currentLevel = 1;
    console.log("[Level 1] Isolated handler fired");
    launchLevel(1, level1);
  });




  // ---------------------------------------------------------
  // LEVEL 2
  // ---------------------------------------------------------
  document.querySelector('.levelBtn[data-level="2"]')
  ?.addEventListener("click", () => {

    if (window.currentScreen && window.currentScreen !== "screen0") return;
    if (window.currentLevel !== 0) return;

    window.currentLevel = 2;

    // ⭐ FIX: mark screen BEFORE launching Level‑2
    window.currentScreen = "level2Screen1";

    console.log("[Level 2] Isolated handler fired");
    launchLevel(2, L2.start);
  });









  // ---------------------------------------------------------
  // LEVEL 3
  // ---------------------------------------------------------
  document.querySelector('.levelBtn[data-level="3"]')
    ?.addEventListener("click", () => {
      console.log("[Level 3] Isolated handler fired");
      launchLevel(3, L3.start);
    });











const level4Btn = document.getElementById("level4Btn");

if (!level4Btn) {
  console.error("Level 4 button not found in DOM");
} else {
  level4Btn.addEventListener("click", async () => {
    console.log("[Level 4] Gated handler fired");

    // ⭐ Prevent crash: sb must exist
    if (typeof sb === "undefined") {
      console.error("Supabase client (sb) is not defined.");
      alert("Internal error: membership system unavailable.");
      return;
    }

    let user = window.currentUser;

    // Recover user if window.currentUser is null
    if (!user) {
      const { data: authUser } = await sb.auth.getUser();
      if (authUser?.user) user = authUser.user;
    }

    // If STILL no user → redirect
    if (!user) {
      window.location.href = "../../../blog-podcast.html";
      return;
    }

    // Membership check
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;

    const allowed = ["basic-monthly", "basic-yearly", "lifetime"];

    if (!(status === "active" && allowed.includes(plan))) {
      alert("Level 4 requires an active Basic or Lifetime subscription.");
      window.location.href = "membership.html";
      return;
    }

    // ⭐ Your original ungated UX flow (unchanged)
    document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));

    const wrapper = document.getElementById("level4Wrapper");
    if (wrapper) wrapper.classList.remove("hidden");

    L4.start();
  });
}






















  // ---------------------------------------------------------
  // LEVEL 5
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 5 (GATED: BASIC OR PREMIUM, ISOLATED, CLEAN)
// ---------------------------------------------------------
// ---------------------------------------------------------
// LEVEL 5 (GATED: BASIC OR PREMIUM)
// ---------------------------------------------------------
level5Btn.addEventListener("click", async () => {
  console.log("[Level 5] Gated handler fired");

  // ⭐ Prevent crash: sb must exist (same as Level 4)
  if (typeof sb === "undefined") {
    console.error("Supabase client (sb) is not defined.");
    alert("Internal error: membership system unavailable.");
    return;
  }

  // ⭐ Require login
  let user = window.currentUser;

  if (!user) {
    // Try restoring session (same fix used for Level 4)
    const { data: authUser } = await sb.auth.getUser();
    if (authUser?.user) user = authUser.user;
  }

  if (!user) {
    window.location.href = "../../../blog-podcast.html";
    return;
  }

  // ⭐ Check membership in Supabase
  const { data, error } = await sb
    .from("profiles")
    .select("membership_status, membership_plan")
    .eq("email", user.email)
    .maybeSingle();

  if (error) {
    console.error("Membership query error:", error);
    alert("Membership check failed. Please try again.");
    return;
  }

  const status = data?.membership_status;
  const plan = data?.membership_plan;

  // ⭐ Allowed plans (same as Level 4 Spanish)
  const allowed = ["basic-monthly", "basic-yearly", "lifetime"];

  if (!(status === "active" && allowed.includes(plan))) {
    alert("Level 5 requires an active Basic or Lifetime subscription.");
    window.location.href = "membership.html";
    return;
  }

  // ⭐⭐⭐ YOUR ORIGINAL UNGATED LOGIC (unchanged)
  console.log("[Level 5] Ungated handler fired");

  // Hide all screens
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));

  // Show Level 5 wrapper
  document.getElementById("level5Wrapper")?.classList.remove("hidden");

  // ⭐ Show Level 5 screen
  document.getElementById("level5Screen")?.classList.remove("hidden");

  // Start Level 5
  L5.start();
});





































// ---------------------------------------------------------
// LEVEL 6 — UNGATED TEST HANDLER (NO MEMBERSHIP CHECKS)
// ---------------------------------------------------------
// ---------------------------------------------------------
// LEVEL 6 — UNGATED TEST HANDLER (NO MEMBERSHIP CHECKS)
// ---------------------------------------------------------
// ---------------------------------------------------------
// LEVEL 6 — UNGATED TEST HANDLER
// ---------------------------------------------------------
document.querySelector('.levelBtn[data-level="6"]')
  ?.addEventListener("click", () => {

    console.log("[Level 6] Ungated test handler fired");

    // Hide all screens
    document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));

    // Show Level 6 wrapper + screen
    document.getElementById("level6Wrapper")?.classList.remove("hidden");
    document.getElementById("level6Screen")?.classList.remove("hidden");

    // Start Level 6 engine
    L6.start();
  });


});





  



