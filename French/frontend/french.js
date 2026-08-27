
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
  id: "l1-fr-1",
  meaning: "What are you doing?",
  level: 1,
  chunks: [
    {
      romaji: "qu’est‑ce",
      hiragana: "qu’est‑ce",
      meaning: "what",
      audio: {
        daughter: "audio/questce.wav",
        me: "audio/questce.wav"
      }
    },
    {
      romaji: "que",
      hiragana: "que",
      meaning: "(linking particle)",
      audio: {
        daughter: "audio/que.wav",
        me: "audio/que.wav"
      }
    },
    {
      romaji: "tu",
      hiragana: "tu",
      meaning: "you",
      audio: {
        daughter: "audio/tu.wav",
        me: "audio/tu.wav"
      }
    },
    {
      romaji: "fais",
      hiragana: "fais",
      meaning: "do / doing",
      audio: {
        daughter: "audio/fais.wav",
        me: "audio/fais.wav"
      }
    }
  ]
},












{
  id: "l1-fr-2",
  meaning: "Are you well?",
  level: 1,
  chunks: [
    {
      romaji: "vous",
      hiragana: "vous",
      meaning: "you (polite)",
      audio: {
        daughter: "audio/vous.wav",
        me: "audio/vous.wav"
      }
    },
    {
      romaji: "allez",
      hiragana: "allez",
      meaning: "go / are doing",
      audio: {
        daughter: "audio/allez.wav",
        me: "audio/allez.wav"
      }
    },
    {
      romaji: "vous‑allez",
      hiragana: "vous‑allez",
      meaning: "you are (natural spoken unit)",
      audio: {
        daughter: "audio/vous-allez.wav",
        me: "audio/vous-allez.wav"
      }
    },
    {
      romaji: "bien",
      hiragana: "bien",
      meaning: "well",
      audio: {
        daughter: "audio/bien.wav",
        me: "audio/bien.wav"
      }
    }
  ]
},













{
  id: "l1-fr-3",
  meaning: "Are you well?",
  level: 1,
  chunks: [
    {
      romaji: "tu",
      hiragana: "tu",
      meaning: "you (informal)",
      audio: {
        daughter: "audio/tu.wav",
        me: "audio/tu.wav"
      }
    },
    {
      romaji: "vas",
      hiragana: "vas",
      meaning: "go / are going",
      audio: {
        daughter: "audio/vas.wav",
        me: "audio/vas.wav"
      }
    },
    {
      romaji: "vas‑tu",
      hiragana: "vas‑tu",
      meaning: "are you (natural spoken unit)",
      audio: {
        daughter: "audio/vas-tu.wav",
        me: "audio/vas-tu.wav"
      }
    },
    {
      romaji: "bien",
      hiragana: "bien",
      meaning: "well",
      audio: {
        daughter: "audio/bien.wav",
        me: "audio/bien.wav"
      }
    }
  ]
},









{
  id: "l1-fr-4",
  meaning: "Are we going to the park.",
  level: 1,
  chunks: [
    {
      romaji: "nous",
      hiragana: "nous",
      meaning: "we",
      audio: {
        daughter: "audio/nous.wav",
        me: "audio/nous.wav"
      }
    },
    {
      romaji: "allons",
      hiragana: "allons",
      meaning: "go / are going",
      audio: {
        daughter: "audio/allons.wav",
        me: "audio/allons.wav"
      }
    },
    {
      romaji: "allons‑nous",
      hiragana: "allons‑nous",
      meaning: "are we (natural spoken inversion)",
      audio: {
        daughter: "audio/allons-nous.wav",
        me: "audio/allons-nous.wav"
      }
    },
    {
      romaji: "au",
      hiragana: "au",
      meaning: "to the",
      audio: {
        daughter: "audio/au.wav",
        me: "audio/au.wav"
      }
    },
    {
      romaji: "parc",
      hiragana: "parc",
      meaning: "park",
      audio: {
        daughter: "audio/parc.wav",
        me: "audio/parc.wav"
      }
    }
  ]
},










{
  id: "l1-fr-5",
  meaning: "Are we going to school?",
  level: 1,
  chunks: [
    {
      romaji: "est‑ce",
      hiragana: "est‑ce",
      meaning: "(question prefix part 1)",
      audio: {
        daughter: "audio/est-ce.wav",
        me: "audio/est-ce.wav"
      }
    },
    {
      romaji: "que",
      hiragana: "que",
      meaning: "(question prefix part 2)",
      audio: {
        daughter: "audio/que.wav",
        me: "audio/que.wav"
      }
    },
    {
      romaji: "est‑ce que",
      hiragana: "est‑ce que",
      meaning: "(full question prefix)",
      audio: {
        daughter: "audio/est-ce_que.wav",
        me: "audio/est-ce_que.wav"
      }
    },
    {
      romaji: "nous",
      hiragana: "nous",
      meaning: "we",
      audio: {
        daughter: "audio/nous.wav",
        me: "audio/nous.wav"
      }
    },
    {
      romaji: "allons",
      hiragana: "allons",
      meaning: "go / are going",
      audio: {
        daughter: "audio/allons.wav",
        me: "audio/allons.wav"
      }
    },
    {
      romaji: "allons‑nous",
      hiragana: "allons‑nous",
      meaning: "are we (inverted form)",
      audio: {
        daughter: "audio/allons-nous.wav",
        me: "audio/allons-nous.wav"
      }
    },
    {
      romaji: "à",
      hiragana: "a",
      meaning: "to",
      audio: {
        daughter: "audio/a.wav",
        me: "audio/a.wav"
      }
    },
    {
      romaji: "le",
      hiragana: "le",
      meaning: "the",
      audio: {
        daughter: "audio/le.wav",
        me: "audio/le.wav"
      }
    },
    {
      romaji: "école",
      hiragana: "ecole",
      meaning: "school",
      audio: {
        daughter: "audio/ecole.wav",
        me: "audio/ecole.wav"
      }
    },
    {
      romaji: "à‑l’école",
      hiragana: "a-lecole",
      meaning: "to the school (natural spoken unit)",
      audio: {
        daughter: "audio/a-lecole.wav",
        me: "audio/a-lecole.wav"
      }
    }
  ]
},












{
  id: "l1-fr-6",
  meaning: "I write with a pencil.",
  level: 1,
  chunks: [
    {
      romaji: "je",
      hiragana: "je",
      meaning: "I",
      audio: {
        daughter: "audio/je.wav",
        me: "audio/je.wav"
      }
    },
    {
      romaji: "écris",
      hiragana: "écris",
      meaning: "write",
      audio: {
        daughter: "audio/ecris.wav",
        me: "audio/ecris.wav"
      }
    },
    {
      romaji: "j'écris",
      hiragana: "j'écris",
      meaning: "I write (natural spoken unit)",
      audio: {
        daughter: "audio/jecris.wav",
        me: "audio/jecris.wav"
      }
    },
    {
      romaji: "avec",
      hiragana: "avec",
      meaning: "with",
      audio: {
        daughter: "audio/avec.wav",
        me: "audio/avec.wav"
      }
    },
    {
      romaji: "un",
      hiragana: "un",
      meaning: "a / one",
      audio: {
        daughter: "audio/un.wav",
        me: "audio/un.wav"
      }
    },
    {
      romaji: "crayon",
      hiragana: "crayon",
      meaning: "pencil",
      audio: {
        daughter: "audio/crayon.wav",
        me: "audio/crayon.wav"
      }
    }
  ]
},









{
  id: "l1-fr-7",
  meaning: "What are you writing?",
  level: 1,
  chunks: [
    {
      romaji: "qu’est‑ce",
      hiragana: "qu’est‑ce",
      meaning: "what (part 1)",
      audio: {
        daughter: "audio/questce.wav",
        me: "audio/questce.wav"
      }
    },
    {
      romaji: "que",
      hiragana: "que",
      meaning: "what (part 2)",
      audio: {
        daughter: "audio/que.wav",
        me: "audio/que.wav"
      }
    },
    {
      romaji: "tu",
      hiragana: "tu",
      meaning: "you",
      audio: {
        daughter: "audio/tu.wav",
        me: "audio/tu.wav"
      }
    },
    {
      romaji: "écris",
      hiragana: "écris",
      meaning: "write / writing",
      audio: {
        daughter: "audio/ecris.wav",
        me: "audio/ecris.wav"
      }
    }
  ]
},












{
  id: "l1-fr-8",
  meaning: "What are you writing?",
  level: 1,
  chunks: [
    {
      romaji: "tu",
      hiragana: "tu",
      meaning: "you",
      audio: {
        daughter: "audio/tu.wav",
        me: "audio/tu.wav"
      }
    },
    {
      romaji: "écris",
      hiragana: "écris",
      meaning: "write / writing",
      audio: {
        daughter: "audio/ecris.wav",
        me: "audio/ecris.wav"
      }
    },
    {
      romaji: "quoi",
      hiragana: "quoi",
      meaning: "what",
      audio: {
        daughter: "audio/quoi.wav",
        me: "audio/quoi.wav"
      }
    }
  ]
},












{
  id: "l1-fr-9",
  meaning: "We are going to the park.",
  level: 1,
  chunks: [
    {
      romaji: "on",
      hiragana: "on",
      meaning: "we (spoken)",
      audio: {
        daughter: "audio/on.wav",
        me: "audio/on.wav"
      }
    },
    {
      romaji: "va",
      hiragana: "va",
      meaning: "go / are going",
      audio: {
        daughter: "audio/va.wav",
        me: "audio/va.wav"
      }
    },
    {
      romaji: "au",
      hiragana: "au",
      meaning: "to the",
      audio: {
        daughter: "audio/au.wav",
        me: "audio/au.wav"
      }
    },
    {
      romaji: "parc",
      hiragana: "parc",
      meaning: "park",
      audio: {
        daughter: "audio/parc.wav",
        me: "audio/parc.wav"
      }
    }
  ]
},






















{
  id: "l1-fr-10",
  meaning: "I climb the mountain.",
  level: 1,
  chunks: [
    {
      romaji: "je",
      hiragana: "je",
      meaning: "I",
      audio: {
        daughter: "audio/je.wav",
        me: "audio/je.wav"
      }
    },
    {
      romaji: "monte",
      hiragana: "monte",
      meaning: "climb / go up",
      audio: {
        daughter: "audio/monte.wav",
        me: "audio/monte.wav"
      }
    },
    {
      romaji: "la",
      hiragana: "la",
      meaning: "the",
      audio: {
        daughter: "audio/la.wav",
        me: "audio/la.wav"
      }
    },
    {
      romaji: "montagne",
      hiragana: "montagne",
      meaning: "mountain",
      audio: {
        daughter: "audio/montagne.wav",
        me: "audio/montagne.wav"
      }
    }
  ]
},




















{
  id: "l1-fr-11",
  meaning: "We get on the bus.",
  level: 1,
  chunks: [
    {
      romaji: "on",
      hiragana: "on",
      meaning: "we (spoken)",
      audio: {
        daughter: "audio/on.wav",
        me: "audio/on.wav"
      }
    },
    {
      romaji: "monte",
      hiragana: "monte",
      meaning: "get on / go up",
      audio: {
        daughter: "audio/monte.wav",
        me: "audio/monte.wav"
      }
    },
    {
      romaji: "dans",
      hiragana: "dans",
      meaning: "in / into",
      audio: {
        daughter: "audio/dans.wav",
        me: "audio/dans.wav"
      }
    },
    {
      romaji: "le",
      hiragana: "le",
      meaning: "the",
      audio: {
        daughter: "audio/le.wav",
        me: "audio/le.wav"
      }
    },
    {
      romaji: "bus",
      hiragana: "bus",
      meaning: "bus",
      audio: {
        daughter: "audio/bus.wav",
        me: "audio/bus.wav"
      }
    }
  ]
},










{
  id: "l1-fr-12",
  meaning: "Put on your clothes.",
  level: 1,
  chunks: [
    {
      romaji: "mets",
      hiragana: "mets",
      meaning: "put on",
      audio: {
        daughter: "audio/mets.wav",
        me: "audio/mets.wav"
      }
    },
    {
      romaji: "tes",
      hiragana: "tes",
      meaning: "your",
      audio: {
        daughter: "audio/tes.wav",
        me: "audio/tes.wav",
        combo: "audio/mets-tes.wav"
      }
    },
    {
      romaji: "vêtements",
      hiragana: "vetements",
      meaning: "clothes",
      audio: {
        daughter: "audio/vetements.wav",
        me: "audio/vetements.wav"
      }
    }
  ]
},














{
  id: "l1-fr-13",
  meaning: "I will put on a shirt.",
  level: 1,
  chunks: [
    {
      romaji: "je",
      hiragana: "je",
      meaning: "I",
      audio: {
        daughter: "audio/je.wav",
        me: "audio/je.wav"
      }
    },
    {
      romaji: "vais",
      hiragana: "vais",
      meaning: "am going to / will",
      audio: {
        daughter: "audio/vais.wav",
        me: "audio/vais.wav"
      }
    },
    {
      romaji: "mettre",
      hiragana: "mettre",
      meaning: "put on",
      audio: {
        daughter: "audio/mettre.wav",
        me: "audio/mettre.wav"
      }
    },
    {
      romaji: "une",
      hiragana: "une",
      meaning: "a",
      audio: {
        daughter: "audio/une.wav",
        me: "audio/une.wav"
      }
    },
    {
      romaji: "chemise",
      hiragana: "chemise",
      meaning: "shirt",
      audio: {
        daughter: "audio/chemise.wav",
        me: "audio/chemise.wav"
      }
    }
  ]
},








{
  id: "l1-fr-14",
  meaning: "I put on pants.",
  level: 1,
  chunks: [
    {
      romaji: "je",
      hiragana: "je",
      meaning: "I",
      audio: {
        daughter: "audio/je.wav",
        me: "audio/je.wav"
      }
    },
    {
      romaji: "mets",
      hiragana: "mets",
      meaning: "put on",
      audio: {
        daughter: "audio/mets.wav",
        me: "audio/mets.wav"
      }
    },
    {
      romaji: "un",
      hiragana: "un",
      meaning: "a (masculine)",
      audio: {
        daughter: "audio/un.wav",
        me: "audio/un.wav"
      }
    },
    {
      romaji: "pantalon",
      hiragana: "pantalon",
      meaning: "pants",
      audio: {
        daughter: "audio/pantalon.wav",
        me: "audio/pantalon.wav"
      }
    }
  ]
},












{
  id: "l1-fr-15",
  meaning: "Do your best.",
  level: 1,
  chunks: [
    {
      romaji: "fais",
      hiragana: "fais",
      meaning: "do",
      audio: {
        daughter: "audio/fais.wav",
        me: "audio/fais.wav"
      }
    },
    {
      romaji: "de",
      hiragana: "de",
      meaning: "of",
      audio: {
        daughter: "audio/de.wav",
        me: "audio/de.wav"
      }
    },
    {
      romaji: "ton",
      hiragana: "ton",
      meaning: "your",
      audio: {
        daughter: "audio/ton.wav",
        me: "audio/ton.wav"
      }
    },
    {
      romaji: "mieux",
      hiragana: "mieux",
      meaning: "best",
      audio: {
        daughter: "audio/mieux.wav",
        me: "audio/mieux.wav"
      }
    }
  ]
},
















{
  id: "l1-fr-16",
  meaning: "Where are you from.",
  level: 1,
  chunks: [
    {
      romaji: "de",
      hiragana: "de",
      meaning: "from",
      audio: {
        daughter: "audio/de.wav",
        me: "audio/de.wav"
      }
    },
    {
      romaji: "où",
      hiragana: "ou",
      meaning: "where",
      audio: {
        daughter: "audio/ou.wav",
        me: "audio/ou.wav"
      }
    },
    {
      romaji: "d'où",
      hiragana: "d'où",
      meaning: "from where (natural spoken unit)",
      audio: {
        daughter: "audio/d-ou.wav",
        me: "audio/d-ou.wav"
      }
    },
    {
      romaji: "viens",
      hiragana: "viens",
      meaning: "come",
      audio: {
        daughter: "audio/viens.wav",
        me: "audio/viens.wav"
      }
    },
    {
      romaji: "tu",
      hiragana: "tu",
      meaning: "you",
      audio: {
        daughter: "audio/tu.wav",
        me: "audio/tu.wav"
      }
    },
    {
      romaji: "viens-tu",
      hiragana: "viens-tu",
      meaning: "come you (natural spoken unit)",
      audio: {
        daughter: "audio/viens-tu.wav",
        me: "audio/viens-tu.wav"
      }
    }
  ]
},

















{
  id: "l1-fr-17",
  meaning: "I am from the United States.",
  level: 1,
  chunks: [
    {
      romaji: "je",
      hiragana: "je",
      meaning: "I",
      audio: {
        daughter: "audio/je.wav",
        me: "audio/je.wav"
      }
    },
    {
      romaji: "viens",
      hiragana: "viens",
      meaning: "come / am coming",
      audio: {
        daughter: "audio/viens.wav",
        me: "audio/viens.wav"
      }
    },
    
    {
      romaji: "des",
      hiragana: "des",
      meaning: "from (plural)",
      audio: {
        daughter: "audio/des.wav",
        me: "audio/des.wav"
      }
    },
    {
      romaji: "états",
      hiragana: "etats",
      meaning: "states",
      audio: {
        daughter: "audio/etats.wav",
        me: "audio/etats.wav"
      }
    },
    {
      romaji: "unis",
      hiragana: "unis",
      meaning: "united",
      audio: {
        daughter: "audio/unis.wav",
        me: "audio/unis.wav"
      }
    },
    
    {
      romaji: "des-états-unis",
      hiragana: "des-etats-unis",
      meaning: "from the United States (natural spoken unit)",
      audio: {
        daughter: "audio/des-etats-unis.wav",
        me: "audio/des-etats-unis.wav"
      }
    }
  ]
},

















{
  id: "l1-fr-18",
  meaning: "Where do you live.",
  level: 1,
  chunks: [
    {
      romaji: "où",
      hiragana: "ou",
      meaning: "where",
      audio: {
        daughter: "audio/ou.wav",
        me: "audio/ou.wav"
      }
    },
    {
      romaji: "habites",
      hiragana: "habites",
      meaning: "live",
      audio: {
        daughter: "audio/habites.wav",
        me: "audio/habites.wav"
      }
    },
    {
      romaji: "tu",
      hiragana: "tu",
      meaning: "you",
      audio: {
        daughter: "audio/tu.wav",
        me: "audio/tu.wav"
      }
    },
    {
      romaji: "habites-tu",
      hiragana: "habites-tu",
      meaning: "live you (natural spoken unit)",
      audio: {
        daughter: "audio/habites-tu.wav",
        me: "audio/habites-tu.wav"
      }
    }
    
  ]
},











{
  id: "l1-fr-19",
  meaning: "Where do you live.",
  level: 1,
  chunks: [
    {
      romaji: "où",
      hiragana: "ou",
      meaning: "where",
      audio: {
        daughter: "audio/ou.wav",
        me: "audio/ou.wav"
      }
    },
    {
      romaji: "habitez",
      hiragana: "habitez",
      meaning: "live",
      audio: {
        daughter: "audio/habitez.wav",
        me: "audio/habitez.wav"
      }
    },
    {
      romaji: "vous",
      hiragana: "vous",
      meaning: "you (formal / plural)",
      audio: {
        daughter: "audio/vous.wav",
        me: "audio/vous.wav"
      }
    },
    {
      romaji: "habitez-vous",
      hiragana: "habitez-vous",
      meaning: "live you (natural spoken unit)",
      audio: {
        daughter: "audio/habitez-vous.wav",
        me: "audio/habitez-vous.wav"
      }
    }
  ]
},














{
  id: "l1-fr-20",
  meaning: "I want to live in France.",
  level: 1,
  chunks: [
    {
      romaji: "je",
      hiragana: "je",
      meaning: "I",
      audio: {
        daughter: "audio/je.wav",
        me: "audio/je.wav"
      }
    },
    {
      romaji: "veux",
      hiragana: "veux",
      meaning: "want",
      audio: {
        daughter: "audio/veux.wav",
        me: "audio/veux.wav"
      }
    },
    
    {
      romaji: "vivre",
      hiragana: "vivre",
      meaning: "to live",
      audio: {
        daughter: "audio/vivre.wav",
        me: "audio/vivre.wav"
      }
    },
    {
      romaji: "en",
      hiragana: "en",
      meaning: "in",
      audio: {
        daughter: "audio/en.wav",
        me: "audio/en.wav"
      }
    },
    {
      romaji: "france",
      hiragana: "france",
      meaning: "France",
      audio: {
        daughter: "audio/france.wav",
        me: "audio/france.wav"
      }
    }
   
  ]
},











{
  id: "l1-fr-21",
  meaning: "When did you come?",
  level: 1,

  chunks: [
    {
      romaji: "quand",
      hiragana: "quand",
      meaning: "when",
      audio: {
        daughter: "audio/quand.wav",
        me: "audio/quand.wav"
      }
    },
    {
      romaji: "es",
      hiragana: "es",
      meaning: "are (you)",
      audio: {
        daughter: "audio/es.wav",
        me: "audio/es.wav"
      }
    },
    {
      romaji: "tu",
      hiragana: "tu",
      meaning: "you",
      audio: {
        daughter: "audio/tu.wav",
        me: "audio/tu.wav"
      }
    },
    {
      romaji: "venu",
      hiragana: "venu",
      meaning: "come (past participle)",
      audio: {
        daughter: "audio/venu.wav",
        me: "audio/venu.wav"
      }
    }
  ]
},













{
  id: "l1-fr-22",
  meaning: "Take care.",
  level: 1,

  chunks: [
    {
      romaji: "prends",
      hiragana: "prends",
      meaning: "take",
      audio: {
        daughter: "audio/prends.wav",
        me: "audio/prends.wav"
      }
    },
    {
      romaji: "soin",
      hiragana: "soin",
      meaning: "care",
      audio: {
        daughter: "audio/soin.wav",
        me: "audio/soin.wav"
      }
    },
    {
      romaji: "de",
      hiragana: "de",
      meaning: "of",
      audio: {
        daughter: "audio/de.wav",
        me: "audio/de.wav"
      }
    },
    {
      romaji: "toi",
      hiragana: "toi",
      meaning: "you / yourself",
      audio: {
        daughter: "audio/toi.wav",
        me: "audio/toi.wav"
      }
    }
  ]
},
















{
  id: "l1-fr-23",
  meaning: "How do you read this?",
  level: 1,

  chunks: [
    {
      romaji: "comment",
      hiragana: "comment",
      meaning: "how",
      audio: {
        daughter: "audio/comment.wav",
        me: "audio/comment.wav"
      }
    },
    {
      romaji: "tu",
      hiragana: "tu",
      meaning: "you (informal)",
      audio: {
        daughter: "audio/tu.wav",
        me: "audio/tu.wav"
      }
    },
    {
      romaji: "lis",
      hiragana: "lis",
      meaning: "read",
      audio: {
        daughter: "audio/lis.wav",
        me: "audio/lis.wav"
      }
    },
    {
      romaji: "ça",
      hiragana: "ça",
      meaning: "this",
      audio: {
        daughter: "audio/ca.wav",
        me: "audio/ca.wav"
      }
    }
  ]
},












{
  id: "l1-fr-24",
  meaning: "to touch the window",
  level: 1,

  chunks: [
    {
      romaji: "toucher",
      hiragana: "toucher",
      meaning: "to touch",
      audio: {
        daughter: "audio/toucher.wav",
        me: "audio/toucher.wav"
      }
    },
    {
      romaji: "la",
      hiragana: "la",
      meaning: "the",
      audio: {
        daughter: "audio/la.wav",
        me: "audio/la.wav"
      }
    },
    {
      romaji: "fenêtre",
      hiragana: "fenetre",
      meaning: "window",
      audio: {
        daughter: "audio/fenetre.wav",
        me: "audio/fenetre.wav"
      }
    }
  ]
},
















{
  id: "l1-fr-25",
  meaning: "I touch the wall",
  level: 1,

  chunks: [
    {
      romaji: "je",
      hiragana: "je",
      meaning: "I",
      audio: {
        daughter: "audio/je.wav",
        me: "audio/je.wav"
      }
    },
    {
      romaji: "touche",
      hiragana: "touche",
      meaning: "touch",
      audio: {
        daughter: "audio/touche.wav",
        me: "audio/touche.wav"
      }
    },
    {
      romaji: "le",
      hiragana: "le",
      meaning: "the",
      audio: {
        daughter: "audio/le.wav",
        me: "audio/le.wav"
      }
    },
    {
      romaji: "mur",
      hiragana: "mur",
      meaning: "wall",
      audio: {
        daughter: "audio/mur.wav",
        me: "audio/mur.wav"
      }
    }
  ]
},










{
  id: "l1-fr-26",
  meaning: "don't touch the floor",
  level: 1,

  chunks: [
    {
      romaji: "ne",
      hiragana: "ne",
      meaning: "not",
      audio: {
        daughter: "audio/ne.wav",
        me: "audio/ne.wav"
      }
    },
    {
      romaji: "touche",
      hiragana: "touche",
      meaning: "touch",
      audio: {
        daughter: "audio/touche.wav",
        me: "audio/touche.wav"
      }
    },
    {
      romaji: "pas",
      hiragana: "pas",
      meaning: "not",
      audio: {
        daughter: "audio/pas.wav",
        me: "audio/pas.wav"
      }
    },
    {
      romaji: "le",
      hiragana: "le",
      meaning: "the",
      audio: {
        daughter: "audio/le.wav",
        me: "audio/le.wav"
      }
    },
    {
      romaji: "sol",
      hiragana: "sol",
      meaning: "floor",
      audio: {
        daughter: "audio/sol.wav",
        me: "audio/sol.wav"
      }
    }
  ]
},
















{
id: "l1-fr-27",
meaning: "to get dirty",
level: 1,
chunks: [
{
romaji: "se",
hiragana: "se",
meaning: "oneself",
audio: {
daughter: "audio/se.wav",
me: "audio/se.wav"
}
},
{
romaji: "tacher",
hiragana: "tacher",
meaning: "stain",
audio: {
daughter: "audio/tacher.wav",
me: "audio/tacher.wav"
}
},
{
romaji: "se_tacher",
hiragana: "se_tacher",
meaning: "to get dirty / to stain oneself",
audio: {
daughter: "audio/se_tacher.wav",
me: "audio/se_tacher.wav"
}
}
]
},















{
  id: "l1-fr-28",
  meaning: "to make a mess",
  level: 1,

  chunks: [
    {
      romaji: "mettre",
      hiragana: "mettre",
      meaning: "to put",
      audio: {
        daughter: "audio/mettre.wav",
        me: "audio/mettre.wav"
      }
    },
    {
      romaji: "le",
      hiragana: "le",
      meaning: "the",
      audio: {
        daughter: "audio/le.wav",
        me: "audio/le.wav"
      }
    },
    {
      romaji: "mettre_le",
      hiragana: "mettre_le",
      meaning: "to put the",
      audio: {
        daughter: "audio/mettre_le.wav",
        me: "audio/mettre_le.wav"
      }
    },
    {
      romaji: "désordre",
      hiragana: "desordre",
      meaning: "mess / disorder",
      audio: {
        daughter: "audio/desordre.wav",
        me: "audio/desordre.wav"
      }
    }
  ]
},









{
  id: "l1-fr-29",
  meaning: "sit down on the chair",
  level: 1,

  chunks: [
    {
      romaji: "asseyez",
      hiragana: "asseyez",
      meaning: "sit (imperative)",
      audio: {
        daughter: "audio/asseyez.wav",
        me: "audio/asseyez.wav"
      }
    },
    {
      romaji: "vous",
      hiragana: "vous",
      meaning: "you (formal)",
      audio: {
        daughter: "audio/vous.wav",
        me: "audio/vous.wav"
      }
    },
    {
      romaji: "asseyez-vous",
      hiragana: "asseyez-vous",
      meaning: "sit down",
      audio: {
        daughter: "audio/asseyez-vous.wav",
        me: "audio/asseyez-vous.wav"
      }
    },
    {
      romaji: "sur",
      hiragana: "sur",
      meaning: "on",
      audio: {
        daughter: "audio/sur.wav",
        me: "audio/sur.wav"
      }
    },
    {
      romaji: "la",
      hiragana: "la",
      meaning: "the (feminine)",
      audio: {
        daughter: "audio/la.wav",
        me: "audio/la.wav"
      }
    },
    {
      romaji: "chaise",
      hiragana: "chaise",
      meaning: "chair",
      audio: {
        daughter: "audio/chaise.wav",
        me: "audio/chaise.wav"
      }
    }
  ]
},











{
  id: "l1-fr-30",
  meaning: "I sit down on the chair",
  level: 1,

  chunks: [
    {
      romaji: "je",
      hiragana: "je",
      meaning: "I",
      audio: {
        daughter: "audio/je.wav",
        me: "audio/je.wav"
      }
    },
    {
      romaji: "me",
      hiragana: "me",
      meaning: "myself",
      audio: {
        daughter: "audio/me.wav",
        me: "audio/me.wav"
      }
    },
    {
      romaji: "assois",
      hiragana: "assois",
      meaning: "sit",
      audio: {
        daughter: "audio/assois.wav",
        me: "audio/assois.wav"
      }
    },
    {
      romaji: "m_assois",
      hiragana: "m_assois",
      meaning: "I sit (merged form)",
      audio: {
        daughter: "audio/m_assois.wav",
        me: "audio/m_assois.wav"
      }
    },
    {
      romaji: "sur",
      hiragana: "sur",
      meaning: "on",
      audio: {
        daughter: "audio/sur.wav",
        me: "audio/sur.wav"
      }
    },
    {
      romaji: "la",
      hiragana: "la",
      meaning: "the (feminine)",
      audio: {
        daughter: "audio/la.wav",
        me: "audio/la.wav"
      }
    },
    {
      romaji: "chaise",
      hiragana: "chaise",
      meaning: "chair",
      audio: {
        daughter: "audio/chaise.wav",
        me: "audio/chaise.wav"
      }
    }
  ]
},











{
  id: "l1-fr-31",
  meaning: "you look through the window",
  level: 1,

  chunks: [
    {
      romaji: "tu",
      hiragana: "tu",
      meaning: "you (informal)",
      audio: {
        daughter: "audio/tu.wav",
        me: "audio/tu.wav"
      }
    },
    {
      romaji: "regardes",
      hiragana: "regardes",
      meaning: "look",
      audio: {
        daughter: "audio/regardes.wav",
        me: "audio/regardes.wav"
      }
    },
    {
      romaji: "par",
      hiragana: "par",
      meaning: "through / by",
      audio: {
        daughter: "audio/par.wav",
        me: "audio/par.wav"
      }
    },
    {
      romaji: "la",
      hiragana: "la",
      meaning: "the (feminine)",
      audio: {
        daughter: "audio/la.wav",
        me: "audio/la.wav"
      }
    },
    {
      romaji: "fenetre",
      hiragana: "fenetre",
      meaning: "window",
      audio: {
        daughter: "audio/fenetre.wav",
        me: "audio/fenetre.wav"
      }
    }
  ]
},













{
  id: "l1-fr-32",
  meaning: "I watch the television",
  level: 1,

  chunks: [
    {
      romaji: "je",
      hiragana: "je",
      meaning: "I",
      audio: {
        daughter: "audio/je.wav",
        me: "audio/je.wav"
      }
    },
    {
      romaji: "regarde",
      hiragana: "regarde",
      meaning: "watch",
      audio: {
        daughter: "audio/regarde.wav",
        me: "audio/regarde.wav"
      }
    },
    {
      romaji: "la",
      hiragana: "la",
      meaning: "the (feminine)",
      audio: {
        daughter: "audio/la.wav",
        me: "audio/la.wav"
      }
    },
    {
      romaji: "television",
      hiragana: "television",
      meaning: "television",
      audio: {
        daughter: "audio/television.wav",
        me: "audio/television.wav"
      }
    }
  ]
},











{
  id: "l1-fr-33",
  meaning: "the floor is covered with snow",
  level: 1,

  chunks: [
    {
      romaji: "le",
      hiragana: "le",
      meaning: "the (masculine)",
      audio: {
        daughter: "audio/le.wav",
        me: "audio/le.wav"
      }
    },
    {
      romaji: "sol",
      hiragana: "sol",
      meaning: "floor / ground",
      audio: {
        daughter: "audio/sol.wav",
        me: "audio/sol.wav"
      }
    },
    {
      romaji: "est",
      hiragana: "est",
      meaning: "is",
      audio: {
        daughter: "audio/est.wav",
        me: "audio/est.wav"
      }
    },
    {
      romaji: "couvert",
      hiragana: "couvert",
      meaning: "covered",
      audio: {
        daughter: "audio/couvert.wav",
        me: "audio/couvert.wav"
      }
    },
    {
      romaji: "de",
      hiragana: "de",
      meaning: "with / of",
      audio: {
        daughter: "audio/de.wav",
        me: "audio/de.wav"
      }
    },
    {
      romaji: "neige",
      hiragana: "neige",
      meaning: "snow",
      audio: {
        daughter: "audio/neige.wav",
        me: "audio/neige.wav"
      }
    }
  ]
},












{
  id: "l1-fr-34",
  meaning: "the support is unstable",
  level: 1,

  chunks: [
    {
      romaji: "le",
      hiragana: "le",
      meaning: "the (masculine)",
      audio: {
        daughter: "audio/le.wav",
        me: "audio/le.wav"
      }
    },
    {
      romaji: "appui",
      hiragana: "appui",
      meaning: "support",
      audio: {
        daughter: "audio/appui.wav",
        me: "audio/appui.wav"
      }
    },
    {
      romaji: "l'appui",
      hiragana: "l'appui",
      meaning: "the support (natural spoken unit)",
      audio: {
        daughter: "audio/lappui.wav",
        me: "audio/lappui.wav"
      }
    },
    {
      romaji: "est",
      hiragana: "est",
      meaning: "is",
      audio: {
        daughter: "audio/est.wav",
        me: "audio/est.wav"
      }
    },
    {
      romaji: "instable",
      hiragana: "instable",
      meaning: "unstable",
      audio: {
        daughter: "audio/instable.wav",
        me: "audio/instable.wav"
      }
    }
  ]
},












{
  id: "l1-fr-35",
  meaning: "the shirt is inside-out",
  level: 1,

  chunks: [
    {
      romaji: "le",
      hiragana: "le",
      meaning: "the",
      audio: {
        daughter: "audio/le.wav",
        me: "audio/le.wav"
      }
    },
    {
      romaji: "chemise",
      hiragana: "chemise",
      meaning: "shirt",
      audio: {
        daughter: "audio/chemise.wav",
        me: "audio/chemise.wav"
      }
    },
    {
      romaji: "est",
      hiragana: "est",
      meaning: "is",
      audio: {
        daughter: "audio/est.wav",
        me: "audio/est.wav"
      }
    },
    {
      romaji: "à",
      hiragana: "a",
      meaning: "at / in",
      audio: {
        daughter: "audio/a.wav",
        me: "audio/a.wav"
      }
    },
    {
      romaji: "le",
      hiragana: "le",
      meaning: "the",
      audio: {
        daughter: "audio/le.wav",
        me: "audio/le.wav"
      }
    },
    {
      romaji: "envers",
      hiragana: "envers",
      meaning: "inside-out",
      audio: {
        daughter: "audio/envers.wav",
        me: "audio/envers.wav"
      }
    },

    /* natural spoken unit: chemise est à l'envers */
    {
      romaji: "chemise-est-à-l'envers",
      hiragana: "chemise-est-a-lenvers",
      meaning: "shirt is inside-out (natural spoken unit)",
      audio: {
        daughter: "audio/chemise-est-a-lenvers.wav",
        me: "audio/chemise-est-a-lenvers.wav"
      }
    },

    /* full merged unit: le chemise est à l'envers */
    {
      romaji: "le-chemise-est-à-l'envers",
      hiragana: "le-chemise-est-a-lenvers",
      meaning: "the shirt is inside-out (full merged unit)",
      audio: {
        daughter: "audio/le-chemise-est-a-lenvers.wav",
        me: "audio/le-chemise-est-a-lenvers.wav"
      }
    }
  ]
},













{
  id: "l1-fr-36",
  meaning: "Where are you going?",
  level: 1,

  chunks: [
    {
      romaji: "où",
      hiragana: "ou",
      meaning: "where",
      audio: {
        daughter: "audio/ou.wav",
        me: "audio/ou.wav"
      }
    },
    {
      romaji: "vas",
      hiragana: "vas",
      meaning: "go",
      audio: {
        daughter: "audio/vas.wav",
        me: "audio/vas.wav"
      }
    },
    {
      romaji: "tu",
      hiragana: "tu",
      meaning: "you",
      audio: {
        daughter: "audio/tu.wav",
        me: "audio/tu.wav"
      }
    },

    /* natural spoken unit: vas-tu */
    {
      romaji: "vas-tu",
      hiragana: "vas-tu",
      meaning: "go you (natural spoken unit)",
      audio: {
        daughter: "audio/vas-tu.wav",
        me: "audio/vas-tu.wav"
      }
    }
  ]
},












{
  id: "l1-fr-37",
  meaning: "Where are you going? (formal / plural)",
  level: 1,

  chunks: [
    {
      romaji: "où",
      hiragana: "ou",
      meaning: "where",
      audio: {
        daughter: "audio/ou.wav",
        me: "audio/ou.wav"
      }
    },
    {
      romaji: "allez",
      hiragana: "allez",
      meaning: "go (formal/plural)",
      audio: {
        daughter: "audio/allez.wav",
        me: "audio/allez.wav"
      }
    },
    {
      romaji: "vous",
      hiragana: "vous",
      meaning: "you (formal/plural)",
      audio: {
        daughter: "audio/vous.wav",
        me: "audio/vous.wav"
      }
    },

    /* natural spoken unit: allez-vous */
    {
      romaji: "allez-vous",
      hiragana: "allez-vous",
      meaning: "go you (natural spoken unit)",
      audio: {
        daughter: "audio/allez-vous.wav",
        me: "audio/allez-vous.wav"
      }
    }
  ]
},












{
  id: "l1-fr-38",
  meaning: "Are you cold?",
  level: 1,

  chunks: [
    {
      romaji: "tu",
      hiragana: "tu",
      meaning: "you",
      audio: {
        daughter: "audio/tu.wav",
        me: "audio/tu.wav"
      }
    },
    {
      romaji: "as",
      hiragana: "as",
      meaning: "have",
      audio: {
        daughter: "audio/as.wav",
        me: "audio/as.wav"
      }
    },
    {
      romaji: "as-tu",
      hiragana: "as-tu",
      meaning: "have you (natural spoken unit)",
      audio: {
        daughter: "audio/as-tu.wav",
        me: "audio/as-tu.wav"
      }
    },
    {
      romaji: "froid",
      hiragana: "froid",
      meaning: "cold",
      audio: {
        daughter: "audio/froid.wav",
        me: "audio/froid.wav"
      }
    }
  ]
},
















{
  id: "l1-fr-39",
  meaning: "Nice to meet you",
  level: 1,

  chunks: [
    {
      romaji: "ravi",
      hiragana: "ravi",
      meaning: "delighted",
      audio: {
        daughter: "audio/ravi.wav",
        me: "audio/ravi.wav"
      }
    },
    {
      romaji: "de",
      hiragana: "de",
      meaning: "to",
      audio: {
        daughter: "audio/de.wav",
        me: "audio/de.wav"
      }
    },
    {
      romaji: "vous",
      hiragana: "vous",
      meaning: "you (polite)",
      audio: {
        daughter: "audio/vous.wav",
        me: "audio/vous.wav"
      }
    },
    {
      romaji: "rencontrer",
      hiragana: "rencontrer",
      meaning: "meet",
      audio: {
        daughter: "audio/rencontrer.wav",
        me: "audio/rencontrer.wav"
      
      }
    }
  ]
},














{
  id: "l1-fr-40",
  meaning: "I am happy",
  level: 1,

  chunks: [
    {
      romaji: "je",
      hiragana: "je",
      meaning: "I",
      audio: {
        daughter: "audio/je.wav",
        me: "audio/je.wav"
      }
    },
    {
      romaji: "suis",
      hiragana: "suis",
      meaning: "am",
      audio: {
        daughter: "audio/suis.wav",
        me: "audio/suis.wav"
      }
    },
    {
      romaji: "heureux",
      hiragana: "heureux",
      meaning: "happy",
      audio: {
        daughter: "audio/heureux.wav",
        me: "audio/heureux.wav"
      }
    },

    {
      romaji: "je-suis-heureux",
      hiragana: "je-suis-heureux",
      meaning: "I am happy (natural spoken unit)",
      audio: {
        daughter: "audio/je-suis-heureux.wav",
        me: "audio/je-suis-heureux.wav"
      }
    }
  ]
},















{
  id: "l1-fr-41",
  meaning: "Are you happy?",
  level: 1,

  chunks: [
    {
      romaji: "tu",
      hiragana: "tu",
      meaning: "you (informal)",
      audio: {
        daughter: "audio/tu.wav",
        me: "audio/tu.wav"
      }
    },
    {
      romaji: "es",
      hiragana: "es",
      meaning: "are",
      audio: {
        daughter: "audio/es.wav",
        me: "audio/es.wav"
      }
    },

    {
      romaji: "es-tu",
      hiragana: "es-tu",
      meaning: "are you (inversion form)",
      audio: {
        daughter: "audio/es-tu.wav",
        me: "audio/es-tu.wav"
      }
    },

    {
      romaji: "heureux",
      hiragana: "heureux",
      meaning: "happy (masculine)",
      audio: {
        daughter: "audio/heureux.wav",
        me: "audio/heureux.wav"
      }
    }
  ]
},











{
  id: "l1-fr-42",
  meaning: "Are you sad?",
  level: 1,

  chunks: [
    {
      romaji: "vous",
      hiragana: "vous",
      meaning: "you (formal / plural)",
      audio: {
        daughter: "audio/vous.wav",
        me: "audio/vous.wav"
      }
    },
    {
      romaji: "êtes",
      hiragana: "êtes",
      meaning: "are",
      audio: {
        daughter: "audio/etes.wav",
        me: "audio/etes.wav"
      }
    },

    {
      romaji: "êtes-vous",
      hiragana: "êtes-vous",
      meaning: "are you (formal inversion)",
      audio: {
        daughter: "audio/etes-vous.wav",
        me: "audio/etes-vous.wav"
      }
    },

    {
      romaji: "triste",
      hiragana: "triste",
      meaning: "sad",
      audio: {
        daughter: "audio/triste.wav",
        me: "audio/triste.wav"
      }
    }
  ]
},










{
  id: "l1-fr-43",
  meaning: "I am eating something",
  level: 1,

  chunks: [
    {
      romaji: "je",
      hiragana: "je",
      meaning: "I",
      audio: {
        daughter: "audio/je.wav",
        me: "audio/je.wav"
      }
    },

    {
      romaji: "mange",
      hiragana: "mange",
      meaning: "eat / am eating",
      audio: {
        daughter: "audio/mange.wav",
        me: "audio/mange.wav"
      }
    },

    {
      romaji: "quelque",
      hiragana: "quelque",
      meaning: "some / a bit of",
      audio: {
        daughter: "audio/quelque.wav",
        me: "audio/quelque.wav"
      }
    },

    {
      romaji: "chose",
      hiragana: "chose",
      meaning: "thing",
      audio: {
        daughter: "audio/chose.wav",
        me: "audio/chose.wav"
      }
    },

    {
      romaji: "je-mange-quelque-chose",
      hiragana: "je-mange-quelque-chose",
      meaning: "I am eating something",
      audio: {
        daughter: "audio/sentence1.wav",
        me: "audio/sentence1.wav"
      }
    }
  ]
},












{
  id: "l1-fr-44",
  meaning: "who drinks the milk",
  level: 1,

  chunks: [
    {
      romaji: "qui",
      hiragana: "qui",
      meaning: "who",
      audio: {
        daughter: "audio/qui.wav",
        me: "audio/qui.wav"
      }
    },

    {
      romaji: "boit",
      hiragana: "boit",
      meaning: "drinks / is drinking",
      audio: {
        daughter: "audio/boit.wav",
        me: "audio/boit.wav"
      }
    },

    {
      romaji: "le",
      hiragana: "le",
      meaning: "the (masculine)",
      audio: {
        daughter: "audio/le.wav",
        me: "audio/le.wav"
      }
    },

    {
      romaji: "lait",
      hiragana: "lait",
      meaning: "milk",
      audio: {
        daughter: "audio/lait.wav",
        me: "audio/lait.wav"
      }
    },

    {
      romaji: "qui-boit-le-lait",
      hiragana: "qui-boit-le-lait",
      meaning: "who drinks the milk",
      audio: {
        daughter: "audio/sentence2.wav",
        me: "audio/sentence2.wav"
      }
    }
  ]
},













{
  id: "l1-fr-45",
  meaning: "how to say it",
  level: 1,

  chunks: [
    {
      romaji: "comment",
      hiragana: "comment",
      meaning: "how",
      audio: {
        daughter: "audio/comment.wav",
        me: "audio/comment.wav"
      }
    },

    {
      romaji: "le",
      hiragana: "le",
      meaning: "it",
      audio: {
        daughter: "audio/le.wav",
        me: "audio/le.wav"
      }
    },

    {
      romaji: "dire",
      hiragana: "dire",
      meaning: "to say",
      audio: {
        daughter: "audio/dire.wav",
        me: "audio/dire.wav"
      }
    },

    {
      romaji: "comment-le-dire",
      hiragana: "comment-le-dire",
      meaning: "how to say it",
      audio: {
        daughter: "audio/sentence3.wav",
        me: "audio/sentence3.wav"
      }
    }
  ]
},











{
  id: "l1-fr-46",
  meaning: "what is your name?",
  level: 1,

  chunks: [
    {
      romaji: "comment",
      hiragana: "comment",
      meaning: "how / what",
      audio: {
        daughter: "audio/comment.wav",
        me: "audio/comment.wav"
      }
    },

    {
      romaji: "vous",
      hiragana: "vous",
      meaning: "you (formal)",
      audio: {
        daughter: "audio/vous.wav",
        me: "audio/vous.wav"
      }
    },

    {
      romaji: "appelez",
      hiragana: "appelez",
      meaning: "call",
      audio: {
        daughter: "audio/appelez.wav",
        me: "audio/appelez.wav"
      }
    },

    {
      romaji: "comment-vous-appelez",
      hiragana: "comment-vous-appelez",
      meaning: "what is your name?",
      audio: {
        daughter: "audio/sentence4.wav",
        me: "audio/sentence4.wav"
      }
    }
  ]
},



















{
  id: "l1-fr-47",
  meaning: "do you like to dance?",
  level: 1,

  chunks: [
    {
      romaji: "tu",
      hiragana: "tu",
      meaning: "you (informal)",
      audio: {
        daughter: "audio/tu.wav",
        me: "audio/tu.wav"
      }
    },

    {
      romaji: "aimes",
      hiragana: "aimes",
      meaning: "like",
      audio: {
        daughter: "audio/aimes.wav",
        me: "audio/aimes.wav"
      }
    },

    {
      romaji: "aimes-tu",
      hiragana: "aimes-tu",
      meaning: "do you like?",
      audio: {
        daughter: "audio/aimes-tu.wav",
        me: "audio/aimes-tu.wav"
      }
    },

    {
      romaji: "danser",
      hiragana: "danser",
      meaning: "to dance",
      audio: {
        daughter: "audio/danser.wav",
        me: "audio/danser.wav"
      }
    },

    {
      romaji: "aimes-tu-danser",
      hiragana: "aimes-tu-danser",
      meaning: "do you like to dance?",
      audio: {
        daughter: "audio/sentence5.wav",
        me: "audio/sentence5.wav"
      }
    }
  ]
},















{
  id: "l1-fr-48",
  meaning: "we like the color black",
  level: 1,

  chunks: [
    {
      romaji: "nous",
      hiragana: "nous",
      meaning: "we",
      audio: {
        daughter: "audio/nous.wav",
        me: "audio/nous.wav"
      }
    },

    {
      romaji: "aimons",
      hiragana: "aimons",
      meaning: "like (we)",
      audio: {
        daughter: "audio/aimouns.wav",
        me: "audio/aimouns.wav"
      }
    },

    {
      romaji: "nous-aimons",
      hiragana: "nous-aimons",
      meaning: "we like",
      audio: {
        daughter: "audio/nous-aimouns.wav",
        me: "audio/nous-aimouns.wav"
      }
    },

    {
      romaji: "la",
      hiragana: "la",
      meaning: "the (feminine)",
      audio: {
        daughter: "audio/la.wav",
        me: "audio/la.wav"
      }
    },

    {
      romaji: "couleur",
      hiragana: "couleur",
      meaning: "color",
      audio: {
        daughter: "audio/couleur.wav",
        me: "audio/couleur.wav"
      }
    },

    {
      romaji: "noire",
      hiragana: "noire",
      meaning: "black (feminine)",
      audio: {
        daughter: "audio/noire.wav",
        me: "audio/noire.wav"
      }
    },

    {
      romaji: "nous-aimons-la-couleur-noire",
      hiragana: "nous-aimons-la-couleur-noire",
      meaning: "we like the color black",
      audio: {
        daughter: "audio/sentence6.wav",
        me: "audio/sentence6.wav"
      }
    }
  ]
},










{
  id: "l1-fr-49",
  meaning: "who is it?",
  level: 1,

  chunks: [
    {
      romaji: "qui",
      hiragana: "qui",
      meaning: "who",
      audio: {
        daughter: "audio/qui.wav",
        me: "audio/qui.wav"
      }
    },

    {
      romaji: "est-ce",
      hiragana: "est-ce",
      meaning: "is it",
      audio: {
        daughter: "audio/est-ce.wav",
        me: "audio/est-ce.wav"
      }
    }
  ]
},









{
  id: "l1-fr-50",
  meaning: "when is it?",
  level: 1,

  chunks: [
    {
      romaji: "quand",
      hiragana: "quand",
      meaning: "when",
      audio: {
        daughter: "audio/quand.wav",
        me: "audio/quand.wav"
      }
    },

    {
      romaji: "est-ce",
      hiragana: "est-ce",
      meaning: "is it",
      audio: {
        daughter: "audio/est-ce.wav",
        me: "audio/est-ce.wav"
      }
    },

    {
      romaji: "quand-est-ce",
      hiragana: "quand-est-ce",
      meaning: "when is it?",
      audio: {
        daughter: "audio/quand-est-ce.wav",
        me: "audio/quand-est-ce.wav"
      }
    }
  ]
},











{
  id: "l1-fr-51",
  meaning: "open the door",
  level: 1,

  chunks: [
    {
      romaji: "ouvrir",
      hiragana: "ouvrir",
      meaning: "to open",
      audio: {
        daughter: "audio/ouvrir.wav",
        me: "audio/ouvrir.wav"
      }
    },

    {
      romaji: "la",
      hiragana: "la",
      meaning: "the (feminine)",
      audio: {
        daughter: "audio/la.wav",
        me: "audio/la.wav"
      }
    },

    {
      romaji: "porte",
      hiragana: "porte",
      meaning: "door",
      audio: {
        daughter: "audio/porte.wav",
        me: "audio/porte.wav"
      }
    }
  ]
},












{
  id: "l1-fr-52",
  meaning: "close the door",
  level: 1,

  chunks: [
    {
      romaji: "ferme",
      hiragana: "ferme",
      meaning: "close (command)",
      audio: {
        daughter: "audio/ferme.wav",
        me: "audio/ferme.wav"
      }
    },

    {
      romaji: "la",
      hiragana: "la",
      meaning: "the (feminine)",
      audio: {
        daughter: "audio/la.wav",
        me: "audio/la.wav"
      }
    },

    {
      romaji: "porte",
      hiragana: "porte",
      meaning: "door",
      audio: {
        daughter: "audio/porte.wav",
        me: "audio/porte.wav"
      }
    }
  ]
},









{
  id: "l1-fr-53",
  meaning: "water the plants",
  level: 1,

  chunks: [
    {
      romaji: "arrosez",
      hiragana: "arrosez",
      meaning: "water (command, vous form)",
      audio: {
        daughter: "audio/arrosez.wav",
        me: "audio/arrosez.wav"
      }
    },

    {
      romaji: "les",
      hiragana: "les",
      meaning: "the (plural)",
      audio: {
        daughter: "audio/les.wav",
        me: "audio/les.wav"
      }
    },

    {
      romaji: "plantes",
      hiragana: "plantes",
      meaning: "plants",
      audio: {
        daughter: "audio/plantes.wav",
        me: "audio/plantes.wav"
      }
    }
  ],

  fullAudio: {
    daughter: "audio/sentences/sentence7.wav",
    me:       "audio/sentences/sentence7.wav"
  }
},











{
  id: "l1-fr-54",
  meaning: "take out the trash",
  level: 1,

  chunks: [
    {
      romaji: "sortez",
      hiragana: "sortez",
      meaning: "take out / remove (command, vous form)",
      audio: {
        daughter: "audio/sortez.wav",
        me: "audio/sortez.wav"
      }
    },

    {
      romaji: "les",
      hiragana: "les",
      meaning: "the (plural)",
      audio: {
        daughter: "audio/les.wav",
        me: "audio/les.wav"
      }
    },

    {
      romaji: "poubelles",
      hiragana: "poubelles",
      meaning: "trash bins",
      audio: {
        daughter: "audio/poubelles.wav",
        me: "audio/poubelles.wav"
      }
    }
  ]
},










{
  id: "l1-fr-55",
  meaning: "to take out the trash",
  level: 1,

  chunks: [
    {
      romaji: "sortir",
      hiragana: "sortir",
      meaning: "to take out / to remove",
      audio: {
        daughter: "audio/sortir.wav",
        me: "audio/sortir.wav"
      }
    },

    {
      romaji: "les",
      hiragana: "les",
      meaning: "the (plural)",
      audio: {
        daughter: "audio/les.wav",
        me: "audio/les.wav"
      }
    },

    {
      romaji: "poubelles",
      hiragana: "poubelles",
      meaning: "trash bins",
      audio: {
        daughter: "audio/poubelles.wav",
        me: "audio/poubelles.wav"
      }
    }
  ]
},















{
  id: "l1-fr-56",
  meaning: "I brush my teeth",
  level: 1,

  chunks: [
    {
      romaji: "je",
      hiragana: "je",
      meaning: "I",
      audio: {
        daughter: "audio/je.wav",
        me: "audio/je.wav"
      }
    },

    {
      romaji: "me",
      hiragana: "me",
      meaning: "myself",
      audio: {
        daughter: "audio/me.wav",
        me: "audio/me.wav"
      }
    },

    {
      romaji: "brosse",
      hiragana: "brosse",
      meaning: "brush (I form)",
      audio: {
        daughter: "audio/brosse.wav",
        me: "audio/brosse.wav"
      }
    },

    {
      romaji: "les",
      hiragana: "les",
      meaning: "the (plural)",
      audio: {
        daughter: "audio/les.wav",
        me: "audio/les.wav"
      }
    },

    {
      romaji: "dents",
      hiragana: "dents",
      meaning: "teeth",
      audio: {
        daughter: "audio/dents.wav",
        me: "audio/dents.wav"
      }
    }
  ],

  fullAudio: {
    daughter: "audio/sentences/sentence8.wav",
    me:       "audio/sentences/sentence8.wav"
  }
},













{
  id: "l1-fr-57",
  meaning: "you pet the dog",
  level: 1,

  chunks: [
    {
      romaji: "tu",
      hiragana: "tu",
      meaning: "you (singular)",
      audio: {
        daughter: "audio/tu.wav",
        me: "audio/tu.wav"
      }
    },

    {
      romaji: "caresses",
      hiragana: "caresses",
      meaning: "pet / caress (you form)",
      audio: {
        daughter: "audio/caresses.wav",
        me: "audio/caresses.wav"
      }
    },

    {
      romaji: "le",
      hiragana: "le",
      meaning: "the (masculine)",
      audio: {
        daughter: "audio/le.wav",
        me: "audio/le.wav"
      }
    },

    {
      romaji: "chien",
      hiragana: "chien",
      meaning: "dog",
      audio: {
        daughter: "audio/chien.wav",
        me: "audio/chien.wav"
      }
    }
  ],

  fullAudio: {
    daughter: "audio/sentences/sentence9.wav",
    me:       "audio/sentences/sentence9.wav"
  }
},











{
  "id": "l1-fr-58",
  "meaning": "I am going to pet the dog",
  "level": 1,

  "chunks": [
    {
      "romaji": "je",
      "hiragana": "je",
      "meaning": "I",
      "audio": {
        "daughter": "audio/je.wav",
        "me": "audio/je.wav"
      }
    },

    {
      "romaji": "vais",
      "hiragana": "vais",
      "meaning": "am going to",
      "audio": {
        "daughter": "audio/vais.wav",
        "me": "audio/vais.wav"
      }
    },

    {
      "romaji": "caresser",
      "hiragana": "caresser",
      "meaning": "to pet / to caress",
      "audio": {
        "daughter": "audio/caresser.wav",
        "me": "audio/caresser.wav"
      }
    },

    {
      "romaji": "le",
      "hiragana": "le",
      "meaning": "the (masculine)",
      "audio": {
        "daughter": "audio/le.wav",
        "me": "audio/le.wav"
      }
    },

    {
      "romaji": "chien",
      "hiragana": "chien",
      "meaning": "dog",
      "audio": {
        "daughter": "audio/chien.wav",
        "me": "audio/chien.wav"
      }
    }
  ],

  "fullAudio": {
    "daughter": "audio/sentences/sentence10.wav",
    "me":       "audio/sentences/sentence10.wav"
  }
},










{
  "id": "l1-fr-59",
  "meaning": "I do the exercise",
  "level": 1,

  "chunks": [
    {
      "romaji": "je",
      "hiragana": "je",
      "meaning": "I",
      "audio": {
        "daughter": "audio/je.wav",
        "me": "audio/je.wav"
      }
    },

    {
      "romaji": "fais",
      "hiragana": "fais",
      "meaning": "do",
      "audio": {
        "daughter": "audio/fais.wav",
        "me": "audio/fais.wav"
      }
    },

    {
      "romaji": "de",
      "hiragana": "de",
      "meaning": "of",
      "audio": {
        "daughter": "audio/de.wav",
        "me": "audio/de.wav"
      }
    },

    {
      "romaji": "exercice",
      "hiragana": "exercice",
      "meaning": "exercise",
      "audio": {
        "daughter": "audio/exercice.wav",
        "me": "audio/exercice.wav"
      }
    },

    {
      "romaji": "de l'exercice",
      "hiragana": "de l'exercice",
      "meaning": "of the exercise",
      "audio": {
        "daughter": "audio/de-l-exercice.wav",
        "me": "audio/de-l-exercice.wav"
      }
    }
  ],

  "fullAudio": {
    "daughter": "audio/sentences/sentence11.wav",
    "me":       "audio/sentences/sentence11.wav"
  }
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
btn.style.top = "70px";      // lower it under the score
btn.style.left = "10px";     // move to left side
btn.style.right = "";        // remove right alignment

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
  console.log("🔊 [L1] playChunksInOrder START");
  console.log("🔊 [L1] chunkList =", chunkList);

  // If no chunks, bail early
  if (!chunkList || !chunkList.length) {
    console.warn("⚠️ [L1] No chunk files provided.");
    if (typeof onComplete === "function") onComplete();
    return;
  }

  // Reset cancel + increment generation
  window.audioCancelToken.cancel = false;
  window.audioGeneration++;
  const myGen = window.audioGeneration;

  let index = 0;

  function playNext() {
    console.log(`🎵 [L1] playNext() index=${index}`);

    // Guard: audio canceled or generation mismatch
    if (window.audioCancelToken.cancel) {
      console.warn("⛔ [L1] audioCancelToken.cancel === true → aborting audio.");
      return;
    }
    if (myGen !== window.audioGeneration) {
      console.warn("⛔ [L1] audioGeneration mismatch → aborting audio.");
      return;
    }

    // Finished all chunks
    if (index >= chunkList.length) {
      console.log("🏁 [L1] All chunks finished.");
      if (typeof onComplete === "function") onComplete();
      return;
    }

    const file = chunkList[index];
    console.log(`🎧 [L1] Loading audio file:`, file);

    if (!file) {
      console.error("❌ [L1] Chunk file is undefined → skipping.");
      index++;
      playNext();
      return;
    }

    const audio = new Audio(file);
    window.screen2Audio = audio;

    // Event logs
    audio.onplay = () => {
      console.log(`▶️ [L1] onplay fired for: ${file}`);
    };

    audio.onended = () => {
      console.log(`⏹️ [L1] onended fired for: ${file}`);
      if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) {
        console.warn("⛔ [L1] Guard triggered inside onended → abort.");
        return;
      }
      index++;
      playNext();
    };

    audio.onerror = (err) => {
      console.error(`💥 [L1] onerror fired for: ${file}`, err);
      if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) {
        console.warn("⛔ [L1] Guard triggered inside onerror → abort.");
        return;
      }
      index++;
      playNext();
    };

    // Attempt playback
    audio.play()
      .then(() => {
        console.log(`🔈 [L1] play() resolved for: ${file}`);
      })
      .catch(err => {
        console.error(`🚫 [L1] play() rejected for: ${file}`, err);
        if (window.audioCancelToken.cancel || myGen !== window.audioGeneration) {
          console.warn("⛔ [L1] Guard triggered inside play().catch → abort.");
          return;
        }
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

function restartLevel1Session() {
  // 1. Kill ALL audio immediately
  stopAllAudio();

  // 2. Kill ALL pending timeouts (Level 1 + Level 2 + audio)
  const highestTimeout = setTimeout(() => {});
  for (let i = 0; i < highestTimeout; i++) {
    clearTimeout(i);
  }

  // 3. Kill ALL pending intervals (timers, countdowns)
  const highestInterval = setInterval(() => {});
  for (let i = 0; i < highestInterval; i++) {
    clearInterval(i);
  }

  // 4. Reset audio cancellation
  window.audioCancelToken.cancel = true;
  window.audioCancelToken = { cancel: false };

  // 5. Re‑attach Level 1 isolated handler (CRITICAL)
  const btn = document.querySelector('.levelBtn[data-level="1"]');
  if (btn) {
    btn.removeEventListener("click", level1IsolatedHandler);
    btn.addEventListener("click", level1IsolatedHandler);
  }

  // 6. Reset Level 1 session state
  level1Round = 0;
  level1Score = 0;
  correctDrops = 0;

  if (window.L1) {
    L1.state = "idle";
    L1.currentSentenceIndex = 0;
    L1.sessionSentencesCompleted = {};
    L1.roundHistory = [];

    // CRITICAL: restore Level‑1 sentence list
    L1.sentences = sentences.filter(s => s.level === 1);
  }

  // 7. Clear Level 1 timer if it exists
  if (window.level1Timer) {
    clearInterval(window.level1Timer);
    window.level1Timer = null;
  }

  // 8. Reset UI counters
  const roundsEl = document.getElementById("sessionRounds");
  const scoreEl = document.getElementById("sessionScore");
  const dropsEl = document.getElementById("sessionDrops");

  if (roundsEl) roundsEl.textContent = "0";
  if (scoreEl) scoreEl.textContent = "0";
  if (dropsEl) dropsEl.textContent = "0";

  // 9. Launch Level 1 fresh
  launchLevel(1, level1);
}















/*------------------------------------------------------------------------------
Score summary screen
--------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------
Score summary screen
--------------------------------------------------------------------------------*/
function showLevel1FinalSummary() {
  stopAllAudio();

  window.audioCancelToken.cancel = true;

  showScreen("screen4");

  // ⭐ Hide restart button (French should match Japanese behavior)
  const restartBtn = document.getElementById("restartBtn");
  if (restartBtn) restartBtn.style.display = "none";

  // Lifetime progress bar
  if (window.L1 && typeof L1.renderProgress === "function") {
    L1.renderProgress("screen4");
  }

  // Session-only stats
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





document.getElementById("restartBtn").onclick = () => {
  level1Round = 0;
  level1Score = 0;
  correctDrops = 0;

  window.currentLevel = 1;
  showScreen("screen1");
};

document.getElementById("backToLevelsBtn").onclick = () => {
  showScreen("screen0");
};







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
 function level1IsolatedHandler() {
  if (window.currentScreen && window.currentScreen !== "screen0") return;
  if (window.currentLevel !== 0) return;

  window.currentLevel = 1;
  console.log("[Level 1] Isolated handler fired");
  launchLevel(1, level1);
}

// ⭐ Make handler global so restart can remove it
window.level1IsolatedHandler = level1IsolatedHandler;

const btn = document.querySelector('.levelBtn[data-level="1"]');
btn?.addEventListener("click", window.level1IsolatedHandler);



/*

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













  // ---------------------------------------------------------
  // LEVEL 4
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 4 (GATED: BASIC OR PREMIUM, ISOLATED, CLEAN)
// ---------------------------------------------------------
const level4Btn = document.getElementById("level4Btn");

if (!level4Btn) {
  console.error("Level 4 button not found in DOM");
} else {
  level4Btn.addEventListener("click", async () => {
    console.log("[Level 4] Gated handler fired");

    const user = window.currentUser;
    if (!user) {
      alert("You must be logged in to access Level 4.");
      window.location.href = "blog-podcast.html";
      return;
    }

    // Instant unlock if success.html already set the flag
    if (
      localStorage.getItem("basicUnlock") === "true" ||
      localStorage.getItem("premiumUnlock") === "true"
    ) {
      console.log("Unlock flag detected — Level 4 unlocked.");
      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L4")?.classList.remove("hidden");
      L4.start();
      return;
    }

    // Otherwise check real membership in Supabase
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    console.log("Membership result (L4):", { data, error });

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;

    const allowed = [
      "basic-monthly",
      "basic-yearly",
      "premium-monthly",
      "premium-yearly"
    ];

    if (status === "active" && allowed.includes(plan)) {
      console.log("User has Basic or Premium — unlocking Level 4.");

      // Cache unlock for instant future access
      if (plan.startsWith("basic")) {
        localStorage.setItem("basicUnlock", "true");
      } else {
        localStorage.setItem("premiumUnlock", "true");
      }

      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L4")?.classList.remove("hidden");
      L4.start();
      return;
    }

    alert("Level 4 is locked. Basic or Premium required.");
    window.location.href = "membership.html";
  });
}















  // ---------------------------------------------------------
  // LEVEL 5
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 5 (GATED: BASIC OR PREMIUM, ISOLATED, CLEAN)
// ---------------------------------------------------------
const level5Btn = document.getElementById("level5Btn");

if (!level5Btn) {
  console.error("Level 5 button not found in DOM");
} else {
  level5Btn.addEventListener("click", async () => {
    console.log("[Level 5] Gated handler fired");

    const user = window.currentUser;
    if (!user) {
      alert("You must be logged in to access Level 5.");
      window.location.href = "blog-podcast.html";
      return;
    }

    // Instant unlock if success.html already set the flag
    if (
      localStorage.getItem("basicUnlock") === "true" ||
      localStorage.getItem("premiumUnlock") === "true"
    ) {
      console.log("Unlock flag detected — Level 5 unlocked.");
      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L5")?.classList.remove("hidden");
      L5.start();
      return;
    }

    // Otherwise check real membership in Supabase
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    console.log("Membership result (L5):", { data, error });

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;

    const allowed = [
      "basic-monthly",
      "basic-yearly",
      "premium-monthly",
      "premium-yearly"
    ];

    if (status === "active" && allowed.includes(plan)) {
      console.log("User has Basic or Premium — unlocking Level 5.");

      // Cache unlock for instant future access
      if (plan.startsWith("basic")) {
        localStorage.setItem("basicUnlock", "true");
      } else {
        localStorage.setItem("premiumUnlock", "true");
      }

      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L5")?.classList.remove("hidden");
      L5.start();
      return;
    }

    alert("Level 5 is locked. Basic or Premium required.");
    window.location.href = "membership.html";
  });
}





















  // ---------------------------------------------------------
  // LEVEL 6
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 6 (GATED: BASIC OR PREMIUM, ISOLATED, CLEAN)
// ---------------------------------------------------------
const level6Btn = document.getElementById("level6Btn");

if (!level6Btn) {
  console.error("Level 6 button not found in DOM");
} else {
  level6Btn.addEventListener("click", async () => {
    console.log("[Level 6] Gated handler fired");

    const user = window.currentUser;
    if (!user) {
      alert("You must be logged in to access Level 6.");
      window.location.href = "blog-podcast.html";
      return;
    }

    // Instant unlock if success.html already set the flag
    if (
      localStorage.getItem("basicUnlock") === "true" ||
      localStorage.getItem("premiumUnlock") === "true"
    ) {
      console.log("Unlock flag detected — Level 6 unlocked.");
      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L6")?.classList.remove("hidden");
      L6.start();
      return;
    }

    // Otherwise check real membership in Supabase
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    console.log("Membership result (L6):", { data, error });

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;

    const allowed = [
      "basic-monthly",
      "basic-yearly",
      "premium-monthly",
      "premium-yearly"
    ];

    if (status === "active" && allowed.includes(plan)) {
      console.log("User has Basic or Premium — unlocking Level 6.");

      // Cache unlock for instant future access
      if (plan.startsWith("basic")) {
        localStorage.setItem("basicUnlock", "true");
      } else {
        localStorage.setItem("premiumUnlock", "true");
      }

      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L6")?.classList.remove("hidden");
      L6.start();
      return;
    }

    alert("Level 6 is locked. Basic or Premium required.");
    window.location.href = "membership.html";
  });
}























  // ---------------------------------------------------------
  // LEVEL 7
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 7 (GATED: BASIC OR PREMIUM, ISOLATED, CLEAN)
// ---------------------------------------------------------
const level7Btn = document.getElementById("level7Btn");

if (!level7Btn) {
  console.error("Level 7 button not found in DOM");
} else {
  level7Btn.addEventListener("click", async () => {
    console.log("[Level 7] Gated handler fired");

    const user = window.currentUser;
    if (!user) {
      alert("You must be logged in to access Level 7.");
      window.location.href = "blog-podcast.html";
      return;
    }

    // Instant unlock if success.html already set the flag
    if (
      localStorage.getItem("basicUnlock") === "true" ||
      localStorage.getItem("premiumUnlock") === "true"
    ) {
      console.log("Unlock flag detected — Level 7 unlocked.");
      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L7")?.classList.remove("hidden");
      L7.start();
      return;
    }

    // Otherwise check real membership in Supabase
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    console.log("Membership result (L7):", { data, error });

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;

    const allowed = [
      "basic-monthly",
      "basic-yearly",
      "premium-monthly",
      "premium-yearly"
    ];

    if (status === "active" && allowed.includes(plan)) {
      console.log("User has Basic or Premium — unlocking Level 7.");

      // Cache unlock for instant future access
      if (plan.startsWith("basic")) {
        localStorage.setItem("basicUnlock", "true");
      } else {
        localStorage.setItem("premiumUnlock", "true");
      }

      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L7")?.classList.remove("hidden");
      L7.start();
      return;
    }

    alert("Level 7 is locked. Basic or Premium required.");
    window.location.href = "membership.html";
  });
}













  // ---------------------------------------------------------
  // LEVEL 8
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 8 (GATED: BASIC OR PREMIUM, ISOLATED, CLEAN)
// ---------------------------------------------------------
const level8Btn = document.getElementById("level8Btn");

if (!level8Btn) {
  console.error("Level 8 button not found in DOM");
} else {
  level8Btn.addEventListener("click", async () => {
    console.log("[Level 8] Gated handler fired");

    const user = window.currentUser;
    if (!user) {
      alert("You must be logged in to access Level 8.");
      window.location.href = "blog-podcast.html";
      return;
    }

    // Instant unlock if success.html already set the flag
    if (
      localStorage.getItem("basicUnlock") === "true" ||
      localStorage.getItem("premiumUnlock") === "true"
    ) {
      console.log("Unlock flag detected — Level 8 unlocked.");
      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L8")?.classList.remove("hidden");
      L8.start();
      return;
    }

    // Otherwise check real membership in Supabase
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    console.log("Membership result (L8):", { data, error });

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;

    const allowed = [
      "basic-monthly",
      "basic-yearly",
      "premium-monthly",
      "premium-yearly"
    ];

    if (status === "active" && allowed.includes(plan)) {
      console.log("User has Basic or Premium — unlocking Level 8.");

      // Cache unlock for instant future access
      if (plan.startsWith("basic")) {
        localStorage.setItem("basicUnlock", "true");
      } else {
        localStorage.setItem("premiumUnlock", "true");
      }

      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L8")?.classList.remove("hidden");
      L8.start();
      return;
    }

    alert("Level 8 is locked. Basic or Premium required.");
    window.location.href = "membership.html";
  });
}















  // ---------------------------------------------------------
  // LEVEL 9
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 9 (GATED, ISOLATED, CLEAN)
// ---------------------------------------------------------
const level9Btn = document.getElementById("level9Btn");

if (!level9Btn) {
  console.error("Level 9 button not found in DOM");
} else {
  level9Btn.addEventListener("click", async () => {
    console.log("[Level 9] Gated handler fired");

    const user = window.currentUser;
    if (!user) {
      alert("You must be logged in to access Level 9.");
      window.location.href = "blog-podcast.html";
      return;
    }

    // Instant unlock if success.html already set the flag
    if (localStorage.getItem("premiumUnlock") === "true") {
      console.log("premiumUnlock flag detected — Level 9 unlocked.");
      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L9")?.classList.remove("hidden");
      L9.start();
      return;
    }

    // Otherwise check real membership in Supabase
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    console.log("Membership result (L9):", { data, error });

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;
    const allowed = ["premium-monthly", "premium-yearly", "lifetime"];

    if (status === "active" && allowed.includes(plan)) {
      console.log("User already has premium — unlocking Level 9.");

      localStorage.setItem("premiumUnlock", "true");

      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L9")?.classList.remove("hidden");
      L9.start();
      return;
    }

    alert("Level 9 is locked. Premium required.");
    window.location.href = "membership.html";
  });
}















  // ---------------------------------------------------------
  // LEVEL 10
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 10 (GATED, ISOLATED, CLEAN)
// ---------------------------------------------------------
const level10Btn = document.getElementById("level10Btn");

if (!level10Btn) {
  console.error("Level 10 button not found in DOM");
} else {
  level10Btn.addEventListener("click", async () => {
    console.log("[Level 10] Gated handler fired");

    const user = window.currentUser;
    if (!user) {
      alert("You must be logged in to access Level 10.");
      window.location.href = "blog-podcast.html";
      return;
    }

    // Instant unlock if success.html already set the flag
    if (localStorage.getItem("premiumUnlock") === "true") {
      console.log("premiumUnlock flag detected — Level 10 unlocked.");
      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L10")?.classList.remove("hidden");
      L10.start();
      return;
    }

    // Otherwise check real membership in Supabase
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    console.log("Membership result (L10):", { data, error });

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;
    const allowed = ["premium-monthly", "premium-yearly", "lifetime"];

    if (status === "active" && allowed.includes(plan)) {
      console.log("User already has premium — unlocking Level 10.");

      localStorage.setItem("premiumUnlock", "true");

      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("screen2L10")?.classList.remove("hidden");
      L10.start();
      return;
    }

    alert("Level 10 is locked. Premium required.");
    window.location.href = "membership.html";
  });
}

























  // ---------------------------------------------------------
  // LEVEL 11 (custom)
  // ---------------------------------------------------------
  // ---------------------------------------------------------
// LEVEL 11 (GATED, ISOLATED, CLEAN)
// ---------------------------------------------------------
const level11Btn = document.getElementById("level11Btn");

if (!level11Btn) {
  console.error("Level 11 button not found in DOM");
} else {
  level11Btn.addEventListener("click", async () => {
    console.log("[Level 11] Gated handler fired");

    const user = window.currentUser;
    if (!user) {
      alert("You must be logged in to access Level 11.");
      window.location.href = "blog-podcast.html";
      return;
    }

    // Instant unlock if success.html already set the flag
    if (localStorage.getItem("premiumUnlock") === "true") {
      console.log("premiumUnlock flag detected — Level 11 unlocked.");
      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("level11Screen")?.classList.remove("hidden");
      startLevel11(defaultScenario);
      return;
    }

    // Otherwise check real membership in Supabase
    const { data, error } = await sb
      .from("profiles")
      .select("membership_status, membership_plan")
      .eq("email", user.email)
      .maybeSingle();

    console.log("Membership result (L11):", { data, error });

    if (error) {
      console.error("Membership query error:", error);
      alert("Membership check failed. Please try again.");
      return;
    }

    const status = data?.membership_status;
    const plan = data?.membership_plan;
    const allowed = ["premium-monthly", "premium-yearly", "lifetime"];

    if (status === "active" && allowed.includes(plan)) {
      console.log("User already has premium — unlocking Level 11.");

      localStorage.setItem("premiumUnlock", "true");

      document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
      document.getElementById("level11Screen")?.classList.remove("hidden");
      startLevel11(defaultScenario);
      return;
    }

    alert("Level 11 is locked. Premium required.");
    window.location.href = "membership.html";
  });
}





















  // ---------------------------------------------------------
  // LEVEL 12 (GATED, ISOLATED, CLEAN)
  // ---------------------------------------------------------
  const level12Btn = document.getElementById("level12Btn");

  if (!level12Btn) {
    console.error("Level 12 button not found in DOM");
  } else {
    level12Btn.addEventListener("click", async () => {
      console.log("[Level 12] Gated handler fired");

      const user = window.currentUser;
      if (!user) {
        alert("You must be logged in to access Level 12.");
        window.location.href = "blog-podcast.html";
        return;
      }

      // Instant unlock if success.html already set the flag
      if (localStorage.getItem("premiumUnlock") === "true") {
        console.log("premiumUnlock flag detected — Level 12 unlocked.");
        document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
        document.getElementById("level12Screen")?.classList.remove("hidden");
        startLevel12();
        return;
      }

      // Otherwise check real membership in Supabase
      const { data, error } = await sb
        .from("profiles")
        .select("membership_status, membership_plan")
        .eq("email", user.email)
        .maybeSingle();

      console.log("Membership result:", { data, error });

      if (error) {
        console.error("Membership query error:", error);
        alert("Membership check failed. Please try again.");
        return;
      }

      const status = data?.membership_status;
      const plan = data?.membership_plan;
      const allowed = ["premium-monthly", "premium-yearly", "lifetime"];

      if (status === "active" && allowed.includes(plan)) {
        console.log("User already has premium — unlocking Level 12.");

        localStorage.setItem("premiumUnlock", "true");

        document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
        document.getElementById("level12Screen")?.classList.remove("hidden");
        startLevel12();
        return;
      }

      alert("Level 12 is locked. Premium required.");
      window.location.href = "membership.html";
    });





  }

  */

});

